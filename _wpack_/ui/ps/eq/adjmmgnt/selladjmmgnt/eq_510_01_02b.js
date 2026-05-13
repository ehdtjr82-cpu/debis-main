/*amd /ui/ps/eq/adjmmgnt/selladjmmgnt/eq_510_01_02b.xml 37414 f70dbf1c08fe61395aaf24614a672ce58185faf3bf087ab1f6d14b36b02f41c9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_repFixWrkPl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_repFixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'inspDdFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inspDdTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repFixWrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'advcdProcYn',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inspCostCont',saveRemovedData:'true','ev:ondataload':'scwin.ds_inspCostCont_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixNo',name:'정비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'장비귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'장비귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspKndCd',name:'검사종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspKndNm',name:'검사종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspDd',name:'검사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAmt',name:'정산금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'genYn',name:'전표생성체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repFixWrkPlCd',name:'대표작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'대표작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매출거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClsCd',name:'장비구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlAcctDeptCd',name:'정비작업장귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmStsCd',name:'정산상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmStsNm',name:'정산상태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspAgencyClntNo',name:'검사대행업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'검사대행업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'검사대행업체사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdProcYn',name:'전도금처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspCostVat',name:'검사비용 부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'originInspCostVat',name:'검사비용 수정전 부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inspAgencyClntNoCnt',name:'거래처별 건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspAgencyClntNoSeq',name:'거래처별 순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_advcdProcYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'advcdProcYn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdProcYnNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipResult'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo'}]}]},{T:1,N:'w2:workflowCollection',E:[{T:1,N:'w2:workflow',A:{id:'workflow1'},E:[{T:1,N:'w2:step',A:{type:'submit',action:'sbm_deleteSlip'}}]}]},{T:1,N:'xf:submission',A:{id:'sbm_inspCostCont',action:'/ps.eq.adjmmgnt.selladjmmgnt.RetrieveInspectionAdjustmentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_inspCostCont","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_inspCostCont","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createSlip',action:'/ps.eq.adjmmgnt.selladjmmgnt.RegistInspectionCostSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_inspCostCont","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createSlip_submitdone','ev:submiterror':'scwin.sbm_createSlip_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteSlip',action:'/ps.eq.adjmmgnt.selladjmmgnt.CancelInspectionCostSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_inspCostCont","key":"IN_DS1"},{"id":"ds_slipResult","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteSlip_submitdone','ev:submiterror':'scwin.sbm_deleteSlip_submiterror',abortTrigger:'',singleMode:'true'}},{T:1,N:'xf:submission',A:{id:'sbm_repFixWrkPl',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_repFixWrkPl","key":"IN_DS1"},{"id":"ds_repFixWrkPl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_repFixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_repFixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 차량검사비정산내역조회 (eq_510_01_02b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-12
//-------------------------------------------------------------------------
scwin.startDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMM") + "01";
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.G_eqHomeClsCd = "";
scwin.G_fixWrkPlCd = "";
scwin.createSucc = false;
scwin.deleteSucc = false;
scwin.deleteOrder = 0;

//-------------------------------------------------------------------------
// onpageload
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // console.log("PGM : 차량검사비정산내역조회 (eq_510_01_02b)");

  // console.log($c.data.getMemInfo());

  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  },
  // 사업부문 - 소속
  {
    grpCd: "EQ906",
    compID: "gr_inspCostCont:adjmStsCd"
  } // 정산상태
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = function () {
  var advcdProcYn_jsonData = [{
    "advcdProcYn": "2",
    "advcdProcYnNm": "전체"
  }, {
    "advcdProcYn": "0",
    "advcdProcYnNm": "미지급"
  }, {
    "advcdProcYn": "1",
    "advcdProcYnNm": "전도금"
  }];
  ds_advcdProcYn.setJSON(advcdProcYn_jsonData); // 전도금여부

  scwin.G_eqHomeClsCd = $c.data.getMemInfo($p, "eqHomeClsCd"); // 사용자소속구분코드   
  scwin.G_fixWrkPlCd = $c.data.getMemInfo($p, "fixWrkPlCd"); // 사용자대표정비작업장구분   

  if ($c.gus.cfIsNull($p, scwin.G_eqHomeClsCd)) {
    lc_homeClsCd.setSelectedIndex(0);
  } else {
    lc_homeClsCd.setValue(scwin.G_eqHomeClsCd);
  }
  scwin.f_RetrieveRepFixWrkPl(lc_homeClsCd.getValue());

  // $c.gus.cfDisableBtn([btn_Save, btn_Delete]);	    
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_inspDtFrom.setValue(scwin.startDate_YMD);
  ed_inspDtTo.setValue(scwin.fromDate_YMD);
};

//------------------------------------------------------------------------
// 소속 구분에 따른 대표작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveRepFixWrkPl = function (homeClsCd) {
  dma_repFixWrkPl.set("cmd", "retriveFixWrkList");
  dma_repFixWrkPl.set("strVal", homeClsCd);
  dma_repFixWrkPl.set("intVal", "");
  $c.sbm.execute($p, sbm_repFixWrkPl);
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  var luxIndex = lc_homeClsCd.getValue();
  // 작업장콤보 조회
  scwin.f_RetrieveRepFixWrkPl(luxIndex);
  if (luxIndex == "") {
    lc_repFixWrkPlCd.setSelectedIndex(0);
  }
};

//------------------------------------------------------------------------
// 조회 조건 필드 초기화
//------------------------------------------------------------------------
scwin.f_FieldClear = async function () {
  lc_homeClsCd.setValue(scwin.G_eqHomeClsCd); // 정비소속구분코드

  if (lc_homeClsCd.getValue() == scwin.G_eqHomeClsCd) {
    lc_repFixWrkPlCd.setValue(scwin.G_fixWrkPlCd); // 정비작업장코드
  }
  scwin.G_fixWrkPlCd = $c.data.getMemInfo($p, "fixWrkPlCd"); // 사용자대표정비작업장구분   

  lc_homeClsCd.setSelectedIndex(0);
  var vHomeClsCd = lc_homeClsCd.getValue();
  scwin.f_RetrieveRepFixWrkPl(vHomeClsCd);
  lc_repFixWrkPlCd.setSelectedIndex(0);
  lc_advcdProcYn.setSelectedIndex(0);
  ed_inspDtFrom.setValue(scwin.fromDate_YMD);
  ed_inspDtTo.setValue(scwin.fromDate_YMD);
  ed_inspDtFrom.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 조회조건 필수 체크
  if (!(await $c.gus.cfValidate($p, [tbl_retrieveCondition], null, true))) return;

  // 조회조건날짜 선후관계 체크
  if (!$c.gus.cfIsAfterDate($p, ed_inspDtFrom.getValue(), ed_inspDtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_inspDtFrom.focus();
    return;
  }
  dma_search.set("inspDdFrom", ed_inspDtFrom.getValue());
  dma_search.set("inspDdTo", ed_inspDtTo.getValue());
  dma_search.set("homeClsCd", lc_homeClsCd.getValue());
  dma_search.set("fixWrkPlCd", lc_repFixWrkPlCd.getValue());
  $c.sbm.execute($p, sbm_inspCostCont);
};

//-------------------------------------------------------------------------
// 차량검사비정산내역 ondataload
//-------------------------------------------------------------------------
scwin.ds_inspCostCont_ondataload = function () {
  let rowCnt = ds_inspCostCont.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Delete]);
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_Delete]);
    for (var i = 0; i < ds_inspCostCont.getRowCount(); i++) {
      ds_inspCostCont.setCellData(i, "genYn", 0);
      if (ds_inspCostCont.getCellData(i, "adjmStsNm") == "전표삭제") {
        ds_inspCostCont.setCellData(i, "slipNo", "");
        ds_inspCostCont.setCellData(i, "slipDt", "");
      }
      //column style 지정
      if (ds_inspCostCont.getCellData(i, "slipNo") > 0) {
        gr_inspCostCont.setCellStyle(i, "slipNo", "text-decoration", "underline");
        gr_inspCostCont.setCellStyle(i, "slipNo", "cursor", "pointer");
        gr_inspCostCont.setCellColor(i, "slipNo", "blue");
      }
      scwin.f_GridRowChange(i);
    }
    gr_inspCostCont.setFocusedCell(0, "clntNm", false);
  }
};

//-------------------------------------------------------------------------
//  열 포커스 이동 as-is for=ds_inspCostCont event=OnRowPosChanged(row)>
//-------------------------------------------------------------------------
scwin.f_GridRowChange = function (row) {
  // 전표생성이 안되어있으면
  if ((ds_inspCostCont.getCellData(row, "slipNo") == "" || ds_inspCostCont.getCellData(row, "adjmStsNm") == "전표삭제") && ds_inspCostCont.getCellData(row, "genYn") == "1") {
    gr_inspCostCont.setCellReadOnly(row, "slipDt", false);
    gr_inspCostCont.setCellReadOnly(row, "inspCostVat", false);
  } else {
    gr_inspCostCont.setCellReadOnly(row, "slipDt", true);
    gr_inspCostCont.setCellReadOnly(row, "inspCostVat", true);
  }
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 전표생성 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Save_onclick = function (e) {
  scwin.f_createSlip();
};

//-------------------------------------------------------------------------
// 전표삭제 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Delete_onclick = function (e) {
  scwin.deleteOrder = 1;
  scwin.f_deleteSlip();
};

//-------------------------------------------------------------------------
// 그리드 oncellclick
//-------------------------------------------------------------------------
scwin.gr_inspCostCont_oncellclick = function (rowIndex, columnIndex, columnId) {
  let colid = gr_inspCostCont.getColumnID(columnIndex);
  let row = rowIndex;
  if (colid == "slipNo" && ds_inspCostCont.getCellData(row, "adjmStsNm") == "전표등록") {
    $c.gus.cfShowSlipInfo($p, ds_inspCostCont.getCellData(row, "slipNo"));
  } else if (colid == "genYn") {
    var chkYn = "";
    var newChkYn = "";
    var inspAgencyClntNo = "";
    var advcdProc = ""; // 1:전도금, 0:미지급
    advcdProc = ds_inspCostCont.getCellData(row, "advcdProcYn");
    chkYn = ds_inspCostCont.getCellData(row, "genYn");
    inspAgencyClntNo = ds_inspCostCont.getCellData(row, "crn");
    if (chkYn == 1) {
      newChkYn = 1;
    } else {
      newChkYn = 0;
    }

    // 전도금이면 해당Row만 체크, 미지급이면 동일거래처 체크
    if (advcdProc == "1") {
      ds_inspCostCont.setCellData(k, "genYn", newChkYn);
    } else {
      for (var k = 0; k < ds_inspCostCont.getRowCount(); k++) {
        if (inspAgencyClntNo == ds_inspCostCont.getCellData(k, "crn")) {
          ds_inspCostCont.setCellData(k, "genYn", newChkYn);
        }
      }
    }
  } else if (colid == "inspCostVat" || colid == "slipDt") {
    // 전표생성이 안되어있으면
    if ((ds_inspCostCont.getCellData(row, "slipNo") == "" || ds_inspCostCont.getCellData(row, "adjmStsNm") == "전표삭제") && ds_inspCostCont.getCellData(row, "genYn") == "1") {
      gr_inspCostCont.setCellReadOnly(row, "slipDt", false);
      gr_inspCostCont.setCellReadOnly(row, "inspCostVat", false);
    } else {
      gr_inspCostCont.setCellReadOnly(row, "slipDt", true);
      gr_inspCostCont.setCellReadOnly(row, "inspCostVat", true);
    }
  }
};

//------------------------------------------------------------------------
// 전표생성대상이 있는지와 validation check
//------------------------------------------------------------------------
scwin.f_dsCreateCheck = async function () {
  var modCnt = 0;
  for (i = 0; i < ds_inspCostCont.getRowCount(); i++) {
    if (ds_inspCostCont.getCellData(i, "genYn") == "1") {
      // 체크되어있는
      if (ds_inspCostCont.getCellData(i, "adjmStsNm") != "전표등록") {
        // 전표 생성대상이다.
        modCnt++;
        if (ds_inspCostCont.getCellData(i, "slipDt") == "") {
          // 전표생성일자가 비어있으면
          await $c.win.alert($p, i + 1 + "번째 데이터의 전표일자를 입력해 주십시오.");
          //포커스 이동
          ds_inspCostCont.setRowPosition(i);
          //gr_inspCostCont.SetColumn("slipDt");
          gr_inspCostCont.focus();
          return false;
        }
      } else {
        await $c.win.alert($p, i + 1 + "번째 데이터는 전표생성대상이 아닙니다.");
        //  $c.win.alert("해당 데이터는 전표생성대상이 아닙니다.");
        //포커스 이동
        ds_inspCostCont.setRowPosition(i);
        //gr_inspCostCont.SetColumn("genYn");
        gr_inspCostCont.focus();
        return false;
      }
    }
  }
  var slipDt = "";
  for (i = 0; i < ds_inspCostCont.getRowCount(); i++) {
    if (ds_inspCostCont.getCellData(i, "genYn") == "1") {
      slipDt = ds_inspCostCont.getCellData(i, "slipDt");
      break;
    }
  }
  for (i = 0; i < ds_inspCostCont.getRowCount(); i++) {
    if (ds_inspCostCont.getCellData(i, "genYn") == "1") {
      if (slipDt != ds_inspCostCont.getCellData(i, "slipDt")) {
        await $c.win.alert($p, "생성할 전표일자는 모두 같아야 합니다.");
        return;
      }
    }
  }
  if (modCnt == 0) {
    await $c.win.alert($p, "생성할 전표가 없습니다.");
    return false;
  }
  return true;
};

//------------------------------------------------------------------------
// 전표삭제대상이 있는지와 validation check
//------------------------------------------------------------------------
scwin.f_dsDeleteCheck = async function () {
  var modCnt = 0;
  for (i = 0; i < ds_inspCostCont.getRowCount(); i++) {
    if (ds_inspCostCont.getCellData(i, "genYn") == "1") {
      // 체크되어있는
      if (ds_inspCostCont.getCellData(i, "adjmStsNm") != "전표삭제" && ds_inspCostCont.getCellData(i, "adjmStsNm") != "") {
        // 전표 취소대상
        modCnt++;
      } else {
        await $c.win.alert($p, i + 1 + "번째 데이터는 전표삭제대상이 아닙니다.");
        // await $c.win.alert("해당 데이터는 전표삭제대상이 아닙니다.");
        //포커스 이동
        ds_inspCostCont.setRowPosition(i);
        gr_inspCostCont.setFocusedCell(0, "genYn", false);
        gr_inspCostCont.focus();
        return false;
      }
    }
  }
  if (modCnt == 0) {
    await $c.win.alert($p, "취소할 전표가 없습니다.");
    return false;
  }
  return true;
};

//------------------------------------------------------------------------
// 화면에 체크되어있는 전표생성 
//------------------------------------------------------------------------
scwin.f_createSlip = async function () {
  if (!(await scwin.f_dsCreateCheck())) return;
  if (!(await $c.win.confirm($p, "검사비 전표를 생성하시겠습니까?"))) {
    return;
  }
  $c.sbm.execute($p, sbm_createSlip);
};

//------------------------------------------------------------------------
// 화면에 체크되어있는 전표 취소
//------------------------------------------------------------------------
scwin.f_deleteSlip = async function () {
  if (!(await scwin.f_dsDeleteCheck())) return;
  if (!(await $c.win.confirm($p, "검사비 전표를 삭제하시겠습니까?"))) {
    return;
  }
  $c.sbm.execute($p, sbm_deleteSlip);
};

//-------------------------------------------------------------------------
//  회계전표발행 
//-------------------------------------------------------------------------
scwin.f_OzReport = function (row) {
  var param = "";
  if (ds_inspCostCont.getCellData(row, "adjmStsNm") == "전표등록") {
    param = param + "," + ds_inspCostCont.getCellData(row, "slipNo");
  }
  let data = {
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      slipNo: param.substring(1) // 확인필요
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: "silent"
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 그리스 info - onviewchange
//-------------------------------------------------------------------------
scwin.gr_inspCostCont_onviewchange = function (info) {
  console.log(" info : " + info);
  if (info.colId == "advcdProcYn") {
    let opts = scwin.custom_Info("select");
    gr_master.setCellInputType(info.rowIndex, "advcdProcYn", opts);
  }
};

//-------------------------------------------------------------------------
// type 에 맞는 info 정보 셋팅
//-------------------------------------------------------------------------
scwin.custom_Info = function (type) {
  let ret = "";
  switch (type) {
    case "select":
      ret = {
        inputType: "select",
        options: {
          viewType: "icon",
          chooseOption: true
        },
        itemSet: {
          nodeset: "data:ds_advcdProcYn",
          label: "advcdProcYnNm",
          value: "advcdProcYn"
        }
      };
      break;
  }
};

//-------------------------------------------------------------------------
// 전표생성 TR - 차량검사비정산 전표 
//-------------------------------------------------------------------------
scwin.sbm_createSlip_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    scwin.createSucc = true;
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["차량검사비정산 전표"]);
    $c.gus.cfEnableAllBtn($p);
    scwin.f_Retrieve();
  }
};
scwin.sbm_createSlip_submiterror = function (e) {
  scwin.createSucc = false;
  $c.gus.cfEnableAllBtn($p);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 전표삭제 TR - 차량검사비정산 전표 
//-------------------------------------------------------------------------
scwin.sbm_deleteSlip_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_011, ["차량검사비정산 전표"]);
  scwin.deleteSucc = true;
  scwin.f_Retrieve();
};
scwin.sbm_deleteSlip_submiterror = function (e) {
  scwin.deleteSucc = false;
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_inspCostCont.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_inspCostCont.getTotalCol(); i++) {
    if (gr_inspCostCont.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_inspDtFrom.getValue(), "####/##/##");
  let str2 = $c.gus.cfGetFormatStr($p, ed_inspDtTo.getValue(), "####/##/##");
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "차량검사비정산내역조회",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "조회기간 [" + str + " ~ " + str2 + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "차량검사비정산내역.xlsx",
    //sheetName: "기간_" + str + "_" + str2 ,
    sheetName: "차량검사비정산내역",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_inspCostCont, options, {});
};
scwin.gr_inspCostCont_onafteredit = function (rowIndex, columnIndex, value) {
  var columnId = gr_inspCostCont.getColumnID(columnIndex);

  //전표일자
  if (columnId == "slipDt") {
    for (var i = 0; i < ds_inspCostCont.getRowCount(); i++) {
      ds_inspCostCont.setCellData(i, columnId, value);
    }
  }
};
scwin.sbm_repFixWrkPl_submitdone = function (e) {
  var vCode = ds_repFixWrkPl.getCellData(0, "code");
  lc_repFixWrkPlCd.setValue(vCode);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_retrieveCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'검사일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'ed_inspDtFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'ed_inspDtTo',edToId:'ed_inspDtTo',edFromId:'ed_inspDtFrom',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'조회년월',titleTo:'조회년월',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',ref:'data:dma_search.homeClsCd',chooseOptionLabel:'선택',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_repFixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.repFixWrkPlCd',chooseOption:'',chooseOptionLabel:'선택',visibleRowNum:'10',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_repFixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전도금여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_advcdProcYn',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.advcdProcYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_advcdProcYn'},E:[{T:1,N:'xf:label',A:{ref:'advcdProcYnNm'}},{T:1,N:'xf:value',A:{ref:'advcdProcYn'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량검사비정산내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_inspCostCont',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_inspCostCont',id:'gr_inspCostCont',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_inspCostCont_oncellclick','ev:onviewchange':'scwin.gr_inspCostCont_onviewchange','ev:onafteredit':'scwin.gr_inspCostCont_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'검사대행업체',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'정비작업</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'장비번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'검사종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'검사일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'전도금</br>여부',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'부가세',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'전표일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column55',value:'정산상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'genYn',inputType:'checkbox',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'180',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inspKndNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inspDd',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'advcdProcYn',inputType:'select',style:'',value:'',width:'70',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미지급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전도금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'adjmAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true',dataType:'number',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inspCostVat',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true',dataType:'number',allowChar:'0-9',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'slipDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'adjmStsNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column47',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'adjmAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'inspCostVat\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표삭제'}]}]}]}]}]}]}]}]}]})