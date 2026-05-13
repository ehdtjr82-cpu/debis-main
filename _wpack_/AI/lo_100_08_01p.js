/*amd /AI/lo_100_08_01p.xml 3793 4abc5d3b9960ba911d812f37d5b279240a7bee62c046f937d5fe37a3e975ea6a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filename',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_fileSiz = "";
scwin.g_accdNo = "temp";
scwin.argObject = null;
scwin.onpageload = function () {
  scwin.argObject = $c.data.getParameter($p);
  if (scwin.argObject != null) {
    if (scwin.argObject.attachFilePath) {
      scwin.g_filePath = scwin.argObject.attachFilePath;
    }
    if (scwin.argObject.attachFileNm) {
      scwin.g_fileName = scwin.argObject.attachFileNm;
    }
    if (scwin.argObject.accdNo) {
      scwin.g_accdNo = scwin.argObject.accdNo;
    }
  }
  scwin.f_OnLoad();
};
scwin.f_OnLoad = function () {
  if (scwin.argObject != null) {}
};
scwin.f_Close = function () {
  let rtnList = new Array();
  if (fileUploadGDS.getRowCount() > 0) {
    scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
    scwin.g_fileName = fileUploadGDS.getCellData(0, "filename");
    scwin.g_fileSiz = fileUploadGDS.getCellData(0, "fileSize");
  }
  rtnList[0] = scwin.g_filePath;
  rtnList[1] = scwin.g_fileName;
  rtnList[2] = scwin.g_fileSiz;
  $c.win.closePopup($p, rtnList);
};
scwin.fileSubmit = function () {
  $c.gus.cfUploadFile($p, udc_fileMultiUpload, fileUploadGDS, scwin.uploadComplete);
};
scwin.uploadComplete = async function () {
  await $c.gus.cfAlertMsg($p, "MSG_CM_INF_002");
  if (fileUploadGDS.getRowCount() > 0) {
    scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
    scwin.g_fileName = fileUploadGDS.getCellData(0, "filename");
  }
  scwin.f_Close();
};
scwin.f_ZoomIn = async function () {
  let strParam = $c.gus.cfGetFileURL($p, "", scwin.g_filePath);
  await $c.win.openPopup($p, "/ui/lo/logt/zoom.xml", {
    width: 840,
    height: 660,
    modal: true,
    data: {
      imgUrl: strParam
    }
  });
};
scwin.btn_save_onclick = function (e) {
  scwin.fileSubmit();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_Close();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'grp_pop_contents',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_roundBox'},E:[{T:1,N:'xf:group',A:{id:'grp_fileWrap',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',typeYn:'N',explainYn:'N',maxFileCount:'5',style:'',totalFileSize:'2009715200',maxFileSize:'52428800'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'grp_popBtnbox',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})