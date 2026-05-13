/*amd /ui/member/member_passwd.xml 3480 30463ff0aed64a52a7f1465744865eeb4f97f0df64a38a765dd4f015a0f84be0 */
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
scwin.decodeBase64Safe = function (str) {
  if (!str) return "";
  try {
    if (typeof atob === "function") {
      return decodeURIComponent(escape(atob(str)));
    }
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var buffer = 0,
      bits = 0;
    for (var i = 0; i < str.length; i++) {
      var c = chars.indexOf(str.charAt(i));
      if (c < 0) continue;
      buffer = buffer << 6 | c;
      bits += 6;
      if (bits >= 8) {
        bits -= 8;
        output += String.fromCharCode(buffer >> bits & 0xff);
      }
    }
    return decodeURIComponent(escape(output));
  } catch (e) {
    return str;
  }
};
scwin.onpageload = function () {
  // var params = Object.assign({}, scwin.getQueryParams(), $c.data.getParameter() || {});
  var frame = $p.getFrame();
  var params = frame.getUserData("paramData") || {};
  var passwd = params.findPw || "";
  var decodedPw = scwin.decodeBase64Safe(passwd);
  tbx_result.setValue(decodedPw || "-");
};
scwin.closePage = async function () {
  $p.parent().wfm_wframe.setSrc("/ui/member/member_find.xml");

  // window.open(scwin.buildDirectUrl("/ui/member/index_main.xml"), "_self");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents nc_truck',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'비밀번호 찾기',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'form-group tac vam fs16',id:'',style:'height: 100%'},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'회원님의 비밀번호는',style:''}},{T:1,N:'w2:textbox',A:{class:'txt-blue',escape:'false',id:'tbx_result',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'입니다.',style:''}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.closePage'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]})