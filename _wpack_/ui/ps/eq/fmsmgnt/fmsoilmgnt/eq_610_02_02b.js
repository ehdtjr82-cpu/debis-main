/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_02_02b.xml 70402 b90c7b3748caac99375e4226aec64889978c91b4a60461cea9045f5fc2c076f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'주유소코드',id:'oilOilStatNo'}},{T:1,N:'w2:key',A:{dataType:'text',name:'시작',id:'stdDt'}},{T:1,N:'w2:key',A:{dataType:'text',name:'끝',id:'endDt'}},{T:1,N:'w2:key',A:{dataType:'text',name:'유종코드',id:'oilkndCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'거래처구분코드',id:'oilStatClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'귀속부서코드',id:'acctDeptCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'거래처코드',id:'clntNo'}},{T:1,N:'w2:key',A:{dataType:'text',name:'BP거래처번호',id:'bpClntNo'}},{T:1,N:'w2:key',A:{dataType:'text',name:'거래구분',id:'payClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'입출고구분',id:'ioClsCd',defaultValue:'O'}},{T:1,N:'w2:key',A:{dataType:'text',name:'유류판매구분(유류사전사유구분)',id:'preCoAfClsCd',defaultValue:'02'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_amt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'출고일자',id:'ioDt'}},{T:1,N:'w2:key',A:{dataType:'text',name:'업부구분',id:'oilTskClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'유종코드',id:'oilkndCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'사업구분',id:'oilBizClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'매출입거래번호',id:'selpchClntNo'}},{T:1,N:'w2:key',A:{dataType:'text',name:'매출거래처번호',id:'sellClntNo'}},{T:1,N:'w2:key',A:{dataType:'text',name:'거래구분',id:'payClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',name:'단가',id:'upr'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_amtResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'upr',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilUnitPrice',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'출고일자',id:'ioDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'ioClsCd',id:'ioClsCd',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'seq',id:'seq'}},{T:1,N:'w2:column',A:{dataType:'text',name:'주유소코드',id:'oilOilStatNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'주유소명',id:'oilStatNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'유류업무구분',id:'oilTskClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilTskClsNm',id:'oilTskClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilBizClsCd',id:'oilBizClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilBizClsNm',id:'oilBizClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilRcpayPatternCd',id:'oilRcpayPatternCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilRcpayPatternNm',id:'oilRcpayPatternNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'selpchClsCd',id:'selpchClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'selpchClsNm',id:'selpchClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'preCoAfClsCd',id:'preCoAfClsCd',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'preCoAfClsNm',id:'preCoAfClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'유종구분',id:'oilkndCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilkndNm',id:'oilkndNm',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'selpchClntNo',id:'selpchClntNo',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'selpchClntNm',id:'selpchClntNm',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'sellClntNo',id:'sellClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'sellClntNm',id:'sellClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilingPurpsCd',id:'oilingPurpsCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'oilingPurpsNm',id:'oilingPurpsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'homeClsCd',id:'homeClsCd',defaultValue:'F'}},{T:1,N:'w2:column',A:{dataType:'text',name:'homeClsNm',id:'homeClsNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'eqCd',id:'eqCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'vehclShortCd',id:'vehclShortCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'stockAcctDeptCd',id:'stockAcctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'stockAcctDeptNm',id:'stockAcctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'pcostAcctDeptCd',id:'pcostAcctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'pcostAcctDeptNm',id:'pcostAcctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'acctDeptCd',id:'acctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',name:'acctDeptNm',id:'acctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'리터',id:'qty',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'upr',id:'upr',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'amt',id:'amt',defaultValue:''}},{T:1,N:'w2:column',A:{dataType:'text',name:'regDt',id:'regDt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'crn',id:'crn'}},{T:1,N:'w2:column',A:{dataType:'text',name:'cmpyNm',id:'cmpyNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'repstNm',id:'repstNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'clntTelNo',id:'clntTelNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'saleUpr',id:'saleUpr',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'saleAmt',id:'saleAmt',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',name:'saleVatAmt',id:'saleVatAmt'}},{T:1,N:'w2:column',A:{dataType:'text',name:'vehclNo',id:'vehclNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'cardNo',id:'cardNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'frchNo',id:'frchNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'admitNo',id:'admitNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'bpClntNo',id:'bpClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',name:'bpClntNm',id:'bpClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',name:'거래구분',id:'payClsCd'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Org_oilUnitPrice',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilBizClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilRcpayPatternCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCoAfClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAcctDeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleUpr',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleAmt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptNm',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_grOilkndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_Tmp_oilUnitPrice',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilTskClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilBizClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilRcpayPatternCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preCoAfClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilkndCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClntNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAcctDeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleUpr',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleAmt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pcostAcctDeptNm',name:'name21',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAmt',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilOutAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_amt","key":"IN_DS1"},{"id":"ds_amtResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_amtResult","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilInCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_oilUnitPrice","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOilPrice',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RegistFmsOilInCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_oilUnitPrice","key":"IN_DS1","action":"modified"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOilPrice_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ps/pscommon.js',type:'text/javascript',scopeVariable:'pscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.deptCd = "00276";
scwin.hyundaiCard = "137061"; //"201855";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  var codeOptions = [{
    grpCd: "TL105",
    compID: "lc_oilkndCd"
  } //selectbox랑 다르게 그리드안에서는 첫행 빈값이므로 gr_oilUnitPrice:oilkndCd는 따로 데이터 리스트 만들어서 구현. 
  , {
    grpCd: "TL113",
    compID: "lc_payClsCd, gr_oilUnitPrice:payClsCd,gr_oilUnitPriceExcel:payClsCd"
  }
  //, { grpCd: "ZZ205", compID: "gr_oilUnitPrice:homeClsCd"} 
  ];
  await $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  lc_oilkndCd.setSelectedIndex(0);
  lc_oilStatClsCd.setSelectedIndex(2);

  //tobe추가 : gr_oilUnitPrice:oilkndCd 셋팅 데이터리스트 만들기
  var dltStr = "dlt_commonCodeTL105"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  var dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  ds_grOilkndCd.setJSON(dlt.getAllJSON());
  ds_grOilkndCd.insertRow(0);

  // 추가
  //lc_payClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  var today = $c.date.getServerDateTime($p, "yyyyMMdd");

  // 초기값 셋팅
  ed_stdDt.setValue(today.substring(0, 6) + "01");
  ed_endDt.setValue(today);
};

//-------------------------------------------------------------------------
// 일자 범위 체크
//-------------------------------------------------------------------------
scwin.f_CheckAdptDt = async function () {
  var vAdptStDt = ed_stdDt.getValue();
  var vAdptEndDt = ed_endDt.getValue();
  if (vAdptStDt == "" || vAdptStDt.length < 8) {
    await $c.win.alert($p, "적용시작일자를 정확하게 입력해주십시오.");
    ed_stdDt.focus();
    return false;
  }
  if (vAdptEndDt == "" || vAdptEndDt.length < 8) {
    await $c.win.alert($p, "적용종료일자를 정확하게 입력해주십시오.");
    ed_endDt.focus();
    return false;
  }
  if (vAdptStDt > vAdptEndDt) {
    await $c.win.alert($p, "적용시작일자가 종료일자보다 늦은 날짜입니다.");
    ed_stdDt.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  var vChkVal = await scwin.f_CheckAdptDt();
  if (!vChkVal) {
    return;
  }
  dma_search.set("oilOilStatNo", ed_oilOilStatCd.getValue());
  dma_search.set("stdDt", ed_stdDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("oilkndCd", lc_oilkndCd.getValue());
  dma_search.set("oilStatClsCd", lc_oilStatClsCd.getValue());
  dma_search.set("acctDeptCd", ed_acctDeptCd.getValue());
  dma_search.set("clntNo", ed_clntNo.getValue());
  dma_search.set("bpClntNo", ed_bpClntNo.getValue());
  dma_search.set("payClsCd", lc_payClsCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
  setTimeout(function () {
    gr_oilUnitPrice.setColumnReadOnly("ioDt", true); //출고일자
    gr_oilUnitPrice.setColumnReadOnly("oilStatNm", true); //주유소명
    gr_oilUnitPrice.setColumnReadOnly("oilkndCd", true); //유종구분
    gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", true); //유류업무구분
    gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", true); //유류사업구분
    gr_oilUnitPrice.setColumnReadOnly("preCoAfClsCd", true); //판매구분
    gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", true); //매출입구분
    gr_oilUnitPrice.setColumnReadOnly("selpchClntNo", true); //매입거래처
    gr_oilUnitPrice.setColumnReadOnly("sellClntNo", true); //매출거래처
    gr_oilUnitPrice.setColumnReadOnly("stockAcctDeptNm", true); //상품귀속부서
    gr_oilUnitPrice.setColumnReadOnly("homeClsCd", true); //소속구분코드
    gr_oilUnitPrice.setColumnReadOnly("stockAcctDeptCd", true); //상품귀속부서코드
    gr_oilUnitPrice.setColumnReadOnly("payClsCd", true); //거래구분

    dma_amt.setEmptyValue();
    //dma_amt.insertRow();
  }, 100);
};

// 조회후처리
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCount = ds_oilUnitPrice.getRowCount();
    totalRows.setValue(rowCount);
    if (rowCount == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }

    //sort
    var options = {};
    options.sortIndex = "ioDt oilStatNm oilkndCd selpchClntNm";
    options.sortOrder = "1 1 1 1";
    ds_oilUnitPrice.multisort(options);

    //그리드 초기 포커스
    gr_oilUnitPrice.setFocusedCell(0, 0);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_oilUnitPrice.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['유류보관·출고 그리드']);
    return;
  }
  var vaildArray = [{
    id: "ioDt",
    name: "출고일자",
    mandatory: true,
    valid: "date",
    format: "YYYYMMDD",
    length: 8
  }, {
    id: "oilStatNm",
    name: "주유소명",
    mandatory: true
  }, {
    id: "preCoAfClsCd",
    name: "판매구분",
    mandatory: true
  }, {
    id: "oilkndCd",
    name: "유종구분",
    mandatory: true
  }, {
    id: "payClsCd",
    name: "거래구분",
    mandatory: true
  }, {
    id: "selpchClntNo",
    name: "매출거래처",
    mandatory: true
  }, {
    id: "vehclNo",
    name: "차량번호"
  }, {
    id: "qty",
    name: "리터",
    number: 9.2,
    minNumber: 1
  }, {
    id: "seq",
    name: "순번"
  }, {
    id: "upr",
    name: "단가",
    number: 9.2,
    minNumber: 0
  }, {
    id: "amt",
    name: "금액",
    number: 9.2,
    minNumber: 0
  }];
  if (!(await $c.gus.cfValidateGrid($p, gr_oilUnitPrice, null, null, vaildArray, "유류보관판매등록"))) {
    return false;
  }

  // var ret = await $c.gus.cfValidate([gr_oilUnitPrice]);

  // if (!ret) {
  //     return;
  // }

  // 입력한 경우에 대해서는 입력수량과 수량 일치시킴.
  for (var i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
    var rowJson = ds_oilUnitPrice.getRowJSON(i);
    if (ds_oilUnitPrice.getRowStatus(i) == "C" || ds_oilUnitPrice.getRowStatus(i) == "U") {
      if (rowJson.insYn == 1) {
        ds_oilUnitPrice.setCellData(i, "insQty", rowJson.qty);
      }
    }
  }
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_saveOilPrice);
  }
};
scwin.sbm_saveOilPrice_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); //성공적으로 저장하였습니다

    //tobe추가 : 행삭제 후, 저장이면 화면에서도 사라져야함.(단, 중간꺼 삭제시 포커스가 상단으로 이동)
    if (ds_oilUnitPrice.getRowStatus(ds_oilUnitPrice.getRowPosition()) == "D") {
      var midRd = false;
      if (ds_oilUnitPrice.getRowIndexByStatus("D")[0] != ds_oilUnitPrice.getRowCount() - 1) {
        //중간 row삭제 여부
        midRd = true;
      }
      ds_oilUnitPrice.removeRow(ds_oilUnitPrice.getRowPosition());
      if (midRd) {
        gr_oilUnitPrice.setFocusedCell(0, 0);
      }
    } else {
      //tobe추가 : 행추가 후, 저장이면 상태값 +가 사라짐.
      var addRow = ds_oilUnitPrice.getRowIndexByStatus("C");
      for (var i = 0; i < addRow.length; i++) {
        ds_oilUnitPrice.modifyRowStatus(addRow[i], "R");
      }
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var rowCount = ds_oilUnitPrice.getRowCount();
  var rowJson = ds_oilUnitPrice.getRowJSON(rowCount - 1);
  ds_oilUnitPrice.insertRow(rowCount);
  ds_oilUnitPrice.setCellData(rowCount, "oilTskClsCd", "F");
  ds_oilUnitPrice.setCellData(rowCount, "oilBizClsCd", "01");
  ds_oilUnitPrice.setCellData(rowCount, "selpchClsCd", "02");
  ds_oilUnitPrice.setCellData(rowCount, "homeClsCd", "F");
  ds_oilUnitPrice.setCellData(rowCount, "ioDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_oilUnitPrice.setCellData(rowCount, "seq", 1);
  ds_oilUnitPrice.setCellData(rowCount, "ioClsCd", "O");
  ds_oilUnitPrice.setCellData(rowCount, "oilRcpayPatternCd", "IP");
  ds_oilUnitPrice.setCellData(rowCount, "pcostAcctDeptCd", "");
  ds_oilUnitPrice.setCellData(rowCount, "stockAcctDeptCd", "00276");
  ds_oilUnitPrice.setCellData(rowCount, "oilOilStatNo", rowJson.oilOilStatNo);
  ds_oilUnitPrice.setCellData(rowCount, "oilStatNm", rowJson.oilStatNm);
  ds_oilUnitPrice.setCellData(rowCount, "sellClntNo", rowJson.sellClntNo);
  ds_oilUnitPrice.setCellData(rowCount, "sellClntNm", rowJson.sellClntNm);
  ds_oilUnitPrice.setCellData(rowCount, "preCoAfClsCd", rowJson.preCoAfClsCd);
  ds_oilUnitPrice.setCellData(rowCount, "insYn", 1);
  ds_oilUnitPrice.setCellData(rowCount, "payClsCd", "01");
  gr_oilUnitPrice.setColumnReadOnly("selpchClntNm", true);
  gr_oilUnitPrice.setColumnReadOnly("sellClntNm", true);
  gr_oilUnitPrice.setColumnReadOnly("stockAcctDeptNm", true);

  // tobe 추가 : asis와 동일하게 하기위해서 추가
  gr_oilUnitPrice.setFocusedCell(rowCount, 0, false);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  var admitNo = "";
  var focusRow = gr_oilUnitPrice.getFocusedRowIndex();
  if (ds_oilUnitPrice.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다");
  } else {
    admitNo = ds_oilUnitPrice.getCellData(focusRow, "admitNo");
    if (admitNo != "") {
      $c.win.alert($p, "카드판매자료는 삭제할 수 없습니다.");
    } else {
      if (ds_oilUnitPrice.getRowStatus(focusRow) != "C") {
        ds_oilUnitPrice.deleteRow(focusRow); // 상태 표시

        //tobe 추가 : deleteRow하면 포커스 사라짐. asis는 유지됨
        gr_oilUnitPrice.setFocusedCell(focusRow, 0);
      } else {
        ds_oilUnitPrice.removeRow(focusRow); // row 삭제
      }
    }
  }
};

//-------------------------------------------------------------------------
// 전체삭제
//-------------------------------------------------------------------------
scwin.f_DelAll = async function () {
  if (ds_oilUnitPrice.getRowCount() == 0) {
    await $c.win.alert($p, "삭제할 데이타가 없습니다");
  } else {
    var admitNo = "";

    // for (var i = ds_oilUnitPrice.getRowCount() - 1; i >= 0; i--) {
    for (var i = 0; i < ds_oilUnitPrice.getRowCount(); i++) {
      admitNo = ds_oilUnitPrice.getCellData(i, "admitNo");
      if (admitNo == "") {
        if (ds_oilUnitPrice.getRowStatus(i) != "C") {
          ds_oilUnitPrice.deleteRow(i);
        } else {
          ds_oilUnitPrice.removeRow(i);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 5:
      //거래처
      await udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, null, null, "T");
      break;
    case 6:
      //매출부서
      await udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    case 7:
      //bp거래처
      await udc_bpClntNo.cfCommonPopUp(scwin.udc_bpClntNo_callBackFunc, pCode, pName, 'T', null, null, null, null, null, null, null, null, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  //거래처
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.udc_acctDeptCd_callBackFunc = function (rtnList) {
  //매출부서
  $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, ed_acctDeptNm);
};
scwin.udc_bpClntNo_callBackFunc = function (rtnList) {
  //bp거래처
  $c.gus.cfSetReturnValue($p, rtnList, ed_bpClntNo, ed_bpClntNm);
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
// function name : f_upload
// function desc : Excel등록
//-------------------------------------------------------------------------
scwin.f_upload = async function () {
  ds_Org_oilUnitPrice.removeAll();
  ds_oilUnitPrice.removeAll();
  if (lc_ext.getValue() == "1") {
    // xlsx, csv 선택값
    let options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 1,
      "type": "1"
      // "startRowIndex": 0,
      //"delim":"||",     //[default: ',']CSV 파일에서 데이터를 구분할 구분자
    };
    await $c.data.uploadGridViewCSV($p, gr_oilUnitPriceExcel, options); // CSV를 선택하였을 경우
  } else {
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 1,
      "type": "1",
      "startRowIndex": 0,
      "hidden": 1
    };
    await $c.data.uploadGridViewExcel($p, gr_oilUnitPriceExcel, options); // XLSX를 선택하였을 경우
  }
};
scwin.f_Import = async function () {
  await $c.win.alert($p, "uploding할 엑셀파일에 ',' 가 있다면, 잘못된 정보가 올라갈수 있으니, 제거해주시기 바랍니다.");
  if (await scwin.f_AddRowUploaded()) {
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};
scwin.f_AddRowUploaded = function () {
  var i;
  ds_Tmp_oilUnitPrice.setJSON(ds_Org_oilUnitPrice.getAllJSON());

  //gr_oilUnitPrice.ReDraw = "false";

  var json = [];
  for (i = 0; i < ds_Tmp_oilUnitPrice.getRowCount(); i++) {
    json.push({
      'oilTskClsCd': "F",
      'oilBizClsCd': "01",
      'selpchClsCd': "02",
      'homeClsCd': "F",
      'seq': 1,
      'ioClsCd': "O",
      'oilRcpayPatternCd': "IP",
      'pcostAcctDeptCd': "",
      'stockAcctDeptCd': scwin.deptCd,
      'preCoAfClsCd': "02",
      'oilkndCd': "01",
      'ioDt': ds_Tmp_oilUnitPrice.getRowJSON(i).ioDt.simpleReplace("/", ""),
      // 출고일자
      'oilOilStatNo': ds_Tmp_oilUnitPrice.getRowJSON(i).oilOilStatNo,
      // 주유소코드
      'oilStatNm': ds_Tmp_oilUnitPrice.getRowJSON(i).oilStatNm,
      // 주유소명
      'selpchClntNo': ds_Tmp_oilUnitPrice.getRowJSON(i).selpchClntNo,
      // 매출거래처코드
      'selpchClntNm': ds_Tmp_oilUnitPrice.getRowJSON(i).selpchClntNm,
      // 매출거래처명
      'payClsCd': ds_Tmp_oilUnitPrice.getRowJSON(i).payClsCd,
      // 거래구분
      'vehclNo': ds_Tmp_oilUnitPrice.getRowJSON(i).vehclNo,
      // 차량번호
      'pcostAcctDeptNm': ds_Tmp_oilUnitPrice.getRowJSON(i).pcostAcctDeptNm,
      // 매출부서
      'qty': ds_Tmp_oilUnitPrice.getRowJSON(i).qty,
      // 수량
      'saleUpr': ds_Tmp_oilUnitPrice.getRowJSON(i).saleUpr,
      // 단가
      'saleAmt': ds_Tmp_oilUnitPrice.getRowJSON(i).saleAmt,
      // 금액		
      'insYn': 1 //입력여부 		
    });

    // ds_oilUnitPrice.insertRow();
    // ds_oilUnitPrice.setCellData(i, 'oilTskClsCd', "F");						//유류업무구분
    // ds_oilUnitPrice.setCellData(i, 'oilBizClsCd', "01");						//유류사업구분
    // ds_oilUnitPrice.setCellData(i, 'selpchClsCd', "02");						//매출입구분(매출)
    // ds_oilUnitPrice.setCellData(i, 'homeClsCd', "F");					//소속구분
    // ds_oilUnitPrice.setCellData(i, 'seq', 1);							//초기값 셋팅
    // ds_oilUnitPrice.setCellData(i, 'ioClsCd', "O");						//출고
    // ds_oilUnitPrice.setCellData(i, 'oilRcpayPatternCd', "IP");						//매입
    // ds_oilUnitPrice.setCellData(i, 'pcostAcctDeptCd', "");							//초기화  
    // ds_oilUnitPrice.setCellData(i, 'stockAcctDeptCd', scwin.deptCd);						//초기화
    // ds_oilUnitPrice.setCellData(i, 'preCoAfClsCd', "02");						// 판매구분(보관판매)
    // ds_oilUnitPrice.setCellData(i, 'oilkndCd', "01");						// 유종 : 경유 ds_Tmp_oilUnitPrice.Namevalue(i,"oilKndCd")		// 유종코드
    // ds_oilUnitPrice.setCellData(i, 'ioDt', ds_Tmp_oilUnitPrice.getCellData(i, "ioDt").simpleReplace("/", ""));		// 출고일자
    // ds_oilUnitPrice.setCellData(i, 'oilOilStatNo', ds_Tmp_oilUnitPrice.getCellData(i, "oilOilStatNo"));	// 주유소코드
    // ds_oilUnitPrice.setCellData(i, 'oilStatNm', ds_Tmp_oilUnitPrice.getCellData(i, "oilStatNm"));		// 주유소명
    // ds_oilUnitPrice.setCellData(i, 'selpchClntNo', ds_Tmp_oilUnitPrice.getCellData(i, "selpchClntNo"));	// 매출거래처코드
    // ds_oilUnitPrice.setCellData(i, 'selpchClntNm', ds_Tmp_oilUnitPrice.getCellData(i, "selpchClntNm"));	// 매출거래처명
    // ds_oilUnitPrice.setCellData(i, 'payClsCd', ds_Tmp_oilUnitPrice.getCellData(i, "payClsCd"));			// 거래구분
    // ds_oilUnitPrice.setCellData(i, 'vehclNo', ds_Tmp_oilUnitPrice.getCellData(i, "vehclNo"));			// 차량번호
    // ds_oilUnitPrice.setCellData(i, 'pcostAcctDeptNm', ds_Tmp_oilUnitPrice.getCellData(i, "pcostAcctDeptNm"));			// 매출부서
    // ds_oilUnitPrice.setCellData(i, 'qty', ds_Tmp_oilUnitPrice.getCellData(i, "qty"));				// 수량
    // ds_oilUnitPrice.setCellData(i, 'saleUpr', ds_Tmp_oilUnitPrice.getCellData(i, "saleUpr"));			// 단가
    // ds_oilUnitPrice.setCellData(i, 'saleAmt', ds_Tmp_oilUnitPrice.getCellData(i, "saleAmt"));			// 금액		
    // ds_oilUnitPrice.setCellData(i, 'insYn', 1);							//입력여부 		
  }
  ds_oilUnitPrice.removeAll();
  ds_oilUnitPrice.setJSON(json);
  ds_oilUnitPrice.modifyAllStatus("C");

  //gr_oilUnitPrice.ReDraw = "true";
  totalRows.setValue(ds_oilUnitPrice.getRowCount());
  gr_oilUnitPrice.setColumnReadOnly('selpchClntNm', true); //매입거래처명
  gr_oilUnitPrice.setColumnReadOnly('sellClntNm', true); //매출거래처명
  gr_oilUnitPrice.setColumnReadOnly('stockAcctDeptNm', true); //상품귀속부서

  ds_Tmp_oilUnitPrice.removeAll();
  return true;
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var count = ds_oilUnitPrice.getRowCount();
  if (!(count > 0)) return;
  var options = {
    fileName: "FMS유류보관판매등록.xlsx",
    sheetName: "FMS유류보관판매등록",
    startRowIndex: 5,
    startColumnIndex: 0,
    type: 1,
    hiddenVisible: true,
    foldColumns: "3,4,5,6,7,12,13,14",
    columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    //evenRowBackgroundColor: "#f5fff5"//excel파일에서 그리드 body의 짝수줄의 배경색
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 19,
    text: "FMS유류보관판매등록",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 19,
    text: `주유소 [${ed_oilStatNm.getValue()}[${ed_oilOilStatCd.getValue()}]]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 19,
    text: `출고일자 [${$c.date.formatDate($p, ed_stdDt.getValue(), "date")} ~ ${$c.date.formatDate($p, ed_endDt.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }, {
    rowIndex: 4,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 19,
    text: `유종구분 [${lc_oilkndCd.getText()}]`,
    textAlign: "left",
    fontSize: 10,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_oilUnitPrice, options, infoArr);
};
scwin.gr_oilUnitPrice_onrowindexchange = function (rowIndex, oldRow) {
  debugger;
  if (ds_oilUnitPrice.getRowStatus(rowIndex) == "C") {
    gr_oilUnitPrice.setColumnReadOnly('ioDt', false); //출고일자
    gr_oilUnitPrice.setColumnReadOnly('oilStatNm', false); //주유소명
    gr_oilUnitPrice.setColumnReadOnly('oilkndCd', false); //유종구분
    gr_oilUnitPrice.setColumnReadOnly('oilTskClsCd', false); //유류업무구분
    gr_oilUnitPrice.setColumnReadOnly('oilBizClsCd', false); //유류사업구분
    gr_oilUnitPrice.setColumnReadOnly('selpchClsCd', false); //매출입구분
    gr_oilUnitPrice.setColumnReadOnly('selpchClntNo', false); //매입거래처
    gr_oilUnitPrice.setColumnReadOnly('sellClntNo', false); //매출거래처
    gr_oilUnitPrice.setColumnReadOnly('stockAcctDeptNm', false); //상품귀속부서
    gr_oilUnitPrice.setColumnReadOnly('payClsCd', false); //거래구분
  }
};
scwin.gr_oilUnitPrice_ontextimageclick = async function (rowIndex, columnIndex) {
  var colid = gr_oilUnitPrice.getColumnID(columnIndex);
  var rtnList = {};
  if (colid == 'oilStatNm') {
    rtnList = await pscommon.RcfGridOilStatPop("", ds_oilUnitPrice.getCellData(rowIndex, 'oilStatNm'), 'NM', '전체', '전체');
    if (rtnList[2] == "1") {
      await $c.win.alert($p, "보관주유소를 선택하여 주십시오.");
    } else if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
      ds_oilUnitPrice.setCellData(rowIndex, 'oilOilStatNo', rtnList[0]);
      ds_oilUnitPrice.setCellData(rowIndex, 'oilStatNm', rtnList[1]);
      if (rtnList[2] == "1") {
        ds_oilUnitPrice.setCellData(rowIndex, 'preCoAfClsCd', "01");
      } else if (rtnList[2] == "0") {
        ds_oilUnitPrice.setCellData(rowIndex, 'preCoAfClsCd', "02");
      }
    }
  }

  // tobe변경 : onafteredit으로 이동
  // if(colid == 'selpchClntNo' ){												//매출거래처
  //     rtnList = cfCommonPopUp('retrieveClntEmpNoList',ds_oilUnitPrice.NameValue(row,'selpchClntNo'),"",null,null,null,null,null,null,null,null,null,null);
  // 	if(rtnList !=null && rtnList[0]!= "N/A"){
  // 		ds_oilUnitPrice.NameValue(row,'selpchClntNo')=rtnList[0];
  // 		ds_oilUnitPrice.NameValue(row, 'selpchClntNm')=rtnList[1];
  // 	}
  // }

  // tobe삭제 : 그리드에서 sellClntNo 컬럼 미존재
  // if(colid == 'sellClntNo'){													//매출거래처코드
  // 	rtnList = cfCommonPopUp('retrieveClntEmpNoList',ds_oilUnitPrice.NameValue(row,'sellClntNo'),"",'T',null,null,null,null,null,null,null,null,null);
  // 	if(rtnList !=null && rtnList[0]!= "N/A"){
  // 		ds_oilUnitPrice.NameValue(row,'sellClntNo')=rtnList[0];
  // 		ds_oilUnitPrice.NameValue(row, 'sellClntNm')=rtnList[1];
  // 	}
  // }

  //tobe삭제 : 그리드에서 숨김처리 된 컬럼
  // if(colid == 'stockAcctDeptCd'){												//상품귀속부서(재고귀속부서)코드
  // 	rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',ds_oilUnitPrice.NameValue(row,'stockAcctDeptCd'),"",null,null,null,null,null,null,null,null,null,null);
  // 	if(rtnList !=null && rtnList[0]!= "N/A"){
  // 		ds_oilUnitPrice.NameValue(row,'stockAcctDeptCd')=rtnList[0];
  // 		ds_oilUnitPrice.NameValue(row, 'stockAcctDeptNm')=rtnList[1];
  // 	}
  // }
  return true;
};
scwin.gr_oilUnitPrice_onafteredit = async function (rowIndex, columnIndex, value) {
  debugger;
  var clntNo = "";
  var cardNo = "";
  cardNo = ds_oilUnitPrice.getCellData(rowIndex, 'cardNo'); // 카드번호
  clntNo = ds_oilUnitPrice.getCellData(rowIndex, 'selpchClntNo');
  if (ds_oilUnitPrice.getCellData(rowIndex, 'ioDt') != "" && ds_oilUnitPrice.getCellData(rowIndex, 'oilTskClsCd') != "" && ds_oilUnitPrice.getCellData(rowIndex, 'oilkndCd') != "" && ds_oilUnitPrice.getCellData(rowIndex, 'oilBizClsCd') != "" && ds_oilUnitPrice.getCellData(rowIndex, 'payClsCd') != "" && ds_oilUnitPrice.getCellData(rowIndex, 'selpchClntNo') != "") {
    // 금액 계산

    if (clntNo != scwin.hyundaiCard && cardNo == "") {
      dma_amt.set('ioDt', ds_oilUnitPrice.getCellData(rowIndex, 'ioDt'));
      dma_amt.set('oilTskClsCd', ds_oilUnitPrice.getCellData(rowIndex, 'oilTskClsCd'));
      dma_amt.set('oilkndCd', ds_oilUnitPrice.getCellData(rowIndex, 'oilkndCd'));
      dma_amt.set('oilBizClsCd', ds_oilUnitPrice.getCellData(rowIndex, 'oilBizClsCd'));
      dma_amt.set('selpchClntNo', ds_oilUnitPrice.getCellData(rowIndex, 'selpchClntNo'));
      dma_amt.set('payClsCd', ds_oilUnitPrice.getCellData(rowIndex, 'payClsCd'));

      //dma_amt.UseChangeInfo = "false";
      await $c.sbm.execute($p, sbm_retrieveAmt);
      gr_oilUnitPrice.setEventPause("", true); // 해당 그리드의 모든 이벤트 막음
      ds_oilUnitPrice.setCellData(rowIndex, 'saleUpr', ds_amtResult.getCellData(0, 'upr'));
      var upr = $c.num.parseInt($p, ds_amtResult.getCellData(0, 'upr')) || 0; // 수량
      var qty = $c.num.parseInt($p, ds_oilUnitPrice.getCellData(rowIndex, 'qty')) || 0; // 단가
      ds_oilUnitPrice.setCellData(rowIndex, 'saleAmt', Math.round(upr * qty));

      //gr_oilUnitPrice.setFocusedCell(gr_oilUnitPrice.getFocusedRowIndex(), "vehclNo", true);
      gr_oilUnitPrice.setEventPause("", false); // 해당 그리드의 모든 이벤트 풂
    }
  }

  //그리드 매출거래처 칸에서 포커스 아웃시 팝업창 오픈
  var colid = gr_oilUnitPrice.getColumnID(columnIndex);
  if (colid == 'selpchClntNo') {
    //매출거래처
    await udc_grclntNo.cfCommonPopUp(scwin.udc_grclntNo_callbackFunc, ds_oilUnitPrice.getCellData(rowIndex, 'selpchClntNo'), "", "T", null, null, null, null, null, null, null, null, null);
  }
};

//그리드 매출거래처 칸에서 팝업 콜백
scwin.udc_grclntNo_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'selpchClntNo', rtnList[0]);
    ds_oilUnitPrice.setCellData(ds_oilUnitPrice.getRowPosition(), 'selpchClntNm', rtnList[1]);
  }
};
scwin.gr_oilUnitPrice_oncellclick = async function (rowIndex, columnIndex, columnId) {
  debugger;
  var rowJson = ds_oilUnitPrice.getRowJSON(rowIndex);
  var RowStatus = ds_oilUnitPrice.getRowStatus(rowIndex);
  if (RowStatus == "R" || RowStatus == "D") {
    gr_oilUnitPrice.setColumnReadOnly("ioDt", true);
    gr_oilUnitPrice.setColumnReadOnly("oilStatNm", true);
    gr_oilUnitPrice.setColumnReadOnly("oilkndCd", true);
    gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("preCoAfClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("selpchClntNo", true);
    gr_oilUnitPrice.setColumnReadOnly("sellClntNo", true);
    gr_oilUnitPrice.setColumnReadOnly("payClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("stockAcctDeptNm", true);
    gr_oilUnitPrice.setColumnReadOnly("homeClsCd", true);
    gr_oilUnitPrice.setColumnReadOnly("stockAcctDeptCd", true);
  } else if (RowStatus == "C") {
    gr_oilUnitPrice.setColumnReadOnly("ioDt", false);
    gr_oilUnitPrice.setColumnReadOnly("oilStatNm", false);
    gr_oilUnitPrice.setColumnReadOnly("oilkndCd", false);
    gr_oilUnitPrice.setColumnReadOnly("oilTskClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("oilBizClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("preCoAfClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("selpchClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("selpchClntNo", false);
    gr_oilUnitPrice.setColumnReadOnly("sellClntNo", false);
    gr_oilUnitPrice.setColumnReadOnly("payClsCd", false);
    gr_oilUnitPrice.setColumnReadOnly("selpchClntNm", true);
    gr_oilUnitPrice.setColumnReadOnly("sellClntNm", true);
    gr_oilUnitPrice.setColumnReadOnly("stockAcctDeptNm", true);
  }
  if (columnId == "selpchClntNm") {
    // 매출거래처
    await udc_grclntNo.cfCommonPopUp(scwin.udc_grclntNo_callbackFunc, "", ds_oilUnitPrice.getCellData(rowIndex, 'sellClntNm'), null, null, null, null, null, null, null, null, null, null);
  }

  //tobe 삭제 : 그리드에서 숨김처리된 컬럼
  // if (columnId == "stockAcctDeptCd") {
  //     rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',ds_oilUnitPrice.NameValue(row,'stockAcctDeptCd'),"",null,null,null,null,null,null,null,null,null,null);
  // 	if(rtnList !=null && rtnList[0]!= "N/A"){
  // 		ds_oilUnitPrice.NameValue(ds_oilUnitPrice.RowPosition,'stockAcctDeptCd')=rtnList[0];
  // 		ds_oilUnitPrice.NameValue(ds_oilUnitPrice.RowPosition, 'stockAcctDeptNm')=rtnList[1];
  // 	}
  // }

  if (rowJson.preCoAfClsCd == "01") {
    gr_oilUnitPrice.setColumnReadOnly("sellClntNo", false);
  } else if (rowJson.preCoAfClsCd == "02") {
    gr_oilUnitPrice.setColumnReadOnly("sellClntNo", false);
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), "F", "F");
};
scwin.udc_bpClntNo_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), "F", "F");
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), "F", "F");
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};
scwin.udc_bpClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_bpClntNo.getValue(), ed_bpClntNm.getValue(), "F", "F");
};
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 6, false);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 5, false);
};
scwin.udc_bpClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_bpClntNm, ed_bpClntNo, 7, false);
};
scwin.udc_oilOilStatCd_onviewchangeNameEvent = async function (info) {
  await pscommon.RcfOilStatPop(ed_oilOilStatCd, ed_oilStatNm, 'NM', '전체', '전체');
};
scwin.udc_oilOilStatCd_onclickEvent = async function (e) {
  await pscommon.RcfOilStatPop(ed_oilOilStatCd, ed_oilStatNm, 'IMG', '전체', '전체');
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_cancel = function () {
  //tobe추가 : 추가된 행은 삭제해줘야함
  if (ds_oilUnitPrice.getRowStatus(ds_oilUnitPrice.getRowPosition()) == "C") {
    ds_oilUnitPrice.removeRow(ds_oilUnitPrice.getRowPosition());
  } else if (ds_oilUnitPrice.getRowStatus(ds_oilUnitPrice.getRowPosition()) != "R") {
    ds_oilUnitPrice.undoRow(ds_oilUnitPrice.getRowPosition());
  }
};
scwin.gr_oilUnitPriceExcel_onfilereadend = function (value) {
  scwin.f_Import();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_oilOilStatCd',validTitle:'',nameId:'ed_oilStatNm',style:'',id:'udc_oilOilStatCd',btnId:'btn_oilOilStatCd','ev:onviewchangeNameEvent':'scwin.udc_oilOilStatCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_oilOilStatCd_onclickEvent',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',mandatoryFrom:'true',edFromId:'ed_stdDt',edToId:'ed_endDt',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilStatClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'카드만'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'카드 제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'retrieveAcctDeptCdInfoPopup',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'retrieveClntEmpNoListpopup',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',id:'udc_clntNo',btnId:'btn_clntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유종구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilkndCd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label',ref:'',chooseOptionLabel:'선택'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payClsCd',style:'width: 230px;',submenuSize:'fixed',displayMode:'value delim label',ref:'',chooseOptionLabel:'선택'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BP거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_bpClntNo',nameId:'ed_bpClntNm',popupID:'',selectID:'retrieveClntEmpNoList',style:'',validTitle:'',id:'udc_bpClntNo',btnId:'btn_bpClntNo','ev:onblurCodeEvent':'scwin.udc_bpClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bpClntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_bpClntNo_onviewchangeNameEvent',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'FMS유류보관판매등록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',gridID:'gr_oilUnitPrice',gridDownFn:'scwin.f_Excel',id:'udc_topGrd',btnUser:'N',gridUpFn:'scwin.f_upload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilUnitPrice',id:'gr_oilUnitPrice',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_oilUnitPrice_oncellclick',rowStatusVisible:'true',readOnly:'true',columnMove:'true',useCtrlKey:'false',useShiftKey:'false',dataDragSelect:'false','ev:onrowindexchange':'scwin.gr_oilUnitPrice_onrowindexchange','ev:ontextimageclick':'scwin.gr_oilUnitPrice_ontextimageclick',editModeEvent:'onclick',editModeEventIcon:'onclick','ev:onafteredit':'scwin.gr_oilUnitPrice_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'출고일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'주유소</br>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'주유소명',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'유류업무</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'유류사업</br>구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'유류수불</br>유형',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'매출입</br>구분',width:'100',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'판매구분',width:'100',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'유종</br>구분',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'매출</br>거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column64',value:'매출거래처명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'거래</br>구분 ',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column58',value:'소속구분',displayMode:'label',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'상품귀속</br>부서 ',displayMode:'label',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'리터',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column73',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilOilStatNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatNm',inputType:'textImage',style:'',value:'',width:'100',mandatory:'true',viewType:'default',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilTskClsCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilBizClsCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilRcpayPatternCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClsCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preCoAfClsCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilkndCd',inputType:'select',style:'',value:'',width:'70',mandatory:'true',chooseOptionLabel:'     ',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_grOilkndCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'selpchClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'selpchClntNm',value:'',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'payClsCd',value:'',displayMode:'label',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'homeClsCd',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stockAcctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pcostAcctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',readOnly:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',mandatory:'true',readOnly:'false',excelCellType:'number',maxLength:'9.2',applyFormat:'all'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'saleUpr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'saleAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column78',value:'0',displayMode:'label',textAlign:'right',expression:'SUM(\'qty\')',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column75',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'saleAmt\')',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',id:'btn_addrow',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_cancel'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button','ev:onclick':'scwin.f_DelAll'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'lc_ext',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnUpload',style:'',type:'button','ev:onclick':'scwin.f_upload'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display:none'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_groilOilStatCd',selectID:'',popupID:'',validTitle:'',nameId:'ed_groilStatNm',style:'',id:'udc_groilOilStatCd',btnId:'btn_groilOilStatCd'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',columnMove:'true',dataDragSelect:'false',dataList:'data:ds_Org_oilUnitPrice',editModeEvent:'onclick',editModeEventIcon:'onclick',focusMode:'row',id:'gr_oilUnitPriceExcel',readOnly:'true',rowStatusVisible:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',useCtrlKey:'false',useShiftKey:'false',visibleRowNum:'12',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_oilUnitPriceExcel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column30',inputType:'text',style:'',value:'출고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'주유소</br>코드',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column36',inputType:'text',style:'',value:'주유소명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column34',inputType:'text',style:'',value:'유류업무</br>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column32',inputType:'text',style:'',value:'유류사업</br>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column28',inputType:'text',style:'',value:'유류수불</br>유형',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',hidden:'true',id:'column26',inputType:'text',style:'',value:'매출입</br>구분',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',hidden:'true',id:'column22',inputType:'text',style:'',value:'판매구분',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column24',inputType:'text',style:'',value:'유종</br>구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',style:'',value:'매출</br>거래처',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column64',inputType:'text',style:'',value:'매출거래처명',width:'130'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column61',inputType:'text',style:'',value:'거래</br>구분 ',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',hidden:'true',id:'column58',inputType:'text',style:'',value:'소속구분',width:'110'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',hidden:'true',id:'column55',inputType:'text',style:'',value:'상품귀속</br>부서 ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'매출부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column76',inputType:'text',style:'',value:'리터',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',style:'',value:'단가',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',style:'',value:'금액',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayFormat:'yyyy/MM/dd',displayMode:'label',id:'ioDt',inputType:'calendar',mandatory:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilOilStatNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatNm',inputType:'textImage',mandatory:'true',style:'',textAlign:'left',value:'',viewType:'default',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'oilTskClsCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'oilBizClsCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'oilRcpayPatternCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'selpchClsCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'preCoAfClsCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',chooseOptionLabel:'     ',displayMode:'label',id:'oilkndCd',inputType:'select',mandatory:'true',ref:'',style:'',value:'',width:'70'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_grOilkndCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchClntNm',inputType:'text',mandatory:'true',style:'',textAlign:'left',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payClsCd',inputType:'select',mandatory:'true',style:'',textAlign:'left',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'homeClsCd',inputType:'text',style:'',value:'',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'stockAcctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pcostAcctDeptNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',readOnly:'false',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0.00',displayMode:'label',excelCellType:'number',id:'qty',inputType:'text',mandatory:'true',readOnly:'false',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0.00',displayMode:'label',excelCellType:'number',id:'saleUpr',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',excelCellType:'number',id:'saleAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column69',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',textAlign:'left',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',style:'',value:'',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0.00',displayMode:'label',expression:'SUM(\'qty\')',id:'column78',inputType:'expression',style:'',textAlign:'right',value:'0',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0.00',displayMode:'label',expression:'SUM(\'saleAmt\')',id:'column75',inputType:'expression',style:'',textAlign:'right',value:'0',width:'70'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_grclntNo',selectID:'retrieveClntEmpNoList',popupID:'retrieveClntEmpNoListpopup',validTitle:'',nameId:'ed_grclntNm',style:'',id:'udc_grclntNo',btnId:'btn_grclntNo'}}]}]}]}]}]}]})