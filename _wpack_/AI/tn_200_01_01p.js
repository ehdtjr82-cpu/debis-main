/*amd /AI/tn_200_01_01p.xml 3978 4cf1fb1de8f6308654c62956e805a5b8c6ba7f70375219f4a462c378e3aa519d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_fileSiz = "";
scwin.g_fixWrkPlCd = "";
scwin.g_fixWrkNo = "tmep";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params.filePath != null && scwin.params.filePath != "") {
      scwin.g_filePath = scwin.params.filePath;
    }
    if (scwin.params.fileName != null && scwin.params.fileName != "") {
      scwin.g_fileName = scwin.params.fileName;
    }
    if (scwin.params.fileWrkPlCd != null && scwin.params.fileWrkPlCd != "") {
      scwin.g_fixWrkPlCd = scwin.params.fileWrkPlCd;
    }
    if (scwin.params.fileWrkNo != null && scwin.params.fileWrkNo != "") {
      scwin.g_fixWrkNo = scwin.params.fileWrkNo;
    }
  }
  scwin.f_OnLoad();
};
scwin.f_OnLoad = function () {};
scwin.f_Close = function () {
  let rtnList = new Array();
  if (fileUploadGDS.getRowCount() > 0) {
    scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
    scwin.g_fileName = fileUploadGDS.getCellData(0, "fileName");
    scwin.g_fileSiz = fileUploadGDS.getCellData(0, "fileSize");
  }
  rtnList[0] = scwin.g_filePath;
  rtnList[1] = scwin.g_fileName;
  rtnList[2] = scwin.g_fileSiz;
  $c.win.closePopup($p, rtnList);
};
scwin.fileSubmit = async function () {
  if (!(await $c.win.confirm($p, "저장 하시겠습니까?"))) {
    return;
  }
  $c.gus.cfUploadFile($p, document.frm, fileUploadGDS, "scwin.uploadComplete", true);
};
scwin.uploadComplete = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002);
  if (fileUploadGDS.getRowCount() > 0) {
    scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
    scwin.g_fileName = fileUploadGDS.getCellData(0, "fileName");
  }
  scwin.f_Close();
};
scwin.f_ZoomIn = async function () {
  let strParam = $c.gus.cfGetFileURL($p, "", scwin.g_filePath);
  await $c.win.openPopup($p, "./zoom.xml", {
    width: 840,
    height: 660,
    modal: true,
    data: {
      param: strParam
    }
  });
};
scwin.btn_save_onclick = function (e) {
  scwin.fileSubmit();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_Close();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:''}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})