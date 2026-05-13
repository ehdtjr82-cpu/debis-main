/*amd /ui/ja/dnja/dnja_010_01_05b.xml 14585 4e62e41d0ed7b2d207480e8ab0217874b6ff82edc23f7e8dbdae7f465ee37cb3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatCd',name:'주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDdCnt',name:'적용일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingUpr',name:'적용단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortGub',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgOilStatCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgStDt',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commonCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.basisinfomgnt.RetrieveOilUprInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition", "key":"IN_DS1"}, {"id":"ds_out", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dnja.basisinfomgnt.SaveOilUprInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_out", "key":"IN_DS1"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "JA020",
    compID: "lc_oilStatCd"
  }
  // , { grpCd: "JA020", compID: "gr_out:oilStatCd" }
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  ed_stDt.setValue(WebSquare.date.getCurrentServerDate("yyyyMMdd").substr(0, 6));
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.setInit = function () {
  lc_oilStatCd.addItem("전체", "", null, 0);
  lc_oilStatCd.setSelectedIndex(0);
  ds_commonCode.setJSON(dlt_commonCodeJA020.getAllJSON());
};
scwin.setCodeName = function (d, fd, r, c) {
  gr_out.removeRowClass(r);
  if (d == "") return "";
  if (d == "소계") {
    ds_out.setCellData(r, "orgOilStatCd", ds_out.getCellData(r - 1, "oilStatCd"));
    ds_out.setCellData(r, "stDt", ds_out.getCellData(r - 1, "stDt"));
    gr_out.setRowClass(r, "bg-type4");
    gr_out.setCellStyle(r, 1, "color", "#FF0000 !important");
    gr_out.setCellStyle(r, 2, "color", "#FF0000 !important");
    gr_out.setCellStyle(r, 3, "color", "#FF0000 !important");
    gr_out.setCellStyle(r, 4, "color", "#FF0000 !important");
    gr_out.setCellStyle(r, 5, "color", "#FF0000 !important");
    gr_out.setRowReadOnly(r, true);
    return d;
  } else {
    ds_out.setCellData(r, "orgOilStatCd", ds_out.getCellData(r, "oilStatCd"));
    ds_out.setCellData(r, "stDt", ds_out.getCellData(r, "stDt"));
  }
  rtn = dlt_commonCodeJA020.getMatchedJSON("cd", d)[0];
  return rtn.cd + " : " + rtn.cdNm;
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   

scwin.btn_retrieve_onclick = async function (e) {
  if (ed_stDt.getValue() == "") {
    await $c.win.alert($p, "년월은 필수조건 입니다.");
    ed_stDt.focus();
    return;
  }
  ds_condition.set("stDt", ed_stDt.getValue());
  ds_condition.set("oilStatCd", lc_oilStatCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_fieldClear_onclick = function (e) {
  ed_stDt.setValue("");
  lc_oilStatCd.setSelectedIndex(0);
};
scwin.btn_save_onclick = async function (e) {
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.cancelFunction = function () {
  row = gr_out.getFocusedRowIndex();
  if (ds_out.getRowStatus(row) == "C") {
    ds_out.removeRow(row);
    return;
  }
  ds_out.undoRow(gr_out.getFocusedRowIndex());
  gr_out.setFocusedCell(0, 0);
};
scwin.rowAddFunction = function () {
  idx = ds_out.insertRow();
  ds_out.setCellData(idx, "sortGub", "1");
  ds_out.setCellData(idx, "adptDdCnt", "0");
  ds_out.setCellData(idx, "oilingUpr", "0");
  gr_out.setFocusedCell(idx, 5);
};
scwin.rowDelFunction = function () {
  row = gr_out.getFocusedRowIndex();
  if (ds_out.getRowStatus(row) == "C") {
    ds_out.removeRow(row);
    return;
  }
  ds_out.setCellData(row, "chk", "1");
  ds_out.modifyRowStatus(row, "D");
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_out.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ds_out.modifyAllStatus("R");
  ed_totalRow.setValue(ds_out.getTotalRow());
};
scwin.gr_out_onviewchange = function (info) {
  stDt = ds_out.getCellData(info.rowIndex, "stDt");
  endDt = ds_out.getCellData(info.rowIndex, "endDt");
  if (stDt != "" && endDt != "") {
    ds_out.setCellData(info.rowIndex, "adptDdCnt", WebSquare.date.dateDiff(stDt, endDt) + 1);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_oilStatCd',search:'start',style:'width:200px;',submenuSize:'auto',visibleRowNum:'11'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'주유소별 단가',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'N',gridID:'gr_out',gridDownUserAuth:'X',grdDownOpts:'{"fileName":"주유소별 단가내역","type":"2+4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'13',visibleRowNumFix:'true',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_out_onviewchange',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'선택',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'주유소',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'적용기간',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'적용단가',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'구분',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'적용일수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'70',trueValue:'1',falseValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'oilStatCd',inputType:'select',style:'',value:'',width:'150',textAlign:'left',customFormatter:'scwin.setCodeName',selectedData:'false',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_commonCode'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'stDt',inputType:'calendar',style:'',value:'',width:'120',displayFormat:'yyyy/MM/dd',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'endDt',inputType:'calendar',style:'',value:'',width:'120',displayFormat:'yyyy/MM/dd',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDdCnt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingUpr',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',editModeEvent:'ondblclick',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sortGub',inputType:'text',style:'',value:'',width:'120'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',cancelFunction:'scwin.cancelFunction',rowAddFunction:'scwin.rowAddFunction',rowDelFunction:'scwin.rowDelFunction'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'X'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})