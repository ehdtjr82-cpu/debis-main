/*amd /ui/ds/fs/distaccheck/fs_300_01_02b.xml 32344 3f9e3463c90626bcfd6c05beb40f9e0482dd3dc0783ad08254c7c9aa84a41dac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_userDefinePattern',saveRemovedData:'true','ev:ondataload':'scwin.ds_userDefinePattern_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'patternNm',name:'유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'patternRegId',name:'패턴등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defaultYn',name:'기본여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePatternNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_applicableItem',saveRemovedData:'true','ev:ondataload':'scwin.ds_applicableItem_ondataload','ev:onrowpositionchange':'scwin.ds_applicableItem_onrowpositionchange','ev:oninsertrow':'scwin.ds_applicableItem_oninsertrow','ev:onremoverow':'scwin.ds_applicableItem_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_applyContent',saveRemovedData:'true','ev:ondataload':'scwin.ds_applyContent_ondataload','ev:onrowpositionchange':'scwin.ds_applyContent_onrowpositionchange','ev:oninsertrow':'scwin.ds_applyContent_oninsertrow','ev:onremoverow':'scwin.ds_applyContent_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'columnCd',name:'컬럼코드(공통코드:FS833)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'patternNm',name:'유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'patternRegId',name:'패턴등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'preSortSeq',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'USER',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'patternNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search1',action:'/ds.fs.distaccheck.defineuserpattern.RetrieveUserDefinePatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_userDefinePattern","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_userDefinePattern","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'/ds.fs.distaccheck.defineuserpattern.RetrieveApplicableItemListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_applicableItem","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_applicableItem","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search3',action:'/ds.fs.distaccheck.defineuserpattern.RetrieveApplyContentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_applyContent","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_applyContent","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search3_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save3',action:'/ds.fs.distaccheck.defineuserpattern.RegistDefineUserPatternMgntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_userDefinePattern","key":"IN_DS1"},{"id":"ds_applyContent","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save1',action:'/ds.fs.distaccheck.defineuserpattern.RegistDefineUserPatternMgntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_userDefinePattern","key":"IN_DS1"},{"id":"ds_applyContent","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save1_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.ed_userId = "";
scwin.ed_patternNm = "";
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.deleteRow = 0;
scwin.totalRow = 0;

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드데이터 호출   
  const codeOptions = [{
    grpCd: "RC003",
    compID: "gr_userDefinePattern:defaultYn"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  dma_search.set("userId", scwin.userId);
};

//-------------------------------------------------------------------------
// 공통코드 데이터 가져오기
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  scwin.btn_retrieve_onClick();
};

//-------------------------------------------------------------------------
// 첫번째  그리드 행 추가 - 차수별,배부부서코드  적용
//-------------------------------------------------------------------------
scwin.f_AddRowRegion = function () {
  let row = ds_userDefinePattern.insertRow();
  gr_userDefinePattern.setFocusedCell(row, 0);
  ds_userDefinePattern.setCellData(row, "patternRegId", scwin.userId);
  ds_userDefinePattern.setCellData(row, "defaultYn", "N");
  ds_applicableItem.removeAll();
  ds_applyContent.removeAll();
};

//-------------------------------------------------------------------------
// 첫번째  그리드 행 삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  let row = gr_userDefinePattern.getFocusedRowIndex();
  if (ds_userDefinePattern.getRowStatus(row) == "C") {
    ds_userDefinePattern.removeRow(row);
  } else {
    ds_userDefinePattern.modifyRowStatus(row, "D");
  }

  // scwin.deleteRow -= 1;
  // ds_userDefinePattern.modifyRowStatus(gr_userDefinePattern.getFocusedRowIndex(), "D");
  // ds_userDefinePattern.setCellData(ds_userDefinePattern.getRowPosition(), "patternRegId", scwin.userId); 
};

//-------------------------------------------------------------------------
// 첫번째  그리드 행 취소
//-------------------------------------------------------------------------
scwin.f_UndoRow = function () {
  let row = gr_userDefinePattern.getFocusedRowIndex();
  if (ds_userDefinePattern.getRowStatus(row) == "C") {
    ds_userDefinePattern.removeRow(row);
  } else {
    ds_userDefinePattern.undoRow(row);
  }
};

//-------------------------------------------------------------------------
// 조회시 딜레이를 안걸어주면 사용자 정의 패턴 기본설정 데이터 호출 순서가 꼬여서 안나옴
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  dma_search.set("userId", scwin.userId);
  $c.sbm.execute($p, sbm_search1);
};

//-------------------------------------------------------------------------
// 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_userDefinePattern_ondataload = function () {
  scwin.deleteRow = ds_userDefinePattern.getTotalRow();
  gr_userDefinePattern.setFocusedCell(0, 0);
  spa_totalRows1.setValue(ds_userDefinePattern.getTotalRow());
  scwin.rowDelete = ds_userDefinePattern.getTotalRow();
  scwin.totalRow = ds_userDefinePattern.getTotalRow();
  if (ds_userDefinePattern.getTotalRow() != 0) {
    dma_search.set("patternNm", ds_userDefinePattern.getCellData(gr_userDefinePattern.getFocusedRowIndex(), "patternNm"));
    $c.sbm.execute($p, sbm_search2);
  }
};

//-------------------------------------------------------------------------
// 적용가능항목 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_applicableItem_ondataload = function () {
  gr_applicableItem.setFocusedCell(0, "cd");
  let rowCnt = ds_applicableItem.getTotalRow();
  spa_totalRows2.setValue(rowCnt);
  // dma_search.set("patternNm", ds_userDefinePattern.getCellData(gr_userDefinePattern.getFocusedColumnIndex(), "patternNm"));

  $c.sbm.execute($p, sbm_search3);
};

//-------------------------------------------------------------------------
// 적용내역 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_applyContent_ondataload = function () {
  spa_totalRows3.setValue(ds_applyContent.getTotalRow());
  scwin.f_sortSeq();
};

//-------------------------------------------------------------------------
// 적뇽내역 정렬
//-------------------------------------------------------------------------
scwin.f_sortSeq = function () {
  for (i = 0; i < ds_applyContent.getTotalRow(); i++) {
    ds_applyContent.setCellData(i, "sortSeq", i + 1);
  }
  $c.sbm.execute($p, sbm_save3);
};

//-------------------------------------------------------------------------
// 저장 f_save
//-------------------------------------------------------------------------
scwin.btn_save_onClick = async function (e) {
  let curRow = ds_userDefinePattern.getTotalRow();
  if (ds_userDefinePattern.getModifiedIndex().length == 0 && ds_applyContent.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "사용자정의패턴, 적용내역")); // 은(는) 변경사항이 없습니다
    return;
  }
  if (ds_userDefinePattern.getCellData(gr_userDefinePattern.getFocusedRowIndex(), "patternNm") == "") {
    $c.win.alert($p, "사용자정의패턴의 패턴명을 입력해 주시기 바랍니다.");
    return;
  }
  if (ds_userDefinePattern.getCellData(gr_userDefinePattern.getFocusedRowIndex(), "defaultYn") == "") {
    $c.win.alert($p, "사용자정의패턴의 기본설정을 설정해 주시기 바랍니다.");
    return;
  }
  let checkDefaultYn = 0;
  for (i = 0; i < ds_userDefinePattern.getTotalRow(); i++) {
    if (ds_userDefinePattern.getCellData(i, "defaultYn") == "Y") {
      checkDefaultYn++;
    }
  }
  if (checkDefaultYn > 1) {
    $c.win.alert($p, "사용자정의패턴의 기본설정 Y값은 하나 이상일 수 없습니다.");
    return;
  }

  // if (await $c.gus.cfValidate([gr_userDefinePattern]) && await $c.gus.cfValidate([gr_applyContent])) {
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save1);
  }
  // }
};

//-------------------------------------------------------------------------
// 저장 성공시
//-------------------------------------------------------------------------
scwin.sbm_save1_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_001);

    // scwin.btn_retrieve_onClick();
    $c.sbm.execute($p, sbm_search1);
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
scwin.sbm_search1_submitdone = function (e) {
  gr_userDefinePattern.setFocusedCell(0, 0);
  scwin.gr_userDefinePattern_onDblClick();
};

//-------------------------------------------------------------------------
// 사용자 정의패턴 그리드 더블클릭
//-------------------------------------------------------------------------
scwin.gr_userDefinePattern_onDblClick = function (rowIndex, columnIndex, columnId) {
  dma_search.set("patternNm", ds_userDefinePattern.getCellData(gr_userDefinePattern.getFocusedRowIndex(), "patternNm"));
  if (ds_userDefinePattern.getRowStatus(rowIndex) == "R") {
    $c.sbm.execute($p, sbm_search2);
    $c.sbm.execute($p, sbm_search3);
  }
  gr_userDefinePattern.setFocusedCell(rowIndex, columnIndex);
};

//-------------------------------------------------------------------------
// 우측으로이동 버튼 클릭시   Row Delete (mark)
//-------------------------------------------------------------------------
scwin.btn_LeftMove_onClick = function (e) {
  let checkNm = ds_applicableItem.getCellData(gr_applicableItem.getFocusedRowIndex(), "cdNm");
  for (i = 0; i < ds_applyContent.getTotalRow(); i++) {
    if (ds_applyContent.getCellData(i, "cdNm") == checkNm) {
      $c.win.alert($p, "항목명 : [" + checkNm + "] 은 이미 적용 되어 있습니다.");
      return;
    }
  }
  ds_applyContent.insertRow();
  ds_applyContent.setCellData(ds_applyContent.getTotalRow() - 1, "patternNm", ds_userDefinePattern.getCellData(ds_userDefinePattern.getRowPosition(), "patternNm"));
  ds_applyContent.setCellData(ds_applyContent.getTotalRow() - 1, "sortSeq", ds_applyContent.getTotalRow());
  ds_applyContent.setCellData(ds_applyContent.getTotalRow() - 1, "columnCd", ds_applicableItem.getCellData(ds_applicableItem.getRowPosition(), "cd"));
  ds_applyContent.setCellData(ds_applyContent.getTotalRow() - 1, "cdNm", ds_applicableItem.getCellData(ds_applicableItem.getRowPosition(), "cdNm"));
  ds_applyContent.setCellData(ds_applyContent.getTotalRow() - 1, "patternRegId", scwin.userId);
};

//-------------------------------------------------------------------------
// 좌측으로 이동
//-------------------------------------------------------------------------
scwin.btn_RightMove_onClick = function (e) {
  ds_applyContent.modifyRowStatus(gr_applyContent.getFocusedRowIndex(), "D");
  ds_userDefinePattern.setCellData(ds_userDefinePattern.getRowPosition(), "patternRegId", scwin.userId);
  let check = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "sortSeq");
};

//-------------------------------------------------------------------------
// 위로이동
//-------------------------------------------------------------------------
scwin.btn_UpMove_onClick = function (e) {
  let cntD = 0;
  let cntA = 0;
  for (i = 0; i < ds_applyContent.getTotalRow(); i++) {
    if (ds_applyContent.getRowStatus(i) == "D") {
      cntD++;
    }
    if (ds_applyContent.getRowStatus(i) == "C") {
      cntA++;
    }
  }
  if (cntD != 0) {
    $c.win.alert($p, "적용내역에서 삭제된 항목이 있습니다.\n저장후에 순서를 조정하시기 바랍니다.");
    return;
  }
  if (cntA != 0) {
    $c.win.alert($p, "적용내역에서 추가된 항목이 있습니다.\n저장후에 순서를 조정하시기 바랍니다.");
    return;
  }
  let tempSortSeq;
  let tempCdNm;
  let tempColumnCd;
  let tempPatternNm;
  if (ds_applyContent.getRowPosition() != 0) {
    tempSortSeq = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "sortSeq");
    tempCdNm = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "cdNm");
    tempColumnCd = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "columnCd");
    tempPatternNm = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "patternNm");
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "sortSeq", ds_applyContent.getCellData(ds_applyContent.getRowPosition() - 1, "sortSeq"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "cdNm", ds_applyContent.getCellData(ds_applyContent.getRowPosition() - 1, "cdNm"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "columnCd", ds_applyContent.getCellData(ds_applyContent.getRowPosition() - 1, "columnCd"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "patternNm", ds_applyContent.getCellData(ds_applyContent.getRowPosition() - 1, "patternNm"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "userId", scwin.userId);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() - 1, "sortSeq", tempSortSeq);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() - 1, "cdNm", tempCdNm);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() - 1, "columnCd", tempColumnCd);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() - 1, "patternNm", tempPatternNm);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() - 1, "userId", scwin.userId);
  }
  ds_userDefinePattern.setCellData(ds_userDefinePattern.getRowPosition(), "userId", scwin.userId);
  gr_applyContent.setFocusedCell(ds_applyContent.getRowPosition() - 1, "sortSeq");
};

//-------------------------------------------------------------------------
// 아래로이동
//-------------------------------------------------------------------------
scwin.btn_DownMove_onClick = function (e) {
  let cntD = 0;
  let cntA = 0;
  for (i = 0; i < ds_applyContent.getTotalRow(); i++) {
    if (ds_applyContent.getRowStatus(i) == "D") {
      cntD++;
    }
    if (ds_applyContent.getRowStatus(i) == "C") {
      cntA++;
    }
  }
  if (cntD != 0) {
    $c.win.alert($p, "적용내역에서 삭제된 항목이 있습니다. <br>저장후에 순서를 조정하시기 바랍니다.");
    return;
  }
  if (cntA != 0) {
    $c.win.alert($p, "적용내역에서 추가된 항목이 있습니다.<br>저장후에 순서를 조정하시기 바랍니다.");
    return;
  }
  let tempSortSeq;
  let tempCdNm;
  let tempColumnCd;
  let tempPatternNm;
  if (ds_applyContent.getRowPosition() < ds_applyContent.getTotalRow() - 1) {
    tempSortSeq = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "sortSeq");
    tempCdNm = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "cdNm");
    tempColumnCd = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "columnCd");
    tempPatternNm = ds_applyContent.getCellData(ds_applyContent.getRowPosition(), "patternNm");
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "sortSeq", ds_applyContent.getCellData(ds_applyContent.getRowPosition() + 1, "sortSeq"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "cdNm", ds_applyContent.getCellData(ds_applyContent.getRowPosition() + 1, "cdNm"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "columnCd", ds_applyContent.getCellData(ds_applyContent.getRowPosition() + 1, "columnCd"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "patternNm", ds_applyContent.getCellData(ds_applyContent.getRowPosition() + 1, "patternNm"));
    ds_applyContent.setCellData(ds_applyContent.getRowPosition(), "userId", scwin.userId);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() + 1, "sortSeq", tempSortSeq);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() + 1, "cdNm", tempCdNm);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() + 1, "columnCd", tempColumnCd);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() + 1, "patternNm", tempPatternNm);
    ds_applyContent.setCellData(ds_applyContent.getRowPosition() + 1, "userId", scwin.userId);
    gr_applyContent.setFocusedCell(ds_applyContent.getRowPosition() + 1, "sortSeq");
  }
};
scwin.sbm_search3_submitdone = function (e) {
  gr_applyContent.setFocusedCell(0, 0);
};

// scwin.ds_applicableItem_oninsertrow = function (info) {
//     spa_totalRows2.setValue(ds_applicableItem.getTotalRow());
// };

// scwin.ds_applicableItem_onremoverow = function (info) {
//     spa_totalRows2.setValue(ds_applicableItem.getTotalRow());
// };

// scwin.ds_applyContent_oninsertrow = function (info) {
//     spa_totalRows3.setValue(ds_applyContent.getTotalRow());
// };

// scwin.ds_applyContent_onremoverow = function (info) {
//     spa_totalRows3.setValue(ds_applyContent.getTotalRow());
// };
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox col3 wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사용자정의패턴 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_userDefinePattern',focusMode:'row',id:'gr_userDefinePattern',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',resize:'true',columnMove:'true',editModeEvent:'onsecondclick',rowStatusVisible:'true',rowStatusHeaderValue:'상태','ev:oncelldblclick':'scwin.gr_userDefinePattern_onDblClick',enterKeyMove:'edit'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',value:'패턴명',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'기본설정',width:'100'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column3',value:'항목명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'패턴명',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'patternNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'defaultYn',inputType:'select',removeBorderStyle:'false',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'patternRegId',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prePatternNm',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',gridID:'gr_userDefinePattern',rowAddFunction:'scwin.f_AddRowRegion',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_UndoRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적용가능항목',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_applicableItem',focusMode:'row',id:'gr_applicableItem',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column1',inputType:'text',removeBorderStyle:'false',value:'코드번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'항목명',width:'160'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column3',value:'항목명',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cdNm',inputType:'text',removeBorderStyle:'false',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'grpCd',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'shattle flex-row',style:'width: 25px'},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-right',id:'btn_LeftMove',style:'',type:'button','ev:onclick':'scwin.btn_LeftMove_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_RightMove',type:'button',class:'btn ico btn-left','ev:onclick':'scwin.btn_RightMove_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적용내역',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_applyContent',focusMode:'row',id:'gr_applyContent',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',rowNumHeaderValue:'순번',rowStatusVisible:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column2',inputType:'text',removeBorderStyle:'false',value:'항목명',width:'160'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'순번',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sortSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cdNm',inputType:'text',removeBorderStyle:'false',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'columnCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'patternNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'patternRegId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'preSortSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'userId',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle flex-row',id:'',style:'width: 25px'},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-up',id:'btn_UpMove',style:'',type:'button','ev:onclick':'scwin.btn_UpMove_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_DownMove',style:'',type:'button','ev:onclick':'scwin.btn_DownMove_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'저장',style:'',objType:'bSave',userAuth:'D','ev:onclick':'scwin.btn_save_onClick'}}]}]}]}]}]}]}]}]})