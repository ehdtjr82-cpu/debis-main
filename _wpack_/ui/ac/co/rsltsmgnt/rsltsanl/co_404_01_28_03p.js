/*amd /ui/ac/co/rsltsmgnt/rsltsanl/co_404_01_28_03p.xml 14926 13c71a67ce6016bfd00aac9edd569a68386d4c934bf9d20205218c9e684f0df9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'closeYm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'mgntAcctCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'bizDomCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true','ev:ondataload':'scwin.ds_detail_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegNo',name:'법인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfyyThisAmt',name:'누계전기',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisRsltsAmt',name:'누계실적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisDiffer',name:'누계증감',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveBizDomPlanSumDifferDetail2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 사업영역별계획대비실적상세4 (co_404_01_28_03p) - 법인별 누계전기대비증감상세
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
scwin.sort_options = {};

//-------------------------------------------------------------------------
// 화면 초기 세팅
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.p_closeYm = scwin.params.closeYm;
  scwin.p_acctDeptCd = scwin.params.acctDeptCd;
  scwin.p_acctDeptNm = scwin.params.acctDeptNm;
  scwin.p_mgntAcctCd = scwin.params.acctCd;
  scwin.p_mgntAcctNm = scwin.params.acctNm;
  scwin.p_coCd = scwin.params.coCd;
  scwin.p_coNm = scwin.params.coNm;
  scwin.p_bizDomCd = scwin.params.bizDomCd;
  scwin.p_bizDomNm = scwin.params.bizDomNm;
  dma_search.set("closeYm", scwin.p_closeYm);
  dma_search.set("coCd", scwin.p_coCd);
  dma_search.set("acctDeptCd", scwin.p_acctDeptCd);
  dma_search.set("mgntAcctCd", scwin.p_mgntAcctCd);

  // 2. 화면 텍스트 박스 세팅
  ed_closeYm.setValue(scwin.p_closeYm);
  ed_coCd.setValue(scwin.p_coCd);
  ed_coNm.setValue(scwin.p_coNm);
  ed_acctDeptCd.setValue(scwin.p_acctDeptCd);
  ed_acctDeptNm.setValue(scwin.p_acctDeptNm);
  ed_mgntAcctCd.setValue(scwin.p_mgntAcctCd);
  ed_mgntAcctNm.setValue(scwin.p_mgntAcctNm);
  let disableObjs = [ed_closeYm, ed_acctDeptCd, ed_acctDeptNm, ed_mgntAcctCd, ed_mgntAcctNm];
  if (typeof btn_company !== "undefined") disableObjs.push(btn_company);
  $c.gus.cfDisableObjects($p, disableObjs);
  $p.setTimeout(function () {
    scwin.f_Retrieve();
  }, 100);
};

//-------------------------------------------------------------------------
// 데이터 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_detail);
};

//-------------------------------------------------------------------------
// 화면 닫기 버튼
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function () {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 데이터 로드 완료 이벤트 (건수 및 이름 세팅, 다중 정렬)
//-------------------------------------------------------------------------
scwin.ds_detail_ondataload = function () {
  let rowCnt = ds_detail.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }

  // 데이터가 있을 때 정렬
  if (rowCnt > 0) {
    ds_detail.multisort(scwin.sort_options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_detail.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  const options = {
    fileName: "누계전기대비증감.xlsx",
    sheetName: "누계전기대비증감"
  };
  await $c.data.downloadGridViewExcel($p, gr_detail, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{disabled:'true',id:'ed_coCd',style:'width: 80px;'}},{T:1,N:'xf:input',A:{disabled:'true',id:'ed_coNm',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_acctDeptCd',style:'width: 80px;',disabled:'true'}},{T:1,N:'xf:input',A:{id:'ed_acctDeptNm',style:'',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_closeYm',style:'',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_mgntAcctCd',style:'width: 80px;',disabled:'true'}},{T:1,N:'xf:input',A:{id:'ed_mgntAcctNm',style:'',disabled:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'법인별 누계전기대비증감 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_detail',gridDownUserAuth:'X',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_detail',focusMode:'row',id:'gr_detail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFitMinWidth:'0'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'111',inputType:'text',style:'',id:'column80',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column77',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'106',inputType:'text',style:'',id:'column74',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column71',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column68',value:'법인번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column65',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column62',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column59',value:'누계전기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column56',value:'누계실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column53',value:'누계증감',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'111',inputType:'text',style:'',id:'mgntAcctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:';text-align:left;',id:'mgntAcctCdNm',value:'',displayMode:'label',readOnly:'true',dataType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'106',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:';text-align:left;',id:'acctDeptCdNm',value:'',displayMode:'label',readOnly:'true',dataType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'corRegNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:';text-align:left;',id:'busiNm',value:'',displayMode:'label',readOnly:'true',dataType:'text',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'bfyyThisAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'thisRsltsAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'thisDiffer',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{width:'111',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'106',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'text-align:;',id:'column61',value:'',displayMode:'label',expression:'sum("bfyyThisAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'text-align:;',id:'column58',value:'',displayMode:'label',expression:'sum("thisRsltsAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'text-align:;',id:'column55',value:'',displayMode:'label',expression:'sum("thisDiffer")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})