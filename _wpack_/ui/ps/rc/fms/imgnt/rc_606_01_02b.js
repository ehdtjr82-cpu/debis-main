/*amd /ui/ps/rc/fms/imgnt/rc_606_01_02b.xml 59618 dd5530935193fd119f39fbaab4798b2053061f07030d19cf67eefcf91ec450dc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edDt',name:'일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expenseCd',name:'비용구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regClsCd',name:'등록구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_createCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_org_cost'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expenseCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_tmp_cost'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expenseCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizcarResults',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_bizcarResults_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'차량 모델',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'회계 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'계약부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseCd',name:'비용;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regClsCd',name:'입력;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidCnt',name:'증빙;개수',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delyn',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:onrowpositionchange':'scwin.ds_bizcarResults_onrowpositionchange',id:'ds_bizcarResults_excel',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'vehclNo',name:'차량 번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqModelNm',name:'차량 모델'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stdDt',name:'회계 일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'posnClsCd',name:'소유 구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'계약부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expenseCd',name:'비용;구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'계정;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm',name:'계정명'}},{T:1,N:'w2:column',A:{dataType:'text',defaultValue:'0',id:'amt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regClsCd',name:'입력;구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'비고'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'전표;번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처 코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:column',A:{dataType:'text',defaultValue:'0',id:'evidCnt',name:'증빙;개수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawEmpNm',name:'작성자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawAcctDeptNm',name:'작성부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqCd',name:'장비코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'seq',name:'name20'}},{T:1,N:'w2:column',A:{dataType:'text',id:'delyn',name:'name21'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ps.rc.RetrieveBusinessCarCostResultsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_bizcarResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bizcarResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ps.rc.SaveBusinessCarCostResultsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_bizcarResults","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_create',action:'/ps.rc.CreateBusinessCarCostAutoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_createCond","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_create_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_confirm',action:'/ps.rc.ConfirmBusinessCarCostCloseYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_createCond","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_confirm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 업무용차량비용관리
 * 메뉴경로 : 공통/총무업무/업무용 차량관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ps/rc/fms/imgnt/rc_606_01_02b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-08
 * 수정이력  :
 *    - 2025-12-08      정승혜    최초작성
 *    - 2026-03-17      정승혜    기타수정
 * 메모 :
 * 조회조건 : 
 * 해야할리스트 : 
 */

scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.wrkClsCd = "";
scwin.g_nm = "";

//hidden
scwin.txt_eqCd = "";
scwin.ontextimageclick = "N";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_createSearchHeader();
  const codeOptions = [{
    grpCd: "ZZ203",
    compID: "gr_bizcarResults:posnClsCd"
  }, {
    grpCd: "RC969",
    compID: "gr_bizcarResults:expenseCd, lc_expenseCd"
  }, {
    grpCd: "RC967",
    compID: "gr_bizcarResults:regClsCd, lc_regClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  let dt = scwin.strFromDate;
  ed_stDt.setValue(dt.substring(0, 4) + "0101");
  ed_edDt.setValue(dt);
  ed_stdYm.setValue(dt.substring(0, 6));
  scwin.f_JobCloseYN();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_createSearchHeader
// function desc : 조회조건 Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createSearchHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_stDt, ed_edDt]);
  if (!ret) {
    return;
  }
  if (ed_stDt.getValue() > ed_edDt.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let row = ds_bizcarResults.insertRow();
  ds_bizcarResults.setCellData(row, "regClsCd", "D");
  ds_bizcarResults.setCellData(row, "delYn", 0);
  ds_bizcarResults.setRowPosition(row);
  //gr_bizcarResults.setFocusedCell(row, "vehclNo", true);
  //바로 수정으로 들어가면 돋보기 안보임
  gr_bizcarResults.setFocusedCell(row, "vehclNo", false);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = async function () {
  let regClsCd = ds_bizcarResults.getCellData(ds_bizcarResults.getRowPosition(), "regClsCd");
  let sts = ds_bizcarResults.getRowStatus(ds_bizcarResults.getRowPosition());
  if (regClsCd != "D") {
    await $c.gus.cfAlertMsg($p, ds_bizcarResults.getRowPosition() + "행은 직접 입력한 자료가 아니므로 행삭제할 수 없습니다.");
    return;
  } else {
    if (sts == "C") {
      ds_bizcarResults.removeRow(ds_bizcarResults.getRowPosition());
    } else {
      ds_bizcarResults.deleteRow(ds_bizcarResults.getRowPosition());
    }
  }
};

// 취소
scwin.f_cancelRow = function () {
  let nowRow = ds_bizcarResults.getRowPosition();
  let sts = ds_bizcarResults.getRowStatus(ds_bizcarResults.getRowPosition());
  if (nowRow != null) {
    if (sts == "C") {
      ds_bizcarResults.removeRow(nowRow);
      gr_bizcarResults.setFocusedCell(nowRow - 1, 0, false);
    } else {
      ds_bizcarResults.undoRow(nowRow);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_bizcarResults.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "업무용차량 비용관리 그리드")); //변경된 정보가 없습니다.
    return;
  }
  let validArray = [{
    id: "vehclNo",
    name: "차량번호",
    mandatory: true
  }, {
    id: "stdDt",
    name: "회계일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD"
  }, {
    id: "expenseCd",
    name: "비용구분",
    mandatory: true
  }, {
    id: "acctCd",
    name: "계정코드",
    mandatory: true,
    length: 7
  }, {
    id: "rmk",
    name: "비고",
    mandatory: true
  }, {
    id: "amt",
    name: "금액",
    mandatory: true,
    minNumber: 1
  }, {
    id: "slipNo",
    name: "전표번호",
    mandatory: true,
    length: 10
  }, {
    id: "clntNo",
    name: "거래처",
    mandatory: true,
    length: 6
  }];
  let ret = await $c.gus.cfValidateGrid($p, gr_bizcarResults, null, null, validArray, "업무용차량비용관리");
  if (!ret) {
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    $c.sbm.execute($p, sbm_tr_save);
  }
};

//-------------------------------------------------------------------------
// 비용집계
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_stdYm]);
  if (!ret) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_003, "기준년월"));
    ed_stdYm.focus();
    return;
  }
  dma_createCond.set("stdYm", ed_stdYm.getValue());
  dma_createCond.set("wrkClsCd", "C");
  let confirm = await $c.win.confirm($p, ed_stdYm.getValue() + "월 업무용차량 비용을 집계하시겠습니까?");
  if (!confirm) {
    return;
  } else {
    scwin.wrkClsCd = "C";
    $c.sbm.execute($p, sbm_tr_create);
  }
};

//-------------------------------------------------------------------------
// 비용집계 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_stdYm]);
  if (!ret) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_003, "기준년월"));
    ed_stdYm.focus();
    return;
  }
  dma_createCond.set("stdYm", ed_stdYm.getValue());
  dma_createCond.set("wrkClsCd", "D");
  let confirm = await $c.win.confirm($p, ed_stdYm.getValue() + "월 업무용차량 비용을 집계취소하시겠습니까?");
  if (!confirm) {
    return;
  } else {
    scwin.wrkClsCd = "D";
    $c.sbm.execute($p, sbm_tr_create);
  }
};

//-------------------------------------------------------------------------
// 그리드 Edit 속성 제어
//-------------------------------------------------------------------------
scwin.f_EditControl = function (row) {
  scwin.f_EditNone(row);
  if (ds_bizcarResults.getRowStatus(row) == "C") {
    // Insert
    scwin.f_EditTrue(row);
  } else {
    // Update
    let regClsCd = ds_bizcarResults.getCellData(row, "regClsCd");
    if (regClsCd == "D") {
      scwin.f_EditTrue(row);
      gr_bizcarResults.setReadOnly("cell", row, "vehclNo", true);
      gr_bizcarResults.setReadOnly("cell", row, "stdDt", true);
    }
  }
};

//-------------------------------------------------------------------------
//  Edit_Control FUNCTION
//-------------------------------------------------------------------------	
scwin.f_EditNone = function (row) {
  gr_bizcarResults.setReadOnly("cell", row, "vehclNo", true);
  gr_bizcarResults.setReadOnly("cell", row, "stdDt", true);
  gr_bizcarResults.setReadOnly("cell", row, "expenseCd", true);
  gr_bizcarResults.setReadOnly("cell", row, "acctCd", true);
  gr_bizcarResults.setReadOnly("cell", row, "amt", true);
  gr_bizcarResults.setReadOnly("cell", row, "rmk", true);
  gr_bizcarResults.setReadOnly("cell", row, "slipNo", true);
  gr_bizcarResults.setReadOnly("cell", row, "clntNo", true);
};
scwin.f_EditTrue = function (row) {
  gr_bizcarResults.setReadOnly("cell", row, "vehclNo", false);
  gr_bizcarResults.setReadOnly("cell", row, "stdDt", false);
  gr_bizcarResults.setReadOnly("cell", row, "expenseCd", false);
  gr_bizcarResults.setReadOnly("cell", row, "acctCd", false);
  gr_bizcarResults.setReadOnly("cell", row, "amt", false);
  gr_bizcarResults.setReadOnly("cell", row, "rmk", false);
  gr_bizcarResults.setReadOnly("cell", row, "slipNo", false);
  gr_bizcarResults.setReadOnly("cell", row, "clntNo", false);
};

//-------------------------------------------------------------------------
// 엑셀업로드
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  ds_bizcarResults.removeAll();
  let options = {
    "header": 1,
    "type": "1",
    "startRowIndex": 2
  };
  await udc_excel.uploadGridViewExcel(gr_bizcarResults, options);
};
scwin.gd_excelUpload_onfilereadend = function (value) {
  ds_bizcarResults.setJSON(ds_bizcarResults_excel.getAllJSON());
  debugger;
  for (var i = 0; i < ds_bizcarResults.getRowCount(); i++) {
    ds_bizcarResults.setCellData(i, 'seq', 0);
    ds_bizcarResults.setCellData(i, 'delyn', 0);
  }
  ds_bizcarResults.modifyAllStatus("C");
};

//-------------------------------------------------------------------------
// 파일 명 체크하는 로직(CSV)
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function () {};

//-------------------------------------------------------------------------
// 확정여부 조회 
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  let sCloseYM = "";
  sCloseYM = ed_stdYm.getValue();
  let isClose = await udc_job.cfJobCloseYN("CUR", sCloseYM, "00", "ZZ02", "00", "N");
  if (isClose == "" || isClose == null || isClose == "DNF") {
    ed_closeYn.setValue("N");
  } else if (isClose == "1") {
    ed_closeYn.setValue("N");
  } else if (isClose == "2") {
    ed_closeYn.setValue("Y");
  }
};

//-------------------------------------------------------------------------
// 확정/취소 : C/D
//-------------------------------------------------------------------------
scwin.f_Confirm = async function (cls) {
  await scwin.f_JobCloseYN(); // 확정여부 조회
  let confirm = await scwin.f_validChk(cls);
  if (confirm) {
    let jobYn = "";
    if (cls == "C") {
      // 마감시 마감했는지 체크 : 마감후면 마감 불가(마감취소 후 확정 가능)
      jobYn = await udc_job.cfJobCloseYN("CUR", dma_createCond.get("stdYm"), "00", "ZZ02", "00", null, "N");
      if (jobYn == "0" || jobYn == "2") {
        await $c.gus.cfAlertMsg($p, ed_stdYm.getValue() + "월 업무용차량 비용 확정작업을 이미 완료하였습니다. \n확정할 수 없습니다.");
        return;
      }
    }
    dma_createCond.set("wrkClsCd", cls); // 생성/취소구분(C/D)		

    let confirm2 = await $c.win.confirm($p, ed_stdYm.getValue() + "월 업무용차량 비용  " + scwin.g_nm + "하시겠습니까?");
    if (confirm2) {
      if (dma_createCond.get("wrkClsCd") == "D" && ed_closeYn.getValue() == "N") {
        await $c.gus.cfAlertMsg($p, ed_stdYm.getValue() + "월 업무용차량 비용은 아직 확정작업이 완료되지 않았습니다.");
        return;
      }
      $c.sbm.execute($p, sbm_tr_confirm);
    }
  }
};

// 비용확정
scwin.btn_confirm_onclick = function (e) {
  scwin.f_Confirm('C');
};

// 확정취소
scwin.btn_confirm_cancel_onclick = function (e) {
  scwin.f_Confirm('D');
};

//-------------------------------------------------------------------------
// f_validChk()
//-------------------------------------------------------------------------
scwin.f_validChk = async function (cls) {
  if (ed_stdYm.getValue().length != 6) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "기준년월"));
    ed_stdYm.focus();
    return false;
  }
  if (cls == "C") {
    scwin.g_nm = "확정";
  } else if (cls == "D") {
    scwin.g_nm = "취소";
  }
  dma_createCond.set("wrkClsCd", "");
  dma_createCond.set("stdYm", ed_stdYm.getValue());
  return true;
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업 
//-------------------------------------------------------------------------  
scwin.f_evidPopUp = function () {
  if (ds_bizcarResults.getCellData(ds_bizcarResults.getRowPosition(), "slipNo") == "") {
    $c.win.alert($p, "전표번호가 없어서 진행할 수 없습니다");
    return false;
  }
  let sURL = "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml";
  //sURL += "?slipNo=" + ds_bizcarResults.getCellData(ds_bizcarResults.getRowPosition(), "slipNo");
  let data = {};
  data.slipNo = ds_bizcarResults.getCellData(ds_bizcarResults.getRowPosition(), "slipNo");
  $c.win.openMenu($p, '증빙등록조회', sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, ""), data);
};

//-------------------------------------------------------------------------
// 차량 팝업 : 조회 조건
//-------------------------------------------------------------------------
scwin.f_carNumPopup = function (pbool) {
  // 차량번호
  udc_workVehclInfo.cfCommonPopUp(scwin.udc_workVehclInfo_callBackFunc, ed_vehclNo.getValue(), ed_eqModelNm.getValue(), pbool, null, null, null, null, "Y", null, null, null, null, null, "F", null, null);
};

// 차량번호
scwin.udc_workVehclInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_vehclNo.setValue(rtnList[0]);
    ed_eqModelNm.setValue(rtnList[1]);
  } else {
    ed_vehclNo.setValue("");
    ed_eqModelNm.setValue("");
  }
};

// 차량번호
scwin.udc_workVehclInfo_onclickEvent = function (e) {
  scwin.f_carNumPopup('F');
};

//-------------------------------------------------------------------------
//팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) {
    return;
  }
  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = await $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'F');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'F');
  }
};

//공통 PopUp 호출
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  if (row == null) {
    row = 0;
  }
  switch (disGubun) {
    case 1:
      // 호출되는곳 없음
      break;
    case 2:
      // 귀속부서
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

// 귀속부서
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};

// 귀속부서
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};

// 귀속부서
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};

// 귀속부서
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 2, true);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  switch (flag) {
    case '1':
      // 계정코드
      let temp = ",,";
      udc_acctCdInfo.cfCommonPopUp(scwin.udc_acctCdInfo_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, temp, null, null, null, null);
      break;
    default:
      break;
  }
};

// 계정코드
scwin.udc_acctCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctCd.setValue(rtnList[0]);
    ed_acctNm.setValue(rtnList[1]);
    ed_acctCd.options.hidVal = rtnList[0];
  } else {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ed_acctCd.options.hidVal = "";
  }
};

// 계정코드
scwin.udc_acctCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

// 계정코드
scwin.udc_acctCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', 'T');
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------	
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    return;
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------	
scwin.f_resultPopEd = function () {
  //udc
};

//-------------------------------------------------------------------------
// Grid Popup
//-------------------------------------------------------------------------
scwin.f_popupchk = function (row, colid, winbool) {
  //ontextimageclick일 경우 2개의 이벤트가 동시에 뜨게되어 1개는 처리하지 않도록 함.
  if (scwin.ontextimageclick == "Y") {
    return false;
  }
  if (colid == "vehclNo") {
    // 그리드 차량번호
    let vehclNo = ds_bizcarResults.getCellData(row, colid);
    udc_workVehclInfo2.cfCommonPopUp(scwin.udc_workVehclInfo2_callBackFunc, vehclNo, "", winbool, null, null, null, null, "Y", null, null, null, null);
  } else if (colid == "acctCd") {
    // 그리드 계정코드
    let acctCd = ds_bizcarResults.getCellData(row, colid);
    udc_acctCdInfo2.cfCommonPopUp(scwin.udc_acctCdInfo2_callBackFunc, acctCd, "", winbool, null, null, null, null, null, null, null, null, null);
  } else if (colid == "clntNo") {
    // 그리드 거래처코드
    let clntNo = ds_bizcarResults.getCellData(row, colid);
    udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, clntNo, "", winbool, null, null, null, null, null, null, null, null, null);
  }
  return false;
};

// 그리드 차량번호
scwin.udc_workVehclInfo2_callBackFunc = function (rtnList) {
  let rowIdx = gr_bizcarResults.getFocusedRowIndex();
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_bizcarResults.setCellData(rowIdx, "vehclNo", rtnList[0]);
    ds_bizcarResults.setCellData(rowIdx, "eqModelNm", rtnList[1]);
    ds_bizcarResults.setCellData(rowIdx, "eqCd", rtnList[6]);
  } else {
    ds_bizcarResults.setCellData(rowIdx, "vehclNo", "");
    ds_bizcarResults.setCellData(rowIdx, "eqModelNm", "");
    ds_bizcarResults.setCellData(rowIdx, "eqCd", "");
  }
};

// 그리드 계정코드
scwin.udc_acctCdInfo2_callBackFunc = function (rtnList) {
  let rowIdx = gr_bizcarResults.getFocusedRowIndex();
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_bizcarResults.setCellData(rowIdx, "acctCd", rtnList[0]);
    ds_bizcarResults.setCellData(rowIdx, "acctNm", rtnList[1]);
  } else {
    ds_bizcarResults.setCellData(rowIdx, "acctCd", "");
    ds_bizcarResults.setCellData(rowIdx, "acctNm", "");
  }
};

// 그리드 거래처코드
scwin.udc_clntList_callBackFunc = function (rtnList) {
  let rowIdx = gr_bizcarResults.getFocusedRowIndex();
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_bizcarResults.setCellData(rowIdx, "clntNo", rtnList[0]);
    ds_bizcarResults.setCellData(rowIdx, "clntNm", rtnList[1]);
  } else {
    ds_bizcarResults.setCellData(rowIdx, "clntNo", "");
    ds_bizcarResults.setCellData(rowIdx, "clntNm", "");
  }
};

// 차량번호 
scwin.gr_vehclNo_ontextimageclick = function (rowIndex, colId) {
  if (ds_bizcarResults.getCellData(rowIndex, colId) != "") {
    scwin.ontextimageclick = "Y";
  }
  if (colId == "vehclNo") {
    scwin.f_popupchk(rowIndex, colId, "T");
  }
};

// 계정코드
scwin.gr_acctCd_ontextimageclick = function (rowIndex, colId) {
  if (ds_bizcarResults.getCellData(rowIndex, colId) != "") {
    scwin.ontextimageclick = "Y";
  }
  if (colId == "acctCd") {
    scwin.f_popupchk(rowIndex, colId, "T");
  }
};

// 거래처코드
scwin.gr_clntNo_ontextimageclick = function (rowIndex, colId) {
  if (ds_bizcarResults.getCellData(rowIndex, colId) != "") {
    scwin.ontextimageclick = "Y";
  }
  if (colId == "clntNo") {
    scwin.f_popupchk(rowIndex, colId, "T");
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
// 엑셀다운 1+4+8+16
scwin.f_Excel = function () {
  if (ds_bizcarResults.getRowCount() > 0) {
    let stDt = ed_stDt.getValue();
    let edDt = ed_edDt.getValue();
    let msgSearch = "기간 - " + stDt.substring(0, 4) + "/" + stDt.substring(4, 6) + "/" + stDt.substring(6, 8) + " ~ " + edDt.substring(0, 4) + "/" + edDt.substring(4, 6) + "/" + edDt.substring(6, 8);
    const options = {
      fileName: "업무용차량비용관리.xlsx",
      sheetName: "업무용차량비용관리",
      startRowIndex: 4,
      startColumnIndex: 0
    };
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 17,
      text: "업무용차량비용관리",
      textAlign: "center",
      fontSize: 24
    }, {
      rowIndex: 1,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 17
    }, {
      rowIndex: 2,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 17,
      text: msgSearch,
      textAlign: "left",
      fontSize: 12
    }, {
      rowIndex: 3,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 17
    }];
    $c.data.downloadGridViewExcel($p, gr_bizcarResults, options, infoArr);
  }
};

//-------------------------------------------------------------------------
//그리드 높이 늘리기
//-------------------------------------------------------------------------	
scwin.f_grdHeight = function () {};
scwin.f_template = function () {
  ds_bizcarResults_excel.setJSON([{
    "vehclNo": "66허 3341",
    "eqModelNm": "SM5",
    "stdDt": "20260317",
    "acctDeptNm": "충청기획관리팀",
    "expenseCd": "유류비",
    "acctCd": "1110122",
    "acctNm": "전도금-환전",
    "amt": "123456",
    "slipNo": "1111111111",
    "clntNo": "120000",
    "clntNm": "(주)세계배관",
    "regClsCd": "직접입력"
  }]);
  gd_excelUpload.advancedExcelDownload({
    fileName: '업무용차량비용관리_SAMPLE.xlsx'
  });
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_bizcarResults.getRowCount());
  gr_bizcarResults.setFocusedCell(0, 0, false);
  if (ds_bizcarResults.getRowCount() == 0) {
    $c.win.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  }
};

// 서브미션
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let clsNm = "";
  if (scwin.wrkClsCd == "C") {
    clsNm = "집계";
  } else {
    clsNm = "집계 취소";
  }
  await $c.win.alert($p, "업무용차량비용을 " + clsNm + "하였습니다.");
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_confirm_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_INF_012, "업무용차량비용 확정/취소"));
  scwin.f_JobCloseYN(); // 확정여부 조회
};

// 계정코드
scwin.udc_acctCdInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '1');
};

// 차량번호
scwin.udc_workVehclInfo_onblurCodeEvent = function (e) {
  if (ed_vehclNo.getValue().trim().length == 0) {
    ed_eqCd.value = "";
    return;
  }
  if (ed_vehclNo.getValue().trim().length > 0 && ed_eqModelNm.getValue().trim().length > 0) {
    return;
  }
  scwin.f_carNumPopup("T");
};

// 차량번호
scwin.udc_workVehclInfo_onblurNameEvent = function (e) {
  if (ed_eqModelNm.getValue().trim().length == 0) {
    ed_eqCd.value = "";
    return;
  }
  if (ed_vehclNo.getValue().trim().length > 0 && ed_eqModelNm.getValue().trim().length > 0) {
    return;
  }
  scwin.f_carNumPopup("T");
};

// 차량번호
scwin.udc_workVehclInfo_onviewchangeCodeEvent = function (info) {
  ed_eqModelNm.setValue("");
};

// 차량번호
scwin.udc_workVehclInfo_onviewchangeNameEvent = function (info) {
  ed_vehclNo.setValue("");
};
scwin.ds_bizcarResults_onrowpositionchange = function (info) {
  scwin.f_EditControl(info.newRowIndex);
};

// 그리드 전표번호
scwin.gr_bizcarResults_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && ds_bizcarResults.getCellData(rowIndex, "slipNo") != "") {
    await $c.gus.cfShowSlipInfo($p, ds_bizcarResults.getCellData(rowIndex, "slipNo"));
  } else if (columnId == "evidCnt" && ds_bizcarResults.getCellData(rowIndex, "evidCnt") > 0) {
    scwin.f_evidPopUp();
  }
};

// 기준년월
scwin.ed_stdYm_onblur = function (e) {
  scwin.f_JobCloseYN();
};

// 그리드 공통함수
scwin.gr_bizcarResults_onviewchange = function (info) {
  if (ds_bizcarResults.getRowCount() > 0) {
    switch (info.colId) {
      case "acctCd":
        if (info.newValue != "" && info.newValue != info.oldValue) {
          ds_bizcarResults.setCellData(info.rowIndex, "acctNm", "");
          scwin.f_popupchk(info.rowIndex, info.colId, "T");
        } else if (info.newValue == "") {
          ds_bizcarResults.setCellData(info.rowIndex, "acctCd", "");
          ds_bizcarResults.setCellData(info.rowIndex, "acctNm", "");
        }
        break;
      case "vehclNo":
        if (info.newValue != "" && info.newValue != info.oldValue) {
          ds_bizcarResults.setCellData(info.rowIndex, "eqModelNm", "");
          ds_bizcarResults.setCellData(info.rowIndex, "eqCd", "");
          scwin.f_popupchk(info.rowIndex, info.colId, "T");
        } else if (info.newValue == "") {
          ds_bizcarResults.setCellData(info.rowIndex, "vehclNo", "");
          ds_bizcarResults.setCellData(info.rowIndex, "eqModelNm", "");
          ds_bizcarResults.setCellData(info.rowIndex, "eqCd", "");
        }
        break;
      case "clntNo":
        if (info.newValue != "" && info.newValue != info.oldValue) {
          ds_bizcarResults.setCellData(info.rowIndex, "clntNm", "");
          scwin.f_popupchk(info.rowIndex, info.colId, "T");
        } else if (info.newValue == "") {
          ds_bizcarResults.setCellData(info.rowIndex, "clntNo", "");
          ds_bizcarResults.setCellData(info.rowIndex, "clntNm", "");
        }
        break;
    }
  }
};

// oldValue 비교 못해서 데이터 그대로여도 조회시도하여 딜레이 걸림
scwin.gr_bizcarResults_onafteredit = function (rowIndex, columnIndex, value) {
  scwin.ontextimageclick = "N";
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'edDt',edToId:'ed_edDt',edFromId:'ed_stDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveWorkVehclInfo',codeId:'ed_vehclNo',popupTitle:'',nameId:'ed_eqModelNm',style:'',code:'vehclNo','ev:onclickEvent':'scwin.udc_workVehclInfo_onclickEvent',id:'udc_workVehclInfo',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_workVehclInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_workVehclInfo_onblurNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_workVehclInfo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_workVehclInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent',id:'udc_acctDeptCdInfo',refDataCollection:'dma_search',code:'acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비용구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_expenseCd',style:'width: 208px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.expenseCd',visibleRowNum:'10',objType:'data'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',nameId:'ed_acctNm',popupID:'',popupTitle:'',selectID:'retrieveAcctCdInfo',style:'','ev:onclickEvent':'scwin.udc_acctCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctCdInfo_onviewchangeNameEvent',id:'udc_acctCdInfo',code:'acctCd',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_acctCdInfo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9',maxlengthCode:'7',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입력구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regClsCd',style:'width: 230px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.regClsCd',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'업무용차량 비용관리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'text-decoration : none;padding-top: 2px;',id:'btn_temp',class:'btn template','ev:onclick':'scwin.f_template'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'템플릿 다운로드'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridID:'gr_bizcarResults',btnUser:'N',gridDownUserAuth:'R',id:'udc_excel',gridUpFn:'scwin.f_Upload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_bizcarResults',id:'gr_bizcarResults',style:'',visibleRowNum:'13',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:oncelldblclick':'scwin.gr_bizcarResults_oncelldblclick','ev:onviewchange':'scwin.gr_bizcarResults_onviewchange','ev:onafteredit':'scwin.gr_bizcarResults_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'차량</br>번호 ',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량</br>모델',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'회계<br>일자',width:'70',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'계약부서',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'비용 내역',width:'450',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'610',inputType:'text',style:'',id:'column61',value:'전표내역',displayMode:'label',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'비용</br>구분',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'계정</br>코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'금액',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'입력</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'비고',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'전표</br>번호',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'거래처</br>코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'증빙</br>개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'작성부서',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',style:'',value:'',width:'70',imageClickFunction:'scwin.gr_vehclNo_ontextimageclick',readOnly:'false',mandatory:'true',maxByteLength:'12'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'calendar',style:'',value:'',width:'70',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'false',mandatory:'true',maxByteLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'expenseCd',inputType:'select',style:'',value:'',width:'70',textAlign:'left',readOnly:'false',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'textImage',style:'',value:'',width:'70',mandatory:'true',imageClickFunction:'scwin.gr_acctCd_ontextimageclick',textAlign:'left',readOnly:'false',maxByteLength:'7'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'70',mandatory:'true',textAlign:'right',dataType:'number',excelCellType:'number',readOnly:'false',displayFormat:'#,##0',maxByteLength:'13'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'regClsCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',readOnly:'false',mandatory:'true',maxByteLength:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:';color:blue;',id:'slipNo',value:'',displayMode:'label',mandatory:'true',class:'underline',readOnly:'false',maxByteLength:'10'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'clntNo',value:'',displayMode:'label',mandatory:'true',imageClickFunction:'scwin.gr_clntNo_ontextimageclick',textAlign:'left',readOnly:'false',maxByteLength:'6'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:';color:blue;',id:'evidCnt',value:'',displayMode:'label',readOnly:'true',class:'underline',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawAcctDeptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqCd',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',textAlign:'right',expression:'SUM("amt")',excelCellType:'number',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_cancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'기준년월 ',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_stdYm',class:'form-group',calendarValueType:'yearMonth','ev:onblur':'scwin.ed_stdYm_onblur',displayFormat:'yyyy/MM',pickerType:'dynamic',objType:'data'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',title:'엑셀 UP',type:'button',class:'btn','ev:onclick':'scwin.f_Create',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비용집계'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',title:'엑셀 UP',type:'button',class:'btn','ev:onclick':'scwin.f_Cancel',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'집계취소'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'비용 확정여부 ',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_closeYn',class:' w50 tac',readOnly:'true',objType:'data'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_confirm',title:'엑셀 UP',type:'button',class:'btn','ev:onclick':'scwin.btn_confirm_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비용확정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_confirm_cancel',title:'엑셀 UP',type:'button',class:'btn','ev:onclick':'scwin.btn_confirm_cancel_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정취소'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'',nameId:'',popupID:'',popupTitle:'',selectID:'retrieveWorkVehclInfo',style:'visibility:hidden;display: none;',id:'udc_workVehclInfo2'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',nameId:'',popupID:'',popupTitle:'',selectID:'retrieveAcctCdInfo',style:'visibility:hidden;display: none;',id:'udc_acctCdInfo2'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',nameId:'',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'visibility:hidden;display: none;',id:'udc_clntList'}},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:';visibility:hidden;',id:'udc_job'}}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_bizcarResults_excel','ev:onafteredit':'scwin.gr_bizcarResults_onafteredit','ev:oncelldblclick':'scwin.gr_bizcarResults_oncelldblclick','ev:onviewchange':'scwin.gr_bizcarResults_onviewchange',id:'gd_excelUpload',rowStatusWidth:'20',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gd_excelUpload_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'col-type1',colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',style:'',value:'차량</br>번호 ',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',style:'',value:'차량</br>모델',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type1',colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'회계<br>일자',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',style:'',value:'계약부서',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'6',displayMode:'label',id:'column9',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'비용 내역',width:'450'}},{T:1,N:'w2:column',A:{colSpan:'7',displayMode:'label',id:'column61',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'전표내역',width:'610'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column35',inputType:'text',style:'',value:'비용</br>구분',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column34',inputType:'text',style:'',value:'계정</br>코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'계정명',width:'100'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column32',inputType:'text',style:'',value:'금액',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'입력</br>구분',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column66',inputType:'text',style:'',value:'비고',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column62',inputType:'text',style:'',value:'전표</br>번호',width:'70'}},{T:1,N:'w2:column',A:{class:'col-type1',displayMode:'label',id:'column58',inputType:'text',style:'',value:'거래처</br>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'적요',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'증빙</br>개수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'작성자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'작성부서',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'expenseCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidCnt',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawAcctDeptNm',inputType:'text',width:'70'}}]}]}]}]}]}]}]})