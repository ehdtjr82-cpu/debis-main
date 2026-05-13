/*amd /ui/tn/cs/clntmgnt/tn_200_01_01p.xml 8203 11d9b638132819d1b2101d151b5e6553551b47a6a614f9fbb07bb6a236d9685a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filepath',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.systemPathVal = "/tn/cs/clntmgnt";
scwin.argObject = null;
scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_fileSiz = "";
scwin.g_fixWrkPlCd = "";
scwin.g_fixWrkNo = "temp";
scwin.onpageload = function () {
  scwin.argObject = $c.data.getParameter($p) || {};
  scwin.g_filePath = scwin.argObject.filePath || "";
  scwin.g_fileName = scwin.argObject.fileName || "";
  scwin.g_fileSiz = scwin.argObject.fileSize || "";
  scwin.g_fixWrkPlCd = scwin.argObject.fileWrkPlCd || "";
  scwin.g_fixWrkNo = scwin.argObject.fileWrkNo || "temp";
  scwin.applyInitialFileData();
};
scwin.getExtension = function (fileName) {
  if ($c.util.isEmpty($p, fileName)) {
    return "";
  }
  const lastDot = fileName.lastIndexOf(".");
  return lastDot > -1 ? fileName.substring(lastDot) : "";
};
scwin.stripExtension = function (fileName) {
  if ($c.util.isEmpty($p, fileName)) {
    return "";
  }
  const lastDot = fileName.lastIndexOf(".");
  return lastDot > -1 ? fileName.substring(0, lastDot) : fileName;
};
scwin.buildStoredFilePath = function (storedPath, storedFileName) {
  if ($c.util.isEmpty($p, storedPath)) {
    return storedFileName || "";
  }
  if ($c.util.isEmpty($p, storedFileName) || storedPath.endsWith(storedFileName)) {
    return storedPath;
  }
  if (storedPath.endsWith("/")) {
    return storedPath + storedFileName;
  }
  return storedPath + "/" + storedFileName;
};
scwin.splitStoredFilePath = function (filePath) {
  if ($c.util.isEmpty($p, filePath)) {
    return {
      storedPath: "",
      storedFileName: ""
    };
  }
  const lastSlash = filePath.lastIndexOf("/");
  if (lastSlash < 0) {
    return {
      storedPath: "",
      storedFileName: filePath
    };
  }
  return {
    storedPath: filePath.substring(0, lastSlash + 1),
    storedFileName: filePath.substring(lastSlash + 1)
  };
};
scwin.normalizeOriginFileName = function (fileName, filePath) {
  if ($c.util.isEmpty($p, fileName)) {
    return filePath ? scwin.splitStoredFilePath(filePath).storedFileName : "";
  }
  if (scwin.getExtension(fileName) !== "") {
    return fileName;
  }
  return fileName + scwin.getExtension(filePath);
};
scwin.toReturnFileName = function (originFileName, filePath) {
  if ($c.util.isEmpty($p, originFileName)) {
    return scwin.stripExtension(scwin.splitStoredFilePath(filePath).storedFileName);
  }
  return scwin.stripExtension(originFileName);
};
scwin.buildInitialFileRow = function () {
  if ($c.util.isEmpty($p, scwin.g_filePath)) {
    return null;
  }
  const storedFileInfo = scwin.splitStoredFilePath(scwin.g_filePath);
  const originFileName = scwin.normalizeOriginFileName(scwin.g_fileName, scwin.g_filePath);
  return {
    FILE_STORED_PATH: storedFileInfo.storedPath,
    STORED_FILE_NM: storedFileInfo.storedFileName,
    ORIGIN_FILE_NM: originFileName,
    FILE_SIZE: scwin.g_fileSiz || "",
    rowStatus: "R",
    status: "Completed"
  };
};
scwin.applyInitialFileData = function () {
  if (typeof udc_fielUpload === "undefined" || typeof udc_fielUpload.setData !== "function") {
    return;
  }
  const initialFileRow = scwin.buildInitialFileRow();
  if (!initialFileRow) {
    return;
  }
  udc_fielUpload.setData([initialFileRow]);
};
scwin.getActiveFileRows = function () {
  const fileList = typeof udc_fielUpload !== "undefined" && typeof udc_fielUpload.getData === "function" ? udc_fielUpload.getData() || [] : [];
  return fileList.filter(function (fileRow) {
    const rowStatus = fileRow.rowStatus || "";
    const hasFileInfo = !$c.util.isEmpty($p, fileRow.ORIGIN_FILE_NM) || !$c.util.isEmpty($p, fileRow.STORED_FILE_NM) || !$c.util.isEmpty($p, fileRow.FILE_STORED_PATH);
    return rowStatus !== "D" && hasFileInfo;
  });
};
scwin.hasPendingUploadFile = function () {
  const activeFileRows = scwin.getActiveFileRows();
  return activeFileRows.some(function (fileRow) {
    const hasStoredFile = !$c.util.isEmpty($p, fileRow.FILE_STORED_PATH) || !$c.util.isEmpty($p, fileRow.STORED_FILE_NM);
    return !hasStoredFile && !$c.util.isEmpty($p, fileRow.ORIGIN_FILE_NM);
  });
};
scwin.getReturnFileInfo = function () {
  const fileList = scwin.getActiveFileRows();
  for (let idx = 0; idx < fileList.length; idx++) {
    const fileRow = fileList[idx];
    const rowStatus = fileRow.rowStatus || "";
    const hasStoredFile = !$c.util.isEmpty($p, fileRow.FILE_STORED_PATH) || !$c.util.isEmpty($p, fileRow.STORED_FILE_NM);
    if (rowStatus === "D" || !hasStoredFile) {
      continue;
    }
    const fullPath = scwin.buildStoredFilePath(fileRow.FILE_STORED_PATH, fileRow.STORED_FILE_NM);
    const originFileName = fileRow.ORIGIN_FILE_NM || fileRow.STORED_FILE_NM || "";
    if ($c.util.isEmpty($p, fullPath)) {
      continue;
    }
    return {
      filePath: fullPath,
      fileName: scwin.toReturnFileName(originFileName, fullPath),
      fileSize: fileRow.FILE_SIZE || ""
    };
  }
  if ($c.util.isEmpty($p, scwin.g_filePath)) {
    return null;
  }
  return {
    filePath: scwin.g_filePath,
    fileName: scwin.g_fileName,
    fileSize: scwin.g_fileSiz || ""
  };
};
scwin.f_Close = function () {
  const fileInfo = scwin.getReturnFileInfo();
  if (!fileInfo) {
    $c.win.closePopup($p, ["", "", ""]);
    return;
  }
  $c.win.closePopup($p, [fileInfo.filePath, fileInfo.fileName, fileInfo.fileSize]);
};
scwin.fileSubmit = async function () {
  const activeFileRows = scwin.getActiveFileRows();
  if (activeFileRows.length === 0 && $c.util.isEmpty($p, scwin.g_filePath)) {
    await $c.win.alert($p, "파일을 선택하세요.");
    return;
  }
  if (!(await $c.win.confirm($p, "저장하시겠습니까?"))) {
    return;
  }
  if (scwin.hasPendingUploadFile()) {
    udc_fielUpload.setSubDir(scwin.systemPathVal);
    udc_fielUpload.startFileUpload();
    return;
  }
  scwin.f_Close();
};
scwin.uploadComplete = function () {
  scwin.f_Close();
};
scwin.udc_fielUpload_onFileUploadDone = function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  $c.gus.cfAlertMsg($p, MSG_CM_INF_002);
  scwin.f_Close();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{id:'udc_fielUpload',fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'1',maxFileSize:'536870912',style:'',totalFileSize:'2009715200',subDir:'/tn/cs/clntmgnt',saveFn:'scwin.fileSubmit',saveButtonYn:'N','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:3,text:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.fileSubmit'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]})