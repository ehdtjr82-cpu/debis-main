/*amd /AI/pe_116_01_01p.xml 6770 0e189def9cb89ec7c7fc2cdc7eb5908f622c64bdfd12e07ca613daa06a5996ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hblno',name:'House BL No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileDeleteGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hblno',name:'House BL No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.pfm.pefm.DeleteAttachedFileCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"fileDeleteGDS","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_accdNo = "temp";
scwin.g_fileSiz = "";
scwin.houseNo = "";
scwin.userId = "";
scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.TITLE_NAME = "국제물류 수입서류 첨부파일";
scwin.PGM_ID = "pe_116_01_01p.xml";
scwin.CALLER_URL = "/ui/il/pfm/pefm/pe_116_01_01p.xml";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params.attachFilePath != null && scwin.params.attachFilePath != undefined) {
      scwin.g_filePath = scwin.params.attachFilePath;
    }
    if (scwin.params.attachFileNm != null && scwin.params.attachFileNm != undefined) {
      scwin.g_fileName = scwin.params.attachFileNm;
    }
    if (scwin.params.accdNo != null && scwin.params.accdNo != undefined) {
      scwin.g_accdNo = scwin.params.accdNo;
    }
    if (scwin.params.houseNo != null && scwin.params.houseNo != undefined) {
      scwin.houseNo = scwin.params.houseNo;
    }
  }
  scwin.userId = $c.ses.getUserId();
  scwin.f_OnLoad();
};
scwin.f_OnLoad = function () {
  if (scwin.params != null) {}
};
scwin.f_Close = function () {
  let rtnList = new Array();
  if (fileUploadGDS.getRowCount() > 0) {
    scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
    scwin.g_fileSiz = fileUploadGDS.getCellData(0, "fileSize");
  }
  rtnList[0] = scwin.g_filePath;
  rtnList[1] = scwin.g_fileName;
  $c.win.closePopup($p, rtnList);
};
scwin.fileSubmit = function () {
  $c.gus.cfUploadFile($p, fileUploadGDS, "scwin.uploadComplete");
};
scwin.fileDelete = async function () {
  let chk = await $c.win.confirm($p, "선택하신 파일을 정말로 삭제하시겠습니까?");
  if (chk) {
    fileDeleteGDS.removeAll();
    fileDeleteGDS.insertRow(0);
    fileDeleteGDS.setCellData(0, "hblno", scwin.houseNo);
    fileDeleteGDS.setCellData(0, "modId", scwin.userId);
    await $c.sbm.execute($p, sbm_delete);
  }
};
scwin.uploadComplete = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002);
  if (fileUploadGDS.getRowCount() > 0) {
    scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
  }
  scwin.f_Close();
};
scwin.f_ZoomIn = async function () {
  let strParam = $c.gus.cfGetFileURL($p, "", scwin.g_filePath);
  await $c.win.openPopup($p, "/ui/il/pfm/pefm/zoom.xml", {
    width: 840,
    height: 660,
    modal: true,
    data: {
      param: strParam
    }
  });
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 삭제하였습니다.");
  scwin.f_Close();
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_trigger3_onclick = function (e) {
  scwin.fileDelete();
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Close();
};
scwin.btn_save_onclick = function (e) {
  scwin.fileSubmit();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_textbox1',label:'화면타이틀',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'파일첨부(예정)',class:'tit'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:''}}]},{T:1,N:'xf:group',A:{class:'file-wrap col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'파일첨부(완료)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger3',type:'button',class:'btn file-del'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일 삭제'}]}]}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200'}}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})