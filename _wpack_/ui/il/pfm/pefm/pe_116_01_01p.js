/*amd /ui/il/pfm/pefm/pe_116_01_01p.xml 14047 150d786caf7a6fe31d97330cf14d0119affd153a4cd58ad0db820d545e2d6bb3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprReqNo',name:'apprReqNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'deptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'slipKndCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startDt',name:'startDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprReqNo',name:'apprReqNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'deptCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'slipKndCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startDt',name:'startDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_empNo_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_empNo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_attachedFile'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'blno',name:'blno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'houseNo',name:'houseNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_attachedFileList',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileClsCd',name:'fileClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileClsNm',name:'fileClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'fileName',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'filePath',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'fileSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'fileSize',dataType:'text'}},{T:1,N:'w2:column',A:{id:'houseNo',name:'houseNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fileUploadGDS',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileClsCd',name:'fileClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'fileName',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'filePath',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'fileSize',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fileDeleteGDS',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'houseNo',name:'houseNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'fileSeq',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchEmpNo',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_empNo_condition',target:'data:json,GAUCE',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_searchEmpNo_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAttachedFileList',action:'/il.comm.util.cmd.RetrieveAttachedFileCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',ref:'data:json,[{"id":"dma_attachedFile","key":"IN_DS1"},{"id":"ds_attachedFileList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_attachedFileList","key":"OUT_DS1"}','ev:submitdone':'scwin.sbm_retrieveAttachedFileList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveFile',action:'/il.comm.util.cmd.SaveFileMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fileUploadGDS","key":"IN_DS1"},dma_attachedFile]',target:'data:json,[]',encoding:'UTF-8',mode:'asynchronous',processMsg:'none','ev:submitdone':'scwin.sbm_saveFile_submitdone','ev:submiterror':'scwin.sbm_default_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteFile',action:'/il.comm.util.cmd.DeleteFileMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fileDeleteGDS","key":"IN_DS1"},dma_attachedFile]',target:'data:json,[]',encoding:'UTF-8',mode:'asynchronous',processMsg:'none','ev:submitdone':'scwin.sbm_deleteFile_submitdone','ev:submiterror':'scwin.sbm_default_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){let memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.empNo = $c.data.getMemInfo($p, "empNo");
scwin.userId = $c.data.getMemInfo($p, "userId") || "";
scwin.houseNo = $p.getPopupParam("houseNo") || "";
let empNo_Yn = "";
let vEmpNo = scwin.empNo;
let RETRIEVE_AUTH = "R";
scwin.systemPathKey = "FILE_UPLOAD_SYSTEM_PATH";
scwin.systemPathVal = "/fileUpload";
scwin.argObject = "";
scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_accdNo = "temp";
scwin.onpageload = function () {
  if (scwin.houseNo == "") {
    scwin.houseNo = $c.data.getParameter($p, "houseNo");
  }
  ed_hhblno.setValue(scwin.houseNo);
  scwin.f_empNo();
  if (!$c.util.isEmpty($p, scwin.houseNo)) {
    scwin.f_Retrieve();
  } else {
    scwin.f_clearFileList();
  }
};
scwin.fileSubmit = async function () {
  let houseNo = $c.str.trim($p, ed_hhblno.getValue());
  if ($c.util.isEmpty($p, houseNo)) {
    $c.win.alert($p, "House No is required.");
    ed_hhblno.focus();
    return;
  }
  scwin.houseNo = houseNo;
  dma_attachedFile.set("blno", houseNo);
  dma_attachedFile.set("houseNo", houseNo);
  ds_fileDeleteGDS.removeAll();
  let fileList = udc_fileUpload.getData() || [];
  let hasNewFile = false;
  let hasDeleteFile = false;
  for (let i = 0; i < fileList.length; i++) {
    if ($c.util.isEmpty($p, fileList[i].hiddenKey)) {
      hasNewFile = true;
    }
    if (fileList[i].chk == "1" && !$c.util.isEmpty($p, fileList[i].hiddenKey)) {
      let row = ds_fileDeleteGDS.insertRow();
      ds_fileDeleteGDS.setCellData(row, "houseNo", houseNo);
      ds_fileDeleteGDS.setCellData(row, "fileSeq", fileList[i].hiddenKey);
      hasDeleteFile = true;
    }
  }
  if (hasNewFile) {
    await udc_fileUpload.startFileUpload();
    return;
  }
  if (hasDeleteFile) {
    await $c.sbm.execute($p, sbm_deleteFile);
    return;
  }
  await $c.win.alert($p, "No file changes.");
};
scwin.f_Close = function () {
  //debugger;
  let rtnList = ds_attachedFileList.getRowJSON(ds_attachedFileList.getRowPosition());
  $c.win.closePopup($p, rtnList);
};
scwin.f_empNo = function () {
  let grp_cd = "FI111";
  let pCode = scwin.empNo;
  let param1 = "CD as COL1, CD_NM as COL2, '' as COL3, '' as COL4, '' as COL5, '' as COL6, '' as COL7, '' as COL8, '' as COL9, '' as COL10";
  let param2 = " TB_ZZ002 ";
  let param3 = " AND GRP_CD = '" + grp_cd + "' AND USE_YN = '1' AND CD_NM = '" + pCode + "' ";
  let param4 = "CD";
  ds_empNo_condition.setJSON({
    sysCd: "CommonEBC",
    queryId: "dinymicQueryTest",
    param1: param1,
    param2: param2,
    param3: param3,
    param4: param4
  });
  $c.sbm.execute($p, sbm_searchEmpNo);
};
scwin.sbm_searchEmpNo_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_empNo.setJSON(e.responseJSON.GAUCE);
  }
};
scwin.btn_search_onclick = function () {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = function () {
  let houseNo = $c.str.trim($p, ed_hhblno.getValue());
  if ($c.util.isEmpty($p, houseNo)) {
    $c.win.alert($p, "House No는 반드시 입력이 되어야 합니다.");
    ed_hhblno.focus();
    scwin.f_clearFileList();
    return;
  }
  scwin.houseNo = houseNo;
  dma_attachedFile.set("blno", houseNo);
  dma_attachedFile.set("houseNo", houseNo);
  console.log("attachedFile payload", JSON.stringify(dma_attachedFile.getJSON()));
  $c.sbm.execute($p, sbm_retrieveAttachedFileList);
};
scwin.sbm_retrieveAttachedFileList_submitdone = function () {
  let fileList = [];
  for (let i = 0; i < ds_attachedFileList.getRowCount(); i++) {
    fileList.push({
      chk: "0",
      FILE_STORED_PATH: ds_attachedFileList.getCellData(i, "filePath"),
      STORED_FILE_NM: ds_attachedFileList.getCellData(i, "fileName"),
      ORIGIN_FILE_NM: ds_attachedFileList.getCellData(i, "fileName"),
      FILE_EXPLAIN: "",
      FILE_SIZE: ds_attachedFileList.getCellData(i, "fileSize"),
      status: "Completed",
      hiddenKey: ds_attachedFileList.getCellData(i, "fileSeq")
    });
  }
  udc_fileUpload.setData(fileList);
};
scwin.f_clearFileList = function () {
  if (typeof udc_fileUpload !== "undefined") {
    udc_fileUpload.setData([]);
  }
};
scwin.udc_fileUpload_onFileUploadDone = function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  let houseNo = $c.str.trim($p, ed_hhblno.getValue());
  if ($c.util.isEmpty($p, houseNo)) {
    $c.win.alert($p, "House No is required.");
    ed_hhblno.focus();
    return;
  }
  scwin.houseNo = houseNo;
  dma_attachedFile.set("blno", houseNo);
  dma_attachedFile.set("houseNo", houseNo);
  ds_fileUploadGDS.removeAll();
  let fileList = udc_fileUpload.getData() || [];
  for (let i = 0; i < fileList.length; i++) {
    if (fileList[i].status == "Completed" && $c.util.isEmpty($p, fileList[i].hiddenKey)) {
      let row = ds_fileUploadGDS.insertRow();
      ds_fileUploadGDS.setCellData(row, "fileClsCd", "");
      ds_fileUploadGDS.setCellData(row, "fileName", fileList[i].ORIGIN_FILE_NM);
      ds_fileUploadGDS.setCellData(row, "filePath", (fileList[i].FILE_STORED_PATH || "") + (fileList[i].STORED_FILE_NM || ""));
      ds_fileUploadGDS.setCellData(row, "fileSize", fileList[i].FILE_SIZE);
      ds_fileUploadGDS.setCellData(row, "regId", scwin.userId);
      ds_fileUploadGDS.setCellData(row, "modId", scwin.userId);
    }
  }
  if (ds_fileUploadGDS.getRowCount() > 0) {
    $c.sbm.execute($p, sbm_saveFile);
  } else if (ds_fileDeleteGDS.getRowCount() > 0) {
    $c.sbm.execute($p, sbm_deleteFile);
  } else {
    scwin.f_Retrieve();
  }
};
scwin.sbm_saveFile_submitdone = async function () {
  if (ds_fileDeleteGDS.getRowCount() > 0) {
    $c.sbm.execute($p, sbm_deleteFile);
  } else {
    $c.win.alert($p, "성공적으로 등록하였습니다.");
    await scwin.f_Retrieve();
  }
};
scwin.sbm_deleteFile_submitdone = function () {
  ds_fileDeleteGDS.removeAll();
  scwin.f_Retrieve();
};
scwin.sbm_default_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_remove_onclick = function (e) {
  ed_hhblno.setValue("");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hhblno',placeholder:'',style:'width: 200px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_remove',style:'',type:'button','ev:onclick':'scwin.btn_remove_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'ilCommonFilePopup_02.xml'}},{T:1,N:'xf:group',A:{class:'file-wrap no-title',id:'',style:''},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{id:'udc_fileUpload',fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200','ev:onFileUploadDone':'scwin.udc_fileUpload_onFileUploadDone',saveFn:'scwin.fileSubmit',visibleRowNum:'7'}}]},{T:1,N:'w2:textbox',A:{class:'info-txt txt-red',id:'',label:'파일명, 파일경로에 특수문자를 입력하실 수 없습니다.(특수문자 종류:\'!,+&^%$#@~;)',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})