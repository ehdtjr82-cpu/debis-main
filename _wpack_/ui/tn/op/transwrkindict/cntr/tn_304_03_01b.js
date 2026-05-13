/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_01b.xml 9610 e6d91b611850e3a9f2258415ed62b9fb22ea02364a24d4bf7a6eb9c38499e98b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_outInfo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCyRsLoginInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_query","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_outInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loginID;
scwin.reqWrkDt;
scwin.eqCd;
scwin.wrkPlCd;
scwin.lobranCd;
scwin.fullEmptyClsCd;
scwin.selfClsCd;
scwin.memJson;
scwin.g_selected_input_box = "ed_vehclNo";
scwin.pgrId;
scwin.onpageload = function () {
  scwin.initSetVal();
  if (scwin.eqCd == "" || scwin.lobranCd == "" || scwin.wrkPlCd == "") {
    let data = scwin.getCYLoginData();
    if (data != null) {
      scwin.wrkPlCd = data.wrkPlCd ?? "";
      scwin.lobranCd = data.lobranCd ?? "";
      scwin.eqCd = data.eqCd ?? "";
    }
  }
  if (scwin.eqCd != "" && scwin.lobranCd != "" && scwin.wrkPlCd != "") {
    //로그인 된 정보가 존재하면 이동
    scwin.movePage(scwin.eqCd, scwin.wrkPlCd, scwin.lobranCd);
    return;
  }
  $c.win.sKeyInit($p, "singleKey", "Enter", "scwin.enter");
  ed_vehclNo.focus();
};
scwin.setCYLoginData = function (value) {
  var enc = btoa(unescape(encodeURIComponent(JSON.stringify(value))));
  localStorage.setItem("CY_LOGIN_INFO", enc);
};
scwin.getCYLoginData = function () {
  var raw = localStorage.getItem("CY_LOGIN_INFO");
  if (!raw) return {};
  try {
    return JSON.parse(decodeURIComponent(escape(atob(raw))));
  } catch (e) {
    return {};
  }
};
scwin.enter = async function (e) {
  await scwin.jsLogin();
};
scwin.btn_del_onclick = function (e) {
  scwin.f_DelClick();
};
scwin.initSetVal = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  //README : 로그인 창을 바로 띄웠을때는 pgrId가 없기때문에 스스로(tn_304_03_01b)가 기준이 되고, 
  //          다른 화면에서 로그인데이터가 없어서 이 화면으로 왔을 경우에는 해당 화면이 기준이 된다.
  scwin.pgrId = $c.data.getParameter($p, "pgrId") ?? "tn_304_03_01b";
  scwin.eqCd = $c.data.getParameter($p, "eqCd") ?? "";
  scwin.wrkPlCd = $c.data.getParameter($p, "wrkPlCd") ?? "";
  scwin.lobranCd = $c.data.getParameter($p, "lobranCd") ?? "";
};

//-------------------------------------------------------------------------
// 
//-------------------------------------------------------------------------     
scwin.jsLogin = async function () {
  // f_twinkleBtn("login",0); 

  if (ed_vehclNo.getValue() == null || ed_vehclNo.getValue() == "") {
    await $c.win.alert($p, "&quot;차량번호는 필수입니다.&quot;");
    ed_vehclNo.focus();
    return;
  }
  ;
  await scwin.tr_retrieve();
};
scwin.tr_retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 
//-------------------------------------------------------------------------
scwin.f_Check = function (code) {
  if (code == 'ed_vehclNo') {
    scwin.g_selected_input_box = 'ed_vehclNo';
  }
};

//-------------------------------------------------------------------------
// 
//-------------------------------------------------------------------------     
scwin.f_Click = function (e) {
  //f_twinkleBtn(code,80);
  let code = this.getValue();
  if (scwin.g_selected_input_box == 'ed_vehclNo') {
    if (ed_vehclNo.getValue().length == 4) {
      //사번은 6자리
      return;
    }
    ;
    let value = ed_vehclNo.getValue();
    ed_vehclNo.setValue(value + '' + code);
  }
  ;
};
scwin.f_DelClick = function () {
  //f_twinkleBtn("del");

  if (scwin.g_selected_input_box == 'ed_vehclNo') {
    var value = ed_vehclNo.getValue();
    if (value.length != 0) {
      value = value.substring(0, value.length - 1);
    }
    ed_vehclNo.setValue(value);
  } else if (scwin.g_selected_input_box == 'ed_passwd') {
    var value = ed_passwd.getValue();
    if (value.length != 0) {
      value = value.substring(0, value.length - 1);
    }
    ed_passwd.setValue(value);
  } else if (scwin.g_selected_input_box == 'ed_eqCd') {
    var value = ed_eqCd.getValue();
    if (value.length != 0) {
      value = value.substring(0, value.length - 1);
    }
    ed_eqCd.value.setValue(value);
  }
};
scwin.sbm_retrieve_submitDone = async function () {
  if (ds_outInfo.getRowCount() == 0) {
    await $c.win.alert($p, "차량번호가 존재하지 않습니다.");
    return;
  }
  let eqCd = ds_outInfo.getCellData(0, "eqCd");
  let wrkPlCd = ds_outInfo.getCellData(0, "wrkPlCd");
  let lobranCd = ds_outInfo.getCellData(0, "lobranCd");
  scwin.setCYLoginData({
    wrkPlCd: wrkPlCd,
    lobranCd: lobranCd,
    eqCd: eqCd
  });
  await $c.win.alert($p, "&quot;" + eqCd + '님 안녕하세요?&quot;');
  scwin.movePage(eqCd, wrkPlCd, lobranCd);
};
scwin.movePage = function (eqCd, wrkPlCd, lobranCd) {
  let paramObj = {
    eqCd: eqCd,
    wrkPlCd: wrkPlCd,
    lobranCd: lobranCd,
    pgrId: scwin.pgrId
  };
  let strUrl, menuNm;
  switch (scwin.pgrId) {
    case "tn_304_03_03b":
      strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_03b.xml";
      menuNm = "CY상차실적등록(R/S)";
      break;
    case "tn_304_03_04b":
      strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_04b.xml";
      menuNm = "CY하차실적등록(R/S)";
      break;
    case "tn_304_03_13b":
      strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_13b.xml";
      menuNm = "CY이적등록(R/S)";
      break;
    case "tn_304_03_11b":
      strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_11b.xml";
      menuNm = "CY적재내역등록(R/S)";
      break;
    default:
      strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_02b.xml";
      menuNm = "CY상하차정보조회(R/S)";
      break;
  }
  $c.win.openMenu($p, menuNm, strUrl, scwin.pgrId, paramObj, {
    openAction: "exist",
    mdiTitle: menuNm
  });
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onbeforepageunload':'scwin.unpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'enterGrp',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'pda-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'pda-login'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'input-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'input-wrap-inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'차량번호',class:'title'}},{T:1,N:'xf:input',A:{style:'',id:'ed_vehclNo',placeholder:'차량번호를 입력해 주세요',ref:'data:dma_query.vehclNo','ev:onfocus':'scwin.ed_vehclNo_onfocus'}}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_login',title:'로그인',type:'button',class:'login','ev:onclick':'scwin.jsLogin'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그인'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'keypad'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_7',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'7'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_8',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'8'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_9',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_4',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_5',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_6',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'6'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_1',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_2',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_3',type:'button',class:'','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_0',type:'button',class:'last','ev:onclick':'scwin.f_Click'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_del',type:'button',class:'keypad-del','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]}]})