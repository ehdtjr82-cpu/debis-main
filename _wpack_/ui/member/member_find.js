/*amd /ui/member/member_find.xml 9061 388d7a60009ce51da7c9f22768d52151f437974677f45963a537988efc8fc18c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_findId'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'id_mbr_nm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'id_email',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_findPw'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pw_mbr_id',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pw_mbr_nm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pw_email',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.requestJson = function (url, params) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var payload = [];
    Object.keys(params || {}).forEach(function (key) {
      payload.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key] == null ? "" : params[key]));
    });
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.responseText || "{}"));
        } catch (error) {
          reject(error);
        }
        return;
      }
      reject(new Error("HTTP " + xhr.status));
    };
    xhr.send(payload.join("&"));
  });
};
scwin.buildDirectUrl = function (url, paramData) {
  var path = url || "";
  var queryParts = [];
  var queryIndex = path.indexOf("?");
  if (queryIndex > -1) {
    queryParts.push(path.substring(queryIndex + 1));
    path = path.substring(0, queryIndex);
  }
  Object.keys(paramData || {}).forEach(function (name) {
    var value = paramData[name];
    if (value == null || typeof value === "object" || typeof value === "function") {
      return;
    }
    queryParts.push(encodeURIComponent(name) + "=" + encodeURIComponent(String(value)));
  });
  return "/websquare/websquare.html?w2xPath=" + encodeURIComponent(path) + (queryParts.length ? "&" + queryParts.join("&") : "");
};
scwin.moveFrame = async function (url, paramData) {
  $p.parent().wfm_wframe.setSrc(url);
  $p.parent().wfm_wframe.setUserData("paramData", paramData);
  window.top.history.pushState({
    url: url,
    param: paramData || {}
  }, "", null);

  // window.open(scwin.buildDirectUrl(url, paramData || {}), "_self");
};
scwin.onpageload = function () {};
scwin.f_id = async function () {
  if (id_mbr_nm.getValue() === "") {
    await $c.win.alert($p, "성명을 입력한 뒤 아이디 찾기를 진행하세요.");
    return;
  }
  if (id_email.getValue() === "") {
    await $c.win.alert($p, "이메일을 입력한 뒤 아이디 찾기를 진행하세요.");
    return;
  }
  try {
    var response = await scwin.requestJson("/MemberControl?cmd=findIdJson", {
      id_mbr_nm: id_mbr_nm.getValue(),
      id_email: id_email.getValue()
    });
    if (!response.success) {
      await $c.win.alert($p, response.message || "사용자 정보를 다시 확인하세요.");
      $c.gus.cfInitObjects($p, tb_id);
      return;
    }
    await scwin.moveFrame("/ui/member/member_id.xml", {
      mbrId: response.mbrId || ""
    });
  } catch (error) {
    await $c.win.alert($p, "아이디 찾기 처리 중 오류가 발생했습니다.");
  }
};
scwin.f_pw = async function () {
  if (pw_mbr_id.getValue() === "") {
    await $c.win.alert($p, "아이디를 입력한 뒤 비밀번호 찾기를 진행하세요.");
    return;
  }
  if (pw_mbr_nm.getValue() === "") {
    await $c.win.alert($p, "성명을 입력한 뒤 비밀번호 찾기를 진행하세요.");
    return;
  }
  if (pw_email.getValue() === "") {
    await $c.win.alert($p, "이메일을 입력한 뒤 비밀번호 찾기를 진행하세요.");
    return;
  }
  try {
    var response = await scwin.requestJson("/MemberControl?cmd=findPwJson", {
      pw_mbr_id: pw_mbr_id.getValue(),
      pw_mbr_nm: pw_mbr_nm.getValue(),
      pw_email: pw_email.getValue()
    });
    if (!response.success) {
      await $c.win.alert($p, response.message || "사용자 정보를 다시 확인하세요.");
      $c.gus.cfInitObjects($p, tb_pw);
      return;
    }
    var encodedPw = btoa(response.passwd || "");
    await scwin.moveFrame("/ui/member/member_passwd.xml", {
      findPw: encodedPw
    });
  } catch (error) {
    await $c.win.alert($p, "비밀번호 찾기 처리 중 오류가 발생했습니다.");
  }
};
scwin.closePage = async function () {
  await scwin.moveFrame("/ui/member/index_main.xml", {});
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents nc_truck',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'아이디 찾기',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_id',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'id_mbr_nm',style:'',ref:'data:dma_findId.id_mbr_nm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'id_email',style:'',ref:'data:dma_findId.id_email'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right tac',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_find_id',style:'',type:'button','ev:onclick':'scwin.f_id'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아이디 찾기'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'비밀번호 찾기',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_pw',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'아이디',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'pw_mbr_id',style:'',ref:'data:dma_findPw.pw_mbr_id'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'pw_mbr_nm',style:'',ref:'data:dma_findPw.pw_mbr_nm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'pw_email',style:'',ref:'data:dma_findPw.pw_email'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right tac'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_find_pw',type:'button',class:'btn','ev:onclick':'scwin.f_pw'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비밀번호 찾기'}]}]}]}]}]}]}]}]}]}]})