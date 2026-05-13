/*amd /ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_03_n02p.xml 4664 8bfef4b558dc74960f5b068213af92e65750d5ca210c62e2db550eab73e12600 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 팝업 타이틀 변경
//------------------------------------------------------------------------- 
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "전도금관리내역메일전송팝업");
};

//-------------------------------------------------------------------------
// 화면로딩시
//------------------------------------------------------------------------- 
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params["certiNo"] != null) {
      scwin.certiNo = scwin.params["certiNo"];
    }
  }
  scwin.f_OnLoad();
};
scwin.onUdcCompleted = function () {};
scwin.f_OnLoad = async function () {
  txt_fileNm.setValue("내부용 EXCEL파일을 등록하세요");
};

//-------------------------------------------------------------------------
// 화면닫기
//------------------------------------------------------------------------- 
scwin.f_Close = async function () {
  let fileArr = udc_fielUpload.getData();
  if (fileArr.length == 0) {
    let rtn = await $c.win.confirm($p, "파일이 선택되지 않아 이메일 전송이 취소됩니다. <br/>창을 닫으시겠습니까?");
    if (rtn) {
      $c.win.closePopup($p);
    }
    return;
  }
  if (fileArr[0].STORED_FILE_NM == "") {
    let rtn = await $c.win.confirm($p, "파일이 저장되지 않아 이메일 전송이 취소됩니다. <br/>창을 닫으시겠습니까?");
    if (rtn) {
      $c.win.closePopup($p);
    }
    return;
  }
  let rtnList = [];
  rtnList[0] = fileArr[0].ORIGIN_FILE_NM; //파일명
  rtnList[1] = fileArr[0].FILE_STORED_PATH + fileArr[0].STORED_FILE_NM; //파일경로
  rtnList[2] = fileArr[0].FILE_SIZE; //파일크기

  $c.win.closePopup($p, rtnList);
};

//-------------------------------------------------------------------------
// 팝업 저장/ 닫기 버튼
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  scwin.f_Close();
};
scwin.udc_fielUpload_onFileUploadDone = function (isSuccess) {
  let fileArr = udc_fielUpload.getData();
  if (fileArr.length != 0) {
    txt_fileNm.setValue(fileArr[0].ORIGIN_FILE_NM);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'파일명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w300',id:'txt_fileNm',style:'',maxlength:'50'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap no-title',id:'',style:''},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'1',maxFileSize:'536870912',style:'',totalFileSize:'2009715200',id:'udc_fielUpload',saveButtonName:'업로드',subDir:'ds/fs/bilg/cma/',explainYn:'N',receiptYn:'N',typeYn:'N',addButtonName:'첨부파일 추가','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장 후 닫기'}]}]}]}]}]}]}]})