/*amd /AI/fm_303_01_03_n02p.xml 4946 4b2893e4f891bbeafa3e01c17f4a70f4609b65ecd95329db13caf4e1952b9084 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileUpload'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_fileSiz = "";
scwin.g_accdNo = "temp";
scwin.systemPathVal = "/ds/fs/bilg/cma";
scwin.certiNo = "";
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params["certiNo"] != null) {
      scwin.certiNo = scwin.params["certiNo"];
    }
  }
  scwin.f_OnLoad();
};
scwin.f_OnLoad = async function () {
  txt_fileNm.setValue("내부용 EXCEL파일을 등록하세요");
};
scwin.f_Close = async function () {
  let rtnList = new Array();
  scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
  scwin.g_fileName = txt_fileNm.getValue();
  scwin.g_fileSiz = fileUploadGDS.getCellData(0, "fileSize");
  rtnList[0] = "";
  rtnList[1] = scwin.g_fileName;
  rtnList[2] = scwin.g_fileSiz;
  $c.win.closePopup($p, rtnList);
};
scwin.f_Close2 = async function () {
  let rtnList = new Array();
  scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
  scwin.g_fileName = txt_fileNm.getValue();
  scwin.g_fileSiz = fileUploadGDS.getCellData(0, "fileSize");
  rtnList[0] = scwin.g_filePath;
  rtnList[1] = scwin.g_fileName;
  rtnList[2] = scwin.g_fileSiz;
  $c.win.closePopup($p, rtnList);
};
scwin.fileSubmit = async function () {
  let fileName = txt_fileNm.getValue();
  if (fileName == "") {
    await $c.win.alert($p, "파일명을 입력하세요");
    txt_fileNm.setFocus();
    return false;
  }
  $c.gus.cfUploadFile($p, udc_fileMultiUpload, fileUploadGDS, "scwin.uploadComplete", true, scwin.g_accdNo);
};
scwin.uploadComplete = async function () {
  await $c.gus.cfAlertMsg($p, "MSG_CM_INF_002");
  scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
  scwin.g_fileName = txt_fileNm.getValue();
  scwin.f_Close2();
};
scwin.fileNameGet = function (filePath) {
  let strArray = filePath.split("\\");
  return strArray[strArray.length - 1];
};
scwin.f_ZoomIn = async function () {
  let strParam = $c.gus.cfGetFileURL($p, "", scwin.g_filePath);
  await $c.win.openPopup($p, "/ui/common/zoom.xml", {
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'파일명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w300',id:'txt_fileNm',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap',id:'',style:''},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})