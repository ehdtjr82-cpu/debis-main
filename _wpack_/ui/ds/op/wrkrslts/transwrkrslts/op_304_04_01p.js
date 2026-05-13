/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_04_01p.xml 4645 f66ec667b4c712987102191a3e2789c8b992c46c602d9829cca0ff9bc271a38e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = null;
scwin.argObject = "";
scwin.filePath = "";
scwin.fileName = "";
scwin.fileSize = "";
scwin.accdNo = "temp";

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["filePath"])) {
    scwin.filePath = scwin.params["filePath"];
  }
  if (!$c.util.isEmpty($p, scwin.params["fileName"])) {
    scwin.fileName = scwin.params["fileName"];
  }
  if (!$c.util.isEmpty($p, scwin.params["fileSize"])) {
    scwin.fileSize = scwin.params["fileSize"];
  }
};

//-------------------------------------------------------------------------
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 파일 업로드(UDC 저장버튼)
//-------------------------------------------------------------------------
scwin.fileSubmit = function () {
  udc_fielUpload.startFileUpload();
};

//-------------------------------------------------------------------------
// 업로드 완료
//-------------------------------------------------------------------------
scwin.uploadComplete = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002); // 성공적으로 등록하였습니다.

  // 과태료 첨부파일은 한건만 등록 가능
  let fileList = udc_fielUpload.getData();
  if (fileList.length > 0) {
    let status = fileList[0].status;
    if (status == "Completed") {
      scwin.filePath = fileList[0].filePath;
      scwin.fileName = fileList[0].fileName;
      scwin.fileSize = fileList[0].fileSize;
      if ($c.gus.cfIsNull($p, scwin.fileName)) {
        scwin.fileName = fileList[0].ORIGIN_FILE_NM;
      }
      if ($c.gus.cfIsNull($p, scwin.filePath)) {
        scwin.filePath = fileList[0].FILE_STORED_PATH + fileList[0].STORED_FILE_NM;
      }
      if ($c.gus.cfIsNull($p, scwin.fileSize)) {
        scwin.fileSize = fileList[0].FILE_SIZE;
      }
    }
  }

  // 테스트 데이터
  //scwin.filePath = "/ds/op/wrkrslts/transwrkrslts/그리드팝업[1_10101_251029103743337].png";
  //scwin.fileName = "그리드팝업.png";
  //scwin.fileSize = "4016";

  let rtnList = new Array();
  rtnList[0] = scwin.filePath;
  rtnList[1] = scwin.fileName;
  rtnList[2] = scwin.fileSize;
  $c.win.closePopup($p, rtnList);
};

//-------------------------------------------------------------------------
// 화면닫기
//------------------------------------------------------------------------- 	
scwin.f_Close = function () {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'1',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',id:'udc_fielUpload',subDir:'/ds/op/wrkrslts/transwrkrslts/','ev:onFileUploadDone':'scwin.uploadComplete',saveFn:'scwin.fileSubmit'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})