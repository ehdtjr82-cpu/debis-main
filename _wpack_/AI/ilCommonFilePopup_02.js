/*amd /AI/ilCommonFilePopup_02.xml 9656 3d198c2b03fcad8c2cc815ea18783689aadae4eec1314f3f783af0470a2f7507 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'houseNo',name:'House No',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'houseNo',name:'House No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'파일순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileDeleteGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'houseNo',name:'House No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'파일순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_admin',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_admin2',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_checkRegistID',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/il.comm.util.cmd.SaveFileMgntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"fileUploadGDS","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'scwin.sbm_create_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.comm.util.cmd.DeleteFileMgntCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"fileDeleteGDS","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.houseNo = "";
scwin.apprvReqNo = "";
scwin.deptCd = "";
scwin.regId = "";
scwin.startDt = "";
scwin.endDt = "";
scwin.slipKndCd = "";
scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.TITLE_NAME = "";
scwin.PGM_ID = "ilCommonFilePopup_02.xml";
scwin.CALLER_URL = "/ui/il/common/xml/ilCommonFilePopup.xml";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.houseNo = scwin.params && scwin.params.houseNo ? scwin.params.houseNo : "";
  scwin.regId = $c.ses.getUserId();
};
scwin.dataSetDebug = function (dataList, isDebug) {
  if (isDebug == true) {
    let obj = dataList;
    let str = "[[[[" + obj.getID() + "]]]]]\n";
    let colInfos = obj.getColumnIDs();
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      for (let dsCol = 0; dsCol < colInfos.length; dsCol++) {
        str += "[" + colInfos[dsCol] + "] " + obj.getCellData(dsRow, colInfos[dsCol]) + ", ";
      }
      str += "\n\n";
    }
    alert(str);
  }
};
scwin.uploadComplete = function () {
  scwin.f_saveFile();
};
scwin.f_saveFile = async function () {
  await $c.sbm.execute($p, sbm_create);
};
scwin.fileSubmit = async function () {
  let userId = $c.ses.getUserId();
  let empNo = $c.ses.getEmpNo();
  let houseNo = scwin.houseNo;
  let userAcctDeptCd = $c.ses.getAcctDeptCd();
  let admin = "";
  let admin2 = "";
  let count = 0;
  let count2 = 0;
  if (houseNo == "") {
    await $c.win.alert($p, "증빙파일 등록 할 House No가 입력되지 않았습니다.\nHouse No 입력 후 반드시 재조회 하세요.");
    return;
  }
  let chk = await $c.win.confirm($p, "House No:" + scwin.houseNo + "\n\n파일을 업로드 하시겠습니까?)");
  if (!chk) {
    return;
  }
  $c.gus.cfUploadFile($p, fileUploadGDS, "scwin.uploadComplete");
};
scwin.fileDelete = async function () {
  let checkboxFile = scwin.getCheckFileValues();
  if (checkboxFile == null || checkboxFile.length == 0) {
    await $c.win.alert($p, "삭제 할 파일이 없습니다.");
    return;
  }
  let houseNo = scwin.houseNo;
  if (houseNo == "") {
    await $c.win.alert($p, "증빙파일 삭제 할 House No가 입력되지 않았습니다.\nHouse No 입력 후 반드시 재조회 하세요.");
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
      let newRow = fileDeleteGDS.insertRow();
      fileDeleteGDS.setCellData(newRow, "houseNo", delVal[0]);
      fileDeleteGDS.setCellData(newRow, "fileSeq", delVal[1]);
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
          let newRow = fileDeleteGDS.insertRow();
          fileDeleteGDS.setCellData(newRow, "houseNo", delVal[0]);
          fileDeleteGDS.setCellData(newRow, "fileSeq", delVal[1]);
        }
      }
      await $c.sbm.execute($p, sbm_delete);
    }
  }
};
scwin.getCheckFileValues = function () {
  // TODO: UDC 파일 컴포넌트에서 체크된 파일 목록을 가져오는 로직 구현 필요
  let checkFiles = [];
  let checkElements = document.querySelectorAll("input[name='checkFile']");
  if (checkElements == null || checkElements.length == 0) {
    return null;
  }
  for (let i = 0; i < checkElements.length; i++) {
    checkFiles.push({
      checked: checkElements[i].checked,
      value: checkElements[i].value
    });
  }
  return checkFiles;
};
scwin.getSlipNoRegistID = function (houseNo) {
  // TODO: 동적 쿼리 기반 전표 등록자 조회 — 서버 API 변경 필요
  let param1 = " A.SLIP_NO   as COL1 " + ",A.REG_ID    as COL2 " + ",A.SLIP_DT   as COL3 " + ",B.USER_NM   as COL4 " + ",A.DRAW_EMP_NO as COL5 " + ",''              as COL6 " + ",''              as COL7 " + ",''              as COL8 " + ",''              as COL9 " + ",''              as COL10 ";
  let param2 = " TB_FI101 A, TB_ZZ315 B";
  let param3 = " AND A.REG_ID = B.USER_ID " + " AND A.SLIP_NO = '" + houseNo + "'";
  let param4 = " A.SLIP_NO ";
};
scwin.sbm_create_submitdone = async function (e) {
  await $c.win.alert($p, "업로드가 완료 되었습니다.");
  // TODO: document.location.reload() 대체 — 화면 새로고침 또는 파일 목록 재조회
  $c.gus.cfReloadPage($p);
  if (typeof parent.scwin !== "undefined" && typeof parent.scwin.f_Retrieve === "function") {
    parent.scwin.f_Retrieve();
  }
};
scwin.sbm_create_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, "삭제가 완료 되었습니다.");
  // TODO: document.location.reload() 대체 — 화면 새로고침 또는 파일 목록 재조회
  $c.gus.cfReloadPage($p);
  if (typeof parent.scwin !== "undefined" && typeof parent.scwin.f_Retrieve === "function") {
    parent.scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'file-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',escape:'false',id:'',label:'파일첨부',style:'',tagname:'h3'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',maxFileSize:'536870912',style:'',totalFileSize:'2009715200'}}]}]}]}]})