/*amd /AI/zz_210_02_02p_1.xml 4455 1841a262dd6d8c94e57647775d7ef4662230b7f3b588ad63c624b84fe6a048fd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fileNm',name:'파일명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filename',name:'파일명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_filePath = "";
scwin.g_fileName = "";
scwin.g_accdNo = "temp";
scwin.systemPathVal = "/cm/bc/clnt/clntmgnt";
scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.TITLE_NAME = "첨부파일";
scwin.PGM_ID = "zz_210_02_02p_1.xml";
scwin.CALLER_URL = "/ui/cm/bc/clnt/clntmgnt/zz_210_02_02p_1.xml";
scwin.onpageload = async function () {
  let params = $c.data.getParameter($p);
  if (params != null) {
    scwin.g_filePath = params.contractFilePath || "";
    scwin.g_fileName = params.contractFileNm || "";
  }
  scwin.f_OnLoad();
};
scwin.f_OnLoad = async function () {
  if (scwin.g_fileName != "") {
    txt_fileNm.setValue(scwin.g_fileName);
  }
};
scwin.f_Close = async function () {
  let rtnList = [];
  scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
  scwin.g_fileName = txt_fileNm.getValue();
  rtnList[0] = scwin.g_filePath;
  rtnList[1] = scwin.g_fileName;
  $c.win.closePopup($p, rtnList);
};
scwin.fileSubmit = async function () {
  if (txt_fileNm.getValue() == "") {
    await $c.win.alert($p, "파일명을 입력하세요");
    txt_fileNm.setFocus();
    return false;
  }
  $c.gus.cfUploadFile($p, udc_fileMultiUpload, "scwin.uploadComplete", true, scwin.g_accdNo);
};
scwin.uploadComplete = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002);
  scwin.g_filePath = fileUploadGDS.getCellData(0, "filepath");
  scwin.g_fileName = txt_fileNm.getValue();
};
scwin.f_ZoomIn = async function () {
  let strParam = $c.gus.cfGetFileURL($p, "", scwin.g_filePath);
  await $c.win.openPopup($p, "/ui/cm/bc/clnt/clntmgnt/zoom.xml", {
    width: 840,
    height: 660,
    modal: true,
    data: {
      imgUrl: strParam
    }
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'파일명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_fileNm',style:'width: 300px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap no-title',id:''},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})