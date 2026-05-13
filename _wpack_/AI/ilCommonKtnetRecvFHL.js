/*amd /AI/ilCommonKtnetRecvFHL.xml 2361 188b62c1755eca503b9702b83dab479f5f7fd257f61803ce544572d1416f5bd3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_KtnetRecv',action:'/il.common.KtnetRecvFHLCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[]',target:'data:json,[]','ev:submitdone':'scwin.sbm_KtnetRecv_submitdone','ev:submiterror':'scwin.sbm_KtnetRecv_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.status = "";
scwin.font_color = "black";
scwin.onpageload = function () {
  scwin.f_OnLoad();
};
scwin.f_OnLoad = async function () {
  await $c.sbm.execute($p, sbm_KtnetRecv);
};
scwin.sbm_KtnetRecv_submitdone = function (e) {
  scwin.status = "FHL/FWB 결과 수신이 완료 되었습니다. ";
  scwin.font_color = "blue";
  input1.setValue(scwin.status);
  input1.setStyle("color", scwin.font_color);
};
scwin.sbm_KtnetRecv_submiterror = function (e) {
  scwin.status = "FHL/FWB 결과 수신에 오류가 발생 했습니다.";
  scwin.font_color = "red";
  input1.setValue(scwin.status);
  input1.setStyle("color", scwin.font_color);
};
scwin.f_FieldClear = function () {};
scwin.btn_trigger2_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'" KT NET 적하 목록 정정 신청 결과 수신 "',class:'mg30 fs18 tac'}},{T:1,N:'xf:input',A:{style:'',readOnly:'true',id:'input1',class:'h50 tac fs18 txt-blue',initValue:'적하 목록 결과 수신이 완료 되었습니다.'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})