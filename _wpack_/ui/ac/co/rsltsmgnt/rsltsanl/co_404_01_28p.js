/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_28p.xml 40298 76e343668d8dde79403c9bc340d16c3a495b82ec772ed4ff52df1f6a6d281c9d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'mgntAcctCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'closeYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'ver',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipDetail',saveRemovedData:'true','ev:ondataload':'scwin.ds_slipDetail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damt',name:'차변',dataType:'number'}},{T:1,N:'w2:column',A:{id:'camt',name:'대변',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixed',saveRemovedData:'true','ev:ondataload':'scwin.ds_fixed_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDeprAmt',name:'당월상각비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'befYyProvAmt',name:'전기말_감가상각누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'befYyBookAmt',name:'전기말_장부가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYyDeprAmt',name:'당기말_감가상각비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYyProvAmt',name:'당기말_감가상각누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYyBookAmt',name:'당기말_장부가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprRt',name:'상각율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용연수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prepay',saveRemovedData:'true','ev:ondataload':'scwin.ds_prepay_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prepayCostNo',name:'선급비용번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYyBefMmAmt',name:'당기전월누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYyAmt',name:'당기누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisMmAmt',name:'당월금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prepayTermDt',name:'기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayCostStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermStDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prepayTermEndDt',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fiCloseAmt',name:'확정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fiCtrlAmt',name:'조정전표',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mgntCtrlAmt',name:'관리조정',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mgntDistAmt',name:'배부금액',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanMasterCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_slipDetail',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanSlipDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_slipDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fixed',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanFixedAsetDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_fixed","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fixed","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_prepay',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanPrepayDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_prepay","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_prepay","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업영역별계획대비실적상세 (co_404_01_28p)
// 작성자 : 송정희
// 최초작성일자 : 2026-11-14
//-------------------------------------------------------------------------

scwin.p_closeYm = "";
scwin.p_acctDeptCd = "";
scwin.p_acctDeptNm = "";
scwin.p_mgntAcctCd = "";
scwin.p_mgntAcctNm = "";
scwin.p_coCd = "";
scwin.p_coNm = "";
scwin.p_bizDomCd = "";
scwin.p_bizDomNm = "";
scwin.p_ver = "";
scwin.sort_options = {};
scwin.sort_options.sortIndex = "mgntAcctCd mgntAcctCdNm acctDeptCd acctDeptCdNm corRegNo";
scwin.sort_options.sortOrder = "1 1 1 1 1";
scwin.data = {};
scwin.opts = {};
scwin.url = {};
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.p_closeYm = scwin.params.closeYm;
  scwin.p_acctDeptCd = scwin.params.acctDeptCd;
  scwin.p_acctDeptNm = scwin.params.acctDeptNm;
  scwin.p_mgntAcctCd = scwin.params.acctCd;
  scwin.p_coCd = scwin.params.coCd;
  scwin.p_coNm = scwin.params.coNm;
  scwin.p_bizDomCd = scwin.params.bizDomCd;
  scwin.p_bizDomNm = scwin.params.bizDomNm;
  scwin.p_ver = scwin.params.ver;
  dma_search.set("closeYm", scwin.p_closeYm);
  dma_search.set("ver", scwin.p_ver);
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd);
  dma_search.set("mgntAcctCd", scwin.p_mgntAcctCd);
  dma_search.set("coCd", scwin.p_coCd);
  ed_closeYm.setValue(scwin.p_closeYm);
  ed_acctDeptCd.setValue(scwin.p_acctDeptCd);
  ed_acctDeptNm.setValue(scwin.p_acctDeptNm);
  ed_mgntAcctCd.setValue(scwin.p_mgntAcctCd);
  ed_mgntAcctNm.setValue(scwin.p_mgntAcctNm);
  ed_amt.setValue(0);
  ed_fiCloseAmt.setValue(0);
  ed_fiCtrlAmt.setValue(0);
  ed_mgntCtrlAmt.setValue(0);
  ed_mgntDistAmt.setValue(0);
  const codeOptions = [{
    grpCd: "FI020",
    compID: "gr_prepay:prepayCostStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableObjects($p, [ed_closeYm, ed_acctDeptCd, ed_acctDeptNm, ed_mgntAcctCd, ed_mgntAcctNm, ed_amt, ed_fiCloseAmt, ed_fiCtrlAmt, ed_mgntCtrlAmt, ed_mgntDistAmt]);

  //		scwin.f_openPopUp('1','T');
  //		scwin.f_openPopUp('2','T');

  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_master);
  $c.sbm.execute($p, sbm_slipDetail);
  $c.sbm.execute($p, sbm_prepay);
  $c.sbm.execute($p, sbm_fixed);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.ds_prepay_ondataload = function () {
  scwin.rowCnt = ds_prepay.getTotalRow();
  if (scwin.rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      //	     		$c.gus.cfAlertMsg(MSG_CM_WRN_002);
    }
    return;
  }
  if (ds_prepay.getTotalRow() > 0) {
    totalRows_prepay.setValue(scwin.rowCnt);
    ds_prepay.multisort(scwin.sort_options);
    ["slipNo"].forEach(col => {
      gr_prepay.setColumnStyle(col, "text-decoration", "underline");
      gr_prepay.setColumnStyle(col, "color", "blue");
      gr_prepay.setColumnStyle(col, "cursor", "pointer");
    });
  }
};
scwin.fn_termFormat = function (data, formattedData, rowIndex, colIndex) {
  let stDt = ds_prepay.getCellData(rowIndex, 'prepayTermStDt') || "";
  let endDt = ds_prepay.getCellData(rowIndex, 'prepayTermEndDt') || "";
  let formatSt = stDt.length === 8 ? stDt.replace(/(\d{4})(\d{2})(\d{2})/, '$1/$2/$3') : stDt;
  let formatEnd = endDt.length === 8 ? endDt.replace(/(\d{4})(\d{2})(\d{2})/, '$1/$2/$3') : endDt;
  return formatSt || formatEnd ? formatSt + " ~ " + formatEnd : "";
};
scwin.ds_fixed_ondataload = function () {
  scwin.rowCnt = ds_fixed.getTotalRow();
  if (scwin.rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      //	     		$c.gus.cfAlertMsg(MSG_CM_WRN_002);
    }
    return;
  }
  if (ds_fixed.getTotalRow() > 0) {
    totalRows_fixed.setValue(scwin.rowCnt);
    ds_fixed.multisort(scwin.sort_options);
  }
};
scwin.ds_slipDetail_ondataload = function () {
  if (scwin.rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      //	     		$c.gus.cfAlertMsg(MSG_CM_WRN_002);
    }
    return;
  }
  if (ds_slipDetail.getTotalRow() > 0) {
    ds_fixed.multisort(scwin.sort_options);

    //column style 지정
    for (scwin.i = 0; scwin.i < ds_slipDetail.getRowCount(); scwin.i++) {
      if (gr_slipDetail.getCellData(scwin.i, "slipNo") > 0) {
        gr_slipDetail.setCellStyle(scwin.i, "slipNo", "text-decoration", "underline");
        gr_slipDetail.setCellStyle(scwin.i, "slipNo", "cursor", "pointer");
        gr_slipDetail.setCellColor(scwin.i, "slipNo", "blue");
      }
    }
  }
};
scwin.ds_master_ondataload = function () {
  scwin.rowCnt = ds_master.getTotalRow();
  if (scwin.rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      //	     		$c.gus.cfAlertMsg(MSG_CM_WRN_002);
    }
    return;
  }
  ed_amt.setValue(0);
  ed_fiCloseAmt.setValue(0);
  ed_fiCtrlAmt.setValue(0);
  ed_mgntCtrlAmt.setValue(0);
  ed_mgntDistAmt.setValue(0);
  if (ds_master.getTotalRow() > 0) {
    ed_acctDeptNm.setValue(ds_master.getCellData(0, "acctDeptCdNm"));
    ed_mgntAcctNm.setValue(ds_master.getCellData(0, "mgntAcctCdNm"));
    ed_amt.setValue(ds_master.getCellData(0, "amt"));
    ed_fiCloseAmt.setValue(ds_master.getCellData(0, "fiCloseAmt"));
    ed_fiCtrlAmt.setValue(ds_master.getCellData(0, "fiCtrlAmt"));
    ed_mgntCtrlAmt.setValue(ds_master.getCellData(0, "mgntCtrlAmt"));
    ed_mgntDistAmt.setValue(ds_master.getCellData(0, "mgntDistAmt"));
  }
};
scwin.gr_slipDetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "clntNo") {
    if (!(ds_slipDetail.getCellData(rowIndex, columnId) == null && ds_slipDetail.getCellData(rowIndex, columnId) == "")) {
      $c.gus.cfViewClntInfo($p, ds_slipDetail.getCellData(rowIndex, "slipNo"));
    }
  } else if (columnId == "slipNo") {
    if (ds_slipDetail.getCellData(rowIndex, "slipNo") != "") {
      $c.gus.cfShowSlipInfo($p, ds_slipDetail.getCellData(rowIndex, "slipNo"));
    }
  }
};
scwin.ds_slipDetail_ondataload = function () {
  if (ds_slipDetail.getRowCount() > 0) {
    let sortOpt = {};
    sortOpt.sortIndex = "slipNo slipDt"; // 1순위: 전표번호, 2순위: 전표일자
    sortOpt.sortOrder = "1 1"; // 1: 오름차순 (+)

    ds_slipDetail.setBroadcast(false);
    ds_slipDetail.multisort(sortOpt);
    totalRows_slipDetail.setValue(ds_slipDetail.getRowCount());
    ds_slipDetail.setBroadcast(true, true);
    ["slipNo"].forEach(col => {
      gr_slipDetail.setColumnStyle(col, "text-decoration", "underline");
      gr_slipDetail.setColumnStyle(col, "color", "blue");
      gr_slipDetail.setColumnStyle(col, "cursor", "pointer");
    });
  }
};
scwin.gr_prepay_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "clntNo") {
    if (!(ds_prepay.getCellData(rowIndex, columnId) == null && ds_prepay.getCellData(rowIndex, columnId) == "")) {
      $c.gus.cfViewClntInfo($p, ds_prepay.getCellData(rowIndex, "slipNo"));
    }
  } else if (columnId == "slipNo") {
    if (ds_prepay.getCellData(rowIndex, "slipNo") != "") {
      $c.gus.cfShowSlipInfo($p, ds_prepay.getCellData(rowIndex, "slipNo"));
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctDeptCd',initValue:'텍스트',style:'width: 80px;'}},{T:1,N:'xf:input',A:{id:'ed_acctDeptNm',initValue:'텍스트',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:'',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_mgntAcctCd',initValue:'텍스트',style:'width: 80px;'}},{T:1,N:'xf:input',A:{id:'ed_mgntAcctNm',initValue:'텍스트',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_amt',initValue:'텍스트',style:'width: 150px;',dataType:'number',displayFormat:'#,##0',class:'tar'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정금액 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_fiCloseAmt',initValue:'텍스트',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조정전표 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_fiCtrlAmt',initValue:'텍스트',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리조정 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_mgntCtrlAmt',initValue:'텍스트',style:'width: 150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배부금액 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',dataType:'number',displayFormat:'#,##0',id:'ed_mgntDistAmt',initValue:'텍스트',style:'width: 150px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표내역 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_slipDetail',id:'udc_excel_slipDetail',grdDownOpts:'{"fileName": "전표", "sheetName":"전표","type":"1"}',btnUser:'true'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_slipDetail',scrollByColumn:'false',style:'min-height: 150px;',autoFit:'none',id:'gr_slipDetail',visibleRowNum:'8',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncelldblclick':'scwin.gr_slipDetail_oncelldblclick',noResultMessageVisible:'true',noResultMessage:'조회된 데이터가 없습니다.'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'118',inputType:'text',style:'',id:'column27',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column25',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column23',value:'회계처리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'146',inputType:'text',style:'',id:'column21',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'143',inputType:'text',style:'',id:'column19',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column13',value:'차변',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column15',value:'대변',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column17',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'161',inputType:'text',style:'',id:'column46',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'236',inputType:'text',style:'',id:'column40',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'118',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'146',inputType:'text',style:';position:;text-align:left;',id:'slipKndNm',value:'',displayMode:'label',dataType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'143',inputType:'text',style:';position:;text-align:left;',id:'acctNm',value:'',displayMode:'label',dataType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'damt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'camt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'161',inputType:'text',style:';position:;text-align:left;',id:'clntNm',value:'',displayMode:'label',dataType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';position:;text-align:left;',id:'acctDeptNm',value:'',displayMode:'label',dataType:'text',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'236',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',dataType:'text',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'118',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'146',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'143',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column31',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'damt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column30',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'camt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'96',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'161',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'236',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows_slipDetail',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'감가상각내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_fixed',id:'udc_excel_fixed',grdDownOpts:'{"fileName": "감가상각", "sheetName":"감가상각","type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fixed',focusMode:'cell',id:'gr_fixed',scrollByColumn:'false',scrollByColumnAdaptive:'false',visibleRowNum:'3',visibleRowNumFix:'true',fixedColumn:'5',noResultMessageVisible:'true',noResultMessage:'조회된 데이터가 없습니다.',style:'min-height: 180px;'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'자산유형',width:'115',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'자산명',width:'144',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'귀속부서',width:'124',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'자산번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'당월상각비',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'원취득액',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'취득가액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',style:'',id:'column65',value:'전기말',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column57',value:'당기말',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'취득일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'상각율',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'내용연수',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'자산증가',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'자산감소',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column66',value:'감가상각누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'감가상각비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column54',value:'감가상각누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'장부가액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'',width:'115',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'144',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'124',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mmDeprAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgAcqAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acqAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'befYyProvAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'befYyBookAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisYyDeprAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'thisYyProvAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'thisYyBookAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acqDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprRt',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'svcLife',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetIncrAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetDecrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'115',inputType:'text',style:'',id:'column36',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'144',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'124',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column76',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'mmDeprAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column32',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'orgAcqAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'acqAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column68',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'befYyProvAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column64',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'befYyBookAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column60',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'thisYyDeprAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column56',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'thisYyProvAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column52',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'thisYyBookAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'column30',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column29',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'asetIncrAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column80',value:'0',displayMode:'label',textAlign:'right',expression:'sum(\'asetDecrAmt\')',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows_fixed',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'선급비용내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_prepay',id:'udc_excel_prepay',grdDownOpts:'{"fileName": "선급비용", "sheetName":"선급비용","type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_prepay',focusMode:'cell',id:'gr_prepay',scrollByColumnAdaptive:'false',style:'min-height: 150px;',visibleRowNum:'3',visibleRowNumFix:'true',noResultMessageVisible:'true',noResultMessage:'조회된 데이터가 없습니다.',overflowY:'scroll','ev:oncelldblclick':'scwin.gr_prepay_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'선급비용번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'종류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'작성자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'금액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'잔액',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'당기전월누계',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'당기누계',width:'100'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column35',value:'당월금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'199',inputType:'text',style:'',id:'column33',value:'기간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column29',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'192',inputType:'text',style:'',id:'column31',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'prepayCostNo',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'110',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',style:'',value:'',width:'110',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyBefMmAmt',inputType:'text',style:'',value:'',width:'110',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyAmt',inputType:'text',style:'',value:'',width:'110',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'thisMmAmt',value:'',displayMode:'label',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'199',inputType:'text',style:'',id:'prepayTermDt',value:'',displayMode:'label',readOnly:'true',customFormatter:'scwin.fn_termFormat'}},{T:1,N:'w2:column',A:{width:'90',inputType:'select',style:'',id:'prepayCostStsCd',value:'',displayMode:'value delim label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'192',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows_prepay',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})