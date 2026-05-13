/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_02_02b.xml 96083 6cbe46084c919ccbaf66fc9ad35cfb331ee445bc9a27d90eef3485a746cd66dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'dsName',name:'dsName',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_agency',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text',length:'4'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mcht',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text',length:'4'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_berthPerPier',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text',length:'4'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text',length:'8'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_op101Master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'portNm',name:'목적지',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'선석명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'alngpierDt',name:'접안일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'alngpierHh',name:'접안시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'offpierDt',name:'이안일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'offpierHh',name:'이안시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'stvStDt',name:'하역시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'stvStHh',name:'하역시작시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'stvCompleteDt',name:'하역완료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'stvCompleteHh',name:'하역완료시간',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'stvChrgClsCd',name:'하역담당구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'터미널항차',dataType:'text',length:'7'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'dchrDropRgn',name:'양적하지',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'agency',name:'대리점',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'agencyCd',name:'대리점코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'mcht',name:'화주',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'화주코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'scheduleYn',name:'선석스케줄등록여부',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'callYy',name:'연도',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'callNo',name:'항차',dataType:'text',length:'40'}},{T:1,N:'w2:column',A:{id:'inoutPortClsCd',name:'내외항선구분코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'inoutPortClsNm',name:'내외항선구분명',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'createYn',name:'신규여부',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_op122detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'shpCoService',name:'선사서비스',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'repKcgCd',name:'대표화종',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'stvOdrNo',name:'#N/A',dataType:'text',length:'13'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_op122detail_import',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'shpCoService',name:'선사서비스',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'repKcgCd',name:'대표화종',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'stvOdrNo',name:'#N/A',dataType:'text',length:'13'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_op122detail_export',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'shpCoService',name:'선사서비스',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'repKcgCd',name:'대표화종',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'화종명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'stvOdrNo',name:'#N/A',dataType:'text',length:'13'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_agency_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_mcht_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_combo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_combo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCarryingVesselScheduleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_op101Master","key":"OUT_DS1"},{"id":"ds_op122detail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_op101Master","key":"OUT_DS1"},{"id":"ds_op122detail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.rscconfirm.transrscconfirm.RegistCarryingVesselScheduleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_op101Master","key":"IN_DS1"},{"id":"ds_op122detail_import","key":"IN_DS2"},{"id":"ds_op122detail_export","key":"IN_DS3"},{"id":"ds_op101Master","key":"OUT_DS1"},{"id":"ds_op122detail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_op101Master","key":"OUT_DS1"},{"id":"ds_op122detail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.op.rscconfirm.transrscconfirm.ChangeCarryingVesselScheduleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_op101Master","key":"IN_DS1"},{"id":"ds_op122detail_import","key":"IN_DS2"},{"id":"ds_op122detail_export","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.op.rscconfirm.transrscconfirm.DeleteCarryingVesselScheduleCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_op101Master","key":"IN_DS1"},{"id":"ds_op122detail_import","key":"IN_DS2"},{"id":"ds_op122detail_export","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_agency',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_agency_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mcht',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_mcht_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.cvsslMgntNo = $c.data.getParameter($p, "cvsslMgntNo") == null ? "" : $c.data.getParameter($p, "cvsslMgntNo");
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.lobranCd = scwin.memInfo.loUpperLobranCd == null ? "" : scwin.memInfo.loUpperLobranCd;
  // scwin.lobranCd = "4AA";
  scwin.validSaveOrUpdate = 0; //전역변수-save인지 update인지 구분해서 cmd호출 0=save, 1=update

  scwin.scheduleYn = "N";
  scwin.callYy = "";
  scwin.callNo = "";

  //공통코드 조회
  const codeOptions = [{
    grpCd: "OP103",
    compID: "acb_inOutPortCls"
  }, {
    grpCd: "OP193",
    compID: "acb_stvChrgCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableObjects($p, [tbl_master, tbl_detail, cbx_create]);
  $c.gus.cfDisableObjects($p, [udc_conVsslCd, ed_conShpCoPortCnt]);
  ed_conShpCoPortCnt.focus();
  if (!$c.gus.cfIsNull($p, scwin.cvsslMgntNo)) {
    ed_conCvsslMgntNo.setValue(scwin.cvsslMgntNo);
    scwin.f_retrieve();
  }

  // scwin.f_resetAgency();
  ds_agency_search.set("sysCd", "StvWrkEBC");
  ds_agency_search.set("queryId", "retrieveAgencyCd");
  ds_agency_search.set("param1", scwin.lobranCd);
  ds_agency_search.set("param2", 1);
  var rs = await $c.sbm.execute($p, sbm_agency);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_agency.setJSON(rs.responseJSON.GAUCE);
  }
  // scwin.f_resetMcht();
  ds_mcht_search.set("sysCd", "StvWrkEBC");
  ds_mcht_search.set("queryId", "retrieveAgencyCd");
  ds_mcht_search.set("param1", scwin.lobranCd);
  ds_mcht_search.set("param2", 2);
  var rs = await $c.sbm.execute($p, sbm_mcht);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_mcht.setJSON(rs.responseJSON.GAUCE);
  }
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  rd_inQryCond.setValue("0");
};

//-------------------------------------------------------------------------
// 대리점 조회
//-------------------------------------------------------------------------
scwin.f_resetAgency = function () {
  let actionUrl = "/cm.zz.RetrieveComboCMD.do" + "?sysCd=StvWrkEBC" + "&queryId=retrieveAgencyCd" + "&param1=" + scwin.lobranCd + "&param2=1";
  const searchCodeGrpOption = {
    id: "sbm_comboAgency",
    action: actionUrl,
    target: 'data:json,{"id":"ds_agency","key":"GAUCE"}',
    submitDoneHandler: scwin.callBackComboAgency,
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, searchCodeGrpOption);
};
scwin.callBackComboAgency = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  //강제 값 설정
  if (ds_agency.getTotalRow() == 0) {
    for (var i = 0; i < 10; i++) {
      ds_agency.insertRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// 화주 조회
//-------------------------------------------------------------------------
scwin.f_resetMcht = function () {
  let actionUrl = "/cm.zz.RetrieveComboCMD.do" + "?sysCd=StvWrkEBC" + "&queryId=retrieveAgencyCd" + "&param1=" + scwin.lobranCd + "&param2=2";
  const searchCodeGrpOption = {
    id: "sbm_comboMcht",
    action: actionUrl,
    target: 'data:json,{"id":"ds_mcht","key":"GAUCE"}',
    submitDoneHandler: scwin.callBackComboMcht,
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, searchCodeGrpOption);
};
scwin.callBackComboMcht = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  //강제 값 설정
  if (ds_mcht.getTotalRow() == 0) {
    for (var i = 0; i < 10; i++) {
      ds_mcht.insertJSON(i, {
        "code": i
      });
    }
  }
};

//-------------------------------------------------------------------------
// 부두별 선석 조회
//-------------------------------------------------------------------------7
scwin.f_resetBerthPerPier = function (param1) {
  let actionUrl = "/cm.zz.RetrieveComboCMD.do" + "?sysCd=CommonEBC" + "&queryId=retrieveSysCdTest_berthCd" + "&param1=" + param1;
  const searchCodeGrpOption = {
    id: "sbm_comboBerth",
    action: actionUrl,
    target: 'data:json,{"id":"ds_berthPerPier","key":"GAUCE"}',
    submitDoneHandler: scwin.callBackComboBerth,
    isProcessMsg: false
  };
  $c.sbm.executeDynamic($p, searchCodeGrpOption);
};
scwin.callBackComboBerth = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  //강제 값 설정
  if (ds_berthPerPier.getTotalRow() == 0) {
    for (var i = 0; i < 10; i++) {
      ds_berthPerPier.insertRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search, [rd_inQryCond, udc_conVsslCd]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  if (ed_conCvsslMgntNo.getValue() == "" && (ed_conVsslCd.getValue() == "" || ed_conShpCoPortCnt.getValue() == "")) {
    await $c.win.alert($p, "조회방법 : 1.본선관리번호 또는 2.본선+선사항차 를 조회조건으로 필수 입력하세요.");
    return;
  } else {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_create = async function () {
  //신규버튼을 누르면 저장,업데이트 구분자를 저장으로 셋팅
  scwin.validSaveOrUpdate = 0;
  ds_op101Master.removeAll();
  ds_op122detail_import.removeAll();
  ds_op122detail_export.removeAll();
  //ds_berthPerPier.removeAll();

  ds_op101Master.insertRow();
  ds_op122detail_import.insertRow();
  ds_op122detail_export.insertRow();
  ds_op101Master.setRowPosition(0);
  ds_op122detail_import.setRowPosition(0);
  ds_op122detail_export.setRowPosition(0);
  ds_op101Master.modifyRowStatus(0, "C");
  ds_op122detail_import.modifyRowStatus(0, "C");
  ds_op122detail_export.modifyRowStatus(0, "C");
  $c.gus.cfEnableObjects($p, [tbl_master, tbl_detail, cbx_create, ed_vsslCd, ed_vsslNm]);
  $c.gus.cfDisableObjects($p, [ed_impOdrNo, ed_expOdrNo, ed_stvImpOdrNo, ed_stvExpOdrNo]);
  $c.gus.cfInitObjects($p, tbl_master);
  $c.gus.cfInitObjects($p, tbl_detail);
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.scheduleYn = "N";
  scwin.callYy = "";
  scwin.callNo = "";
  rd_inQryCond.setValue("0");

  // scwin.f_resetAgency();
  ds_agency_search.set("sysCd", "StvWrkEBC");
  ds_agency_search.set("queryId", "retrieveAgencyCd");
  ds_agency_search.set("param1", "");
  ds_agency_search.set("param2", 1);
  var rs = await $c.sbm.execute($p, sbm_agency);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_agency.setJSON(rs.responseJSON.GAUCE);
  }
  // scwin.f_resetMcht();
  ds_mcht_search.set("sysCd", "StvWrkEBC");
  ds_mcht_search.set("queryId", "retrieveAgencyCd");
  ds_mcht_search.set("param1", "");
  ds_mcht_search.set("param2", 2);
  var rs = await $c.sbm.execute($p, sbm_mcht);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_mcht.setJSON(rs.responseJSON.GAUCE);
  }
  scwin.f_resetBerthPerPier();
  ds_op101Master.setCellData(0, "inoutPortClsCd", "IV");
  ds_op101Master.setCellData(0, "stvChrgClsCd", "C");
  ds_op122detail_import.setCellData(0, "impExpClsCd", "I");
  ds_op122detail_export.setCellData(0, "impExpClsCd", "O");
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_update = function () {
  //수정버튼을 누르면 update 구분자를 1로 셋팅
  scwin.validSaveOrUpdate = 1;
  if (ds_op122detail_import.getTotalRow() == 0) {
    ds_op122detail_import.insertRow();
  }
  if (ds_op122detail_export.getTotalRow() == 0) {
    ds_op122detail_export.insertRow();
  }
  $c.gus.cfEnableObjects($p, [tbl_master, tbl_detail]);
  if (ed_impQty.getValue() == "0") {
    ed_impQty.setValue("");
  }
  if (ed_impWt.getValue() == "0") {
    ed_impWt.setValue("");
  }
  if (ed_expQty.getValue() == "0") {
    ed_expQty.setValue("");
  }
  if (ed_expWt.getValue() == "0") {
    ed_expWt.setValue("");
  }
  $c.gus.cfDisableObjects($p, [ed_vsslCd, ed_vsslNm, btn_conCvsslMgntNo, cbx_create]);
  $c.gus.cfDisableObjects($p, [ed_impOdrNo, ed_expOdrNo, ed_stvImpOdrNo, ed_stvExpOdrNo]);
  ed_portCd.focus();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  if (!$c.data.isModified($p, ds_op101Master) && !$c.data.isModified($p, ds_op122detail_import) && !$c.data.isModified($p, ds_op122detail_export)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선스케줄"]);
    return;
  }

  //필수입력항목 체크
  let chkVal = await $c.gus.cfValidate($p, [tbl_master]);
  if (!chkVal) return;

  //시간체크
  if (ica_arvDt.getValue() + ed_arvHh.getValue() != "") {
    if (ed_arvHh.getValue().substring(0, 2) > "23" || ed_arvHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "입항일자의 시간 설정이 올바르지 않습니다.");
      ed_arvHh.focus();
      return;
    }
  }
  if (ica_alngPierDt.getValue() + ed_alngPierHh.getValue() != "") {
    if (ed_alngPierHh.getValue().substring(0, 2) > "23" || ed_alngPierHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "접안일시의 시간 설정이 올바르지 않습니다.");
      ed_alngPierHh.focus();
      return;
    }
  }
  if (ica_stvStDt.getValue() + ed_stvStHh.getValue() != "") {
    if (ed_stvStHh.getValue().substring(0, 2) > "23" || ed_stvStHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "하역시작일시의 시간 설정이 올바르지 않습니다.");
      ed_stvStHh.focus();
      return;
    }
  }
  if (ica_closingTimeDt.getValue() + ed_closingTimeHh.getValue() != "") {
    if (ed_closingTimeHh.getValue().substring(0, 2) > "23" || ed_closingTimeHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "Closing일시의 시간 설정이 올바르지 않습니다.");
      ed_closingTimeHh.focus();
      return;
    }
    if (ica_arvIntendDt.getValue().trim() + ed_arvIntendHh.getValue().trim() > ica_closingTimeDt.getValue().trim() + ed_closingTimeHh.getValue().trim()) {
      await $c.win.alert($p, "입항예정일시는 Closing일시보다 이후여야 합니다.");
      ica_arvIntendDt.focus();
      return;
    }
  }
  if (ica_stvEndDt.getValue() + ed_stvEndHh.getValue() != "") {
    if (ed_stvEndHh.getValue().substring(0, 2) > "23" || ed_stvEndHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "하역종료일시의 시간 설정이 올바르지 않습니다.");
      ed_stvEndHh.focus();
      return;
    }
  }
  if (ica_offPierDt.getValue() + ed_offPierHh.getValue() != "") {
    if (ed_offPierHh.getValue().substring(0, 2) > "23" || ed_offPierHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "이안일시의 시간 설정이 올바르지 않습니다.");
      ed_offPierHh.focus();
      return;
    }
  }
  if (ica_dptDt.getValue() + ed_dptHh.getValue() != "") {
    if (ed_dptHh.getValue().substring(0, 2) > "23" || ed_dptHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "출항일시의 시간 설정이 올바르지 않습니다.");
      ed_dptHh.focus();
      return;
    }
  }
  if (ica_dptIntendDt.getValue() + ed_dptIntendHh.getValue() != "") {
    if (ed_dptIntendHh.getValue().substring(0, 2) > "23" || ed_dptIntendHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "출항일시의 시간 설정이 올바르지 않습니다.");
      ed_dptIntendHh.focus();
      return;
    }
  }
  if (ica_arvIntendDt.getValue() + ed_arvIntendHh.getValue() != "") {
    if (ed_arvIntendHh.getValue().substring(0, 2) > "23" || ed_arvIntendHh.getValue().substring(2, 4) > "59") {
      await $c.win.alert($p, "출항일시의 시간 설정이 올바르지 않습니다.");
      ed_arvIntendHh.focus();
      return;
    }
  }

  //일시 validation 체크
  if (ica_dptIntendDt.getValue() + ed_dptIntendHh.getValue() < ica_arvIntendDt.getValue() + ed_arvIntendHh.getValue()) {
    await $c.win.alert($p, "출항예정일시는 입항예정일시보다 이후여야 합니다.");
    ica_dptIntendDt.focus();
    return;
  }

  //일시 validation 체크
  var v_arvDtm1 = ica_arvDt.getValue().trim() + ed_arvHh.getValue().trim();
  var v_alngPierDtm1 = ica_alngPierDt.getValue().trim() + ed_alngPierHh.getValue().trim();
  var v_alngPierDtm2 = ica_alngPierDt.getValue().trim() + ed_alngPierHh.getValue().trim();
  var v_stvStDtm1 = ica_stvStDt.getValue().trim() + ed_stvStHh.getValue().trim();
  var v_stvStDtm2 = ica_stvStDt.getValue().trim() + ed_stvStHh.getValue().trim();
  var v_closingTimeDtm1 = ica_closingTimeDt.getValue().trim() + ed_closingTimeHh.getValue().trim();
  var v_closingTimeDtm2 = ica_closingTimeDt.getValue().trim() + ed_closingTimeHh.getValue().trim();
  var v_stvEndDtm1 = ica_stvEndDt.getValue().trim() + ed_stvEndHh.getValue().trim();
  var v_stvEndDtm2 = ica_stvEndDt.getValue().trim() + ed_stvEndHh.getValue().trim();
  var v_offPierDtm1 = ica_offPierDt.getValue().trim() + ed_offPierHh.getValue().trim();
  var v_offPierDtm2 = ica_offPierDt.getValue().trim() + ed_offPierHh.getValue().trim();
  var v_dptDtm1 = ica_dptDt.getValue().trim() + ed_dptHh.getValue().trim();
  if ($c.gus.cfIsNull($p, v_arvDtm1)) {
    v_arvDtm1 = "000000000000";
  }
  //접안일시 체크
  if (!$c.gus.cfIsNull($p, v_alngPierDtm1)) {
    if (v_arvDtm1 > v_alngPierDtm1) {
      await $c.win.alert($p, "접안일시는 입항일시보다 이후여야 합니다.");
      ed_alngPierDt.focus();
      return;
    }
  }
  //하역시작일시 체크
  if (!$c.gus.cfIsNull($p, v_stvStDtm1)) {
    if ($c.gus.cfIsNull($p, v_alngPierDtm1)) {
      if (v_arvDtm1 > v_stvStDtm1) {
        await $c.win.alert($p, "하역시작일시는 입항일시보다 이후여야 합니다.");
        ed_stvStDt.focus();
        return;
      }
    } else {
      if (v_alngPierDtm1 > v_stvStDtm1) {
        await $c.win.alert($p, "하역시작일시는 접안일시보다 이후여야 합니다.");
        ed_stvStDt.focus();
        return;
      }
    }
  }
  //하역종료일시 체크
  if (!$c.gus.cfIsNull($p, v_stvEndDtm1)) {
    if ($c.gus.cfIsNull($p, v_stvStDtm1)) {
      if ($c.gus.cfIsNull($p, v_alngPierDtm1)) {
        if (v_arvDtm1 > v_stvEndDtm1) {
          await $c.win.alert($p, "하역종료일시는 입항일시보다 이후여야 합니다.");
          ed_stvEndDt.focus();
          return;
        }
      } else {
        if (v_alngPierDtm1 > v_stvEndDtm1) {
          await $c.win.alert($p, "하역종료일시는 접안일시보다 이후여야 합니다.");
          ed_stvEndDt.focus();
          return;
        }
      }
    } else {
      if (v_stvStDtm1 > v_stvEndDtm1) {
        await $c.win.alert($p, "하역종료일시는 하역시작일시보다 이후여야 합니다.");
        ed_stvEndDt.focus();
        return;
      }
    }
  }

  //이안일시 체크
  if (!$c.gus.cfIsNull($p, v_offPierDtm1)) {
    if ($c.gus.cfIsNull($p, v_stvEndDtm1)) {
      if ($c.gus.cfIsNull($p, v_stvStDtm1)) {
        if ($c.gus.cfIsNull($p, v_alngPierDtm1)) {
          if (v_arvDtm1 > v_offPierDtm1) {
            await $c.win.alert($p, "이안일시는 입항일시보다 이후여야 합니다.");
            ed_offPierDt.focus();
            return;
          }
        } else {
          if (v_alngPierDtm1 > v_offPierDtm1) {
            await $c.win.alert($p, "이안일시는 접안일시보다 이후여야 합니다.");
            ed_offPierDt.focus();
            return;
          }
        }
      } else {
        if (v_stvStDtm1 > v_offPierDtm1) {
          await $c.win.alert($p, "이안일시는 하역시작일시보다 이후여야 합니다.");
          ed_offPierDt.focus();
          return;
        }
      }
    } else {
      if (v_stvEndDtm1 > v_offPierDtm1) {
        await $c.win.alert($p, "이안일시는 하역종료일시보다 이후여야 합니다.");
        ed_offPierDt.focus();
        return;
      }
    }
  }
  //출항일시 체크
  if (!$c.gus.cfIsNull($p, v_dptDtm1)) {
    if ($c.gus.cfIsNull($p, v_offPierDtm1)) {
      if ($c.gus.cfIsNull($p, v_stvEndDtm1)) {
        if ($c.gus.cfIsNull($p, v_stvStDtm1)) {
          if ($c.gus.cfIsNull($p, v_alngPierDtm1)) {
            if (v_arvDtm1 > v_dptDtm1) {
              await $c.win.alert($p, "출항일시는 입항일시보다 이후여야 합니다.");
              ed_dptDt.focus();
              return;
            }
          } else {
            if (v_alngPierDtm1 > v_dptDtm1) {
              await $c.win.alert($p, "출항일시는 접안일시보다 이후여야 합니다.");
              ed_dptDt.focus();
              return;
            }
          }
        } else {
          if (v_stvStDtm1 > v_dptDtm1) {
            await $c.win.alert($p, "출항일시는 하역시작일시보다 이후여야 합니다.");
            ed_dptDt.focus();
            return;
          }
        }
      } else {
        if (v_stvEndDtm1 > v_dptDtm1) {
          await $c.win.alert($p, "출항일시는 하역종료일시보다 이후여야 합니다.");
          ed_dptDt.focus();
          return;
        }
      }
    } else {
      if (v_offPierDtm1 > v_dptDtm1) {
        await $c.win.alert($p, "출항일시는 이안일시보다 이후여야 합니다.");
        ed_dptDt.focus();
        return;
      }
    }
  }
  let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
  if (!conf) return;
  ds_op101Master.setCellData(0, "scheduleYn", scwin.scheduleYn);
  ds_op101Master.setCellData(0, "callYy", scwin.callYy);
  ds_op101Master.setCellData(0, "callNo", scwin.callNo);

  //validSaveOrUpdate 값에 따라서 저장/수정 선택처리
  var importCheckFlag = 0;
  var exportCheckFlag = 0;
  if (scwin.validSaveOrUpdate == 0) {
    if (ed_impShpCoPortCnt.getValue() == "" && ed_impRepClntNo.getValue() == "" && ed_impRepKcgCd.getValue() == "" && ed_impQty.getValue() == "" && ed_impWt.getValue() == "") {
      importCheckFlag = 1;
    }
    if (ed_expShpCoPortCnt.getValue() == "" && ed_expRepClntNo.getValue() == "" && ed_expRepKcgCd.getValue() == "" && ed_expQty.getValue() == "" && ed_expWt.getValue() == "") {
      exportCheckFlag = 1;
    }
    if (importCheckFlag == 1 && exportCheckFlag == 1) {
      await $c.win.alert($p, "수,출입 상세정보를 입력하셔야 합니다.");
      return;
    } else if (importCheckFlag == 0 && ed_impShpCoPortCnt.getValue() == "") {
      // 수입의 다른 항목값이 입력된  경우.     		 
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["수입의 선사항차"]);
      return;
    }
    if (importCheckFlag == 1) {
      ds_op122detail_import.removeAll();
    }
    if (exportCheckFlag == 1) {
      ds_op122detail_export.removeAll();
    }

    //저장
    $c.sbm.execute($p, sbm_save);
  } else if (scwin.validSaveOrUpdate == 1) {
    if (ed_impShpCoPortCnt.getValue() == "" && ed_impRepClntNo.getValue() == "" && ed_impRepKcgCd.getValue() == "" && ed_impQty.getValue() == "" && ed_impWt.getValue() == "") {
      importCheckFlag = 1;
    }
    if (ed_expShpCoPortCnt.getValue() == "" && ed_expRepClntNo.getValue() == "" && ed_expRepKcgCd.getValue() == "" && ed_expQty.getValue() == "" && ed_expWt.getValue() == "") {
      exportCheckFlag = 1;
    }
    if (importCheckFlag == 1 && exportCheckFlag == 1) {
      await $c.win.alert($p, "수,출입 상세정보를 입력하셔야 합니다.");
      return;
    }

    //ClearData로 없어진 impExpClsCd를 셋팅해준다. 		
    if (importCheckFlag == 0) {
      ds_op122detail_import.setCellData(0, "impExpClsCd", "I");
    }
    if (exportCheckFlag == 0) {
      ds_op122detail_export.setCellData(0, "impExpClsCd", "O");
    }

    //수정
    $c.sbm.execute($p, sbm_update);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_delete = async function () {
  let conf = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (conf) {
    // ds_op101Master.UseChangeInfo = "false";
    // ds_op122detail_import.UseChangeInfo = "false";       
    // ds_op122detail_export.UseChangeInfo = "false";    
    $c.sbm.execute($p, sbm_delete);
  }
};

/* 해당 팝업 삭제 관련 버튼도 삭제
//-------------------------------------------------------------------------
// 선석스케쥴 팝업 호출
//-------------------------------------------------------------------------
scwin.f_Create2 = function() {
    if(ds_op122detail_import.getCellData(0, "impExpClsCd") == "I") {
        var data = {};

        var opts = {
              id : "op_101_02_02p"
            , popupName : "선석스케쥴 조회"
            , modal : true
            , type : "browserPopup"  //화면 오픈 타입 ("pageFramePopup", "browserPopup")
            , title : "선석스케쥴 조회"  //Layer pop
            , width : 1000
            , height : 700
        };

        $c.win.openPopup("/ui/ds/op/rscconfirm/transrscconfirm/op_101_02_02p.xml", opts, data);
    } else {
        $c.win.alert("신규 버튼 클릭 후 조회 가능합니다.");
    }
}

//-------------------------------------------------------------------------
// 선석스케쥴 팝업 callBack
//-------------------------------------------------------------------------
scwin.callBackPop02p = function(returnValue) {
    if(returnValue != null){
        ed_vsslCd.setValue(returnValue[0]);
        ed_vsslNm.setValue(returnValue[1]);
        ed_portCd.setValue(returnValue[2]); 
        ed_portNm.setValue(returnValue[3]);
        ed_pierCd.setValue(returnValue[4]);	
        ed_pierNm.setValue(returnValue[5]);

        //부두별 선석 조회
        scwin.f_resetBerthPerPier(returnValue[4]);
        
        lc_berthPerPier.setValue(returnValue[6]);
        ed_lineCd.setValue("COMM");
        ed_lineNm.setValue("공통거래처(하역)");
        ed_arvIntendDt.setValue(returnValue[8]);
        ed_arvIntendHh.setValue(returnValue[9]);
        ed_dptIntendDt.setValue(returnValue[10]);
        ed_dptIntendHh.setValue(returnValue[11]);
        scwin.scheduleYn = "Y";
        scwin.callYy = returnValue[12];
        scwin.callNo = returnValue[13];
        ed_lobranCd.setValue(returnValue[14]); 
        ed_lobranNm.setValue(returnValue[15]);        
        
        if(returnValue[14] == "3AA") {
            ed_portCd.setValue("KRDAN");
            ed_portNm.setValue("DANGJIN");
        }else if(returnValue[14] == "4AA") {
            ed_portCd.setValue("KRICH");
            ed_portNm.setValue("INCHEON");
        }else if(returnValue[14] == "6BB") {
            ed_portCd.setValue("KRUSN");
            ed_portNm.setValue("ULSAN");
        }else if(returnValue[14] == "6AA") {
            ed_portCd.setValue("KRPUS");
            ed_portNm.setValue("BUSAN");
        }
    } else {
        scwin.scheduleYn = "N";
        scwin.callYy = "";
        scwin.callNo = "";
    }	    
}*/

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_conCvsslMgntNo.getValue(); //본선관리번호

  var opts = {
    id: "op_204_01_07p",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,

    title: "본선관리번호검색팝업" //Layer pop
    ,

    width: 1200,
    height: 650
  };
  var rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", opts, args);
  if (rtnValues != null) ed_conCvsslMgntNo.setValue(rtnValues[0]);
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업 callBack
//-------------------------------------------------------------------------
scwin.callBackPop07p = function (rtnValues) {
  if (rtnValues != null) ed_conCvsslMgntNo.setValue(rtnValues[0]);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //조회조건 본선 
      udc_conVsslCd.cfCommonPopUp(scwin.callBackConVsslCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "T", "선박,선박코드,선박명");
      break;
    case 2:
      // 마스터 본선
      udc_vsslCd.cfCommonPopUp(scwin.callBackVsslLine, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "선박,선박코드,선박명");
      break;
    case 3:
      //마스터 항구	
      udc_portCd.cfCommonPopUp(scwin.callBackPort, pCode, pName, pClose, null, null, null, null, "KR", null, null, null, null, null, "F", "항구,항구코드,항구명");
      break;
    case 4:
      //마스터 부두
      udc_pierCd.cfCommonPopUp(scwin.callBackWrkPl, pCode, pName, pClose, null, null, null, null, "P", null, null, null, null, null, "F", "부두,부두코드,부두명");
      break;
    case 6:
      //마스터 물류점소
      udc_lobranCd.cfCommonPopUp(scwin.callBackLogis, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "물류점소,점소코드,점소명");
      break;
    case 7:
      //마스터 LINE
      udc_lineCd.cfCommonPopUp(scwin.callBackLine, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "LINE,LINE코드,LINE명");
      break;
    case 8:
      //마스터 선사거래처
      udc_shpCoClntNo.cfCommonPopUp(scwin.callBackLineCoop, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "선사거래처,거래처코드,거래처명");
      break;
    case 9:
      //디테일 수입 대표거래처
      udc_impRepClntNo.cfCommonPopUp(scwin.callBackImpRepClntNo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "대표거래처,거래처코드,거래처명");
      break;
    case 10:
      //디테일 수출 대표거래처
      udc_expRepClntNo.cfCommonPopUp(scwin.callBackExpRepClntNo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "대표거래처,거래처코드,거래처명");
      break;
    case 11:
      //디테일 수입 대표화종
      udc_impRepKcgCd.cfCommonPopUp(scwin.callBackImpRepKcgCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "대표화종,대표화종코드,대표화종명");
      break;
    case 12:
      //디테일 수출 대표화종
      udc_expRepKcgCd.cfCommonPopUp(scwin.callBackExpRepKcgCd, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "대표화종,대표화종코드,대표화종명");
      break;
    case 13:
      //디테일 선사항차
      udc_impShpCoPortCnt.cfCommonPopUp(scwin.callBackPortCnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null);
      break;
    case 14:
      //마스터 품명
      udc_commCd.cfCommonPopUp(scwin.callBackCommGoods, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "품명목록,품명코드,품명");
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//조회조건 본선 
scwin.callBackConVsslCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_conVsslCd, ed_conVsslNm);
};

// 마스터 본선
scwin.callBackVsslLine = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_lineCd.setValue(rtnList[2]);
    ed_lineNm.setValue(rtnList[3]);
    ed_shpCoClntNo.setValue(rtnList[4]);
    ed_shpCoClntNm.setValue(rtnList[5]);
  }
};

//마스터 항구	
scwin.callBackPort = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_portCd, ed_portNm);
};

//마스터 부두
scwin.callBackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_pierCd, ed_pierNm);
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_lobranCd.setValue(rtnList[2]);
    ed_lobranNm.setValue(rtnList[6]);
    ds_op101Master.setCellData(0, "pierPosnClsCd", rtnList[4]);

    //부두별 선석 조회
    scwin.f_resetBerthPerPier(rtnList[0]);
  }
};

//마스터 물류점소
scwin.callBackLogis = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lobranCd, ed_lobranNm);
};

//마스터 LINE
scwin.callBackLine = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, ed_lineNm);
};

//마스터 선사거래처
scwin.callBackLineCoop = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_shpCoClntNo, ed_shpCoClntNm);
};

//디테일 수입 대표거래처
scwin.callBackImpRepClntNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_impRepClntNo, ed_impRepClntNm);
};

//디테일 수출 대표거래처
scwin.callBackExpRepClntNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_expRepClntNo, ed_expRepClntNm);
};

//디테일 수입 대표화종						
scwin.callBackImpRepKcgCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_impRepKcgCd, ed_impRepKcgNm);
};

//디테일 수출 대표화종
scwin.callBackExpRepKcgCd = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_expRepKcgCd, ed_expRepKcgNm);
};

//디테일 선사항차
scwin.callBackPortCnt = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_impShpCoPortCnt.setValue(rtnList[2]);
  }
};

//마스터 품명
scwin.callBackCommGoods = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, ed_commNm);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = async function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_op101Master.getTotalRow();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 Data가 없습니다.");
    ds_op122detail_import.removeAll();
    ds_op122detail_export.removeAll();
  } else {
    ds_op101Master.setRowPosition(0);
  }
  ed_conCvsslMgntNo.setValue(ds_op101Master.getCellData(0, "cvsslMgntNo"));
  $c.gus.cfDisableObjects($p, [tbl_master, tbl_detail, cbx_create]);

  /*
  cfSetHiddenValue(ed_vsslCd, ed_vsslCd.text);
  cfSetHiddenValue(ed_vsslNm, ed_vsslNm.value);
  scwin.vsslCd = ed_vsslCd.getValue();
  scwin.vsslNm = ed_vsslNm.getValue();
  */

  //부두별 선석 조회
  scwin.f_resetBerthPerPier(ds_op101Master.getCellData(0, "pierCd"));
  ds_op101Master.setCellData(0, "berthCd", ds_op101Master.setCellData(0, "berthCd"));
  if (ds_op101Master.getCellData(0, "scheduleYn") == "Y") {
    scwin.scheduleYn = "Y";
  } else {
    scwin.scheduleYn = "N";
  }

  //ds_op122detail===========================================================

  var gubun = "";
  if (rowCnt == 0) {
    ds_op122detail.removeAll();
    ds_op122detail_import.removeAll();
    ds_op122detail_export.removeAll();
  } else {
    for (var i = 0; i < ds_op122detail.getTotalRow(); i++) {
      if (ds_op122detail.getCellData(i, "impExpClsCd") == "I") {
        $c.gus.cfCopyDataSet($p, ds_op122detail, ds_op122detail_import, "copyHeader=yes,rowFrom=" + i + ",rowCnt=1");
      } else if (ds_op122detail.getCellData(i, "impExpClsCd") == "O") {
        $c.gus.cfCopyDataSet($p, ds_op122detail, ds_op122detail_export, "copyHeader=yes,rowFrom=" + i + ",rowCnt=1");
      }
      gubun = ds_op122detail.getCellData(i, "impExpClsCd");
    }
    ds_op122detail_export.setRowPosition(0);
    ds_op122detail_import.setRowPosition(0);
    if (ds_op122detail.getTotalRow() == 1 && gubun == "I") {
      ds_op122detail_export.removeAll();
    } else if (ds_op122detail.getTotalRow() == 1 && gubun == "O") {
      ds_op122detail_import.removeAll();
    }
  }
};

//저장 완료
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.scheduleYn = "N";
  scwin.callYy = "";
  scwin.callNo = "";
  dma_retrieve.set("cvsslMgntNo", ds_op101Master.getCellData(0, "cvsslMgntNo"));
  $c.sbm.execute($p, sbm_retrieve);
};

//수정 완료
scwin.sbm_update_submitdone = async function (e) {
  console.log("scwin.sbm_update_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 수정하였습니다.");
  dma_retrieve.set("cvsslMgntNo", ed_conCvsslMgntNo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//삭제 완료
scwin.sbm_delete_submitdone = async function (e) {
  console.log("scwin.sbm_delete_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 삭제하였습니다");
  scwin.scheduleYn = "N";
  scwin.callYy = "";
  scwin.callNo = "";
  $c.gus.cfInitObjects($p, tbl_master);
  $c.gus.cfInitObjects($p, tbl_detail);
  $c.gus.cfInitObjects($p, cbx_create);
  $c.gus.cfDisableObjects($p, cbx_create);
  scwin.onpageload();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//조회구분 변경
scwin.rd_inQryCond_onchange = function (info) {
  if (rd_inQryCond.getValue() == 1) {
    ed_conCvsslMgntNo.setValue("");
    $c.gus.cfDisableObjects($p, [ed_conCvsslMgntNo, btn_conCvsslMgntNo]);
    $c.gus.cfEnableObjects($p, [ed_conVsslCd, ed_conVsslNm, btn_conVsslCd, ed_conShpCoPortCnt]);
  } else if (rd_inQryCond.getValue() == 0) {
    ed_conVsslCd.setValue("");
    ed_conVsslNm.setValue("");
    ed_conShpCoPortCnt.setValue("");
    $c.gus.cfDisableObjects($p, [ed_conVsslCd, ed_conVsslNm, btn_conVsslCd, ed_conShpCoPortCnt]);
    $c.gus.cfEnableObjects($p, [ed_conCvsslMgntNo, btn_conCvsslMgntNo]);
  }
};

//조회영역 본선관리번호 찾기 버튼
scwin.btn_conCvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp();
};

//본선관리번호 소문자 > 대문자
scwin.ed_conCvsslMgntNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_conCvsslMgntNo);
};

//조회영역 본선 찾기 버튼
scwin.udc_conVsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_conVsslCd.getValue(), ed_conVsslNm.getValue(), "F", "F");
};
scwin.udc_conVsslCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_conVsslCd, ed_conVsslNm, 1);
};
scwin.udc_conVsslCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_conVsslNm, ed_conVsslCd, 1, false);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//본선 찾기 버튼 
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_vsslCd.getValue(), ed_vsslNm.getValue(), "F", "F");
};
scwin.udc_vsslCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 2);
};
scwin.udc_vsslCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 2, false);
};

//항구 찾기 버튼
scwin.udc_portCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_portCd.getValue(), ed_portNm.getValue(), "F", "F");
};
scwin.udc_portCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_portCd, ed_portNm, 3);
};
scwin.udc_portCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_portNm, ed_portCd, 3, false);
};

//부두 찾기 버튼
scwin.udc_pierCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_pierCd.getValue(), ed_pierNm.getValue(), "F", "F");
};
scwin.udc_pierCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pierCd, ed_pierNm, 4);
};
scwin.udc_pierCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_pierNm, ed_pierCd, 4, false);
};

//물류점소 찾기 버튼
scwin.udc_lobranCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "F", "F");
};
scwin.udc_lobranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 6);
};
scwin.udc_lobranCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lobranNm, ed_lobranCd, 6, false);
};

//LINE 찾기 버튼
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_lineCd.getValue(), ed_lineNm.getValue(), "F", "F");
};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 7);
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 7, false);
};

//선사거래처 찾기 버튼
scwin.udc_shpCoClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_shpCoClntNo.getValue(), ed_shpCoClntNm.getValue(), "F", "F");
};
scwin.udc_shpCoClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_shpCoClntNo, ed_shpCoClntNm, 8);
};
scwin.udc_shpCoClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_shpCoClntNm, ed_shpCoClntNo, 8, false);
};

//품명 찾기 버튼
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(14, ed_commCd.getValue(), ed_commNm.getValue(), "F", "F");
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 14);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 14, false);
};

//선사항차 찾기 버튼
scwin.udc_impShpCoPortCnt_onclickEvent = async function (e) {
  let edPortCd = ed_portCd.getValue();
  await scwin.f_openCommonPopUp(13, edPortCd, ed_vsslNm.getValue(), "T", "T");
};

//수입 대표거래처 찾기 버튼
scwin.udc_impRepClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_impRepClntNo.getValue(), ed_impRepClntNm.getValue(), "F", "F");
};
scwin.udc_impRepClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_impRepClntNo, ed_impRepClntNm, 9);
};
scwin.udc_impRepClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_impRepClntNm, ed_impRepClntNo, 9, false);
};

//수출 대표거래처 찾기 버튼
scwin.udc_expRepClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, ed_expRepClntNo.getValue(), ed_expRepClntNm.getValue(), "F", "F");
};
scwin.udc_expRepClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_expRepClntNo, ed_expRepClntNm, 10);
};
scwin.udc_expRepClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_expRepClntNm, ed_expRepClntNo, 10, false);
};

//수입 대표화종 찾기 버튼
scwin.udc_impRepKcgCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(11, ed_impRepKcgCd.getValue(), ed_impRepKcgNm.getValue(), "F", "F");
};
scwin.udc_impRepKcgCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_impRepKcgCd, ed_impRepKcgNm, 11);
};
scwin.udc_impRepKcgCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_impRepKcgNm, ed_impRepKcgCd, 11, false);
};

//수출 대표화종 찾기 버튼
scwin.udc_expRepKcgCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(12, ed_expRepKcgCd.getValue(), ed_expRepKcgNm.getValue(), "F", "F");
};
scwin.udc_expRepKcgCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_expRepKcgCd, ed_expRepKcgNm, 12);
};
scwin.udc_expRepKcgCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_expRepKcgNm, ed_expRepKcgCd, 12, false);
};

//지시번호생성 체크박스
scwin.cbx_create_onchange = function (info) {
  scwin.f_createWrkIndictNo();
};

//신규 버튼 
scwin.btn_init_onclick = function (e) {
  scwin.f_create();
};

//수정 버튼
scwin.btn_update_onclick = function (e) {
  scwin.f_update();
};

//저장 버튼 
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//삭제 버튼 
scwin.btn_del_onclick = function (e) {
  scwin.f_delete();
};

//터미널항차 대문자 변환
scwin.ed_tmlPortCnt_onkeyup = function (e) {
  ed_tmlPortCnt.setValue(ed_tmlPortCnt.getValue().toUpperCase());
};

//MRN 대문자 변환
scwin.ed_searchMrn_onkeyup = function (e) {
  ed_searchMrn.setValue(ed_searchMrn.getValue().toUpperCase());
};

//선사항차(수출) 대문자 변환
scwin.ed_expShpCoPortCnt_onkeyup = function (e) {
  ed_expShpCoPortCnt.setValue(ed_expShpCoPortCnt.getValue().toUpperCase());
};

//선사항차(조회조건) 대문자 변환
scwin.ed_conShpCoPortCnt_onkeyup = function (e) {
  ed_conShpCoPortCnt.setValue(ed_conShpCoPortCnt.getValue().toUpperCase());
};

//적하목록관리번호 대문자 변환
scwin.ed_mrn_onkeyup = function (e) {
  ed_mrn.setValue(ed_mrn.getValue().toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_inQryCond',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data','ev:onchange':'scwin.rd_inQryCond_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선관리번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선+선사항차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'num',id:'ed_conCvsslMgntNo',placeholder:'',style:'',mandatory:'true',objType:'data',readOnly:'false',maxlength:'8',validExp:'본선관리번호:yes',allowChar:'0-9A-Za-z',ref:'data:dma_retrieve.cvsslMgntNo','data-length':'8','ev:oneditkeyup':'scwin.ed_conCvsslMgntNo_oneditkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_conCvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_conCvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_searchMrn',placeholder:'',style:'width:100px;',objType:'data',readOnly:'false',maxlength:'11',allowChar:'0-9A-Za-z',ref:'data:dma_retrieve.mrn','data-length':'255',maxByteLength:'255','ev:onkeyup':'scwin.ed_searchMrn_onkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_conVsslCd',style:'',class:'col8',id:'udc_conVsslCd',codeId:'ed_conVsslCd',nameId:'ed_conVsslNm',mandatoryCode:'true',mandatoryName:'false',objTypeCode:'Data',objTypeName:'Data',maxlengthCode:'8',btnId:'btn_conVsslCd',UpperFlagCode:'1',refDataCollection:'dma_retrieve',code:'vsslCd',selectID:'retrieveVsslCdInfo','ev:onclickEvent':'scwin.udc_conVsslCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_conVsslCd_onblurCodeEvent',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_conVsslCd_onviewchangeNameEvent',allowCharCode:'0-9A-Za-z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선사항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_conShpCoPortCnt',placeholder:'',style:'width:100px;',mandatory:'true',objType:'Data',maxlength:'8',readOnly:'false',ref:'data:dma_retrieve.shpCoPortcnt','data-length':'8','ev:onkeyup':'scwin.ed_conShpCoPortCnt_onkeyup',allowChar:'0-9A-Za-z'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_master',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'본선',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_vsslCd',style:'width:250px;',class:'col7',codeId:'ed_vsslCd',nameId:'ed_vsslNm',objTypeCode:'Data',mandatoryCode:'true',mandatoryName:'false',objTypeName:'Data',maxlengthCode:'8',id:'udc_vsslCd',btnId:'btn_vsslCd',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',validExpCode:'본선:yes',selectID:'retrieveVsslLineClnt','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent',refDataCollection:'ds_op101Master',code:'vsslCd',name:'vsslNm','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent',validTitle:'본선','ev:onviewchangeNameEvent':'scwin.udc_vsslCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항구',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_portCd',style:'width:250px;',codeId:'ed_portCd',nameId:'ed_portNm',id:'udc_portCd',mandatoryCode:'true',mandatoryName:'false',objTypeCode:'Data',objTypeName:'Data',maxlengthCode:'8',btnId:'btn_portCd',validExpCode:'항구:yes',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',selectID:'retrievePortInfo','ev:onclickEvent':'scwin.udc_portCd_onclickEvent',refDataCollection:'ds_op101Master',code:'portCd',name:'portNm','ev:onblurCodeEvent':'scwin.udc_portCd_onblurCodeEvent',validTitle:'항구',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_portCd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부두',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_pierCd',style:'width:250px;',codeId:'ed_pierCd',nameId:'ed_pierNm',id:'udc_pierCd',mandatoryCode:'true',mandatoryName:'false',objTypeName:'Data',objTypeCode:'Data',maxlengthCode:'8',btnId:'btn_pierCd',validExpCode:'부두:yes',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',selectID:'retrieveWrkPlInfoByKind','ev:onclickEvent':'scwin.udc_pierCd_onclickEvent',refDataCollection:'ds_op101Master',code:'pierCd',name:'pierNm','ev:onblurCodeEvent':'scwin.udc_pierCd_onblurCodeEvent',validTitle:'부두','ev:onviewchangeNameEvent':'scwin.udc_pierCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선석',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_berthPerPier',style:'width:250px;',submenuSize:'auto',search:'start',ref:'data:ds_op101Master.berthCd','data-length':'5',allOption:'',chooseOption:'',displayMode:'value delim label',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_berthPerPier'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'터미널항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tmlPortCnt',placeholder:'',style:'width:85px;',objType:'Data',mandatory:'false',displayFormat:'',readOnly:'false',maxlength:'8',allowChar:'0-9A-Za-z',ref:'data:ds_op101Master.tmlPortcnt','data-length':'7','ev:onkeyup':'scwin.ed_tmlPortCnt_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'물류점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_lobranCd',style:'width:250px;',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_lobranCd',objTypeCode:'Data',objTypeName:'Data',mandatoryName:'false',mandatoryCode:'true',maxlengthCode:'8',btnId:'btn_lobranCd',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',validExpCode:'물류점소:yes',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_lobranCd_onclickEvent',refDataCollection:'ds_op101Master',code:'lobranCd',name:'lobranNm','ev:onblurCodeEvent':'scwin.udc_lobranCd_onblurCodeEvent',validTitle:'물류점소','ev:onviewchangeNameEvent':'scwin.udc_lobranCd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'내/외항선구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_inOutPortCls',style:'width:150px;',submenuSize:'auto',search:'start',mandatory:'true',objType:'Data',validExp:'내/외항선구분:yes',ref:'data:ds_op101Master.inoutPortClsCd','data-length':'4',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',displayMode:'label',title:'내/외항선구분 ',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_agency'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_lineCd',style:'width:250px;',codeId:'ed_lineCd',nameId:'ed_lineNm',id:'udc_lineCd',objTypeCode:'Data',objTypeName:'Data',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'8',btnId:'btn_lineCd',validExpCode:'LINE:yes',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',selectID:'retrieveLineInfo','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',refDataCollection:'ds_op101Master',code:'lineCd',name:'lineNm','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent',validTitle:'LINE','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_shpCoClntNm',style:'width:250px;',codeId:'ed_shpCoClntNo',nameId:'ed_shpCoClntNm',id:'udc_shpCoClntNo',objTypeCode:'Data',objTypeName:'Data',mandatoryName:'false',maxlengthCode:'8',mandatoryCode:'false',btnId:'btn_shpCoClntNo',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',selectID:'retrieveLineCoopList','ev:onclickEvent':'scwin.udc_shpCoClntNo_onclickEvent',refDataCollection:'ds_op101Master',code:'shpCoClntNo',name:'clntNm','ev:onblurCodeEvent':'scwin.udc_shpCoClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_shpCoClntNo_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항예정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_arvIntendDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'Data',validExp:'입항예정일자:yes:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.arvIntendDt','data-length':'8',title:'입항예정일시'}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_arvIntendHh',placeholder:'',class:'tac',objType:'Data',displayFormat:'##:##',maxlength:'4',validExp:'입항예정시간:yes:time=HHMM&length=4',ref:'data:ds_op101Master.arvIntendHh','data-length':'4',maxByteLength:'4',title:'입항예정시간',mandatory:'true',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_arvDt',style:'',objType:'Data',mandatory:'false',displayFormat:'yyyy/MM/dd',validExp:'입항일자:no:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.arvDt','data-length':'8'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_arvHh',placeholder:'',style:'width:50px;',mandatory:'false',displayFormat:'##:##',maxlength:'4',objType:'Data',validExp:'입항시간:no:time=HHMM&length=4',ref:'data:ds_op101Master.arvHh','data-length':'4',maxByteLength:'4',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'접안일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_alngPierDt',style:'',objType:'Data',mandatory:'false',readOnly:'false',displayFormat:'yyyy/MM/dd',validExp:'접안일자:no:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.alngpierDt','data-length':'8'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_alngPierHh',placeholder:'',style:'width:50px;',objType:'Data',mandatory:'false',displayFormat:'##:##',validExp:'접안시간:no:time=HHMM&length=4',ref:'data:ds_op101Master.alngpierHh','data-length':'4',maxByteLength:'4',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하역시작일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stvStDt',style:'',objType:'Data',displayFormat:'yyyy/MM/dd',mandatory:'false',readOnly:'false',validExp:'하역시작일:no:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.stvStDt','data-length':'8'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_stvStHh',placeholder:'',style:'width:50px;',readOnly:'false',objType:'Data',displayFormat:'##:##',maxlength:'4',mandatory:'false',validExp:'하역시작시간:no:time=HHMM&length=4',ref:'data:ds_op101Master.stvStHh','data-length':'4',maxByteLength:'4',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ClosingTime',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_closingTimeDt',style:'',objType:'Data',displayFormat:'yyyy/MM/dd',mandatory:'false',readOnly:'false',validExp:'closingTime:no:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.closeDt','data-length':'8'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_closingTimeHh',placeholder:'',style:'width:50px;',readOnly:'false',maxlength:'4',mandatory:'false',displayFormat:'##:##',objType:'Data',validExp:'closingHour:no:time=HHMM&length=4',ref:'data:ds_op101Master.closeHh','data-length':'4',maxByteLength:'4',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하역종료일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stvEndDt',style:'',readOnly:'false',displayFormat:'yyyy/MM/dd',mandatory:'false',objType:'Data',validExp:'하역종료일자:no:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.stvCompleteDt','data-length':'8'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_stvEndHh',placeholder:'',style:'width:50px;',readOnly:'false',displayFormat:'##:##',maxlength:'4',mandatory:'false',objType:'data',validExp:'하역종료시간:no:time=HHMM&length=4',ref:'data:ds_op101Master.stvCompleteHh','data-length':'4',maxByteLength:'4',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이안일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_offPierDt',style:'',objType:'Data',readOnly:'false',displayFormat:'yyyy/MM/dd',mandatory:'false',validExp:'이안일자:no:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.offpierDt','data-length':'8'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_offPierHh',placeholder:'',style:'width:50px;',readOnly:'false',maxlength:'4',mandatory:'false',displayFormat:'##:##',objType:'Data',validExp:'이안시간:no:time=HHMM&length=4',ref:'data:ds_op101Master.offpierHh','data-length':'4',maxByteLength:'4',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출항예정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_dptIntendDt',style:'',readOnly:'false',displayFormat:'yyyy/MM/dd',objType:'Data',validExp:'출항예정일자:yes:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.dptIntendDt','data-length':'8',title:'출항예정일시',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_dptIntendHh',placeholder:'',style:'width:50px;',readOnly:'false',maxlength:'4',mandatory:'true',displayFormat:'##:##',objType:'data',validExp:'출항예정시간:yes:time=HHMM&length=4',ref:'data:ds_op101Master.dptIntendHh','data-length':'4',maxByteLength:'4',title:'출항예정시간',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_dptDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'false',readOnly:'false',objType:'Data',validExp:'출항일자:no:date=YYYYMMDD&length=8',ref:'data:ds_op101Master.dptDt','data-length':'8'}},{T:1,N:'xf:input',A:{class:'tac',id:'ed_dptHh',placeholder:'',style:'width:50px;',readOnly:'false',maxlength:'4',mandatory:'false',displayFormat:'##:##',objType:'Data',validExp:'출항시간:no:time=HHMM&length=4',ref:'data:ds_op101Master.dptHh','data-length':'4',maxByteLength:'4',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하역담당구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_stvChrgCls',style:'width:150px;',submenuSize:'auto',search:'start',mandatory:'false',ref:'data:ds_op101Master.stvChrgClsCd','data-length':'1',allOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양적하지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dchrDropRgn',placeholder:'',style:'width:250px;',mandatory:'false',objType:'data',displayFormat:'',readOnly:'false',ref:'data:ds_op101Master.dchrDropRgn','data-length':'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'pop_commCd',style:'width:250px;',codeId:'ed_commCd',nameId:'ed_commNm',id:'udc_commCd',objTypeName:'Data',objTypeCode:'Data',maxlengthCode:'8',mandatoryCode:'false',mandatoryName:'false',btnId:'btn_commCd',selectID:'retrieveCommGoodsInfo','ev:onclickEvent':'scwin.udc_commCd_onclickEvent',refDataCollection:'ds_op101Master',code:'commCd',name:'commNm','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대리점',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group ',style:'width:383px;'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_agency',placeholder:'',class:' ',mandatory:'false',objType:'Data',readOnly:'false',ref:'data:ds_op101Master.agency','data-length':'50'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_agencyCd',search:'start',style:'width: 200px;',objType:'Data',ref:'data:ds_op101Master.agencyCd','data-length':'6',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',displayMode:'value delim label',submenuSize:'fixed'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_agency'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:'width:383px;'},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_mcht',placeholder:'',style:'',objType:'Data',ref:'data:ds_op101Master.mcht','data-length':'50'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mchtCd',search:'start',style:'width: 200px;',objType:'Data',ref:'data:ds_op101Master.mchtCd','data-length':'6',allOption:'',chooseOption:'true',chooseOptionLabel:'$blank',displayMode:'value delim label',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mcht'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_detail',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출 ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_impShpCoPortCnt',class:'',codeId:'ed_impShpCoPortCnt',id:'udc_impShpCoPortCnt',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'10',nameId:'ed_impShpCoPortCntNm',objTypeCode:'Data',objTypeName:'Data',popupID:'pop_impShpCoPortCnt',style:'width:250px;',hideName:'true',selectID:'retrievePortCntInfo','ev:onclickEvent':'scwin.udc_impShpCoPortCnt_onclickEvent',code:'shpCoPortcnt',refDataCollection:'ds_op122detail_import',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_expShpCoPortCnt',placeholder:'',style:'width:85px;',objType:'Data',mandatory:'false',maxlength:'10',readOnly:'false',ref:'data:ds_op122detail_export.shpCoPortcnt','data-length':'10',allowChar:'0-9A-Za-z','ev:onkeyup':'scwin.ed_expShpCoPortCnt_onkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서비스(항로)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_impShpCoService',placeholder:'',style:'width:250px;',objType:'Data',mandatory:'false',maxlength:'20',ref:'data:ds_op122detail_import.shpCoService','data-length':'18'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_expShpCoService',placeholder:'',style:'width:250px;',objType:'Data',maxlength:'20',ref:'data:ds_op122detail_export.shpCoService','data-length':'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'pop_impRepClntNo',style:'width:250px;',codeId:'ed_impRepClntNo',nameId:'ed_impRepClntNm',id:'udc_impRepClntNo',objTypeName:'Data',objTypeCode:'Data',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'8',btnId:'btn_impRepClntNo',selectID:'retrieveCoopList','ev:onclickEvent':'scwin.udc_impRepClntNo_onclickEvent',refDataCollection:'ds_op122detail_import',code:'repClntNo',name:'clntNm','ev:onblurCodeEvent':'scwin.udc_impRepClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_impRepClntNo_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCodeLength:'0',allowCharCode:'0-9A-Za-z'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'pop_expRepClntNo',style:'width:250px;',id:'udc_expRepClntNo',codeId:'ed_expRepClntNo',nameId:'ed_expRepClntNm',objTypeCode:'Data',objTypeName:'Data',mandatoryName:'false',mandatoryCode:'false',maxlengthCode:'8',btnId:'btn_expRepClntNo',selectID:'retrieveCoopList','ev:onclickEvent':'scwin.udc_expRepClntNo_onclickEvent',refDataCollection:'ds_op122detail_export',code:'repClntNo',name:'clntNm','ev:onblurCodeEvent':'scwin.udc_expRepClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_expRepClntNo_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'pop_impRepKcgCd',style:'width:250px;',codeId:'ed_impRepKcgCd',nameId:'ed_impRepKcgNm',id:'udc_impRepKcgCd',objTypeName:'Data',mandatoryName:'false',mandatoryCode:'fasle',objTypeCode:'Data',maxlengthCode:'8',btnId:'btn_impRepKcgCd',selectID:'retrieveKcgInfo','ev:onclickEvent':'scwin.udc_impRepKcgCd_onclickEvent',refDataCollection:'ds_op122detail_import',code:'repKcgCd',name:'kcgNm','ev:onblurCodeEvent':'scwin.udc_impRepKcgCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_impRepKcgCd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',allowCharCodeLength:'0'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'pop_expRepKcgCd',style:'width:250px;',codeId:'ed_expRepKcgCd',nameId:'ed_expRepKcgNm',id:'udc_expRepKcgCd',objTypeCode:'Data',objTypeName:'Data',mandatoryName:'false',mandatoryCode:'false',maxlengthCode:'8',btnId:'btn_expRepKcgCd',selectID:'retrieveKcgInfo','ev:onclickEvent':'scwin.udc_expRepKcgCd_onclickEvent',code:'repKcgCd',name:'kcgNm',refDataCollection:'ds_op122detail_export','ev:onblurCodeEvent':'scwin.udc_expRepKcgCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_expRepKcgCd_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량/중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_impQty',placeholder:'',class:' tar',mandatory:'false',objType:'Data',ref:'data:ds_op122detail_import.qty','data-length':'15'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'개',class:''}},{T:1,N:'xf:input',A:{style:'width:70px;',id:'ed_impWt',placeholder:'',class:' tar',objType:'Data',mandatory:'false',ref:'data:ds_op122detail_import.wt','data-length':'18'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'TON',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' tar',id:'ed_expQty',placeholder:'',style:'width:50px;',objType:'Data',mandatory:'false',ref:'data:ds_op122detail_export.qty','data-length':'15'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:' tar',id:'ed_expWt',placeholder:'',style:'width:70px;',objType:'Data',mandatory:'false',ref:'data:ds_op122detail_export.wt','data-length':'18'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TON',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적하목록관리번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:85px;',objType:'Data',mandatory:'false',maxlength:'12',displayFormat:'',readOnly:'false',ref:'data:ds_op122detail_import.mrn','data-length':'11',allowChar:'0-9a-zA-Z','ev:onkeyup':'scwin.ed_mrn_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선ORDER_NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_impOdrNo',placeholder:'',style:'width:120px;',maxlength:'13',displayFormat:'#',mandatory:'false',objType:'Data',readOnly:'true',ref:'data:ds_op122detail_import.odrNo','data-length':'13',maxByteLength:'13'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_expOdrNo',placeholder:'',style:'width:120px;',objType:'Data',mandatory:'false',maxlength:'13',displayFormat:'',readOnly:'true',ref:'data:ds_op122detail_export.odrNo','data-length':'13',maxByteLength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하역ORDER_NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_stvImpOdrNo',placeholder:'',style:'width:120px;',objType:'Data',readOnly:'true',displayFormat:'',mandatory:'false',maxlength:'13',ref:'data:ds_op122detail_import.stvOdrNo','data-length':'13',maxByteLength:'13'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_stvExpOdrNo',placeholder:'',style:'width:120px;',objType:'Data',mandatory:'false',maxlength:'13',displayFormat:'',readOnly:'true',ref:'data:ds_op122detail_export.stvOdrNo','data-length':'13',maxByteLength:'13'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Init2',style:'display: none;',type:'button',userAuth:'C',objType:'bCreate2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선석스케줄'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_create',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',userAuth:'C',objType:'data',falseValue:'N','ev:onchange':'scwin.cbx_create_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지시번호생성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_init',label:'신규',style:'',type:'button',userAuth:'C',objType:'bCreate','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',label:'수정',style:'',type:'button',userAuth:'U',objType:'bUpdate','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_del',label:'삭제',style:'',type:'button',userAuth:'D',objType:'bDelete','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})