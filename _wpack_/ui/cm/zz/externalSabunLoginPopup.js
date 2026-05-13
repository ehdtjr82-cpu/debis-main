/*amd /ui/cm/zz/externalSabunLoginPopup.xml 39477 cfb29ef028974a9e12f6fbd08dc9771c97eb1ec6551aa40a91997d31953763d4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ssologin'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'empNo',name:'empNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNm',name:'empNm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'email',name:'email',dataType:'text'}},{T:1,N:'w2:key',A:{id:'authLoginYn',name:'authLoginYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ssologin_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'decPasswd',name:'decPasswd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_login',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwd',name:'passwd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'passwdCheckCnt',name:'passwdCheckCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ifSsoYn',name:'ifSsoYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'OUT_GDS1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'userId',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_programSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'sysCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'programLupCond',name:'programLupCond',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'qryCntn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCls',name:'grpCls',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_programSearch',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pgmId',name:'pgmId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmNm',name:'pgmNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'sysCd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_option'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sabun',name:'sabun',dataType:'text'}},{T:1,N:'w2:key',A:{id:'loginUserId',name:'loginUserId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'loginPassword',name:'loginPassword',dataType:'text'}},{T:1,N:'w2:key',A:{id:'nextUrl',name:'nextUrl',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYn',name:'closeYn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullPageYn',name:'fullPageYn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'skipLogin',name:'skipLogin',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logoutFirst',name:'logoutFirst',dataType:'text'}},{T:1,N:'w2:key',A:{id:'persistLogin',name:'persistLogin',dataType:'text'}},{T:1,N:'w2:key',A:{id:'callbackFn',name:'callbackFn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'requestToken',name:'requestToken',dataType:'text'}},{T:1,N:'w2:key',A:{id:'message',name:'message',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'status',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detail',name:'detail',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'closeYn',E:[{T:4,cdata:'Y'}]},{T:1,N:'fullPageYn',E:[{T:4,cdata:'N'}]},{T:1,N:'skipLogin',E:[{T:4,cdata:'N'}]},{T:1,N:'logoutFirst',E:[{T:4,cdata:'N'}]},{T:1,N:'persistLogin',E:[{T:4,cdata:'Y'}]},{T:1,N:'callbackFn',E:[{T:4,cdata:'externalLoginDone'}]},{T:1,N:'status',E:[{T:4,cdata:'Preparing'}]},{T:1,N:'detail',E:[{T:4,cdata:'Checking the auto login request.'}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ssologin',action:'/ssologin.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ssologin","key":"IN_GDS1"},{"id":"ds_ssologin_result","key":"OUT_GDS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ssologin_submitdone','ev:submiterror':'scwin.sbm_ssologin_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_login',action:'/login.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_login","key":"IN_GDS1"},"OUT_GDS1"]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_login_submitdone','ev:submiterror':'scwin.sbm_login_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_logout',action:'/logout.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_logout_submitdone','ev:submiterror':'scwin.sbm_logout_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_programSearch',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_programSearch","key":"IN_DS1"}',target:'data:json,{"id":"ds_programSearch","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.controlKeys = {
  sabun: true,
  empNo: true,
  loginUserId: true,
  loginPassword: true,
  nextUrl: true,
  targetUrl: true,
  forwardUrl: true,
  closeYn: true,
  fullPageYn: true,
  skipLogin: true,
  logoutFirst: true,
  persistLogin: true,
  callbackFn: true,
  cbFn: true,
  targetWindowName: true,
  requestToken: true,
  message: true,
  messageType: true,
  popupTitle: true,
  popupName: true,
  title: true,
  menuId: true,
  menuNm: true,
  pgmId: true,
  pgmNm: true,
  w2xPath: true,
  popupID: true,
  w2xHome: true,
  w2xDocumentRoot: true,
  paramData: true
};
scwin.globalVal = {
  CREATE_AUTH: "C",
  RETRIEVE_AUTH: "R",
  UPDATE_AUTH: "U",
  DELETE_AUTH: "D",
  PRINT_AUTH: "P",
  EXCEL_AUTH: "X"
};
scwin.onpageload = function () {
  scwin.initializeOptions();
  scwin.startAutoLogin();
};
scwin.decodeBase64Value = function (value) {
  let normalized = (value || "").toString().trim();
  if (!normalized) {
    return "";
  }
  normalized = normalized.replace(/\s+/g, "+").replace(/-/g, "+").replace(/_/g, "/");
  while (normalized.length % 4 !== 0) {
    normalized += "=";
  }
  try {
    return window.atob(normalized).trim();
  } catch (e) {
    return "";
  }
};
scwin.resolveSabunValue = function (value, merged) {
  const rawValue = (value || "").toString().trim();
  const encodedYn = (merged && merged.sabunEncYn || "").toString().toUpperCase();
  const encoding = (merged && merged.sabunEncoding || "").toString().toLowerCase();
  if (!rawValue) {
    return "";
  }
  if (/^\d+$/.test(rawValue)) {
    return rawValue;
  }
  const decodedValue = scwin.decodeBase64Value(rawValue);
  if (encodedYn === "Y" || encoding === "base64") {
    return decodedValue || rawValue;
  }
  if (/^\d+$/.test(decodedValue)) {
    return decodedValue;
  }
  return rawValue;
};
scwin.initializeOptions = function () {
  const queryParams = scwin.getQueryParams();
  let popupParams = {};
  let nestedPopupParams = {};
  try {
    popupParams = $p.getParameter("paramData") || {};
  } catch (e) {
    popupParams = {};
  }
  if (!popupParams || Object.keys(popupParams).length < 1) {
    try {
      const allParams = $p.getAllParameter() || {};
      popupParams = allParams.paramData || popupParams;
    } catch (e) {
      popupParams = popupParams || {};
    }
  }
  if (popupParams && typeof popupParams === "object" && popupParams.data && typeof popupParams.data === "object") {
    nestedPopupParams = popupParams.data;
  }
  const merged = {};
  scwin.copyScalarValues(merged, queryParams);
  scwin.copyScalarValues(merged, popupParams);
  scwin.copyScalarValues(merged, nestedPopupParams);
  const nextUrl = merged.nextUrl || merged.targetUrl || merged.forwardUrl || "";
  const closeYn = merged.closeYn || (nextUrl ? "N" : "Y");
  const resolvedSabun = scwin.resolveSabunValue(merged.sabun || merged.empNo || "", merged);
  dma_option.set("sabun", resolvedSabun);
  dma_option.set("loginUserId", merged.loginUserId || "");
  dma_option.set("loginPassword", merged.loginPassword || "");
  dma_option.set("nextUrl", nextUrl);
  dma_option.set("closeYn", closeYn);
  dma_option.set("fullPageYn", merged.fullPageYn || "N");
  dma_option.set("skipLogin", merged.skipLogin || "N");
  dma_option.set("logoutFirst", merged.logoutFirst || "N");
  dma_option.set("persistLogin", merged.persistLogin || "Y");
  dma_option.set("callbackFn", merged.callbackFn || merged.cbFn || "externalLoginDone");
  dma_option.set("requestToken", merged.requestToken || "");
  dma_option.set("message", merged.message || "");
  scwin.hostOptions = {
    messageType: merged.messageType || "ebiz",
    targetWindowName: merged.targetWindowName || "",
    popupName: merged.popupName || "",
    title: merged.popupTitle || merged.title || merged.menuNm || merged.pgmNm || "",
    menuId: merged.menuId || "",
    pgmId: merged.pgmId || ""
  };
  tbx_title.setValue(scwin.hostOptions.title || scwin.hostOptions.popupName || "External Auto Login");
  scwin.passThroughParams = {};
  Object.keys(merged).forEach(function (key) {
    if (scwin.controlKeys[key]) {
      return;
    }
    if (merged[key] === "") {
      return;
    }
    scwin.passThroughParams[key] = merged[key];
  });
  if (dma_option.get("message")) {
    dma_option.set("detail", dma_option.get("message"));
  }
};
scwin.startAutoLogin = function () {
  if ((dma_option.get("skipLogin") || "N") === "Y") {
    dma_option.set("status", "Preparing page");
    dma_option.set("detail", "Using the current login session.");
    if (dma_option.get("nextUrl") || (dma_option.get("fullPageYn") || "N") === "Y") {
      scwin.moveToNextUrl();
    }
    return;
  }
  const sabun = (dma_option.get("sabun") || "").trim();
  const loginUserId = (dma_option.get("loginUserId") || "").trim();
  if (!sabun && !loginUserId) {
    scwin.fail("Missing sabun or loginUserId in auto login request.");
    return;
  }
  dma_option.set("status", "Auto login in progress");
  if (loginUserId) {
    dma_option.set("detail", "Creating a public session for user " + loginUserId + ".");
  } else {
    dma_option.set("detail", "Checking user mapping for sabun " + sabun + ".");
  }
  if ((dma_option.get("logoutFirst") || "N") === "Y") {
    dma_option.set("detail", "Clearing the current session before auto login.");
    $c.sbm.execute($p, sbm_logout);
    return;
  }
  if (loginUserId) {
    scwin.executeDirectLogin();
    return;
  }
  scwin.executeSsoLogin();
};
scwin.executeSsoLogin = function () {
  dma_ssologin.set("empNo", (dma_option.get("sabun") || "").trim());
  dma_ssologin.set("empNm", "");
  dma_ssologin.set("email", "");
  dma_ssologin.set("authLoginYn", "0");
  $c.sbm.execute($p, sbm_ssologin);
};
scwin.executeDirectLogin = function () {
  ds_login.setJSON([{
    userId: (dma_option.get("loginUserId") || "").trim(),
    passwd: dma_option.get("loginPassword") || "",
    passwdCheckCnt: 0,
    ifSsoYn: "Y"
  }]);
  $c.sbm.execute($p, sbm_login);
};
scwin.sbm_logout_submitdone = function () {
  if ((dma_option.get("loginUserId") || "").trim()) {
    scwin.executeDirectLogin();
    return;
  }
  scwin.executeSsoLogin();
};
scwin.sbm_logout_submiterror = function () {
  if ((dma_option.get("loginUserId") || "").trim()) {
    scwin.executeDirectLogin();
    return;
  }
  scwin.executeSsoLogin();
};
scwin.sbm_ssologin_submitdone = function (e) {
  const response = e.responseJSON || {};
  const resultRow = response.OUT_GDS1 && response.OUT_GDS1.length > 0 ? response.OUT_GDS1[0] : null;
  const userId = resultRow && resultRow.userId ? resultRow.userId : "";
  const decPasswd = resultRow && resultRow.decPasswd ? resultRow.decPasswd : "";
  if (!userId || !decPasswd) {
    scwin.fail("전달된 사번에 매핑된 로그인 계정이 없습니다");
    return;
  }
  dma_option.set("detail", "Creating a login session for user " + userId + ".");
  ds_login.setJSON([{
    userId: userId,
    passwd: decPasswd,
    passwdCheckCnt: 0,
    ifSsoYn: "Y"
  }]);
  $c.sbm.execute($p, sbm_login);
};
scwin.sbm_ssologin_submiterror = function () {
  scwin.fail("An error occurred while resolving sabun login.");
};
scwin.sbm_login_submitdone = function (e) {
  const response = e.responseJSON || {};
  const result = response.resultDataSet && response.resultDataSet.length > 0 ? response.resultDataSet[0] : null;
  if (!result) {
    scwin.fail("Failed to read the login response.");
    return;
  }
  if (result.Msg !== "SUCC" || !response.OUT_GDS1 || response.OUT_GDS1.length < 1) {
    const failMsg = response.resultDataSet && response.resultDataSet[1] && response.resultDataSet[1].Msg ? response.resultDataSet[1].Msg : "Auto login failed.";
    scwin.fail(failMsg);
    return;
  }
  const userInfo = response.OUT_GDS1[0];
  if ((dma_option.get("persistLogin") || "Y") !== "N") {
    scwin.applyLoginStorage(userInfo);
  }
  dma_option.set("status", "Auto login completed");
  dma_option.set("detail", "Logged in as " + (userInfo.userId || "") + ".");
  const resultData = {
    success: true,
    sabun: dma_option.get("sabun"),
    loginUserId: dma_option.get("loginUserId") || "",
    requestToken: dma_option.get("requestToken") || "",
    userId: userInfo.userId || "",
    userNm: userInfo.userNm || "",
    nextUrl: dma_option.get("nextUrl") || ""
  };
  const fullPageYn = (dma_option.get("fullPageYn") || "N") === "Y";
  const openerHandled = fullPageYn ? false : scwin.notifyOpener(resultData);
  if (dma_option.get("nextUrl") || fullPageYn) {
    if (openerHandled) {
      window.setTimeout(function () {
        scwin.closePopup(resultData);
      }, 100);
      return;
    }
    scwin.moveToNextUrl();
    return;
  }
  if ((dma_option.get("closeYn") || "Y") === "Y") {
    window.setTimeout(function () {
      scwin.closePopup(resultData);
    }, 500);
  }
};
scwin.sbm_login_submiterror = function () {
  scwin.fail("An error occurred while creating the login session.");
};
scwin.applyLoginStorage = function (userInfo) {
  const saveKeys = ["coClsCd", "privAdmin", "coCd", "userHomeClsCd", "userClsCd", "userId", "userNm", "empNo", "email", "lobranCd"];
  saveKeys.forEach(function (key) {
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
scwin.moveToNextUrl = function () {
  const nextUrl = dma_option.get("nextUrl");
  const targetInfo = scwin.normalizeTargetInfo(nextUrl, scwin.passThroughParams);
  if ((dma_option.get("fullPageYn") || "N") === "Y") {
    scwin.moveToFullPage(targetInfo);
    return;
  }
  if (/\.xml$/i.test(targetInfo.url || "")) {
    scwin.openTargetFrame(targetInfo);
    return;
  }
  dma_option.set("detail", "Moving to the requested page.");
  window.location.replace(scwin.appendQueryString(targetInfo.url, targetInfo.params));
};
scwin.moveToFullPage = function (targetInfo) {
  const targetUrl = targetInfo && targetInfo.url ? targetInfo.url : "/ui/main/index.xml";
  const targetParams = targetInfo && targetInfo.params ? targetInfo.params : {};
  let moveUrl = "";
  dma_option.set("detail", "Moving to the main page.");
  if (/\.xml$/i.test(targetUrl)) {
    moveUrl = $c.sbm.getContextPath($p) + "/websquare/websquare.html?w2xPath=" + targetUrl;
    const query = scwin.toQueryString(targetParams);
    if (query) {
      moveUrl += "&" + query;
    }
  } else {
    moveUrl = scwin.appendQueryString(targetUrl, targetParams);
  }
  if (scwin.openStandaloneWindowOnFullPage(moveUrl)) {
    return;
  }
  window.location.replace(moveUrl);
};
scwin.openStandaloneWindowOnFullPage = function (moveUrl) {
  const targetWindowName = (scwin.hostOptions.targetWindowName || "").trim();
  try {
    if (targetWindowName) {
      const targetWindow = window.open("", targetWindowName);
      if (targetWindow && !targetWindow.closed) {
        try {
          targetWindow.opener = null;
        } catch (e) {}
        try {
          targetWindow.location.replace(moveUrl);
        } catch (e) {
          try {
            targetWindow.location.href = moveUrl;
          } catch (ignore) {}
        }
        window.setTimeout(function () {
          try {
            window.close();
          } catch (e) {
            console.log(e);
          }
        }, 100);
        return true;
      }
    }
    if (window.opener && !window.opener.closed) {
      const openedWindow = window.open("about:blank", "_blank");
      if (!openedWindow) {
        return false;
      }
      try {
        openedWindow.opener = null;
      } catch (e) {}
      window.setTimeout(function () {
        try {
          openedWindow.location.replace(moveUrl);
        } catch (e) {
          try {
            openedWindow.location.href = moveUrl;
          } catch (ignore) {}
        }
      }, 50);
      window.setTimeout(function () {
        try {
          window.close();
        } catch (e) {
          console.log(e);
        }
      }, 200);
      return true;
    }
  } catch (e) {
    console.log(e);
  }
  return false;
};
scwin.resolveProgramSearchAction = function (targetUrl) {
  const normalizedUrl = (targetUrl || "").toLowerCase();
  if (normalizedUrl.indexOf("/ui/ncall/") === 0) {
    return "/ncall.cm.bc.comnmgnt.programmgnt.RetrieveProgramListCMD.do";
  }
  return "/cm.bc.comnmgnt.programmgnt.RetrieveProgramListCMD.do";
};
scwin.resolveProgramTitle = async function (targetInfo) {
  const existingTitle = (scwin.hostOptions.title || scwin.hostOptions.popupName || "").trim();
  if (existingTitle) {
    return existingTitle;
  }
  const targetUrl = targetInfo && targetInfo.url ? targetInfo.url : "";
  const pgmId = scwin.hostOptions.pgmId || scwin.toProgramId(targetUrl);
  if (!pgmId) {
    return "";
  }
  try {
    ds_programSearch.removeAll();
    dma_programSearch.set("sysCls", "00");
    dma_programSearch.set("programLupCond", "1");
    dma_programSearch.set("qryCntn", pgmId);
    dma_programSearch.set("grpCls", "00");
    sbm_programSearch.action = scwin.resolveProgramSearchAction(targetUrl);
    const rt = await $c.sbm.execute($p, sbm_programSearch);
    const rows = rt && rt.responseJSON && rt.responseJSON.GAUCE || ds_programSearch.getAllJSON() || [];
    let programRow = null;
    for (let i = 0; i < rows.length; i++) {
      if ((rows[i].pgmId || "").toLowerCase() === pgmId.toLowerCase()) {
        programRow = rows[i];
        break;
      }
    }
    if (!programRow && rows.length > 0) {
      programRow = rows[0];
    }
    const resolvedTitle = programRow && programRow.pgmNm ? programRow.pgmNm : "";
    if (resolvedTitle) {
      scwin.hostOptions.title = resolvedTitle;
      if (!scwin.hostOptions.popupName) {
        scwin.hostOptions.popupName = resolvedTitle;
      }
      tbx_title.setValue(resolvedTitle);
    }
    return resolvedTitle;
  } catch (e) {
    return "";
  }
};
scwin.openTargetFrame = async function (targetInfo) {
  const nextUrl = targetInfo && targetInfo.url ? targetInfo.url : "";
  const resolvedUrl = scwin.appendQueryString(nextUrl, targetInfo && targetInfo.params ? targetInfo.params : {});
  if (!nextUrl) {
    scwin.fail("Missing target url in auto login request.");
    return;
  }
  await scwin.resolveProgramTitle(targetInfo);
  scwin.preparePopupContext(resolvedUrl || nextUrl);
  grp_status.hide();
  wfm_target.show();
  dma_option.set("detail", "Opening the requested page.");
  let pgmId = scwin.hostOptions.pgmId || scwin.toProgramId(nextUrl);
  let uId = WebSquare.localStorage.getItem("userId");
  let dma = $p.top().$p.parent().dma_mem;
  if (dma !== undefined) {
    dma.set("userId", "csssso");
    dma.set("pgmId", pgmId);
  }
  if ($p.top().$p.isPopup()) {
    return Promise.resolve().then(function () {
      return $p.top().$p.parent().scwin.setUserAuth();
    }).then(function (ret) {
      return $c.win.setPageFrameSrc($p, wfm_target, resolvedUrl || nextUrl, scwin.buildTargetParamData(targetInfo));
    });
  } else {
    $c.win.setPageFrameSrc($p, wfm_target, resolvedUrl || nextUrl, scwin.buildTargetParamData(targetInfo));
  }
};
scwin.preparePopupContext = function (nextUrl) {
  const topWin = window;
  const topScope = $p.top();
  const pgmId = scwin.hostOptions.pgmId || scwin.toProgramId(nextUrl);
  const menuId = scwin.hostOptions.menuId || pgmId.replace(/\.jsp$/i, "");
  const menuNm = scwin.hostOptions.title || scwin.hostOptions.popupName || menuId || pgmId;
  const selectedTabId = menuId || pgmId.replace(/\.jsp$/i, "");
  const tacLayout = topWin.tac_layout || {};
  const menuRows = [{
    actPgmId: selectedTabId,
    actPgmNm: menuNm,
    pgmId: pgmId,
    pgmNm: menuNm,
    menuId: menuId,
    menuNm: menuNm,
    upperMenuId: ""
  }];
  tacLayout.getSelectedTabID = function () {
    return selectedTabId;
  };
  tacLayout.getSelectedTabIndex = function () {
    return 0;
  };
  tacLayout.getWindow = function () {
    return wfm_target.getWindow ? wfm_target.getWindow() : topScope;
  };
  tacLayout.contentsArr = [{
    dataObject: {
      data: {
        menuInfo: {
          pgmId: pgmId,
          menuId: menuId,
          pgmNm: menuNm,
          menuNm: menuNm,
          popupTitle: menuNm,
          popupName: menuNm,
          pFrmId: "wfm_target"
        }
      }
    }
  }];
  topWin.tac_layout = tacLayout;
  if (topScope) {
    topScope.tac_layout = tacLayout;
  }
  scwin.globalVal = scwin.globalVal || {};
  ["CREATE_AUTH", "RETRIEVE_AUTH", "UPDATE_AUTH", "DELETE_AUTH", "PRINT_AUTH", "EXCEL_AUTH"].forEach(function (key) {
    if (typeof scwin.globalVal[key] === "undefined" || scwin.globalVal[key] === null || scwin.globalVal[key] === "") {
      scwin.globalVal[key] = "Y";
    }
  });
  if (topScope && topScope.scwin) {
    topScope.scwin.globalVal = topScope.scwin.globalVal || {};
    ["CREATE_AUTH", "RETRIEVE_AUTH", "UPDATE_AUTH", "DELETE_AUTH", "PRINT_AUTH", "EXCEL_AUTH"].forEach(function (key) {
      if (typeof topScope.scwin.globalVal[key] === "undefined" || topScope.scwin.globalVal[key] === null || topScope.scwin.globalVal[key] === "") {
        topScope.scwin.globalVal[key] = scwin.globalVal[key];
      }
    });
  }
  if (!topWin.dma_mem || typeof topWin.dma_mem.set !== "function" || typeof topWin.dma_mem.get !== "function") {
    topWin.dma_mem = {
      __data: {},
      set: function (key, value) {
        this.__data[key] = value;
      },
      get: function (key) {
        return this.__data[key];
      }
    };
  }
  if (topScope && (!topScope.dma_mem || typeof topScope.dma_mem.set !== "function" || typeof topScope.dma_mem.get !== "function")) {
    topScope.dma_mem = topWin.dma_mem;
  }
  const dsAllMenuList = {
    getMatchedJSON: function (column, value) {
      if ((column === "actPgmId" || column === "menuId") && value) {
        const normalized = String(value).replace(/\.jsp$/i, "");
        if (normalized === selectedTabId) {
          return menuRows;
        }
      }
      return [];
    }
  };
  topWin.ds_allMenuList = dsAllMenuList;
  if (topScope) {
    topScope.ds_allMenuList = dsAllMenuList;
  }
  topWin.dma_mem.set("userId", WebSquare.localStorage.getItem("userId") || "");
  topWin.dma_mem.set("pgmId", pgmId);
  if (topScope && topScope.dma_mem) {
    topScope.dma_mem.set("userId", WebSquare.localStorage.getItem("userId") || "");
    topScope.dma_mem.set("pgmId", pgmId);
  }
};
scwin.buildTargetParamData = function (targetInfo) {
  const nextUrl = targetInfo && targetInfo.url ? targetInfo.url : "";
  const paramData = {};
  const extraParams = targetInfo && targetInfo.params ? targetInfo.params : {};
  const resolvedUrl = scwin.appendQueryString(nextUrl, extraParams);
  scwin.copyScalarValues(paramData, extraParams);
  paramData.messageType = scwin.hostOptions.messageType || "ebiz";
  const pgmId = scwin.hostOptions.pgmId || scwin.toProgramId(nextUrl);
  const menuId = scwin.hostOptions.menuId || pgmId.replace(/\.jsp$/i, "");
  const menuNm = scwin.hostOptions.title || scwin.hostOptions.popupName || menuId || pgmId;
  paramData.menuInfo = {
    src: resolvedUrl || nextUrl,
    pgmId: pgmId,
    programCd: pgmId,
    pgmNm: menuNm,
    menuId: menuId,
    menuCode: menuId,
    menuNm: menuNm,
    refreshPid: menuId,
    pFrmId: "wfm_target",
    popupTitle: scwin.hostOptions.title || scwin.hostOptions.popupName || menuNm,
    popupName: scwin.hostOptions.popupName || menuNm,
    parentPgmId: "",
    parentMenuId: "",
    menuParam: extraParams
  };
  return paramData;
};
scwin.buildHostPageUrl = function (nextUrl, params, options) {
  if (!nextUrl) {
    return "";
  }
  const targetInfo = scwin.normalizeTargetInfo(nextUrl, params);
  const hostParams = {};
  scwin.copyScalarValues(hostParams, targetInfo.params);
  hostParams.nextUrl = targetInfo.url;
  hostParams.messageType = options && options.messageType ? options.messageType : "ebiz";
  hostParams.popupName = options && options.popupName ? options.popupName : "";
  hostParams.title = options && options.title ? options.title : "";
  hostParams.menuId = options && options.menuId ? options.menuId : "";
  hostParams.pgmId = options && options.pgmId ? options.pgmId : scwin.toProgramId(targetInfo.url);
  const query = scwin.toQueryString(hostParams);
  let moveUrl = "/websquare/websquare.html?w2xPath=" + encodeURIComponent("/ui/cm/zz/externalEbizHost.xml");
  if (query) {
    moveUrl += "&" + query;
  }
  return moveUrl;
};
scwin.normalizeTargetInfo = function (nextUrl, params) {
  const normalized = {
    url: "",
    params: {}
  };
  scwin.copyScalarValues(normalized.params, params);
  if (!nextUrl) {
    return normalized;
  }
  if (nextUrl.indexOf("/websquare/websquare.html") > -1) {
    const parts = nextUrl.split("?");
    const websquareParams = scwin.parseQueryString(parts[1] || "");
    normalized.url = websquareParams.w2xPath || "";
    delete websquareParams.w2xPath;
    scwin.copyScalarValues(normalized.params, websquareParams);
    return normalized;
  }
  if (/\.xml($|\?)/i.test(nextUrl)) {
    const pathParts = nextUrl.split("?");
    normalized.url = pathParts[0];
    scwin.copyScalarValues(normalized.params, scwin.parseQueryString(pathParts[1] || ""));
    return normalized;
  }
  normalized.url = nextUrl;
  return normalized;
};
scwin.toProgramId = function (url) {
  if (!url) {
    return "";
  }
  let programUrl = url.split("?")[0];
  if (programUrl.lastIndexOf("/") > -1) {
    programUrl = programUrl.substring(programUrl.lastIndexOf("/") + 1);
  }
  return programUrl.replace(/\.xml$/i, ".jsp");
};
scwin.notifyOpener = function (resultData) {
  const callbackFn = dma_option.get("callbackFn") || "";
  let called = false;
  try {
    if (window.opener && !window.opener.closed) {
      const directFn = scwin.resolveFunction(window.opener, callbackFn);
      if (typeof directFn === "function") {
        directFn(resultData);
        called = true;
      }
    }
  } catch (e) {
    console.log(e);
  }
  return called;
};
scwin.resolveFunction = function (rootObj, path) {
  if (!rootObj || !path) {
    return null;
  }
  let target = rootObj;
  const parts = path.split(".");
  for (let idx = 0; idx < parts.length; idx++) {
    target = target[parts[idx]];
    if (typeof target === "undefined" || target === null) {
      return null;
    }
  }
  return target;
};
scwin.formatStructuredFailureMessage = function (errorCode, message) {
  const MESSAGE_EXCEPTION_HDR = "[ERROR-4]";
  const rawMessage = (message || "").toString().trim();
  const normalizedErrorCode = errorCode === null || typeof errorCode === "undefined" ? "" : String(errorCode).trim();
  if (!rawMessage) {
    return "";
  }
  if (normalizedErrorCode !== "4" && rawMessage.indexOf(MESSAGE_EXCEPTION_HDR) === -1 && rawMessage.indexOf("■") === -1) {
    return rawMessage;
  }
  let msg = rawMessage;
  if (msg.indexOf(MESSAGE_EXCEPTION_HDR) !== -1) {
    msg = msg.substring(msg.indexOf(MESSAGE_EXCEPTION_HDR) + MESSAGE_EXCEPTION_HDR.length).trim();
  }
  const parts = msg.split("■");
  const msgCode = (parts[0] || "").trim().substring(0, 8);
  let msgMain = (parts[1] || "").trim();
  let msgMesursItm = (parts[2] || "").trim();
  const IGNORE_MEASURES = ["관리자에게 문의 바랍니다.", "관리자에게 문의 바랍니다", "문의 바랍니다.", "문의 바랍니다"];
  const isActionable = /하세요|하십시오|하시기 바랍니다|입력하세요|해주세요|삭제하세요|수정하세요|확인/.test(msgMesursItm);
  if (IGNORE_MEASURES.includes(msgMesursItm) || !isActionable) {
    msgMesursItm = "";
  }
  if (!msgMain) {
    msgMain = msg;
  }
  const msgMainMultiLine = msgMain.replace(/<br\s*\/?>/gi, "\n");
  const msgMesursItmMultiLine = msgMesursItm.replace(/<br\s*\/?>/gi, "\n");
  let resultMsg = "";
  if (msgCode) {
    resultMsg += "메시지코드: " + msgCode + "\n";
  }
  resultMsg += "메시지내용: " + msgMainMultiLine;
  if (msgMesursItm) {
    resultMsg += "\n조 치 사 항: " + msgMesursItmMultiLine;
  }
  return resultMsg;
};
scwin.resolveFailureMessage = function (response, fallbackMessage) {
  const responseJSON = response && response.responseJSON ? response.responseJSON : response || {};
  let errorCode = "";
  let message = "";
  if (typeof responseJSON.ErrorMsg === "string" && responseJSON.ErrorMsg !== "") {
    message = responseJSON.ErrorMsg;
  } else if (typeof responseJSON.errorMsg === "string" && responseJSON.errorMsg !== "") {
    message = responseJSON.errorMsg;
  } else if (typeof responseJSON.message === "string" && responseJSON.message !== "") {
    message = responseJSON.message;
  }
  if (responseJSON.resultDataSet) {
    if (Array.isArray(responseJSON.resultDataSet)) {
      if (responseJSON.resultDataSet[1] && responseJSON.resultDataSet[1].Code) {
        errorCode = responseJSON.resultDataSet[1].Code;
      } else if (responseJSON.resultDataSet[0] && responseJSON.resultDataSet[0].Code) {
        errorCode = responseJSON.resultDataSet[0].Code;
      }
      if (!message && responseJSON.resultDataSet[1] && responseJSON.resultDataSet[1].Msg) {
        message = responseJSON.resultDataSet[1].Msg;
      }
      if (!message && responseJSON.resultDataSet[0] && responseJSON.resultDataSet[0].Msg && responseJSON.resultDataSet[0].Msg !== "SUCC") {
        message = responseJSON.resultDataSet[0].Msg;
      }
    } else {
      if (responseJSON.resultDataSet.Code) {
        errorCode = responseJSON.resultDataSet.Code;
      }
      if (!message && typeof responseJSON.resultDataSet.Msg === "string" && responseJSON.resultDataSet.Msg !== "") {
        message = responseJSON.resultDataSet.Msg;
      }
    }
  }
  return scwin.formatStructuredFailureMessage(errorCode, message || fallbackMessage || "Auto login failed.");
};
scwin.sbm_ssologin_submitdone = function (e) {
  const response = e.responseJSON || {};
  const resultRow = response.OUT_GDS1 && response.OUT_GDS1.length > 0 ? response.OUT_GDS1[0] : null;
  const userId = resultRow && resultRow.userId ? resultRow.userId : "";
  const decPasswd = resultRow && resultRow.decPasswd ? resultRow.decPasswd : "";
  if (!userId || !decPasswd) {
    scwin.fail(scwin.resolveFailureMessage(response, "No login account was mapped to the given sabun."));
    return;
  }
  dma_option.set("detail", "Creating a login session for user " + userId + ".");
  ds_login.setJSON([{
    userId: userId,
    passwd: decPasswd,
    passwdCheckCnt: 0,
    ifSsoYn: "Y"
  }]);
  $c.sbm.execute($p, sbm_login);
};
scwin.sbm_ssologin_submiterror = function (e) {
  scwin.fail(scwin.resolveFailureMessage(e, "An error occurred while resolving sabun login."));
};
scwin.sbm_login_submitdone = function (e) {
  const response = e.responseJSON || {};
  const result = response.resultDataSet && response.resultDataSet.length > 0 ? response.resultDataSet[0] : null;
  if (!result) {
    scwin.fail(scwin.resolveFailureMessage(response, "Failed to read the login response."));
    return;
  }
  if (result.Msg !== "SUCC" || !response.OUT_GDS1 || response.OUT_GDS1.length < 1) {
    scwin.fail(scwin.resolveFailureMessage(response, "Auto login failed."));
    return;
  }
  const userInfo = response.OUT_GDS1[0];
  if ((dma_option.get("persistLogin") || "Y") !== "N") {
    scwin.applyLoginStorage(userInfo);
  }
  dma_option.set("status", "Auto login completed");
  dma_option.set("detail", "Logged in as " + (userInfo.userId || "") + ".");
  const resultData = {
    success: true,
    sabun: dma_option.get("sabun"),
    loginUserId: dma_option.get("loginUserId") || "",
    requestToken: dma_option.get("requestToken") || "",
    userId: userInfo.userId || "",
    userNm: userInfo.userNm || "",
    nextUrl: dma_option.get("nextUrl") || ""
  };
  const fullPageYn = (dma_option.get("fullPageYn") || "N") === "Y";
  const openerHandled = fullPageYn ? false : scwin.notifyOpener(resultData);
  if (dma_option.get("nextUrl") || fullPageYn) {
    if (openerHandled) {
      window.setTimeout(function () {
        scwin.closePopup(resultData);
      }, 100);
      return;
    }
    scwin.moveToNextUrl();
    return;
  }
  if ((dma_option.get("closeYn") || "Y") === "Y") {
    window.setTimeout(function () {
      scwin.closePopup(resultData);
    }, 500);
  }
};
scwin.sbm_login_submiterror = function (e) {
  scwin.fail(scwin.resolveFailureMessage(e, "An error occurred while creating the login session."));
};
scwin.getLoginPageUrl = function () {
  const loginPath = "/websquare/websquare.html?w2xPath=/ui/main/login.xml";
  const hostname = (window.location.hostname || "").toLowerCase();
  const origin = window.location.origin || "";
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:8080" + loginPath;
  }
  if (hostname === "newdevdebis.dongwon.com") {
    return "https://newdevdebis.dongwon.com" + loginPath;
  }
  if (hostname === "newdebis.dongwon.com") {
    return "https://newdebis.dongwon.com" + loginPath;
  }
  if (origin) {
    return origin + loginPath;
  }
  return loginPath;
};
scwin.redirectToLogin = function () {
  const loginUrl = scwin.getLoginPageUrl();
  try {
    if (window.opener && !window.opener.closed) {
      try {
        window.opener.top.location.replace(loginUrl);
      } catch (e) {
        window.opener.location.replace(loginUrl);
      }
      window.setTimeout(function () {
        scwin.closePopup({
          success: false,
          sabun: dma_option.get("sabun"),
          message: dma_option.get("detail")
        });
      }, 100);
      return;
    }
  } catch (e) {
    console.log(e);
  }
  try {
    window.top.location.replace(loginUrl);
    return;
  } catch (e) {
    console.log(e);
  }
  window.location.replace(loginUrl);
};
scwin.showFailureAlert = function (message) {
  const alertMessage = message || "An error occurred during auto login.";
  try {
    if ($c && $c.win && typeof $c.win.alert === "function") {
      const alertPromise = $c.win.alert($p, alertMessage);
      if (alertPromise && typeof alertPromise.then === "function") {
        return alertPromise;
      }
    }
  } catch (e) {
    console.log(e);
  }
  try {
    window.alert(alertMessage);
  } catch (e) {
    console.log(e);
  }
  return Promise.resolve();
};
scwin.fail = async function (message) {
  if (scwin.__failureHandled) {
    return;
  }
  scwin.__failureHandled = true;
  dma_option.set("status", "Auto login failed");
  dma_option.set("detail", message || "An error occurred during auto login.");
  const resultData = {
    success: false,
    sabun: dma_option.get("sabun"),
    requestToken: dma_option.get("requestToken") || "",
    userId: "",
    nextUrl: dma_option.get("nextUrl") || "",
    message: dma_option.get("detail")
  };
  await scwin.showFailureAlert(resultData.message);
  scwin.notifyOpener(resultData);
  scwin.redirectToLogin();
};
scwin.btn_close_onclick = function () {
  scwin.closePopup({
    success: false,
    sabun: dma_option.get("sabun"),
    message: "The popup was closed by the user."
  });
};
scwin.closePopup = function (returnValue) {
  try {
    $c.win.closePopup($p, returnValue);
    return;
  } catch (e) {
    console.log(e);
  }
  try {
    window.close();
  } catch (e) {
    console.log(e);
  }
};
scwin.copyScalarValues = function (target, source) {
  if (!source) {
    return;
  }
  Object.keys(source).forEach(function (key) {
    const value = source[key];
    if (value === null || typeof value === "undefined") {
      return;
    }
    if (typeof value === "object") {
      return;
    }
    target[key] = String(value);
  });
};
scwin.getQueryParams = function () {
  const query = window.location.search ? window.location.search.substring(1) : "";
  return scwin.parseQueryString(query);
};
scwin.appendQueryString = function (url, params) {
  const query = scwin.toQueryString(params);
  if (!query) {
    return url;
  }
  return url + (url.indexOf("?") > -1 ? "&" : "?") + query;
};
scwin.parseQueryString = function (query) {
  const result = {};
  if (!query) {
    return result;
  }
  query.split("&").forEach(function (pair) {
    if (!pair) {
      return;
    }
    const idx = pair.indexOf("=");
    const key = idx > -1 ? pair.substring(0, idx) : pair;
    const value = idx > -1 ? pair.substring(idx + 1) : "";
    result[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, " "));
  });
  return result;
};
scwin.toQueryString = function (params) {
  const queryParts = [];
  Object.keys(params || {}).forEach(function (key) {
    const value = params[key];
    if (value === null || typeof value === "undefined" || value === "") {
      return;
    }
    queryParts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
  });
  return queryParts.join("&");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'grp_root',style:'position:relative; width:100%; height:100%;'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'grp_status'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_title',label:'External Auto Login',style:'',tagname:'h3'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_status',ref:'data:dma_option.status',label:'',style:'display:block; margin-top:16px;',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_detail',ref:'data:dma_option.detail',label:'',style:'display:block; margin-top:8px;',tagname:'p'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'grp_btn',style:'position:absolute; left:0; bottom:16px; width:100%; text-align:center; z-index:1000;'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]},{T:1,N:'w2:wframe',A:{id:'wfm_target',src:'',style:'display:none; width:100%; height:calc(100% - 72px);'}}]}]}]}]})