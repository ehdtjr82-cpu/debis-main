/*amd /ui/member/member_id.xml 2734 cc7fbd267dd65f11cb3df3eff1eb86befac3405b28b7766a647696a342e9bc8c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.getQueryParams = function () {
  var params = {};
  var query = window.location.search || "";
  query.replace(/^\?/, "").split("&").forEach(function (pair) {
    var pieces = [];
    var key = "";
    if (!pair) {
      return;
    }
    pieces = pair.split("=");
    key = decodeURIComponent(pieces[0] || "");
    if (!key || key === "w2xPath") {
      return;
    }
    params[key] = decodeURIComponent(pieces.slice(1).join("=") || "");
  });
  return params;
};
scwin.buildDirectUrl = function (url) {
  return "/websquare/websquare.html?w2xPath=" + encodeURIComponent(url);
};
scwin.onpageload = function () {
  // var params = Object.assign({}, scwin.getQueryParams(), $c.data.getParameter() || {});
  var frame = $p.getFrame();
  var params = frame.getUserData("paramData") || {};
  tbx_result.setValue(params.mbrId || params.MBR_ID || "-");
};
scwin.closePage = async function () {
  $p.parent().wfm_wframe.setSrc("/ui/member/index_main.xml");

  // window.open(scwin.buildDirectUrl("/ui/member/index_main.xml"), "_self");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents nc_truck ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'아이디 찾기',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'form-group tac vam fs16',id:'',style:'height: 100%'},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'회원님의 아이디는',style:''}},{T:1,N:'w2:textbox',A:{class:'txt-blue',escape:'false',id:'tbx_result',label:'동원로엑스',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'입니다.',style:''}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.closePage'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]})