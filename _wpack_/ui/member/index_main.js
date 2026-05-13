/*amd /ui/member/index_main.xml 9023 ca592399546c60cb9c59bb1c2db4ade5223cb562c059ba1b27030c6d2007adc9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_loginform'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'user_id',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'passwd',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//wframe
scwin.requestJson = function (url, params) {
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

// scwin.buildDirectUrl = function (url, paramData) {
//     var path = url || "";
//     var queryParts = [];
//     var queryIndex = path.indexOf("?");
//     var key = "";

//     if (queryIndex > -1) {
//         queryParts.push(path.substring(queryIndex + 1));
//         path = path.substring(0, queryIndex);
//     }

//     Object.keys(paramData || {}).forEach(function (name) {
//         var value = paramData[name];

//         if (value == null || typeof value === "object" || typeof value === "function") {
//             return;
//         }

//         key = encodeURIComponent(name) + "=" + encodeURIComponent(String(value));
//         queryParts.push(key);
//     });

//     return "/websquare/websquare.html?w2xPath=" + encodeURIComponent(path) + (queryParts.length ? "&" + queryParts.join("&") : "");
// };

scwin.moveFrame = async function (url, paramData) {
  $p.parent().wfm_wframe.setSrc(url);
  $p.parent().wfm_wframe.setUserData("paramData", paramData);
  window.top.history.pushState({
    url: url,
    param: paramData || {}
  }, "", null);

  // window.open(scwin.buildDirectUrl(url, paramData || {}), "_self");
};
scwin.ensureComboDataList = function (dataListId) {
  var dataList = $p.getComponentById(dataListId);
  if (dataList) {
    return dataList;
  }
  $p.data.create({
    id: dataListId,
    type: "dataList",
    option: {
      baseNode: "list",
      repeatNode: "map"
    },
    columnInfo: [{
      id: "label"
    }, {
      id: "value"
    }]
  });
  return $p.getComponentById(dataListId);
};
scwin.bindRadio = function (component, nodeSetId, list) {
  var choices = (list || []).map(function (item) {
    return {
      label: scwin.safe(item.codeName),
      value: scwin.safe(item.code)
    };
  });
  var dataList = scwin.ensureComboDataList(nodeSetId);
  dataList.setJSON(choices);
  component.setNodeSet("data:" + nodeSetId, "label", "value");
};
scwin.safe = function (value) {
  return value == null ? "" : String(value);
};
scwin.onpageload = async function () {
  MBR_CLS_CD.setValue("01");
  try {
    var response = await scwin.requestJson("/MemberControl?cmd=indexInitJson", {});
    if (response) {}
    if (response.defaultMbrClsCd) {
      scwin.bindRadio(MBR_CLS_CD, "ds_mbr_list", response.memberTypes);
      MBR_CLS_CD.setValue(response.defaultMbrClsCd);
    }
  } catch (error) {}

  //삭제필요
  window.top.history.pushState({
    url: "/ui/member/index_main.xml"
  }, "", null);
};
scwin.f_reg = async function () {
  try {
    var response = await scwin.requestJson("/MemberControl?cmd=registerJson", {
      MBR_CLS_CD: MBR_CLS_CD.getValue()
    });
    if (!response.success) {
      await $c.win.alert($p, response.message || "회원구분을 선택하세요.");
      return;
    }
    await scwin.moveFrame("/ui/member/member_agree.xml", response.params || {});
  } catch (error) {
    await $c.win.alert($p, "회원가입 화면을 여는 중 오류가 발생했습니다.");
  }
};
scwin.f_modify = async function () {
  if (user_id.getValue() === "") {
    await $c.win.alert($p, "아이디를 입력하세요.");
    return;
  }
  if (passwd.getValue() === "") {
    await $c.win.alert($p, "비밀번호를 입력하세요.");
    return;
  }
  try {
    var response = await scwin.requestJson("/MemberControl?cmd=mLoginJson", {
      user_id: user_id.getValue(),
      passwd: passwd.getValue()
    });
    if (!response.success) {
      await $c.win.alert($p, response.message || "아이디 또는 비밀번호를 확인하세요.");
      return;
    }
    await scwin.moveFrame("/ui/member/member_modify.xml", {});
  } catch (error) {
    await $c.win.alert($p, "회원정보 수정 화면을 여는 중 오류가 발생했습니다.");
  }
};
scwin.f_member_find = async function () {
  await scwin.moveFrame("/ui/member/member_find.xml", {});
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents nc_truck',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'grpCont'},E:[{T:1,N:'w2:textbox',A:{class:'ncall-img',id:'',label:'',style:''}},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'신규회원',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'MBR_CLS_CD',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right tac',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_reg',style:'',type:'button','ev:onclick':'scwin.f_reg'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회원가입'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'기존회원',class:'tit'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'아이디',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'user_id',style:'',ref:'data:dma_loginform.user_id'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'패스워드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:secret',A:{id:'passwd',style:'',ref:'data:dma_loginform.passwd'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right tac'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'modify',type:'button',class:'btn','ev:onclick':'scwin.f_modify'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정보수정하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'member_find',style:'',type:'button','ev:onclick':'scwin.f_member_find'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아이디 / 패스워드 찾기'}]}]}]}]}]}]}]}]}]}]})