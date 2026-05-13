/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_53p.xml 22616 b6cf47fb74dd49a767efc0fc025f2bc1d08af8d4b5efe1201aa4fa119c43273c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'closeYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'mgntAcctCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'ver',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'bizDomCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'postYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipDetail',saveRemovedData:'true','ev:ondataload':'scwin.ds_slipDetail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damt',name:'차변',dataType:'number'}},{T:1,N:'w2:column',A:{id:'camt',name:'대변',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fiCloseAmt',name:'확정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fiCtrlAmt',name:'조정전표',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'관리조정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mgntDistAmt',name:'배부금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fiIngAmt',name:'가결금액',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveProcessMonthInterimSettlementMasterCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_slipDetail',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveProcessMonthInterimSettlementDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_slipDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tempCount',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 마감전 사업영역별계획대비실적 상세 (co_404_01_53p)
// 작성자 : 송정희
// 최초작성일자 : 2026-11-14
//-------------------------------------------------------------------------
scwin.p_closeYm = "";
scwin.p_acctDeptCd = "";
scwin.p_acctDeptNm = "";
scwin.p_acctCd = "";
scwin.p_mgntAcctCd = "";
scwin.p_mgntAcctNm = "";
scwin.p_bizDomCd = "";
scwin.p_bizDomNm = "";
scwin.p_ver = "";
scwin.p_postYn = "";
scwin.i = 0;
scwin.onpageload = function () {
  console.log("PGM : 마감전 사업영역별계획대비실적 상세 (co_404_01_53p)");
  scwin.params = $c.data.getParameter($p);
  //scwin.p_acctDeptNm = scwin.params["acctDeptNm"];    
  //scwin.p_mgntAcctCd = scwin.params["mgntAcctCd"];
  //scwin.p_mgntAcctNm = scwin.params["mgntAcctNm"];
  //scwin.p_bizDomNm = scwin.params["bizDomNm"];

  scwin.p_closeYm = scwin.params["closeYm"];
  scwin.p_acctDeptCd = scwin.params["acctDeptCd"];
  scwin.p_acctCd = scwin.params["acctCd"];
  scwin.p_ver = scwin.params["ver"];
  scwin.p_bizDomCd = scwin.params["bizDomCd"];
  scwin.p_postYn = scwin.params["postYn"];
  dma_search.set("closeYm", scwin.p_closeYm); // 기준년월
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd); // 귀속부서
  dma_search.set("mgntAcctCd", scwin.p_acctCd); // 계정코드 
  dma_search.set("ver", scwin.p_ver); // 버젼
  dma_search.set("bizDomCd", scwin.p_bizDomCd); // 사업영역
  dma_search.set("postYn", scwin.p_postYn); // 결재상태(회계처리유무)

  ed_closeYm.setValue(scwin.p_closeYm);
  ed_acctDeptCd.setValue(scwin.p_acctDeptCd);
  ed_acctDeptNm.setValue(scwin.p_acctDeptNm);
  ed_mgntAcctCd.setValue(scwin.p_acctCd);
  ed_amt.setValue(0);
  ed_fiIngAmt.setValue(0);
  ed_fiCloseAmt.setValue(0);
  ed_fiCtrlAmt.setValue(0);
  ed_mgntCtrlAmt.setValue(0);
  ed_mgntDistAmt.setValue(0);

  //$c.gus.cfDisableObjects([ed_closeYm, ed_acctDeptCd, ed_acctDeptNm, ed_mgntAcctCd, ed_mgntAcctNm, ed_amt, ed_fiCloseAmt, ed_fiIngAmt, ed_fiCtrlAmt, ed_mgntCtrlAmt, ed_mgntDistAmt]);

  //tr_amt1.setStyle("display", "block");
  //		scwin.f_openPopUp('1','T');
  //		scwin.f_openPopUp('2','T');

  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  $c.sbm.execute($p, sbm_master);
  $c.sbm.execute($p, sbm_slipDetail);
  var ebcId = "";
  var queryId = "";
  var param1 = "002";
  var param2 = ed_closeYm.getValue().trim();
  ebcId = "ProcessMonthInterimSettlementEBC";
  queryId = "retrieveProcessMonthInterimSettlementCount";
  sbm_tempCount.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=" + ebcId + "&queryId=" + queryId + "&param1=" + param1 + "&param2=" + param2;
  let tempCount = await $c.sbm.execute($p, sbm_tempCount);
  if (tempCount.responseJSON.GAUCE[0].col1 > 0) {
    view1.show("");
    ed_amt.show("");
    tr_amt1.show("");
  } else {
    view1.hide();
    ed_amt.hide();
    tr_amt1.hide();
  }
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.ds_slipDetail_ondataload = function () {
  var rowCnt = ds_slipDetail.getTotalRow();
  totalRows_slipDetail.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      //	     		$c.gus.cfAlertMsg(MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    ds_slipDetail.sort("slipNo", 0);
    tr_amt1.setStyle("display", "table-row;");

    //column style 지정
    for (var i = 0; i < rowCnt; i++) {
      if (gr_slipDetail.getCellData(i, "slipNo") > 0) {
        gr_slipDetail.setCellStyle(i, "slipNo", "text-decoration", "underline");
        gr_slipDetail.setCellStyle(i, "slipNo", "cursor", "pointer");
        gr_slipDetail.setCellColor(i, "slipNo", "blue");
      }
    }
  }
};
scwin.ds_master_ondataload = function () {
  var rowCnt = ds_master.getTotalRow();
  console.log("ds_master rowCnt " + rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      //	     		$c.gus.cfAlertMsg(MSG_CM_WRN_002);
    }
    return;
  }
  var v_amt = 0;
  var v_fiCloseAmt = 0;
  var v_fiCtrlAmt = 0;
  var v_mgntCtrlAmt = 0;
  var v_mgntDistAmt = 0;
  var v_fiIngAmt = 0;
  if (rowCnt > 0) {
    ed_acctDeptNm.setValue(ds_master.getCellData(0, "acctDeptCdNm"));
    ed_mgntAcctNm.setValue(ds_master.getCellData(0, "mgntAcctCdNm"));
    v_amt = ds_master.getCellData(0, "amt");
    v_fiCloseAmt = ds_master.getCellData(0, "fiCloseAmt");
    v_fiCtrlAmt = ds_master.getCellData(0, "fiCtrlAmt");
    v_mgntCtrlAmt = ds_master.getCellData(0, "mgntCtrlAmt");
    v_mgntDistAmt = ds_master.getCellData(0, "mgntDistAmt");
    v_fiIngAmt = ds_master.getCellData(0, "fiIngAmt");
  }
  ed_amt.setValue(v_amt);
  ed_fiCloseAmt.setValue(v_fiCloseAmt);
  ed_fiCtrlAmt.setValue(v_fiCtrlAmt);
  ed_mgntCtrlAmt.setValue(v_mgntCtrlAmt);
  ed_mgntDistAmt.setValue(v_mgntDistAmt);
  ed_fiIngAmt.setValue(v_fiIngAmt);
};
scwin.gr_slipDetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "clntNo") {
    if (!(ds_slipDetail.getCellData(rowIndex, columnId) == null && ds_slipDetail.getCellData(rowIndex, columnId) == "")) {
      $c.gus.cfViewClntInfo($p, ds_slipDetail.getCellData(rowIndex, "clntNo"));
    }
  } else if (columnId == "slipNo") {
    if (ds_slipDetail.getCellData(rowIndex, "slipNo") != "") {
      $c.gus.cfShowSlipInfo($p, ds_slipDetail.getCellData(rowIndex, "slipNo"));
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_slipDetail.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_slipDetail.getTotalCol(); i++) {
    if (gr_slipDetail.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_closeYm.getValue(), "####/##");
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "전표",
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
    text: "년월 [" + str + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "전표.xlsx",
    sheetName: "전표",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_slipDetail, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctDeptCd',style:'width: 80px;text-align: right;',readOnly:'true'}},{T:1,N:'xf:input',A:{id:'ed_acctDeptNm',initValue:'텍스트',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:'text-align: center',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_mgntAcctCd',style:'width: 80px;',readOnly:'true'}},{T:1,N:'xf:input',A:{id:'ed_mgntAcctNm',style:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'view1',label:'금액 ',style:'display: none;'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{id:'ed_amt',readOnly:'true',style:'width: 150px;display: none;',dataType:'number',displayFormat:'#,##0',class:'tar'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_amt1',style:'display: none;'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정금액 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_fiCloseAmt',initValue:'텍스트',style:'width: 150px;',ref:'data:ds_master.fiCloseAmt',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가결금액',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_fiIngAmt',initValue:'텍스트',style:'width: 150px;',ref:'data:ds_master.fiIngAmt',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조정전표',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_fiCtrlAmt',initValue:'텍스트',style:'width: 150px;',ref:'data:ds_master.fiCtrlAmt',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리조정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_mgntCtrlAmt',initValue:'텍스트',style:'width: 150px;',ref:'data:ds_master.mgntCtrlAmt',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'display:none;'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배부금액',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',style:'display:none;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_mgntDistAmt',initValue:'텍스트',style:'width: 150px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표내역 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_slipDetail',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_slipDetail',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_slipDetail',visibleRowNum:'12',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncelldblclick':'scwin.gr_slipDetail_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'회계처리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column13',value:'차변',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column15',value:'대변',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column46',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column37',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'282',inputType:'text',style:'',id:'column40',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',sortLabel:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'slipDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'damt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'camt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'282',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column31',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'damt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column30',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'camt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'282',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows_slipDetail',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})