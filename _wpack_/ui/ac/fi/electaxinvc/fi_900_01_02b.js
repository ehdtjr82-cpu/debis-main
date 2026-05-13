/*amd /ui/ac/fi/electaxinvc/fi_900_01_02b.xml 77136 5a1dd8547df326456367feb66dd0db871661d0359b64fedd5e179e448e997db7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_history',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'apprvCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawId',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userDeptNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modRsn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addCrn',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repYn',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawDeptCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvNm',name:'name27',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:ondataload':'scwin.ds_out_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'seq',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawDeptNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawId',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'거래처 담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userDeptNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modRsn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addCrn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name15',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawDeptCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvNm',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condHistory'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seq',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fileList',repeatNode:'map',saveRemovedData:'false',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'prmrNo',name:'구분번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fromClsCd',name:'출처구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fileName',name:'파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'filePath',name:'파일경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fileSize',name:'FILE크기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetNo',name:'고정자산번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetHistClsCd',name:'고정자산이력구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'DEBIS전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipKndCd',name:'전표종류코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipKndNm',name:'전표종류명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmkregId',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtmmodId',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetPrmrNo',name:'자산증빙구분번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd',name:'증빙구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsNm',name:'증빙구분명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'receptYn',name:'영수여부(1:예,0:아니오)'}},{T:1,N:'w2:column',A:{dataType:'text',defaultValue:'0',id:'chk',ignoreStatus:'true',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'FILE_STORED_PATH',name:'파일저장경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'STORED_FILE_NM',name:'저장파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ORIGIN_FILE_NM',name:'원본파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'FILE_EXPLAIN',name:'파일설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'FILE_SIZE',name:'파일크기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'status',name:'파일전송상태'}},{T:1,N:'w2:column',A:{id:'hiddenKey',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_file',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileId',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fileUploadGDS',repeatNode:'map',saveRemovedData:'false',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'prmrNo',name:'구분번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fromClsCd',name:'출처구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fileName',name:'파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'filePath',name:'파일경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fileSize',name:'FILE크기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetNo',name:'고정자산번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetHistClsCd',name:'고정자산이력구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'DEBIS전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipKndCd',name:'전표종류코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'apprvReqNo',name:'결재요청번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetPrmrNo',name:'자산증빙구분번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd',name:'증빙구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:column',A:{dataType:'text',defaultValue:'0',id:'chk',ignoreStatus:'true',name:'선택'}},{T:1,N:'w2:column',A:{dataType:'text',id:'FILE_STORED_PATH',name:'파일저장경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'STORED_FILE_NM',name:'저장파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ORIGIN_FILE_NM',name:'원본파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'FILE_EXPLAIN',name:'파일설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'FILE_SIZE',name:'파일크기'}},{T:1,N:'w2:column',A:{dataType:'text',id:'status',name:'파일전송상태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hiddenKey',name:'숨겨진값'}},{T:1,N:'w2:column',A:{id:'seq',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileId',name:'name24',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_fileDeleteGDS',repeatNode:'map',saveRemovedData:'false',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileId',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_clntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_seq'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'seq',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.electaxinvc.SaveElecTaxinvcClntInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admitReq',action:'/ac.fi.electaxinvc.SaveElecTaxinvcClntInfoAdmitReqCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_admitReq_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admit',action:'/ac.fi.electaxinvc.SaveElecTaxinvcClntInfoAdmitCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.electaxinvc.RetreiveElecTaxinvcClntInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_history',action:'/ac.fi.electaxinvc.RetreiveElecTaxinvcClntInfoHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condHistory","key":"IN_DS1"},{"id":"ds_history","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_history","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_history_submit','ev:submitdone':'scwin.sbm_history_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_empNo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_empNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_empNo_submitdone','ev:submiterror':'scwin.sbm_empNo_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAttachFile',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_file","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_file","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveAttachFile_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fileCreate',action:'/ac.fi.electaxinvc.SaveElecTaxinvcClntInfoAttachFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_fileUploadGDS","key":"IN_DS1"},{"id":"dma_clntNo","key":"clntNo"},{"id":"dma_seq","key":"seq"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fileCreate_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_fileDelete',action:'/ac.fi.electaxinvc.DeleteElecTaxinvcClntInfoAttachFileCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_fileDeleteGDS","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_fileDelete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.chkAcctDeptCd = scwin.login.acctDeptCd;
scwin.vEmpNo = scwin.login.empNo;
scwin.isSubCompany = false;
scwin.isRetrieve = false;
scwin.btnMode = "N";
scwin.argObject;
scwin.isFirst = true;
scwin.clntNo;
scwin.seq;

// hidden 컴포넌트
scwin.txtCoClsCd;
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  udc_clntNo2.hide("");
  udc_srchAcctDeptCd.hide("");
  udc_empInfo2.hide("");
  const codeOptions = [{
    grpCd: "FI068",
    compID: "acb_apprvCd,gr_out:apprvCd,gr_history:apprvCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // scwin.f_createHeader();
  scwin.f_setCompanyInfo();
  scwin.f_getEmpNo(); //승인버튼 권한 제어

  $c.gus.cfDisableObjects($p, [btn_bAdd, btn_bCancel, btn_bSav, btn_bMod, btn_bReq, ed_clntNm, ed_crnNm, ed_empNm]);
  scwin.argObject = $c.data.getParameter($p);
  scwin.flag = $c.data.getParameter($p, "flag");
};
scwin.ondataload = function () {
  // 팝업으로 열린 경우 사업자번호/사업자명 세팅
};
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// DataSet Header 정의                                                                                                                                                                                                                                                                     
//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// function f_createHeader() {    
//     // 조회조건
//     var SEARCH_HEADER = "clntNo:STRING"
//                     + ",crn:STRING"
//                     + ",apprvCd:STRING"
//                     + ",empNo:STRING"
//                     + ",userId:STRING"
//                     + ",coCd:STRING(3)"
//                     + ",coClsCd:STRING(1)" 
//                     ;

//     ds_search.SetDataHeader(SEARCH_HEADER);
//     ds_search.AddRow(); 

//     SEARCH_HEADER = "clntNo:STRING"
//                     + ",seq:DECIMAL"
//                     ;

//     ds_condHistory.SetDataHeader(SEARCH_HEADER);
//     ds_condHistory.AddRow(); 
// } 

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (row) {
  //ds_search.nameValue(1,"clntNo") = ed_clntNo.value;
  //ds_search.nameValue(1,"crn") = ed_crn.value;
  // scwin.isRetrieve = true;

  dma_search.set("apprvCd", acb_apprvCd.getValue());
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_retrieve);
  scwin.isRetrieve = false;
};

//-------------------------------------------------------------------------
// History 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveHistory = function () {
  //ds_search.nameValue(1,"clntNo") = ed_clntNo.value;
  //ds_search.nameValue(1,"crn") = ed_crn.value;
  if ($c.gus.cfIsNull($p, ds_out.getRowPosition())) {
    dma_condHistory.set("clntNo", ds_out.getCellData(0, "clntNo"));
    dma_condHistory.set("seq", ds_out.getCellData(0, "seq"));
    $c.sbm.execute($p, sbm_history);
  } else {
    if (dma_condHistory.get("clntNo") == ds_out.getCellData(ds_out.getRowPosition(), "clntNo") && dma_condHistory.get("seq") == ds_out.getCellData(ds_out.getRowPosition(), "seq")) {
      return;
    } else {
      dma_condHistory.set("clntNo", ds_out.getCellData(ds_out.getRowPosition(), "clntNo"));
      dma_condHistory.set("seq", ds_out.getCellData(ds_out.getRowPosition(), "seq"));
      $c.sbm.execute($p, sbm_history);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_out.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }

  //if(btnMode != "M" && btnMode != "C"){
  //   alert("저장을 하실려면 먼저 수정버튼을 클릭하십시오.");
  //   return;
  //}

  var chkCnt = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "1") {
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    await $c.gus.cfAlertMsg($p, "저장할 데이터를 선택하세요.");
    return;
  }
  if (await $c.gus.cfValidate($p, [gr_out])) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      //jsSave( "jsRegist" );
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_chkSave = async function () {
  var retVal = false;
  var chkCnt = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "1") {
      chkCnt++;
      /*
      if(ds_out.NameValue(i,"apprvCd")=="1"){
          
          if(ds_out.NameValue(i,"apprvCd")!="0"){
              alert("승인요청상태인 데이터는 수정 할 수 없습니다.");
              ds_out.rowposition = i;
              retVal = true;
              break;
          }
          
      }
      */
    }
  }
  if (chkCnt == 0) {
    await $c.gus.cfAlertMsg($p, "저장할 데이터를 선택하세요.");
    retVal = true;
  }
  return retVal;
};

//-------------------------------------------------------------------------
// 승인요청
//-------------------------------------------------------------------------
scwin.f_AdmitReq = async function () {
  if (ds_out.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }
  if (await scwin.f_chkAdmitReq()) {
    return;
  }
  if (await $c.gus.cfValidate($p, [gr_out])) {
    if ((await $c.win.confirm($p, "승인요청을 하시겠습니까?")) == true) {
      $c.sbm.execute($p, sbm_admitReq);
    }
  }
};
scwin.f_chkAdmitReq = async function () {
  var retVal = false;
  var chkCnt = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == 1) {
      chkCnt++;
      if (ds_out.getCellData(i, "apprvCd") != "0") {
        //0:작성중
        await $c.gus.cfAlertMsg($p, "승인요청 할 수 없는 대상이 포함되어있습니다.");
        ds_out.setRowPosition(i);
        retVal = true;
        break;
      }
    }
  }
  if (chkCnt == 0) {
    await $c.gus.cfAlertMsg($p, "승인요청 할 데이터를 선택하세요.");
    retVal = true;
  }
  return retVal;
};

//-------------------------------------------------------------------------
// 승인
//-------------------------------------------------------------------------
scwin.f_Admit = async function () {
  if (ds_out.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }
  if (await scwin.f_chkAdmit()) {
    return;
  }
  if (await $c.gus.cfValidate($p, [gr_out])) {
    if ((await $c.win.confirm($p, "승인 하시겠습니까?\n\n승인하신 이메일은 바로 사용 할 수 있게 됩니다.")) == true) {
      for (var i = 0; i <= ds_out.getRowCount(); i++) {
        if (ds_out.getCellData(i, "chk") == 1) {
          ds_out.setCellData(i, "apprvNo", scwin.vEmpNo);
        }
      }
      $c.sbm.execute($p, sbm_admit);
    }
  }
};
scwin.f_chkAdmit = async function () {
  var retVal = false;
  var chkCnt = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == 1) {
      chkCnt++;
      if (ds_out.getCellData(i, "apprvCd") != "1") {
        //1:승인요청
        await $c.gus.cfAlertMsg($p, "승인 할 수 없는 대상이 포함되어있습니다.");
        ds_out.setRowPosition(i);
        retVal = true;
        break;
      }
    }
  }
  if (chkCnt == 0) {
    await $c.gus.cfAlertMsg($p, "승인 할 데이터를 선택하세요.");
    retVal = true;
  }
  return retVal;
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_out == 0) {
    return;
  }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    var options = {
      fileName: "전자세금계산서거래처정보관리",
      sheetName: "전자세금계산서거래처정보관리"
    };
    $c.data.downloadGridViewExcel($p, gr_out, options);
  }
};
scwin.f_Excel2 = async function () {
  if (ds_history == 0) {
    return;
  }
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    var options = {
      fileName: "전자세금계산서거래처정보관리이력",
      sheetName: "전자세금계산서거래처정보관리이력"
    };
    $c.data.downloadGridViewExcel($p, gr_history, options);
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (row, colid, sFlag) {
  var rtnList = new Array();
  switch (colid) {
    case '1':
      // 거래처
      var param = ",,," + ed_coCd.getValue();
      rtnList = udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), sFlag, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_clntNo,txt_clntNm,rtnList);	
      break;
    case '2':
      // 사업자번호
      var param = '';
      rtnList = udc_crnInfo.cfCommonPopUp(scwin.udc_crnInfo_callBackFunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), sFlag, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      // 담당자
      var param = '';
      rtnList = udc_empInfo.cfCommonPopUp(scwin.udc_empInfo_callBackFunc, ed_empNo.getValue().trim(), ed_empNm.getValue(), sFlag, null, null, null, null, param, null, null, null, null);
      break;
    case 'clntNo':
      // 거래처
      var param = ",,," + ed_coCd.getValue();
      rtnList = udc_clntNo2.cfCommonPopUp(scwin.udc_clntNo2_callBackFunc, ds_out.getCellData(row, "clntNo"), ds_out.getCellData(row, "clntNm"), 'F', null, null, null, null, param, "410", null, null, null);
      break;
    case 'acctDeptCd':
      // 귀속부서
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      rtnList = udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ds_out.getCellData(row, "acctDeptCd"), ds_out.getCellData(row, "acctDeptNm"), 'F', null, null, null, null, param, null, null, null, null);
      break;
    case 'empNo':
      // 작성자사번
      rtnList = udc_empInfo2.cfCommonPopUp(scwin.udc_empInfo2_callBackFunc, ds_out.getCellData(row, "empNo"), ds_out.getCellData(row, "empNm"), 'F', null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_clntNo, ed_clntNm, rtnList);
};
scwin.udc_crnInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_crn, ed_crnNm, rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_crn.setValue(rtnList[0]); //거래처코드
    ed_crnNm.setValue(rtnList[1]); //거래처명명
    //ed_crn.hidVal = rtnList[0];  // 히든값
  } else {
    ed_crn.setValue(""); //거래처코드
    ed_crnNm.setValue(""); //거래처명명
    //ed_crn.hidVal = ""  // 히든값
  }
};
scwin.udc_empInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_empNo, ed_empNm, rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_empNo.setValue(rtnList[0]); //사번
    ed_empNm.setValue(rtnList[1]); //사원명
  } else {
    ed_empNo.setValue(""); //사번
    ed_empNm.setValue(""); //사원명
  }
};
scwin.udc_clntNo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_out.setCellData(ds_out.getRowPosition(), "clntNo", rtnList[0]); //계정코드
    ds_out.setCellData(ds_out.getRowPosition(), "clntNm", rtnList[1]); //계정명
  } else {
    ds_out.setCellData(ds_out.getRowPosition(), "clntNo", ""); //계정코드
    ds_out.setCellData(ds_out.getRowPosition(), "clntNm", ""); //계정명
  }
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_out.setCellData(ds_out.getRowPosition(), "acctDeptCd", rtnList[0]); //계정코드
    ds_out.setCellData(ds_out.getRowPosition(), "acctDeptNm", rtnList[1]); //계정명
  } else {
    ds_out.setCellData(ds_out.getRowPosition(), "acctDeptCd", ""); //계정코드
    ds_out.setCellData(ds_out.getRowPosition(), "acctDeptNm", ""); //계정명
  }
};
scwin.udc_empInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_out.setCellData(ds_out.getRowPosition(), "empNo", rtnList[0]); //계정코드
    ds_out.setCellData(ds_out.getRowPosition(), "empNm", rtnList[1]); //계정명
  } else {
    ds_out.setCellData(ds_out.getRowPosition(), "empNo", ""); //계정코드
    ds_out.setCellData(ds_out.getRowPosition(), "empNm", ""); //계정명
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------

scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    return;
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp('', flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_crn, ed_crnNm, ed_clntNo, ed_clntNm, acb_apprvCd, ed_empNo, ed_empNm]);
};
scwin.f_Mod = function () {
  scwin.btnMode = "M";
  // gr_out.setDisabled("column", "clntNo",true);
  gr_out.setReadOnly("column", "clntNo", true);

  // gr_out.setDisabled("column", "empNo",false);
  gr_out.setReadOnly("column", "empNo", false);
  gr_out.setReadOnly("column", "userNm", false);
  gr_out.setReadOnly("column", "userDeptNm", false);
  gr_out.setReadOnly("column", "email", false);
  gr_out.setReadOnly("column", "modRsn", false);
  gr_out.setReadOnly("column", "addCrn", false);
  if (scwin.chkAcctDeptCd == "00009") {
    $c.gus.cfDisableObjects($p, [btn_bAdd, btn_bMod, btn_bReq, btn_bAdmit]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_bAdd, btn_bMod, btn_bReq]);
  }
  scwin.f_bAdmitControl("N");
  $c.gus.cfEnableObjects($p, [btn_bSav]);
};
scwin.f_Cancel = function () {
  scwin.btnMode = "N";
  ds_out.undoAll();
  if (ds_out.getRowStatus(ds_out.getTotalRow() - 1) == "C") {
    ds_out.removeRow(ds_out.getTotalRow() - 1);
  }
  // gr_out.setDisabled("column", "clntNo",true);
  gr_out.setReadOnly("column", "clntNo", true);

  // gr_out.setDisabled("column", "empNo",true);
  gr_out.setReadOnly("column", "empNo", true);
  gr_out.setReadOnly("column", "userNm", true);
  gr_out.setReadOnly("column", "userDeptNm", true);
  gr_out.setReadOnly("column", "email", true);
  gr_out.setReadOnly("column", "modRsn", true);
  gr_out.setReadOnly("column", "addCrn", true);
  if (scwin.chkAcctDeptCd == "00009") {
    $c.gus.cfEnableObjects($p, [btn_bAdd, btn_bMod, btn_bCancel, btn_bReq, btn_bAdmit]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_bAdd, btn_bMod, btn_bCancel, btn_bReq]);
  }
  scwin.f_bAdmitControl("Y");
  $c.gus.cfDisableObjects($p, [btn_bSav]);
};
scwin.f_setInit = function () {
  scwin.btnMode = "N";
  gr_out.setReadOnly("column", "clntNo", false);
  gr_out.setReadOnly("column", "empNo", false);
  gr_out.setReadOnly("column", "userNm", false);
  gr_out.setReadOnly("column", "userDeptNm", false);
  gr_out.setReadOnly("column", "email", false);
  gr_out.setReadOnly("column", "modRsn", false);
  gr_out.setReadOnly("column", "addCrn", false);
  if (scwin.chkAcctDeptCd == "00009") {
    $c.gus.cfEnableObjects($p, [btn_bAdd, btn_bMod, btn_bCancel, btn_bReq, btn_bAdmit]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_bAdd, btn_bMod, btn_bCancel, btn_bReq]);
  }
  scwin.f_bAdmitControl("Y");
  $c.gus.cfDisableObjects($p, [btn_bSav]);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  /*
  if (!cfValidate([gr_out])) {
      return;
  }
  */
  var row = ds_out.insertRow();
  gr_out.setFocusedCell(row, 0, true);
  if (ds_out.getRowStatus(row) == "C") {
    fileGroup.hide("");
    textBoxGroup.show("");
  } else {
    textBoxGroup.hide("");
    fileGroup.show("");
  }

  // gr_out.setDisabled("cell", row, "clntNo", false);
  ds_out.setCellData(row, "seq", 0);
  scwin.btnMode = "C";
  // gr_out.setDisabled("cell", row,"clntNo",false);
  gr_out.setReadOnly("column", "clntNo", false);

  // gr_out.setDisabled("column", "empNo",false);
  gr_out.setReadOnly("column", "empNo", false);
  gr_out.setReadOnly("column", "userNm", false);
  gr_out.setReadOnly("column", "userDeptNm", false);
  gr_out.setReadOnly("column", "email", false);
  gr_out.setReadOnly("column", "modRsn", false);
  gr_out.setReadOnly("column", "addCrn", false);
  if (scwin.chkAcctDeptCd == "00009") {
    $c.gus.cfDisableObjects($p, [btn_bAdd, btn_bMod, btn_bReq, btn_bAdmit]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_bAdd, btn_bMod, btn_bReq]);
  }
  scwin.f_bAdmitControl("N");
  $c.gus.cfEnableObjects($p, [btn_bSav]);
};
scwin.jsSave = function (callBackMethodName) {
  // var formObj = document.uploadForm ;
  // if (!cfValidate([formObj.titleId,formObj.contentsId])) return ; 
  // cfShowWaitMsg();      
  // cfUploadFile( formObj , fileUploadGDS, callBackMethodName );   
};
scwin.f_setFileUpDownFrame = function (clntNo, seq) {
  // var url = "/ac/fi/electaxinvc/fi_900_01_02p.jsp"
  //         +"?clntNo="+clntNo
  //         +"&seq="+seq
  //         ;
  // fileUpDownFrame.location.href = url;

  udc_fileUpload.setData([]);
  sbm_retrieveAttachFile.action = "/ac.fi.electaxinvc.RetreiveElecTaxinvcClntInfoAttachFileListCMD.do?clntNo=" + clntNo + "&seq=" + seq;
  $c.sbm.execute($p, sbm_retrieveAttachFile);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  var rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    ed_coCd.options.hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isFirst == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isFirst = false;
  }
  if (scwin.argObject != "" && scwin.argObject != undefined) {
    var crn = $c.data.getParameter($p, "crn");
    var busiNm = $c.data.getParameter($p, "busiNm");
    if (scwin.flag == "Y") {
      ed_crn.setValue(crn);
      ed_crnNm.setValue(busiNm);
      scwin.f_Retrieve();
      scwin.flag = "N";
    }
  }
};

//공통코드 조회
scwin.f_getEmpNo = function () {
  var grp_cd = "FI632";
  var pCode = scwin.vEmpNo;

  // SELECT 절 
  var param1 = " CD      as COL1 " + ",CD_NM 	as COL2 " + ",'' 		as COL3 " + ",'' 		as COL4 " + ",'' 		as COL5 " + ",'' 		as COL6 " + ",''      as COL7 " + ",''      as COL8 " + ",''      as COL9 " + ",''      as COL10";

  // 대상테이블 	
  var param2 = " TB_ZZ002 ";

  // 조건절
  var param3 = " AND GRP_CD = '" + grp_cd + "'" + " AND USE_YN = '1' " + " AND CD = '" + pCode + "' ";
  var param4 = "CD";
  sbm_empNo.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  $c.sbm.execute($p, sbm_empNo);
};

//특정 사용자에 따른 승인 버튼 권한 제어 추가 (공통코드 관리) 2021.08.18
scwin.f_bAdmitControl = function (_btnYn) {
  if (ds_empNo.getRowCount() > 0) {
    if (_btnYn == "Y") {
      $c.gus.cfEnableObjects($p, [btn_bAdmit]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_bAdmit]);
    }
  }
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('', '2', 'F');
};
scwin.udc_crnInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_crn, ed_crnNm, '2');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('', '1', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '1');
};
scwin.udc_empInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('', '3', 'F');
};
scwin.udc_empInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_empNo, ed_empNm, '3');
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    scwin.f_RetrieveHistory();
    ed_totalRow.setValue(ds_out.getTotalRow());
    if (scwin.chkAcctDeptCd == '00009') {
      // cfEnableObjects([bAdd, bCancel, bMod, bReq<%if("00009".equals(login.getAcctDeptCd())){ %>,bAdmit<%}%>]);
      $c.gus.cfEnableObjects($p, [btn_bAdd, btn_bCancel, btn_bMod, btn_bReq, btn_bAdmit]);
    } else {
      if (ds_empNo.getTotalRow() > 0) {
        $c.gus.cfEnableObjects($p, [btn_bAdd, btn_bCancel, btn_bMod, btn_bReq, btn_bAdmit]);
      }
    }
    scwin.f_setInit();
  }
};
scwin.ds_out_ondataload = async function () {
  var rowPositon = 0;
  if (!$c.gus.cfIsNull($p, ds_out.getRowPosition())) {
    rowPositon = ds_out.getRowPosition();
  }
  if (ds_out.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  } else {
    ds_out.setRowPosition(rowPositon);
    scwin.clntNo = ds_out.getCellData(rowPositon, "clntNo");
    scwin.seq = ds_out.getCellData(rowPositon, "seq");
    ed_vatLabel.setValue(scwin.clntNo);
    ed_vatLabel2.setValue(scwin.seq);
    scwin.f_setFileUpDownFrame(scwin.clntNo, scwin.seq);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
    scwin.f_setInit();
  }
};
scwin.sbm_admitReq_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
    scwin.f_setInit();
  }
};
scwin.sbm_admit_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
  scwin.f_setInit();
};

// SysStatus: 0Normal  1Insert 2Delete 3Update4Logical
// UserStatus:1 Insert 2 Delete

scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (!scwin.isRetrieve) {
    if (ds_out.getRowStatus(rowIndex) == "C") {
      fileGroup.hide("");
      textBoxGroup.show("");
    } else {
      textBoxGroup.hide("");
      fileGroup.show("");
    }
    if (scwin.btnMode == "C" || scwin.btnMode == "M") {
      if (ds_out.getRowStatus(rowIndex) == "C") {
        // let retTextImage= {inputType : "textImage", options : {imageClickFunction:"scwin.gr_out_ontextimageclick(rowIndex, columnIndex)"} };
        // gr_out.setCellInputType(rowIndex, "clntNo", retTextImage);
        // gr_out.setDisabled("cell", rowIndex, "clntNo", false);
        gr_out.setReadOnly("column", "clntNo", false);

        // gr_out.setDisabled("column", "empNo",false);
        gr_out.setReadOnly("column", "empNo", false);
        gr_out.setReadOnly("column", "userNm", false);
        gr_out.setReadOnly("column", "userDeptNm", false);
        gr_out.setReadOnly("column", "email", false);
        gr_out.setReadOnly("column", "modRsn", false);
        gr_out.setReadOnly("column", "addCrn", false);
      } else if (ds_out.getRowStatus(rowIndex) == "U" || ds_out.getRowStatus(rowIndex) == "R") {
        // gr_out.setDisabled("column", "clntNo",true);
        gr_out.setReadOnly("column", "clntNo", true);

        // gr_out.setDisabled("column", "empNo",false);
        gr_out.setReadOnly("column", "empNo", false);
        gr_out.setReadOnly("column", "userNm", false);
        gr_out.setReadOnly("column", "userDeptNm", false);
        gr_out.setReadOnly("column", "email", false);
        gr_out.setReadOnly("column", "modRsn", false);
        gr_out.setReadOnly("column", "addCrn", false);
      }
    } else {
      // gr_out.setDisabled("column", "clntNo",true);
      gr_out.setReadOnly("column", "clntNo", true);

      // gr_out.setDisabled("column", "empNo",true);
      gr_out.setReadOnly("column", "empNo", true);
      gr_out.setReadOnly("column", "userNm", true);
      gr_out.setReadOnly("column", "userDeptNm", true);
      gr_out.setReadOnly("column", "email", true);
      gr_out.setReadOnly("column", "modRsn", true);
      gr_out.setReadOnly("column", "addCrn", true);
    }
    scwin.f_RetrieveHistory();
    scwin.clntNo = ds_out.getCellData(rowIndex, "clntNo");
    scwin.seq = ds_out.getCellData(rowIndex, "seq");
    ed_vatLabel.setValue(scwin.clntNo);
    ed_vatLabel2.setValue(scwin.seq);
    scwin.f_setFileUpDownFrame(scwin.clntNo, scwin.seq);
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_bAdd_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_bMod_onclick = function (e) {
  scwin.f_Mod();
};
scwin.btn_bCancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_bReq_onclick = function (e) {
  scwin.f_AdmitReq();
};
scwin.btn_bAdmit_onclick = function (e) {
  scwin.f_Admit();
};
scwin.btn_bSav_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_out_ontextimageclick = function (rowIndex, columnIndex) {
  var colId = gr_out.getColumnID(columnIndex);
  if (colId == "clntNo") {
    scwin.f_openPopUp(rowIndex, "clntNo", "F");
  } else if (colId == "acctDeptCd") {
    scwin.f_openPopUp(rowIndex, "acctDeptCd", "F");
  } else if (colId == "empNo") {
    scwin.f_openPopUp(rowIndex, "empNo", "F");
  }
};
scwin.sbm_retrieveAttachFile_submitdone = function (e) {
  udc_fileUpload.getChildren()[0].scope_obj.scope.scwin.onpageload();
  ds_fileList.removeAll();
  var row = ds_file.getTotalRow();
  for (let i = 0; i < row; i++) {
    ds_fileList.insertRow();
    ds_fileList.setCellData(i, "chk", "0"); // 체크
    // ds_fileList.setCellData(i, "FILE_STORED_PATH", "FI/electaxinvc/attaches/" + scwin.vatNo + "/" + ds_file2.getCellData(i, "filePath"));  // 파일저장경로

    var attachFilePath = ds_file.getCellData(i, "filePath");
    var fileStoredPath = attachFilePath.substr(0, attachFilePath.lastIndexOf('/') + 1);
    var storedFileNm = attachFilePath.substr(attachFilePath.lastIndexOf('/') + 1);
    ds_fileList.setCellData(i, "FILE_STORED_PATH", fileStoredPath); // 파일저장경로
    ds_fileList.setCellData(i, "STORED_FILE_NM", storedFileNm);

    // ds_fileListTemp.setCellData(i, "STORED_FILE_NM",  filePathTemp );
    ds_fileList.setCellData(i, "ORIGIN_FILE_NM", ds_file.getCellData(i, "fileName")); // 원본파일명
    ds_fileList.setCellData(i, "FILE_EXPLAIN", ""); // 파일설명
    ds_fileList.setCellData(i, "FILE_SIZE", ds_file.getCellData(i, "fileSize")); // 파일사이즈
    // ds_fileList.setCellData(i, "slipKndNm", ds_file.getCellData(i, "fileClsCd"));  // 전표구분명
    // ds_fileList.setCellData(i, "evidClsNm", ds_file.getCellData(i, "fileClsNm"));  // 증빙구분명
    // ds_fileList.setCellData(i, "rowStatus", ds_file.getCellData(i, "rowStatus"));  // rowStatus
    // var hiddenKey =  ds_file.getCellData(i, "vatNo") + "||" + ds_file.getCellData(i, "fileSeq") + "||" + ds_file.getCellData(i, "filePath") 
    ds_fileList.setCellData(i, "hiddenKey", ds_file.getCellData(i, "fileSeq"));
  }
  udc_fileUpload.setData(ds_fileList.getAllJSON());
};

/**
 * 저장버튼 클릭 시(그리드 상태에 따라 등록, 삭제 로직 구분)
 * TODO : ASIS는 삭제 버튼이 있음
 */
scwin.save = async function () {
  let fileList = udc_fileUpload.getData();
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

/**
 * 파일 업로드
 * TOBE : UDC 저장버튼
 */
scwin.fileSubmit = async function () {
  // KYU_NEW : 2026-05-04 - 거래처정보를 조회한 뒤에 파일 업로드 동작 가능, asis - 조회 이전에 파일업로드 부분이 표시되지 않음
  if (ds_out.getTotalRow() < 1) {
    await $c.gus.cfAlertMsg($p, "첨부파일을 등록/삭제하려면 거래처정보를 조회하여야 합니다");
    return;
  }
  udc_fileUpload.setSubDir("FI/electaxinvc/evid/" + WebSquare.date.getCurrentServerDate().substr(0, 6) + "/");
  if (!(await $c.win.confirm($p, "거래처번호:" + scwin.clntNo + "순번:" + scwin.seq + "\n\n파일을 업로드 하시겠습니까?"))) {
    return;
  }
  udc_fileUpload.startFileUpload();
};
scwin.uploadComplete = function (isSuccess) {
  //alert( "업로드 완료 ");
  //alert( fileUploadGDS.ExportData(1, fileUploadGDS.CountRow, true ) ) ;
  //alert( fileUploadGDS.text);
  scwin.f_saveFile();
};
scwin.f_saveFile = function () {
  // tr_create.Parameters = "vatNo=<%=vatNo%>,fileClsCd="+document.all.lc_file_cls_cd.BindColVal;
  // tr_create.post();
  dma_clntNo.set("clntNo", scwin.clntNo);
  dma_seq.set("seq", scwin.seq);
  ds_fileUploadGDS.removeAll();
  let fileList = udc_fileUpload.getData();
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
      ds_fileUploadGDS.setCellData(row, "fileId", "DYNAMIC_FILE_1");
    }
  }
  $c.sbm.execute($p, sbm_fileCreate);
};
scwin.fileDelete = async function () {
  if (!(await udc_fileUpload.isModified())) {
    await $c.win.alert($p, "삭제 할 파일이 없습니다.");
    return;
  }

  //UDC에서 값 넘겨 받기
  ds_fileDeleteGDS.removeAll();
  let fileList = udc_fileUpload.getData();
  for (let idx in fileList) {
    let chk = fileList[idx].chk;
    let hiddenKey = fileList[idx].hiddenKey;
    if (chk == "1") {
      let row = ds_fileDeleteGDS.insertRow();
      ds_fileDeleteGDS.setRowJSON(row, fileList[idx], true);
      let filePath = fileList[idx].filePath;
      if ($c.gus.cfIsNull($p, filePath)) {
        ds_fileDeleteGDS.setCellData(row, "filePath", fileList[idx].FILE_STORED_PATH);
      }
      ds_fileDeleteGDS.setCellData(row, "clntNo", scwin.clntNo);
      ds_fileDeleteGDS.setCellData(row, "seq", scwin.seq);
      ds_fileDeleteGDS.setCellData(row, "fileSeq", hiddenKey);

      //ds_fileDeleteGDS.setCellData(row, "fixedAsetApprvYn" , "0");
    }
  }

  // var nRow = ds_fileDeleteGDS.getMatchedIndex("chk", "1");
  // if (nRow.length < 1) {
  //     await $c.win.alert("선택된 파일이 없습니다.");
  //     return;
  // }

  if (await $c.win.confirm($p, "선택하신 파일을 정말로 삭제하시겠습니까")) {
    $c.sbm.execute($p, sbm_fileDelete);
  }
};
scwin.sbm_fileCreate_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, "업로드가 완료 되었습니다.");
    scwin.f_Retrieve();
  } else {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.sbm_fileDelete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, "삭제가 완료 되었습니다.");
    scwin.f_Retrieve();
  } else {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.sbm_history_submitdone = function (e) {
  ed_totalRow2.setValue(ds_history.getTotalRow());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',name:'coNm',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',maxlengthName:'65',objTypeName:'data','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_crnNm',onloadCallbackFunc:'',popupID:'popupMgntClntNo',popupTitle:'사업자번호조회,사업자번호,사업자명',selectID:'retrieveCrnInfo',style:'',code:'crn',refDataCollection:'dma_search',btnId:'btn_crn',id:'udc_crnInfo',popupGridHeadTitle:'사업자번호,사업자명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',validExpName:'사업자명:no:maxLength=70&notAllowed',maxlengthCode:'13',maxlengthName:'70',UpperFlagCode:'1',allowCharCode:'0-9',mandatoryCode:'false',objTypeCode:'data',mandatoryName:'false','ev:onclickEvent':'scwin.udc_crnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_crnInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'dma_search',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList',validTitle:'거래처','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo2',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm2',id:'udc_clntNo2',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'',code:'',mandatoryCode:'true',selectID:'retrieveClntList',validTitle:'거래처'}},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'',codeId:'ed_acctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',nameId:'ed_acctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',style:'',codeId:'ed_empNo2',objTypeCode:'Data',mandatoryCode:'false',maxlengthCode:'8',allowCharCode:'0-9',nameId:'ed_empNm2',objTypeName:'Data',UpperFlagCode:'1',mandatoryName:'false',selectID:'retrieveEmpInfo',id:'udc_empInfo2',popupGridHiddenColumn:'4,5,6,7,8,9,10',popupGridHeadTitle:'사번,사원명,부서명',popupTitle:'사원,사원코드,사원명',refDataCollection:'',code:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_apprvCd',ref:'',style:'width:80px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동원담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',code:'empNo',codeId:'ed_empNo','ev:onblurCodeEvent':'scwin.udc_empInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_empInfo_onclickEvent',id:'udc_empInfo',mandatoryCode:'false',mandatoryName:'false',maxlengthCode:'8',nameId:'ed_empNm',objTypeCode:'Data',objTypeName:'Data',popupGridHeadTitle:'사번,사원명,부서명',popupGridHiddenColumn:'4,5,6,7,8,9,10',popupID:'popupMgntClntNo',popupTitle:'사원,사원코드,사원명',refDataCollection:'dma_search',selectID:'retrieveEmpInfo',style:'',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_out',gridDownFn:'scwin.f_Excel',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_out_oncellclick','ev:ontextimageclick':'scwin.gr_out_ontextimageclick',rowStatusVisible:'true',fixedColumn:'1',fixedColumnNoMove:'true',gridName:'거래처정보'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'선택',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'승인</br>상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'거래처코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'작성자</br>부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'작성자코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'작성자</br>성명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'거래처</br>담당자명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'거래처</br>담당자부서',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column56',value:'이메일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'165',inputType:'text',style:'',id:'column54',value:'수정사유',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'종사업자번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'종사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column40',value:'작성자부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'동원</br>담당자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'동원</br>담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'승인자코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'승인자성명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvCd',inputType:'autoComplete',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'120',editModeEventIcon:'onclick',editModeEvent:'onclick',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawId',inputType:'text',style:'',value:'',width:'120',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'userDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'email',value:'',displayMode:'label',textAlign:'left',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'165',inputType:'text',style:'',id:'modRsn',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'addCrn',value:'',displayMode:'label',readOnly:'true',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col14',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true',editModeEventIcon:'onclick',editModeEvent:'onclick',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',hidden:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'drawDeptCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'empNo',value:'',displayMode:'label',editModeEventIcon:'onclick',editModeEvent:'onclick',readOnly:'true',maxLength:'8'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'empNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'apprvNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'apprvNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'textBoxGroup',label:'먼저 등록을 하셔야 파일업로드를 하실 수 있습니다. ',style:'display:none'}},{T:1,N:'xf:group',A:{id:'fileGroup',class:'file-wrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',escape:'false',id:'',label:'첨부파일',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처번호 : ',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'ed_vatLabel',label:'',class:''}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'순번 : ',class:''}},{T:1,N:'w2:textbox',A:{style:'',id:'ed_vatLabel2',label:'',class:''}}]}]}]},{T:1,N:'w2:udc_fileMultiUpload',A:{receiptYn:'N',maxFileCount:'500',maxFileSize:'52428800',saveFn:'scwin.save',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf','ev:onFileUploadDone':'scwin.uploadComplete',explainYn:'N',style:'',totalFileSize:'2009715200',id:'udc_fileUpload',class:'',typeYn:'N',subDir:'/fi/electaxinvc/email/'}}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 300px;'},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bAdd',style:'',type:'button','ev:onclick':'scwin.btn_bAdd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_bMod',style:'',type:'button','ev:onclick':'scwin.btn_bMod_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bCancel',style:'',type:'button','ev:onclick':'scwin.btn_bCancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_bReq',style:'',type:'button','ev:onclick':'scwin.btn_bReq_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인요청'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bAdmit',style:'display: none;',type:'button','ev:onclick':'scwin.btn_bAdmit_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_bSav',style:'',type:'button','ev:onclick':'scwin.btn_bSav_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'승인이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_history',gridDownFn:'scwin.f_Excel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_history',id:'gr_history',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'승인</br>상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래처</br>코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'작성자</br>부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'작성자</br>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'작성자</br>성명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'거래처</br>담당자명',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'거래처</br>담당자부서',width:'130',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'이메일',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'수정사유',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'종사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'소속지사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'소속지사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'대표이메일</br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'제외이메일</br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'seq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'수정</br>요자청ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'수정</br>요청자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column56',value:'작성자부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'동원</br>담당자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'동원</br>담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column78',value:'승인자코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'승인자성명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvCd',inputType:'autoComplete',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawId',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userDeptNm',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'email',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modRsn',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'addCrn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',hidden:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'repYn',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'exceptYn',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',hidden:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',dataType:'text',displayFormat:'####/##/## ##:##:##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drawDeptCd',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'empNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'empNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'apprvNo',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'apprvNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})