/*amd /ui/cm/bc/sealmgnt/zz_914_01_02p.xml 3857 938df8f80ea1bc12a837eab055de2b52940632996008dfa6ad40c7249e419e53 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인장이미지 등록 / IMAGE 돋보기 클릭
 * 메뉴경로 : 공통/총무업무/인장관리/인장관리
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/sealmgnt/zz_914_01_02p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-08
 * 수정이력  :
 *    - 2025-12-08      정승혜    최초작성
 *    - 2026-03-18      정승혜    기타수정
 * 메모 : 부모페이지 zz_914_01_02b
 * 조회조건 : 
 */

//파일 업로드 위치
scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
scwin.systemPathVal = "/cm/bc/sealmgnt";

//-------------------------------------------------------------------------
// 화면로딩시
//------------------------------------------------------------------------- 
scwin.onpageload = function () {};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "인장등록");
};
scwin.fileSubmit = function () {};
scwin.f_Close = function () {
  var rtnValues = new Array();
  rtnValues[0] = "Y";
  $c.win.closePopup($p, rtnValues);
  console.log("rtnValues : " + rtnValues);
};
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
    await $c.win.alert($p, "파일을 등록하세요");
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
  let g_filePath = data[0].FILE_STORED_PATH + data[0].STORED_FILE_NM;
  let g_fileName = data[0].ORIGIN_FILE_NM;
  rtnValues[0] = g_filePath;
  rtnValues[1] = g_fileName;
  $c.win.closePopup($p, rtnValues);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'file-wrap  no-title',id:'',style:''},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'1',maxFileSize:'536870912',style:'',totalFileSize:'2009715200',addButtonName:'첨부파일 추가',explainYn:'N',saveFn:'scwin.fileSubmit',id:'udc_fielUpload','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})