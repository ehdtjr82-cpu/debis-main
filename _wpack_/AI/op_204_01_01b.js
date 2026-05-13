/*amd /AI/op_204_01_01b.xml 90207 be82b388fed81187553e994e9e52cf78b4c5c350b2c5a5f87c97b0981a440d85 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cvsslInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoNm',name:'선사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcnt',name:'수입항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcnt',name:'수출항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impRepKcg',name:'수입대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expRepKcg',name:'수출대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportDtm',name:'출항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'일일하역작업계획여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impportcnt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expportcnt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cvsslInfo_op302',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanStaffNo',name:'chief포맨사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanNm',name:'chief포맨이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkHoldCnt',name:'작업홀드수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslFmanCnt',name:'본선포맨수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groundFmanCnt',name:'육상포맨수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixgCoInputYn',name:'고박업체투입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'servPstInputYn',name:'용역직투입여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cVMBOLInformationDTOList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'comm',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_holdWorkPlan'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPeriod',name:'작업기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkShiftCnt',name:'작업Shift수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lunionInputPartyCnt',name:'항운노조반수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'craneInputCnt',name:'크레인',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fliftInputCnt',name:'지게차',dataType:'number'}},{T:1,N:'w2:column',A:{id:'excvInputCnt',name:'Ex',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcHveqInputCnt',name:'기타',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkStDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reWrkShiftCnt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reLunionInputPartyCnt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reCraneInputCnt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reFliftInputCnt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reExcvInputCnt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reEtcHveqInputCnt',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkHoldInfo_303',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holdNo',name:'작업HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqInputPlanYn',name:'중기사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkShiftCnt',name:'작업Shift수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionInputCnt',name:'항운노조반수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkHoldInfo_301',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holdNo',name:'작업HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목/품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftPerWrkVol',name:'시간당작업량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'needHhCnt',name:'HRS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'needShiftCnt',name:'Shift',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkHoldInfo_304',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holdNo',name:'작업HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNrmCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslEqYn',name:'본선장비여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invsslInputShiftCnt',name:'선내Shift',dataType:'number'}},{T:1,N:'w2:column',A:{id:'alngvsslInputShiftCnt',name:'선측Shift',dataType:'number'}},{T:1,N:'w2:column',A:{id:'invsslInputHhCnt',name:'선내Hrs',dataType:'number'}},{T:1,N:'w2:column',A:{id:'alngvsslInputHhCnt',name:'선측Hrs',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCarryingVesselWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cvsslInfo","key":"OUT_DS1"},{"id":"ds_cvsslInfo_op302","key":"OUT_DS2"},{"id":"ds_cVMBOLInformationDTOList","key":"OUT_DS3"},{"id":"ds_holdWorkPlan","key":"OUT_DS4"},{"id":"ds_wrkHoldInfo_303","key":"OUT_DS5"},{"id":"ds_wrkHoldInfo_301","key":"OUT_DS6"},{"id":"ds_wrkHoldInfo_304","key":"OUT_DS7"}]',target:'data:json,[{"id":"ds_cvsslInfo","key":"OUT_DS1"},{"id":"ds_cvsslInfo_op302","key":"OUT_DS2"},{"id":"ds_cVMBOLInformationDTOList","key":"OUT_DS3"},{"id":"ds_holdWorkPlan","key":"OUT_DS4"},{"id":"ds_wrkHoldInfo_303","key":"OUT_DS5"},{"id":"ds_wrkHoldInfo_301","key":"OUT_DS6"},{"id":"ds_wrkHoldInfo_304","key":"OUT_DS7"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveWrkPlanPerHold',action:'/ds.op.wrkplan.stvwrkplan.SaveCarryingVesselWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_wrkHoldInfo_301","key":"IN_DS1"},{"id":"ds_cvsslInfo_op302","key":"IN_DS2"},{"id":"ds_wrkHoldInfo_303","key":"IN_DS3"},{"id":"ds_wrkHoldInfo_304","key":"IN_DS4"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveWrkPlanPerHold_submitdone','ev:submiterror':'scwin.sbm_saveWrkPlanPerHold_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteWrkPlanPerHold',action:'/ds.op.wrkplan.stvwrkplan.DeleteWrkHoldCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_wrkHoldInfo_303","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deleteWrkPlanPerHold_submitdone','ev:submiterror':'scwin.sbm_deleteWrkPlanPerHold_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteWrkPlanAll',action:'/ds.op.wrkplan.stvwrkplan.DeleteCarryingVesselWorkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cvsslInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deleteWrkPlanAll_submitdone','ev:submiterror':'scwin.sbm_deleteWrkPlanAll_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveComboCMD.do?sysCd=CommonEBC&queryId=retrieveSysCdTest_eqCode&param1=ZZ208',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_eqNrmCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqNrmCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_eqNrmCd_submitdone','ev:submiterror':'scwin.sbm_eqNrmCd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = "";
scwin.onpageload = function () {
  scwin.userId = $c.ses.getUserId();
  scwin.f_OnLoad();
};
scwin.f_OnLoad = async function () {
  scwin.f_DivHoldEachWorkPlanList();
  await $c.sbm.execute($p, sbm_eqNrmCd);
  $c.gus.cfDisableObjects($p, [btn_01, btn_02, btn_03, btn_04, btn_05, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
  em_cvsslMgntNo.setFocus();
};
scwin.f_openPopUp = async function () {
  let args = {};
  args.cvsslMgntNo = em_cvsslMgntNo.getValue();
  args.impExpClsCd = "";
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", {
    width: 900,
    height: 400,
    modal: true,
    data: args
  });
  if (rtnValues != null) {
    em_cvsslMgntNo.setValue(rtnValues[0]);
  }
};
scwin.f_Retrieve = async function () {
  if (em_cvsslMgntNo.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["본선관리번호"]);
    em_cvsslMgntNo.setFocus();
    return;
  }
  let condition = "?carryingVesselManagementNumber=" + em_cvsslMgntNo.getValue();
  sbm_retrieve.action = "/ds.op.wrkplan.stvwrkplan.RetrieveCarryingVesselWorkPlanCMD.do" + condition;
  await $c.sbm.execute($p, sbm_retrieve);
  scwin.ds_wrkHoldInfo_301_SetEditCondition();
  if (ds_cvsslInfo_op302.getRowCount() == 0) {
    ds_cvsslInfo_op302.insertRow();
  }
};
scwin.f_DivHoldEachWorkPlanList = function () {
  let vsslNm = "";
  let lineNm = "";
  let shpCoNm = "";
  let impPortcnt = "";
  let expPortcnt = "";
  let impRepKcg = "";
  let expRepKcg = "";
  let wrkPlNm = "";
  let arrvlportDtm = "";
  let deprtportDtm = "";
  let dailyWorkPlan = "";
  if (ds_cvsslInfo.getRowCount() > 0) {
    vsslNm = ds_cvsslInfo.getCellData(0, "vsslNm");
    lineNm = ds_cvsslInfo.getCellData(0, "lineNm");
    shpCoNm = ds_cvsslInfo.getCellData(0, "shpCoNm");
    impPortcnt = ds_cvsslInfo.getCellData(0, "impPortcnt");
    expPortcnt = ds_cvsslInfo.getCellData(0, "expPortcnt");
    impRepKcg = ds_cvsslInfo.getCellData(0, "impRepKcg");
    expRepKcg = ds_cvsslInfo.getCellData(0, "expRepKcg");
    wrkPlNm = ds_cvsslInfo.getCellData(0, "wrkPlNm");
    if (ds_cvsslInfo.getCellData(0, "arrvlportDtm") != "") {
      arrvlportDtm = $c.gus.cfGetFormatStr($p, ds_cvsslInfo.getCellData(0, "arrvlportDtm"), "####/##/## ##:##");
    }
    if (ds_cvsslInfo.getCellData(0, "deprtportDtm") != "") {
      deprtportDtm = $c.gus.cfGetFormatStr($p, ds_cvsslInfo.getCellData(0, "deprtportDtm"), "####/##/## ##:##");
    }
    if (ds_cvsslInfo.getCellData(0, "cnt") == 0) {
      dailyWorkPlan = "NO";
      $c.gus.cfEnableObjects($p, [btn_01, btn_02, btn_03, btn_04, btn_05, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    } else {
      dailyWorkPlan = "YES";
      $c.gus.cfDisableBtn($p, [btn_01, btn_02, btn_03, btn_04, btn_05, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    }
  }
  let carryingVesselBasisInfo = "";
  carryingVesselBasisInfo = carryingVesselBasisInfo + '\x3Ctable class="table_bg" cellpadding="2" cellspacing="1" border="0" width="100%">' + '   \x3Ctr>' + '       \x3Ctd width="12%" class="table_header_right">선명\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">' + vsslNm + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">LINE\x3C/td>' + '       \x3Ctd width="24%" class="table_bg_bright">' + lineNm + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">선사\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">' + shpCoNm + '\x3C/td>' + '   \x3C/tr>';
  if (ds_cvsslInfo.getRowCount() == 0) {
    carryingVesselBasisInfo = carryingVesselBasisInfo + '   \x3Ctr>' + '       \x3Ctd width="12%" class="table_header_right">항차\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">&nbsp;\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">대표화종\x3C/td>' + '       \x3Ctd width="24%" class="table_bg_bright">&nbsp;\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">수출입구분\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">&nbsp;\x3C/td>' + '   \x3C/tr>';
  } else {
    if (ds_cvsslInfo.getCellData(ds_cvsslInfo.getRowPosition(), "impportcnt") != "") {
      carryingVesselBasisInfo = carryingVesselBasisInfo + '   \x3Ctr>' + '       \x3Ctd width="12%" class="table_header_right">항차\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">' + impPortcnt + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">대표화종\x3C/td>' + '       \x3Ctd width="24%" class="table_bg_bright">' + impRepKcg + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">수출입구분\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">수입\x3C/td>' + '   \x3C/tr>';
    }
    if (ds_cvsslInfo.getCellData(ds_cvsslInfo.getRowPosition(), "expportcnt") != "") {
      carryingVesselBasisInfo = carryingVesselBasisInfo + '   \x3Ctr>' + '       \x3Ctd width="12%" class="table_header_right">항차\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">' + expPortcnt + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">대표화종\x3C/td>' + '       \x3Ctd width="24%" class="table_bg_bright">' + expRepKcg + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">수출입구분\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">수출\x3C/td>' + '   \x3C/tr>';
    }
  }
  carryingVesselBasisInfo = carryingVesselBasisInfo + '   \x3Ctr>' + '       \x3Ctd width="12%" class="table_header_right">작업장\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">' + wrkPlNm + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">입항(예정)일시\x3C/td>' + '       \x3Ctd width="24%" class="table_bg_bright">' + arrvlportDtm + '\x3C/td>' + '       \x3Ctd width="12%" class="table_header_right">출항(예정)일시\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">' + deprtportDtm + '\x3C/td>' + '   \x3C/tr>' + '   \x3Ctr>' + '       \x3Ctd width="13%" class="table_header_right">일일하역작업계획여부\x3C/td>' + '       \x3Ctd width="19%" class="table_bg_bright">' + dailyWorkPlan + '\x3C/td>' + '       \x3Ctd width="13%" class="table_header_right">\x3C/td>' + '       \x3Ctd width="23%" class="table_bg_bright">\x3C/td>' + '       \x3Ctd width="13%" class="table_header_right">\x3C/td>' + '       \x3Ctd width="20%" class="table_bg_bright">\x3C/td>' + '   \x3C/tr>' + '\x3C/table>';

  // TODO: div_carryingVesselBasisInfo.innerHTML 대체 — WebSquare에서 동적 HTML 삽입 방식 검토 필요
  if (typeof div_carryingVesselBasisInfo !== "undefined") {
    div_carryingVesselBasisInfo.innerHTML = carryingVesselBasisInfo;
  }
};
scwin.f_ControlCU = async function () {
  if (!ds_cvsslInfo_op302.isUpdated() && !ds_wrkHoldInfo_303.isUpdated() && !ds_wrkHoldInfo_301.isUpdated() && !ds_wrkHoldInfo_304.isUpdated()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선작업계획"]);
    return;
  }
  if (ed_empNo.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["Chief 포맨"]);
    ed_empNo.setFocus();
    return;
  }
  for (let i = 0; i < ds_wrkHoldInfo_303.getRowCount(); i++) {
    if (ds_wrkHoldInfo_303.getCellData(i, "holdNo").trim() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업HOLD"]);
      ds_wrkHoldInfo_303.setRowPosition(i);
      gr_wrkHold.setFocusedCell(i, "holdNo");
      gr_wrkHold.setFocus();
      return;
    }
    for (let j = i + 1; j < ds_wrkHoldInfo_303.getRowCount(); j++) {
      if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_303.getCellData(j, "holdNo")) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["작업HOLD"]);
        ds_wrkHoldInfo_303.setRowPosition(j);
        gr_wrkHold.setFocusedCell(j, "holdNo");
        gr_wrkHold.setFocus();
        return;
      }
    }
  }
  for (let i = 0; i < ds_wrkHoldInfo_303.getRowCount(); i++) {
    let comCount = 0;
    let eqiCount = 0;
    let deleteCnt1 = 0;
    let deleteCnt2 = 0;
    let rowStatus303 = ds_wrkHoldInfo_303.getRowStatus(i);
    if (rowStatus303 == "C" || rowStatus303 == "U") {
      for (let j = 0; j < ds_wrkHoldInfo_301.getRowCount(); j++) {
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_301.getCellData(j, "holdNo")) {
          comCount++;
          if (ds_wrkHoldInfo_301.getRowStatus(j) == "D") {
            deleteCnt1++;
          }
        }
      }
      // TODO: CountFiltered 대응 — WebSquare 필터된 행 접근 방식 검토 필요
      for (let j = 0; j < ds_wrkHoldInfo_301.getFilteredRowIndex().length; j++) {
        let fIdx = ds_wrkHoldInfo_301.getFilteredRowIndex()[j];
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_301.getCellData(fIdx, "holdNo")) {
          comCount++;
          if (ds_wrkHoldInfo_301.getRowStatus(fIdx) == "D") {
            deleteCnt1++;
          }
        }
      }
      for (let k = 0; k < ds_wrkHoldInfo_304.getRowCount(); k++) {
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_304.getCellData(k, "holdNo")) {
          eqiCount++;
          if (ds_wrkHoldInfo_304.getRowStatus(k) == "D") {
            deleteCnt2++;
          }
        }
      }
      for (let k = 0; k < ds_wrkHoldInfo_304.getFilteredRowIndex().length; k++) {
        let fIdx = ds_wrkHoldInfo_304.getFilteredRowIndex()[k];
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_304.getCellData(fIdx, "holdNo")) {
          eqiCount++;
          if (ds_wrkHoldInfo_304.getRowStatus(fIdx) == "D") {
            deleteCnt2++;
          }
        }
      }
      if (comCount == deleteCnt1 && deleteCnt1 != 0) {
        await $c.gus.cfAlertMsg($p, "물량계획을 모두 삭제하려면 HOLD삭제로 중기계획과 일괄삭제하여야 합니다.");
        return;
      }
      if (eqiCount == deleteCnt2 && deleteCnt2 != 0) {
        await $c.gus.cfAlertMsg($p, "중기계획을 모두 삭제하려면 HOLD삭제로 물량계획과 일괄삭제하여야 합니다.");
        return;
      }
      if (ds_wrkHoldInfo_303.getCellData(i, "hveqInputPlanYn") == 0) {
        if (comCount == 0 || eqiCount == 0) {
          await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["추가한 홀드의 물량계획과 중기계획"]);
          return;
        }
      } else {
        if (comCount == 0) {
          await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["추가한 홀드의 물량계획"]);
          return;
        }
      }
    } else if (rowStatus303 == "R") {
      comCount = 0;
      eqiCount = 0;
      deleteCnt1 = 0;
      deleteCnt2 = 0;
      for (let j = 0; j < ds_wrkHoldInfo_301.getRowCount(); j++) {
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_301.getCellData(j, "holdNo")) {
          comCount++;
          if (ds_wrkHoldInfo_301.getRowStatus(j) == "D") {
            deleteCnt1++;
          }
        }
      }
      for (let j = 0; j < ds_wrkHoldInfo_301.getFilteredRowIndex().length; j++) {
        let fIdx = ds_wrkHoldInfo_301.getFilteredRowIndex()[j];
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_301.getCellData(fIdx, "holdNo")) {
          comCount++;
          if (ds_wrkHoldInfo_301.getRowStatus(fIdx) == "D") {
            deleteCnt1++;
          }
        }
      }
      for (let k = 0; k < ds_wrkHoldInfo_304.getRowCount(); k++) {
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_304.getCellData(k, "holdNo")) {
          eqiCount++;
          if (ds_wrkHoldInfo_304.getRowStatus(k) == "D") {
            deleteCnt2++;
          }
        }
      }
      for (let k = 0; k < ds_wrkHoldInfo_304.getFilteredRowIndex().length; k++) {
        let fIdx = ds_wrkHoldInfo_304.getFilteredRowIndex()[k];
        if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_304.getCellData(fIdx, "holdNo")) {
          eqiCount++;
          if (ds_wrkHoldInfo_304.getRowStatus(fIdx) == "D") {
            deleteCnt2++;
          }
        }
      }
      if (comCount == deleteCnt1 && deleteCnt1 != 0) {
        await $c.gus.cfAlertMsg($p, "물량계획을 모두 삭제하려면 HOLD삭제로 중기계획과 일괄삭제하여야 합니다.");
        return;
      }
      if (eqiCount == deleteCnt2 && deleteCnt2 != 0) {
        await $c.gus.cfAlertMsg($p, "중기계획을 모두 삭제하려면 HOLD삭제로 물량계획과 일괄삭제하여야 합니다.");
        return;
      }
    }
  }
  if (ds_wrkHoldInfo_301.isUpdated()) {
    let chkValid = await $c.gus.cfValidate($p, [gr_wrkHoldInfo]);
    if (!chkValid) {
      return;
    }
    for (let i = 0; i < ds_wrkHoldInfo_301.getRowCount(); i++) {
      if (ds_wrkHoldInfo_301.getCellData(i, "qty") == 0 && ds_wrkHoldInfo_301.getCellData(i, "wt") == 0 && ds_wrkHoldInfo_301.getCellData(i, "cbm") == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["물량"]);
        ds_wrkHoldInfo_301.setRowPosition(i);
        gr_wrkHoldInfo.setFocusedCell(i, "qty");
        gr_wrkHoldInfo.setFocus();
        return;
      }
    }
    let filteredRows301 = ds_wrkHoldInfo_301.getFilteredRowIndex();
    for (let j = 0; j < filteredRows301.length; j++) {
      let fIdx = filteredRows301[j];
      if (ds_wrkHoldInfo_301.getCellData(fIdx, "impExpClsCd").trim() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["수출입구분"]);
        // TODO: NameValueRow 대응 — 필터 해제 후 포커스 이동 로직 검토 필요
        return;
      }
      if (ds_wrkHoldInfo_301.getCellData(fIdx, "commNm").trim() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["품목/품명명"]);
        return;
      }
      if (ds_wrkHoldInfo_301.getCellData(fIdx, "commCd").trim() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["품목/품명코드"]);
        return;
      }
      if (ds_wrkHoldInfo_301.getCellData(fIdx, "wrkUnitCd").trim() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업단위"]);
        return;
      }
    }
    for (let j = 0; j < filteredRows301.length; j++) {
      let fIdx = filteredRows301[j];
      if (ds_wrkHoldInfo_301.getCellData(fIdx, "qty") == 0 && ds_wrkHoldInfo_301.getCellData(fIdx, "wt") == 0 && ds_wrkHoldInfo_301.getCellData(fIdx, "cbm") == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["물량"]);
        return;
      }
    }
  }
  if (ds_wrkHoldInfo_304.isUpdated()) {
    let chkValid304 = await $c.gus.cfValidate($p, [gr_wrkHoldInfo_304]);
    if (!chkValid304) {
      return;
    }
    for (let i = 0; i < ds_wrkHoldInfo_304.getRowCount(); i++) {
      if (ds_wrkHoldInfo_304.getCellData(i, "hveqNrmCd").trim() == "") {
        ds_wrkHoldInfo_304.setRowPosition(i);
        // TODO: ds_eqNrmCd.Filter() 대응
        if (ds_eqNrmCd.getRowCount() > 0) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["규격"]);
          ds_wrkHoldInfo_304.setRowPosition(i);
          gr_wrkHoldInfo_304.setFocusedCell(i, "hveqNrmCd");
          gr_wrkHoldInfo_304.setFocus();
          return;
        }
      }
      if (ds_wrkHoldInfo_304.getCellData(i, "invsslInputHhCnt") == 0 && ds_wrkHoldInfo_304.getCellData(i, "alngvsslInputHhCnt") == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["투입시간(Hrs.)"]);
        ds_wrkHoldInfo_304.setRowPosition(i);
        gr_wrkHoldInfo_304.setFocusedCell(i, "invsslInputHhCnt");
        gr_wrkHoldInfo_304.setFocus();
        return;
      }
    }
    let filteredRows304 = ds_wrkHoldInfo_304.getFilteredRowIndex();
    for (let j = 0; j < filteredRows304.length; j++) {
      let fIdx = filteredRows304[j];
      if (ds_wrkHoldInfo_304.getCellData(fIdx, "hveqNrmCd").trim() == "") {
        // TODO: 필터 해제 후 포커스 이동 로직 검토 필요
        if (ds_eqNrmCd.getRowCount() > 0) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["규격"]);
          return;
        }
      }
      if (ds_wrkHoldInfo_304.getCellData(fIdx, "invsslInputHhCnt") == 0 && ds_wrkHoldInfo_304.getCellData(fIdx, "alngvsslInputHhCnt") == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["투입시간(Hrs.)"]);
        return;
      }
    }
  }
  if (ica_qryStDt.getValue().trim() == "" || ed_qryStDtHh.getValue().trim() == "" || ica_qryEndDt.getValue().trim() == "" || ed_qryEndDtHh.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업기간"]);
    ica_qryStDt.setFocus();
    return;
  }
  if (ica_qryStDt.getValue() + ed_qryStDtHh.getValue() > ica_qryEndDt.getValue() + ed_qryEndDtHh.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_058);
    ica_qryStDt.setFocus();
    return;
  }
  if (ed_qryStDtHh.getValue().substr(0, 2) > "23") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_021, ["작업기간"]);
    ed_qryStDtHh.setFocus();
    return;
  }
  if (ed_qryStDtHh.getValue().substr(2, 2) > "59") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업기간"]);
    ed_qryStDtHh.setFocus();
    return;
  }
  if (ed_qryEndDtHh.getValue().substr(0, 2) > "24") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업기간"]);
    ed_qryEndDtHh.setFocus();
    return;
  }
  if (ed_qryEndDtHh.getValue().substr(0, 2) == "00" && ed_qryEndDtHh.getValue().substr(2, 2) == "00") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업기간"]);
    ed_qryEndDtHh.setFocus();
    return;
  }
  if (ed_qryEndDtHh.getValue().substr(0, 2) == "24" && ed_qryEndDtHh.getValue().substr(2, 2) > "00") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업기간"]);
    ed_qryEndDtHh.setFocus();
    return;
  }
  if (ed_qryEndDtHh.getValue().substr(2, 2) > "59") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_022, ["작업기간"]);
    ed_qryEndDtHh.setFocus();
    return;
  }
  let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk) {
    scwin.f_setCondition();
    await $c.sbm.execute($p, sbm_saveWrkPlanPerHold);
  }
};
scwin.f_ControlDelete = async function () {
  let chk = await $c.win.confirm($p, MSG_CM_CRM_008);
  if (chk) {
    ds_cvsslInfo.removeRow(0);
    await $c.sbm.execute($p, sbm_deleteWrkPlanAll);
  }
  scwin.f_Retrieve();
};
scwin.f_holdInsert = function () {
  if (ds_wrkHoldInfo_303.getRowCount() == 0) {
    if (ds_cvsslInfo.getCellData(0, "cnt") == 0) {
      $c.gus.cfEnableObjects($p, [btn_01, btn_02, btn_03, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    } else {
      $c.gus.cfDisableBtn($p, [btn_01, btn_02, btn_03, btn_04, btn_05, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    }
  }
  ds_wrkHoldInfo_303.insertRow();
  let curRow = ds_wrkHoldInfo_303.getRowPosition();
  ds_wrkHoldInfo_303.setCellData(curRow, "wrkStDt", ds_cvsslInfo.getCellData(0, "arrvlportDtm").substring(0, 8));
  ds_wrkHoldInfo_303.setCellData(curRow, "wrkEndDt", ds_cvsslInfo.getCellData(0, "deprtportDtm").substring(0, 8));
  gr_wrkHold.setFocusedCell(curRow, "holdNo");
  gr_wrkHold.setFocus();
};
scwin.f_holdDelete = async function () {
  let row = ds_wrkHoldInfo_303.getRowPosition();
  let chk = await $c.win.confirm($p, MSG_CM_CRM_008);
  if (chk) {
    if (ds_wrkHoldInfo_303.getRowStatus(row) == "C") {
      // TODO: NameValueRow 대응 — 해당 holdNo를 가진 행 찾기
      let holdNo = ds_wrkHoldInfo_303.getCellData(row, "holdNo");
      for (let i = ds_wrkHoldInfo_301.getRowCount() - 1; i >= 0; i--) {
        if (ds_wrkHoldInfo_301.getCellData(i, "holdNo") == holdNo) {
          ds_wrkHoldInfo_301.undoRow(i);
        }
      }
      for (let i = ds_wrkHoldInfo_304.getRowCount() - 1; i >= 0; i--) {
        if (ds_wrkHoldInfo_304.getCellData(i, "holdNo") == holdNo) {
          ds_wrkHoldInfo_304.undoRow(i);
        }
      }
      ds_wrkHoldInfo_303.undoRow(row);
      return;
    } else if (ds_wrkHoldInfo_301.isUpdated() || ds_wrkHoldInfo_304.isUpdated()) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_042, ["작업계획", "HOLD삭제"]);
      return;
    } else {
      ds_wrkHoldInfo_303.undoAll();
      let holdNo = ds_wrkHoldInfo_303.getCellData(row, "holdNo");
      ds_wrkHoldInfo_303.removeRow(row);
      for (let i = ds_wrkHoldInfo_301.getRowCount() - 1; i >= 0; i--) {
        if (ds_wrkHoldInfo_301.getCellData(i, "holdNo") == holdNo) {
          ds_wrkHoldInfo_301.removeRow(i);
        }
      }
      for (let i = ds_wrkHoldInfo_304.getRowCount() - 1; i >= 0; i--) {
        if (ds_wrkHoldInfo_304.getCellData(i, "holdNo") == holdNo) {
          ds_wrkHoldInfo_304.removeRow(i);
        }
      }
      await $c.sbm.execute($p, sbm_deleteWrkPlanPerHold);
      scwin.f_Retrieve();
    }
  }
};
scwin.f_setCondition = function () {
  let userStatus302 = 0;
  let userStatus303 = 0;
  let curRow303 = ds_wrkHoldInfo_303.getRowPosition();
  let curRow302 = ds_cvsslInfo_op302.getRowPosition();
  let sysStatus303 = ds_wrkHoldInfo_303.getRowStatus(curRow303);
  if (sysStatus303 == "R") {
    userStatus302 = 0;
    userStatus303 = 0;
    if (ds_cvsslInfo_op302.getCellData(curRow302, "cvsslMgntNo") == ds_cvsslInfo.getCellData(0, "cvsslMgntNo")) {
      userStatus302 = 3;
    }
    if (ds_wrkHoldInfo_303.getCellData(curRow303, "cvsslMgntNo") == ds_cvsslInfo.getCellData(0, "cvsslMgntNo") && ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo") == ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo")) {
      userStatus303 = 3;
    }
    if (ds_wrkHoldInfo_303.getCellData(curRow303, "cvsslMgntNo") != ds_cvsslInfo.getCellData(0, "cvsslMgntNo") || ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo") != ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo")) {
      userStatus303 = 1;
    }
  }
  if (sysStatus303 == "C") {
    userStatus302 = 1;
    userStatus303 = 1;
    if (ds_cvsslInfo_op302.getCellData(0, "cvsslMgntNo") == ds_cvsslInfo.getCellData(0, "cvsslMgntNo")) {
      userStatus302 = 3;
    }
    if (ds_wrkHoldInfo_303.getCellData(curRow303, "cvsslMgntNo") == ds_cvsslInfo.getCellData(0, "cvsslMgntNo") && ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo") == ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo")) {
      userStatus303 = 3;
    }
  }
  if (sysStatus303 == "U") {
    userStatus302 = 3;
    userStatus303 = 3;
  }
  let statusMap302 = {
    0: "R",
    1: "C",
    3: "U"
  };
  let statusMap303 = {
    0: "R",
    1: "C",
    3: "U"
  };
  ds_cvsslInfo_op302.setRowStatus(curRow302, statusMap302[userStatus302] || "R");
  ds_wrkHoldInfo_303.setRowStatus(curRow303, statusMap303[userStatus303] || "R");
  for (let i = 0; i < ds_wrkHoldInfo_301.getRowCount(); i++) {
    ds_wrkHoldInfo_301.setCellData(i, "cvsslMgntNo", ds_cvsslInfo.getCellData(0, "cvsslMgntNo"));
  }
  let curRow301 = ds_wrkHoldInfo_301.getRowPosition();
  ds_wrkHoldInfo_301.setCellData(curRow301, "holdNo", ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo"));
  ds_cvsslInfo_op302.setCellData(curRow302, "cvsslMgntNo", ds_cvsslInfo.getCellData(0, "cvsslMgntNo"));
  for (let i = 0; i < ds_wrkHoldInfo_303.getRowCount(); i++) {
    ds_wrkHoldInfo_303.setCellData(i, "cvsslMgntNo", ds_cvsslInfo.getCellData(0, "cvsslMgntNo"));
  }
  ds_wrkHoldInfo_303.setCellData(curRow303, "holdNo", ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo"));
  for (let i = 0; i < ds_wrkHoldInfo_304.getRowCount(); i++) {
    ds_wrkHoldInfo_304.setCellData(i, "cvsslMgntNo", ds_cvsslInfo.getCellData(0, "cvsslMgntNo"));
  }
  let curRow304 = ds_wrkHoldInfo_304.getRowPosition();
  ds_wrkHoldInfo_304.setCellData(curRow304, "holdNo", ds_wrkHoldInfo_303.getCellData(curRow303, "holdNo"));
};
scwin.f_ds_wrkHoldInfo_304_AddRow = async function () {
  if (ds_wrkHoldInfo_303.getRowCount() == 0) {
    await $c.win.alert($p, "먼저 작업Hold를 입력하십시요.");
    return;
  }
  if (ds_wrkHoldInfo_303.getCellData(ds_wrkHoldInfo_303.getRowPosition(), "holdNo").trim() == "") {
    await $c.win.alert($p, "먼저 작업Hold를 입력하십시요.");
    gr_wrkHold.setFocusedCell(ds_wrkHoldInfo_303.getRowPosition(), "holdNo");
    gr_wrkHold.setFocus();
    return;
  }
  ds_wrkHoldInfo_304.insertRow();
  let curRow = ds_wrkHoldInfo_304.getRowPosition();
  ds_wrkHoldInfo_304.setCellData(curRow, "cvsslMgntNo", ds_cvsslInfo.getCellData(0, "cvsslMgntNo"));
  ds_wrkHoldInfo_304.setCellData(curRow, "holdNo", ds_wrkHoldInfo_303.getCellData(ds_wrkHoldInfo_303.getRowPosition(), "holdNo"));
  gr_wrkHoldInfo_304.setColumnProp("hveqKndCd", "readOnly", false);
  gr_wrkHoldInfo_304.setColumnProp("hveqNrmCd", "readOnly", false);
};
scwin.ds_wrkHoldInfo_301_SetEditCondition = function () {
  gr_wrkHoldInfo.setColumnProp("impExpClsCd", "readOnly", true);
  gr_wrkHoldInfo.setColumnProp("commCd", "readOnly", true);
  gr_wrkHoldInfo.setColumnProp("commNm", "readOnly", true);
};
scwin.f_wrkHoldInfo_301_AddRow = async function () {
  if (ds_wrkHoldInfo_303.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업HOLD"]);
    scwin.f_holdInsert();
    return;
  }
  if (ds_wrkHoldInfo_303.getCellData(ds_wrkHoldInfo_303.getRowPosition(), "holdNo").trim() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업HOLD"]);
    gr_wrkHold.setFocusedCell(ds_wrkHoldInfo_303.getRowPosition(), "holdNo");
    gr_wrkHold.setFocus();
    return;
  }
  ds_wrkHoldInfo_301.insertRow();
  let curRow = ds_wrkHoldInfo_301.getRowPosition();
  ds_wrkHoldInfo_301.setCellData(curRow, "cvsslMgntNo", ds_cvsslInfo.getCellData(0, "cvsslMgntNo"));
  ds_wrkHoldInfo_301.setCellData(curRow, "holdNo", ds_wrkHoldInfo_303.getCellData(ds_wrkHoldInfo_303.getRowPosition(), "holdNo"));
  if (ds_cvsslInfo.getCellData(0, "impPortcnt") != "" && ds_cvsslInfo.getCellData(0, "expPortcnt") != "") {
    gr_wrkHoldInfo.setColumnProp("impExpClsCd", "readOnly", false);
  } else if (ds_cvsslInfo.getCellData(0, "impPortcnt") != "" && ds_cvsslInfo.getCellData(0, "expPortcnt") == "") {
    ds_wrkHoldInfo_301.setCellData(curRow, "impExpClsCd", "I");
    gr_wrkHoldInfo.setColumnProp("impExpClsCd", "readOnly", true);
  } else if (ds_cvsslInfo.getCellData(0, "impPortcnt") == "" && ds_cvsslInfo.getCellData(0, "expPortcnt") != "") {
    ds_wrkHoldInfo_301.setCellData(curRow, "impExpClsCd", "O");
    gr_wrkHoldInfo.setColumnProp("impExpClsCd", "readOnly", true);
  }
  gr_wrkHoldInfo.setColumnProp("commCd", "readOnly", false);
  gr_wrkHoldInfo.setColumnProp("commNm", "readOnly", false);
};
scwin.f_cvsslPlanSheetPrint = async function () {
  await $c.win.alert($p, "준비중 입니다.");
};
scwin.f_vsslInInfoRetrieve = async function () {
  let vsslCd = ds_cvsslInfo.getCellData(0, "vsslCd");
  if (vsslCd == undefined || vsslCd == "") {
    await $c.win.alert($p, "본선정보 조회 후 조회 가능합니다.");
    em_cvsslMgntNo.setFocus();
    return;
  }
  let args = {};
  args.vsslCd = vsslCd;
  await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_08p.xml", {
    width: 825,
    height: 540,
    modal: true,
    data: args
  });
};
scwin.f_openPopUP1 = function () {
  if (txt_vsslCfNm.getValue() == "") {
    ed_empNo.setValue("");
  } else {
    scwin.f_openCommonPopUpForMan(1, "T");
  }
};
scwin.f_openCommonPopUpForMan = async function (disGubun, pWinCloseTF) {
  if (ds_cvsslInfo.getRowCount() == 0) return;
  let sWinCloseTF = pWinCloseTF == null ? "T" : pWinCloseTF;
  let rtnList = null;
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      pCode = ed_empNo.getValue();
      pName = txt_vsslCfNm.getValue();
      let arrParam = {};
      arrParam.pCode = pCode;
      arrParam.pName = pName;
      arrParam.lobranCd = ds_cvsslInfo.getCellData(0, "lobranCd");
      arrParam.lobranNm = "";
      arrParam.wrkPlCd = "";
      arrParam.jobTypeCd = "01,D";
      arrParam.dtlJobTypeCd = "02,D";
      arrParam.rankCd = "";
      arrParam.wrkDt = "";
      arrParam.deployYn = "Y";
      arrParam.winCloseTF = sWinCloseTF;
      arrParam.dtlJobTypeFlag = "1";
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
        width: 530,
        height: 450,
        modal: true,
        data: arrParam
      });
      if (rtnList != null && rtnList[3] != undefined) {
        if (rtnList[3] == undefined) {
          return;
        }
        ed_empNo.setValue(rtnList[2]);
        txt_vsslCfNm.setValue(rtnList[3]);
        return;
      } else {
        ed_empNo.setValue("");
        txt_vsslCfNm.setValue("");
      }
      break;
  }
};
scwin.f_openCommPopUpGrid = function (gubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  if (gubun == 1) {
    pCode = "";
    pName = ds_wrkHoldInfo_301.getCellData(row, "commNm");
  } else if (gubun == 2) {
    pCode = ds_wrkHoldInfo_301.getCellData(row, "commCd");
    pName = "";
  }
  rtnList = $c.gus.cfCommonPopUp($p, "retrieveCommInfo", pCode, pName, pClose, "3", "품목/품명코드,품목/품명,구분", "105,190,70", "4,5,6,7,8,9,10", ",,,A4", null, null, null, null, null, "F", "품목/품명,품명코드,품명");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_wrkHoldInfo_301, row, "commCd", "commNm");
  if (rtnList != null && rtnList[0] != "N/A" && rtnList[6] != "") {
    ds_wrkHoldInfo_301.setCellData(row, "wrkUnitCd", "Q");
  } else {
    ds_wrkHoldInfo_301.setCellData(row, "wrkUnitCd", "");
  }
  return false;
};
scwin.f_hveqInputPlanYn = function () {
  let curRow = ds_wrkHoldInfo_303.getRowPosition();
  if (chb_hveqInputPlanYn.getValue() != "") {
    ds_wrkHoldInfo_303.setCellData(curRow, "hveqInputPlanYn", 1);
    for (let i = ds_wrkHoldInfo_304.getRowCount() - 1; i >= 0; i--) {
      ds_wrkHoldInfo_304.undoRow(i);
      ds_wrkHoldInfo_304.removeRow(i);
    }
  } else {
    ds_wrkHoldInfo_303.setCellData(curRow, "hveqInputPlanYn", 0);
    for (let i = 0; i < ds_wrkHoldInfo_304.getRowCount(); i++) {
      ds_wrkHoldInfo_304.undoRow(i);
    }
  }
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  let vDay = "본선관리번호 : " + em_cvsslMgntNo.getValue();
  $c.data.downloadGridViewExcel($p, argGrid, {
    fileName: argTitle + ".xlsx",
    sheetName: argTitle
  });
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, null, []);
  em_cvsslMgntNo.setValue("");
};
scwin.sbm_saveWrkPlanPerHold_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_saveWrkPlanPerHold_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_deleteWrkPlanPerHold_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
};
scwin.sbm_deleteWrkPlanPerHold_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_deleteWrkPlanAll_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
};
scwin.sbm_deleteWrkPlanAll_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_eqNrmCd_submitdone = function (e) {};
scwin.sbm_eqNrmCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_cvsslInfo_onloadcompleted = async function (e) {
  let cntRow = ds_cvsslInfo.getRowCount();
  if (cntRow <= 0) {
    await $c.gus.cfAlertMsg($p, "미등록된 본선관리번호 입니다. 확인후 다시 입력해주세요");
    $c.gus.cfEnableObjects($p, [btn_01, btn_02, btn_03, btn_04, btn_05, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    scwin.f_DivHoldEachWorkPlanList();
    em_cvsslMgntNo.setValue("");
    em_cvsslMgntNo.setFocus();
  } else {
    scwin.f_DivHoldEachWorkPlanList();
  }
};
scwin.ds_wrkHoldInfo_303_onloadcompleted = function (e) {
  let rowCnt = ds_wrkHoldInfo_303.getRowCount();
  if (rowCnt == 0) {
    if (ds_cvsslInfo.getCellData(0, "cnt") == 0) {
      $c.gus.cfEnableObjects($p, [btn_04, btn_05]);
    } else {
      $c.gus.cfDisableBtn($p, [btn_01, btn_02, btn_03, btn_04, btn_05, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    }
  } else {
    if (ds_cvsslInfo.getCellData(0, "cnt") == 0) {
      $c.gus.cfEnableObjects($p, [btn_01, btn_02, btn_03, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    } else {
      $c.gus.cfDisableBtn($p, [btn_01, btn_02, btn_03, btn_04, btn_05, btn_06, btn_07, btn_08, btn_11, btn_12, chb_hveqInputPlanYn]);
    }
  }
};
scwin.ds_wrkHoldInfo_301_onloadcompleted = function (e) {
  let rowCnt = ds_wrkHoldInfo_301.getRowCount();
  if (rowCnt == 0) return;
  // TODO: ds_wrkHoldInfo_301.Filter() 대응
};
scwin.ds_wrkHoldInfo_304_onloadcompleted = function (e) {
  let rowCnt = ds_wrkHoldInfo_304.getRowCount();
  if (rowCnt == 0) return;
  // TODO: ds_wrkHoldInfo_304.Filter() 대응
  gr_wrkHoldInfo_304.setColumnProp("hveqKndCd", "readOnly", true);
  gr_wrkHoldInfo_304.setColumnProp("hveqNrmCd", "readOnly", true);

  // TODO: ds_eqNrmCd.Filter() 대응
  if (ds_eqNrmCd.getRowCount() != 0) {
    ds_eqNrmCd.insertRow(0);
    ds_eqNrmCd.setCellData(0, "name", "");
    ds_eqNrmCd.setCellData(0, "code", "");
  }
};
scwin.gr_wrkHoldInfo_304_onaftercolumnmove = function (rowIndex, colId) {
  // TODO: ds_eqNrmCd.Filter() 대응
  if (ds_eqNrmCd.getRowCount() != 0) {
    ds_eqNrmCd.insertRow(0);
    ds_eqNrmCd.setCellData(0, "name", "");
    ds_eqNrmCd.setCellData(0, "code", "");
  }
};
scwin.gr_wrkHold_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_wrkHoldInfo_303.getRowStatus(rowIndex) == "C") {
    gr_wrkHold.setColumnProp("holdNo", "readOnly", false);
  } else {
    gr_wrkHold.setColumnProp("holdNo", "readOnly", true);
  }
  if (ds_wrkHoldInfo_303.getCellData(rowIndex, "hveqInputPlanYn") == 1) {
    chb_hveqInputPlanYn.setValue("Y");
  } else {
    chb_hveqInputPlanYn.setValue("");
  }
  // TODO: ds_wrkHoldInfo_301.Filter() / ds_wrkHoldInfo_304.Filter() 대응
};
scwin.gr_wrkHold_oneditend = async function (rowIndex, colId, oldValue, newValue) {
  if (colId == "holdNo") {
    for (let i = 0; i < ds_wrkHoldInfo_303.getRowCount(); i++) {
      if (ds_wrkHoldInfo_303.getCellData(i, "holdNo") == ds_wrkHoldInfo_303.getCellData(rowIndex, "holdNo") && i != rowIndex) {
        await $c.gus.cfAlertMsg($p, "동일한 HOLD번호는 입력하실 수 없습니다.");
        ds_wrkHoldInfo_303.setCellData(rowIndex, "holdNo", oldValue);
        return;
      }
    }
    for (let i = 0; i < ds_wrkHoldInfo_301.getRowCount(); i++) {
      if (ds_wrkHoldInfo_301.getCellData(i, "holdNo") == oldValue) {
        ds_wrkHoldInfo_301.setCellData(i, "holdNo", ds_wrkHoldInfo_303.getCellData(rowIndex, "holdNo"));
      }
    }
    for (let i = 0; i < ds_wrkHoldInfo_304.getRowCount(); i++) {
      if (ds_wrkHoldInfo_304.getCellData(i, "holdNo") == oldValue) {
        ds_wrkHoldInfo_304.setCellData(i, "holdNo", ds_wrkHoldInfo_303.getCellData(rowIndex, "holdNo"));
      }
    }
  }
};
scwin.gr_wrkHoldInfo_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "commNm":
      scwin.f_openCommPopUpGrid(1, rowIndex, "F");
      break;
    case "commCd":
      scwin.f_openCommPopUpGrid(2, rowIndex, "F");
      break;
  }
};
scwin.gr_wrkHoldInfo_oneditend = async function (rowIndex, colId, oldValue, newValue) {
  let row = rowIndex;
  let olddata = oldValue;
  switch (colId) {
    case "commNm":
      if (ds_wrkHoldInfo_301.getCellData(row, colId) != "" && ds_wrkHoldInfo_301.getCellData(row, colId) != olddata) {
        ds_wrkHoldInfo_301.setCellData(row, "commCd", "");
        scwin.f_openCommPopUpGrid(1, row, "T");
      } else if (ds_wrkHoldInfo_301.getCellData(row, colId) == "") {
        ds_wrkHoldInfo_301.setCellData(row, "commCd", "");
        ds_wrkHoldInfo_301.setCellData(row, "commNm", "");
      }
      break;
    case "commCd":
      if (ds_wrkHoldInfo_301.getCellData(row, colId) != "" && ds_wrkHoldInfo_301.getCellData(row, colId) != olddata) {
        ds_wrkHoldInfo_301.setCellData(row, "commNm", "");
        scwin.f_openCommPopUpGrid(2, row, "T");
      } else if (ds_wrkHoldInfo_301.getCellData(row, colId) == "") {
        ds_wrkHoldInfo_301.setCellData(row, "commCd", "");
        ds_wrkHoldInfo_301.setCellData(row, "commNm", "");
      }
      break;
  }
  if (colId == "qty" && olddata != ds_wrkHoldInfo_301.getCellData(row, "qty")) {
    if (ds_wrkHoldInfo_301.getCellData(row, colId) == 0) {
      ds_wrkHoldInfo_301.setCellData(row, "wt", 0);
      ds_wrkHoldInfo_301.setCellData(row, "cbm", 0);
      return;
    } else {
      let qty = 0;
      let wt = 0;
      let cbm = 0;
      for (let i = 0; i < ds_cVMBOLInformationDTOList.getRowCount(); i++) {
        if (ds_cVMBOLInformationDTOList.getCellData(i, "commCd") == ds_wrkHoldInfo_301.getCellData(row, "commCd")) {
          qty = qty + Number(ds_cVMBOLInformationDTOList.getCellData(i, "qty"));
          wt = wt + Number(ds_cVMBOLInformationDTOList.getCellData(i, "wt"));
          cbm = cbm + Number(ds_cVMBOLInformationDTOList.getCellData(i, "cbm"));
        }
      }
      if (qty > 0) {
        let vs = qty / ds_wrkHoldInfo_301.getCellData(row, colId);
        ds_wrkHoldInfo_301.setCellData(row, "wt", Math.round(wt / vs * 1000) / 1000);
        ds_wrkHoldInfo_301.setCellData(row, "cbm", Math.round(cbm / vs * 1000) / 1000);
      }
    }
  }
  if (colId == "wt" && olddata != ds_wrkHoldInfo_301.getCellData(row, "wt")) {
    if (!$c.gus.cfValidateValue($p, ds_wrkHoldInfo_301.getCellData(row, colId), "minNumber=0.000")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_007, ["중량(톤)"]);
      ds_wrkHoldInfo_301.setCellData(row, colId, olddata);
      return false;
    }
  }
  if (colId == "cbm" && olddata != ds_wrkHoldInfo_301.getCellData(row, "cbm")) {
    if (!$c.gus.cfValidateValue($p, ds_wrkHoldInfo_301.getCellData(row, colId), "minNumber=0.000")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_007, ["CBM"]);
      ds_wrkHoldInfo_301.setCellData(row, colId, olddata);
      return false;
    }
  }
  if (colId == "shiftPerWrkVol" && olddata != ds_wrkHoldInfo_301.getCellData(row, "shiftPerWrkVol")) {
    if (!$c.gus.cfValidateValue($p, ds_wrkHoldInfo_301.getCellData(row, colId), "minNumber=0.000")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_007, ["시간당 작업량"]);
      ds_wrkHoldInfo_301.setCellData(row, colId, olddata);
      return false;
    }
  }
};
scwin.ds_wrkHoldInfo_301_onrowpositionchange = function (rowIndex) {
  $c.gus.cfPrepareHidVal($p, ds_wrkHoldInfo_301, rowIndex, ["commCd", "commNm"]);
};
scwin.ds_wrkHoldInfo_301_oncelldatachange = async function (info) {
  let row = info.row;
  let colId = info.colId;
  if (colId == "impExpClsCd" && ds_wrkHoldInfo_301.getCellData(row, "commCd") != "" || colId == "commCd" && ds_wrkHoldInfo_301.getCellData(row, "impExpClsCd") != "") {
    for (let i = 0; i < ds_wrkHoldInfo_301.getRowCount(); i++) {
      if (ds_wrkHoldInfo_301.getCellData(row, "commCd") == ds_wrkHoldInfo_301.getCellData(i, "commCd") && ds_wrkHoldInfo_301.getCellData(row, "holdNo") == ds_wrkHoldInfo_301.getCellData(i, "holdNo") && ds_wrkHoldInfo_301.getCellData(row, "impExpClsCd") == ds_wrkHoldInfo_301.getCellData(i, "impExpClsCd") && i != row) {
        await $c.gus.cfAlertMsg($p, "동일한 HOLD와 수출입구분에 같은 품목/품명을 계획할 수 없습니다.");
        ds_wrkHoldInfo_301.setCellData(row, "commCd", "");
        ds_wrkHoldInfo_301.setCellData(row, "commNm", "");
        return;
      }
    }
  }
};
scwin.ds_wrkHoldInfo_304_oncelldatachange = async function (info) {
  let row = info.row;
  let colId = info.colId;
  if (colId == "hveqKndCd") {
    ds_wrkHoldInfo_304.setCellData(row, "hveqNrmCd", "");
    // TODO: ds_eqNrmCd.Filter() 대응
    if (ds_eqNrmCd.getRowCount() == 0) {
      ds_wrkHoldInfo_304.setCellData(row, "hveqNrmCd", " ");
    }
  } else if (colId == "hveqNrmCd") {
    for (let i = 0; i < ds_wrkHoldInfo_304.getRowCount(); i++) {
      if (ds_wrkHoldInfo_304.getCellData(row, "holdNo") == ds_wrkHoldInfo_304.getCellData(i, "holdNo") && ds_wrkHoldInfo_304.getCellData(row, "hveqKndCd") == ds_wrkHoldInfo_304.getCellData(i, "hveqKndCd") && ds_wrkHoldInfo_304.getCellData(row, "hveqNrmCd") == ds_wrkHoldInfo_304.getCellData(i, "hveqNrmCd") && i != row) {
        await $c.gus.cfAlertMsg($p, "동일한 HOLD에 같은 중기종류의 규격을 계획할 수 없습니다.");
        ds_wrkHoldInfo_304.setCellData(row, "hveqKndCd", "");
        ds_wrkHoldInfo_304.setCellData(row, "hveqNrmCd", "");
        return;
      }
    }
  }
};
scwin.gr_wrkHoldInfo_304_oneditend = async function (rowIndex, colId, oldValue, newValue) {
  let row = rowIndex;
  let olddata = oldValue;
  if (colId == "invsslInputHhCnt" && olddata != ds_wrkHoldInfo_304.getCellData(row, "invsslInputHhCnt")) {
    if (ds_wrkHoldInfo_304.getCellData(row, colId) == 0) {
      ds_wrkHoldInfo_304.setCellData(row, "invsslInputShiftCnt", 0);
    } else if (ds_wrkHoldInfo_304.getCellData(row, colId) > 0) {
      ds_wrkHoldInfo_304.setCellData(row, "invsslInputShiftCnt", Math.round(ds_wrkHoldInfo_304.getCellData(row, colId) / 8 * 10) / 10);
    }
  }
  if (colId == "alngvsslInputHhCnt" && olddata != ds_wrkHoldInfo_304.getCellData(row, "alngvsslInputHhCnt")) {
    if (ds_wrkHoldInfo_304.getCellData(row, colId) == 0) {
      ds_wrkHoldInfo_304.setCellData(row, "alngvsslInputShiftCnt", 0);
    } else if (ds_wrkHoldInfo_304.getCellData(row, colId) > 0) {
      ds_wrkHoldInfo_304.setCellData(row, "alngvsslInputShiftCnt", Math.round(ds_wrkHoldInfo_304.getCellData(row, colId) / 8 * 10) / 10);
    }
  }
  if (colId == "invsslInputShiftCnt" && olddata != ds_wrkHoldInfo_304.getCellData(row, "invsslInputShiftCnt")) {
    if (!$c.gus.cfValidateValue($p, ds_wrkHoldInfo_304.getCellData(row, colId), "minNumber=0.0")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_007, ["투입시간(Shift수)"]);
      ds_wrkHoldInfo_304.setCellData(row, colId, olddata);
      return false;
    }
  }
  if (colId == "alngvsslInputShiftCnt" && olddata != ds_wrkHoldInfo_304.getCellData(row, "alngvsslInputShiftCnt")) {
    if (!$c.gus.cfValidateValue($p, ds_wrkHoldInfo_304.getCellData(row, colId), "minNumber=0.0")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_007, ["투입시간(Shift수)"]);
      ds_wrkHoldInfo_304.setCellData(row, colId, olddata);
      return false;
    }
  }
};
scwin.ed_empNo_onblur = function (e) {
  if (ed_empNo.getValue() == "") {
    txt_vsslCfNm.setValue("");
  } else {
    scwin.f_openCommonPopUpForMan(1, "T");
  }
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_openPopUp();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.retrieveButton_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_04_onclick = function (e) {
  scwin.f_holdInsert();
};
scwin.btn_05_onclick = function (e) {
  scwin.f_holdDelete();
};
scwin.btn_09_onclick = function (e) {
  scwin.f_cvsslPlanSheetPrint();
};
scwin.btn_10_onclick = function (e) {
  scwin.f_vsslInInfoRetrieve();
};
scwin.btn_11_onclick = function (e) {
  scwin.f_ControlCU();
};
scwin.btn_12_onclick = function (e) {
  scwin.f_ControlDelete();
};
scwin.chb_hveqInputPlanYn_onviewchange = function (e) {
  scwin.f_hveqInputPlanYn();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'em_cvsslMgntNo',placeholder:'',style:'width: 100px;',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'retrieveButton',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일일하역작업계획여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Chief 포맨 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_emp',codeId:'ed_empNo',nameId:'txt_vsslCfNm',hideName:'Y',popupID:'',style:'width: 250px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업 HOLD수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_holdCnt',placeholder:'',style:'width:50px;',ref:'data:ds_cvsslInfo_op302.wrkHoldCnt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HOLD',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'고박업체 투입여부 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_fixgCoInputYn',ref:'data:ds_cvsslInfo_op302.fixgCoInputYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선 포맨 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_formanCnt',placeholder:'',class:'',ref:'data:ds_cvsslInfo_op302.cvsslFmanCnt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'명',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'육상 포맨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_grdFormanCnt',placeholder:'',style:'width:50px;',ref:'data:ds_cvsslInfo_op302.groundFmanCnt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'명',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'용역직 투입여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_servPstInputYn',ref:'data:ds_cvsslInfo_op302.servPstInputYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 30%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하목록현황',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_cVMBOLInformationDTOList',style:'',autoFit:'allColumn',id:'gr_cVMBOLInformationDTOList',visibleRowNum:'4',class:'wq_gvw',autoFitMinWidth:'500',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'comm',value:'품목/품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',value:'BL번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wt',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cbm',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'comm',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column45',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column40',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column38',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column37',displayMode:'label',textAlign:'right',expression:'sum(\'wt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column36',displayMode:'label',textAlign:'right',expression:'sum(\'cbm\')',dataType:'float',displayFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'본선작업계획현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_holdWorkPlan',id:'gr_holdWrkPlan',style:'',visibleRowNum:'3',visibleRowNumFix:'true',autoFitMinWidth:'1200',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',value:'HOLD',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',value:'수출입<br/>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품목/품명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',value:'수량',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',value:'중량(톤)',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',value:'CBM',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',value:'HOLD',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPeriod',inputType:'text',value:'작업기간',width:'220',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkShiftCnt',inputType:'text',value:'작업<br/>Shift수',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionInputPartyCnt',inputType:'text',value:'항운노조<br/>(반수)',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'craneInputCnt',value:'투입중기(Hrs.)',displayMode:'label',colSpan:'4',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'holdNo',value:'크레인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'impExpClsCd',value:'지게차/R.S',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'Ex',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'기타',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'80',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holdNo',inputType:'text',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPeriod',inputType:'text',width:'220',colMerge:'true',displayFormat:'####/##/## ##:##~####/##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkShiftCnt',inputType:'text',width:'80',textAlign:'right',colMerge:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionInputPartyCnt',inputType:'text',width:'100',colMerge:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'craneInputCnt',displayMode:'label',colMerge:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fliftInputCnt',displayMode:'label',colMerge:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'excvInputCnt',displayMode:'label',colMerge:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'etcHveqInputCnt',displayMode:'label',colMerge:'true',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'wt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'cbm\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label',value:'{sum(reWrkShiftCnt)}'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label',value:'{sum(reLunionInputPartyCnt)}'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',displayMode:'label',value:'{sum(reCraneInputCnt)}'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',value:'{sum(reFliftInputCnt)}'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label',value:'{sum(reExcvInputCnt)}'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label',value:'{sum(reEtcHveqInputCnt)}'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{style:'width: 250px;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'HOLD별계획수립',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_wrkHoldInfo_303',style:'',autoFit:'allColumn',id:'gr_wrkHold',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'holdNo',value:'작업HOLD',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'holdNo',value:'',displayMode:'label',allowChar:'0-9',maxLength:'2'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_04',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HOLD추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_05',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HOLD삭제'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:' HOLD별 물량계획',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_wrkHoldInfo_301',style:'',autoFit:'allColumn',id:'gr_wrkHoldInfo',visibleRowNum:'3',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'impExpClsCd',value:'수출입<br/>구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'commNm',value:'품목/품명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commCd',value:'품목/품명코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',value:'중량(톤)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',value:'CBM',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkUnitCd',value:'작업단위',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftPerWrkVol',value:'시간당<br/>작업량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'needHhCnt',value:'HRS',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'needShiftCnt',value:'Shift',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'impExpClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'textImage',id:'commNm',displayMode:'label',textAlign:'left',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'commCd',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'wrkUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'shiftPerWrkVol',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'needHhCnt',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:'',dataType:'number',displayFormat:'#,###'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Round((qty/shiftPerWrkVol)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Q'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'W'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0)'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'0)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Round((wt/shiftPerWrkVol)'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Round((cbm/shiftPerWrkVol)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'needShiftCnt',displayMode:'label',textAlign:'center',allOption:'',chooseOption:'',ref:'',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Round((qty/shiftPerWrkVol/8)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Q'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'W'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1)'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Round((wt/shiftPerWrkVol/8)'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Round((cbm/shiftPerWrkVol/8)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'HOLD별 작업기간계획',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업기간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_qryStDt',pickerType:'dynamic',style:'',ref:'data:ds_wrkHoldInfo_303.wrkStDt'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_qryStDtHh',style:'width: 50px;',ref:'data:ds_wrkHoldInfo_303.wrkStHh',mandatory:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_qryEndDt',pickerType:'dynamic',style:'',ref:'data:ds_wrkHoldInfo_303.wrkEndDt'}},{T:1,N:'xf:input',A:{class:'tac',dataType:'time',id:'ed_qryEndDtHh',style:'width: 50px;',ref:'data:ds_wrkHoldInfo_303.wrkEndHh',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작업Shift수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_shiftCnt',placeholder:'',style:'width:70px;',ref:'data:ds_wrkHoldInfo_303.wrkShiftCnt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'항운노조 반수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_nozoCnt',placeholder:'',style:'width:70px;',ref:'data:ds_wrkHoldInfo_303.lunionInputCnt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'HOLD별 중기계획',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_hveqInputPlanYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'RORO(중기 미사용)'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_wrkHoldInfo_304',id:'gr_wrkHoldInfo_304',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqKndCd',inputType:'text',style:'',value:'중기종류',width:'180',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqNrmCd',inputType:'text',style:'',value:'규격',width:'170',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslEqYn',inputType:'text',style:'',value:'본선장비여부',width:'120',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'invsslInputShiftCnt',inputType:'text',style:'',value:'투입시간(Shift수)',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alngvsslInputShiftCnt',inputType:'text',style:'',value:'투입시간(Hrs.)',width:'140',colSpan:'2',rowSpan:'',class:'txt-red'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'hveqKndCd',value:'선내',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'hveqNrmCd',value:'선측',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'cvsslEqYn',value:'선내',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'invsslInputShiftCnt',value:'선측',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqKndCd',inputType:'select',style:'',value:'',width:'180',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqNrmCd',inputType:'text',style:'',value:'',width:'170'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrmCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslEqYn',inputType:'select',style:'',value:'',width:'120',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'invsslInputShiftCnt',inputType:'text',style:'',value:'',width:'90',textAlign:'right',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alngvsslInputShiftCnt',inputType:'text',style:'',value:'',width:'90',textAlign:'right',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'invsslInputHhCnt',inputType:'text',style:'',value:'',width:'90',textAlign:'right',allowChar:'0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alngvsslInputHhCnt',inputType:'text',style:'',value:'',width:'90',textAlign:'right',allowChar:'0-9',maxLength:'3'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_09',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선작업계획서 발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_10',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선박제원정보 조회'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_11',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_12',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})