/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_07b.xml 93280 5690652f1f9ba695f743eec4b4560a70b3ff3594b592fd6ea97e51786fa3078c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inQryStDt',name:'입고기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inQryEndDt',name:'입고기간To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'ioPosSeq',name:'입출고위치순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'ioWrkPlCd',name:'입출고작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'ioWrkPlNm',name:'입출고작업장명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'재고거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적CBM',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입출고일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ioHh',name:'입출고시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사전화번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'500'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'PO번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'selfTransCoNm',name:'자가운송업체명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'strOdrNo',name:'보관오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'strCommSeq',name:'보관품명순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'strWrkPathSeq',name:'보관작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'strWrkStpSeq',name:'보관작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'inOdrNo',name:'입고오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'inOdrCommSeq',name:'입고오더품명순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text',defaultValue:'',length:'30'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveCtrtClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ctrtNo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'계약번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntPicNm',name:'거래처담당자명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtStDt',name:'계약시작일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtEndDt',name:'계약종료일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'과세구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'비고'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTrgtClntYn',name:'관리대상거래처여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNo',name:'사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNm',name:'사원명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'allocRt',name:'배분율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtDistrictCd',name:'계약권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regBranCd',name:'등록점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regBranNm',name:'등록점소명'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveCtrtNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reqClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_realMchtClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtComm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveSelfInContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.op.wrkrslts.yardwrkrslts.SaveSelfInCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.op.wrkrslts.yardwrkrslts.SaveSelfInCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtClnt',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveCtrtClnt","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtClnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtNo',action:'/ds.sd.odrmgnt.odrreg.RetrieveContractInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_retrieveCtrtNo",{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_realMchtClntNo","key":"OUT_DS2"},{"id":"ds_bilgClntNo","key":"OUT_DS3"},{"id":"ds_ctrtComm","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_reqClntNo","key":"OUT_DS1"},{"id":"ds_realMchtClntNo","key":"OUT_DS2"},{"id":"ds_bilgClntNo","key":"OUT_DS3"},{"id":"ds_ctrtComm","key":"OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtNo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DGauceConstants.js',scopeVariable:'DGauceConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//세션정보
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드 ( 01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객) )
scwin.clntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
scwin.clntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명

scwin.bizDivCntrYn = DsConstants.YN_NO; // 사업부문컨테이너여부
scwin.bizDivBulkYn = DsConstants.YN_YES; // 사업부문벌크여부

//scwin.txt_strCommSeq = ""; 사용되지 않음
//scwin.txt_strWrkPathSeq = ""; 사용되지 않음
//scwin.txt_strWrkStpSeq = ""; 사용되지 않음
scwin.txt_dummy = "";
//scwin.hid_ctrtClntNo = ""; 사용되지 않음
scwin.hid_chkCtrtClntNo = "";
scwin.hid_chkBilgClntNo = "";
//scwin.hid_repClntNo = ""; 사용되지 않음
scwin.hid_ctrtNo = "";
scwin.hid_odrJobType = ""; //어디서 사용되는지?

scwin.mgntTrgtClntYn = 0; //거래처 관리대상여부

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP194",
    compID: "lc_impExpDomesticClsCd,lc_impExpClsCd"
  } //수출입
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableObjects($p, [btn_stockClntNo, btn_rltNo, btn_cvsslMgntNo, btn_commCd, btn_strOdrNo]);
    scwin.f_FieldClear();
    $c.gus.cfDisableObjects($p, [btn_save, btn_del, btn_carryingInOutEDI, btn_cancel, ed_strOdrNo]);

    // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
    scwin.f_clearDataSetRetrieveCtrtClnt();

    // 계약번호 (ds_ctrtNo) DataSet 초기화
    ds_ctrtNo.removeAll();
    ds_bilgClntNo.removeAll();
    scwin.mgntTrgtClntYn = 0;

    //테스트데이터
    // ds_condition.set("impExpDomesticClsCd", "I"); //수입
    // ds_condition.set("wrkPlCd", "4E02");
    // ds_condition.set("inQryStDt", "20070101");
    // ds_condition.set("inQryEndDt", "20070131");
    // ed_wrkPlNm.setValue("연안장치장");  

    // ds_condition.set("impExpDomesticClsCd", "D"); //내수
    // ds_condition.set("wrkPlCd", "7L01");
    // ds_condition.set("inQryStDt", "20210101");
    // ds_condition.set("inQryEndDt", "20210110");
    // ed_stockClntNoQry.setValue("311641");  
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// DataSet 초기화 처리 : 계약거래처 DataSet 을 초기화 한다.
//-------------------------------------------------------------------------
scwin.f_clearDataSetRetrieveCtrtClnt = function () {
  // 계약거래처 DataMap SET
  ds_retrieveCtrtClnt.set("odrKndCd", "");
  ds_retrieveCtrtClnt.set("ctrtClntNo", "");
  ds_retrieveCtrtClnt.set("bizDivCntrYn", scwin.bizDivCntrYn);
  ds_retrieveCtrtClnt.set("bizDivBulkYn", scwin.bizDivBulkYn);
};

//-------------------------------------------------------------------------
// DataSet 초기화 처리 : 요청거래처, 실화주, 청구거래처 DataSet 을 초기화 한다.
//-------------------------------------------------------------------------
scwin.f_clearClntDataSet = function () {
  ds_bilgClntNo.removeAll(); // 청구거래처
  ed_bilgClntNo.setValue("");
  scwin.hid_ctrtNo = "";
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_condition]);
  if (!ret) return;

  //ds_retrieve.SyncLoad = true;
  //ds_condition.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_retreive);
  //gr_retrieve.Redraw = false;    
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_New = function () {
  var newRow = ds_retrieve.insertRow();
  ds_retrieve.setRowPosition(newRow);

  // 초기값 설정
  ds_retrieve.setCellData(newRow, "ioWrkPlCd", ed_wrkPlCdQry.getValue());
  //ds_retrieve.setCellData(newRow, "ioWrkPlNm", ed_wrkPlNm.getValue());
  ed_ioWrkPlNm.setValue(ed_wrkPlNm.getValue());
  ds_retrieve.setCellData(newRow, "lblock", "A");
  ds_retrieve.setCellData(newRow, "lbay", "01");
  ds_retrieve.setCellData(newRow, "lrow", "01");
  ds_retrieve.setCellData(newRow, "ltier", "1");
  ds_retrieve.setCellData(newRow, "shipwgtPos", "A-01-01-1");
  ds_retrieve.setCellData(newRow, "ioDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_retrieve.setCellData(newRow, "ioHh", $c.date.getServerDateTime($p, "HHmm"));
  ds_retrieve.setCellData(newRow, "cvsslMgntNo", ed_cvsslMgntNoQry.getValue());
  ds_retrieve.setCellData(newRow, "rltNo", ed_rltNoQry.getValue());
  ds_retrieve.setCellData(newRow, "stockClntNo", ed_stockClntNoQry.getValue());
  ds_retrieve.setCellData(newRow, "stockClntNm", ed_stockClntNmQry.getValue());
  ds_retrieve.setCellData(newRow, "ctrtClntNo", ed_ctrtClntNo.getValue());
  ds_retrieve.setCellData(newRow, "bilgClntNo", ed_bilgClntNo.getValue());
  ds_retrieve.setCellData(newRow, "ctrtNo", lc_ctrtNo.getValue());
  lc_impExpClsCd.setValue(lc_impExpDomesticClsCd.getValue());
  $c.gus.cfEnableKeyData($p);
  if (lc_impExpClsCd.getValue() == "I") {
    $c.gus.cfEnableObjects($p, [btn_stockClntNo, btn_rltNo, btn_cvsslMgntNo, btn_commCd, btn_strOdrNo]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_stockClntNo, btn_cvsslMgntNo, btn_commCd, btn_strOdrNo]);
  }
  lc_impExpClsCd.focus();
  $c.gus.cfEnableObjects($p, [btn_save, btn_cancel]);
  $c.gus.cfDisableObjects($p, [btn_new, btn_del, btn_carryingInOutEDI]);

  // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
  scwin.f_clearDataSetRetrieveCtrtClnt();
  ds_ctrtNo.removeAll();
  ed_ctrtClntNo.setValue("");
  ed_ctrtClntNm.setValue("");
  scwin.mgntTrgtClntYn = 0;

  // 청구 거래처 정보 (ds_bilgClntNo) DataSet 초기화
  ds_bilgClntNo.removeAll();
  ed_bilgClntNo.setValue("");
  scwin.f_chkOpenCommonPopUp(ed_ctrtClntNo, ed_ctrtClntNm, 1, true);
  if (ed_ctrtClntNo.getValue().trim() == "") {
    // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
    scwin.f_clearDataSetRetrieveCtrtClnt();

    // 계약번호 (ds_ctrtNo) DataSet 초기화
    ds_ctrtNo.removeAll();
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  $c.data.undoAll($p, ds_retrieve);
  //ds_retrieve.undoAll();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [btn_cancel, btn_save]);
  $c.gus.cfEnableObjects($p, [btn_new]);
  if (ds_retrieve.getRowCount() > 0) {
    // 데이터가 있는 경우 0번째 데이터를 바인딩
    gr_retrieve.setFocusedCell(0, "ioWrkPlCd", false); //edit : true

    $c.gus.cfEnableObjects($p, [btn_carryingInOutEDI]);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  ret = await $c.win.confirm($p, "삭제 하시겠습니까?");
  if (ret) {
    ds_retrieve.deleteRow(ds_retrieve.getRowPosition());
    $c.gus.cfDisableKeyData($p);
    $c.sbm.execute($p, sbm_delete);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 입력 validation

  //계약번호가 null 이라서 cfValidate([tbl_input] 공통함수에서 에러나기 때문에 방어로직 추가
  if (ds_ctrtNo.getRowCount() == 0) {
    $c.win.alert($p, "계약번호를 조회해주세요.");
    return;
  }

  //기본 필수 입력등 체크 ( 화주, 입고일시, 차량번호 필수 )
  let ret = await $c.gus.cfValidate($p, [tbl_input]);
  if (!ret) return;
  for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
    if (ds_retrieve.getRowStatus(i) == "C") {
      // 신규입력의경우 lblock등등을 분리
      if (ds_retrieve.getCellData(i, "impExpClsCd").trim() == "") {
        $c.win.alert($p, "수입/수출구분은 필수 입력입니다.");
        return;
      }
      if (ds_retrieve.getCellData(i, "ioWrkPlCd").trim() == "") {
        $c.win.alert($p, "입고작업장은 필수 입력입니다.");
        return;
      }
      if (ds_retrieve.getCellData(i, "commCd").trim() == "") {
        $c.win.alert($p, "품명은 필수 입력입니다.");
        return;
      }
      if (ds_retrieve.getCellData(i, "impExpClsCd").trim() != "O") {
        if (ed_ctrtClntNo.getValue() == "") {
          $c.win.alert($p, "계약거래처는 필수 입력입니다.");
          return;
        }
        if (lc_ctrtNo.getValue() == "") {
          $c.win.alert($p, "계약번호는 필수 입력입니다.");
          return;
        }
        if (ed_bilgClntNo.getValue() == "") {
          $c.win.alert($p, "청구처는 필수 입력입니다.");
          return;
        }
      }

      // 수량, 중량중 하나는 반드시 입력되어야 함.
      if (ds_retrieve.getCellData(i, "rsltsQty") == 0 && ds_retrieve.getCellData(i, "rsltsWt") == 0) {
        $c.win.alert($p, "수량, 중량는 하나는 반드시 입력하십시오.");
        ds_retrieve.setRowPosition(i);
        return;
      }

      /* 
      if(!cfValidateValue(ds_retrieve.NameValue(i, "shipwgtPos"), "A-00-00-0")) {
          $c.win.alert("적재위치 형식(LBLOCK-LBAY-LROW-LTIER)이 맞지 않습니다.");
          ds_retrieve.getRowPosition(i);
          ed_shipwgtPos.focus();
          return;
      }
      */

      var str = ds_retrieve.getCellData(i, "shipwgtPos").advancedSplit("-", "t");
      ds_retrieve.setCellData(i, "lblock", str[0]);
      ds_retrieve.setCellData(i, "lbay", str[1]);
      ds_retrieve.setCellData(i, "lrow", str[2]);
      ds_retrieve.setCellData(i, "ltier", str[3]);
      ds_retrieve.setCellData(i, "ctrtClntNo", ed_ctrtClntNo.getValue());
      ds_retrieve.setCellData(i, "bilgClntNo", ed_bilgClntNo.getValue());
      ds_retrieve.setCellData(i, "ctrtNo", lc_ctrtNo.getValue());
    }
  }
  ret = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_regist);
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition);
  ed_inQryStDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_inQryEndDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  lc_impExpDomesticClsCd.setSelectedIndex(0);
  lc_impExpDomesticClsCd.focus();
};

//-------------------------------------------------------------------------
// 청구/요청거래처/실화주거래처 정보 clear	
//-------------------------------------------------------------------------
scwin.f_clearDataByClntNos = function () {
  ds_bilgClntNo.removeAll();
  $c.gus.cfInitObjects($p, [ed_bilgClntNo]);
  //$c.gus.cfInitHidVal([ed_bilgClntNo]);
  ed_bilgClntNo.hidVal = "";
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면
  var win_url = "";
  var opts;
  switch (disGubun) {
    case 1:
      // 입출고 장치장 ( 조회조건 )
      udc_wrkPlCdQry.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID 
      udc_wrkPlCdQry.cfCommonPopUp(scwin.udc_wrkPlCdQry_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , ',,,9' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "입출고장치장,장치장코드,장치장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //본선관리번호
      var arrParam = new Array();
      arrParam[0] = ed_cvsslMgntNoQry.getValue();
      win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
      opts = {
        id: "op_204_01_07p",
        popupName: "본선관리번호검색팝업",
        modal: true,
        type: "browserPopup",
        width: 1100,
        height: 500,
        title: "본선관리번호검색팝업"
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
      if (rtnList != null) {
        ed_cvsslMgntNoQry.setValue(rtnList[0]);
      } else {
        $c.gus.cfInitObjects($p, [ed_cvsslMgntNoQry]);
      }
      break;
    case 3:
      // B/L ( 조회조건 )
      var arrParam = new Array(4);
      arrParam[0] = ed_rltNoQry.getValue().trim(); //bl번호
      arrParam[1] = ed_cvsslMgntNoQry.getValue().trim(); //본선관리번호
      arrParam[2] = ""; //배정구분코드
      arrParam[3] = lc_impExpDomesticClsCd.getValue(); //수출입 구분
      arrParam[4] = 1; //0-컨테이너, 1-벌크
      arrParam[5] = ""; //lineCd
      arrParam[6] = ""; //tsYn

      win_url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml";
      opts = {
        id: "sd_402_01_29p",
        popupName: "BL조회",
        modal: true,
        type: "browserPopup",
        width: 1000,
        height: 500,
        title: "BL조회"
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          ed_rltNoQry.setValue = rtnList[3]; // B/L 번호
          //ed_rltNoQry.hidVal = rtnList[3]; //사용되지 않음
        }
      } else {
        $c.gus.cfInitObjects($p, [ed_rltNoQry]);
        //$c.gus.cfInitHidVal([ed_rltNoQry]); //사용되지 않음
      }
      break;
    case 4:
      //입고화주 (조회조건)
      /*
      rtnList = cfCommonPopUp('retrieveClntList' // XML상의 SELECT ID
      ,pCode // 화면에서의 ??? Code Element의 Value
      ,pName // 화면에서의 ??? Name Element의 Value
      ,pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      ,null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      ,null // Title순서
      ,null // 보여주는 각 컬럼들의 폭
      ,null // 컬럼중에서 숨기는 컬럼 지정
      ,',LO1' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      ,null // POP-UP뛰을때 원도우의 사용자 정의 폭
      ,null // POP-UP뛰을때 우도우의 사용자 정의 높이
      ,null // 윈도우 위치 Y좌표
      ,null // 윈도우 위치 X좌표
      ,null // 중복체크여부 ("F")
      ,pAllSearch // 전체검색허용여부 ("F")
      ,null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      // 입고화주, 입고화주명
      */

      udc_stockClntNoQry.setSelectId("retrieveClntInfo"); // XML상의 SELECT ID
      udc_stockClntNoQry.cfCommonPopUp(scwin.udc_stockClntNoQry_callBackFunc,
      // 콜백 함수
      pCode, pName, pClose, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", 'LOGISCLNT1,,CTRT,0', '800', '600', null, null, null, pAllSearch, null);
      break;
    case 5:
      //화주명 (입력)
      /*
      rtnList = cfCommonPopUp('retrieveClntList' // XML상의 SELECT ID
      ,pCode // 화면에서의 ??? Code Element의 Value
      ,pName // 화면에서의 ??? Name Element의 Value
      ,pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      ,null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      ,null // Title순서
      ,null // 보여주는 각 컬럼들의 폭
      ,null // 컬럼중에서 숨기는 컬럼 지정
      ,',LO1' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      ,null // POP-UP뛰을때 원도우의 사용자 정의 폭
      ,null // POP-UP뛰을때 우도우의 사용자 정의 높이
      ,null // 윈도우 위치 Y좌표
      ,null // 윈도우 위치 X좌표
      ,null // 중복체크여부 ("F")
      ,pAllSearch // 전체검색허용여부 ("F")
      ,null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      */
      udc_stockClntNo.setSelectId("retrieveClntInfo"); // XML상의 SELECT ID
      udc_stockClntNo.cfCommonPopUp(scwin.udc_stockClntNo_callBackFunc,
      // 콜백 함수
      pCode, pName, pClose, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", 'LOGISCLNT1,,CTRT,0', '800', '600', null, null, null, pAllSearch, null);
      break;
    case 6:
      // BL ( 입력 )
      var arrParam = new Array(4);
      arrParam[0] = ed_rltNo.getValue().trim(); //bl번호
      arrParam[1] = ed_cvsslMgntNo.getValue().trim(); //본선관리번호
      arrParam[2] = ""; //배정구분코드
      arrParam[3] = lc_impExpClsCd.getValue(); //수출입 구분
      arrParam[4] = 1; //0-컨테이너, 1-벌크
      arrParam[5] = ""; //lineCd
      arrParam[6] = ""; //tsYn

      win_url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_29p.xml";
      opts = {
        id: "sd_402_01_29p",
        popupName: "BL조회",
        modal: true,
        type: "browserPopup",
        width: 1000,
        height: 500,
        title: "BL조회"
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          ed_rltNo.setValue(rtnList[3]); // B/L 번호
          ed_rltNo.hidVal = rtnList[3];
          ed_cvsslMgntNo.setValue(rtnList[6]); //본선관리번호
          ed_cvsslMgntNo.hidVal = rtnList[6]; //본선관리번호
        }
      } else {
        $c.gus.cfInitObjects($p, [ed_rltNo, ed_cvsslMgntNo]);
        //$c.gus.cfInitHidVal([ed_rltNo, ed_cvsslMgntNo]);
        ed_rltNo.hidVal = "";
        ed_cvsslMgntNo.hidVal = "";
      }
      break;
    case 7:
      // 본선관리번호 ( 입력 )
      if (pCode.length < 3) {
        $c.win.alert($p, "본선관리번호는 3자리 이상 입력하십시오.");
        return;
      }
      var arrParam = new Array();
      arrParam[0] = ed_cvsslMgntNo.getValue(); //본선관리번호

      win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
      opts = {
        id: "op_204_01_07p",
        popupName: "본선관리번호검색팝업",
        modal: true,
        type: "browserPopup",
        width: 1100,
        height: 500,
        title: "본선관리번호검색팝업"
      };
      rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
      if (rtnList != null) {
        ed_cvsslMgntNo.setValue(rtnList[0]);
      } else {
        //테스트가 안되서 임시로 막음
        //$c.gus.cfInitObjects([ed_cvsslMgntNo]);
      }
      break;
    case 8:
      // 입출고 장치장 ( 입력 )
      udc_ioWrkPlCd.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID            
      udc_ioWrkPlCd.cfCommonPopUp(scwin.udc_ioWrkPlCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , ',,,9' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "F" // 전체검색허용여부 ("F")
      , "입출고장치장,장치장코드,장치장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 9:
      // 품명
      udc_commCd.setSelectId("retrieveCommInfo"); // XML상의 SELECT ID            
      udc_commCd.cfCommonPopUp(scwin.udc_commCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , "3" // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , "코드,명,레벨" // Title순서
      , "80,195,50" // 보여주는 각 컬럼들의 폭
      , "4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
      , null //컨테이너 벌크구분을 넘김
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "품목,품목코드,품목" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 10:
      pWhere = ",CTRT";
      // 계약 거래처코드팝업
      udc_ctrtClntNo.setSelectId("retrieveClntInfo2"); // XML상의 SELECT ID
      udc_ctrtClntNo.cfCommonPopUp(scwin.udc_ctrtClntNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "계약 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 11:
      // 청구 거래처코드팝업
      udc_bilgClntNo.setSelectId("retrieveClntInfo"); // XML상의 SELECT ID
      udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "청구 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

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
// 반입신고
//-------------------------------------------------------------------------
scwin.f_inbound = function () {
  if (ds_retrieve.getRowCount() < 1) {
    $c.win.alert($p, "반입신고할 대상이 없습니다.");
    return;
  }
  var row = ds_retrieve.getRowPosition();
  if (ds_retrieve.getModifiedIndex().length != 0) {
    $c.win.alert($p, "입력중인 내용은 반입신고 할 수 없습니다.저장후 이용해 주십시오.");
    return;
  }
  let win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_16b.xml";
  let arrParam = {
    odrNo: "",
    mrn: ds_retrieve.getCellData(row, "mrn"),
    msn: ds_retrieve.getCellData(row, "msn"),
    hsn: ds_retrieve.getCellData(row, "hsn"),
    blNo: ds_retrieve.getCellData(row, "rltNo"),
    wrkPlCd: ds_retrieve.getCellData(row, "ioWrkPlCd"),
    wrkPlNm: ds_retrieve.getCellData(row, "ioWrkPlNm"),
    cntrBulk: "B",
    //컨테이너/벌크여부
    openFlag: "1"
  };
  let opts = {
    id: "op_302_01_16b",
    popupName: "세관 반입 신고 등록",
    modal: false,
    type: "browserPopup",
    width: 1200,
    height: 1100,
    title: "세관 반입 신고 등록"
  };
  $c.win.openPopup($p, win_url, opts, arrParam);
};

//-------------------------------------------------------------------------
// function name : f_StorageOrder
// function desc : 보관오더조회
//-------------------------------------------------------------------------
scwin.f_StorageOrder = async function (row) {
  var row = ds_retrieve.getRowPosition();
  var args = new Array();
  args[0] = "I"; //입출고구분
  args[1] = ds_retrieve.getCellData(row, "ioWrkPlCd"); //작업장코드 - 장치장(출발지)
  args[2] = ds_retrieve.getCellData(row, "ioWrkPlNm"); //작업장명 - 장치장(출발지)
  args[3] = ds_retrieve.getCellData(row, "stockClntNo"); //거래처코드 - 화주코드(청구화주코드)
  args[4] = ds_retrieve.getCellData(row, "stockClntNm"); //거래처명 - 화주코드(청구화주코드)
  args[5] = ds_retrieve.getCellData(row, "impExpClsCd"); //수출입구분코드
  args[6] = ds_retrieve.getCellData(row, "commCd"); //품명코드
  args[7] = ds_retrieve.getCellData(row, "comm"); //품명명
  args[8] = ds_retrieve.getCellData(row, "rltNo"); //BL번호
  args[9] = ""; //오더일자From
  args[10] = ""; //오더일자To

  let win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_33p.xml";
  let opts = {
    id: "op_302_01_33p",
    popupName: "보관오더조회",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 550,
    title: "보관오더조회"
  };
  var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  if (rtnValues != null && rtnValues[0] != "N/A") {
    ds_retrieve.setCellData(row, "inOdrNo", rtnValues[0]); //입고오더
    ds_retrieve.setCellData(row, "inOdrCommSeq", rtnValues[1]); //입고오더품명순번
  } else {
    ds_retrieve.setCellData(row, "inOdrNo", rtnValues[0]); //입고오더
    ds_retrieve.setCellData(row, "inOdrCommSeq", rtnValues[1]); //입고오더품명순번
  }
};
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retreive_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_retrieve.getRowCount());
  switch (lc_impExpDomesticClsCd.getValue()) {
    case "I":
      // 수입인경우
      gr_retrieve.setHeaderValue("rltNoHd", "B/L");
      break;
    case "O":
      // 수출인경우
      gr_retrieve.setHeaderValue("rltNoHd", "BOOKING");
      break;
    case "D":
      //내수인 경우
      gr_retrieve.setHeaderValue("rltNoHd", "출하지시번호");
      break;
  }
  if (ds_retrieve.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfDisableObjects($p, [btn_del, btn_carryingInOutEDI]);
    return;
  } else {
    //-------------------------------------------------------------------------
    // f_Retrieve 조회 후에 있던 로직
    //-------------------------------------------------------------------------
    var lblock = "A";
    var lbay = "01";
    var lrow = "01";
    var ltier = "1";
    for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
      if (ds_retrieve.getCellData(i, "lblock") == "") {
        lblock = "A";
      } else {
        lblock = ds_retrieve.getCellData(i, "lblock");
      }
      if (ds_retrieve.getCellData(i, "lbay") == "") {
        lbay = "01";
      } else {
        lbay = ds_retrieve.getCellData(i, "lbay");
      }
      if (ds_retrieve.getCellData(i, "lrow") == "") {
        lrow = "01";
      } else {
        lrow = ds_retrieve.getCellData(i, "lrow");
      }
      if (ds_retrieve.getCellData(i, "ltier") == "") {
        ltier = "1";
      } else {
        ltier = ds_retrieve.getCellData(i, "ltier");
      }
      ds_retrieve.setCellData(i, "shipwgtPos", lblock + "-" + lbay + "-" + lrow + "-" + ltier);
    }

    //ds_retrieve.ResetStatus();
    ds_retrieve.modifyAllStatus("R");

    // 데이터가 있는 경우 0번째 데이터를 바인딩
    gr_retrieve.setFocusedCell(0, "ioWrkPlCd", false); //edit : true

    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_new]);
    $c.gus.cfDisableObjects($p, [btn_save]);
    //-------------------------------------------------------------------------
    ds_retrieve.setRowPosition(0);
    $c.gus.cfEnableObjects($p, [btn_del, btn_carryingInOutEDI]);
  }
  $c.gus.cfDisableObjects($p, [btn_cancel]);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.sbm_regist_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObjects($p, [btn_new]);
  $c.gus.cfDisableObjects($p, [btn_save]);
  ed_wrkPlCdQry.setValue(ed_ioWrkPlCd.getValue());
  ed_wrkPlNm.setValue(ed_ioWrkPlNm.getValue());
  ed_inQryStDt.setValue(ica_ioDt.getValue());
  ed_inQryEndDt.setValue(ica_ioDt.getValue());
  ed_cvsslMgntNoQry.setValue(ed_cvsslMgntNo.getValue());
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 삭제 submitdone
//-------------------------------------------------------------------------
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObjects($p, [btn_new]);
  $c.gus.cfDisableObjects($p, [btn_save, btn_cancel]);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 계약거래처 - 계약번호 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveCtrtClnt_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_ctrtNo.getRowCount() == 0 && scwin.mgntTrgtClntYn != 1) {
    $c.gus.cfAlertMsg($p, "거래처 @의 " + MSG_CM_ERR_049, new Array(ed_ctrtClntNm.getValue(), "계약번호"));
  }

  // 계약번호 조회후 계약정보 조회
  if (ds_ctrtNo.getRowCount() == 0) {
    scwin.f_clearClntDataSet();
  }
};

//-------------------------------------------------------------------------
// 계약번호 - 요청거래처, 실화주, 청구거래처, 품명 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveCtrtNo_submitdone = function (e) {};

//-------------------------------------------------------------------------
// 협력업체명 UDC START
//-------------------------------------------------------------------------
scwin.udc_wrkPlCdQry_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCdQry.getValue(), ed_wrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_wrkPlCdQry_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCdQry, ed_wrkPlNm, 1, true);
};
scwin.udc_wrkPlCdQry_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCdQry, 1, false);
};
scwin.udc_wrkPlCdQry_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCdQry, ed_wrkPlNm);
};
//-------------------------------------------------------------------------
// 협력업체명 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 본선관리번호(조회조건) START
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNoQry_onclick = function (e) {
  scwin.f_openCommonPopUp(2, ed_cvsslMgntNoQry.getValue(), '', 'F', 'T');
};
scwin.ed_cvsslMgntNoQry_onblur = function (e) {
  if (ed_cvsslMgntNoQry.getValue().trim() == "") return;
  scwin.f_openCommonPopUp(2, ed_cvsslMgntNoQry.getValue(), '', 'T', 'T');
};
//-------------------------------------------------------------------------
// 본선관리번호(조회조건) END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// B/L(조회조건) START
//-------------------------------------------------------------------------
scwin.btn_rltNoQry_onclick = function (e) {
  scwin.f_openCommonPopUp(3, ed_rltNoQry.getValue(), '', 'F', 'T');
};
scwin.ed_rltNoQry_onblur = function (e) {
  if (ed_rltNoQry.getValue().trim() == "") return;
  if (lc_impExpDomesticClsCd.getValue() == "I") {
    // 수입일때만 BL 팝업조회
    scwin.f_openCommonPopUp(3, ed_rltNoQry.getValue(), '', 'T', 'T');
  }
};
//-------------------------------------------------------------------------
// B/L(조회조건) END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 입고화주(조회조건) UDC START
//-------------------------------------------------------------------------
scwin.udc_stockClntNoQry_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_stockClntNoQry.getValue(), ed_stockClntNmQry.getValue(), 'F', 'T');
};
scwin.udc_stockClntNoQry_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNoQry, ed_stockClntNmQry, 4, true);
};
scwin.udc_stockClntNoQry_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNmQry, ed_stockClntNoQry, 4, false);
};
scwin.udc_stockClntNoQry_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_stockClntNoQry, ed_stockClntNmQry);
};
//-------------------------------------------------------------------------
// 입고화주(조회조건) UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 계약처 UDC START
//-------------------------------------------------------------------------
scwin.udc_ctrtClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, ed_ctrtClntNo.getValue(), ed_ctrtClntNm.getValue(), 'F', 'F');
};
scwin.udc_ctrtClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_ctrtClntNo, ed_ctrtClntNm, 10, true);
};
scwin.udc_ctrtClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_ctrtClntNm, ed_ctrtClntNo, 10, false);
};
scwin.udc_ctrtClntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ed_ctrtClntNo.setValue(rtnList[0]); //계약 거래처코드
      ed_ctrtClntNm.setValue(rtnList[1]); //계약 거래처명
      ed_ctrtClntNm.hidVal = rtnList[1]; //계약 거래처명

      scwin.hid_chkCtrtClntNo = rtnList[0]; //계약 거래처코드
      scwin.hid_repClntNo = rtnList[2]; // 대표 거래처코드

      // 계약 거래처 - 계약정보 조회
      // 1. 계약번호
      // 2. 계약번호 별 - 요청거래처, 실화주, 청구거래처 조회
      ds_retrieveCtrtClnt.set("ctrtClntNo", ed_ctrtClntNo.getValue());
      $c.sbm.execute($p, sbm_retrieveCtrtClnt);
    } else {
      ed_ctrtClntNo.setValue(scwin.hid_chkCtrtClntNo);
      ed_ctrtClntNm.setValue(ed_ctrtClntNm.hidVal);
    }
  } else {
    ed_ctrtClntNo.setValue(""); //계약 거래처코드
    ed_ctrtClntNm.setValue(""); //계약 거래처명
    ed_ctrtClntNm.hidVal = ""; //계약 거래처명

    scwin.hid_chkCtrtClntNo = ""; //계약 거래처코드
    scwin.hid_repClntNo = ""; // 대표 거래처코드

    // 계약 거래처 - 계약정보 조회
    ds_retrieveCtrtClnt.set("ctrtClntNo", ed_ctrtClntNo.getValue());
    $c.sbm.execute($p, sbm_retrieveCtrtClnt);
  }

  //-------------------------------------------------------------------------
  // ASIS ed_ctrtClntNo OnKillFocus() 후처리에 있던 로직인데 필요 없는것 같음
  //-------------------------------------------------------------------------
  /*
  if (ed_ctrtClntNo.getValue().trim() == "") {
      // 계약 거래처 정보 (ds_retrieveCtrtClnt) DataSet 초기화
      scwin.f_clearDataSetRetrieveCtrtClnt();
       // 계약번호 (ds_ctrtNo) DataSet 초기화                
      ds_ctrtNo.removeAll();
       // 청구 거래처 정보 (ds_bilgClntNo) DataSet 초기화
      ds_bilgClntNo.removeAll();
      ed_bilgClntNo.setValue("");
      ed_bilgClntNo.hidVal = "";
  }
  */
  //-------------------------------------------------------------------------
};
//-------------------------------------------------------------------------
// 계약처 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 청구처(입력) START
//-------------------------------------------------------------------------
// 청구처에 있는 버튼이지만 B/L조회 팝업을 호출함
scwin.btn_bilgClntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(3, ed_bilgClntNo.getValue(), lc_bilgClntNm.getText(), 'F', 'F');
};

// 청구처 변경
scwin.ed_bilgClntNo_onblur = function (e) {
  var pCode = "";
  var pName = "";
  pCode = ed_bilgClntNo.getValue().replace(/^\s*/, '');
  if (ed_bilgClntNo.getReadOnly() == false) {
    if (pCode != null && pCode != "") {
      if (pCode != scwin.hid_chkBilgClntNo || $c.gus.cfIsNull($p, scwin.hid_chkBilgClntNo)) {
        scwin.f_openCommonPopUp(11, pCode, pName, 'T', 'T');
      }
    } else {
      ed_bilgClntNo.setValue("");
      ed_bilgClntNo.hidVal = "";
      lc_bilgClntNm.setSelectedIndex(-1);
    }
  }
};

// 청구처는 UDC가 아니라서 UDC 숨겨놓고 처리
scwin.udc_bilgClntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      //return value Assign
      var chkValue = false;
      for (var idx = 0; idx <= ds_bilgClntNo.getRowCount(); idx++) {
        if (rtnList[0] == ds_bilgClntNo.getCellData(idx, "clntNo")) {
          if (idx > 0) {
            lc_bilgClntNm.setSelectedIndex(idx - 1); //위치 이동
          } else {
            lc_bilgClntNm.setSelectedIndex(idx); //위치 이동
          }
          chkValue = true;
          scwin.hid_chkBilgClntNo = rtnList[0]; //청구 거래처코드
          break;
        }
      }
      if (!chkValue) {
        ds_bilgClntNo.insertRow();
        ds_bilgClntNo.setCellData(ds_bilgClntNo.getRowPosition(), "clntNo", rtnList[0]); //청구 거래처코드
        ds_bilgClntNo.setCellData(ds_bilgClntNo.getRowPosition(), "clntNm", rtnList[1]); //청구 거래처명
        lc_bilgClntNm.setSelectedIndex(ds_bilgClntNo.getRowPosition() - 1); //위치 이동
        ed_bilgClntNo.setValue(rtnList[0]); //청구 거래처코드
        scwin.hid_chkBilgClntNo = rtnList[0]; //청구 거래처코드
      }
    } else {
      ed_bilgClntNo.setValue(scwin.hid_chkBilgClntNo);
    }
  } else {
    ed_bilgClntNo.setValue(""); //청구 거래처코드
    scwin.hid_chkBilgClntNo(""); //청구 거래처코드
    lc_bilgClntNm.setSelectedIndex(-1);
  }
};
//-------------------------------------------------------------------------
// 청구처(입력) END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 입고작업장(입력) UDC START
//-------------------------------------------------------------------------
scwin.udc_ioWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_ioWrkPlCd.getValue(), ed_ioWrkPlNm.getValue(), 'F', 'T');
};
scwin.udc_ioWrkPlCd_onblurCodeEvent = function (e) {
  //scwin.txt_dummy = ""; //ASIS txt_dummy 잘못사용한것 같음
  //scwin.f_chkOpenCommonPopUp(ed_ioWrkPlCd, txt_dummy, 8, true);
  scwin.f_chkOpenCommonPopUp(ed_ioWrkPlCd, ed_ioWrkPlNm, 8, true);
};
scwin.udc_ioWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_ioWrkPlNm, ed_ioWrkPlCd, 8, false);
};
scwin.udc_ioWrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_ioWrkPlCd, ed_ioWrkPlNm);
};
//-------------------------------------------------------------------------
// 입고작업장(입력) UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화주명(입력) UDC START
//-------------------------------------------------------------------------
scwin.udc_stockClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_stockClntNo.getValue(), ed_stockClntNm.getValue(), 'F', 'T');
};
scwin.udc_stockClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNo, ed_stockClntNm, 5, true);
};
scwin.udc_stockClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_stockClntNm, ed_stockClntNo, 5, false);
};
scwin.udc_stockClntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_stockClntNo, ed_stockClntNm);
};
//-------------------------------------------------------------------------
// 화주명(입력) UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품명(입력) UDC START
//-------------------------------------------------------------------------
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_commCd.getValue(), ed_comm.getValue(), 'F', 'T');
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_comm, 9, true);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_comm, ed_commCd, 9, false);
};
scwin.udc_commCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_commCd, ed_comm);
};
//-------------------------------------------------------------------------
// 품명(입력) UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 본선관리번호(입력) START
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp(7, ed_cvsslMgntNo.getValue(), '', 'F', 'T');
};
scwin.ed_cvsslMgntNo_onblur = function (e) {
  // ASIS 불필요한 dummy 사용
  //scwin.txt_dummy = "";
  //scwin.f_chkOpenCommonPopUp(ed_cvsslMgntNo, scwin.txt_dummy, 7, true);
  if (ed_cvsslMgntNo.getValue().trim() == "") return;
  scwin.f_openCommonPopUp(7, ed_cvsslMgntNo.getValue(), '', 'T', 'T');
};
//-------------------------------------------------------------------------
// 본선관리번호(입력) END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// B/L(입력) START
//-------------------------------------------------------------------------
scwin.btn_rltNo_onclick = function (e) {
  scwin.f_openCommonPopUp(6, ed_rltNo.getValue(), '', 'F', 'T');
};
scwin.ed_rltNo_onblur = function (e) {
  if (ed_rltNo.getValue().trim() == "") return;
  if (lc_impExpClsCd.getValue() == "I") {
    // 수입일때만 BL 팝업조회
    // ASIS 불필요한 dummy 사용
    //scwin.txt_dummy = "";
    //scwin.f_chkOpenCommonPopUp(ed_rltNo, scwin.txt_dummy, 6, true);
    scwin.f_openCommonPopUp(6, ed_rltNo.getValue(), '', 'T', 'T');
  }
};
//-------------------------------------------------------------------------
// B/L(입력) END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 수입/수출구분(조회조건)
//-------------------------------------------------------------------------
scwin.lc_impExpDomesticClsCd_onchange = function (info) {
  switch (lc_impExpDomesticClsCd.getValue()) {
    case "I":
      // 수입인경우
      // 본선관리번호, BL/NO, 입고화주중 하나는 필수 입력   
      ed_stockClntNoQry.setMandatory(false);
      tbx_stockClntNoQry.removeClass("req");
      tbx_rltNoQry.setValue("B/L");
      ed_rltNoQry.setMandatory(false);
      btn_rltNoQry.show("");
      break;
    case "O":
      // 수출인경우
      // 화주 필수 입력
      //ed_stockClntNoQry.setMandatory(true); //ASIS 필수체크 안됨
      tbx_stockClntNoQry.addClass("req");
      tbx_rltNoQry.setValue("BOOKING");
      ed_rltNoQry.setMandatory(false);
      btn_rltNoQry.hide();
      break;
    case "D":
      //내수인 경우
      //ed_stockClntNoQry.setMandatory(true); //ASIS 필수체크 안됨
      tbx_stockClntNoQry.addClass("req");
      tbx_rltNoQry.setValue("출하지시번호");
      ed_rltNoQry.setMandatory(false);
      btn_rltNoQry.hide();
      break;
  }
};

//-------------------------------------------------------------------------
// 수입/수출구분(입력)
//-------------------------------------------------------------------------
scwin.lc_impExpClsCd_onviewchange = function (info) {
  switch (lc_impExpClsCd.getValue()) {
    case "I":
      // 수입인경우
      tbx_rltNo.setValue("B/L");
      ed_rltNo.setMandatory(true);
      ed_rltNo.setValue("");
      btn_rltNo.show("");
      break;
    case "O":
      // 수출인경우
      tbx_rltNo.setValue("BOOKING");
      ed_rltNo.setMandatory(false);
      ed_rltNo.setValue("");
      btn_rltNo.hide();
      break;
    case "D":
      //내수인 경우
      tbx_rltNo.setValue("출하지시번호");
      ed_rltNo.setMandatory(false);
      ed_rltNo.setValue("");
      btn_rltNo.hide();
      break;
  }
};

//-------------------------------------------------------------------------
// 계약번호 콤보박스 onchange
//-------------------------------------------------------------------------
scwin.lc_ctrtNo_onchange = function (info) {
  var ctrtNo = "";
  var odrCtrtNo = "";
  var v_ctrtNo = "";
  var odrNo = "";
  if (ds_ctrtNo.getRowCount() > 0 && scwin.mgntTrgtClntYn != 1) {
    v_ctrtNo = lc_ctrtNo.getValue("ctrtNo", lc_ctrtNo.getValue());
    if (v_ctrtNo == "선택") {
      //청구/요청거래처/실화주거래처 정보 clear
      scwin.f_clearDataByClntNos();
    } else {
      ctrtNo = scwin.hid_ctrtNo;
      if (ds_ctrtNo.getRowPosition() == null) {
        ds_ctrtNo.setRowPosition(0);
      }
      odrCtrtNo = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtNo");
      scwin.mgntTrgtClntYn = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "mgntTrgtClntYn");
      if (scwin.mgntTrgtClntYn == 1) {
        if (scwin.hid_odrJobType == DGauceConstants.TB_JOB_INSERT) {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["본 계약거래처", "관리대상이므로 오더등록"]); // "@은(는) @할 수 없습니다.";

          // DataSet 초기화
          scwin.f_clearDataSetAll();
          $c.gus.cfDisableKeyData($p);
          $c.gus.cfDisableAllBtn($p);
          $c.gus.cfEnableBtnOnly($p, [btnCreate]);
          return false;
        } else {
          $c.gus.cfAlertMsg($p, "@은(는) @입니다.", ["본 계약거래처", "관리대상"]); //"@은(는) @입니다.
          return false;
        }
      }
      if (odrCtrtNo != "" && ds_ctrtNo.getRowCount() > 0 && odrCtrtNo != ctrtNo) {
        // 2. 계약번호 별 - 요청거래처, 실화주, 청구거래처 조회
        scwin.hid_ctrtNo = v_ctrtNo;
        scwin.f_clearClntDataSet();
        dma_retrieveCtrtNo.set("ctrtNo", odrCtrtNo);
        $c.sbm.execute($p, sbm_retrieveCtrtNo);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 청구처 콤보박스 onchange
//-------------------------------------------------------------------------
scwin.lc_bilgClntNm_onchange = function (info) {
  ed_bilgClntNo.setValue(lc_bilgClntNm.getValue());
  scwin.hid_chkBilgClntNo = lc_bilgClntNm.getValue();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수입/수출구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'$blank',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_impExpDomesticClsCd',mandatory:'true',ref:'data:ds_condition.impExpDomesticClsCd',style:'width: 120px;',submenuSize:'auto',title:'수입/수출구분','ev:onviewchange':'scwin.lc_impExpDomesticClsCd_onviewchange','ev:onchange':'scwin.lc_impExpDomesticClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',mandatoryCode:'true',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',codeId:'ed_wrkPlCdQry',nameId:'ed_wrkPlNm',btnId:'btn_wrkPlCdQry',id:'udc_wrkPlCdQry',validTitle:'입고작업장',code:'wrkPlCd',refDataCollection:'ds_condition','ev:onclickEvent':'scwin.udc_wrkPlCdQry_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCdQry_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCdQry_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'inQryEndDt',refStDt:'inQryStDt',style:'',edFromId:'ed_inQryStDt',edToId:'ed_inQryEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 120px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNoQry',placeholder:'',style:'',allowChar:'a-zA-Z0-9',ref:'data:ds_condition.cvsslMgntNo','ev:onkeyup':'scwin.onkeyup','ev:onblur':'scwin.ed_cvsslMgntNoQry_onblur',maxlength:'8'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNoQry',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNoQry_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_rltNoQry',label:'B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width: 230px;'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_rltNoQry',placeholder:'',class:' ',maxlength:'20','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9',ref:'data:ds_condition.rltNo','ev:onblur':'scwin.ed_rltNoQry_onblur'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_rltNoQry',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_rltNoQry_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_stockClntNoQry',label:'입고화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',validTitle:'입고화주',codeId:'ed_stockClntNoQry',allowCharCode:'0-9',maxlengthCode:'6',nameId:'ed_stockClntNmQry',btnId:'btn_stockClntNoQry',id:'udc_stockClntNoQry',code:'stockClntNo',refDataCollection:'ds_condition','ev:onclickEvent':'scwin.udc_stockClntNoQry_onclickEvent','ev:onblurCodeEvent':'scwin.udc_stockClntNoQry_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_stockClntNoQry_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'입고이력',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_retrieve',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업장코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업장명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'화주<br/>코드',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'화주명',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'본선관리번호',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltNoHd',inputType:'text',value:'B/L',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'품명',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'규격',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'내역정보',width:'210',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'적재위치',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'입고일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'입고시간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'차량번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',value:'기사명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'연락처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column41',value:'자가운송업체',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column98',value:'strOdrNo',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column95',value:'strCommSeq',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column92',value:'strWrkPathSeq',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'strWrkStpSeq',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'계약번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'계약거래처번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'계약거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'청구거래처번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'청구거래처',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'자가입고오더',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column85',value:'자가입고오더순번',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column76',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column75',value:'중량(KG)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column74',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ioWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioWrkPlNm',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNo',inputType:'text',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntMgntNo',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',width:'80',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsWt',inputType:'text',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipwgtPos',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ioDt',displayMode:'label',mandatory:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ioHh',displayMode:'label',mandatory:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drvTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selfTransCoNm',displayMode:'label',textAlign:'center',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'strOdrNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'strCommSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'strWrkPathSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'strWrkStpSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ctrtClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'inOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'inOdrCommSeq',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_input',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w250',codeId:'ed_ctrtClntNo',nameId:'ed_ctrtClntNm',UpperFlagCode:'1',mandatoryCode:'6',allowCharCode:'a-zA-Z0-9',id:'udc_ctrtClntNo',btnId:'btn_ctrtClntNo',code:'ctrtClntNo',name:'ctrtClntNm',refDataCollection:'ds_retrieve',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ctrtClntNo_onviewchangeNameEvent',validTitle:'계약처'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',allOption:'',title:'계약서',mandatory:'true',displayMode:'label',ref:'data:ds_retrieve.ctrtNo',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 150px;',id:'lc_ctrtNo',class:'form-control',objType:'data',direction:'auto','ev:onchange':'scwin.lc_ctrtNo_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'800',selectedRowColor:'',label:'ctrtNo',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'crcCd',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'regBranNm',hidden:'',header:'',style:'',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_bilgClntNo',placeholder:'',class:'',title:'청구처',mandatory:'true',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_retrieve.bilgClntNo',objType:'data','ev:onblur':'scwin.ed_bilgClntNo_onblur'}},{T:1,N:'xf:select1',A:{chooseOptionLabel:'$blank',submenuSize:'auto',chooseOption:'',allOption:'',title:'청구처',displayMode:'value delim label',ref:'data:ds_retrieve.bilgClntNm',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',id:'lc_bilgClntNm',class:'',direction:'auto',objType:'data','ev:onchange':'scwin.lc_bilgClntNm_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bilgClntNo'},E:[{T:1,N:'xf:label',A:{ref:'clntNm'}},{T:1,N:'xf:value',A:{ref:'clntNo'}}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_bilgClntNo',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_bilgClntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수입/수출구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'$blank',class:' w110',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_impExpClsCd',mandatory:'true',ref:'data:ds_retrieve.impExpClsCd',style:'',submenuSize:'auto',title:'수입/수출구분',objType:'data','ev:onviewchange':'scwin.lc_impExpClsCd_onviewchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'w250',popupID:'',style:'',codeId:'ed_ioWrkPlCd',nameId:'ed_ioWrkPlNm',maxlengthCode:'5',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_ioWrkPlCd',id:'udc_ioWrkPlCd',refDataCollection:'ds_retrieve',code:'ioWrkPlCd',name:'ioWrkPlNm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_ioWrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ioWrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ioWrkPlCd_onviewchangeNameEvent',validTitle:'입고작업장'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'w250',popupID:'',style:'',codeId:'ed_stockClntNo',nameId:'ed_stockClntNm',btnId:'btn_stockClntNo',maxlengthCode:'6',mandatoryCode:'true',allowCharCode:'0-9',id:'udc_stockClntNo',code:'stockClntNo',name:'stockClntNm',refDataCollection:'ds_retrieve',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_stockClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_stockClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_stockClntNo_onviewchangeNameEvent',validTitle:'화주명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_ioDt',class:' cal',calendarValueType:'yearMonthDate',title:'입고일자',mandatory:'true',objType:'data',ref:'data:ds_retrieve.ioDt',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}},{T:1,N:'xf:input',A:{dataType:'time',style:'',allowChar:'0-9',id:'ed_ioHh',class:'w50 tac',title:'입고시간',mandatory:'true',objType:'data',ref:'data:ds_retrieve.ioHh'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'w250',popupID:'',style:'',maxlengthCode:'10',allowCharCode:'a-zA-Z0-9',codeId:'ed_commCd',btnId:'btn_commCd',id:'udc_commCd',nameId:'ed_comm',code:'commCd',refDataCollection:'ds_retrieve',name:'comm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent',validTitle:'품명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_rsltsQty',placeholder:'',style:'',title:'수량',mandatory:'true',objType:'data',ref:'data:ds_retrieve.rsltsQty',allowChar:'0-9',displayFormat:'#,##0',dataType:'number',maxlength:'15'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'중량(KG)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_rsltsWt',placeholder:'',style:'',title:'중량(KG)',mandatory:'true',objType:'data',ref:'data:ds_retrieve.rsltsWt',displayFormat:'#,##0.###',dataType:'float',allowChar:'0-9.',maxlength:'18.3'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'CBM',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_rsltsCbm',placeholder:'',style:'',title:'CBM',objType:'data',mandatory:'true',ref:'data:ds_retrieve.rsltsCbm',allowChar:'0-9.',displayFormat:'#,##0.###',dataType:'float',maxlength:'18.3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w250',id:'ed_clntMgntNo',placeholder:'',style:'',maxlength:'30',allowChar:'a-zA-Z0-9',ref:'data:ds_retrieve.clntMgntNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w85',id:'ed_cvsslMgntNo',placeholder:'',style:'',maxlength:'8','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_retrieve.cvsslMgntNo','ev:onblur':'scwin.ed_cvsslMgntNo_onblur',title:'본선관리번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_rltNo',label:'BL/NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_rltNo',placeholder:'',style:'','ev:onkeyup':'scwin.onkeyup',maxlength:'20',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_retrieve.rltNo','ev:onblur':'scwin.ed_rltNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_rltNo',style:'',type:'button','ev:onclick':'scwin.btn_rltNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적재위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_shipwgtPos',placeholder:'',style:'',objType:'data',ref:'data:ds_retrieve.shipwgtPos'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_vehclNo',placeholder:'',style:'',objType:'data',maxlength:'12',ref:'data:ds_retrieve.vehclNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_drvNm',placeholder:'',style:'',maxlength:'30',ref:'data:ds_retrieve.drvNm',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기사연락처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_drvTelNo',placeholder:'',style:'',maxlength:'20',ref:'data:ds_retrieve.drvTelNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자가운송업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_selfTransCoNm',placeholder:'',style:'',title:'자가운송업체',mandatory:'true',maxlength:'50',ref:'data:ds_retrieve.selfTransCoNm',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고오더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_strOdrNo',placeholder:'',style:'','ev:onviewchange':'scwin.f_StorageOrder',ref:'data:ds_retrieve.inOdrNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_strOdrNo',style:'',type:'button','ev:onclick':'scwin.f_StorageOrder'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특기사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w250',id:'ed_rmk',placeholder:'',style:'',maxlength:'500',ref:'data:ds_retrieve.rmk'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_carryingInOutEDI',style:'',type:'button','ev:onclick':'scwin.f_inbound',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반입신고'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',style:'',type:'button','ev:onclick':'scwin.f_New',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C:U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_del',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_bilgClntNo',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})