/*amd /ui/ac/fi/stdinfomgnt/fi_100_02_01p_new.xml 22098 2c0bc3c86291f93e7cf630f1d31efeb8818ce5813a54d17176492c49e5d4a623 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repstNm',name:'대표자성명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_img',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'이미지순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSavePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자성명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileId',name:'파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filename',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDocumentImageList',action:'/ac.fi.stdinfomgnt.RetrieveDocumentImageListCrnCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_img","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_img","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveDocumentImageList_submitdone','ev:submiterror':'scwin.sbm_retrieveDocumentImageList_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_insertImg',action:'/ac.fi.stdinfomgnt.RegistDocumentImageListCrnCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_img","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_insertImg_submitdone','ev:submiterror':'scwin.sbm_insertImg_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteImg',action:'/ac.fi.stdinfomgnt.DeleteDocumentImageListCrnCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_img","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deleteImg_submitdone','ev:submiterror':'scwin.sbm_deleteImg_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.selectedBeforeSize = 1;
scwin.FILE_DOWNLOAD_URL = "/s3upload.do";
scwin.pgmId = "fi_100_02_01p_new.jsp";
scwin.src = "fi_100_02_01p_new.xml";
scwin.f_EventSearch = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_save, btn_cancel]);
  udc_fileUpload.setData([]);
};
scwin.f_EventNew = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_new, btn_del]);
  ds_img.insertRow(ds_img.getRowCount());
  let newRowIdx = ds_img.getRowCount() - 1;
  ds_img.setCellData(newRowIdx, "crn", txt_crn.getValue());
  ds_img.setCellData(newRowIdx, "busiNm", txt_busiNm.getValue());
  ds_img.setCellData(newRowIdx, "repstNm", txt_repstNm.getValue());

  //첨부파일 업로드 버튼 Disabled
  $c.gus.cfEnableObjects($p, [btn_addRow]);
  udc_fileUpload.setData([]);
  udc_fileUpload.undoFileUpload();
  gr_img.setFocusedCell(newRowIdx, 0, true);
};
scwin.f_EventSave = function () {
  scwin.f_EventSearch();
};
scwin.f_EventDel = function () {
  scwin.f_EventSearch();
};
scwin.onpageload = function () {
  try {
    let menuInfo = $p.parent().$p.getParameter("paramData").menuInfo;
    if (typeof menuInfo !== "undefined") {
      scwin.pgmId = menuInfo.pgmId;
      scwin.src = menuInfo.src;
    }
  } catch (e) {
    console.log("#### parameter ###");
  }
  chb_printCheck.checkAll(true);
  $c.gus.cfDisableKeyData($p);
  scwin.f_defaultValue();
  $c.gus.cfDisableObjects($p, [txt_crn, txt_busiNm, txt_repstNm]);
  scwin.f_Retrieve();
};
scwin.f_defaultValue = function () {
  let oCtrtObject = $c.data.getParameter($p);
  txt_crn.setValue(oCtrtObject.crnNo || "");
  txt_busiNm.setValue(oCtrtObject.busiNm || "");
  txt_repstNm.setValue(oCtrtObject.repstNm || "");
};
scwin.f_Retrieve = async function () {
  dma_queryCondition.set("crn", txt_crn.getValue());
  dma_queryCondition.set("busiNm", txt_busiNm.getValue());
  dma_queryCondition.set("repstNm", txt_repstNm.getValue());
  await $c.sbm.execute($p, sbm_retrieveDocumentImageList);
};
scwin.f_Save = async function () {
  let chk = await $c.gus.cfValidate($p, [gr_img]);
  if (!chk) {
    return;
  }
  let rowPos = ds_img.getRowCount() - 1;
  var fileSavePath = ds_img.getCellData(rowPos, "fileSavePath");

  // if($c.gus.cfIsNull(fileSavePath)){
  //     await $c.gus.cfAlertMsg(MSG_CM_ERR_002, ["[첨부파일 업로드]"]);
  //     return;
  // }

  //파일명에 확장자 추가
  if (!$c.gus.cfIsNull($p, fileSavePath)) {
    var strFileExeName = ds_img.getCellData(rowPos, "fileSavePath").substr(ds_img.getCellData(rowPos, "fileSavePath").length - 4, ds_img.getCellData(rowPos, "fileSavePath").length);
    var fileNm = ds_img.getCellData(rowPos, "fileNm");
    if (fileNm.lastIndexOf(strFileExeName) == -1) {
      ds_img.setCellData(rowPos, "fileNm", fileNm + strFileExeName);
    }
  }
  if (ds_img.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["[이미지 저장작업]"]);
  } else {
    await $c.sbm.execute($p, sbm_insertImg);
  }
};
scwin.f_Delete = async function () {
  let chk = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (chk == true) {
    let rowPos = ds_img.getRowPosition();
    if (rowPos >= 0) {
      //ds_img.removeRow(rowPos);
      ds_img.deleteRow(rowPos);
    }
    await $c.sbm.execute($p, sbm_deleteImg);
  }
};
scwin.f_Cancel = async function () {
  let chk = await $c.win.confirm($p, MSG_CM_CRM_011);
  if (chk == true) {
    scwin.f_EventSearch();

    //이미지파일 목록 삭제
    $c.data.undoAll($p, ds_img);
    //첨부파일 목록 삭제
    udc_fileUpload.setData([]);
    //첨부파일 업로드 버튼 Disabled
    $c.gus.cfDisableObjects($p, [btn_addRow]);
    ds_img.setRowPosition(0);
  }
};
scwin.f_winClose = function () {
  if (ds_img.getRowCount() > 0) {
    $c.win.closePopup($p, "Y");
  } else {
    $c.win.closePopup($p, "N");
  }
};
scwin.fileSubmit = async function () {
  // TODO: 파일 업로드는 udc_fileMultiUpload UDC를 통해 처리됩니다. 기존 cfUploadFile 로직을 UDC 콜백으로 대체 필요.
  let chk = await $c.gus.cfValidate($p, [gr_img]);
  if (!chk) {
    return;
  }
  if (udc_fileUpload.isModified()) {
    udc_fileUpload.startFileUpload();
  } else {
    scwin.f_saveFile();
  }
};
scwin.uploadComplete = async function (isSuccess) {
  console.log("uploadComplete 파일업로드 완료시 isSuccess : " + isSuccess);
  if (isSuccess) {
    scwin.f_saveFile();
  }
};
scwin.f_saveFile = async function () {
  let fileList = udc_fileUpload.getData();
  let previewRow = -1;
  console.log(fileList);
  for (let idx in fileList) {
    let row = ds_img.getRowCount() - 1;
    previewRow = row;
    if (ds_img.getRowCount() != 1) {
      let fltNxtSeq = parseFloat(ds_img.getCellData(row - 1, "fileSeq")) + 1;
      ds_img.setCellData(row, "fileSeq", fltNxtSeq);
    } else {
      ds_img.setCellData(row, "fileSeq", 1);
    }
    let status = fileList[idx].status;
    if (status == "Completed") {
      let fileName = fileList[idx].ORIGIN_FILE_NM;
      let fileStoredPath = fileList[idx].FILE_STORED_PATH;
      let storedFileNm = fileList[idx].STORED_FILE_NM;
      if (!$c.gus.cfIsNull($p, fileName)) {
        ds_img.setCellData(row, "fileNm", fileName);
      }
      if (!$c.gus.cfIsNull($p, fileStoredPath)) {
        ds_img.setCellData(row, "fileSavePath", fileStoredPath + storedFileNm);
      }
    }
  }
  if (previewRow >= 0) {
    gr_img.setFocusedCell(previewRow, 0, true);
    scwin.f_previewImg(previewRow);
  }
  await scwin.f_Save();
};
scwin.f_previewImg = function (rowIndex) {
  if (rowIndex < 0) {
    preView.setSrc("");
    return;
  }
  let fileSavePath = ds_img.getCellData(rowIndex, "fileSavePath") || "";
  if ($c.gus.cfIsNull($p, fileSavePath)) {
    preView.setSrc("");
    return;
  }
  let fileNm = fileSavePath;
  let lastIndex = fileSavePath.lastIndexOf("/");
  if (lastIndex >= 0) {
    fileNm = fileSavePath.substring(lastIndex + 1);
  }
  if (!scwin.isPreviewableImage(fileNm)) {
    preView.setSrc("");
    return;
  }
  preView.setSrc(scwin.buildDownloadUrl(scwin.buildPreviewParam(rowIndex), "Link"));
};
scwin.buildPreviewParam = function (rowIndex) {
  let originFileNm = ds_img.getCellData(rowIndex, "fileNm") || "";
  let fileSavePath = ds_img.getCellData(rowIndex, "fileSavePath") || "";
  let fileNm = originFileNm;
  let filePath = "";
  let lastIndex = fileSavePath.lastIndexOf("/");
  if (lastIndex >= 0) {
    fileNm = fileSavePath.substring(lastIndex + 1);
    filePath = fileSavePath.substring(0, lastIndex);
  }
  if (filePath && !filePath.endsWith("/")) filePath = filePath + "/";
  return {
    "FILE_NAME": originFileNm,
    "STORED_FILE_NAME": fileNm,
    "FILE_PATH": filePath,
    "PGM_ID": scwin.pgmId,
    "CALLER_URL": scwin.src,
    "FILE_TYPE": "LINK"
  };
};
scwin.isPreviewableImage = function (fileName) {
  if (!fileName) {
    return false;
  }
  return /\.(jpg|jpeg|png|gif|bmp|webp|svg|tif|tiff)$/i.test(fileName);
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
scwin.buildStoredFileKey = function (filePath, fileName) {
  if (!filePath) {
    return fileName;
  }
  if (!filePath.endsWith("/")) {
    filePath = filePath + "/";
  }
  return filePath + fileName;
};
scwin.f_ZoomIn = async function () {
  const rowIdx = gr_img.getFocusedRowIndex();
  if (rowIdx < 0) {
    return;
  }
  const originFileNm = ds_img.getCellData(rowIdx, "fileSavePath");
  if (!scwin.isPreviewableImage(originFileNm)) {
    return;
  }
  scwin.openPreviewZoom(rowIdx);
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
scwin.f_Download = async function () {
  let row = ds_img.getRowPosition();
  if (row < 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  } else {
    let fileName = ds_img.getCellData(row, "fileNm");
    let fileSavePath = ds_img.getCellData(row, "fileSavePath");
    if (fileSavePath.trim().length == 0) {
      await $c.win.alert($p, "선택하신 " + (row + 1) + "행에 파일이 등록되어 있지 않습니다.");
    } else {
      if (fileSavePath.indexOf(".") > 0) {
        fileName += fileSavePath.substring(fileSavePath.indexOf("."), fileSavePath.indexOf(".") + 4);
        $c.gus.cfDownloadFile($p, fileName, fileSavePath);
      }
    }
  }
};
scwin.sbm_retrieveDocumentImageList_submitdone = async function (e) {
  let rowCnt = ds_img.getRowCount();
  totalRows.setValue(rowCnt);
  scwin.f_EventSearch();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    scwin.f_previewImg(0);
    gr_img.setFocusedCell(0, 0);
  }

  //첨부파일 업로드 버튼 Disabled
  $c.gus.cfDisableObjects($p, [btn_addRow]);
};
scwin.sbm_retrieveDocumentImageList_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_insertImg_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002);
  scwin.f_EventSave();
  await scwin.f_Retrieve();
};
scwin.sbm_deleteImg_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
  scwin.f_EventDel();
  await scwin.f_Retrieve();
};
scwin._legacy_gr_img_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_img.getRowStatus(rowIndex) != "C") {
    let rowIdx = gr_img.getFocusedRowIndex();
    scwin.f_previewImg(rowIndex);
  }
  if (ds_img.getRowStatus(rowIndex) != "C" && columnId == "fileNm") {
    //신규 입력시에만 파일명 등록가능, 이후는 조회만 가능
    if (gr_img.getRowStatus(rowIndex) == "C") {
      gr_img.setCellReadOnly(rowIndex, "fileNm", false);
    } else {
      gr_img.setCellReadOnly(rowIndex, "fileNm", true);
    }
  }
};
scwin.gr_img_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_previewImg(rowIndex);
  if (columnId == "fileNm") {
    gr_img.setCellReadOnly(rowIndex, "fileNm", ds_img.getRowStatus(rowIndex) != "C");
  }
};
scwin.btn_download_onclick = function (e) {
  scwin.f_Download();
};
scwin.btn_new_onclick = function (e) {
  scwin.f_EventNew();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_save_onclick = function (e) {
  scwin.fileSubmit();
};
scwin.btn_del_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_winClose();
};
scwin.preView_onclick = function (e) {
  scwin.f_ZoomIn();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자등록번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_crn',class:'',disabled:'true',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_busiNm',class:'',disabled:'true',ref:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'대표자성명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'txt_repstNm',class:'',disabled:'true',ref:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'lybox wfix '},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 400px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'이미지파일 목록',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_img',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_img',visibleRowNum:'11',class:'wq_gvw ',checkReadOnlyOnPasteEnable:'','ev:oncellclick':'scwin.gr_img_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'fileNm',value:'파일명',blockSelect:'false',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'regDtm',value:'등록일자',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'fileNm',blockSelect:'false',displayMode:'label',maxLength:'50',readOnly:'false',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'calendar',id:'regDtm',blockSelect:'false',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'이미지 내용',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox flex-full'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'height: 100%',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'이미지 미리보기',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',style:'width: 100%;height:100%;overflow: auto;',class:'tac vam'},E:[{T:1,N:'xf:image',A:{src:'',style:'width: 100%;overflow: auto;',id:'preView','ev:onclick':'scwin.preView_onclick',ref:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'file-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'첨부파일 업로드',class:'tit'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp',maxFileCount:'1',style:'',totalFileSize:'104857600',maxFileSize:'104857600',fileGrpSeq:'','ev:onFileUploadDone':'scwin.uploadComplete',id:'udc_fileUpload',subDir:'/ac/fi/stdinfomgnt',addButtonName:'첨부파일추가',saveButtonId:'btn_addRow',saveButtonName:'업로드',saveFn:'scwin.fileSubmit',fileTypeYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_download',type:'button',class:'btn sm',userAuth:'D','ev:onclick':'scwin.btn_download_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다운로드'}]}]}]},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'첨부파일 미리보기 기능은 jpg, gif, bmp 파일만 지원됩니다',class:' txt-dot  txt-red mt0'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'pop-btnbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_close',type:'button',class:'btn','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_new',type:'button',class:'btn',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.btn_new_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_cancel',type:'button',class:'btn',objType:'bUpdate2','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_del',type:'button',class:'btn',objType:'bDelete',userAuth:'D','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]}]}]}]}]})