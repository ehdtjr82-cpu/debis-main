/*amd /ui/ds/fs/adjm/fs_102_01_16p.xml 9489 f9009f38ee9a056efbcaabbd99a7d4d5d204350a3dee4f52fae557d62b47f0f8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCertiNumberList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsGoodsPatternCd',name:'매입품목유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtSt',name:'매입예정일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtEnd',name:'매입예정일자종료',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiNumberList',saveRemovedData:'true','ev:ondataload':'scwin.ds_certiNumberList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCertiNumberList',action:'/ds.fs.adjm.pchscerticoll.RetrieveCertiNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCertiNumberList","key":"IN_DS1"},{"id":"ds_certiNumberList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_certiNumberList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCertiNumberList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fs_102_01_16p 
// 이름     : 거래명세서번호 조회
// 경로     : 물류/정산/매입승인/철송비용 매입 승인/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-02-26
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = async function () {};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ica_pchsIntendDtSt.setValue($c.data.getParameter($p, "pchsIntendDtSt")); // 매입예정일자시작
    ica_pchsIntendDtEnd.setValue($c.data.getParameter($p, "pchsIntendDtEnd")); // 매입예정일자종료		
    scwin.f_RetrieveCertiNumberList();
    ica_pchsIntendDtSt.focus();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 거래명세서번호 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCertiNumberList = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [ica_pchsIntendDtSt, ica_pchsIntendDtEnd]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_pchsIntendDtSt.getValue(), ica_pchsIntendDtEnd.getValue()))) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_pchsIntendDtSt.focus();
    return;
  }
  ds_searchCertiNumberList.set("pchsDeptCd", $c.data.getParameter($p, "pchsDeptCd")); // 매입점소
  ds_searchCertiNumberList.set("pchsClntNo", $c.data.getParameter($p, "pchsClntNo")); // 매입거래처
  ds_searchCertiNumberList.set("selpchItemCd", $c.data.getParameter($p, "selpchItemCd")); // 매출입항목코드
  ds_searchCertiNumberList.set("pchsGoodsPatternCd", $c.data.getParameter($p, "pchsGoodsPatternCd")); // 매입품목유형코드				

  $c.sbm.execute($p, sbm_searchCertiNumberList);
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveCertiNumberList();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.sbm_searchCertiNumberList_submitdone = async function (e) {
  // 총 조회건수 표시
  var rowCnt = ds_certiNumberList.getRowCount();
  txt_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
};
scwin.gr_certiNumberList_oncelldblclick = function (row, columnIndex, columnId) {
  // 객체를 생성하고, 그 안의 변수에 값을 설정해 리턴
  var objReturn = new Object();
  objReturn.certiNo = ds_certiNumberList.getCellData(row, 'certiNo'); // 거래명세서번호
  objReturn.rmk = ds_certiNumberList.getCellData(row, 'rmk'); // 비고

  $c.win.closePopup($p, objReturn);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_pchsIntend',refDataMap:'ds_searchCertiNumberList',refEdDt:'pchsIntendDtEnd',refStDt:'pchsIntendDtSt',style:'',edFromId:'ica_pchsIntendDtSt',edToId:'ica_pchsIntendDtEnd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'거래명세서 시작일자',titleTo:'거래명세서 종료일자',objTypeBtn:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_certiNumberList',id:'gr_certiNumberList',style:'',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_certiNumberList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'거래명세서번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'매입예정일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'비고',width:'250'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsIntendDt',inputType:'',style:'',value:'',width:'120',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'250',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})