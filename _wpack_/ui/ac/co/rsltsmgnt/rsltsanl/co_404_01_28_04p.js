/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_28_04p.xml 15299 46827f3af813aa8a8af759f0117f1dfa6e6bce7f145fdccdefc5980353b9d1b0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true','ev:ondataload':'scwin.ds_detail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegNo',name:'법인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfyyThisAmt',name:'전기실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'당월실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisDiffer',name:'증감',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanDetail2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업영역별계획대비실적상세5 (co_404_01_28_04p) - 법인별 전기대비증감
// 작성자 : 송정희
// 최초작성일자 : 2026-11-26
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
scwin.ret_detail_2 = false;
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.p_closeYm = scwin.params.closeYm;
  scwin.p_acctDeptCd = scwin.params.acctDeptCd;
  scwin.p_acctDeptNm = scwin.params.acctDeptNm;
  scwin.p_mgntAcctCd = scwin.params.mgntAcctCd;
  scwin.p_mgntAcctNm = scwin.params.mgntAcctNm;
  scwin.p_coCd = scwin.params.coCd;
  scwin.p_coNm = scwin.params.coNm;
  scwin.p_bizDomCd = scwin.params.bizDomCd;
  scwin.p_bizDomNm = scwin.params.bizDomNm;
  dma_search.set("closeYm", scwin.p_closeYm);
  dma_search.set("coCd", scwin.p_coCd);
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd);
  dma_search.set("mgntAcctCd", scwin.p_mgntAcctCd);
  ed_closeYm.setValue(scwin.p_closeYm);
  ed_coCd.setValue(scwin.p_coCd);
  ed_coNm.setValue(scwin.p_coNm);
  ed_acctDeptCd.setValue(scwin.p_acctDeptCd);
  ed_acctDeptNm.setValue(scwin.p_acctDeptNm);
  ed_mgntAcctCd.setValue(scwin.p_mgntAcctCd);
  ed_mgntAcctNm.setValue(scwin.p_mgntAcctNm);
  $c.gus.cfDisableObjects($p, [ed_closeYm, ed_coCd, ed_coNm, ed_acctDeptCd, ed_acctDeptNm, ed_mgntAcctCd, ed_mgntAcctNm]);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_detail);
};
scwin.btn_close_onclick = async function (e) {
  scwin.ret_detail_2 = await $c.win.closePopup($p, ["N/A"]);
  console.log("scwin.ret_detail_2 - " + scwin.ret_detail_2);

  //  if (scwin.ret_detail_2 == false) { return; }   
};
scwin.ds_detail_ondataload = function () {
  var rowCnt = ds_detail.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_detail.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_detail.getTotalCol(); i++) {
    if (gr_detail.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_closeYm.getValue(), "####-##");
  let str1 = ed_acctDeptCd.getValue();
  let str2 = ed_mgntAcctCd.getValue();
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "법인별 전기대비증감상세",
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
  }, {
    rowIndex: 3,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "소속 [" + str1 + "], 계정 [" + str2 + "] ",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "법인별 전기대비증감상세.xlsx",
    //sheetName: "년월" + str + "_소속" + str1+ "_계정" + str2 ,
    sheetName: "법인별 전기대비증감상세",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_detail, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_coCd',style:'width: 80px;'}},{T:1,N:'xf:input',A:{id:'ed_coNm',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctDeptCd',style:'width: 80px;'}},{T:1,N:'xf:input',A:{id:'ed_acctDeptNm',initValue:'텍스트',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_mgntAcctCd',style:'width: 80px;'}},{T:1,N:'xf:input',A:{id:'ed_mgntAcctNm',initValue:'텍스트',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 전기대비증감 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_detail',gridDownUserAuth:'X',gridUpYn:'N',class:'',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox  gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_detail',focusMode:'row',id:'gr_detail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'법인번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'전기실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'당월실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'증감',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntAcctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntAcctCdNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCdNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'corRegNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'busiNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'text',style:'',id:'bfyyThisAmt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'text',style:'',id:'thisRsltsAmt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',displayFormat:'#,##0',inputType:'text',style:'',id:'thisDiffer',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'bfyyThisAmt\')',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'sum(\'thisRsltsAmt\')',width:'100',displayFormat:'#,##0',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{expression:'sum(\'thisDiffer\')',width:'70',displayFormat:'#,##0',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})