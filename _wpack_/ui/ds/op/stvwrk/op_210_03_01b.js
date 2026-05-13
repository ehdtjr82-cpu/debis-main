/*amd /ui/ds/op/stvwrk/op_210_03_01b.xml 45172 ba2181cfe66b55cda12373e353dfc6b4fd0c9de6626a0be40804e65d6cfc8286 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wageAgrmntDt',name:'노임협약일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptStDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'occptypeClsCd',name:'직종구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_results_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptGrd',name:'등급',dataType:'number'}},{T:1,N:'w2:column',A:{id:'occptypeClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalAllow',name:'총급여',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mmStndSal',name:'기본급여',dataType:'number'}},{T:1,N:'w2:column',A:{id:'basisSalHourCnt',name:'기본시수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'extdAllow',name:'연장금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'extdAllowHourCnt',name:'연장시수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offDayAllow',name:'휴일금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'offDayAllowHourCnt',name:'휴일시수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ngtAllow',name:'야간금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ngtAllowHourCnt',name:'야간시수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bonusAllow',name:'상여(상여)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'physicalTrainAllow',name:'상여(체육단련)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'safetyGearAllow',name:'상여(안전장구)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trffcCost',name:'운전보조',dataType:'number'}},{T:1,N:'w2:column',A:{id:'managerAllow',name:'직무수당(소장)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'overwrkAllow',name:'초과수당',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'적용종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageAgrmntDt',name:'노임협약일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holidaySal',name:'휴일수당',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spcdaySal',name:'특휴수당',dataType:'number'}},{T:1,N:'w2:column',A:{id:'singleSal',name:'단독수당',dataType:'number'}},{T:1,N:'w2:column',A:{id:'asistSal',name:'직무수당(사무장)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chiefSal',name:'직무수당(반장)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chiefWorkAllow',name:'업무수당(반장)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'asistWorkAllow',name:'업무수당(사무장)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bonusFamilyAllow',name:'상여(가정의달)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stevedoreAllow',name:'하역수당',dataType:'number'}},{T:1,N:'w2:column',A:{id:'efficiencyAllow',name:'능률수당',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qualificationAllow',name:'자격수당',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveStvWageTariffTempCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveStvWageTariffTempCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.headerCheck = 0;
scwin.button = ""; // 버튼 체크 flag
scwin.gubun = 0; // 중복 체크 flag
scwin.pos_groupCode = "";
scwin.rowFlag = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.districtCd = memJson.districtCd; // 권역

  const codeOptions = [{
    grpCd: "OP333",
    compID: "lc_occptypeClsCd,gr_results:occptypeClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveDistrictCdCombo2",
    //param3: ["CMP"],
    compID: "lc_districtCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    lc_occptypeClsCd.setValue("");
    scwin.f_EventInit();
    //scwin.headerCheck = 1; // 맨처음 행 추가를 위해 ds_results 의 Header 를 만들어 주기 위해 빈 조회를 한다. 그때 Data가 없습니다를 보여주지 않기 위해 Check
    //dma_search.set("districtCd","XXXXX"); //맨 처음 해더 생성을 위해 결과가 나오지 않는 조건으로 Data를 조회 한다. 	 
    //scwin.f_Retrieve(1);
    scwin.f_FieldClear();
    ///임시
    //lc_districtCd.setValue("IPR");
    ///
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 버튼 감추기
//-------------------------------------------------------------------------
scwin.f_EventInit = function () {
  $c.gus.cfDisableBtnOnly($p, [btn_save /*,btn_addRow,btn_cancel*/]);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ed_wageAgrmntDt.setValue("");
  lc_occptypeClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (ds_results.getRowCount() == 0) {
    ds_results.insertRow();
    gr_results.setFocusedCell(0, 0);
    ds_results.setCellData(ds_results.getRowPosition(), "districtCd", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "adptGrd", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "occptypeClsCd", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "totalAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "mmStndSal", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "basisSalHourCnt", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "extdAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "extdAllowHourCnt", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "ngtAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "ngtAllowHourCnt", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "offDayAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "offDayAllowHourCnt", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "bonusAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "managerAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "overwrkAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "holidaySal", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "spcdaySal", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "chiefSal", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "asistSal", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "singleSal", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "trffcCost", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "chiefWorkAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "asistWorkAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "stevedoreAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "efficiencyAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "qualificationAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "bonusAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "bonusFamilyAllow", 0);
  } else {
    ds_results.insertRow(ds_results.getRowPosition() + 1);
    gr_results.setFocusedCell(ds_results.getRowPosition() + 1, 0);
    ds_results.setCellData(ds_results.getRowPosition(), "districtCd", ds_results.getCellData(ds_results.getRowPosition() - 1, "districtCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "adptGrd", ds_results.getCellData(ds_results.getRowPosition() - 1, "adptGrd"));
    ds_results.setCellData(ds_results.getRowPosition(), "occptypeClsCd", ds_results.getCellData(ds_results.getRowPosition() - 1, "occptypeClsCd"));
    ds_results.setCellData(ds_results.getRowPosition(), "totalAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "totalAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "mmStndSal", ds_results.getCellData(ds_results.getRowPosition() - 1, "mmStndSal"));
    ds_results.setCellData(ds_results.getRowPosition(), "basisSalHourCnt", ds_results.getCellData(ds_results.getRowPosition() - 1, "basisSalHourCnt"));
    ds_results.setCellData(ds_results.getRowPosition(), "extdAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "extdAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "extdAllowHourCnt", ds_results.getCellData(ds_results.getRowPosition() - 1, "extdAllowHourCnt"));
    ds_results.setCellData(ds_results.getRowPosition(), "ngtAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "ngtAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "ngtAllowHourCnt", ds_results.getCellData(ds_results.getRowPosition() - 1, "ngtAllowHourCnt"));
    ds_results.setCellData(ds_results.getRowPosition(), "offDayAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "offDayAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "offDayAllowHourCnt", ds_results.getCellData(ds_results.getRowPosition() - 1, "offDayAllowHourCnt"));
    ds_results.setCellData(ds_results.getRowPosition(), "bonusAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "bonusAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "managerAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "managerAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "overwrkAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "overwrkAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "holidaySal", ds_results.getCellData(ds_results.getRowPosition() - 1, "holidaySal"));
    ds_results.setCellData(ds_results.getRowPosition(), "spcdaySal", ds_results.getCellData(ds_results.getRowPosition() - 1, "spcdaySal"));
    ds_results.setCellData(ds_results.getRowPosition(), "chiefSal", ds_results.getCellData(ds_results.getRowPosition() - 1, "chiefSal"));
    ds_results.setCellData(ds_results.getRowPosition(), "asistSal", ds_results.getCellData(ds_results.getRowPosition() - 1, "asistSal"));
    ds_results.setCellData(ds_results.getRowPosition(), "singleSal", ds_results.getCellData(ds_results.getRowPosition() - 1, "singleSal"));
    ds_results.setCellData(ds_results.getRowPosition(), "trffcCost", ds_results.getCellData(ds_results.getRowPosition() - 1, "trffcCost"));
    ds_results.setCellData(ds_results.getRowPosition(), "adptStDt", ds_results.getCellData(ds_results.getRowPosition() - 1, "adptStDt"));
    ds_results.setCellData(ds_results.getRowPosition(), "adptEndDt", ds_results.getCellData(ds_results.getRowPosition() - 1, "adptEndDt"));
    ds_results.setCellData(ds_results.getRowPosition(), "wageAgrmntDt", ds_results.getCellData(ds_results.getRowPosition() - 1, "wageAgrmntDt"));
    //2023.01.19 업무수당 추가
    ds_results.setCellData(ds_results.getRowPosition(), "chiefWorkAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "chiefWorkAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "asistWorkAllow", ds_results.getCellData(ds_results.getRowPosition() - 1, "asistWorkAllow"));
    ds_results.setCellData(ds_results.getRowPosition(), "stevedoreAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "efficiencyAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "qualificationAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "bonusAllow", 0);
    ds_results.setCellData(ds_results.getRowPosition(), "bonusFamilyAllow", 0);
  }
  ds_results.setCellData(ds_results.getRowPosition(), "adptEndDt", "99999999");
  //그리드 활성화 여부
  scwin.f_Visibility(ds_results.getRowPosition());
  scwin.f_CheckEdit(ds_results.getRowPosition());
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function (gubun) {
  if (ds_results.getRowStatus(ds_results.getRowPosition()) == "C") {
    ds_results.removeRow(ds_results.getRowPosition());
  } else {
    ds_results.undoRow(ds_results.getRowPosition());
  }
  if (ds_results.getRowCount() == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_save]);
  }
};

//-------------------------------------------------------------------------
// 그리드 visibility 
//-------------------------------------------------------------------------
scwin.f_Visibility = function (gubun) {
  if (ds_results.getRowStatus(ds_results.getRowPosition()) == "C") {
    //gr_results.ColumnProp('adptEndDt','Edit')		= "None";
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), "adptEndDt", true);
  } else {
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'adptEndDt', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'districtCd', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'adptGrd', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'occptypeClsCd', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'adptStDt', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'wageAgrmntDt', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'mmStndSal', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'basisSalHourCnt', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'extdAllow', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'extdAllowHourCnt', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'offDayAllow', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'offDayAllowHourCnt', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'ngtAllow', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'ngtAllowHourCnt', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'holidaySal', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'spcdaySal', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'singleSal', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'overwrkAllow', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'bonusAllow', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'trffcCost', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'managerAllow', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'chiefSal', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'asistSal', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'chiefWorkAllow', false);
    gr_results.setReadOnly("cell", ds_results.getRowPosition(), 'asistWorkAllow', false);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (gubun) {
  /*
  if(scwin.gubun != 1){
      scwin.headerCheck = 0; // 맨처음 행 추가를 위해 ds_results 의 Header 를 만들어 주기 위해 빈 조회를 한다. 그때 Data가 없습니다를 보여주지 않기 위해 Check
  }
  */

  var chk = await $c.gus.cfValidate($p, lc_districtCd);
  if (!chk) {
    return;
  }

  //alert(lc_occptypeClsCd.getSelectedIndex());
  if (lc_occptypeClsCd.getSelectedIndex() == 0) {
    dma_search.set("occptypeClsCd", "9");
  } else if (lc_occptypeClsCd.getSelectedIndex() == 1) {
    dma_search.set("occptypeClsCd", "01");
  } else if (lc_occptypeClsCd.getSelectedIndex() == 2) {
    dma_search.set("occptypeClsCd", "02");
  } else if (lc_occptypeClsCd.getSelectedIndex() == 3) {
    dma_search.set("occptypeClsCd", "03");
  } else {
    dma_search.set("occptypeClsCd", lc_occptypeClsCd.getValue());
  }

  //tr_retrieve.Action = "/ds.op.stvwrk.RetrieveStvWageTariffTempCMD.do"; 
  //tr_retrieve.Post();

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
//저장  버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var rowNum = 0;
  var amtGap = false;
  var v_comm_cd = "";
  button = "SAVE";
  if (ds_results.getRowCount() == 0) {
    //$c.win.alert(MSG_CM_WRN_001, ["상용직 요율"]);
    $c.win.alert($p, "저장할 데이터가 존재하지 않습니다.\n먼저 상용직 요율검색을 하십시오.");
    return;
  }
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    ds_results.setCellData(i, "districtCd", lc_districtCd.getValue());
    for (var j = 1; j <= ds_results.getTotalCol(); j++) {
      var colid = ds_results.getColumnID(j);
      if (colid == "wageAgrmntDt") {
        // 협약일자
        $c.date.isDate($p, ds_results.getCellData(i, "wageAgrmntDt"));
        var chk1 = $c.date.isDate($p, ds_results.getCellData(i, "wageAgrmntDt"));
        if (!chk1) {
          //$c.win.alert(MSG_CM_ERR_018, [j+"번째 협약일자"]);  //은(는) 유효한 날자가 아님니다.
          $c.win.alert($p, j - 1 + "번째 협약일자은(는) 유효한 날자가 아님니다.");
          //ds_results.getRowPosition() = i;
          //gr_results.SetColumn("wageAgrmntDt");
          gr_results.setFocusedCell(i, "wageAgrmntDt");
          return;
        }
      }
      if (colid == "adptStDt") {
        // 적용시작일
        var chk2 = $c.date.isDate($p, ds_results.getCellData(i, "adptStDt"));
        if (!chk2) {
          //$c.win.alert(MSG_CM_ERR_018, [j+"번째 적용시작일"]);  //은(는) 유효한 날자가 아님니다.
          $c.win.alert($p, j - 1 + "번째 적용시작일은(는) 유효한 날자가 아님니다.");
          //ds_results.getRowPosition() = i;
          //gr_results.SetColumn("adptStDt");
          gr_results.setFocusedCell(i, "adptStDt");
          return;
        }
      }
      if (colid == "adptEndDt" && ds_results.getCellData(i, "adptEndDt") != "99999999") {
        // 적용종료일
        var chk3 = $c.date.isDate($p, ds_results.getCellData(i, "adptEndDt"));
        if (!chk3) {
          //$c.win.alert(MSG_CM_ERR_018, [j+"번째 적용종료일"]);  //은(는) 유효한 날자가 아님니다.
          $c.win.alert($p, j - 1 + "번째 적용종료일은(는) 유효한 날자가 아님니다.");
          //ds_results.getRowPosition() = i;
          //gr_results.SetColumn("adptEndDt");
          gr_results.setFocusedCell(i, "adptEndDt");
          return;
        }
      }
    }
  }

  // 적용기간 from ~ to 체크
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    var adptStDt = ds_results.getCellData(i, "adptStDt");
    var adptEndDt = ds_results.getCellData(i, "adptEndDt");
    var chk4 = $c.gus.cfIsAfterDate($p, adptStDt, adptEndDt);
    if (!chk4) {
      $c.win.alert($p, MSG_CM_ERR_039); // 시작일자가 종료일자 이전이어야 합니다.
      //ds_results.getRowPosition() = i;
      //gr_results.SetColumn("adptEndDt");
      gr_results.setFocusedCell(i, "adptEndDt");
      return;
    }
  }

  // 적용기간 중복 체크
  //	f_CheckFlag(ds_results.getRowPosition());

  //if(!f_CheckAdptGrd())  return;
  // if(!f_CheckDateOver()) return;
  var chk5 = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (chk5) {
    // 저장하시겠습니까?

    // 240520) INR에서는 occptypeClsCd가 01, 02, 03일때 adptGrd를 각각 0, 1, 2로 저장
    if (lc_districtCd.getValue() == "INR") {
      for (var i = 0; i < ds_results.getRowCount(); i++) {
        if (ds_results.getRowStatus(i) == "C" || ds_results.getRowStatus(i) == "U") {
          ds_results.getCellData(i, "adptGrd", parseInt(ds_results.getCellData(i, "occptypeClsCd").substr(1, 1)) - 1);
        }
      }
    }
    scwin.pos_groupCode = ds_results.getRowPosition(); // 저장 전의 위치 저장
    //tr_save.Action = "/ds.op.stvwrk.SaveStvWageTariffTempCMD.do"; 
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
  /*
  	if (gubun != 1) {
  		if (cfConfirmMsg(MSG_CM_CRM_001)) {  // 저장하시겠습니까?
  			pos_groupCode = ds_results.getRowPosition();  // 저장 전의 위치 저장
  	    	tr_save.Action = "/ds.op.adjmbd.wageadjmproc.SaveGammanCfsWagesTariffCMD.do"; 	 		
  			tr_save.Post();
  		}
  	} else {
      	cfAlertMsg(MSG_CM_ERR_032, ["적용기간1"]);  // @은(는) 중복될 수 없습니다.
  	}
  */
};
scwin.f_CheckAdptGrd = function () {
  var rows = ds_results.getRowCount();
  for (var i = 0; i < rows; i++) {
    var adptGrd = ds_results.getCellData(i, "adptGrd");
    var adptEndDt = ds_results.getCellData(i, "adptEndDt");
    for (j = i + 1; j < rows; j++) {
      var adptGrd2 = ds_results.getCellData(j, "adptGrd");

      //            alert(i+"     adptGrd : "+adptGrd+"     adptGrd2 : "+adptGrd2);

      if (adptGrd == adptGrd2) {
        if (adptEndDt == "99999999") {
          $c.win.alert($p, i + "번째 종료되지 않은 " + adptGrd + "등급이 존재합니다. 종료처리하십시오.");
          //ds_results.RowPosition = i;
          //gr_results.SetColumn("adptEndDt");
          gr_results.setFocusedCell(i, "adptEndDt");
          return false;
        }
      }
    }
  }
  return true;
};
scwin.f_CheckDateOver = async function () {
  var rows = ds_results.getRowCount();
  for (i = 1; i < rows; i++) {
    var adptGrd = ds_results.getCellData(i, "adptGrd");
    var adptStDt = ds_results.getCellData(i, "adptStDt");
    var adptEndDt = ds_results.getCellData(i, "adptEndDt");
    for (j = i + 1; j <= rows; j++) {
      var adptGrd2 = ds_results.getCellData(j, "adptGrd");
      var adptStDt2 = ds_results.getCellData(j, "adptStDt");
      var adptEndDt2 = ds_results.getCellData(j, "adptEndDt");
      if (adptGrd == adptGrd2) {
        var chk = await scwin.f_IsAfterDate(adptStDt, adptEndDt, adptStDt2, adptEndDt2);
        if (!chk) {
          $c.win.alert($p, j + "번째 적용기간이 중복됩니다.");
          //ds_results.RowPosition = j;
          //gr_results.SetColumn("adptStDt");
          gr_results.setFocusedCell(j, "adptStDt");
          return false;
        }
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 비가용기간 중복  체크 함수(등록적용시작일, 등록적용종료일, 기존적용시작일, 기존적용종료일)
//-------------------------------------------------------------------------
scwin.f_IsAfterDate = function (nowStart, nowEnd, compDate1, compDate2) {
  var nowStart = nowStart.toDate("YYYYMMDD");
  var nowEnd = nowEnd.toDate("YYYYMMDD");
  var compDate1 = compDate1.toDate("YYYYMMDD");
  var compDate2 = compDate2.toDate("YYYYMMDD");
  if (compDate1 <= nowStart && compDate2 > nowStart) {
    return false;
  }
  if (compDate1 < nowEnd && compDate2 > nowEnd) {
    return false;
  }
  if ((compDate1 > nowStart || compDate2 >= nowStart) && (compDate1 <= nowEnd || compDate2 < nowEnd)) {
    return false;
  }
  if (compDate1 > nowEnd && compDate2 < nowEnd) {
    return false;
  }
  return true;
};
scwin.f_CheckEdit = function (row) {
  var status = ds_results.getRowStatus(row);
  var adptEndDt = ds_results.getCellData(row, "adptEndDt");
  if (status == "C") {
    gr_results.setReadOnly("cell", row, 'adptStDt', false);
    gr_results.setReadOnly("cell", row, 'adptGrd', false);
  } else {
    gr_results.setReadOnly("cell", row, 'adptStDt', true);
    gr_results.setReadOnly("cell", row, 'adptGrd', true);
  }
  console.log("row : " + row + "  adptEndDt : " + adptEndDt);
  if (adptEndDt != "99999999") {
    gr_results.setReadOnly("cell", row, 'occptypeClsCd', true);
    gr_results.setReadOnly("cell", row, 'adptStDt', true);
    gr_results.setReadOnly("cell", row, 'adptEndDt', true);
    gr_results.setReadOnly("cell", row, 'wageAgrmntDt', true);
    gr_results.setReadOnly("cell", row, 'mmStndSal', true);
    gr_results.setReadOnly("cell", row, 'basisSalHourCnt', true);
    gr_results.setReadOnly("cell", row, 'extdAllow', true);
    gr_results.setReadOnly("cell", row, 'extdAllowHourCnt', true);
    gr_results.setReadOnly("cell", row, 'offDayAllow', true);
    gr_results.setReadOnly("cell", row, 'offDayAllowHourCnt', true);
    gr_results.setReadOnly("cell", row, 'ngtAllow', true);
    gr_results.setReadOnly("cell", row, 'ngtAllowHourCnt', true);
    gr_results.setReadOnly("cell", row, 'holidaySal', true);
    gr_results.setReadOnly("cell", row, 'spcdaySal', true);
    gr_results.setReadOnly("cell", row, 'singleSal', true);
    gr_results.setReadOnly("cell", row, 'overwrkAllow', true);
    gr_results.setReadOnly("cell", row, 'bonusAllow', true);
    gr_results.setReadOnly("cell", row, 'trffcCost', true);
    gr_results.setReadOnly("cell", row, 'managerAllow', true);
    gr_results.setReadOnly("cell", row, 'chiefSal', true);
    gr_results.setReadOnly("cell", row, 'asistSal', true);
    gr_results.setReadOnly("cell", row, 'chiefWorkAllow', true);
    gr_results.setReadOnly("cell", row, 'asistWorkAllow', true);
  } else {
    gr_results.setReadOnly("cell", row, 'occptypeClsCd', false);
    gr_results.setReadOnly("cell", row, 'adptEndDt', false);
    gr_results.setReadOnly("cell", row, 'wageAgrmntDt', false);
    gr_results.setReadOnly("cell", row, 'mmStndSal', false);
    gr_results.setReadOnly("cell", row, 'basisSalHourCnt', false);
    gr_results.setReadOnly("cell", row, 'extdAllow', false);
    gr_results.setReadOnly("cell", row, 'extdAllowHourCnt', false);
    gr_results.setReadOnly("cell", row, 'offDayAllow', false);
    gr_results.setReadOnly("cell", row, 'offDayAllowHourCnt', false);
    gr_results.setReadOnly("cell", row, 'ngtAllow', false);
    gr_results.setReadOnly("cell", row, 'ngtAllowHourCnt', false);
    gr_results.setReadOnly("cell", row, 'holidaySal', false);
    gr_results.setReadOnly("cell", row, 'spcdaySal', false);
    gr_results.setReadOnly("cell", row, 'singleSal', false);
    gr_results.setReadOnly("cell", row, 'overwrkAllow', false);
    gr_results.setReadOnly("cell", row, 'bonusAllow', false);
    gr_results.setReadOnly("cell", row, 'trffcCost', false);
    gr_results.setReadOnly("cell", row, 'managerAllow', false);
    gr_results.setReadOnly("cell", row, 'chiefSal', false);
    gr_results.setReadOnly("cell", row, 'asistSal', false);
    gr_results.setReadOnly("cell", row, 'chiefWorkAllow', false);
    gr_results.setReadOnly("cell", row, 'asistWorkAllow', false);
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve(2);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.rowFlag = ""; // 초기화	
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
  /*
   else {
      if(e.responseJSON.resultDataSet[1] != null && e.responseJSON.resultDataSet[1].Msg != null && e.responseJSON.resultDataSet[1].Msg != "") {
          if(e.responseJSON.resultDataSet[1].Msg.substring(0,8) == "ZZ-E0001"){
              $c.win.alert("권역코드 내 중복된 요율이 있습니다.\n\n요율 구분과 적용시작일을 확인해주세요.");
          } else {
              $c.win.alert(e.responseJSON.resultDataSet[1].Msg);
          }
      }
  }
  */
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    if (scwin.headerCheck != 1) $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_addRow, btn_cancel]);

  //카운터 
  spa_cnt.setValue(rowCnt);
  //ds_search.UserStatus(1) = 1;
};
scwin.gr_results_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_Visibility(ds_results.getRowPosition());
  scwin.f_CheckEdit(rowIndex);
};
scwin.ds_results_onrowpositionchange = function (info) {
  //scwin.f_Visibility(ds_results.getRowPosition());
  //scwin.f_CheckEdit(ds_results.getRowPosition());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'권역코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_districtCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.districtCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_occptypeClsCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'',chooseOptionValue:'$blank',sortOption:'value'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협약일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_wageAgrmntDt',pickerType:'dynamic',style:'',ref:'data:dma_search.wageAgrmntDt',displayFormat:'yyyy/MM/dd',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_adptStDt',pickerType:'dynamic',style:'',ref:'data:dma_search.adptStDt',displayFormat:'yyyy/MM/dd',validateOnInput:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 요율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_results',grdDownOpts:'{"fileName":"상용직요율관리.xlsx","sheetName" : "상용직요율관리", "type":"4+8+16"}',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_results_onrowindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'권역코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'등급',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'구분',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'총급여',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'기본',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'연장',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'휴일',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column43',value:'야간',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'휴일수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'특휴수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'단독수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'초과수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'하역수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'능률수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'자격수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column21',value:'상여',displayMode:'label',colSpan:'4',sortable:'false',rowSpan:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column51',value:'운전<br/>보조',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column45',value:'직무수당',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column85',value:'업무수당',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',value:'적용시작일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'적용종료일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'노임협약일',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column122',value:'금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column121',value:'시수',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column120',value:'금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column119',value:'시수',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column118',value:'금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',value:'시수',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column116',value:'금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column115',value:'시수',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column107',displayMode:'label',value:'상여'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column106',displayMode:'label',value:'가정의달'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'체육단련',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'안전장구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column102',displayMode:'label',value:'소장'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column101',displayMode:'label',value:'반장'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column100',displayMode:'label',value:'사무장'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column99',displayMode:'label',value:'반장'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column98',displayMode:'label',value:'사무장'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'districtCd',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptGrd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'occptypeClsCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalAllow',inputType:'expression',width:'100',textAlign:'right',displayFormat:'#,###',expression:'Number(display("mmStndSal"))  + Number(display("extdAllow"))  + Number(display("ngtAllow"))  + Number(display("offDayAllow"))  + Number(display("cntrAllow"))  + Number(display("bonusAllow"))  + Number(display("trffcCost"))'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mmStndSal',inputType:'text',width:'90',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'basisSalHourCnt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'extdAllow',inputType:'text',width:'90',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'extdAllowHourCnt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDayAllow',inputType:'text',width:'90',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offDayAllowHourCnt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'ngtAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ngtAllowHourCnt',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'holidaySal',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spcdaySal',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'singleSal',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'overwrkAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stevedoreAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'efficiencyAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'qualificationAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'bonusAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bonusFamilyAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'physicalTrainAllow',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'safetyGearAllow',value:'',displayMode:'label',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'trffcCost',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'managerAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chiefSal',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'asistSal',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'chiefWorkAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'asistWorkAllow',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'adptStDt',displayMode:'label',mandatory:'true',dateValidCheck:'false',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'adptEndDt',displayMode:'label',mandatory:'true',displayFormat:'yyyy/MM/dd',dateValidCheck:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wageAgrmntDt',displayMode:'label',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'N',gridID:'gr_results',cancelFunction:'scwin.f_Cancel',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_cancel',rowAddFunction:'scwin.f_AddRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})