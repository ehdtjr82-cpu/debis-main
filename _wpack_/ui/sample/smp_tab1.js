/*amd /ui/sample/smp_tab1.xml 1807 77aec585ed16e53f41a2c7b661e20a93ef047794dc7878304be4184d781b3a19 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  let paramJson = $c.data.getParameter($p); // 파라미터
  if (paramJson) {
    dma_dataMap1.setJSON(paramJson);
  }
};
scwin.onpageunload = function () {};
scwin.btn_trigger1_onclick = function (e) {
  // 부모 dataMap 에 값 셋팅
  $p.parent().dmMain.setJSON(dma_dataMap1.getJSON());
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'sample_box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'tab1 번 (smp_tab1.xml)',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{style:'',id:'grp_group1'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'',ref:'data:dma_dataMap1.key1'}},{T:1,N:'xf:input',A:{id:'',style:'width:144px; height:21px; ',ref:'data:dma_dataMap1.key2'}},{T:1,N:'xf:trigger',A:{type:'button',id:'',style:'width:80px; height:23px; ','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]})