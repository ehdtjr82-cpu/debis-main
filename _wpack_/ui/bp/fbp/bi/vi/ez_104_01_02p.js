/*amd /ui/bp/fbp/bi/vi/ez_104_01_02p.xml 9035 5687bd52a10bd56d09b07657fab77821d5b42d6d06e55bbc6a5502fcfa565952 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fileDeleteGDS',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileSeq',name:'fileSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'filePath',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_attachedFileList',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileClsCd',name:'fileClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileClsNm',name:'fileClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'fileName',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'filePath',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'fileSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'fileSize',dataType:'text'}},{T:1,N:'w2:column',A:{id:'houseNo',name:'houseNo',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAttachedFileList',action:'/ac.fm.paymgnt.advcdmgnt.RetreiveAdvancedPaymentAttachFileListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',ref:'data:json,{"id":"ds_attachedFileList","key":"OUT_DS1"}',target:'data:json,{"id":"ds_attachedFileList","key":"OUT_DS1"}','ev:submitdone':'scwin.sbm_retrieveAttachedFileList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteFile',action:'/ac.fm.paymgnt.advcdmgnt.DeleteAdvancedPaymentAttachFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fileDeleteGDS","key":"IN_DS1"}]',target:'data:json,[]',encoding:'UTF-8',mode:'asynchronous',processMsg:'none','ev:submitdone':'scwin.sbm_deleteFile_submitdone','ev:submiterror':'scwin.sbm_default_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 차량정보사진
 * 메뉴경로 : 물류(N)/국내 운영(협력)/차량정보사진
 * ASIS경로 : /dongwon-ntis-engine/src/main/webapp/bp/fbp/bi/vi/ez_104_01_02p.jsp
 * 작 성 자 : 유청아
 * 작 업 일 : 2026-03-23
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-03-23      유청아    최초작성
 *    - 2026-04-13      이진우    T-6189 조치완료(파일첨부갯수10,화면타이틀 수정)
 */

scwin.params = null;
scwin.filePath = "";
scwin.fileName = "";
scwin.fileSize = "";

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["attachFilePath"])) {
    scwin.filePath = scwin.params["attachFilePath"];
  }
  if (!$c.util.isEmpty($p, scwin.params["attachFileNm"])) {
    scwin.fileName = scwin.params["attachFileNm"];
  }
};

//-------------------------------------------------------------------------
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 파일 업로드(UDC 저장버튼)
//-------------------------------------------------------------------------
scwin.fileSubmit = async function () {
  udc_fielUpload.startFileUpload();

  // let fileList = udc_fileUpload.getData() || [];
  // let hasNewFile = false;
  // let hasDeleteFile = false;

  // for (let i = 0; i < fileList.length; i++) {

  //     //fileList.modifyRowStatus(i, "R");

  //     if ($c.util.isEmpty(fileList[i].hiddenKey)) {
  //         hasNewFile = true;
  //     }

  //     if (fileList[i].chk == "1" && !$c.util.isEmpty(fileList[i].hiddenKey)) {
  //         let row = ds_fileDeleteGDS.insertRow();
  //         ds_fileDeleteGDS.setCellData(row, "fileSeq", fileList[i].hiddenKey);
  //         ds_fileDeleteGDS.setCellData(row, "filePath", fileList[i].FILE_STORED_PATH || "");
  //         hasDeleteFile = true;
  //     }
  // }

  // if (hasNewFile) {
  //     await udc_fileUpload.startFileUpload();
  //     return;
  // }

  // if (hasDeleteFile) {
  //     await $c.sbm.execute(sbm_deleteFile);
  //     return;
  // }

  // await $c.win.alert("No file changes.");
};
scwin.sbm_deleteFile_submitdone = function () {
  ds_fileDeleteGDS.removeAll();
  scwin.f_Retrieve();
};
scwin.sbm_default_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieveAttachedFileList);
};
scwin.sbm_retrieveAttachedFileList_submitdone = function () {
  let fileList = [];
  for (let i = 0; i < ds_attachedFileList.getRowCount(); i++) {
    const fileName = ds_attachedFileList.getCellData(i, "fileName");
    const filePath = ds_attachedFileList.getCellData(i, "filePath");
    fileList.push({
      chk: "0",
      FILE_STORED_PATH: filePath,
      STORED_FILE_NM: fileName,
      ORIGIN_FILE_NM: fileName,
      FILE_EXPLAIN: "",
      FILE_SIZE: ds_attachedFileList.getCellData(i, "fileSize"),
      status: "Completed",
      hiddenKey: ds_attachedFileList.getCellData(i, "fileSeq")
    });
  }
  udc_fileUpload.setData(fileList);
};

//-------------------------------------------------------------------------
// 업로드 완료
//-------------------------------------------------------------------------
scwin.uploadComplete = async function () {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002); // 성공적으로 등록하였습니다.
  scwin.f_Close();
};

//-------------------------------------------------------------------------
// 화면닫기
//------------------------------------------------------------------------- 	
scwin.f_Close = function () {
  // 차량사진 첨부파일은 마지막 한건만 등록 가능
  let fileList = udc_fielUpload.getData();
  if (fileList.length > 0) {
    let lenCnt = fileList.length;
    console.log("lenCnt::", lenCnt);
    let status = fileList[lenCnt - 1].status;
    if (status == "Completed") {
      scwin.filePath = fileList[lenCnt - 1].filePath;
      scwin.fileName = fileList[lenCnt - 1].fileName;
      scwin.fileSize = fileList[lenCnt - 1].fileSize;
      if ($c.gus.cfIsNull($p, scwin.fileName)) {
        scwin.fileName = fileList[lenCnt - 1].ORIGIN_FILE_NM;
      }
      if ($c.gus.cfIsNull($p, scwin.filePath)) {
        scwin.filePath = fileList[lenCnt - 1].FILE_STORED_PATH + fileList[lenCnt - 1].STORED_FILE_NM;
      }
      if ($c.gus.cfIsNull($p, scwin.fileSize)) {
        scwin.fileSize = fileList[lenCnt - 1].FILE_SIZE;
      }
    }
  }
  let rtnList = new Array();
  rtnList[0] = scwin.filePath;
  rtnList[1] = scwin.fileName;
  rtnList[2] = scwin.fileSize;
  $c.win.closePopup($p, rtnList);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.file-wrap{height:100%}.w2udc2.fix_no,.w2udc2.fix_no .file-upload{height:100%}.w2udc2.fix_no .gvwbox .wq_gvw{flex:1}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_textbox1',label:'차량정보사진',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'round-box flex-full',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',id:'udc_fielUpload','ev:onFileUploadDone':'scwin.uploadComplete',subDir:'/tn/op/rscmgnt/',readOnlyYn:'Y',class:'fix_no'}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})