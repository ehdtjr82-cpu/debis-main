/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_03_02b.xml 84266 7aa332257dbc9d16cf4e76d5094f67a2dcd6ebf73022a67ca8bdf702dfd823d5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdYm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilOilStatNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'listClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsaleYn',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilSellPurchase',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatNm',name:'주유소명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'유류업무구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilBizClsCd',name:'유류사업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilRcpayPatternCd',name:'유류수불유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCoAfClsCd',name:'판매구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'유종구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNo',name:'매출입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNm',name:'매출거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stockAcctDeptCd',name:'상품귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchAcctDeptCd',name:'상품귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchAcctDeptNm',name:'매출입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'리터',dataType:'text',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pcostAmt',name:'원가',dataType:'text',defaultValue:'',encYN:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'taxinvcNo',name:'계산서번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bilgDt',name:'청구일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'거래처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingPurpsCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrSeq',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSelfClsCd',name:'name28',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_copyTL203',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyTL104',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyTL103',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyTL100',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyTL101',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyTL105',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyZZ205',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyTL112',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_copyTL113',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList206',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name2'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsadjmmgnt.RetrieveFmsOilSellPurchaseInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_oilSellPurchase","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilSellPurchase","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.eq.fmsmgnt.fmsadjmmgnt.SaveFmsOilSellPurchaseInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oilSellPurchase","key":"IN_DS1","action":"modified"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ps/pscommon.js',type:'text/javascript',scopeVariable:'pscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.retrieveClick = false; //조회버튼을클릭햇는지 확인하는 변수
scwin.oldData = ""; //편집되기 전 데이터
scwin.curRow = -1; //현재 행

scwin.subtotalYn = "false";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "TL203",
    compID: "lc_slipKndCd"
  }, {
    grpCd: "TL104",
    compID: "lc_dsaleYn"
  }, {
    grpCd: "TL103"
  }, {
    grpCd: "TL100"
  }, {
    grpCd: "TL101"
  }, {
    grpCd: "TL105"
  }, {
    grpCd: "ZZ205"
  }, {
    grpCd: "TL112"
  }, {
    grpCd: "TL113"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  lc_slipKndCd.setSelectedIndex(0); // 전표종류
  lc_listClsCd.setSelectedIndex(0); // 목록구분
  lc_dsaleYn.setSelectedIndex(0); // 판매구분
  lc_subSumCd.setSelectedIndex(0); // 소계기준

  //tobe추가 : 그리드 다시 그릴때 그리드 안에 셋팅한 공통코드가 박히지 않아서 데이터리스트로 만들어 셋팅
  var dltStr = "";
  var dlt;

  //전표종류
  dltStr = "dlt_commonCodeTL203"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL203.setJSON(dlt.getAllJSON());

  //판매구분
  dltStr = "dlt_commonCodeTL104"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL104.setJSON(dlt.getAllJSON());

  //유류업무구분
  dltStr = "dlt_commonCodeTL103"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL103.setJSON(dlt.getAllJSON());

  //유류사업구분
  dltStr = "dlt_commonCodeTL100"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL100.setJSON(dlt.getAllJSON());

  //매출입구분
  dltStr = "dlt_commonCodeTL101"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL101.setJSON(dlt.getAllJSON());

  //유종구분
  dltStr = "dlt_commonCodeTL105"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL105.setJSON(dlt.getAllJSON());

  //소속구분
  dltStr = "dlt_commonCodeZZ205"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyZZ205.setJSON(dlt.getAllJSON());
  ds_copyZZ205.insertJSON(0, [{
    "cd": "F",
    "cdNm": "F"
  }]);

  //거래처구분코드
  dltStr = "dlt_commonCodeTL112"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL112.setJSON(dlt.getAllJSON());

  //거래구분코드
  dltStr = "dlt_commonCodeTL113"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_copyTL113.setJSON(dlt.getAllJSON());
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_stdYm.setValue($c.date.getServerDateTime($p, "yyyyMM")); // 기준년월
  ed_endYm.setValue($c.date.getServerDateTime($p, "yyyyMM")); // 기준년월
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //ds_search.UseChangeInfo = "false";
  if (!(await $c.gus.cfValidate($p, [tb_search]))) return;
  scwin.retrieveClick = true;
  //조회데이터 셋팅
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("slipKndCd", lc_slipKndCd.getValue());
  dma_search.set("stdYm", ed_stdYm.getValue());
  dma_search.set("endYm", ed_endYm.getValue());
  dma_search.set("acctDeptCd", ed_acctDeptCd.getValue());
  dma_search.set("oilOilStatNo", ed_oilOilStatNo.getValue());
  dma_search.set("listClsCd", lc_listClsCd.getValue());
  dma_search.set("dsaleYn", lc_dsaleYn.getValue());
  gr_oilSellPurchase.setSubtotalVisible(false);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_oilSellPurchase.getRowCount();
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      await scwin.f_MakeSubSum(); // 소계 재생성하기

      // 매출조정전표(H18) 조회시 조회결과 있으면 판매구분, 매출입거래처, 매출입부서 수정 가능토록 수정
      if (lc_slipKndCd.getValue() == "H18") {
        gr_oilSellPurchase.setColumnReadOnly("preCoAfClsCd", false);
        gr_oilSellPurchase.setColumnReadOnly("selpchClntNo", false);
        gr_oilSellPurchase.setColumnReadOnly("selpchAcctDeptNm", false);
      }

      //tobe 추가 : 조회후, 그리드 상단 포커스표시
      gr_oilSellPurchase.setFocusedCell(0, 0);
    }
    totalRows.setValue(rowCnt);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ds_oilSellPurchase.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['유류매출입 집계 그리드']); //정보 없음
    return;
  }
  var vaildArray = [{
    id: "slipKndCd",
    name: "전표종류",
    mandatory: true,
    maxLength: 3
  }, {
    id: "oilOilStatNo",
    name: "주유소코드",
    mandatory: true,
    maxLength: 3
  }, {
    id: "stdYm",
    name: "기준년월",
    mandatory: true,
    valid: "date",
    format: "YYYYMM",
    length: 6
  }, {
    id: "preCoAfClsCd",
    name: "판매구분",
    mandatory: true,
    maxLength: 3
  }, {
    id: "selpchClntNo",
    name: "매출입거래처",
    mandatory: true,
    maxLength: 6
  }, {
    id: "selpchClntNm",
    name: "매출입거래처명",
    mandatory: true
  }, {
    id: "selpchAcctDeptCd",
    name: "상품귀속부서코드",
    mandatory: true,
    maxLength: 5
  }, {
    id: "selpchAcctDeptNm",
    name: "매출입부서",
    mandatory: true
  }];
  if (!(await $c.gus.cfValidateGrid($p, gr_oilSellPurchase, null, null, vaildArray, "유류매출입 집계 관리"))) {
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //저장 확인
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var deleteRow = ds_oilSellPurchase.getRowIndexByStatus("D");
    if (deleteRow.length > 0) {
      ds_oilSellPurchase.removeRows(deleteRow);
    }
    ds_oilSellPurchase.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); //성공적으로 저장하였습니다
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  if (!scwin.retrieveClick) return; //tobe추가 : 조회를 한번이라도 누르지 않았으면 추가 안됨.

  ds_oilSellPurchase.insertRow();

  //tobe추가 : 그리드 포커스 셋팅
  gr_oilSellPurchase.setFocusedCell(ds_oilSellPurchase.getRowCount() - 1, "slipKndCd");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'oilOilStatNo', "ZZZ");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'oilOilStatNm', "매출조정용주유소");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'stdYm', ed_stdYm.getValue());
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'aggrSeq', 0);
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'slipKndCd', "H18"); // 매출조정전표
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'oilTskClsCd', "F");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'oilkndCd', "01");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'preCoAfClsCd', "");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'oilBizClsCd', "01");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'oilSelfClsCd', "J");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'homeClsCd', "F");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'txnClsCd', "02");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'selpchAcctDeptCd', "");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'selpchAcctDeptNm', "");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'selpchClntNo', "");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'selpchClntNm', "");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'oilingPurpsCd', "");
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'qty', 0);
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'amt', 0);
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'vatAmt', 0);
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'pcostAmt', 0);
  ds_oilSellPurchase.setCellData(ds_oilSellPurchase.getRowPosition(), 'delYn', 0);
  gr_oilSellPurchase.setColumnReadOnly('stdYm', false); //기준년월
  gr_oilSellPurchase.setColumnReadOnly('preCoAfClsCd', false); //팬매구분
  gr_oilSellPurchase.setColumnReadOnly('selpchClntNo', false); //매출입거래처    
  gr_oilSellPurchase.setColumnReadOnly('selpchAcctDeptNm', false); //상품귀속부서    
  gr_oilSellPurchase.setColumnReadOnly('qty', false); //리터    
  gr_oilSellPurchase.setColumnReadOnly('amt', false); //금액    
  gr_oilSellPurchase.setColumnReadOnly('vatAmt', false); //부가세    
  gr_oilSellPurchase.setColumnReadOnly('pcostAmt', false); //원가
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = async function () {
  var focusRow = gr_oilSellPurchase.getFocusedRowIndex(); //현재 포커스 되어잇는 row
  var focusCol = gr_oilSellPurchase.getFocusedColumnIndex(); //현재 포커스 되어있는 column

  if (ds_oilSellPurchase.getRowCount() == 0) {
    await $c.win.alert($p, "삭제할 데이타가 없습니다");
    return;
  }
  var slipNo = "";
  var slipKndCd = "";
  slipNo = ds_oilSellPurchase.getCellData(focusRow, "slipNo");
  slipKndCd = ds_oilSellPurchase.getCellData(focusRow, "slipKndCd");
  if (slipKndCd != "H18") {
    // 유류매출조정전표만 삭제 가능
    await $c.win.alert($p, "유류매출조정전표만 삭제할 수 있습니다.");
    return;
  }
  if (slipNo != "") {
    // 전표 생성후에는 삭제 불가
    await $c.win.alert($p, "전표를 생성하였으므로 삭제할 수 없습니다.");
    return;
  }

  //tobe 변경 : 삽입한 행삭제는 화면에서도 바로 삭제. 삽입한 행이 아닌경우, 화면에서는 지워지지 않고 status만 삭제표시
  if (ds_oilSellPurchase.getRowStatus(focusRow) == "C") {
    ds_oilSellPurchase.removeRow(focusRow);
  } else {
    //tobe추가 : D처리시, 해당행 readOnly됨.
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'stdYm', true); //기준년월
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'preCoAfClsCd', true); //팬매구분
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'selpchClntNo', true); //매출입거래처    
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'selpchAcctDeptNm', true); //상품귀속부서    
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'qty', true); //리터    
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'amt', true); //금액    
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'vatAmt', true); //부가세    
    gr_oilSellPurchase.setCellReadOnly(focusRow, 'pcostAmt', true); //원가
    ds_oilSellPurchase.deleteRow(focusRow);
    for (var i = 0; i < 28; i++) {
      ds_oilSellPurchase.setCellData(focusRow, ds_oilSellPurchase.getColumnID(i), ds_oilSellPurchase.getOriginalCellData(focusRow, ds_oilSellPurchase.getColumnID(i)));
    }

    //deleteRow 이후, 포커스 유지
    gr_oilSellPurchase.setFocusedCell(focusRow, focusCol);
  }
};

//-------------------------------------------------------------------------
//  Eidt_Control FUNCTION
//-------------------------------------------------------------------------
scwin.f_EditNone = function (row) {
  gr_oilSellPurchase.setColumnReadOnly("qty", true);
  gr_oilSellPurchase.setColumnReadOnly("amt", true);
  gr_oilSellPurchase.setColumnReadOnly("vatAmt", true);
  gr_oilSellPurchase.setColumnReadOnly("pcostAmt", true);
};
scwin.f_EditTrue = function (row) {
  gr_oilSellPurchase.setColumnReadOnly("qty", false);
  gr_oilSellPurchase.setColumnReadOnly("amt", false);
  gr_oilSellPurchase.setColumnReadOnly("vatAmt", false);
  gr_oilSellPurchase.setColumnReadOnly("pcostAmt", false);
};
scwin.f_EditControl = function (row) {
  if (row > 0) {
    var slipNo = ds_oilSellPurchase.getCellData(row, "slipNo");
    if (slipNo != "") {
      scwin.f_EditNone(row);
    } else {
      scwin.f_EditTrue(row);
    }
  }
};

//-------------------------------------------------------------------------
//  소계 설정 FUNCTION
//-------------------------------------------------------------------------	
scwin.f_MakeSubSum = function () {
  var clsCd = lc_subSumCd.getValue();
  var slipKndCd = "";
  var options = {};

  //gr_oilSellPurchase.Redraw = "false";
  if (clsCd == "") {
    gr_oilSellPurchase.setSubtotalVisible(false);
    scwin.subtotalYn = "false";
  } else if (clsCd == "O") {
    // 주유소기준
    gr_oilSellPurchase.setSubtotalVisible(true);
    scwin.subtotalYn = "true";
    options.sortIndex = "oilOilStatNm stdYm selpchClntNm selpchAcctDeptNm";
    options.sortOrder = "1 1 1 1";
    ds_oilSellPurchase.multisort(options);
    scwin.drawGrid(clsCd); // subtotal targetColumnID 다르게 설정하여 다시 그려줌.
  } else if (clsCd == "A") {
    // 귀속부서 기준
    gr_oilSellPurchase.setSubtotalVisible(true);
    scwin.subtotalYn = "true";
    options.sortIndex = "selpchAcctDeptNm stdYm selpchClntNm oilOilStatNm";
    options.sortOrder = "1 1 1 1";
    ds_oilSellPurchase.multisort(options);
    scwin.drawGrid(clsCd); // subtotal targetColumnID 다르게 설정하여 다시 그려줌.
  } else if (clsCd == "C") {
    // 거래처 기준
    gr_oilSellPurchase.setSubtotalVisible(true);
    scwin.subtotalYn = "true";
    options.sortIndex = "selpchClntNm stdYm oilOilStatNm selpchAcctDeptNm";
    options.sortOrder = "1 1 1 1";
    ds_oilSellPurchase.multisort(options);
    scwin.drawGrid(clsCd); // subtotal targetColumnID 다르게 설정하여 다시 그려줌.
  }
  slipKndCd = lc_slipKndCd.getValue();
  if (slipKndCd == "H11") {
    // 매입전표인 경우 소계 제거
    gr_oilSellPurchase.setSubtotalVisible(false);
    scwin.subtotalYn = "false";
  }

  // ds_oilSellPurchase.SortExpr   = sortCls;
  // ds_oilSellPurchase.sort();
  // ds_oilSellPurchase.SubsumExpr = subSumCls;

  // ds_oilSellPurchase.reform();
  // ds_oilSellPurchase.ResetSubsum();		
  // gr_oilSellPurchase.Redraw = "true";	

  gr_oilSellPurchase.setVisibleRowNum(14);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  var pWhere; // 조회조건
  switch (disGubun) {
    case 1:
      // 거래처
      await udc_clnt.cfCommonPopUp(scwin.udc_clnt_callbackFunc, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
    case 2:
      // 매출입부서
      await udc_acctDept.cfCommonPopUp(scwin.udc_acctDept_callbackFunc, pCode, "", 'T', null, null, null, null, null, null, null, null, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 콜백함수
//-------------------------------------------------------------------------
scwin.udc_clnt_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.udc_acctDept_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, ed_acctDeptNm);
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if ($c.gus.cfIsNull($p, isCode) || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var options = {
    fileName: "FMS유류매출입집계관리.xlsx",
    sheetName: "FMS유류매출입집계관리",
    useSubTotal: scwin.subtotalYn,
    useSubTotalData: scwin.subtotalYn,
    startRowIndex: 9,
    startColumnIndex: 0,
    type: 1,
    columnMove: true,
    //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    hiddenVisible: true,
    foldColumns: "4,5,10,11"
  };
  var lc_dsaleYnV = lc_dsaleYn.getText(true) || "선택";
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: "FMS유류매출입집계관리",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: `거래처 [${ed_clntNm.getValue()}[${ed_clntNo.getValue()}]]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: `전표종류 [${lc_slipKndCd.getText(true)}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 4,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: `기준년월 [${$c.date.formatDateTime($p, ed_stdYm.getValue(), "yyyy/MM")}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 5,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: `귀속부서 [${ed_acctDeptNm.getValue()}[${ed_acctDeptCd.getValue()}]]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 6,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: `주유소 [${ed_oilOilStatNm.getValue()}[${ed_oilOilStatNo.getValue()}]]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 7,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: `목록구분 [${lc_listClsCd.getText(true)}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 8,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 22,
    text: `유류판매구분 [${lc_dsaleYnV}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_oilSellPurchase, options, infoArr);
};
scwin.gr_oilSellPurchase_onrowindexchange = function (rowIndex, oldRow) {
  if (rowIndex > -1) {
    scwin.f_EditControl(rowIndex); // Edit 속성 확인
  }
};
scwin.gr_oilSellPurchase_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    if (columnId == "slipNo" && ds_oilSellPurchase.getCellData(rowIndex, "slipNo") != "") {
      $c.gus.cfShowSlipInfo($p, ds_oilSellPurchase.getCellData(rowIndex, "slipNo"));
    }
  }
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_acctDept_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.lc_subSumCd_onselected = function () {
  if (ds_oilSellPurchase.getRowCount() > 0) {
    scwin.f_MakeSubSum(); // 소계 재생성하기
  }
};

// tobe삭제 : onafteredit이랑 두번타서 팝업이 두개 뜨므로 해당부분 삭제
// scwin.gr_oilSellPurchase_ontextimageclick = async function (rowIndex, columnIndex) {
//     var colid = gr_oilSellPurchase.getColumnID(columnIndex);
//     scwin.curRow = rowIndex;

//     if (colid == 'selpchClntNo') { //매출거래처코드
//         await udc_grClntNo.cfCommonPopUp(scwin.udc_grClntNo_callbackFunc, ds_oilSellPurchase.getCellData(rowIndex, 'selpchClntNo'), "", 'T', null, null, null, null, null, null, null, null, null);
//     }

//     if (colid == 'selpchAcctDeptNm') { //상품귀속부서(재고귀속부서)코드
//         await udc_grAcctDept.cfCommonPopUp(scwin.udc_grAcctDept_callbackFunc, "", ds_oilSellPurchase.getCellData(rowIndex, 'selpchAcctDeptNm'), 'T', null, null, null, null, null, null, null, null);
//     }

//     return true;
// };

scwin.udc_grClntNo_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ds_oilSellPurchase.setCellData(scwin.curRow, 'selpchClntNo', rtnList[0]);
    ds_oilSellPurchase.setCellData(scwin.curRow, 'selpchClntNm', rtnList[1]);
  }
};
scwin.udc_grAcctDept_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ds_oilSellPurchase.setCellData(scwin.curRow, 'selpchAcctDeptCd', rtnList[0]);
    ds_oilSellPurchase.setCellData(scwin.curRow, 'selpchAcctDeptNm', rtnList[1]);
  }
};
scwin.gr_oilSellPurchase_onviewchange = async function (info) {
  /*
  var rowIndex = info.rowIndex
  var colid = info.colId
  scwin.curRow = rowIndex
  let rowJson = ds_oilSellPurchase.getRowJSON(rowIndex);
   if (rowJson.slipNo == "") {
      if (colid == 'selpchClntNo') { //매출거래처코드
          if (scwin.oldData != rowJson.selpchClntNo) {
              udc_grClntNo.cfCommonPopUp(function (rtnList) {
                  $c.gus.cfSetReturnValue(rtnList, ed_grclntNo, ed_grclntNm);
                   ds_oilSellPurchase.setCellData(rowIndex, "selpchClntNo", ed_grclntNo.getValue());
                  ds_oilSellPurchase.setCellData(rowIndex, "selpchClntNm", ed_grclntNm.getValue());
              },
                  rowJson.selpchClntNo,
                  "",
                  'T',
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null);
          }
      }
       if (colid == 'selpchAcctDeptNm') { //상품귀속부서(재고귀속부서)코드
          if (scwin.oldData != rowJson.selpchAcctDeptNm) {
              udc_grAcctDept.cfCommonPopUp(function (rtnList) {
                  $c.gus.cfSetReturnValue(rtnList, ed_gracctDeptCd, ed_gracctDeptNm);
                   ds_oilSellPurchase.setCellData(rowIndex, "selpchAcctDeptCd", ed_gracctDeptCd.getValue());
                  ds_oilSellPurchase.setCellData(rowIndex, "selpchAcctDeptNm", ed_gracctDeptNm.getValue());
              },
                  rowJson.selpchAcctDeptNm,
                  "T",
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null);
          }
      }
       if (colid == 'amt') { // 금액 수정시 부가세 10%자동 설정
          ds_oilSellPurchase.setCellData(rowIndex, 'vatAmt', Math.round(ds_oilSellPurchase.getCellData(rowIndex, 'amt') * 0.1));
      }
  } */
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_acctDept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 2, false);
};
scwin.udc_acctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_oilOilStat_onviewchangeNameEvent = async function (info) {
  await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'NM', '전체', '전체');
};
scwin.udc_oilOilStat_onclickEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_oilOilStatNo, ed_oilOilStatNm, 'IMG', '전체', '전체');
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  if (ds_oilSellPurchase.getRowStatus(ds_oilSellPurchase.getRowPosition()) == "C") {
    ds_oilSellPurchase.removeRow(ds_oilSellPurchase.getRowPosition());
  } else {
    ds_oilSellPurchase.undoRow(ds_oilSellPurchase.getRowPosition());
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'stdYm', false); //기준년월
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'preCoAfClsCd', false); //팬매구분
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'selpchClntNo', false); //매출입거래처    
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'selpchAcctDeptNm', false); //상품귀속부서    
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'qty', false); //리터    
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'amt', false); //금액    
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'vatAmt', false); //부가세    
    gr_oilSellPurchase.setCellReadOnly(ds_oilSellPurchase.getRowPosition(), 'pcostAmt', false); //원가
  }
};
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, grp_table);
  ed_stdYm.setValue($c.date.getServerDateTime($p, "yyyyMM")); // 기준년월
  ed_endYm.setValue($c.date.getServerDateTime($p, "yyyyMM")); // 기준년월
};
scwin.subtotal = function (num) {
  return `${num}건`;
};

//subTotal 동적으로 targetColumnId 셋팅 할수 없어 조건에 따라 그리드를 다시 그려줌
scwin.drawGrid = function (type) {
  var gr_oilSellPurchase_target = '<w2:gridView xmlns:w2="http://www.inswave.com/websquare" xmlns:ev="http://www.w3.org/2001/xml-events" ';
  gr_oilSellPurchase_target += ' autoFit="none" checkAllType="false" class="wq_gvw" dataList="data:ds_oilSellPurchase"';
  gr_oilSellPurchase_target += ' id="gr_oilSellPurchase" style="" visibleRowNum="14" visibleRowNumFix="true" readOnly="true" rowStatusVisible="true"';
  gr_oilSellPurchase_target += '	ev:onrowindexchange="scwin.gr_oilSellPurchase_onrowindexchange" ev:oncellclick="scwin.gr_oilSellPurchase_oncellclick"';
  gr_oilSellPurchase_target += '	ev:ontextimageclick="scwin.gr_oilSellPurchase_ontextimageclick" ev:onafteredit="scwin.gr_oilSellPurchase_onafteredit"';
  gr_oilSellPurchase_target += '	ev:onbeforeedit="scwin.gr_oilSellPurchase_onbeforeedit" columnMove="true" focusMode="row">';
  gr_oilSellPurchase_target += '	<w2:caption id="caption4" style="" value="this is a grid caption."></w2:caption>';
  gr_oilSellPurchase_target += '	<w2:header id="header1" style="">';
  gr_oilSellPurchase_target += '		<w2:row id="row1" style="">';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="column1" inputType="text" style="" value="전표종류" width="100"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="column17" inputType="text" style="" value="기준년월" width="100"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="column15" inputType="text" style="" value="주유소코드" width="100"';
  gr_oilSellPurchase_target += '				hidden="true">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="column13" inputType="text" style="" value="주유소명" width="150"></w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="text" style="" id="column105" value="유류업무&lt;br/&gt;구분" displayMode="label" hidden="true"></w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="text" style="" id="column109" value="유류사업&lt;br/&gt;구분" displayMode="label" hidden="true"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="column7" inputType="text" style="" value="판매구분" width="100"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="column19" inputType="text" style="" value="유종&lt;br/&gt;구분" width="100"';
  gr_oilSellPurchase_target += '				hidden="true">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="150" inputType="text" style="" id="column58" value="매출입&lt;br/&gt;거래처"';
  gr_oilSellPurchase_target += '				displayMode="label">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="150" inputType="text" style="" id="column55" value="매출거래처명" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="text" style="" id="column125" value="소속구분" displayMode="label" hidden="true"></w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="text" style="" id="column121" value="상품귀속&lt;br/&gt;부서코드" displayMode="label" hidden="true"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="150" inputType="text" style="" id="column43" value="매출입&lt;br/&gt;부서"';
  gr_oilSellPurchase_target += '				displayMode="label">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="column40" value="리터" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="column37" value="금액" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="column31" value="부가세" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="column34" value="원가" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="100" inputType="text" style="" id="column73" value="전표번호" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="100" inputType="text" style="" id="column70" value="계산서번호" displayMode="label"';
  gr_oilSellPurchase_target += '				hidden="true">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="150" inputType="text" style="" id="column67" value="청구일자" displayMode="label"';
  gr_oilSellPurchase_target += '				hidden="true">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="150" inputType="text" style="" id="column64" value="거래처&lt;br/&gt;구분코드"';
  gr_oilSellPurchase_target += '				displayMode="label">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="100" inputType="text" style="" id="column61" value="거래&lt;br/&gt;구분"';
  gr_oilSellPurchase_target += '				displayMode="label">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '		</w2:row>';
  gr_oilSellPurchase_target += '	</w2:header>';
  gr_oilSellPurchase_target += '	<w2:gBody id="gBody1" style="">';
  gr_oilSellPurchase_target += '		<w2:row id="row2" style="">';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="slipKndCd" inputType="select" style="" value="" width="70"';
  gr_oilSellPurchase_target += '				mandatory="true" allOption="" chooseOption="" ref="">';
  gr_oilSellPurchase_target += '             <w2:choices>';
  gr_oilSellPurchase_target += '                 <w2:itemset nodeset="data:ds_copyTL203">';
  gr_oilSellPurchase_target += '                     <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '                     <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '                 </w2:itemset>';
  gr_oilSellPurchase_target += '             </w2:choices>';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="stdYm" inputType="text" style="" value="" width="70" mandatory="true"';
  gr_oilSellPurchase_target += '				displayFormat="####/##">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="oilOilStatNo" inputType="text" style="" value="" width="70"';
  gr_oilSellPurchase_target += '				mandatory="true">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="oilOilStatNm" inputType="text" style="" value="" width="150" textAlign="left"></w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="select" style="" id="oilTskClsCd" value="" displayMode="label" allOption="" chooseOption="" ref="" hidden="true">';
  gr_oilSellPurchase_target += '              <w2:choices>';
  gr_oilSellPurchase_target += '                  <w2:itemset nodeset="data:ds_copyTL103">';
  gr_oilSellPurchase_target += '                      <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '                      <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '                  </w2:itemset>';
  gr_oilSellPurchase_target += '              </w2:choices>';
  gr_oilSellPurchase_target += '          </w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="select" style="" id="oilBizClsCd" value="" displayMode="label" allOption="" chooseOption="" ref="" hidden="true">';
  gr_oilSellPurchase_target += '              <w2:choices>';
  gr_oilSellPurchase_target += '                  <w2:itemset nodeset="data:ds_copyTL100">';
  gr_oilSellPurchase_target += '                      <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '                      <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '                  </w2:itemset>';
  gr_oilSellPurchase_target += '              </w2:choices>';
  gr_oilSellPurchase_target += '          </w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="preCoAfClsCd" inputType="select" style="" value="" width="70"';
  gr_oilSellPurchase_target += '				mandatory="true" allOption="" chooseOption="" ref="" emptyItem="true" emptyValue="-1" editModeEvent="onclick" editModeEventIcon="onclick">';
  gr_oilSellPurchase_target += '	            <w2:choices>';
  gr_oilSellPurchase_target += '	                <w2:itemset nodeset="data:ds_copyTL104">';
  gr_oilSellPurchase_target += '	                    <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '	                    <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '                 </w2:itemset>';
  gr_oilSellPurchase_target += '	            </w2:choices>';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column displayMode="label" id="oilkndCd" inputType="select" style="" value="" width="70" allOption="" chooseOption="" ref="" hidden="true">';
  gr_oilSellPurchase_target += '			    <w2:choices>';
  gr_oilSellPurchase_target += '			        <w2:itemset nodeset="data:ds_copyTL105">';
  gr_oilSellPurchase_target += '			            <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '			            <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '			        </w2:itemset>';
  gr_oilSellPurchase_target += '			    </w2:choices>';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="70" inputType="textImage" style="" id="selpchClntNo" value="" displayMode="label"';
  gr_oilSellPurchase_target += '				mandatory="true" editModeEvent="onclick" editModeEventIcon="onclick" viewType="default">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="70" inputType="text" style="" id="selpchClntNm" value="" displayMode="label"';
  gr_oilSellPurchase_target += '				mandatory="true" textAlign="left">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="select" style="" id="homeClsCd" value="" displayMode="label" allOption="" chooseOption="" ref="" hidden="true">';
  gr_oilSellPurchase_target += '              <w2:choices>';
  gr_oilSellPurchase_target += '                  <w2:itemset nodeset="data:ds_copyZZ205">';
  gr_oilSellPurchase_target += '                      <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '                      <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '                  </w2:itemset>';
  gr_oilSellPurchase_target += '              </w2:choices>';
  gr_oilSellPurchase_target += '          </w2:column>';
  gr_oilSellPurchase_target += '          <w2:column width="70" inputType="text" style="" id="selpchAcctDeptCd" value="" displayMode="label" hidden="true"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="70" inputType="textImage" style="" id="selpchAcctDeptNm" value="" displayMode="label"';
  gr_oilSellPurchase_target += '				mandatory="true" viewType="default" editModeEvent="onclick" editModeEventIcon="onclick" textAlign="left">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="qty" value="" displayMode="label" textAlign="right" displayFormat="#,###" dataType="number" excelCellType="number" allowChar="0-9"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="amt" value="" displayMode="label" textAlign="right" displayFormat="#,###" dataType="number" excelCellType="number" allowChar="0-9"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="vatAmt" value="" displayMode="label"';
  gr_oilSellPurchase_target += '				textAlign="right" displayFormat="#,###" dataType="number" excelCellType="number" allowChar="0-9">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="120" inputType="text" style="" id="pcostAmt" value="" displayMode="label"';
  gr_oilSellPurchase_target += '				textAlign="right" displayFormat="#,###" dataType="number" excelCellType="number" allowChar="0-9">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="70" inputType="link" style="" id="slipNo" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="70" inputType="text" style="" id="taxinvcNo" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="70" inputType="text" style="" id="bilgDt" value="" displayMode="label"';
  gr_oilSellPurchase_target += '				displayFormat="####/##/##">';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="70" inputType="select" style="" id="clntClsCd" value="" displayMode="label" allOption="" chooseOption="" ref="">';
  gr_oilSellPurchase_target += '			    <w2:choices>';
  gr_oilSellPurchase_target += '			        <w2:itemset nodeset="data:ds_copyTL112">';
  gr_oilSellPurchase_target += '			            <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '			            <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '			        </w2:itemset>';
  gr_oilSellPurchase_target += '			    </w2:choices>';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '			<w2:column width="100" inputType="select" style="" id="payClsCd" value="" displayMode="label" allOption="" chooseOption="" ref="">';
  gr_oilSellPurchase_target += '			    <w2:choices>';
  gr_oilSellPurchase_target += '			        <w2:itemset nodeset="data:ds_copyTL113">';
  gr_oilSellPurchase_target += '			            <w2:label ref="cdNm"></w2:label>';
  gr_oilSellPurchase_target += '			            <w2:value ref="cd"></w2:value>';
  gr_oilSellPurchase_target += '			        </w2:itemset>';
  gr_oilSellPurchase_target += '			    </w2:choices>';
  gr_oilSellPurchase_target += '			</w2:column>';
  gr_oilSellPurchase_target += '		</w2:row>';
  gr_oilSellPurchase_target += '	</w2:gBody>';
  if (type == "O") {
    gr_oilSellPurchase_target += '<w2:subTotal targetColumnID="oilOilStatNm" style="" id="subTotal1">';
  } else if (type == "A") {
    gr_oilSellPurchase_target += '<w2:subTotal targetColumnID="selpchAcctDeptNm" style="" id="subTotal1">';
  } else if (type == "C") {
    gr_oilSellPurchase_target += '<w2:subTotal targetColumnID="selpchClntNm" style="" id="subTotal1">';
  }
  gr_oilSellPurchase_target += '    <w2:row style="" id="row4">';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column100" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column99" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column98" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="150" inputType="text" style="" id="column97" value="소계" displayMode="label" textAlign="left"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column107" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column111" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column92" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column91" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="150" inputType="text" style="" id="column90" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="150" inputType="expression" style="" id="column89" value="" displayMode="label"';
  gr_oilSellPurchase_target += '            expression="scwin.subtotal(COUNT(\'selpchClntNm\'))" textAlign="left">';
  gr_oilSellPurchase_target += '        </w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column127" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column123" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="150" inputType="text" style="" id="column85" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column84" value="" displayMode="label" expression="SUM(\'qty\')" textAlign="right" displayFormat="#,##0" dataType="number"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column83" value="" displayMode="label" expression="SUM(\'amt\')" textAlign="right" displayFormat="#,##0" dataType="number"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column82" value="" displayMode="label" expression="SUM(\'vatAmt\')" textAlign="right" displayFormat="#,##0" dataType="number"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column81" value="" displayMode="label" expression="SUM(\'pcostAmt\')" textAlign="right" displayFormat="#,##0" dataType="number"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column80" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column79" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="150" inputType="text" style="" id="column78" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="150" inputType="text" style="" id="column77" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column76" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '</w2:row>';
  gr_oilSellPurchase_target += '	</w2:subTotal>';
  gr_oilSellPurchase_target += '<w2:footer id="footer1" style="">';
  gr_oilSellPurchase_target += '    <w2:row id="row3" style="">';
  gr_oilSellPurchase_target += '        <w2:column displayMode="label" id="column30" inputType="text" style="" value="" width="70"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column displayMode="label" id="column29" inputType="text" style="" value="" width="70"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column displayMode="label" id="column28" inputType="text" style="" value="" width="70"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column displayMode="label" id="column27" inputType="text" style="" value="" width="150"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column108" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column112" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column displayMode="label" id="column22" inputType="text" style="" value="" width="70"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column displayMode="label" id="column21" inputType="text" style="" value="" width="70"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column60" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column57" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column128" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column124" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column45" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column42" value="" displayMode="label"';
  gr_oilSellPurchase_target += '            textAlign="right" dataType="number" displayFormat="#,##0" expression="SUM(\'qty\')">';
  gr_oilSellPurchase_target += '        </w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column39" value="" displayMode="label"';
  gr_oilSellPurchase_target += '            textAlign="right" dataType="number" displayFormat="#,##0" expression="SUM(\'amt\')">';
  gr_oilSellPurchase_target += '        </w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column33" value="" displayMode="label"';
  gr_oilSellPurchase_target += '            textAlign="right" dataType="number" displayFormat="#,##0" expression="SUM(\'vatAmt\')">';
  gr_oilSellPurchase_target += '        </w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="120" inputType="expression" style="" id="column36" value="" displayMode="label"';
  gr_oilSellPurchase_target += '            textAlign="right" dataType="number" displayFormat="#,##0" expression="SUM(\'pcostAmt\')">';
  gr_oilSellPurchase_target += '        </w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column75" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column72" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column69" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="70" inputType="text" style="" id="column66" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '        <w2:column width="100" inputType="text" style="" id="column63" value="" displayMode="label"></w2:column>';
  gr_oilSellPurchase_target += '    </w2:row>';
  gr_oilSellPurchase_target += '</w2:footer>';
  gr_oilSellPurchase_target += '</w2:gridView>';
  gr_oilSellPurchase.setGridStyle(gr_oilSellPurchase_target);
};

// 추가
scwin.gr_oilSellPurchase_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};
scwin.gr_oilSellPurchase_onafteredit = function (rowIndex, columnIndex, value) {
  debugger;
  if (scwin.oldData == value) return;
  let colid = this.getColumnID(columnIndex);
  let rowJson = ds_oilSellPurchase.getRowJSON(rowIndex);
  if (rowJson.slipNo == "") {
    if (colid == 'selpchClntNo') {
      //매출거래처코드
      if (scwin.oldData != rowJson.selpchClntNo) {
        udc_grClntNo.cfCommonPopUp(function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_grclntNo, ed_grclntNm);
          ds_oilSellPurchase.setCellData(rowIndex, "selpchClntNo", ed_grclntNo.getValue());
          ds_oilSellPurchase.setCellData(rowIndex, "selpchClntNm", ed_grclntNm.getValue());
        }, rowJson.selpchClntNo, "", 'T', null, null, null, null, null, null, null, null, null);
      }
    }
    if (colid == 'selpchAcctDeptNm') {
      //상품귀속부서(재고귀속부서)코드
      if (scwin.oldData != rowJson.selpchAcctDeptNm) {
        udc_grAcctDept.cfCommonPopUp(function (rtnList) {
          $c.gus.cfSetReturnValue($p, rtnList, ed_gracctDeptCd, ed_gracctDeptNm);
          ds_oilSellPurchase.setCellData(rowIndex, "selpchAcctDeptCd", ed_gracctDeptCd.getValue());
          ds_oilSellPurchase.setCellData(rowIndex, "selpchAcctDeptNm", ed_gracctDeptNm.getValue());
        }, "", rowJson.selpchAcctDeptNm, "T", null, null, null, null, null, null, null, null);
      }
    }
    if (colid == 'amt') {
      // 금액 수정시 부가세 10%자동 설정
      ds_oilSellPurchase.setCellData(rowIndex, 'vatAmt', Math.round(ds_oilSellPurchase.getCellData(rowIndex, 'amt') * 0.1));
    }
  }
};
scwin.gr_oilSellPurchase_ontextimageclick = function (rowIndex, columnIndex) {
  debugger;
  var colid = gr_oilSellPurchase.getColumnID(columnIndex);
  var value = ds_oilSellPurchase.getCellData(rowIndex, colid);
  if (scwin.oldData == value) {
    // 이전값이랑 값이 다르면 어처피 onafteredit 에서 실행됨
    if (colid == 'selpchClntNo') {
      //매출거래처코드
      udc_grClntNo.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_oilSellPurchase.setCellData(rowIndex, 'selpchClntNo', rtnList[0]);
          ds_oilSellPurchase.setCellData(rowIndex, 'selpchClntNm', rtnList[1]);
        }
      }, ds_oilSellPurchase.getCellData(rowIndex, 'selpchClntNo'), "", 'T', null, null, null, null, null, null, null, null, null);
    }
    if (colid == 'selpchAcctDeptNm') {
      //상품귀속부서(재고귀속부서)코드
      udc_grAcctDept.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_oilSellPurchase.setCellData(rowIndex, 'selpchAcctDeptCd', rtnList[0]);
          ds_oilSellPurchase.setCellData(rowIndex, 'selpchAcctDeptNm', rtnList[1]);
        }
      }, "", ds_oilSellPurchase.getCellData(rowIndex, 'selpchAcctDeptNm'), 'T', null, null, null, null, null, null, null, null);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_table',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width:200px;',submenuSize:'fixed',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_fromToYearMon1',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_stdYm',edToId:'ed_endYm',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'기준년월',titleTo:'기준년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',id:'udc_clnt','ev:onclickEvent':'scwin.udc_clnt_onclickEvent',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',id:'udc_acctDept',objTypeCode:'data',objTypeName:'data',btnId:'btn_acctDept','ev:onclickEvent':'scwin.udc_acctDept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_acctDept_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'7'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'목록구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_listClsCd',style:'width: 200px;',submenuSize:'fixed',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'월별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소계기준',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_subSumCd',style:'width:208px;',submenuSize:'fixed',ref:'','ev:onselected':'scwin.lc_subSumCd_onselected',chooseOptionLabel:'없음'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'귀속부서별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주유소별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_oilOilStatNo',nameId:'ed_oilOilStatNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_oilOilStat',btnId:'btn_ed_oilOilStat',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_oilOilStat_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_oilOilStat_onclickEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'판매구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dsaleYn',style:'width:230px;',submenuSize:'fixed',chooseOptionLabel:'선택'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'FMS유류매출입집계관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_oilSellPurchase',gridDownFn:'scwin.f_Excel',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group3',style:''},E:[{T:1,N:'xf:group',A:{id:'grd_section1'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_oilSellPurchase_oncellclick',readOnly:'true',rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_oilSellPurchase',style:'',columnMove:'true',autoFit:'none',id:'gr_oilSellPurchase',visibleRowNum:'14',class:'wq_gvw',focusMode:'cell','ev:onrowindexchange':'scwin.gr_oilSellPurchase_onrowindexchange','ev:onviewchange':'scwin.gr_oilSellPurchase_onviewchange','ev:onbeforeedit':'scwin.gr_oilSellPurchase_onbeforeedit','ev:onafteredit':'scwin.gr_oilSellPurchase_onafteredit','ev:ontextimageclick':'scwin.gr_oilSellPurchase_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'기준년월',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',style:'',id:'column15',value:'주유소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'주유소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'유류업무<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column109',value:'유류사업<br/>구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'판매구분',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',style:'',id:'column19',value:'유종<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'매출입<br/>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'매출거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column125',value:'소속구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'상품귀속<br/>부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'매출입<br/>부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'리터',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'원가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',style:'',id:'column70',value:'계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'150',inputType:'text',style:'',id:'column67',value:'청구일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column64',value:'거래처<br/>구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'거래<br/>구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{ref:'',chooseOption:'',width:'70',inputType:'select',style:'',id:'slipKndCd',allOption:'',value:'',mandatory:'true',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyTL203'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',displayFormat:'####/##',inputType:'text',style:'',id:'stdYm',value:'',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilOilStatNo',value:'',mandatory:'true',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'oilOilStatNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'oilTskClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyTL103'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'oilBizClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyTL100'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{chooseOption:'',width:'70',inputType:'select',style:'',id:'preCoAfClsCd',allOption:'',value:'',mandatory:'true',displayMode:'label',emptyItem:'true',emptyValue:'-1',editModeEvent:'onclick',editModeEventIcon:'onclick',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyTL104'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{chooseOption:'',width:'70',inputType:'select',style:'',id:'oilkndCd',allOption:'',value:'',displayMode:'label',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyTL105'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{editModeEvent:'onclick',width:'70',viewType:'default',inputType:'textImage',style:'',id:'selpchClntNo',value:'',mandatory:'true',displayMode:'label',editModeEventIcon:'onclick',maxByteLength:'6',maxLength:'6'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'text',style:'',id:'selpchClntNm',value:'',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'homeClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',hidden:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyZZ205'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchAcctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{editModeEvent:'onclick',textAlign:'left',width:'70',viewType:'default',inputType:'textImage',style:'',id:'selpchAcctDeptNm',value:'',mandatory:'true',displayMode:'label',editModeEventIcon:'onclick',maxLength:'6'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,###',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',excelCellType:'number',allowChar:'0-9'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,###',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',excelCellType:'number',allowChar:'0-9'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,###',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',excelCellType:'number',allowChar:'0-9'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,###',inputType:'text',style:'',id:'pcostAmt',value:'',displayMode:'label',excelCellType:'number',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'link',style:'',id:'slipNo',value:'',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'taxinvcNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',displayFormat:'####/##/##',inputType:'text',style:'',id:'bilgDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{ref:'',chooseOption:'',width:'70',inputType:'select',style:'',id:'clntClsCd',allOption:'',value:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyTL112'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{ref:'',chooseOption:'',width:'100',inputType:'select',style:'',id:'payClsCd',allOption:'',value:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_copyTL113'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'oilOilStatNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'column97',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column107',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'scwin.subtotal(COUNT("selpchClntNm"))',textAlign:'left',width:'150',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',expression:'SUM("qty")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column83',value:'',displayMode:'label',expression:'SUM("amt")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',expression:'SUM("vatAmt")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',expression:'SUM("pcostAmt")',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column112',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'SUM("qty")'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',expression:'SUM("amt")'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',expression:'SUM("vatAmt")'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,##0',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',expression:'SUM("pcostAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_oilSellPurchase',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_Cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_grclntNo',selectID:'retrieveClntEmpNoList',popupID:'',UpperFlagCode:'1',validTitle:'',nameId:'ed_grclntNm',style:'',id:'udc_grClntNo'}},{T:1,N:'w2:udc_comCode',A:{objTypeCode:'data',popupID:'',btnId:'btn_gracctDept',codeId:'ed_gracctDeptCd',selectID:'retrieveAcctDeptCdInfo',validTitle:'',objTypeName:'data',nameId:'ed_gracctDeptNm',style:'',id:'udc_grAcctDept'}}]}]}]}]}]}]})