/*amd /ui/ds/fs/consignmgnt/fs_402_01_05p.xml 9195 f118ca42e61f9704057aca5dd1ee8be266d85b8d8a29c347c321382e56ec833a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteePurchaseCustomer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'busiNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemNm',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'trusteeClntNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.trusteecostselladjm.RetrieveTrusteePurchaseCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_trusteePurchaseCustomer","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_trusteePurchaseCustomer","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 수탁자 매입거래처 조회 팝업
//-------------------------------------------------------------------------
scwin.headTitle;
scwin.arrOptCnd;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  ed_clntNo.setValue(scwin.params.param1);
  ed_clntNm.setValue(scwin.params.param2);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 화면종료시 (닫기 버튼)
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  var rowIndex = ds_trusteePurchaseCustomer.getRowPosition();
  f_closeWithData(rowIndex);
};
scwin.f_Retrieve = function () {
  /*Map setting   */
  dma_queryCondition.set("clntNo", ed_clntNo.getValue());
  dma_queryCondition.set("trusteeClntNm", ed_clntNm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = e => scwin.f_Retrieve();

// 조회 callback 
scwin.sbm_retrieve_submitdone = function () {
  let nRow = ds_trusteePurchaseCustomer.getRowCount();
  if (nRow == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  } else if (nRow == 1) {
    f_closeWithData(0);
  }

  // 그리드 객체 가져오기 - 첫째 행 선택 (인덱스 0)
  gr_trusteePurchaseCustomer.setFocusedCell(0, 0);
  let nCnt = ds_trusteePurchaseCustomer.getRowCount();
  total.setValue(nCnt);
};

//팝업 데이타 dbclick
scwin.gr_trusteePurchaseCustomer_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  f_closeWithData(rowIndex);
};

// -----------------------------------------------
// 공통 함수로 분리
// -----------------------------------------------
function f_getReturnData(rowIndex) {
  return [ds_trusteePurchaseCustomer.getCellData(rowIndex, "busiNo"), ds_trusteePurchaseCustomer.getCellData(rowIndex, "clntNo"), ds_trusteePurchaseCustomer.getCellData(rowIndex, "clntNm"), ds_trusteePurchaseCustomer.getCellData(rowIndex, "costItemCd"), ds_trusteePurchaseCustomer.getCellData(rowIndex, "costItemNm")];
}
function f_closeWithData(rowIndex) {
  var ret = f_getReturnData(rowIndex);
  $c.win.closePopup($p, ret);
}

// 대문자 변환
scwin.capitalMask = function (value) {
  return value.toUpperCase();
};

// 사업자번호 표시 포맷 적용 
scwin.f_formatCrn = function (value) {
  if (!value) return "";
  var str = value.toString();
  if (str.length < 10) return str;
  return str.substring(0, 3) + "-" + str.substring(3, 5) + "-" + str.substring(5, 10);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo',style:'width:150px;',mandatory:'true',maxlength:'6',allowChar:'a-zA-Z0-9',applyFormat:'all',displayFormatter:'scwin.capitalMask'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm',style:'width:150px;',mandatory:'false'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_trusteePurchaseCustomer',id:'gr_trusteePurchaseCustomer',style:'',visibleRowNum:'10',visibleRowNumFix:'true',focusMode:'cell','ev:oncelldblclick':'scwin.gr_trusteePurchaseCustomer_oncelldblclick',autoFit:'allColumn',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'사업자번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사업자코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'사업자명',width:'250'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'비용코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'비용항목명',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNo',inputType:'text',width:'150',textAlign:'center',displayFormatter:'scwin.f_formatCrn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'250',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costItemCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costItemNm',inputType:'text',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})