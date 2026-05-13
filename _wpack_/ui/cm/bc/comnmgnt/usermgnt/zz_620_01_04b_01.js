/*amd /ui/cm/bc/comnmgnt/usermgnt/zz_620_01_04b_01.xml 14603 924815073d2585d4f2bcc6344ad085694a76ce21c854610068f5896b198b20f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_login'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'passwd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'passwdCheckCnt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'isPostponePasswdChg',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blockReason',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_result_list'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'passwd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'newPasswd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'decPasswd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'email',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'zip',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr1',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr2',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userMpNo',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'basisMenuClsCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userBasisPgmId',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'passwdChgCycCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgConfirmCycCd',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oldPasswd',name:'name30',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_login_result'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'passwd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'passwdCheckCnt',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'OUT_GDS1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'/cm.bc.comnmgnt.usermgnt.cmd.UpdateUserPasswordCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"oGDS_result_list","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_saveEmp_submit','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_login',action:'/login.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_login","key":"IN_GDS1"},"OUT_GDS1"]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_login_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){const KEY_REMEMBER = "rememberId";
const KEY_LOGIN_ID = "savedLoginId";
const LOCK_THRESHOLD = 3;
const LOGIN_POPUP_WATCH_KEY = "loginPendingPopupWatch";
const LOGIN_POPUP_OPEN_KEY = "loginLegacyPopupOpen";
var MSG_LO_ERR_001 = "현재비밀번호를 입력하세요.";
var MSG_LO_ERR_002 = "새비밀번호를 입력하세요.";
var MSG_LO_ERR_003 = "새비밀번호확인을 입력하세요.";
var MSG_LO_ERR_004 = "현재비밀번호와 새비밀번호 값이 같습니다. 다른값을 입력하세요.";
var MSG_LO_ERR_005 = "새비밀번호와 새비밀번호확인 값이 다릅니다. 같은값을 입력하세요.";
var MSG_LO_ERR_006 = "입력하신 비밀번호가 다릅니다. 정확히 입력하세요.";
scwin.onpageload = function () {
  // scwin.FROM_LOGIN = $p.getParameter("rowObj").FROM_LOGIN
  // scwin.userId = $p.getParameter("rowObj").userId || "";
  // scwin.decPwd = $p.getParameter("rowObj").passwd || "";

  // if (scwin.FROM_LOGIN) {
  //     scwin.userId = $p.getParameter("rowObj").userId || scwin.userId;
  //     scwin.decPwd = $p.getParameter("rowObj").decPwd || scwin.decPwd;
  // }

  // $c.gus.cfDisableKeyData();
  // txt_userId.setValue(scwin.userId);
  // txt_userNm.setValue(scwin.userNm);

  scwin.popupRow = $p.getParameter("rowObj") || {};
  scwin.userId = scwin.popupRow.userId || "";
  scwin.decPwd = scwin.popupRow.passWd || "";
  scwin.userNm = scwin.popupRow.userNm || "";
  scwin.FROM_LOGIN = scwin.popupRow.FROM_LOGIN || "";
  scwin.loginPopupLookupInProgress = false;
  scwin.vAuthNoYn = "N";
  scwin.toDay = WebSquare.date.getCurrentServerDate();
  scwin.day = WebSquare.date.dateAdd(scwin.toDay, 1);
  if (scwin.userId !== "") {
    txt_userId.setValue(scwin.userId);
    txt_userId.setDisabled(true);
  }
  if (scwin.userNm !== "") {
    txt_userNm.setValue(scwin.userNm);
  }
  if (scwin.FROM_LOGIN && scwin.userId !== "" && scwin.decPwd !== "") {
    scwin.f_retrieveLoginPopupUserInfo();
  }
};
scwin.f_retrieveLoginPopupUserInfo = function () {
  scwin.loginPopupLookupInProgress = true;
  oGDS_login.set("userId", scwin.userId);
  oGDS_login.set("passwd", scwin.decPwd);
  oGDS_login.set("passwdCheckCnt", 1);
  oGDS_login.set("isPostponePasswdChg", 1);
  oGDS_login.set("blockReason", "");
  sbm_login.action = "/cm.bc.comnmgnt.usermgnt.cmd.RetrieveLoginPopupUserInfoCMD.do";
  $c.sbm.execute($p, sbm_login);
};
scwin.resetFailureCount = function () {
  scwin.failedPasswordCount = 0;
};
scwin.clearPendingLoginPopup = function () {
  scwin.pendingLoginPopupType = "";
  scwin.pendingLoginPopupAlertSeen = false;
  scwin.pendingLoginPopupAlertClosed = false;
  scwin.pendingLoginPopupReady = true;
  $c.util.clearInterval($p, LOGIN_POPUP_WATCH_KEY);
  $c.util.clearTimeout($p, LOGIN_POPUP_OPEN_KEY);
};
scwin.applyLoginStorage = function (userInfo) {
  ["coClsCd", "privAdmin", "coCd", "userHomeClsCd", "userClsCd", "userId", "userNm", "empNo", "email", "lobranCd"].forEach(function (key) {
    if (typeof userInfo[key] !== "undefined" && userInfo[key] !== null) {
      WebSquare.localStorage.setItem(key, userInfo[key]);
    }
  });
  let sysCd = userInfo.userClsCd;
  if (sysCd === "01") {
    sysCd = userInfo.userHomeClsCd;
    if (userInfo.coCd === "017") {
      sysCd = "LA";
    }
    if (!sysCd) {
      sysCd = "CM";
    }
  }
  if (sysCd) {
    WebSquare.localStorage.setItem("sysCd", sysCd);
  }
};
scwin.sbm_login_submitdone = async function (e) {
  // data:json,{"id":"oGDS_login_result","key":"OUT_GDS1"}
  const response = e.responseJSON;
  if (scwin.loginPopupLookupInProgress) {
    scwin.loginPopupLookupInProgress = false;
    const userInfo = response && response.OUT_GDS1 && response.OUT_GDS1.length > 0 ? response.OUT_GDS1[0] : null;
    sbm_login.action = "/login.do";
    scwin.userNm = userInfo && userInfo.userNm ? userInfo.userNm : "";
    txt_userId.setValue(scwin.userId);
    txt_userId.setDisabled(true);
    txt_userNm.setValue(scwin.userNm);
    txt_userNm.setDisabled(true);
    return;
  }
  scwin.loginAttemptInProgress = false;
  const result = response && response.resultDataSet ? response.resultDataSet[0] : null;
  if (!result) {
    location.href = "/error.html";
    return;
  }
  if (result.Msg === "SUCC" && response.OUT_GDS1 && response.OUT_GDS1.length > 0) {
    const userInfo = response.OUT_GDS1[0];
    scwin.resetFailureCount();
    scwin.clearPendingLoginPopup();
    scwin.applyLoginStorage(userInfo);

    // 1. 부모 창의 주소를 변경
    // location.href = "/websquare/websquare.html?w2xPath=/ui/main/index.xml";
    window.opener.location.href = "/websquare/websquare.html?w2xPath=/ui/main/index.xml";

    // 2. 현재 팝업 창을 닫음
    window.close();
    return;
  }
  location.href = "/error.html";
};

//-------------------------------------------------------------------------
// 저장 : 
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  let ret = await scwin.f_ReqFieldChk();
  if (ret) {
    let confirmVal = $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmVal) {
      $c.sbm.execute($p, sbm_saveEmp); // tr_saveEmp.Post();
    }
  }
};
scwin.f_Next = function () {
  oGDS_login.set("userId", txt_userId.getValue());
  oGDS_login.set("passwd", scwin.decPwd);
  oGDS_login.set("passwdCheckCnt", 1);
  oGDS_login.set("isPostponePasswdChg", 1);
  var rtnList = new Array();
  rtnList[0] = oGDS_login.get("userId");
  rtnList[1] = oGDS_login.get("passwd");
  rtnList[2] = oGDS_login.get("passwdCheckCnt");
  rtnList[3] = oGDS_login.get("isPostponePasswdChg");
  $c.sbm.execute($p, sbm_login); //     tr_login.Post();
};
scwin.f_ReqFieldChk = async function () {
  //필수입력항목 체크
  // var passwd = "<%=userDto.getDecPasswd()%>";

  var passwd = scwin.decPwd;
  var newPasswd = txt_newPasswd.getValue().trim();
  var confirmPasswd = txt_confirmPasswd.getValue().trim();
  if (newPasswd == "") {
    $c.win.alert($p, MSG_LO_ERR_002);
    return false;
  }
  if (confirmPasswd == "") {
    $c.win.alert($p, MSG_LO_ERR_003);
    return false;
  }
  if (newPasswd != confirmPasswd) {
    $c.win.alert($p, MSG_LO_ERR_005);
    return false;
  }
  let checkVal = scwin.f_passwordCheck(txt_userId.getValue(), newPasswd);
  if (!checkVal) {
    txt_newPasswd.focus();
    return false;
  }
  if (passwd == newPasswd) {
    $c.win.alert($p, MSG_LO_ERR_004);
    return false;
  }
  return true;
};
scwin.f_passwordCheck = function (vUserId, vPassword) {
  var iLen = vPassword.length;
  var engCnt = $c.gus.cfisEnglishCnt($p, vPassword);
  var numCnt = $c.gus.cfisNumberCnt($p, vPassword);
  if ($c.gus.cfnumChainChk($p, vPassword)) {
    $c.win.alert($p, "비밀번호는 연속 또는 동일한  숫자 3자리 이상 사용할 수 없습니다.");
    return false;
  }
  if (iLen < 10) {
    $c.win.alert($p, "비밀번호는 10자리 이상이어야 합니다.");
    return false;
  }
  if (engCnt == 0 || numCnt == 0) {
    $c.win.alert($p, "비밀번호는 영어+숫자 조합이어야 합니다.");
    return false;
  }
  if (vUserId == vPassword) {
    $c.win.alert($p, "사용자ID를 비밀번호로 사용할  수  없습니다.");
    return false;
  }
  return true;
};
scwin.jsLogin = async function () {
  oGDS_login.set("userId", txt_userId.getValue());
  oGDS_login.set("passwd", txt_newPasswd.getValue());
  oGDS_login.set("passwdCheckCnt", 1);
  $c.sbm.execute($p, sbm_login); //     tr_login.Post();
};
scwin.sbm_saveEmp_submit = function (e) {
  oGDS_result_list.set("userId", txt_userId.getValue());
  oGDS_result_list.set("userNm", txt_userNm.getValue());
  oGDS_result_list.set("newPasswd", txt_newPasswd.getValue());
};
scwin.sbm_saveEmp_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  await scwin.jsLogin();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'비밀번호변경',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용자ID',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_userId',placeholder:'',class:'',maxlength:'50',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용자명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_userNm',placeholder:'',class:'',maxlength:'50',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'새비밀번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'txt_newPasswd',placeholder:'',class:'',maxlength:'12',type:'password'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'새비밀번호 확인',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:200px;',id:'txt_confirmPasswd',placeholder:'',class:'',maxlength:'12',type:'password'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_edit',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.f_Next'},E:[{T:1,N:'xf:label',E:[{T:3,text:'다음에'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]}]}]}]}]}]}]}]})