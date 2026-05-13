/*amd /ui/main/login.xml 26054 bc37f2a787d55ea98951b1d7fa589ef9dd7f442ea9fc4202962df9684f476734 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_login',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwd',name:'passwd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwdCheckCnt',name:'passwdCheckCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'isPostponePasswdChg',name:'isPostponePasswdChg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blockReason',name:'blockReason',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_loginfail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'OUT_GDS1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_login',action:'/login.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_login","key":"IN_GDS1"},"OUT_GDS1"]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_login_submitdone','ev:submiterror':'scwin.sbm_login_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_loginfail',action:'/cm.bc.comnmgnt.usermgnt.cmd.UpdateUserPasswordCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_loginfail","key":"IN_GDS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sbm_loginfail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_logout',action:'/logout.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_logout_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){const KEY_REMEMBER = "rememberId";
const KEY_LOGIN_ID = "savedLoginId";
const KEY_LOGIN_AUTH_POPUP_INFO = "loginAuthPopupInfo";
const LOCK_THRESHOLD = 3;
const LOGIN_POPUP_WATCH_KEY = "loginPendingPopupWatch";
const LOGIN_POPUP_OPEN_KEY = "loginLegacyPopupOpen";
scwin.failedPasswordCount = 0;
scwin.loginAttemptInProgress = false;
scwin.pendingLoginPopupType = "";
scwin.pendingLoginPopupAlertSeen = false;
scwin.pendingLoginPopupAlertClosed = false;
scwin.pendingLoginPopupReady = true;
scwin.pendingLoginPopupUserId = "";
scwin.pendingLoginPopupPasswd = "";
scwin.onpageload = function () {
  scwin.failedPasswordCount = 0;
  scwin.clearPendingLoginPopup();
  WebSquare.localStorage.removeItem(KEY_LOGIN_AUTH_POPUP_INFO);
  $c.sbm.execute($p, sbm_logout);
  const hostname = window.location.hostname;
  const serverMode = hostname.includes("newdevdebis.dongwon.com") ? "dev" : hostname.includes("newtestdebis.dongwon.com") ? "test" : hostname.includes("newdebis.dongwon.com") ? "prd" : "local";
  if (serverMode === "local") {
    txt_id.setValue("inswave");
    txt_pwd.setValue("inswave1");
  }
  scwin.loadRememberedId();
  scwin.attachLoginEnter();
  btn_trigger1.focus();
};
scwin.__loginEnterHandler = function (e) {
  const isCapsOn = e.getModifierState && e.getModifierState("CapsLock");
  tbx_capslock.setValue(isCapsOn ? "켜짐" : "꺼짐");
};
scwin.loadRememberedId = function () {
  const remember = WebSquare.localStorage.getItem(KEY_REMEMBER);
  const savedId = WebSquare.localStorage.getItem(KEY_LOGIN_ID) || "";
  chk_rememberId.setValue(remember === "Y" ? "Y" : "N");
  if (remember === "Y" && savedId) {
    txt_id.setValue(savedId);
  }
};
scwin.saveRememberedId = function () {
  if (chk_rememberId.getValue() === "Y") {
    WebSquare.localStorage.setItem(KEY_REMEMBER, "Y");
    WebSquare.localStorage.setItem(KEY_LOGIN_ID, txt_id.getValue() || "");
  } else {
    WebSquare.localStorage.setItem(KEY_REMEMBER, "N");
    WebSquare.localStorage.removeItem(KEY_LOGIN_ID);
  }
};
scwin.clearLoginStorage = function () {
  ["coClsCd", "privAdmin", "sysAdminYn", "coCd", "userHomeClsCd", "userClsCd", "userId", "userNm", "empNo", "email", "lobranCd", "sysCd"].forEach(function (key) {
    WebSquare.localStorage.removeItem(key);
  });
};
scwin.sbm_logout_submitdone = function () {
  scwin.clearLoginStorage();
};
scwin.resetFailureCount = function () {
  scwin.failedPasswordCount = 0;
};
scwin.clearPendingLoginPopup = function () {
  scwin.pendingLoginPopupType = "";
  scwin.pendingLoginPopupAlertSeen = false;
  scwin.pendingLoginPopupAlertClosed = false;
  scwin.pendingLoginPopupReady = true;
  scwin.pendingLoginPopupUserId = "";
  scwin.pendingLoginPopupPasswd = "";
  $c.util.clearInterval($p, LOGIN_POPUP_WATCH_KEY);
  $c.util.clearTimeout($p, LOGIN_POPUP_OPEN_KEY);
};
scwin.getLoginErrorMessage = function (response) {
  if (response && response.resultDataSet && response.resultDataSet[1] && response.resultDataSet[1].Msg) {
    return response.resultDataSet[1].Msg;
  }
  if (response && response.rsMsg) {
    if (response.rsMsg.message) {
      return response.rsMsg.message;
    }
    if (response.rsMsg.statusMsg) {
      return response.rsMsg.statusMsg;
    }
  }
  if (response && response.resultDataSet && response.resultDataSet[0] && response.resultDataSet[0].Msg && response.resultDataSet[0].Msg !== "FAIL") {
    return response.resultDataSet[0].Msg;
  }
  return "아이디 또는 비밀번호가 올바르지 않습니다.";
};
scwin.hasErrorCode = function (message, codes) {
  const text = message || "";
  return codes.some(function (code) {
    return text.indexOf(code) > -1;
  });
};
scwin.isCredentialFailureMessage = function (message) {
  return scwin.hasErrorCode(message, ["E0009", "E0100"]);
};
scwin.isLockedMessage = function (message) {
  return scwin.hasErrorCode(message, ["E0026", "E0040", "E0101", "E0102"]);
};
scwin.isPasswordChangeRequiredMessage = function (message) {
  return scwin.hasErrorCode(message, ["E0043"]);
};
scwin.isPasswordResetMessage = function (message) {
  return scwin.hasErrorCode(message, ["E0025", "E0039"]);
};
scwin.buildLoginPayload = function (userId, passwd, options) {
  const payload = {
    userId: userId,
    passwd: passwd,
    passwdCheckCnt: scwin.failedPasswordCount + 1,
    isPostponePasswdChg: 0,
    blockReason: ""
  };
  Object.keys(options || {}).forEach(function (key) {
    payload[key] = options[key];
  });
  return payload;
};
scwin.applyLoginStorage = function (userInfo) {
  ["coClsCd", "privAdmin", "sysAdminYn", "coCd", "userHomeClsCd", "userClsCd", "userId", "userNm", "empNo", "email", "lobranCd"].forEach(function (key) {
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
scwin.lockCurrentUser = async function (userId) {
  if (!userId) {
    return;
  }
  ds_loginfail.setJSON([{
    userId: userId
  }]);
  try {
    await $c.sbm.execute($p, sbm_loginfail);
  } catch (e) {
    console.log(e);
  }
};
scwin.sbm_loginfail_submiterror = function (e) {
  console.log(e);
};
scwin.getPopupScopes = function () {
  const scopeList = [];
  const addScope = function (scopeApi) {
    if (scopeApi && scopeList.indexOf(scopeApi) === -1) {
      scopeList.push(scopeApi);
    }
  };
  addScope($p);
  try {
    addScope($p.main());
  } catch (e) {}
  try {
    addScope($p.top());
  } catch (e) {}
  return scopeList;
};
scwin.getPopupWindowById = function (popupId) {
  if (!popupId) {
    return null;
  }
  const scopeList = scwin.getPopupScopes();
  for (let i = 0; i < scopeList.length; i += 1) {
    try {
      const popupWindow = scopeList[i].getPopupWindow(popupId);
      if (popupWindow) {
        return popupWindow;
      }
    } catch (e) {}
  }
  return null;
};
scwin.findCommonMessagePopup = function () {
  const scopeList = scwin.getPopupScopes();
  for (let i = 0; i < scopeList.length; i += 1) {
    let popupList = [];
    try {
      if (typeof scopeList[i].getAllPopupList === "function") {
        popupList = scopeList[i].getAllPopupList() || [];
      } else if (typeof scopeList[i].getPopupWindowList === "function") {
        popupList = scopeList[i].getPopupWindowList() || [];
      }
    } catch (e) {
      popupList = [];
    }
    for (let j = popupList.length - 1; j >= 0; j -= 1) {
      const popupItem = popupList[j];
      const popupId = popupItem && popupItem.id ? popupItem.id : popupItem;
      const popupWindow = scwin.getPopupWindowById(popupId);
      if (!popupWindow || !popupWindow.$p) {
        continue;
      }
      let messageType = "";
      try {
        messageType = $c.data.getParameter($p, "messageType", popupWindow.$p) || "";
      } catch (e) {
        messageType = "";
      }
      if (messageType === "alert" || messageType === "confirm") {
        return {
          id: popupId,
          messageType: messageType
        };
      }
    }
  }
  return null;
};
scwin.finishPendingLoginPopup = function () {
  if (!scwin.pendingLoginPopupType || !scwin.pendingLoginPopupAlertClosed || !scwin.pendingLoginPopupReady) {
    return;
  }
  const popupType = scwin.pendingLoginPopupType;
  const popupUserId = scwin.pendingLoginPopupUserId;
  const popupPasswd = scwin.pendingLoginPopupPasswd;
  scwin.clearPendingLoginPopup();
  scwin.pendingLoginPopupUserId = popupUserId;
  scwin.pendingLoginPopupPasswd = popupPasswd;
  scwin.queueLegacyPopup(popupType);
};
scwin.watchPendingLoginPopup = function () {
  if (!scwin.pendingLoginPopupType) {
    $c.util.clearInterval($p, LOGIN_POPUP_WATCH_KEY);
    return;
  }
  const messagePopup = scwin.findCommonMessagePopup();
  if (messagePopup) {
    scwin.pendingLoginPopupAlertSeen = true;
    return;
  }
  if (scwin.pendingLoginPopupAlertSeen) {
    scwin.pendingLoginPopupAlertClosed = true;
    $c.util.clearInterval($p, LOGIN_POPUP_WATCH_KEY);
    scwin.finishPendingLoginPopup();
  }
};
scwin.scheduleLegacyPopupAfterCommonAlert = function (popupType, readyPromise) {
  if (!popupType) {
    return;
  }
  const popupUserId = scwin.pendingLoginPopupUserId;
  const popupPasswd = scwin.pendingLoginPopupPasswd;
  scwin.clearPendingLoginPopup();
  scwin.pendingLoginPopupUserId = popupUserId;
  scwin.pendingLoginPopupPasswd = popupPasswd;
  scwin.pendingLoginPopupType = popupType;
  scwin.pendingLoginPopupReady = false;
  const markReady = function () {
    if (!scwin.pendingLoginPopupType) {
      return;
    }
    scwin.pendingLoginPopupReady = true;
    scwin.finishPendingLoginPopup();
  };
  if (readyPromise && typeof readyPromise.then === "function") {
    readyPromise.then(markReady, markReady);
  } else {
    markReady();
  }
  scwin.watchPendingLoginPopup();
  $c.util.setInterval($p, scwin.watchPendingLoginPopup, {
    delay: 50,
    key: LOGIN_POPUP_WATCH_KEY
  });
};
scwin.openLegacyPopup = async function (type) {
  let popupUrl = "/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_11b.xml";
  const popupUserId = scwin.pendingLoginPopupUserId || (txt_id.getValue() || "").trim();
  const popupPasswd = scwin.pendingLoginPopupPasswd || txt_pwd.getValue() || "";
  let popupData = null;
  const options = {
    id: type === "1" ? "unlockAccountPopup" : "resetPasswordPopup",
    popupName: type === "1" ? "계정잠금해제" : "비밀번호 변경",
    type: "browserPopup",
    width: "600px",
    height: "480px",
    top: "140px",
    left: "500px",
    modal: true,
    frameModal: "",
    alwaysOnTop: true,
    useModalStack: false,
    resizable: false,
    useMaximize: false,
    className: "",
    scrollbars: true,
    windowDragMove: true,
    windowMoveType: "overflow",
    minVisibleWindowPixel: 20,
    dataObject: {
      type: "json",
      data: {
        type: type
      },
      name: "rowObj"
    }
  };
  if (type === "3") {
    options.id = "changePasswordFromLoginPopup";
    options.popupName = "비밀번호 변경";
    options.dataObject = {
      type: "json",
      data: {
        FROM_LOGIN: "TRUE",
        userId: popupUserId,
        passWd: popupPasswd
      },
      name: "rowObj"
    };
    options.width = "500px";
    options.height = "250px";
    popupUrl = "/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_04b_02.xml";
  }
  if (type === "4") {
    options.id = "changePasswordSoonPopup";
    options.popupName = "비밀번호 변경";
    delete options.dataObject;
    popupData = {
      FROM_LOGIN: "TRUE",
      userId: popupUserId,
      passWd: popupPasswd
    };
    options.width = "500px";
    options.height = "250px";
    popupUrl = "/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_04b_01.xml";
  }
  if (scwin.getPopupWindowById(options.id)) {
    return;
  }
  if (type === "3") {
    await $p.openPopup(popupUrl, options);
  } else if (popupData) {
    await $c.win.openPopup($p, popupUrl, options, popupData);
  } else {
    await $p.openPopup(popupUrl, options);
  }
  scwin.pendingLoginPopupUserId = "";
  scwin.pendingLoginPopupPasswd = "";
};
scwin.queueLegacyPopup = function (popupType) {
  if (!popupType) {
    return;
  }
  scwin.pendingLoginPopupType = popupType;
  $c.util.setTimeout($p, function () {
    const queuedPopupType = scwin.pendingLoginPopupType;
    scwin.pendingLoginPopupType = "";
    if (!queuedPopupType) {
      return;
    }
    scwin.openLegacyPopup(queuedPopupType);
  }, {
    delay: 10,
    key: "loginLegacyPopupOpen"
  });
};
scwin.getLoginErrorAlertOptions = function (message) {
  if (scwin.isLockedMessage(message)) {
    return {
      closeCallbackFncName: scwin.onLoginErrorAlertClosed,
      callBackParam: {
        popupType: "1"
      }
    };
  }
  if (scwin.isPasswordChangeRequiredMessage(message)) {
    return {
      closeCallbackFncName: scwin.onLoginErrorAlertClosed,
      callBackParam: {
        popupType: "3"
      }
    };
  }
  if (scwin.isPasswordResetMessage(message)) {
    return {
      closeCallbackFncName: scwin.onLoginErrorAlertClosed,
      callBackParam: {
        popupType: "2"
      }
    };
  }
  const submittedFailCount = parseInt(ds_login.getCellData(0, "passwdCheckCnt"), 10);
  const failCount = isNaN(submittedFailCount) ? scwin.failedPasswordCount + 1 : submittedFailCount;
  if (scwin.isCredentialFailureMessage(message) && failCount >= LOCK_THRESHOLD) {
    return {
      closeCallbackFncName: scwin.onLoginErrorAlertClosed,
      callBackParam: {
        popupType: "1"
      }
    };
  }
  return null;
};
scwin.resolveSubmissionErrorAlertOptions = function (resObj, sbmObj) {
  if (!sbmObj || sbmObj.id !== "sbm_login") {
    return null;
  }
  const response = resObj ? resObj.responseJSON : null;
  const message = scwin.getLoginErrorMessage(response);
  if (!message) {
    return null;
  }
  return scwin.getLoginErrorAlertOptions(message);
};
scwin.onLoginErrorAlertClosed = function (popupInfo) {
  const popupType = popupInfo && popupInfo.popupType;
  if (!popupType) {
    return;
  }
  scwin.queueLegacyPopup(popupType);
};
scwin.openAuthPopup = async function (userInfo) {
  try {
    WebSquare.localStorage.setItem(KEY_LOGIN_AUTH_POPUP_INFO, JSON.stringify({
      userId: userInfo.userId || "",
      userMpNo: userInfo.userMpNo || "",
      userMpNo2: userInfo.userMpNo2 || ""
    }));
  } catch (e) {}
  return await $c.win.openPopup($p, "/ui/cm/bc/comnmgnt/usermgnt/auth.xml", {
    id: "loginAuthPopup",
    popupName: "SMS 인증",
    type: "browserPopup",
    width: 520,
    height: 360,
    modal: true,
    resizable: false,
    useMaximize: false
  }, {
    loginInfo: userInfo
  });
};
scwin.openUserMpNoPopup = async function (userInfo) {
  return await $c.win.openPopup($p, "/ui/cm/bc/comnmgnt/usermgnt/userMpNo.xml", {
    id: "loginUserMpNoPopup",
    popupName: "휴대폰 번호 등록",
    type: "browserPopup",
    width: 520,
    height: 340,
    modal: true,
    resizable: false,
    useMaximize: false,
    dataObject: {
      type: "json",
      data: {
        loginInfo: userInfo
      },
      name: "param"
    }
  });
};
scwin.isLoginAuthRequired = function (userInfo) {
  return String(userInfo.sysAdminYn || "") === "1" || String(userInfo.privAdmin || "") === "T";
};
scwin.retrieveSmsCount = async function (userInfo) {
  const userMpNo = (userInfo.userMpNo || "").trim();
  const submissionObj = {
    id: "sbm_smsCount",
    action: "/cm.bc.comnmgnt.usermgnt.cmd.RetrieveSmsCountCMD.do",
    method: "post",
    mediatype: "application/json",
    encoding: "UTF-8"
  };
  try {
    const e = await $c.sbm.executeDynamic($p, submissionObj, {
      IN_DS1: [{
        rcvNo: userMpNo
      }],
      OUT_DS1: []
    });
    const smsCountInfo = e && e.responseJSON && e.responseJSON.OUT_DS1 && e.responseJSON.OUT_DS1[0];
    const count = parseInt(smsCountInfo ? smsCountInfo.count : "", 10);
    return isNaN(count) ? 0 : count;
  } catch (e) {
    return 0;
  }
};
scwin.handlePostLoginChecks = async function (userInfo) {
  if (!scwin.isLoginAuthRequired(userInfo)) {
    return true;
  }
  const smsCount = await scwin.retrieveSmsCount(userInfo);
  if (smsCount >= 4) {
    return true;
  }
  const passPopUpWin = await scwin.openAuthPopup(userInfo);
  WebSquare.localStorage.removeItem(KEY_LOGIN_AUTH_POPUP_INFO);
  if (passPopUpWin != "0") {
    await $c.win.alert($p, "유효하지 않은 인증번호입니다.");
    await $c.sbm.execute($p, sbm_logout);
    return false;
  }
  return true;
};
scwin.handleLoginFailure = async function (message) {
  if (scwin.isLockedMessage(message)) {
    scwin.scheduleLegacyPopupAfterCommonAlert("1");
    scwin.resetFailureCount();
    txt_pwd.setValue("");
    txt_id.focus();
    return;
  }
  if (scwin.isPasswordChangeRequiredMessage(message)) {
    scwin.pendingLoginPopupUserId = (txt_id.getValue() || "").trim();
    scwin.pendingLoginPopupPasswd = txt_pwd.getValue() || "";
    scwin.scheduleLegacyPopupAfterCommonAlert("3");
    scwin.resetFailureCount();
    txt_pwd.setValue("");
    txt_id.focus();
    return;
  }
  if (scwin.isPasswordResetMessage(message)) {
    scwin.pendingLoginPopupUserId = (txt_id.getValue() || "").trim();
    scwin.pendingLoginPopupPasswd = txt_pwd.getValue() || "";
    scwin.scheduleLegacyPopupAfterCommonAlert("2");
    scwin.resetFailureCount();
    txt_pwd.setValue("");
    txt_id.focus();
    return;
  }
  if (scwin.isCredentialFailureMessage(message)) {
    scwin.failedPasswordCount += 1;
    const submittedFailCount = parseInt(ds_login.getCellData(0, "passwdCheckCnt"), 10);
    const failCount = isNaN(submittedFailCount) ? scwin.failedPasswordCount : submittedFailCount;
    if (failCount >= LOCK_THRESHOLD) {
      const lockPromise = scwin.lockCurrentUser((txt_id.getValue() || "").trim());
      scwin.scheduleLegacyPopupAfterCommonAlert("1", lockPromise);
      await lockPromise;
      scwin.resetFailureCount();
    }
    txt_pwd.setValue("");
    txt_pwd.focus();
    return;
  }
  scwin.resetFailureCount();
  txt_pwd.focus();
};
scwin.sbm_login_submitdone = async function (e) {
  scwin.loginAttemptInProgress = false;
  const response = e.responseJSON;
  const result = response && response.resultDataSet ? response.resultDataSet[0] : null;
  if (!result) {
    location.href = "/error.html";
    return;
  }
  if (result.Msg === "SUCC" && response.OUT_GDS1 && response.OUT_GDS1.length > 0) {
    const userInfo = response.OUT_GDS1[0];
    scwin.resetFailureCount();
    const passed = await scwin.handlePostLoginChecks(userInfo);
    if (!passed) {
      txt_pwd.setValue("");
      txt_pwd.focus();
      return;
    }
    scwin.clearPendingLoginPopup();
    scwin.applyLoginStorage(userInfo);
    location.href = "/websquare/websquare.html?w2xPath=/ui/main/index.xml";
    return;
  }
  if (result.Msg === "FAIL") {
    await scwin.handleLoginFailure(scwin.getLoginErrorMessage(response));
    return;
  }
  location.href = "/error.html";
};
scwin.sbm_login_submiterror = async function () {
  scwin.loginAttemptInProgress = false;
  scwin.clearPendingLoginPopup();
  txt_pwd.focus();
};
scwin.btn_trigger1_onclick = async function () {
  if (scwin.loginAttemptInProgress) {
    return;
  }
  scwin.loginAttemptInProgress = true;
  let submitted = false;
  const userId = (txt_id.getValue() || "").trim();
  const passwd = txt_pwd.getValue() || "";
  try {
    if (!userId) {
      txt_id.focus();
      return;
    }
    if (!passwd) {
      txt_pwd.focus();
      return;
    }
    scwin.clearPendingLoginPopup();
    scwin.saveRememberedId();
    ds_login.setJSON([scwin.buildLoginPayload(userId, passwd)]);
    submitted = true;
    $c.sbm.execute($p, sbm_login);
  } finally {
    if (!submitted) {
      scwin.loginAttemptInProgress = false;
    }
  }
};
scwin.openManualLegacyPopup = async function (type) {
  const options = {
    id: type === "1" ? "unlockAccount" : "resetPassword",
    popupName: type === "1" ? "계정잠금해제" : "비밀번호초기화",
    type: "browserPopup",
    width: "600px",
    height: "480px",
    top: "140px",
    left: "500px",
    modal: true,
    frameModal: "",
    alwaysOnTop: true,
    useModalStack: false,
    resizable: false,
    useMaximize: false,
    className: "",
    scrollbars: true,
    windowDragMove: true,
    windowMoveType: "overflow",
    minVisibleWindowPixel: 20,
    dataObject: {
      type: "json",
      data: {
        type: type
      },
      name: "rowObj"
    }
  };
  if (scwin.getPopupWindowById(options.id)) {
    return;
  }
  await $p.openPopup("/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_11b.xml", options);
};
scwin.attachLoginEnter = function () {
  document.removeEventListener("keydown", scwin.__loginEnterHandler, true);
  document.addEventListener("keydown", scwin.__loginEnterHandler, true);
};
scwin.detachLoginEnter = function () {
  document.removeEventListener("keydown", scwin.__loginEnterHandler, true);
};
scwin.onbeforepageunload = function () {
  scwin.clearPendingLoginPopup();
  scwin.detachLoginEnter();
};
scwin.onkeydown = function (e) {
  const isEnter = e.key === "Enter" || e.keyCode === 13;
  if (!isEnter) {
    return;
  }
  if (typeof e.preventDefault === "function") {
    e.preventDefault();
  }
  if (typeof e.stopPropagation === "function") {
    e.stopPropagation();
  }
  if (typeof e.stopImmediatePropagation === "function") {
    e.stopImmediatePropagation();
  }
  if (typeof e.returnValue !== "undefined") {
    e.returnValue = false;
  }
  if (typeof e.cancelBubble !== "undefined") {
    e.cancelBubble = true;
  }
  scwin.btn_trigger1_onclick();
  return false;
};
scwin.btn_trigger2_onclick = function () {
  scwin.openManualLegacyPopup("2");
};
scwin.btn_trigger3_onclick = function () {
  scwin.openManualLegacyPopup("1");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',class:'debis-login',id:'scwin.unpageload','ev:onbeforepageunload':'scwin.onbeforepageunload'},E:[{T:1,N:'xf:group',A:{class:'login-wrap-debis',id:''},E:[{T:1,N:'xf:group',A:{class:'visual-area',id:''},E:[{T:1,N:'xf:group',A:{class:'visual-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'visual bg01',id:''}},{T:1,N:'xf:group',A:{class:'visual bg02',id:''}},{T:1,N:'xf:group',A:{class:'visual bg03',id:''}},{T:1,N:'xf:group',A:{class:'visual bg04',id:''}}]},{T:1,N:'xf:group',A:{class:'copy',id:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'동원로엑스<br/>통합 시스템',escape:'false',tagname:'p'}},{T:1,N:'w2:textbox',A:{id:'',label:'좋은 파트너를 만나면 물류가 편해집니다.',escape:'false',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'h1'}}]},{T:1,N:'xf:group',A:{class:'login-area',id:''},E:[{T:1,N:'xf:group',A:{class:'login-box',id:''},E:[{T:1,N:'w2:textbox',A:{class:'login-title',id:'',label:'로그인'}},{T:1,N:'xf:input',A:{id:'txt_id',placeholder:'아이디를 입력해 주세요.','ev:onkeydown':'scwin.onkeydown'}},{T:1,N:'xf:group',A:{class:'input_pw',id:''},E:[{T:1,N:'w2:searchbox',A:{id:'txt_pwd',placeholder:'비밀번호를 입력해 주세요.',type:'password','ev:onkeydown':'scwin.onkeydown'}},{T:1,N:'xf:trigger',A:{class:'btn-eye',id:'',style:'display:none;',type:'button'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_trigger1',title:'로그인',type:'button','ev:onclick':'scwin.btn_trigger1_onclick','ev:onkeydown':'scwin.onkeydown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그인'}]}]},{T:1,N:'xf:group',A:{class:'etc-box',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'CapsLock :',escape:'false'}},{T:1,N:'w2:textbox',A:{id:'tbx_capslock',label:'',escape:'false'}}]},{T:1,N:'xf:select',A:{appearance:'full',id:'chk_rememberId',renderType:'checkboxgroup',selectedindex:'-1',class:'tar',cols:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아이디 저장'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'etc-box',id:''},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_trigger3','ev:onclick':'scwin.btn_trigger3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계정잠금해제'}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_trigger2','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비밀번호초기화'}]}]}]}]}]}]}]}]}]})