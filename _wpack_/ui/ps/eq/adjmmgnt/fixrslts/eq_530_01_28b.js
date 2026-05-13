/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_28b.xml 16824 261d6924eeb866297104bd18e6c84284288741920c0b79438095cc69e5b2b142 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixWork'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'term',name:'기간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqHomeClsCd',name:'사업부문',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repFixWrkPlCd',name:'대표정비작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWork',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cat',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fyearRslts',name:'전년실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmRslts',name:'실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmRt',name:'비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumRslts',name:'실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumRt',name:'비율',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo3',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_combo3',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo1',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'cmd',name:'cmd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'strVal',name:'strVal'}},{T:1,N:'w2:key',A:{dataType:'text',id:'intVal',name:'intVal'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveCategoryEachOutordRepairPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_fixWork","key":"IN_DS1"},{"id":"ds_fixWork","key":"OUT_DS1"}',target:'data:json,{"id":"ds_fixWork","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo1',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo1',target:'data:json,{"id":"ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo2',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo1',target:'data:json,{"id":"ds_combo2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCombo2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo3',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo3',target:'data:json,{"id":"ds_combo3","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.suserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.sfixWrkPlCd = scwin.memJson.fixWrkPlCd; // 사용자소속구분코드 	

scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMM");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }, {
    grpCd: "EQ005",
    compID: "gr_fixWork: cat"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  dma_fixWork.set("term", scwin.currDate);
  lc_homeClsCd.setSelectedIndex(0);
  scwin.f_searchCombo1();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_term, lc_homeClsCd, lc_repFixWrkPlCd, lc_fixWrkPlCd]);
  if (!ret) {
    return false;
  }
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_fixWork.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  gr_fixWork.setFocusedCell(0, 0);
};
scwin.lc_homeClsCd_onchange = function (info) {
  scwin.f_searchCombo2(info.newValue);
};
scwin.f_searchCombo1 = function () {
  dma_combo1.set("cmd", "retriveHomeClsList");
  dma_combo1.set("strVal", "");
  dma_combo1.set("intVal", "");
  $c.sbm.execute($p, sbm_searchCombo1);
};
scwin.f_searchCombo2 = function (param1) {
  dma_combo1.set("cmd", "retriveFixWrkList");
  dma_combo1.set("strVal", param1);
  dma_combo1.set("intVal", "");
  $c.sbm.execute($p, sbm_searchCombo2);
};
scwin.lc_repFixWrkPlCd_onchange = function (info) {
  scwin.f_searchCombo3(info.newValue);
};
scwin.f_searchCombo3 = function (param1) {
  dma_combo3.set("sysCd", "PsCommonEBC");
  dma_combo3.set("queryId", "retriveWrkplList");
  dma_combo3.set("param2", param1);
  $c.sbm.execute($p, sbm_searchCombo3);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  // cfInitObjects(tb_wrk, null);
  $c.gus.cfInitObjects($p, table1);
  lc_homeClsCd.setValue(scwin.suserHomeClsCd);
  if (lc_homeClsCd.getValue() == scwin.suserHomeClsCd) {
    lc_repFixWrkPlCd.setValue(scwin.sfixWrkPlCd); // 정비작업장코드
  }
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel = async function () {
  let sheetTitle = "계통별 외주수리현황조회";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_fixWork, options);
};
scwin.btn_search1_init_onclick = function (e) {
  // $c.gus.cfInitObjects(table1);
  scwin.f_FieldClear();
};
scwin.sbm_searchCombo2_submitdone = function (e) {
  scwin.f_searchCombo3(lc_repFixWrkPlCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_term',style:'',ref:'data:dma_fixWork.term',mandatory:'true',title:'기간',delimiter:'/'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:150px;',submenuSize:'auto',ref:'data:dma_fixWork.eqHomeClsCd','ev:onchange':'scwin.lc_homeClsCd_onchange',mandatory:'true',title:'사업부문',displayMode:'value delim label',sortOption:'value',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_repFixWrkPlCd',style:'width:150px;',submenuSize:'auto',ref:'data:dma_fixWork.repFixWrkPlCd','ev:onchange':'scwin.lc_repFixWrkPlCd_onchange',mandatory:'true',title:'대표정비작업장',displayMode:'value delim label',sortOption:'value',visibleRowNum:'11'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_combo2'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width:150px;',submenuSize:'auto',ref:'data:dma_fixWork.fixWrkPlCd',mandatory:'true',title:'정비작업장',displayMode:'value delim label',visibleRowNum:'11'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_combo3'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_fixWork',id:'udc_gr_fixWork',gridDownYn:'Y',gridDownFn:'scwin.f_toExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_fixWork',id:'gr_fixWork',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계통',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'전년실적',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'당월',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'누계',width:'140',colSpan:'2',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'비율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'비율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'cat',inputType:'select',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fyearRslts',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmRslts',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmRt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumRslts',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumRt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'fyearRslts\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'thisMmRslts\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'thisMmRt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'cumRslts\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column31',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'cumRt\')',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})