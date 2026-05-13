/*amd /ui/cm/zz/commonFilePopup.xml 20430 d2898f7c07ffb4d1b8e210d1dbf401330c8bfd1f280d1ee716358fc2eef7fe20 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model'},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = $c.data.getMemInfo($p, "userId") || "";
scwin.dynamicSubmissionSeq = 0;
scwin.options = {};
scwin.parameterData = null;
scwin.pendingDeleteRows = [];
scwin.lastRetrieveRows = [];
scwin.lastRetrieveResponse = {};
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
  } catch (e) {}
  try {
    candidates.push($c.data.getParameter($p, "paramData"));
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
scwin.getParameterValue = function (name) {
  const paramData = scwin.getParameterData();
  if (Object.prototype.hasOwnProperty.call(paramData, name)) {
    return paramData[name];
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
  return "";
};
scwin.buildFallbackRequestData = function () {
  const popupParam = scwin.getParameterData();
  const excludedKeys = {
    requestData: true,
    fileKeyName: true,
    fileKeyValue: true,
    fileKeyRequiredYn: true,
    retrieveOnloadYn: true,
    retrieveAction: true,
    saveAction: true,
    deleteAction: true,
    saveNextAction: true,
    deleteNextAction: true,
    sbHeaderYn: true,
    subDir: true,
    subDirYearMonthYn: true,
    responseListKey: true,
    filePathField: true,
    fileNameField: true,
    originFileNameField: true,
    fileSizeField: true,
    fileSeqField: true,
    menuInfo: true,
    callbackFn: true
  };
  let requestData = {};
  let source = popupParam;
  Object.keys(source || {}).forEach(function (key) {
    if (!excludedKeys[key]) {
      requestData[key] = source[key];
    }
  });
  return requestData;
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
scwin.buildOptions = function () {
  let requestData = scwin.parseObjectParam(scwin.getParameterValue("requestData"), {});
  if (Object.keys(requestData).length === 0) {
    requestData = scwin.buildFallbackRequestData();
  }
  const fileKeyName = scwin.getParameterValue("fileKeyName") || "houseNo";
  let fileKeyValue = scwin.getParameterValue("fileKeyValue");
  if ((typeof fileKeyValue === "undefined" || fileKeyValue === null || fileKeyValue === "") && fileKeyName) {
    fileKeyValue = requestData[fileKeyName];
  }
  if ((typeof fileKeyValue === "undefined" || fileKeyValue === null || fileKeyValue === "") && fileKeyName === "houseNo") {
    fileKeyValue = scwin.getParameterValue("houseNo");
  }
  return {
    fileKeyName: fileKeyName,
    fileKeyValue: fileKeyValue || "",
    fileKeyRequiredYn: scwin.normalizeYesNo(scwin.getParameterValue("fileKeyRequiredYn"), "Y"),
    retrieveOnloadYn: scwin.normalizeYesNo(scwin.getParameterValue("retrieveOnloadYn"), "Y"),
    retrieveAction: scwin.getParameterValue("retrieveAction") || "",
    saveAction: scwin.getParameterValue("saveAction") || "",
    deleteAction: scwin.getParameterValue("deleteAction") || "",
    saveNextAction: (scwin.getParameterValue("saveNextAction") || "auto").toLowerCase(),
    deleteNextAction: (scwin.getParameterValue("deleteNextAction") || "retrieve").toLowerCase(),
    sbHeaderYn: scwin.normalizeYesNo(scwin.getParameterValue("sbHeaderYn"), "Y"),
    subDir: scwin.getParameterValue("subDir") || "",
    subDirYearMonthYn: scwin.normalizeYesNo(scwin.getParameterValue("subDirYearMonthYn"), "N"),
    responseListKey: scwin.getParameterValue("responseListKey") || "OUT_DS1",
    filePathField: scwin.getParameterValue("filePathField") || "filePath",
    fileNameField: scwin.getParameterValue("fileNameField") || "fileName",
    originFileNameField: scwin.getParameterValue("originFileNameField") || "fileName",
    fileSizeField: scwin.getParameterValue("fileSizeField") || "fileSize",
    fileSeqField: scwin.getParameterValue("fileSeqField") || "fileSeq",
    requestData: requestData
  };
};
scwin.syncRelatedFileKey = function (requestData, fileKeyValue) {
  if ($c.util.isEmpty($p, fileKeyValue)) {
    return requestData;
  }
  if (scwin.options.fileKeyName === "houseNo" && Object.prototype.hasOwnProperty.call(requestData, "blno")) {
    requestData.blno = fileKeyValue;
  }
  if (scwin.options.fileKeyName === "blno" && Object.prototype.hasOwnProperty.call(requestData, "houseNo")) {
    requestData.houseNo = fileKeyValue;
  }
  return requestData;
};
scwin.getCurrentFileKeyValue = function () {
  const value = $c.str.trim($p, ed_fileKey.getValue());
  scwin.options.fileKeyValue = value;
  return value;
};
scwin.buildAttachedFileMap = function () {
  const requestData = scwin.cloneObject(scwin.options.requestData);
  const fileKeyValue = scwin.getCurrentFileKeyValue();
  if (!$c.util.isEmpty($p, scwin.options.fileKeyName) && !$c.util.isEmpty($p, fileKeyValue)) {
    requestData[scwin.options.fileKeyName] = fileKeyValue;
  }
  scwin.syncRelatedFileKey(requestData, fileKeyValue);
  return requestData;
};
scwin.buildRetrieveRequestData = function () {
  const requestHeader = scwin.buildAttachedFileMap();
  const requestData = {
    IN_DS1: requestHeader
  };
  requestData[scwin.options.responseListKey] = [];
  return requestData;
};
scwin.buildSaveDeleteRequestData = function (rows) {
  return {
    IN_DS1: rows || [],
    dma_attachedFile: scwin.buildAttachedFileMap()
  };
};
scwin.executeDynamicSubmission = function (action, requestData) {
  const submissionId = "sbm_commonFilePopup_" + ++scwin.dynamicSubmissionSeq;
  return $c.sbm.executeDynamic($p, {
    id: submissionId,
    action: action,
    method: "post",
    mediatype: "application/json",
    encoding: "UTF-8",
    mode: "asynchronous",
    isProcessMsg: false
  }, requestData).then(function (res) {
    try {
      $p.deleteSubmission(submissionId);
    } catch (e) {}
    return res;
  }).catch(function (e) {
    try {
      $p.deleteSubmission(submissionId);
    } catch (ex) {}
    throw e;
  });
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
scwin.applyHeaderOptions = function () {
  if (typeof sb_header === "undefined") {
    return;
  }
  if (scwin.options.sbHeaderYn === "Y") {
    sb_header.show("");
  } else {
    sb_header.hide();
  }
};
scwin.applyFileKeyOptions = function () {
  if (typeof tbx_fileKeyLabel !== "undefined") {
    tbx_fileKeyLabel.setValue(scwin.options.fileKeyName || "File Key");
  }
};
scwin.buildStoredFilePath = function (filePath, fileName) {
  const storedPath = filePath || "";
  const storedFileName = fileName || "";
  if ($c.util.isEmpty($p, storedPath)) {
    return storedFileName;
  }
  if ($c.util.isEmpty($p, storedFileName) || storedPath.endsWith(storedFileName)) {
    return storedPath;
  }
  if (storedPath.endsWith("/")) {
    return storedPath + storedFileName;
  }
  return storedPath + "/" + storedFileName;
};
scwin.setRetrievedFileList = function (rows) {
  let fileList = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i] || {};
    const storedPath = row[scwin.options.filePathField] || "";
    const storedFileName = row[scwin.options.fileNameField] || "";
    const originFileName = row[scwin.options.originFileNameField] || storedFileName;
    const fileSize = row[scwin.options.fileSizeField] || "";
    const fileSeq = row[scwin.options.fileSeqField] || "";
    fileList.push({
      chk: "0",
      FILE_STORED_PATH: storedPath,
      STORED_FILE_NM: storedFileName,
      ORIGIN_FILE_NM: originFileName,
      FILE_EXPLAIN: "",
      FILE_SIZE: fileSize,
      status: "Completed",
      hiddenKey: fileSeq
    });
  }
  udc_fileUpload.setData(fileList);
};
scwin.findRetrievedRow = function (fileInfo) {
  const hiddenKey = fileInfo.hiddenKey || "";
  const storedPath = fileInfo.FILE_STORED_PATH || "";
  const storedFileName = fileInfo.STORED_FILE_NM || "";
  const fullPath = scwin.buildStoredFilePath(storedPath, storedFileName);
  for (let i = 0; i < scwin.lastRetrieveRows.length; i++) {
    const row = scwin.lastRetrieveRows[i] || {};
    const rowFileSeq = row[scwin.options.fileSeqField] || "";
    const rowStoredPath = row[scwin.options.filePathField] || "";
    const rowStoredFileName = row[scwin.options.fileNameField] || "";
    const rowFullPath = scwin.buildStoredFilePath(rowStoredPath, rowStoredFileName);
    if (!$c.util.isEmpty($p, hiddenKey) && String(rowFileSeq) === String(hiddenKey)) {
      return scwin.cloneObject(row);
    }
    if (!$c.util.isEmpty($p, fullPath) && fullPath === rowFullPath) {
      return scwin.cloneObject(row);
    }
  }
  return {};
};
scwin.f_clearFileList = function () {
  scwin.pendingDeleteRows = [];
  scwin.lastRetrieveRows = [];
  scwin.lastRetrieveResponse = {};
  if (typeof udc_fileUpload !== "undefined") {
    udc_fileUpload.setData([]);
  }
};
scwin.f_Retrieve = async function (skipRequiredCheck) {
  if ($c.util.isEmpty($p, scwin.options.retrieveAction)) {
    scwin.f_clearFileList();
    return false;
  }
  const fileKeyValue = scwin.getCurrentFileKeyValue();
  if (skipRequiredCheck !== true && scwin.options.fileKeyRequiredYn === "Y" && $c.util.isEmpty($p, fileKeyValue)) {
    await $c.win.alert($p, "파일 키 값은 필수입니다.");
    ed_fileKey.focus();
    scwin.f_clearFileList();
    return false;
  }
  try {
    const requestData = scwin.buildRetrieveRequestData();
    const res = await scwin.executeDynamicSubmission(scwin.options.retrieveAction, requestData);
    const responseJSON = res && res.responseJSON || {};
    const rows = responseJSON[scwin.options.responseListKey] || [];
    scwin.lastRetrieveResponse = scwin.cloneObject(responseJSON);
    scwin.lastRetrieveRows = scwin.cloneObject(rows);
    scwin.setRetrievedFileList(rows);
    return true;
  } catch (e) {
    scwin.f_clearFileList();
    throw e;
  }
};
scwin.buildDeleteRows = function () {
  let deleteRows = [];
  const fileList = udc_fileUpload.getData() || [];
  const fileKeyValue = scwin.getCurrentFileKeyValue();
  for (let i = 0; i < fileList.length; i++) {
    if (fileList[i].chk == "1" && !$c.util.isEmpty($p, fileList[i].hiddenKey)) {
      const fileInfo = fileList[i] || {};
      let row = scwin.findRetrievedRow(fileInfo);
      if ($c.util.isEmpty($p, row[scwin.options.fileSeqField])) {
        row[scwin.options.fileSeqField] = fileInfo.hiddenKey;
      }
      if ($c.util.isEmpty($p, row[scwin.options.filePathField])) {
        row[scwin.options.filePathField] = scwin.buildStoredFilePath(fileInfo.FILE_STORED_PATH, fileInfo.STORED_FILE_NM);
      }
      if ($c.util.isEmpty($p, row[scwin.options.fileNameField])) {
        row[scwin.options.fileNameField] = fileInfo.ORIGIN_FILE_NM || fileInfo.STORED_FILE_NM || "";
      }
      if ($c.util.isEmpty($p, row[scwin.options.fileSizeField])) {
        row[scwin.options.fileSizeField] = fileInfo.FILE_SIZE || "";
      }
      if ($c.util.isEmpty($p, row.rowStatus)) {
        row.rowStatus = "C";
      }
      if (!$c.util.isEmpty($p, scwin.options.fileKeyName) && !$c.util.isEmpty($p, fileKeyValue)) {
        row[scwin.options.fileKeyName] = fileKeyValue;
      }
      deleteRows.push(row);
    }
  }
  return deleteRows;
};
scwin.buildUploadRows = function () {
  let uploadRows = [];
  const fileList = udc_fileUpload.getData() || [];
  for (let i = 0; i < fileList.length; i++) {
    if (fileList[i].status == "Completed" && $c.util.isEmpty($p, fileList[i].hiddenKey)) {
      uploadRows.push({
        fileClsCd: "",
        fileName: fileList[i].ORIGIN_FILE_NM,
        filePath: scwin.buildStoredFilePath(fileList[i].FILE_STORED_PATH, fileList[i].STORED_FILE_NM),
        fileSize: fileList[i].FILE_SIZE,
        regId: scwin.userId,
        modId: scwin.userId,
        rowStatus: "C"
      });
    }
  }
  return uploadRows;
};
scwin.hasPendingUploadFile = function () {
  const fileList = udc_fileUpload.getData() || [];
  for (let i = 0; i < fileList.length; i++) {
    const fileInfo = fileList[i] || {};
    const rowStatus = fileInfo.rowStatus || "";
    if ($c.util.isEmpty($p, fileInfo.hiddenKey) && (rowStatus === "C" || rowStatus === "U")) {
      return true;
    }
  }
  return false;
};
scwin.executeDelete = async function () {
  if ($c.util.isEmpty($p, scwin.options.deleteAction) || scwin.pendingDeleteRows.length === 0) {
    return false;
  }
  let requestData = scwin.buildSaveDeleteRequestData(scwin.pendingDeleteRows);
  await scwin.executeDynamicSubmission(scwin.options.deleteAction, requestData);
  return true;
};
scwin.handleAfterDelete = async function () {
  if (scwin.options.deleteNextAction === "none") {
    return;
  }
  scwin.pendingDeleteRows = [];
  await scwin.f_Retrieve(true);
};
scwin.handleAfterSave = async function () {
  if (scwin.options.saveNextAction === "none") {
    return;
  }
  if ((scwin.options.saveNextAction === "auto" || scwin.options.saveNextAction === "delete") && scwin.pendingDeleteRows.length > 0) {
    await scwin.executeDelete();
    await scwin.handleAfterDelete();
    return;
  }
  if (scwin.options.saveNextAction === "retrieve" || scwin.options.saveNextAction === "auto") {
    scwin.pendingDeleteRows = [];
    await scwin.f_Retrieve(true);
  }
};
scwin.fileSubmit = async function () {
  const fileKeyValue = scwin.getCurrentFileKeyValue();
  if (scwin.options.fileKeyRequiredYn === "Y" && $c.util.isEmpty($p, fileKeyValue)) {
    await $c.win.alert($p, "파일 키 값은 필수입니다.");
    ed_fileKey.focus();
    return;
  }
  scwin.pendingDeleteRows = scwin.buildDeleteRows();
  const hasNewFile = scwin.hasPendingUploadFile();
  const hasDeleteFile = scwin.pendingDeleteRows.length > 0;
  if (hasNewFile) {
    await udc_fileUpload.startFileUpload();
    return;
  }
  if (hasDeleteFile) {
    await scwin.executeDelete();
    await scwin.handleAfterDelete();
    return;
  }
  await $c.win.alert($p, "변경된 파일이 없습니다.");
};
scwin.udc_fileUpload_onFileUploadDone = async function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  const uploadRows = scwin.buildUploadRows();
  if (uploadRows.length === 0) {
    if (scwin.pendingDeleteRows.length > 0) {
      await scwin.executeDelete();
      await scwin.handleAfterDelete();
    } else {
      await scwin.f_Retrieve(true);
    }
    return;
  }
  if ($c.util.isEmpty($p, scwin.options.saveAction)) {
    await $c.win.alert($p, "저장 액션이 설정되지 않았습니다.");
    return;
  }
  let requestData = scwin.buildSaveDeleteRequestData(uploadRows);
  await scwin.executeDynamicSubmission(scwin.options.saveAction, requestData);
  await scwin.handleAfterSave();
};
scwin.btn_search_onclick = function () {
  scwin.f_Retrieve();
};
scwin.btn_remove_onclick = function () {
  ed_fileKey.setValue("");
  scwin.options.fileKeyValue = "";
  scwin.f_clearFileList();
};
scwin.f_Close = function () {
  $c.win.closePopup($p, ["Y", scwin.cloneObject(scwin.lastRetrieveRows), scwin.cloneObject(scwin.lastRetrieveResponse), scwin.getCurrentFileKeyValue()]);
};
scwin.onpageload = async function () {
  scwin.options = scwin.buildOptions();
  ed_fileKey.setValue(scwin.options.fileKeyValue);
  scwin.applyFileKeyOptions();
  scwin.applyHeaderOptions();
  if (scwin.options.retrieveOnloadYn === "Y" && (!$c.util.isEmpty($p, scwin.options.fileKeyValue) || scwin.options.fileKeyRequiredYn === "N")) {
    await scwin.f_Retrieve(true);
  } else {
    scwin.f_clearFileList();
  }
};
scwin.onUdcCompleted = function () {
  scwin.applyUploadOptions();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents'},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'shbox',id:'sb_header',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_fileKeyLabel',label:'File Key',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fileKey',placeholder:'',style:'width: 200px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_remove',style:'',type:'button','ev:onclick':'scwin.btn_remove_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{id:'udc_fileUpload',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',totalFileSize:'2009715200',visibleRowNum:'7',subDir:'',subDirYearMonthYn:'N',saveFn:'scwin.fileSubmit','ev:onFileUploadDone':'scwin.udc_fileUpload_onFileUploadDone'}}]},{T:1,N:'w2:textbox',A:{class:'info-txt txt-red',label:'파일명/파일경로에는 특수문자를 입력할 수 없습니다. (특수문자: \'!,+&^%$#@~;)',tagname:'p'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})