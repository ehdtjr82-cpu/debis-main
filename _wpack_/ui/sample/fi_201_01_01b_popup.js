/*amd /ui/sample/fi_201_01_01b_popup.xml 4564 1ab8c298040bf3f84d9310dcece1af1b094d76359df439788c7fde17c350a5a3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'1'}]},{T:1,N:'col2',E:[{T:4,cdata:'aa'}]},{T:1,N:'col3',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'0'}]},{T:1,N:'col2',E:[{T:4,cdata:'bb'}]},{T:1,N:'col3',E:[{T:4,cdata:'22'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'0'}]},{T:1,N:'col2',E:[{T:4,cdata:'cc'}]},{T:1,N:'col3',E:[{T:4,cdata:'33'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  debugger;
  scwin.params = $c.data.getParameter($p);
  input_name.setValue(scwin.params.param2);
  input_tel.setValue(scwin.params.param1);
};

// 닫기	
scwin.btn_trigger1_onclick = function (e) {
  let rt = [input_tel.getValue(), input_name.getValue()];
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
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'contents_inner'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'pgtbox'},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',label:'팝업 메인',style:''}}]},{T:1,N:'xf:group',A:{class:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',label:'1. "popup" 클릭시 입력된 내용을 파라미터로 팝업창으로 전달<br/>2. 팝업 화면에서 파라미터가 있으면 화면에 set 을 한다.<br/>3. "닫기" 클릭시 callback 함수가 있으면 입력된 내용을 부모의 callback 함수에 전달한다. <br/>4. 부모의 callback 함수에서 전달 받은 파라미터를 다시 화면에 set을 한다 ',style:'font-weight:bold;font-size:9pt;'}}]},{T:1,N:'xf:group',A:{class:'',style:'height:20px'}},{T:1,N:'xf:group',A:{style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100.00%;',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:26.60%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:73.40%;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    						이름\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input_name',style:'width: 144px;height: 21px;',ctrlBtn:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n    						전화번호\n    						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'input_tel',style:'width: 144px;height: 21px;',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'grp_group1',style:'width: 100%;height: 50px;'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger3',style:'width:80px; height:23px; ','ev:onclick':'scwin.btn_trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_trigger1',style:'width:80px; height:23px; ',objType:'ctrlBtn','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})