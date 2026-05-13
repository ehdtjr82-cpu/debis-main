/*amd /cm/udc/fileMultiUpload.xml 48363 5f7680ea9af400c9e802a652c8d0c8c5d8533c0b85f6d3e1e04a81c86953ca94 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:publicInfo',A:{method:'scwin.undoFileUpload,scwin.setFileUpload,scwin.startFileUpload,scwin.getUpdatedFile,scwin.setFileSelectingButtonDisabled,scwin.isModified,scwin.setFixNum,scwin.setData,scwin.getData,scwin.getType,scwin.setType,scwin.setTypeData,scwin.getTypeData,scwin.setSubDir,scwin.setSubDirYearMonthYn,scwin.setFixedFileName,scwin.getRecept,scwin.getDisplayData,scwin.getModifiedData,scwin.setGridClear,scwin.setHeaderClass,scwin.setHeaderRed,scwin.clearHeaderRed,scwin.setSaveButtonVisible,scwin.executeSaveAction',component:''}},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list','ev:onremoverow':'scwin.dlt_file_onremoverow',id:'dlt_file',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙파일종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'영수구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'key',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preView',name:'미리보기',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_downMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_NAME',name:'파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_PATH',name:'경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PGM_ID',name:'프로그램아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CALLER_URL',name:'호출경로',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_types',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_fileDown',action:'/s3upload.do',method:'post',mediatype:'text/xml',ref:'data:json,dma_downMap',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fileDown_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @company 
 * @developer ucanon
 * @variableClone true
 * @notSupportBrowser 
 * @version 1.0
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 100%
 * @height 191px
 * @description 멀티 파일 업로드 UDC
 */

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default width:100%; height:191px
 * @necessary N
 * @description desc
 */

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */

/**
 * @property
 * @name maxFileCount
 * @category 01.Basic & ETC
 * @type number
 * @option 
 * @default 5
 * @necessary N
 * @description 최대 업로드 파일 개수
 */

/**
 * @property
 * @name maxFileSize
 * @category 01.Basic & ETC
 * @type number
 * @option 
 * @default 52428800
 * @necessary N
 * @description 업로드할 개별 파일 사이즈 (websquare.xml 환경설정 파일의 maxUploadSize 값보다 커서는 안됨)
 */

/**
 * @property
 * @name totalFileSize
 * @category 01.Basic & ETC
 * @type number
 * @option 
 * @default 2009715200
 * @necessary N
 * @description 업로드할 전체 파일 사이즈
 */

/**
 * @property
 * @name subDir
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description 파일의 저장할 subDir 디렉터리 경로 설정(설정하지 않은 경우 websquare.xml 환경설정 파일의 baseDir 경로에 파일이 저장됨)
 */

/**
 * @property
 * @name subDirYearMonthYn
 * @category 01.Basic & ETC
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @description subDir path??current year-month(yyyyMM)??auto append
 */

/**
 * @property
 * @name filter
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf
 * @necessary N
 * @description 공백("")으로 설정하면 모든 파일(*.*)로 설정됨
 */

/**
 * @property
 * @name gridHeight
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default
 * @necessary N
 * @description 공백("")으로 설정하면 모든 파일(*.*)로 설정됨
 */

/**
 * @property
 * @name saveButtonId
 * @category 03.컴포넌트 ID
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 버튼 ID
 */

/**
 * @property
 * @name typeYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @description 증빙파일종류 노출유무
 */

/**
 * @property
 * @name fileTypeYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @description 증빙파일종류 노출유무
 */

/**
 * @property
 * @name explainYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @description 첨부파일 설명 노출 여부
 */

/**
 * @property
 * @name receiptYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @description 영수구분 노출 여부
 */

/**
 * @property
 * @name addButtonName
 * @category 05.Design
 * @type string
 * @option 
 * @default 추가
 * @necessary N
 * @description 추가 버튼 라벨을 지정
 */

/**
* @property
* @name saveButtonName
* @category 05.Design
* @type string
* @option 
* @default 저장
* @necessary N
* @description 저장 버튼 라벨을 지정
*/

/**
 * @property
 * @name saveButtonYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default Y
 * @necessary N
 * @description save button visible flag
 */

/**
 * @property
 * @name saveFn
 * @category 11.User-defined Functions
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @description 저장 버튼 함수
 */

/**
 * @property
 * @name readOnlyYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @description desc
 */

/**
 * @property
 * @name visibleRowNum
 * @category 05.Design
 * @type string
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @description visibleRowNum 세팅
 */

/**
 * @property
 * @name tranResultYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default Y
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description 전송결과 노출여부
 */

/**
 * @property
 * @name slipYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description 전표번호, 전표종류 노출여부
 */

/**
 * @property
 * @name evidYn
 * @category 05.Design
 * @type combobox
 * @option [Y,N]
 * @default N
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description 증빙파일 노출여부
 */

/**
 * @property
 * @name evidTitle
 * @category 05.Design
 * @type string
 * @option
 * @default
 * @necessary N
 * @bindparent
 * @migrationStatus
 * @description 증빙파일종류 타이틀명
 */

/**
 * @event
 * @name onFileUploadDone
 * @description 파일 업로드 완료 시 발생하는 이벤트 함수
 * @param {boolean} isSuccess 파일 전송 성공 여부 (1개라도 업로드에 실패한 파일이 있으면 false를 반환함) 
 * @example 
 */

// 파일 다운로드 URL
scwin.FILE_DOWNLOAD_URL = "/s3upload.do";
scwin.pgmId = "";
scwin.src = "";
scwin.getCodeFileList;
scwin.hasCustomTypeData = false;
scwin.serverMode = window.location.hostname.indexOf("newdevdebis.dongwon.com") > -1 ? "dev" : window.location.hostname.indexOf("newdebis.dongwon.com") > -1 ? "prd" : "local";
// scwin.useOpenPendingBlock = scwin.serverMode === "prd";
scwin.useOpenPendingBlock = false;
scwin.normalizeTypeData = function (typeData) {
  if (Array.isArray(typeData)) {
    return typeData;
  }
  if (typeof typeData === "string" && typeData !== "") {
    try {
      return JSON.parse(typeData);
    } catch (ignore) {
      return [];
    }
  }
  return typeData || [];
};
scwin.applyTypeData = function (typeData, sortYn) {
  const normalizedTypeData = scwin.normalizeTypeData(typeData);
  dlt_types.setJSON(normalizedTypeData);
  if (sortYn !== false) {
    dlt_types.sort("code", 0);
  }
};
scwin.blockOpenPendingAction = function (e) {
  if (!scwin.useOpenPendingBlock) {
    return false;
  }
  try {
    if (e) {
      WebSquare.event.stopEvent(e);
    }
  } catch (ignore) {}
  $c.win.alert($p, "오픈 준비중입니다.");
  return true;
};
/**
 * 페이지 시작 시 Loading 이벤트
 */
scwin.onpageload = function () {
  const option = $p.getOptions({
    maxFileCount: 10,
    // 최대 업로드 파일 개수
    maxFileSize: 52428800,
    // 업로드할 개별 파일 사이즈(50M)
    totalFileSize: 2009715200,
    // 업로드할 전체 파일 사이즈 (1.9G)
    subDir: "",
    // 파일의 저장할 subDir 디렉터리 경로 설정
    filter: "gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf" // 업로드할 파일 확장자 필터 조건
  });
  if (typeof option.subDirYearMonthYn === "undefined") {
    option.subDirYearMonthYn = "N";
  }
  try {
    let menuInfo = $p.parent().$p.getParameter("paramData").menuInfo;
    if (typeof menuInfo !== "undefined") {
      scwin.pgmId = menuInfo.pgmId;
      scwin.src = menuInfo.src;
    }
  } catch (e) {
    console.log("#### parameter ###");
  }
  if (option.fileTypeYn == "Y") {
    // 증빙파일종류
    grpTypeArea.show("");
  }
  if (option.typeYn == "Y") {
    // 증빙파일종류
    grd_file.setColumnVisible("slipNo", true);
    grd_file.setColumnVisible("slipKndNm", true);
    grd_file.setColumnVisible("evidClsNm", true);
  }
  if (option.explainYn == "Y") {
    // 첨부파일 설명
    grd_file.setColumnVisible("FILE_EXPLAIN", true);
  }
  if (option.receiptYn == "Y") {
    // 영수구분
    cbx_recept.show("");
    grd_file.setColumnVisible("receptYn", true);
  }

  // 그리드 전송결과 노출여부
  if (option.tranResultYn == "N") {
    grd_file.setColumnVisible("status", false);
  }
  // 그리드 전표번호, 전표종류 노출여부
  if (option.slipYn == "Y") {
    grd_file.setColumnVisible("slipNo", true);
    grd_file.setColumnVisible("slipKndNm", true);
  }
  // 그리드 증빙파일 노출여부
  if (option.evidYn == "Y") {
    grd_file.setColumnVisible("evidClsNm", true);
  }
  // 증빙파일종류 타이틀 변경일때
  if (option.evidTitle !== undefined && option.evidTitle !== "") {
    grd_file.setHeaderValue("column20", option.evidTitle);
    txtEvid.setValue(option.evidTitle);
  }
  if (option.saveFn !== undefined) {
    // 파일 저장 함수
    scwin.saveFn = option.saveFn;
  }
  if (option.readOnlyYn !== undefined && option.readOnlyYn == "Y") {
    // readOnly 처리 여부
    grd_file.setReadOnly(true);
    grd_file.setColumnReadOnly("chk", false);
  }
  if (option.gridHeight) {
    grd_file.setGridHeight(option.gridHeight);
  }
  if (option.visibleRowNum) {
    grd_file.setVisibleRowNum(option.visibleRowNum);
  }
  if (scwin.useOpenPendingBlock) {
    mpd_multiFileUpload.setStyle("display", "none");
  }
  let saveBtn = option.saveButtonId || "btn_trigger1_in_udc";
  let pFrame = $p.parent();
  pFrame[saveBtn] = btn_trigger1;
  if (!$c.util.isEmpty($p, option.addButtonName)) {
    // 추가 버튼 명
    btn_fileSelecting.setLabel(option.addButtonName);
  }
  if (!$c.util.isEmpty($p, option.saveButtonName)) {
    // 저장 버튼 명
    btn_trigger1.setLabel(option.saveButtonName);
  }
  if (option.saveButtonYn !== undefined) {
    scwin.setSaveButtonVisible(option.saveButtonYn);
  }
  scwin.setFileUpload(option);
  scwin.setFileStatus();
  scwin.setDropEventHandler();
  $c.util.setGridViewDelCheckBox($p, grd_file);
  scwin.applyHeaderClassState();
  if (typeof option.typeData !== "undefined") {
    scwin.setTypeData(option.typeData);
  } else {
    scwin.getCodeFileList = $c.gus.gauceUtil($p, "getCodeList", "FI111", 1);
    scwin.applyTypeData(scwin.getCodeFileList);
  }
};

/**
 * 파일 업로드 정책 및 기본 세팅이 완료되면 호출되는 콜백 함수
 */
scwin.callbackFileUploadSetting = function () {
  let filter = "";
  if ($c.util.isEmpty($p, scwin.option.filter) === false) {
    const extArr = scwin.option.filter.split(",");
    for (let idx in extArr) {
      filter += "*." + extArr[idx].trim() + ";";
    }
  } else {
    filter = "*.*";
  }
  mpd_multiFileUpload.setFilter("Filter", filter);
  mpd_multiFileUpload.removeAllFiles();
  dlt_file.removeAll();
  scwin.setFileStatus();
};

/**
 * File Drop Event Handler를 세팅한다.
 */
scwin.setDropEventHandler = function () {
  const fileDragDom = grd_file.render;
  fileDragDom.addEventListener("dragover", scwin.doHandleDrop, false);
  fileDragDom.addEventListener("dragenter", scwin.doHandleDrop, false);
  fileDragDom.addEventListener("dragleave", scwin.doHandleDrop, false);
  fileDragDom.addEventListener("drop", scwin.doHandleDrop, false);
};

/**
 * 업로드할 파일 Drop를 업로드할 파일로 등록한다.
 */
scwin.doHandleDrop = function (e) {
  try {
    WebSquare.event.stopEvent(e);
    let fileData = e.dataTransfer.files;
    const uploadFileData = [];
    for (let idx = 0; idx < fileData.length; idx++) {
      let isExisted = false;
      for (let fileIdx in mpd_multiFileUpload.fileArray) {
        if (fileData[idx].name === mpd_multiFileUpload.fileArray[fileIdx].name) {
          isExisted = true;
        }
      }
      if (isExisted === false) {
        uploadFileData.push(fileData[idx]);
        mpd_multiFileUpload.fileArray.push(fileData[idx]);
        mpd_multiFileUpload.fileNameArr.push(fileData[idx].name);
        mpd_multiFileUpload._inx++;
      }
    }
    scwin.selectCallback(uploadFileData);
    //console.table(mpd_multiFileUpload.fileArray);
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * 파일 업로드 상태 정보를 업데이트 한다.
 */
scwin.setFileStatus = function () {
  const fileInfo = scwin.getCurrentFileInfo();
  tbx_fileCount.setValue(fileInfo.fileCount + " / " + scwin.option.maxFileCount);
  tbx_fileSize.setValue($c.num.formatByte($p, fileInfo.fileSize) + " / " + $c.num.formatByte($p, scwin.option.totalFileSize));
};
scwin.getInternalMaxFileCount = function () {
  // Keep native multiupload count checks from firing before UDC validation.
  return 999;
};

/**
 * 업로드할 파일 선택이 완료되면 호출되는 콜백 함수
 */
scwin.selectCallback = function (data) {
  if (scwin.option.receiptYn == "Y" && lc_type.getValue() == "00") {
    $c.win.alert($p, "증빙파일종류를 선택해 주세요");
    mpd_multiFileUpload.removeAllFiles();
    return;
  }
  const currentFileList = dlt_file.getAllJSON();
  let isValid = true;
  let fileInfo = scwin.getCurrentFileInfo();
  const newFileInfo = {
    fileCount: 0,
    fileSize: 0
  };
  for (let idx in data) {
    if (scwin.option.maxFileSize < data[idx].size) {
      let alertMsg = "파일은" + $c.num.formatByte($p, scwin.option.maxFileSize) + " 이내로 등록해 주세요.";
      $c.win.alert($p, alertMsg);
      mpd_multiFileUpload.removeFile(data[idx].name);
      delete data[idx];
    } else {
      newFileInfo.fileCount++;
      newFileInfo.fileSize += data[idx].size;
    }
  }
  if (scwin.option.maxFileCount < fileInfo.fileCount + newFileInfo.fileCount) {
    const alertMsg = "업로드 건수가 " + scwin.option.maxFileCount + "건으로 제한되어 있습니다.";
    $c.win.alert($p, alertMsg);
    isValid = false;
  }
  if (scwin.optiototalFileSize < fileInfo.fileSize + newFileInfo.fileSize && isValid === true) {
    const alertMsg = "최대 파일 용량은 " + $c.num.formatByte($p, scwin.option.totalFileSize) + " 입니다.";
    $c.win.alert($p, alertMsg);
    isValid = false;
  }
  if (isValid === false) {
    for (let idx in data) {
      mpd_multiFileUpload.removeFile(data[idx].name);
    }
    dlt_file.setJSON(currentFileList);
    scwin.setFileStatus();
    return;
  }
  if (data.length > 0) {
    const newFileCount = data.length;
    const fileInfoList = [];
    for (let idx in data) {
      const fileInfo = {
        "ORIGIN_FILE_NM": scwin.buildFixedFileName(data[idx].name),
        "hiddenKey": scwin.hasFixedFileName() ? data[idx].name : "",
        "FILE_SIZE": data[idx].size
      };

      // if(scwin.option.receiptYn == "Y") {
      //     fileInfo.evidClsNm = lc_type.getValue();
      //     fileInfo.receptYn = cbx_recept.getValue();
      // }

      fileInfoList.push(fileInfo);
    }
    let lastIdx = dlt_file.getRowCount();
    const totalFileCount = lastIdx + fileInfoList.length;
    dlt_file.insertJSON(lastIdx, fileInfoList);
    for (let idx = lastIdx; idx < totalFileCount; idx++) {
      grd_file.setCellClass(idx, "status", "progress");
    }

    // grd_file.setFocusedCell(totalFileCount - 1, "FILE_SEQ", false);
  }
  scwin.setFileStatus();
};
scwin.hasFixedFileName = function () {
  return !$c.util.isEmpty($p, scwin.option) && !$c.util.isEmpty($p, scwin.option.fixedFileName);
};
scwin.getFileExtension = function (fileName) {
  if ($c.util.isEmpty($p, fileName)) {
    return "";
  }
  const lastDot = fileName.lastIndexOf(".");
  return lastDot > -1 ? fileName.substring(lastDot) : "";
};
scwin.buildFixedFileName = function (localFileName) {
  if (!scwin.hasFixedFileName()) {
    return localFileName || "";
  }
  const fixedFileName = scwin.option.fixedFileName;
  if (scwin.getFileExtension(fixedFileName) !== "") {
    return fixedFileName;
  }
  return fixedFileName + scwin.getFileExtension(localFileName);
};
scwin.findUploadRowIndexes = function (uploadFileName) {
  if ($c.util.isEmpty($p, uploadFileName)) {
    return [];
  }
  if (scwin.hasFixedFileName()) {
    const hiddenKeyIndexes = dlt_file.getMatchedIndex("hiddenKey", uploadFileName) || [];
    if (hiddenKeyIndexes.length > 0) {
      return hiddenKeyIndexes;
    }
  }
  return dlt_file.getMatchedIndex("ORIGIN_FILE_NM", uploadFileName) || [];
};

/**
 * 현재 업로드된 파일 정보를 반환한다.
 */
scwin.getCurrentFileInfo = function () {
  const fileInfo = {
    fileCount: 0,
    fileSize: 0
  };
  const fileList = dlt_file.getAllJSON();
  for (let idx in fileList) {
    const rowStatus = fileList[idx].rowStatus;
    if (rowStatus === "C" || rowStatus === "U" || rowStatus === "R") {
      fileInfo.fileCount++;
      fileInfo.fileSize += $c.num.parseInt($p, fileList[idx].FILE_SIZE);
    }
  }
  ;
  return fileInfo;
};

/**
 * 전체 파일 정보를 지운다.
 */
scwin.clearFiles = function () {
  dlt_file.removeAll();
  mpd_multiFileUpload.setMaxFileCount(scwin.getInternalMaxFileCount());
};

/**
 * 파일 업로드 진행 상황을 업데이트한다.
 */
scwin.mpd_multiFileUpload_onprogress = function (data) {
  const rowIdx = scwin.findUploadRowIndexes(data.fileName);
  for (let idx = 0; idx < rowIdx.length; idx++) {
    let fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
    if (fileInfo.rowStatus === "C" && $c.util.isEmpty($p, fileInfo.fileId) === true) {
      if (data.percentData < 100) {
        dlt_file.setCellData(rowIdx[idx], "status", data.percentData);
      } else {
        // dlt_file.setCellData(rowIdx[idx], "status", "S");
        dlt_file.setCellData(rowIdx[idx], "status", "Completed");
      }
    }
  }
  return;
};

/**
 * 파일 업로드가 완료되면 호출되는 콜백 함수
 */
scwin.mpd_multiFileUpload_ondone = async function (data) {
  const newFileCount = data.length;
  for (let fileIdx = 0; fileIdx < newFileCount; fileIdx++) {
    const uploadResult = scwin.normalizeUploadResult(data[fileIdx]);
    const rowIdx = scwin.findUploadRowIndexes(uploadResult.localFile);
    if (rowIdx.length > 0) {
      dlt_file.setBroadcast(false);
      for (let idx = 0; idx < rowIdx.length; idx++) {
        if (uploadResult.success) {
          dlt_file.setCellData(rowIdx[idx], "FILE_STORED_PATH", uploadResult.storedPath);
          dlt_file.setCellData(rowIdx[idx], "STORED_FILE_NM", uploadResult.fileName);
          dlt_file.setCellData(rowIdx[idx], "FILE_SIZE", uploadResult.size);
          dlt_file.setCellData(rowIdx[idx], "status", "Completed");
          dlt_file.modifyRowStatus(rowIdx[idx], "R");
          grd_file.refreshCell(rowIdx[idx], "ORIGIN_FILE_NM");
        } else {
          dlt_file.setCellData(rowIdx[idx], "status", "Error");
        }
      }
    } else {
      let deniedIdx = scwin.findUploadRowIndexes(uploadResult.localFile || data[fileIdx].deniedFile);
      for (var i = 0; i < deniedIdx.length; i++) {
        dlt_file.setCellData(deniedIdx[i], "status", "Error");
      }
    }
    dlt_file.setBroadcast(true, true);
  }
  // await $c.win.alert("파일 처리가 완료되었습니다.");

  $p.emit("onFileUploadDone", true);

  // scwin.saveFileInfo();
};
scwin.normalizeUploadResult = function (item) {
  let payload = {};
  const parseXmlPayload = function (raw) {
    const xmlDoc = WebSquare.xml.parse(raw);
    if (!xmlDoc) {
      return {};
    }
    const getValue = function (tagName) {
      const node = xmlDoc.getElementsByTagName(tagName)[0];
      return node && node.textContent ? node.textContent : "";
    };
    return {
      success: getValue("success") !== "false",
      localFile: getValue("localFile"),
      file: getValue("file"),
      fileName: getValue("fileName"),
      storedPath: getValue("storedPath"),
      path: getValue("path"),
      size: getValue("size")
    };
  };
  try {
    if (typeof item === "string") {
      payload = item.trim().startsWith("<") ? parseXmlPayload(item) : JSON.parse(item);
    } else if (item && typeof item.responseText === "string" && item.responseText !== "") {
      payload = item.responseText.trim().startsWith("<") ? parseXmlPayload(item.responseText) : JSON.parse(item.responseText);
    } else if (item && typeof item.response === "string" && item.response !== "") {
      payload = item.response.trim().startsWith("<") ? parseXmlPayload(item.response) : JSON.parse(item.response);
    } else if (item && typeof item.response === "object" && item.response !== null) {
      payload = item.response;
    } else if (item && typeof item.result === "string" && item.result !== "") {
      payload = item.result.trim().startsWith("<") ? parseXmlPayload(item.result) : JSON.parse(item.result);
    } else if (item && typeof item.result === "object" && item.result !== null) {
      payload = item.result;
    }
  } catch (ex) {
    console.error(ex);
  }
  const fullPath = payload.path || payload.s3Key || item.path || "";
  let storedPath = payload.storedPath || item.storedPath || "";
  let fileName = payload.fileName || payload.file || item.file || item.serverFileName || item.localFile || "";
  if (fullPath && fileName === "") {
    const pathTokens = fullPath.split("/");
    fileName = pathTokens[pathTokens.length - 1];
  }
  if (fullPath && storedPath === "" && fileName !== "" && fullPath.endsWith(fileName)) {
    storedPath = fullPath.substring(0, fullPath.length - fileName.length);
  }
  return {
    success: payload.success !== false,
    localFile: item.localFile || payload.localFile || payload.originalFileName || fileName,
    fileName: fileName,
    storedPath: storedPath,
    size: payload.size || item.size || 0
  };
};
scwin.deniedMsg = function (cd) {
  let rtMsg = "";
  switch (cd) {
    case "101":
      rtMsg = "확장자오류";
      break;
    case "102":
      rtMsg = "사이즈오류";
      break;
    default:
      rtMsg = "서버오류";
      break;
  }
  return rtMsg;
};

/**
 * 업로드 상태 표시 Display Formatter
 */
scwin.setDisplayStatus = function (value) {
  if (value == "S") {
    return "Completed";
  } else if (value == "E") {
    return "Error";
  } else if ($c.num.parseInt($p, value) > 0 && $c.num.parseInt($p, value) < 100) {
    return "<div style='width:" + value + "%; height:100%;' class='div_progress'>" + value + "%</div>";
  } else {
    return "<div style='width:0%; height:100%;' class='div_progress'></div>";
  }
};

/**
 * 업로드하려는 파일을 다시 삭제할 때 발생하는 이벤트
 */
scwin.dlt_file_onremoverow = function (info) {
  for (let idx in info.removedDataObj) {
    const fileName = info.removedDataObj[idx][11] || info.removedDataObj[idx][3];
    mpd_multiFileUpload.removeFile(fileName);
  }
  scwin.setFileStatus();
};

/**
 * 기존에 등록된 파일을 Double Click 클릭하면 파일다운로드가 동작함
 */
scwin.customFormatterFileNm = function (data, formattedData, rowIndex, colIndex) {};

/**
 * 파일 사이즈를 적절한 포맷으로 변환해서 반환한다.
 */
scwin.displayFileSize = function (value) {
  return $c.num.formatByte($p, value);
};

/**
 * 파일 데이터 저장 후 콜백 함수
 */
scwin.sbm_saveFile_submitdone = function (e) {
  scwin.setFileStatus();
  if (e.responseJSON.success == true) {
    // dlt_file.modifyAllStatus("R");
    $p.emit("onFileUploadDone", true);
  } else {
    $p.emit("onFileUploadDone", false);
  }
};

/**
 * 파일 아이디 가져오기 또는 파일 정보 반환 Submit Done 함수
 */
scwin.sbm_selectFile_submitdone = function (e) {
  if (e.responseJSON.dlt_file.length >= 0) {
    dlt_file.setJSON(e.responseJSON.dlt_file);
    scwin.setFileStatus();
  }
  mpd_multiFileUpload.removeAllFiles();
};

/**
 * 파일 업로드 전에 파라미터 정보를 세팅한다.
 */
scwin.getCurrentYearMonth = function () {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return String(year) + month;
};
scwin.getResolvedSubDir = function () {
  let subDir = scwin.option.subDir || "";
  if (scwin.option.subDirYearMonthYn !== "Y") {
    return subDir;
  }
  subDir = String(subDir).replace(/\\/g, "/");
  const yearMonth = scwin.getCurrentYearMonth();
  const normalizedSubDir = subDir.replace(/\/+$/, "");
  if ($c.util.isEmpty($p, normalizedSubDir)) {
    return yearMonth + "/";
  }
  if (normalizedSubDir === yearMonth || normalizedSubDir.endsWith("/" + yearMonth)) {
    return normalizedSubDir + "/";
  }
  return normalizedSubDir + "/" + yearMonth + "/";
};
scwin.setUploadParam = function () {
  mpd_multiFileUpload.setParam(0, "subDir", scwin.getResolvedSubDir());
};

/**
 * 파일 업로드 과정에서 에러 발생 시 발생하는 이벤트 함수
 */
scwin.mpd_multiFileUpload_onerror = function (data) {
  $c.win.alert($p, "파일 업로드에 실패했습니다.");
};

/**
 * @method
 * @name undoFileUpload
 * @description 파일 추가 & 삭제 상태를 원복하는 함수
 * @param {string} dataSeq 데이터 순번 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */
scwin.undoFileUpload = function (dataSeq) {
  dlt_file.undoAll();
  dlt_file.removeRows(dlt_file.getInsertedIndex());
  mpd_multiFileUpload.removeAllFiles();
};

/**
 * @method
 * @name setFileUpload
 * @description 파일 업로드 옵션을 설정하는 함수
 * @param {string} option 파일 업로드 옵션 
 * @returns 
 * @hidden N
 * @exception 
 * @example // 첨부 파일 업로드 모듈 초기 설정 옵션
 */
scwin.setFileUpload = function (option) {
  scwin.option = {};
  try {
    scwin.option.maxFileCount = option.maxFileCount;
    scwin.option.maxFileSize = option.maxFileSize;
    scwin.option.totalFileSize = option.totalFileSize;
    scwin.option.receiptYn = option.receiptYn;
    if ($c.util.isEmpty($p, option.filter) == false) {
      scwin.option.filter = option.filter;
    }
    mpd_multiFileUpload.setMaxFileCount(scwin.getInternalMaxFileCount());
    mpd_multiFileUpload.setMaxFileSize(scwin.option.maxFileSize);
    if (typeof option.subDir !== "undefined") {
      scwin.option.subDir = option.subDir;
    }
    if (typeof option.subDirYearMonthYn !== "undefined") {
      scwin.option.subDirYearMonthYn = option.subDirYearMonthYn;
    }
    if (typeof option.fixedFileName !== "undefined") {
      scwin.option.fixedFileName = option.fixedFileName;
    }
    if (typeof option.typeData !== "undefined") {
      scwin.setTypeData(option.typeData);
    }
    scwin.setFileSelectingButtonDisabled(false);
    scwin.callbackFileUploadSetting();
    scwin.applyHeaderClassState();
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name startFileUpload
 * @description 파일 업로드를 실행하는 함수
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */
scwin.startFileUpload = function () {
  if (scwin.blockOpenPendingAction()) {
    return;
  }
  let delIdxs = dlt_file.getDeletedIndex();
  if (delIdxs.length > 0) {
    dlt_file.removeRows(delIdxs);
  }
  ;
  const fileModifiedCount = mpd_multiFileUpload.getFileInfos().length;
  if (fileModifiedCount > 0) {
    // 선택한 파일의 업로드를 시작한다.
    scwin.saveFile();
  } else {
    if (delIdxs.length == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "등록할 파일"));
    } else {
      $p.emit("onFileUploadDone", true);
    }
  }
};
scwin.saveFile = function () {
  try {
    if (mpd_multiFileUpload.getFileInfos().length > 0) {
      scwin.setUploadParam();
      mpd_multiFileUpload.startUpload();
    } else {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "등록할 파일"));
      return;
    }
  } catch (ex) {
    console.error(ex);
  }
};

/**
 * @method
 * @name getUpdatedFile
 * @description 업데이트된 파일 정보를 반환하는 함수
 * @param 
 * @returns {string} option 파일 업로드 옵션 
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getUpdatedFile = function (option) {
  return dlt_file.getModifiedJSON({
    saveRemovedData: false
  });
};

/**
 * @method
 * @name setFileSelectingButtonDisabled
 * @description 파일 선택 버튼을 상태를 제어함
 * @param {boolean} status 버튼 상태 ( true : 활성화, false : 비활성화) 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */
scwin.setFileSelectingButtonDisabled = function (status) {
  btn_fileSelecting.setDisabled(status);
  mpd_multiFileUpload.setDisabled(status);
};

/**
 * @method
 * @name isModified
 * @description 추가하거나 삭제하려는 파일이 있는지 여부 검사
 * @param 
 * @returns {boolean} status 파일 변경 상태 ( true : 변경된 파일 있음, false : 변경된 파일 없음) 
 * @hidden N
 * @exception 
 * @example 
 */
scwin.isModified = function () {
  return $c.data.isModified($p, dlt_file);
};

/**
 * @method
 * @name setFixNum
 * @description 그리드 fixNum 변경
 * @param {string} num desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setFixNum = function (num) {
  grd_file.options.visibleRowNumFix = "true";
  grd_file.setVisibleRowNum(num);
};

/**
 * @method
 * @name setData
 * @description 파일정보를 그리드에 저장한다
 * @param {Object} jsonData desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setData = function (jsonData) {
  dlt_file.setJSON(jsonData);
  // dlt_file.modifyAllStatus("C");
  scwin.setFileStatus();
};

/**
 * @method
 * @name getData
 * @description 파일 데이터를 가져온다
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getData = function () {
  return dlt_file.getAllJSON();
};

/**
 * @method
 * @name getType
 * @description 증빙파일종류 값가져오기
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getType = function () {
  return lc_type.getValue();
};

/**
 * @method
 * @name setType
 * @description 증빙파일종류 값 세팅
 * @param value
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setType = function (value) {
  lc_type.setValue(value);
};
scwin.setTypeData = function (jsonData, sortYn) {
  scwin.hasCustomTypeData = true;
  scwin.applyTypeData(jsonData, sortYn);
};
scwin.getTypeData = function () {
  return dlt_types.getAllJSON();
};

/**
 * @method
 * @name setSubDir
 * @description 파일 경로 동적 변경
 * @param {string} path desc
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.setSubDir = function (path) {
  scwin.option = scwin.option || {};
  scwin.option.subDir = path;
};
scwin.setSubDirYearMonthYn = function (value) {
  scwin.option = scwin.option || {};
  scwin.option.subDirYearMonthYn = String(value || "N").toUpperCase() === "Y" ? "Y" : "N";
};
scwin.setFixedFileName = function (value) {
  scwin.option = scwin.option || {};
  scwin.option.fixedFileName = value || "";
};

/**
 * @method
 * @name getRecept
 * @description 영수구분값 가져오기
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getRecept = function () {
  return cbx_recept.getValue();
};

/**
 * @method
 * @name getDisplayData
 * @description display 데이터값을 가져온다
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getDisplayData = function () {
  return dlt_file.getAllDisplayJSON();
};

/**
 * @method
 * @name getModifiedData
 * @description desc
 * @param
 * @returns
 * @hidden N
 * @exception
 * @example
 */
scwin.getModifiedData = function () {
  return dlt_file.getModifiedJSON();
};

/**
 * @method
 * @name setGridClear
 * @description grid의 데이터를 clear해준다.
 * @param
 * @returns
 * @hidden N
 * @exception
 * @migrationStatus
 * @example
 */
scwin.setGridClear = function () {
  dlt_file.removeAll();
};

// 파일 저장
scwin.btn_trigger4_onclick = function (e) {
  //debugger;
  if (scwin.saveFn) {
    var fnNm = scwin.saveFn.split(".")[1];
    if (!fnNm) return;
    $p.parent().scwin[fnNm]();
  } else {
    scwin.startFileUpload();
  }
};
scwin.buildStoredFileKey = function (filePath, fileName) {
  if ($c.util.isEmpty($p, filePath)) {
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
scwin.downloadFile = async function (paramJson, flag) {
  try {
    const response = await fetch(scwin.FILE_DOWNLOAD_URL + "?" + new URLSearchParams({
      path: paramJson.FILE_PATH,
      fileName: paramJson.FILE_NAME
    }));

    // 404 처리
    if (response.status === 404) {
      alert(`해당파일[${paramJson.FILE_PATH}]이 존재하지 않습니다.`);
      return;
    }

    // 서버 에러 처리
    if (!response.ok) {
      alert("파일 다운로드 중 오류가 발생했습니다.");
      return;
    }

    // 파일 blob 받기
    const result = await response.json();
    if (!result.downloadUrl) {
      alert("다운로드 URL 생성에 실패했습니다.");
      return;
    }
    // 파일명 추출
    window.location.href = result.downloadUrl;

    //  다운로드 실행
  } catch (error) {
    console.error(error);
    alert("다운로드 처리 중 예외가 발생했습니다.");
  }
};
scwin.customFm = function (data, formatData, rowIndex, colIndex) {};
scwin.btn_fileSelecting_onclick = function (e) {
  if (scwin.blockOpenPendingAction(e)) {
    return;
  }
  mpd_multiFileUpload.open();
};
scwin.grd_file_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.blockOpenPendingAction()) {
    return;
  }
  if (columnId == "ORIGIN_FILE_NM" && dlt_file.getRowStatus(rowIndex) !== "C") {
    const storedFileNm = dlt_file.getCellData(rowIndex, "STORED_FILE_NM");
    const originFileNm = dlt_file.getCellData(rowIndex, "ORIGIN_FILE_NM");
    const filePath = dlt_file.getCellData(rowIndex, "FILE_STORED_PATH");
    if (dlt_file.getCellData(rowIndex, "status") == "Completed") {
      scwin.downloadFile({
        "FILE_NAME": originFileNm,
        "FILE_PATH": filePath,
        "PGM_ID": scwin.pgmId,
        "CALLER_URL": scwin.src
      });
    } else {
      scwin.downloadFile({
        "FILE_NAME": originFileNm,
        "FILE_PATH": filePath + storedFileNm,
        "PGM_ID": scwin.pgmId,
        "CALLER_URL": scwin.src
      });
    }
  }
};
scwin.downloadFile = async function (paramJson, flag) {
  try {
    const response = await fetch(scwin.FILE_DOWNLOAD_URL + "?" + new URLSearchParams({
      path: paramJson.FILE_PATH,
      fileName: paramJson.FILE_NAME
    }));
    if (response.status === 404) {
      alert(`해당파일[${paramJson.FILE_PATH}]이 존재하지 않습니다.`);
      return;
    }
    if (response.status === 500) {
      alert("서버 오류입니다.");
      return;
    }
    if (!response.ok) {
      alert("파일 다운로드 중 오류가 발생했습니다.");
      return;
    }
    const result = await response.json();
    if (!result.downloadUrl) {
      alert("다운로드 URL 생성에 실패했습니다.");
      return;
    }
    window.location.href = result.downloadUrl;
  } catch (error) {
    console.error(error);
    alert("다운로드 처리 중 예외가 발생했습니다.");
  }
};
scwin.setSaveButtonVisible = function (visible) {
  const isVisible = !(visible === false || visible === "false" || visible === "N" || visible === "n");
  if (isVisible) {
    btn_trigger1.show("");
  } else {
    btn_trigger1.hide();
  }
};
scwin.executeSaveAction = function (e) {
  if (scwin.blockOpenPendingAction(e)) {
    return;
  }
  if (scwin.saveFn) {
    var fnNm = scwin.saveFn.split(".")[1];
    if (!fnNm) return;
    $p.parent().scwin[fnNm]();
    return;
  }
  scwin.startFileUpload();
};
scwin.btn_trigger4_onclick = function (e) {
  scwin.executeSaveAction(e);
};
scwin.headerColumnMap = {
  chk: "chkAll",
  slipNo: "column18",
  slipKndNm: "column22",
  evidClsCd: "column24",
  evidClsNm: "column20",
  receptYn: "column23",
  ORIGIN_FILE_NM: "column11",
  FILE_EXPLAIN: "column17",
  FILE_SIZE: "column7",
  status: "column14"
};
scwin.headerClassState = {};
scwin.resolveHeaderColumnId = function (columnId) {
  return scwin.headerColumnMap[columnId] || columnId;
};
scwin.findHeaderCells = function (headerColumnId) {
  const roots = [];
  if (grd_file.render) {
    roots.push(grd_file.render);
  }
  if (document) {
    roots.push(document);
  }
  const selectors = [`.w2grid_header [id*='${headerColumnId}']`, `.w2grid_header [id$='${headerColumnId}']`, `.w2grid_header [data-columnid='${headerColumnId}']`, `.w2grid_header [columnid='${headerColumnId}']`, `.w2grid_header [colid='${headerColumnId}']`, `.w2grid_header [data-id='${headerColumnId}']`, `[id*='${headerColumnId}']`, `[data-columnid='${headerColumnId}']`, `[columnid='${headerColumnId}']`, `[colid='${headerColumnId}']`, `[data-id='${headerColumnId}']`];
  const nodes = [];
  roots.forEach(function (root) {
    selectors.forEach(function (selector) {
      root.querySelectorAll(selector).forEach(function (node) {
        if (nodes.indexOf(node) === -1) {
          nodes.push(node);
        }
      });
    });
  });
  return nodes.filter(function (node) {
    return !!node.closest(".w2grid_header, .w2grid_headerTable, .w2grid_header_row, .w2grid_header_td, th, td");
  });
};
scwin.applyHeaderClassState = function () {
  setTimeout(function () {
    Object.keys(scwin.headerClassState).forEach(function (headerColumnId) {
      const className = scwin.headerClassState[headerColumnId];
      const nodes = scwin.findHeaderCells(headerColumnId);
      nodes.forEach(function (node) {
        node.classList.remove("txt-red");
        node.classList.remove("txt-blue");
        node.classList.remove("txt-gray");
        node.style.color = "";
        node.querySelectorAll("*").forEach(function (child) {
          child.classList.remove("txt-red");
          child.classList.remove("txt-blue");
          child.classList.remove("txt-gray");
          child.style.color = "";
        });
        if (className) {
          node.classList.add(className);
          node.querySelectorAll("*").forEach(function (child) {
            child.classList.add(className);
          });
          if (className === "txt-red") {
            node.style.color = "var(--dw-color-red2)";
            node.querySelectorAll("*").forEach(function (child) {
              child.style.color = "var(--dw-color-red2)";
            });
          }
        }
      });
    });
  }, 50);
};
scwin.setHeaderClass = function (columnIds, className) {
  const targetIds = Array.isArray(columnIds) ? columnIds : [columnIds];
  targetIds.forEach(function (columnId) {
    const headerColumnId = scwin.resolveHeaderColumnId(columnId);
    scwin.headerClassState[headerColumnId] = className || "";
  });
  scwin.applyHeaderClassState();
};
scwin.setHeaderRed = function (columnIds) {
  scwin.setHeaderClass(columnIds, "txt-red");
};
scwin.clearHeaderRed = function (columnIds) {
  scwin.setHeaderClass(columnIds, "");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',useExternalClass:'true'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8 file-upload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'grpTypeArea',class:'form-group file-type',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'txtEvid',label:'증빙파일종류',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',allOption:'',id:'lc_type',class:'',direction:'auto',ref:'',chooseOption:'',visibleRowNum:'12'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_types'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:select',A:{selectedindex:'-1',id:'cbx_recept',appearance:'full',style:'display:none',renderType:'checkboxgroup',cols:'',rows:'',ref:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영수구분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:group',A:{style:'position:relative; display:inline-block;'},E:[{T:1,N:'w2:button',A:{id:'btn_fileSelecting',label:'첨부파일 추가',class:'btn pt-white','ev:onclick':'scwin.btn_fileSelecting_onclick'}},{T:1,N:'w2:multiupload',A:{'ev:onComplete':'',maxcount:'','ev:onprogress':'scwin.mpd_multiFileUpload_onprogress',fireEventOnError:'',filter:'',mode:'html5_transparent','ev:ondone':'scwin.mpd_multiFileUpload_ondone','ev:onerror':'scwin.mpd_multiFileUpload_onerror',displaySizeUnit:'MB',action:'/s3upload.do',style:'position:absolute; left:0; top:0; width:100%; height:100%;',wmode:'false',id:'mpd_multiFileUpload',maxsize:'1000000000',uploadButton:'',selectCallback:'scwin.selectCallback',subSize:'AC'}}]},{T:1,N:'xf:trigger',A:{class:'btn pt-blue','ev:onclick':'scwin.btn_trigger4_onclick',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{summary:'',readOnlyTabIgnore:'',scrollByColumnAdaptive:'false',readOnlyBackgroundImgCSS:'',wheelRows:'1',rowNumVisible:'',rowStatusWidth:'',disabledScrollHidden:'',scrollByColumn:'false','ev:onheaderclick':'',rowStatusHeaderValue:'상태',focusMode:'row',rowStatusVisible:'true',rowNumWidth:'',dataList:'data:dlt_file',style:'',autoFit:'allColumn',id:'grd_file',visibleRowNum:'5',visibleRowNumFix:'true',class:'wq_gvw multi_file',autoFitMinWidth:'800',useFilterList:'false',dataDragDrop:'true','ev:oncellclick':'scwin.grd_file_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'40',inputType:'text',style:'',id:'chkAll',value:'삭제',blockSelect:'false',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'증빙파일종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'증빙파일종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'영수구분',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'210',inputType:'text',style:'',id:'fileNm',value:'파일명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'fileDesc',value:'파일설명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column7',value:'파일크기',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column14',value:'전송결과',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'checkbox',id:'chk',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'evidClsCd',value:'',displayMode:'label',hidden:'true',expression:'display(\'evidClsNm\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'evidClsNm',value:'',displayMode:'label',hidden:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_types'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'receptYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'210',inputType:'link',readOnly:'true',id:'ORIGIN_FILE_NM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'FILE_EXPLAIN',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.displayFileSize',expression:'',dataType:'',removeBorderStyle:'false',width:'100',inputType:'text',readOnly:'true',style:'',id:'FILE_SIZE',class:'progress',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'',textAlign:'right',removeBorderStyle:'false',width:'100',inputType:'text',readOnly:'true',id:'status',blockSelect:'false',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group flex-end'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'파일 수 :',class:'ett'}},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_fileCount',label:'0개/ 10개',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'총 용량 :',class:'ett'}},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_fileSize',label:'0MB / 200MB',class:''}}]}]}]}]}]})