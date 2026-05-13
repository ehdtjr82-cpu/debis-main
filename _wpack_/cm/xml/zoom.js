/*amd /cm/xml/zoom.xml 5121 1a5ada214a1c4976d02afe109c6e78154fc44905b56244e0ea08e8784b3e4032 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : zoom(Preview Popup)
 * 메뉴경로 : 
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/common/jsp/zoom.html
 * 작 성 자 : 박진수
 * 작 업 일 : 2025-12-04
 * 수정이력  :
 *    - 2025-12-04      박진수    최초작성
 *    - 2025-01-16      정승혜    getParameter 위치수정, 다운로드 주석처리
 * 조회조건 : 
 */

scwin.params = "";
scwin.fileName = "";
scwin.filePath = "";

// 파일 다운로드 URL
scwin.FILE_DOWNLOAD_URL = "/s3upload.do";
scwin.pgmId = "";
scwin.src = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.fileName = scwin.params["fileName"];
  scwin.filePath = scwin.params["filePath"];
  scwin.previewUrl = scwin.params["previewUrl"];
  //console.log("params : " + JSON.stringify(scwin.params));

  try {
    let menuInfo = $p.parent().$p.getParameter("paramData").menuInfo;
    if (typeof menuInfo !== "undefined") {
      scwin.pgmId = menuInfo.pgmId;
      scwin.src = menuInfo.src;
    }
  } catch (e) {
    console.log("#### parameter ###");
  }
  if (scwin.previewUrl) {
    img_preview.setSrc(scwin.previewUrl);
  } else {
    let tempData = scwin.filePath;
    let filePath = tempData.substring(0, tempData.lastIndexOf("/") + 1);
    let fileNm = tempData.substring(tempData.lastIndexOf("/") + 1);
    let rowNum = 0;
    img_preview.setSrc(scwin.buildDownloadUrl(scwin.buildPreviewParam(rowNum), "Link"));
  }
  scwin.centerPreviewImage();

  //scwin.f_previewImg();
};
scwin.centerPreviewImage = function (retryCount) {
  const currentRetry = retryCount || 0;
  const viewport = grp_image_viewport && grp_image_viewport.render;
  const imageElement = img_preview && img_preview.render;
  if (!viewport || !imageElement) {
    return;
  }
  const imageWidth = imageElement.naturalWidth || imageElement.scrollWidth || imageElement.width || 0;
  if (!imageWidth) {
    if (currentRetry >= 20) {
      return;
    }
    $p.setTimeout(function (nextRetry) {
      scwin.centerPreviewImage(nextRetry);
    }, {
      delay: 100,
      args: [currentRetry + 1]
    });
    return;
  }
  viewport.scrollLeft = Math.max(0, (viewport.scrollWidth - viewport.clientWidth) / 2);
  viewport.scrollTop = 0;
};
scwin.buildDownloadUrl = function (paramJson, flag) {
  return scwin.FILE_DOWNLOAD_URL + "?" + new URLSearchParams({
    path: scwin.buildStoredFileKey(paramJson.FILE_PATH, paramJson.FILE_NAME),
    fileName: paramJson.FILE_NAME || "",
    fileType: flag == "Link" ? "LINK" : "DOWN",
    direct: "true",
    fallback: "true",
    PGM_ID: paramJson.PGM_ID || "",
    CALLER_URL: paramJson.CALLER_URL || ""
  }).toString();
};
scwin.buildPreviewParam = function (rowIndex) {
  let tempData = scwin.filePath;
  let filePath = tempData.substring(0, tempData.lastIndexOf("/") + 1);
  let fileNm = tempData.substring(tempData.lastIndexOf("/") + 1);
  return {
    "FILE_NAME": fileNm,
    "STORED_FILE_NAME": scwin.fileName,
    "FILE_PATH": filePath,
    "PGM_ID": scwin.pgmId,
    "CALLER_URL": scwin.src,
    "FILE_TYPE": "LINK"
  };
};
scwin.buildStoredFileKey = function (filePath, fileName) {
  if (!filePath) {
    return fileName;
  }
  if (filePath.endsWith(fileName)) {
    return filePath;
  }
  if (filePath.endsWith("/")) {
    return filePath + fileName;
  }
  return filePath + "/" + fileName;
};
scwin.f_Close = function () {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 이미지 미리보기
//-------------------------------------------------------------------------
scwin.f_previewImg = function () {
  //다운로드
  //img_preview.setSrc($c.gus.cfGetFileURL(scwin.fileName,scwin.filePath));
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'flex_gvw',id:''},E:[{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'xf:group',A:{id:'grp_image_viewport',style:'flex:1; overflow:auto; min-height:0;'},E:[{T:1,N:'xf:group',A:{id:'',style:'min-width:100%; min-height:100%; display:flex; justify-content:center; align-items:center;'},E:[{T:1,N:'xf:image',A:{id:'img_preview',src:'',style:'max-width:none; max-height:none; width:auto; height:auto; display:block;'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]}]})