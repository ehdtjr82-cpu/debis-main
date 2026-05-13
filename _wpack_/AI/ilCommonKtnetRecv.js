/*amd /AI/ilCommonKtnetRecv.xml 2452 17b97e2ec1004cff5143a836df6a8cf4fb7830266b41d773e144ecfcb157bcfa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ktnetRecv',action:'/il.common.KtnetRecvCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'',target:'','ev:submitdone':'scwin.sbm_ktnetRecv_submitdone','ev:submiterror':'scwin.sbm_ktnetRecv_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.status = "";
scwin.font_color = "black";
scwin.onpageload = async function () {
  await scwin.f_OnLoad();
};
scwin.f_OnLoad = async function () {
  await $c.sbm.execute($p, sbm_ktnetRecv);
};
scwin.sbm_ktnetRecv_submitdone = function (e) {
  scwin.status = "적하 목록 결과 수신이 완료 되었습니다.";
  scwin.font_color = "black";
  input1.setValue(scwin.status);
  input1.removeClass("txt-red");
  input1.addClass("txt-blue");
};
scwin.sbm_ktnetRecv_submiterror = function (e) {
  scwin.status = "적하 목록 결과 수신에 오류가 발생 했습니다.";
  scwin.font_color = "red";
  input1.setValue(scwin.status);
  input1.removeClass("txt-blue");
  input1.addClass("txt-red");
};
scwin.f_FieldClear = function () {};
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_WinClose();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'" KT NET 적하 목록 정정 신청 결과 수신 "',class:'mg30 fs18 tac'}},{T:1,N:'xf:input',A:{style:'',readOnly:'true',id:'input1',class:'h50 tac fs18 txt-blue',initValue:'적하 목록 결과 수신이 완료 되었습니다.'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})