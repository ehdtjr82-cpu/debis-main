/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_51p.xml 7312 50574cbe672e8992ed20acc09b4feebca0944d0a7e648bb083128dc7149e18a5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mFilename',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filename',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filepath',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filesize',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 자동차등록증 업로드 (eq_530_01_51p)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-24
//------------------------------------------------------------------------
scwin.p_fileNm = "";
scwin.p_fileSavePath = "";
scwin.p_vehclNo = "";
scwin.p_fileSiz = "";
scwin.p_accdNo = "temp";
scwin.systemPathKey = "";
scwin.systemPathVal = "";
scwin.tFileNm = "";
scwin.onpageload = function () {
  console.log("PGM명 : 자동차등록증 업로드 (eq_530_01_51p)");
  //파일 업로드 위치
  scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
  scwin.systemPathVal = "/ps/eq/adjmmgnt/fixrslts/";
  scwin.params = $c.data.getParameter($p);
  scwin.p_fileNm = scwin.params["fileNm"];
  scwin.p_fileSavePath = scwin.params["fileSavePath"];
  scwin.p_vehclNo = scwin.params["vehclNo"];
  scwin.p_fileSiz = scwin.params["fileSiz"];
  scwin.tFileNm = "자동차등록증_" + scwin.p_vehclNo;
  ed_fileNm.setValue(scwin.tFileNm);
};
scwin.onUdcCompleted = function () {
  //debugger;
  scwin.params = $c.data.getParameter($p);
  scwin.p_fileNm = scwin.params["fileNm"];
  scwin.p_fileSavePath = scwin.params["fileSavePath"];
  scwin.p_fileSiz = scwin.params["fileSiz"];
  scwin.p_vehclNo = scwin.params["vehclNo"];
  let jsonDt = {
    "FILE_STORED_PATH": scwin.p_fileSavePath,
    "STORED_FILE_NM": scwin.p_fileNm,
    "ORIGIN_FILE_NM": scwin.p_fileNm,
    "FILE_SIZE": scwin.p_fileSiz
  };
  let arr = [];
  arr.push(jsonDt);
  if (!$c.gus.cfIsNull($p, scwin.p_fileSavePath)) {
    udc_fielUpload.setData(arr);
  }
};

//-------------------------------------------------------------------------
// function name : fileSubmit
// function desc : File Upload 
//-------------------------------------------------------------------------
scwin.fileSubmit = async function () {
  var formObj = document.frm;
  var intFileCnt = 0;

  //cfUploadFile( formObj , fileUploadGDS, "uploadComplete" , true , g_accdNo );		
  let fileArr = udc_fielUpload.getData();
  let fileStr = "";
  let fileStoredNameStr = "";
  let fileNameStr = "";
  let filePathStr = "";
  let fileSizStr = "";
  fileUploadGDS.removeAll();
  for (let idx in fileArr) {
    fileStr += JSON.stringify(fileArr[idx]) + "\n";
    fileStoredNameStr = JSON.stringify(fileArr[idx].STORED_FILE_NM);
    fileNameStr = JSON.stringify(fileArr[idx].ORIGIN_FILE_NM);
    // filePathStr = JSON.stringify(fileArr[idx].FILE_STORED_PATH );
    filePathStr = JSON.stringify(fileArr[idx].FILE_STORED_PATH + fileArr[idx].STORED_FILE_NM);
    fileSizStr = JSON.stringify(fileArr[idx].FILE_SIZE);
    fileUploadGDS.insertRow(idx);
    fileUploadGDS.setCellData(idx, "mFilename", scwin.tFileNm);
    fileUploadGDS.setCellData(idx, "filename", fileNameStr);
    fileUploadGDS.setCellData(idx, "filepath", filePathStr);
    fileUploadGDS.setCellData(idx, "filesize", fileSizStr);
  }
  fileStr += udc_fielUpload.getType(); // 증빙파일종류
  console.log("fileStr : " + fileStr);
  await $c.win.alert($p, ed_fileNm.getValue() + " 저장하였습니다.");
};
scwin.saveFile = async function () {
  let ret = await $c.win.confirm($p, "저장하시겠습니까?");
  if (ret) {
    udc_fielUpload.startFileUpload();
    // await $c.win.alert("해당파일을 저장하였습니다.");
  }
};

//-------------------------------------------------------------------------
// 화면닫기
//------------------------------------------------------------------------- 	
scwin.f_Close = async function () {
  var rtnList = new Array();
  var sFileNm = "";
  var sFileSize = 0;
  var rCnt = fileUploadGDS.getRowCount();
  if (rCnt > 0) {
    for (var i = 0; i < rCnt; i++) {
      sFileNm = fileUploadGDS.getCellData(i, "filename");
      if (sFileNm.trim().length > 0) {
        sFileSize += $c.num.parseInt($p, fileUploadGDS.getCellData(i, "filesize"));
      }
    }
    var g_filePath = scwin.systemPathVal;
    var g_fileName = ed_fileNm.getValue();
    var g_fileSiz = sFileSize;
    rtnList[0] = g_filePath;
    rtnList[1] = g_fileName;
    rtnList[2] = g_fileSiz;
    rtnList[3] = scwin.p_vehclNo;
  }
  $c.win.closePopup($p, rtnList);
};
scwin.btn_Close_onclick = function (e) {
  scwin.f_Close();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Close();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'파일명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_fileNm',style:'width: 200px;',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',id:'udc_fielUpload',saveFn:'scwin.saveFile',subDir:'/ps/eq/adjmmgnt/fixrslts',typeYn:'N',receiptYn:'N',explainYn:'N','ev:onFileUploadDone':'scwin.fileSubmit'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Close',style:'',type:'button','ev:onclick':'scwin.btn_Close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})