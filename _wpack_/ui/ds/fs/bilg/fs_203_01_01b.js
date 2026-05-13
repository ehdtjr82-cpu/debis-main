/*amd /ui/ds/fs/bilg/fs_203_01_01b.xml 43604 953ccbf0794acd3dc8a16be573e812ab9bf4d5b5e0da7c5ba28aba5d117c451c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_intertransaggr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'internalCnt',name:'건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selpchAggrDeptYn',name:'집계부서여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAggrDeptYn',name:'집계부서여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchDeptCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchDeptNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntDeptCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_intertransdetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTxnSeq',name:'내부거래;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchDeptNm',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입;항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR-;NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'internalUpr',name:'내부단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'청구번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'내부;매출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScNm',name:'할인할증명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_intertransaggr_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'internalTxnStsClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsRfslYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntDeptCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsDtYn',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upDownClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchDeptCd',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_intertransdetail_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'detailAllYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggOpntDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggRsltsStdDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggWrkStpCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'internalTxnStsClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsRfslYn',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'opntDeptCd',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsDtYn',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upDownClsCd',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bilgcommessage',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'msg',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.logisinternaltxnmgnt.RetrieveInternalTransactionAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_intertransaggr_con","key":"IN_DS1"},{"id":"ds_intertransaggr","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_intertransaggr","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.fs.bilg.logisinternaltxnmgnt.RetrieveInternalTransactionDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_intertransdetail_con","key":"IN_DS1"},{"id":"ds_intertransdetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_intertransdetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.fs.bilg.logisinternaltxnmgnt.CreateInternalSellingBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_intertransdetail_con","key":"IN_DS1"},{"id":"ds_bilgcommessage","key":"OUT_DS1"}',target:'data:json,{"id":"ds_bilgcommessage","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_cancel',action:'/ds.fs.bilg.logisinternaltxnmgnt.CancelInternalSellingBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_intertransdetail_con","key":"IN_DS1"},{"id":"ds_bilgcommessage","key":"OUT_DS1"}',target:'data:json,{"id":"ds_bilgcommessage","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_cancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strCurDate2 = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = scwin.strCurDate2.substring(0, 6) + "01";
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자

scwin.selpchClsCd = "1"; //매출입구분코드
scwin.MSG_FS_WRN_013 = "청구 데이타가 존재하지 않습니다.";
scwin.MSG_FS_WRN_014 = "청구취소 데이타가 존재하지 않습니다.";
scwin.MSG_FS_WRN_015 = "청구는 내부거래상태가 등록일때만 가능합니다.";
scwin.MSG_FS_WRN_016 = "청구취소는 내부거래상태가 청구일때만 가능합니다.";
scwin.onpageload = function () {
  //공통코드데이터 호출   
  const codeOptions = [{
    grpCd: "CO003",
    compID: "lc_internalTxnStsClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate); //udc
  $c.gus.cfDisableBtnOnly($p, [btn_sell_cancel]);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(async function () {
    ed_selpchDeptCd.focus();
  }, {
    "delay": 50
  });
};

//초기화
scwin.btn_FieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_selpchDeptCd, ed_selpchDeptNm, ed_qryConDtFm, ed_qryConDtTo, rd_pchsRfslYn]);
};

//내부매출부서 pop
scwin.udc_comCode_dept_onclickEvent = function (e) {
  udc_comCode_dept.cfCommonPopUp(scwin.udc_comCode_dept_callBackFunc, ed_selpchDeptCd.getValue(), ed_selpchDeptNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, "F", "매출부서,매출부서코드,매출부서", null);
};
scwin.udc_comCode_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_selpchDeptCd, ed_selpchDeptNm);
};
scwin.udc_comCode_dept_onblurCodeEvent = function (e) {
  if (ed_selpchDeptCd.getValue() === "") {
    ed_selpchDeptNm.setValue("");
  } else {
    udc_comCode_dept.cfCommonPopUp(scwin.udc_comCode_dept_callBackFunc, ed_selpchDeptCd.getValue(), ed_selpchDeptNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, "매출부서,매출부서코드,매출부서", null);
  }
};
scwin.udc_comCode_dept_onviewchangeNameEvent = function (info) {
  if (ed_selpchDeptNm.getValue() === "") {
    ed_selpchDeptCd.setValue("");
  }
};

//내부매입부서 pop
scwin.udc_comCode_opdept_onclickEvent = function (e) {
  udc_comCode_opdept.cfCommonPopUp(scwin.udc_comCode_opdept_callBackFunc, ed_opntDeptCd.getValue(), ed_opntDeptNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, "F", "매출부서,매출부서코드,매출부서", null);
};
scwin.udc_comCode_opdept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_opntDeptCd, ed_opntDeptNm);
};
scwin.udc_comCode_opdept_onblurCodeEvent = function (e) {
  if (ed_opntDeptCd.getValue() === "") {
    ed_opntDeptNm.setValue("");
  } else {
    udc_comCode_opdept.cfCommonPopUp(scwin.udc_comCode_opdept_callBackFunc, ed_opntDeptCd.getValue(), ed_opntDeptNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "F", "매출부서,매출부서코드,매출부서", null);
  }
};
scwin.udc_comCode_opdept_onviewchangeNameEvent = function (info) {
  if (ed_opntDeptNm.getValue() === "") {
    ed_opntDeptCd.setValue("");
  }
};

//작업단계 pop
scwin.udc_comCode_wrk_onclickEvent = function (e) {
  udc_comCode_wrk.cfCommonPopUp(scwin.udc_comCode_wrk_callBackFunc, ed_wrkStpCd.getValue(), ed_wrkStpNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, "F", null, null);
};
scwin.udc_comCode_wrk_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkStpCd, ed_wrkStpNm);
};
scwin.udc_comCode_wrk_onblurCodeEvent = function (e) {
  if (ed_wrkStpCd.getValue() === "") {
    ed_wrkStpNm.setValue("");
  } else {
    udc_comCode_wrk.cfCommonPopUp(scwin.udc_comCode_wrk_callBackFunc, ed_wrkStpCd.getValue(), ed_wrkStpNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "F", null, null);
  }
};
scwin.udc_comCode_wrk_onviewchangeNameEvent = function (info) {
  if (ed_wrkStpNm.getValue() === "") {
    ed_wrkStpCd.setValue("");
  }
};

//매출항목pop
scwin.udc_comCode_sell_onclickEvent = function (e) {
  udc_comCode_sell.cfCommonPopUp(scwin.udc_comCode_sell_callBackFunc, ed_sellItemCd.getValue(), ed_sellItemNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, "F", null, null);
};
scwin.udc_comCode_sell_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sellItemCd, ed_sellItemNm);
};
scwin.udc_comCode_sell_onblurCodeEvent = function (e) {
  if (ed_sellItemCd.getValue() === "") {
    ed_sellItemNm.setValue("");
  } else {
    udc_comCode_sell.cfCommonPopUp(scwin.udc_comCode_sell_callBackFunc, ed_sellItemCd.getValue(), ed_sellItemNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "F", null, null);
  }
};
scwin.udc_comCode_sell_onviewchangeNameEvent = function (info) {
  if (ed_sellItemNm.getValue() === "") {
    ed_sellItemCd.setValue("");
  }
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  //validation check     
  if ($c.util.isEmpty($p, ed_selpchDeptCd.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, Array("내부매출부서"));
    ed_selpchDeptCd.focus();
    return;
  }

  //조회시작일자가 더 클경우 체크
  if (!$c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  //scwin.f_internalTxnStsClsNm(internalTxnStsClsNm);

  //버튼제어
  if (lc_internalTxnStsClsCd.getValue() == "0") {
    $c.gus.cfDisableBtnOnly($p, [btn_sell_cancel]);
    $c.gus.cfEnableBtnOnly($p, [btn_sell]);
  } else if (lc_internalTxnStsClsCd.getValue() == "1") {
    $c.gus.cfDisableBtnOnly($p, [btn_sell]);
    $c.gus.cfEnableBtnOnly($p, [btn_sell_cancel]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_sell_cancel, btn_sell]);
  }
  dma_intertransaggr_con.set("selpchClsCd", scwin.selpchClsCd);
  dma_intertransaggr_con.set("selpchDeptCd", ed_selpchDeptCd.getValue());
  var qryConKnd = "";
  if (lc_qryConKnd.getValue() == "실적") {
    qryConKnd = "실적";
  } else if (lc_qryConKnd.getValue() == "내부매출") {
    qryConKnd = "내부매출";
  }
  dma_intertransaggr_con.set("qryConKnd", qryConKnd);
  dma_intertransaggr_con.set("qryConDtFm", ed_qryConDtFm.getValue());
  dma_intertransaggr_con.set("qryConDtTo", ed_qryConDtTo.getValue());
  dma_intertransaggr_con.set("bizDomCd", lc_bizDomCd.getValue());
  dma_intertransaggr_con.set("internalTxnStsClsCd", lc_internalTxnStsClsCd.getValue());
  dma_intertransaggr_con.set("pchsRfslYn", rd_pchsRfslYn.getValue());
  dma_intertransaggr_con.set("wrkStpCd", ed_wrkStpCd.getValue());
  dma_intertransaggr_con.set("opntDeptCd", ed_opntDeptCd.getValue());
  dma_intertransaggr_con.set("transCargoClsCd", rd_transCargoClsCd.getValue());
  dma_intertransaggr_con.set("selpchItemCd", ed_sellItemCd.getValue());
  dma_intertransaggr_con.set("rsltsDtYn", "Y");
  dma_intertransaggr_con.set("upDownClsCd", "NULL");

  //상세화면 데이타 Clear
  ds_intertransdetail.removeAll();
  total2.setValue(0);
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_intertransaggr.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    total.setValue(0);
  } else {
    gr_intertransaggr.setFocusedCell(0, 0);
    total.setValue(nCnt);
    //scwin.f_InterTransDetailRetrieve("1");	//상세내역조회
    scwin.f_InterTransDetailRetrieve(); //상세내역조회
  }
};
scwin.f_InterTransDetailRetrieve = function () {
  scwin.f_CreateDataSet();
  $c.sbm.execute($p, sbm_retrieve_detail);
};

//grid2 조회 callback
scwin.sbm_retrieve_detail_submitdone = function () {
  let nCnt = ds_intertransdetail.getRowCount();
  total2.setValue(nCnt);
  if (nCnt > 0) {
    gr_intertransdetail.setFocusedCell(0, 0);
  }
};
scwin.f_CreateDataSet = function () {
  //let features = "copyHeader=yes,rowFrom=0";
  //$c.gus.cfCopyDataSet(dma_intertransaggr_con, dma_intertransdetail_con, features);

  dma_intertransdetail_con.set("qryConKnd", dma_intertransaggr_con.get("qryConKnd"));
  dma_intertransdetail_con.set("qryConDtFm", dma_intertransaggr_con.get("qryConDtFm"));
  dma_intertransdetail_con.set("qryConDtTo", dma_intertransaggr_con.get("qryConDtTo"));
  dma_intertransdetail_con.set("bizDomCd", dma_intertransaggr_con.get("bizDomCd"));
  dma_intertransdetail_con.set("internalTxnStsClsCd", dma_intertransaggr_con.get("internalTxnStsClsCd"));
  dma_intertransdetail_con.set("pchsRfslYn", dma_intertransaggr_con.get("pchsRfslYn"));
  dma_intertransdetail_con.set("wrkStpCd", dma_intertransaggr_con.get("wrkStpCd"));
  dma_intertransdetail_con.set("opntDeptCd", dma_intertransaggr_con.get("opntDeptCd"));
  dma_intertransdetail_con.set("transCargoClsCd", dma_intertransaggr_con.get("transCargoClsCd"));
  dma_intertransdetail_con.set("rsltsDtYn", dma_intertransaggr_con.get("rsltsDtYn"));
  dma_intertransdetail_con.set("upDownClsCd", dma_intertransaggr_con.get("upDownClsCd"));
  dma_intertransdetail_con.set("selpchClsCd", dma_intertransaggr_con.get("selpchClsCd"));
  dma_intertransdetail_con.set("detailAllYn", "CASE");
  dma_intertransdetail_con.set("selpchDeptCd", ds_intertransaggr.getCellData(ds_intertransaggr.getRowPosition(), "selpchDeptCd"));
  dma_intertransdetail_con.set("aggOpntDeptCd", ds_intertransaggr.getCellData(ds_intertransaggr.getRowPosition(), "opntDeptCd"));
  dma_intertransdetail_con.set("aggRsltsStdDt", ds_intertransaggr.getCellData(ds_intertransaggr.getRowPosition(), "rsltsStdDt"));
  dma_intertransdetail_con.set("aggWrkStpCd", ds_intertransaggr.getCellData(ds_intertransaggr.getRowPosition(), "wrkStpCd"));
  dma_intertransdetail_con.set("selpchItemCd", ds_intertransaggr.getCellData(ds_intertransaggr.getRowPosition(), "selpchItemCd"));
  dma_intertransdetail_con.set("txnDt", ed_txnDt.getValue());
};

//grid1 cellclick.
scwin.gr_intertransaggr_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    scwin.f_InterTransDetailRetrieve(rowIndex);
  }
};
scwin.f_excelDw = async function (gridObj) {
  let options = {
    fileName: "Sheet1",
    sheetName: "내부거래 청구",
    columnMove: true,
    //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
    type: "1",
    hiddenVisible: false
  };
  if (gridObj.getTotalRow() > 0) {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      await $c.data.downloadGridViewExcel($p, gridObj, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_005);
  }
};
scwin.f_downExcelSheet1 = function () {
  scwin.f_excelDw(gr_intertransaggr);
};
scwin.f_downExcelSheet2 = function () {
  scwin.f_excelDw(gr_intertransdetail);
};

//신규 btn
scwin.btn_create_onclick = function (e) {
  ds_intertransaggr.removeAll();
  ds_intertransdetail.removeAll();
  total.setValue(0);
  total2.setValue(0);
};

//청구btn
scwin.btn_sell_onclick = function (e) {
  //등록일때만 가능
  if (lc_internalTxnStsClsCd.getValue() != "0") {
    $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_015);
    return;
  }
  if ($c.gus.cfIsNull($p, ed_txnDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["내부거래 청구일자"]);
    return;
  }
  dma_intertransdetail_con.set("txnDt", ed_txnDt.getValue());
  if (ds_intertransaggr.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_013);
    return;
  } else {
    for (var i = 0; i < ds_intertransaggr.getRowCount(); i++) {
      if (ds_intertransaggr.getCellData(i, "selpchAggrDeptYn") == 1) {
        $c.win.alert($p, "매출부서" + "[" + ds_intertransaggr.getCellData(i, "selpchDeptCd") + ":" + "" + ds_intertransaggr.getCellData(i, "selpchDeptNm") + "]" + "" + "은  집계부서이므로 청구 할 수 없습니다." + "" + "\n\n" + "                       매출부서를 확인하세요.");
        return;
      } else {
        if (ds_intertransaggr.getCellData(i, "opntAggrDeptYn") == 1) {
          $c.win.alert($p, "매입부서" + "[" + ds_intertransaggr.getCellData(i, "opntDeptCd") + ":" + "" + ds_intertransaggr.getCellData(i, "lobranNm") + "]" + "" + "은 집계부서이므로 청구 할 수 없습니다." + "" + "\n\n" + "                       매입부서를 확인하세요.");
          return;
        }
      }
    }
    scwin.f_CreateDataSet(1); //내부매출 조회조건 dataset 만들기
    $c.sbm.execute($p, sbm_save);
  }
};

//청구취소 btn
scwin.btn_sell_cancel_onclick = function (e) {
  //청구일때만 가능
  if (lc_internalTxnStsClsCd.getValue() != "1") {
    $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_016);
    return;
  }
  if (ds_intertransaggr.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_014);
    return;
  } else {
    scwin.f_CreateDataSet(1);
    $c.sbm.execute($p, sbm_save_cancel);
  }
};

//저장 callback
scwin.sbm_save_submitdone = function () {
  if (ds_bilgcommessage.getRowCount() > 0) {
    let MSG_FS_WRN_017 = ds_bilgcommessage.getCellData(0, "msg");
    $c.gus.cfAlertMsg($p, MSG_FS_WRN_017);
  }
};

//청구취소 callback
scwin.sbm_save_cancel_submitdone = function () {
  if (ds_bilgcommessage.getRowCount() > 0) {
    let MSG_FS_WRN_017 = ds_bilgcommessage.getCellData(0, "msg");
    $c.gus.cfAlertMsg($p, MSG_FS_WRN_017);
  }
};

//grid2 DBclick...
scwin.gr_intertransdetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
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

//GRID에서 선택된 cntrNo 세부정보 확인 : 해당 cntrNo 페이지로 이동
scwin.f_cntrNoDetail = function (cntrNo) {
  let paramObj = {
    cntrNo: cntrNo
  };
  $c.win.openMenu($p, "컨테이너 화물추적", "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml", "as_102_01_02b", paramObj);

  //이렇게 변수로 처리하면 왜 안될까낭?
  //$c.win.openMenu("컨테이너 화물추적", "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml","as_102_01_02b.jsp",cntrNo);
};

// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
scwin.f_orderDetail = function (odrNo) {
  let Pobj = "";
  let Url = "";
  let Title = "";
  let programId = "";
  let v_odrNo = odrNo;
  let v_flag = "DETAIL";
  if (odrNo.substring(1, 2) == "B") {
    // 오더 종류가 벌크오더인 경우 - 화물구분(B : 벌크)
    Url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
    programId = "sd_402_01_02t";
    Title = "벌크오더";
  } else if (odrNo.substring(1, 2) == "C") {
    // 오더 종류가 컨테이너 오더인 경우 - 화물구분 (C : 컨테이너)
    Url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
    programId = "sd_402_01_11t";
    Title = "컨테이너오더";
  } else if (odrNo.substring(1, 2) == "Z") {
    Url = "/ui/ds/fs/bilg/fs_202_03_02b.xml";
    programId = "fs_202_03_02b";
    Title = "일반청구오더등록";
  }
  if (odrNo.substring(1, 2) == "Z") {
    Pobj = {
      odrNo: v_odrNo,
      flag: v_flag
    };
  } else {
    Pobj = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
  }
  $c.win.openMenu($p, Title, Url, programId, Pobj);
};

// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
scwin.f_sellItemDetail = function (odrNo) {
  let Pobj = {
    odrNo: odrNo,
    type: "retrieve"
  };
  $c.win.openMenu($p, "통합매출/입관리", "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml", "sd_402_01_26b", Pobj);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'내부매출부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_selpchDeptCd',nameId:'ed_selpchDeptNm',id:'udc_comCode_dept',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'4',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_comCode_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_dept_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z',validTitle:'내부매출부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'lc_qryConKnd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label',selectedIndex:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내부매출일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'내부매출'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_bizDomCd',style:'width:148px; height:21px; ',submenuSize:'auto',search:'start',allOption:'',chooseOption:'',ref:'',selectedIndex:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'120'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'110'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'130'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'제3자물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'150'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부매입부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_opntDeptCd',nameId:'ed_opntDeptNm',id:'udc_comCode_opdept',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_comCode_opdept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_opdept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_opdept_onviewchangeNameEvent',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내부거래상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_internalTxnStsClsCd',search:'start',style:'width:208px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_pchsRfslYn',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_transCargoClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cntr'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_wrkStpCd',nameId:'ed_wrkStpNm',id:'udc_comCode_wrk',maxlengthCode:'4',selectID:'retrieveWrkStp','ev:onclickEvent':'scwin.udc_comCode_wrk_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_wrk_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_wrk_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출항목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_sellItemCd',nameId:'ed_sellItemNm',id:'udc_comCode_sell',UpperFlagCode:'1',maxlengthCode:'6',selectID:'retrieveSelpchItemInfo','ev:onclickEvent':'scwin.udc_comCode_sell_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_sell_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_sell_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.btn_FieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_intertransaggr',gridDownYn:'Y',gridDownFn:'scwin.f_downExcelSheet1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_intertransaggr',id:'gr_intertransaggr',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'true',focusMode:'row',focusMove:'true','ev:oncellclick':'scwin.gr_intertransaggr_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매입부서',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'실적일자 (내부매출일자)',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'작업단계',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매입금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'청구금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'건수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'집계부서여부',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'집계부서여부',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'200',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',textAlign:'right',width:'150',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalCnt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchAggrDeptYn',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opntAggrDeptYn',inputType:'text',width:'150',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'합계',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'expression',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'pchsAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'SUM(\'sellAmt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',width:'100',dataType:'number',expression:'SUM(\'internalCnt\')',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',textAlign:'right',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',textAlign:'right',width:'150',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'내부거래매출(청구)일자 ',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_txnDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_create',type:'button',class:'btn','ev:onclick':'scwin.btn_create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_sell',type:'button',class:'btn ','ev:onclick':'scwin.btn_sell_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'청구'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_sell_cancel',type:'button',class:'btn white','ev:onclick':'scwin.btn_sell_cancel_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'청구취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_intertransdetail',gridDownYn:'Y',gridDownFn:'scwin.f_downExcelSheet2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_intertransdetail',id:'gr_intertransdetail',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_intertransdetail_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'내부거래<br/>순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매출부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'실적일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출입<br/>항목명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업단계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'CNTR-<br/>NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'품명명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'적용기준',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',value:'물량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column88',inputType:'text',value:'내부단가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column85',inputType:'text',value:'청구금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',value:'매입금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column79',inputType:'text',value:'청구번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column76',inputType:'text',value:'내부<br/>매출일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column73',inputType:'text',value:'할인할증명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',value:'품명코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column67',inputType:'text',value:'E/F',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'link',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTxnSeq',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchDeptNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'link',textAlign:'left',width:'120',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'link',width:'100',textAlign:'left',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'180',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vol',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0.000',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalUpr',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',textAlign:'right',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTxnBilgNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcScNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})