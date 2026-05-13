/*amd /ui/sample/smp_uploadPreview.xml 1839 17c042758fb0c7a85892fd8db4cb7655d2ff79bc891b497f2b17adb542c2e644 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  // udc_fielUpload.setFixNum(10);
};
scwin.onpageunload = function () {};
scwin.onUdcCompleted = function () {
  //debugger;

  let jsonDt = {
    "FILE_STORED_PATH": "/smp/",
    "STORED_FILE_NM": "test[1_10101_251211140836428].png",
    "ORIGIN_FILE_NM": "test.png",
    "FILE_SIZE": 11139
  };
  let arr = [];
  arr.push(jsonDt);
  udc_fielUpload.setData(arr);
};
scwin.udc_fielUpload_onFileUploadDone = function (isSuccess) {
  debugger;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUploadPreview',type:'page',variableClone:'',src:'/cm/udc/fileMultiUploadPreview.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{style:'',id:'wfm_wframe1',src:'/cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box '},E:[{T:1,N:'w2:udc_fileMultiUploadPreview',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',typeYn:'N',explainYn:'N',maxFileCount:'5',style:'',totalFileSize:'2009715200',maxFileSize:'52428800',id:'udc_fielUpload',subDir:'/smp/'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'btnbox mt16'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_group14'}}]}]}]}]}]}]})