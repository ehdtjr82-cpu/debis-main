/*amd /ui/ac/fi/fixedaset/fi_302_02_01p.xml 27487 a7e88e4d495e509e0d8367f368b32c72647dd6e36fb055dabd5ba0601b73aab8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromClsCd',name:'출처구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'증빙파일종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileList',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prmrNo',name:'구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'출처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'FILE크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmkregId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtmmodId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetPrmrNo',name:'자산증빙구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'영수여부(1:예,0:아니오)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'숨겨진값',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileUploadGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prmrNo',name:'구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'출처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'FILE크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetPrmrNo',name:'자산증빙구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'숨겨진값',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fileDeleteGDS',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prmrNo',name:'구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromClsCd',name:'출처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'FILE크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetPrmrNo',name:'자산증빙구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_EXPLAIN',name:'파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'숨겨진값',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.fixedaset.RetreiveeAssetsEvidenceInfoAttachFileListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_fileList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',target:'data:json,{"id":"ds_fileList","key":"OUT_DS1"}',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.fixedaset.SaveAssetsEvidenceInfoAttachFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_fileUploadGDS","key":"IN_DS1"},{"action":"all","id":"dma_search","key":"IN_DS2"}]',sinstance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fi.fixedaset.DeleteAssetsEvidenceInfoAttachFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_fileDeleteGDS","key":"IN_DS1"}',sinstance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 자산증빙관리파일첨부기능
 * 메뉴경로 : 회계/재무회계/고정자산/자산이력 승인/승인취소(fi_302_02_01b.xml)
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/fixedaset/fi_302_02_01p.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-27
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. ☏ RetreiveeAssetsEvidenceInfoAttachFileListBD 직접 호출
 *       ☞ CMD 만듬
 * 참고사항 : 
 *    1. udc_fileMultiUpload datalist 처리
 *    2. 저장버튼 클릭 시 따로 빼줘서 자유도 활성화 해줌
 *    3. 파일삭제 로직
 * 수정이력 :
 *    - 2025-11-27      배기원    최초작성
 */
//scwin.systemPathKey =  DFWConstants.FILE_UPLOAD_SYSTEM_PATH ;
//scwin.systemPathVal =  DSystemCode.FI+"/fixedaset/evidAttachFile/;
//scwin.path = "/WEB-INF/struts_config/pt/co.xml";

//param
scwin.fixedAsetNo = "";
scwin.fixedAsetHistClsCd = "";
scwin.slipNo = "";
scwin.slipKndCd = "";
scwin.apprvReqNo = ""; //
scwin.fixedAsetApprvYn = ""; //승인여부
scwin.systemPathKey = "FILE_UPLOAD_SYSTEM_PATH";
scwin.systemPathVal = "FI/fixedaset/evidAttachFile/";
scwin.subDir = "";

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // scwin.params = $c.data.getParameter();
  scwin.params = $p.getParameter("wframeParam");
  if (!$c.util.isEmpty($p, scwin.params["fixedAsetNo"])) {
    scwin.fixedAsetNo = scwin.params["fixedAsetNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["fixedAsetHistClsCd"])) {
    scwin.fixedAsetHistClsCd = scwin.params["fixedAsetHistClsCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["slipNo"])) {
    scwin.slipNo = scwin.params["slipNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["slipKndCd"])) {
    scwin.slipKndCd = scwin.params["slipKndCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["apprvReqNo"])) {
    scwin.apprvReqNo = scwin.params["apprvReqNo"];
  }
  if (!$c.util.isEmpty($p, scwin.params["fixedAsetApprvYn"])) {
    scwin.fixedAsetApprvYn = scwin.params["fixedAsetApprvYn"];
  }

  //test용
  // scwin.fixedAsetNo        = "1000042315";
  // scwin.slipNo             = "1013486194";
  // scwin.slipKndCd          = "B01";
  // scwin.fixedAsetHistClsCd = "10";
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.f_createHeader();
  scwin.f_Retrieve();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  // grdFileList.setNoResultMessageVisible(false);
  ds_fileList.removeAll();
  totalRows.setValue("0");
  ds_fileUploadGDS.removeAll();
  ds_fileDeleteGDS.removeAll();
  dma_search.setEmptyValue();
};

/**
 * 조회(첨부완료 리스트)
 */
scwin.f_Retrieve = async function () {
  scwin.setInit();
  dma_search.set("fixedAsetNo", scwin.fixedAsetNo);
  dma_search.set("fixedAsetHistClsCd", scwin.fixedAsetHistClsCd);
  dma_search.set("slipNo", scwin.slipNo);
  dma_search.set("slipKndCd", scwin.slipKndCd);
  dma_search.set("apprvReqNo", scwin.apprvReqNo);
  dma_search.set("fromClsCd", "20");
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  grdFileList.setNoResultMessageVisible(true);
  let rowCnt = ds_fileList.getRowCount();
  for (let i = 0; i < ds_fileList.getRowCount(); i++) {
    ds_fileList.setCellData(i, "STORED_FILE_NM", ds_fileList.getCellData(i, "fileName"));
    ds_fileList.setCellData(i, "FILE_STORED_PATH", ds_fileList.getCellData(i, "filePath"));
    ds_fileList.setCellData(i, "FILE_SIZE", ds_fileList.getCellData(i, "fileSize"));
    ds_fileList.setCellData(i, "fileSize", $c.num.formatByte($p, ds_fileList.getCellData(i, "fileSize")));

    //파일이름은 처리
    ds_fileList.setCellData(i, "ORIGIN_FILE_NM", ds_fileList.getCellData(i, "filePath"));

    //삭제 시 필요한 값(hiddenKey에 보냄)
    let prmrNo = ds_fileList.getCellData(i, "prmrNo");
    let fromClsCd = ds_fileList.getCellData(i, "fromClsCd");
    let fixedAsetNo = ds_fileList.getCellData(i, "fixedAsetNo");
    let fixedAsetHistClsCd = ds_fileList.getCellData(i, "fixedAsetHistClsCd");
    let slipNo = ds_fileList.getCellData(i, "slipNo");
    let fixedAsetPrmrNo = ds_fileList.getCellData(i, "fixedAsetPrmrNo");
    let slipKndCd = ds_fileList.getCellData(i, "slipKndCd");
    ds_fileList.setCellData(i, "hiddenKey", prmrNo + "||" + fromClsCd + "||" + fixedAsetNo + "||" + fixedAsetHistClsCd + "||" + slipNo + "||" + fixedAsetPrmrNo + "||" + slipKndCd);
  }
  ds_fileList.reform();
  totalRows.setValue(rowCnt);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 데이터셋 세팅
 * TOBE 사용안함
 */
scwin.f_createHeader = function () {
  // var SEARCH_HEADER = "prmrNo:STRING"
  //     + ",fromClsCd:STRING"
  //     + ",fixedAsetNo:STRING"
  //     + ",fixedAsetHistClsCd:STRING"
  //     + ",slipNo:STRING"
  //     + ",fixedAsetPrmrNo:STRING"
  //     ;
  // fileDeleteGDS.SetDataHeader(SEARCH_HEADER);

  // //증빙파일종류 
  // var EVID_HEADER = "evidClsCd:STRING"
  //     ;
  // ds_evidClsCd.SetDataHeader(EVID_HEADER);
  // ds_evidClsCd.AddRow();
  // ds_evidClsCd.getCellData(1, "evidClsCd") = "00";

  // lc_evidClsCd.setValue("00");
};

/**
 * ☆업로드 완료 시
 * onFileUploadDone(isSuccess) : 파일 업로드 완료 시 발생하는 이벤트 함수
 */
scwin.uploadComplete = function (isSuccess) {
  // console.log("uploadComplete 파일업로드 완료시 isSuccess : "+isSuccess);
  if (isSuccess) {
    scwin.f_saveFile();
  }
};

/**
 * 파일저장
 */
scwin.f_saveFile = function () {
  // tr_create.Parameters = "fixedAsetNo=<%=fixedAsetNo%>,fixedAsetHistClsCd=<%=fixedAsetHistClsCd%>,slipNo=<%=slipNo%>,slipKndCd=<%=slipKndCd%>,apprvReqNo=<%=apprvReqNo%>";
  // tr_create.post();

  //증빙파일종류
  dma_search.set("evidClsCd", udc_fielUpload.getType());

  //업로드 된 파일정보 save.do 저장 
  ds_fileUploadGDS.removeAll();
  let fileList = udc_fielUpload.getData();
  for (let idx in fileList) {
    let status = fileList[idx].status;
    if (status == "Completed") {
      let row = ds_fileUploadGDS.insertRow();
      ds_fileUploadGDS.setRowJSON(row, fileList[idx], true);
      let fileName = fileList[idx].fileName;
      let filePath = fileList[idx].filePath;
      let fileSize = fileList[idx].fileSize;
      if ($c.gus.cfIsNull($p, fileName)) {
        ds_fileUploadGDS.setCellData(row, "fileName", fileList[idx].ORIGIN_FILE_NM);
      }
      if ($c.gus.cfIsNull($p, filePath)) {
        ds_fileUploadGDS.setCellData(row, "filePath", fileList[idx].FILE_STORED_PATH + fileList[idx].STORED_FILE_NM);
      }
      if ($c.gus.cfIsNull($p, fileSize)) {
        ds_fileUploadGDS.setCellData(row, "fileSize", fileList[idx].FILE_SIZE);
      }
    }
  }
  sbm_save.userData1 = "noError";
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    udc_fielUpload.setData([]);
    udc_fielUpload.setType("00");
    $c.gus.cfAlertMsg($p, "업로드가 완료 되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 파일 업로드
 * TOBE : UDC 저장버튼
 */
scwin.fileSubmit = async function () {
  //증빙파일종류 선택하지 않으면 업로드 불가
  if (udc_fielUpload.getType() == "00") {
    await $c.win.alert($p, "증빙파일종류를 선택하세요");
    return;
  }

  //승인여부가 완료이면 업로드 불가
  if (scwin.fixedAsetApprvYn == "1") {
    await $c.win.alert($p, "승인여부가 승인상태이면 파일첨부가 불가합니다.");
    return;
  }
  if (!(await $c.win.confirm($p, "전표번호:" + scwin.slipNo + "에 <BR><BR>파일을 업로드 하시겠습니까?"))) {
    return;
  }
  //var formObj = document.frm;
  //cfUploadFile(formObj, fileUploadGDS, "uploadComplete");
  udc_fielUpload.startFileUpload();
};

/**
 * 파일 삭제
 */
scwin.fileDelete = async function () {
  //    if(document.all.checkFile == null || document.all.checkFile == undefined){
  //       $c.win.alert("삭제 할 파일이 없습니다.");
  //       return;
  //    }
  //    var checkboxFile = document.all.checkFile;
  //    //업로드파일이 하나일때
  //    if(checkboxFile.length == undefined){
  //        if(!checkboxFile.checked){
  //           $c.win.alert("삭제 할 파일을 선택해야 합니다.");
  //           return;
  //        }

  //        if(cfConfirmMsg("선택하신 파일을 정말로 삭제하시겠습니까?")){
  //            fileDeleteGDS.ClearData();
  //            var delVal = checkboxFile.value.split("|");
  //            fileDeleteGDS.AddRow();
  //            fileDeleteGDS.getCellData(fileDeleteGDS.RowPosition,"prmrNo") = delVal[0]; 
  //            fileDeleteGDS.getCellData(fileDeleteGDS.RowPosition,"fromClsCd") = delVal[1]; 
  //            fileDeleteGDS.getCellData(fileDeleteGDS.RowPosition,"fixedAsetNo") = delVal[2]; 
  //            fileDeleteGDS.getCellData(fileDeleteGDS.RowPosition,"fixedAsetHistClsCd") = delVal[3]; 
  //            fileDeleteGDS.getCellData(fileDeleteGDS.RowPosition,"slipNo") = delVal[4]; 
  //            fileDeleteGDS.UseChangeInfo = "false";

  //            //dataSetDebug(fileDeleteGDS, true);
  //            tr_delete.post();
  //        }

  //    }else{ //업로드파일이 여러개 일때
  //        var checkedCnt = 0;
  //        for(var i=0; i<checkboxFile.length ;i++){
  //           if(checkboxFile[i].checked){
  //             checkedCnt += 1;
  //           }
  //        }

  //        if(checkedCnt==0){
  //           $c.win.alert("선택된 파일이 없습니다.");
  //           return;
  //        }

  //        if(cfConfirmMsg("선택하신 파일을 정말로 삭제하시겠습니까?")){
  //            var cbCnt = checkboxFile.length;
  //            fileDeleteGDS.ClearData();
  //            for(var i=0; i<cbCnt ;i++){
  //               if(checkboxFile[i].checked){
  //                   var delVal = checkboxFile[i].value.split("|");
  //                   fileDeleteGDS.AddRow();
  //                   fileDeleteGDS.NameValue(fileDeleteGDS.RowPosition,"prmrNo") = delVal[0];
  //                   fileDeleteGDS.NameValue(fileDeleteGDS.RowPosition,"fromClsCd") = delVal[1]; 
  //                   fileDeleteGDS.NameValue(fileDeleteGDS.RowPosition,"fixedAsetNo") = delVal[2]; 
  //                   fileDeleteGDS.NameValue(fileDeleteGDS.RowPosition,"fixedAsetHistClsCd") = delVal[3];  
  //                   fileDeleteGDS.NameValue(fileDeleteGDS.RowPosition,"slipNo") = delVal[4]; 
  //               }
  //            }
  //            fileDeleteGDS.UseChangeInfo = "false";
  //            tr_delete.post();
  //        }
  //    }

  // if(!await udc_fielUpload.isModified()) {
  if (ds_fileList.getRowCount() < 1) {
    await $c.win.alert($p, "삭제 할 파일이 없습니다.");
    return;
  }

  //UDC에서 값 넘겨 받기
  ds_fileDeleteGDS.removeAll();
  // let fileList = udc_fielUpload.getData();
  let fileList = ds_fileList.getAllJSON();
  for (let idx in fileList) {
    let chk = fileList[idx].chk;
    if (chk == "1") {
      let row = ds_fileDeleteGDS.insertRow();
      ds_fileDeleteGDS.setRowJSON(row, fileList[idx], true);
      let hiddenKey = fileList[idx].hiddenKey;
      let delVal = hiddenKey.split("||");
      ds_fileDeleteGDS.setCellData(row, "prmrNo", delVal[0]);
      ds_fileDeleteGDS.setCellData(row, "fromClsCd", delVal[1]);
      ds_fileDeleteGDS.setCellData(row, "fixedAsetNo", delVal[2]);
      ds_fileDeleteGDS.setCellData(row, "fixedAsetHistClsCd", delVal[3]);
      ds_fileDeleteGDS.setCellData(row, "slipNo", delVal[4]);
      ds_fileDeleteGDS.setCellData(row, "fixedAsetPrmrNo", delVal[5]);
      ds_fileDeleteGDS.setCellData(row, "slipKndCd", delVal[6]);
      ds_fileDeleteGDS.setCellData(row, "fileName", fileList[idx].STORED_FILE_NM);
      ds_fileDeleteGDS.setCellData(row, "filePath", fileList[idx].FILE_STORED_PATH);
      ds_fileDeleteGDS.setCellData(row, "fileSize", fileList[idx].FILE_SIZE);
      //ds_fileDeleteGDS.setCellData(row, "fixedAsetApprvYn" , "0");
    }
  }
  var nRow = ds_fileDeleteGDS.getMatchedIndex("chk", "1");
  if (nRow.length < 1) {
    await $c.win.alert($p, "삭제 할 파일을 선택해야 합니다.");
    return;
  }
  if (await $c.win.confirm($p, "선택하신 파일을 정말로 삭제하시겠습니까")) {
    sbm_delete.userData1 = "noError";
    $c.sbm.execute($p, sbm_delete);
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    udc_fielUpload.setData([]);
    udc_fielUpload.undoFileUpload();
    udc_fielUpload.setType("00");
    $c.gus.cfAlertMsg($p, "삭제가 완료 되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 저장버튼 클릭 시(그리드 상태에 따라 등록, 삭제 로직 구분)
 * TODO : ASIS는 삭제 버튼이 있음
 */
scwin.save = async function () {
  let fileList = udc_fielUpload.getData();
  let iCnt = 0;
  let dCnt = 0;
  for (let idx in fileList) {
    let rowStatus = fileList[idx].rowStatus;
    switch (rowStatus) {
      case "C":
        iCnt++;
        break;
      case "D":
        dCnt++;
        break;
      default:
        break;
    }
  }
  //등록, 삭제가 둘다 있는 경우
  if (iCnt > 0 && dCnt > 0) {
    await $c.win.alert($p, "신규등록과 삭제를 같이 할 수 없습니다.");
    return;
  } else {
    if (iCnt > 0) {
      scwin.fileSubmit();
    } else if (dCnt > 0) {
      scwin.fileDelete();
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["등록할 파일"]);
      return;
    }
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
* 그리드 셀 클릭 이벤트
*/
scwin.grdFileList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "fileName") {
    $c.gus.cfGetFileURL($p, ds_fileList.getCellData(rowIndex, "fileName"), ds_fileList.getCellData(rowIndex, "filePath"));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'file-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부예정 List',style:'',tagname:'h3'}}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{'ev:onFileUploadDone':'scwin.uploadComplete',fileGrpSeq:'',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',id:'udc_fielUpload',maxFileCount:'10',maxFileSize:'536870912',saveFn:'scwin.fileSubmit',style:'',subDir:'FI/fixedaset/evidAttachFile/',totalFileSize:'2009715200',fileTypeYn:'Y'}}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부완료 List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_fileList',enterKeyMove:'editRight',focusMode:'cell',id:'grdFileList',keepDefaultColumnWidth:'true',rowStatusWidth:'20',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.grdFileList_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',style:'',id:'chkAll',value:'삭제',displayMode:'label',fixColumnWidth:'true',sortable:'false',sortLabel:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'전표번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류',width:'140'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column18',value:'증빙파일종류',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column13',inputType:'text',value:'파일명',width:'250'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'column11',inputType:'text',value:'파일크기',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',readOnly:'true',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',readOnly:'true',textAlign:'left',width:'140'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'evidClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileName',inputType:'link',mandatory:'true',readOnly:'true',textAlign:'left',width:'250',value:'',class:'linktype'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'fileSize',inputType:'text',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.fileDelete',id:'btn_fileDelete',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일삭제'}]}]}]}]}]}]}]}]}]}]}]})