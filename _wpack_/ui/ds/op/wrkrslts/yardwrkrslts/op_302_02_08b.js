/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_08b.xml 85523 00f604a8829a2aeeb7f5534ffdb818b793eb950d862c83eb565e49bb156dfbb9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outQryStDt',name:'출고기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outQryEndDt',name:'출고기간To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltNo',name:'PO번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_change'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'changeInStockDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'conCvsslMgntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'targetIoWrkPlCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_retrieve_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'재고거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inStdDt1',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'PO번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQryStDt',name:'출고기간From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQryEndDt',name:'출고기간To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inStdDt',name:'입고기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierYardWrkPlCd',name:'부두장치장작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doYn',name:'DO여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ioNo',name:'입출고번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'ioPosSeq',name:'입출고위치순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'ioWrkPlCd',name:'입출고작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'ioWrkPlNm',name:'입출고작업장명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'재고거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적CBM',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입출고일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ioHh',name:'입출고시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사전화번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'500'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'PO번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'selfTransCoNm',name:'자가운송업체명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'strOdrNo',name:'보관오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'strCommSeq',name:'보관품명순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'strWrkPathSeq',name:'보관작업경로순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'strWrkStpSeq',name:'보관작업단계순번',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'inStdDt',name:'입고기준일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'passDt',name:'통과일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text',defaultValue:'',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_hist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltNo',name:'B/L번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ioWrkPlCd',name:'입출고작업장코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'화주코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'화주명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입출고일',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ioHh',name:'입출고시간',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'passDt',name:'통관일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'emptyWeight',name:'공차중량',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'fullWeight',name:'총중량',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'number',defaultValue:'0',length:''}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'number',defaultValue:'0',length:''}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적CBM',dataType:'number',defaultValue:'0',length:''}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'shipwgtPos',name:'적재위치',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lblock',name:'LBLOCK',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lbay',name:'LBAY',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'lrow',name:'LROW',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ltier',name:'LTIER',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'inStdDt',name:'입고기준일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'selfTransCoNm',name:'자가운송업체명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'strOdrNo',name:'보관오더번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drvTelNo',name:'기사전화번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_histCond',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveSelfStockContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_hist',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveSelfOutContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_histCond","key":"IN_DS1"},{"id":"ds_hist","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_hist","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_hist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.op.wrkrslts.yardwrkrslts.SaveSelfOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_hist","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_change',action:'/ds.op.wrkrslts.yardwrkrslts.ChangeInStockDateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_change","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_change_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//세션정보
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드 ( 01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객) )
scwin.clntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
scwin.clntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명

scwin.onLoading = false;
scwin.ds_hist_olddata = "";

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP194",
    compID: "lc_impExpDomesticClsCd"
  } //수출입
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_SetGridColumnMaxLength(gr_hist);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    $c.gus.cfDisableKeyData($p);
    scwin.f_FieldClear();

    //테스트데이터
    // ds_condition.set("impExpDomesticClsCd", "I");
    // ds_condition.set("wrkPlCd", "4E02");
    // ds_condition.set("stockClntNo", "116011");
    // ds_condition.set("outQryStDt", "20070626");
    // ds_condition.set("outQryEndDt", "20071231"); 

    //ed_wrkPlNm.setValue("연안장치장");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_condition]);
  if (!ret) return;

  // 수입인경우 본선관리번호, BL/NO중 하나는 필수 입력
  if (lc_impExpDomesticClsCd.getValue() == "I") {
    if (ed_cvsslMgntNoQry.getValue().trim() == "" && ed_rltNoQry.getValue().trim() == "" && ed_stockClntNoQry.getValue().trim() == "") {
      $c.win.alert($p, "수입 출고일때는 본선관리번호, B/L, 화주명 하나는 반드시 입력해야합니다.");
      return;
    }
  }
  scwin.onLoading = true;
  ds_retrieve.setJSON([]); // 조회 전에 OUT_DS 클리어
  $c.sbm.execute($p, sbm_retreive);
};

//-------------------------------------------------------------------------
// 엑셀 Upload
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  ds_hist.setJSON([]);
  ds_up_hist.setJSON([]);
  let options = {};
  if (udc_topGrdBtn.getUpExt() == "1") {
    // csv
    options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "header": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": "0"
    };
  } else {
    // 엑셀
    options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": "0"
    };
  }
  await udc_topGrdBtn.uploadGridViewExcel(gr_excel, options);
};

//-------------------------------------------------------------------------
// 엑셀 업로드 후 데이터 복사
//-------------------------------------------------------------------------
scwin.gr_excel_onfilereadend = async function (value) {
  //ds_hist.ImportData(ds_up_hist.ExportData(1, ds_up_hist.getRowCount(), true));
  ds_hist.setJSON(ds_up_hist.getAllJSON());

  // 업로드된 수량, 실적중량, 실적CBM 값이 NULL일 경우 0으로 표시되도록 SET
  for (let i = 0; i < ds_hist.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_hist.getCellData(i, "rsltsQty"))) {
      // 수량
      ds_hist.setCellData(i, "rsltsQty", 0);
    }
    if ($c.gus.cfIsNull($p, ds_hist.getCellData(i, "rsltsWt"))) {
      // 실적중량
      ds_hist.setCellData(i, "rsltsWt", 0);
    }
    if ($c.gus.cfIsNull($p, ds_hist.getCellData(i, "rsltsCbm"))) {
      // 실적CBM
      ds_hist.setCellData(i, "rsltsCbm", 0);
    }
  }
  ds_hist.modifyAllStatus("C");
  tbx_totalRows2.setValue(ds_hist.getRowCount());
  if (ds_hist.getRowCount() > 0) {
    $c.gus.cfEnableKeyData($p);
    gr_hist.setFocusedCell(0, 0, false); //edit : true
  } else {
    $c.gus.cfDisableKeyData($p);
  }

  // Grid의 특정 column show
  scwin.makeShowGridCol('true');
};

//-------------------------------------------------------------------------
// Excel 등록에 따라 보여지고 안 보여지고 처리
//-------------------------------------------------------------------------
scwin.makeShowGridCol = function (pValue) {
  gr_hist.setColumnVisible("cvsslMgntNo", pValue);
  gr_hist.setColumnVisible("rltNo", pValue);
  gr_hist.setColumnVisible("ioWrkPlCd", pValue);
  gr_hist.setColumnVisible("stockClntNm", pValue);
  gr_hist.setColumnVisible("commNm", pValue);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  //var newRow = ds_hist.insertRow();
  //ds_hist.setRowPosition(newRow);
  $c.data.insertRow($p, gr_hist);

  // 초기값 설정
  ds_hist.setCellData(ds_hist.getRowPosition(), "ioWrkPlCd", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "wrkPlCd"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "stockClntNo", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockClntNo"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "stockClntNm", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockClntNm"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "cvsslMgntNo", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "cvsslMgntNo"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "impExpClsCd", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "impExpClsCd"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "commCd", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "commCd"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "comm", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "comm"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "rltNo", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "rltNo"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "selfClsCd", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "selfClsCd"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "lblock", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "lblock"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "lbay", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "lbay"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "lrow", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "lrow"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "ltier", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "ltier"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "shipwgtPos", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "shipwgtPos"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "stockMgntNo", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockMgntNo"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "inStdDt", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "inStdDt"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "clntMgntNo", ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "clntMgntNo"));
  ds_hist.setCellData(ds_hist.getRowPosition(), "ioHh", ds_hist.getCellData(ds_hist.getRowPosition() - 1, "ioHh")); /*출고시간 */
  ds_hist.setCellData(ds_hist.getRowPosition(), "passDt", ds_hist.getCellData(ds_hist.getRowPosition() - 1, "passDt")); /*통관일자 */
  ds_hist.setCellData(ds_hist.getRowPosition(), "invoiceNo", ds_hist.getCellData(ds_hist.getRowPosition() - 1, "invoiceNo")); /*송장번호 */

  tbx_totalRows2.setValue(ds_hist.getRowCount());
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  // 신규는 삭제, 나머지는 상태값 삭제가 됨
  if (ds_hist.getRowStatus(ds_hist.getRowPosition()) == "C") {
    ds_hist.removeRow(ds_hist.getRowPosition());
  } else {
    ds_hist.deleteRow(ds_hist.getRowPosition());
  }
  tbx_totalRows2.setValue(ds_hist.getRowCount());
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_hist.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 데이타가 없습니다."); // 변경된 정보가 없습니다.
    return;
  }
  // 입력 validation
  // 기본 필수 입력등 체크 ( 화주, 출고일시, 차량번호 필수 )
  let ret = await $c.gus.cfValidate($p, [gr_hist]);
  if (!ret) return;
  for (var i = 0; i < ds_hist.getRowCount(); i++) {
    // 수량, 중량중 하나는 반드시 입력되어야 함.
    if (ds_hist.getCellData(i, "rsltsQty") == 0 && ds_retrieve.getCellData(i, "rsltsWt") == 0) {
      $c.win.alert($p, "수량, 중량는 하나는 반드시 입력하십시오.");
      ds_hist.setRowPosition(i);
      return;
    }
    if (ds_hist.getRowStatus(i) == "C") {
      // 신규입력의경우 lblock등등을 분리
      /*
      if (!cfValidateValue(ds_hist.getCellData(i, "shipwgtPos"), "A-00-00-0")) {
          $c.win.alert("적재위치 형식(LBLOCK-LBAY-LROW-LTIER)이 맞지 않습니다.");
          ds_hist.setRowPosition(i);
          return;
      }
      */
      var str = ds_hist.getCellData(i, "shipwgtPos").advancedSplit("-", "t");
      ds_hist.setCellData(i, "lblock", str[0]);
      ds_hist.setCellData(i, "lbay", str[1]);
      ds_hist.setCellData(i, "lrow", str[2]);
      ds_hist.setCellData(i, "ltier", str[3]);
    }
  }
  ret = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_regist);
  }
};

/* 호출되는곳 없음
scwin.f_Change = async function () {

    if (ds_retrieve.getRowCount() == 0) {
        $c.win.alert("조회먼저하세요");
        return;
    }

    var row = ds_retrieve.getRowPosition();

    for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
        if (ds_retrieve.getCellData(i, "rltNo").substring(0, 1) == "T") {
            $c.win.alert("양수양도된 화물의 입항일 변경은 CNI담당자에게 문의 바랍니다.");
            return;
        }
    }

    for (var i = 0; i < ds_hist.getRowCount(); i++) {
        if (ds_hist.getCellData(i, "dcsnClsCd") != "1") {
            if (ds_hist.getCellData(i, "dcsnClsCd") != "") {
                $c.win.alert("출고정보가 이미 처리되었습니다.");
                return;
            }
        }
    }

    let ret = await $c.win.confirm("저장 하시겠습니까?");

    if (ret) {
        for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
            if (ds_retrieve.getCellData(i, "rltNo").substring(1, 1) == "T") {
                $c.win.alert("양수양도된 화물의 입항일 변경은 CNI담당자에게 문의 바랍니다.");
                return;
            }
        }

        ds_change.set("changeInStockDt", ed_inStockDt.getValue());
        ds_change.set("conCvsslMgntNo", ds_retrieve.getCellData(row, "cvsslMgntNo")); //출고시간
        ds_change.set("targetIoWrkPlCd", ds_condition.get("wrkPlCd")); //출고시간

        if (ds_change.get("changeInStockDt") == "" || ds_change.get("conCvsslMgntNo") == "" || ds_change.get("targetIoWrkPlCd") == "") {
            $c.win.alert("변경할 정보가 없습니다.");
            return;
        }

        $c.sbm.execute(sbm_change);
    }
};
*/

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition);
  ed_outQryStDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_outQryEndDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  lc_impExpDomesticClsCd.setSelectedIndex(0);
  lc_impExpDomesticClsCd.focus();
};

//-------------------------------------------------------------------------
// function name : f_OzReport
// function desc : 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = function () {
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  var row = ds_retrieve.getRowPosition();
  var data = {
    odiName: "op_303_05_02r",
    reportName: "/ds/op/wrkrslts/stockrslts/op_303_05_02r.ozr",
    odiParam: {
      cvsslMgntNo: ds_retrieve.getCellData(row, "cvsslMgntNo"),
      // 본선관리번호
      blNo: ds_retrieve.getCellData(row, "rltNo"),
      // BL-NO
      stockMgntNo: ds_retrieve.getCellData(row, "stockMgntNo") // 재고관리번호 - 양수도 물량 출고 처리를 위한 조치
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: "preview"
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
//------------------------------------------------------------------------- 
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

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면

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
      // 본선관리번호 ( 조회조건 )
      if (pCode.length < 3) {
        $c.win.alert($p, "본선관리번호는 3자리 이상 입력하십시오.");
        return;
      }
      udc_cvsslMgntNoQry.setSelectId("retrieveCvsslMgntNo"); // XML상의 SELECT ID
      udc_cvsslMgntNoQry.cfCommonPopUp(scwin.udc_cvsslMgntNoQry_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , 8 // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , "본선관리번호,선박코드,항구코드,일자,시간,선사항차,본선명,칼럼8,칼럼9,칼럼10" // Title순서
      , "100,80,100,80,60,80,190,100,100,300" // 보여주는 각 컬럼들의 폭
      , "4,5,6,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
      , lc_impExpDomesticClsCd.getValue() // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '560' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "본선관리번호조회,본선관리번호,선박코드" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // B/L ( 조회조건 )
      var arrParam = new Array(7);
      arrParam[0] = ed_rltNoQry.getValue().trim(); //bl번호
      arrParam[1] = ""; //본선관리번호
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
          ed_rltNoQry.setValue(rtnList[3]); // B/L 번호
          //ed_rltNoQry.hidVal = rtnList[3]; //사용되지 않음
        }
      } else {
        $c.gus.cfInitObjects($p, [ed_rltNoQry]);
        //$c.gus.cfInitHidVal([ed_rltNoQry]); //사용되지 않음
      }
      break;
    case 4:
      //화주 (조회조건)     
      udc_stockClntNoQry.setSelectId("retrieveClntInfo"); // XML상의 SELECT ID     
      udc_stockClntNoQry.cfCommonPopUp(scwin.udc_stockClntNoQry_callBackFunc,
      // 콜백 함수
      pCode, pName, pClose, '9', "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,", '100,100,0,120,100,0,100,100,100,0', "3,10", 'LOGISCLNT1,,CTRT,0', '800', '600', null, null, null, pAllSearch, null);
      break;
    case 5:
      // 품명
      param = "2,4,,," + "";
      pAllSearch = "F";
      udc_commCd.setSelectId("retrieveCommInfo");
      udc_commCd.cfCommonPopUp(scwin.udc_commCd_callBackFunc, pCode, pName, 'T', '3', '품목／품명코드,품목／품명,구분', '120,170,70', '4,5,6,7,8,9,10', param, '440', '500', null, null, null, null, '품목／품명,품목／품명코드,품목／품명');
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
// 재고내역 팝업들
//-------------------------------------------------------------------------
/* ASIS 사용되지 않는것 같음
scwin.f_openCommPopUpGrid = function (popupKind, row, pClose) {

    // 선언부
    var rtnList; // 공통POP-UP -> 요청화면
    var pCode = "";
    var pName = "";

    switch (popupKind) {

        case 1:
            
            // 출고화주 팝업
            pCode = ds_hist.getCellData(row, "stockClntNo"); // 고속사원번호


            rtnList = cfCommonPopUp('retrieveClntInfo',
                pCode,
                pName,
                pClose,
                '9',
                "거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,",
                '100,100,0,120,100,0,100,100,100,0',
                "3,10",
                'LOGISCLNT1,,CTRT,0',
                '800',
                '600',
                null,
                null,
                null,
                "F",
                null);

            // 출고화주, 출고화주명
            $c.gus.cfSetGridReturnValue(rtnList, ds_hist, row, "stockClntNo", "stockClntNm");
     
            break;
    }
    return false;
}
*/

//-------------------------------------------------------------------------
// 반출신고
//-------------------------------------------------------------------------
scwin.f_outbound = function () {
  if (ds_hist.getRowCount() < 1) {
    $c.win.alert($p, "반출신고할 대상이 없습니다.");
    return;
  }
  var row = ds_retrieve.getRowPosition();
  var row2 = ds_hist.getRowPosition();
  if (ds_hist.getModifiedIndex().length != 0) {
    $c.win.alert($p, "입력중인 내용은 반출신고 할 수 없습니다.저장후 이용해 주십시오.");
    return;
  }
  var win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_17b.xml";
  var odrNo = ds_hist.getCellData(row2, "odrNo");
  let data = "";
  if (odrNo == 'undefined') ;
  {
    odrNo = " ";
  }
  opts = {
    id: "op_302_01_17b",
    popupName: "세관 반출 신고 등록",
    modal: false,
    type: "browserPopup",
    width: 1400,
    height: 800,
    title: "세관 반출 신고 등록"
  };
  if (ds_retrieve.getCellData(row, "pierYardWrkPlCd") == null || ds_retrieve.getCellData(row, "pierYardWrkPlCd").trim() == '') {
    data = {
      odrNo: odrNo,
      mrn: ds_hist.getCellData(row2, "mrn"),
      msn: ds_hist.getCellData(row2, "msn"),
      hsn: ds_hist.getCellData(row2, "hsn"),
      blNo: ds_retrieve.getCellData(row, "rltNo"),
      wrkPlCd: ds_hist.getCellData(row2, "ioWrkPlCd"),
      wrkPlNm: ds_hist.getCellData(row2, "ioWrkPlNm"),
      cntrBulk: "B",
      //컨테이너/벌크여부
      openFlag: "1"
    };
  } else {
    data = {
      odrNo: odrNo,
      mrn: ds_hist.getCellData(row2, "mrn"),
      msn: ds_hist.getCellData(row2, "msn"),
      hsn: ds_hist.getCellData(row2, "hsn"),
      blNo: ds_retrieve.getCellData(row, "rltNo"),
      wrkPlCd: ds_retrieve.getCellData(row, "pierYardWrkPlCd"),
      wrkPlNm: "",
      cntrBulk: "B",
      //컨테이너/벌크여부
      openFlag: "1"
    };
  }
  $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// 하선지반입 신고
//-------------------------------------------------------------------------
scwin.f_inbound2 = function () {
  if (ds_hist.getRowCount < 1) {
    $c.win.alert($p, "조회먼저 하세요!");
    return;
  }
  var row = ds_retrieve.getRowPosition();
  var row2 = ds_hist.getRowPosition();
  var win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_16b.xml";
  let opts = {
    id: "op_302_01_16b",
    popupName: "세관 반입 신고 등록",
    modal: false,
    type: "browserPopup",
    width: 1400,
    height: 800,
    title: "세관 반입 신고 등록"
  };
  let data = {
    odrNo: ds_hist.getCellData(row2, "odrNo"),
    mrn: ds_hist.getCellData(row2, "mrn"),
    msn: ds_hist.getCellData(row2, "msn"),
    hsn: ds_hist.getCellData(row2, "hsn"),
    blNo: ds_retrieve.getCellData(row2, "rltNo"),
    wrkPlCd: ds_retrieve.getCellData(row, "pierYardWrkPlCd"),
    wrkPlNm: "",
    cntrBulk: "B",
    //컨테이너/벌크여부
    openFlag: "1"
  };
  $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// function name : f_StorageOrder
// function desc : 보관오더조회
//-------------------------------------------------------------------------
scwin.f_StorageOrder = async function (row) {
  var row = ds_hist.getRowPosition();
  var args = new Array();
  args[0] = "O"; //입출고구분
  args[1] = ds_hist.getCellData(row, "ioWrkPlCd"); //작업장코드 - 장치장(출발지)
  args[2] = ds_hist.getCellData(row, "ioWrkPlNm"); //작업장명 - 장치장(출발지)
  args[3] = ds_hist.getCellData(row, "stockClntNo"); //거래처코드 - 화주코드(청구화주코드)
  args[4] = ds_hist.getCellData(row, "stockClntNm"); //거래처명 - 화주코드(청구화주코드)
  args[5] = ds_hist.getCellData(row, "impExpClsCd"); //수출입구분코드
  args[6] = ds_hist.getCellData(row, "commCd"); //품명코드
  args[7] = ds_hist.getCellData(row, "comm"); //품명명
  args[8] = ds_hist.getCellData(row, "rltNo");
  ; //BL번호
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
  console.log("args=" + args);
  var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  if (rtnValues != null && rtnValues[0] != "N/A") {
    ds_hist.setCellData(row, "strOdrNo", rtnValues[0]); //보관오더
    ds_hist.setCellData(row, "strCommSeq", rtnValues[1]); //보관오더품명순번
    ds_hist.setCellData(row, "strWrkPathSeq", rtnValues[2]); //보관오더작업경로순번
    ds_hist.setCellData(row, "strWrkStpSeq", rtnValues[3]); //보관오더작업단계순번
  } else {
    ds_hist.setCellData(row, "strOdrNo", ""); //보관오더
    ds_hist.setCellData(row, "strCommSeq", ""); //보관오더품명순번
    ds_hist.setCellData(row, "strWrkPathSeq", ""); //보관오더작업경로순번
    ds_hist.setCellData(row, "strWrkStpSeq", ""); //보관오더작업단계순번
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retreive_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows1.setValue(ds_retrieve.getRowCount());
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
  scwin.onLoading = false;
  if (ds_retrieve.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    // 행추가 행삭제 버튼 disable
    $c.gus.cfDisableKeyData($p);
    return;
  } else {
    gr_retrieve.setFocusedCell(0, "stockClntNo", false); //edit : true
    // 행추가 행삭제 버튼 enable
    $c.gus.cfEnableKeyData($p);

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
      ds_retrieve.setCellData(i, "outQryStDt", ed_outQryStDt.getValue());
      ds_retrieve.setCellData(i, "outQryEndDt", ed_outQryEndDt.getValue());
    }
    ds_retrieve.modifyAllStatus("R");

    // 조회 데이터셋 구성
    $c.gus.cfCopyDataSet($p, ds_retrieve, ds_histCond, "copyHeader=yes,rowFrom=0,rowCnt=1");
    $c.sbm.execute($p, sbm_hist);
  }
};

//-------------------------------------------------------------------------
// 출고이력 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_hist_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows2.setValue(ds_hist.getRowCount());
  if (ds_hist.getRowCount() > 0) {
    gr_hist.setFocusedCell(0, "ioDt", false); //edit : true
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_regist_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_change_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  await $c.win.alert($p, "송장번호를 갱신하여야 체화료가 변경됩니다.");
  scwin.f_Retrieve();
  ed_inStockDt.setValue("");
};
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 출고작업장(조회조건) UDC START
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
// 출고작업장(조회조건) UDC END
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
scwin.udc_cvsslMgntNoQry_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_cvsslMgntNoQry, null);
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
// 품명(조회조건) UDC START
//-------------------------------------------------------------------------
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_commCd.getValue(), ed_comm.getValue(), 'F', 'T');
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_comm, 5, true);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_comm, ed_commCd, 5, false);
};
scwin.udc_commCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_commCd, ed_comm);
};
//-------------------------------------------------------------------------
// 품명(조회조건) UDC START
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화주(조회조건) UDC START
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
// 화주(조회조건) UDC START
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 수입/수출구분 콤보박스 onviewchange
//-------------------------------------------------------------------------
scwin.lc_impExpDomesticClsCd_onviewchange = function (info) {
  switch (lc_impExpDomesticClsCd.getValue()) {
    case "I":
      // 수입인경우
      // 본선관리번호, BL/NO, 출고화주중 하나는 필수 입력
      tbx_rltNoQry.setValue("B/L");
      ed_rltNoQry.setMandatory(false);
      btn_rltNoQry.show("");
      break;
    case "O":
      // 수출인경우
      // 화주 필수 입력
      tbx_rltNoQry.setValue("BOOKING");
      ed_rltNoQry.setMandatory(false);
      btn_rltNoQry.hide();
      break;
    case "D":
      //내수인 경우  
      tbx_rltNoQry.setValue("출하지시번호");
      ed_rltNoQry.setMandatory(false);
      btn_rltNoQry.hide();
      break;
  }
};
scwin.ds_retrieve_onrowpositionchange = function (info) {
  if (ds_retrieve.getRowPosition() < 0) return;
  if (scwin.onLoading == false) {
    // 조회 데이터셋 구성
    $c.gus.cfCopyDataSet($p, ds_retrieve, ds_histCond, "copyHeader=yes,rowFrom=" + ds_retrieve.getRowPosition() + ",rowCnt=1");
    $c.sbm.execute($p, sbm_hist);
  }
};

//-------------------------------------------------------------------------
// 출고 이력 그리드 팝업 이벤트
//-------------------------------------------------------------------------
scwin.gr_hist_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == 28) {
    scwin.f_StorageOrder(0);
  }
};

//-------------------------------------------------------------------------
// 출고 이력 그리드 셀 편집모드 시작전 이벤트
//-------------------------------------------------------------------------
scwin.gr_hist_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.ds_hist_olddata = value;
};

//-------------------------------------------------------------------------
// 출고 이력 그리드 셀 편집모드 종료 이벤트
//-------------------------------------------------------------------------
scwin.gr_hist_onafteredit = function (rowIndex, columnIndex, value) {
  var row = ds_hist.getRowPosition();
  if (ds_hist.getRowPosition() < 0) return;
  switch (columnIndex) {
    case 13:
      // 수량입력(rsltsQty)
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockQty") < ds_hist.getCellData(row, "rsltsQty")) {
        $c.win.alert($p, "출고할 수량이 부족합니다.");
        ds_hist.setCellData(row, "rsltsQty", scwin.ds_hist_olddata);
        return;
      }
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockWt") > 0) {
        ds_hist.setCellData(row, "rsltsWt", ds_hist.getCellData(row, "rsltsQty") * ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockWt") / ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockQty"));
      }
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockCbm") > 0) {
        ds_hist.setCellData(row, "rsltsCbm", ds_hist.getCellData(row, "rsltsQty") * ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockCbm") / ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockQty"));
      }
      break;
    case 14:
      // 중량입력(rsltsWt)
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockWt") < ds_hist.getCellData(row, "rsltsWt")) {
        $c.win.alert($p, "출고할 중량이 부족합니다.");
        ds_hist.setCellData(row, "rsltsWt", scwin.ds_hist_olddata);
        return;
      }
      break;
    case 15:
      // CBM 입력(rsltsCbm)
      if (ds_retrieve.getCellData(ds_retrieve.getRowPosition(), "stockCbm") < ds_hist.getCellData(row, "rsltsCbm")) {
        $c.win.alert($p, "출고할 CBM이 부족합니다.");
        ds_hist.setCellData(row, "rsltsCbm", scwin.ds_hist_olddata);
        return;
      }
      break;
  }
};
scwin.ed_cvsslMgntNoQry_onchange = function (info) {};
scwin.ed_cvsslMgntNoQry_onviewchange = function (info) {
  alert("111");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수입/수출구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'$blank',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label','ev:onviewchange':'scwin.lc_impExpDomesticClsCd_onviewchange',id:'lc_impExpDomesticClsCd',mandatory:'true',ref:'data:ds_condition.impExpDomesticClsCd',style:'width: 150px;',submenuSize:'auto',title:'수입/수출구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCdQry',id:'udc_wrkPlCdQry',btnId:'btn_wrkPlCdQry',nameId:'ed_wrkPlNm',maxlengthCode:'5',UpperFlagCode:'1',mandatoryCode:'true',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_wrkPlCdQry_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCdQry_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCdQry_onviewchangeNameEvent',validTitle:'출고작업장',refDataCollection:'ds_condition',code:'wrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'outQryEndDt',refStDt:'outQryStDt',style:'',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ed_outQryStDt',edToId:'ed_outQryEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',class:' w100','ev:onkeyup':'scwin.onkeyup',id:'ed_cvsslMgntNoQry',maxlength:'8',placeholder:'',ref:'data:ds_condition.cvsslMgntNo',style:'','ev:onblur':'scwin.ed_cvsslMgntNoQry_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_cvsslMgntNoQry_onclick',id:'btn_cvsslMgntNoQry',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_rltNoQry',label:'B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 150px;'},E:[{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',class:' ','ev:onblur':'scwin.ed_rltNoQry_onblur','ev:onkeyup':'scwin.onkeyup',id:'ed_rltNoQry',maxlength:'20',placeholder:'',ref:'data:ds_condition.rltNo',style:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.btn_rltNoQry_onclick',id:'btn_rltNoQry',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_commCd',nameId:'ed_comm',btnId:'btn_commCd',id:'udc_commCd',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent',refDataCollection:'ds_condition',code:'commCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_stockClntNoQry',nameId:'ed_stockClntNmQry',btnId:'btn_stockClntNoQry',id:'udc_stockClntNoQry',allowCharCode:'0-9',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_stockClntNoQry_onclickEvent','ev:onblurCodeEvent':'scwin.udc_stockClntNoQry_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_stockClntNoQry_onviewchangeNameEvent',code:'stockClntNo',refDataCollection:'ds_condition'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'재고정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_retrieve',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'화주코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'입항일자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'입항시간',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'모선코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'모선명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'반입일자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'화주명',width:'160',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'비고',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'본선관리번호',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltNoHd',inputType:'text',value:'B/L',width:'110',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'DO여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'하선지확인',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'규격',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column23',value:'재고내역',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'적재위치',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'재고관리번호',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column46',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',value:'중량(KG)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column44',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvHh',inputType:'text',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inStdDt1',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltNo',inputType:'text',width:'110'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'doYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dsmbrkFrgtCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'comm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stockQty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stockWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#.##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'stockCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#.##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipwgtPos',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stockMgntNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'출고이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"출고이력.xlsx","sheetName":"출고이력","type":"4+8+16"}',gridID:'gr_hist',gridUpYn:'Y',templateYn:'N',id:'udc_topGrdBtn',btnUser:'N',gridDownYn:'Y',btnPlusYn:'Y',gridUpFn:'scwin.f_Upload'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_hist',id:'gr_hist',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_hist_ontextimageclick','ev:onafteredit':'scwin.gr_hist_onafteredit',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_hist_onfilereadend',gridName:'출고이력','ev:onbeforeedit':'scwin.gr_hist_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'본선관리번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'B/L번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'작업장',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column100',value:'화주코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'화주명',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'수출입코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column103',value:'품목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'품목명',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'출고일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'출고시간',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'통관일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column109',value:'공차중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column106',value:'총중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'중량(KG)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column53',value:'CBM',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column112',value:'자가구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'적재위치',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column115',value:'BLOCK',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column118',value:'BAY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column130',value:'ROW',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column133',value:'TIER',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column124',value:'입고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column127',value:'재고관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'화주관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'자가운송업체',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'송장번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'차량번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'보관오더',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'기사명',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'연락처',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column21',value:'특기사항',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column136',value:'특기사항',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltNo',inputType:'text',width:'100',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioWrkPlCd',inputType:'text',width:'100',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockClntNo',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'100',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'100',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioHh',inputType:'text',width:'100',displayFormat:'##:##',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'passDt',displayMode:'label',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'emptyWeight',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullWeight',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfClsCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shipwgtPos',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lblock',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lbay',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lrow',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ltier',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'inStdDt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockMgntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntMgntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selfTransCoNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'invoiceNo',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'strOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drvNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drvTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'dcsnClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column111',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column86',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'rsltsQty\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column85',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'rsltsWt\')',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column84',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'rsltsCbm\')',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column117',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column132',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column135',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column129',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column138',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',gridID:'gr_hist'}}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_comCode2',nameId:'',popupID:'',style:'display:none'}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ctrtPrint',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'인수도확인증 출력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_inbound',style:'',type:'button','ev:onclick':'scwin.f_inbound2',userAuth:'R',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'하선지반입신고'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_outbound',style:'',type:'button','ev:onclick':'scwin.f_outbound',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반출신고'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'C:U:D','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_cvsslMgntNoQry',nameId:'',popupID:'',style:'display:none'}},{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_up_hist','ev:onfilereadend':'scwin.gr_excel_onfilereadend',id:'gr_excel',style:'display:none',visibleRowNum:'1',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'70',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'70',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',width:'70',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'70',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'70',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'70',value:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column16',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column18',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rltNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioWrkPlCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ioDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ioHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'passDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'emptyWeight',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullWeight',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsQty',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsWt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsCbm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selfClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'shipwgtPos',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lblock',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lbay',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lrow',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ltier',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inStdDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stockMgntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntMgntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selfTransCoNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'invoiceNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'strOdrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'drvNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'drvTelNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}}]}]}]}]}]}]})