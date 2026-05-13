/*amd /ui/ac/fi/taxbiz/evidmgnt/fi_403_01_01b.xml 88485 1adbb8a54477c5ca816feb6262c34e35d18d6ee36b6212f658a629a168dbc78d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_getMaxCloseYm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'',dataType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true','ev:ondataload':'scwin.ds_evid_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsBusiNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsBusiNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisSpplyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisSupAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisVatAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisTotAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroSpplyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroSupAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroVatAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroTotAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transferDate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailUserNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailUserNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapSupAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapVatAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapTotAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rnk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsbYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slip_import',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSellClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsBusiNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsBusiNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisSpplyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisSupAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisVatAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisTotAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroSpplyDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroSupAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroVatAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroTotAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transferDate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailUserNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailUserNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapSupAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapVatAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapTotAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gapCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rnk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsbYn',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'AcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'AcctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tsBusiNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'supBusiNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'supBusiNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etaxId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'emailUserNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'email',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dateClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:key',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col4',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col5',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col6',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col7',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col8',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col9',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'col10',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'cd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'cdNm',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.evidmgnt.RetrieveEseroEvidenceMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_evid","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_evid","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_evid","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_evid","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_empNo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_empNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_empNo_submitdone','ev:submiterror':'scwin.sbm_empNo_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_403_01_01b
// 이름     : e세로증빙등록
// 경로     : 회계/재무회계/세무/증빙관리/
// 작 성 자 : 오영재
// 작 업 일 : 
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.memJson = $c.data.getMemInfo($p);
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strFromDate = scwin.today.substring(0, 6) + "01";
scwin.lastDay = scwin.today.substring(0, 4) + scwin.today.substring(4, 6) + new Date(scwin.today.substring(0, 4), scwin.today.substring(4, 6), 0).getDate();
scwin.strToDate = scwin.lastDay;
scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson.privAdmin) ? '' : scwin.memJson.privAdmin;
scwin.vUserId = $c.gus.cfIsNull($p, scwin.memJson.userId) ? '' : scwin.memJson.userId; //사용자ID
scwin.vUserEmail = $c.gus.cfIsNull($p, scwin.memJson.email) ? '' : scwin.memJson.email; //사용자Email

scwin.g_sCurrDate = scwin.today;
scwin.g_sLoginDept = $c.gus.cfIsNull($p, scwin.memJson.acctDeptCd) ? '' : scwin.memJson.acctDeptCd;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; //소속 자회사
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; //소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson.userHomeClsCd) ? '' : scwin.memJson.userHomeClsCd; //사용자소속구분코드
scwin.isSubCompany = false;
scwin.coCd = "000";
scwin.coClsCd = "0";

//hidden
scwin.txt_stYm = "";
scwin.txt_endYm = "";
scwin.txt_submitDt = "";
scwin.txtCoClsCd = "";
scwin.declarYr = "";
scwin.vatQuartYyClsCd = "";
scwin.txt_evidClsNm = "";

//하단 표 표기 값
scwin.selCnt = 0;
scwin.debisSupAmt = 0;
scwin.debisVatAmt = 0;
scwin.debisTotAmt = 0;
scwin.eseroSupAmt = 0;
scwin.eseroVatAmt = 0;
scwin.eseroTotAmt = 0;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI019",
    compID: "lc_pchsSellClsCd"
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.coCd = scwin.vLoginCoCd;
  scwin.coClsCd = scwin.vLoginCoClsCd;
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};
scwin.onUdcCompleted = async function () {
  console.log('scwin.onUdcCompleted  ---');
  scwin.f_setCompanyInfo();
  scwin.f_initObj();
  lc_evidClsCd.setSelectedIndex(0);
  chb_previewCheck.setValue(true);
  chk_lowerDeptIncluYn.setValue(false);
  $c.gus.cfDisableObjects($p, [chk_filterYn, b_Save]);
  let slipNo = $c.data.getParameter($p, "slipNo") == null ? "" : $c.data.getParameter($p, "slipNo");
  if (!$c.gus.cfIsNull($p, slipNo)) {
    ed_slipNo.setValue(slipNo);
    if (ed_slipNo.getValue() != "") {
      //f_Retrieve();
    }
  }

  // 회사코드 변경권한
  if (scwin.g_sLoginDept != '00009' && scwin.g_sLoginDept != '00849') {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
  lc_dateClsCd.setValue("WRITE_DATE");
  lc_pchsSellClsCd.setValue("2");
  await scwin.getMaxCloseYm(); //마감년월 가져오기 
  await scwin.f_empNo(); // 세무조사 관련 
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_AcctDeptCd, ed_AcctDeptNm, ed_tsBusiNo]); //  부가세 신고 부서  
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = async function () {
  //tr_getMaxCloseYm.Post();  
  dma_search2.set("coCd", scwin.vCoCd);
  var e = await $c.sbm.execute($p, sbm_getMaxCloseYm);
  let thisYm = scwin.today; // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (e.responseJSON.OUT_DS1[0]['closeYm'] != thisYm.substr(0, 6)) {
    let closeYm = e.responseJSON.OUT_DS1[0]['closeYm'];
    let firstDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + "01"; // 1일
    let lastDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날
    ed_endDt.setValue(lastDay); //작성일자 셋팅
    ed_startDt.setValue(firstDay);
  } else {
    let firstDay = thisYm.substr(0, 4) + thisYm.substr(4, 2) + "01"; //당월 1일
    let lastDay = thisYm.substr(0, 4) + thisYm.substr(4, 2) + new Date(thisYm.substr(0, 4), thisYm.substr(4, 2), 0).getDate(); //당월 마지막날
    ed_endDt.setValue(lastDay); //작성일자 셋팅
    ed_startDt.setValue(firstDay);
  }

  //debug fixme
  //ed_startDt.setValue("20241230");
  //ed_endDt.setValue("20250130");
  //lc_regYn.setSelectedIndex(2);   //등록 N 인것을 조회해서 e세로 등록 팝업을 띄우자 .
};

//세무조사 아이디 조회
scwin.f_empNo = function () {
  let grp_cd = "FI624"; //세무조사 아이디
  let pCode = scwin.vUserId;

  // SELECT 절 
  let param1 = " CD      as COL1 " + ",CD_NM 	as COL2 " + ",'' 		as COL3 " + ",'' 		as COL4 " + ",'' 		as COL5 " + ",'' 		as COL6 " + ",''      as COL7 " + ",''      as COL8 " + ",''      as COL9 " + ",''      as COL10";

  // 대상테이블 	
  let param2 = " TB_ZZ002 ";

  // 조건절
  let param3 = " AND GRP_CD = '" + grp_cd + "'" + " AND USE_YN = '1' "
  //+ " AND CD_NM LIKE '"+pCode+"'% || '%'"
  + " AND CD_NM = '" + pCode + "' ";
  let param4 = "CD";

  //ds_empNo.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  //ds_empNo.Reset();  

  sbm_empNo.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  $c.sbm.execute($p, sbm_empNo);
};
scwin.sbm_empNo_submitdone = function (e) {
  console.log('scwin.sbm_empNo_submitdone');
  console.log(e);
  if (ds_empNo.getRowCount() > 0) {
    ed_startDt.setValue("20160101"); //작성일자 셋팅
    ed_endDt.setValue("20160131");
  }
};
scwin.sbm_empNo_submiterror = function (e) {};
scwin.btn_search_email_onclick = function (e) {
  scwin.f_EmailRetrieve();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_slip_onclick = function (e) {
  scwin.f_SlipSave();
};
scwin.b_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.b_delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.b_check_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.chk_filterYn_onchange = function (info) {
  scwin.f_filter();
};
scwin.sbm_search_submitdone = function (e) {
  //cfHideDSWaitMsg(gr_evid);
  //gr_evid.ColumnProp('chk','HeadCheck')="false";

  //cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_evid.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  $c.gus.cfEnableObjects($p, [chk_filterYn, b_Save]);
  ed_totalRows.setValue(rowCnt);

  //@acolor 처리
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "gapTotAmt") != 0 || ds_evid.getCellData(i, "gapSupAmt") != 0 || ds_evid.getCellData(i, "gapVatAmt") != 0 || ds_evid.getCellData(i, "debisSupAmt") != ds_evid.getCellData(i, "eseroSupAmt") || ds_evid.getCellData(i, "debisVatAmt") != ds_evid.getCellData(i, "eseroVatAmt")) {
      gr_evid.setRowBackgroundColor(i, "#6495ed");
    }
  }

  /* test
  for(i = 0; i < ds_evid.getRowCount(); i++) {
      if(ds_evid.getCellData(i, "acctDeptCd") ==  "00073" )
      {
          gr_evid.setRowBackgroundColor(i, "#6495ed");
          console.log("이거지");
          //console.log("debisVatAmt=>" + ds_evid.getCellData(i, "debisVatAmt") +"___eseroVatAmt=>" +ds_evid.getCellData(i, "eseroVatAmt") );
      }
  }
  */
};
scwin.sbm_search_submiterror = function (e) {};
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다    
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_delete_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_004);
  scwin.f_Retrieve();
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 시작, 종료일자 체크
  if (ed_startDt.getValue() == "" || ed_endDt.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["기간"]);
    ed_startDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  // 세무조사 관련 일자 제한	
  if (ds_empNo.getRowCount() > 0) {
    if (ed_startDt.getValue() != "" && ed_endDt.getValue() != "") {
      if (ed_startDt.getValue().substr(0, 4) != "2016" || ed_endDt.getValue().substr(0, 4) != "2016") {
        $c.win.alert($p, "2016년 이외의 조회 권한이 없습니다.");
        return;
      }
    }
  }
  if (chk_lowerDeptIncluYn.getValue() == true) {
    if (ed_deptCd.getValue() == "") {
      $c.win.alert($p, "하위부서포함여부 체크시에는 작성부서를 입력해주세요.");
      ed_deptCd.focus();
      return;
    } else {
      dma_search.set("lowerDeptIncluYn", "1");
    }
  } else {
    dma_search.set("lowerDeptIncluYn", "0");
  }
  dma_search.set("modId", scwin.vUserId);
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_evid.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }
  let chkCnt = 0;
  let chkMulti = 0;
  let chkMatch = 0;
  let totDAmt = 0;
  let totDVat = 0;
  let totEAmt = 0;
  let totEVat = 0;
  let supBusiNo = "";
  let ret;
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "chk") == "T") {
      chkCnt++;
      totDVat = totDVat + ds_evid.getCellData(i, "debisVatAmt");
      totEVat = totEVat + ds_evid.getCellData(i, "eseroVatAmt");
    }
    if (ds_evid.getCellData(i, "chk") == "T" && ds_evid.getCellData(i, "regYn") == "Y") {
      $c.win.alert($p, i + "번째 항목은 이미 증빙 등록 완료된 항목 입니다.\n추가 등록이 필요한 경우는 등록여부의 Y를 더블클릭하여 팝업에서 진행해 주시기 바랍니다.");
      ds_evid.setCellData(i, "chk", "F");
      return false;
    }

    //debisTotAmt,  eseroTotAmt , debisCnt, eseroCnt
    if (ds_evid.getCellData(i, "chk") == "T" && ds_evid.getCellData(i, "eseroCnt") == 0 && ds_evid.getCellData(i, "debisCnt") != 0) {
      chkMulti++;
      totDAmt = totDAmt + ds_evid.getCellData(i, "debisTotAmt");

      /*if(chkMulti == 1)
          supBusiNo = ds_evid.NameValue(i,"supBusiNo");
      else
      {
          if(supBusiNo != ds_evid.NameValue(i,"supBusiNo"))
          {
              alert("공급사업자번호가 상이합니다.");
              return;
          }
      }*/
    } else if (ds_evid.getCellData(i, "chk") == "T" && ds_evid.getCellData(i, "eseroCnt") != 0 && ds_evid.getCellData(i, "debisCnt") == 0) {
      chkMulti++;
      totEAmt = totEAmt + ds_evid.getCellData(i, "eseroTotAmt");

      /*if(chkMulti == 1)
          supBusiNo = ds_evid.NameValue(i,"supBusiNo");
      else
      {
          if(supBusiNo != ds_evid.NameValue(i,"supBusiNo"))
          {
              alert("공급사업자번호가 상이합니다.");
              return;
          }
      }*/
    } else if (ds_evid.getCellData(i, "chk") == "T" && ds_evid.getCellData(i, "eseroCnt") != 0 && ds_evid.getCellData(i, "debisCnt") != 0) {
      chkMatch++;
    }
    /*if(ds_evid.NameValue(ds_evid.RowPosition,"eseroCnt") == 0 ){
        alert("e세로 접수 내역이 없습니다. 등록할 수 없습니다");
        return false;
    }*/

    if (ds_evid.getCellData(i, "chk") == "T" && ds_evid.getCellData(i, "debisSpplyDt").substring(0, 6) != ds_evid.getCellData(i, "eseroSpplyDt").substring(0, 6)) {
      ret = await $c.win.confirm($p, i + "행의 전표 공급월(" + ds_evid.getCellData(i, "debisSpplyDt").substring(0, 6) + ")과  e세로증빙 작성월(" + ds_evid.getCellData(i, "eseroSpplyDt").substring(0, 6) + ")이 상이합니다.계속 진행하시겠습니까?");
      if (ret == true) {
        //return true;
      } else {
        return false;
      }
    }
  }
  if (chkCnt == 0) {
    $c.win.alert($p, "선택한 항목이 없습니다.");
    return false;
  }
  if (chkMulti > 0 && chkMatch > 0) {
    $c.win.alert($p, "N:N 등록과 1:1등록을 동시에 할 수 없습니다.");
    return false;
  }
  if (chkMulti > 0 && totDAmt != totEAmt) {
    $c.win.alert($p, "DEBIS와 e세로의 합계 금액이 같지 않습니다.");
    return false;
  }
  if (totDVat != totEVat) {
    $c.win.alert($p, "DEBIS와 e세로의 부가세 합계 금액이 같지 않습니다.");
    return false;
  }
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret == true) {
    sbm_save.action = "/ac.fi.taxbiz.evidmgnt.RegistEseroEvidenceMgntCMD.do";
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_evid.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }
  let chkCnt = 0;
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    if (ds_evid.getCellData(i, "chk") == "T") {
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    $c.win.alert($p, "선택한 항목이 없습니다.");
    return false;
  }
  if (ds_evid.getCellData(ds_evid.getRowPosition(), "regYn") == "N") {
    $c.win.alert($p, "등록되지 않은 항목 입니다.");
    return false;
  }
  let ret;
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret == true) {
    sbm_delete.action = "/ac.fi.taxbiz.evidmgnt.DeleteEseroEvidenceMgntCMD.do";
    $c.sbm.execute($p, sbm_delete);
  }
};

//-------------------------------------------------------------------------
// 필터
//-------------------------------------------------------------------------	
scwin.f_filter = function () {
  if (chk_filterYn.getValue() == 1) {
    //ds_evid.UseFilter = "true";
    //ds_evid.Filter();
    //cfShowTotalRows(totalRows, ds_evid.CountRow);

    ds_evid.removeColumnFilterAll();
    ds_evid.setColumnFilter({
      type: 'row',
      colIndex: 'gapTotAmt',
      key: "0",
      condition: 'and',
      exactMatch: true
    });
    ds_evid.setColumnFilter({
      type: 'row',
      colIndex: 'regYn',
      key: "N",
      condition: 'and',
      exactMatch: true
    });
    ds_evid.setColumnFilter({
      type: 'row',
      colIndex: 'gapCnt',
      key: "0",
      condition: 'and',
      exactMatch: true
    });
    ed_totalRows.setValue(ds_evid.getRowCount());
  } else {
    //ds_evid.UseFilter = "false";
    ds_evid.removeColumnFilterAll();
    scwin.f_Retrieve();
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

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------	
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd2 = function (strCd, strNm, flag) {
  strNm.setValue("");
  if (strCd.getValue().trim() != "") scwin.f_SearchPopUp(flag, 'T');
};
scwin.udc_regId_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_regId, ed_empNm, rtnList);
};
scwin.udc_emailUserNo_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_emailUserNo, ed_emailUserNm, rtnList);
};
scwin.udc_deptCd_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_deptCd, ed_deptNm, rtnList);
};
scwin.udc_slipKndCd_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_slipKndCd, ed_slipKndNm, rtnList);
};
//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = function (flag, check, isCdYn) {
  let param;
  switch (flag) {
    case '2':
      // 사번
      param = "" + scwin.coCd;
      udc_regId.setSelectId("retrieveAcEmpInfo");
      udc_regId.cfCommonPopUp(scwin.udc_regId_cb, ed_regId.getValue().trim(), ed_empNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, check);
      break;
    case '3':
      // 이메일
      param = "" + scwin.coCd;
      udc_emailUserNo.setSelectId("retrieveAcEmpInfo");
      udc_emailUserNo.cfCommonPopUp(scwin.udc_emailUserNo_cb, ed_emailUserNo.getValue().trim(), ed_emailUserNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, 'F');
      break;
    case '4':
      // 작성부서		
      param = "," + ed_coCd.getValue() + ",,0";
      udc_deptCd.setSelectId("retrieveAcctDeptCdInfo6");
      udc_deptCd.cfCommonPopUp(scwin.udc_deptCd_cb, ed_deptCd.getValue().trim(), ed_deptNm.getValue(), check, null, null, null, null, scwin.g_sCurrDate, null, null, null, null, null, null, null);
      break;
    case '5':
      // 전표종류
      udc_slipKndCd.setSelectId("retrieveSlipKndCd");
      udc_slipKndCd.cfCommonPopUp(scwin.udc_slipKndCd_cb, ed_slipKndCd.getValue().trim(), ed_slipKndNm.getValue(), check, null, null, null, null, "0", null, null, null, null);
      break;
  }
};
scwin.f_userToExcel = function () {
  let sheetTitle = "e세로증빙등록";
  const gridId = gr_evid;
  const infoArr = [];
  const options = {
    fileName: sheetTitle + ".xlsx",
    // + ".xls",
    sheetName: sheetTitle
  };
  if (ds_evid.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
};

//-------------------------------------------------------------------------
// 세금계산서발행 
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let param = "";
  let etaxId2 = ds_evid.getCellData(ds_evid.getRowPosition(), "etaxId");
  //alert("etaxId2 : " + etaxId2);

  // let odiParam = new ODIParam("fi_401_10_01p");

  // odiParam.add("etaxId", etaxId2);

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // let formParam = new FormParam();
  //formParam.add("form1","폼1");

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // let viewerParam = new ViewerParam();
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....

  // $c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/taxbiz/vatdeclar/fi_401_10_01p.ozr", odiParam, viewerParam, formParam);	

  var mode = "";
  // if(chb_printCheck.getValue() == "1"){
  //     mode = "print";
  // }

  if (chb_previewCheck.getValue() == "1") {
    mode = "preview";
  }
  let data = {
    reportName: "/ac/fi/taxbiz/vatdeclar/fi_401_10_01p.ozr",
    odiName: "fi_401_10_01p",
    odiParam: {
      sysPath: "dbl.ac.fi.taxbiz",
      etaxId: etaxId2
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: mode
    },
    formParam: {}
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업 
//-------------------------------------------------------------------------  	
scwin.f_eseroEvidPopUp = function () {
  let data = {};
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    //console.log ("삭제예정 ds_evid.getCellData(i,chk): " + ds_evid.getCellData(i,"chk"));
    if (ds_evid.getCellData(i, "chk") == "T") {
      data.startDt = ed_startDt.getValue();
      data.endDt = ed_endDt.getValue();
      data.acctDeptCd = ds_evid.getCellData(i, "acctDeptCd"); //부가세신고부서
      data.tsBusiNo = ds_evid.getCellData(i, "tsBusiNo"); //부가세신고부서
      data.tsBusiNm = ds_evid.getCellData(i, "acctDeptNm");
      data.supBusiNo = ds_evid.getCellData(i, "supBusiNo"); //공급자사업자
      data.supBusiNm = ds_evid.getCellData(i, "supBusiNm");
      data.regId = ds_evid.getCellData(i, "regId"); //등록자
      data.regNm = ds_evid.getCellData(i, "regNm");
      data.slipNo = ds_evid.getCellData(i, "slipNo"); //전표번호
      data.etaxId = ds_evid.getCellData(i, "etaxId"); //e세로ID
    }
  }
  console.log("data : " + data);

  // 세무조사 관련 제한	
  if (ds_empNo.getRowCount() > 0) {} else {
    //var returnValue = window.showModalDialog(sURL,valueObject,sFeature);
    const options = {
      id: "fi_403_01_01p",
      type: "browserPopup",
      modal: true,
      popupName: "e세로증빙등록(팝업)",
      //width: 1030,
      width: 1640,
      //height: 680
      height: 800
    };
    $c.win.openPopup($p, "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_01p.xml", options, data);
  }
};

//-------------------------------------------------------------------------
// 부가세 e세로 대사 팝업 
//-------------------------------------------------------------------------  	
scwin.f_eseroEvidPopUp2 = function () {
  let data = {};
  let row = ds_evid.getRowPosition();
  data.startDt = ed_startDt.getValue();
  data.endDt = ed_endDt.getValue();
  data.coCd = ed_coCd.getValue(); //부가세신고부서
  data.coNm = ed_coNm.getValue(); //부가세신고부서
  data.acctDeptCd = ds_evid.getCellData(row, "acctDeptCd"); //부가세신고부서
  data.tsBusiNo = ds_evid.getCellData(row, "tsBusiNo"); //부가세신고부서
  data.tsBusiNm = ds_evid.getCellData(row, "acctDeptNm");
  data.supBusiNo = ds_evid.getCellData(row, "supBusiNo"); //공급자사업자
  data.supBusiNm = ds_evid.getCellData(row, "supBusiNm");
  data.regId = ds_evid.getCellData(row, "regId"); //등록자
  data.regNm = ds_evid.getCellData(row, "regNm");
  data.slipNo = ds_evid.getCellData(row, "slipNo"); //전표번호
  data.etaxId = ds_evid.getCellData(row, "etaxId"); //e세로ID
  data.eseroSupAmt = ds_evid.getCellData(row, "eseroSupAmt");
  console.log('팝업 파라미터 확인');
  console.log(data);

  // 세무조사 관련 제한	
  if (ds_empNo.getRowCount() > 0) {} else {
    //var returnValue = window.showModalDialog(sURL,valueObject,sFeature);
    const options = {
      id: "fi_403_01_01p",
      //type: "popup",
      type: "browserPopup",
      modal: true,
      popupName: "부가세 e세로 대사",
      //"e세로증빙등록(팝업)",
      //width: 1030,
      //height: 680
      width: 1640,
      height: 880
    };
    $c.win.openPopup($p, "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_01p.xml", options, data);
  }
};

//-------------------------------------------------------------------------
// 경비전표 발행
//-------------------------------------------------------------------------
scwin.f_SlipSave = function () {
  // 필수 입력 항목 중 빈 내용이 있다면
  //if (!cfCheckMandatory()) return;
  let i = 0;
  let count = 0;
  let slipCount = 0;
  let amt = 0; //매입금액
  let appNum = 0; //승인번호
  let gubun = 0; //구분 ( 03 - 매입, 04 - 매입취소 )
  let tax = 0; //세금
  let chkUseDt = "";
  let dtCnt = 0;

  // 그리드의 데이터 헤더를 발행팝업용 데이터셋에 복사한다. 
  $c.gus.cfCopyDataSetHeader($p, ds_evid, ds_slip_import);
  let z = 0;

  // 조회결과 데이터셋의 루프만큼
  let newRow;
  for (i = 0; i < ds_evid.getRowCount(); i++) {
    // 체크된 것만 로직을 타고, 

    if (ds_evid.getCellData(i, "pchsSellClsCd") == "1") {
      $c.win.alert($p, "매출건은 전표발행이 불가능합니다.(" + i + "행)");
      return false;
    }
    if (ds_evid.getCellData(i, "chk") == "T") {
      count = count + 1;
      // 행의 전표번호가 없다면 전표번호의 갯수를 1증가한다. 
      if (ds_evid.getCellData(i, "slipNo") != "") {
        slipCount = slipCount + 1;
      }

      // 전체 조회된 데이터 중에 선택된 행과 같은 승인번호를 검색하여,
      // 취소 금액을 합산하여 준다. ( 이유!. 할인의 경우에는 같은 승인번호에 마이너스 금액으로 입력되기 때문에 합쳐서 생각해줄 필요가 있다.)

      //ds_slip_import.ImportData(ds_evid.ExportData(i, 1, true));

      newRow = ds_slip_import.insertRow();
      ds_slip_import.setRowPosition(newRow);
      console.log("newRow=>" + newRow);
      ds_slip_import.setRowJSON(newRow, ds_evid.getRowJSON(i), true);
      amt = ds_slip_import.getCellData(z, "eseroSupAmt"); // 사용금액
      tax = ds_slip_import.getCellData(z, "eseroVatAmt"); // 부가세액

      if (tax == 0) {
        ds_slip_import.setCellData(z, "approveAmt", amt);
        ds_slip_import.setCellData(z, "approveTotal", amt);
      } else {
        ds_slip_import.setCellData(z, "approveAmt", amt);
        ds_slip_import.setCellData(z, "tax", tax);
        ds_slip_import.setCellData(z, "approveTotal", amt + tax);
      }
      z++;
      if (chkUseDt == "") {
        chkUseDt = ds_evid.getCellData(i, "eseroSpplyDt");
      }
      for (k = 0; k < ds_slip_import.getRowCount(); k++) {
        if (chkUseDt.substring(0, 6) != ds_slip_import.getCellData(k, "eseroSpplyDt").substring(0, 6)) {
          dtCnt += 1;
        }
      }
    }
  }
  if (dtCnt > 0) {
    $c.win.alert($p, "이용월이 다른건을 같이 처리할 수 없습니다.");
    return false;
  }
  if (count < 1) {
    $c.win.alert($p, "선택한 데이타가 없습니다.");
    return false;
  } else {
    if (slipCount > 0) {
      $c.win.alert($p, "이미 전표가 처리 된 데이타가 " + slipCount + "건 있습니다.");
      ds_slip_import.removeAll();
      return false;
    }
  }
  let data = {
    ds_parent: ds_slip_import.getAllJSON(),
    callbackFn: scwin.callBackFunc
  };
  const options = {
    id: "fi_403_01_01p_02",
    type: "popup",
    modal: true,
    popupName: "경비전표입력(e세로증빙등록)",
    width: 840,
    height: 720,
    scrollbars: true
  };
  //$c.win.openPopup("/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_01p_02.xml", options, data);

  var opts = {
    id: "fi_403_01_01p_02",
    popupName: "경비전표입력(e세로증빙등록)",
    modal: true,
    type: "browserPopup",
    title: "Win pop",
    width: 1800,
    height: 1080
  };
  $c.win.openPopup($p, "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_01p_02.xml", opts, data);
  ds_slip_import.removeAll();
  scwin.f_Retrieve();
};
scwin.f_EmailRetrieve = function () {
  ed_email.setValue(scwin.vUserEmail);
  if (ed_email.getValue() == "") {
    $c.win.alert($p, "등록된 메일이 없습니다.");
    return;
  }
  scwin.f_Retrieve();
};
scwin.udc_AcctDeptCd_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_AcctDeptCd, ed_AcctDeptNm, rtnList);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_AcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_AcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_tsBusiNo.setValue(rtnList[5]); //부가세사업자번호
    ed_AcctDeptCd.options.hidVal = rtnList[2]; //히든값        
  } else {
    ed_AcctDeptCd.setValue("");
    ed_AcctDeptNm.setValue("");
    ed_tsBusiNo.setValue("");
    ed_acctDeptCd.options.hidVal = "";
  }
};
scwin.udc_supBusiNo_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_supBusiNo, ed_supBusiNm, rtnList);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  let param;
  switch (flag) {
    case '2':
      // 부가세신고부서조회
      param = ",,," + scwin.coCd + "," + scwin.coClsCd + "," + scwin.g_sCurrDate.substring(0, 4);
      udc_AcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCd");
      udc_AcctDeptCd.cfCommonPopUp(scwin.udc_AcctDeptCd_cb, ed_AcctDeptCd.getValue().trim(), ed_AcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      // 사업자번호 
      param = "";
      udc_supBusiNo.setSelectId("retrieveCrnInfo");
      udc_supBusiNo.cfCommonPopUp(scwin.udc_supBusiNo_cb, ed_supBusiNo.getValue().trim(), ed_supBusiNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_AcctDeptCd_onblurCodeEvent = function (e) {
  if (ed_AcctDeptCd.getValue().trim() == ed_AcctDeptCd.options.hidVal) return;
  ed_AcctDeptNm.setValue("");
  ed_tsBusiNo.setValue("");
  ed_AcctDeptCd.options.hidVal = "";
  if (ed_AcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('2', 'T');
};
scwin.udc_supBusiNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_supBusiNo, ed_supBusiNm, '3');
};
scwin.gr_evid_onheaderclick = function (headerId) {
  let i = 0;
  var bCheck = gr_evid.getHeaderValue("chk"); // 체크 여부

  // 하단 값 초기화
  scwin.selCnt = 0;
  scwin.debisSupAmt = 0;
  scwin.debisVatAmt = 0;
  scwin.debisTotAmt = 0;
  scwin.eseroSupAmt = 0;
  scwin.eseroVatAmt = 0;
  scwin.eseroTotAmt = 0;
  if (headerId == "chk") {
    if (bCheck == true) {
      //전체 체크
      for (i = 0; i < ds_evid.getTotalRow(); i++) {
        if (ds_evid.getCellData(i, "chk") == "T") {
          scwin.selCnt++;
          scwin.debisSupAmt += parseInt(ds_evid.getCellData(i, "debisSupAmt"));
          scwin.debisVatAmt += parseInt(ds_evid.getCellData(i, "debisVatAmt"));
          scwin.debisTotAmt += parseInt(ds_evid.getCellData(i, "debisTotAmt"));
          scwin.eseroSupAmt += parseInt(ds_evid.getCellData(i, "eseroSupAmt"));
          scwin.eseroVatAmt += parseInt(ds_evid.getCellData(i, "eseroVatAmt"));
          scwin.eseroTotAmt += parseInt(ds_evid.getCellData(i, "eseroTotAmt"));
        }
      }
    } else {
      // 전체 해제
      for (i = 0; i < ds_evid.getTotalRow(); i++) {
        ds_evid.setCellData(i, "chk", "F");
      }
    }
  }
  scwin.f_GetSelectAmt();
};
scwin.gr_evid_oncellclick = function (rowIndex, columnIndex, columnId) {
  var row = rowIndex;
  if (columnId == "chk") {
    /* 임시로 막음 지우면 안됨
    if (ds_evid.NameValue(row,"modPsbYn") == "N" ){
        alert("회계처리된 전표는 수정할 수 없습니다. 재경팀만 수정 가능합니다.");
        ds_evid.NameValue(row,"chk") = "F";
        return false;
    }
    */
    /*if (ds_evid.NameValue(row,"debisCnt") == 0 ){
        alert("데비스 전표가 없습니다. 등록할 수 없습니다");
        ds_evid.NameValue(row,"chk") = "F";
        return false;
    }
    if (ds_evid.NameValue(row,"eseroCnt") == 0 ){
        alert("e세로 접수 내역이 없습니다. 등록할 수 없습니다");
        ds_evid.NameValue(row,"chk") = "F";
        return false;
    }*/
    if (ds_evid.getCellData(rowIndex, "setNo") == "" && (ds_evid.getCellData(rowIndex, "debisCnt") > 1 || ds_evid.getCellData(rowIndex, "eseroCnt") > 1)) {
      $c.win.alert($p, "데비스 전표 개수와 e세로 개수는 1:1이 되어야 합니다.\n1:1 관계가 아닌 경우 팝업창을 통해 증빙등록 하셔야 합니다");
      if ($c.win.confirm($p, MSG_CM_CRM_002) == true) {
        scwin.f_eseroEvidPopUp();
      }
      ds_evid.setCellData(row, "chk", "F");
    }
    if (ds_evid.getCellData(rowIndex, columnId) == "1" || ds_evid.getCellData(rowIndex, columnId) == "T") {
      //클릭 시 
      scwin.debisSupAmt = parseInt(scwin.debisSupAmt) + parseInt(ds_evid.getCellData(row, "debisSupAmt"));
      scwin.debisVatAmt = parseInt(scwin.debisVatAmt) + parseInt(ds_evid.getCellData(row, "debisVatAmt"));
      scwin.debisTotAmt = parseInt(scwin.debisTotAmt) + parseInt(ds_evid.getCellData(row, "debisTotAmt"));
      scwin.selCnt++;
      scwin.eseroSupAmt = parseInt(scwin.eseroSupAmt) + parseInt(ds_evid.getCellData(row, "eseroSupAmt"));
      scwin.eseroVatAmt = parseInt(scwin.eseroVatAmt) + parseInt(ds_evid.getCellData(row, "eseroVatAmt"));
      scwin.eseroTotAmt = parseInt(scwin.eseroTotAmt) + parseInt(ds_evid.getCellData(row, "eseroTotAmt"));
    } else {
      //해제 시 
      scwin.debisSupAmt = parseInt(scwin.debisSupAmt) - parseInt(ds_evid.getCellData(row, "debisSupAmt"));
      scwin.debisVatAmt = parseInt(scwin.debisVatAmt) - parseInt(ds_evid.getCellData(row, "debisVatAmt"));
      scwin.debisTotAmt = parseInt(scwin.debisTotAmt) - parseInt(ds_evid.getCellData(row, "debisTotAmt"));
      scwin.selCnt--;
      scwin.eseroSupAmt = parseInt(scwin.eseroSupAmt) - parseInt(ds_evid.getCellData(row, "eseroSupAmt"));
      scwin.eseroVatAmt = parseInt(scwin.eseroVatAmt) - parseInt(ds_evid.getCellData(row, "eseroVatAmt"));
      scwin.eseroTotAmt = parseInt(scwin.eseroTotAmt) - parseInt(ds_evid.getCellData(row, "eseroTotAmt"));
    }
    scwin.f_GetSelectAmt();
  }
};
scwin.udc_regId_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd2(ed_regId, ed_empNm, '2');
};
scwin.udc_emailUserNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd2(ed_emailUserNo, ed_emailUserNm, '3');
};
scwin.udc_coCd_cb = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
    scwin.coCd = ed_coCd.getValue();
    scwin.coClsCd = rtnList[1]; // 회사구분  
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
    scwin.coCd = "";
    scwin.coClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_cb, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
  ed_AcctDeptNm.setValue("");
  ed_AcctDeptCd.setValue("");
  ed_tsBusiNo.setValue("");
  ed_AcctDeptCd.options.hidVal = "";
  ed_deptCd.setValue("");
};
scwin.gr_evid_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let Colid = columnId;
  let Row = rowIndex;
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_evid.getCellData(Row, "slipNo"));
  } else if (Colid == "etaxId" && Row >= 0) {
    scwin.f_OzReport();
  } else if (Colid == "regYn" && Row >= 0) {
    scwin.f_eseroEvidPopUp2();
  } else if (Colid == "regYn" && ds_evid.getCellData(Row, "regYn") == "N") {
    $c.win.alert($p, "등록되지 않은 건은 현재 화면에서 체크하여 증빙등록 해 주십시오.");
  }
  if (Colid == "crnYn" && Row >= 0 && ds_evid.getCellData(Row, "crnYn") == "N") {
    //var valueObject = new Object();
    let data = {};
    data.vendorTaxNum = ds_evid.getCellData(Row, 'supBusiNo');
    data.vendorName = ds_evid.getCellData(Row, 'supBusiNm');
    data.vendorPerson = "";
    data.vendorZipCode = "";
    data.vendorAddress1 = "";
    data.vendorAddress2 = "";
    data.pcsSellClsCd = "2"; // 매입
    data.flag = "Y"; // 매입
    data.CrnGubun = "Y"; // 구분
    data.flag2 = "T"; // 개인형 구분 코드

    //var result = window.showModalDialog("/ac/fi/stdinfomgnt/fi_100_02_01b.jsp", data, "dialogWidth:550px; dialogHeight:820px; status:no; scroll:yes");		

    const options = {
      id: "fi_100_02_01b",
      type: "popup",
      modal: true,
      popupName: "사업자정보",
      width: 1030
    };
    $c.win.openPopup($p, "/ui/ac/fi/stdinfomgnt/fi_100_02_01b.xml", options, data);
  }
};
scwin.udc_deptCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd2(ed_deptCd, ed_deptNm, '4');
};
scwin.udc_slipKndCd_onblurCodeEvent = function (e) {
  ed_slipKndCd.setValue(ed_slipKndCd.getValue().trim().toUpperCase());
  scwin.f_checkPopEd2(ed_slipKndCd, ed_slipKndNm, '5');
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_supBusiNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_regId_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'F');
};
scwin.udc_AcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};
scwin.udc_emailUserNo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('3', 'F');
};
scwin.udc_deptCd_onclickEvent = function (e) {
  scwin.f_SearchPopUp('4', 'F');
};
scwin.udc_slipKndCd_onclickEvent = function (e) {
  scwin.f_SearchPopUp('5', 'F');
};
scwin.pchsSellClsCd = function (v) {
  let arr = {
    "1": "매출",
    "2": "매입"
  };
  return arr[v];
};
scwin.evidClsCd = function (v) {
  //10:세금계산서,20:영세율세금계산서,11:세금계산서기타,30:계산서,40:법인카드,50:개인카드,60:현금영수증,70:영수증,99:기타,41:신용카드,80:내부매출
  let arr = {
    "10": "세금계산서",
    "20": "영세율세금계산서",
    "11": "세금계산서기타",
    "30": "계산서",
    "40": "법인카드",
    "50": "개인카드",
    "60": "현금영수증",
    "70": "영수증",
    "99": "기타",
    "41": "신용카드",
    "80": "내부매출"
  };
  return arr[v];
};
scwin.crnYn = function (v) {
  return v == "Y" ? "등록" : "미등록";
};
scwin.f_GetSelectAmt = function () {
  lay_selCnt.setValue($c.gus.cfInsertComma($p, scwin.selCnt));
  lay_debisSupAmt.setValue($c.gus.cfInsertComma($p, scwin.debisSupAmt));
  lay_debisVatAmt.setValue($c.gus.cfInsertComma($p, scwin.debisVatAmt));
  lay_debisTotAmt.setValue($c.gus.cfInsertComma($p, scwin.debisTotAmt));
  lay_eseroSupAmt.setValue($c.gus.cfInsertComma($p, scwin.eseroSupAmt));
  lay_eseroVatAmt.setValue($c.gus.cfInsertComma($p, scwin.eseroVatAmt));
  lay_eseroTotAmt.setValue($c.gus.cfInsertComma($p, scwin.eseroTotAmt));
};
scwin.ds_evid_ondataload = function () {
  scwin.selCnt = 0;
  scwin.debisSupAmt = 0;
  scwin.debisVatAmt = 0;
  scwin.debisTotAmt = 0;
  scwin.eseroSupAmt = 0;
  scwin.eseroVatAmt = 0;
  scwin.eseroTotAmt = 0;
  scwin.f_GetSelectAmt();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_coCd',validTitle:'',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_company',refDataCollection:'dma_search',code:'coCd',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',allowCharCode:'0-9',maxlengthCode:'3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출/입 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pchsSellClsCd',style:'width: 85px;',submenuSize:'fixed',ref:'data:dma_search.pchsSellClsCd',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급자사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_supBusiNo',nameId:'ed_supBusiNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_supBusiNo',btnId:'btn_drawAcctDeptCdst',refDataCollection:'dma_search',code:'supBusiNo',name:'supBusiNm',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_supBusiNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_supBusiNo_onclickEvent',allowCharCode:'0-9',maxlengthCode:'13'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',afterAllowCharCode:'0-9',allowCharCode:'A-Za-z0-9',allowCharCodeLength:'1',beforeAllowCharCode:'A-Za-z',code:'slipKndCd',codeId:'ed_slipKndCd','ev:onblurCodeEvent':'scwin.udc_slipKndCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_slipKndCd_onclickEvent',id:'udc_slipKndCd',maxlengthCode:'3',nameId:'ed_slipKndNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dateClsCd',style:'width: 75px;',submenuSize:'fixed',ref:'',objType:'data',sortOption:'value',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작성일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'WRITE_DATE'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TRANSFER_DATE'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'startDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'endDt',edFromId:'ed_startDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표작성자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_regId',nameId:'ed_empNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_regId',btnId:'btn_mgntEmpNo',refDataCollection:'dma_search',code:'regId',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_regId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_regId_onclickEvent',allowCharCode:'0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_AcctDeptCd',selectID:'',popupID:'',validTitle:'',nameId:'ed_AcctDeptNm',style:'',id:'udc_AcctDeptCd',btnId:'btn_slipAcctDeptCdEnd',refDataCollection:'dma_search',code:'tsBusiNo',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_AcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_AcctDeptCd_onclickEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9',maxlengthCode:'5'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_tsBusiNo',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 230px;',ref:'data:dma_search.slipNo',objType:'data',allowChar:'0-9',maxlength:'10'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',style:'width: 230px;',submenuSize:'fixed',ref:'data:dma_search.evidClsCd',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영세율세금계산서(일반)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regYn',style:'width: 86px;',submenuSize:'fixed',ref:'data:dma_search.regYn',objType:'data',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_email',style:'width: 230px;',ref:'data:dma_search.email'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일수신자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_emailUserNo',nameId:'ed_emailUserNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_emailUserNo',btnId:'btn_emailUserNo',refDataCollection:'dma_search',code:'emailUserNo',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_emailUserNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_emailUserNo_onclickEvent',allowCharCode:'0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_deptCd',nameId:'ed_deptNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_acctDeptCd',id:'udc_deptCd',refDataCollection:'dma_search',code:'deptCd',objTypeName:'data',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_deptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하위부서포함 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_lowerDeptIncluYn',objType:'data',ref:'data:dma_search.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search_email',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_email_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본인메일 조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부가세 e세로 대사 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_filterYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onchange':'scwin.chk_filterYn_onchange',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS - e세로 개수 1:1 관계만 표시 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_userToExcel',btnUser:'Y',gridID:'gr_evid'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true',fixedColumn:'1',fixedColumnLineDiv:'1','ev:onheaderclick':'scwin.gr_evid_onheaderclick','ev:oncellclick':'scwin.gr_evid_oncellclick','ev:oncelldblclick':'scwin.gr_evid_oncelldblclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'선택',width:'50',colSpan:'',rowSpan:'2',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'부가세</br>부서코드',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'매출입</br>구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'증빙구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'신고</br>사업자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'신고</br>사업자명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'공급자</br>사업자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'공급자</br>사업자명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'공급자</br>사업자구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'등록</br>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'사업자</br>등록여부',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'공급가액',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'DEBIS',width:'83',colSpan:'13',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'81',inputType:'text',style:'',id:'column106',value:'e세로',displayMode:'label',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',style:'',id:'column170',value:'(DEBIS) - (e세로)',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column194',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column190',value:'순번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column186',value:'수정가능여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'공급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'회계처리</br>일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'83',inputType:'text',style:'',id:'column87',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column83',value:'전표</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'전표</br>종류',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'전표</br>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column131',value:'등록자ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'전표</br>작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'개수',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column119',value:'NN구분번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'81',inputType:'text',style:'',id:'column155',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column151',value:'e세로ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column147',value:'전송일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column143',value:'개수',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'이메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column139',value:'수신자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column175',value:'이메일</br>수신자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column171',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column167',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column159',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column163',value:'개수',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSellClsCd',inputType:'text',style:'',value:'',width:'100',displayFormatter:'scwin.pchsSellClsCd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'text',style:'',value:'',width:'100',displayFormatter:'scwin.evidClsCd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tsBusiNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tsBusiNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supBusiNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supBusiNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crnClsNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'color:blue',id:'regYn',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crnYn',inputType:'text',style:'color:blue;',value:'',width:'100',displayFormatter:'scwin.crnYn',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supAmt',inputType:'text',style:'',value:'',width:'100',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debisSpplyDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debisSupAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'debisVatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'83',inputType:'text',style:'',id:'debisTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'color:blue',id:'slipNo',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'debisCnt',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'setNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eseroSpplyDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eseroSupAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eseroVatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'81',inputType:'text',style:'',id:'eseroTotAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue',id:'etaxId',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transferDate',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eseroCnt',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'email',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'emailUserNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'emailUserNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapSupAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'gapVatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'gapTotAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'gapCnt',value:'',displayMode:'label',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rnk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'modPsbYn',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'debisSupAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'debisVatAmt\')'}},{T:1,N:'w2:column',A:{width:'83',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'debisTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column117',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'81',inputType:'expression',style:'',id:'column157',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'eseroTotAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column153',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column177',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column173',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column169',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column161',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column165',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column197',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column193',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column189',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선택건수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DEBIS',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'e세로',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_selCnt',label:'0',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_debisSupAmt',label:'0',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_debisVatAmt',label:'0',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tar',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_debisTotAmt',label:'0',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_eseroSupAmt',label:'0',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_eseroVatAmt',label:'0',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tar'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_eseroTotAmt',label:'0',ref:'',style:'',userData2:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_slip',style:'',type:'button','ev:onclick':'scwin.btn_slip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표발행'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'등록여부(Y/N) 를 더블클릭 하시면 수동으로 전표와 e세로 자료를 연결 하실 수 있습니다.',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'b_check',style:'',type:'button','ev:onclick':'scwin.b_check_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙인쇄'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'b_delete',style:'',type:'button','ev:onclick':'scwin.b_delete_onclick',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록해제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'b_Save',style:'',type:'button','ev:onclick':'scwin.b_Save_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙등록'}]}]}]}]}]}]}]}]}]})