/*amd /ui/cm/bc/rentloan/zz_900_06_01p.xml 32451 d9949175f3fbf216d717133017475ee17a97e8e30f0e4d81267f1bc672ca065b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanShapeCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPayClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'usePurpsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_information',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'계약;형태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'수급지급구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usePurpsCd',name:'사용용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속;부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬;순번',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_Vinformation',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usePurpsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyPayClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_Retrieve',action:'/cm.bc.rentloan.RetrieveDrcrClsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_information","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_information","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save_in',action:'/cm.bc.rentloan.RegistDrcrClsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_information","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_in_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.bc.rentloan.RegistDrcrClsCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_vin_submitdone','ev:submiterror':'',id:'sbm_tr_save_vin',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"id":"ds_Vinformation","key":"IN_DS1"}',replace:'',target:'',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_collMoneyPayClsCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_collMoneyPayClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_collMoneyPayClsCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 전표분개내역등록
 * 메뉴경로 : 공통/총무업무/임대차관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_06_01p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-01
 * 수정이력  :
 *    - 2025-12-01      정승혜    최초작성
 *    - 2026-03-04      정승혜    기타수정
 * 메모 : 
 * 팝업아님
 * 조회조건 : 
 * 계약형태-전체/수급지급구분-전체/비용구분-전체
 *    - 2026-03-04      정승혜    기타수정
 */

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.empNo = scwin.memJson.empNo;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;

//hidden
scwin.hid_rentloanShapeCd = "";
scwin.hid_collMoneyPayClsCd = "";
scwin.hid_usePurpsCd = "";
scwin.hid_acctDeptCd = "";
scwin.hid_acctDeptNm = "";
scwin.hid_costClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ911",
    compID: "gr_information:rentloanShapeCd, lc_rentloanShapeCd"
  }, {
    grpCd: "ZZ918",
    compID: "gr_information:collMoneyPayClsCd"
  }, {
    grpCd: "ZZ913",
    compID: "gr_information:usePurpsCd, lc_usePurpsCd"
  }, {
    grpCd: "FI042",
    compID: "gr_information:costClsCd, lc_costClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_createHeader();
  scwin.f_createHeader4();
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {};
scwin.ondataload = function () {
  lc_rentloanShapeCd.setValue("01");
  scwin.f_RetrieveCollMoneyPayClsCd();
  lc_usePurpsCd.setValue("01");
  lc_costClsCd.setValue("01");
  $c.gus.cfDisableObjects($p, [btn_add, btn_del, btn_cancel]);
};

//-------------------------------------------------------------------------
// 조회 조건 DataSet 헤더 선언
//-------------------------------------------------------------------------
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// function name : f_RetrieveCollMoneyPayClsCd
// function desc : 청구/정산구분 조회
// function Parameter : null 
//-------------------------------------------------------------------------	
scwin.f_RetrieveCollMoneyPayClsCd = function () {
  let nRow = 0;
  let sFilter1 = "";
  let sFilter2 = "";
  let vRentloanShapeCd = lc_rentloanShapeCd.getValue();
  if (vRentloanShapeCd == "01" || vRentloanShapeCd == "02") {
    sFilter1 = "1";
    sFilter2 = "";
  } else if (vRentloanShapeCd == "03" || vRentloanShapeCd == "04") {
    sFilter1 = "";
    sFilter2 = "1";
  } else {}
  sbm_ds_collMoneyPayClsCd.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveCommonFilterPopup&param1=ZZ918&param2=" + sFilter1 + "&param3=" + sFilter2;
  $c.sbm.execute($p, sbm_ds_collMoneyPayClsCd);
};

//-------------------------------------------------------------------------
// function name : f_createHeader4
// function desc : 엑셀 데이타 업로드시 mapping 되는 데이타셋 정의
//-------------------------------------------------------------------------
scwin.f_createHeader4 = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------
// 엑셀로 다운로드
//-------------------------------------------
// 엑셀다운 4+8+16
scwin.f_runExcel = async function () {
  let confirm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  let totCnt = ds_information.getRowCount();
  if (totCnt != 0) {
    if (confirm) {
      const options = {
        fileName: "임대차_전대차 전표내역등록.xlsx",
        sheetName: "임대차_전대차 전표내역등록"
      };
      await $c.data.downloadGridViewExcel($p, gr_information, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = function (flag, check, isCdYn) {
  let param = "";
  switch (flag) {
    case '1':
      // 부서
      udc_acctDeptCdInfo7.cfCommonPopUp(scwin.udc_acctDeptCdInfo7_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo7_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCdInfo7_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  ed_acctDeptNm.setValue("");
  if (ed_acctDeptCd.getValue().trim() != "") {
    scwin.f_SearchPopUp(flag, 'T');
  }
};
scwin.udc_acctDeptCdInfo7_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd("ed_acctDeptCd", "ed_acctDeptNm", '1');
};

//-------------------------------------------------------------------------
// function name : f_resultPopEd
// function desc : 팝업결과 셋팅
// function Parameter : strCd : 코드, strNm : 코드명, rtnList : 결과 리스트
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  //udc
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.gus.cfEnableObjects($p, [btn_add, btn_del, btn_cancel]);
  $c.sbm.execute($p, sbm_tr_Retrieve);
};

// 저장
scwin.f_Save = async function () {
  if (scwin.hid_rentloanShapeCd == "") {
    await $c.win.alert($p, "전체로 조회시 저장할 수 없습니다.");
    return;
  } else if (scwin.hid_collMoneyPayClsCd == "") {
    await $c.win.alert($p, "전체로 조회시 저장할 수 없습니다.");
    return;
  } else if (scwin.hid_usePurpsCd == "") {
    await $c.win.alert($p, "전체로 조회시 저장할 수 없습니다.");
    return;
  } else if (scwin.hid_costClsCd == "") {
    await $c.win.alert($p, "전체로 조회시 저장할 수 없습니다.");
    return;
  }
  if (ds_information.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 데이타가 없습니다.");
    return;
  }
  let confirm = await scwin.f_Check();
  if (!confirm) {
    return;
  }
  let confirm2 = await $c.win.confirm($p, "저장하시겠습니까?");
  if (!confirm2) {
    return;
  } else {
    ds_Vinformation.removeAll();

    // ds_Vinformation으로 dataset 복사
    // 변경이 되지 않은 row도 insert하기 위하여 사용            
    for (i = 0; i < ds_information.getRowCount(); i++) {
      if (ds_information.getRowStatus(i) != "D") {
        ds_Vinformation.insertRow();
        ds_Vinformation.setCellData(i, "rentloanShapeCd", ds_information.getCellData(i, "rentloanShapeCd"));
        ds_Vinformation.setCellData(i, "collMoneyPayClsCd", ds_information.getCellData(i, "collMoneyPayClsCd"));
        ds_Vinformation.setCellData(i, "usePurpsCd", ds_information.getCellData(i, "usePurpsCd"));
        ds_Vinformation.setCellData(i, "acctDeptCd", ds_information.getCellData(i, "acctDeptCd"));
        ds_Vinformation.setCellData(i, "seq", ds_information.getCellData(i, "seq"));
        ds_Vinformation.setCellData(i, "drcrClsCd", ds_information.getCellData(i, "drcrClsCd"));
        ds_Vinformation.setCellData(i, "acctCd", ds_information.getCellData(i, "acctCd"));
        ds_Vinformation.setCellData(i, "costClsCd", ds_information.getCellData(i, "costClsCd"));
        ds_Vinformation.setCellData(i, "sortSeq", ds_information.getCellData(i, "sortSeq"));
      }
    }

    // 모든 row가 delete되었을 경우는 delete만 하기 위해 복사하는 dataset으로 transaction한다.            
    if (ds_Vinformation.getRowCount() == 0) {
      $c.sbm.execute($p, sbm_tr_save_in);
    } else {
      $c.sbm.execute($p, sbm_tr_save_vin);
    }
  }
};
scwin.f_Check = async function () {
  for (i = 0; i < ds_information.getRowCount(); i++) {
    if (ds_information.getCellData(i, "drcrClsCd") == "") {
      await $c.win.alert($p, "[차대구분]은 필수 입력항목입니다.");
      return false;
    }
    if (ds_information.getCellData(i, "acctCd") == "") {
      await $c.win.alert($p, "[계정코드]는 필수 입력항목입니다.");
      return false;
    }
  }
  let validArray = [];
  let ret = await $c.gus.cfValidateGrid($p, gr_information, null, null, validArray, "차대계약정보");
  if (!ret) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  if (scwin.hid_rentloanShapeCd == "") {
    return;
  } else if (scwin.hid_collMoneyPayClsCd == "") {
    return;
  } else if (scwin.hid_usePurpsCd == "") {
    return;
  } else if (scwin.hid_costClsCd == "") {
    return;
  }
  let row = ds_information.insertRow();
  gr_information.setFocusedCell(row, 0, false);
  ds_information.setCellData(row, "rentloanShapeCd", scwin.hid_rentloanShapeCd);
  ds_information.setCellData(row, "collMoneyPayClsCd", scwin.hid_collMoneyPayClsCd);
  ds_information.setCellData(row, "usePurpsCd", scwin.hid_usePurpsCd);
  ds_information.setCellData(row, "acctDeptCd", scwin.hid_acctDeptCd);
  ds_information.setCellData(row, "acctDeptNm", scwin.hid_acctDeptNm);
  ds_information.setCellData(row, "costClsCd", scwin.hid_costClsCd);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  if (ds_information.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다");
  } else {
    let nowRow = ds_information.getRowPosition();
    let sts = ds_information.getRowStatus(gr_information.getFocusedRowIndex());
    if (nowRow != null) {
      if (sts == "C") {
        ds_information.removeRow(nowRow);
        gr_information.setFocusedCell(nowRow - 1, 0, false);
      } else if (sts == "D") {
        //아무동작 하지 않음
      } else {
        ds_information.deleteRow(nowRow);
        //gr_information.setRowDisabled(nowRow, true);
      }
    }
  }
};

// 행취소
scwin.f_cancelRow = function () {
  let nowRow = ds_information.getRowPosition();
  let sts = ds_information.getRowStatus(gr_information.getFocusedRowIndex());
  if (nowRow != null) {
    if (sts == "C") {
      ds_information.removeRow(nowRow);
      gr_information.setFocusedCell(nowRow - 1, 0, false);
    } else {
      ds_information.undoRow(nowRow);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : 팝업
// function Parameter : Colid(컬럼명), objGrd : 그리드
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (sColid, objGrd) {
  if (objGrd == "acctCd") {
    await udc_acctCdContentsInfo3.cfCommonPopUp(scwin.udc_acctCdContentsInfo3_callBackFunc, '', '', null, null, null, null, null, null, null, null, null, null);
  }
};
scwin.udc_acctCdContentsInfo3_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    let rowIdx = gr_information.getFocusedRowIndex();
    ds_information.setCellData(rowIdx, "acctCd", rtnList[0]);
    ds_information.setCellData(rowIdx, "acctNm", rtnList[1]);
  }
};
scwin.gr_acctCd_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == "acctCd") {
    scwin.f_openPopUp(rowIndex, columnIndex);
  }
};

//-------------------------------
// 그리드 높이 늘리고 줄이기
//-------------------------------
scwin.f_grdHeiht = function () {};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};
scwin.f_FieldClear2 = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};
scwin.lc_rentloanShapeCd_onviewchange = function (info) {
  scwin.f_RetrieveCollMoneyPayClsCd();
};

// grid decode format
scwin.acctDeptNmDisplayFm = function (data) {
  return $c.gus.decode($p, data, "", "기본값", data);
};

// 서브미션
scwin.sbm_tr_Retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(gr_information.getRowCount());
  gr_information.setFocusedCell(0, "rentloanShapeCd", false);
  if (ds_information.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_003, "조회결과"));
  }
  scwin.hid_rentloanShapeCd = lc_rentloanShapeCd.getValue();
  scwin.hid_collMoneyPayClsCd = lc_collMoneyPayClsCd.getValue();
  scwin.hid_usePurpsCd = lc_usePurpsCd.getValue();
  scwin.hid_acctDeptCd = ed_acctDeptCd.getValue();
  scwin.hid_acctDeptNm = ed_acctDeptNm.getValue();
  scwin.hid_costClsCd = lc_costClsCd.getValue();
};

// 서브미션
scwin.sbm_tr_save_vin_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_save_in_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_ds_collMoneyPayClsCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_collMoneyPayClsCd.sort("col1", 0);
  lc_collMoneyPayClsCd.setSelectedIndex(1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약형태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanShapeCd',style:'',submenuSize:'auto',ref:'data:dma_Retrieve.rentloanShapeCd',chooseOptionLabel:'전체','ev:onviewchange':'scwin.lc_rentloanShapeCd_onviewchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수금지급구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_collMoneyPayClsCd',style:'',submenuSize:'auto',ref:'data:dma_Retrieve.collMoneyPayClsCd',chooseOptionLabel:'전체',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_collMoneyPayClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용용도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_usePurpsCd',style:'',submenuSize:'auto',ref:'data:dma_Retrieve.usePurpsCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo7',codeId:'ed_acctDeptCd',popupID:'',popupTitle:'',validTitle:'',nameId:'ed_acctDeptNm',style:'',maxlengthCode:'5',allowCharCode:'0-9',code:'acctDeptCd',refDataCollection:'dma_Retrieve',id:'udc_acctDeptCdInfo7','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',btnId:'btn_acctDeptCd'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비용구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_costClsCd',style:'',submenuSize:'auto',ref:'data:dma_Retrieve.costClsCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차대계약정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-red',id:'',label:'귀속부서를 넣지 않고 조회시 기본값을 보여줍니다. ',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_information',gridUpYn:'N',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_information',id:'gr_information',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계약</br>형태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'수급지급구분',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'사용용도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'귀속</br>부서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'귀속부서명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'비용구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'차대</br>구분',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'계정코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'계정명',width:'200'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'정렬</br>순번',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanShapeCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayClsCd',inputType:'select',style:'',value:'',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'usePurpsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'130',displayFormatter:'scwin.acctDeptNmDisplayFm',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costClsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrClsCd',inputType:'select',style:'',value:'',width:'70',readOnly:'false',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차변'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대변'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'textImage',style:'',value:'',width:'100',readOnly:'true',imageClickFunction:'scwin.gr_acctCd_ontextimageclick',viewType:'icon',dataType:'text',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sortSeq',value:'',displayMode:'label',readOnly:'false',textAlign:'right',maxLength:'2',allowChar:'0-9',dataType:'number',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',cancelFunction:'scwin.f_cancelRow',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bUpdate',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-ico',id:'',label:'전표내역 계정 등록 시 부가세가 존재하는 경우에 내역일 경우 ',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마지막행은 전표분개 자동생성 시 차대변 금액을 일치시키는 행이 되므로 올바른 계정을 등록하십시요(예:미지급비용, 미수금)',style:''}},{T:1,N:'xf:group',A:{id:'',class:'info-list row'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록 예)',style:''}},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'임차(임차료)',class:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차변 4203550 - 원)지급임차료-토지/건물',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차변 1111210 - 부가세대급금-일반',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대변 2100810 - 미지급비용-거래처',style:''}}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'임대(임대료)',class:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대변 6110050 - 수입임대료 ',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대변 2100710 - 부가세예수금-일반 ',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차변 1110730 - 미수금-임대차 ',style:''}}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent',id:'udc_acctCdContentsInfo3',nameId:'',popupID:'',popupTitle:'',selectID:'retrieveAcctCdContentsInfo3',style:'visibility:hidden;display: none;',validTitle:'',code:'gridAcctCd'}}]}]}]}]})