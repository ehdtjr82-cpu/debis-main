/*amd /ui/cm/zz/commonScreenHostPopup.xml 6622 4e325c09eaf463eeea23845398cc58f76ce8ccaa700191ee6e5b10ac535c12b7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_host'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'targetUrl',name:'targetUrl',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'status',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detail',name:'detail',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.controlKeys = {
  targetUrl: true,
  nextUrl: true,
  targetParams: true,
  forceScrollYn: true,
  popupTitle: true,
  popupName: true,
  title: true,
  pgmId: true,
  menuId: true,
  menuInfo: true,
  callbackFn: true,
  messageType: true
};
scwin.targetParams = {};
scwin.targetOptions = {};
scwin.wrapperMenuInfo = {};
scwin.scrollFixRetry = 0;
scwin.onpageload = function () {
  scwin.initializeOptions();
  scwin.loadTargetPage();
};
scwin.initializeOptions = function () {
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
  if (popupParams && typeof popupParams.data === "object") {
    nestedPopupParams = popupParams.data;
  }
  const merged = {};
  scwin.mergeObject(merged, popupParams);
  scwin.mergeObject(merged, nestedPopupParams);
  dma_host.set("targetUrl", merged.targetUrl || merged.nextUrl || "");
  dma_host.set("status", "Preparing");
  dma_host.set("detail", dma_host.get("targetUrl"));
  scwin.wrapperMenuInfo = popupParams.menuInfo || nestedPopupParams.menuInfo || {};
  scwin.targetParams = {};
  if (merged.targetParams && typeof merged.targetParams === "object") {
    scwin.mergeObject(scwin.targetParams, merged.targetParams);
  }
  Object.keys(merged).forEach(function (key) {
    if (scwin.controlKeys[key]) {
      return;
    }
    scwin.targetParams[key] = merged[key];
  });
  scwin.targetOptions = {
    popupTitle: merged.popupTitle || merged.title || "",
    popupName: merged.popupName || merged.popupTitle || "",
    pgmId: merged.pgmId || "",
    menuId: merged.menuId || "",
    messageType: merged.messageType || "popup",
    forceScrollYn: merged.forceScrollYn || "N"
  };
  if (scwin.targetOptions.popupTitle) {
    document.title = scwin.targetOptions.popupTitle;
  }
};
scwin.loadTargetPage = function () {
  const targetUrl = dma_host.get("targetUrl");
  if (!targetUrl) {
    dma_host.set("status", "Invalid request");
    dma_host.set("detail", "Missing targetUrl.");
    return;
  }
  dma_host.set("status", "Opening target");
  dma_host.set("detail", targetUrl);
  $c.win.setPageFrameSrc($p, wfm_target, targetUrl, scwin.buildTargetParamData(targetUrl));
  scwin.scheduleScrollFix();
};
scwin.buildTargetParamData = function (targetUrl) {
  const paramData = {};
  scwin.mergeObject(paramData, scwin.targetParams);
  paramData.messageType = scwin.targetOptions.messageType || "popup";
  const pgmId = scwin.targetOptions.pgmId || scwin.toProgramId(targetUrl);
  const menuId = scwin.targetOptions.menuId || pgmId.replace(/\.jsp$/i, "");
  const menuNm = scwin.targetOptions.popupTitle || scwin.targetOptions.popupName || menuId || pgmId;
  paramData.menuInfo = {
    src: targetUrl,
    pgmId: pgmId,
    programCd: pgmId,
    pgmNm: menuNm,
    menuId: menuId,
    menuCode: menuId,
    menuNm: menuNm,
    refreshPid: menuId,
    pFrmId: "wfm_target",
    popupName: scwin.targetOptions.popupName || menuNm,
    popupTitle: scwin.targetOptions.popupTitle || menuNm,
    parentPgmId: scwin.wrapperMenuInfo.parentPgmId || scwin.wrapperMenuInfo.pgmId || "",
    parentMenuId: scwin.wrapperMenuInfo.parentMenuId || scwin.wrapperMenuInfo.menuId || "",
    menuParam: scwin.targetParams
  };
  return paramData;
};
scwin.toProgramId = function (url) {
  if (!url) {
    return "";
  }
  let programId = url.split("?")[0];
  if (programId.lastIndexOf("/") > -1) {
    programId = programId.substring(programId.lastIndexOf("/") + 1);
  }
  return programId.replace(/\.xml$/i, ".jsp");
};
scwin.mergeObject = function (target, source) {
  if (!source || typeof source !== "object") {
    return target;
  }
  Object.keys(source).forEach(function (key) {
    target[key] = source[key];
  });
  return target;
};
scwin.scheduleScrollFix = function () {
  if (scwin.targetOptions.forceScrollYn !== "Y") {
    return;
  }
  scwin.scrollFixRetry = 0;
  scwin.tryApplyScrollFix();
};
scwin.tryApplyScrollFix = function () {
  scwin.scrollFixRetry += 1;
  if (scwin.applyScrollFix()) {
    return;
  }
  if (scwin.scrollFixRetry < 20) {
    $p.setTimeout(scwin.tryApplyScrollFix, 300);
  }
};
scwin.applyScrollFix = function () {
  try {
    const childWin = wfm_target.getWindow ? wfm_target.getWindow() : null;
    if (!childWin || !childWin.document || !childWin.document.body) {
      return false;
    }
    const doc = childWin.document;
    const root = doc.querySelector(".sub_contents") || doc.body.firstElementChild;
    scwin.setStyleValue(doc.documentElement, "overflow", "auto");
    scwin.setStyleValue(doc.documentElement, "height", "auto");
    scwin.setStyleValue(doc.documentElement, "minHeight", "100%");
    scwin.setStyleValue(doc.body, "overflow", "auto");
    scwin.setStyleValue(doc.body, "height", "auto");
    scwin.setStyleValue(doc.body, "minHeight", "100%");
    if (root) {
      scwin.setStyleValue(root, "overflow", "visible");
      scwin.setStyleValue(root, "height", "auto");
      scwin.setStyleValue(root, "minHeight", "100%");
    }
    return true;
  } catch (e) {
    return false;
  }
};
scwin.setStyleValue = function (target, key, value) {
  if (!target || !target.style) {
    return;
  }
  target.style[key] = value;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp_root',style:'width:100%; height:100%; overflow:auto;'},E:[{T:1,N:'w2:wframe',A:{id:'wfm_target',src:'',style:'width:100%; height:100%; overflow:auto;'}}]}]}]}]})