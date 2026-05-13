/*amd /ui/sample/smp_popup.xml 4417 e674ec30072c164b09d522c6c9b0407b43b88ae8c11c5e2f11dbfa896d1c60b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'aa'}]},{T:1,N:'col3',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'0'}]},{T:1,N:'col2',E:[{T:4,cdata:'bb'}]},{T:1,N:'col3',E:[{T:4,cdata:'22'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'0'}]},{T:1,N:'col2',E:[{T:4,cdata:'cc'}]},{T:1,N:'col3',E:[{T:4,cdata:'33'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  debugger;
  input_name.setValue("홍길동");
  input_tel.setValue("1234567890");
  scwin.params = $c.data.getParameter($p);
};

// 닫기	
scwin.btn_trigger1_onclick = function (e) {
  let rt = ["code", "name"];
  $c.win.closePopup($p, rt);
};

// 팝업
scwin.btn_trigger3_onclick = function (e) {
  var data = {
    name: input_name.getValue(),
    tel: input_tel.getValue(),
    callback: "scwin.callBackFunc1"
  };
  var options = {
    id: "pop1",
    title: "팝업 테스트"
  };
  $c.win.openPopup($p, "/ui/sample/smp_popup2.xml", options, data);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents'},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',class:'mb16'},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;font-size:9pt;',label:'1. "popup" 클릭시 입력된 내용을 파라미터로 팝업창으로 전달<br/>2. 팝업 화면에서 파라미터가 있으면 화면에 set 을 한다.<br/>3. "닫기" 클릭시 callback 함수가 있으면 입력된 내용을 부모의 callback 함수에 전달한다. <br/>4. 부모의 callback 함수에서 전달 받은 파라미터를 다시 화면에 set을 한다',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    							이름\n    							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ctrlBtn:'true',adjustMaxLength:'false',style:'width: 144px;height: 21px;',id:'input_name'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    							전화번호\n    							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 144px;height: 21px;',id:'input_tel',objType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'grp_group1',style:''},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger1',style:'',objType:'ctrlBtn','ev:onclick':'scwin.btn_trigger1_onclick',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger3',style:'','ev:onclick':'scwin.btn_trigger3_onclick',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업'}]}]}]}]}]}]}]})