/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_06b.xml 98363 be5ae8ce5a42fcce6dcc5ce9e9765ba3c0e2930c9f10fe143a1452e5ec7f14e0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_staff_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'checkBox',name:'선;택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNo',name:'사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNm',name:'성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lobranNm',name:'소속'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occptypeNm',name:'직종'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dtlOccptypeNm',name:'상세;직종'}},{T:1,N:'w2:column',A:{dataType:'text',id:'occpgrdNm',name:'직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedArrangeYn',name:'고정배치여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrangeCont',name:'배치;내역'}},{T:1,N:'w2:column',A:{dataType:'text',id:'resultRegYn',name:'실적;여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'yestWrkDt',name:'전일최종작업일자'}},{T:1,N:'w2:column',A:{id:'arrangeContGb',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgLobranCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalShiftCnt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'wrkIndictNo',name:'작업지시번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslNmWrkPlNm',name:'본선/작업장'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shiftClsCd',name:'SHIFT'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpCd',name:'작업단계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNo',name:'사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkIndictKndCd',name:'작업지시종류'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workTime',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_workTime_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_workTime_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'workClsCd',name:'근무구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkIndictKndCd',name:'작업지시종류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkIndictNo',name:'작업지시번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslNmWrkPlNm',name:'본선/작업장'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shiftClsCd',name:'SHIFT'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStpCd',name:'작업단계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workStDt',name:'일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workStHh',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workEndDt',name:'일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workEndHh',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dtlTskCntnCd',name:'업무내용'}},{T:1,N:'w2:column',A:{dataType:'text',id:'staffNo',name:'사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workDt',name:'작업일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'workSeq',name:'근무순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shift',name:'SHIFT;수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'emgcOdrYn',name:'긴급;작업'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commWrkScYn',name:'여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commWrkScStd',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rainScYn',name:'여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rainScStd',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'snowScYn',name:'여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'snowScStd',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gangWrkYn',name:'여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gangWrkStd',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrReqYn',name:'여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrReqStd',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extendWrkScYn',name:'여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'extendWrkScStd',name:'시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'holiWrkScYn',name:'여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'holiWrkScStd',name:'시간'}},{T:1,N:'w2:column',A:{id:'filterCode',name:'name31',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_workCls'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text',defaultValue:'OP220'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workCls',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_shift'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text',defaultValue:'OP117'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shift',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wkrStp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'upperCd',name:'name1',dataType:'text',defaultValue:'99'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wkrStp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_wkrStp',id:'ldt_wkrStp'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_wkrStp',id:'ldt_wkrStp2'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_tskCntn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text',defaultValue:'OP221'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tskCntn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'ds_tskCntn',id:'ldt_tskCntn'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'upperCd == ref(\'data:ds_workTime.workClsCd\')'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchStaff'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchWork'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'workDate',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_workCls',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_workCls',target:'data:json,{"id":"ds_workCls","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_shift',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_shift',target:'data:json,{"id":"ds_shift","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wkrStp',action:'/ds.co.RetreiveWrkStpCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_wkrStp',target:'data:json,{"id":"ds_wkrStp","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wkrStp_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tskCntn',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_tskCntn',target:'data:json,{"id":"ds_tskCntn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveWork',action:'/ds.op.wrkrslts.stvwrkrslts.SaveStaffEachWorkResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_workTime","key":"IN_DS1"},{"id":"ds_staff","key":"IN_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveWork_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_searchStaff',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveTargetStaffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchStaff","key":"IN_DS1"},{"id":"ds_staff","key":"OUT_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_searchStaff_submitdone',target:'data:json,{"id":"ds_staff","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_searchWork',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveStaffEachWorkResultsCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'',ref:'data:json,[{"id":"ds_workPlan","key":"OUT_DS1"},{"id":"ds_workTime","key":"OUT_DS2"},{"id":"dma_searchWork","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_workPlan","key":"OUT_DS1"},{"id":"ds_workTime","key":"OUT_DS2"}]'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 물류/작업실적/작업장하역/하역인원작업실적

// 세션정보 가져오기
scwin.memJson = $c.data.getMemInfo($p);
scwin.cmdKnd = "";
scwin.bCheck = "";
scwin.gClickFlag;
scwin.resultCnt = 0;
scwin.v_workClsCd = "";
scwin.gShiftComboCode = "";
scwin.sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.selectedRow = "";
scwin.selectedGrid = "";
scwin.selectedCol = "";
scwin.bOnPopUp = false;
scwin.gfixedArrangeYn = 0; //고정배치여부 

scwin.checkStaffArray;
scwin.pos_groupCode = 0;
scwin.hid_txt_wrkDt = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP161",
    compID: "lc_dtlOccptypeCd",
    opt: {
      "range": "1,1"
    }
  }, {
    grpCd: "OP300",
    compID: "gr_workTime:commWrkScStd,gr_workTime:rainScStd,gr_workTime:snowScStd,gr_workTime:gangWrkStd,gr_workTime:odrReqStd,gr_workTime:extendWrkScStd,gr_workTime:holiWrkScStd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.sbm.execute($p, sbm_workCls);
  $c.sbm.execute($p, sbm_shift);
  $c.sbm.execute($p, sbm_wkrStp);
  $c.sbm.execute($p, sbm_tskCntn);
};
scwin.onUdcCompleted = function () {
  ed_qryWrkDt.setValue(scwin.sCurrDate);
  ed_branCd.focus();
  ed_branCd.setValue(scwin.memJson.loUpperLobranCd);
  txt_branNm.setValue(scwin.memJson.loUpperLobranNm);

  // ed_branCd.setValue("4BB");
  // txt_branNm.setValue("의왕지점");
  // ed_qryWrkDt.setValue("20200102");
  // scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [searchCondition]))) {
    return;
  }
  ds_staff.removeAll();
  ds_workPlan.removeAll();
  ds_workTime.removeAll();
  ds_searchStaff.set("branCd", ed_branCd.getValue()); //점소
  ds_searchStaff.set("dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종
  ds_searchStaff.set("staffNo", ed_staffNo.getValue()); //인원
  ds_searchStaff.set("wrkDt", ed_qryWrkDt.getValue()); //일자

  scwin.hid_txt_wrkDt = ed_qryWrkDt.getValue();
  scwin.cmdKnd = "retrieve";
  // ds_searchStaff.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_searchStaff);

  //버튼 제어
  scwin.f_buttonEnableCheck();
};

//-------------------------------------------------------------------------
// 버튼 제어
//-------------------------------------------------------------------------
scwin.f_buttonEnableCheck = function () {
  var qryDate = scwin.hid_txt_wrkDt;
  var qryYYYYMM = qryDate.substring(0, 6);
  var qryDD = qryDate.substring(6, 8);
  var qryLastDD = $c.date.getLastDateOfMonth($p, qryYYYYMM); //조회월의 마지막날

  var sCruuYYYYMM = scwin.sCurrDate.substring(0, 6);
  var sCurrDD = scwin.sCurrDate.substring(6, 8);
  var sCurrLastDD = $c.date.getLastDateOfMonth($p, sCruuYYYYMM); //SYSDATE의 마지막날

  var diffDay = 0;

  //조회만 가능
  if (qryYYYYMM < sCruuYYYYMM) {
    if (sCruuYYYYMM - qryYYYYMM > 1) {
      scwin.f_buttonEnableDisable('D');
      return;
    } else {
      diffDay = qryLastDD - qryDD;
      if (diffDay < 3) {
        //조회일자가 해당월의 마지막날 3일 이내인경우
        if (sCurrDD > 3 - diffDay) {
          scwin.f_buttonEnableDisable('D');
          return;
        } else {
          scwin.f_buttonEnableDisable('E');
          return;
        }
      } else {
        scwin.f_buttonEnableDisable('D');
        return;
      }
    }
  }
  if (qryDD > 15) {
    if (sCurrDD > 15) {
      scwin.f_buttonEnableDisable('E');
      return;
    } else {
      //조회만 가능
      scwin.f_buttonEnableDisable('D');
      return;
    }
  } else {
    if (sCurrDD <= 15) {
      scwin.f_buttonEnableDisable('E');
      return;
    } else {
      if (qryDD == '13') {
        if (sCurrDD <= 16) {
          scwin.f_buttonEnableDisable('E');
          return;
        } else {
          scwin.f_buttonEnableDisable('D');
          return;
        }
      } else if (qryDD == '14') {
        if (sCurrDD <= 17) {
          scwin.f_buttonEnableDisable('E');
          return;
        } else {
          scwin.f_buttonEnableDisable('D');
          return;
        }
      } else if (qryDD == '15') {
        if (sCurrDD <= 18) {
          scwin.f_buttonEnableDisable('E');
          return;
        } else {
          scwin.f_buttonEnableDisable('D');
          return;
        }
      } else {
        //조회만 가능
        scwin.f_buttonEnableDisable('D');
        return;
      }
    }
  }
  scwin.f_buttonEnableDisable('E');
};
scwin.f_buttonEnableDisable = function (val) {
  /*
  if(val == 'E'){
  cfEnableObj(btn_Select,true);      
  cfEnableObj(btn_AddWorkTime,true);
  cfEnableObj(btn_DeleteWorkTime,true);
   cfEnableObj(btn_CancelWorkTime,true);
   cfEnableObj(btn_Save,true);
   cfEnableObj(btn_Clear,true);
  }else{
  cfEnableObj(btn_Select,false);
  cfEnableObj(btn_AddWorkTime,false)
  cfEnableObj(btn_DeleteWorkTime,false)
   cfEnableObj(btn_CancelWorkTime,false)
   cfEnableObj(btn_Save,false)
   cfEnableObj(btn_Clear,false);
  } 
  */
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var deleteCnt = 0;
  var j = 0;
  if (ds_staff.getTotalRow() == 0) {
    return;
  }
  if (ds_workTime.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["실적"]);
    return;
  }
  var fixedArrangeYn = 0;

  //인원을 선택했는지  Check
  for (var i = 0; i < ds_staff.getTotalRow(); i++) {
    if (ds_staff.getCellData(i, "checkBox") == "T") {
      j = j + 1;
      fixedArrangeYn = ds_staff.getCellData(i, "fixedArrangeYn");
    }
  }
  if (j == 0) {
    await $c.win.alert($p, "인원을 선택 후 저장하십시오.");
    return;
  }
  if (ds_workTime.getTotalRow() == 1 && ds_workTime.getCellData(0, "workClsCd") == 'N') {
    await $c.win.alert($p, "근무구분을 업무간휴무만 입력하여 저장할 수 없습니다 .");
    return;
  }

  //근무구분별 필수항목 첵크(근무구분이 배치인 경우 작업지시번호,작업단계 필수) 
  for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
    if (ds_workTime.getCellData(i, "workClsCd") == 'A' && fixedArrangeYn != 1) {
      if (ds_workTime.getCellData(i, "wrkIndictNo") == '') {
        await $c.win.alert($p, "근무구분이 배치인 경우 작업지시번호는 필수입니다.");
        gr_workTime.setFocusedCell(i, "wrkIndictNo", true);
        return;
      }
      if (ds_workTime.getCellData(i, "wrkStpCd") == '') {
        await $c.win.alert($p, "근무구분이 배치인 경우 작업단계는 필수입니다.");
        gr_workTime.setFocusedCell(i, "wrkStpCd", true);
        return;
      }
      if (ds_workTime.getCellData(i, "commWrkScYn") == 1 && ds_workTime.getCellData(i, "commWrkScStd") == 0) {
        await $c.win.alert($p, "원당작업의 경우 적용시간이 필요합니다..");
        gr_workTime.setFocusedCell(i, "commWrkScStd", true);
        return;
      }
      if (ds_workTime.getCellData(i, "rainScYn") == 1 && ds_workTime.getCellData(i, "rainScStd") == 0) {
        await $c.win.alert($p, "우천작업의 경우 적용시간이 필요합니다..");
        gr_workTime.setFocusedCell(i, "rainScStd", true);
        return;
      }
      if (ds_workTime.getCellData(i, "snowScYn") == 1 && ds_workTime.getCellData(i, "snowScStd") == 0) {
        await $c.win.alert($p, "설천작업의 경우 적용시간이 필요합니다..");
        gr_workTime.setFocusedCell(i, "snowScStd", true);
        return;
      }
      if (ds_workTime.getCellData(i, "gangWrkYn") == 1 && ds_workTime.getCellData(i, "gangWrkStd") == 0) {
        await $c.win.alert($p, "Gang작업의 경우 적용시간이 필요합니다..");
        gr_workTime.setFocusedCell(i, "gangWrkStd", true);
        return;
      }
      if (ds_workTime.getCellData(i, "odrReqYn") == 1 && ds_workTime.getCellData(i, "odrReqStd") == 0) {
        await $c.win.alert($p, "오더작업의 경우 적용시간이 필요합니다..");
        gr_workTime.setFocusedCell(i, "odrReqStd", true);
        return;
      }
      if (ds_workTime.getCellData(i, "extendWrkScYn") == 1 && ds_workTime.getCellData(i, "extendWrkScStd") == 0) {
        await $c.win.alert($p, "원당작업의 경우 적용시간이 필요합니다..");
        gr_workTime.setFocusedCell(i, "extendWrkScStd", true);
        return;
      }
      if (ds_workTime.getCellData(i, "holiWrkScYn") == 1 && ds_workTime.getCellData(i, "holiWrkScStd") == 0) {
        await $c.win.alert($p, "명절작업의 경우 적용시간이 필요합니다..");
        gr_workTime.setFocusedCell(i, "holiWrkScStd", true);
        return;
      }
    }
  }

  //작업시간
  let validArray = [{
    id: "workClsCd",
    name: "근무구분",
    mandatory: true
  }, {
    id: "workStDt",
    name: "시작일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "workEndDt",
    name: "종료일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "dtlTskCntnCd",
    name: "업무내용",
    mandatory: true
  }];
  var ret = await $c.gus.cfValidateGrid($p, gr_workTime, null, null, validArray, "근무시간");
  if (!ret) {
    return;
  }
  if (!(await scwin.f_checkVacationDate())) {
    return;
  }
  for (var i = 0; i < ds_workTime.getCellData(); i++) {
    var workSt = ds_workTime.getCellData(i, "workStDt") + ds_workTime.getCellData(i, "workStHh");
    var workEnd = ds_workTime.getCellData(i, "workEndDt") + ds_workTime.getCellData(i, "workEndHh");
    workSt = workSt.trim();
    workEnd = workEnd.trim();
    var startDate = workSt.toDate("YYYYMMDDHHmmss");
    var endDate = workEnd.toDate("YYYYMMDDHHmmss");
    var totalDate = (endDate - startDate) / 1000 / 60 / 60;
    if (totalDate >= 24) {
      await $c.win.alert($p, "작업일이 하루가 넘습니다.");
    }
  }

  //저장하시겠습니까?
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.checkStaffArray = [];
    for (var i = 0; i < ds_staff.getTotalRow(); i++) {
      if (ds_staff.getCellData(i, "checkBox") == "T") {
        ds_staff.modifyRowStatus(i, "C");
        scwin.checkStaffArray[i] = ds_staff.getCellData(i, "staffNo");
      }
    }
    scwin.pos_groupCode = ds_staff.getRowPosition(); // 저장 전의 위치 저장
    $c.sbm.execute($p, sbm_saveWork);
  }
};

//-------------------------------------------------------------------------
// 작업시간 Validation
//-------------------------------------------------------------------------  
scwin.f_checkVacationDate = async function () {
  var wrkDt = scwin.hid_txt_wrkDt;
  var wrkStDt;
  var wrkStHh;
  var wrkStMm;
  var wrkEndDt;
  var wrkEndHh;
  var wrkEndMm;
  var wrkStDtm;
  var wrkEndDtm;
  for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
    wrkStDt = ds_workTime.getCellData(i, "workStDt");
    wrkStHh = ds_workTime.getCellData(i, "workStHh");
    wrkStMm = ds_workTime.getCellData(i, "workStHh").substring(2, 4);
    wrkEndDt = ds_workTime.getCellData(i, "workEndDt");
    wrkEndHh = ds_workTime.getCellData(i, "workEndHh");
    wrkEndMm = ds_workTime.getCellData(i, "workEndHh").substring(2, 4);
    wrkStDtm = wrkStDt + wrkStHh;
    wrkEndDtm = wrkEndDt + wrkEndHh;
    if (wrkStMm != "00" && wrkStMm != "30") {
      await $c.win.alert($p, i + 1 + "번째의 시간은 30분 단위로 입력 가능합니다.");
      gr_workTime.setFocusedCell(i, "workStHh", true);
      return false;
    }
    if (wrkEndMm != "00" && wrkEndMm != "30") {
      await $c.win.alert($p, i + 1 + "번째의 시간은 30분 단위로 입력 가능합니다.");
      gr_workTime.setFocusedCell(i, "workEndHh", true);
      return false;
    }
    if (ds_workTime.getCellData(i, "workStHh").substr(0, 2) > "23") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_workTime.setFocusedCell(i, "workStHh");
      return;
    }
    if (ds_workTime.getCellData(i, "workStHh").substr(2, 2) > "59") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_workTime.setFocusedCell(i, "workStHh");
      return;
    }
    if (ds_workTime.getCellData(i, "workEndHh").substr(0, 2) > "24") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_workTime.setFocusedCell(i, "workEndHh");
      return;
    }
    if (ds_workTime.getCellData(i, "workEndHh").substr(0, 2) == "00" && ds_workTime.getCellData(i, "workEndHh").substr(2, 2) == "00") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_workTime.setFocusedCell(i, "workEndHh");
      return;
    }
    if (ds_workTime.getCellData(i, "workEndHh").substr(0, 2) == "24" && ds_workTime.getCellData(i, "workEndHh").substr(2, 2) > "00") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_workTime.setFocusedCell(i, "workEndHh");
      return;
    }
    if (ds_workTime.getCellData(i, "workEndHh").substr(2, 2) > "59") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      gr_workTime.setFocusedCell(i, "workEndHh");
      return;
    }

    //입력한 작업시작일자가 조회일자이후인가
    if (wrkDt > wrkStDt) {
      await $c.win.alert($p, i + 1 + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
      gr_workTime.setFocusedCell(i, "workStDt", true);
      return false;
    }

    //입력한 작업시작일자가 하루를 초과하는가
    var diffDay = $c.date.diffDate($p, wrkDt, wrkStDt);
    if (diffDay > 1) {
      await $c.win.alert($p, i + 1 + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
      gr_workTime.setFocusedCell(i, "workStDt", true);
      return false;
    }

    //전일작업종료일자

    var yestWrkDtm;
    var yestWrkDt;
    var yestWrkHh;
    var staffNo;
    for (var k = 0; k < ds_staff.getTotalRow(); k++) {
      if (ds_staff.getCellData(k, "checkBox") == "T") {
        yestWrkDtm = ds_staff.getCellData(k, "yestWrkDt");
        yestWrkDt = ds_staff.getCellData(k, "yestWrkDt").substring(0, 8);
        yestWrkHh = ds_staff.getCellData(k, "yestWrkDt").substring(8, 4);
        staffNm = ds_staff.getCellData(k, "staffNm");

        //작업시작시간이 전일 작업종료일자 이후 인가
        if (yestWrkDt != "") {
          if (yestWrkDtm > wrkStDtm) {
            if (yestWrkHh > wrkStHh) {
              await $c.win.alert($p, staffNm + "의 작업시작시간이 전일 작업종료시간 이전입니다.");

              // gr_staff.SetScrolling(0, 1); 
              // gr_staff.Focus();
              // gr_staff.SetColumn("checkBox");

              // gr_workTime.SetScrolling(i, 1); 
              // gr_workTime.ColSelect = "true";
              // gr_workTime.Focus();
              // gr_workTime.SetColumn("workStHh");

              gr_staff.setFocusedCell(i, "workStHh", true);
              return false;
            }
          }
        }
      }
    }

    //작업시작일자가 작업종료일자 이후 인가

    if (wrkStDt > wrkEndDt) {
      //cfAlertMsg(MSG_CM_ERR_039);
      await $c.win.alert($p, i + 1 + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
      gr_staff.setFocusedCell(i, "workStDt", true);
      return false;
      break;
    }
    if (wrkStDtm > wrkEndDtm) {
      //cfAlertMsg(MSG_CM_ERR_039);
      await $c.win.alert($p, i + 1 + "번째의 작업시작일시는 작업종료일시 이전이어야 합니다.");
      gr_staff.setFocusedCell(i, "workStHh", true);
      return false;
      break;
    }
    var diffDay = $c.date.diffDate($p, wrkDt, wrkEndDt);
    if (diffDay > 1) {
      await $c.win.alert($p, i + 1 + "번째의 근무시간 일자는 기준일자 + 1일까지 입력가능합니다.");
      gr_workTime.setFocusedCell(i, "workEndDt", true);
      return false;
    }
  }
  var sStDt = "";
  var sEndDt = "";
  var tStDt = "";
  var tEndDt = "";
  var cnt = 0;
  for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
    if (ds_workTime.getRowStatus(i) != "D") {
      sStDt = ds_workTime.getCellData(i, "workStDt") + ds_workTime.getCellData(i, "workStHh");
      sEndDt = ds_workTime.getCellData(i, "workEndDt") + ds_workTime.getCellData(i, "workEndHh");
      for (var j = i + 1; j < ds_workTime.getTotalRow(); j++) {
        if (ds_workTime.getRowStatus(j) != "D") {
          cnt = 0;
          tStDt = ds_workTime.getCellData(j, "workStDt") + ds_workTime.getCellData(j, "workStHh");
          tEndDt = ds_workTime.getCellData(j, "workEndDt") + ds_workTime.getCellData(j, "workEndHh");
          if (sStDt >= tStDt && sStDt >= tEndDt) {
            cnt = 1;
          } else if (sEndDt <= tStDt && sEndDt <= tEndDt) {
            cnt = 1;
          }
          if (cnt == 0) {
            await $c.win.alert($p, i + 1 + "번째와 " + (j + 1) + "번째의 근무시간이 중복되었습니다.");
            gr_workTime.setFocusedCell(j, "workStDt", true);
            return false;
          }
        }
      }
    }
  }
  var q = 0;
  for (var p = 0; p < ds_workTime.getTotalRow(); p++) {
    if (ds_workTime.getRowStatus(p) != "D") {
      q++;
    }
  }
  if (q <= 1) {
    return true;
  }
  var m = 0;
  var k = 0;
  var l = 0;
  var n = 0;
  for (var i = m; i < ds_workTime.getTotalRow(); i++) {
    if (ds_workTime.getRowStatus(i) == "D") {
      for (var j = i; k < ds_workTime.getTotalRow(); j++) {
        if (ds_workTime.getRowStatus(j) != "D") {
          k = j;
          break;
        }
      }
    } else {
      k = m;
    }
    if (ds_workTime.getRowStatus(k + 1) == "D") {
      for (var l = k + 1; l < ds_workTime.getTotalRow(); l++) {
        if (ds_workTime.getRowStatus(l) != "D") {
          n = l;
          break;
        }
      }
    } else {
      n = k + 1;
    }
    sEndDt = ds_workTime.getCellData(k, "workEndDt") + ds_workTime.getCellData(k, "workEndHh");
    tStDt = ds_workTime.getCellData(n, "workStDt") + ds_workTime.getCellData(n, "workStHh");
    if (ds_workTime.getCellData(k, "workEndHh") == "2400") {
      sEndDt = ds_workTime.getCellData(k, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD") + "0000";
    }
    if (sEndDt != tStDt) {
      await $c.win.alert($p, k + "번째와 " + n + "번째의 근무시간을 연속적으로 입력해 주십시오.");
      gr_workTime.setFocusedCell(i, "workStDt", true);
      return false;
    }
    m = n;
    if (q == m + 1) {
      break;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 근무시간 행추가 버튼
//-------------------------------------------------------------------------
scwin.f_AddRowWorkTime = async function () {
  if (ds_staff.getRowPosition() == null || ds_staff.getCellData(ds_staff.getRowPosition(), "checkBox") != "T") {
    return;
  }
  var Row;
  if (ds_workTime.getRowCount() < 1) {
    Row = 0;
  } else {
    Row = ds_workTime.getRowPosition() + 1;
  }

  // validExp="workClsCd:근무구분:yes,workStDt:시작일자:yes:date=YYYYMMDD,
  //    workEndDt:종료일자:yes:date=YYYYMMDD,dtlTskCntnCd:업무내용:yes"

  let validArray = [{
    id: "workClsCd",
    name: "근무구분",
    mandatory: true
  }, {
    id: "workStDt",
    name: "시작일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "workEndDt",
    name: "종료일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "dtlTskCntnCd",
    name: "업무내용",
    mandatory: true
  }];
  var ret = await $c.gus.cfValidateGrid($p, gr_workTime, null, null, validArray, "근무시간");
  if (!ret) {
    return;
  }
  if (!(await scwin.f_checkVacationDate())) {
    return;
  }
  ds_workTime.insertRow(Row);
  ds_workTime.setCellData(Row, "staffNo", ds_staff.getCellData(ds_staff.getRowPosition(), "staffNo"));
  ds_workTime.setCellData(Row, "workDt", scwin.hid_txt_wrkDt);
  if (ds_workTime.getTotalRow() > 1) {
    if (ds_workTime.getCellData(Row - 1, "workEndHh") == "2400") {
      ds_workTime.setCellData(Row, "workStDt", ds_workTime.getCellData(Row - 1, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"));
      ds_workTime.setCellData(Row, "workStHh", "0000");
      ds_workTime.setCellData(Row, "workEndDt", ds_workTime.getCellData(Row - 1, "workEndDt").toDate("YYYYMMDD").after(0, 0, 1).format("YYYYMMDD"));
    } else {
      ds_workTime.setCellData(Row, "workStDt", ds_workTime.getCellData(Row - 1, "workEndDt"));
      ds_workTime.setCellData(Row, "workStHh", ds_workTime.getCellData(Row - 1, "workEndHh"));
      ds_workTime.setCellData(Row, "workEndDt", ds_workTime.getCellData(Row - 1, "workEndDt"));
    }
  } else {
    ds_workTime.setCellData(Row, "workStDt", scwin.hid_txt_wrkDt);
    ds_workTime.setCellData(Row, "workEndDt", scwin.hid_txt_wrkDt);
  }
  gr_workTime.setFocusedCell(Row, "workClsCd");
};

//-------------------------------------------------------------------------
// 근무시간 행삭제 버튼
//-------------------------------------------------------------------------
scwin.DeleteWorkTime = function () {
  var rowIdx = ds_workTime.getRowPosition();
  if (ds_workTime.getRowStatus(rowIdx) == "C") {
    ds_workTime.removeRow(rowIdx);
  } else {
    ds_workTime.deleteRow(rowIdx);
    ds_workTime.setFocusedCell(rowIdx, 0);
  }
};

//-------------------------------------------------------------------------
// 근무시간 취소 버튼
//-------------------------------------------------------------------------
scwin.CancelWorkTime = function () {
  var rowIdx = ds_workTime.getRowPosition();
  if (ds_workTime.getRowStatus(rowIdx) == "C") {
    ds_workTime.removeRow(rowIdx);
    gr_workTime.setFocusedCell(ds_workTime.getTotalRow() - 1, 0);
  } else {
    ds_workTime.undoRow(rowIdx);
    gr_workTime.setFocusedCell(rowIdx, 0);
  }
};

//-------------------------------------------------------------------------
// Shift 첵크 근무구분이 'A'이면 필수
//-------------------------------------------------------------------------
scwin.f_ShiftCheck = async function () {
  for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
    if (ds_workTime.getCellData(i, "workClsCd") == "A") {
      if (ds_workTime.getCellData(i, "shiftClsCd") == "") {
        await $c.win.alert($p, "근무시간의 " + i + "번째 데이타에서 SHIFT는 필수입력 항목입니다.");
        gr_workTime.setFocusedCell(i, "shiftClsCd");
        return false;
      }
    }
  }
  return true;
};
scwin.f_CommonPopUp = async function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  let sW = pW == null ? "550px; " : pW + "px; ";
  let sH = pH == null ? "460px; " : pH + "px; ";
  let rtnList = new Array();
  let iDispCnt = null;
  let sTopLeft = null;
  let sWidthHeight = null;
  let sFeatures = null;
  if (pSelectID == null || pSelectID == "") {
    await $c.win.alert($p, "SELECT ID는 필수 항목 입니다.");
    return;
  }
  ;
  if (pCode.slice(0, 1) == '%' || pName.slice(0, 1) == '%') {
    await $c.win.alert($p, "검색어 첫번째문자로 % 는 올 수 없습니다");
    return;
  }
  ;
  iDispCnt = pDispCnt == null ? "0" : pDispCnt;
  if (parseInt(iDispCnt) > 10) {
    await $c.win.alert($p, "Display개수는(MAX=10)개 까지 가능 합니다.");
    return;
  }
  ;
  if (pTop != null) {
    sTopLeft = "dialogTop:" + pTop + "px; " + "dialogLeft:" + pLeft + "px; ";
  }
  ;
  sWidthHeight = "dialogWidth:" + sW + "dialogHeight:" + sH;
  sFeatures = sWidthHeight + " " + sTopLeft + " " + "center:Yes; help:No; resizable:No; status:No; scroll:No";
  switch (pSelectID) {
    case 'retrieveWrkIndictNoList':
      // 작업지시번호
      rtnList = scwin.retrieveWrkIndictNoList(pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo);
      break;
    default:
      await $c.win.alert($p, "XML SelectID 오류!!!");
      break;
  }
  ;
  return rtnList;
};
scwin.retrieveWrkIndictNoList = async function (pSelectID, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, sFeatures, pExistTF, pAllSearchTF, pWtitleSearch, pWrkDtTF, pWrkIndictNo, pCvsslMgntNo) {
  let iDispCnt = pDispCnt == null ? "2" : pDispCnt;
  let bWinCloseTF = pWinCloseTF == null ? "F" : pWinCloseTF;
  let bExistTF = pExistTF == null ? "F" : pExistTF;
  let bAllSearchTF = pAllSearchTF == null ? "T" : pAllSearchTF;
  let bWrkDtTF = pWrkDtTF == null ? "F" : pWrkDtTF;
  let sTitle = null;
  let sWidth = null;
  let sHidden = null;
  let sURL = null;
  let rtnList = new Array();
  let arrParm = new Array();

  // 타이틀,조회조건Title1,조회조건Title2,XML_SELECT_ID,PopupClose유무(T/F),Display칼럼개수,중복체크여부,전체검색여부
  arrParm[0] = new Array("하역작업지시번호 검색", "작업지시구분", "작업일자", pSelectID, bWinCloseTF, iDispCnt, bExistTF, bAllSearchTF, bWrkDtTF);
  if (pWtitleSearch != null) {
    let strArr = pWtitleSearch.advancedSplit(",", "t");
    if (strArr != null) {
      arrParm[0][0] = strArr[0];
      arrParm[0][1] = strArr[1];
      arrParm[0][2] = strArr[2];
    }
  }
  arrParm[1] = new Array(pCode, pName, pWrkIndictNo, pCvsslMgntNo); //PopUP Parameter-->코드,명

  v_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_02_08p.xml";
  let options = {
    id: "pupup",
    type: "browserPopup",
    width: 1000,
    height: 500,
    popupName: "거래처별 손익 집계-상세-",
    modal: true
  };
  if (bExistTF == "T") {
    rtnList = await $c.win.openPopup($p, v_url, options, arrParm);
  } else {
    rtnList = await $c.win.openPopup($p, v_url, options, arrParm);
  }
  ;
  return rtnList;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
// 1-소속udc  2-인원udc  3-?
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //점소
      udc_branCd.cfCommonPopUp(scwin.udc_branCd_callBackFun, pCode, pName, pClose, null, null, null, null, null, null, null, null, null); //점소
      break;
    case 2:
      var arrParam = new Array();
      if (!(await $c.gus.cfValidate($p, ed_branCd))) {
        return;
      }
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = ed_branCd.getValue(); //점소코드
      arrParam[3] = txt_branNm.getValue(); //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = ''; //직종  (정규직)
      arrParam[6] = lc_dtlOccptypeCd.getValue(); //상세직종코드 
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = ''; //배치가능여부
      arrParam[10] = 'T'; //WINDOW CLOSE 여부
      arrParam[11] = "1"; //상세직종Flag

      var opts = {
        id: "smpPop",
        popupName: "인력검색",
        modal: true,
        type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
        ,

        title: "Win pop" //Layer pop
        ,

        width: 700,
        height: 450
      };
      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml", opts, arrParam);

      //(0)직종코드		
      //(1)직종명	        
      //(2)인원번호		
      //(3)인원명	                          
      //(4)직급		    
      //(5)직급명		    
      //(6)물류점소코드   
      //(7)물류점소명		
      //(8)상세직종코드	
      //(9)상세직종명		                  
      //(10)배치가능여부	
      //(11)본사계약직여부 
      //(12)연근여부		

      if (rtnList != null) {
        ed_staffNo.setValue(rtnList[2]); //사원코드
        txt_staffNm.setValue(rtnList[3]); //사원명
      } else {
        ed_staffNo.setValue(""); //사원코드
        txt_staffNm.setValue(""); //사원명
      }
      break;
    case 3:
      if (!(await $c.gus.cfValidate($p, ed_branCd))) {
        return;
      }
      var pWhere = "";
      var lobranCd = "";
      var occptypeCd = "";
      var dtlOccpTypeCd = "";
      lobranCd = ed_branCd.getValue();
      pWhere = lobranCd;
      //3: lobranCd  //점소
      //4: OCCPTYPE_CD  //직종
      //5: DTL_OCCPTYPE_CD  //상세직종

      //인원
      rtnList = cfCommonPopUp('retrieveDtlOccptypeWrkPlanTrgt', pCode, pName, pClose, null, null, null, null, null, pWhere //
      , null, null, null);

      //사번  인원명
      cfSetReturnValue(rtnList, ed_staffNo, txt_staffNm);
      break;
  }
};
scwin.udc_branCd_callBackFun = function (rtnList) {
  //점소코드  점소명
  $c.gus.cfSetReturnValue($p, rtnList, ed_branCd, txt_branNm);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, searchCondition, null);
  ed_qryWrkDt.setValue(scwin.sCurrDate);
};

//-------------------------------------------------------------------------
// Detail 조회
//-------------------------------------------------------------------------
scwin.f_retrieveDetail = async function (row) {
  ds_workTime.setColumnDefaultValue("shiftClsCd", "");
  ds_workPlan.removeAll();
  ds_workTime.removeAll();
  dma_searchWork.set("workDate", ed_qryWrkDt.getValue());
  dma_searchWork.set("staffNo", ds_staff.getCellData(row, "staffNo"));
  let e = await $c.sbm.execute($p, sbm_searchWork);
  if (e) {
    scwin.sbm_searchWork_submitdone(e);
  }
};

//-------------------------------------------------------------------------
// CheckClear
//-------------------------------------------------------------------------
scwin.f_clear = async function () {
  scwin.bModify = false;
  for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
    if (ds_workTime.getRowStatus(i) != "R") {
      scwin.bModify = true;
      break;
    }
  }

  //변경된 사항이 있으면
  if (scwin.bModify) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == true) {
      for (var i = 0; i < ds_staff.getTotalRow(); i++) {
        ds_staff.setCellData(i, "checkBox", "F");
      }
      ds_workTime.setColumnDefaultValue("shiftClsCd", "");
      ds_workPlan.removeAll();
      ds_workTime.removeAll();
      ds_staff.undoAll();
    }
    return;
  }
  for (var i = 0; i < ds_staff.getTotalRow(); i++) {
    ds_staff.setCellData(i, "checkBox", "F");
  }
  ds_workTime.setColumnDefaultValue("shiftClsCd", "");
  ds_workPlan.removeAll();
  ds_workTime.removeAll();
  ds_staff.undoAll();
  scwin.cmdKnd = "";
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  var fileName = "사원";
  await $c.data.downloadGridViewExcel($p, gr_staff, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel2 = async function () {
  var fileName = "작업계획";
  await $c.data.downloadGridViewExcel($p, gr_workPlan, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel3 = async function () {
  var fileName = "근무시간";
  await $c.data.downloadGridViewExcel($p, gr_workTime, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//-------------------------------------------------------------------------
// 실적미등록 선택
//-------------------------------------------------------------------------
scwin.f_SelNotRegist = async function () {
  scwin.bModify = false;
  if (ds_staff.getTotalRow() == 0) {
    return;
  }
  for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
    if (ds_workTime.getRowStatus(i) != "R") {
      scwin.bModify = true;
      break;
    }
  }

  //변경된 사항이 있으면
  if (scwin.bModify) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) {
      return;
    }
  }
  for (var i = 0; i < ds_staff.getTotalRow(); i++) {
    ds_staff.setCellData(i, "checkBox", "F");
  }
  ds_workTime.setColumnDefaultValue("shiftClsCd", "");
  ds_workPlan.removeAll();
  ds_workTime.removeAll();
  ds_staff.undoAll();
  var row = 0;
  for (var i = 0; i < ds_staff.getTotalRow(); i++) {
    if (ds_staff.getCellData(i, "resultRegYn") == "N" && ds_staff.getCellData(i, "arrangeContGb") != "1") {
      // 미배치와 사유있는 휴무일때 (SQL에서 정의)
      if (row == 0) {
        row = i;
      }
      ds_staff.setCellData(i, "checkBox", "T");
    }
  }
  if (row == 0) {
    return;
  }
  scwin.cmdKnd = "";
  gr_staff.setFocusedCell(row, "checkBox");
  await scwin.f_retrieveDetail(row);

  // 조회후 근무시간 그리드에 row추가 (scwin.f_retrieveDetail 이벤트 스크립트)
  var cnt = ds_workTime.getTotalRow();
  ds_workTime.insertRow(cnt);
  ds_workTime.setCellData(cnt, "staffNo", ds_staff.getCellData(ds_staff.getRowPosition(), "staffNo"));
  ds_workTime.setCellData(cnt, "workDt", scwin.hid_txt_wrkDt);
  ds_workTime.setCellData(cnt, "workStDt", scwin.hid_txt_wrkDt);
  ds_workTime.setCellData(cnt, "workStHh", '0800');
  ds_workTime.setCellData(cnt, "workEndDt", scwin.hid_txt_wrkDt);
  ds_workTime.setCellData(cnt, "workEndHh", '1700');
  ds_workTime.setCellData(cnt, "workClsCd", 'U');
  gr_workTime.removeHeaderClass("wrkIndictNoHeader", "txt-red"); //작업지시번호
  gr_workTime.removeHeaderClass("wrkStpCdHeader", "txt-red"); //작업단계
  gr_workTime.setColumnReadOnly("wrkIndictNo", true);
  gr_workTime.setColumnReadOnly("wrkStpCd", true);
  gr_workTime.setColumnReadOnly("shiftClsCd", true);
  gr_workTime.setFocusedCell(cnt, "dtlTskCntnCd");

  // scwin.ds_tskCntn_OnFilter(); 
  gr_workTime.refreshColumn("vehclNrmCd");
};

// <!-----------------------------------------------------------------------------
//     G A U C E   C O M P O N E N T' S   E V E N T S  
// ------------------------------------------------------------------------------>

scwin.sbm_searchStaff_submitdone = async function (e) {
  await scwin.ds_staff_OnLoadCompleted();
};
scwin.ds_staff_OnLoadCompleted = async function () {
  var rowCnt = ds_staff.getTotalRow();
  totalRows1.setValue(rowCnt);
  scwin.gfixedArrangeYn = 0;
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  $c.gus.cfGoPrevPosition($p, gr_staff, scwin.pos_groupCode);
};
scwin.sbm_searchWork_submitdone = function (e) {
  scwin.ds_workPlan_OnLoadCompleted();
  scwin.ds_workTime_OnLoadCompleted();
};
scwin.ds_workPlan_OnLoadCompleted = function () {
  var rowCnt = ds_workPlan.getTotalRow();
  totalRows2.setValue(rowCnt);
};
scwin.ds_workTime_OnLoadCompleted = function () {
  scwin.afterWorkTime = true;
  var rowCnt = ds_workTime.getTotalRow();
  totalRow3.setValue(rowCnt);
  scwin.resultCnt = scwin.resultCnt + rowCnt;
  scwin.gClickFlag = "";
  scwin.resultCnt = 0;
  gr_workTime.setFocusedCell(0, 0);
};
scwin.ds_staff_onrowpositionchange = function (info) {
  if (ds_staff.getCellData(info.newRowIndex, "arrangeCont") == "휴무") {
    gr_staff.setColumnReadOnly("checkBox", true);
  } else {
    gr_staff.setColumnReadOnly("checkBox", false);
  }
};
scwin.gr_workTime_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // event=OnClick(row,colid)
  scwin.selectedRow = rowIndex;
  scwin.selectedGrid = "gr_workTime";
  scwin.selectedCol = columnId;
  if (ds_workTime.getTotalRow() > 0) {
    scwin.v_workClsCd = ds_workTime.getCellData(rowIndex, "wrkIndictKndCd");
    scwin.ds_wkrStp_OnFilter();
  }
  if (ds_workTime.getCellData(rowIndex, "workClsCd") == 'A') {
    //배치
    gr_workTime.setHeaderClass("wrkIndictNoHeader", "txt-red"); //작업지시번호
    gr_workTime.setHeaderClass("wrkStpCdHeader", "txt-red"); //작업단계

    gr_workTime.setColumnReadOnly("wrkStpCd", false);
    gr_workTime.setColumnReadOnly("shiftClsCd", true);
    gr_workTime.setColumnReadOnly("cond1", false);
    gr_workTime.setColumnReadOnly("cond2", false);
    gr_workTime.setColumnReadOnly("cond3", false);
    gr_workTime.setColumnReadOnly("cond4", false);
    gr_workTime.setColumnReadOnly("cond5", false);
    gr_workTime.setColumnReadOnly("cond6", false);
    gr_workTime.setColumnReadOnly("cond7", false);
    gr_workTime.setColumnReadOnly("cond8", false);
    gr_workTime.setColumnReadOnly("emgcOdrYn", false);
    gr_workTime.setColumnReadOnly("commWrkScYn", false);
    gr_workTime.setColumnReadOnly("commWrkScStd", false);
    gr_workTime.setColumnReadOnly("rainScYn", false);
    gr_workTime.setColumnReadOnly("rainScStd", false);
    gr_workTime.setColumnReadOnly("snowScYn", false);
    gr_workTime.setColumnReadOnly("snowScStd", false);
    gr_workTime.setColumnReadOnly("gangWrkYn", false);
    gr_workTime.setColumnReadOnly("gangWrkStd", false);
    gr_workTime.setColumnReadOnly("odrReqYn", false);
    gr_workTime.setColumnReadOnly("odrReqStd", false);
    gr_workTime.setColumnReadOnly("extendWrkScYn", false);
    gr_workTime.setColumnReadOnly("extendWrkScStd", false);
    gr_workTime.setColumnReadOnly("holiWrkScYn", false);
    gr_workTime.setColumnReadOnly("holiWrkScStd", false);
  } else {
    gr_workTime.removeHeaderClass("wrkIndictNoHeader", "txt-red"); //작업지시번호
    gr_workTime.removeHeaderClass("wrkStpCdHeader", "txt-red"); //작업단계
    gr_workTime.setColumnReadOnly("wrkIndictNo", true);
    gr_workTime.setColumnReadOnly("wrkStpCd", true);
    gr_workTime.setColumnReadOnly("shiftClsCd", true);
  }
  if (rowIndex >= 0) {
    if (columnId == "emgcOdrYn" || columnId == "commWrkScYn" || columnId == "rainScYn" || columnId == "snowScYn" || columnId == "gangWrkYn" || columnId == "odrReqYn" || columnId == "extendWrkScYn" || columnId == "holiWrkScYn") {
      var vChkVal = ds_workTime.getCellData(rowIndex, columnId);
      if (vChkVal == "0") {
        ds_workTime.setCellData(rowIndex, columnId, "1");
      } else if (vChkVal == "1") {
        ds_workTime.setCellData(rowIndex, columnId, "0");
      }
      scwin.gr_workTime_OnCheckClick(rowIndex, columnId);
      gr_workTime.setFocusedCell(rowIndex, "shift");
    }
  }
};
scwin.gr_workTime_OnCheckClick = function (row, columnId) {
  // event=OnCheckClick(row,colid)
  if (columnId == "commWrkScYn") {
    if (ds_workTime.getCellData(row, "commWrkScYn") == "0") {
      ds_workTime.setCellData(row, "commWrkScStd", 0);
    }
  }
  if (columnId == "rainScYn") {
    if (ds_workTime.getCellData(row, "rainScYn") == "0") {
      ds_workTime.setCellData(row, "rainScStd", 0);
    }
  }
  if (columnId == "snowScYn") {
    if (ds_workTime.getCellData(row, "snowScYn") == "0") {
      ds_workTime.setCellData(row, "snowScStd", 0);
    }
  }
  if (columnId == "gangWrkYn") {
    if (ds_workTime.getCellData(row, "gangWrkYn") == "0") {
      ds_workTime.setCellData(row, "gangWrkStd", 0);
    }
  }
  if (columnId == "odrReqYn") {
    if (ds_workTime.getCellData(row, "odrReqYn") == "0") {
      ds_workTime.setCellData(row, "odrReqStd", 0);
    }
  }
  if (columnId == "extendWrkScYn") {
    if (ds_workTime.getCellData(row, "extendWrkScYn") == "0") {
      ds_workTime.setCellData(row, "extendWrkScStd", 0);
    }
  }
  if (columnId == "holiWrkScYn") {
    if (ds_workTime.getCellData(row, "holiWrkScYn") == "0") {
      ds_workTime.setCellData(row, "holiWrkScStd", 0);
    }
  }
};

// <!--인원 선택시 조회-->
scwin.gr_staff_onrowindexchange = async function (rowIndex, oldRow) {
  scwin.gr_staff_selectRow = rowIndex;
};

// <script language=JavaScript for=gr_staff event=OnClick(row,colid)>
scwin.gr_staff_oncellclick = async function (rowIndex, columnIndex, columnId) {
  scwin.bModify = false; //변경된 사항
  scwin.ResultCheckCnt = 0; //실적이 있는것을 첵크했는지
  scwin.checkCnt = 0;
  scwin.isCommonStaff = false; // 상용화 인원 여부

  if (rowIndex < 0) {
    return;
  }
  gr_staff.setColumnReadOnly("staffNo", true);
  gr_staff.setColumnReadOnly("staffNm", true);
  gr_staff.setColumnReadOnly("lobranNm", true);
  gr_staff.setColumnReadOnly("occptypeNm", true);
  gr_staff.setColumnReadOnly("dtlOccptypeNm", true);
  gr_staff.setColumnReadOnly("occpgrdNm", true);
  gr_staff.setColumnReadOnly("arrangeCont", true);
  gr_staff.setColumnReadOnly("resultRegYn", true);

  /* 인천 상용 인원인 경우 Shift 컬럼 보여줌 . 91: 윈치, 92 : 홀드, 93: 장비 */
  if (ds_staff.getCellData(rowIndex, "occpgrdCd") == "91" || ds_staff.getCellData(rowIndex, "occpgrdCd") == "92" || ds_staff.getCellData(rowIndex, "occpgrdCd") == "93") {
    gr_workTime.setColumnVisible("shift", true);
    gr_workTime.setColumnVisible("cond1", true);
    gr_workTime.setColumnVisible("cond2", true);
    gr_workTime.setColumnVisible("cond3", true);
    gr_workTime.setColumnVisible("cond4", true);
    gr_workTime.setColumnVisible("cond5", true);
    gr_workTime.setColumnVisible("cond6", true);
    gr_workTime.setColumnVisible("cond7", true);
    gr_workTime.setColumnVisible("cond8", true);
    gr_workTime.setColumnVisible("emgcOdrYn", true);
    gr_workTime.setColumnVisible("commWrkScYn", true);
    gr_workTime.setColumnVisible("commWrkScStd", true);
    gr_workTime.setColumnVisible("rainScYn", true);
    gr_workTime.setColumnVisible("rainScStd", true);
    gr_workTime.setColumnVisible("snowScYn", true);
    gr_workTime.setColumnVisible("snowScStd", true);
    gr_workTime.setColumnVisible("gangWrkYn", true);
    gr_workTime.setColumnVisible("gangWrkStd", true);
    gr_workTime.setColumnVisible("odrReqYn", true);
    gr_workTime.setColumnVisible("odrReqStd", true);
    gr_workTime.setColumnVisible("extendWrkScYn", true);
    gr_workTime.setColumnVisible("extendWrkScStd", true);
    gr_workTime.setColumnVisible("holiWrkScYn", true);
    gr_workTime.setColumnVisible("holiWrkScStd", true);
    gr_workTime.setColumnReadOnly("cond1", false);
    gr_workTime.setColumnReadOnly("cond2", false);
    gr_workTime.setColumnReadOnly("cond3", false);
    gr_workTime.setColumnReadOnly("cond4", false);
    gr_workTime.setColumnReadOnly("cond5", false);
    gr_workTime.setColumnReadOnly("cond6", false);
    gr_workTime.setColumnReadOnly("cond7", false);
    gr_workTime.setColumnReadOnly("cond8", false);
    gr_workTime.setColumnReadOnly("emgcOdrYn", false);
    gr_workTime.setColumnReadOnly("commWrkScYn", false);
    gr_workTime.setColumnReadOnly("commWrkScStd", false);
    gr_workTime.setColumnReadOnly("rainScYn", false);
    gr_workTime.setColumnReadOnly("rainScStd", false);
    gr_workTime.setColumnReadOnly("snowScYn", false);
    gr_workTime.setColumnReadOnly("snowScStd", false);
    gr_workTime.setColumnReadOnly("gangWrkYn", false);
    gr_workTime.setColumnReadOnly("gangWrkStd", false);
    gr_workTime.setColumnReadOnly("odrReqYn", false);
    gr_workTime.setColumnReadOnly("odrReqStd", false);
    gr_workTime.setColumnReadOnly("extendWrkScYn", false);
    gr_workTime.setColumnReadOnly("extendWrkScStd", false);
    gr_workTime.setColumnReadOnly("holiWrkScYn", false);
    gr_workTime.setColumnReadOnly("holiWrkScStd", false);
    scwin.isCommonStaff = true; // 상용화 인원 유무
  } else {
    gr_workTime.setColumnVisible("cond1", false);
    gr_workTime.setColumnVisible("cond2", false);
    gr_workTime.setColumnVisible("cond3", false);
    gr_workTime.setColumnVisible("cond4", false);
    gr_workTime.setColumnVisible("cond5", false);
    gr_workTime.setColumnVisible("cond6", false);
    gr_workTime.setColumnVisible("cond7", false);
    gr_workTime.setColumnVisible("cond8", false);
    gr_workTime.setColumnVisible("shift", false);
    gr_workTime.setColumnVisible("emgcOdrYn", false);
    gr_workTime.setColumnVisible("commWrkScYn", false);
    gr_workTime.setColumnVisible("commWrkScStd", false);
    gr_workTime.setColumnVisible("rainScYn", false);
    gr_workTime.setColumnVisible("rainScStd", false);
    gr_workTime.setColumnVisible("snowScYn", false);
    gr_workTime.setColumnVisible("snowScStd", false);
    gr_workTime.setColumnVisible("gangWrkYn", false);
    gr_workTime.setColumnVisible("gangWrkStd", false);
    gr_workTime.setColumnVisible("odrReqYn", false);
    gr_workTime.setColumnVisible("odrReqStd", false);
    gr_workTime.setColumnVisible("extendWrkScYn", false);
    gr_workTime.setColumnVisible("extendWrkScStd", false);
    gr_workTime.setColumnVisible("holiWrkScYn", false);
    gr_workTime.setColumnVisible("holiWrkScStd", false);
    scwin.isCommonStaff = false; // 상용화 인원 유무 
  }
  if (ds_staff.getCellData(rowIndex, "arrangeCont") == "휴무" || ds_staff.getCellData(rowIndex, "arrangeCont") == "년차" || ds_staff.getCellData(rowIndex, "arrangeCont") == "철휴" || ds_staff.getCellData(rowIndex, "arrangeCont") == "주휴일" || ds_staff.getCellData(rowIndex, "arrangeCont") == "경조") {
    // gr_staff.setCellReadOnly(rowIndex, "checkBox", true);
    await $c.win.alert($p, "휴무인원은 선택할 수 없습니다.");
    ds_staff.setCellData(rowIndex, "checkBox", "F");
    return;
  } else {
    gr_staff.setColumnReadOnly("checkBox", false);
  }

  //변경된 사항이 있는지  
  for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
    if (ds_workTime.getRowStatus(i) != "R") {
      scwin.bModify = true;
      break;
    }
  }

  //실적이 있는것을 check했는지 	
  for (var i = 0; i < ds_staff.getTotalRow(); i++) {
    if (ds_staff.getCellData(i, "checkBox") == "T" && ds_staff.getCellData(i, "resultRegYn") == "Y") {
      scwin.ResultCheckCnt = scwin.ResultCheckCnt + 1;
    }
    if (ds_staff.getCellData(i, "checkBox") == "T") {
      scwin.checkCnt = scwin.checkCnt + 1;
    }
  }
  if (scwin.checkCnt == 1) {
    scwin.gfixedArrangeYn = ds_staff.getCellData(rowIndex, "fixedArrangeYn");
  }
  scwin.resultRegYn = ds_staff.getCellData(rowIndex, "resultRegYn");
  if (columnId == "checkBox") {
    if (ds_staff.getCellData(rowIndex, "checkBox") == "T") {
      //반대이다 선택을 한경우   

      if (scwin.gfixedArrangeYn == 1) {
        if (ds_staff.getCellData(rowIndex, "fixedArrangeYn") != "1") {
          ds_staff.setCellData(rowIndex, "checkBox", "F");
          await $c.win.alert($p, "고정배치인원은 일배치 및 미배치 인원과 동시에 선택할 수 없습니다.");
          return;
        }
      } else {
        if (ds_staff.getCellData(rowIndex, "fixedArrangeYn") == 1) {
          ds_staff.setCellData(rowIndex, "checkBox", "F");
          await $c.win.alert($p, "고정배치인원은 일배치 및 미배치 인원과 동시에 선택할 수 없습니다.");
          return;
        }
      }
      if (scwin.isCommonStaff && ds_staff.getCellData(rowIndex, "totalShiftCnt") > 0) {
        // 상용화 인원 유무
        await $c.win.alert($p, "상용화 인원 " + ds_staff.getCellData(rowIndex, "staffNm") + "(" + ds_staff.getCellData(rowIndex, "staffNo") + " )에 대해 이번달 투입된 총 Shift수는 " + ds_staff.getCellData(rowIndex, "totalShiftCnt") + " Shift 입니다.");
      }

      //최초인경우
      if (scwin.checkCnt == 1) {
        scwin.gfixedArrangeYn = ds_staff.getCellData(rowIndex, "fixedArrangeYn");
        //변경된 사항이 있으면
        if (scwin.bModify) {
          if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) {
            ds_staff.setCellData(rowIndex, "checkBox", "T");
            return;
          }
        }
        scwin.f_retrieveDetail(rowIndex);
      } else {
        //실적있는것을 선택
        if (scwin.resultRegYn == "Y") {
          //이미 실적있는것을 선택했을경우
          if (scwin.ResultCheckCnt > 1) {
            ds_staff.setCellData(rowIndex, "checkBox", "F");
            await $c.win.alert($p, "이미 실적이 등록된 인원에 대한 실적 수정 및 삭제는 한명씩 가능합니다.");
            return;
          } else if (scwin.ResultCheckCnt == 1) {
            //변경된 사항이 있으면
            if (scwin.bModify) {
              if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) {
                ds_staff.setCellData(rowIndex, "checkBox", "T");
                return;
              }
            }
            scwin.f_retrieveDetail(rowIndex);
          }
        } else {//실적없는것을 선택한경우
          //
        }
      }
    } else {
      //uncheck시
      //변경된 사항이 있으면
      if (scwin.bModify) {
        if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) {
          ds_staff.setCellData(rowIndex, "checkBox", "T");
          return;
        }
      }
      ds_staff.undoRow(ds_staff.getRowPosition());

      //선택한게 없으면 모두 clear
      if (scwin.checkCnt == 0) {
        ds_workPlan.removeAll();
        ds_workTime.removeAll();
      }

      //실적있는 것을 uncheck한 경우 기존 조회된 데이타 삭제된다는 error message 
      if (ds_staff.getCellData(rowIndex, "resultRegYn") == "Y") {
        for (var i = 0; i < ds_staff.getTotalRow(); i++) {
          if (ds_staff.getCellData(i, "checkBox") == "T") {
            await scwin.f_retrieveDetail(i);
            break;
          }
        }
      }
    }
  } else {
    for (var m = 0; m < ds_staff.getTotalRow(); m++) {
      ds_staff.setCellData(m, "checkBox", "F");
    }

    //변경된 사항이 있으면
    if (scwin.bModify) {
      if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) {
        ds_staff.setCellData(rowIndex, "checkBox", "T");
        return;
      }
    }
    ds_staff.setCellData(rowIndex, "checkBox", "T");
    scwin.gClickFlag = 'Y';
    await scwin.f_retrieveDetail(rowIndex);
  }
};
scwin.ds_wkrStp_OnFilter = function () {
  if (ds_workTime.getTotalRow() == 0) {
    return;
  }
  if (scwin.v_workClsCd == "Y" || scwin.v_workClsCd == "T") {
    ldt_wkrStp.setCondition("filter", "upperWrkStpCd == '03'");
  } else if (scwin.v_workClsCd == "P") {
    ldt_wkrStp.setCondition("filter", "upperWrkStpCd == '01'");
  } else {
    ldt_wkrStp.setCondition("filter", "");
  }
};
scwin.ds_workTime_onrowpositionchange = function (info) {
  // 작업단계 Row가 변경될때 해당 구분별 작업단계로 Filter 처리
  if (ds_workTime.getTotalRow() > 0) {
    scwin.ds_wkrStp_OnFilter();
    scwin.ds_tskCntn_OnFilter();
  }
};

//-------------------------------------------------------------------------
// <!-- 업무내용 필터 이벤트 -->
// for=ds_tskCntn event=OnFilter(row)
//-------------------------------------------------------------------------
scwin.ds_tskCntn_OnFilter = function () {
  // if (ds_workTime.getTotalRow() == 0) {
  //     return;
  // }

  // var v_workClsCd = ds_workTime.getCellData(ds_workTime.getRowPosition(), "workClsCd");
  // ldt_tskCntn.setCondition("filter", "upperCd == '" + v_workClsCd + "'");
};

//-------------------------------------------------------------------------
// for=gr_workTime event=OnPopup(row,colid,data)
//-------------------------------------------------------------------------
scwin.gr_workTime_OnPopup = async function (rowIndex, colId, nowValue) {
  if (colId == "wrkIndictNo") {
    // 작업지시번호
    scwin.bOnPopUp = true;
    var pCode = ds_workTime.getCellData(rowIndex, "wrkIndictKndCd");
    var pName = ed_qryWrkDt.getValue();
    var pWrkIndictNo = ds_workTime.getCellData(rowIndex, "wrkIndictNo").replace(/\s*$/, '');
    ds_workTime.setCellData(rowIndex, "cvsslNmWrkPlNm", "");
    ds_workTime.setCellData(rowIndex, "shiftClsCd", "");
    ds_workTime.setCellData(rowIndex, "wrkStpCd", "");
    ds_workTime.setCellData(rowIndex, "wrkIndictKndCd", "");
    var rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "F", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
    if (rtnList != null) {
      ds_workTime.setCellData(rowIndex, "wrkIndictNo", rtnList[0]);
      ds_workTime.setCellData(rowIndex, "wrkIndictKndCd", rtnList[1]);
      ds_workTime.setCellData(rowIndex, "cvsslNmWrkPlNm", rtnList[3]);
      ds_workTime.setCellData(rowIndex, "shiftClsCd", rtnList[5]);
      scwin.v_workClsCd = rtnList[1];
      if (ds_workTime.getTotalRow() > 0) {
        scwin.ds_wkrStp_OnFilter();
      }
    } else {
      ds_workTime.setCellData(rowIndex, "wrkIndictNo", "");
    }
  }
};

//-------------------------------------------------------------------------
// for=gr_workTime event=OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_workTime_onafteredit = async function (row, columnIndex, value) {
  var colid = gr_workTime.getFocusedColumnID();
  if (colid == "wrkIndictNo") {
    if (scwin.bOnPopUp) {
      scwin.bOnPopUp = false;
      return;
    }
    if (ds_workTime.getCellData(row, "wrkIndictNo") == "") {
      return;
    }
    var pCode = ds_workTime.getCellData(row, "wrkIndictKndCd");
    var pName = ed_qryWrkDt.getValue();
    ds_workTime.setCellData(row, colid, ds_workTime.getCellData(row, colid).toUpperCase());
    var pWrkIndictNo = ds_workTime.getCellData(row, "wrkIndictNo").replace(/\s*$/, '');
    var rtnList = await scwin.f_CommonPopUp('retrieveWrkIndictNoList', pCode, pName, "T", 5, null, null, null, null, "700", null, null, null, null, null, null, "T", pWrkIndictNo, null);
    if (rtnList != null) {
      ds_workTime.setCellData(row, "wrkIndictNo", rtnList[0]);
      ds_workTime.setCellData(row, "wrkIndictKndCd", rtnList[1]);
      ds_workTime.setCellData(row, "cvsslNmWrkPlNm", rtnList[3]);
      ds_workTime.setCellData(row, "shiftClsCd", rtnList[5]);
      scwin.v_workClsCd = rtnList[1];
      if (ds_workTime.getTotalRow() > 0) {
        scwin.ds_wkrStp_OnFilter();
      }
    } else {
      ds_workTime.setCellData(row, "wrkIndictNo", "");
    }
  } else if (colid == "workClsCd") {
    // 근무구분
    var cnt = 0;
    if (ds_workTime.getCellData(row, "workClsCd") == 'N') {
      for (var i = 0; i < ds_workTime.getTotalRow(); i++) {
        if (ds_workTime.getRowStatus(i) != "D") {
          if (i != row) {
            if (ds_workTime.getCellData(i, "workClsCd") == 'N') {
              cnt++;
            }
          }
        }
      }
      if (cnt >= 1) {
        await $c.win.alert($p, "업무간휴무는한건만 입력하실 수 있습니다.");
        ds_workTime.setCellData(row, "workClsCd", "");
        return;
      }
    }
    ds_workTime.setCellData(row, "dtlTskCntnCd", "");
    ds_workTime.setCellData(row, "wrkIndictNo", "");
    ds_workTime.setCellData(row, "cvsslNmWrkPlNm", "");
    ds_workTime.setCellData(row, "shiftClsCd", "");
    ds_workTime.setCellData(row, "wrkStpCd", "");
    var workClsCd = ds_workTime.getCellData(row, "workClsCd");
    if (workClsCd == 'A') {
      //배치
      gr_workTime.setHeaderClass("wrkIndictNoHeader", "txt-red"); //작업지시번호
      gr_workTime.setHeaderClass("wrkStpCdHeader", "txt-red"); //작업단계
      gr_workTime.setColumnReadOnly("wrkIndictNo", false);
      gr_workTime.setColumnReadOnly("wrkStpCd", false);
      gr_workTime.setColumnReadOnly("shiftClsCd", true);
      gr_workTime.setColumnReadOnly("cond1", false);
      gr_workTime.setColumnReadOnly("cond2", false);
      gr_workTime.setColumnReadOnly("cond3", false);
      gr_workTime.setColumnReadOnly("cond4", false);
      gr_workTime.setColumnReadOnly("cond5", false);
      gr_workTime.setColumnReadOnly("cond6", false);
      gr_workTime.setColumnReadOnly("cond7", false);
      gr_workTime.setColumnReadOnly("cond8", false);
      gr_workTime.setColumnReadOnly("emgcOdrYn", false);
      gr_workTime.setColumnReadOnly("commWrkScYn", false);
      gr_workTime.setColumnReadOnly("commWrkScStd", false);
      gr_workTime.setColumnReadOnly("rainScYn", false);
      gr_workTime.setColumnReadOnly("rainScStd", false);
      gr_workTime.setColumnReadOnly("snowScYn", false);
      gr_workTime.setColumnReadOnly("snowScStd", false);
      gr_workTime.setColumnReadOnly("gangWrkYn", false);
      gr_workTime.setColumnReadOnly("gangWrkStd", false);
      gr_workTime.setColumnReadOnly("odrReqYn", false);
      gr_workTime.setColumnReadOnly("odrReqStd", false);
      gr_workTime.setColumnReadOnly("extendWrkScYn", false);
      gr_workTime.setColumnReadOnly("extendWrkScStd", false);
      gr_workTime.setColumnReadOnly("holiWrkScYn", false);
      gr_workTime.setColumnReadOnly("holiWrkScStd", false);
    } else {
      gr_workTime.removeHeaderClass("wrkIndictNoHeader", "txt-red"); //작업지시번호
      gr_workTime.removeHeaderClass("wrkStpCdHeader", "txt-red"); //작업단계
      gr_workTime.setColumnReadOnly("wrkIndictNo", true);
      gr_workTime.setColumnReadOnly("wrkStpCd", true);
      gr_workTime.setColumnReadOnly("shiftClsCd", true);
    }

    // scwin.ds_tskCntn_OnFilter();
    gr_workTime.refreshColumn("dtlTskCntnCd");
    var tskCd = ldt_tskCntn.getCellData(0, "cd");
    ds_workTime.setCellData(row, "dtlTskCntnCd", tskCd);
  }
};
scwin.sbm_saveWork_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.cmdKnd = "save";
  ds_staff.removeAll();
  ds_workPlan.removeAll();
  ds_workTime.removeAll();
  ds_searchStaff.set("branCd", ed_branCd.getValue()); //점소
  ds_searchStaff.set("dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종
  ds_searchStaff.set("staffNo", ed_staffNo.getValue()); //인원
  ds_searchStaff.set("wrkDt", ed_qryWrkDt.getValue()); //일자

  scwin.hid_txt_wrkDt = ed_qryWrkDt.getValue();

  // ds_searchStaff.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_searchStaff);

  //버튼 제어
  scwin.f_buttonEnableCheck();
  var k = 0;
  var bBreak = false;
  for (var i = 0; i < scwin.checkStaffArray.length - 1; i++) {
    if (bBreak) {
      break;
    }
    for (j = 0; j < ds_staff.getTotalRow(); j++) {
      if (ds_staff.getCellData(j, "staffNo") == scwin.checkStaffArray[i]) {
        ds_staff.setCellData(j, "checkBox", "T");
        k = j;
        bBreak = true;
        break;
      }
    }
  }
  scwin.f_retrieveDetail(k);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
};

//-------------------------------------------------------------------------
// for=gr_workTime event=OnColumnPosChanged(Row,Colid)
//-------------------------------------------------------------------------
scwin.gr_workTime_onaftercolumnmove = function (info) {
  if (info.colId == "wrkIndictNo") {
    ds_workTime.setCellData(info.rowIndex, "cvsslNmWrkPlNm", "");
    ds_workTime.setCellData(info.rowIndex, "shiftClsCd", "");
    ds_workTime.setCellData(info.rowIndex, "wrkStpCd", "");
    ds_workTime.setCellData(info.rowIndex, "wrkIndictKndCd", "");
    // gr_workTime.UrlImages = SEARCH_BTN;
  } else {
    // gr_workTime.UrlImages = CALENDAR_BTN;
  }
};

// <!-----------------------------------------------------------------------------
//   팝업 처리 부분 
// ------------------------------------------------------------------------------>

//-------------------------------------------------------------------------
// 소속 udc
//-------------------------------------------------------------------------
scwin.udc_branCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_branCd, txt_branNm, 1);
};
scwin.udc_branCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_branNm, ed_branCd, 1, false);
};
scwin.udc_branCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_branCd.getValue(), txt_branNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 인원 udc
//-------------------------------------------------------------------------
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, txt_staffNm, 2);
};
scwin.udc_staffNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_staffNm, ed_staffNo, 2, false);
};
scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_staffNo.getValue(), txt_staffNm.getValue(), 'F', 'F');
};

// 근무시간 그리드 작업단계 label값 수정
scwin.sbm_wkrStp_submitdone = function (e) {
  for (var i = 0; i < ds_wkrStp.getTotalRow(); i++) {
    var wrkStpNm = ds_wkrStp.getCellData(i, "wrkStpNm");
    var upperWrkStpCd = ds_wkrStp.getCellData(i, "upperWrkStpCd");
    ds_wkrStp.setCellData(i, "wrkStpNm", wrkStpNm + " " + upperWrkStpCd);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_branCd',codeId:'ed_branCd',btnId:'btn_branCd',nameId:'txt_branNm',mandatoryName:'true',selectID:'retrieveLogisDeptInfo','ev:onblurCodeEvent':'scwin.udc_branCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_branCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_branCd_onclickEvent',validExpName:'소속:yes',validExpCode:'소속:yes',UpperFlagCode:'1',objTypeCode:'data',allowCharCode:'a-zA-Z0-9',validTitle:'소속',mandatoryCode:'true',maxlengthCode:'4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_qryWrkDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'data',validExp:'작업일자:yes',title:'작업일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_dtlOccptypeCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',disableEdit:'true',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_staffNo',codeId:'ed_staffNo',btnId:'btn_staffNo',nameId:'txt_staffNm',objType:'data','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_staffNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',maxlengthCode:'6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'사원',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_toExcel1',gridID:'gr_staff',btnUser:'Y',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_staff',id:'gr_staff',style:'',visibleRowNum:'6',autoFitMinWidth:'1000','ev:oncellclick':'scwin.gr_staff_oncellclick','ev:onrowindexchange':'scwin.gr_staff_onrowindexchange',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선택',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사번',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'성명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소속',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'직종',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'상세<br/>직종',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'직급',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'고정배치여부',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'배치<br/>내역',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'실적<br/>여부',width:'80'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'전일최종작업일자',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'checkBox',inputType:'checkbox',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occptypeNm',inputType:'text',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlOccptypeNm',inputType:'text',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedArrangeYn',inputType:'text',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrangeCont',inputType:'text',sortable:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'resultRegYn',inputType:'text',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yestWrkDt',inputType:'text',textAlign:'left',sortable:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Select',type:'button',class:'btn','ev:onclick':'scwin.f_SelNotRegist',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적미등록인원선택'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width:600px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업배치계획 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownFn:'scwin.f_toExcel2',gridID:'gr_workPlan',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_workPlan',id:'gr_workPlan',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'본선/작업장',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SHIFT',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업단계',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'사번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업지시종류',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslNmWrkPlNm',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'select'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_shift'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'select',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictKndCd',inputType:'text',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'근무시간',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridDownFn:'scwin.f_toExcel3',gridID:'gr_workTime',templateYn:'N',gridUpYn:'N',gridDownYn:'Y',btnUser:'N',btnPlusYn:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_workTime',style:'',autoFit:'allColumn',id:'gr_workTime',visibleRowNum:'5',class:'wq_gvw',autoFitMinWidth:'1200',dataName:'근무시간',validFeatures:'ignoreStatus=no',validExp:'workClsCd:근무구분:yes,workStDt:시작일자:yes:date=YYYYMMDD,             workEndDt:종료일자:yes:date=YYYYMMDD,dtlTskCntnCd:업무내용:yes',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_workTime_oncellclick','ev:onaftercolumnmove':'scwin.gr_workTime_onaftercolumnmove','ev:onafteredit':'scwin.gr_workTime_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column1',value:'근무구분',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column17',value:'작업지시종류',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'wrkIndictNoHeader',value:'작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column13',value:'본선/작업장',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'SHIFT',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStpCdHeader',value:'작업단계',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column5',value:'작업시작시간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column19',value:'작업종료시간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column25',value:'업무내용',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'사번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'작업일자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'근무순번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'SHIFT<br/>수',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'긴급<br/>작업',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column61',value:'원당작업',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column52',value:'우천작업',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column79',value:'설천작업',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column73',value:'Gang작업',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column67',value:'오더요청',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column55',value:'연장작업',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column91',value:'명절작업',displayMode:'label',colSpan:'2',rowSpan:'',hidden:'true',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column94',value:'일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column95',value:'시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'시간',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'시간',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'시간',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'workClsCd',inputType:'select',textAlign:'left',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_workCls'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictKndCd',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'textImage',imageClickFunction:'scwin.gr_workTime_OnPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslNmWrkPlNm',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'select',allOption:'',chooseOption:'',ref:'',emptyItem:'true',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_shift'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{id:'wrkStpCd',inputType:'select',textAlign:'left',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'',emptyItem:'true',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ldt_wkrStp'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStDt',inputType:'calendar',dataType:'date',displayFormat:'yyyy/MM/dd',imageClickFunction:'scwin.gridworkStDtPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workStHh',inputType:'text',dataType:'time',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workEndDt',inputType:'calendar',dataType:'date',displayFormat:'yyyy/MM/dd',imageClickFunction:'scwin.gridworkEndDtPopup'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workEndHh',inputType:'text',dataType:'time',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlTskCntnCd',inputType:'select',textAlign:'left',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ldt_tskCntn'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workDt',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workSeq',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shift',inputType:'text',hidden:'true',dataType:'float',displayFormat:'#,###.#',allowChar:'.0-9',maxLength:'.1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'emgcOdrYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commWrkScYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commWrkScStd',inputType:'select',hidden:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rainScYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rainScStd',inputType:'select',hidden:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'snowScYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'snowScStd',inputType:'select',hidden:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gangWrkYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gangWrkStd',inputType:'select',hidden:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrReqYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrReqStd',inputType:'select',hidden:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'extendWrkScYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'extendWrkScStd',inputType:'select',hidden:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holiWrkScYn',inputType:'checkbox',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'holiWrkScStd',inputType:'select',hidden:'true',emptyItem:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRow3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',rowAddFunction:'scwin.f_AddRowWorkTime',rowDelFunction:'scwin.DeleteWorkTime',btnRowAddObj:'btn_AddWorkTime',btnDelObj:'btn_DeleteWorkTime',btnCancelObj:'btn_CancelWorkTime',cancelFunction:'scwin.CancelWorkTime',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_workTime'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Clear',label:'저장',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.f_clear'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Clear'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveWrkIndictNoList',codeId:'',validTitle:'',nameId:'',style:'display: none;',id:'udc_grd_wrkIndictNo'}}]}]}]}]}]})