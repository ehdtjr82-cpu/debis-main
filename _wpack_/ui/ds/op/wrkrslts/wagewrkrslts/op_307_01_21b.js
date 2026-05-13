/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_21b.xml 66214 421d9b3d6c566aa218098478709b1ec7fe7f0188bcb63b552c10808cc3fc8b10 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_Condition',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clsCd',name:'구분',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adjmPatternCd',name:'정산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portDistrict',name:'항구권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionOrgCd',name:'지급처(노조)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerIncluYn',name:'하위포함',dataType:'number'}},{T:1,N:'w2:column',A:{id:'indvdlCreatYn',name:'개별생성',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rgnDistrict',name:'지역권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStDt',name:'실적일자 시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsEndDt',name:'실적일자 종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입매출품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveResult1',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_retrieveResult1_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'lunionOrgCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name3',id:'lunionOrgNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name4',id:'pchsClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name5',id:'pchsClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name6',id:'selpchItemNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name7',id:'totalWage'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name8',id:'vat'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name9',id:'secTableAmtStd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name10',id:'tax1'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name11',id:'tax2'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name12',id:'tax3'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name13',id:'minusAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name14',id:'realAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name15',id:'taxCrew'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name16',id:'totalCrew'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name17',id:'pchsCertiNo'}},{T:1,N:'w2:column',A:{id:'taxWage',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonTaxWage',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tax4',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxAmt',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveResult2',saveRemovedData:'true','ev:ondataload':'scwin.ds_retrieveResult2_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'selpchItemCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'selpchItemNm'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_rgnDistrict',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'code'}},{T:1,N:'w2:column',A:{dataType:'text',name:'name2',id:'name'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieve',encoding:'UTF-8',mediatype:'application/json',action:'/ds.op.wrkrslts.wagewrkrslts.RetrieveWagesPurchasePresentConditionCMD.do',ref:'data:json,[{"id":"ds_Condition","key":"IN_DS1"},{"id":"ds_retrieveResult1","key":"OUT_DS1"},{"id":"ds_retrieveResult2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_retrieveResult1","key":"OUT_DS1"},{"id":"ds_retrieveResult2","key":"OUT_DS2"}]'}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_saveWagesPurchaseAdmission',encoding:'UTF-8',mediatype:'application/json',ref:'data:json,[{"id":"ds_Condition","key":"IN_DS1"},{"action":"modified","id":"ds_retrieveResult1","key":"IN_DS2"}]',action:'/ds.fs.adjm.pchscerticoll.RegistWagesPurchaseAdmissionCMD.do','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_saveWagesPurchaseAdmission_cancel',encoding:'UTF-8',mediatype:'application/json',action:'/ds.fs.adjm.pchscerticoll.RegistWagesPurchaseAdmissionCancelCMD.do',ref:'data:json,[{"id":"ds_Condition","key":"IN_DS1"},{"action":"modified","id":"ds_retrieveResult1","key":"IN_DS2"}]','ev:submitdone':''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_rgnDistrict_combo',encoding:'UTF-8',mediatype:'application/json',target:'data:json,{"id":"ds_rgnDistrict","key":"GAUCE"}','ev:submitdone':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 화면 - Id: op_307_01_21b.jsp,v 1.52 2010/12/31 01:45:02 이대준 Exp 
// 설명 - 노임매입승인

scwin.date = $c.date.getServerDateTime($p);
scwin.stDt = $c.date.getDateAddMonthDirection($p, scwin.date, 0, "F");
scwin.endDt = $c.date.getDateAddMonthDirection($p, scwin.date, 0, "L");
scwin.frontMonth = $c.date.getDateAddMonthDirection($p, scwin.date, -1, "F");
scwin.frontDay = $c.date.getDateAddMonthDirection($p, scwin.date, -1, "L");
scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd");
scwin._curRow = -1;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP281",
    compID: "acb_adjmPatternCd",
    opt: {
      "range": "1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  const luxCodeOptions = [{
    method: "getLuxeComboData",
    param1: "WagesCreationPierPierInsideEBC",
    param2: "retrivePortDistrictCodeList",
    //param3: ["CMP"],
    compID: "acb_portDistrict"
  }];
  $c.data.setGauceUtil($p, luxCodeOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  scwin.f_SetDataHeader();
};
scwin.ondataload = async function () {
  $p.setTimeout(async function () {
    var portDistrict = acb_portDistrict.getValue();
    sbm_rgnDistrict_combo.action = "/cm.zz.RetrieveComboCMD.do?sysCd=WagesCreationPierPierInsideEBC&queryId=retriveAreaDistrictCodeList&param1=" + portDistrict;
    let e = await $c.sbm.execute($p, sbm_rgnDistrict_combo);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_rgnDistrict_combo_submitdone(e);
    }
    scwin.f_SetDefaultData();
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
scwin.f_changeRgnDistrict = async function () {
  var portDistrict = acb_portDistrict.getValue();
  sbm_rgnDistrict_combo.action = "/cm.zz.RetrieveComboCMD.do?sysCd=WagesCreationPierPierInsideEBC&queryId=retriveAreaDistrictCodeList&param1=" + portDistrict;
  await $c.sbm.execute($p, sbm_rgnDistrict_combo);
  let e = await $c.sbm.execute($p, sbm_rgnDistrict_combo);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_rgnDistrict_combo_submitdone(e);
    scwin.f_changeSearchDate();
  }
};
scwin.f_SetDataHeader = function () {
  ds_Condition.insertRow();
  ds_Condition.setRowPosition(0);
};
scwin.f_SetDefaultData = async function () {
  acb_clsCd.setValue("0");
  acb_adjmPatternCd.setValue("LA");
  ed_lunionOrgCd.setValue("");
  ed_lunionOrgNm.setValue("");
  ed_rsltsStDt.setValue(scwin.stDt);
  ed_rsltsEndDt.setValue(scwin.endDt);
  ed_wrkPlCd.setValue("");
  ed_wrkPlNm.setValue("");
  cbx_lowerIncluYn.setValue("");
  cbx_indvdlCreatYn.setValue("");
  acb_portDistrict.setValue("WDJ");
  await scwin.f_changeRgnDistrict();
  ed_rsltsStDt.setValue(scwin.stDt);
  ed_rsltsEndDt.setValue(scwin.endDt);
};

// 인천항일 경우와 인천항이 아닐경우 검색 날짜 셋팅
scwin.f_changeSearchDate = function () {
  var portDistrict = acb_portDistrict.getValue();
  ed_rsltsStDt.setValue(scwin.stDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + "01");
  ed_rsltsEndDt.setValue(scwin.stDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + scwin.frontDay.substring(6, 8));
};

// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  switch (disGubun) {
    case 1:
      // 지급처 팝업
      udc_lunionOrgCd.setSelectId("wageLunionOrgCdLevel12");
      udc_lunionOrgCd.cfCommonPopUp(scwin.udc_lunionOrgCd_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, 500, null, null, null);
      break;
    case 2:
      // 작업장 팝업
      udc_wrkPlCd.setSelectId("retrieveWrkPlInfo");
      udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_lunionOrgCd, ed_rsltsStDt, ed_rsltsEndDt]);
  if (!ret) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ed_rsltsStDt.getValue(), ed_rsltsEndDt.getValue()))) {
    if (await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.")) {
      ed_rsltsStDt.focus();
      return;
    }
    ;
  }
  acb_selpchItemCd.setValue("");
  let e = await $c.sbm.execute($p, sbm_retrieve);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieve_submitdone(e);
  }
};

// 신규매입승인
scwin.f_RegistWagesPurchaseAdmission = async function () {
  let valiChk = await $c.gus.cfValidate($p, [ed_lunionOrgCd, ed_rsltsStDt, ed_rsltsEndDt]);
  if (!valiChk) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ed_rsltsStDt.getValue(), ed_rsltsEndDt.getValue()))) {
    if (await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.")) {
      ed_rsltsStDt.focus();
      return;
    }
    ;
  }
  if (ds_retrieveResult1.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  if (ds_retrieveResult1.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }

  // 하위포함이고 개별생성이 아니면 매입승인 불가
  if (cbx_lowerIncluYn.getValue() == "1" && cbx_indvdlCreatYn.getValue() != "1") {
    await $c.gus.cfAlertMsg($p, "하위포함이고 개별생성이 아니면 매입승인할 수 없습니다.");
    return;
  }
  let saveChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (saveChk) {
    // 저장하시겠습니까?
    let e = await $c.sbm.execute($p, sbm_saveWagesPurchaseAdmission);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_saveWagesPurchaseAdmission_submitdone(e);
    }
  }
};

// 매입승인취소
scwin.f_RegistWagesPurchaseAdmissionCancel = async function () {
  var cnt = 0;
  for (var i = 0; i < ds_retrieveResult1.getRowCount(); i++) {
    if (ds_retrieveResult1.getCellData(i, "chk") == "T") {
      cnt++;
    }
  }
  if (cnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  } else {
    // 부산지사의 경우 노임생성 시 노조비 거래명세서가 동시에 분리되어 생성됨
    // 승인 취소시에 노임거래명세서와 노조비 거래명세서가 한번에 승인취소되어야 함
    if (acb_adjmPatternCd.getValue() == "LA" && acb_portDistrict.getValue() == "WPS") {
      var lunionCd = "";
      for (var i = 0; i < ds_retrieveResult1.getRowCount(); i++) {
        if (ds_retrieveResult1.getCellData(i, "chk") == "T") {
          lunionCd = ds_retrieveResult1.getCellData(i, "lunionOrgCd");
          for (var j = 0; j < ds_retrieveResult1.getRowCount(); j++) {
            if (ds_retrieveResult1.getCellData(j, "lunionOrgCd") == lunionCd && ds_retrieveResult1.getCellData(j, "pchsCertiNo") != "") {
              ds_retrieveResult1.setCellData(j, "chk", "T");
            }
          }
        }
      }
    }
  }

  // 거래명세서번호가 있는 경우 매입승인취소 가능
  for (var i = 0; i < ds_retrieveResult1.getRowCount(); i++) {
    if (ds_retrieveResult1.getCellData(i, "chk") == "T" && ds_retrieveResult1.getCellData(i, "pchsCertiNo") == "") {
      if (await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이타는 미승인된 건입니다.")) {
        ds_retrieveResult1.setRowPosition(i);
        return;
      }
      ;
    }
  }
  let delChk = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (delChk) {
    // 삭제하시겠습니까?
    let e = await $c.sbm.execute($p, sbm_saveWagesPurchaseAdmission_cancel);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_saveWagesPurchaseAdmission_cancel_submitdone(e);
    }
  }
};

// 엑셀 다운로드
scwin.f_RunExcel = async function () {
  var countA = ds_retrieveResult1.getRowCount();
  if (!(countA > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  const options = {
    fileName: "노임집계표" + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "노임집계표",
    type: 4 + 8 + 16,
    startRowIndex: 2
  };
  const infoArr = [{
    colIndex: 0,
    rowSpan: 1,
    colSpan: 15,
    text: "노임집계표",
    textAlign: "center",
    fontSize: 12,
    fontName: "돋움체",
    drawBorder: false
  }];
  let chk = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (chk) {
    $c.data.downloadGridViewExcel($p, gr_retrieveResult1, options, infoArr);
  }
};

// 임금수령증인쇄순서설정
scwin.f_SetStaffSequence = function (e) {
  if (ds_retrieveResult1.getRowCount() > 0) {
    if (ds_retrieveResult1.getCellData(ds_retrieveResult1.getRowPosition(), "lunionOrgCd") != "") {
      var lunionOrgCd = ds_retrieveResult1.getCellData(ds_retrieveResult1.getRowPosition(), "lunionOrgCd");
      var param = {};
      param.lunionOrgCd = lunionOrgCd;
      var opts = {
        id: "smpPop",
        popupName: "임금수령증인쇄순서설정",
        modal: true,
        type: "browserPopup",
        width: 540,
        height: 650,
        popupTitle: "임금수령증 인원 인쇄 순서 설정"
      };
      $c.win.openPopup($p, "/ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_21p.xml", opts, param);
    }
  } else {
    $c.gus.cfAlertMsg($p, "조회 먼저 하십시요.");
    return;
  }
};

// 노임집계표 발행
scwin.f_OzReport = async function () {
  var lowerIncluYn = 0;
  var indvdlCreatYn = 0;
  if (cbx_lowerIncluYn.getValue() == "1") {
    lowerIncluYn = 1;
  }
  if (cbx_indvdlCreatYn.getValue() == "1") {
    indvdlCreatYn = 1;
  }
  var row = ds_retrieveResult1.getRowPosition();
  var reportName = "";
  if (acb_rgnDistrict.getValue() == "WPA") {
    reportName = "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_WPA.ozr";
  } else {
    reportName = "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21.ozr";
  }
  const data = {
    reportName: reportName,
    odiName: "op_307_01_21",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      adjmPatternCd: acb_adjmPatternCd.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      lowerIncluYn: lowerIncluYn,
      indvdlCreatYn: indvdlCreatYn,
      rgnDistrict: acb_rgnDistrict.getValue(),
      wrkPlCd: ed_wrkPlCd.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      lobranCd: scwin.lobranCd,
      pchsClntNo: ds_retrieveResult1.getCellData(row, "pchsClntNo")
    },
    viewerParam: {
      mode: "silent",
      zoom: 100,
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 임금수령증 일괄발행(인천외)
scwin.f_OzReport04_1 = async function () {
  let chk = await $c.win.confirm($p, "임금수령증을 일괄 출력하시겠습니까?");
  if (chk) {
    var lowerIncluYn = 0;
    var indvdlCreatYn = 0;
    if (cbx_lowerIncluYn.getValue() == "1") {
      lowerIncluYn = 1;
    }
    if (cbx_indvdlCreatYn.getValue() == "1") {
      indvdlCreatYn = 1;
    }

    /* 조회된 노임 전체 출력 */
    for (var i = 0; i < ds_retrieveResult1.getRowCount(); i++) {
      if (ds_retrieveResult1.getCellData(i, "chk") == "T") {
        var reportName = "";
        if (acb_rgnDistrict.getValue() == "WPA") {
          reportName = "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_4_WPA.ozr";
        } else {
          reportName = "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_4.ozr";
        }
        const data = {
          reportName: reportName,
          odiName: "op_307_01_21_4",
          odiParam: {
            clsCd: acb_clsCd.getValue(),
            adjmPatternCd: acb_adjmPatternCd.getValue(),
            portDistrict: acb_portDistrict.getValue(),
            lunionOrgCd: ed_lunionOrgCd.getValue(),
            lowerIncluYn: lowerIncluYn,
            indvdlCreatYn: indvdlCreatYn,
            rgnDistrict: acb_rgnDistrict.getValue(),
            wrkPlCd: ed_wrkPlCd.getValue(),
            rsltsStDt: ed_rsltsStDt.getValue(),
            rsltsEndDt: ed_rsltsEndDt.getValue(),
            lobranCd: scwin.lobranCd,
            orgLunionOrgCd: ds_retrieveResult1.getCellData(i, "lunionOrgCd"),
            lunionOrgNm: ed_lunionOrgNm.getValue()
          },
          viewerParam: {
            mode: "silent",
            zoom: 100,
            useprogressbar: false
          },
          formParam: {}
        };
        await scwin.openPopup(data);
      }
    }
  }
};

// 국민연금 발생내역서 발행
scwin.f_OzReport02 = async function () {
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_2.ozr",
    odiName: "op_307_01_21_2",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      rgnDistrict: acb_rgnDistrict.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEdDt: ed_rsltsEndDt.getValue()
    },
    viewerParam: {
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 반원별 노임대장 발행(인천)
scwin.f_OzReport01 = async function () {
  var lowerIncluYn = 0;
  var indvdlCreatYn = 0;
  if (cbx_lowerIncluYn.getValue() == "1") {
    lowerIncluYn = 1;
  }
  if (cbx_indvdlCreatYn.getValue() == "1") {
    indvdlCreatYn = 1;
  }
  var row = ds_retrieveResult1.getRowPosition();
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_1.ozr",
    odiName: "op_307_01_21_1",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      adjmPatternCd: acb_adjmPatternCd.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      lowerIncluYn: lowerIncluYn,
      indvdlCreatYn: indvdlCreatYn,
      rgnDistrict: acb_rgnDistrict.getValue(),
      wrkPlCd: ed_wrkPlCd.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      lobranCd: scwin.lobranCd,
      partyLunionOrgCd: ds_retrieveResult1.getCellData(row, "lunionOrgCd"),
      pchsClntNo: ds_retrieveResult1.getCellData(row, "pchsClntNo")
    },
    viewerParam: {
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 임금수령증 발행(인천외)
scwin.f_OzReport04 = async function () {
  var lowerIncluYn = 0;
  var indvdlCreatYn = 0;
  if (cbx_lowerIncluYn.getValue() == "1") {
    lowerIncluYn = 1;
  }
  if (cbx_indvdlCreatYn.getValue() == "1") {
    indvdlCreatYn = 1;
  }
  var row = ds_retrieveResult1.getRowPosition();
  var reportName = "";
  if (acb_rgnDistrict.getValue() == "WPA") {
    reportName = "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_4_WPA.ozr";
  } else {
    reportName = "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_4.ozr";
  }
  const data = {
    reportName: reportName,
    odiName: "op_307_01_21_4",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      adjmPatternCd: acb_adjmPatternCd.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      lowerIncluYn: lowerIncluYn,
      indvdlCreatYn: indvdlCreatYn,
      rgnDistrict: acb_rgnDistrict.getValue(),
      wrkPlCd: ed_wrkPlCd.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      lobranCd: scwin.lobranCd,
      orgLunionOrgCd: ds_retrieveResult1.getCellData(row, "lunionOrgCd"),
      lunionOrgNm: ed_lunionOrgNm.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 건강보험료 발생통보서 발행
scwin.f_OzReport03 = async function () {
  var rsltsDt = ed_rsltsStDt.getValue();
  if (rsltsDt.length <= 0) {
    await $c.gus.cfAlertMsg($p, "조회 년월을 입력 하세요.");
    return;
  }
  rsltsDt = rsltsDt.substring(0, 6);
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_3.ozr",
    odiName: "op_307_01_21_3",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      rsltsDt: rsltsDt,
      rgnDistrict: acb_rgnDistrict.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 월노임지급내역서(상용,일자별)
scwin.f_OzReport05 = async function () {
  if (acb_rgnDistrict.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "지역 권역을 입력하세요.");
    return;
  }
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "작업장을 입력하세요.");
    return;
  }
  if (ed_wrkPlNm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "작업장 이름이 없습니다.");
    return;
  }
  if (ed_rsltsStDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "조회 시작일자를 입력 하세요.");
    return;
  }
  if (ed_rsltsEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "조회 종료 일자를 입력하세요.");
    return;
  }
  if (ed_rsltsEndDt.getValue() < ed_rsltsStDt.getValue()) {
    await $c.gus.cfAlertMsg($p, "조회 종료 일자는 조회 시작일자 이후 여야 합니다.");
    return;
  }
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_5.ozr",
    odiName: "op_307_01_21_5",
    odiParam: {
      rgnDistrict: acb_rgnDistrict.getValue(),
      wrkPlCd: ed_wrkPlCd.getValue(),
      wrkPlNm: ed_wrkPlNm.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 월노임지급내역서(상용,인원별)
scwin.f_OzReport06 = async function () {
  if (acb_rgnDistrict.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "지역 권역을 입력하세요.");
    return;
  }
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "작업장을 입력하세요.");
    return;
  }
  if (ed_wrkPlNm.value == "") {
    await $c.gus.cfAlertMsg($p, "작업장 이름이 없습니다.");
    return;
  }
  if (ed_rsltsStDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "조회 시작일자를 입력 하세요.");
    return;
  }
  if (ed_rsltsEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "조회 종료 일자를 입력하세요.");
    return;
  }
  if (ed_rsltsEndDt.getValue() < ed_rsltsStDt.getValue()) {
    await $c.gus.cfAlertMsg($p, "조회 종료 일자는 조회 시작일자 이후 여야 합니다.");
    return;
  }
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_6.ozr",
    odiName: "op_307_01_21_6",
    odiParam: {
      rgnDistrict: acb_rgnDistrict.getValue(),
      wrkPlCd: ed_wrkPlCd.getValue(),
      wrkPlNm: ed_wrkPlNm.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 월노임지급내역서(감만복후비)
scwin.f_OzReport07 = async function () {
  var adjmpattern = acb_adjmPatternCd.getValue();
  if (adjmpattern != 'LC' && adjmpattern != 'LD') {
    // LC^감만CFS(OT),LD^감만CFS(복후비) 	  
    await $c.gus.cfAlertMsg($p, "정산유형이 감만CFS 복후비가 아닙니다.");
    return;
  }
  if (acb_rgnDistrict.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "지역 권역을 입력하세요.");
    return;
  }
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "작업장을 입력하세요.");
    return;
  }
  if (ed_rsltsStDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "조회 시작일자를 입력 하세요.");
    return;
  }
  if (ed_rsltsEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "조회 종료 일자를 입력하세요.");
    return;
  }
  if (ed_rsltsEndDt.getValue() < ed_rsltsStDt.getValue()) {
    await $c.gus.cfAlertMsg($p, "조회 종료 일자는 조회 시작일자 이후 여야 합니다.");
    return;
  }
  var stDt = ed_rsltsStDt.getValue();
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_7.ozr",
    odiName: "op_307_01_21_7",
    odiParam: {
      rgnDistrict: acb_rgnDistrict.getValue(),
      // 지역권역 
      rsltsStDt: ed_rsltsStDt.getValue(),
      // 실적조회 시작일자 
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      // 실적조회 종료일자 	
      adjmPatternCd: acb_adjmPatternCd.getValue(),
      // 정산유형
      wrkPlCd: ed_wrkPlCd.getValue(),
      // 작업장
      wrkPlNm: ed_wrkPlNm.getValue(),
      // 작업장명
      yyyymm: stDt.substring(0, 6),
      // 기준년월  
      portDistrict: acb_portDistrict.getValue() // 항구권역
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 퇴직충당금 내역서(타창고)
scwin.f_OzReport08 = async function () {
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_8.ozr",
    odiName: "op_307_01_21_8",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      rgnDistrict: acb_rgnDistrict.getValue(),
      // 지역권역 
      portDistrict: acb_portDistrict.getValue(),
      // 항구권역
      rsltsStDt: ed_rsltsStDt.getValue(),
      // 실적조회 시작일자 
      rsltsEndDt: ed_rsltsEndDt.getValue() // 실적조회 종료일자 	
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 건강보험료 발생통보서(부산)
scwin.f_OzReport03_1 = async function () {
  var rsltsDt = ed_rsltsStDt.getValue();
  if (rsltsDt.length <= 0) {
    await $c.gus.cfAlertMsg($p, "조회 년월을 입력 하세요.");
    return;
  }
  rsltsDt = rsltsDt.substring(0, 6);
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_3_1.ozr",
    odiName: "op_307_01_21_3",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      // 항구권역
      rsltsDt: rsltsDt,
      rgnDistrict: acb_rgnDistrict.getValue() // 지역권역 
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 임금수령증 발행(부산)
scwin.f_OzReport04_02 = async function () {
  var lowerIncluYn = 0;
  var indvdlCreatYn = 0;
  if (cbx_lowerIncluYn.getValue() == "1") {
    lowerIncluYn = 1;
  }
  if (cbx_indvdlCreatYn.getValue() == "1") {
    indvdlCreatYn = 1;
  }
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_4_02.ozr",
    odiName: "op_307_01_21_4",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      adjmPatternCd: acb_adjmPatternCd.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      lowerIncluYn: lowerIncluYn,
      indvdlCreatYn: indvdlCreatYn,
      rgnDistrict: acb_rgnDistrict.getValue(),
      wrkPlCd: ed_wrkPlCd.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      lobranCd: scwin.lobranCd,
      orgLunionOrgCd: ds_retrieveResult1.getCellData(ds_retrieveResult1.getRowPosition(), "lunionOrgCd"),
      lunionOrgNm: ed_lunionOrgNm.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 노임확인서(울산)
scwin.f_OzReport09 = async function () {
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_9.ozr",
    odiName: "op_307_01_21_9",
    odiParam: {
      clsCd: acb_clsCd.getValue(),
      rgnDistrict: acb_rgnDistrict.getValue(),
      portDistrict: acb_portDistrict.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      adjmPatternCd: acb_adjmPatternCd.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// [본선]복후비지불명세표(울산)
scwin.f_OzReport10_1 = async function () {
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_10_1.ozr",
    odiName: "op_307_01_21_10_1",
    odiParam: {
      rgnDistrict: acb_rgnDistrict.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      lobranCd: scwin.lobranCd
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// [육상]복후비지불명세표(울산)
scwin.f_OzReport10_2 = async function () {
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_10_2.ozr",
    odiName: "op_307_01_21_10_2",
    odiParam: {
      rgnDistrict: acb_rgnDistrict.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      lobranCd: scwin.lobranCd
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 국민연금 발생내역서(울산)
scwin.f_OzReport11 = async function () {
  const data = {
    reportName: "/ds/op/wrkrslts/wagewrkrslts/op_307_01_21_11.ozr",
    odiName: "op_307_01_21_11",
    odiParam: {
      rgnDistrict: acb_rgnDistrict.getValue(),
      rsltsStDt: ed_rsltsStDt.getValue(),
      rsltsEndDt: ed_rsltsEndDt.getValue(),
      lunionOrgCd: ed_lunionOrgCd.getValue(),
      clsCd: acb_clsCd.getValue(),
      portDistrict: acb_portDistrict.getValue()
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 임금대장(동해)
scwin.f_OzReport12 = async function () {
  if (ds_retrieveResult1.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "출력 대상이 없습니다.");
    return;
  }
  if (acb_portDistrict.getValue() != "WTH" || acb_rgnDistrict.getValue() != "WTA") {
    await $c.gus.cfAlertMsg($p, "동해지사의 임금대장만 출력이 가능합니다.");
    return;
  }
  var lunionOrgCd = "";
  var lunionOrgNm = "";
  var wrkMonth = ed_rsltsStDt.getValue();
  var wrkMonth2 = ed_rsltsStDt.getValue();
  var wrkMonth3 = "";
  wrkMonth2 = wrkMonth.substr(0, 4) + "년 " + wrkMonth.substr(4, 2) + "월";
  wrkMonth3 = wrkMonth.substr(2, 2) + "년 " + wrkMonth.substr(4, 2) + "월";
  if (ds_retrieveResult1.getRowPosition() == 0) {
    const data = {
      reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_28_1.ozr",
      odiName: "op_307_01_28_1",
      odiParam: {
        WRK_MONTH: wrkMonth.substr(0, 6),
        WRK_MONTH3: wrkMonth3
      },
      viewerParam: {
        mode: "silent",
        useprogressbar: false
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
  var i = ds_retrieveResult1.getRowPosition();
  lunionOrgCd = ds_retrieveResult1.getCellData(i, "lunionOrgCd");
  lunionOrgNm = ds_retrieveResult1.getCellData(i, "lunionOrgNm");
  const data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_28.ozr",
    odiName: "op_307_01_28",
    odiParam: {
      LUNION_ORG_CD: ds_retrieveResult1.getCellData(i, "lunionOrgCd"),
      LUNION_ORG_NM: ds_retrieveResult1.getCellData(i, "lunionOrgNm"),
      WRK_MONTH: wrkMonth.substr(0, 6),
      WRK_MONTH2: wrkMonth2
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};

// 제세공과금(동해)
scwin.f_OzReport13 = async function () {
  if (ds_retrieveResult1.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "출력대상이 없습니다.");
    return;
  }
  if (acb_portDistrict.getValue() != "WTH" || acb_rgnDistrict.getValue() != "WTA") {
    await $c.gus.cfAlertMsg($p, "동해지사의 제세공과금 내역만 출력이 가능합니다.");
    return;
  }
  var wrkMonth = "";
  var wrkMonth1 = ed_rsltsStDt.getValue();
  var wrkMonth2 = "";
  var wrkMontj3 = "";
  var odrNo1 = "FL4" + wrkMonth1.substr(2, 4);
  var odrNo2 = "FL1" + wrkMonth1.substr(2, 4);
  wrkMonth1 = wrkMonth1.substr(0, 6);
  wrkMonth2 = wrkMonth1.substr(0, 4) + "년 " + wrkMonth1.substr(4, 2) + "월";
  wrkMonth3 = "(" + wrkMonth1.substr(2, 2) + "년 " + wrkMonth1.substr(4, 2) + "월" + ")";
  if (wrkMonth1.substr(4, 2) == "12") {
    wrkMonth = "1월 20일";
  } else {
    wrkMonth = Number(wrkMonth1.substr(4, 2)) + 1 + "월 20일";
  }
  const data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_28_2.ozr",
    odiName: "op_307_01_28_2",
    odiParam: {
      WRK_MONTH: wrkMonth,
      WRK_MONTH1: wrkMonth1,
      WRK_MONTH2: wrkMonth2,
      WRK_MONTH3: wrkMonth3,
      ODR_NO1: odrNo1,
      ODR_NO2: odrNo2
    },
    viewerParam: {
      mode: "silent",
      useprogressbar: false
    },
    formParam: {}
  };
  await scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

// 금액합계 계산
scwin.f_CalcSumAmt = function () {
  var sumWages = 0;
  var vat = 0;
  for (var i = 0; i < ds_retrieveResult1.getRowCount(); i++) {
    if (ds_retrieveResult1.getCellData(i, "chk") == "T") {
      sumWages += Number(ds_retrieveResult1.getCellData(i, "totalWage"));
      vat += Number(ds_retrieveResult1.getCellData(i, "vat"));
    }
  }
  totalWages.setValue('노임 : ' + $c.gus.cfInsertComma($p, sumWages));
  totalTaxes.setValue('부가세 : ' + $c.gus.cfInsertComma($p, vat));
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 지급처(노조)
scwin.udc_lunionOrgCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lunionOrgCd, ed_lunionOrgNm);
};

// 작업장
scwin.udc_wrkPlCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
};

//-------------------------------------------------------------------------
// Event onselected
//-------------------------------------------------------------------------
scwin.acb_portDistrict_onselected = function () {
  scwin.f_changeRgnDistrict();
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 지급처(노조) 클릭이벤트
scwin.udc_lunionOrgCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lunionOrgCd.getValue(), ed_lunionOrgNm.getValue(), 'F', 'T');
};

// 작업장 클릭이벤트
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};

// 조회 클릭 이벤트
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 초기화 클릭 이벤트
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_SetDefaultData();
};

// 신규매입승인 클릭 이벤트
scwin.btn_Save_onclick = function (e) {
  scwin.f_RegistWagesPurchaseAdmission();
};

// 매입승인취소 클릭 이벤트
scwin.btn_Delete_onclick = function (e) {
  scwin.f_RegistWagesPurchaseAdmissionCancel();
};

// 노임집계표 발행 클릭 이벤트
scwin.btn_report1_onclick = function (e) {
  scwin.f_OzReport();
};

// 임금수령증 일괄발행(인천외) 클릭 이벤트
scwin.btn_report2_onclick = function (e) {
  scwin.f_OzReport04_1();
};

// 국민연금 발생내역서 발행 클릭 이벤트
scwin.btn_report3_onclick = function (e) {
  scwin.f_OzReport02();
};

// 반원별 노임대장 발행(인천) 클릭 이벤트
scwin.btn_report4_onclick = function (e) {
  scwin.f_OzReport01();
};

// 임금수령증 발행(인천외) 클릭 이벤트
scwin.btn_report5_onclick = function (e) {
  scwin.f_OzReport04();
};

// 건강보험료 발생통보서 발행 클릭 이벤트
scwin.btn_report6_onclick = function (e) {
  scwin.f_OzReport03();
};

// 월노임지급내역서(상용,일자별) 클릭 이벤트
scwin.btn_report7_onclick = function (e) {
  scwin.f_OzReport05();
};

// 월노임지급내역서(상용,인원별) 클릭 이벤트
scwin.btn_report8_onclick = function (e) {
  scwin.f_OzReport06();
};

// 월노임지급내역서(감만복후비) 클릭 이벤트
scwin.btn_report9_onclick = function (e) {
  scwin.f_OzReport07();
};

// 퇴직충당금 내역서(타창고) 클릭 이벤트
scwin.btn_report10_onclick = function (e) {
  scwin.f_OzReport08();
};

// 건강보험료 발생통보서(부산) 클릭 이벤트
scwin.btn_report11_onclick = function (e) {
  scwin.f_OzReport03_1();
};

// 임금수령증 발행(부산) 클릭 이벤트
scwin.btn_report12_onclick = function (e) {
  scwin.f_OzReport04_02();
};

// 노임확인서(울산) 클릭 이벤트
scwin.btn_report13_onclick = function (e) {
  scwin.f_OzReport09();
};

// [본선]복후비지불명세표(울산) 클릭 이벤트
scwin.btn_report14_onclick = function (e) {
  scwin.f_OzReport10_1();
};

// [육상]복후비지불명세표(울산) 클릭 이벤트
scwin.btn_report15_onclick = function (e) {
  scwin.f_OzReport10_2();
};

// 국민연금 발생내역서(울산) 클릭 이벤트
scwin.btn_report16_onclick = function (e) {
  scwin.f_OzReport11();
};

// 임금수령증인쇄순서설정 클릭 이벤트
scwin.btn_report17_onclick = function (e) {
  scwin.f_SetStaffSequence();
};

// 임금대장(동해) 클릭 이벤트
scwin.btn_report18_onclick = function (e) {
  scwin.f_OzReport12();
};

// 제세공과금(동해) 클릭 이벤트
scwin.btn_report19_onclick = function (e) {
  scwin.f_OzReport13();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 지급처(노조) 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_lunionOrgCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lunionOrgCd, ed_lunionOrgNm, 1);
};

// 지급처(노조) 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_lunionOrgCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lunionOrgNm, ed_lunionOrgCd, 1, false);
};

// 작업장 코드 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 2);
};

// 작업장 명 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_wrkPlCd_onblurNameEvent = function (e) {
  if ($c.util.isEmpty($p, ed_wrkPlNm.getValue())) {
    ed_wrkPlCd.setValue("");
    return;
  }
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 2, false);
};

//-------------------------------------------------------------------------
// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_rgnDistrict_combo_submitdone = function (e) {
  if (ds_rgnDistrict.getRowCount() > 0) {
    acb_rgnDistrict.setSelectedIndex(0);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  totalRows.setValue(ds_retrieveResult1.getRowCount());
  if (ds_retrieveResult1.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "조회된 데이타가 없습니다.");
    return;
  }
  gr_retrieveResult1.setFocusedCell(0, 0);
};
scwin.sbm_saveWagesPurchaseAdmission_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    // gr_retrieveResult1.setHeaderValue("chkHead", 0);
    scwin.f_Retrieve();
  }
};
scwin.sbm_saveWagesPurchaseAdmission_cancel_submitdone = async function (e) {
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_001)) {
    //    gr_retrieveResult1.setHeaderValue("chkHead", 0);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// Event onchange
//-------------------------------------------------------------------------
scwin.acb_selpchItemCd_onviewchange = async function (info) {
  const e = await $c.sbm.execute($p, sbm_retrieve);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_retrieve_submitdone(e);
  }
};
scwin.ds_retrieveResult2_ondataload = function () {
  if (ds_retrieveResult2.getRowCount() > 0) {
    acb_selpchItemCd.setPosition(-1);
  }
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_retrieveResult1_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    scwin.f_CalcSumAmt();
  }
};
scwin.gr_retrieveResult1_onheaderclick = function (headerId) {
  if (headerId == "chkHead") {
    gr_retrieveResult1.setFocusedCell(scwin._curRow, 0);

    /*  var bCheck = gr_retrieveResult1.getHeaderValue("chkHead");
      if (bCheck == "1") {
          for (var i = 0; i < ds_retrieveResult1.getRowCount(); i++) {
              ds_retrieveResult1.setCellData(i, "chk", "T");
          }
      } else {
          for (var i = 0; i < ds_retrieveResult1.getRowCount(); i++) {
              ds_retrieveResult1.setCellData(i, "chk", "F");
          }
      } */
    scwin.f_CalcSumAmt();
  }
};
scwin.ds_retrieveResult1_onrowpositionchange = function (info) {
  if ($c.util.isEmpty($p, info.newRowIndex)) {
    scwin._curRow = info.oldRowIndex;
    return;
  }
  scwin._curRow = info.newRowIndex;
};
scwin.acb_selpchItemCd_onviewchange = function (info) {};
scwin.udc_lunionOrgCd_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_lunionOrgNm.getValue())) {
    ed_lunionOrgCd.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_clsCd',search:'start',style:'width: 170px;',submenuSize:'auto',objType:'Data',mandatory:'true',title:'구분',allOption:'',chooseOption:'',ref:'data:ds_Condition.clsCd',validExp:'구분:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일반'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'소급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산유형',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_adjmPatternCd',search:'start',style:'width: 230px;',submenuSize:'auto',title:'정산유형',mandatory:'true',objType:'Data',ref:'data:ds_Condition.adjmPatternCd',validExp:'정산유형:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항구권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select','ev:onselected':'scwin.acb_portDistrict_onselected',id:'acb_portDistrict',mandatory:'true',objType:'data',ref:'data:ds_Condition.portDistrict',search:'start',style:'width: 140px;',submenuSize:'auto',title:'항구권역',validExp:'점소:yes'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급처(노조)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_lunionOrgCd',code:'lunionOrgCd',codeId:'ed_lunionOrgCd','ev:onblurCodeEvent':'scwin.udc_lunionOrgCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_lunionOrgCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_lunionOrgCd_onclickEvent',id:'udc_lunionOrgCd',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'6',nameId:'ed_lunionOrgNm',objTypeCode:'Data',objTypeName:'data',popupID:'',refDataCollection:'ds_Condition',style:'',validExpCode:'지급처(노조):yes',validTitle:'지급처(노조)','ev:onviewchangeNameEvent':'scwin.udc_lunionOrgCd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지역권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_rgnDistrict',search:'start',style:'width: 170px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_Condition.rgnDistrict',mandatory:'true',validExp:'지역권역:yes',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_rgnDistrict'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPlCd',btnId:'btn_wrkPlCd',validTitle:'작업장',validExpCode:'작업장:yes',UpperFlagCode:'1',code:'wrkPlCd',refDataCollection:'ds_Condition','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_wrkPlCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',skipOnBlurNameValueEmpty:'N',maxlengthCode:'5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_Condition',refEdDt:'rsltsEndDt',refStDt:'rsltsStDt',style:'',edFromId:'ed_rsltsStDt',edToId:'ed_rsltsEndDt',mandatoryFrom:'true',mandatoryTo:'true',validExp:'실적시작일자:yes',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lowerIncluYn',ref:'data:ds_Condition.lowerIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위포함 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_indvdlCreatYn',ref:'data:ds_Condition.indvdlCreatYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개별생성 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'노임집계표',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'지급항목 ',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 120px;',id:'acb_selpchItemCd',class:'',allOption:'',chooseOption:'',ref:'data:ds_Condition.selpchItemCd',selectedData:'false','ev:onviewchange':'scwin.acb_selpchItemCd_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_retrieveResult2'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_retrieveResult1',gridDownFn:'scwin.f_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveResult1',id:'gr_retrieveResult1',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'1','ev:onheaderclick':'scwin.gr_retrieveResult1_onheaderclick','ev:oncellclick':'scwin.gr_retrieveResult1_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkHead',inputType:'checkbox',width:'30',rowSpan:'2',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'지급처(노조)',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매입거래처',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'지급<br/>항목',width:'180',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'노임<br/>총액',width:'120',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'부가세',width:'120',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'과세<br/>표준액',width:'120',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'갑근세',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',value:'주민세',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'조합비',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',value:'차인<br/>지급액',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'실<br/>지급액',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'거래명세서<br/>번호',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'반코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'반회',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'30',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgCd',inputType:'text',value:'',width:'120',readOnly:'true',imageWidth:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgNm',inputType:'text',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',value:'',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'180',value:'',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalWage',inputType:'text',width:'120',value:'',displayFormat:'#,###',readOnly:'true',textAlign:'right',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',width:'120',value:'',textAlign:'right',displayFormat:'#,###',readOnly:'true',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'secTableAmtStd',inputType:'text',width:'120',value:'',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'tax1',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'tax2',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'tax3',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'minusAmt',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realAmt',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsCertiNo',displayMode:'label',value:'',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column91',value:'',displayMode:'label',displayFormat:'#,###',expression:'sum(\'totalWage\')',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'vat\')',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'secTableAmtStd\')',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'tax1\')',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'tax2\')',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'tax3\')',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'minusAmt\')',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'realAmt\')',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'tac',style:'width: 100%;'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalWages',label:'',class:'mr8'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalTaxes',label:'',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_report1',type:'button',class:'btn','ev:onclick':'scwin.btn_report1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'노임집계표 발행'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_report2',type:'button',class:'btn','ev:onclick':'scwin.btn_report2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임금수령증 일괄발행(인천외)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report3',style:'',type:'button','ev:onclick':'scwin.btn_report3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국민연금 발생내역서 발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report4',style:'',type:'button','ev:onclick':'scwin.btn_report4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반원별 노임대장 발행(인천)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report5',style:'',type:'button','ev:onclick':'scwin.btn_report5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임금수령증 발행(인천외)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report6',style:'',type:'button','ev:onclick':'scwin.btn_report6_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'건강보험료 발생통보서 발행'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report7',style:'',type:'button','ev:onclick':'scwin.btn_report7_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'월노임지급내역서(상용,일자별)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report8',style:'',type:'button','ev:onclick':'scwin.btn_report8_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'월노임지급내역서(상용,인원별)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report9',style:'',type:'button','ev:onclick':'scwin.btn_report9_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'월노임지급내역서(감만복후비)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report10',style:'',type:'button','ev:onclick':'scwin.btn_report10_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직충당금 내역서(타창고)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report11',style:'',type:'button','ev:onclick':'scwin.btn_report11_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'건강보험료 발생통보서(부산)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report12',style:'',type:'button','ev:onclick':'scwin.btn_report12_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임금수령증 발행(부산)'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report13',style:'',type:'button','ev:onclick':'scwin.btn_report13_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'노임확인서(울산)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report14',style:'',type:'button','ev:onclick':'scwin.btn_report14_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[본선]복후비지불명세표(울산)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report15',style:'',type:'button','ev:onclick':'scwin.btn_report15_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[육상]복후비지불명세표(울산)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report16',style:'',type:'button','ev:onclick':'scwin.btn_report16_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국민연금 발생내역서(울산)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report17',style:'',type:'button','ev:onclick':'scwin.btn_report17_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임금수령증인쇄순서설정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report18',style:'',type:'button','ev:onclick':'scwin.btn_report18_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임금대장(동해)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_report19',style:'',type:'button','ev:onclick':'scwin.btn_report19_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제세공과금(동해)'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:'flex-wrap: nowrap;'},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입승인취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규매입승인'}]}]}]}]}]}]}]}]}]})