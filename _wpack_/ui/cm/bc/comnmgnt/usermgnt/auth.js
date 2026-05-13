/*amd /ui/cm/bc/comnmgnt/usermgnt/auth.xml 10862 60fb655dcbdd66c48ae66323782e64f1dcc9571d47a8b364c98d577021449410 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seqNo',name:'seqNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndNo',name:'sndNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvNo',name:'rcvNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'authNo',name:'authNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'authAvailDtm',name:'authAvailDtm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_confirm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rcvNo',name:'rcvNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvNo2',name:'rcvNo2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'authNo',name:'authNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'authNo',name:'authNo',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.comnmgnt.usermgnt.cmd.RetrieveAuthNoCheckCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_confirm","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.comnmgnt.usermgnt.cmd.CreateAuthNoInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.getLoginInfo = function () {
  var loginInfo = {};
  var mergeLoginInfo = function (param) {
    if (!param || typeof param !== "object") {
      return;
    }
    if (param.loginInfo && typeof param.loginInfo === "object") {
      Object.assign(loginInfo, param.loginInfo);
    } else if (param.data && param.data.loginInfo && typeof param.data.loginInfo === "object") {
      Object.assign(loginInfo, param.data.loginInfo);
    } else if (param.data && typeof param.data === "object" && (param.data.userMpNo || param.data.userMpNo2)) {
      Object.assign(loginInfo, param.data);
    } else {
      Object.assign(loginInfo, param);
    }
  };
  try {
    mergeLoginInfo($c.data.getMemInfo($p));
  } catch (e) {}
  try {
    mergeLoginInfo($p.getParameter("param"));
  } catch (e) {}
  try {
    mergeLoginInfo($p.getParameter("paramData"));
  } catch (e) {}
  try {
    var allParam = $p.getAllParameter() || {};
    mergeLoginInfo(allParam.param);
    mergeLoginInfo(allParam.paramData);
    if (allParam.dataObject && allParam.dataObject.data) {
      mergeLoginInfo(allParam.dataObject.data);
    }
  } catch (e) {}
  try {
    var savedLoginInfo = WebSquare.localStorage.getItem("loginAuthPopupInfo");
    if (savedLoginInfo) {
      mergeLoginInfo(JSON.parse(savedLoginInfo));
    }
  } catch (e) {}
  return loginInfo;
};
scwin.memJson = {};
scwin.mobile = "";
scwin.mobile2 = "";
scwin.minute = 5;
scwin.second = 00;
scwin.end = 0;
scwin.initLoginInfo = function () {
  scwin.memJson = scwin.getLoginInfo();
  scwin.mobile = String(scwin.memJson.userMpNo || "").replace(/-/g, "");
  scwin.mobile2 = String(scwin.memJson.userMpNo2 || "").replace(/-/g, "");
};
scwin.ensureLoginInfo = function () {
  if (!scwin.mobile && !scwin.mobile2) {
    scwin.initLoginInfo();
  }
};
scwin.hasMobileNo = function () {
  scwin.ensureLoginInfo();
  return scwin.mobile != "" && scwin.mobile != "null" || scwin.mobile2 != "" && scwin.mobile2 != "null";
};
scwin.onpageload = function () {
  scwin.initLoginInfo();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!scwin.hasMobileNo()) {
    $c.win.alert($p, "인증번호를 전송할 휴대폰번호가 없습니다.");
    return false;
  }
  ds_condition.removeAll();
  if (scwin.mobile != "" && scwin.mobile != "null") {
    ds_condition.insertRow(0);
    ds_condition.setCellData(0, "rcvNo", scwin.mobile);
    if (scwin.mobile2 != "" && scwin.mobile2 != "null") {
      ds_condition.insertRow(1);
      ds_condition.setCellData(1, "rcvNo", scwin.mobile2);
    }
  } else {
    if (scwin.mobile2 != "" && scwin.mobile2 != "null") {
      ds_condition.setCellData(0, "rcvNo", scwin.mobile2);
    } else {
      return;
    }
  }
  // tr_save.post();
  try {
    await $c.sbm.execute($p, sbm_save);
  } catch (e) {
    $c.win.alert($p, "인증번호 전송에 실패했습니다.");
    return false;
  }
  return true;
};

// //-------------------------------------------------------------------------
// // 조회
// //-------------------------------------------------------------------------
scwin.f_checkAuth = async function () {
  var cnt = 0;
  ds_confirm.removeAll();
  if (scwin.hasMobileNo()) {
    // ds_confirm.NameValue(1, "authNo")  =  txt_autnNo.value;
    // ds_confirm.NameValue(1, "rcvNo")  =  scwin.mobile;
    // ds_confirm.NameValue(1, "rcvNo2")  =  scwin.mobile2;	        		
    // tr_retrieve.post();
    ds_confirm.insertRow(0);
    ds_confirm.setCellData(0, "authNo", ed_autnNo.getValue());
    ds_confirm.setCellData(0, "rcvNo", scwin.mobile);
    ds_confirm.setCellData(0, "rcvNo2", scwin.mobile2);
    await $c.sbm.execute($p, sbm_retrieve);
  }
  if (ds_result.getRowCount() > 0) {
    cnt++;
  }
  if (cnt == 0) {
    try {
      WebSquare.localStorage.removeItem("loginAuthPopupInfo");
    } catch (e) {}
    window.returnValue = "1";
    $c.win.closePopup($p, "1");
  } else {
    try {
      WebSquare.localStorage.removeItem("loginAuthPopupInfo");
    } catch (e) {}
    window.returnValue = "0";
    $c.win.closePopup($p, "0");
  }
};
scwin.f_TimerCount = function () {
  if (scwin.second == 00) {
    scwin.minute = scwin.minute - 1;
    scwin.second = 59;
  } else {
    scwin.second = scwin.second - 1;
  }
  if (scwin.minute < 0 && scwin.end == 0) {
    scwin.end = 1;
    Promise.resolve($c.win.alert($p, "인증시간이 지났습니다.")).then(function () {
      try {
        WebSquare.localStorage.removeItem("loginAuthPopupInfo");
      } catch (e) {}
      window.returnValue = "1";
      $c.win.closePopup($p, "1");
    });
    return;
  }
  ed_min.setValue(0 + scwin.minute.toString());
  if (scwin.second < 10) {
    ed_secs.setValue(0 + scwin.second.toString());
  } else {
    ed_secs.setValue(scwin.second);
  }
  // setTimeout("f_TimerCount()", 1000);
  $p.setTimeout(function () {
    scwin.f_TimerCount();
  }, {
    "delay": 1000
  });
};

//-------------------------------------------------------------------------
// 전송   20200421 sh1004dd 인증전송문자 보내는 버튼 추가
//-------------------------------------------------------------------------
scwin.f_smsSend = async function () {
  let flage = await scwin.f_Save();
  if (flage != false) {
    scwin.f_TimerCount();
  }
};
scwin.btn_close_onclick = function (e) {
  try {
    WebSquare.localStorage.removeItem("loginAuthPopupInfo");
  } catch (e) {}
  window.returnValue = "1";
  $c.win.closePopup($p, "1");
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return false;
  } else {
    return true;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box vam',id:'',style:'margin-top:20px;'},E:[{T:1,N:'w2:textbox',A:{class:'fs16 bold tac',escape:'false',id:'',label:'고객님의 휴대폰으로 전송된 <span class="txt-blue">인증번호를 정확히 입력</span>하신 후<br/><span class="txt-blue">인증확인</span> 버튼을 눌러주세요.',style:''}},{T:1,N:'xf:group',A:{class:'tbbox mt16',id:'',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인증번호입력',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 120px;',id:'ed_autnNo',class:'',dataType:'number',mandatory:'true',title:'인증번호확인',maxByteLength:'6'}},{T:1,N:'xf:input',A:{style:'width: 60px',id:'ed_min',class:'tac'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:':',class:'',escape:'false'}},{T:1,N:'xf:input',A:{style:'width: 60px;',id:'ed_secs',class:'tac'}}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot',escape:'false',id:'',label:'휴대폰번호로 인증번호가 도착하지 않을시 휴대폰 설정에 따라 스팸메세지함으로 전송될 수 있으니 스팸메세지함을 확인하시기 바랍니다. ',style:'margin-top:50px;'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_smsSend',style:'',type:'button',objType:'bUpdate','ev:onclick':'scwin.f_smsSend'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인증전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_checkAuth',style:'',type:'button',objType:'bUpdate','ev:onclick':'scwin.f_checkAuth'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인증확인'}]}]}]}]}]}]}]})