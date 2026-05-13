/*amd /ui/sample/smp_tab.xml 4318 3062a0c98ac687dcb3d9f7dc6f34048aa4f073d5d7dc37d69be6a4958aee4426 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dmMain'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{dataType:'text',name:'name2',id:'key2'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:3,text:'x\n						'},{T:1,N:'key1',E:[{T:4,cdata:'a'}]},{T:1,N:'key2',E:[{T:4,cdata:'b'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
scwin.onpageunload = function () {};

// 탭 동적 생성        
scwin.btn_trigger1_onclick = function (e) {
  let opts = {
    url: "/ui/sample/smp_tab2.xml",
    menuNm: "tab2",
    tabId: "tab2",
    data: dmMain.getJSON()
  };
  $c.win.setAddTab($p, tabCont, opts);
};
scwin.btn_trigger2_onclick = function (e) {
  tabCont.deleteTab("tab2");
};
scwin.btn_trigger3_onclick = function (e) {};
scwin.tabCont_ontabclick = function (tabId, index) {
  debugger;
  if (index == 0) {
    // 첫번째 탭 선택시
    // 부모의 dataMap 을 셋팅한다.
    tabCont.getWindow().dma_dataMap1.setJSON(dmMain.getJSON());
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'wrap',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{style:'',id:'wfm_wframe1',src:'/cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:170px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'tab&nbsp;동적생성'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger1',style:'width:80px; height:23px; ','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭생성'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ibx_input1',style:'width:144px; height:21px; ',ref:'data:dmMain.key1'}},{T:1,N:'xf:input',A:{id:'ibx_input167',style:'width:144px; height:21px; ',ref:'data:dmMain.key2'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'tab&nbsp;삭제'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger2',style:'width:80px; height:23px; ','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]},{T:1,N:'xf:group',A:{class:'flex tabbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tab',style:'',tagname:'h2'}},{T:1,N:'xf:group',A:{class:'tab-flex wq_tab',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab_sub',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tabCont',style:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true','ev:ontabclick':'scwin.tabCont_ontabclick'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs4',label:'Tab1',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content4',style:'',frameMode:'wframe',scope:'true',src:'/ui/sample/smp_tab1.xml'}}]}]}]}]}]}]}]})