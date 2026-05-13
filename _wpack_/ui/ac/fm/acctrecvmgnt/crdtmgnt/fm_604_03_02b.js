/*amd /ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_03_02b.xml 132930 d5545746374a7c492d76b0c178c4766d927daec860d44bc604dc057f64111aeb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sts',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startDt',name:'신청일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'신청일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appDept',name:'신청부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crdtMgnt',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_crdtMgnt_onrowpositionchange','ev:oncelldatachange':'scwin.ds_crdtMgnt_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_crdtMgnt_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'appNo',name:'신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYr',name:'적용년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDept',name:'신청부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appDeptNm',name:'신청부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqTitle',name:'요청제목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appAmt',name:'신청금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'curLimitAmt',name:'여신한도금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'addAmt',name:'추가금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'appRsn',name:'신청사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sts',name:'신청상태(FM085)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsNm',name:'신청상태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'허가사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCls',name:'거래구분(사업영역)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnClsNm',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ralyOccpHuse',name:'부동산점유형태-주택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ralyOccpFcty',name:'부동산점유형태-공장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ralyOccpEtc',name:'부동산점유형태-기타',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDept',name:'매출귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptnm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yySellAmt',name:'년매출금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'결제기한구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsNm',name:'결제기한구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'결제기일',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'수금수단코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtNm',name:'수금수단명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYySellAmt',name:'전기매출액(단위:백만원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYySellAmt',name:'미수채권',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'befYyRefundamt',name:'전기미수금(단위:백만원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYyRefundamt',name:'당기미수금(단위:백만원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'refundamtTot',name:'미수금총액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pldgRalyValue',name:'담보부동산-실가치(단위:백만원)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pldgRalySet',name:'담보부동산-설정액(단위:백만원)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pldgRalySnor',name:'담보부동산선순위',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pldgGrtInsr',name:'담보보증보험(단위:백만원)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pldgEtc',name:'담보기타(단위:백만원)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'confSts',name:'신용상태(양호:0, 불량:1)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'badCntn',name:'불량내용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitId',name:'중간승인ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitNm',name:'중간승인자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitDept',name:'중간승인부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitDeptnm',name:'중간승인부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitDt',name:'중간승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitId',name:'최종승인ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitNm',name:'최종승인자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDept',name:'최종승인부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDeptnm',name:'최종승인부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDt',name:'최종승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectId',name:'반려ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectNm',name:'반려자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDept',name:'반려부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDeptnm',name:'반려부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDt',name:'반려일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectRsn',name:'반려사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleCreditAmt',name:'매출채권신용보험',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'creditRating',name:'신용등급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befSellAmt',name:'직전매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'netIncome',name:'당기순이익',dataType:'number'}},{T:1,N:'w2:column',A:{id:'debtRatio',name:'부채비율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_manager_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라메터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라메터4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manager',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_itManager_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라메터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라메터4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_itManager',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_reqApprove_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'결재문서종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'결재요청자 ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'EP사용자 ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'결재제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'결재상세정보',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appNo',name:'신청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptYr',name:'적용년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'파일첨',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchManager',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_manager_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchManager_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchItManager',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_itManager_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchItManager_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCrdtMgnt',action:'/ac.fm.acctrecvmgnt.crdtmgnt.RetrieveCreditLimitIncreaseListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_crdtMgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_crdtMgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCrdtMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCrdtMgnt',action:'/ac.fm.acctrecvmgnt.crdtmgnt.SaveCreditLimitIncreaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_crdtMgnt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCrdtMgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ReqApprove',action:'/ac.fm.acctrecvmgnt.crdtmgnt.CreditLimitIncreaseApproveCMD.do',method:'post',mediatype:'application/x-www-form-urlencoded',ref:'data:json,{"id":"ds_reqApprove_condition","key":"IN_DS1"}',target:'_blank',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ReqApprove_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.g_sAcctDeptCd = $c.data.getMemInfo($p, "acctDeptCd"); // 귀속부서
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 시스템일자 
scwin.g_sUserId = $c.data.getMemInfo($p, "empNo"); // 사용자id
scwin.g_sUserNm = $c.data.getMemInfo($p, "userNm"); // 사용자id
scwin.g_sEpId = $c.data.getMemInfo($p, "epId");
scwin.manager = "";
scwin.managerYn = "N"; //관리자 여부
scwin.increase = "";
scwin.checkRowYn = "N";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //ASIS 히든,showfalse 그리드 필드정보
  /*gr_crdtMgnt.setColumnVisible("rejectRsn", false);
  gr_crdtMgnt.setColumnVisible("stmtPrdClsCd", false);
  gr_crdtMgnt.setColumnVisible("collMoneyCntShtCd", false);
  gr_crdtMgnt.setColumnVisible("stmtPrdDd", false);
  gr_crdtMgnt.setColumnVisible("adptYr", false);
  gr_crdtMgnt.setColumnVisible("repstNm", false);
  gr_crdtMgnt.setColumnVisible("regId", false);
  gr_crdtMgnt.setColumnVisible("reqTitle", false);
  gr_crdtMgnt.setColumnVisible("curLimitAmt2", false);
  gr_crdtMgnt.setColumnVisible("txnCls", false);
  gr_crdtMgnt.setColumnVisible("txnClsNm", false);
  gr_crdtMgnt.setColumnVisible("ralyOccpHuse", false);
  gr_crdtMgnt.setColumnVisible("ralyOccpFcty", false);
  gr_crdtMgnt.setColumnVisible("ralyOccpEtc", false);
  gr_crdtMgnt.setColumnVisible("sellAcctDept", false);
  gr_crdtMgnt.setColumnVisible("sellAcctDeptnm", false);
  gr_crdtMgnt.setColumnVisible("yySellAmt", false);
  gr_crdtMgnt.setColumnVisible("thisYySellAmt", false);
  gr_crdtMgnt.setColumnVisible("pldgRalyValue", false);
  gr_crdtMgnt.setColumnVisible("pldgRalySet", false);
  gr_crdtMgnt.setColumnVisible("pldgRalySnor", false);
  gr_crdtMgnt.setColumnVisible("pldgGrtInsr", false);
  gr_crdtMgnt.setColumnVisible("pldgEtc", false);
  gr_crdtMgnt.setColumnVisible("creditRating", false);
  gr_crdtMgnt.setColumnVisible("befSellAmt", false);
  gr_crdtMgnt.setColumnVisible("netIncomec", false);
  gr_crdtMgnt.setColumnVisible("debtRatio", false);
  gr_crdtMgnt.setColumnVisible("summary", false);
  */

  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM085",
    compID: "lc_aprSts,lc_sts,gr_crdtMgnt:sts"
  }, {
    grpCd: "SD020",
    compID: "lc_stmtPrdClsCd"
  }, {
    grpCd: "FM019",
    compID: "lc_collMoneyCntShtCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //공통 getLuxeComboData
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "CreditLimitApplyEBC",
    param2: "retrieveTxnCls",
    compID: "lc_txnCls"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  try {
    lc_sts.setSelectedIndex(0);
    ed_startDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
    ed_endDt.setValue(scwin.g_sCurrDate);
    ed_appAcctDeptCd.setValue(scwin.g_sAcctDeptCd);
    if (!$c.gus.cfIsNull($p, ed_appAcctDeptCd)) {
      // 작성부서  조회 
      scwin.f_openPopUp('1', ed_appAcctDeptCd, ed_txt_appAcctDeptNm, 'T');
    }
    scwin.getManager(); //관리자 여부 조회
  } catch (e) {
    console.log("onUdcCompleted :" + onUdcCompleted);
  }
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //TODO 위치변경 후 처리
  $c.gus.cfDisableObjects($p, [ed_txt_appNo, ed_txt_appDeptNm, ed_appDt, ed_txt_regNm, lc_sts, ed_txt_reqTitle, ed_txt_apprvStsNm, ed_txt_rejectRsn]); //신청정보
  $c.gus.cfDisableObjects($p, [ed_crn, ed_txt_busiNm, ed_txt_repstNm]); //일반현황
  $c.gus.cfDisableObjects($p, [lc_txnCls, ed_txt_yySellAmt, lc_stmtPrdClsCd, ed_txt_stmtPrdDd, lc_collMoneyCntShtCd, ed_txt_ralyOccpHuse, ed_txt_ralyOccpFcty, ed_txt_ralyOccpEtc]); //거래조건
  $c.gus.cfDisableObjects($p, [ed_sellAcctDept, ed_txt_sellAcctDeptnm, ed_thisYySellAmt]); //거래현황
  $c.gus.cfDisableObjects($p, [ed_pldgRalyValue, ed_pldgRalySet, ed_pldgRalySnor, ed_pldgGrtInsr, ed_pldgEtc, ed_saleCreditAmt]); //담보현황
  $c.gus.cfDisableObjects($p, [ed_txt_creditRating, ed_befSellAmt, ed_netIncome, ed_debtRatio, ed_txt_summary]);
  $c.gus.cfDisableObjects($p, [ed_curLimitAmt, ed_appAmt, ed_addAmt, ed_txt_appRsn]); //요청사항
  $c.gus.cfDisableObjects($p, [btn_crn, btn_sellAcctpDeptnm]);
  $c.gus.cfDisableObjects($p, [btn_aprv, btn_update, btn_cancel, btn_save, btn_del]);

  //반려사유 그룹 안보이도록 처리
  //chk_Sts.hide();
};

//-------------------------------------------------------------------------
// 담당자 정보를 가져온다.
//-------------------------------------------------------------------------
scwin.getManager = function () {
  try {
    // SELECT 절 
    let param1 = "CD_NM  as COL1 , CD  as COL2 , ''  as COL3 , ''  as COL4 , ''  as COL5 , ''  as COL6 , ''  as COL7 , ''  as COL8 , ''  as COL9 , ''  as COL10";

    // 대상테이블 	
    let param2 = " TB_ZZ002 ";

    // 조건절
    let param3 = "AND GRP_CD = 'FM129' AND USE_YN='1'";
    let param4 = "CD";
    const strParam = {
      sysCd: "CommonEBC" // 시스템코드
      ,

      queryId: "dinymicQueryTest" // 쿼리ID
      ,

      param1: param1 // SELECT
      ,

      param2: param2 // 대상테이블
      ,

      param3: param3 // 조건절
      ,

      param4: param4 // CD
    };
    //데이터셋에 정보설정
    ds_manager_condition.setJSON(strParam);
    $c.sbm.execute($p, sbm_searchManager);
  } catch (e) {
    console.log("getManager : " + e);
  }
};

//-------------------------------------------------------------------------
// 담당자 정보 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchManager_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_manager.setJSON(e.responseJSON.GAUCE);
  }

  //ASIS f_getManager();
  let comma = "";
  let j = 0;
  for (j = 0; j < ds_manager.getRowCount(); j++) {
    if (scwin.manager != "") {
      comma = ",";
    }
    scwin.manager = scwin.manager + comma + ds_manager.getCellData(j, "col1");
    if (ds_manager.getCellData(j, "col2") == scwin.g_sUserId) {
      //접속자가 관리자 일때
      scwin.managerYn = "Y";
    }
    tbx_manager.setValue("신청금액이 1천만원초과 신청인 경우 결제상신시 주관부서 담당자(" + scwin.manager + ")는 반드시 포함하셔야 합니다.");
  }
  if (scwin.managerYn != "Y") {
    //전삼담당자 확인 추가 2023.10.20 
    scwin.getItManager();
  }
};

//-------------------------------------------------------------------------
// IT담당자 정보를 가져온다.
//-------------------------------------------------------------------------
scwin.getItManager = function () {
  try {
    // SELECT 절 
    let param1 = "FLTR_CD_1  as COL1 , CD  as COL2 , ''  as COL3 , ''  as COL4 , ''  as COL5 , ''  as COL6 , ''  as COL7 , ''  as COL8 , ''  as COL9 , ''  as COL10";

    // 대상테이블 	
    let param2 = " TB_ZZ002";

    // 조건절
    let param3 = "AND GRP_CD = 'ZZ998' AND USE_YN='1' AND FLTR_CD_1 = '" + scwin.g_sUserId + "'";
    let param4 = "COL1";
    const strParam = {
      sysCd: "CommonEBC" // 시스템코드
      ,

      queryId: "dinymicQueryTest" // 쿼리ID
      ,

      param1: param1 // SELECT
      ,

      param2: param2 // 대상테이블
      ,

      param3: param3 // 조건절
      ,

      param4: param4 // CD
    };
    //데이터셋에 정보설정
    ds_itManager_condition.setJSON(strParam);
    $c.sbm.execute($p, sbm_searchItManager);
  } catch (e) {
    console.log("getItManager : " + e);
  }
};

//-------------------------------------------------------------------------
// IT담당자 정보 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchItManager_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_itManager.setJSON(e.responseJSON.GAUCE);
  }

  /*if ( !getItManager() ) {
          cfDisableObjects([ed_appAcctDeptCd , ed_txt_appAcctDeptNm, udc_appAcctDeptCd]); //조회조건}*/
  if (ds_itManager.getRowCount() == 0) {
    $c.gus.cfDisableObjects($p, [ed_appAcctDeptCd, ed_txt_appAcctDeptNm, btn_appAcctDeptCd]); //조회조건
  }
};

//-------------------------------------------------------------------------
// 신청부서코드
//-------------------------------------------------------------------------
scwin.udc_appAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('1', ed_appAcctDeptCd, ed_txt_appAcctDeptNm, 'T');
};

//-------------------------------------------------------------------------
// 신청부서찾기
//-------------------------------------------------------------------------
scwin.udc_appAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_appAcctDeptCd, ed_txt_appAcctDeptNm, 'T');
};

//-------------------------------------------------------------------------
// 사업자번호
//-------------------------------------------------------------------------
scwin.udc_busiNo_onblurCodeEvent = function (e) {
  scwin.f_openPopUp('2', ed_busiNo, ed_txt_crn, 'T');
};

//-------------------------------------------------------------------------
// 사업자번호 찾기
//-------------------------------------------------------------------------
scwin.udc_busiNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_busiNo, ed_txt_crn, 'T');
};

//-------------------------------------------------------------------------
// 조회조건 신청부서,사업자번호 조회팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = txtCode.getValue();
    let name = txtName.getValue();
    switch (select_code) {
      // 관리부서 PopUp 호출
      case '1':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 거래처
        udc_appAcctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        udc_appAcctDeptCd.cfCommonPopUp(scwin.udc_appAcctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 여신대상사업자번호 PopUp 호출
      case '2':
        //cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 조회조건 사업자번호
        udc_busiNo.setSelectId('retrieveCreditCrnInfo');
        udc_busiNo.cfCommonPopUp(scwin.udc_busiNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      default:
        $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 관리부서 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_appAcctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_appAcctDeptCd.setValue(rtnList[0]); // 사업자번호
      ed_txt_appAcctDeptNm.setValue(rtnList[1]); // 사업자명
    } else {
      ed_appAcctDeptCd.setValue(""); //
      ed_txt_appAcctDeptNm.setValue(""); //코드명
    }
  } catch (e) {
    console.log("udc_appAcctDeptCd_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 여신대상사업자번호 PopUp 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_busiNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_busiNo.setValue(rtnList[0]); // 사업자번호
      ed_txt_crn.setValue(rtnList[1]); // 사업자명
    } else {
      ed_busiNo.setValue(""); //
      ed_txt_crn.setValue(""); //코드명
    }
  } catch (e) {
    console.log("udc_busiNo_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_startDt]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_endDt]);
    if (!ret2) {
      return false;
    }
    if (ret && ret2) {
      ds_crdtMgnt.removeAll();
      $c.sbm.execute($p, sbm_retrieveCrdtMgnt);
    }
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveCrdtMgnt_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfDisableObjects($p, [ed_txt_appNo, ed_txt_appDeptNm, ed_appDt, ed_txt_regNm, lc_sts, ed_txt_reqTitle, ed_txt_apprvStsNm]); //신청정보
    $c.gus.cfDisableObjects($p, [ed_crn, ed_txt_busiNm, ed_txt_repstNm]); //일반현황
    $c.gus.cfDisableObjects($p, [lc_txnCls, ed_txt_yySellAmt, lc_stmtPrdClsCd, ed_txt_stmtPrdDd, lc_collMoneyCntShtCd, ed_txt_ralyOccpHuse, ed_txt_ralyOccpFcty, ed_txt_ralyOccpEtc]); //거래조건
    $c.gus.cfDisableObjects($p, [ed_sellAcctDept, ed_txt_sellAcctDeptnm, ed_thisYySellAmt]); //거래현황
    $c.gus.cfDisableObjects($p, [ed_pldgRalyValue, ed_pldgRalySet, ed_pldgRalySnor, ed_pldgGrtInsr, ed_pldgEtc]); //담보현황
    $c.gus.cfDisableObjects($p, [ed_txt_creditRating, ed_befSellAmt, ed_netIncome, ed_debtRatio, ed_txt_summary]);
    $c.gus.cfDisableObjects($p, [ed_curLimitAmt, ed_appAmt, ed_addAmt, ed_txt_appRsn]); //요청사항
    $c.gus.cfDisableObjects($p, [btn_crn, btn_sellAcctpDeptnm]);
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    if (ds_crdtMgnt.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
      $c.gus.cfEnableObjects($p, [btn_add]);
      $c.gus.cfDisableObjects($p, [btn_update, btn_del, btn_aprv]);
    }
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_crdtMgnt.getRowCount()));
    if (ds_crdtMgnt.getRowCount() != 0) {
      ds_crdtMgnt.setRowPosition(0);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, 0);
      if (ds_crdtMgnt.getCellData(0, "sts") == "00") {
        $c.gus.cfEnableObjects($p, [btn_update, btn_del, btn_aprv, btn_add]);
      } else if (ds_crdtMgnt.getCellData(0, "sts") == "04" && scwin.managerYn == "Y") {
        $c.gus.cfDisableObjects($p, [btn_del, btn_aprv]);
        $c.gus.cfEnableObjects($p, [btn_update, btn_add]);
      } else {
        $c.gus.cfDisableObjects($p, [btn_update, btn_del, btn_aprv]);
      }
      $c.gus.cfEnableObjects($p, [btn_add]);
      $c.gus.cfDisableObjects($p, [btn_cancel, btn_save]);

      //if(ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(),"sts") == "05" ){	//신청상태 반려
      if (ds_crdtMgnt.getCellData(0, "sts") == "05") {
        //신청상태 반려
        chk_Sts.show();
      } else {
        chk_Sts.hide();
      }
    }
  } catch (e) {
    console.log("sbm_retrieveCrdtMgnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화버튼 클릭
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
  ed_startDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_endDt.setValue(scwin.g_sCurrDate);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  if (ds_crdtMgnt.getRowCount() <= 0) {
    $c.win.alert($p, "여신한도 증감신청내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "여신한도증감액신청.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "여신한도증감액신청"
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_crdtMgnt, options, infoArr);
};

//-------------------------------------------------------------------------
// 매출귀속코드
//-------------------------------------------------------------------------
scwin.udc_sellAcctDept_onblurCodeEvent = function (e) {
  scwin.f_openPopUpAcctDept(ed_sellAcctDept, ed_txt_sellAcctDeptnm, "T");
};

//-------------------------------------------------------------------------
// 매출귀속차찾기
//-------------------------------------------------------------------------
scwin.udc_sellAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUpAcctDept(ed_sellAcctDept, ed_txt_sellAcctDeptnm, 'T');
};

//-------------------------------------------------------------------------
// 매출귀속 조회 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUpAcctDept = function (txtCode, txtName, sFlag) {
  try {
    let code = txtCode.getValue();
    let name = txtName.getValue();

    //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',code,name,sFlag,null,null,null,null,null,null,null,null,null);
    udc_sellAcctDept.setSelectId('retrieveAcctDeptCdInfo');
    udc_sellAcctDept.cfCommonPopUp(scwin.udc_sellAcctDept_callBackFunc // 콜백 함수
    , code // 화면에서의 ??? Code Element의 Value
    , name // 화면에서의 ??? Name Element의 Value
    , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
    , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는 컬럼 지정
    , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , null // 전체검색허용여부	("F")
    , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    );
  } catch (e) {
    console.log("f_openPopUpAcctDept : " + e);
  }
};

//-------------------------------------------------------------------------
// 매출귀속 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_sellAcctDept_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sellAcctDept.setValue(rtnList[0]); // 매출귀속부서 코드
      ed_txt_sellAcctDeptnm.setValue(rtnList[1]); // 매출귀속부서 명
    } else {
      ed_sellAcctDept.setValue(""); //매출귀속부서 코드
      ed_txt_sellAcctDeptnm.setValue(""); //매출귀속부서 명
    }
  } catch (e) {
    console.log("udc_sellAcctDept_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자번호(입력)
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  if (ed_crn.getValue() == "") ed_txt_busiNm.setValue("");
  scwin.f_openPopUpCrn(ed_crn, ed_txt_busiNm);
};

//-------------------------------------------------------------------------
// 사업자번호찾기(입력)
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  if (ed_crn.getValue() == "") ed_txt_busiNm.setValue("");
  scwin.f_openPopUpCrn(ed_crn, ed_txt_busiNm);
};

//-------------------------------------------------------------------------
// 사업자번호 조회 팝업 (사업자명,대표자명,결제기준,수금기한,결제방법,한도금액을 가져온다)
//-------------------------------------------------------------------------
scwin.f_openPopUpCrn = function (txtCode, txtName) {
  try {
    let code = txtCode.getValue();
    let name = txtName.getValue();

    //rtnList = cfCommonPopUp('retrieveCreditCrn',code,name,'T',null,null,null,null,null,null,null,null,null,null,"F",null,null); // 입력 사업자번호
    udc_crn.setSelectId('retrieveCreditCrn');
    udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
    , code // 화면에서의 ??? Code Element의 Value
    , name // 화면에서의 ??? Name Element의 Value
    , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
    , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는 컬럼 지정
    , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , 'F' // 전체검색허용여부	("F")
    , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    );
  } catch (e) {
    console.log("f_openPopUpCrn : " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자번호(입력) 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_crn.setValue(rtnList[0]); // 사업자번호
      ed_txt_busiNm.setValue(rtnList[1]); // 사업자명
      ed_txt_repstNm.setValue(rtnList[2]); // 대표자명
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "adptYr", rtnList[3]); //적용년도
      ed_curLimitAmt.setValue(rtnList[4]); // 한도금액
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "stmtPrdClsCd", rtnList[5]); //결제기준 코드
      ed_txt_stmtPrdDd.setValue(rtnList[7]); // 수금기간
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "collMoneyCntShtCd", rtnList[8]); //결제방법코드
      ed_saleCreditAmt.setValue(rtnList[9]); // 매출채권신용보험
      ed_pldgGrtInsr.setValue(rtnList[10]); // 보증보험
      ed_thisYySellAmt.setValue(rtnList[11]); // 미수채권
    } else {
      ed_crn.setValue(""); // 사업자번호
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "crn", "");
      ed_txt_busiNm.setValue(""); // 사업자명
      ed_txt_repstNm.setValue(""); // 대표자명
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "adptYr", ""); //적용년도
      ed_curLimitAmt.setValue(""); // 한도금액
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "stmtPrdClsCd", ""); //결제기준 코드
      ed_txt_stmtPrdDd.setValue(""); // 수금기간
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "collMoneyCntShtCd", ""); //결제방법코드
      ed_saleCreditAmt.setValue(0); // 매출채권신용보험
      ed_pldgGrtInsr.setValue(0); // 보증보험
      ed_thisYySellAmt.setValue(0); // 미수채권
    }
  } catch (e) {
    console.log("udc_crn_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_RowAdd = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [gr_crdtMgnt]);
    if (ret) {
      let row = $c.data.insertRow($p, $p.getComponentById("gr_crdtMgnt"));
      ds_crdtMgnt.setCellData(row, "sts", "00");
      ds_crdtMgnt.setCellData(row, "appDept", scwin.g_sAcctDeptCd);
      ds_crdtMgnt.setCellData(row, "appDeptNm", ed_txt_appAcctDeptNm.getValue());
      ds_crdtMgnt.setCellData(row, "appDt", scwin.g_sCurrDate);
      ds_crdtMgnt.setCellData(row, "regId", scwin.g_sUserId);
      ds_crdtMgnt.setCellData(row, "regNm", scwin.g_sUserNm);
      ds_crdtMgnt.setRowPosition(row);
      ed_sellAcctDept.setValue(scwin.g_sAcctDeptCd);
      $c.gus.cfEnableObjects($p, [btn_cancel, btn_save]);
      $c.gus.cfDisableObjects($p, [btn_add, btn_update, btn_del]);
      $c.gus.cfEnableObjects($p, [ed_crn]); //일반현황
      $c.gus.cfEnableObjects($p, [lc_txnCls, ed_txt_yySellAmt, lc_stmtPrdClsCd, ed_txt_stmtPrdDd, lc_collMoneyCntShtCd, ed_txt_ralyOccpHuse, ed_txt_ralyOccpFcty, ed_txt_ralyOccpEtc]); //거래조건
      $c.gus.cfEnableObjects($p, [ed_sellAcctDept]); //거래현황
      $c.gus.cfEnableObjects($p, [ed_pldgRalyValue, ed_pldgRalySet, ed_pldgRalySnor, ed_pldgGrtInsr, ed_pldgEtc]); //담보현황
      $c.gus.cfEnableObjects($p, [ed_txt_creditRating, ed_befSellAmt, ed_netIncome, ed_debtRatio, ed_txt_summary]);
      $c.gus.cfEnableObjects($p, [ed_appAmt, ed_txt_appRsn]); //요청사항
      $c.gus.cfEnableObjects($p, [btn_crn, btn_sellAcctpDeptnm]); //돋보기 버튼

      if (!$c.gus.cfIsNull($p, ed_sellAcctDept)) {
        // 매출귀속  조회 
        scwin.f_openPopUpAcctDept(ed_sellAcctDept, ed_txt_sellAcctDeptnm, "T");
      }
    }
  } catch (e) {
    console.log("f_RowAdd : " + e);
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  try {
    if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sts") != "00" && scwin.managerYn == "N") {
      $c.win.alert($p, "상태가 등록인 경우만 수정할 수 있습니다.");
      return false;
    }
    if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sts") != "00" && scwin.managerYn == "Y") {
      $c.gus.cfEnableObjects($p, [ed_appAmt]); //요청사항
      $c.gus.cfEnableObjects($p, [btn_cancel, btn_save]);
      $c.gus.cfDisableBtn($p, [btn_add, btn_update, btn_del]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_cancel, btn_save]);
      $c.gus.cfDisableBtn($p, [btn_add, btn_update, btn_del]);
      $c.gus.cfEnableObjects($p, [ed_crn]); //일반현황
      $c.gus.cfEnableObjects($p, [lc_txnCls, ed_txt_yySellAmt, lc_stmtPrdClsCd, ed_txt_stmtPrdDd, lc_collMoneyCntShtCd, ed_txt_ralyOccpHuse, ed_txt_ralyOccpFcty, ed_txt_ralyOccpEtc]); //거래조건
      $c.gus.cfEnableObjects($p, [ed_sellAcctDept]); //거래현황
      $c.gus.cfEnableObjects($p, [ed_pldgRalyValue, ed_pldgRalySet, ed_pldgRalySnor, ed_pldgGrtInsr, ed_pldgEtc]); //담보현황
      $c.gus.cfEnableObjects($p, [ed_txt_creditRating, ed_befSellAmt, ed_netIncome, ed_debtRatio, ed_txt_summary]);
      $c.gus.cfEnableObjects($p, [ed_appAmt, ed_txt_appRsn]); //요청사항
      $c.gus.cfEnableObjects($p, [btn_crn, btn_sellAcctpDeptnm]);
    }
  } catch (e) {
    console.log("f_Update : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  try {
    //추가등록정보는 삭제, 나머지는 undoRow
    if (ds_crdtMgnt.getRowStatus(ds_crdtMgnt.getRowPosition()) == "C") {
      ds_crdtMgnt.removeRow(ds_crdtMgnt.getRowPosition());
    } else {
      ds_crdtMgnt.undoRow(ds_crdtMgnt.getRowPosition());
    }
    if (ds_crdtMgnt.getRowCount() == 0) {
      $c.gus.cfDisableBtn($p, [btn_update, btn_save, btn_cancel, btn_del]);
      $c.gus.cfEnableObjects($p, [btn_add]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_add, btn_update, btn_del]);
      $c.gus.cfDisableBtn($p, [btn_save, btn_cancel]);
    }
    $c.gus.cfDisableObjects($p, [ed_txt_appNo, ed_txt_appDeptNm, ed_appDt, ed_txt_regNm, lc_sts, ed_txt_reqTitle, ed_txt_apprvStsNm]); //신청정보
    $c.gus.cfDisableObjects($p, [ed_crn, ed_txt_busiNm, ed_txt_repstNm]); //일반현황
    $c.gus.cfDisableObjects($p, [lc_txnCls, ed_txt_yySellAmt, lc_stmtPrdClsCd, ed_txt_stmtPrdDd, lc_collMoneyCntShtCd, ed_txt_ralyOccpHuse, ed_txt_ralyOccpFcty, ed_txt_ralyOccpEtc]); //거래조건
    $c.gus.cfDisableObjects($p, [ed_sellAcctDept, ed_txt_sellAcctDeptnm, ed_thisYySellAmt]); //거래현황
    $c.gus.cfDisableObjects($p, [ed_pldgRalyValue, ed_pldgRalySet, ed_pldgRalySnor, ed_pldgGrtInsr, ed_pldgEtc]); //담보현황
    $c.gus.cfDisableObjects($p, [ed_txt_creditRating, ed_befSellAmt, ed_netIncome, ed_debtRatio, ed_txt_summary]);
    $c.gus.cfDisableObjects($p, [ed_curLimitAmt, ed_appAmt, ed_addAmt, ed_txt_appRsn]); //요청사항
    $c.gus.cfDisableObjects($p, [btn_crn, btn_sellAcctpDeptnm]);
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    if (ds_crdtMgnt.getRowCount() == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "자료"));
      return false;
    }
    if (ds_crdtMgnt.getModifiedIndex().length == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [gr_crdtMgnt]);
    if (!ret) {
      return false;
    }
    if (!(await scwin.f_checkRow(ds_crdtMgnt.getRowPosition()))) {
      return false;
    }

    //특수문자 &입력 시 오류가 발생함에 따라 저장 전 제목 체크 2024.04.26
    if (ed_txt_busiNm.getValue().indexOf("&") >= 0) {
      $c.win.alert($p, "제목에 특수문자 &를 입력할 수 없습니다.\n사업자명 변경 후 다시 저장 하시길 바랍니다.");
      return false;
    }
    if (await $c.win.confirm($p, "저장하시겠습니까?")) {
      $c.sbm.execute($p, sbm_saveCrdtMgnt);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_RowDelete = async function () {
  try {
    if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sts") != "00") {
      $c.win.alert($p, "상태가 등록인 경우만 삭제할 수 있습니다.");
      return false;
    }
    if (ds_crdtMgnt.getRowCount() != 0) {
      $c.gus.cfEnableObjects($p, [btn_cancel, btn_save]);
    }

    //추가등록정보는 삭제, 나머지는 undoRow
    if (ds_crdtMgnt.getRowStatus(ds_crdtMgnt.getRowPosition()) == "C") {
      ds_crdtMgnt.removeRow(ds_crdtMgnt.getRowPosition());
    } else {
      let delRowPosi = ds_crdtMgnt.getRowPosition();
      ds_crdtMgnt.deleteRow(delRowPosi);
      ds_crdtMgnt.setRowPosition(delRowPosi);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, delRowPosi);
    }
  } catch (e) {
    console.log("f_RowDelete : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장콜백
//-------------------------------------------------------------------------
scwin.sbm_saveCrdtMgnt_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, "저장되었습니다.");
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_saveCrdtMgnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 데이터 유효성 체크
//-------------------------------------------------------------------------
scwin.f_checkRow = async function (row) {
  try {
    //사업자번호 체크
    if (ds_crdtMgnt.getCellData(row, "crn") == "") {
      await $c.gus.cfAlertMsg($p, "사업자번호를 입력하세요.");
      ds_crdtMgnt.setRowPosition(row);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, row);
      ed_crn.focus();
      return false;
    }

    //거래구분 체크
    if (ds_crdtMgnt.getCellData(row, "txnCls") == "") {
      await $c.gus.cfAlertMsg($p, "거래구분을 선택하세요.");
      ds_crdtMgnt.setRowPosition(row);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, row);
      lc_txnCls.focus();
      return false;
    }

    //신청금액 체크
    if (ds_crdtMgnt.getCellData(row, "appAmt") == "") {
      await $c.gus.cfAlertMsg($p, "신청금액을 입력하세요.");
      ds_crdtMgnt.setRowPosition(row);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, row);
      ed_appAmt.focus();
      return false;
    } else if (ds_crdtMgnt.getCellData(row, "appAmt") == "0") {
      await $c.gus.cfAlertMsg($p, "신청금액은 0 보다 커야합니다.");
      ds_crdtMgnt.setRowPosition(row);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, row);
      ed_appAmt.focus();
      return false;
    } else if (ds_crdtMgnt.getCellData(row, "curLimitAmt") == ds_crdtMgnt.getCellData(row, "appAmt")) {
      await $c.gus.cfAlertMsg($p, "한도금액과 신청금액이 같습니다.");
      ds_crdtMgnt.setRowPosition(row);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, row);
      ed_appAmt.focus();
      return false;
    }

    //신청사유 체크
    if (ds_crdtMgnt.getCellData(row, "appRsn") == "") {
      await $c.gus.cfAlertMsg($p, "신청사유를 입력하세요.");
      ds_crdtMgnt.setRowPosition(row);
      $c.gus.cfGoPrevPosition($p, gr_crdtMgnt, row);
      ed_txt_appRsn.focus();
      return false;
    }
    return true;
  } catch (e) {
    console.log("f_checkRow : " + e);
  }
};
scwin.ds_crdtMgnt_onrowpositionchange = function (info) {
  try {
    //CU인 정보가 있는경우 처리하지 않음.
    if (ds_crdtMgnt.getRowIndexByStatus("CU").length > 0 && scwin.checkRowYn == "N") {
      return false;
    }
    if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sts") == "00") {
      $c.gus.cfEnableObjects($p, [btn_update, btn_del, btn_aprv]);
    } else if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sts") == "04" && scwin.managerYn == "Y") {
      $c.gus.cfDisableObjects($p, [btn_del, btn_aprv]);
      $c.gus.cfEnableObjects($p, [btn_update]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_update, btn_del, btn_aprv]);
    }
    if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sts") == "05") {
      //신청상태 반려
      chk_Sts.show(); //chk_Sts.style.display = 'block';	
    } else {
      chk_Sts.hide(""); //chk_Sts.style.display = 'none';
    }
  } catch (e) {
    console.log("ds_crdtMgnt_onrowpositionchange : " + e);
  }
};
scwin.ds_crdtMgnt_oncelldatachange = function (info) {
  try {
    let colid = info.colID;
    let row = info.rowIndex;

    //증감액 자동 계산
    if (colid == "appAmt") {
      ds_crdtMgnt.setCellData(row, "addAmt", ds_crdtMgnt.getCellData(row, "appAmt") - ds_crdtMgnt.getCellData(row, "curLimitAmt"));
    }

    //제목 자동 입력	
    if (ds_crdtMgnt.getCellData(row, "curLimitAmt") == 0) {
      scwin.increase = "";
    } else if (ds_crdtMgnt.getCellData(row, "addAmt") > 0) {
      scwin.increase = "증액";
    } else {
      scwin.increase = "감액";
    }
    var rowList = dlt_gauceUtil_lc_txnCls.getMatchedJSON("code", ds_crdtMgnt.getCellData(row, "txnCls"));
    let cellValue = "";
    if (rowList.length > 0) {
      cellValue = rowList[0].name;
    }
    if (colid == "busiNm" || colid == "txnCls" || colid == "appAmt") {
      //ds_crdtMgnt.setCellData(row,"reqTitle" , ds_crdtMgnt.getCellData(row,"busiNm")+"  "+dlt_gauceUtil_lc_txnCls.getCellData(lc_txnCls.getSelectedIndex(),"name")+"청구 여신한도 "+ scwin.increase +"신청");
      ds_crdtMgnt.setCellData(row, "reqTitle", ds_crdtMgnt.getCellData(row, "busiNm") + "  " + cellValue + "청구 여신한도 " + scwin.increase + "신청");
    }

    //증감액 자동 계산
    if (colid == "busiNm") {
      //scwin.f_openPopUpCrn(ed_crn,ed_txt_busiNm);
    }
  } catch (e) {
    console.log("ds_crdtMgnt_oncelldatachange : " + e);
  }
};
scwin.ds_crdtMgnt_onbeforerowpositionchange = async function (info) {
  try {
    let oldRowIndex = info.oldRowIndex;
    let newRowIndex = info.newRowIndex;
    let row = "";
    if (ds_crdtMgnt.getRowStatus(oldRowIndex) == "C" || ds_crdtMgnt.getRowStatus(oldRowIndex) == "U") {
      row = oldRowIndex;
    }
    if (ds_crdtMgnt.getRowStatus(newRowIndex) == "C" || ds_crdtMgnt.getRowStatus(newRowIndex) == "U") {
      row = newRowIndex;
    }
    if (row != "" && row == ds_crdtMgnt.getRowPosition()) {
      if (ds_crdtMgnt.getRowStatus(row) == "C" || ds_crdtMgnt.getRowStatus(row) == "U") {
        let checkRow = await scwin.f_checkRow(row);
        if (!checkRow) {
          scwin.checkRowYn = "N";
          return false;
        } else {
          scwin.checkRowYn = "Y";
        }
      }
      $c.gus.cfDisableObjects($p, [ed_txt_appNo, ed_txt_appDeptNm, ed_appDt, ed_txt_regNm, lc_sts, ed_txt_reqTitle, ed_txt_apprvStsNm]); //신청정보
      $c.gus.cfDisableObjects($p, [ed_crn, ed_txt_busiNm, ed_txt_repstNm]); //일반현황
      $c.gus.cfDisableObjects($p, [lc_txnCls, ed_txt_yySellAmt, lc_stmtPrdClsCd, ed_txt_stmtPrdDd, lc_collMoneyCntShtCd, ed_txt_ralyOccpHuse, ed_txt_ralyOccpFcty, ed_txt_ralyOccpEtc]); //거래조건
      $c.gus.cfDisableObjects($p, [ed_sellAcctDept, ed_txt_sellAcctDeptnm, ed_thisYySellAmt]); //거래현황
      $c.gus.cfDisableObjects($p, [ed_pldgRalyValue, ed_pldgRalySet, ed_pldgRalySnor, ed_pldgGrtInsr, ed_pldgEtc]); //담보현황
      $c.gus.cfDisableObjects($p, [ed_txt_creditRating, ed_befSellAmt, ed_netIncome, ed_debtRatio, ed_txt_summary]);
      $c.gus.cfDisableObjects($p, [ed_curLimitAmt, ed_appAmt, ed_addAmt, ed_txt_appRsn]); //요청사항
      $c.gus.cfDisableObjects($p, [btn_crn, btn_sellAcctpDeptnm]);
    }
  } catch (e) {
    console.log("ds_crdtMgnt_onbeforerowpositionchange : " + e);
  }
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_aprv = async function (info) {
  try {
    if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sts") != "00") {
      $c.win.alert($p, "상태가 등록인 경우만 전자결재가 가능합니다.");
      return false;
    }
    let vReqApprvTitle = "[품의]" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "reqTitle") + "의 건";
    //특수문자 &입력 시 오류가 발생함에 따라 상신 전 제목 체크 2024.04.26
    if (vReqApprvTitle.indexOf("&") >= 0) {
      $c.win.alert($p, "제목에 특수문자 &를 입력할 수 없습니다.\n사업자명 변경 후 다시 결재요청 하시길 바랍니다.");
      return false;
    }
    if (await $c.win.confirm($p, "전자결재 요청하시겠습니까?")) {
      $c.gus.cfDisableObjects($p, [btn_aprv, btn_update, btn_del]);
      ds_crdtMgnt.setCellData(ds_crdtMgnt.getRowPosition(), "sts", "01");

      //결재요청내역 START>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      let vReqApprvDocKndCd = "032"; // 결재문서종류 -- 여신한도증감액 신청(공통코드 ZZ022)
      let vReqUserId = scwin.g_sUserId; // 결재요청자 ID
      let vEpUsrId = scwin.g_sEpId; // EP사용자 ID
      let toDay = $c.date.getServerDateTime($p, "yyyyMMdd");
      if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "curLimitAmt") == 0) {
        scwin.increase = "신청";
      } else if (ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "addAmt") > 0) {
        scwin.increase = "증액";
      } else {
        scwin.increase = "감액";
      }
      var vApprvDtlInfo = "";
      vApprvDtlInfo += "<html>";
      vApprvDtlInfo += "<head>";
      vApprvDtlInfo += "<meta http-equiv='content-type' content='text/html; charset=utf-8'>";
      vApprvDtlInfo += "<title>여신한도 " + scwin.increase + " 요청서</title>";
      vApprvDtlInfo += "<meta name='generator'>";
      vApprvDtlInfo += "</head>";
      vApprvDtlInfo += "<body bgcolor='white' width='1200' text='black' link='blue' vlink='purple' alink='red'>";
      vApprvDtlInfo += "<table width='1210' cellspacing='0' style='border-collapse:collapse;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='1200' style='border-width:1; border-color:black; border-style:none;'>";
      vApprvDtlInfo += "<h1 align='center'><u><font size='4' face='굴림체'>여신한도 " + scwin.increase + " 요청서</font></u></h1>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<br>";
      vApprvDtlInfo += "<table border='1' width='1200' cellspacing='0' bordercolordark='white' bordercolorlight='black'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='228' style='background-color:F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>제 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='1404' colspan='6'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "reqTitle") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='228' style='background-color:F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>요청부서</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='228'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "appDeptNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='228' style='background-color:F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>작성일자</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='228'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "appDt").substr(0, 4) + "/" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "appDt").substr(4, 2) + "/" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "appDt").substr(6, 2) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='228' style='background-color:F3F3F3'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>작성자</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='228'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "regId") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='228'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "regNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<span style='font-size:10pt;'><br>";
      vApprvDtlInfo += "</span><table width='1200' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='border-collapse:collapse;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='1198' colspan='6' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;&nbsp;1. 일반현황</span></font><span style='font-size:10pt;'></span></td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='173' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>사업자명</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='371' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='left'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "busiNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='160' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>사업자번호</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='214' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "crn") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='89' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>대표자명</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='175' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "repstNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<span style='font-size:10pt;'><br>";
      vApprvDtlInfo += "</span><table width='1200' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='border-collapse:collapse;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='136' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;&nbsp;2. 거래조건</span></font><span style='font-size:10pt;'></span></td>";
      vApprvDtlInfo += "<td width='135' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;</span></font></td>";
      vApprvDtlInfo += "<td width='467' colspan='3' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;</span></font></td>";
      vApprvDtlInfo += "<td width='449' colspan='3' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>(단위 :원)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='136' rowspan='2' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>거래구분</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='135' rowspan='2' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>년 매출액</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='467' colspan='3' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>결제조건</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='449' colspan='3' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>부동산 점유 형태</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='153' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>결제기준</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='153' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>수금기간</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='155' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>결제방법</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='147' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>주택</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='147' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>공장</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='149' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>기타</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='136' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "txnClsNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='135' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "yySellAmt")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='153' style='border-width:1; border-color:black; border-style:solid;'>";
      //gr_crdtMgnt.VirtualString(ds_crdtMgnt.RowPosition,"stmtPrdClsCd")  stmtPrdClsNm으로변경
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "stmtPrdClsNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='153' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "stmtPrdDd") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='155' style='border-width:1; border-color:black; border-style:solid;'>";
      //gr_crdtMgnt.VirtualString(ds_crdtMgnt.RowPosition,"collMoneyCntShtCd")  collMoneyCntShtNm으로변경
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "collMoneyCntShtNm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='147' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "ralyOccpHuse") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='147' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "ralyOccpFcty") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='149' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "ralyOccpEtc") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<span style='font-size:10pt;'><br>";
      vApprvDtlInfo += "</span><table width='1200' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='border-collapse:collapse;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;&nbsp;3. 거래현황</span></font><span style='font-size:10pt;'></span></td>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;</span></font></td>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;</span></font></td>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;</span></font></td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>매출귀속</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "sellAcctDeptnm") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>미수채권(단위:원)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='300' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "thisYySellAmt")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<span style='font-size:10pt;'><br>";
      vApprvDtlInfo += "</span><table width='1200' height='75' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='border-collapse:collapse;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='978' colspan='3' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;&nbsp;4. 담보현황</span></font><span style='font-size:10pt;'></span></td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;</span></font></td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;</span></font></td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>(단위 :원)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='978' colspan='3' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>부동산</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;' rowspan=2>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>보증보험</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;' rowspan=2>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>기타</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;' rowspan=2>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>매출채권신용보험(단위:원)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>실가치</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>설정액</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>선순위</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='322' height='21' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "pldgRalyValue")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' height='21' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "pldgRalySet")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' height='21' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "pldgRalySnor")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' height='21' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "pldgGrtInsr")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' height='21' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "pldgEtc")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='322' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "saleCreditAmt")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<span style='font-size:10pt;'><br>";
      vApprvDtlInfo += "</span>";
      vApprvDtlInfo += "<table width='1200' height='55' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='border-collapse:collapse;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td colspan='4' width='512' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;' colspan='3'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;&nbsp;5. 신용조사 분석 결과(크레탑 이용)</span></font><span style='font-size:10pt;'></span></td>";
      vApprvDtlInfo += "<td width='682' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>(단위 : 원)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='180' height='25' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>신용등급</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='180' height='25' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>직전매출액</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='180' height='25' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>당기순이익</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='180' height='25' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>부채비율</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='474' height='25' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>비고</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='180' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "creditRating") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='180' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "befSellAmt")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='180' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "netIncome")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='180' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "debtRatio") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='474' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='left'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "summary") + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<span style='font-size:10pt;'><br>";
      vApprvDtlInfo += "</span><table width='1201' cellspacing='0' bordercolordark='white' bordercolorlight='black' style='border-collapse:collapse;'>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='512' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;' colspan='3'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;&nbsp;6. 지사,팀,점 요청사항</span></font><span style='font-size:10pt;'></span></td>";
      vApprvDtlInfo += "<td width='682' style='border-width:1; border-color:black; border-top-style:none; border-right-style:none; border-bottom-style:solid; border-left-style:none;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>(단위 : 원)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='168' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>한도금액(현)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='169' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>여신요청금액(월)</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='169' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>증감액</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='682' style='border-width:1; border-color:black; border-style:solid; background-color:F3F3F3;'>";
      vApprvDtlInfo += "<p align='center'><font face='굴림체'><span style='font-size:10pt;'>요청사유</span></font><span style='font-size:10pt;'></span></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "<tr>";
      vApprvDtlInfo += "<td width='168' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "curLimitAmt")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='169' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "appAmt")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='169' style='border-width:1; border-color:black; border-style:solid;'>";
      vApprvDtlInfo += "<p align='right'><font face='굴림체'><span style='font-size:10pt;'>&nbsp;" + $c.gus.cfInsertComma($p, ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "addAmt")) + "</span></font></p>";
      vApprvDtlInfo += "</td>";
      vApprvDtlInfo += "<td width='682' style='border-width:1; border-color:black; border-style:solid;'><font size='2'>&nbsp;" + ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "appRsn") + "</font></td>";
      vApprvDtlInfo += "</tr>";
      vApprvDtlInfo += "</table>";
      vApprvDtlInfo += "<font size='2'><br>";
      vApprvDtlInfo += "</font></body>";
      vApprvDtlInfo += "</html>";
      console.log("vApprvDtlInfo : " + vApprvDtlInfo);

      //결재요청내역 END>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      const params = {
        apprvDocKndCd: vReqApprvDocKndCd,
        //결재문서종류
        reqUserId: vReqUserId,
        //결재요청자
        epUserId: vEpUsrId,
        //EP사용자
        apprvTitle: vReqApprvTitle,
        //결재제목
        apprvDtlInfo: vApprvDtlInfo,
        //결재문서양식
        bmodifyattach: "Y",
        //파일첨부 버튼 여부
        appNo: ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "appNo"),
        //신청번호
        crn: ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "crn"),
        //사업자번호
        adptYr: ds_crdtMgnt.getCellData(ds_crdtMgnt.getRowPosition(), "adptYr") //적용년도
      };
      //데이터셋에 정보설정
      ds_reqApprove_condition.setJSON(params);
      //$c.sbm.execute(sbm_ReqApprove);

      let url = "/ac.fm.acctrecvmgnt.crdtmgnt.CreditLimitIncreaseApproveCMD.do";
      let targetName = "aprvPopup"; // 고정 이름(재사용)

      var data = ds_reqApprove_condition.getJSON() || {};
      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;
      form.target = targetName;

      // ✅ 팝업 차단 회피: 사용자 클릭 이벤트 안에서 실행되어야 함
      const win = window.open("", targetName); // about:blank 대신 빈 문자열로 재사용
      // 팝업이 막히면 win이 null일 수 있음
      if (!win) {
        // 여기서 그냥 location 이동하거나 alert 처리 등
        console.warn("Popup blocked");
      }
      Object.keys(data).forEach(key => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = (data[key] ?? "").toString();
        form.appendChild(input);
      });
      document.body.appendChild(form);
      console.log("POST keys:", Object.keys(data));
      console.log("epUserId:", data.epUserId);
      console.log("apprvDtlInfo length:", (data.apprvDtlInfo || "").length);
      console.log("apprvTitle:", data.apprvTitle);
      form.submit();
      document.body.removeChild(form);
    }
  } catch (e) {
    console.log("f_aprv : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',style:'',edFromId:'ed_startDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'ds_condition',refStDt:'startDt',refEdDt:'endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_appAcctDeptCd',nameId:'ed_txt_appAcctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',selectID:'retrieveAcctDeptCdInfo',id:'udc_appAcctDeptCd',validTitle:'신청부서',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_condition',code:'appDept','ev:onblurCodeEvent':'scwin.udc_appAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_appAcctDeptCd_onclickEvent',btnId:'btn_appAcctDeptCd',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_busiNo',nameId:'ed_txt_crn',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'retrieveCreditLimitTargetCrnInfo',style:'',btnId:'btn_busiNo',validTitle:'사업자번호',code:'crn',refDataCollection:'ds_condition',allowCharCode:'0-9',maxlengthCode:'13',objTypeCode:'data',objTypeName:'data',id:'udc_busiNo','ev:onblurCodeEvent':'scwin.udc_busiNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_busiNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_aprSts',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:ds_condition.sts'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_crdtMgnt',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_crdtMgnt',id:'gr_crdtMgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'appNo',inputType:'text',value:'신청번호',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDt',inputType:'text',value:'신청일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDept',inputType:'text',value:'신청부서',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDeptNm',inputType:'text',value:'부서명',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',value:'사업자번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',value:'사업자명',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'curLimitAmt',inputType:'text',value:'한도금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appAmt',inputType:'text',value:'신청금액',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addAmt',inputType:'text',value:'증감액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sts',value:'신청상태',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvStsNm',value:'결재상태',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'apprvReqNo',value:'결재요청번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvEmpNm',value:'결재자명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'appRsn',value:'신청사유',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm',value:'신청자명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rejectRsn',value:'반려사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stmtPrdClsCd',value:'결제기준',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyCntShtCd',value:'결제방법',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stmtPrdDd',value:'수금기간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'adptYr',value:'적용년도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repstNm',value:'대표자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqTitle',value:'요청제목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'curLimitAmt',value:'여신한도금액(현)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'txnCls',value:'거래구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'txnClsNm',value:'거래구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ralyOccpHuse',value:'부동산점유형태-주택',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ralyOccpFcty',value:'부동산점유형태-공장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ralyOccpEtc',value:'부동산점유형태-기타',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDept',value:'매출귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'sellAcctDeptnm',value:'매출귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'yySellAmt',value:'년매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'thisYySellAmt',value:'미수채권',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'pldgRalyValue',value:'담보부동산-실가치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'pldgRalySet',value:'담보부동산-설정액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pldgRalySnor',value:'담보부동산선순위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pldgGrtInsr',value:'적담보보증보험',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pldgEtc',value:'담보기타',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'creditRating',value:'신용등급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'befSellAmt',value:'직전매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'netIncomec',value:'당기순이익',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'debtRatio',value:'부채비율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'appNo',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDept',inputType:'text',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'curLimitAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'appAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addAmt',inputType:'expression',width:'100',expression:'Number(display(\'appAmt\'))-Number(display(\'curLimitAmt\'))',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'sts',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvStsNm',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'apprvReqNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'apprvEmpNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'appRsn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rejectRsn',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stmtPrdClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyCntShtCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stmtPrdDd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'adptYr',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repstNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regId',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'reqTitle',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'curLimitAmt2',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'txnCls',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'txnClsNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ralyOccpHuse',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ralyOccpFcty',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'ralyOccpEtc',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'sellAcctDept',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'sellAcctDeptnm',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'yySellAmt',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'thisYySellAmt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'pldgRalyValue',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'pldgRalySet',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pldgRalySnor',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pldgGrtInsr',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pldgEtc',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'creditRating',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'befSellAmt',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'netIncomec',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'debtRatio',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'신청정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_txt_appNo',objType:'data',style:'width: 150px;',title:'신청번호',ref:'data:ds_crdtMgnt.appNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_appDeptNm',objType:'data',style:'width: 150px;',title:'신청부서',ref:'data:ds_crdtMgnt.appDeptNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_appDt',style:'',title:'신청일자',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_crdtMgnt.appDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_regNm',objType:'data',style:'width: 150px;',title:'신청자',ref:'data:ds_crdtMgnt.regNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'$blank',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sts',style:'width: 150px;',submenuSize:'fixed',title:'신청상태',ref:'data:ds_crdtMgnt.sts'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_reqTitle',objType:'data',style:'',title:'제목',ref:'data:ds_crdtMgnt.reqTitle'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결재상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_apprvStsNm',objType:'data',style:'width: 150px;',title:'결재상태',ref:'data:ds_crdtMgnt.apprvStsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'chk_Sts'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반려사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'9'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_rejectRsn',objType:'data',style:'width: 150px;',title:'반려사유',ref:'data:ds_crdtMgnt.rejectRsn'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일반현황 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_crn',maxlengthCode:'13',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_txt_busiNm',mandatoryName:'true',objTypeName:'data',code:'crn',name:'busiNm',selectID:'retrieveCreditCrn',id:'udc_crn',validTitle:'사업자번호',refDataCollection:'ds_crdtMgnt','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',btnId:'btn_crn',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_repstNm',style:'width: 150px;',objType:'data',title:'대표자명',ref:'data:ds_crdtMgnt.repstNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래조건 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_txnCls',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabelLocaleRef:'선택',ref:'data:ds_crdtMgnt.txnCls'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_txt_yySellAmt',objType:'data',class:'tar',allowChar:'0-9',dataType:'number',userData1:'number',title:'매출액',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.yySellAmt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제기준',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_stmtPrdClsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabelLocaleRef:'선택',ref:'data:ds_crdtMgnt.stmtPrdClsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수금기한',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_txt_stmtPrdDd',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',title:'수금기한',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.stmtPrdDd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제방법',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_collMoneyCntShtCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabelLocaleRef:'선택',ref:'data:ds_crdtMgnt.collMoneyCntShtCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tar',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부동산점유형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주택',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_ralyOccpHuse',objType:'data',style:'width: 150px;',title:'주택',ref:'data:ds_crdtMgnt.ralyOccpHuse'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_ralyOccpFcty',objType:'data',style:'width: 150px;',title:'공장',ref:'data:ds_crdtMgnt.ralyOccpFcty'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_ralyOccpEtc',objType:'data',style:'width: 150px;',title:'기타',ref:'data:ds_crdtMgnt.ralyOccpEtc'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래현황 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출귀속 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sellAcctDept',nameId:'ed_txt_sellAcctDeptnm',maxlengthCode:'5',allowCharCode:'0-9',selectID:'retrieveAcctDeptCdInfo',id:'udc_sellAcctDept',validTitle:'매출귀속',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_crdtMgnt',code:'sellAcctDept',btnId:'btn_sellAcctpDeptnm',name:'sellAcctDeptnm','ev:onblurCodeEvent':'scwin.udc_sellAcctDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_sellAcctDept_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미수채권',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_thisYySellAmt',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'미수채권',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.thisYySellAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'담보현황 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tar'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부동산',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실가치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_pldgRalyValue',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'실가치',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.pldgRalyValue'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설정액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_pldgRalySet',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'설정액',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.pldgRalySet'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선순위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_pldgRalySnor',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'선순위',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.pldgRalySnor'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보증보험',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_pldgGrtInsr',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'보증보험',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.pldgGrtInsr'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_pldgEtc',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'기타',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.pldgEtc'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출채권신용보험',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_saleCreditAmt',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'매출채권신용보험',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.saleCreditAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 신용조사 결과 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신용등급',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직전매출액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당기순이익',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부채비율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_creditRating',style:'',objType:'data',title:'신용등급',ref:'data:ds_crdtMgnt.creditRating'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_befSellAmt',style:'',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'직전매출액',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.befSellAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_netIncome',style:'',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'당기순이익',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.netIncome'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_debtRatio',style:'',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'부채비용',displayFormat:'#,##0.#0',ref:'data:ds_crdtMgnt.debtRatio'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_summary',style:'',title:'비고',ref:'data:ds_crdtMgnt.summary'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요청사항 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'한도금액(현)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_curLimitAmt',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'한도금액',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.curLimitAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_appAmt',style:'width: 150px;',mandatory:'true',objType:'data',dataType:'number',userData1:'number',maxlength:'13',title:'신청금액',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.appAmt',allowChar:'0-9-',adjustMaxLength:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증감액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_addAmt',style:'width: 150px;',objType:'data',allowChar:'0-9',dataType:'number',userData1:'number',maxlength:'13',title:'증감액',displayFormat:'#,##0',ref:'data:ds_crdtMgnt.addAmt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_appRsn',style:'',objType:'data',title:'신청사유',ref:'data:ds_crdtMgnt.appRsn'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'info-list txt-black'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'tbx_manager',label:'',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'최초여신한도 설정시 신청금액이 300만원 초과될 경우 전자결재는 필수입니다.(최초여신한도 설정시 신청금액이 300만원 이하이면 전자결재 없이 등록이 가능)',class:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_aprv',style:'',type:'button','ev:onclick':'scwin.f_aprv',objType:'bAprv'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재요청'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_add',style:'',type:'button','ev:onclick':'scwin.f_RowAdd',objType:'bAdd'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_del',style:'',type:'button','ev:onclick':'scwin.f_RowDelete',objType:'bDel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})