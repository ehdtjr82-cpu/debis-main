/*amd /ui/sample/smp_pivot.xml 3324 07f384a07e91a1a77082de1990ef45eaedc079b4b912fd225b661c8138231f45 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bank',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'due_mon',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // 데이터 세팅
  dataList1.setData(["국민은행 강남", "2025-01", 15205000, "국민은행 강남", "2025-02", 8225000, "국민은행 강남", "2025-03", 8125000, "국민은행 강남", "2025-04", 0, "기업은행 중소", "2025-01", 12020010, "기업은행 중소", "2025-02", 57010, "기업은행 중소", "2025-03", 0, "우리은행 포스코", "2025-01", 38151200, "우리은행 포스코", "2025-02", 0, "우리은행 포스코", "2025-03", 0]);
  pivotTable1.setOption({});
};

// 다운로드
scwin.btn_trigger2_onclick = function (e) {
  pivotTable1.pivotExcelDownload({});
};

// 업로드
scwin.btn_trigger1_onclick = function (e) {
  var options = {};
  options.startRowIndex = 2;
  options.startColumnIndex = 0;
  options.append = 1;
  pivotTable1.pivotExcelUpload(options);
};
}}}]},{T:1,N:'style',E:[{T:3,text:'.w2editablePivot_container_header_hiddenList:before { content:"제외컬럼" }'}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{style:'',id:'wfm_wframe1',src:'/cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'pivot Sample',class:'tit'}}]}]},{T:1,N:'w2:pivot',A:{allTotalName:'합계',vals:'amt',editablePivotMode:'false',rows:'bank',valuesAxis:'row','ev:onRefresh':'',showGrandTotal:'true',showZero:'true',dataList:'data:dataList1',contextMenuGetter:'getContext',excludeHiddenList:'',style:';',aggregatorName:'Sum',id:'pivotTable1',autoFit:'allColumn',cols:'due_mon',class:'cm_pivot',useNumberFormat:'true'},E:[{T:1,N:'w2:fieldInfo',E:[{T:1,N:'w2:field',A:{name:'은행',id:'bank'}},{T:1,N:'w2:field',A:{name:'날짜',id:'due_mon'}},{T:1,N:'w2:field',A:{name:'합계',id:'amt'}}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger1',style:'width:80px; height:23px; ','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업로드'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger2',style:'width:80px; height:23px; ','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다운로드'}]}]}]}]}]}]}]})