/*amd /AI/zz_831_01_01b.xml 112064 16653f627bf71d1690adac09254e71802aff2388f8a5bad1bd0b91824601e84e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDeptCd',name:'소속지사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqApplyStdDt',name:'신청일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqApplyEndDt',name:'신청일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDrcrNo',name:'차대번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPossessCd',name:'소유구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mgntNo',name:'차량보험관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkSeq',name:'순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehclInsuranceMgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrNo',name:'차대번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'소속지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'지사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'applyDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'possessCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelCd',name:'해지사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclTypeCd',name:'차량형식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxPayloadCd',name:'최대적재량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'releaseYear',name:'차량년식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carInsuranceShortStdDt',name:'자동차보험단기시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carInsuranceShortEndDt',name:'자동차보험단기종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carInsuranceYearStdDt',name:'자동차보험1년시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carInsuranceYearEndDt',name:'자동차보험1년종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'objectLimitCd',name:'대물한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'driverAge',name:'운전자연령',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfVehclYn',name:'자차여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selfVehclStdDt',name:'자차시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfVehclEndDt',name:'자차종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sfdmgVehclYn',name:'자손여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sfdmgVehclStdDt',name:'자손시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sfdmgVehclEndDt',name:'자손종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'luggageInsuranceShortStdDt',name:'적재물보험단기시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'luggageInsuranceShortEndDt',name:'적재물보험단기종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'luggageInsuranceYearStdDt',name:'적재물보험1년시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'luggageInsuranceYearEndDt',name:'적재물보험1년종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'guaranteeLimitCd',name:'보상한도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'glassYn',name:'유리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'glassStdDt',name:'유리시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'glassEndDt',name:'유리종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frizYn',name:'냉동여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'frizStdDt',name:'냉동시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frizEndDt',name:'냉동종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'umbrellaPolicyYn',name:'기업포괄여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'umbrellaPolicyStdDt',name:'기업포괄시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'umbrellaPolicyEndDt',name:'기업포괄종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preVehclNo',name:'차량번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preDeptCd',name:'소속지사2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePossessCd',name:'소유구분2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preVehclTypeCd',name:'차량형식2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preMaxPayloadCd',name:'최대적재량2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preReleaseYear',name:'차량년식2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCarInsuranceYearStdDt',name:'자동차보험1년시작일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCarInsuranceYearEndDt',name:'자동차보험1년종료일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preObjectLimitCd',name:'대물한도2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preDriverAge',name:'운전자연령2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preSelfVehclYn',name:'자차여부2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'preSelfVehclStdDt',name:'자차시작일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preSelfVehclEndDt',name:'자차종료일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preSfdmgVehclYn',name:'자손여부2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'preSfdmgVehclStdDt',name:'자손시작일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preSfdmgVehclEndDt',name:'자손종료일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preLuggageInsurYearStdDt',name:'적재물보험1년시작일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preLuggageInsurYearEndDt',name:'적재물보험1년종료일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preGuaranteeLimitCd',name:'보상한도2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preGlassYn',name:'유리여부2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'preGlassStdDt',name:'유리시작일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preGlassEndDt',name:'유리종료일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preFrizYn',name:'냉동여부2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'preFrizStdDt',name:'냉동시작일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preFrizEndDt',name:'냉동종료일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrStdDt',name:'산재보험입직일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrEndDt',name:'산재보험이직일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrDrvNm',name:'운전자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrBirthDt',name:'생년월일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrWrkClsCd',name:'산재작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indDistrSndTypeCd',name:'배송수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preIndDistrStdDt',name:'산재보험입직일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preIndDistrEndDt',name:'산재보험이직일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preIndDistrDrvNm',name:'운전자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preIndDistrBirthDt',name:'생년월일2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preIndDistrWrkClsCd',name:'산재작업구분2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preIndDistrSndTypeCd',name:'배송수단2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'차량보험관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'전자결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preDrcrNo',name:'차대번호2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehclInsuranceMgntChangeDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntNo',name:'차량보험관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modSeq',name:'수정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgWrkCd',name:'변경내용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pastData',name:'변경전데이터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currentData',name:'변경후데이터',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkBox',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chkAfterDayAndYear'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cdNm'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.vehclinsurancemgnt.cmd.CreateVehclInsuranceMgntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_vehclInsuranceMgnt","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/cm.bc.vehclinsurancemgnt.cmd.CreateVehclInsuranceMgntChangeDetailCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_vehclInsuranceMgntChangeDetail","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save2_submitdone','ev:submiterror':'scwin.sbm_save2_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.vehclinsurancemgnt.cmd.RetrieveVehclInsuranceMgntListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_vehclInsuranceMgnt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_vehclInsuranceMgnt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/cm.bc.vehclinsurancemgnt.cmd.RetrieveVehclInsuranceMgntChangeDetailListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_vehclInsuranceMgntChangeDetail","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_vehclInsuranceMgntChangeDetail","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'scwin.sbm_retrieve_detail_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_cdNm',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_cdNm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cdNm","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_cdNm_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_chkAfterDayAndYear',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_chkAfterDayAndYear","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_chkAfterDayAndYear","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_chkAfterDayAndYear_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gv_loabranCd = "";
scwin.preWrkClsCd = "";
scwin.pDeptCd = "";
scwin.pVehchlNo = "";
scwin.pDrcrNo = "";
scwin.pApplyDt = "";
scwin.pPorteYn = "";
scwin.txt_reqVehclNo = "";
scwin.txt_reqDrcrNo = "";
scwin.vCurDate = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strFromDate = scwin.vCurDate.substring(0, 6) + "01";
  scwin.strToDate = $c.date.getLastDate($p, scwin.vCurDate);
  scwin.gv_loabranCd = $c.ses.getLoUpperLobranCd();
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    scwin.pDeptCd = scwin.params["pDeptCd"] || "";
    scwin.pVehchlNo = scwin.params["pVehchlNo"] || "";
    scwin.pDrcrNo = scwin.params["pDrcrNo"] || "";
    scwin.pApplyDt = scwin.params["pApplyDt"] || "";
    scwin.pPorteYn = scwin.params["pPorteYn"] || "";
  }
  scwin.f_firstSetting();
  if (scwin.gv_loabranCd != null && scwin.gv_loabranCd != "") {
    acb_reqDeptCd.setValue(scwin.gv_loabranCd);
  } else {
    acb_reqDeptCd.setValue("");
  }
  scwin.f_setFileUpDownFrame("1", "1");
};
scwin.onUdcCompleted = function () {
  udc_reqApplyDt.setInitDate(scwin.strFromDate, scwin.strToDate);
  if (scwin.pPorteYn == "Y") {
    acb_reqDeptCd.setValue(scwin.pDeptCd);
    txt_reqVehclNo.setValue(scwin.pVehchlNo);
    txt_reqDrcrNo.setValue(scwin.pDrcrNo);
    udc_reqApplyDt.setInitDate(scwin.pApplyDt, scwin.pApplyDt);
    $c.gus.cfDisableObjects($p, [acb_reqDeptCd, txt_reqVehclNo, txt_reqDrcrNo, acb_reqPossessCd, ica_reqApplyStdDt, ica_reqApplyEndDt, btn_retrive]);
    $c.gus.cfDisableObjects($p, [btn_create, btn_update, btn_cancel, btn_save]);
    scwin.f_Retrieve();
  }
};
scwin.f_firstSetting = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [rd_wrkClsCd, acb_deptCd, ica_applyDt, txt_vehclNo, txt_drcrNo, acb_cancelCd, acb_possessCd, acb_vehclTypeCd, ed_maxPayloadCd, ed_releaseYear]);
  $c.gus.cfDisableObjects($p, [ica_carInsuranceYearStdDt, ica_carInsuranceYearEndDt]);
  $c.gus.cfDisableObjects($p, [acb_objectLimitCd, acb_driverAge]);
  $c.gus.cfDisableObjects($p, [chb_selfVehclYn, ica_selfVehclStdDt, ica_selfVehclEndDt]);
  $c.gus.cfDisableObjects($p, [chb_sfdmgVehclYn, ica_sfdmgVehclStdDt, ica_sfdmgVehclEndDt]);
  $c.gus.cfDisableObjects($p, [ica_luggageInsuranceYearStdDt, ica_luggageInsuranceYearEndDt]);
  $c.gus.cfDisableObjects($p, [acb_guaranteeLimitCd]);
  $c.gus.cfDisableObjects($p, [chb_glassYn, ica_glassStdDt, ica_glassEndDt]);
  $c.gus.cfDisableObjects($p, [chb_frizYn, ica_frizStdDt, ica_frizEndDt]);
  $c.gus.cfDisableObjects($p, [btn_create, btn_update, btn_cancel, btn_save]);
  $c.gus.cfDisableObjects($p, [ica_indDistrStdDt, ica_indDistrEndDt, txt_indDistrDrvNm, ica_indDistrBirthDt, rd_indDistrWrkClsCd, acb_indDistrSndTypeCd]);
};
scwin.f_enableSetting = function () {
  $c.gus.cfEnableObjects($p, [acb_deptCd, txt_vehclNo, txt_drcrNo, acb_possessCd, acb_vehclTypeCd, ed_maxPayloadCd, ed_releaseYear]);
  $c.gus.cfEnableObjects($p, [ica_carInsuranceYearStdDt, ica_carInsuranceYearEndDt]);
  $c.gus.cfEnableObjects($p, [acb_objectLimitCd, acb_driverAge, chb_selfVehclYn, chb_sfdmgVehclYn]);
  $c.gus.cfEnableObjects($p, [ica_luggageInsuranceYearStdDt, ica_luggageInsuranceYearEndDt]);
  $c.gus.cfEnableObjects($p, [acb_guaranteeLimitCd, chb_glassYn, chb_frizYn]);
  scwin.f_checkSelfVehclYn();
  scwin.f_checkSfdmgVehclYn();
  scwin.f_checkGlassYn();
  scwin.f_checkFrizYn();
  $c.gus.cfEnableObjects($p, [ica_indDistrStdDt, ica_indDistrEndDt, txt_indDistrDrvNm, ica_indDistrBirthDt, rd_indDistrWrkClsCd, acb_indDistrSndTypeCd]);
};
scwin.f_onloadSetting = function () {
  scwin.f_firstSetting();
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  let chkWrkClsCd = ds_vehclInsuranceMgnt.getCellData(row, "wrkClsCd");
  let chkApprvReqNo = ds_vehclInsuranceMgnt.getCellData(row, "apprvReqNo");
  let chkApprvStsCd = ds_vehclInsuranceMgnt.getCellData(row, "apprvStsCd");
  if (chkApprvReqNo == "") {
    $c.gus.cfEnableObjects($p, [btn_create, btn_update]);
  } else {
    if (chkApprvStsCd == "05" || chkApprvStsCd == "03" || chkApprvStsCd == "06") {
      $c.gus.cfEnableObjects($p, [btn_create, btn_update]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_create]);
    }
  }
  if (chkWrkClsCd == "02" && chkApprvStsCd == "01") {
    if (scwin.pPorteYn == "") {
      $c.gus.cfEnableObjects($p, [btn_create, btn_update]);
    }
  }
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.f_Create = function () {
  ds_vehclInsuranceMgnt.insertRow();
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  ds_vehclInsuranceMgnt.setCellData(row, "wrkClsCd", "01");
  ds_vehclInsuranceMgnt.setCellData(row, "deptCd", scwin.gv_loabranCd);
  ds_vehclInsuranceMgnt.setCellData(row, "applyDt", WebSquare.date.getCurrentServerDate("yyyyMMdd"));
  scwin.f_enableSetting();
  $c.gus.cfEnableObjects($p, [btn_cancel, btn_save]);
};
scwin.btn_update_onclick = async function (e) {
  scwin.f_Update();
};
scwin.f_Update = async function () {
  $c.gus.cfDisableObjects($p, [btn_create, btn_update]);
  $c.gus.cfEnableObjects($p, [rd_wrkClsCd, btn_cancel, btn_save]);
  rd_wrkClsCd.setFocus();
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  ds_vehclInsuranceMgnt.setCellData(row, "applyDt", WebSquare.date.getCurrentServerDate("yyyyMMdd"));
  let chkWrkClsCd = ds_vehclInsuranceMgnt.getCellData(row, "wrkClsCd");
  if (chkWrkClsCd == "01") {
    scwin.f_enableSetting();
  } else if (chkWrkClsCd == "02") {
    scwin.f_enableSetting();
  } else if (chkWrkClsCd == "03") {
    $c.gus.cfEnableObjects($p, [txt_drcrNo, ed_maxPayloadCd, ed_releaseYear, acb_deptCd, acb_possessCd]);
  } else if (chkWrkClsCd == "04") {
    scwin.f_enableSetting();
  } else if (chkWrkClsCd == "05") {
    $c.gus.cfEnableObjects($p, [acb_cancelCd, ica_carInsuranceYearStdDt, ica_carInsuranceYearEndDt]);
    $c.gus.cfEnableObjects($p, [ica_luggageInsuranceYearStdDt, ica_luggageInsuranceYearEndDt]);
  }
  if (ds_vehclInsuranceMgnt.getCellData(row, "apprvStsCd") != "05") {
    $c.gus.cfDisableObjects($p, [rd_wrkClsCd]);
  }
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.f_Cancel = function () {
  ds_vehclInsuranceMgnt.undoRow(ds_vehclInsuranceMgnt.getRowPosition());
  rd_wrkClsCd.setFocus();
  scwin.f_firstSetting();
  scwin.f_onloadSetting();
};
scwin.btn_retrive_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (ica_reqApplyStdDt.getValue() == "" || ica_reqApplyEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["신청일자"]);
    ica_reqApplyStdDt.setFocus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_reqApplyStdDt.getValue(), ica_reqApplyEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  await $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_vehclInsuranceMgnt.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회결과가 존재하지 않습니다.");
    $c.gus.cfEnableObjects($p, [btn_create]);
  } else {
    scwin.f_onloadSetting();
    scwin.f_setFileUpDownFrame(ds_vehclInsuranceMgnt.getCellData(ds_vehclInsuranceMgnt.getRowPosition(), "mgntNo"), ds_vehclInsuranceMgnt.getCellData(ds_vehclInsuranceMgnt.getRowPosition(), "wrkSeq"));
    ds_condition2.set("mgntNo", ds_vehclInsuranceMgnt.getCellData(0, "mgntNo"));
    ds_condition2.set("wrkSeq", ds_vehclInsuranceMgnt.getCellData(0, "wrkSeq"));
    await $c.sbm.execute($p, sbm_retrieve_detail);
    scwin.preWrkClsCd = ds_vehclInsuranceMgnt.getCellData(0, "wrkClsCd");
    if (scwin.pPorteYn == "Y") {
      $c.gus.cfDisableObjects($p, [btn_create]);
    }
  }
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_detail_submitdone = function (e) {};
scwin.sbm_retrieve_detail_submiterror = function (e) {};
scwin.f_cdNm = async function (GRP_CD, CD) {
  let grp_cd = GRP_CD;
  let pCode = CD;
  let param1 = " CD_NM      as COL1 " + ",'' 		as COL2 " + ",'' 		as COL3 " + ",'' 		as COL4 " + ",'' 		as COL5 " + ",'' 		as COL6 " + ",''      as COL7 " + ",''      as COL8 " + ",''      as COL9 " + ",''      as COL10";
  let param2 = " TB_ZZ002 ";
  let param3 = " AND GRP_CD = '" + grp_cd + "'" + " AND CD = '" + pCode + "'";
  let param4 = "CD_NM";

  // TODO: ds_cdNm DataId 방식은 submission으로 대체 필요 - 동기 호출 패턴
  sbm_cdNm.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + encodeURIComponent(param1) + "&param2=" + encodeURIComponent(param2) + "&param3=" + encodeURIComponent(param3) + "&param4=" + encodeURIComponent(param4);
  await $c.sbm.execute($p, sbm_cdNm);
};
scwin.sbm_cdNm_submitdone = function (e) {};
scwin.check_Num = function (a) {
  let num = a;
  let j;
  let t = false;
  for (j = 1; j <= num.length; j++) {
    if (num.substring(j - 1, j) == ".") {
      t = true;
    }
  }
  if (t == true) {
    num = (num = num.toString()).substring(num.indexOf(".") + 1, num.length);
    if (num.length > 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  if (ds_vehclInsuranceMgnt.getUpdatedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let chk = await $c.gus.cfValidate($p, [gr_vehclInsuranceMgnt]);
  if (chk) {
    let row = ds_vehclInsuranceMgnt.getRowPosition();
    if (ds_vehclInsuranceMgnt.getCellData(row, "wrkClsCd") == "02" || ds_vehclInsuranceMgnt.getCellData(row, "wrkClsCd") == "03") {
      let cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount();
      let pastCdNm = "";
      let currentCdNm = "";
      if (ds_vehclInsuranceMgnt.getCellData(row, "deptCd") != ds_vehclInsuranceMgnt.getCellData(row, "preDeptCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "01");
        await scwin.f_cdNm("ZZ842", ds_vehclInsuranceMgnt.getCellData(row, "preDeptCd"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ842", ds_vehclInsuranceMgnt.getCellData(row, "deptCd"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "vehclNo") != ds_vehclInsuranceMgnt.getCellData(row, "preVehclNo")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "02");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preVehclNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "vehclNo"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "drcrNo") != ds_vehclInsuranceMgnt.getCellData(row, "preDrcrNo")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "03");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preDrcrNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "drcrNo"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "maxPayloadCd") != ds_vehclInsuranceMgnt.getCellData(row, "preMaxPayloadCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "04");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preMaxPayloadCd"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "maxPayloadCd"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "releaseYear") != ds_vehclInsuranceMgnt.getCellData(row, "preReleaseYear")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "05");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preReleaseYear"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "releaseYear"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "possessCd") != ds_vehclInsuranceMgnt.getCellData(row, "prePossessCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "06");
        await scwin.f_cdNm("ZZ832", ds_vehclInsuranceMgnt.getCellData(row, "prePossessCd"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ832", ds_vehclInsuranceMgnt.getCellData(row, "possessCd"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "vehclTypeCd") != ds_vehclInsuranceMgnt.getCellData(row, "preVehclTypeCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "07");
        await scwin.f_cdNm("ZZ833", ds_vehclInsuranceMgnt.getCellData(row, "preVehclTypeCd"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ833", ds_vehclInsuranceMgnt.getCellData(row, "vehclTypeCd"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "carInsuranceYearStdDt") != ds_vehclInsuranceMgnt.getCellData(row, "preCarInsuranceYearStdDt") || ds_vehclInsuranceMgnt.getCellData(row, "carInsuranceYearEndDt") != ds_vehclInsuranceMgnt.getCellData(row, "preCarInsuranceYearEndDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "08");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preCarInsuranceYearStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preCarInsuranceYearEndDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "carInsuranceYearStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "carInsuranceYearEndDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "selfVehclYn") != ds_vehclInsuranceMgnt.getCellData(row, "preSelfVehclYn")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "09");
        if (ds_vehclInsuranceMgnt.getCellData(row, "selfVehclYn") == "0") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preSelfVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preSelfVehclEndDt"));
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", "자차보험 해지");
        } else if (ds_vehclInsuranceMgnt.getCellData(row, "selfVehclYn") == "1") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", "가입내역 없음");
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "selfVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "selfVehclEndDt"));
        }
      } else if (ds_vehclInsuranceMgnt.getCellData(row, "selfVehclStdDt") != ds_vehclInsuranceMgnt.getCellData(row, "preSelfVehclStdDt") || ds_vehclInsuranceMgnt.getCellData(row, "selfVehclEndDt") != ds_vehclInsuranceMgnt.getCellData(row, "preSelfVehclEndDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "09");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preSelfVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preSelfVehclEndDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "selfVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "selfVehclEndDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclYn") != ds_vehclInsuranceMgnt.getCellData(row, "preSfdmgVehclYn")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "10");
        if (ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclYn") == "0") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preSfdmgVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preSfdmgVehclEndDt"));
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", "자손보험 해지");
        } else if (ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclYn") == "1") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", "가입내역 없음");
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclEndDt"));
        }
      } else if (ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclStdDt") != ds_vehclInsuranceMgnt.getCellData(row, "preSfdmgVehclStdDt") || ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclEndDt") != ds_vehclInsuranceMgnt.getCellData(row, "preSfdmgVehclEndDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "10");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preSfdmgVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preSfdmgVehclEndDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclEndDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "driverAge") != ds_vehclInsuranceMgnt.getCellData(row, "preDriverAge")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "11");
        await scwin.f_cdNm("ZZ840", ds_vehclInsuranceMgnt.getCellData(row, "preDriverAge"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ840", ds_vehclInsuranceMgnt.getCellData(row, "driverAge"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "objectLimitCd") != ds_vehclInsuranceMgnt.getCellData(row, "preObjectLimitCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "12");
        await scwin.f_cdNm("ZZ835", ds_vehclInsuranceMgnt.getCellData(row, "preObjectLimitCd"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ835", ds_vehclInsuranceMgnt.getCellData(row, "objectLimitCd"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "luggageInsuranceYearStdDt") != ds_vehclInsuranceMgnt.getCellData(row, "preLuggageInsurYearStdDt") || ds_vehclInsuranceMgnt.getCellData(row, "luggageInsuranceYearEndDt") != ds_vehclInsuranceMgnt.getCellData(row, "preLuggageInsurYearEndDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "13");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preLuggageInsurYearStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preLuggageInsurYearEndDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "luggageInsuranceYearStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "luggageInsuranceYearEndDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "glassYn") != ds_vehclInsuranceMgnt.getCellData(row, "preGlassYn")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "14");
        if (ds_vehclInsuranceMgnt.getCellData(row, "glassYn") == "0") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preGlassStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preGlassEndDt"));
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", "유리특약 해지");
        } else if (ds_vehclInsuranceMgnt.getCellData(row, "glassYn") == "1") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", "특약내역 없음");
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "glassStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "glassEndDt"));
        }
      } else if (ds_vehclInsuranceMgnt.getCellData(row, "glassStdDt") != ds_vehclInsuranceMgnt.getCellData(row, "preGlassStdDt") || ds_vehclInsuranceMgnt.getCellData(row, "glassEndDt") != ds_vehclInsuranceMgnt.getCellData(row, "preGlassEndDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "14");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preGlassStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preGlassEndDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "glassStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "glassEndDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "frizYn") != ds_vehclInsuranceMgnt.getCellData(row, "preFrizYn")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "15");
        if (ds_vehclInsuranceMgnt.getCellData(row, "frizYn") == "0") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preFrizStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preFrizEndDt"));
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", "냉동특약 해지");
        } else if (ds_vehclInsuranceMgnt.getCellData(row, "frizYn") == "1") {
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", "특약내역 없음");
          ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "frizStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "frizEndDt"));
        }
      } else if (ds_vehclInsuranceMgnt.getCellData(row, "frizStdDt") != ds_vehclInsuranceMgnt.getCellData(row, "preFrizStdDt") || ds_vehclInsuranceMgnt.getCellData(row, "frizEndDt") != ds_vehclInsuranceMgnt.getCellData(row, "preFrizEndDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "15");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preFrizStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preFrizEndDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "frizStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "frizEndDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "guaranteeLimitCd") != ds_vehclInsuranceMgnt.getCellData(row, "preGuaranteeLimitCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "16");
        await scwin.f_cdNm("ZZ836", ds_vehclInsuranceMgnt.getCellData(row, "preGuaranteeLimitCd"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ836", ds_vehclInsuranceMgnt.getCellData(row, "guaranteeLimitCd"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "indDistrStdDt") != ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrStdDt") || ds_vehclInsuranceMgnt.getCellData(row, "indDistrEndDt") != ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrEndDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "17");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrEndDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "indDistrStdDt") + "~" + ds_vehclInsuranceMgnt.getCellData(row, "indDistrEndDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "indDistrDrvNm") != ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrDrvNm")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "18");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrDrvNm"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "indDistrDrvNm"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "indDistrBirthDt") != ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrBirthDt")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "19");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrBirthDt"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", ds_vehclInsuranceMgnt.getCellData(row, "indDistrBirthDt"));
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "indDistrWrkClsCd") != ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrWrkClsCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "20");
        await scwin.f_cdNm("ZZ844", ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrWrkClsCd"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ844", ds_vehclInsuranceMgnt.getCellData(row, "indDistrWrkClsCd"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
      if (ds_vehclInsuranceMgnt.getCellData(row, "indDistrSndTypeCd") != ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrSndTypeCd")) {
        ds_vehclInsuranceMgntChangeDetail.insertRow();
        cnt = ds_vehclInsuranceMgntChangeDetail.getRowCount() - 1;
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "mgntNo", ds_vehclInsuranceMgnt.getCellData(row, "mgntNo"));
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "chgWrkCd", "21");
        await scwin.f_cdNm("ZZ845", ds_vehclInsuranceMgnt.getCellData(row, "preIndDistrSndTypeCd"));
        pastCdNm = ds_cdNm.getCellData(0, "col1");
        await scwin.f_cdNm("ZZ845", ds_vehclInsuranceMgnt.getCellData(row, "indDistrSndTypeCd"));
        currentCdNm = ds_cdNm.getCellData(0, "col1");
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "pastData", pastCdNm);
        ds_vehclInsuranceMgntChangeDetail.setCellData(cnt, "currentData", currentCdNm);
      }
    }
    let chkCarInsuranceYearStdDt = ds_vehclInsuranceMgnt.getCellData(row, "carInsuranceYearStdDt");
    let chkCarInsuranceYearEndDt = ds_vehclInsuranceMgnt.getCellData(row, "carInsuranceYearEndDt");
    let chkLuggageInsuranceYearStdDt = ds_vehclInsuranceMgnt.getCellData(row, "luggageInsuranceYearStdDt");
    let chkLuggageInsuranceYearEndDt = ds_vehclInsuranceMgnt.getCellData(row, "luggageInsuranceYearEndDt");
    let chkSelfVehclYn = ds_vehclInsuranceMgnt.getCellData(row, "selfVehclYn");
    let chkSfdmgVehclYn = ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclYn");
    let chkGlassYn = ds_vehclInsuranceMgnt.getCellData(row, "glassYn");
    let chkFrizYn = ds_vehclInsuranceMgnt.getCellData(row, "frizYn");
    let chkWrkClsCd = ds_vehclInsuranceMgnt.getCellData(row, "wrkClsCd");
    let chkIndDistrStdDt = ds_vehclInsuranceMgnt.getCellData(row, "indDistrStdDt");
    let chkIndDistrEndDt = ds_vehclInsuranceMgnt.getCellData(row, "indDistrEndDt");
    if (!$c.gus.cfIsAfterDate($p, chkCarInsuranceYearStdDt, chkCarInsuranceYearEndDt)) {
      await $c.win.alert($p, "자동차보험 정보 기간(1년)의 시작일자가 종료일자 전 이어야 합니다");
      ica_carInsuranceYearStdDt.setFocus();
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, chkLuggageInsuranceYearStdDt, chkLuggageInsuranceYearEndDt)) {
      await $c.win.alert($p, "적재물보험 정보 기간(1년)의 시작일자가 종료일자 전 이어야 합니다");
      ica_luggageInsuranceYearStdDt.setFocus();
      return;
    }
    if (!$c.gus.cfIsAfterDate($p, chkIndDistrStdDt, chkIndDistrEndDt)) {
      await $c.win.alert($p, "산재보험 보험 기간의 시작일자가 종료일자 전 이어야 합니다");
      ica_indDistrStdDt.setFocus();
      return;
    }
    if (chkSelfVehclYn == 1 || chkSelfVehclYn == "1") {
      let chkSelfVehclStdDt = ds_vehclInsuranceMgnt.getCellData(row, "selfVehclStdDt");
      let chkSelfVehclEndDt = ds_vehclInsuranceMgnt.getCellData(row, "selfVehclEndDt");
      if (chkSelfVehclStdDt == "" || chkSelfVehclEndDt == "") {
        await $c.win.alert($p, "자차여부 선택시 시작일자와 종료일자를 입력 해야합니다.");
        ica_selfVehclStdDt.setFocus();
        return;
      }
      if (!$c.gus.cfIsAfterDate($p, chkSelfVehclStdDt, chkSelfVehclEndDt)) {
        await $c.win.alert($p, "자차여부 선택시 자차기간 시작일자가 종료일자 전 이어야 합니다");
        ica_selfVehclStdDt.setFocus();
        return;
      }
    }
    if (chkSfdmgVehclYn == 1 || chkSfdmgVehclYn == "1") {
      let chkSfdmgVehclStdDt = ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclStdDt");
      let chkSfdmgVehclEndDt = ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclEndDt");
      if (chkSfdmgVehclStdDt == "" || chkSfdmgVehclEndDt == "") {
        await $c.win.alert($p, "자손여부 선택시 시작일자와 종료일자를 입력 해야합니다.");
        ica_sfdmgVehclStdDt.setFocus();
        return;
      }
      if (!$c.gus.cfIsAfterDate($p, chkSfdmgVehclStdDt, chkSfdmgVehclEndDt)) {
        await $c.win.alert($p, "자손여부 선택시 자손여부 시작일자가 종료일자 전 이어야 합니다");
        ica_sfdmgVehclStdDt.setFocus();
        return;
      }
    }
    if (chkGlassYn == 1 || chkGlassYn == "1") {
      let chkGlassStdDt = ds_vehclInsuranceMgnt.getCellData(row, "glassStdDt");
      let chkGlassEndDt = ds_vehclInsuranceMgnt.getCellData(row, "glassEndDt");
      if (chkGlassStdDt == "" || chkGlassEndDt == "") {
        await $c.win.alert($p, "유리여부 선택시 시작일자와 종료일자를 입력 해야합니다.");
        ica_glassStdDt.setFocus();
        return;
      }
      if (!$c.gus.cfIsAfterDate($p, chkGlassStdDt, chkGlassEndDt)) {
        await $c.win.alert($p, "유리여부 선택시 유리여부 시작일자가 종료일자 전 이어야 합니다");
        ica_glassStdDt.setFocus();
        return;
      }
    }
    if (chkFrizYn == 1 || chkFrizYn == "1") {
      let chkFrizStdDt = ds_vehclInsuranceMgnt.getCellData(row, "frizStdDt");
      let chkFrizEndDt = ds_vehclInsuranceMgnt.getCellData(row, "frizEndDt");
      if (chkFrizStdDt == "" || chkFrizEndDt == "") {
        await $c.win.alert($p, "냉동여부 선택시 시작일자와 종료일자를 입력 해야합니다.");
        ica_frizStdDt.setFocus();
        return;
      }
      if (!$c.gus.cfIsAfterDate($p, chkFrizStdDt, chkFrizEndDt)) {
        await $c.win.alert($p, "냉동여부 선택시 냉동여부 시작일자가 종료일자 전 이어야 합니다");
        ica_frizStdDt.setFocus();
        return;
      }
    }
    if (chkWrkClsCd == "05") {
      let chkCancelCd = ds_vehclInsuranceMgnt.getCellData(row, "cancelCd");
      if (chkCancelCd == "") {
        await $c.win.alert($p, "작업구분 해지 상태의 경우 해지사유는 필수입력 입니다.");
        acb_cancelCd.setFocus();
        return;
      }
    }
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmResult == true) {
      await $c.sbm.execute($p, sbm_save);
    } else {
      if (ds_vehclInsuranceMgntChangeDetail.getRowCount() > 0) {
        for (let i = 0; i < ds_vehclInsuranceMgntChangeDetail.getRowCount(); i++) {
          if (ds_vehclInsuranceMgntChangeDetail.getCellData(ds_vehclInsuranceMgntChangeDetail.getRowPosition(), "chkBox") == "") {
            scwin.f_UndoRow();
          }
        }
      }
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (ds_vehclInsuranceMgntChangeDetail.getUpdatedIndex().length > 0) {
    await $c.sbm.execute($p, sbm_save2);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
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
scwin.f_setFileUpDownFrame = function (mgntNo, wrkSeq) {
  // TODO: IFRAME 기반 파일 업/다운로드는 wframe src 변경으로 대체
};
scwin.f_checkSelfVehclYn = function () {
  if (ica_carInsuranceYearStdDt.getValue() != "" && ica_carInsuranceYearEndDt.getValue() != "") {
    if (ica_selfVehclStdDt.getValue() == "" && ica_selfVehclEndDt.getValue() == "") {
      ica_selfVehclStdDt.setValue(ica_carInsuranceYearStdDt.getValue());
      ica_selfVehclEndDt.setValue(ica_carInsuranceYearEndDt.getValue());
    }
  }
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  if (ds_vehclInsuranceMgnt.getCellData(row, "selfVehclYn") == "0") {
    $c.gus.cfDisableObjects($p, [ica_selfVehclStdDt, ica_selfVehclEndDt]);
    ica_selfVehclStdDt.setValue("");
    ica_selfVehclEndDt.setValue("");
  } else if (ds_vehclInsuranceMgnt.getCellData(row, "selfVehclYn") == "1") {
    $c.gus.cfEnableObjects($p, [ica_selfVehclStdDt, ica_selfVehclEndDt]);
  }
};
scwin.f_checkSfdmgVehclYn = function () {
  if (ica_carInsuranceYearStdDt.getValue() != "" && ica_carInsuranceYearEndDt.getValue() != "") {
    if (ica_sfdmgVehclStdDt.getValue() == "" && ica_sfdmgVehclEndDt.getValue() == "") {
      ica_sfdmgVehclStdDt.setValue(ica_carInsuranceYearStdDt.getValue());
      ica_sfdmgVehclEndDt.setValue(ica_carInsuranceYearEndDt.getValue());
    }
  }
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  if (ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclYn") == "0") {
    $c.gus.cfDisableObjects($p, [ica_sfdmgVehclStdDt, ica_sfdmgVehclEndDt]);
    ica_sfdmgVehclStdDt.setValue("");
    ica_sfdmgVehclEndDt.setValue("");
  } else if (ds_vehclInsuranceMgnt.getCellData(row, "sfdmgVehclYn") == "1") {
    $c.gus.cfEnableObjects($p, [ica_sfdmgVehclStdDt, ica_sfdmgVehclEndDt]);
  }
};
scwin.f_checkGlassYn = function () {
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  if (ds_vehclInsuranceMgnt.getCellData(row, "glassYn") == "0") {
    $c.gus.cfDisableObjects($p, [ica_glassStdDt, ica_glassEndDt]);
    ica_glassStdDt.setValue("");
    ica_glassEndDt.setValue("");
  } else if (ds_vehclInsuranceMgnt.getCellData(row, "glassYn") == "1") {
    $c.gus.cfEnableObjects($p, [ica_glassStdDt, ica_glassEndDt]);
  }
};
scwin.f_checkFrizYn = function () {
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  if (ds_vehclInsuranceMgnt.getCellData(row, "frizYn") == "0") {
    $c.gus.cfDisableObjects($p, [ica_frizStdDt, ica_frizEndDt]);
    ica_frizStdDt.setValue("");
    ica_frizEndDt.setValue("");
  } else if (ds_vehclInsuranceMgnt.getCellData(row, "frizYn") == "1") {
    $c.gus.cfEnableObjects($p, [ica_frizStdDt, ica_frizEndDt]);
  }
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
};
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_vehclInsuranceMgnt.getRowCount();
  let sheetTitle = "차량보험관리";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, varGrNm, {
        fileName: sheetTitle + ".xls",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_AddRow = function () {
  ds_vehclInsuranceMgntChangeDetail.insertRow();
  let detailRow = ds_vehclInsuranceMgntChangeDetail.getRowPosition();
  let masterRow = ds_vehclInsuranceMgnt.getRowPosition();
  ds_vehclInsuranceMgntChangeDetail.setCellData(detailRow, "mgntNo", ds_vehclInsuranceMgnt.getCellData(masterRow, "mgntNo"));
  ds_vehclInsuranceMgntChangeDetail.setCellData(detailRow, "modSeq", ds_vehclInsuranceMgntChangeDetail.getRowCount());
};
scwin.btn_addrow_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.f_DeleteRow = function () {
  ds_vehclInsuranceMgntChangeDetail.removeRow(ds_vehclInsuranceMgntChangeDetail.getRowPosition());
};
scwin.btn_deleterow_onclick = function (e) {
  scwin.f_DeleteRow();
};
scwin.f_UndoRow = function () {
  ds_vehclInsuranceMgntChangeDetail.undoRow(ds_vehclInsuranceMgntChangeDetail.getRowPosition());
};
scwin.btn_cancel2_onclick = function (e) {
  scwin.f_UndoRow();
};
scwin.f_chkAfterDayAndYear = async function (chkDate) {
  sbm_chkAfterDayAndYear.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=chkAfterDayAndYear" + "&param1=" + encodeURIComponent(chkDate);
  await $c.sbm.execute($p, sbm_chkAfterDayAndYear);
};
scwin.sbm_chkAfterDayAndYear_submitdone = function (e) {};
scwin.f_checkCharacter = async function (e) {
  let keyCode = e.keyCode || e.which;
  if (keyCode != 46 && (keyCode < 48 || keyCode > 57)) {
    await $c.win.alert($p, "최대적재량은 '숫자', '소수점' 만 입력 가능 합니다.");
    e.preventDefault();
  }
};
scwin.gr_vehclInsuranceMgnt_oncellclick = async function (rowIndex, columnIndex, columnId) {
  scwin.f_onloadSetting();
  scwin.f_setFileUpDownFrame(ds_vehclInsuranceMgnt.getCellData(ds_vehclInsuranceMgnt.getRowPosition(), "mgntNo"), ds_vehclInsuranceMgnt.getCellData(ds_vehclInsuranceMgnt.getRowPosition(), "wrkSeq"));
  ds_condition2.set("mgntNo", ds_vehclInsuranceMgnt.getCellData(rowIndex, "mgntNo"));
  ds_condition2.set("wrkSeq", ds_vehclInsuranceMgnt.getCellData(rowIndex, "wrkSeq"));
  await $c.sbm.execute($p, sbm_retrieve_detail);
  scwin.preWrkClsCd = ds_vehclInsuranceMgnt.getCellData(rowIndex, "wrkClsCd");
  rd_wrkClsCd.setFocus();
};
scwin.ds_vehclInsuranceMgnt_oncelldatachange = async function (info) {
  if (info.colId == "wrkClsCd") {
    scwin.f_firstSetting();
    $c.gus.cfEnableObjects($p, [rd_wrkClsCd, btn_cancel, btn_save]);
    let row = ds_vehclInsuranceMgnt.getRowPosition();
    let chkWrkClsCd = ds_vehclInsuranceMgnt.getCellData(row, "wrkClsCd");
    let chkApprvReqNo = ds_vehclInsuranceMgnt.getCellData(row, "apprvReqNo");
    let chkApprvStsCd = ds_vehclInsuranceMgnt.getCellData(row, "apprvStsCd");
    if (chkWrkClsCd == "01" && txt_drcrNo.getValue() != "") {
      ds_vehclInsuranceMgnt.setCellData(row, "wrkClsCd", scwin.preWrkClsCd);
      await $c.win.alert($p, "작업구분을 가입을 선택 하셨습니다.\n\n" + "신규등록만 가입 선택이 가능 합니다.");
      scwin.f_onloadSetting();
      ds_vehclInsuranceMgnt.undoRow(row);
      return;
    } else if (chkWrkClsCd == "02") {
      $c.gus.cfEnableObjects($p, [btn_update]);
      scwin.f_enableSetting();
    } else if (chkWrkClsCd == "03") {
      $c.gus.cfEnableObjects($p, [txt_drcrNo, ed_maxPayloadCd, ed_releaseYear, acb_deptCd, acb_possessCd]);
    } else if (chkWrkClsCd == "04") {
      await $c.win.alert($p, "작업구분을 갱신을 선택 하셨습니다.\n\n" + "갱신 상태로의 변경은 '차량보험일괄갱신'탭 에서만 처리 가능 합니다.");
      ds_vehclInsuranceMgnt.undoRow(row);
      scwin.f_onloadSetting();
      return;
    } else if (chkWrkClsCd == "05") {
      $c.gus.cfEnableObjects($p, [acb_cancelCd, ica_carInsuranceYearStdDt, ica_carInsuranceYearEndDt]);
      $c.gus.cfEnableObjects($p, [ica_luggageInsuranceYearStdDt, ica_luggageInsuranceYearEndDt]);
      ds_vehclInsuranceMgnt.setCellData(ds_vehclInsuranceMgnt.getRowPosition(), "carInsuranceYearEndDt", WebSquare.date.getCurrentServerDate("yyyyMMdd"));
      ds_vehclInsuranceMgnt.setCellData(ds_vehclInsuranceMgnt.getRowPosition(), "luggageInsuranceYearEndDt", WebSquare.date.getCurrentServerDate("yyyyMMdd"));
    }
  }
};
scwin.ds_vehclInsuranceMgnt_onrowpositionchange = function (info) {
  $c.gus.cfDisableKeyData($p);
  let row = ds_vehclInsuranceMgnt.getRowPosition();
  if (ds_vehclInsuranceMgnt.getRowStatus(row) != "C") {
    ds_vehclInsuranceMgnt.undoAll();
  }
};
scwin.dataSetDebug = async function (dataSet, isDebug) {
  if (isDebug == true) {
    let obj = dataSet;
    let str = "[[[[" + obj.id + "]]]]]\n";
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      let colCount = obj.getColumnCount();
      for (let dsCol = 0; dsCol < colCount; dsCol++) {
        let colId = obj.getColumnID(dsCol);
        str += "[" + colId + "] " + obj.getCellData(dsRow, colId) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_reqDeptCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_condition.reqDeptCd',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_reqApplyDt',edFromId:'ica_reqApplyStdDt',edToId:'ica_reqApplyEndDt',refEdDt:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_reqVehclNo',style:'width: 150px;',ref:'data:ds_condition.reqVehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차대번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_reqDrcrNo',style:'width: 150px;',ref:'data:ds_condition.reqDrcrNo'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_reqPossessCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_condition.reqPossessCd',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrive','ev:onclick':'scwin.btn_retrive_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보험관리차량 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vehclInsuranceMgnt',focusMode:'row',id:'gr_vehclInsuranceMgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',style:'',value:'차량보험관리번호',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkClsCd',inputType:'text',style:'',value:'작업</br>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indDistrWrkClsCd',inputType:'text',style:'',value:'산재</br>작업구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'text',style:'',value:'지사</br>코드',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',style:'',value:'지사명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'possessCd',inputType:'text',style:'',value:'소유</br>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrNo',inputType:'text',style:'',value:'차대번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indDistrDrvNm',inputType:'text',style:'',value:'운전자명',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'indDistrBirthDt',value:'생년월일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'applyDt',value:'신청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vehclTypeCd',value:'차량</br>형식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'maxPayloadCd',value:'최대</br>적재량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'releaseYear',value:'차량</br>년식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvStsCd',value:'전자결재</br>상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mgntNo',value:'차량보험관리번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkSeq',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'apprvReqNo',value:'결재요청번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deptCd',value:'소속지사',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cancelCd',value:'소속지사',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceShortStdDt',value:'(자동차보험)단기 시작일 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceShortEndDt',value:'(자동차보험)단기 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceYearStdDt',value:'(자동차보험)1년 시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceYearEndDt',value:'(자동차보험)1년 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'objectLimitCd',value:'(자동차보험)대물한도',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'driverAge',value:'(자동차보험)운전자연령',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'selfVehclYn',value:'(자동차보험)자차여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'selfVehclStdDt',value:'(자동차보험)자차 시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'selfVehclEndDt',value:'(자동차보험)자차 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sfdmgVehclYn',value:'(자동차보험)자손여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sfdmgVehclStdDt',value:'(자동차보험)자손 시작일 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sfdmgVehclEndDt',value:'(자동차보험)자손 종료일 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceShortStdDt',value:'(적재물보험)단기 시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceShortEndDt',value:'(적재물보험)단기 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceYearStdDt',value:'(적재물보험)1년 시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceYearEndDt',value:'(적재물보험)1년 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'guaranteeLimitCd',value:'(적재물보험)보상한도',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'glassYn',value:'(적재물보험)유리여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'glassStdDt',value:'(적재물보험)유리 시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'glassEndDt',value:'(적재물보험)유리 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'frizYn',value:'(적재물보험)냉동여부 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'frizStdDt',value:'(적재물보험)냉동 시작일 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'frizEndDt',value:'(적재물보험)냉동 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'umbrellaPolicyYn',value:'(적재물보험)기업포괄여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'umbrellaPolicyStdDt',value:'(적재물보험)기업포괄 시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'umbrellaPolicyEndDt',value:'(적재물보험)기업포괄 종료일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'등록자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'등록일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'수정자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'수정일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preVehclNo',value:'차량번호2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preDeptCd',value:'소속지사2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prePossessCd',value:'소유구분2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preVehclTypeCd',value:'차량형식2 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'preMaxPayloadCd',value:'최대적재량2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preReleaseYear',value:'차량년식2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preCarInsuranceYearStdDt',value:'(자동차보험)1년 시작일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'수정일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preCarInsuranceYearEndDt',value:'(자동차보험)1년 종료일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preObjectLimitCd',value:'(자동차보험)대물한도2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preDriverAge',value:'(자동차보험)운전자연령2 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSelfVehclYn',value:'(자동차보험)자차여부2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSelfVehclStdDt',value:'(자동차보험)자차 시작일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSelfVehclEndDt',value:'(자동차보험)자차 종료일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSfdmgVehclYn',value:'(자동차보험)자손여부2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSfdmgVehclStdDt',value:'(자동차보험)자손 시작일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSfdmgVehclEndDt',value:'(자동차보험)자손 종료일2 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preLuggageInsurYearStdDt',value:'(적재물보험)1년 시작일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preLuggageInsurYearEndDt',value:'(적재물보험)1년 종료일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGuaranteeLimitCd',value:'(적재물보험)보상한도2 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGlassYn',value:'(적재물보험)유리여부2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGlassStdDt',value:'(적재물보험)유리 시작일2 ',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGlassEndDt',value:'(적재물보험)유리 종료일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preFrizYn',value:'(적재물보험)냉동여부2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preFrizStdDt',value:'(적재물보험)냉동 시작일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preFrizEndDt',value:'(적재물보험)냉동 종료일2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'indDistrStdDt',value:'(산재보험)입직일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'indDistrEndDt',value:'(산재보험)이직/적용제외신청일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'indDistrSndTypeCd',value:'(산재보험)배송수단',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrStdDt',value:'(산재보험)입직일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'preIndDistrEndDt',value:'(산재보험)이직/적용제외신청일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrDrvNm',value:'(산재보험)운전자명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrBirthDt',value:'(산재보험)생년월일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrWrkClsCd',value:'(산재보험)산재작업구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrSndTypeCd',value:'(산재보험)배송수단',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkClsCd',inputType:'select',style:'',value:'',width:'70',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'변경'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'갱신'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'해지'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'indDistrWrkClsCd',inputType:'select',style:'',value:'',width:'100',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입직'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'이직'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적용제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'possessCd',inputType:'select',style:'',value:'',width:'70',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입용차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'KPX운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입협력'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indDistrDrvNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'indDistrBirthDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'applyDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'vehclTypeCd',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'트랙터'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'카고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/P'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T/L'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'탱크로리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'윙바디'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'트랙터(냉동)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'카고(냉동)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'덤프'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'maxPayloadCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'releaseYear',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'apprvStsCd',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상신'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반려'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중간승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'최종승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미상신'}]},{T:1,N:'w2:value'}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mgntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkSeq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'apprvReqNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cancelCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceShortStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceShortEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceYearStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'carInsuranceYearEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'objectLimitCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'driverAge',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'selfVehclYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'selfVehclStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'selfVehclEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sfdmgVehclYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sfdmgVehclStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'sfdmgVehclEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceShortStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceShortEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceYearStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'luggageInsuranceYearEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'guaranteeLimitCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'glassYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'glassStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'glassEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'frizYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'frizStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'frizEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'umbrellaPolicyYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'umbrellaPolicyStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'umbrellaPolicyEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preVehclNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prePossessCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preVehclTypeCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'preMaxPayloadCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'preReleaseYear',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preCarInsuranceYearStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preCarInsuranceYearEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preObjectLimitCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preDriverAge',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSelfVehclYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSelfVehclStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSelfVehclEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSfdmgVehclYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSfdmgVehclStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preSfdmgVehclEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preLuggageInsurYearStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preLuggageInsurYearEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGuaranteeLimitCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGlassYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGlassStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preGlassEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preFrizYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preFrizStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preFrizEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'indDistrStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'indDistrEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'indDistrSndTypeCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrStdDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'preIndDistrEndDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrDrvNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrBirthDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrWrkClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'preIndDistrSndTypeCd',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기본정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkClsCd',ref:'data:ds_vehclInsuranceMgnt.wrkClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가입'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변경'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대차'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'갱신'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해지'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속지사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_deptCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.deptCd',mandatory:'true',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_applyDt',style:'',ref:'data:ds_vehclInsuranceMgnt.applyDt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vehclNo',style:'width: 150px;',ref:'data:ds_vehclInsuranceMgnt.vehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차대번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_drcrNo',style:'width: 150px;',ref:'data:ds_vehclInsuranceMgnt.drcrNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최대적재량(톤)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_maxPayloadCd',style:'width: 150px;',ref:'data:ds_vehclInsuranceMgnt.maxPayloadCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량년식',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_releaseYear',style:'width: 150px;',ref:'data:ds_vehclInsuranceMgnt.releaseYear',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소유구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_possessCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.possessCd',mandatory:'true',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량형식',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_vehclTypeCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.vehclTypeCd',mandatory:'true',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_cancelCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.cancelCd',editType:'select',search:'start'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자동차보험 정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보험기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_carInsuranceYear',edFromId:'ica_carInsuranceYearStdDt',edToId:'ica_carInsuranceYearEndDt',refEdDt:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_selfVehclYn',ref:'data:ds_vehclInsuranceMgnt.selfVehclYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보험기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_selfVehcl',edFromId:'ica_selfVehclStdDt',edToId:'ica_selfVehclEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운전자연령',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_driverAge',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.driverAge',mandatory:'true',editType:'select',search:'start'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자손',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_sfdmgVehclYn',ref:'data:ds_vehclInsuranceMgnt.sfdmgVehclYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보험기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_sfdmgVehcl',edFromId:'ica_sfdmgVehclStdDt',edToId:'ica_sfdmgVehclEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대물한도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_objectLimitCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.objectLimitCd',mandatory:'true',editType:'select',search:'start'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적재물 보험 정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보험기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_luggageInsuranceYear',edFromId:'ica_luggageInsuranceYearStdDt',edToId:'ica_luggageInsuranceYearEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유리특약',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_glassYn',ref:'data:ds_vehclInsuranceMgnt.glassYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보험기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_glass',edFromId:'ica_glassStdDt',edToId:'ica_glassEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보상한도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_guaranteeLimitCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.guaranteeLimitCd',mandatory:'true',editType:'select',search:'start'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'냉동특약',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_frizYn',ref:'data:ds_vehclInsuranceMgnt.frizYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보험기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_friz',edFromId:'ica_frizStdDt',edToId:'ica_frizEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 산재 보험 정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보험기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_indDistr',edFromId:'ica_indDistrStdDt',edToId:'ica_indDistrEndDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'운전자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_indDistrDrvNm',style:'width: 150px;',ref:'data:ds_vehclInsuranceMgnt.indDistrDrvNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'생년월일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_indDistrBirthDt',style:'',ref:'data:ds_vehclInsuranceMgnt.indDistrBirthDt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'산재작업구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_indDistrWrkClsCd',ref:'data:ds_vehclInsuranceMgnt.indDistrWrkClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입직'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이직'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용제외'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배송수단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'false',class:'',id:'acb_indDistrSndTypeCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_vehclInsuranceMgnt.indDistrSndTypeCd',editType:'select',search:'start'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'info-list txt-red'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'1. 파일명, 파일경로에 특수문자를 입력하실 수 없습니다.(특수문자 종류 : \'!,+&^%$#@~;)',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'2. 첨부파일종류를 파일별로 건건이 \'파일 업로드\' 버튼을 누르세요! (여러 파일을 한번에 업로드 시 같은 증빙파일종류로 업로드 됩니다.) ',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create','ev:onclick':'scwin.btn_create_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_update','ev:onclick':'scwin.btn_update_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel','ev:onclick':'scwin.btn_cancel_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save','ev:onclick':'scwin.btn_save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'',src:'./zz_831_01_01p.xml'}}]}]}]}]})