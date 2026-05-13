/*amd /ui/cm/bc/comnmgnt/logmgnt/zz_650_01_07b.xml 46497 d5a3669036f0d4699ab1805f1fa159d3d77c09aa37918949e58be8ba3dcd499a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_logQueryCon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logDtmFrom',name:'조회일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logDtmTo',name:'조회일자(끝)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리 유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postReqDtFrom',name:'회계요청일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postReqDtTo',name:'회계요청일자(끝)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_approveDetail',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'approveRequestNumber',name:'상세조회_승인요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKnd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postReqDt',name:'회계요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'차변금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'대변금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'drAmtFcrc',name:'차변(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crAmtFcrc',name:'대변(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_log',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logDtm',name:'로그일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvTitle',name:'전자결재제목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisApprvStsNm',name:'DEBIS상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'debisApprvStsCd',name:'DEBIS결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'전자결재상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNoYn',name:'전표유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errorMsg',name:'오류메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procYn',name:'처리유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'처리일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procUserNm',name:'처리자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvDocKndNm',name:'결재문서종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvDocKndCd',name:'결재문서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvInfo',name:'수신정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'epdocId',name:'EP문서ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'epApprvStsCd',name:'EP결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'승인자사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tskId',name:'tskId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimitAmt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modCrdtLimitAmt',name:'name38',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_frmReqApprove',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvDocKndCd',name:'결재문서종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvInfo',name:'수신정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'epdocId',name:'EP문서ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'epApprvStsCd',name:'EP결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNo',name:'승인자사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tskId',name:'tskId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crdtLimitAmt',name:'여신한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'변경 기준일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modCrdtLimitAmt',name:'변경여신한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_getMaxCloseYm',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_itManager'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approveDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'approveRequestNumber',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_frmReqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'결재문서종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcvInfo',name:'수신정보',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epdocId',name:'EP문서ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epApprvStsCd',name:'EP결재상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvEmpNo',name:'승인자사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tskId',name:'tskId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crdtLimitAmt',name:'여신한도금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'변경 기준일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modCrdtLimitAmt',name:'변경여신한도금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ElectronicApprovalRequestFrame',name:'전자결재요청화면 여부',dataType:'text',defaultValue:'NO'}},{T:1,N:'w2:key',A:{id:'postYn',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNoYn',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'debisApprvStsCd',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDocKndNm',name:'name18',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_log',action:'/cm.bc.comnmgnt.logmgnt.RetrieveApprvErrorLogCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_logQueryCon","key":"IN_DS1"},{"id":"ds_log","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_log","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_log_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_approveDetail',action:'/cm.bc.apprvmgnt.elecapprv.RetrieveSlipApproveRequestDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_approveDetail',target:'data:json,{"id":"ds_approveDetail","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_approveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_frmReqApprove',action:'/cm.bc.comnmgnt.logmgnt.ProcessApprvErrorLogCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_frmReqApprove',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_itManager',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_itManager',target:'data:json,{"id":"ds_itManager","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 조회일자 2023/07/01 ~ 2023/07/31 
// 회계요청일자 2023/07/01 ~ 2023/07/31 
// 회사 코드 지우고

// 회계처리 데이터
// 조회일자 20201201 ~ 20210101
// 회계요청일자 20201101 ~ 20201201
// 회사코드 000

scwin.sysdate = WebSquare.date.getCurrentServerDate();
scwin.vLoginCoCd = $c.gus.cfIsNull($p, 000) ? '' : '000'; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, 0) ? '' : '0'; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = "null"; // 사용자소속구분코드 
scwin.vCoCd = $c.gus.cfIsNull($p, 000) ? '' : '000'; // 회사코드
scwin.isSubCompany = false;
scwin.memJson = $c.data.getMemInfo($p);
scwin.g_sUserId = scwin.memJson.userId; // 사용자id

// 서버시간 기준 해당 월 첫날, 마지막날 
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 20251201
scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.strFromDate); // 31
scwin.strToDate = scwin.strFromDate.substring(0, 6) + scwin.strLastDate; // 20251231

scwin.onpageload = function () {
  // scwin.f_setCompanyInfo();
  ds_search2.set("coCd", scwin.vCoCd);
};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  logDtmFrom.setValue(scwin.strFromDate);
  logDtmTo.setValue(scwin.sysdate);

  // 회계처리 테스트 데이터
  // logDtmFrom.setValue("20201201")
  // logDtmTo.setValue("20210101")
  // postReqDtFrom.setValue("20201101")
  // postReqDtTo.setValue("20201201")

  scwin.f_setCompanyInfo();
  scwin.getMaxCloseYm(); //마감년월 가져오기 
};

// 전월 마감여부 
scwin.getMaxCloseYm = function () {
  // tr_getMaxCloseYm.Post();  
  $c.sbm.execute($p, sbm_getMaxCloseYm);
};
scwin.f_Retrieve = function () {
  if ((logDtmFrom.getValue() == "" || logDtmTo.getValue() == "") && (postReqDtFrom.getValue() == "" || postReqDtTo.getValue() == "")) {
    $c.win.alert($p, "조회일자는 또는 회계요청일자는 필수 입력 항목입니다.");
    return;
  }
  if (logDtmFrom.getValue() != "" && logDtmTo.getValue() != "") {
    if (!scwin.f_DifferBetweenDate2(logDtmFrom.getValue(), logDtmTo.getValue())) {
      $c.win.alert($p, "조회 시작일자가 종료일자 이전이어야 합니다.");
      return;
    }
    if (!scwin.f_DifferBetweenDate(logDtmFrom.getValue(), logDtmTo.getValue())) {
      $c.win.alert($p, "최대 검색기간은 1달입니다.");
      return;
    }
  }
  if (postReqDtFrom.getValue() != "" && postReqDtTo.getValue() != "") {
    if (!scwin.f_DifferBetweenDate2(postReqDtFrom.getValue(), postReqDtTo.getValue())) {
      $c.win.alert($p, "회계요청 시작일자가 종료일자 이전이어야 합니다.");
      return;
    }
    if (!scwin.f_DifferBetweenDate(postReqDtFrom.getValue(), postReqDtTo.getValue())) {
      $c.win.alert($p, "최대 검색기간은 1달입니다.");
      return;
    }
  }

  // ds_logQueryCon.UseChangeInfo = false ; // 조회조건으로 넘기기위하여 임의로 모든 Data를 Insert Status로 변경
  // tr_log.Action = "/cm.bc.comnmgnt.logmgnt.RetrieveApprvErrorLogCMD.do" ;  
  // tr_log.Post(); 
  $c.sbm.execute($p, sbm_log);
};

//상세조회 to-do
scwin.f_Retrieve_Detail = function (fw) {
  // var condition = "?approveRequestNumber=" + ds_log.getCellData(ds_log.rowPosition, "apprvReqNo");
  // ds_approveDetail.DataID = "/cm.bc.apprvmgnt.elecapprv.RetrieveSlipApproveRequestDetailCMD.do" + condition; 
  // ds_approveDetail.Reset();

  let logVal = ds_log.getCellData(ds_log.getRowPosition(), "apprvReqNo");
  dma_approveDetail.set("approveRequestNumber", logVal);
  $c.sbm.execute($p, sbm_approveDetail);
};

//-------------------------------------------------------------------------
// 회계처리
//-------------------------------------------------------------------------
scwin.f_Post = async function () {
  debugger;
  if (ds_log.getRowCount() == "0") {
    await $c.win.alert($p, "선택된 내역이 없습니다.");
    return;
  }
  let rowPos1 = ds_log.getRowPosition();
  let rowData1 = ds_log.getRowJSON(rowPos1);
  var vApprvReqNo = rowData1["apprvReqNo"];
  var vPostYn = rowData1["postYn"];
  var vSlipNoYn = rowData1["slipNoYn"];
  var vApprvStsCd = rowData1["apprvStsCd"];
  var vApprvDocKndCd = rowData1["apprvDocKndCd"]; //결재문서종류코드
  var vDebisApprvStsCd = rowData1["debisApprvStsCd"]; //debis상태
  var vApprvDocKndNm = rowData1["apprvDocKndNm"]; //결재문서종류명

  if (vApprvDocKndCd == "001") {
    //전표승인
    if (vPostYn == "Y" || vSlipNoYn == "N" || vApprvStsCd != "05") {
      var msg = "";
      if (vPostYn == "Y") {
        msg = "는 이미 회계처리 되었습니다.";
      }
      if (vSlipNoYn == "N") {
        msg = "에 대한 전표가 존재하지 않습니다.";
      }
      if (vApprvStsCd != "05") {
        msg = " 전자결재상태가 최종승인만 회계처리 가능합니다.";
      }
      await $c.win.alert($p, "[요청번호 " + vApprvReqNo + "]" + msg);
      return false;
    }
  } else {
    //전표승인 이외 처리는 전산담당자만 가능
    if (!scwin.getItManager()) {
      await $c.win.alert($p, "[요청번호 " + vApprvReqNo + "] " + vApprvDocKndNm + " 문서는 전산담당자만 처리 가능합니다.");
      return false;
    } else {
      if (vApprvStsCd != "05") {
        await $c.win.alert($p, "전자결재상태가 최종승인만 처리 가능합니다.");
        return false;
      }
      if (vDebisApprvStsCd == "05") {
        await $c.win.alert($p, "DEBIS상태가 최종승인입니다. 재처리 불가능합니다.");
        return false;
      }
    }
  }
  var msg = "";
  if (vApprvDocKndCd == "001") {
    //전표승인
    msg = "회계처리하시겠습니까?";
  } else {
    msg = "재처리하시겠습니까?";
  }
  let processChk = await $c.win.confirm($p, "[요청번호 " + vApprvReqNo + "]" + msg);
  if (processChk != true) {
    return;
  }
  debugger;
  //결재요청내역 START>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  let rowPos = ds_log.getRowPosition();
  let rowData = ds_log.getRowJSON(rowPos);
  var vApprvReqNo = rowData["apprvReqNo"]; // 요청번호
  var vApprvDocKndCd = rowData["apprvDocKndCd"]; // 결재문서종류코드
  var vRcvInfo = rowData["rcvInfo"]; // 수신정보
  var vEpdocId = rowData["epdocId"]; // EP문서ID
  var vEpApprvStsCd = rowData["epApprvStsCd"]; // EP결재상태코드
  var vApprvStsCd = rowData["apprvStsCd"]; // 결재상태코드
  var vApprvEmpNo = rowData["apprvEmpNo"]; // 승인자사번
  var vTskId = rowData["tskId"]; // tskId

  //여신한도 증감액  추가 파라미터
  var vCrdtLimitAmt = rowData["crdtLimitAmt"]; //여신한도금액
  var vAdptDt = rowData["adptDt"]; //변경 기준일
  var vModCrdtLimitAmt = rowData["modCrdtLimitAmt"]; //변경여신한도금액

  // to-do
  dma_frmReqApprove.set("apprvReqNo", vApprvReqNo);
  dma_frmReqApprove.set("apprvDocKndCd", vApprvDocKndCd);
  dma_frmReqApprove.set("rcvInfo", vRcvInfo);
  dma_frmReqApprove.set("epdocId", vEpdocId);
  dma_frmReqApprove.set("epApprvStsCd", vEpApprvStsCd);
  dma_frmReqApprove.set("apprvStsCd", vApprvStsCd);
  dma_frmReqApprove.set("apprvEmpNo", vApprvEmpNo);
  dma_frmReqApprove.set("tskId", vTskId);
  dma_frmReqApprove.set("crdtLimitAmt", vCrdtLimitAmt);
  dma_frmReqApprove.set("adptDt", vAdptDt);
  dma_frmReqApprove.set("modCrdtLimitAmt", vModCrdtLimitAmt);
  dma_frmReqApprove.set("ElectronicApprovalRequestFrame", "NO");

  // frmReqApprove.submit();
  $c.sbm.execute($p, sbm_frmReqApprove);
};
scwin.f_DifferBetweenDate = function (sDateStr, eDateStr, dateFormat, row) {
  if ($c.date.diffDate($p, sDateStr, eDateStr) > 31) {
    return false;
  }
  return true;
};
scwin.f_DifferBetweenDate2 = function (sDateStr, eDateStr, dateFormat, row) {
  sDateStr = sDateStr.trim();
  eDateStr = eDateStr.trim();
  // 종료일자가 시작일자 이후인지 확인
  if (sDateStr > eDateStr) {
    return false;
  }
  return true;
};

// 자회사 회계 시스템 추가에 따른 설정 
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != 'SA') {
    scwin.vLoginCoCd = '000';
    scwin.vLoginCoClsCd = '0';
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == 'F' || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, txt_coNm, img_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm, img_company]);
  }
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

// 회사 입력 팝업 to-do
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  // pWinCloseTF
  var rtnList = await udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    txt_coNm.setValue(rtnList[5]); // 회사명 
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분   
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
    scwin.ed_coCd_hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > '0') {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

// IT담당자 정보를 가져온다.
scwin.getItManager = function () {
  // SELECT 절 
  var param1 = "FLTR_CD_1 		as COL1 " + ",CD 				as COL2 " + ",''   			as COL3 " + ",''   			as COL4 " + ",''  			as COL5 " + ",'' 				as COL6 " + ",'' 				as COL7 " + ",'' 				as COL8 " + ",'' 				as COL9 " + ",'' 				as COL10 ";

  // 대상테이블 	
  var param2 = "TB_ZZ002";
  var param3 = "AND GRP_CD = 'ZZ998' AND USE_YN='1' AND FLTR_CD_1 = '" + scwin.g_sUserId + "'";
  var param4 = "COL1";
  ds_itManager.set("sysCd", "CommonEBC");
  ds_itManager.set("queryId", "dinymicQueryTest");
  ds_itManager.set("param1", param1);
  ds_itManager.set("param2", param2);
  ds_itManager.set("param3", param3);
  ds_itManager.set("param4", param4);
  $c.sbm.execute($p, sbm_itManager);
  if (ds_itManager.get("sysCd") != "") {
    // ds_itManager.CountRow > 0
    return true;
  } else {
    return false;
  }
};

// -----------------------------------------------------------------------------
//     G A U C E   C O M P O N E N T' S   E V E N T S  
// -----------------------------------------------------------------------------
scwin.gr_log_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // ds_log.RowLevel(rowIndex) != 0
  if (ds_log.getRowStatusValue(rowIndex) != 0) {
    return;
  }
  scwin.f_Retrieve_Detail();
};
scwin.sbm_log_submitdone = function (e) {
  let rowCnt = gr_log.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    totalRows.setValue("0");
    totalRowsDetail.setValue("0");
  }
  ds_approveDetail.removeAll();
};

// for=gr_log event=OnCheckClick(Row,Colid,Check)
scwin.gr_log_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    if (ds_log.getCellData(rowIndex, "chk") == 'T') {
      if (ds_log.getCellData(rowIndex, "slipNoYn") == 'N') {
        $c.win.alert($p, "요청번호 " + ds_log.getCellData(rowIndex, "apprvReqNo") + "는 전표가 존재하지 않습니다.");
        ds_log.setCellData(rowIndex, "chk", 'F');
        return false;
      }
      if (ds_log.getCellData(rowIndex, "postYn") == 'Y') {
        $c.win.alert($p, "요청번호 " + ds_log.getCellData(rowIndex, "apprvReqNo") + "는 이미 회계처리 되었습니다.");
        ds_log.setCellData(rowIndex, "chk", 'F');
        return false;
      }
      if (ds_log.getCellData(rowIndex, "apprvStsCd") != '05') {
        $c.win.alert($p, "요청번호 " + ds_log.getCellData(rowIndex, "apprvReqNo") + " 전자결재상태가 최종승인건만 회계처리 가능합니다.");
        ds_log.setCellData(rowIndex, "chk", 'F');
        return false;
      }
    } else if (ds_log.getCellData(rowIndex, "chk") == 'F') {
      ds_log.setCellData(rowIndex, "chk", 'F');
    }
  }
};

// for=ds_approveDetail event=OnLoadCompleted(rowCnt)
scwin.sbm_approveDetail_submitdone = function (e) {
  let rowCnt = gr_approveDetail.getTotalRow();
  totalRowsDetail.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "해당 요청번호에 대한 전표내역이 없습니다.");
  }
  gr_approveDetail.setColumnStyle("slipNo", "color", "blue");
  gr_approveDetail.setColumnStyle("slipNo", "text-decoration", "underline");
};

// for=ds_getMaxCloseYm event=OnLoadCompleted(rowcnt)
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  var thisYm = scwin.sysdate; // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    var firstDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + "01"; // 1일

    var lastDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날
    postReqDtTo.setValue(lastDay); //작성일자 셋팅
    postReqDtFrom.setValue(firstDay);
  } else {
    var firstDay = thisYm.substr(0, 4) + "/" + thisYm.substr(4, 2) + "/" + "01"; //당월 1일
    var lastDay = thisYm.substr(0, 4) + "/" + thisYm.substr(4, 2) + "/" + new Date(thisYm.substr(0, 4), thisYm.substr(4, 2), 0).getDate(); //당월 마지막날
    postReqDtTo.setValue(lastDay); //작성일자 셋팅
    postReqDtFrom.setValue(firstDay);
  }
};

// for=gr_approveDetail event=OnClick(Row,Colid)
scwin.gr_approveDetail_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo" && rowIndex >= 0) {
    await $c.gus.cfShowSlipInfo($p, ds_approveDetail.getCellData(rowIndex, "slipNo"));
  }
};
scwin.udc_coCd_onviewchangeCodeEvent = function (info) {
  if (ed_coCd.getValue() == "") {
    txt_coNm.setValue("");
    return;
  } else {
    txt_coNm.setValue("");
    let val = 'T';
    scwin.f_PopUpCompanyInfo(val);
  }
};
scwin.f_Export = function () {
  let rowCnt = ds_approveDetail.getTotalRow();
  if (rowCnt <= 0) {
    $c.win.alert($p, "전표결재요청-상세조회 내역이 존재하지않습니다.");
    return false;
  }
  // cfGridToExcel(gr_groupCode, gridName, "C:\\" + gridName + ".xls", 4 + 8 + 16);

  const grdObj = gr_approveDetail;
  const infoArr = [];
  const options = {
    fileName: "전표결재요청-상세조회" + ".xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "전표결재요청-상세조회"
  };
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회(로그)일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'logDtmFrom',refDataMap:'ds_logQueryCon',style:'',id:'udc_retrieveCalendar',refEdDt:'logDtmTo',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'logDtmFrom',edToId:'logDtmTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계요청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_acctReqCalendar',refDataMap:'ds_logQueryCon',refEdDt:'postReqDtTo',refStDt:'postReqDtFrom',style:'',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'postReqDtFrom',edToId:'postReqDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'',nameId:'txt_coNm',style:'',id:'udc_coCd',btnId:'img_company',refDataCollection:'ds_logQueryCon','ev:onviewchangeCodeEvent':'scwin.udc_coCd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',code:'coCd'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'apprvReqNo',style:'width:200px;',ref:'data:ds_logQueryCon.apprvReqNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리유무 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',style:'width:200px;',submenuSize:'fixed',ref:'data:ds_logQueryCon.postYn',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'',escape:'false',id:'btPost',style:'',type:'button','ev:onclick':'scwin.f_Post'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계처리'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 전자결재 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'N',gridUpYn:'N',templateYn:'N',btnUser:'Y',gridID:'gr_log'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',class:'wq_gvw',dataList:'data:ds_log',focusMode:'row',id:'gr_log',scrollByColumn:'true',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true',sortable:'true','ev:oncelldblclick':'scwin.gr_log_oncelldblclick','ev:oncellclick':'scwin.gr_log_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'로그일시',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'요청번호',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'전자결재제목',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'DEBIS상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'DEBIS결재상태코드',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'전자결재상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'결재상태코드'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'전표유무',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'회계처리유무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column54',value:'오류메시지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'승인자',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column50',value:'처리유무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column48',value:'처리일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'처리자',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'결재문서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'결재문서종류',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'결재문서종류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'수신정보',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'EP문서ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'EP결재상태코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'승인자사번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'tskId',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logDtm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvTitle',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'debisApprvStsNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'debisApprvStsCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvStsCd',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNoYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'postYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:';text-align:left;',id:'errorMsg',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvEmpNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'procYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'procUserNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'apprvDocKndCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:';text-align:left;',id:'apprvDocKndNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column69',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column63',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column59',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표결재요청-상세조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_approveDetail',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownFn:'scwin.f_Export'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_approveDetail',focusMode:'row',id:'gr_approveDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',sortable:'true','ev:oncellclick':'scwin.gr_approveDetail_oncellclick',readOnly:'true',columnMove:'false',fixedColumn:'1'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'전표번호',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'전표종류',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'작성자',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'회계요청일자',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'회계일자',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'계정명',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'차변금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column46',value:'차변(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column44',value:'대변(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'적요',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'계정코드',width:'80'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column56',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column54',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column50',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'작성일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKnd',inputType:'text',width:'100',colMerge:'true',upperColumn:'slipNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawEmpNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postReqDt',inputType:'text',width:'130',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'100',textAlign:'left',style:';text-align:left;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drAmt',inputType:'text',width:'100',displayFormat:'#,###',dataType:'number',textAlign:'right',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crAmt',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drAmtFcrc',displayMode:'label',displayFormat:'#,##0.00',dataType:'number',textAlign:'right',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crAmtFcrc',displayMode:'label',displayFormat:'#,##0.00',dataType:'number',textAlign:'right',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'slipAcctDeptNm',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mgntClntNm',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',width:'70',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'100',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipAcctDeptCd',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mgntClntNo',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drawAcctDeptNm',displayMode:'label',style:';text-align:left;',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',displayFormat:'####/##/##'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',dataType:'number',expression:'sum(\'drAmt\')',textAlign:'right',displayFormat:'#,###',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column68',displayMode:'label',dataType:'number',textAlign:'right',expression:'sum(\'crAmt\')',displayFormat:'#,###',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column67',displayMode:'label',dataType:'number',textAlign:'right',expression:'sum(\'drAmtFcrc\')',displayFormat:'#,##0.00',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column66',displayMode:'label',dataType:'number',textAlign:'right',expression:'sum(\'crAmtFcrc\')',displayFormat:'#,##0.00',style:';text-align:right;',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsDetail',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'hiddenComp'},E:[{T:1,N:'xf:input',A:{id:'txt_countRow',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txtCoClsCd',style:'width:144px; height:21px; '}}]}]}]}]}]}]})