/*amd /ui/cm/zz/externalEbizHost.xml 5491 abb39a184b99b12c976909126def72991eb921dca03b1c4aa7f66736a10e60ab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_host'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'nextUrl',name:'nextUrl',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'status',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detail',name:'detail',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'status',E:[{T:4,cdata:'Preparing'}]},{T:1,N:'detail',E:[{T:4,cdata:'Loading the target page.'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.controlKeys = {
  nextUrl: true,
  targetUrl: true,
  forwardUrl: true,
  messageType: true,
  popupName: true,
  title: true,
  menuId: true,
  pgmId: true,
  w2xPath: true,
  popupID: true,
  w2xHome: true,
  w2xDocumentRoot: true,
  paramData: true
};
scwin.onpageload = function () {
  scwin.initializeOptions();
  scwin.loadTargetPage();
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
  dma_host.set("nextUrl", nextUrl);
  scwin.targetOptions = {
    messageType: merged.messageType || "ebiz",
    popupName: merged.popupName || "",
    title: merged.title || "",
    menuId: merged.menuId || "",
    pgmId: merged.pgmId || scwin.toProgramId(nextUrl)
  };
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
};
scwin.loadTargetPage = function () {
  const nextUrl = dma_host.get("nextUrl");
  if (!nextUrl) {
    dma_host.set("status", "Invalid request");
    dma_host.set("detail", "Missing nextUrl in ebiz host request.");
    return;
  }
  dma_host.set("status", "Opening target");
  dma_host.set("detail", nextUrl);
  $c.win.setPageFrameSrc($p, wfm_target, nextUrl, scwin.buildTargetParamData(nextUrl));
};
scwin.buildTargetParamData = function (nextUrl) {
  const paramData = {};
  scwin.copyScalarValues(paramData, scwin.passThroughParams);
  paramData.messageType = scwin.targetOptions.messageType || "ebiz";
  const pgmId = scwin.targetOptions.pgmId || scwin.toProgramId(nextUrl);
  const menuId = scwin.targetOptions.menuId || pgmId.replace(/\.jsp$/i, "");
  const menuNm = scwin.targetOptions.title || scwin.targetOptions.popupName || menuId || pgmId;
  paramData.menuInfo = {
    src: nextUrl,
    pgmId: pgmId,
    programCd: pgmId,
    pgmNm: menuNm,
    menuId: menuId,
    menuCode: menuId,
    menuNm: menuNm,
    refreshPid: menuId,
    pFrmId: "wfm_target",
    popupName: scwin.targetOptions.popupName || menuNm,
    parentPgmId: "",
    parentMenuId: "",
    menuParam: scwin.passThroughParams
  };
  return paramData;
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
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'grp_root',style:'width:100%; height:100%;'},E:[{T:1,N:'w2:wframe',A:{id:'wfm_target',src:'',style:'width:100%; height:100%;'}}]}]}]}]})