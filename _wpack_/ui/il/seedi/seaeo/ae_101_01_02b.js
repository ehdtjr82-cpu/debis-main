/*amd /ui/il/seedi/seaeo/ae_101_01_02b.xml 23490 054514d64c0c4cbd1be09f33acd7cfa33eeec06e704b19dae5964930077f4570 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioGb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'건수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptNm',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioGb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vessel',name:'VESSEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voyage',name:'VOYAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loading',name:'LOADING',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dt',name:'출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'건수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeResult2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioGb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'건수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptNm',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'MBLNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'BLNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nm',name:'정정항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'id',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'정정신청번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioGb',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaAir',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yymm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yymmSeq',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dept',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo2',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhactcust',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rslDtFrom',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rslDtTo',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeDtFrom',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeDtTo',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sdate',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edate',name:'name17',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seedi.seaeo.RetrieveSeaEdiInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition", "key":"IN_DS1"}, {"id":"ds_closeResult", "key":"OUT_DS1"}, {"id":"ds_results", "key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_closeResult","key":"OUT_DS1"}, {"id":"ds_results", "key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/il.seedi.seaeo.RetrieveSeaEdiInfoUpdateCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',replace:'',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_closeResult2","key":"OUT_DS1"},{"id":"ds_results2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_closeResult2","key":"OUT_DS1"},{"id":"ds_results2","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve2_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  const now = new Date(); // 기준 날짜 (오늘)
  const prevMonthFirstDay = new Date(now.getFullYear(), now.getMonth() - 1, 1); // 전 달의 첫날
  const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0); // 전 달의 마지막날

  cnd_ed_rslDtFrom.setValue(scwin.formatYYYYMMDD(prevMonthFirstDay));
  cnd_ed_rslDtTo.setValue(scwin.formatYYYYMMDD(prevMonthLastDay));
  $c.data.setPopupTitle($p, "해상 적하목록 내역");
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.formatYYYYMMDD = function (d) {
  return d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
};
scwin.setText = function (d, fd, r, c) {
  if (d == "I") return "수입";
  if (d == "O" || d == "E") return "수출";
  return "기타";
};

//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   

scwin.btn_retrieve_onclick = function (e) {
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_fieldClear_onclick = function (e) {
  const now = new Date(); // 기준 날짜 (오늘)
  const prevMonthFirstDay = new Date(now.getFullYear(), now.getMonth() - 1, 1); // 전 달의 첫날
  const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0); // 전 달의 마지막날

  cnd_ed_rslDtFrom.setValue(scwin.formatYYYYMMDD(prevMonthFirstDay));
  cnd_ed_rslDtTo.setValue(scwin.formatYYYYMMDD(prevMonthLastDay));
  cnd_lc_iogb.setValue("A");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_results.getTotalRow() < 1) {
    await $c.win.alert($p, "신고 건수가 없습니다.");
  } else {
    ed_totalCnt.setValue(ds_closeResult.getTotalRow());
    ed_totalCnt1.setValue(ds_results.getTotalRow());
  }
  $c.sbm.execute($p, sbm_retrieve2);
};
scwin.sbm_retrieve2_submitdone = function (e) {
  if (ds_results2.getTotalRow() < 1) {
    $c.win.alert($p, "정정 건수가 없습니다.");
    return;
  } else {
    ed_totalCnt2.setValue(ds_closeResult2.getTotalRow());
    ed_totalCnt3.setValue(ds_results2.getTotalRow());
  }
};
scwin.excelDownload = function () {
  var options = {
    common: {
      fileName: "해상 적하목록 내역.xls",
      showProcess: true,
      colMerge: true
      // autoSizeColumn : "true"
    },
    excelInfo: [{
      gridId: gr_closeResult.getID(),
      sheetName: "신고건수(해상)",
      useDataFormat: true,
      decimal: "auto",
      rowNumVisible: true,
      type: "1",
      startRowIndex: 0,
      startColumnIndex: 0,
      headerColor: "#DBEEF3",
      bodyColor: "#92CDDC",
      mergeCell: true
    }, {
      gridId: gr_results.getID(),
      sheetName: "신고내역(해상)",
      type: "1",
      startRowIndex: 0,
      startColumnIndex: 0,
      headerColor: "#DBEEF3",
      bodyColor: "#92CDDC",
      mergeCell: true
    }, {
      gridId: gr_closeResult2.getID(),
      sheetName: "정정건수(해상)",
      type: "1",
      startRowIndex: 0,
      startColumnIndex: 0,
      headerColor: "#DBEEF3",
      bodyColor: "#92CDDC",
      mergeCell: true
    }, {
      gridId: gr_results2.getID(),
      sheetName: "정정내역(해상)",
      type: "1",
      startRowIndex: 0,
      startColumnIndex: 0,
      headerColor: "#DBEEF3",
      bodyColor: "#92CDDC",
      mergeCell: true
    }]
  };
  $c.data.downloadMultipleGridView($p, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_rslDt',refDataMap:'ds_condition',refEdDt:'edate',refStDt:'sdate',style:'',edToId:'cnd_ed_rslDtTo',edFromId:'cnd_ed_rslDtFrom'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_condition.ioGb'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs12',label:'신고',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs13',label:'정정',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content12',style:'height: auto;'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'요약',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_closeResult',grdDownOpts:'{"fileName":"적하목록 신고건수", "type":"1"}',gridDownFn:'scwin.excelDownload',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_closeResult',style:'',autoFit:'allColumn',id:'gr_closeResult',visibleRowNum:'5',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'수출입구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'건수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'deptNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ioGb',displayMode:'label',customFormatter:'scwin.setText'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cnt',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label',value:'Total'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column28',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cnt\') == \'\' ? 0 : SUM(\'cnt\')',excelCellType:'number',excelFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalCnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하목록 내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_results',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',autoFit:'allColumn',id:'gr_results',visibleRowNum:'5',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'수출입구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column15',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column13',value:'VESSEL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'VOYAGE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'LOADING',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'출항일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column5',value:'건수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'deptNm',displayMode:'label',colMerge:'true',style:'background-color: white !important;'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'ioGb',displayMode:'label',colMerge:'true',style:'background-color: white !important;',customFormatter:'scwin.setText'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'mrn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'vessel',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'voyage',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'loading',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'cnt',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalCnt1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content13',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요약',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_closeResult2',btnPlusYn:'N',btnUser:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.excelDownload',grdDownOpts:'{"fileName":"적하목록 정정건수", "type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_closeResult2',id:'gr_closeResult2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'부서명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'수출입구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'건수',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioGb',inputType:'text',width:'80',customFormatter:'scwin.setText'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',width:'80',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'80',value:'Total'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',width:'80',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cnt\') == \'\' ? 0 : SUM(\'cnt\')',excelCellType:'number',excelFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalCnt2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적하목록 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridID:'gr_results2',btnUser:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results2',id:'gr_results2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'부서',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'MRN',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'MBLNO',width:'100',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'BLNO',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'정정항목',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'정정사유',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'담당자',width:'100'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column19',value:'정정신청번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',width:'80',colMerge:'true',style:'background-color: white !important;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'80',colMerge:'false',style:'background-color: white !important;',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'nm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'text',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'id',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'mdno',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalCnt3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]}]})