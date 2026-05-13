/*amd /ui/main/ebiz_index.xml 43431 7bc6de854183758a482f9f3c8461e7cd3f72c4a09180f3a07f8d5be27494aaf9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_login',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwd',name:'passwd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwdCheckCnt',name:'passwdCheckCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'isPostponePasswdChg',name:'isPostponePasswdChg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blockReason',name:'blockReason',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ifSsoYn',name:'ifSsoYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_loginfail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'OUT_GDS1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'OUT_DS1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ssologin'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'empNo',name:'empNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'email',name:'email',dataType:'text'}},{T:1,N:'w2:key',A:{id:'authLoginYn',name:'authLoginYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ssologin_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'decPasswd',name:'decPasswd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_tracking'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'blNo',name:'blNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'cntrNo',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mem'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'id',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'pgmId',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_login',action:'/login.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_login","key":"IN_GDS1"},"OUT_GDS1"]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_login_submitdone','ev:submiterror':'scwin.sbm_login_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_loginfail',action:'/cm.bc.comnmgnt.usermgnt.cmd.UpdateUserPasswordCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_loginfail","key":"IN_GDS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sbm_loginfail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ssologin',action:'/ssologin.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ssologin","key":"IN_GDS1"},{"id":"ds_ssologin_result","key":"OUT_GDS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ssologin_submitdone','ev:submiterror':'scwin.sbm_ssologin_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_logout',action:'/logout.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_logout_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_userAuth',action:'/cm.bc.comnmgnt.privmgnt.RetrieveUserEachScreenPrivilegeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_mem","key":"IN_DS1"},"OUT_DS1"]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){const KEY_REMEMBER = "rememberId";
const KEY_LOGIN_ID = "savedLoginId";
const LOCK_THRESHOLD = 3;
scwin.failedPasswordCount = 0;
scwin.loginAttemptInProgress = false;
scwin.globalVal = {
  CREATE_AUTH: "C",
  RETRIEVE_AUTH: "R",
  UPDATE_AUTH: "U",
  DELETE_AUTH: "D",
  PRINT_AUTH: "P",
  EXCEL_AUTH: "X"
};
scwin.setUserAuth = function () {
  if (typeof sbm_userAuth === "undefined") {
    return Promise.resolve(true);
  }
  var promise = Promise.resolve();
  promise = promise.then(function () {
    return $c.sbm.execute($p, sbm_userAuth);
  }).then(function (e) {
    if (e && e.responseJSON && e.responseJSON.resultDataSet && e.responseJSON.resultDataSet[0]) {
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        if (typeof e.responseJSON.OUT_DS1[0] !== "undefined") {
          scwin.globalVal.CREATE_AUTH = e.responseJSON.OUT_DS1[0].insYn == "1" ? "C" : false;
          scwin.globalVal.RETRIEVE_AUTH = e.responseJSON.OUT_DS1[0].qryYn == "1" ? "R" : false;
          scwin.globalVal.UPDATE_AUTH = e.responseJSON.OUT_DS1[0].modYn == "1" ? "U" : false;
          scwin.globalVal.DELETE_AUTH = e.responseJSON.OUT_DS1[0].delYn == "1" ? "D" : false;
          scwin.globalVal.PRINT_AUTH = e.responseJSON.OUT_DS1[0].prtnYn == "1" ? "P" : false;
          scwin.globalVal.EXCEL_AUTH = e.responseJSON.OUT_DS1[0].xlsDwnldYn == "1" ? "X" : false;
          return true;
        }
      }
    }
    scwin.globalVal.CREATE_AUTH = false;
    scwin.globalVal.RETRIEVE_AUTH = false;
    scwin.globalVal.UPDATE_AUTH = false;
    scwin.globalVal.DELETE_AUTH = false;
    scwin.globalVal.PRINT_AUTH = false;
    scwin.globalVal.EXCEL_AUTH = false;
    return false;
  }).catch(function () {
    scwin.globalVal.CREATE_AUTH = false;
    scwin.globalVal.RETRIEVE_AUTH = false;
    scwin.globalVal.UPDATE_AUTH = false;
    scwin.globalVal.DELETE_AUTH = false;
    scwin.globalVal.PRINT_AUTH = false;
    scwin.globalVal.EXCEL_AUTH = false;
    return false;
  });
  return promise;
};
scwin.popupServices = {
  schedule: {
    id: "pop_scheduleList",
    popupName: "본선 스케줄 조회",
    title: "본선 스케줄 조회",
    url: "/ui/ds/op/rscconfirm/transrscconfirm/op_101_02_04b.xml",
    width: 1200,
    height: 680,
    loginUserId: "csssso"
  },
  portjob: {
    id: "pop_portJobStatus",
    popupName: "PORT JOB STATUS",
    title: "PORT JOB STATUS",
    url: "/ui/ds/op/plism/op_601_01_01b.xml",
    width: 1200,
    height: 780,
    loginUserId: "csssso"
  },
  copino: {
    id: "pop_copinoCheck",
    popupName: "COPINO 송신확인",
    title: "COPINO 송신확인",
    url: "/ui/ds/op/plism/op_601_01_03b.xml",
    width: 1200,
    height: 780,
    loginUserId: "csssso"
  },
  container: {
    id: "pop_containerRetrieve",
    popupName: "컨테이너 화물조회",
    title: "컨테이너 화물조회",
    url: "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml",
    width: 1200,
    height: 780,
    loginUserId: "csssso"
  },
  booking: {
    id: "pop_bookingFollow",
    popupName: "Booking/BL 추적",
    title: "Booking/BL 추적",
    url: "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_03b.xml",
    width: 1200,
    height: 680,
    loginUserId: "csssso"
  },
  freight: {
    id: "pop_freightPrice",
    popupName: "수입화물 비용확인",
    title: "수입화물 비용확인",
    url: "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_04b.xml",
    width: 1200,
    height: 780,
    loginUserId: "csssso"
  }
};
scwin.externalServiceMap = {
  SCHEDULE_LIST: {
    mode: "service",
    serviceKey: "schedule"
  },
  PORT_JOB_STATUS: {
    mode: "service",
    serviceKey: "portjob"
  },
  BOOKING_BL: {
    mode: "service",
    serviceKey: "booking",
    paramKey: "blNo"
  },
  CONTAINER: {
    mode: "service",
    serviceKey: "container",
    paramKey: "cntrNo"
  },
  BOND_TRAN: {
    mode: "service",
    serviceKey: "freight"
  }
};
scwin.onpageload = function () {
  const serverMode = window.location.hostname.includes("newdevdebis.dongwon.com") ? "dev" : window.location.hostname.includes("newdebis.dongwon.com") ? "prd" : "local";
  if (serverMode === "local") {
    txt_userId.setValue("inswave");
    txt_password.setValue("inswave1");
  }
  scwin.loadRememberedId();
  scwin.attachLoginEnter();
  scwin.initializePageState();
};
scwin.__loginEnterHandler = function (e) {
  const isCapsOn = e.getModifierState && e.getModifierState("CapsLock");
  tbx_capslock.setValue(isCapsOn ? "CapsLock ON" : "");
};
scwin.attachLoginEnter = function () {
  document.removeEventListener("keydown", scwin.__loginEnterHandler, true);
  document.addEventListener("keydown", scwin.__loginEnterHandler, true);
};
scwin.detachLoginEnter = function () {
  document.removeEventListener("keydown", scwin.__loginEnterHandler, true);
};
scwin.onbeforepageunload = function () {
  scwin.detachLoginEnter();
};
scwin.initializePageState = function () {
  scwin.startRequest = scwin.resolveStartRequest();
  scwin.startRequestLaunched = false;
  const sabun = scwin.getStartParameter("sabun") || scwin.getStartParameter("empNo");
  if (sabun) {
    scwin.startSabunLogin(sabun);
    return;
  }
  const savedUserId = WebSquare.localStorage.getItem("userId") || "";
  if (savedUserId) {
    scwin.setLoginState(true, savedUserId + "님 환영합니다!");
    scwin.launchStartRequestIfNeeded();
  } else {
    scwin.setLoginState(false);
    if (scwin.startRequest) {
      scwin.launchStartRequestIfNeeded();
      return;
    }
    txt_userId.focus();
  }
};
scwin.getStartParameter = function (key) {
  try {
    const value = $p.getParameter(key);
    if (typeof value !== "undefined" && value !== null && value !== "") {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
  const query = window.location.search ? window.location.search.substring(1) : "";
  if (!query) {
    return "";
  }
  const queryParts = query.split("&");
  for (let idx = 0; idx < queryParts.length; idx++) {
    const pair = queryParts[idx];
    const valueIdx = pair.indexOf("=");
    const queryKey = valueIdx > -1 ? pair.substring(0, valueIdx) : pair;
    if (decodeURIComponent(queryKey) !== key) {
      continue;
    }
    const queryValue = valueIdx > -1 ? pair.substring(valueIdx + 1) : "";
    return decodeURIComponent(queryValue.replace(/\+/g, " "));
  }
  return "";
};
scwin.resolveStartRequest = function () {
  const sysCd = (scwin.getStartParameter("SYS_CD") || "").trim().toUpperCase();
  if (!sysCd) {
    return null;
  }
  const request = scwin.externalServiceMap[sysCd];
  if (!request) {
    return null;
  }
  const resolved = {
    sysCd: sysCd,
    mode: request.mode,
    serviceKey: request.serviceKey,
    params: {}
  };
  if (request.paramKey) {
    const requestValue = (scwin.getStartParameter(request.paramKey) || "").trim();
    if (requestValue) {
      resolved.params[request.paramKey] = requestValue;
    }
  }
  return resolved;
};
scwin.launchStartRequestIfNeeded = function () {
  if (!scwin.startRequest || scwin.startRequestLaunched) {
    return;
  }
  scwin.startRequestLaunched = true;
  scwin.executeExternalRequest(scwin.startRequest);
};
scwin.executeExternalRequest = function (request) {
  if (!request || request.mode !== "service") {
    return;
  }
  scwin.openFeaturePopup(request.serviceKey, request.params || {});
};
scwin.loadRememberedId = function () {
  const remember = WebSquare.localStorage.getItem(KEY_REMEMBER);
  const savedId = WebSquare.localStorage.getItem(KEY_LOGIN_ID) || "";
  chk_rememberId.setValue(remember);
  if (remember === "Y" && savedId) {
    txt_userId.setValue(savedId);
  }
};
scwin.saveRememberedId = function () {
  if (chk_rememberId.getValue() === "Y") {
    WebSquare.localStorage.setItem(KEY_REMEMBER, "Y");
    WebSquare.localStorage.setItem(KEY_LOGIN_ID, txt_userId.getValue() || "");
  } else {
    WebSquare.localStorage.setItem(KEY_REMEMBER, "N");
    WebSquare.localStorage.removeItem(KEY_LOGIN_ID);
  }
};
scwin.resetFailureCount = function () {
  scwin.failedPasswordCount = 0;
};
scwin.getLoginErrorMessage = function (response) {
  if (!response || !response.resultDataSet || !response.resultDataSet[1]) {
    return "아이디 또는 비밀번호가 올바르지 않습니다.";
  }
  return response.resultDataSet[1].Msg || "아이디 또는 비밀번호가 올바르지 않습니다.";
};
scwin.hasErrorCode = function (message, codes) {
  const text = message || "";
  return codes.some(function (code) {
    return text.indexOf(code) > -1;
  });
};
scwin.isCredentialFailureMessage = function (message) {
  return scwin.hasErrorCode(message, ["E0009", "E0100"]) || message.indexOf("?꾩씠?붾?") > -1 || message.indexOf("鍮꾨?踰덊샇") > -1;
};
scwin.isLockedMessage = function (message) {
  return scwin.hasErrorCode(message, ["E0026", "E0040", "E0101", "E0102"]) || message.indexOf("비밀번호 만기") > -1 || message.indexOf("비밀번호 3회 이상 입력 오류") > -1;
};
scwin.isPasswordResetMessage = function (message) {
  return scwin.hasErrorCode(message, ["E0025", "E0039", "E0043"]);
};
scwin.buildLoginPayload = function (userId, passwd, ifSsoYn, options) {
  const payload = {
    userId: userId,
    passwd: passwd,
    passwdCheckCnt: scwin.failedPasswordCount + 1,
    isPostponePasswdChg: 0,
    blockReason: "",
    ifSsoYn: ifSsoYn || "N"
  };
  Object.keys(options || {}).forEach(function (key) {
    payload[key] = options[key];
  });
  return payload;
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
scwin.openLegacyPopup = function (type) {
  const options = {
    id: type === "1" ? "unlockAccount" : "resetPassword",
    popupName: type === "1" ? "Account Unlock" : "Password Reset",
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
  $p.openPopup("/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_11b.xml", options);
};
scwin.openAuthPopup = function (userInfo) {
  return $c.win.openPopup($p, "/ui/cm/bc/comnmgnt/usermgnt/auth.xml", {
    id: "ebizLoginAuthPopup",
    popupName: "SMS Auth",
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
scwin.openUserMpNoPopup = function (userInfo) {
  return $c.win.openPopup($p, "/ui/cm/bc/comnmgnt/usermgnt/userMpNo.xml", {
    id: "ebizLoginUserMpNoPopup",
    popupName: "Phone Registration",
    type: "browserPopup",
    width: 520,
    height: 340,
    modal: true,
    resizable: false,
    useMaximize: false
  }, {
    loginInfo: userInfo
  });
};
scwin.handlePostLoginChecks = async function (userInfo) {
  if (String(userInfo.authLoginYn || "") !== "1") {
    return true;
  }
  const userMpNo = (userInfo.userMpNo || "").trim();
  const userMpNo2 = (userInfo.userMpNo2 || "").trim();
  if (!userMpNo && !userMpNo2) {
    const registerResult = await scwin.openUserMpNoPopup(userInfo);
    await $c.sbm.execute($p, sbm_logout);
    if (registerResult === "2") {
      await $c.win.alert($p, "휴대폰 번호 등록이 완료되었습니다. 다시 로그인해 주세요.");
    }
    return false;
  }
  const authResult = await scwin.openAuthPopup(userInfo);
  if (authResult === "0") {
    return true;
  }
  await $c.sbm.execute($p, sbm_logout);
  if (authResult === "1") {
    await $c.win.alert($p, "유효하지 않은 인증번호입니다.");
  }
  return false;
};
scwin.handleEbizAccessRestriction = async function (userInfo) {
  const userClsCd = String(userInfo.userClsCd || "");
  const sysAdminYn = String(userInfo.sysAdminYn || userInfo.privAdmin || "");
  if (userClsCd !== "01" || sysAdminYn === "1") {
    return true;
  }
  await $c.sbm.execute($p, sbm_logout);
  scwin.clearLoginStorage();
  scwin.setLoginState(false);
  txt_password.setValue("");
  txt_userId.focus();
  await $c.win.alert($p, "내부사용자는 해당 URL을 통해 접속할 수 없습니다.\n시스템 담당자에게 연락주세요.");
  return false;
};
scwin.handleLoginFailure = async function (message) {
  if (scwin.isLockedMessage(message)) {
    scwin.resetFailureCount();
    await $c.win.alert($p, message);
    txt_password.setValue("");
    txt_userId.focus();
    scwin.openLegacyPopup("1");
    return;
  }
  if (scwin.isPasswordResetMessage(message)) {
    scwin.resetFailureCount();
    await $c.win.alert($p, message);
    txt_password.setValue("");
    txt_userId.focus();
    scwin.openLegacyPopup("2");
    return;
  }
  if (scwin.isCredentialFailureMessage(message)) {
    scwin.failedPasswordCount += 1;
    await $c.win.alert($p, message);
    if (scwin.failedPasswordCount >= LOCK_THRESHOLD) {
      await scwin.lockCurrentUser((txt_userId.getValue() || "").trim());
      scwin.resetFailureCount();
      scwin.openLegacyPopup("1");
    }
    txt_password.setValue("");
    txt_password.focus();
    return;
  }
  scwin.resetFailureCount();
  await $c.win.alert($p, message);
  txt_password.focus();
};
scwin.sbm_login_submiterror = async function () {
  scwin.loginAttemptInProgress = false;
  await $c.win.alert($p, "로그인 처리 중 오류가 발생했습니다.");
};
scwin.onLoginKeydown = function (e) {
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
  scwin.btn_login_onclick();
  return false;
};
scwin.sbm_login_submitdone = async function (e) {
  scwin.loginAttemptInProgress = false;
  const response = e.responseJSON;
  const result = response && response.resultDataSet ? response.resultDataSet[0] : null;
  if (!result) {
    location.href = "/error.html";
    return;
  }
  if (result.Msg === "SUCC" && response.OUT_GDS1.length > 0) {
    const userInfo = response.OUT_GDS1[0];
    scwin.resetFailureCount();
    const passed = await scwin.handlePostLoginChecks(userInfo);
    if (!passed) {
      scwin.setLoginState(false);
      txt_password.setValue("");
      txt_userId.focus();
      return;
    }
    const canAccess = await scwin.handleEbizAccessRestriction(userInfo);
    if (!canAccess) {
      return;
    }
    scwin.applyLoginStorage(userInfo);
    scwin.setLoginState(true, (userInfo.userId || "") + "님 환영합니다.");
    scwin.launchStartRequestIfNeeded();
    return;
    scwin.setLoginState(true, (userInfo.userId || "") + "님 환영합니다!");
    scwin.launchStartRequestIfNeeded();
    return;
  }
  if (result.Msg === "FAIL") {
    await scwin.handleLoginFailure(scwin.getLoginErrorMessage(response));
    return;
    const msg = response.resultDataSet[1] && response.resultDataSet[1].Msg ? response.resultDataSet[1].Msg : "아이디 또는 비밀번호가 올바르지 않습니다.";
    $c.win.alert($p, msg);
    txt_password.focus();
    return;
  }
  location.href = "/error.html";
};
scwin.btn_login_onclick = async function () {
  if (scwin.loginAttemptInProgress) {
    return;
  }
  scwin.loginAttemptInProgress = true;
  const userId = (txt_userId.getValue() || "").trim();
  const passwd = txt_password.getValue() || "";
  if (!userId) {
    await $c.win.alert($p, "?꾩씠?붾? ?낅젰?댁＜?몄슂.");
    txt_userId.focus();
    return;
  }
  if (!passwd) {
    await $c.win.alert($p, "鍮꾨?踰덊샇瑜??낅젰?댁＜?몄슂.");
    txt_password.focus();
    return;
  }
  scwin.saveRememberedId();
  ds_login.setJSON([scwin.buildLoginPayload(userId, passwd, "N")]);
  $c.sbm.execute($p, sbm_login);
};
scwin.btn_login_onclick = async function () {
  if (scwin.loginAttemptInProgress) {
    return;
  }
  scwin.loginAttemptInProgress = true;
  const userId = (txt_userId.getValue() || "").trim();
  const passwd = txt_password.getValue() || "";
  if (!userId) {
    await $c.win.alert($p, "?꾩씠?붾? ?낅젰?댁＜?몄슂.");
    txt_userId.focus();
    scwin.loginAttemptInProgress = false;
    return;
  }
  if (!passwd) {
    await $c.win.alert($p, "鍮꾨?踰덊샇瑜??낅젰?댁＜?몄슂.");
    txt_password.focus();
    scwin.loginAttemptInProgress = false;
    return;
  }
  scwin.saveRememberedId();
  ds_login.setJSON([scwin.buildLoginPayload(userId, passwd, "N")]);
  $c.sbm.execute($p, sbm_login);
};
scwin.sbm_login_submiterror = async function () {
  scwin.loginAttemptInProgress = false;
  await $c.win.alert($p, "로그인 처리 중 오류가 발생했습니다.");
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
      scwin.setLoginState(false);
      txt_password.setValue("");
      txt_userId.focus();
      return;
    }
    const canAccess = await scwin.handleEbizAccessRestriction(userInfo);
    if (!canAccess) {
      return;
    }
    scwin.applyLoginStorage(userInfo);
    scwin.setLoginState(true, (userInfo.userId || "") + "님 환영합니다.");
    scwin.launchStartRequestIfNeeded();
    return;
  }
  if (result.Msg === "FAIL") {
    await scwin.handleLoginFailure(scwin.getLoginErrorMessage(response));
    return;
  }
  location.href = "/error.html";
};
scwin.btn_login_onclick = async function () {
  if (scwin.loginAttemptInProgress) {
    return;
  }
  scwin.loginAttemptInProgress = true;
  const userId = (txt_userId.getValue() || "").trim();
  const passwd = txt_password.getValue() || "";
  if (!userId) {
    await $c.win.alert($p, "아이디를 입력해주세요.");
    txt_userId.focus();
    scwin.loginAttemptInProgress = false;
    return;
  }
  if (!passwd) {
    await $c.win.alert($p, "비밀번호를 입력해주세요.");
    txt_password.focus();
    scwin.loginAttemptInProgress = false;
    return;
  }
  scwin.saveRememberedId();
  ds_login.setJSON([scwin.buildLoginPayload(userId, passwd, "N")]);
  $c.sbm.execute($p, sbm_login);
};
scwin.handleEbizAccessRestriction = async function (userInfo) {
  const userClsCd = String(userInfo.userClsCd || "");
  const sysAdminYn = String(userInfo.isAdmin || userInfo.sysAdminYn || userInfo.privAdmin || "");
  const restrictedMessage = "내부사용자는 해당 URL을 통해 접속할 수 없습니다.";
  if (userClsCd !== "01" || sysAdminYn === "1") {
    return true;
  }
  scwin.clearLoginStorage();
  scwin.resetFailureCount();
  scwin.startRequestLaunched = false;
  scwin.setLoginState(false);
  txt_password.setValue("");
  tbx_capslock.setValue("");
  try {
    $c.sbm.execute($p, sbm_logout);
  } catch (ex) {}
  await $c.win.alert($p, restrictedMessage);
  txt_userId.focus();
  return false;
};
scwin.handleLoginFailure = async function (message) {
  if (scwin.isLockedMessage(message)) {
    scwin.resetFailureCount();
    txt_password.setValue("");
    txt_userId.focus();
    scwin.openLegacyPopup("1");
    return;
  }
  if (scwin.isPasswordResetMessage(message)) {
    scwin.resetFailureCount();
    txt_password.setValue("");
    txt_userId.focus();
    scwin.openLegacyPopup("2");
    return;
  }
  if (scwin.isCredentialFailureMessage(message)) {
    scwin.failedPasswordCount += 1;
    if (scwin.failedPasswordCount >= LOCK_THRESHOLD) {
      await scwin.lockCurrentUser((txt_userId.getValue() || "").trim());
      scwin.resetFailureCount();
      scwin.openLegacyPopup("1");
    }
    txt_password.setValue("");
    txt_password.focus();
    return;
  }
  scwin.resetFailureCount();
  txt_password.focus();
};
scwin.sbm_login_submiterror = async function () {
  scwin.loginAttemptInProgress = false;
};
scwin.btn_login_onclick = async function () {
  if (scwin.loginAttemptInProgress) {
    return;
  }
  scwin.loginAttemptInProgress = true;
  const userId = (txt_userId.getValue() || "").trim();
  const passwd = txt_password.getValue() || "";
  if (!userId) {
    tbx_capslock.setValue("아이디를 입력해주세요.");
    txt_userId.focus();
    scwin.loginAttemptInProgress = false;
    return;
  }
  if (!passwd) {
    tbx_capslock.setValue("비밀번호를 입력해주세요.");
    txt_password.focus();
    scwin.loginAttemptInProgress = false;
    return;
  }
  tbx_capslock.setValue("");
  scwin.saveRememberedId();
  ds_login.setJSON([scwin.buildLoginPayload(userId, passwd, "N")]);
  $c.sbm.execute($p, sbm_login);
};
scwin.startSabunLogin = function (sabun) {
  scwin.showLoginMessage("자동 로그인 확인 중입니다.");
  dma_ssologin.set("empNo", sabun);
  dma_ssologin.set("empNm", "");
  dma_ssologin.set("email", "");
  dma_ssologin.set("authLoginYn", "0");
  $c.sbm.execute($p, sbm_ssologin);
};
scwin.sbm_ssologin_submitdone = function (e) {
  const response = e.responseJSON || {};
  const userInfo = response.OUT_GDS1 && response.OUT_GDS1.length > 0 ? response.OUT_GDS1[0] : null;
  if (!userInfo || !userInfo.userId || !userInfo.decPasswd) {
    scwin.setLoginState(false);
    $c.win.alert($p, "사번에 연결된 로그인 계정을 찾지 못했습니다.");
    txt_userId.focus();
    return;
  }
  ds_login.setJSON([scwin.buildLoginPayload(userInfo.userId, userInfo.decPasswd, "Y")]);
  $c.sbm.execute($p, sbm_login);
};
scwin.sbm_ssologin_submiterror = function () {
  scwin.setLoginState(false);
  $c.win.alert($p, "사번 자동 로그인 처리 중 오류가 발생했습니다.");
  txt_userId.focus();
};
scwin.sbm_logout_submitdone = function () {
  scwin.clearLoginStorage();
  scwin.resetFailureCount();
  scwin.startRequestLaunched = false;
  scwin.setLoginState(false);
  txt_password.setValue("");
  tbx_capslock.setValue("");
  txt_userId.focus();
};
scwin.clearLoginStorage = function () {
  ["coClsCd", "privAdmin", "coCd", "userHomeClsCd", "userClsCd", "userId", "userNm", "empNo", "email", "lobranCd", "sysCd"].forEach(function (key) {
    WebSquare.localStorage.removeItem(key);
  });
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
scwin.setLoginState = function (isLoggedIn, message) {
  if (isLoggedIn) {
    scwin.showLoginMessage(message);
    return;
  }
  grp_loginWelcome.hide();
  grp_loginForm.show();
  tbx_loginWelcome.setValue("");
};
scwin.showLoginMessage = function (message) {
  grp_loginForm.hide();
  grp_loginWelcome.show();
  tbx_loginWelcome.setValue(message || "");
};
scwin.hasLoginContext = function () {
  return !!(WebSquare.localStorage.getItem("userId") || "").trim();
};
scwin.isMissingLoginResponseText = function (text) {
  const body = (text || "").toString();
  const normalized = body.toLowerCase();
  return body.indexOf("로그인 정보가 없습니다") > -1 || body.indexOf("다시 로그인 하십시오") > -1 || normalized.indexOf("login_popup.jsp") > -1 || normalized.indexOf("\"type\":\"forward\"") > -1 && normalized.indexOf("login") > -1 || body.indexOf("E0004") > -1;
};
scwin.canReuseLoginContext = async function () {
  if (!scwin.hasLoginContext()) {
    return false;
  }
  const now = Date.now();
  if (scwin.__loginContextCheckTime && now - scwin.__loginContextCheckTime < 3000) {
    return scwin.__loginContextCheckResult === true;
  }
  const contextPath = typeof $c !== "undefined" && $c.sbm && typeof $c.sbm.getContextPath === "function" ? $c.sbm.getContextPath($p) || "" : "";
  try {
    const response = await fetch(contextPath + "/main/selectBmMainSetting", {
      method: "POST",
      credentials: "same-origin"
    });
    const responseText = await response.text();
    const canReuse = response.ok && !scwin.isMissingLoginResponseText(responseText);
    scwin.__loginContextCheckTime = now;
    scwin.__loginContextCheckResult = canReuse;
    return canReuse;
  } catch (e) {
    scwin.__loginContextCheckTime = now;
    scwin.__loginContextCheckResult = false;
    return false;
  }
};
scwin.openLoginBridgePopup = function (service, options, params) {
  const bridgeParams = {
    loginUserId: service.loginUserId || "",
    nextUrl: service.url,
    persistLogin: "N",
    messageType: "ebiz",
    popupName: options.popupName || service.popupName || "",
    title: options.title || service.title || ""
  };
  Object.keys(params || {}).forEach(function (key) {
    const value = params[key];
    if (value === null || typeof value === "undefined" || value === "") {
      return;
    }
    bridgeParams[key] = value;
  });
  $c.win.openPopup($p, "/ui/cm/zz/externalSabunLoginPopup.xml", options, bridgeParams, "ebiz");
};
scwin.openFeaturePopup = async function (serviceKey, extraParams) {
  const service = scwin.popupServices[serviceKey];
  if (!service) {
    return;
  }
  const opts = {
    id: service.id,
    type: "browserPopup",
    popupName: service.popupName,
    title: service.title,
    width: service.width || 1200,
    height: service.height || 700
  };
  const bridgeExtra = {};
  Object.keys(extraParams || {}).forEach(function (key) {
    const value = extraParams[key];
    if (value === null || typeof value === "undefined" || value === "") {
      return;
    }
    bridgeExtra[key] = value;
  });
  if (await scwin.canReuseLoginContext()) {
    bridgeExtra.skipLogin = "Y";
  }
  scwin.openLoginBridgePopup(service, opts, bridgeExtra);
};
scwin.btn_popupSchedule_onclick = function () {
  scwin.openFeaturePopup("schedule");
};
scwin.btn_popupCopino_onclick = function () {
  scwin.openFeaturePopup("copino");
};
scwin.btn_popupContainer_onclick = function () {
  scwin.openFeaturePopup("container");
};
scwin.btn_popupBooking_onclick = function () {
  scwin.openFeaturePopup("booking");
};
scwin.btn_popupFreight_onclick = function () {
  scwin.openFeaturePopup("freight");
};
scwin.openTrackingPage = async function (trackingType) {
  const value = trackingType === "bl" ? (dma_tracking.get("blNo") || "").trim() : (dma_tracking.get("cntrNo") || "").trim();
  if (!value) {
    $c.win.alert($p, trackingType === "bl" ? "B/L No.를 입력하세요." : "컨테이너 No.를 입력하세요.");
    return;
  }
  const canReuseLogin = await scwin.canReuseLoginContext();
  if (!canReuseLogin) {
    const bridgeService = trackingType === "bl" ? scwin.popupServices.booking : scwin.popupServices.container;
    const bridgeOptions = trackingType === "bl" ? {
      id: "pop_quickTrackingBl",
      type: "browserPopup",
      popupName: "Booking/BL Tracking",
      title: "Booking/BL Tracking",
      width: 1280,
      height: 900
    } : {
      id: "pop_quickTrackingCntr",
      type: "browserPopup",
      popupName: "Container Tracking",
      title: "Container Tracking",
      width: 1280,
      height: 900
    };
    const bridgeParams = trackingType === "bl" ? {
      blNo: value
    } : {
      cntrNo: value
    };
    scwin.openLoginBridgePopup(bridgeService, bridgeOptions, bridgeParams);
    return;
  }
  if (trackingType === "bl") {
    $c.win.openPopup($p, "Booking/BL 추적", "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_03b.xml", "as_102_01_03b.xml", {
      blNo: value
    }, {
      openAction: "exist"
    });
    return;
  }
  $c.win.openMenu($p, "컨테이너 화물추적", "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml", "as_102_01_02b.xml", {
    cntrNo: value
  }, {
    openAction: "exist"
  });
};
scwin.openTrackingPopup = async function (trackingType, providedValue) {
  const value = (providedValue || (trackingType === "bl" ? dma_tracking.get("blNo") || "" : dma_tracking.get("cntrNo") || "")).trim();
  if (!value) {
    $c.win.alert($p, trackingType === "bl" ? "B/L No. 입력 후 조회하세요." : "컨테이너 No. 입력 후 조회하세요.");
    return;
  }
  const canReuseLogin = await scwin.canReuseLoginContext();
  if (!canReuseLogin) {
    const bridgeService = trackingType === "bl" ? scwin.popupServices.booking : scwin.popupServices.container;
    const bridgeOptions = trackingType === "bl" ? {
      id: "pop_quickTrackingBl",
      type: "browserPopup",
      popupName: "Booking/BL Tracking",
      title: "Booking/BL Tracking",
      width: 1280,
      height: 900
    } : {
      id: "pop_quickTrackingCntr",
      type: "browserPopup",
      popupName: "Container Tracking",
      title: "Container Tracking",
      width: 1280,
      height: 900
    };
    const bridgeParams = trackingType === "bl" ? {
      blNo: value
    } : {
      cntrNo: value
    };
    scwin.openLoginBridgePopup(bridgeService, bridgeOptions, bridgeParams);
    return;
  }
  if (trackingType === "bl") {
    $c.win.openPopup($p, "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_03b.xml", {
      id: "pop_quickTrackingBl",
      type: "browserPopup",
      popupName: "Booking/BL Tracking",
      title: "Booking/BL Tracking",
      width: 1280,
      height: 900
    }, {
      blNo: value,
      messageType: "ebiz"
    }, "ebiz");
    return;
  }
  $c.win.openPopup($p, "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_02b.xml", {
    id: "pop_quickTrackingCntr",
    type: "browserPopup",
    popupName: "Container Tracking",
    title: "Container Tracking",
    width: 1280,
    height: 900
  }, {
    cntrNo: value,
    messageType: "ebiz"
  }, "ebiz");
};
scwin.openQuickTrackingBridge = async function (trackingType) {
  const value = (trackingType === "bl" ? dma_tracking.get("blNo") || "" : dma_tracking.get("cntrNo") || "").trim();
  if (!value) {
    $c.win.alert($p, trackingType === "bl" ? "B/L No. 입력 후 조회하세요." : "컨테이너 No. 입력 후 조회하세요.");
    return;
  }
  const bridgeService = trackingType === "bl" ? scwin.popupServices.booking : scwin.popupServices.container;
  const bridgeOptions = trackingType === "bl" ? {
    id: "pop_quickTrackingBl",
    type: "browserPopup",
    popupName: "Booking/BL Tracking",
    title: "Booking/BL Tracking",
    width: 1280,
    height: 900
  } : {
    id: "pop_quickTrackingCntr",
    type: "browserPopup",
    popupName: "Container Tracking",
    title: "Container Tracking",
    width: 1280,
    height: 900
  };
  const bridgeParams = trackingType === "bl" ? {
    blNo: value
  } : {
    cntrNo: value
  };
  if (await scwin.canReuseLoginContext()) {
    bridgeParams.skipLogin = "Y";
  }
  scwin.openLoginBridgePopup(bridgeService, bridgeOptions, bridgeParams);
};
scwin.onBlTrackingKeydown = function (e) {
  const isEnter = e.key === "Enter" || e.keyCode === 13;
  if (!isEnter) {
    return;
  }
  scwin.btn_blTracking_onclick();
};
scwin.onCntrTrackingKeydown = function (e) {
  const isEnter = e.key === "Enter" || e.keyCode === 13;
  if (!isEnter) {
    return;
  }
  scwin.btn_cntrTracking_onclick();
};
scwin.btn_blTracking_onclick = function () {
  scwin.openQuickTrackingBridge("bl");
};
scwin.btn_cntrTracking_onclick = function () {
  scwin.openQuickTrackingBridge("cntr");
};
scwin.btn_fmsite_onclick = function () {
  $(".fs-sub").toggleClass("sub-show");
};
scwin.btn_passwordReset_onclick = function () {
  const rowJSON = {
    type: "2"
  };
  const dataObj = {
    type: "json",
    data: rowJSON,
    name: "rowObj"
  };
  const options = {
    id: "auth",
    popupName: "Password Reset",
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
    dataObject: dataObj
  };
  $p.openPopup("/ui/cm/bc/comnmgnt/usermgnt/zz_620_01_11b.xml", options);
};
scwin.btn_logout_onclick = function () {
  $c.sbm.execute($p, sbm_logout);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onbeforepageunload':'scwin.onbeforepageunload',class:'ebiz-login'},E:[{T:1,N:'xf:group',A:{class:'login-wrap',id:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'header'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h1'}}]},{T:1,N:'xf:group',A:{class:'login-cont',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'LOEX<br/>CONNECTS<br/>THE WORLD',escape:'false',class:'copy'}},{T:1,N:'xf:group',A:{class:'link-box',id:''},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_popupSchedule',escape:'false',class:'link01','ev:onclick':'scwin.btn_popupSchedule_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Vessel<br/>Schedule'}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_popupCopino',escape:'false',class:'link02','ev:onclick':'scwin.btn_popupCopino_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'COPINO<br/>Status'}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_popupContainer',escape:'false',class:'link03','ev:onclick':'scwin.btn_popupContainer_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Container<br/>Tracking'}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_popupBooking',escape:'false',class:'link04','ev:onclick':'scwin.btn_popupBooking_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Booking<br/>/BL Tracking'}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_popupFreight',escape:'false',class:'link05','ev:onclick':'scwin.btn_popupFreight_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Import Cost<br/>Check'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'login-box',id:''},E:[{T:1,N:'xf:group',A:{id:'grp_loginForm'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'로그인 <span>LOGIN</span>',escape:'false',class:'login-title'}},{T:1,N:'xf:input',A:{id:'txt_userId',placeholder:'아이디를 입력해주세요.',ref:'','ev:onkeydown':'scwin.onLoginKeydown'}},{T:1,N:'xf:group',A:{id:'',class:'input_pw'},E:[{T:1,N:'w2:searchbox',A:{id:'txt_password',placeholder:'비밀번호를 입력해주세요.',type:'password',ref:'','ev:onkeydown':'scwin.onLoginKeydown'}},{T:1,N:'xf:trigger',A:{type:'button',id:'',style:'display:none;',class:'btn-eye'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{id:'',class:'etc-box',style:'margin-top: 10px; margin-bottom: 10px;'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{id:'tbx_capslock',label:'',tagname:'span'}}]},{T:1,N:'xf:select',A:{appearance:'full',id:'chk_rememberId',renderType:'checkboxgroup',selectedindex:'-1',cols:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:3,text:'Remember ID'}]},{T:1,N:'xf:value',E:[{T:3,text:'Y'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{id:'btn_login',title:'Login',type:'button','ev:onclick':'scwin.btn_login_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Login'}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_passwordReset','ev:onclick':'scwin.btn_passwordReset_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Password Reset'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_loginWelcome',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'LOGIN <span>STATUS</span>',escape:'false',class:'login-title'}},{T:1,N:'w2:textbox',A:{id:'tbx_loginWelcome',label:'',escape:'false'}},{T:1,N:'xf:trigger',A:{id:'btn_logout',title:'Logout',type:'button','ev:onclick':'scwin.btn_logout_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Logout'}]}]}]}]},{T:1,N:'xf:group',A:{class:'login-box',id:''},E:[{T:1,N:'w2:textbox',A:{class:'login-title',id:'',label:'QUICK TRACKING'}},{T:1,N:'w2:textbox',A:{id:'',label:'B/L No.',tagname:'strong'}},{T:1,N:'xf:input',A:{id:'txt_blTracking',placeholder:'B/L No. 입력',ref:'data:dma_tracking.blNo','ev:onkeydown':'scwin.onBlTrackingKeydown'}},{T:1,N:'xf:trigger',A:{id:'btn_blTracking',title:'Track B/L',type:'button','ev:onclick':'scwin.btn_blTracking_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Track'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'컨테이너 No.',tagname:'strong'}},{T:1,N:'xf:input',A:{id:'txt_cntrTracking',placeholder:'컨테이너 No. 입력',ref:'data:dma_tracking.cntrNo','ev:onkeydown':'scwin.onCntrTrackingKeydown'}},{T:1,N:'xf:trigger',A:{id:'btn_cntrTracking',title:'Track Container',type:'button','ev:onclick':'scwin.btn_cntrTracking_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Track'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'footer'},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'familysite'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_fmsite','ev:onclick':'scwin.btn_fmsite_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'familysite'}]}]},{T:1,N:'xf:group',A:{id:'',class:'fs-sub'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:''},E:[{T:1,N:'xf:label',E:[{T:3,text:'Dongwon Loex'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:''},E:[{T:1,N:'xf:label',E:[{T:3,text:'DGT Busan'}]}]}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'COPYRIGHTⓒDONGWON LOEX. ALL RIGHT RESERVED WORLDWIDE. FOR MORE INFORMATION CONTACT WEBMASTER',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'mark01',id:'',label:''}},{T:1,N:'w2:textbox',A:{class:'mark02',id:'',label:''}},{T:1,N:'w2:textbox',A:{class:'mark03',id:'',label:''}},{T:1,N:'w2:textbox',A:{class:'mark04',id:'',label:''}},{T:1,N:'w2:textbox',A:{class:'mark05',id:'',label:''}},{T:1,N:'w2:textbox',A:{class:'mark06',id:'',label:''}}]}]}]}]}]}]})