/*amd /ui/cm/zz/ozreportPopup.xml 11292 8b71630d0ce6dad17a6c491c41e6b66478b399ca8497e56f6729440979d0228c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'https://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'https://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/* =========================================================
 * 환경 분기
 * - localhost / 127.0.0.1 => newdevdebis
 * - 그 외 => 현재 origin
 * ========================================================= */
scwin.getBaseOrigin = function () {
  var host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    //return "https://newdevdebis.dongwon.com";
    return "https://ebizdevdebis.dongwon.com";
  } else if (host === 'newtestdebis.dongwon.com') {
    //return 'https://newdebis.dongwon.com';
    return 'https://ebizdebis.dongwon.com';
  }
  return window.location.origin;
};
scwin.BASE_ORIGIN = scwin.getBaseOrigin();
scwin.OZ_BASE = scwin.BASE_ORIGIN + "/oz90";
scwin.SERVER_URL = scwin.OZ_BASE + "/server";
scwin.VIEWER_URL = scwin.OZ_BASE + "/ozhviewer/";

/* =========================================================
 * 공통 상태값
 * ========================================================= */
scwin.ozParamStr = "";
scwin.memJSON = {};
scwin.params = {};
scwin.ozResourceLoaded = false;

/* =========================================================
 * 동적 리소스 로드
 * ========================================================= */
scwin.appendStylesheet = function (href) {
  var head = document.getElementsByTagName("head")[0];
  var links = document.getElementsByTagName("link");
  for (var i = 0; i < links.length; i++) {
    if (links[i].href === href) {
      return;
    }
  }
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  head.appendChild(link);
};
scwin.appendScript = function (src, callback) {
  var head = document.getElementsByTagName("head")[0];
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src === src) {
      if (typeof callback === "function") {
        callback();
      }
      return;
    }
  }
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = function () {
    if (typeof callback === "function") {
      callback();
    }
  };
  script.onerror = function () {
    console.error("스크립트 로드 실패:", src);
  };
  head.appendChild(script);
};
scwin.loadOzResources = function (callback) {
  scwin.appendStylesheet(scwin.OZ_BASE + "/ozhviewer/ui.dynatree.css");
  scwin.appendScript(scwin.OZ_BASE + "/ozhviewer/jquery.dynatree.js", function () {
    scwin.appendScript(scwin.OZ_BASE + "/ozhviewer/OZJSViewer.js", function () {
      scwin.ozResourceLoaded = true;
      if (typeof callback === "function") {
        callback();
      }
    });
  });
};

/* =========================================================
 * onpageload
 * ========================================================= */
scwin.onpageload = function () {
  try {
    scwin.memJSON = $c.data.getMemInfo($p) || {};
  } catch (e) {
    console.warn("memInfo 가져오기 실패:", e);
    scwin.memJSON = {};
  }
  try {
    scwin.params = $c.data.getParameter($p) || {};
  } catch (e) {
    console.warn("parameter 가져오기 실패:", e);
    scwin.params = {};
  }
  scwin.loadOzResources(function () {
    try {
      scwin.ozParamStr = scwin.buildOzParamString(scwin.params);
      var opt = [];
      opt["use_request_header"] = false;
      opt["oz_param_string"] = scwin.ozParamStr;
      start_ozjs("OZViewer", scwin.VIEWER_URL, opt);
    } catch (e) {
      console.error("OZViewer 시작 실패:", e);
    }
  });

  // setTimeout(function () {
  //     if (scwin.params.viewerParam && scwin.params.viewerParam.mode === "print") {
  //         $c.win.closePopup();
  //     }
  // }, 1000);
};

/* =========================================================
 * OZ 파라미터 세팅 콜백
 * ========================================================= */
window.SetOZParamters_OZViewer = function () {
  var oz = document.getElementById("OZViewer");
  if (!oz) {
    console.error("OZViewer 객체를 찾을 수 없습니다.");
    return false;
  }
  if (!scwin.ozParamStr) {
    console.warn("ozParamStr가 비어 있습니다.");
    return true;
  }
  var ozParam1 = scwin.ozParamStr.split("#OZ#");
  for (var i = 0; i < ozParam1.length; i++) {
    var str = ozParam1[i];
    if (str.indexOf("=") > -1) {
      var paramKey = str.substring(0, str.indexOf("="));
      var paramValue = str.substring(str.indexOf("=") + 1);
      try {
        if (typeof oz.sendToActionScript === "function") {
          var paramKey = paramKey.replace(/viewer\.export\./, 'export.').replace(/viewer\.print\./, 'print.');
          oz.sendToActionScript(paramKey, paramValue);
          console.log("OZ Parameter Set: " + paramKey + " = " + paramValue.substring(0, 50) + "...");
        }
      } catch (e) {
        console.error("sendToActionScript 실패:", e, paramKey);
      }
    }
  }
  console.log("OZ Viewer 파라미터 설정 완료.");
  return true;
};

/* =========================================================
 * OZ 파라미터 문자열 생성
 * ========================================================= */
scwin.buildOzParamString = function (data) {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");
  const formatted = `${yyyy}/${mm}/${dd} ${hh}:${mi}`;
  const odiName = data.odiName;
  const reportName = data.reportName || "";
  const odiParam = data.odiParam || {};
  const viewerParam = data.viewerParam || {};
  const formParam = data.formParam || {};
  var pgmName = "";
  if (scwin.params && scwin.params.menuInfo && scwin.params.menuInfo.parentPgmId) {
    pgmName = scwin.params.menuInfo.parentPgmId;
  }
  let result = `connection.servlet=${scwin.SERVER_URL}#OZ#`;
  const reportList = reportName.split(";").map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return !!s;
  });
  if (reportList.length === 0) {
    throw new Error("reportName이 없습니다.");
  }
  const formObj = formParam.formParamObj || {};
  const getDispName = function (idx) {
    return (formObj["dispName" + idx] || "보고서" + idx).toString();
  };
  const userId = scwin.memJSON && scwin.memJSON.userId ? scwin.memJSON.userId : "";
  const userNm = scwin.memJSON && scwin.memJSON.userNm ? scwin.memJSON.userNm : "";

  /* ---------------- 메인 리포트 ---------------- */
  result += `connection.reportname=${reportList[0]}#OZ#`;
  result += `connection.displayname=${getDispName(1)}#OZ#`;
  result += `connection.pcount=5#OZ#`;
  result += `connection.args1=pgmId=${pgmName}#OZ#`;
  result += `connection.args2=reportTime=${formatted}#OZ#`;
  result += `connection.args3=reportDate=${yyyy}/${mm}/${dd}#OZ#`;
  result += `connection.args4=userId=${userId}#OZ#`;
  result += `connection.args5=userNm=${userNm}#OZ#`;
  if (reportList.length > 1) {
    result += `viewer.childcount=${reportList.length - 1}#OZ#`;
    result += `viewer.showtree=true#OZ#`;
  }

  /* ---------------- ODI ---------------- */
  const odiKeys = Object.keys(odiParam || {});
  const realOdiName = odiName || reportList[0].substring(reportList[0].lastIndexOf("/") + 1).replace(".ozr", "");
  result += `odi.odinames=${realOdiName}#OZ#`;
  result += `odi.${realOdiName}.pcount=${odiKeys.length}#OZ#`;
  odiKeys.forEach(function (key, idx) {
    result += `odi.${realOdiName}.args${idx + 1}=${key}=${odiParam[key]}#OZ#`;
  });

  /* ---------------- child report ---------------- */
  if (reportList.length > 1) {
    for (let i = 1; i < reportList.length; i++) {
      const childIdx = i;
      const dispIdx = i + 1;
      result += `child${childIdx}.connection.servlet=${scwin.SERVER_URL}#OZ#`;
      result += `child${childIdx}.connection.reportname=${reportList[i]}#OZ#`;
      result += `child${childIdx}.connection.displayname=${getDispName(dispIdx)}#OZ#`;
      result += `child${childIdx}.connection.pcount=5#OZ#`;
      result += `child${childIdx}.connection.args1=pgmId=${pgmName}#OZ#`;
      result += `child${childIdx}.connection.args2=reportTime=${formatted}#OZ#`;
      result += `child${childIdx}.connection.args3=reportDate=${yyyy}/${mm}/${dd}#OZ#`;
      result += `child${childIdx}.connection.args4=userId=${userId}#OZ#`;
      result += `child${childIdx}.connection.args5=userNm=${userNm}#OZ#`;
      result += `child${childIdx}.odi.odinames=${realOdiName}#OZ#`;
      result += `child${childIdx}.odi.${realOdiName}.pcount=${odiKeys.length}#OZ#`;
      odiKeys.forEach(function (key, idx) {
        result += `child${childIdx}.odi.${realOdiName}.args${idx + 1}=${key}=${odiParam[key]}#OZ#`;
      });
    }
  }

  /* ---------------- viewerParam ---------------- */
  if (viewerParam && typeof viewerParam === "object") {
    Object.keys(viewerParam).forEach(function (key) {
      if (key === "viewParamObj") {
        result += `viewer.viewParamObj=${encodeURIComponent(JSON.stringify(viewerParam[key] || {}))}#OZ#`;
      } else if (viewerParam[key] !== "print" && viewerParam[key] !== "export") {
        result += `viewer.${key}=${viewerParam[key]}#OZ#`;
      }
    });
  }

  /* ---------------- formParam ---------------- */
  if (formParam && typeof formParam === "object") {
    Object.keys(formParam).forEach(function (key) {
      if (key === "formParamObj") {
        result += `report.param.formParamObj=${encodeURIComponent(JSON.stringify(formParam[key] || {}))}#OZ#`;
      } else {
        result += `report.param.${key}=${formParam[key]}#OZ#`;
      }
    });
  }
  console.log('buildOzParamString', data, result);
  return result;
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'div',A:{style:'width:100%;height:100%;',id:'OZViewer'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'pop-btnbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_close_onclick',style:'',id:'trigger2',label:'삭제',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'닫기'}]}]}]}]}]}]}]})