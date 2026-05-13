/*amd /cm/udc/fileMultiUploadPreview.xml 33535 236d9a3b7c02d244a2ef0df6f6ee630d53bc3a6ad4534915a4c2d910f6f44379 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:publicInfo',A:{method:'scwin.undoFileUpload,scwin.setFileUpload,scwin.startFileUpload,scwin.getUpdatedFile,scwin.setFileSelectingButtonDisabled,scwin.isModified,scwin.setFixNum,scwin.setData,scwin.getData,scwin.getType',component:''}},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list','ev:onremoverow':'scwin.dlt_file_onremoverow',id:'dlt_file',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙파일종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'key',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preView',name:'미리보기',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_downMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_NAME',name:'파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_PATH',name:'경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PGM_ID',name:'프로그램아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CALLER_URL',name:'호출경로',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_fileDown',action:'/s3upload.do',method:'post',mediatype:'text/xml',ref:'data:json,dma_downMap',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fileDown_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
scwin.serverMode = window.location.hostname.indexOf("newdevdebis.dongwon.com") > -1 ? "dev" : window.location.hostname.indexOf("newdebis.dongwon.com") > -1 ? "prd" : "local";
scwin.useOpenPendingBlock = scwin.serverMode === "prd";
scwin.blockOpenPendingAction = function (e) {
  if (!scwin.useOpenPendingBlock) {
    return false;
  }
  try {
    if (e) {
      WebSquare.event.stopEvent(e);
    }
  } catch (ignore) {}
  $c.win.alert($p, "\uC624\uD508 \uC900\uBE44\uC911\uC785\uB2C8\uB2E4");
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
  try {
    let menuInfo = $p.parent().$p.getParameter("paramData").menuInfo;
    if (typeof menuInfo !== "undefined") {
      scwin.pgmId = menuInfo.pgmId;
      scwin.src = menuInfo.src;
    }
  } catch (e) {
    console.log("#### parameter ###");
  }
  if (option.typeYn == "Y") {
    // 증빙파일종류
    grpTypeArea.show("");
    grd_file.setColumnVisible("slipNo", true);
    grd_file.setColumnVisible("slipKndNm", true);
    grd_file.setColumnVisible("evidClsNm", true);
  }
  if (option.saveFn !== undefined) {
    // 파일 저장 함수
    scwin.saveFn = option.saveFn;
  }
  if (scwin.useOpenPendingBlock) {
    mpd_multiFileUpload.setStyle("display", "none");
  }
  scwin.setFileUpload(option);
  scwin.setFileStatus();
  scwin.setDropEventHandler();
  $c.util.setGridViewDelCheckBox($p, grd_file);
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

/**
 * 업로드할 파일 선택이 완료되면 호출되는 콜백 함수
 */
scwin.selectCallback = function (data) {
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
    const alertMsg = "파일 갯수는 " + scwin.option.maxFileCount + " 까지 입니다.";
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
    return;
  }
  if (data.length > 0) {
    const newFileCount = data.length;
    const fileInfoList = [];
    for (let idx in data) {
      const fileInfo = {
        "ORIGIN_FILE_NM": data[idx].name,
        "FILE_SIZE": data[idx].size
      };
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
  mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount);
};

/**
 * 파일 업로드 진행 상황을 업데이트한다.
 */
scwin.mpd_multiFileUpload_onprogress = function (data) {
  const rowIdx = dlt_file.getMatchedIndex("ORIGIN_FILE_NM", data.fileName);
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
    const rowIdx = dlt_file.getMatchedIndex("ORIGIN_FILE_NM", data[fileIdx].localFile);
    // debugger;
    if (rowIdx.length > 0) {
      dlt_file.setBroadcast(false);
      for (let idx = 0; idx < rowIdx.length; idx++) {
        const fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
        if ("S" === $c.sbm.getMessageCode($p, 'STATUS_SUCCESS')) {
          //dlt_file.setCellData(rowIdx[idx], "DATA_SEQ", scwin.option.dataSeq);
          //dlt_file.setCellData(rowIdx[idx], "FILE_GRP_SEQ", scwin.option.fileGrpSeq);
          dlt_file.setCellData(rowIdx[idx], "FILE_STORED_PATH", scwin.option.subDir);
          dlt_file.setCellData(rowIdx[idx], "STORED_FILE_NM", data[fileIdx].file);
          dlt_file.setCellData(rowIdx[idx], "FILE_SIZE", data[fileIdx].size);
          dlt_file.modifyRowStatus(rowIdx[idx], "R");
          grd_file.refreshCell(rowIdx[idx], "ORIGIN_FILE_NM");
        }
      }
    } else {
      let deniedIdx = dlt_file.getMatchedIndex("ORIGIN_FILE_NM", data[fileIdx].deniedFile);
      for (var i = 0; i < deniedIdx.length; i++) {
        dlt_file.setCellData(deniedIdx[i], "status", "Error(" + scwin.deniedMsg(data[fileIdx].deniedCode) + ")");
      }
    }
    dlt_file.setBroadcast(true, true);
  }
  // await $c.win.alert("파일 처리가 완료되었습니다.");

  $p.emit("onFileUploadDone", true);

  // scwin.saveFileInfo();
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
    const fileName = info.removedDataObj[idx][6];
    mpd_multiFileUpload.removeFile(fileName);
  }
  scwin.setFileStatus();
};

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
scwin.setUploadParam = function () {
  mpd_multiFileUpload.setParam(0, "subDir", scwin.option.subDir);
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
    if ($c.util.isEmpty($p, option.filter) == false) {
      scwin.option.filter = option.filter;
    }
    mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount);
    mpd_multiFileUpload.setMaxFileSize(scwin.option.maxFileSize);
    if (typeof option.subDir !== "undefined") {
      scwin.option.subDir = option.subDir;
    }
    scwin.setFileSelectingButtonDisabled(false);
    scwin.callbackFileUploadSetting();
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
  scwin.setFileStatus();
  if (dlt_file.getRowCount() < 1) {
    img_preview.setSrc("");
    return;
  }
  grd_file.setFocusedCell(0, 1);
  scwin.refreshPreviewImage(0);
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

// 파일 저장
scwin.btn_trigger4_onclick = function (e) {
  //debugger;
  if (scwin.blockOpenPendingAction(e)) {
    return;
  }
  if (scwin.saveFn) {
    var fnNm = scwin.saveFn.split(".")[1];
    if (!fnNm) return;
    $p.parent().scwin[fnNm]();
  } else {
    scwin.startFileUpload();
  }
};
scwin.btn_fileSelecting_onclick = function (e) {
  if (scwin.blockOpenPendingAction(e)) {
    return;
  }
  mpd_multiFileUpload.open();
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
scwin.buildDownloadUrl = function (paramJson, flag) {
  const storedFileName = paramJson.STORED_FILE_NAME || paramJson.FILE_NAME;
  return scwin.FILE_DOWNLOAD_URL + "?" + new URLSearchParams({
    path: scwin.buildStoredFileKey(paramJson.FILE_PATH, storedFileName),
    fileName: paramJson.FILE_NAME || "",
    fileType: flag == "Link" ? "LINK" : "DOWN",
    direct: "true",
    fallback: "true",
    PGM_ID: paramJson.PGM_ID || "",
    CALLER_URL: paramJson.CALLER_URL || ""
  }).toString();
};
scwin.buildDownloadRequestUrl = function (paramJson, flag) {
  const storedFileName = paramJson.STORED_FILE_NAME || paramJson.FILE_NAME;
  return scwin.FILE_DOWNLOAD_URL + "?" + new URLSearchParams({
    path: scwin.buildStoredFileKey(paramJson.FILE_PATH, storedFileName),
    fileName: paramJson.FILE_NAME || "",
    fileType: flag == "Link" ? "LINK" : "DOWN",
    fallback: "true",
    PGM_ID: paramJson.PGM_ID || "",
    CALLER_URL: paramJson.CALLER_URL || ""
  }).toString();
};
scwin.downloadFile = async function (paramJson, flag) {
  if (!paramJson || !paramJson.FILE_PATH) {
    $c.win.alert($p, "대상 파일이 NULL입니다. 설정값을 확인하세요.");
    return;
  }
  try {
    const response = await fetch(scwin.buildDownloadRequestUrl(paramJson, flag));
    if (response.status === 404) {
      $c.win.alert($p, "해당 파일[" + paramJson.FILE_PATH + "]이 존재하지 않습니다.");
      return;
    }
    if (response.status === 500) {
      $c.win.alert($p, "서버 오류입니다.");
      return;
    }
    if (!response.ok) {
      $c.win.alert($p, "파일 다운로드 중 오류가 발생했습니다.");
      return;
    }
    const result = await response.json();
    if (!result.downloadUrl) {
      $c.win.alert($p, "다운로드 URL 생성에 실패했습니다.");
      return;
    }
    if (flag == "Link") {
      window.open(result.downloadUrl, "popupLink", "width=800px,height=500px");
      return;
    }
    window.location.href = result.downloadUrl;
  } catch (error) {
    console.error(error);
    $c.win.alert($p, "다운로드 처리 중 예외가 발생했습니다.");
  }
};
scwin.isPreviewableImage = function (fileName) {
  if (!fileName) {
    return false;
  }
  return /\.(jpg|jpeg|png|gif|bmp|webp|svg|tif|tiff)$/i.test(fileName);
};
scwin.buildPreviewParam = function (rowIndex) {
  return {
    "FILE_NAME": dlt_file.getCellData(rowIndex, "ORIGIN_FILE_NM"),
    "STORED_FILE_NAME": dlt_file.getCellData(rowIndex, "STORED_FILE_NM"),
    "FILE_PATH": dlt_file.getCellData(rowIndex, "FILE_STORED_PATH"),
    "PGM_ID": scwin.pgmId,
    "CALLER_URL": scwin.src,
    "FILE_TYPE": "LINK"
  };
};
scwin.openPreviewZoom = async function (rowIndex) {
  const previewParam = scwin.buildPreviewParam(rowIndex);
  const previewUrl = scwin.buildDownloadUrl(previewParam, "Link");
  const popupOptions = {
    id: "filePreviewZoom",
    popupName: "filePreviewZoom",
    width: 1280,
    height: 900,
    modal: true
  };
  await $c.win.openPopup($p, "/cm/xml/zoom.xml", popupOptions, {
    fileName: previewParam.FILE_NAME,
    filePath: previewParam.FILE_PATH,
    previewUrl: previewUrl
  });
};
scwin.refreshPreviewImage = function (rowIndex) {
  const originFileNm = dlt_file.getCellData(rowIndex, "ORIGIN_FILE_NM");
  if (!scwin.isPreviewableImage(originFileNm)) {
    img_preview.setSrc("");
    return;
  }
  img_preview.setSrc(scwin.buildDownloadUrl(scwin.buildPreviewParam(rowIndex), "Link"));
};
scwin.grd_file_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "ORIGIN_FILE_NM" && dlt_file.getRowStatus(rowIndex) !== "C") {
    scwin.refreshPreviewImage(rowIndex);
  }
};
scwin.img_preview_onclick = function (e) {
  const rowIdx = grd_file.getFocusedRowIndex();
  if (rowIdx < 0) {
    return;
  }
  const originFileNm = dlt_file.getCellData(rowIdx, "ORIGIN_FILE_NM");
  if (!scwin.isPreviewableImage(originFileNm)) {
    return;
  }
  scwin.openPreviewZoom(rowIdx);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',useExternalClass:'true'},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 35%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8 file-upload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'grpTypeArea',class:'form-group file-type',style:'display:none'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'증빙파일종류',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_type',class:'',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이거래명세서(청구)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'품의서/보고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공문'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산내역(Excel)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'INVOICE(청구서)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물증빙보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타증빙'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이계약서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'종이세금계산서(RPA)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]}]}]}]},{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.btn_fileSelecting_onclick',style:'line-height: 21px;cursor: pointer;',id:'btn_fileSelecting',label:'추가',class:'btn add'}},{T:1,N:'w2:multiupload',A:{'ev:onComplete':'',maxcount:'','ev:onprogress':'scwin.mpd_multiFileUpload_onprogress',fireEventOnError:'',filter:'',mode:'html5_transparent','ev:ondone':'scwin.mpd_multiFileUpload_ondone','ev:onerror':'scwin.mpd_multiFileUpload_onerror',displaySizeUnit:'MB',action:'',style:'',wmode:'false',id:'mpd_multiFileUpload',maxsize:'1000000000',uploadButton:'',selectCallback:'scwin.selectCallback',subSize:'AC'}},{T:1,N:'xf:trigger',A:{class:'btn pt-blue','ev:onclick':'scwin.btn_trigger4_onclick',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{summary:'',readOnlyTabIgnore:'',scrollByColumnAdaptive:'false',readOnlyBackgroundImgCSS:'',wheelRows:'0',rowNumVisible:'',rowStatusWidth:'30',disabledScrollHidden:'',scrollByColumn:'false','ev:onheaderclick':'',rowStatusHeaderValue:'상태',focusMode:'row',rowStatusVisible:'true',rowNumWidth:'',dataList:'data:dlt_file',style:'height: 70px;',autoFit:'allColumn',id:'grd_file',visibleRowNum:'5',visibleRowNumFix:'true',class:'wq_gvw multi_file',autoFitMinWidth:'800',useFilterList:'false','ev:oncellclick':'scwin.grd_file_oncellclick',dataDragDrop:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'40',inputType:'text',style:'',id:'chkAll',value:'삭제',blockSelect:'false',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'증빌파일종류',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'210',inputType:'text',style:'',id:'column11',value:'파일명',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column17',value:'파일설명',displayMode:'label',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column7',value:'파일크기',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'column14',value:'전송결과',blockSelect:'false',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'checkbox',id:'chk',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'evidClsNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'210',inputType:'link',readOnly:'true',id:'ORIGIN_FILE_NM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'FILE_EXPLAIN',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.displayFileSize',expression:'',dataType:'',removeBorderStyle:'false',width:'70',inputType:'text',readOnly:'true',style:'',id:'FILE_SIZE',class:'progress',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'',textAlign:'right',removeBorderStyle:'false',width:'50',inputType:'text',readOnly:'true',id:'status',blockSelect:'false',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group flex-end'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'파일 수 :',class:'ett'}},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_fileCount',label:'0개/ 10개',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'총 용량 :',class:'ett'}},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_fileSize',label:'0MB / 200MB',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'col mt32',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미리보기',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'height: 186px;',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'full',id:'',style:'overflow:auto;'},E:[{T:1,N:'xf:image',A:{src:'',style:'width:200px;height:183px;',id:'img_preview','ev:onclick':'scwin.img_preview_onclick'}}]}]}]}]}]}]}]}]}]}]})