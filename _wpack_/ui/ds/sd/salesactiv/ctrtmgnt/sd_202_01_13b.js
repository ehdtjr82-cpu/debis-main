/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_13b.xml 29193 16c424bca4301d0362a04c4d4a1ca71c75ac351d4f67e95189c8b958ed7491c9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_img',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약서번호',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'ctrtDocImgFileSeq',name:'계약서이미지파일Seq',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'ctrtDocImgFileNm',name:'계약서이미지파일명',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'ctrtDocImgSaveFilePath',name:'계약서이미지저장파일경로',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'ctrtDocImgDeleteChk',name:'계약서이미지삭제확인',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'fileUploadGDS',repeatNode:'map',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'fileId',name:'파일ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'filename',name:'파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'filepath',name:'파일경로'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveImg',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractDocumentImageListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_search",{"id":"ds_img","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_img","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveImg_submitdone','ev:submiterror':'scwin.sbm_retrieveImg_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveImg',action:'/ds.sd.salesactiv.ctrtmgnt.SaveContractDocumentImageListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_img","key":"IN_DS1"}',target:'data:json,[]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.FILE_DOWNLOAD_URL = "/s3upload.do";
scwin.pgmId = "sd_202_01_13b.jsp";
scwin.src = "sd_202_01_13b.xml";
scwin.retrieveGb = "";

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
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
  scwin.params = $c.data.getParameter($p);
  scwin.selectedBeforeSize = 1;
  scwin.pos_rowSts = 0;
  scwin.MSG_SD_CRM_002 = "변경된 사항이 있습니다. 저장하시겠습니까? \n확인을 누르시면 변경된 사항이 저장이되고, \n취소를 누르실 경우 모든 변경된 사항이 처음 조회된 상태가 됩니다.";
  scwin.page_move_confirm = true;
  scwin.f_defaultValue();
  scwin.f_retrieve("R");
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  var ctrtNo = scwin.params.ctrtNo;
  var clntNo = scwin.params.clntNo;
  ed_ctrtNo.setValue(ctrtNo.substring(0, 9) + "-" + ctrtNo.substring(9, 11));
  ed_clntNo.setValue(clntNo);
  ed_clntNm.setValue(scwin.params.clntNm);
  chb_bizDivCntrYn.setValue(scwin.params.bizDivCntrYn);
  chb_bizDivBulkYn.setValue(scwin.params.bizDivBulkYn);
  chb_bizDomStvYn.setValue(scwin.params.bizDomStvYn);
  chb_bizDomTransYn.setValue(scwin.params.bizDomTransYn);
  chb_bizDomStrYn.setValue(scwin.params.bizDomStrYn);
  chb_bizDomInatYn.setValue(scwin.params.bizDomInatYn);
  chb_bizDomTplYn.setValue(scwin.params.bizDomTplYn);
  chb_impYn.setValue(scwin.params.impYn);
  chb_expYn.setValue(scwin.params.expYn);
  chb_domesticYn.setValue(scwin.params.domesticYn);
  ed_sellClntClsNm.setValue(scwin.params.sellClntClsNm);
  $c.gus.cfDisableObjects($p, [btn_img]);
};
scwin.f_EventSearch = function () {
  $c.gus.cfDisableKeyData($p);
  udc_fileMultiUpload.setData([]);
  udc_fileMultiUpload.undoFileUpload();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function (pGb) {
  dma_search.set("ctrtNo", ed_ctrtNo.getValue().replace("-", ""));
  scwin.retrieveGb = pGb;
  $c.sbm.execute($p, sbm_retrieveImg);
};

// 조회 완료
scwin.sbm_retrieveImg_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_img.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  let rowPos = 0;
  if (scwin.retrieveGb == "S") rowPos = rowCnt - 1;
  scwin.f_EventSearch();
  scwin.f_previewImg(0);
  gr_img.setFocusedCell(rowPos, 0);
};
scwin.sbm_retrieveImg_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};

//-------------------------------------------------------------------------
// 화면 이동
//-------------------------------------------------------------------------
scwin.f_winOpen = async function (strIndex) {
  var strPath = "";
  var programNm = "";
  let programId = $c.data.getParameter($p, "menuInfo").pgmId;
  let paramObj = {
    ctrtNo: ed_ctrtNo.getValue().replace("-", ""),
    bizDivCntrYn: chb_bizDivCntrYn.getValue(),
    bizDivBulkYn: chb_bizDivBulkYn.getValue(),
    bizDomTransYn: chb_bizDomTransYn.getValue(),
    bizDomStvYn: chb_bizDomStvYn.getValue(),
    bizDomStrYn: chb_bizDomStrYn.getValue(),
    bizDomInatYn: chb_bizDomInatYn.getValue(),
    bizDomTplYn: chb_bizDomTplYn.getValue(),
    impYn: chb_impYn.getValue(),
    expYn: chb_expYn.getValue(),
    domesticYn: chb_domesticYn.getValue(),
    sellClntClsNm: ed_sellClntClsNm.getValue(),
    clntNo: ed_clntNo.getValue(),
    clntNm: ed_clntNm.getValue(),
    ctrtDistrictCd: scwin.params.ctrtDistrictCd
  };
  if ($c.data.isModified($p, ds_img)) {
    let conf = await $c.win.confirm($p, scwin.MSG_SD_CRM_002);
    if (conf) {
      scwin.f_save('cfm');
      if (scwin.page_move_confirm) return;
    } else {
      let rowCnt = ds_img.getTotalRow();
      for (let i = rowCnt; i > 0; i--) {
        ds_img.undoRow(i);
      }
    }
  }
  let option = {
    openAction: "exist",
    menuCode: $c.data.getParameter($p, "menuInfo").refreshPid || ""
  };
  switch (strIndex) {
    case 1:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02b.xml";
      programNm = "신규 계약등록";
      option.mdiTitle = "계약기본정보";
      // paramObj = {
      //     ctrtNo : ed_clntNo.getValue().replace("-","")
      // };
      break;
    case 2:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_03b.xml";
      programNm = "계약작업경로관리";
      option.mdiTitle = "계약작업경로";
      break;
    case 3:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_04b.xml";
      programNm = "기본계약요율";
      option.mdiTitle = "기본 계약요율관리";
      break;
    case 4:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_11b.xml";
      programNm = "할인/할증 요율관리";
      option.mdiTitle = "할인/할증요율";
      break;
    case 5:
      $c.win.alert($p, "준비중입니다.");
      break;
    case 6:
      $c.win.alert($p, "준비중입니다.");
      break;
    default:
      break;
  }
  $c.win.openMenu($p, programNm, strPath, programId, paramObj, option);
};

//-------------------------------------------------------------------------
// 이미지 저장 
//-------------------------------------------------------------------------
scwin.fileSubmit = async function () {
  // TODO: 파일 업로드는 udc_fileMultiUpload UDC를 통해 처리됩니다. 기존 cfUploadFile 로직을 UDC 콜백으로 대체 필요.
  let chk = await $c.gus.cfValidate($p, [gr_img]);
  if (!chk) {
    return;
  }
  if (udc_fileMultiUpload.isModified()) {
    udc_fileMultiUpload.startFileUpload();
  } else {
    scwin.f_saveFile();
  }
};

// 파일 업로드 완료
scwin.uploadComplete = async function (isSuccess) {
  if (isSuccess) {
    scwin.f_saveFile();
  }
};
scwin.f_saveFile = async function () {
  let data = udc_fileMultiUpload.getData();
  let previewRow = -1;
  for (let i in data) {
    ds_img.insertRow(ds_img.getRowCount());
    let insRow = ds_img.getRowCount() - 1;
    previewRow = insRow;
    ds_img.setCellData(insRow, "ctrtNo", ed_ctrtNo.getValue().replace("-", ""));
    if (ds_img.getRowCount() != 1) {
      var fltNxtSeq = parseFloat(ds_img.getCellData(insRow - 1, "ctrtDocImgFileSeq")) + 1;
      var strNxtSeq = "000" + fltNxtSeq;
      strNxtSeq = strNxtSeq.substring(strNxtSeq.length - 4, strNxtSeq.length);
      ds_img.setCellData(insRow, "ctrtDocImgFileSeq", strNxtSeq);
    } else {
      ds_img.setCellData(insRow, "ctrtDocImgFileSeq", "0001");
    }
    let status = data[i].status;
    if (status == "Completed") {
      let fileName = data[i].ORIGIN_FILE_NM;
      let fileStoredPath = data[i].FILE_STORED_PATH;
      let storedFileNm = data[i].STORED_FILE_NM;
      let strFileExeName = data[i].STORED_FILE_NM.substr(data[i].STORED_FILE_NM.length - 4, data[i].STORED_FILE_NM.length);
      if (!$c.gus.cfIsNull($p, fileName)) {
        let sFileNm = ds_img.getCellData(insRow, "ctrtNo") + "_" + ds_img.getCellData(insRow, "ctrtDocImgFileSeq") + strFileExeName;
        ds_img.setCellData(insRow, "ctrtDocImgFileNm", sFileNm);
      }
      if (!$c.gus.cfIsNull($p, fileStoredPath)) {
        ds_img.setCellData(insRow, "ctrtDocImgSaveFilePath", fileStoredPath + storedFileNm);
      }
    }
  }
  if (previewRow >= 0) {
    gr_img.setFocusedCell(previewRow, 0, true);
    scwin.f_previewImg(previewRow);
  }
  await scwin.f_save();
};

//-------------------------------------------------------------------------
// 이미지 미리보기
//-------------------------------------------------------------------------
scwin.f_previewImg = function (rowIndex) {
  if (rowIndex < 0) {
    img_preview.setSrc("");
    return;
  }
  let fileSavePath = ds_img.getCellData(rowIndex, "ctrtDocImgSaveFilePath") || "";
  if ($c.gus.cfIsNull($p, fileSavePath)) {
    img_preview.setSrc("");
    return;
  }
  let fileNm = fileSavePath;
  let lastIndex = fileSavePath.lastIndexOf("/");
  if (lastIndex >= 0) {
    fileNm = fileSavePath.substring(lastIndex + 1);
  }
  if (!scwin.isPreviewableImage(fileNm)) {
    img_preview.setSrc("");
    return;
  }
  img_preview.setSrc(scwin.buildDownloadUrl(scwin.buildPreviewParam(rowIndex), "Link"));
};
scwin.f_save = async function (moveGb) {
  let chk = await $c.gus.cfValidate($p, [gr_img]);
  if (!chk) {
    return;
  }
  let rowPos = ds_img.getRowCount() - 1;
  var fileSavePath = ds_img.getCellData(rowPos, "fileSactrtDocImgSaveFilePathvePath");

  // 파일명에 확장자 추가
  if (!$c.gus.cfIsNull($p, fileSavePath)) {
    var strFileExeName = ds_img.getCellData(rowPos, "ctrtDocImgSaveFilePath").substr(ds_img.getCellData(rowPos, "ctrtDocImgSaveFilePath").length - 4, ds_img.getCellData(rowPos, "ctrtDocImgSaveFilePath").length);
    var fileNm = ds_img.getCellData(rowPos, "ctrtDocImgFileNm");
    if (fileNm.lastIndexOf(strFileExeName) == -1) {
      ds_img.setCellData(rowPos, "ctrtDocImgFileNm", fileNm + strFileExeName);
    }
  }
  if (ds_img.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["[계약서이미지]"]);
    scwin.page_move_confirm = false;
    return;
  } else {
    await $c.sbm.execute($p, sbm_saveImg);
  }
};

// 저장 완료
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.page_move_confirm = false;
  scwin.f_EventSearch();
  await scwin.f_retrieve("S");
};
scwin.buildPreviewParam = function (rowIndex) {
  let originFileNm = ds_img.getCellData(rowIndex, "ctrtDocImgFileNm") || "";
  let fileSavePath = ds_img.getCellData(rowIndex, "ctrtDocImgSaveFilePath") || "";
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
  //gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf
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

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
scwin.gr_img_onrowindexchange = function (rowIndex, oldRow) {
  scwin.f_previewImg(rowIndex);
};

//그리드 더블 클릭 > 해당 파일 다운로드
scwin.gr_img_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  $c.gus.cfDownloadFile($p, ds_img.getCellData(rowIndex, "ctrtDocImgFileNm"), ds_img.getCellData(rowIndex, "ctrtDocImgSaveFilePath"));
};

//계약기본정보 버튼
scwin.btn_base_onclick = function (e) {
  scwin.f_winOpen(1);
};

//작업경로 버튼
scwin.btn_path_onclick = function (e) {
  scwin.f_winOpen(2);
};

//계약요율 버튼
scwin.btn_rate_onclick = function (e) {
  scwin.f_winOpen(3);
};

//할인/할증 버튼
scwin.btn_disc_onclick = function (e) {
  scwin.f_winOpen(4);
};

//계약서이미지 버튼
scwin.btn_img_onclick = function (e) {
  scwin.f_winOpen(6);
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.fileSubmit();
};

//목록 버튼
scwin.btn_list_onclick = function (e) {
  let programId = "sd_202_01_01b.jsp";
  let option = {
    openAction: "select",
    closable: true
  };
  let paramObj = {};
  $c.win.openMenu($p, "계약관리 현황", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_01b.xml", programId, paramObj, option);
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  //{"fileName" : "계약서이미지목록.xlsx", "sheetName" : "계약서이미지목록", "type":"2+4+8+16"}
  const options = {
    fileName: "계약서이미지목록.xlsx",
    sheetName: "계약서이미지목록",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: "1",
    useDataFormat: true,
    hiddenVisible: "true" //히든값(true : 포함, false : 미포함)
  };
  await $c.data.downloadGridViewExcel($p, gr_img, options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box ',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_ctrtNo',placeholder:'',style:'',objType:'key',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'form-control w85',id:'ed_clntNo',placeholder:'',style:'',objType:'key',disabled:'true'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_clntNm',placeholder:'',style:'',objType:'key',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col6',id:'ed_sellClntClsNm',placeholder:'',style:'',objType:'key',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약영역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bizDomStvYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bizDomTransYn',objType:'key',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bizDomStrYn',objType:'key',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bizDomInatYn',objType:'key',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bizDomTplYn',objType:'key',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약부문',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_bizDivCntrYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_bizDivBulkYn',objType:'key',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_impYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_expYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_domesticYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox mt12',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약서 이미지 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_img',id:'udc_topGrdBtn',gridUpYn:'N',templateYn:'N',btnUser:'N',btnPlusYn:'Y',gridDownYn:'Y',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_img',id:'gr_img',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'','ev:onrowindexchange':'scwin.gr_img_onrowindexchange','ev:oncelldblclick':'scwin.gr_img_oncelldblclick',readOnly:'true',visibleRowNum:'17',initFixedHeightByRowNum:'15',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column12',value:'계약서번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'이미지번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'150',value:'File Name'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column14',value:'File Path',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'ctrtNo',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtDocImgFileSeq',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtDocImgFileNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'ctrtDocImgSaveFilePath',value:'',displayMode:'label',hidden:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_img',id:'udc_btGrdBtn',btnRowAddYn:'N',rowDelUserAuth:'D',btnDelYn:'N',btnCancelYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox mt32'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'height: 100%',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'미리보기 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'w-full',id:'',style:'height:300px;overflow-x: auto;'},E:[{T:1,N:'xf:image',A:{src:'',style:'height:300px;display: block;',id:'img_preview',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',id:'udc_fileMultiUpload','ev:onFileUploadDone':'scwin.uploadComplete',saveFn:'scwin.fileSubmit',subDir:'/ds/sd',addButtonName:'첨부파일추가',fileTypeYn:'N',saveButtonId:'btn_addRow',saveButtonName:'업로드'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_base',style:'',type:'button','ev:onclick':'scwin.btn_base_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_path',style:'',title:'',type:'button','ev:onclick':'scwin.btn_path_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_rate',style:'',title:'',type:'button','ev:onclick':'scwin.btn_rate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약요율'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_disc',style:'',title:'',type:'button','ev:onclick':'scwin.btn_disc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인/할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_img',style:'',title:'',type:'button','ev:onclick':'scwin.btn_img_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약서이미지'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_list',label:'목록',style:'',type:'button','ev:onclick':'scwin.btn_list_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'목록'}]}]}]}]}]}]}]}]}]})