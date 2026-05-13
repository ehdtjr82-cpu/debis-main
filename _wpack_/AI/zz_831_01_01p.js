/*amd /AI/zz_831_01_01p.xml 6707 4a73778a472e2889fe50d6512c40b399400477b1971e14fd659f7aeaf5941523 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileDeleteGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSeq',name:'작업순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'파일순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/cm.bc.vehclinsurancemgnt.cmd.CreateAttachFilCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"fileUploadGDS","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'scwin.sbm_create_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/cm.bc.vehclinsurancemgnt.cmd.DeleteAttachFilCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"fileDeleteGDS","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.mgntNo = "";
scwin.wrkSeq = "";
scwin.onpageload = function () {
  scwin.f_createHeader();
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    scwin.mgntNo = scwin.params["mgntNo"] || "";
    scwin.wrkSeq = scwin.params["wrkSeq"] || "";
  }
  lc_fileClsCd.setValue("");
};
scwin.onUdcCompleted = function () {
  let codeOptions = [{
    grpCd: "ZZ838",
    compID: "lc_fileClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.f_createHeader = function () {
  let GAUCE_DATASET_HEADER = " mgntNo:STRING(16)" + ",wrkSeq:DECIMAL" + ",fileSeq:DECIMAL";
  // TODO: fileDeleteGDS.SetDataHeader — WebSquare에서는 dataList columnInfo로 선언적 정의되어 있으므로 런타임 헤더 설정 불필요
};
scwin.uploadComplete = function () {
  scwin.f_saveFile();
};
scwin.f_saveFile = async function () {
  sbm_create.setAction("/cm.bc.vehclinsurancemgnt.cmd.CreateAttachFilCMD.do?mgntNo=" + scwin.mgntNo + "&wrkSeq=" + scwin.wrkSeq + "&fileClsCd=" + lc_fileClsCd.getValue());
  await $c.sbm.execute($p, sbm_create);
};
scwin.btn_fileUpload_onclick = async function (e) {
  if (lc_fileClsCd.getValue() == "") {
    await $c.win.alert($p, "증빙파일종류를 선택해 주시기 바랍니다");
    return;
  }
  let chk = await $c.win.confirm($p, "파일을 업로드 하시겠습니까?)");
  if (!chk) {
    return;
  }
  // TODO: $c.gus.cfUploadFile(formObj, fileUploadGDS, "uploadComplete") — WebSquare 파일 업로드 UDC 방식으로 대체 필요
  scwin.uploadComplete();
};
scwin.btn_fileDelete_onclick = async function (e) {
  let checkboxFile = document.getElementsByName("checkFile");
  if (checkboxFile == null || checkboxFile == undefined || checkboxFile.length == 0) {
    await $c.win.alert($p, "삭제 할 파일이 없습니다.");
    return;
  }
  if (checkboxFile.length == 1) {
    if (!checkboxFile[0].checked) {
      await $c.win.alert($p, "삭제 할 파일을 선택해야 합니다.");
      return;
    }
    let chk = await $c.win.confirm($p, "선택하신 파일을 정말로 삭제하시겠습니까?");
    if (chk) {
      fileDeleteGDS.removeAll();
      let delVal = checkboxFile[0].value.split("|");
      let rowIdx = fileDeleteGDS.insertRow();
      fileDeleteGDS.setCellData(rowIdx, "mgntNo", delVal[0]);
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
    let chk = await $c.win.confirm($p, "선택하신 파일을 정말로 삭제하시겠습니까?");
    if (chk) {
      let cbCnt = checkboxFile.length;
      fileDeleteGDS.removeAll();
      for (let i = 0; i < cbCnt; i++) {
        if (checkboxFile[i].checked) {
          let delVal = checkboxFile[i].value.split("|");
          let rowIdx = fileDeleteGDS.insertRow();
          fileDeleteGDS.setCellData(rowIdx, "mgntNo", delVal[0]);
          fileDeleteGDS.setCellData(rowIdx, "fileSeq", delVal[1]);
        }
      }
      await $c.sbm.execute($p, sbm_delete);
    }
  }
};
scwin.sbm_create_submitdone = async function (e) {
  await $c.win.alert($p, "업로드가 완료 되었습니다.");
  // TODO: document.location.reload() → WebSquare 방식으로 화면 갱신 필요
  // TODO: parent.f_Retrieve() → 부모 화면 조회 호출 방식 확인 필요
};
scwin.sbm_create_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, "삭제가 완료 되었습니다.");
  // TODO: document.location.reload() → WebSquare 방식으로 화면 갱신 필요
  // TODO: parent.f_Retrieve() → 부모 화면 조회 호출 방식 확인 필요
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'true',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:' row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:''}}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:''}}]}]}]}]}]}]}]})