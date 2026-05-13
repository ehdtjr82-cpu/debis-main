/*amd /ui/ds/fs/bilg/fs_203_01_02b.xml 66527 145291c0a5b5e9d1026b0145efcd19977ca67b823919a36d26ceb89df9cb9c8d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_intertransaggr',saveRemovedData:'true','ev:ondataload':'scwin.ds_intertransaggr_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchDeptCd',name:'매출입부서코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchDeptNm',name:'',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'acctDeptCd1',name:'',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'opntDeptCd',name:'상대부서코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'acctDeptCd2',name:'',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number',length:'20'}},{T:1,N:'w2:column',A:{id:'internalCnt',name:'',dataType:'number',length:'20'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'',dataType:'number',length:'38'}},{T:1,N:'w2:column',A:{id:'selpchAggrDeptYn',name:'',dataType:'number',length:'38'}},{T:1,N:'w2:column',A:{id:'opntAggrDeptYn',name:'',dataType:'number',length:'38'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_intertransdetail',saveRemovedData:'true','ev:ondataload':'scwin.ds_intertransdetail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'internalTxnSeq',name:'내부거래순번',dataType:'number',length:'5'}},{T:1,N:'w2:column',A:{id:'selpchDeptCd',name:'매출입부서코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchDeptNm',name:'',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'opntDeptCd',name:'상대부서코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'internalTxnStsClsCd',name:'내부거래상태구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'internalTxnStsClsNm',name:'',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number',length:'18'}},{T:1,N:'w2:column',A:{id:'internalUpr',name:'내부단가',dataType:'number',length:'15'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',length:'13'}},{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'내부거래청구번호',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',length:'7'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'repBilgClntNo',name:'대표청구거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'repBilgClntNm',name:'',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',length:'19'}},{T:1,N:'w2:column',A:{id:'modNm',name:'수정명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',length:'19'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인율명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'',dataType:'number',length:'38'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text',length:'5'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_intertransaggr_con',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'selpchDeptCd',name:'매출입부서코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'internalTxnStsClsCd',name:'내부거래상태구분코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'pchsRfslYn',name:'매입거부여부',dataType:'number',length:'20'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'opntDeptCd',name:'상대부서코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'aggOpntDeptCd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'aggRsltsStdDt',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'aggWrkStpCd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'deptTransYn',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'rsltsDtYn',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'upDownClsCd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'detailAllYn',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'dcScCd',name:'할인할증코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_intertransdetail_con',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'selpchDeptCd',name:'매출입부서코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'internalTxnStsClsCd',name:'내부거래상태구분코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'pchsRfslYn',name:'매입거부여부',dataType:'number',length:'20'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'opntDeptCd',name:'상대부서코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'aggOpntDeptCd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'aggRsltsStdDt',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'aggWrkStpCd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'deptTransYn',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'rsltsDtYn',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'upDownClsCd',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'detailAllYn',name:'',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'dcScCd',name:'할인할증코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'255'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_intertransaggr_retrieve',action:'/ds.fs.bilg.logisinternaltxnmgnt.RetrieveInternalTransactionAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_intertransaggr","key":"OUT_DS1"},{"id":"dma_intertransaggr_con","key":"IN_DS1"}]',target:'data:json,{"id":"ds_intertransaggr","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_intertransaggr_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_intertransdetail_retrieve',action:'/ds.fs.bilg.logisinternaltxnmgnt.RetrieveInternalTransactionDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_intertransdetail_con","key":"IN_DS1"},{"id":"ds_intertransdetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_intertransdetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_intertransdetail_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.params = "";
scwin.selPchLodeptCd = scwin.params.selPchLodeptCd == null ? "" : scwin.params.selPchLodeptCd;
scwin.qryConDt = scwin.params.qryConDt == null ? "" : scwin.params.qryConDt;
scwin.qryConLastDt = scwin.params.qryConLastDt == null ? "" : scwin.params.qryConLastDt;
scwin.selPchCls = scwin.params.selPchCls == null ? "" : scwin.params.selPchCls;
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

//-------------------------------------------------------------------------
// 화면 로드시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // select 박스 코드 가져오기
  const codeOptions = [{
    grpCd: "CO003",
    compID: "acb_internalTxnStsClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  scwin.selPchLodeptCd = scwin.params.selPchLodeptCd == null ? "" : scwin.params.selPchLodeptCd;
  scwin.qryConDt = scwin.params.qryConDt == null ? "" : scwin.params.qryConDt;
  scwin.qryConLastDt = scwin.params.qryConLastDt == null ? "" : scwin.params.qryConLastDt;
  scwin.selPchCls = scwin.params.selPchCls == null ? "" : scwin.params.selPchCls;

  // UDC 기본값세팅
  // scwin.onUdcCompleted();

  rd_selpchClsCd.setValue("1");
  rd_pchsRfslYn.setValue("9");
  rd_transCargoClsCd.setValue("");
};

//-------------------------------------------------------------------------
// 초기값 세팅
//-------------------------------------------------------------------------
scwin.f_executeFromLinked = function () {
  if (scwin.selPchCls == "SELL") {
    rd_selpchClsCd.setValue("1");
  } else if (scwin.selPchCls == "PCHS") {
    rd_selpchClsCd.setValue("2");
  }
  acb_qryConKnd.setValue("내부매출");
  udc_qryCon.setInitDate(scwin.qryConDt + "01", scwin.qryConLastDt);
  ed_selpchDeptCd.setValue(scwin.selPchLodeptCd);
  // ed_selpchDeptCd.setValue(scwin.selPchLodeptCd);

  scwin.btn_retrieve_onClick();
};

//-------------------------------------------------------------------------
// UDC 초기값 세팅
//-------------------------------------------------------------------------
setTimeout(scwin.onUdcCompleted = function () {
  udc_qryCon.setInitDate(scwin.strPreDate, scwin.strCurDate);
  ed_selpchDeptCd.focus();
  if (scwin.selPchLodeptCd != "") {
    scwin.f_executeFromLinked();
  }
}, 100);

//-------------------------------------------------------------------------
// 조회버튼
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  // ds_intertransaggr.setJSON([]);
  // ds_intertransdetail.setJSON([]);
  // dma_intertransdetail_con.setJSON([]);   

  dma_intertransaggr_con.setJSON([]);

  //validation check
  if (!(await $c.gus.cfValidate($p, [ed_selpchDeptCd, ica_qryConDtFm, ica_qryConDtTo]))) {
    return;
  }

  //조회시작일자가 더 클경우 체크
  if (!(await $c.gus.cfIsAfterDate($p, ica_qryConDtFm.getValue(), ica_qryConDtTo.getValue()))) {
    $c.win.alert($p, MSG_CM_ERR_039);
    return;
  }
  dma_intertransaggr_con.set("selpchClsCd", rd_selpchClsCd.getValue());
  dma_intertransaggr_con.set("selpchDeptCd", ed_selpchDeptCd.getValue());
  if (acb_qryConKnd.getValue() == "실적") {
    gr_intertransaggr.setHeaderValue("rsltsStdDt", "실적일자");
    dma_intertransaggr_con.set("qryConKnd", "실적");
  } else if (acb_qryConKnd.getValue() == "내부매출") {
    dma_intertransaggr_con.set("qryConKnd", "내부매출");
    gr_intertransaggr.setHeaderValue('rsltsStdDt', '내부매출;(매입)일자');
  }
  if (rd_selpchClsCd.getValue() == "1") {
    gr_intertransaggr.setHeaderValue('selpchDeptNm', '매출부서');
  } else if (rd_selpchClsCd.getValue() == "2") {
    gr_intertransaggr.setHeaderValue("selpchDeptNm", "매입부서");
  }

  // dma_intertransaggr_con.set("qryConKnd",  acb_qryConKnd.getValue());
  dma_intertransaggr_con.set("qryConDtFm", ica_qryConDtFm.getValue());
  dma_intertransaggr_con.set("qryConDtTo", ica_qryConDtTo.getValue());
  dma_intertransaggr_con.set("bizDomCd", acb_bizDomCd.getValue());
  dma_intertransaggr_con.set("internalTxnStsClsCd", acb_internalTxnStsClsCd.getValue());
  dma_intertransaggr_con.set("pchsRfslYn", rd_pchsRfslYn.getValue());
  dma_intertransaggr_con.set("wrkStpCd", ed_wrkStpCd.getValue());
  dma_intertransaggr_con.set("opntDeptCd", ed_opntDeptCd.getValue());
  dma_intertransaggr_con.set("transCargoClsCd", rd_transCargoClsCd.getValue());
  dma_intertransaggr_con.set("selpchItemCd", ed_sellItemCd.getValue());
  dma_intertransaggr_con.set("dcScCd", acb_dcScCd.getValue());
  dma_intertransaggr_con.set("aggOpntDeptCd", '');
  dma_intertransaggr_con.set("aggRsltsStdDt", '');
  dma_intertransaggr_con.set("aggWrkStpCd", '');
  if (cbx_deptTransYn.getValue() != "1") {
    dma_intertransaggr_con.set("deptTransYn", "Y");
  } else {
    dma_intertransaggr_con.set("deptTransYn", "");
  }
  if (cbx_rsltsDtYn.getValue() == "1") {
    dma_intertransaggr_con.set("rsltsDtYn", "Y");
  } else {
    dma_intertransaggr_con.set("rsltsDtYn", "");
  }
  if (cbx_upClsCd.getValue() == "1") {
    dma_intertransaggr_con.set("upDownClsCd", "UP");
  } else if (cbx_downClsCd.getValue() == "1") {
    dma_intertransaggr_con.set("upDownClsCd", "DOWN");
  } else {
    dma_intertransaggr_con.set("upDownClsCd", "NULL");
  }
  ds_intertransaggr.removeAll();
  spa_totalRows2.setValue("0");
  $c.sbm.execute($p, sbm_intertransaggr_retrieve);
};

//-------------------------------------------------------------------------
// Intertransaggr 서브미션 성공시
//-------------------------------------------------------------------------
scwin.sbm_intertransaggr_retrieve_submitDone = function (e) {
  gr_intertransaggr.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// gr_intertransaggr 그리드 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_intertransaggr_onClick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (cbx_detailAllYn.getValue() == "0") {
      if (ds_intertransaggr.getCellData(rowIndex, "lobranNm") != "") {
        scwin.f_InterTransDetailRetrieve(rowIndex);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 내부매출 상세데이터 가져오기
//-------------------------------------------------------------------------
scwin.f_InterTransDetailRetrieve = function (row) {
  // $c.gus.cfCopyDataSet(dma_intertransaggr_con, dma_intertransdetail_con, copyHeader="yes");

  dma_intertransdetail_con.setJSON(dma_intertransaggr_con.getJSON());
  if (cbx_detailAllYn.getValue() != 0) {
    dma_intertransdetail_con.set("detailAllYn", "ALL");
    dma_intertransdetail_con.set("aggOpntDeptCd", dma_intertransaggr_con.get("opntDeptCd"));
    dma_intertransdetail_con.set("aggWrkStpCd", dma_intertransaggr_con.get("wrkStpCd"));
    dma_intertransdetail_con.set("selpchDeptCd", dma_intertransaggr_con.get("selpchDeptCd"));
    dma_intertransdetail_con.set("selpchItemCd", dma_intertransaggr_con.get("selpchItemCd"));
  } else {
    dma_intertransdetail_con.set("detailAllYn", "CASE");
    dma_intertransdetail_con.set("aggRsltsStdDt", ds_intertransaggr.getCellData(row, "rsltsStdDt"));
    dma_intertransdetail_con.set("aggOpntDeptCd", ds_intertransaggr.getCellData(row, "opntDeptCd"));
    dma_intertransdetail_con.set("aggWrkStpCd", ds_intertransaggr.getCellData(row, "wrkStpCd"));
    dma_intertransdetail_con.set("selpchDeptCd", ds_intertransaggr.getCellData(row, "selpchDeptCd"));
    dma_intertransdetail_con.set("selpchItemCd", dma_intertransaggr_con.get("selpchItemCd"));
  }
  $c.sbm.execute($p, sbm_intertransdetail_retrieve);
};
scwin.sbm_intertransdetail_retrieve_submitDone = function (e) {
  let totalrow = ds_intertransdetail.getRowCount();
  spa_totalRows2.setValue(totalrow);
};

//-------------------------------------------------------------------------
// gr_intertransdetail Grid 더블 클릭시
//-------------------------------------------------------------------------
scwin.gr_intertransdetail_onDblClick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (columnId == "cntrNo" && ds_intertransdetail.getCellData(rowIndex, "cntrNo") != "") {
      scwin.f_cntrNoDetail(ds_intertransdetail.getCellData(rowIndex, "cntrNo"));
    }
    if (columnId == "odrNo" && ds_intertransdetail.getCellData(rowIndex, "odrNo") != "") {
      scwin.f_orderDetail(ds_intertransdetail.getCellData(rowIndex, "odrNo"));
    }
    if (columnId == "selpchItemNm" && ds_intertransdetail.getCellData(rowIndex, "selpchItemNm") != "") {
      scwin.f_sellItemDetail(ds_intertransdetail.getCellData(rowIndex, "odrNo"));
    }
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 cntrNo 세부정보 확인 : 해당 cntrNo 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_cntrNoDetail = function (cntrNo) {
  let condition = "?";
  let pgmId = "as_102_01_02b.xml";
  let strCertiNoDetailUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/" + pgmId;
  let title = "컨테이너 화물추적";

  // 선택된 certiNo 정보 : bilgLodeptCd , certiNo
  let v_cntrNo = cntrNo;
  condition += "cntrNo=" + v_cntrNo;
  let opts = {
    id: "taxPop",
    type: "",
    menuName: "컨테이너 화물추적"
  };
  condition = {
    cntrNo: v_cntrNo
  };
  $c.win.openMenu($p, "컨테이너 화물추적", strCertiNoDetailUrl, "as_102_01_02b.xml", condition, opts);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = function (arg) {
  let condition = {};
  let strOrderDetailUrl = "";
  let strOrderDetailTitle = "";
  if (arg.substring(1, 2) == "B") {
    // 오더 종류가 벌크오더인 경우 - 화물구분(B : 벌크)
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
    strOrderDetailTitle = "벌크오더";
  } else if (arg.substring(1, 2) == "C") {
    // 오더 종류가 컨테이너 오더인 경우 - 화물구분 (C : 컨테이너)
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
    strOrderDetailTitle = "컨테이너오더";
  } else if (arg.substring(1, 2) == "Z") {
    strOrderDetailUrl = "/ui/ds/fs/bilg/fs_202_03_02b.xml";
    strOrderDetailTitle = "일반청구오더등록";
  }
  let v_odrNo = arg;
  let v_flag = "DETAIL";
  if (arg.substring(1, 2) == "Z") {
    condition = {
      odrNo: v_odrNo,
      flag: v_flag
    };
  } else {
    condition = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
  }
  let opts = {
    id: "taxPop",
    type: "",
    menuName: "일반청구오더등록"
  };
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "fs_202_03_02b.xml", condition, opts);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_sellItemDetail = function (arg) {
  let condition = {};
  let strOrderDetailUrl = "";
  let strOrderDetailTitle = "";
  strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml";
  // strOrderDetailUrl = "pub/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml"; 테스트용, 잘 넘어감
  strOrderDetailTitle = "통합매출/입관리";
  let v_odrNo = arg;
  let opts = {
    id: "taxPop",
    type: "",
    menuName: "통합매출/입관리"
  };
  condition = {
    odrNo: v_odrNo,
    type: "retrieve"
  };
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "sd_402_01_26b.xml", condition, opts);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_selpchDeptCd, ed_selpchDeptNm, ica_qryConDtFm, ica_qryConDtTo]);
  rd_selpchClsCd.setValue("1");
  rd_pchsRfslYn.setValue("9");
};

//-------------------------------------------------------------------------
// 대문자 변경
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 체크박스 처리
//------------------------------------------------------------------------- 
scwin.cbx_upClsCd_onClick = function (info) {
  cbx_downClsCd.setValue(0);
};
scwin.cbx_downClsCd_onClick = function (info) {
  cbx_upClsCd.setValue(0);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (부서)
//-------------------------------------------------------------------------
scwin.udc_selpchDept_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_selpchDeptCd.getValue(), ed_selpchDeptNm.getValue(), 'F', 'F');
};
scwin.udc_selpchDept_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_selpchDeptCd, ed_selpchDeptNm, 1);
};
scwin.udc_selpchDept_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_selpchDeptNm, ed_selpchDeptCd, 1, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(부서)
//-------------------------------------------------------------------------
scwin.udc_selpchDept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_selpchDeptCd, ed_selpchDeptNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (상대부서)
//-------------------------------------------------------------------------
scwin.udc_opntDeptCd_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_opntDeptCd.getValue(), ed_opntDeptNm.getValue(), 'F', 'F');
};
scwin.udc_opntDeptCd_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_opntDeptCd, ed_opntDeptNm, 2);
};
scwin.udc_opntDeptCd_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_opntDeptNm, ed_opntDeptCd, 2, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(상대부서)
//-------------------------------------------------------------------------
scwin.udc_opntDeptCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_opntDeptCd, ed_opntDeptNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업단계)
//-------------------------------------------------------------------------
scwin.udc_wrkStp_onClick = async function (e) {
  scwin.f_openCommonPopUp(3, ed_wrkStpCd.getValue(), ed_wrkStpNm.getValue(), 'F', 'F');
};
scwin.udc_wrkStp_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkStpCd, ed_wrkStpNm, 3);
};
scwin.udc_wrkStp_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkStpNm, ed_wrkStpCd, 3, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(작업단계)
//-------------------------------------------------------------------------
scwin.udc_wrkStp_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkStpCd, ed_wrkStpNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (매출항목)
//-------------------------------------------------------------------------
scwin.udc_sellItem_onClick = async function (e) {
  scwin.f_openCommonPopUp(10, ed_sellItemCd.getValue(), ed_sellItemNm.getValue(), 'F', 'F');
};
scwin.udc_sellItem_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sellItemCd, ed_sellItemNm, 10);
};
scwin.udc_sellItem_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_sellItemNm, ed_sellItemCd, 10, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(매출항목)
//-------------------------------------------------------------------------
scwin.udc_sellItem_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sellItemCd, ed_sellItemNm);
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
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //내부매출부서코드팝업			
      udc_selpchDept.cfCommonPopUp(scwin.udc_selpchDept_callBackFunc // 	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , pAllSearch // 전체검색허용여부
      , "부서,부서코드,부서" // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  										  									
      );
      break;
    case 2:
      //내부매입부서코드팝업			
      udc_opntDeptCd.cfCommonPopUp(scwin.udc_opntDeptCd_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , pAllSearch // 전체검색허용여부
      , "상대부서,상대부서코드,상대부서" // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  										  									
      );
      break;
    case 3:
      //작업단계 코드팝업			
      udc_wrkStp.cfCommonPopUp(scwin.udc_wrkStp_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , pAllSearch // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  										  									
      );
      break;
    case 10:
      //매출항목팝업			
      udc_sellItem.cfCommonPopUp(scwin.udc_sellItem_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 상단 그리드 데이터로드 완료시
//-------------------------------------------------------------------------
scwin.ds_intertransaggr_ondataload = function () {
  let options = {
    sortIndex: "rsltsStdDt lobranNm wrkStpNm",
    sortOrder: "0 0 0"
  };
  ds_intertransaggr.multisort(options);
  spa_totalRows.setValue(ds_intertransaggr.getRowCount());
  let totalrow = ds_intertransaggr.getRowCount();
  let param = 0;
  if (totalrow == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    // ed_selpchDeptCd.focus();
    ds_intertransaggr.removeAll();
    ds_intertransdetail.removeAll();
    // ds_intertransaggr.setJSON([]);
    // ds_intertransdetail.setJSON([]);
  } else {
    spa_totalRows.setValue(totalrow);
    if (ds_intertransaggr.getCellData(0, "lobranNm") != "" && cbx_detailAllYn.getValue() == "0") {
      scwin.f_InterTransDetailRetrieve(param);
    } else if (ds_intertransaggr.getCellData(0, "lobranNm") != "" && cbx_detailAllYn.getValue() != "0") {
      scwin.f_InterTransDetailRetrieve();
    }
  }
  gr_intertransaggr.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 상단 그리드 엑셀다운로드
//-------------------------------------------------------------------------
scwin.runExcel1 = async function () {
  let options = {
    fileName: "내부거래상세.xlsx",
    sheetName: "내부거래상세"
  };
  let grdObj = gr_intertransaggr;
  let infoArr = {};
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 상단 그리드 엑셀다운로드
//-------------------------------------------------------------------------
scwin.runExcel2 = async function () {
  let options = {
    fileName: "내부거래상세.xlsx",
    sheetName: "내부거래상세"
    // ,useStyle : false
    // ,useClass : false
  };
  let grdObj = gr_intertransdetail;
  let infoArr = {};
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 레포트 발행
//-------------------------------------------------------------------------
scwin.f_Print_onClick = async function () {
  if (ds_intertransdetail.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  if (!(await $c.win.confirm($p, "인쇄하시겠습니까?"))) {
    return;
  }
  var ozMode = "";
  if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
    // 인쇄옵션, 미리보기 둘다 체크된 경우
    ozMode = "preview";
  } else if (cbx_printCheck.getValue() == "1") {
    // 인쇄옵션만 체크된 경우
    ozMode = "print";
  } else if (cbx_previewCheck.getValue() == "1") {
    // 미리보기만 체크된 경우
    ozMode = "preview";
  }
  let odiOpntDeptNm = "";
  let odiWrkStpNm = "";
  if (ed_opntDeptNm.getValue() == "") {
    odiOpntDeptNm = "전체";
  } else {
    odiOpntDeptNm = ed_opntDeptNm.getValue();
  }
  if (ed_wrkStpNm.getValue() == "") {
    odiWrkStpNm = "전체";
  } else {
    odiWrkStpNm = ed_wrkStpNm.getValue();
  }
  var data = {
    odiName: "fs_203_01_01p",
    reportName: "/ds/fs/fs_203_01_01p.ozr",
    odiParam: {
      selpchClsCd: rd_selpchClsCd.getValue(),
      selpchDeptCd: ed_selpchDeptCd.getValue(),
      qryConDtFm: ica_qryConDtFm.getValue(),
      qryConDtTo: ica_qryConDtTo.getValue(),
      bizDomCd: acb_bizDomCd.getValue(),
      opntDeptCd: ed_opntDeptCd.getValue(),
      internalTxnStsClsCd: acb_internalTxnStsClsCd.getValue(),
      pchsRfslYn: rd_pchsRfslYn.getValue(),
      wrkStpCd: ed_wrkStpCd.getValue(),
      transCargoClsCd: rd_transCargoClsCd.getValue(),
      qryConCd: acb_qryConKnd.getValue(),
      selpchClsNm: rd_selpchClsCd.getValue(),
      selpchDeptNm: ed_selpchDeptNm.getValue(),
      bizDomNm: acb_bizDomCd.getValue(),
      internalTxnStsClsNM: acb_internalTxnStsClsCd.getValue(),
      pchsRfslYnNm: rd_pchsRfslYn.getValue(),
      transCargoClsCd: rd_transCargoClsCd.getValue(),
      qryConKndNm: acb_qryConKnd.getValue(),
      opntDeptNm: odiOpntDeptNm,
      wrkStpNm: odiWrkStpNm
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: ozMode
    },
    formParam: {
      pgmId: "fs_203_01_01"
    }
  };
  scwin.openPopup(data);
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
scwin.ds_intertransdetail_ondataload = function () {
  gr_intertransdetail.setFocusedCell(0, 0);
  let options = {
    sortIndex: "odrNo internalTxnSeq internalTxnStsClsNm rsltsStdDt wrkStpNm commCd commNm unitCd internalTxnBilgNo postDt selpchItemNm cntrNo fullEmptyClsCd",
    sortOrder: "0 0 0 0 0 0 0 0 0 0 0 0 0"
  };
  ds_intertransdetail.multisort(options);
  spa_totalRows2.setValue(ds_intertransdetail.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_selpchClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_selpchDeptCd',nameId:'ed_selpchDeptNm',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'4',objTypeCode:'Data',validExpCode:'내부매출부서:yes',selectID:'retrieveOpDeptCdInfo',id:'udc_selpchDept','ev:onclickEvent':'scwin.udc_selpchDept_onClick',objTypeName:'key','ev:onblurCodeEvent':'scwin.udc_selpchDept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_selpchDept_onChangeName',validTitle:'내부매출부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width: 130px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label','ev:oneditkeyup':'scwin.onkeyup'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내부매출(매입)일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'내부매출'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryCon',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_qryConDtFm',edToId:'ica_qryConDtTo',objTypeFrom:'data',mandatoryFrom:'true',mandatoryTo:'true',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bizDomCd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',displayMode:'value delim label',objType:'data',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'120'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'110'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'130'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상대부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_opntDeptCd',nameId:'ed_opntDeptNm',editTypeCode:'select',objTypeCode:'data',maxlengthCode:'4',UpperFlagCode:'1',objTypeName:'key',id:'udc_opntDeptCd',selectID:'retrieveOpDeptCdInfo','ev:onclickEvent':'scwin.udc_opntDeptCd_onClick','ev:onblurCodeEvent':'scwin.udc_opntDeptCd_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_opntDeptCd_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부거래상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 100px;',id:'acb_internalTxnStsClsCd',class:'',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.onkeyup',delimiter:'-',displayMode:'value delim label',chooseOption:'true',chooseOptionLabel:'전체'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_downClsCd',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onviewchange':'scwin.cbx_downClsCd_onClick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이전'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_upClsCd',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onviewchange':'scwin.cbx_upClsCd_onClick',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이후'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkStpCd',nameId:'ed_wrkStpNm',objTypeCode:'Data',editTypeCode:'select',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',UpperFlagCode:'1',objTypeName:'key',id:'udc_wrkStp','ev:onclickEvent':'scwin.udc_wrkStp_onClick','ev:onblurCodeEvent':'scwin.udc_wrkStp_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkStp_onChangeName',selectID:'retrieveWrkStp'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_transCargoClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cntr'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거부여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_pchsRfslYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인할증여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dcScCd',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',displayMode:'value delim label','ev:oneditkeyup':'scwin.onkeyup',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'col-gap-14',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_deptTransYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부서내 거래 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_rsltsDtYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자별'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_detailAllYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더별 상세 전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출항목',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_sellItemCd',nameId:'ed_sellItemNm',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',UpperFlagCode:'1',validExpCode:'매출항목:yes',objTypeName:'key',id:'udc_sellItem','ev:onclickEvent':'scwin.udc_sellItem_onClick','ev:onblurCodeEvent':'scwin.udc_sellItem_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_sellItem_onChangeName',selectID:'retrieveSelpchItemInfo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger1',style:';visibility:hidden;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_intertransaggr',id:'udc_topGrdBtn',gridDownFn:'scwin.runExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_intertransaggr',id:'gr_intertransaggr',style:'',resize:'true',columnMove:'true',dataDragSelect:'true',readOnly:'true',dataDragSelectAutoScroll:'true','ev:oncellclick':'scwin.gr_intertransaggr_onClick',visibleRowNum:'6',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'실적일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'매출부서코드',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'매출부서',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'상대부서코드',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'상대부서',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업단계',width:'130',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매입금액',width:'130',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'내부매출<br/>(매입)금액',width:'130',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'이익율(%)',width:'100',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchDeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchDeptNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opntDeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'130',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'profitRate',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0.00'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'sum("pchsAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum("sellAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.2'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger11',style:';visibility:hidden;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownFn:'scwin.runExcel2',gridID:'gr_intertransdetail'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_intertransdetail',id:'gr_intertransdetail',style:'',resize:'true',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true','ev:oncelldblclick':'scwin.gr_intertransdetail_onDblClick',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'내부거래<br/>순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'내부거래<br/>상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'실적일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매출입<br/>항목명',width:'90',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업단계',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'CNTR-<br/>NO',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'품명명',width:'90',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'LINE',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'적용기준',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'물량',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'매입금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'내부단가',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'청구금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'이익율(%)',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'청구번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column49',value:'청구거래처번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column46',value:'청구거래처명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'내부<br/>매입일자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'할인할증명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'품명코드',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'E/F',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'SIZE',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'TYPE',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column79',value:'생성자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column76',value:'수정자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'생성일시',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'수정일시',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'link',width:'150',class:'linktype',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTxnSeq',inputType:'text',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTxnStsClsNm',inputType:'text',width:'100',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'link',width:'90',textAlign:'left',class:'linktype',style:'color: blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'link',width:'90',class:'linktype',style:'color: blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vol',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000',maxLength:'13.3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'internalUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'profitRate',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'###.2{floor}',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'internalTxnBilgNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'repBilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'repBilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dcScNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTypCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'modNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',textAlign:'right',expression:'sum("pchsAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'sum("sellAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_trigger2',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Print_onClick',objType:'bUpdate',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})