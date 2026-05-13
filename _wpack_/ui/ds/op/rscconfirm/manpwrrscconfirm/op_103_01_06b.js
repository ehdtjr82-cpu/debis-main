/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_06b.xml 63688 e423fac92c1f1c30f33793954469c486e8a5f128f6d76a02257874ed10989b36 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workDt',name:'작업일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractServicePostAttendance',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'opcode',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStDt',name:'근무시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workStHh',name:'근무시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndDt',name:'근무종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workEndHh',name:'근무종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reWorkStDt',name:'재근무시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reWorkStHh',name:'재근무시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reWorkEndDt',name:'재근무종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reWorkEndHh',name:'재근무종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bftWorkYn',name:'조식근무여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dnrWorkYn',name:'석식근무여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sprWorkYn',name:'야식근무여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nextDdBftWorkYn',name:'익일조식근무여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'daypayAmt',name:'일당금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcScAmt',name:'할인할증금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dayFood',name:'주간식대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ngtFood',name:'야간식대',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trffcCost',name:'교통비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'etcfee',name:'기타비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workWrkPlCd',name:'근무작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workWrkPlNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_occptypeCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dtlOccptypeCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dtlOccptypeCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empYn',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.RetrieveContractDirectServicePostAttendanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_contractServicePostAttendance","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_contractServicePostAttendance","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveContractDirectServicePostAttendanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_contractServicePostAttendance","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dtlOccptypeCd',action:'/ds.co.RetreiveLubCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_dtlOccptypeCd","key":"GAUCE"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_dtlOccptypeCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.hid_txt_lobranCd = 0;
scwin.hid_txt_wrkPlCd = 0;
scwin.hid_txt_workDt = 0;
scwin.hid_txt_occptypeCd = 0;
scwin.hid_txt_dtlOccptypeCd = 0;
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  const codeOptions = [{
    grpCd: "OP160",
    compID: "lc_occptypeCd",
    opt: {
      "range": "1,0"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ica_wrkDt.setValue(scwin.vCurDate);
    $c.sbm.execute($p, sbm_lobran);
  }, {
    "delay": 100
  });
};
scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobran.setJSON(e.responseJSON.GAUCE);
    co_lc_lobran.setValue(scwin.loUpperLobranCd);
    ed_lobranCd.setValue(co_lc_lobran.getValue());
    //ed_lobranNm.setValue(co_lc_lobran.getText().substring(6,co_lc_lobran.getText().length));
    ed_lobranNm.setValue($c.win.getComboLabel($p, co_lc_lobran));
    co_lc_lobran.focus();
    ///임시
    //co_lc_lobran.setValue("6AA");
    ///
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, searchCondition, null);
  ica_wrkDt.setValue(scwin.vCurDate);
  co_lc_lobran.setSelectedIndex(0);
  co_lc_lobran.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //if (!cfValidate(ed_lobranCd)){
  //	return;
  //}

  //if (!cfValidate(em_qryYm)){
  //	return;
  //}

  if (!(await $c.gus.cfValidate($p, searchCondition))) {
    return;
  }
  ds_contractServicePostAttendance.removeAll();
  scwin.hid_txt_lobranCd = ed_lobranCd.getValue();
  scwin.hid_txt_wrkPlCd = ed_wrkPlCd.getValue();
  scwin.hid_txt_workDt = ica_wrkDt.getValue();
  scwin.hid_txt_occptypeCd = lc_occptypeCd.getValue();
  scwin.hid_txt_dtlOccptypeCd = lc_dtlOccptypeCd.getValue();
  dma_search.set("lobranCd", scwin.hid_txt_lobranCd);
  dma_search.set("wrkPlCd", scwin.hid_txt_wrkPlCd);
  dma_search.set("occptypeCd", scwin.hid_txt_occptypeCd);
  dma_search.set("dtlOccptypeCd", scwin.hid_txt_dtlOccptypeCd);
  dma_search.set("workDt", scwin.hid_txt_workDt);

  //tr_search.post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 

  /*
  if(ds_contractServicePostAttendance.IsUpdated==false){
      $c.win.alert(MSG_CM_ERR_001,["근태등록"]);
      return;
  }
  */
  var checked = 0;
  for (var i = 0; i < ds_contractServicePostAttendance.getRowCount(); i++) {
    if (ds_contractServicePostAttendance.getCellData(i, "chk") == "1" || ds_contractServicePostAttendance.getRowStatus(i) == "D") {
      checked++;
    }
  }
  if (checked == 0) {
    $c.win.alert($p, "선택된 자료가 없습니다");
    //gr_contractServicePostAttendance.setColumn("chk");
    return;
  }
  for (var i = 0; i < ds_contractServicePostAttendance.getRowCount(); i++) {
    if (ds_contractServicePostAttendance.getCellData(i, "chk") == 1) {
      if (ds_contractServicePostAttendance.getCellData(i, "occptypeCd") + ds_contractServicePostAttendance.getCellData(i, "dtlOccptypeCd") == "0512") {
        if (ds_contractServicePostAttendance.getCellData(i, "workWrkPlCd") == "") {
          $c.win.alert($p, "항운노조 상용노무원은 근무작업장을 입력하십시오");
          gr_contractServicePostAttendance.setFocusedCell(i, "workWrkPlCd");
          return;
        }
      }
    }
  }
  if (!(await $c.gus.cfValidate($p, [gr_contractServicePostAttendance]))) {
    return;
  }
  if (!(await scwin.f_gridValidate())) {
    return;
  }
  if (!(await scwin.f_checkVacationDate())) {
    return;
  }
  //저장하시겠습니까?
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 재근무 입력유무 Validate 
//-------------------------------------------------------------------------

scwin.f_gridValidate = async function () {
  var obj = ds_contractServicePostAttendance;
  for (var i = 0; i < ds_contractServicePostAttendance.getRowCount(); i++) {
    if (obj.getCellData(i, "reWorkStDt") != "" || obj.getCellData(i, "reWorkStHh") != "" || obj.getCellData(i, "reWorkEndDt") != "" | obj.getCellData(i, "reWorkEndHh") != "") {
      if (obj.getCellData(i, "reWorkStDt") == "") {
        $c.win.alert($p, "시작일자를 입력하십시오.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1);
        gr_contractServicePostAttendance.setScrollTop(i);
        gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.ColSelect = "true";
        gr_contractServicePostAttendance.setRowPosition(i);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDt");
        //gr_contractServicePostAttendance.focus();
        return false;
        break;
      }
      if (!(await $c.date.isDate($p, obj.getCellData(i, "reWorkStDt")))) {
        $c.win.alert($p, "재근무의 시작일자의 형식이 잘못되었습니다.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1);
        gr_contractServicePostAttendance.setScrollTop(i);
        gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.ColSelect = "true";
        gr_contractServicePostAttendance.setRowPosition(i);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDt");
        //gr_contractServicePostAttendance.focus();
        return false;
        break;
      }
      if (obj.getCellData(i, "reWorkStHh") == "") {
        $c.win.alert($p, "재근무의 시작시간을 입력하십시오.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1);
        gr_contractServicePostAttendance.setScrollTop(i);
        gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.ColSelect = "true";
        gr_contractServicePostAttendance.setRowPosition(i);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStHh");
        //gr_contractServicePostAttendance.focus();
        return false;
        break;
      }
      if (!(await $c.date.isDate($p, obj.getCellData(i, "reWorkStHh")))) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 시작시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        //gr_contractServicePostAttendance.SetScrolling(i, 1);
        gr_contractServicePostAttendance.setScrollTop(i);
        gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.ColSelect = "true";
        gr_contractServicePostAttendance.setRowPosition(i);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStHh");
        //gr_contractServicePostAttendance.focus();
        return false;
        break;
      }
      if (obj.getCellData(i, "reWorkEndDt") == "") {
        $c.win.alert($p, "재근무의 종료일자를 입력하십시오.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1);
        gr_contractServicePostAttendance.setScrollTop(i);
        gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.ColSelect = "true";
        gr_contractServicePostAttendance.setRowPosition(i);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndDt");
        //gr_contractServicePostAttendance.focus();
        return false;
        break;
      }
      if (!(await $c.date.isDate($p, obj.getCellData(i, "reWorkEndDt")))) {
        $c.win.alert($p, "재근무의 종료일자의 형식이 잘못되었습니다.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1);
        gr_contractServicePostAttendance.setScrollTop(i);
        gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.ColSelect = "true";
        gr_contractServicePostAttendance.setRowPosition(i);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndDt");
        //gr_contractServicePostAttendance.focus();
        return false;
        break;
      }
      if (obj.getCellData(i, "reWorkEndHh") == "") {
        $c.win.alert($p, "재근무의 종료시간을 입력하십시오.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1);
        gr_contractServicePostAttendance.setScrollTop(i);
        gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.ColSelect = "true";
        gr_contractServicePostAttendance.setRowPosition(i);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndHh");
        //gr_contractServicePostAttendance.focus();
        return false;
        break;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(0, 2) > "24") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        obj.setRowPosition(i);
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndHh");
        return false;
        break;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(0, 2) == "00" && obj.getCellData(i, "reWorkEndHh").substr(2, 2) == "00") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        obj.setRowPosition(i);
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndHh");
        return false;
        break;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(0, 2) == "24" && obj.getCellData(i, "reWorkEndHh").substr(2, 2) > "00") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        obj.setRowPosition(i);
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndHh");
        return false;
        break;
      }
      if (obj.getCellData(i, "reWorkEndHh").substr(2, 2) > "59") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_043, ["재근무의 종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
        obj.setRowPosition(i);
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndHh");
        return false;
        break;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------

scwin.f_AddRow = async function () {
  if (!(await $c.gus.cfValidate($p, [gr_contractServicePostAttendance]))) {
    return;
  }
  if (!(await scwin.f_gridValidate())) {
    return;
  }
  if (!(await scwin.f_checkVacationDate())) {
    return;
  }
  ds_contractServicePostAttendance.insertRow();
  gr_contractServicePostAttendance.setFocusedCell(ds_contractServicePostAttendance.getRowCount() - 1, 0);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "workDt", scwin.hid_txt_workDt);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "workStDt", scwin.hid_txt_workDt);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "workEndDt", scwin.hid_txt_workDt);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "opcode", "I");
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "daypayAmt", 0);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "dcScAmt", 0);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "dayFood", 0);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "ngtFood", 0);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "trffcCost", 0);
  ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowCount() - 1, "etcfee", 0);

  ////gr_contractServicePostAttendance.focus();
  //gr_contractServicePostAttendance.SetColumn("staffNo");
};
scwin.f_reverse = function () {
  if (ds_contractServicePostAttendance.getRowCount() == 0) return;
  var checked = 0;
  for (var i = 0; i < ds_contractServicePostAttendance.getRowCount(); i++) {
    if (ds_contractServicePostAttendance.getCellData(i, "chk") == 1) {
      checked++;
    }
  }
  for (var j = 0; j < ds_contractServicePostAttendance.getRowCount(); j++) {
    if (checked > 0) {
      ds_contractServicePostAttendance.setCellData(j, "chk", 0);
    } else {
      ds_contractServicePostAttendance.setCellData(j, "chk", 1);
    }
  }
};
scwin.f_deleteRow = function () {
  var row = ds_contractServicePostAttendance.getRowPosition();
  if (ds_contractServicePostAttendance.getCellData(row, "opcode") == "I") {
    $c.win.alert($p, "미등록 자료이므로 삭제대상이 아닙니다");
    return;
  }

  //ds_contractServicePostAttendance.deleteRow(ds_contractServicePostAttendance.getRowPosition());
  if (ds_contractServicePostAttendance.getRowStatus(ds_contractServicePostAttendance.getRowPosition()) == "C") {
    ds_contractServicePostAttendance.removeRow(ds_contractServicePostAttendance.getRowPosition());
  } else {
    ds_contractServicePostAttendance.deleteRow(ds_contractServicePostAttendance.getRowPosition());
  }
};
scwin.f_undoRow = function () {
  if (ds_contractServicePostAttendance.getRowStatus(ds_contractServicePostAttendance.getRowPosition()) == "C") {
    ds_contractServicePostAttendance.removeRow(ds_contractServicePostAttendance.getRowPosition());
  } else {
    ds_contractServicePostAttendance.undoRow(ds_contractServicePostAttendance.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 작업시간 Validation
//-------------------------------------------------------------------------  

scwin.f_checkVacationDate = async function () {
  var workDt = scwin.hid_txt_workDt;
  var workStDt = "";
  var workStHh = "";
  var workEndDt = "";
  var workEndHh = "";
  var workStDtm = "";
  var workEndDtm = "";
  var reWorkStDt = "";
  var reWorkStHh = "";
  var reWorkEndDt = "";
  var reWorkEndHh = "";
  var reWorkStDtm = "";
  var reWorkEndDtm = "";
  var diffDay = "";
  for (var i = 0; i < ds_contractServicePostAttendance.getRowCount(); i++) {
    if (ds_contractServicePostAttendance.getCellData(i, "workEndHh").substr(0, 2) > "24") {
      //$c.win.alert(MSG_CM_ERR_043,["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      $c.win.alert($p, "유효하지 않는 종료시간 입니다.\n다시 입력하여주십시요");
      ds_contractServicePostAttendance.setRowPosition(i);
      gr_contractServicePostAttendance.setFocusedCell(i, "workEndHh");
      return false;
      break;
    }
    if (ds_contractServicePostAttendance.getCellData(i, "workEndHh").substr(0, 2) == "00" && ds_contractServicePostAttendance.getCellData(i, "workEndHh").substr(2, 2) == "00") {
      //$c.win.alert(MSG_CM_ERR_043,["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      $c.win.alert($p, "유효하지 않는 종료시간 입니다.\n다시 입력하여주십시요");
      ds_contractServicePostAttendance.setRowPosition(i);
      gr_contractServicePostAttendance.setFocusedCell(i, "workEndHh");
      return false;
      break;
    }
    if (ds_contractServicePostAttendance.getCellData(i, "workEndHh").substr(0, 2) == "24" && ds_contractServicePostAttendance.getCellData(i, "workEndHh").substr(2, 2) > "00") {
      //$c.win.alert(MSG_CM_ERR_043,["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      $c.win.alert($p, "유효하지 않는 종료시간 입니다.\n다시 입력하여주십시요");
      ds_contractServicePostAttendance.setRowPosition(i);
      gr_contractServicePostAttendance.setFocusedCell(i, "workEndHh");
      return false;
      break;
    }
    if (ds_contractServicePostAttendance.getCellData(i, "workEndHh").substr(2, 2) > "59") {
      //$c.win.alert(MSG_CM_ERR_043,["종료시간"]); // "유효하지 않는 @ 입니다.\n다시 입력하여주십시요"
      $c.win.alert($p, "유효하지 않는 종료시간 입니다.\n다시 입력하여주십시요");
      ds_contractServicePostAttendance.setRowPosition(i);
      gr_contractServicePostAttendance.setFocusedCell(i, "workEndHh");
      return false;
      break;
    }
    workStDt = ds_contractServicePostAttendance.getCellData(i, "workStDt");
    workStHh = ds_contractServicePostAttendance.getCellData(i, "workStHh");
    workEndDt = ds_contractServicePostAttendance.getCellData(i, "workEndDt");
    workEndHh = ds_contractServicePostAttendance.getCellData(i, "workEndHh");
    reWorkStDt = ds_contractServicePostAttendance.getCellData(i, "reWorkStDt");
    reWorkStHh = ds_contractServicePostAttendance.getCellData(i, "reWorkStHh");
    reWorkEndDt = ds_contractServicePostAttendance.getCellData(i, "reWorkEndDt");
    reWorkEndHh = ds_contractServicePostAttendance.getCellData(i, "reWorkEndHh");
    workStDtm = workStDt + workStHh;
    workEndDtm = workEndDt + workEndHh;
    reWorkStDtm = reWorkStDt + reWorkStHh;
    reWorkEndDtm = reWorkEndDt + reWorkEndHh;
    if (workStDt != "") {
      //입력한 작업시작일자가 조회일자이후인가
      if (workDt > workStDt) {
        $c.win.alert($p, "근무시간의 일자는 기준일자 + 1일까지 입력가능합니다.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "workStDt");
        return false;
        break;
      }

      //입력한 작업시작일자가 하루를 초과하는가
      diffDay = $c.date.diffDate($p, workDt, workStDt);
      if (diffDay > 1) {
        $c.win.alert($p, "근무시간의 일자는 기준일자 + 1일까지 입력가능합니다.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "workStDt");
        return false;
        break;
      }

      //작업시작일자가 작업종료일자 이후 인가
      if (workStDt > workEndDt) {
        $c.win.alert($p, MSG_CM_ERR_039);
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "workStDt");
        return false;
        break;
      }
      if (workStDtm > workEndDtm) {
        $c.win.alert($p, MSG_CM_ERR_039);
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "workStHh");
        return false;
        break;
      }
      diffDay = $c.date.diffDate($p, workDt, workEndDt);
      if (diffDay > 1) {
        $c.win.alert($p, "근무시간의 일자는 기준일자 + 1일까지 입력가능합니다.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "workEndDt");
        return false;
        break;
      }
    }
    if (reWorkStDt != "") {
      //작업종료일자가 재작업작시작일자 이후 인가
      if (workEndDt > reWorkStDt) {
        $c.win.alert($p, "작업종료일자가 재작업종료일자 이전이어야 합니다. ");
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDt");
        return false;
        break;
      }
      if (workEndDtm > reWorkStDtm) {
        $c.win.alert($p, MSG_CM_ERR_039);
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDtm");
        return false;
        break;
      }
      diffDay = $c.date.diffDate($p, workDt, reWorkStDt);
      if (diffDay > 1) {
        $c.win.alert($p, "근무시간의 일자는 기준일자 + 1일까지 입력가능합니다.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDt");
        return false;
        break;
      }

      //재작업작시작일자가 재작업작종료일자 이후 인가
      if (reWorkStDt > reWorkEndDt) {
        $c.win.alert($p, MSG_CM_ERR_039);
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkEndDt");
        return false;
        break;
      }
      if (reWorkStDtm > reWorkEndDtm) {
        $c.win.alert($p, MSG_CM_ERR_039);
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDtm");
        return false;
        break;
      }
      diffDay = $c.date.diffDate($p, workDt, reWorkEndDt);
      if (diffDay > 1) {
        $c.win.alert($p, "근무시간의 일자는 기준일자 + 1일까지 입력가능합니다.");
        //gr_contractServicePostAttendance.SetScrolling(i, 1); 
        //gr_contractServicePostAttendance.setScrollTop(i);
        //gr_contractServicePostAttendance.setScrollLeft(1);
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDt");
        return false;
        break;
      }
      var cnt = 0;
      if (workStDtm > reWorkStDtm && workStDtm > reWorkEndDtm) {
        cnt = 1;
      } else if (workEndDtm < reWorkStDtm && workEndDtm < reWorkEndDtm) {
        cnt = 1;
      }
      if (cnt == 0) {
        $c.win.alert($p, "근무와 재근무시간이 중복되므로 다시 입력하여 주십시오.");
        //gr_contractServicePostAttendance.focus();
        gr_contractServicePostAttendance.setFocusedCell(i, "reWorkStDt");
        return false;
        break;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  /*
  if (!$c.gus.cfCanOpenPopup(inObj, pairObj))
      return;
  */
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
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      var lobranCd = co_lc_lobran.getValue();
      udc_lobranCd.cfCommonPopUp(scwin.callbackOpDeptCdInfo, pCode, pName, pClose, null, null, null, null, lobranCd, null, null, null, null); //부서
      //cfSetReturnValue(rtnList, ed_lobranCd, ed_lobranNm);
      break;
    case 2:
      var wrkPlGbCd = "7";
      var lodeptCd = co_lc_lobran.getValue(); //lc_lobranCd.ValueOfIndex("lodeptCd",lc_lobranCd.Index);
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_wrkPlCd.cfCommonPopUp(scwin.callbackWrkPlInfo, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장

      //작업장코드  작업장명
      //cfSetReturnValue(rtnList, ed_wrkPlCd, txt_wrkPlNm);
      break;
    case 3:
      var pCode = ds_contractServicePostAttendance.getCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNo").trim();
      var pName = ds_contractServicePostAttendance.getCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNm").trim();

      //var paramList = hid_txt_lobranCd.value + ",T," + hid_txt_occptypeCd.value + "," + hid_txt_dtlOccptypeCd.value;
      var pWhere = lc_occptypeCd.getValue() + "," + lc_dtlOccptypeCd.getValue() + "," + co_lc_lobran.getValue() + "," + ed_wrkPlCd.getValue();
      console.log("pWhere :" + pWhere);
      udc_commCd.setSelectId("retrieveStaffList");
      udc_commCd.cfCommonPopUp(scwin.callbackStaffList, pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null); // 사원

      /*
      if(rtnList != null && rtnList[0] != "N/A"){
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "staffNo") = rtnList[0];    //사번
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "staffNm") = rtnList[1];    //명
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "occptypeCd") = rtnList[2]; //직종 
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "dtlOccptypeCd") = rtnList[3]; //상세직종
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "occptypeNm") = rtnList[4]; //직종 
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "dtlOccptypeNm") = rtnList[5]; //상세직종
      }else{
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "staffNo") = "";    //사번
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "staffNm") = "";    //명
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "occptypeCd") = ""; //직종 
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "dtlOccptypeCd") = ""; //상세직종
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "occptypeNm") = ""; //직종 
          ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "dtlOccptypeNm") = ""; //상세직종
      }
      */
      break;
    case 4:
      var wrkPlGbCd = "7";
      var lodeptCd = co_lc_lobran.getValue(); //lc_lobranCd.ValueOfIndex("lodeptCd",lc_lobranCd.Index);
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_wrkPlCd.cfCommonPopUp(scwin.callbackWrkPlInfo2, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장
      /*                                    
                  if (rtnList != null && rtnList[0] != '') {
                      ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "workWrkPlCd") = rtnList[0] ;
                      ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "workWrkPlNm") = rtnList[1] ;
                  }else{
                      ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "workWrkPlCd") = "" ;
                      ds_contractServicePostAttendance.NameValue(ds_contractServicePostAttendance.RowPosition, "workWrkPlNm") = "" ;
                  }
      */
      break;
  }
};
scwin.callbackOpDeptCdInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lobranCd, ed_lobranNm);
};
scwin.callbackWrkPlInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
};
scwin.callbackStaffList = function (rtnList) {
  if (rtnList != null && rtnList[0] != "") {
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNo", rtnList[0]); //사번
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNm", rtnList[1]); //명
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeCd", rtnList[2]); //직종 
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeCd", rtnList[3]); //상세직종
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeNm", rtnList[4]); //직종 
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeNm", rtnList[5]); //상세직종
  } else {
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNo", ""); //사번
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNm", ""); //명
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeCd", ""); //직종 
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeCd", ""); //상세직종
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeNm", ""); //직종 
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeNm", ""); //상세직종
  }
};
scwin.callbackWrkPlInfo2 = function (rtnList) {
  if (rtnList != null && rtnList[0] != '') {
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "workWrkPlCd", rtnList[0]);
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "workWrkPlNm", rtnList[1]);
  } else {
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "workWrkPlCd", "");
    ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "workWrkPlNm", "");
  }
};
scwin.udc_lobranCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lobranCd.getValue(), ed_lobranNm.getValue(), 'F', 'F');
};
scwin.udc_lobranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 1);
};
scwin.udc_lobranCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lobranNm, ed_lobranCd, 1, false);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 2);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 2, false);
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_contractServicePostAttendance.getRowCount();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  spa_cnt.setValue(rowCnt);
};
scwin.sbm_dtlOccptypeCd_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_dtlOccptypeCd.setJSON(e.responseJSON.GAUCE);
    //lc_dtlOccptypeCd.setItem(label, value, nodest, index);
  }
};
scwin.lc_occptypeCd_onviewchange = function (info) {
  dma_dtlOccptypeCd.set("lobranCd", "OP161");
  dma_dtlOccptypeCd.set("occptypeCd", lc_occptypeCd.getValue());
  dma_dtlOccptypeCd.set("empYn", "Y");
  $c.sbm.execute($p, sbm_dtlOccptypeCd);
};
scwin.gr_contractServicePostAttendance_onviewchange = function (info) {
  console.log(info);
  // {oldValue: '', newValue: '20251224', rowIndex: 0, colIndex: 12, colId: 'reWorkStDt'}
  var v_staffNo = ds_contractServicePostAttendance.getCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNo");
  var colid = info.colID;
  var row = info.rowIndex;
  var olddata = info.oldValue;
  if (ds_contractServicePostAttendance.getCellData(row, colid) != olddata) {
    //인서트일때 왼쪽 데이터가 바뀌면 오른쪽 그리드에도 적용해야한다
    if (colid == "staffNo") {
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNm", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeCd", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeCd", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeNm", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeNm", "");
      v_staffNo = olddata;
      scwin.f_openCommonPopUp(3);
    } else if (colid == "staffNm") {
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "staffNo", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeCd", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeCd", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "occptypeNm", "");
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "dtlOccptypeNm", "");
      v_staffNo = olddata;
      scwin.f_openCommonPopUp(3);
    } else if (colid == "workWrkPlNm") {
      ds_contractServicePostAttendance.setCellData(ds_contractServicePostAttendance.getRowPosition(), "workWrkPlCd", "");
      scwin.f_openCommonPopUp(4, ds_contractServicePostAttendance.getCellData(row, "workWrkPlCd"), ds_contractServicePostAttendance.getCellData(row, "workWrkPlNm"), "T", "F");
    } else if (colid == "workEndHh") {
      ds_contractServicePostAttendance.setCellData(row, "chk", 1);
    }
  }
};
scwin.gr_contractServicePostAttendance_ontextimageclick = function (rowIndex, columnIndex) {
  gr_contractServicePostAttendance.setFocusedCell(rowIndex, columnIndex);
  var row = rowIndex;
  var colid = gr_contractServicePostAttendance.getColumnID(columnIndex);
  if (colid == "staffNo") {
    scwin.f_openCommonPopUp(3);
  } else {
    if (colid == "workWrkPlNm") {
      scwin.f_openCommonPopUp(4, ds_contractServicePostAttendance.getCellData(row, "workWrkPlCd"), ds_contractServicePostAttendance.getCellData(row, "workWrkPlNm"), "F", "F");
    }
  }
};
scwin.gr_contractServicePostAttendance_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_contractServicePostAttendance.getRowStatus(rowIndex) == "C") {
    gr_contractServicePostAttendance.setCellReadOnly(rowIndex, "staffNo", false);
    gr_contractServicePostAttendance.setCellReadOnly(rowIndex, "staffNm", false);
  } else {
    gr_contractServicePostAttendance.setCellReadOnly(rowIndex, "staffNo", true);
    gr_contractServicePostAttendance.setCellReadOnly(rowIndex, "staffNm", true);
  }
};
scwin.co_lc_lobran_onchange = function (info) {
  ed_lobranCd.setValue(co_lc_lobran.getValue());
  ed_lobranNm.setValue(co_lc_lobran.getText().substring(6, co_lc_lobran.getText().length));
  ed_wrkPlCd.setValue("");
  ed_wrkPlNm.setValue("");
};
scwin.btn_mainSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_init_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb ',id:'searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'co_lc_lobran',ref:'',renderType:'',style:'width: 200px;',submenuSize:'auto','ev:onchange':'scwin.co_lc_lobran_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'xf:label',A:{ref:'lobranNm'}},{T:1,N:'xf:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',btnId:'btn_lobranCd',UpperFlagCode:'1',allowCharCode:'0-9,a-z,A-Z',maxlengthCode:'4',mandatoryName:'true',validExpName:'사업부서:yes',validExpCode:'사업부서:yes',objTypeCode:'data',editTypeCode:'select',id:'udc_lobranCd','ev:onclickEvent':'scwin.udc_lobranCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_lobranCd_onviewchangeNameEvent',selectID:'retrieveOpDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_lobranCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'근무일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkDt',style:'',objType:'data',validExp:'근무일자:yes:date=YYYYMMDD',mandatory:'true',editType:'select',displayFormat:'yyyy/MM/dd',title:'근무일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',btnId:'btn_wrkPlCd',editTypeCode:'select',allowCharCode:'0-9,A-Z,a-z',maxlengthCode:'5',objTypeCode:'data',UpperFlagCode:'1',selectID:'retrieveWrkPlInfo',id:'udc_wrkPlCd','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_occptypeCd',ref:'',renderType:'',style:'width: 200px;',submenuSize:'auto',chooseOptionLabel:'전체','ev:onviewchange':'scwin.lc_occptypeCd_onviewchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtlOccptypeCd',ref:'',renderType:'',style:'width: 150px;',submenuSize:'auto',tabIndex:'0',chooseOption:'true',chooseOptionLabel:'전체',allOption:'',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_dtlOccptypeCd'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'}},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'A-Z0-9',btnId:'btn_commCd',codeId:'ed_commCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',id:'udc_commCd',maxlengthCode:'5',nameId:'ed_commNm',objTypeCode:'data',popupID:'',selectID:'',style:'display:none','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'용역직 근태등록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_contractServicePostAttendance',grdDownOpts:'{"fileName":"계약용역직근태화면등록.xlsx","sheetName" : "계약용역직근태화면등록", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_contractServicePostAttendance',style:'',id:'gr_contractServicePostAttendance',visibleRowNum:'16',class:'wq_gvw',defaultCellHeight:'24',editModeEvent:'onclick',resize:'true',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',readOnly:'false','ev:onviewchange':'scwin.gr_contractServicePostAttendance_onviewchange','ev:ontextimageclick':'scwin.gr_contractServicePostAttendance_ontextimageclick','ev:oncellclick':'scwin.gr_contractServicePostAttendance_oncellclick',rowStatusVisible:'true',gridName:'근태'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption15',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'저장',displayMode:'label',rowSpan:'2',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'상태',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'인원번호',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column145',value:'근무일자',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'성명',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'100',inputType:'text',id:'column48',value:'직종',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'200',inputType:'text',id:'column96',value:'상세직종',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'140',inputType:'text',id:'column50',value:'근무작업장',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'550',inputType:'text',id:'column70',value:'근무',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column99',value:'재근무',displayMode:'label',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'370',inputType:'text',id:'column108',value:'일당',displayMode:'label',colSpan:'6',sortable:'false'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',id:'column126',value:'식사시간근무여부',displayMode:'label',colSpan:'4',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column129',value:'시작일자',displayMode:'label',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column130',value:'시작시간',displayMode:'label',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column131',value:'종료일자',displayMode:'label',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column132',value:'종료시간',displayMode:'label',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',value:'시작일자',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column115',value:'시작시간',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column112',value:'종료일자',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column134',value:'종료시간',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column136',value:'일당금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column137',value:'할인할증',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column138',value:'주간식대',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column142',value:'야간식대',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column143',value:'교통비',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column144',value:'기타',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column127',value:'조식',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column124',value:'석식',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column139',value:'야식',displayMode:'label',class:'col-type2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'70',inputType:'text',id:'column140',value:'익일조식',displayMode:'label',class:'col-type2',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',id:'chk',displayMode:'label',checkAlways:'true',falseValue:'0',trueValue:'1',valueType:'other',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'opcode',displayMode:'label',readOnly:'true',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미등록'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'staffNo',displayMode:'label',validExp:'staffNo:인원번호:yes:length=6:key',maxLength:'6',mandatory:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'workDt',displayMode:'label',hidden:'true',hiddenCol:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'staffNm',displayMode:'label',validExp:'성명:yes',mandatory:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'occptypeNm',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'dtlOccptypeNm',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'workWrkPlNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'workStDt',displayMode:'label',validExp:'시작일자:yes:date=YYYYMMDD',mandatory:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'workStHh',displayMode:'label',displayFormat:'##:##',validExp:'시작시간:yes',maxLength:'4',mandatory:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'workEndDt',displayMode:'label',mandatory:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'workEndHh',displayMode:'label',displayFormat:'##:##',maxLength:'4',mandatory:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'reWorkStDt',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reWorkStHh',displayMode:'label',displayFormat:'##:##',maxLength:'4',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'reWorkEndDt',displayMode:'label',validExp:'종료일자:yes:date=YYYYMMDD',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reWorkEndHh',displayMode:'label',displayFormat:'##:##',validExp:'종료시간:yes',maxLength:'4',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'daypayAmt',displayMode:'label',readOnly:'true',displayFormat:'#,###',dataType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcScAmt',displayMode:'label',readOnly:'true',displayFormat:'#,###',dataType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dayFood',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,###',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ngtFood',displayMode:'label',allowChar:'0-9',displayFormat:'#,###',dataType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trffcCost',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,###',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etcfee',displayMode:'label',allowChar:'0-9',dataType:'number',displayFormat:'#,###',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'bftWorkYn',displayMode:'label',trueValue:'1',valueType:'other',falseValue:'0',checkAlways:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'dnrWorkYn',displayMode:'label',trueValue:'1',valueType:'other',falseValue:'0',checkAlways:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'sprWorkYn',displayMode:'label',trueValue:'1',valueType:'other',falseValue:'0',checkAlways:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'nextDdBftWorkYn',displayMode:'label',trueValue:'1',valueType:'other',falseValue:'0',checkAlways:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'spa_cnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'',label:'삭제',style:'',type:'button','ev:onclick':'scwin.f_reverse'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체선택(해제)'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRow',btnRowDelYn:'Y',btnRowAddYn:'Y',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_contractServicePostAttendance',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_undoRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{style:'',disabled:'false',id:'btn_mainSave',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_mainSave_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})