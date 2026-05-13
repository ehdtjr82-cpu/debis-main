/*amd /AI/ilCommonViewAttachedFilePopup.xml 8674 fcb9fb9dbe032ad8b3b406d51a79922d05980210cacdc04de7b4bd41501d0a91 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'houseNo',name:'House No',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileDeleteGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'houseNo',name:'House No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'파일순번',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/il.comm.util.cmd.SaveFileMgntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"fileUploadGDS","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'scwin.sbm_create_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.comm.util.cmd.DeleteFileMgntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"fileDeleteGDS","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.houseNo = "";
scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.TITLE_NAME = "";
scwin.PGM_ID = "ilCommonViewAttachedFilePopup.xml";
scwin.CALLER_URL = "/ui/il/common/jsp/ilCommonFilePopup.xml";
scwin.onpageload = async function () {
  let params = $c.data.getParameter($p);
  if (params != null && params["blno"] != null) {
    scwin.houseNo = params["blno"];
  } else {
    scwin.houseNo = "";
  }
  dma_search.set("houseNo", scwin.houseNo);
};
scwin.btn_fileUpLoad_onclick = async function (e) {
  if (!(await $c.win.confirm($p, "B/L No: " + scwin.houseNo + "\n\n파일을 업로드 하시겠습니까?"))) {
    return;
  }
  scwin.fileSubmit();
};
scwin.fileSubmit = async function () {
  $c.gus.cfUploadFile($p, document.frm, fileUploadGDS, "scwin.uploadComplete");
};
scwin.uploadComplete = async function () {
  await $c.sbm.execute($p, sbm_create);
};
scwin.btn_fileDelete_onclick = async function (e) {
  scwin.fileDelete();
};
scwin.btn_excelUp_onclick = async function (e) {
  scwin.fileDelete();
};
scwin.fileDelete = async function () {
  if (document.all.checkFile == null || document.all.checkFile == undefined) {
    await $c.win.alert($p, "삭제 할 파일이 없습니다.");
    return;
  }
  let checkboxFile = document.all.checkFile;
  if (checkboxFile.length == undefined) {
    if (!checkboxFile.checked) {
      await $c.win.alert($p, "삭제 할 파일을 선택해야 합니다.");
      return;
    }
    if (await $c.win.confirm($p, "선택하신 파일을 정말로 삭제하시겠습니까?")) {
      fileDeleteGDS.removeAll();
      let delVal = checkboxFile.value.split("|");
      let rowIdx = fileDeleteGDS.insertRow();
      fileDeleteGDS.setCellData(rowIdx, "houseNo", delVal[0]);
      fileDeleteGDS.setCellData(rowIdx, "fileSeq", delVal[1]);
      await $c.sbm.execute($p, sbm_delete);
    }
  } else {
    let checkedCnt = 0;
    for (let i = 0; i < checkboxFile.length; i++) {
      if (checkboxFile[i].checked) {
        checkedCnt += 1;
      }
    }
    if (checkedCnt == 0) {
      await $c.win.alert($p, "선택된 파일이 없습니다.");
      return;
    }
    if (await $c.win.confirm($p, "선택하신 파일을 정말로 삭제하시겠습니까?")) {
      let cbCnt = checkboxFile.length;
      fileDeleteGDS.removeAll();
      for (let i = 0; i < cbCnt; i++) {
        if (checkboxFile[i].checked) {
          let delVal = checkboxFile[i].value.split("|");
          let rowIdx = fileDeleteGDS.insertRow();
          fileDeleteGDS.setCellData(rowIdx, "houseNo", delVal[0]);
          fileDeleteGDS.setCellData(rowIdx, "fileSeq", delVal[1]);
        }
      }
      await $c.sbm.execute($p, sbm_delete);
    }
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, "삭제가 완료 되었습니다.");
  document.location.reload();
};
scwin.sbm_delete_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_create_submitdone = async function (e) {
  await $c.win.alert($p, "업로드가 완료 되었습니다.");
  document.location.reload();
  if (parent && parent.scwin && typeof parent.scwin.f_Retrieve === "function") {
    parent.scwin.f_Retrieve();
  }
};
scwin.sbm_create_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'',placeholder:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.btn_fileUpLoad_onclick',id:'btn_fileUpLoad',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false','ev:onclick':'scwin.btn_fileDelete_onclick',id:'btn_fileDelete',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'파일첨부(예정)',class:'tit'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'file-wrap col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'파일첨부(완료)',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_excelUp_onclick',style:'',id:'btn_trigger4',title:'파일업로드',type:'button',class:'btn file-del'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일삭제'}]}]}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'info-list red'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'파일명, 파일경로에 특수문자를 입력하실 수 없습니다.(특수문자 종류:\'!,+&^%$#@~;)',class:''}}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger5',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})