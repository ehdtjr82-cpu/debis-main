/*amd /ui/cm/zz/commonSingleFilePopup.xml 21771 825c72ea75f7f9f33f41c75232c79ff1b0195610ff8182160ac0059093bf670e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.options = {};
scwin.parameterData = null;
scwin.initialFileApplied = false;
scwin.fileUploadHookInstalled = false;
scwin.fileUploadHookRetryCount = 0;
scwin.fileUploadHookRetryMax = 200;
scwin.parseObjectParam = function (value, defaultValue) {
  if (typeof value === "undefined" || value === null || value === "") {
    return defaultValue || {};
  }
  if (typeof value === "object") {
    return value;
  }
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (e) {
      return defaultValue || {};
    }
  }
  return defaultValue || {};
};
scwin.cloneObject = function (obj) {
  try {
    return JSON.parse(JSON.stringify(obj || {}));
  } catch (e) {
    return {};
  }
};
scwin.normalizeYesNo = function (value, defaultValue) {
  const normalized = String(typeof value === "undefined" || value === null || value === "" ? defaultValue : value).toUpperCase();
  return normalized === "Y" ? "Y" : "N";
};
scwin.getParameterData = function () {
  if (scwin.parameterData !== null) {
    return scwin.parameterData;
  }
  const candidates = [];
  try {
    candidates.push($p.getParameter("paramData"));
  } catch (e) {}
  try {
    const allParams = $p.getAllParameter() || {};
    candidates.push(allParams.paramData);
    candidates.push(allParams);
  } catch (e) {}
  try {
    candidates.push($c.data.getParameter($p, "paramData"));
  } catch (e) {}
  try {
    candidates.push($c.data.getParameter($p));
  } catch (e) {}
  try {
    candidates.push($p.getPopupParam());
  } catch (e) {}
  for (let i = 0; i < candidates.length; i++) {
    const parsed = scwin.parseObjectParam(candidates[i], null);
    if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
      scwin.parameterData = parsed;
      return scwin.parameterData;
    }
  }
  scwin.parameterData = {};
  return scwin.parameterData;
};
scwin.resolveNamedParamValue = function (source, name) {
  if (typeof source === "undefined" || source === null || source === "") {
    return "";
  }
  if (typeof source === "object") {
    return source[name];
  }
  if (typeof source === "string") {
    const parsed = scwin.parseObjectParam(source, null);
    if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
      return parsed[name];
    }
  }
  return source;
};
scwin.getParameterValue = function (name, defaultValue) {
  const parameterData = scwin.getParameterData();
  if (Object.prototype.hasOwnProperty.call(parameterData, name)) {
    return parameterData[name];
  }
  try {
    const value = scwin.resolveNamedParamValue($c.data.getParameter($p, name), name);
    if (typeof value !== "undefined" && value !== null && value !== "") {
      return value;
    }
  } catch (e) {}
  try {
    const value = scwin.resolveNamedParamValue($p.getPopupParam(), name);
    if (typeof value !== "undefined" && value !== null && value !== "") {
      return value;
    }
  } catch (e) {}
  try {
    const allParams = $p.getAllParameter() || {};
    if (typeof allParams[name] !== "undefined" && allParams[name] !== null && allParams[name] !== "") {
      return allParams[name];
    }
  } catch (e) {}
  return defaultValue || "";
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
scwin.buildOptions = function () {
  return {
    popupTitle: scwin.getParameterValue("popupTitle", "첨부파일 등록"),
    fileNameLabel: scwin.getParameterValue("fileNameLabel", "파일명"),
    fileName: scwin.getParameterValue("fileName", ""),
    filePath: scwin.getParameterValue("filePath", scwin.getParameterValue("fileSavePath", "")),
    fileSize: scwin.getParameterValue("fileSize", scwin.getParameterValue("fileSiz", "")),
    subDir: scwin.getParameterValue("subDir", ""),
    subDirYearMonthYn: scwin.normalizeYesNo(scwin.getParameterValue("subDirYearMonthYn", "N"), "N"),
    showExistingFileInListYn: scwin.normalizeYesNo(scwin.getParameterValue("showExistingFileInListYn", "N"), "N"),
    uploadRequiredYn: scwin.normalizeYesNo(scwin.getParameterValue("uploadRequiredYn", "Y"), "Y"),
    returnExistingOnCloseYn: scwin.normalizeYesNo(scwin.getParameterValue("returnExistingOnCloseYn", "N"), "N"),
    returnFormat: String(scwin.getParameterValue("returnFormat", "array")).toLowerCase(),
    returnArrayFields: scwin.getParameterValue("returnArrayFields", "filePath,fileName,fileSize"),
    returnFileNameExtYn: scwin.normalizeYesNo(scwin.getParameterValue("returnFileNameExtYn", "N"), "N"),
    extraReturnData: scwin.parseObjectParam(scwin.getParameterValue("extraReturnData", {}), {})
  };
};
scwin.getDisplayFileName = function () {
  if ($c.util.isEmpty($p, scwin.options.filePath)) {
    return "";
  }
  if (!$c.util.isEmpty($p, scwin.options.fileName)) {
    return scwin.options.fileName;
  }
  return scwin.normalizeOriginFileName("", scwin.options.filePath);
};
scwin.buildInitialFileRow = function () {
  if ($c.util.isEmpty($p, scwin.options.filePath)) {
    return null;
  }
  const storedFileInfo = scwin.splitStoredFilePath(scwin.options.filePath);
  const originFileName = scwin.normalizeOriginFileName(scwin.options.fileName, scwin.options.filePath);
  return {
    FILE_STORED_PATH: storedFileInfo.storedPath,
    STORED_FILE_NM: storedFileInfo.storedFileName,
    ORIGIN_FILE_NM: originFileName,
    FILE_SIZE: scwin.options.fileSize || "",
    rowStatus: "R",
    status: "Completed"
  };
};
scwin.applyInitialFileData = function () {
  if (scwin.initialFileApplied === true) {
    return;
  }
  if (scwin.options.showExistingFileInListYn !== "Y") {
    scwin.initialFileApplied = true;
    return;
  }
  if (typeof udc_fileUpload === "undefined" || typeof udc_fileUpload.setData !== "function") {
    return;
  }
  const initialFileRow = scwin.buildInitialFileRow();
  if (!initialFileRow) {
    scwin.initialFileApplied = true;
    return;
  }
  udc_fileUpload.setData([initialFileRow]);
  scwin.initialFileApplied = true;
};
scwin.applyUploadOptions = function () {
  if (typeof udc_fileUpload === "undefined") {
    return;
  }
  if (typeof udc_fileUpload.setSubDir === "function") {
    udc_fileUpload.setSubDir(scwin.options.subDir || "");
  }
  if (typeof udc_fileUpload.setSubDirYearMonthYn === "function") {
    udc_fileUpload.setSubDirYearMonthYn(scwin.options.subDirYearMonthYn || "N");
  }
};
scwin.getFileUploadScope = function () {
  if (typeof udc_fileUpload === "undefined" || typeof udc_fileUpload.getScopeWindow !== "function") {
    return null;
  }
  return udc_fileUpload.getScopeWindow();
};
scwin.hasFixedUploadFileName = function () {
  return !$c.util.isEmpty($p, scwin.options.fileName);
};
scwin.getFixedUploadFileName = function (localFileName) {
  if (!scwin.hasFixedUploadFileName()) {
    return localFileName || "";
  }
  return scwin.normalizeOriginFileName(scwin.options.fileName, localFileName || scwin.options.filePath);
};
scwin.findUploadRowIndexes = function (fileUploadScope, uploadFileName) {
  if (!fileUploadScope || !fileUploadScope.dlt_file || $c.util.isEmpty($p, uploadFileName)) {
    return [];
  }
  if (scwin.hasFixedUploadFileName()) {
    const hiddenKeyIndexes = fileUploadScope.dlt_file.getMatchedIndex("hiddenKey", uploadFileName) || [];
    if (hiddenKeyIndexes.length > 0) {
      return hiddenKeyIndexes;
    }
  }
  return fileUploadScope.dlt_file.getMatchedIndex("ORIGIN_FILE_NM", uploadFileName) || [];
};
scwin.decorateNewUploadRows = function (fileUploadScope, selectedFiles, startRowIndex) {
  if (!scwin.hasFixedUploadFileName() || !fileUploadScope || !fileUploadScope.dlt_file || !selectedFiles) {
    return;
  }
  let targetRowIndex = typeof startRowIndex === "number" ? startRowIndex : 0;
  for (let idx in selectedFiles) {
    const selectedFile = selectedFiles[idx];
    const localFileName = selectedFile && selectedFile.name ? selectedFile.name : "";
    if ($c.util.isEmpty($p, localFileName) || targetRowIndex >= fileUploadScope.dlt_file.getRowCount()) {
      continue;
    }
    fileUploadScope.dlt_file.setCellData(targetRowIndex, "hiddenKey", localFileName);
    fileUploadScope.dlt_file.setCellData(targetRowIndex, "ORIGIN_FILE_NM", scwin.getFixedUploadFileName(localFileName));
    if (fileUploadScope.grd_file && typeof fileUploadScope.grd_file.refreshCell === "function") {
      fileUploadScope.grd_file.refreshCell(targetRowIndex, "ORIGIN_FILE_NM");
    }
    targetRowIndex++;
  }
};
scwin.installFileUploadHooks = function () {
  if (scwin.fileUploadHookInstalled === true) {
    return true;
  }
  const fileUploadScope = scwin.getFileUploadScope();
  if (!fileUploadScope || !fileUploadScope.scwin || !fileUploadScope.dlt_file || typeof fileUploadScope.scwin.selectCallback !== "function" || typeof fileUploadScope.scwin.mpd_multiFileUpload_onprogress !== "function" || typeof fileUploadScope.scwin.mpd_multiFileUpload_ondone !== "function") {
    return false;
  }
  const originalSelectCallback = fileUploadScope.scwin.selectCallback;
  fileUploadScope.scwin.selectCallback = function (data) {
    const beforeRowCount = fileUploadScope.dlt_file.getRowCount();
    const result = originalSelectCallback.apply(this, arguments);
    scwin.decorateNewUploadRows(fileUploadScope, data, beforeRowCount);
    return result;
  };
  const originalOnProgress = fileUploadScope.scwin.mpd_multiFileUpload_onprogress;
  fileUploadScope.scwin.mpd_multiFileUpload_onprogress = function (data) {
    if (!scwin.hasFixedUploadFileName()) {
      return originalOnProgress.call(this, data);
    }
    const rowIndexes = scwin.findUploadRowIndexes(fileUploadScope, data ? data.fileName : "");
    for (let idx = 0; idx < rowIndexes.length; idx++) {
      const rowIndex = rowIndexes[idx];
      const fileInfo = fileUploadScope.dlt_file.getRowJSON(rowIndex);
      if (fileInfo.rowStatus === "C" && $c.util.isEmpty($p, fileInfo.fileId) === true) {
        if (data.percentData < 100) {
          fileUploadScope.dlt_file.setCellData(rowIndex, "status", data.percentData);
        } else {
          fileUploadScope.dlt_file.setCellData(rowIndex, "status", "Completed");
        }
      }
    }
    return;
  };
  const originalOnDone = fileUploadScope.scwin.mpd_multiFileUpload_ondone;
  fileUploadScope.scwin.mpd_multiFileUpload_ondone = async function (data) {
    if (!scwin.hasFixedUploadFileName()) {
      return await originalOnDone.call(this, data);
    }
    for (let fileIdx = 0; fileIdx < data.length; fileIdx++) {
      const uploadResult = fileUploadScope.scwin.normalizeUploadResult(data[fileIdx]);
      const rowIndexes = scwin.findUploadRowIndexes(fileUploadScope, uploadResult.localFile);
      if (rowIndexes.length > 0) {
        fileUploadScope.dlt_file.setBroadcast(false);
        for (let idx = 0; idx < rowIndexes.length; idx++) {
          const rowIndex = rowIndexes[idx];
          if (uploadResult.success) {
            fileUploadScope.dlt_file.setCellData(rowIndex, "FILE_STORED_PATH", uploadResult.storedPath);
            fileUploadScope.dlt_file.setCellData(rowIndex, "STORED_FILE_NM", uploadResult.fileName);
            fileUploadScope.dlt_file.setCellData(rowIndex, "FILE_SIZE", uploadResult.size);
            fileUploadScope.dlt_file.setCellData(rowIndex, "status", "Completed");
            fileUploadScope.dlt_file.modifyRowStatus(rowIndex, "R");
            fileUploadScope.grd_file.refreshCell(rowIndex, "ORIGIN_FILE_NM");
          } else {
            fileUploadScope.dlt_file.setCellData(rowIndex, "status", "Error");
          }
        }
        fileUploadScope.dlt_file.setBroadcast(true, true);
      } else {
        const deniedIndexes = scwin.findUploadRowIndexes(fileUploadScope, uploadResult.localFile || data[fileIdx].deniedFile);
        for (let idx = 0; idx < deniedIndexes.length; idx++) {
          fileUploadScope.dlt_file.setCellData(deniedIndexes[idx], "status", "Error");
        }
      }
    }
    fileUploadScope.$p.emit("onFileUploadDone", true);
  };
  fileUploadScope.scwin.dlt_file_onremoverow = function (info) {
    const removedRows = info && info.removedDataObj ? info.removedDataObj : [];
    for (let idx = 0; idx < removedRows.length; idx++) {
      const removedRow = removedRows[idx] || [];
      const fileName = removedRow[11] || removedRow[3] || "";
      if ($c.util.isEmpty($p, fileName)) {
        continue;
      }
      fileUploadScope.mpd_multiFileUpload.removeFile(fileName);
    }
    fileUploadScope.scwin.setFileStatus();
  };
  scwin.fileUploadHookInstalled = true;
  return true;
};
scwin.initializeFileUpload = function () {
  scwin.applyUploadOptions();
  if (typeof udc_fileUpload !== "undefined") {
    if (typeof udc_fileUpload.setFixedFileName === "function") {
      udc_fileUpload.setFixedFileName(scwin.options.fileName || "");
    } else if (typeof udc_fileUpload.getScopeWindow === "function") {
      const fileUploadScope = udc_fileUpload.getScopeWindow();
      if (fileUploadScope && fileUploadScope.scwin && typeof fileUploadScope.scwin.setFixedFileName === "function") {
        fileUploadScope.scwin.setFixedFileName(scwin.options.fileName || "");
      }
    }
  }
  scwin.applyInitialFileData();
};
scwin.getActiveFileRows = function () {
  const fileList = typeof udc_fileUpload !== "undefined" && typeof udc_fileUpload.getData === "function" ? udc_fileUpload.getData() || [] : [];
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
scwin.buildReturnFileName = function (originFileName, filePath) {
  let baseFileName = scwin.options.fileName;
  if ($c.util.isEmpty($p, baseFileName)) {
    baseFileName = originFileName || scwin.splitStoredFilePath(filePath).storedFileName;
  }
  if (scwin.options.returnFileNameExtYn === "Y") {
    if ($c.util.isEmpty($p, scwin.getExtension(baseFileName))) {
      return baseFileName + scwin.getExtension(filePath);
    }
    return baseFileName;
  }
  return scwin.stripExtension(baseFileName);
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
      fileName: scwin.buildReturnFileName(originFileName, fullPath),
      fileSize: fileRow.FILE_SIZE || ""
    };
  }
  if (scwin.options.returnExistingOnCloseYn !== "Y" || $c.util.isEmpty($p, scwin.options.filePath)) {
    return null;
  }
  return {
    filePath: scwin.options.filePath,
    fileName: scwin.buildReturnFileName(scwin.options.fileName, scwin.options.filePath),
    fileSize: scwin.options.fileSize || ""
  };
};
scwin.buildReturnPayload = function (fileInfo) {
  const returnInfo = scwin.cloneObject(scwin.options.extraReturnData);
  const normalizedFileInfo = fileInfo || {
    filePath: "",
    fileName: scwin.options.fileName || "",
    fileSize: ""
  };
  returnInfo.filePath = normalizedFileInfo.filePath || "";
  returnInfo.fileName = normalizedFileInfo.fileName || "";
  returnInfo.fileSize = normalizedFileInfo.fileSize || "";
  if (scwin.options.returnFormat === "object") {
    return returnInfo;
  }
  const returnArrayFields = String(scwin.options.returnArrayFields || "filePath,fileName,fileSize").split(",").map(function (fieldName) {
    return $c.str.trim($p, fieldName);
  }).filter(function (fieldName) {
    return fieldName !== "";
  });
  let resultArray = [];
  for (let i = 0; i < returnArrayFields.length; i++) {
    const fieldName = returnArrayFields[i];
    resultArray.push(typeof returnInfo[fieldName] === "undefined" ? "" : returnInfo[fieldName]);
  }
  return resultArray;
};
scwin.f_Close = function () {
  $c.win.closePopup($p, scwin.buildReturnPayload(scwin.getReturnFileInfo()));
};
scwin.fileSubmit = async function () {
  const activeFileRows = scwin.getActiveFileRows();
  const hasPendingUploadFile = scwin.hasPendingUploadFile();
  if (scwin.options.uploadRequiredYn === "Y" && !hasPendingUploadFile) {
    await $c.win.alert($p, "파일을 선택하세요.");
    return;
  }
  if (activeFileRows.length === 0 && $c.util.isEmpty($p, scwin.options.filePath)) {
    await $c.win.alert($p, "파일을 선택하세요.");
    return;
  }
  if (!(await $c.win.confirm($p, "저장하시겠습니까?"))) {
    return;
  }
  if (hasPendingUploadFile) {
    scwin.applyUploadOptions();
    await udc_fileUpload.startFileUpload();
    return;
  }
  scwin.f_Close();
};
scwin.udc_fileUpload_onFileUploadDone = async function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  await $c.win.alert($p, "저장하였습니다.");
  scwin.f_Close();
};
scwin.onpageload = function () {
  scwin.options = scwin.buildOptions();
  document.title = scwin.options.popupTitle;
  if (typeof tbx_fileNameLabel.setLabel === "function") {
    tbx_fileNameLabel.setLabel(scwin.options.fileNameLabel);
  }
  tbx_fileNameLabel.setValue(scwin.options.fileNameLabel);
  ed_fileNm.setValue(scwin.getDisplayFileName());
  scwin.initializeFileUpload();
};
scwin.onUdcCompleted = function () {
  scwin.initializeFileUpload();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents'},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_fileNameLabel',label:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fileNm',style:'width: 260px;',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{id:'udc_fileUpload',fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'1',maxFileSize:'536870912',totalFileSize:'2009715200',visibleRowNum:'3',subDir:'',subDirYearMonthYn:'N',saveFn:'scwin.fileSubmit',saveButtonYn:'N','ev:onFileUploadDone':'scwin.udc_fileUpload_onFileUploadDone'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',type:'button','ev:onclick':'scwin.fileSubmit'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})