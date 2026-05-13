/*amd /ui/cm/bc/comnmgnt/boardmgnt/core/zz_690_01_06p_2.xml 4468 cc3a7e845c8ce66c17b97f52e76e6b4c7569a7adf088436feb82df733efb2120 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
// scwin.systemPathVal = "/cm/bc/comnmgnt/boardmgnt/guideboard";
scwin.systemPathVal = "cm/bc/comnmgnt/boardmgnt/guideboard";

//-------------------------------------------------------------------------
// 화면로딩시
//------------------------------------------------------------------------- 
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  udc_fielUpload.setHeaderRed("fileNm");
  udc_fielUpload.setHeaderRed("fileDesc");
};

//-------------------------------------------------------------------------
// 화면닫기
//------------------------------------------------------------------------- 
scwin.f_Close = function () {
  var rtnValues = new Array();
  rtnValues[0] = "Y";
  $c.win.closePopup($p, rtnValues);
  console.log("rtnValues : " + rtnValues);
};

//-------------------------------------------------------------------------
// function name : fileSubmit
// function desc : File Upload 
//-------------------------------------------------------------------------
scwin.fileSubmit = async function () {
  let ret = await scwin.saveBefore();
  if (!ret) {
    return;
  }
  udc_fielUpload.setSubDir(scwin.systemPathVal);
  udc_fielUpload.startFileUpload();
  scwin.saveDone();
};
scwin.saveBefore = async function () {
  let data = udc_fielUpload.getData();
  if (data.length == 0) {
    await $c.win.alert($p, "파일명을 등록하세요");
    return false;
  }
  ;
  if (data.length != 0 && data[0].FILE_EXPLAIN == "") {
    await $c.win.alert($p, "파일설명을 입력하세요");
    return false;
  }
  ;
  return true;
};
scwin.saveDone = function () {
  //$c.win.alert("파일이 저장되었습니다.");
};
scwin.udc_fielUpload_onFileUploadDone = function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  ;
  let rtnValues = new Array();
  let data = udc_fielUpload.getData();
  let g_filePath = data[0].FILE_STORED_PATH + "/" + data[0].STORED_FILE_NM;
  let g_fileName = data[0].FILE_EXPLAIN;
  let g_fileSize = data[0].FILE_SIZE;
  rtnValues[0] = g_filePath;
  rtnValues[1] = g_fileName;
  rtnValues[2] = g_fileSize;
  $c.win.closePopup($p, rtnValues);
};

//-------------------------------------------------------------------------
// function name : uploadComplete
// function desc : Upload File complete 
//-------------------------------------------------------------------------
scwin.uploadComplete = function () {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'file-wrap  no-title',id:'',style:''},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'1',maxFileSize:'536870912',style:'',totalFileSize:'2009715200',explainYn:'Y',id:'udc_fielUpload',addButtonName:'첨부파일 추가',saveFn:'scwin.fileSubmit','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})