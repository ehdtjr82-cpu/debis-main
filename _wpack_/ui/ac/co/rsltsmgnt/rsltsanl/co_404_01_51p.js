/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_51p.xml 14288 eb744ec9225ce74e40c59640f70883a547c97ec2f150dfe145390e8ff2ec9802 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYmSt',name:'closeYmSt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYmEnd',name:'closeYmEnd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'bizDomCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'schGroup',name:'schGroup',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'transCargoClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDcsnAmt',name:'확정매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellUnAmt',name:'미확정매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellInAmt',name:'내부매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsInAmt',name:'내부매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsDcsnAmt',name:'확정매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsUnAmt',name:'미확정매입',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveClntProfitAndLossResultDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params;
//-------------------------------------------------------------------------
// PGM명 : 거래처별손익실적_상세 (co_404_01_51p)
// 작성자 : 송정희
// 최초작성일자 : 2026-10-11
//-------------------------------------------------------------------------
scwin.p_closeYmSt = "";
scwin.p_closeYmEnd = "";
scwin.p_bizDomCd = "";
scwin.p_acctDeptCd = "";
scwin.p_crn = "";
scwin.p_clntNo = "";
scwin.p_schGroup = "";
scwin.p_transCargoClsCd = "";
scwin.sort_options = {};
scwin.sort_options.sortIndex = "clntNo acctDeptCd hblNo odrNo";
scwin.sort_options.sortOrder = "1 1 1 1";
scwin.rowCnt = 0;
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.p_closeYmSt = scwin.params["closeYmSt"];
  scwin.p_closeYmEnd = scwin.params["closeYmEnd"];
  scwin.p_bizDomCd = scwin.params["bizDomCd"];
  scwin.p_acctDeptCd = scwin.params["acctDeptCd"];
  scwin.p_crn = scwin.params["crn"];
  scwin.p_clntNo = scwin.params["clntNo"];
  scwin.p_schGroup = scwin.params["schGroup"];
  scwin.p_transCargoClsCd = scwin.params["transCargoClsCd"];
  scwin.f_Retrieve();
};
scwin.f_Retrieve = function () {
  dma_search.set("closeYmSt", scwin.p_closeYmSt); // 기준년월
  dma_search.set("closeYmEnd", scwin.p_closeYmEnd);
  dma_search.set("bizDomCd", scwin.p_bizDomCd); // 사업영역
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd); // 귀속부서
  dma_search.set("crn", scwin.p_crn); // 사업자번호
  dma_search.set("clntNo", scwin.p_clntNo); // 거래처번호
  dma_search.set("schGroup", scwin.p_schGroup); // 집계기준
  dma_search.set("transCargoClsCd", scwin.p_transCargoClsCd); // 화물구분

  $c.sbm.execute($p, sbm_master);
};
scwin.ds_master_ondataload = function () {
  var rowCnt = ds_master.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    ds_master.multisort(scwin.sort_options);
    if (scwin.p_bizDomCd == "140") {
      gr_master.setColumnVisible("odrNo", false);
      gr_master.setColumnVisible("hblNo", true);
    } else {
      gr_master.setColumnVisible("odrNo", true);
      gr_master.setColumnVisible("hblNo", false);
    }
  }
};
scwin.btn_Close_onclick = function (e) {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_master.getTotalCol(); i++) {
    if (gr_master.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, scwin.p_closeYmSt, "####-##");
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "거래처별손익실적_상세",
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
    fileName: "거래처별손익실적_상세.xlsx",
    sheetName: "년월" + str,
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_textbox1',label:'오더 상세내역 조회',style:'',tagname:'h3','ev:onclick':'scwin.tbx_textbox1_onclick'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column27',value:'거래처번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column59',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column55',value:'부서코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'귀속부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'B/L',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'column39',value:'매출',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column18',value:'매입',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'확정매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'미확정매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'내부매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'내부매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'확정매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'미확정매입',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hblNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellDcsnAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellUnAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellInAmt',value:'',displayMode:'label',displayFormat:'#,##0',invalidMessageFunc:'false',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsInAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsDcsnAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsUnAmt',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum("sellDcsnAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column38',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum("sellUnAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum("sellInAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column17',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum("pchsInAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column20',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum("pchsDcsnAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',displayFormat:'#,##0',textAlign:'right',expression:'sum("pchsUnAmt")',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'상세내역에 회계전표는 제외됩니다. ',class:'txt-dot txt-blue'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Close',style:'',type:'button','ev:onclick':'scwin.btn_Close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})