/*amd /ui/cm/bc/permitmgnt/zz_950_01_01b.xml 71154 aabf1b32189f1d9296a6eeb6be9a7c77a84b7d153cc1981e486d610a7f802060 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'관리부서 코드(귀속부서)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprTypeCd',name:'인허가종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprCd',name:'인허가명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprNo',name:'인허가관리번호',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'관리부서 코드(귀속부서)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprTypeCd',name:'인허가종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprCd',name:'인허가명코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_attach',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'apprNo',name:'인허가관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileSeq',name:'등록순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileDesc',name:'첨부파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileSiz',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFilePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_results'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprNo',name:'인허가관리번호',dataType:'number'}},{T:1,N:'w2:key',A:{id:'apprTypeCd',name:'인허가종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprTypeNm',name:'인허가종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprCd',name:'인허가명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprNm',name:'인허가명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprRegNo',name:'등록(허가)번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprMgntAgcy',name:'인허가관리청',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAgcyPicNm',name:'인허가관리담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntAgcyPicTel',name:'인허가관리담당자 연락처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltViol',name:'관련법규',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'purps',name:'용도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'관리부서(귀속부서코드)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'관리부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsNm',name:'회사구분명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asgNmCd',name:'부여명의코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asgNm',name:'기타-부여명의(부여명의코드가 기타일 경우에만 작성)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'firstAcqDt',name:'취득일(최초)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'renDt',name:'취득/갱신일(최종)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regStDt',name:'등록기간 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regEndDt',name:'등록기간 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'renYn',name:'갱신필요여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'renPsblStDt',name:'갱신가능 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'renPsblEndDt',name:'갱신가능 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picDeptCd',name:'담당자부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picDeptNm',name:'담당자부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picEmpNo',name:'담당자사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picEmpNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprRegDtm',name:'인허가 등록일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDeptCd',name:'승인자부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDeptNm',name:'승인자부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvEmpNo',name:'승인자사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvEmpNm',name:'승인자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprApprvDtm',name:'인허가 승인일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chgDesc',name:'갱신변경사유',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'apprGubun',name:'신규(N),변경(R),갱신(U) 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regSeq',name:'인허가승인 등록순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mailInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mailCntn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mailSubject',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_apprNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tb_DataSet1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code02',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code03',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name02',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name03',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.permitmgnt.RetrieveApprInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"dma_results","key":"OUT_DS1"},{"id":"ds_attach","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_results","key":"OUT_DS1"},{"id":"ds_attach","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve_onload',action:'/cm.bc.permitmgnt.RetrieveApprInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"dma_results","key":"OUT_DS1"},{"id":"ds_attach","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_results","key":"OUT_DS1"},{"id":"ds_attach","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_onload_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve2',action:'/cm.bc.permitmgnt.RetrieveApprInfo2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"dma_results","key":"OUT_DS1"},{"id":"ds_attach","key":"OUT_DS2"}]',target:'data:json,[{"id":"dma_results","key":"OUT_DS1"},{"id":"ds_attach","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.permitmgnt.SaveApprInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_results","key":"IN_DS1"},{"id":"ds_attach","key":"IN_DS2"},{"id":"ds_apprNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_apprNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_apprv',action:'/cm.bc.permitmgnt.SaveApprvYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_apprv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_sendMail',action:'/cm.bc.permitmgnt.SendMailApprCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_mailInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_delete',action:'/cm.bc.permitmgnt.DeleteApprvInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_sendMailTest',action:'/cm.bc.comnmgnt.mailmgnt.RetrieveScheduledMailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_mailInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo2',action:'',method:'get',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_tb_DataSet1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인허가 등록/승인
 * 메뉴경로 : 공통/총무업무/인허가 관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/permitmgnt/zz_950_01_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-04
 * 수정이력  :
 *    - 2025-11-04      정승혜    최초작성
 *    - 2026-02-10      정승혜    기타수정
 * 메모 : 
 * 회사구분:000 / 인허가종류:등록증 / 인허가명:보세운송업자 등록증 / 관리부서:운영기획 으로 조회시 데이터조회가능
 * 부모페이지 zz_950_01_02b
 * frm.disabled
 * 
 */
scwin.toDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.params = "";
scwin.apprNo = "";
scwin.coClsCd = "";
scwin.apprTypeCd = "";
scwin.apprCd = "";
scwin.acctDeptCd = "";
scwin.uploadFlag = false; // 첨부파일 변경 및 추가 여부 Flag

scwin.memJson = $c.data.getMemInfo($p);

// 파일 업로드 위치
// String systemPathKey =  DFWConstants.FILE_UPLOAD_SYSTEM_PATH ;
scwin.systemPathVal = "cm/bc/permitmgnt/";

//scwin.MSG_CM_ERR_002 = "변경된 사항이 없습니다."

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ590",
    compID: "lc_apprTypeCdS,lc_apprTypeCd"
  }, {
    grpCd: "ZZ593",
    compID: "lc_asgNmCd"
  }, {
    grpCd: "ZZ592",
    compID: "lc_bizDomCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  scwin.apprNo = scwin.params["apprNo"] == null ? "" : scwin.params["apprNo"];
  scwin.coClsCd = scwin.params["coClsCd"] == null ? "" : scwin.params["coClsCd"];
  scwin.apprTypeCd = scwin.params["apprTypeCd"] == null ? "" : scwin.params["apprTypeCd"];
  scwin.apprCd = scwin.params["apprCd"] == null ? "" : scwin.params["apprCd"];
  scwin.acctDeptCd = scwin.params["acctDeptCd"] == null ? "" : scwin.params["acctDeptCd"];
};
scwin.onUdcCompleted = function () {};
scwin.ondataload = function () {
  scwin.f_onLoad_done();
};

// f_OnLoad
scwin.f_onLoad_done = function () {
  scwin.f_createHeader();
  scwin.f_createHeader2();
  scwin.f_createHeader_forMail();
  scwin.f_createHeader_ForUpload();
  $c.gus.cfDisableObjects($p, [ed_apprNm]);
  if (scwin.apprNo != "") {
    dma_condition.set("coClsCd", scwin.coClsCd);
    dma_condition.set("apprTypeCd", scwin.apprTypeCd);
    dma_condition.set("apprCd", scwin.apprCd);
    dma_condition.set("acctDeptCd", scwin.acctDeptCd);
    dma_condition.set("apprNo", scwin.apprNo);
    scwin.f_Retrieve_onload();
  }
  //신규인 경우
  else {
    scwin.f_createNewHeader();
    scwin.f_createHeader();
    $c.gus.cfDisableObjects($p, [btn_update, btn_reset, btn_apprv, btn_delete]);

    //갱신필요 기본체크
    rd_renYn.setValue('1');
    //사용여부 기본체크
    rd_useYn.setValue('1');
    //부여명의를 기본적으로 사용못하도록 한다.
    $c.gus.cfDisableObjects($p, [ed_asgNm]);
    dma_results.set("apprGubun", "N");
  }
};

// f_OnLoad 에 있지만 f_Retrieve 후에 실행하기 위하여 별도 함수 생성
scwin.f_Retrieve_after = function () {
  //PK 수정불가
  $c.gus.cfEnableObj($p, ed_coCd, false);
  $c.gus.cfEnableObj($p, ed_coNm, false);
  $c.gus.cfEnableObj($p, ed_regDept, false);
  $c.gus.cfEnableObj($p, ed_regDeptNm, false);
  $c.gus.cfDisableObjects($p, [tbl_detailArea, btn_save, btn_apprv, btn_delete, btn_delRow, btn_cancelRow, btn_addRow]);
  gr_attachFile.setReadOnly("column", "attachFileDesc", true);

  //경영전략팀인 경우 승인, 삭제권한 오픈
  if (scwin.memJson.acctDeptCd == "00004") {
    $c.gus.cfEnableObjects($p, [btn_apprv]);
    if (dma_results.get("apprvDeptNm") == "") {
      //삭제권한은 신규작성 후 승인 전 단계에서만 가능(단 한번도 승인받지 않은 건)
      $c.gus.cfEnableObjects($p, [btn_delete]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_delete]);
    }
  } else {
    $c.gus.cfDisableObjects($p, [btn_apprv, btn_delete]);
  }

  //미승인 건은 갱신 불가
  if (dma_results.get("apprvDeptNm") == "") {
    $c.gus.cfDisableObjects($p, [btn_reset]);
  }
  $c.gus.cfDisableObjects($p, frm);
};

//-------------------------------------------------------------------------
// function name : f_createHeader
// function desc : Grid Header정보 Setting
//-------------------------------------------------------------------------

// 온로드 조회용
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

// 조회버튼용
scwin.f_createHeader2 = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};
scwin.f_createHeader_ForUpload = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};
scwin.f_createNewHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
  dma_results.set("picDeptCd", scwin.memJson.acctDeptCd);
  dma_results.set("picEmpNo", scwin.memJson.empNo);
  sp_picDeptNm.setValue(scwin.memJson.acctDeptNm);
  sp_picEmpNm.setValue(scwin.memJson.userNm);
  sp_apprRegDtm.setValue(scwin.toDate);
};
scwin.f_createHeader_forMail = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회(저장되어 있는 자료)
//-------------------------------------------------------------------------
scwin.f_Retrieve_onload = function () {
  $c.sbm.execute($p, sbm_tr_retrieve_onload);
};
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_tr_retrieve);
};
scwin.sbm_tr_retrieve_onload_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  dma_results.setJSON(e.responseJSON.OUT_DS1[0]);
  scwin.f_Retrieve_after();
};
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  sp_picDeptNm.setValue(e.responseJSON.OUT_DS1[0].picDeptNm);
  sp_picEmpNm.setValue(e.responseJSON.OUT_DS1[0].picEmpNm);
  sp_apprRegDtm.setValue(e.responseJSON.OUT_DS1[0].apprRegDtm);
  sp_apprvDeptNm.setValue(e.responseJSON.OUT_DS1[0].apprvDeptNm);
  sp_apprvEmpNm.setValue(e.responseJSON.OUT_DS1[0].apprvEmpNm);
  sp_apprApprvDtm.setValue(e.responseJSON.OUT_DS1[0].apprApprvDtm);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve2
// function desc : 조회조건으로 조회(저장되어 있는 자료)
//-------------------------------------------------------------------------
scwin.f_Retrieve2 = async function (e) {
  scwin.uploadFlag = false;
  dma_condition2.set("acctDeptCd", lc_regDept.getValue());
  if (ds_tb_DataSet1.getRowCount() == 1) {
    await $c.win.alert($p, "조회결과가 없습니다.");
    return false;
  }
  if (dma_condition2.get("coClsCd") == "") {
    await $c.win.alert($p, "회사구분을 선택해주시기 바랍니다.");
    ed_coCdS.focus();
    return false;
  }
  if (dma_condition2.get("apprTypeCd") == "") {
    await $c.win.alert($p, "인허가종류를 선택해주시기 바랍니다.");
    lc_apprTypeCdS.focus();
    return false;
  }
  if (dma_condition2.get("apprCd") == "") {
    await $c.win.alert($p, "인허가명을 선택해주시기 바랍니다.");
    ed_apprNmS.focus();
    return false;
  }
  if (dma_condition2.get("acctDeptCd") == "") {
    await $c.win.alert($p, "관리부서를 선택해주시기 바랍니다.");
    return false;
  }
  $c.sbm.execute($p, sbm_tr_retrieve2);
};
scwin.sbm_tr_retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  dma_results.setJSON(e.responseJSON.OUT_DS1[0]);
  $c.gus.cfEnableObj($p, ed_coCd, false);
  $c.gus.cfEnableObj($p, ed_coNm, false);
  $c.gus.cfEnableObj($p, ed_regDept, false);
  $c.gus.cfEnableObj($p, ed_regDeptNm, false);
  $c.gus.cfDisableObjects($p, [tbl_detailArea, btn_save, btn_apprv, btn_delete, btn_delRow, btn_cancelRow, btn_addRow]);
  gr_attachFile.setReadOnly("column", "attachFileDesc", true);
  $c.gus.cfEnableObjects($p, [btn_reset, btn_update]);

  //경영전략팀인 경우 승인, 삭제권한 오픈

  if (scwin.memJson.acctDeptCd == "00004") {
    $c.gus.cfEnableObjects($p, [btn_apprv]);
    if (dma_results.get("apprvDeptNm") == "") {
      //삭제권한은 신규작성 후 승인 전 단계에서만 가능(단 한번도 승인받지 않은 건)
      $c.gus.cfEnableObjects($p, [btn_delete]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_delete]);
    }
  } else {
    $c.gus.cfDisableObjects($p, [btn_apprv, btn_delete]);
  }

  //미승인 건은 갱신 불가
  if (dma_results.get("apprvDeptNm") == "") {
    $c.gus.cfDisableObjects($p, [btn_reset]);
  }
  totalRows.setValue(ds_attach.getRowCount());
  gr_attachFile.setFocusedCell(0, "attachFileSeq", false);
};

// 신규, 수정
scwin.f_Save = async function () {
  if (dma_results.get("coClsCd") == "") {
    await $c.win.alert($p, "저장시 필요한 회사구분의 값이 없습니다. \n 회사구분을 조회해서 입력하시기 바랍니다.");
    ed_coCd.focus();
    return false;
  }
  if (dma_results.get("apprTypeCd") == "") {
    await $c.win.alert($p, "인허가 종류를 선택해주시기 바랍니다.");
    lc_apprTypeCdS.focus();
    return false;
  }
  if (dma_results.get("apprCd") == "") {
    await $c.win.alert($p, "저장시 필요한 인허가명의 값이 없습니다. \n 인허가명을 조회해서 입력하시기 바랍니다.");
    ed_apprNm.focus();
    return false;
  }
  if (dma_results.get("acctDeptCd") == "") {
    await c.win.alert("관리부서를 선택해주시기 바랍니다.");
    ed_regDept.focus();
    return false;
  }
  if (dma_results.get("asgNmCd") == "") {
    await $c.win.alert($p, "부여명의를 선택해주시기 바랍니다.");
    lc_asgNmCd.focus();
    return false;
  }
  if (dma_results.get("asgNmCd") == "05" && dma_results.get("asgNm") == "") {
    await $c.win.alert($p, "부여명의를 기타로 선택하신 경우에는 내용을 입력해주시기 바랍니다.");
    ed_asgNm.focus();
    return false;
  }
  if (dma_results.get("bizDomCd") == "") {
    await $c.win.alert($p, "사업영역을 선택해주시기 바랍니다.");
    lc_bizDomCd.focus();
    return false;
  }
  if (dma_results.get("apprRegNo") == "") {
    await $c.win.alert($p, "등록(허가)번호를 작성해주시기 바랍니다.");
    ed_apprRegNo.focus();
    return false;
  }
  if (dma_results.get("apprMgntAgcy") == "") {
    await $c.win.alert($p, "인허가 관리청을 작성해주시기 바랍니다.");
    ed_apprMgntAgcy.focus();
    return false;
  }
  if (dma_results.get("chgDesc") == "") {
    await $c.win.alert($p, "갱신/변경 사유를 입력해주시기 바랍니다.");
    ed_chgDesc.focus();
    return false;
  }
  if (dma_results.get("renDt") == "") {
    await $c.win.alert($p, "취득/갱신일(최종)을 입력해주시기 바랍니다.");
    ed_renDt.focus();
    return false;
  }
  if (!(await $c.gus.cfIsAfterDate($p, dma_results.get("firstAcqDt"), dma_results.get("renDt")))) {
    await $c.win.alert($p, "취득/갱신일(최종)은 취득일(최초) 이후로 입력하여 주십시오.");
    return false;
  }
  if (dma_results.get("regStDt") == "") {
    await $c.win.alert($p, "등록(유효)기간 시작일자를 입력해주시기 바랍니다.");
    ed_regStDt.focus();
    return false;
  }
  if (dma_results.get("regEndDt") == "") {
    await $c.win.alert($p, "등록(유효)기간 종료일자를 입력해주시기 바랍니다.");
    ed_regEndDt.focus();
    return false;
  }
  if (!(await $c.gus.cfIsAfterDate($p, dma_results.get("regStDt"), dma_results.get("regEndDt")))) {
    await $c.win.alert($p, "등록(유효)기간의 종료일자를 시작일자 이후로 입력하여 주십시오.");
    return false;
  }
  if (dma_results.get("renYn") > 1) {
    await $c.win.alert($p, "갱신필요여부를 체크해주시기 바랍니다.");
    rd_renYn.focus();
    return false;
  }
  if (dma_results.get("renYn") == 1 && dma_results.get("renPsblStDt") == "") {
    await $c.win.alert($p, "갱신가능기간을 입력해주시기 바랍니다.");
    ed_renPsblStDt.focus();
    return false;
  }
  if (dma_results.get("renPsblStDt") != "" && dma_results.get("renPsblEndDt") == "") {
    await $c.win.alert($p, "갱신가능기간의 종료일자를 입력해주시기 바랍니다.");
    ed_renPsblEndDt.focus();
    return false;
  } else if (dma_results.get("renPsblStDt") == "" && dma_results.get("renPsblEndDt") != "") {
    await $c.win.alert($p, "갱신가능기간의 시작일자를 입력해주시기 바랍니다.");
    ed_renPsblStDt.focus();
    return false;
  } else if (dma_results.get("renPsblStDt") != "" && dma_results.get("renPsblEndDt") != "") {
    if (!(await $c.gus.cfIsAfterDate($p, dma_results.get("renPsblStDt"), dma_results.get("renPsblEndDt")))) {
      await c.win.alert("갱신가능기간의 종료일자를 시작일자 이후로 입력하여 주십시오.");
      return false;
    }
  }
  if (ds_attach.getRowCount() == 0) {
    await $c.win.alert($p, "첨부파일을 1건 이상 등록해주시기 바랍니다.");
    return false;
  }

  // 첨부파일 Grid 에 1건 이상의 Data가 존재하고 업로드 버튼을 클릭 안했을 때
  if (udc_fielUpload.getData().length > 0 && !scwin.uploadFlag) {
    await $c.win.alert($p, "첨부파일 변경 및 추가시 업로드 버튼을 클릭하여 주십시오.");
    scwin.uploadFlag = false;
    return false;
  }
  let confirm = await $c.gus.cfAlertMsg($p, "저장하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_tr_save);
    // scwin.f_Apprv();
  }
};
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.uploadFlag = false;
  dma_results.get("apprvEmpNo");
  scwin.f_createHeader();
  dma_condition.set("coClsCd", ds_apprNo.getCellData(0, "coClsCd"));
  dma_condition.set("apprTypeCd", ds_apprNo.getCellData(0, "apprTypeCd"));
  dma_condition.set("apprCd", ds_apprNo.getCellData(0, "apprCd"));
  dma_condition.set("acctDeptCd", ds_apprNo.getCellData(0, "acctDeptCd"));
  dma_condition.set("apprNo", ds_apprNo.getCellData(0, "apprNo"));
  scwin.f_Retrieve();
  if (scwin.memJson.acctDeptCd == "00004") {
    $c.gus.cfEnableObjects($p, [btn_apprv]);
    if (dma_results.get("apprvDeptNm") == "") {
      $c.gus.cfEnableObjects($p, [btn_delete]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_delete]);
    }
  } else {
    $c.gus.cfDisableObjects($p, [btn_apprv, btn_delete]);
  }

  //미승인 건은 갱신 불가
  if (dma_results.get("apprvDeptNm") == "") {
    $c.gus.cfDisableObjects($p, [btn_reset]);
    $c.gus.cfEnableObjects($p, [btn_update]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_update, btn_reset]);
  }
  $c.gus.cfDisableObjects($p, [tbl_detailArea, btn_save, btn_delRow, btn_cancelRow, btn_addRow]);
  gr_attachFile.setReadOnly("column", "attachFileDesc", true);
  scwin.f_Apprv();
};

// 승인 f_Save 에서 호출
scwin.f_Apprv = function () {
  //APPRV_YN =0(미승인)//=1(승인) 

  if (dma_results.get("apprApprvDtm") != "") {
    $c.gus.cfAlertMsg($p, "이미 승인된 건입니다.");
  } else {
    dma_results.set("apprvDeptCd", scwin.memJson.acctDeptCd);
    dma_results.set("apprvEmpNo", scwin.memJson.empNo);
    dma_results.set("apprvDeptNm", "");
    dma_results.set("apprvEmpNm", "");
    $c.sbm.execute($p, sbm_tr_apprv);
  }
};
scwin.sbm_tr_apprv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 승인되었습니다.");
  scwin.f_createHeader();
  dma_condition.set("coClsCd", dma_results.get("coClsCd"));
  dma_condition.set("apprTypeCd", dma_results.get("apprTypeCd"));
  dma_condition.set("apprCd", dma_results.get("apprCd"));
  dma_condition.set("acctDeptCd", dma_results.get("acctDeptCd"));
  dma_condition.set("apprNo", dma_results.get("apprNo"));
  scwin.f_Retrieve();

  //경영전략
  if (scwin.memJson.acctDeptCd == "00004") {
    $c.gus.cfEnableObjects($p, [btn_update, btn_reset, btn_apprv]);
    //삭제권한은 신규작성 후 승인 전 단계에서만 가능(단 한번도 승인받지 않은 건)
    $c.gus.cfDisableObjects($p, [tbl_detailArea, btn_init, btn_save, btn_delete, btn_delRow, btn_cancelRow, btn_addRow]);
    gr_attachFile.setReadOnly("column", "attachFileDesc", true);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

// 변경
scwin.f_Update = function () {
  $c.gus.cfEnableObjects($p, [tbl_detailArea, btn_save, btn_delRow, btn_cancelRow, btn_addRow, frm]);
  gr_attachFile.setReadOnly("column", "attachFileDesc", false);
  $c.gus.cfDisableObjects($p, [btn_apprv, btn_delete, ed_coCd, ed_coNm, btn_company, lc_apprTypeCd, ed_apprNm, apprNm_popup, ed_regDept, ed_regDeptNm, clntNo_popup]);
  dma_results.set("picDeptCd", scwin.memJson.acctDeptCd);
  dma_results.set("picEmpNo", scwin.memJson.empNo);
  sp_picDeptNm.setValue(scwin.memJson.acctDeptNm);
  sp_picEmpNm.setValue(scwin.memJson.userNm);
  sp_apprRegDtm.setValue(scwin.toDate);
  sp_apprvDeptNm.setValue("");
  sp_apprvEmpNm.setValue("");
  sp_apprApprvDtm.setValue("");
  dma_results.set("apprGubun", "U");
  dma_results.set("chgDesc", "");
  ed_chgDesc.setValue("");
};

// 갱신
scwin.f_Reset = function () {
  scwin.f_createHeader_ForUpload();
  $c.gus.cfEnableObjects($p, [tbl_detailArea, btn_save, btn_delRow, btn_cancelRow, btn_addRow, frm]);
  gr_attachFile.setReadOnly("column", "attachFileDesc", false);
  $c.gus.cfDisableObjects($p, [btn_apprv, btn_delete, ed_coCd, ed_coNm, btn_company, lc_apprTypeCd, ed_apprNm, apprNm_popup, ed_regDept, ed_regDeptNm, clntNo_popup]);
  dma_results.set("picDeptCd", scwin.memJson.acctDeptCd);
  dma_results.set("picEmpNo", scwin.memJson.empNo);
  sp_picDeptNm.setValue(scwin.memJson.acctDeptNm);
  sp_picEmpNm.setValue(scwin.memJson.userNm);
  sp_apprRegDtm.setValue(scwin.toDate);
  sp_apprvDeptNm.setValue("");
  sp_apprvEmpNm.setValue("");
  sp_apprApprvDtm.setValue("");
  dma_results.set("apprGubun", "R");
  dma_results.set("chgDesc", "");
  ed_chgDesc.setValue("");
};

//-------------------------------------------------------------------------
// 파일을 업로드한다.
//-------------------------------------------------------------------------
scwin.f_Submit = function () {
  //udc
};

//-------------------------------------------------------------------------
// function name : uploadComplete
// function desc : Upload File complete 
//-------------------------------------------------------------------------
scwin.uploadComplete = function () {
  //udc
};

//-------------------------------------------------------------------------
// function name : f_delrow
// function desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.f_delrow = function () {
  let nowRow = ds_attach.getRowPosition();
  let sts = ds_attach.getRowStatus(gr_attachFile.getFocusedRowIndex());
  if (ds_attach.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다");
  } else {
    if (nowRow != null) {
      if (sts == "C") {
        ds_attach.removeRow(nowRow);
        gr_attachFile.setFocusedCell(nowRow - 1, 0, false);
      } else if (sts == "D") {
        //아무동작 하지 않음
      } else {
        ds_attach.deleteRow(nowRow);
        //gr_attachFile.setRowDisabled(nowRow, true);
      }
    }
  }
  $c.gus.cfEnableBtnOnly($p, [btn_cancelRow, btn_delRow]);
};

//-------------------------------------------------------------------------
// 가우스의 Grid에 표현된 Multi 레코드를 삭제
//-------------------------------------------------------------------------
scwin.gf_MultiDeleteRow = function () {};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_Clear = function () {
  $c.gus.cfInitObjects($p, tbl_detailArea, null);
  sp_picDeptNm.setValue("");
  sp_picEmpNm.setValue("");
  sp_apprRegDtm.setValue("");
  sp_apprvDeptNm.setValue("");
  sp_apprvEmpNm.setValue("");
  sp_apprApprvDtm.setValue("");

  //필수키 입력가능
  $c.gus.cfEnableObj($p, ed_coCd, true);
  $c.gus.cfEnableObj($p, ed_coNm, true);
  $c.gus.cfEnableObj($p, ed_regDept, true);
  $c.gus.cfEnableObj($p, ed_regDeptNm, true);
  scwin.f_createNewHeader();
  scwin.f_createHeader_ForUpload();
  scwin.f_createHeader();
  dma_results.set("apprGubun", "N");
  $c.gus.cfEnableObjects($p, [tbl_detailArea, btn_init, btn_save, gr_attachFile, btn_delRow, btn_cancelRow, btn_addRow, frm]);
  $c.gus.cfDisableObjects($p, [btn_update, btn_reset, btn_apprv, btn_delete]);
};

// 인허가정보 내의 인허가명 팝업	
scwin.f_openApprPopUp = async function () {
  let apprGubun = lc_apprTypeCd.getValue();
  let apprNm = ed_apprNm.getValue();
  let rtnList = new Array();
  let data = {};
  data.apprGubun = apprGubun;
  data.apprTypeCd = apprGubun;
  data.apprNm = apprNm;
  data.closeTF = "T";
  let opt = {};
  opt.id = "smpPop";
  opt.title = "title";
  opt.width = "750";
  opt.height = "700";
  opt.popupName = "인허가명 조회";
  opt.modal = true;
  if (apprGubun == "") {
    $c.gus.cfAlertMsg($p, "인허가 종류를 먼저 선택해주시기 바랍니다.");
    return false;
  } else {
    rtnList = await $c.win.openPopup($p, "/ui/cm/bc/permitmgnt/zz_950_01_01p.xml", opt, data);
    if (rtnList != null) {
      ed_apprNm.setValue(rtnList[1]);
      dma_results.set("apprCd", rtnList[0]);
    }
  }
};

// 조회용 인허가명 팝업	
scwin.f_openApprPopUpS = async function () {
  let apprGubun = lc_apprTypeCdS.getValue();
  let apprNm = ed_apprNmS.getValue();
  let rtnList = new Array();
  let data = {};
  data.apprGubun = apprGubun;
  data.apprTypeCd = apprGubun;
  data.apprNm = apprNm;
  data.closeTF = "T";
  let opt = {};
  opt.id = "smpPops";
  opt.width = "750";
  opt.height = "700";
  opt.popupName = "인허가명 조회";
  opt.modal = true;
  if (apprGubun == "") {
    await $c.gus.cfAlertMsg($p, "인허가 종류를 먼저 선택해주시기 바랍니다.");
    return false;
  } else {}
  rtnList = await $c.win.openPopup($p, "/ui/cm/bc/permitmgnt/zz_950_01_01p.xml", opt, data);
  if (rtnList != null) {
    dma_condition2.set("apprCd", rtnList[0]);
    ed_apprNmS.setValue(rtnList[1]);
    if (ed_coCdS.getValue() != "") {
      scwin.f_getRegDeptCombo();
    }
  } else {
    dma_condition2.set("apprCd", "");
    ed_apprNmS.getValue("");
  }
};
scwin.lc_apprTypeCdS_onchange = function (info) {
  //인허가종류가 바뀔때 인허가명조회 팝업
  dma_condition2.set("apprCd", "");
  ed_apprNmS.setValue("");
  scwin.f_openApprPopUpS();
};
scwin.f_SendMail = function () {
  //호출되는곳 없음
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //거래처
      let condition = "";
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode, pName, pClose, '5', null, '150,170', null, condition, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      //회사코드
      udc_companyInfo2.cfCommonPopUp(scwin.udc_companyInfo2_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
      break;
    case 5:
      //회사코드 조회조건용
      udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCdS.setValue(rtnList[0]); // 코드
    ed_coNmS.setValue(rtnList[5]); // 회사명
    ed_coCdS.options.hidVal = rtnList[0];
  } else {
    ed_coCdS.setValue("");
    ed_coNmS.setValue("");
    ed_coCdS.options.hidVal = "";
  }

  // 관리부서 load
  if (lc_apprTypeCdS.getValue() != "" && ed_apprNmS.getValue() != "" && ed_coCdS.getValue() != "") {
    scwin.f_getRegDeptCombo();
  }
};
scwin.udc_companyInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    ed_coCd.options.hidVal = rtnList[0];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regDept, ed_regDeptNm);
};

//-------------------------------------------------------------------------
// 관리부서명을 조건에 따라 바꾼다.
//-------------------------------------------------------------------------
scwin.f_getRegDeptCombo = function () {
  let condition = "";
  let tmpstr = "strVal=" + lc_apprTypeCdS.getValue();
  tmpstr += "&strVal2=" + ed_coCdS.getValue();
  tmpstr += "&strVal3=" + dma_condition2.get("apprCd");
  condition = "?cmd=retriveDeptCboCmm&" + tmpstr + "&intVal=";
  sbm_co_ds_combo2.action = "/ps.co.RetrievePsCboCmmCMD.do" + condition;
  $c.sbm.execute($p, sbm_co_ds_combo2);
};
scwin.sbm_co_ds_combo2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_tb_DataSet1.sort("name", 0);
  lc_regDept.changeChooseOption("", "선택");
  lc_regDept.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, portCondtionPart, null);
};
scwin.f_Delete = async function () {
  let confirm = await $c.gus.cfAlertMsg($p, "삭제하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_tr_delete);
  }
};
scwin.sbm_tr_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 삭제되었습니다.");
  scwin.f_Clear();
};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// Dataset DEBUG                                                                                                                                                                                                                                                                                                          
//-------------------------------------------------------------------------     
scwin.dataSetDebug = function () {
  //호출되는곳 없음
};
scwin.f_test = function () {
  //호출되는곳 없음
};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// udc                                                                                                                                                                                                                                                                                                        
//-------------------------------------------------------------------------    

// 회사구분1
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_coCdS, ed_coNmS, 5);
  if (lc_apprTypeCdS.getValue() != "" && ed_apprNmS.getValue() != "" && ed_coCdS.getValue() != "") {
    scwin.f_getRegDeptCombo();
  }
};

// 회사구분1
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_coCdS.getValue(), ed_coNmS.getValue(), 'F', 'F');
  // 관리부서 load
  if (lc_apprTypeCdS.getValue() != "" && ed_apprNmS.getValue() != "" && ed_coCdS.getValue() != "") {
    scwin.f_getRegDeptCombo();
  }
};

// 회사구분1
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_apprNmS, ed_coCdS, 5, false);
};

// 회사구분2
scwin.udc_companyInfo2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_coCd, ed_coNm, 4);
};

// 회사구분2
scwin.udc_companyInfo2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_coCd.getValue(), ed_coNm.getValue(), 'T', 'T');
};

// 회사구분2
scwin.udc_companyInfo2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_coNm, ed_coCd, 4, false);
};

// 관리부서
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_regDept.getValue(), ed_regDeptNm.getValue(), 'F', 'F');
};

// 관리부서
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regDept, ed_regDeptNm, 1);
  //scwin.f_openCommonPopUp(1, ed_regDept.getValue(), ed_regDeptNm.getValue(),'F','F');
};

// 관리부서
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_regDeptNm, ed_regDept, 1, false);
};

/* 갱신필요여부 변경 시 */
scwin.rd_renYn_onchange = function (info) {};

/* 부여명의 '기타' 입력시  */
scwin.lc_asgNmCd_onchange = function (info) {
  if (lc_asgNmCd.getValue() == "05") {
    $c.gus.cfEnableObjects($p, [ed_asgNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_asgNm]);
    ed_asgNm.setValue("");
  }
};
scwin.saveFile = async function () {
  scwin.uploadFlag = true;
  udc_fielUpload.setSubDir(scwin.systemPathVal);
  udc_fielUpload.startFileUpload();
  scwin.saveDone();
};
scwin.saveDone = function () {
  //$c.win.alert("파일이 저장되었습니다.");
};

// uploadComplete
scwin.udc_fielUpload_onFileUploadDone = function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  ;
  let strNxtSeq = 0;
  let data = udc_fielUpload.getData();
  for (let i = 0; i < data.length; i++) {
    let insRow = ds_attach.insertRow();
    ds_attach.setCellData(insRow, "attachFileSeq", strNxtSeq);
    ds_attach.setCellData(insRow, "attachFileNm", data[i].ORIGIN_FILE_NM); //파일명        

    ds_attach.setCellData(insRow, "attachFileDesc", ""); //파일설명
    ds_attach.setCellData(insRow, "attachFileSiz", data[i].FILE_SIZE); //파일SIZE
    ds_attach.setCellData(insRow, "attachFilePath", data[i].FILE_STORED_PATH + data[i].STORED_FILE_NM); //파일경로
    ds_attach.setCellData(insRow, "regId", scwin.memJson.empNo);
    if (dma_results.get("apprNo") != "") {
      ds_attach.setCellData(insRow, "apprNo", dma_results.get("apprNo"));
    }
  }
  gr_attachFile.setFocusedCell(0, "attachFileNm", false);
  udc_fielUpload.setGridClear();
};
scwin.gr_attachFile_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "attachFileNm") {
    $c.gus.cfGetFileURL($p, ds_attach.getCellData(rowIndex, "attachFileNm"), ds_attach.getCellData(rowIndex, "attachFilePath"));
  }
};
scwin.f_cancelRow = function () {
  let nowRow = ds_attach.getRowPosition();
  let sts = ds_attach.getRowStatus(gr_attachFile.getFocusedRowIndex());
  if (nowRow != null) {
    if (sts == "C") {
      ds_attach.removeRow(nowRow);
      gr_attachFile.setFocusedCell(nowRow - 1, 0, false);
    } else {
      ds_attach.undoRow(nowRow);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCdS',validTitle:'회사구분',popupTitle:'',nameId:'ed_coNmS',style:'',objTypeCode:'data',objTypeName:'data',code:'coClsCd',name:'coNm',refDataCollection:'dma_condition2',id:'udc_companyInfo','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'3',allowCharCode:'0-9',btnId:'btn_companyS','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'인허가 종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprTypeCdS',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_condition2.apprTypeCd',chooseOptionLabel:'선택','ev:onchange':'scwin.lc_apprTypeCdS_onchange',visibleRowNum:'25',mandatory:'true',title:'인허가종류'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'인허가명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w200',id:'ed_apprNmS',placeholder:'',style:'',ref:'',mandatory:'true',title:'인허가명',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'apprNm_popupS',style:'',type:'button','ev:onclick':'scwin.f_openApprPopUpS'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관리부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regDept',style:'width: 150px;',submenuSize:'auto',ref:'data:dma_condition2.acctDeptCd',chooseOptionLabel:'선택',visibleRowNum:'25',title:'관리부서'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_tb_DataSet1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve2',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'tbl_detailArea'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'인허가 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_detailArea1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회사구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'3',objTypeCode:'data',refDataCollection:'dma_results',popupID:'',code:'coClsCd',UpperFlagCode:'1',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_companyInfo2_onclickEvent',allowCharCode:'0-9',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'',validTitle:'회사구분',objTypeName:'data',name:'coClsNm',nameId:'ed_coNm',style:'',id:'udc_companyInfo2','ev:onblurCodeEvent':'scwin.udc_companyInfo2_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_companyInfo2_onviewchangeNameEvent',btnId:'btn_company',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인허가 종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOptionLabel:'선택',chooseOption:'true',allOption:'',title:'인허가종류',mandatory:'true',displayMode:'label',ref:'data:dma_results.apprTypeCd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 300px;',id:'lc_apprTypeCd',class:'',direction:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인허가명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'width: 300px;',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_results.apprNm',style:'',id:'ed_apprNm',placeholder:'',title:'인허가명',class:'',mandatory:'true'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_openApprPopUp',style:'',id:'apprNm_popup',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',refDataCollection:'dma_results',popupID:'',code:'acctDeptCd',UpperFlagCode:'1',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',allowCharCode:'0-9 ',codeId:'ed_regDept',selectID:'retrieveAcctDeptCdInfo',popupTitle:'',validTitle:'관리부서',name:'acctDeptNm',nameId:'ed_regDeptNm',style:'',id:'udc_acctDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent',btnId:'clntNo_popup'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부여명의',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOptionLabel:'선택','ev:onchange':'scwin.lc_asgNmCd_onchange',chooseOption:'true',allOption:'',title:'부여명의',mandatory:'true',displayMode:'label',ref:'data:dma_results.asgNmCd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 300px;',id:'lc_asgNmCd',class:'',direction:'auto'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{ref:'data:dma_results.asgNm',maxlength:'100',style:'width: 300px;',id:'ed_asgNm',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업영역',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOptionLabel:'선택',chooseOption:'true',allOption:'',title:'사업영역',mandatory:'true',displayMode:'label',ref:'data:dma_results.bizDomCd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 300px;',id:'lc_bizDomCd',class:'',direction:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'용도',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_results.purps',maxlength:'100',style:'width: 300px;',id:'ed_purps',class:'',title:'용도'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'등록(허가)번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_results.apprRegNo',maxlength:'100',style:'width: 300px;',id:'ed_apprRegNo',title:'등록(허가)번호',class:'',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인허가 관리청',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_results.apprMgntAgcy',maxlength:'100',style:'width: 300px;',id:'ed_apprMgntAgcy',title:'인허가관리청',class:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'인허가 관리담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_results.mgntAgcyPicNm',maxlength:'100',style:'width: 300px;',id:'ed_mgntAgcyPicNm',class:'',title:'인허가관리담당자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리담당자 연락처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:dma_results.mgntAgcyPicTel',maxlength:'100',style:'width: 300px;',id:'ed_mgntAgcyPicTel',class:'',title:'관리담당자연락처'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관련법규',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:dma_results.rltViol',maxlength:'300',style:'',id:'ed_rltViol',class:' ',title:'관련법규'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:dma_results.useYn',appearance:'full',style:'',id:'rd_useYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',objType:'data',selectedIndex:'0',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'갱신/변경 사유',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{ref:'data:dma_results.chgDesc',maxlength:'300',style:'',id:'ed_chgDesc',title:'갱신/변경사유',class:' ',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'인허가 기간',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_detailArea2',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'취득일(최초)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_results.firstAcqDt',displayFormat:'yyyy/MM/dd',style:'',id:'ed_firstAcqDt',class:' cal',calendarValueType:'yearMonthDate',title:'취득일(최초)'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'취득/갱신일(최종)',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:dma_results.renDt',displayFormat:'yyyy/MM/dd',style:'',id:'ed_renDt',title:'취득/갱신일(최종)',class:' cal',mandatory:'true',calendarValueType:'yearMonthDate'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'등록(유효)기간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'regStDt',mandatoryTo:'true',refDataMap:'dma_results',edFromId:'ed_regStDt',edToId:'ed_regEndDt',titleTo:'등록(유효)기간',mandatoryFrom:'true',style:'',id:'udc_fromToCalendar2',refEdDt:'regEndDt',titleFrom:'등록(유효)기간'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'갱신필요여부',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{'ev:onchange':'scwin.rd_renYn_onchange',rows:'',title:'갱신필요여부',mandatory:'true',selectedIndex:'0',ref:'data:dma_results.renYn',appearance:'full',style:'',id:'rd_renYn',renderType:'radiogroup',class:'rdo-grp',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'필요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'불필요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'갱신가능기간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'renPsblStDt',refDataMap:'dma_results',edFromId:'ed_renPsblStDt',edToId:'ed_renPsblEndDt',style:'',id:'udc_fromToCalendar1',refEdDt:'renPsblEndDt',titleFrom:'갱신가능기간',titleTo:'갱신가능기간'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'담당 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_detailArea3',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'담당자 부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{ref:'data:dma_results.picDeptNm',style:'',userData2:'',id:'sp_picDeptNm',label:' text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:dma_results.picEmpNm',style:'',userData2:'',id:'sp_picEmpNm',label:' text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'등록일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:dma_results.apprRegDtm',dataType:'date',displayFormat:'yyyy/MM/dd',style:'',userData2:'',id:'sp_apprRegDtm',label:' text',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'승인자 부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'data:dma_results.apprvDeptNm',style:'',userData2:'',id:'sp_apprvDeptNm',label:' text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'승인자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:dma_results.apprvEmpNm',style:'',userData2:'',id:'sp_apprvEmpNm',label:' text',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'승인일시',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'data:dma_results.apprApprvDtm',displayFormatter:'scwin.fn_dateFormat',displayFormat:'####/##/##',style:'',userData2:'',id:'sp_apprApprvDtm',label:' text',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'변경정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',gridID:'gr_attachFile'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_attach',id:'gr_attachFile',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_attachFile_oncelldblclick',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'인허가관리번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'등록순번',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'첨부파일명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'첨부파일설명',width:'300',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'SIZE',width:'50',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'첨부파일경로',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'등록자ID',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'apprNo',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileSeq',inputType:'text',style:'',value:'',width:'50',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileDesc',inputType:'text',style:'',value:'',width:'300',textAlign:'left',readOnly:'false',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileSiz',inputType:'text',style:'',value:'',width:'50',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFilePath',inputType:'text',style:'',value:'',width:'130',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'100',textAlign:'left',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',btnCancelYn:'Y',style:'',id:'btn_rowCon',delUserAuth:'D',cancelUserAuth:'D',rowDelUserAuth:'D',btnRowDelYn:'Y',btnRowAddYn:'N',rowDelObjType:'data',cancelObjType:'data',rowDelFunction:'scwin.f_delrow',btnRowDelObj:'btn_delRow',btnCancelObj:'btn_cancelRow',cancelFunction:'scwin.f_cancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'}}]},{T:1,N:'xf:group',A:{id:'frm'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'',id:'udc_fielUpload',saveFn:'scwin.saveFile','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone',saveButtonId:'btn_addRow',addButtonName:'첨부파일추가',saveButtonName:'업로드'}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',class:'info-txt blk',id:'',label:' 파일 첨부 방법 <br/> &nbsp; &nbsp;1. 첨부파일 추가 → 2. 업로드 → 3. 첨부파일설명 입력 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_Clear',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button','ev:onclick':'scwin.f_Update',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'변경'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_Reset',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'갱신'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_apprv',style:'',type:'button','ev:onclick':'scwin.f_Apprv',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})