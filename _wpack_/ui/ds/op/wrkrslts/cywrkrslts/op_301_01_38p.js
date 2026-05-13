/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_01_38p.xml 11420 ae29192f85fe8d2509b099901bd8912a13d3424eac30020192a05e493564d3b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{id:'dma_search',baseNode:'map'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'BL NO.',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'number'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'BOOKING NO.',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpCls',name:'수출입구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_master',baseNode:'map',objectType:'dataList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sfe',name:'규격(표시용)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BL NO.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING NO.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'선사거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'Line명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'line',name:'Line코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'공/적 구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'화물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exstSealNo',name:'봉인번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection',E:[{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveSendOutInspectionContainerInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':''}}]}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // 넘어오는 파라미터 세팅
  scwin.params = $c.data.getParameter($p) || {};
  scwin.pTitle = scwin.params.pTitle == null ? "" : scwin.params.pTitle;
  scwin.cntrNo = scwin.params.cntrNo == null ? "" : scwin.params.cntrNo;
  scwin.blNo = scwin.params.blNo == null ? "" : scwin.params.blNo;
  scwin.wrkPlCd = scwin.params.wrkPlCd == null ? "" : scwin.params.wrkPlCd;
  scwin.mrn = scwin.params.mrn == null ? "" : scwin.params.mrn;
  scwin.msn = scwin.params.msn == null ? "" : scwin.params.msn;
  scwin.hsn = scwin.params.hsn == null ? "" : scwin.params.hsn;
  scwin.bookingNo = scwin.params.bookingNo == null ? "" : scwin.params.bookingNo;
  scwin.IO = scwin.params.IO == null ? "" : scwin.params.IO;

  // 수입/수출 라디오 박스 세팅
  if (scwin.IO == "I") rd_impExpCls.setValue("I");else rd_impExpCls.setValue("O");

  // 조회조건 세팅
  dma_search.set("cntrNo", scwin.cntrNo);
  dma_search.set("wrkPlCd", scwin.wrkPlCd);
  dma_search.set("blNo", scwin.blNo);
  dma_search.set("mrn", scwin.mrn);
  dma_search.set("msn", scwin.msn);
  dma_search.set("hsn", scwin.hsn);
  dma_search.set("bookingNo", scwin.bookingNo);
  dma_search.set("impExpCls", scwin.IO);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  dma_search.set("impExpCls", rd_impExpCls.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

// 조회 Done
scwin.sbm_retrieve_submitdone = async function () {
  var rowCnt = ds_master.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "컨테이너 마스터 등록 내역이 없습니다");
    return;
  }
  spa_totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 조회결과 그리드뷰(grd_master) Double Click Event
//-------------------------------------------------------------------------
scwin.grd_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) scwin.f_AutoClose(rowIndex);
};

// 데이터 반환 및 Close
scwin.f_AutoClose = function (rowIndex) {
  // 부모창에 반환할 데이터
  let returnValue = [ds_master.getCellData(rowIndex, "cntrNo"), ds_master.getCellData(rowIndex, "cntrSizCd"), ds_master.getCellData(rowIndex, "cntrTypCd"), ds_master.getCellData(rowIndex, "fullEmptyClsCd"), ds_master.getCellData(rowIndex, "commCd"), ds_master.getCellData(rowIndex, "vsslCd"), ds_master.getCellData(rowIndex, "shpCoClntNo"), ds_master.getCellData(rowIndex, "portcnt"), ds_master.getCellData(rowIndex, "portCd"), ds_master.getCellData(rowIndex, "line"), ds_master.getCellData(rowIndex, "mrn"), ds_master.getCellData(rowIndex, "msn"), ds_master.getCellData(rowIndex, "hsn"), ds_master.getCellData(rowIndex, "blNo"), ds_master.getCellData(rowIndex, "arrvlportDtm"), ds_master.getCellData(rowIndex, "exstSealNo"), ds_master.getCellData(rowIndex, "bookingNo")];
  $c.win.closePopup($p, returnValue);
};

//-------------------------------------------------------------------------
// 수출입구분 라디오 버튼 변경시
//-------------------------------------------------------------------------
scwin.rd_impExpCls_onviewchange = function (info) {
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.f_WinClose = function () {
  $c.win.closePopup($p, "");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'w2:wframe',A:{id:'sp_title',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box flex-full',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'수출입구분:',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',id:'rd_impExpCls',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1',objType:'data','ev:onviewchange':'scwin.rd_impExpCls_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group1',style:''},E:[{T:1,N:'w2:gridView',A:{id:'grd_master',class:'wq_gvw',dataList:'data:ds_master',columnMove:'true',readOnly:'true','ev:oncelldblclick':'scwin.grd_master_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column17',value:'입항일시',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column15',value:'컨테이너번호',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column13',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column11',value:'BL NO.',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column9',value:'BOOKING NO',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column35',value:'선박',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column33',value:'선사거래처',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column31',value:'항구',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column29',value:'항차',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'column27',value:'Line',width:'90'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'arrvlportDtm',width:'130',value:'',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'cntrNo',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'sfe',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'blNo',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'bookingNo',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'vsslNm',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'shpCoClntNm',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'portCd',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'portcnt',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',inputType:'text',id:'lineNm',value:'',width:'90',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]})