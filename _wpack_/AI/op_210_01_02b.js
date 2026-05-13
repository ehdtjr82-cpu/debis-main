/*amd /AI/op_210_01_02b.xml 76371 a35365430e3041bc598c8e59ce4a82d0931d6fbc3dea1a5ff540069729eaf720 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStDt',name:'입항예정일자from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvEndDt',name:'입항예정일자to',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfMan',name:'치프포맨',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cvsslInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslNm',name:'선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callNo',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commTxt',name:'대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsNm',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaDt',name:'입항예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'출항예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'HOLD정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSeq',name:'본선작업순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanEmpNo',name:'포맨사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanEmpNm',name:'포맨명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslFmanCnt',name:'본선포맨수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'groundFmanCnt',name:'육상포맨수',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manifest',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrBulkClsCd',name:'컨테이너벌크구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'MasterBL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BLNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hold',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_plan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkKndCd',name:'작업방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkKndNm',name:'작업방법명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkGangCnt',name:'gang수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCnt',name:'운송수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'계획수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planWt',name:'계획중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'계획CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transKndCd',name:'운송종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsGubun',name:'실적구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_state',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkKndCd',name:'작업방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkKndNm',name:'작업방법명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkGangCnt',name:'gang수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transInfo',name:'운송정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqInfo',name:'장비정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffInfo',name:'인원정보',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_man',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'plClsCd',name:'지역코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfWrkStpCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfEqKndCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfEqNrmCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveCvsslStvWrkPlanListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_cvsslInfo","key":"OUT_DS1"},{"id":"ds_manifest","key":"OUT_DS2"},{"id":"ds_hold","key":"OUT_DS3"},{"id":"ds_plan","key":"OUT_DS4"},{"id":"ds_state","key":"OUT_DS5"}]',target:'data:json,[{"id":"ds_cvsslInfo","key":"OUT_DS1"},{"id":"ds_manifest","key":"OUT_DS2"},{"id":"ds_hold","key":"OUT_DS3"},{"id":"ds_plan","key":"OUT_DS4"},{"id":"ds_state","key":"OUT_DS5"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMan',action:'/ds.op.stvwrk.RetrieveStvWrkIndictManInfoListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_man","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_man","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveMan_submitdone','ev:submiterror':'scwin.sbm_retrieveMan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEq',action:'/ds.op.stvwrk.RetrieveStvWrkIndictEqInfoListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_eq","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eq","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveEq_submitdone','ev:submiterror':'scwin.sbm_retrieveEq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveStvWrkPlanTargetInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cvsslInfo","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/ds.op.stvwrk.SaveStvHoldVolumeWrkPlanCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_hold","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save2_submitdone','ev:submiterror':'scwin.sbm_save2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save3',action:'/ds.op.stvwrk.SaveStvWrkIndictCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_plan","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save3_submitdone','ev:submiterror':'scwin.sbm_save3_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveMan',action:'/ds.op.stvwrk.SaveStvWrkIndictManInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_man","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveMan_submitdone','ev:submiterror':'scwin.sbm_saveMan_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveEq',action:'/ds.op.stvwrk.SaveStvWrkIndictEqInfoCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_eq","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveEq_submitdone','ev:submiterror':'scwin.sbm_saveEq_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqInfo',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveLogisticsHeavyEquipByCommCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_eqKndCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqKndCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveEqInfo_submitdone','ev:submiterror':'scwin.sbm_retrieveEqInfo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP325',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_eqNrmCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eqNrmCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_eqNrmCd_submitdone','ev:submiterror':'scwin.sbm_eqNrmCd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_wrkStpCd',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do?upperWrkStpCd=01&lvl=3&wrkPlanTrgtYn=1',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_wrkStpCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_wrkStpCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_wrkStpCd_submitdone','ev:submiterror':'scwin.sbm_wrkStpCd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.curRow = "";
scwin.lobranCd = "";
scwin.lobranNm = "";
scwin.vCurDate = "";
scwin.varvStDt = "";
scwin.varvEndDt = "";
scwin.cvsslMgntNo = "";
scwin.onpageload = function () {
  scwin.lobranCd = $c.ses.getLobranCd();
  scwin.lobranNm = $c.ses.getLobranNm();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.varvStDt = scwin.vCurDate.substring(0, 6) + "01";
  scwin.varvEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDate($p, scwin.vCurDate);
  let params = $c.data.getParameter($p);
  scwin.cvsslMgntNo = params != null && params["cvsslMgntNo"] != null ? params["cvsslMgntNo"] : "";
  $c.gus.cfDisableObjects($p, [txt_vsslNm, txt_lineNm, txt_shpCoClntNm, txt_callNo, txt_commTxt, txt_ioClsNm, txt_berthNm, ed_etaDt, ed_etdDt, txt_holdInfo]);
  if (scwin.cvsslMgntNo != "" && scwin.cvsslMgntNo != null) {
    em_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
  } else {
    em_cvsslMgntNo.setValue("");
  }
  if (em_cvsslMgntNo.getValue() != "") {
    scwin.f_Retrieve();
  }
  $c.sbm.execute($p, sbm_eqNrmCd);
  $c.sbm.execute($p, sbm_wrkStpCd);
  let codeOptions = [{
    grpCd: "SD060",
    compID: "gr_hold:impExpClsCd"
  }, {
    grpCd: "OP117",
    compID: "gr_plan:shiftClsCd,gr_state:shiftClsCd"
  }, {
    grpCd: "OP305",
    compID: "gr_plan:wrkKndCd,gr_state:wrkKndCd"
  }, {
    grpCd: "OP304",
    compID: "gr_plan:transKndCd"
  }, {
    grpCd: "OP268",
    compID: "gr_man:occpgrdCd"
  }, {
    grpCd: "OP323",
    compID: "gr_man:plClsCd"
  }, {
    grpCd: "OP303",
    compID: "gr_eq:eqKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.f_SetDefaultData = function () {
  $c.gus.cfDisableAllBtn($p);
};
scwin.f_openPopUp = async function () {
  let args = {
    cvsslMgntNo: em_cvsslMgntNo.getValue(),
    impExpClsCd: "",
    paramTitle: "본선관리번호검색팝업"
  };
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
  ds_condition.set("cvsslMgntNo", em_cvsslMgntNo.getValue().trim());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Retrieve2 = function () {
  let curPos = ds_plan.getRowPosition();
  if (curPos < 0) return;
  ds_condition2.set("stvWrkIndictNo", ds_plan.getCellData(curPos, "stvWrkIndictNo"));
  $c.sbm.execute($p, sbm_retrieveMan);
  $c.sbm.execute($p, sbm_retrieveEq);
};
scwin.f_Save = async function () {
  if (ds_cvsslInfo.getUpdatedIndex().length > 0) {
    let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chk) {
      await $c.sbm.execute($p, sbm_save);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선정보"]);
  }
};
scwin.f_Save2 = async function () {
  if (ds_hold.getUpdatedIndex().length > 0) {
    let chkValid = await $c.gus.cfValidate($p, [gr_hold]);
    if (!chkValid) return;
    let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chk) {
      await $c.sbm.execute($p, sbm_save2);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["Hold별 물량정보"]);
  }
};
scwin.f_Save3 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_plan.getUpdatedIndex().length > 0) {
    let chkValid = await $c.gus.cfValidate($p, [gr_plan]);
    if (!chkValid) return;
    for (let i = 0; i < ds_plan.getRowCount(); i++) {
      if (ds_plan.getCellData(i, "rsltsGubun") == 1 && ds_plan.getRowStatus(i) != "R") {
        await $c.win.alert($p, i + 1 + "번째 작업지시에 실적이 생성되었습니다. \n실적이 생성된 작업지시는 수정/삭제할 수 없습니다.");
        return false;
      }
    }
    let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chk) {
      await $c.sbm.execute($p, sbm_save3);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["본선작업계획 수립"]);
  }
};
scwin.f_Save4 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_man.getUpdatedIndex().length > 0) {
    let chkValid = await $c.gus.cfValidate($p, [gr_man]);
    if (!chkValid) return;
    if (ds_plan.getCellData(scwin.curRow, "rsltsGubun") == 1) {
      await $c.win.alert($p, scwin.curRow + 1 + "번째 작업지시에 실적이 생성되었습니다. \n실적이 생성된 작업지시에 인원 정보를 수정할 수 없습니다.");
      return false;
    }
    let chk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chk) {
      await $c.sbm.execute($p, sbm_saveMan);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["인원계획"]);
  }
};
scwin.f_Save5 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  let chkCnt = 0;
  if (ds_eq.getUpdatedIndex().length > 0) {
    let chkValid = await $c.gus.cfValidate($p, [gr_eq]);
    if (!chkValid) return;
    if (ds_plan.getCellData(scwin.curRow, "rsltsGubun") == 1) {
      await $c.win.alert($p, scwin.curRow + 1 + "번째 작업지시에 실적이 생성되었습니다. \n실적이 생성된 작업지시에 장비 정보를 수정할 수 없습니다.");
      return false;
    }
    for (let i = 0; i < ds_eq.getRowCount(); i++) {
      if (ds_eq.getCellData(i, "cnt") == 0) {
        chkCnt++;
      }
    }
    if (chkCnt > 0) {
      let chk = await $c.win.confirm($p, "대수가 0인 내역은 저장되지 않습니다.\n진행하시겠습니까?");
      if (chk) {
        await $c.sbm.execute($p, sbm_saveEq);
      }
    } else {
      await $c.sbm.execute($p, sbm_saveEq);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["장비계획"]);
  }
};
scwin.f_AddRow = async function (row) {
  switch (row) {
    case '1':
      ds_hold.insertRow(ds_hold.getRowCount());
      let holdPos = ds_hold.getRowPosition();
      let cvsslPos = ds_cvsslInfo.getRowPosition();
      if (cvsslPos >= 0) {
        ds_hold.setCellData(holdPos, "cvsslMgntNo", ds_cvsslInfo.getCellData(cvsslPos, "cvsslMgntNo"));
        ds_hold.setCellData(holdPos, "holdNo", holdPos + 1);
        if (ds_cvsslInfo.getCellData(cvsslPos, "ioClsNm") == "수입") {
          ds_hold.setCellData(holdPos, "impExpClsCd", "I");
        } else {
          ds_hold.setCellData(holdPos, "impExpClsCd", "O");
        }
      }
      break;
    case '2':
      let preRow = ds_plan.getRowCount() - 1;
      ds_plan.insertRow(ds_plan.getRowCount());
      let nowRow = ds_plan.getRowPosition();
      let cvPos = ds_cvsslInfo.getRowPosition();
      if (cvPos >= 0) {
        ds_plan.setCellData(nowRow, "cvsslMgntNo", ds_cvsslInfo.getCellData(cvPos, "cvsslMgntNo"));
      }
      if (nowRow == 0) {
        let etaDtVal = "";
        if (ds_cvsslInfo.getRowCount() > 0) {
          etaDtVal = ds_cvsslInfo.getCellData(0, "etaDt");
        }
        ds_plan.setCellData(nowRow, "wrkDt", etaDtVal.substring(0, 8));
        ds_plan.setCellData(nowRow, "shiftClsCd", "D");
        ds_plan.setCellData(nowRow, "wrkStHh", "0800");
        ds_plan.setCellData(nowRow, "wrkEndHh", "1700");
      } else if (nowRow > 0 && preRow >= 0) {
        if (ds_plan.getCellData(preRow, "shiftClsCd") == "D") {
          ds_plan.setCellData(nowRow, "wrkDt", ds_plan.getCellData(preRow, "wrkDt"));
          ds_plan.setCellData(nowRow, "shiftClsCd", "N");
          ds_plan.setCellData(nowRow, "wrkStHh", "1900");
          ds_plan.setCellData(nowRow, "wrkEndHh", "0100");
        } else if (ds_plan.getCellData(preRow, "shiftClsCd") == "N") {
          let strDate = ds_plan.getCellData(preRow, "wrkDt");
          let year = parseInt(strDate.substr(0, 4), 10);
          let month = parseInt(strDate.substr(4, 2), 10) - 1;
          let day = parseInt(strDate.substr(6, 2), 10);
          let date = new Date(year, month, day);
          let payDate = new Date(date.getTime() + 1000 * 60 * 60 * 24);
          let yyyy = payDate.getFullYear().toString();
          let mm = (payDate.getMonth() + 1).toString();
          if (mm < 10) {
            mm = "0" + mm;
          }
          let dd = payDate.getDate().toString();
          if (dd < 10) {
            dd = "0" + dd;
          }
          let strPayDate = yyyy + mm + dd;
          ds_plan.setCellData(nowRow, "wrkDt", strPayDate);
          ds_plan.setCellData(nowRow, "shiftClsCd", "D");
          ds_plan.setCellData(nowRow, "wrkStHh", "0800");
          ds_plan.setCellData(nowRow, "wrkEndHh", "1700");
        }
      }
      ds_man.removeAll();
      ds_eq.removeAll();
      break;
    case '3':
      if (ds_plan.getRowCount() == 0 || ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "인원 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_man.insertRow(ds_man.getRowCount());
      ds_man.setCellData(ds_man.getRowPosition(), "stvWrkIndictNo", ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo"));
      break;
    case '4':
      if (ds_plan.getRowCount() == 0 || ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "인원 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_man.insertRow(ds_man.getRowCount());
      ds_man.setCellData(ds_man.getRowPosition(), "stvWrkIndictNo", ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo"));
      ds_man.setCellData(ds_man.getRowPosition(), "occpgrdCd", "91");
      ds_man.insertRow(ds_man.getRowCount());
      ds_man.setCellData(ds_man.getRowPosition(), "stvWrkIndictNo", ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo"));
      ds_man.setCellData(ds_man.getRowPosition(), "occpgrdCd", "92");
      break;
    case '5':
      if (ds_plan.getRowCount() == 0 || ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "장비 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_eq.insertRow(ds_eq.getRowCount());
      ds_eq.setCellData(ds_eq.getRowPosition(), "stvWrkIndictNo", ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo"));
      ds_eq.setCellData(ds_eq.getRowPosition(), "wrkStpCd", "005");
      break;
    case '6':
      if (ds_plan.getRowCount() == 0 || ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo") == "") {
        await $c.win.alert($p, "장비 계획 입력은 작업지시 등록 후 가능합니다.");
        return false;
      }
      ds_condition.set("cvsslMgntNo", em_cvsslMgntNo.getValue());
      await $c.sbm.execute($p, sbm_retrieveEqInfo);
      for (let i = 0; i < ds_eqKndCd.getRowCount(); i++) {
        ds_eq.insertRow(ds_eq.getRowCount());
        ds_eq.setCellData(ds_eq.getRowPosition(), "stvWrkIndictNo", ds_plan.getCellData(ds_plan.getRowPosition(), "stvWrkIndictNo"));
        ds_eq.setCellData(ds_eq.getRowPosition(), "wrkStpCd", "005");
        ds_eq.setCellData(ds_eq.getRowPosition(), "eqKndCd", ds_eqKndCd.getCellData(i, "eqKndCd"));
        ds_eq.setCellData(ds_eq.getRowPosition(), "eqNrmCd", ds_eqKndCd.getCellData(i, "eqNrmCd"));
      }
      break;
  }
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  $c.data.downloadGridViewExcel($p, argGrid, {
    fileName: argTitle + ".xlsx",
    sheetName: argTitle
  });
};
scwin.f_openPopUP1 = function () {
  if (txt_cfmanEmpNm.getValue() == "") {
    ed_cfmanEmpNo.setValue("");
  } else {
    scwin.f_openCommonPopUpForMan(1, 'T');
  }
};
scwin.f_openCommonPopUpForMan = async function (disGubun, pWinCloseTF) {
  let sWinCloseTF = pWinCloseTF == null ? "T" : pWinCloseTF;
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      pCode = ed_cfmanEmpNo.getValue();
      pName = txt_cfmanEmpNm.getValue();
      let arrParam = {
        empNo: pCode,
        empNm: pName,
        lobranCd: scwin.lobranCd,
        lobranNm: scwin.lobranNm,
        wrkPlCd: '',
        occpgrdCd: '01,D',
        dtlOccpgrdCd: '02,D',
        posCd: '',
        wrkDt: '',
        allocYn: 'Y',
        winCloseTF: sWinCloseTF,
        dtlOccpgrdFlag: "1"
      };
      let rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", {
        width: 530,
        height: 450,
        modal: true,
        data: arrParam
      });
      if (rtnList != null && rtnList[3] != undefined) {
        if (rtnList[3] == undefined) {
          return;
        }
        ed_cfmanEmpNo.setValue(rtnList[2]);
        txt_cfmanEmpNm.setValue(rtnList[3]);
        return;
      } else {
        ed_cfmanEmpNo.setValue("");
        txt_cfmanEmpNm.setValue("");
      }
      break;
  }
};
scwin.f_openCommPopUpGrid = async function (gubun, row, pClose) {
  let rtnList;
  let pCode = "";
  let pName = "";
  let sWinCloseTF = pClose == null ? "T" : pClose;
  switch (gubun) {
    case 1:
      pCode = ds_cvsslInfo.getCellData(row, "cfmanEmpNo");
      pName = "";
      let arrParam = {
        empNo: pCode,
        empNm: pName,
        lobranCd: scwin.lobranCd,
        lobranNm: scwin.lobranNm,
        wrkPlCd: '',
        occpgrdCd: '01,D',
        dtlOccpgrdCd: '02,D',
        posCd: '',
        wrkDt: '',
        allocYn: 'Y',
        winCloseTF: sWinCloseTF,
        dtlOccpgrdFlag: "1"
      };
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
        ds_cvsslInfo.setCellData(row, "cfmanEmpNo", rtnList[2]);
        ds_cvsslInfo.setCellData(row, "cfmanEmpNm", rtnList[3]);
        return;
      } else {
        ds_cvsslInfo.setCellData(row, "cfmanEmpNo", "");
        ds_cvsslInfo.setCellData(row, "cfmanEmpNm", "");
      }
      break;
    case 2:
      pCode = ds_hold.getCellData(row, "commCd");
      pName = "";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveCommInfo', pCode, pName, pClose, '3', '품목/품명코드,품목/품명,구분', '105,190,70', '4,5,6,7,8,9,10', ",,,A4", null, null, null, null, null, "F", "품목/품명,품명코드,품명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_hold.setCellData(row, "commCd", rtnList[0]);
        ds_hold.setCellData(row, "commNm", rtnList[1]);
      } else {
        ds_hold.setCellData(row, "commNm", "");
        ds_hold.setCellData(row, "commCd", "");
      }
      break;
    case 3:
      pCode = "";
      pName = ds_hold.getCellData(row, "commNm");
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveCommInfo', pCode, pName, pClose, '3', '품목/품명코드,품목/품명,구분', '105,190,70', '4,5,6,7,8,9,10', ",,,A4", null, null, null, null, null, "F", "품목/품명,품명코드,품명");
      if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
        ds_hold.setCellData(row, "commCd", rtnList[0]);
        ds_hold.setCellData(row, "commNm", rtnList[1]);
      } else {
        ds_hold.setCellData(row, "commNm", "");
        ds_hold.setCellData(row, "commCd", "");
      }
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveMan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveEq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveEqInfo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save2_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save2_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save3_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
};
scwin.sbm_save3_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveMan_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
};
scwin.sbm_saveMan_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveEq_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  ds_plan.setRowPosition(scwin.curRow);
  scwin.f_Retrieve2();
};
scwin.sbm_saveEq_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_cvsslInfo.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, "미등록된 본선관리번호 입니다. 확인후 다시 입력해주세요");
    em_cvsslMgntNo.setValue("");
    em_cvsslMgntNo.setFocus();
  }
};
scwin.sbm_retrieveMan_submitdone = function (e) {};
scwin.sbm_retrieveEq_submitdone = function (e) {};
scwin.sbm_retrieveEqInfo_submitdone = function (e) {};
scwin.sbm_eqNrmCd_submitdone = function (e) {};
scwin.sbm_eqNrmCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_wrkStpCd_submitdone = function (e) {};
scwin.sbm_wrkStpCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_trigger9_onclick = function (e) {
  scwin.f_openPopUp();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save41_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save3();
};
scwin.btn_save2_onclick = function (e) {
  scwin.f_Save4();
};
scwin.btn_save3_onclick = function (e) {
  scwin.f_Save5();
};
scwin.btn_trigger39_onclick = function (e) {
  scwin.f_AddRow('4');
};
scwin.btn_trigger40_onclick = function (e) {
  scwin.f_AddRow('6');
};
scwin.gr_plan_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_Retrieve2();
  if (rowIndex < 0) return;
  if (ds_plan.getRowStatus(rowIndex) != "C") {
    gr_plan.setCellReadOnly(rowIndex, "wrkDt", true);
    gr_plan.setCellReadOnly(rowIndex, "shiftClsCd", true);
    gr_plan.setCellReadOnly(rowIndex, "wrkStHh", true);
    gr_plan.setCellReadOnly(rowIndex, "wrkEndHh", true);
  } else {
    gr_plan.setCellReadOnly(rowIndex, "wrkDt", false);
    gr_plan.setCellReadOnly(rowIndex, "shiftClsCd", false);
    gr_plan.setCellReadOnly(rowIndex, "wrkStHh", false);
    gr_plan.setCellReadOnly(rowIndex, "wrkEndHh", false);
  }
};
scwin.gr_plan_onkeydown = function (e) {
  let keycode = e.keyCode;
  switch (keycode) {
    case 38:
      scwin.f_Retrieve2();
      break;
    case 40:
      scwin.f_Retrieve2();
      break;
  }
};
scwin.gr_plan_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "wrkDt":
      // TODO: cfOpenCalendar grid equivalent
      break;
  }
};
scwin.gr_plan_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  switch (columnId) {
    case "cfmanEmpNo":
      if (ds_cvsslInfo.getCellData(rowIndex, columnId) != "" && ds_cvsslInfo.getCellData(rowIndex, columnId) != oldValue) {
        ds_cvsslInfo.setCellData(rowIndex, "cfmanEmpNm", "");
        scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
      } else if (ds_cvsslInfo.getCellData(rowIndex, columnId) == "") {
        ds_cvsslInfo.setCellData(rowIndex, "cfmanEmpNo", "");
        ds_cvsslInfo.setCellData(rowIndex, "cfmanEmpNm", "");
      }
      break;
  }
};
scwin.ds_plan_oncelldatachange = function (info) {
  let row = info.row;
  let colId = info.colId;
  if (colId == "shiftClsCd") {
    if (ds_plan.getCellData(row, "shiftClsCd") == "D") {
      ds_plan.setCellData(row, "wrkStHh", "0800");
      ds_plan.setCellData(row, "wrkEndHh", "1700");
    } else if (ds_plan.getCellData(row, "shiftClsCd") == "N") {
      ds_plan.setCellData(row, "wrkStHh", "1900");
      ds_plan.setCellData(row, "wrkEndHh", "0100");
    } else if (ds_plan.getCellData(row, "shiftClsCd") == "M") {
      ds_plan.setCellData(row, "wrkStHh", "0100");
      ds_plan.setCellData(row, "wrkEndHh", "0400");
    }
  }
};
scwin.gr_hold_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "commCd":
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
    case "commNm":
      scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
      break;
  }
};
scwin.gr_hold_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  switch (columnId) {
    case "commCd":
      if (ds_hold.getCellData(rowIndex, columnId) != "" && ds_hold.getCellData(rowIndex, columnId) != oldValue) {
        ds_hold.setCellData(rowIndex, "commNm", "");
        scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
      } else if (ds_hold.getCellData(rowIndex, columnId) == "") {
        ds_hold.setCellData(rowIndex, "commCd", "");
        ds_hold.setCellData(rowIndex, "commNm", "");
      }
      break;
    case "commNm":
      if (ds_hold.getCellData(rowIndex, columnId) != "" && ds_hold.getCellData(rowIndex, columnId) != oldValue) {
        ds_hold.setCellData(rowIndex, "commCd", "");
        scwin.f_openCommPopUpGrid(3, rowIndex, 'T');
      } else if (ds_hold.getCellData(rowIndex, columnId) == "") {
        ds_hold.setCellData(rowIndex, "commCd", "");
        ds_hold.setCellData(rowIndex, "commNm", "");
      }
      break;
  }
};
scwin.gr_man_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  if (ds_man.getRowStatus(rowIndex) != "C") {
    gr_man.setCellReadOnly(rowIndex, "occpgrdCd", true);
  } else {
    gr_man.setCellReadOnly(rowIndex, "occpgrdCd", false);
  }
};
scwin.gr_eq_oncellclick = function (rowIndex, columnIndex, columnId) {
  // TODO: ds_eqNrmCd filter equivalent
};
scwin.ds_eq_oncelldatachange = function (info) {
  let row = info.row;
  let colId = info.colId;
  if (colId == "eqKndCd") {
    ds_eq.setCellData(row, "eqNrmCd", "");
    // TODO: ds_eqNrmCd filter equivalent
  }
};
scwin.ed_cfmanEmpNo_onblur = function (e) {
  if (ed_cfmanEmpNo.getValue() == "") {
    ed_cfmanEmpNo.setValue("");
    txt_cfmanEmpNm.setValue("");
  } else {
    scwin.f_openCommonPopUpForMan(1, 'T');
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'em_cvsslMgntNo',placeholder:'',style:'',ref:'data:ds_condition.cvsslMgntNo',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger9',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w200',id:'txt_vsslNm',style:'',ref:'data:ds_cvsslInfo.vsslNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'txt_lineNm',style:'',ref:'data:ds_cvsslInfo.lineNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'txt_shpCoClntNm',style:'',ref:'data:ds_cvsslInfo.shpCoClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w200',id:'txt_callNo',style:'',ref:'data:ds_cvsslInfo.callNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'txt_commTxt',style:'',ref:'data:ds_cvsslInfo.commTxt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'txt_ioClsNm',style:'',ref:'data:ds_cvsslInfo.ioClsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'txt_berthNm',style:'',ref:'data:ds_cvsslInfo.berthNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:' cal',id:'ed_etaDt',style:'',ref:'data:ds_cvsslInfo.etaDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:' cal',id:'ed_etdDt',style:'',ref:'data:ds_cvsslInfo.etdDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HOLD 정보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'txt_holdInfo',style:'',ref:'data:ds_cvsslInfo.holdInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선작업순서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_wrkSeq',ref:'data:ds_cvsslInfo.wrkSeq',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중간'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마지막'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포맨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_cfmanEmp',codeId:'ed_cfmanEmpNo',nameId:'txt_cfmanEmpNm',popupID:'',style:'width: 250px;',class:''}},{T:1,N:'xf:select',A:{ref:'data:ds_cvsslInfo.cvsslFmanCnt',appearance:'full',style:'',id:'txt_cvsslFmanCnt',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'txt_groundFmanCnt',ref:'data:ds_cvsslInfo.groundFmanCnt',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'육상'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하목록현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_manifest',style:'',autoFit:'allColumn',id:'gr_manifest',visibleRowNum:'3',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'cntrBulkClsCd',value:'컨테이너<br/>벌크구분',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'commCd',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commNm',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'mblNo',value:'Master B/L',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',value:'B/L No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',value:'중량<br/>(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrBulkClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'commNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'mblNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'qty',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'wt',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'cbm',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column25',displayMode:'label',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column24',displayMode:'label',expression:'sum(\'wt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column23',displayMode:'label',expression:'sum(\'cbm\')',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'HOLD별 물량 정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_hold',style:'',autoFit:'allColumn',id:'gr_hold',visibleRowNum:'3',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'holdNo',value:'HOLD',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'impExpClsCd',value:'수출입<br/>구분',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'commCd',value:'품명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'commNm',value:'품명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',value:'수량',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',value:'중량<br/>(Ton)',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',value:'CBM',class:'txt-blue',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'holdNo',displayMode:'label',allowChar:'0-9',maxLength:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'impExpClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'80',inputType:'textImage',id:'commCd',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'textImage',id:'commNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'qty',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'wt',displayMode:'label',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'cbm',displayMode:'label',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column25',displayMode:'label',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column24',displayMode:'label',expression:'sum(\'wt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column23',displayMode:'label',expression:'sum(\'cbm\')',dataType:'float',displayFormat:'#,##0.000'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'Y',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'N',style:'',btnRowAddYn:'Y'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save41',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'본선작업계획 수립',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_plan',style:'',id:'gr_plan',visibleRowNum:'3',class:'wq_gvw',autoFit:'allColumn',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'stvWrkIndictNo',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'wrkDt',value:'작업일시',displayMode:'label',colSpan:'4',rowSpan:'',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'shiftClsCd',value:'물량정보',displayMode:'label',colSpan:'3',rowSpan:'',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'wrkStHh',value:'작업<br/>방법',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndHh',value:'gang',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planQty',value:'운송',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planWt',value:'종류',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'planCbm',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkKndCd',value:'실적',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cvsslMgntNo',value:'일자',displayMode:'label',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stvWrkIndictNo',value:'시프트',displayMode:'label',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'wrkDt',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'shiftClsCd',value:'종료',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'wrkStHh',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkEndHh',value:'중량<br/>(Ton)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planQty',value:'CBM',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cvsslMgntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'stvWrkIndictNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'wrkDt',value:'',displayMode:'label',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'shiftClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'wrkStHh',value:'',displayMode:'label',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'wrkEndHh',value:'',displayMode:'label',allowChar:'0-9',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'planQty',value:'',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planWt',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planCbm',value:'',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',style:'',id:'wrkKndCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkGangCnt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'transCnt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'transKndCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'rsltsGubun',value:'',displayMode:'label',textAlign:'center',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'planQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'planWt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'planCbm\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'sum(\'wrkGangCnt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',expression:'sum(\'transCnt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'Y',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'N',style:'',btnRowAddYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 350px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용인원정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_man',id:'gr_man',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'작업지시번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'text',style:'',value:'직종',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',style:'',value:'수',width:'50',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'plClsCd',inputType:'text',style:'',value:'지역',width:'70',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',style:'',value:'',width:'50',textAlign:'center',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'plClsCd',inputType:'select',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',style:'',value:'',width:'50',textAlign:'right',expression:'sum(\'cnt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_trigger39',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인원리스트'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'N',btnDelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save2',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_eq',id:'gr_eq',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption8',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'작업지시번호',width:'120',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',style:'',value:'작업단계',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',style:'',value:'장비종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',style:'',value:'장비규격',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',style:'',value:'수',width:'50',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfWrkStpCd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfEqKndCd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfEqNrmCd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'',width:'120',allowChar:'0-9',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkStpCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',style:'',value:'',width:'120'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_eqNrmCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',style:'',value:'',width:'50',textAlign:'center',allowChar:'0-9',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfWrkStpCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfEqKndCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfEqNrmCd',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',style:'',value:'',width:'50',textAlign:'right',expression:'sum(\'cnt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_trigger40',label:'삭제',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장비리스트'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'N',btnDelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save3',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'본선작업계획 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:''}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_state',id:'gr_state',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'작업지시번호',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',style:'',value:'본선관리번호',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'작업일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'text',style:'',value:'시프트',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkKndCd',inputType:'text',style:'',value:'작업<br/>방법',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkGangCnt',inputType:'text',style:'',value:'GANG',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transInfo',inputType:'text',style:'',value:'자원',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffInfo',inputType:'text',style:'',value:'비고',width:'100',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stvWrkIndictNo',value:'운송',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cvsslMgntNo',value:'인원',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',style:'',id:'wrkDt',value:'장비',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkKndCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkGangCnt',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transInfo',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffInfo',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqInfo',inputType:'text',style:'',value:'',width:'500',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})