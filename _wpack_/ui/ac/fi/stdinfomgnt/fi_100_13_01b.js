/*amd /ui/ac/fi/stdinfomgnt/fi_100_13_01b.xml 13323 6db2083e83d64808aea910afda6f7372caded00ab83479efb7efba81d4ee6b1c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mem'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'id',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmId',name:'pgmId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'authMenuId',name:'authMenuId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'authSysCd',name:'authSysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'authBypassYn',name:'authBypassYn',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mainkey',name:'메인Key',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_urlList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vatNo',name:'부가세번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'silpNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'URL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'displayText',name:'링크이름',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMemInfo',action:'/cm.bc.comnmgnt.privmgnt.RetrieveUserEachScreenPrivilegeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_mem","key":"IN_GDS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_urlList',action:'/ac.fi.stdinfomgnt.RetrieveValueAddedTaxCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_urlList","key":"OUT_DS"}]',target:'data:json,{"id":"ds_urlList","key":"OUT_DS"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_100_13_01b
// 이름     : 외부거래명세서
// 경로     : 
// 사용계정 : 외부 사용자
// 비고     :
//            2026-04-29 : http 접속 방지 위해 sbm_urlList 추가
//
// 레포트   : random
//
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================

scwin.certiOzrFileNm = "";
scwin.certiOdiFileNm = "";
scwin.certiOzParam = "";
scwin.onpageload = function () {
  console.log("====== onpageload ==================v 1.02");
  scwin.initializeReportParameter();
  scwin.checkLogin();
  $c.data.setPopupTitle($p, "외부거래명세서");

  // scwin.renderReport(0);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    // scwin.renderReport(0);
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// checkLogin 로그인 체크 : http 로 접속 방지
//-------------------------------------------------------------------------
scwin.checkLogin = async function () {
  console.log("===== checkLogin");

  // http 접속을 방지하기 위한 조회
  let rtn = await scwin.f_RetrieveUrl();
  if (!rtn) {
    console.log("  http 접속에 의한 방지 - f_RetrieveUrl rtn [" + rtn + "]");
  } else {
    console.log("  http 접속 아님, 계속 진행 rtn [" + rtn + "]");
    scwin.renderReport(0);
  }
};

//-------------------------------------------------------------------------
// 조회 (url 목록 - http 접속 방지)
//-------------------------------------------------------------------------
scwin.f_RetrieveUrl = async function () {
  console.log("====== f_RetrieveUrl ==================");

  //vatNo 로 거래명세서 조회
  // ValueAddedTaxCertiCondDTO paramDTO = new ValueAddedTaxCertiCondDTO();
  // paramDTO.setVatNo(vatNo);
  // paramDTO.setCrn(crn);
  ds_search.setEmptyValue();
  ds_urlList.setJSON([]);
  const vatNo = (scwin.certiOzrFileNm || "").trim();
  const crn = (scwin.certiOdiFileNm || "").trim();
  ds_search.set("vatNo", vatNo);
  ds_search.set("crn", crn);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  let e = await $c.sbm.execute($p, sbm_urlList);
  console.log("----- sbm_urlList_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    return false;
  }

  // displayText 생성하여 옮기기 : generator 용 - 
  var list = ds_urlList.getAllJSON();
  for (var i = 0; i < list.length; i++) {
    list[i].displayText = "거래명세서 상세보기 " + (i + 1);
  }
  ds_urlList.setJSON(list);
  return true;
};

//-------------------------------------------------------------------------
// 레포트 파라미터 초기화
//-------------------------------------------------------------------------
scwin.initializeReportParameter = function () {
  scwin.certiOzrFileNm = scwin.getStartParameter("certiOzrFileNm");
  scwin.certiOdiFileNm = (scwin.getStartParameter("certiOdiFileNm") || "").replace(/\.odi$/i, "");
  scwin.certiOzParam = scwin.getStartParameter("certiOzParam");
  console.log("fi_100_13_01b certiOzrFileNm", scwin.certiOzrFileNm);
  console.log("fi_100_13_01b certiOdiFileNm", scwin.certiOdiFileNm);
  console.log("fi_100_13_01b certiOzParam", scwin.certiOzParam);
};

//-------------------------------------------------------------------------
// 레포트 파라미터 추출
//   지정된 이름 추출 : & 로 구분
//     &certParam=param1=4A6  --> 이름 떼고, param1 부터 잘라냄
//-------------------------------------------------------------------------
scwin.getStartParameter = function (key) {
  try {
    const value = $p.getParameter(key);
    if (typeof value !== "undefined" && value !== null && value !== "") {
      return value;
    }
  } catch (e) {}
  try {
    const allParam = $p.getAllParameter() || {};
    const paramData = allParam.paramData || {};
    const nestedParamData = paramData.data || {};
    const menuInfo = paramData.menuInfo || {};
    const menuParam = menuInfo.menuParam || {};
    const dataObject = allParam.dataObject && allParam.dataObject.data ? allParam.dataObject.data : {};
    const candidate = paramData[key] || nestedParamData[key] || menuParam[key] || dataObject[key];
    if (typeof candidate !== "undefined" && candidate !== null && candidate !== "") {
      return candidate;
    }
  } catch (e) {}
  const query = window.location.search ? window.location.search.substring(1) : "";
  if (!query) {
    return "";
  }
  const parts = query.split("&");
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const idx = part.indexOf("=");
    const queryKey = idx > -1 ? part.substring(0, idx) : part;
    if (decodeURIComponent(queryKey) !== key) {
      continue;
    }
    const queryValue = idx > -1 ? part.substring(idx + 1) : "";
    return decodeURIComponent(queryValue.replace(/\+/g, " "));
  }
  return "";
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
// 레포트 on iframe load
//-------------------------------------------------------------------------
scwin.wfm_ozReport_oniframeload = function () {
  console.log("=== wfm_ozReport_oniframeload");
  // scwin.renderReport(0);
};

//-------------------------------------------------------------------------
// 레포트 파라미터 세팅
//-------------------------------------------------------------------------
scwin.renderReport = function (retryCount) {
  const data = scwin.buildReportData();
  if (!data) {
    console.warn("fi_100_13_01b: report parameter missing", {
      certiOzrFileNm: scwin.certiOzrFileNm,
      certiOdiFileNm: scwin.certiOdiFileNm,
      certiOzParam: scwin.certiOzParam
    });
    return;
  }
  let reportWindow = null;
  try {
    reportWindow = wfm_ozReport.getWindow ? wfm_ozReport.getWindow() : null;
  } catch (e) {
    reportWindow = null;
  }
  if (!reportWindow || !reportWindow.mf_scwin || typeof reportWindow.mf_scwin.reportSearch !== "function" || reportWindow.mf_scwin.ozReady !== true) {
    if ((retryCount || 0) < 40) {
      $p.setTimeout(function () {
        scwin.renderReport((retryCount || 0) + 1);
      }, {
        "delay": 300
      });
    }
    return;
  }
  console.log("fi_100_13_01b report data", data);
  reportWindow.mf_scwin.reportSearch(data);

  // exe 로 띄움
  // let opts = {
  //     type: 'viewer', // viewer, print, download
  //     printMode: 'view', // silent, view
  // };

  // console.log(" ============== exe ");
  // $c.ext.openOzReport(data, opts);
};

//-------------------------------------------------------------------------
// 레포트 data 세팅
//-------------------------------------------------------------------------
scwin.buildReportData = function () {
  const reportName = (scwin.certiOzrFileNm || "").trim();
  const odiName = (scwin.certiOdiFileNm || "").trim();
  if (!reportName || !odiName) {
    return null;
  }
  return {
    odiName: odiName,
    reportName: reportName,
    odiParam: scwin.parseOzParam(scwin.certiOzParam),
    viewerParam: {
      viewer: 100,
      useprogressbar: false
    },
    formParam: {}
  };
};

//-------------------------------------------------------------------------
// 레포트 data - 파라미터 세팅
//   지정된 이름 추출 : , 로 구분. key = value 구조
//-------------------------------------------------------------------------
scwin.parseOzParam = function (rawValue) {
  const result = {};
  const paramText = (rawValue || "").trim();
  if (!paramText) {
    return result;
  }
  paramText.split(",").forEach(function (entry) {
    const pair = (entry || "").trim();
    if (!pair) {
      return;
    }
    const idx = pair.indexOf("=");
    if (idx < 0) {
      result[pair] = "";
      return;
    }
    const key = pair.substring(0, idx).trim();
    const value = pair.substring(idx + 1).trim();
    if (!key) {
      return;
    }
    result[key] = value;
  });
  return result;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'ed_title',src:'/cm/xml/contentHeader.xml',style:'',msaName:'외부거래명세서'}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:'width:100%;height:100%','ev:oniframeload':'scwin.wfm_ozReport_oniframeload'}}]}]}]}]}]}]})