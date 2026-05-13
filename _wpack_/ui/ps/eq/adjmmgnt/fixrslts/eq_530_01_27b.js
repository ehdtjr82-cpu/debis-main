/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_27b.xml 15002 80cb22792bf50c1ac0ef45670361ef3143a126ccfd719ec058e86fab2d69d195 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixWork'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'termFrom',name:'기간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termTo',name:'기간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqHomeClsCd',name:'사업부문',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'대표정비작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWork',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkUnitNm',name:'작업단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sum',name:'합계',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_combo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'param3'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_homeClsCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'LO'}]},{T:1,N:'name',E:[{T:4,cdata:'물류'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'TR'}]},{T:1,N:'name',E:[{T:4,cdata:'고속'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_wrkPlCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveCustomerEachOutordRepairCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_fixWork","key":"IN_DS1"},{"id":"ds_fixWork","key":"OUT_DS1"}',target:'data:json,{"id":"ds_fixWork","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCombo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_combo',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.veqHomeClsCd = scwin.memJson.eqHomeClsCd; // 사용자소속구분코드
scwin.vfixWrkPlCd = scwin.memJson.fixWrkPlCd; // 사용자대표정비작업장구분   

scwin.currDateFrom = WebSquare.date.getFormattedDate(new Date(), "yyyyMM") + "01";
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  lc_homeClsCd.setSelectedIndex(0);
  lc_homeClsCd.setValue(scwin.veqHomeClsCd);
  ica_termFrom.setValue(scwin.currDateFrom);
  ica_termTo.setValue(scwin.currDate);
  ica_termFrom.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_termFrom, ica_termTo, lc_homeClsCd, lc_wrkPlCd]);
  if (!ret) {
    return false;
  }
  $c.sbm.execute($p, sbm_search);
};
scwin.btn_search_onclick = function (e) {
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
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, table1);
  lc_homeClsCd.setValue(scwin.veqHomeClsCd);
  if (lc_homeClsCd.getValue() == scwin.veqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.vfixWrkPlCd);
  }
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel = async function () {
  if (ds_fixWork.getRowCount() == 0) {
    return;
  }
  let fileName = "거래처별 외주 수리현황";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 5,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 7,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 7,
    text: `조회일자 [${$c.date.formatDate($p, ica_termFrom.getValue(), "date")} ~ ${$c.date.formatDate($p, ica_termTo.getValue(), "date")}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 7,
    text: `사업부문 [${lc_homeClsCd.getText(true)}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 4,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 7,
    text: `대표정비작업장 [${lc_wrkPlCd.getText(true)}]`,
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_fixWork, options, infoArr);
};
scwin.lc_homeClsCd_onchange = function (info) {
  dma_combo.set("sysCd", "PsCommonEBC");
  dma_combo.set("queryId", "retriveWrkplList");
  dma_combo.set("param1", info.newValue);
  $c.sbm.execute($p, sbm_searchCombo);
};
scwin.btn_search1_init_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_term',refDataMap:'dma_fixWork',refEdDt:'termTo',refStDt:'termFrom',style:'',edFromId:'ica_termFrom',edToId:'ica_termTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'$blank',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_homeClsCd_onchange',id:'lc_homeClsCd',ref:'data:dma_fixWork.eqHomeClsCd',style:'width:150px;',submenuSize:'auto',mandatory:'true',title:'사업부문',displayMode:'value delim label',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',ref:'data:dma_fixWork.fixWrkPlCd',style:'width:150px;',submenuSize:'auto',mandatory:'true',title:'대표정비작업장',displayMode:'value delim label',visibleRowNum:'15'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_fixWork',id:'udc_gr_fixWork',gridDownFn:'scwin.f_toExcel',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fixWork',focusMode:'row',id:'gr_fixWork',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'거래처코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'220',value:'거래처명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업단위'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'210',value:'작업단위명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'합계',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'220',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkUnitCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkUnitNm',inputType:'text',removeBorderStyle:'false',width:'210',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###,###,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sum',inputType:'expression',width:'100',textAlign:'right',displayFormat:'#,###,###,###',dataType:'number',expression:'Number(display(\'amt\'))+Number(datalist(\'vat\'))',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'amt\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'vat\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})