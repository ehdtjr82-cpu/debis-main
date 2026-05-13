/*amd /ui/ja/ds/fs/adjm/ja_fs_103_01_01b.xml 93780 2631a6bed882f00cfc97c58d74323e409920f338d1457375bfc2339f781e9c4c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCertiList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtSt',name:'매입예정일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtEnd',name:'매입예정일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitPic',name:'승인담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recptYn',name:'접수여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suspensePay',name:'가지급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recptYn',name:'접수여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'매입계산서역발행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'Onboard',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pic',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidKndClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmDept',name:'전표일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCertiList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_purchaseCerti'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidKndClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecAuthTrgtYn',name:'매입계산서역발행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecAuthTrgtYn2',name:'매입계산서역발행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmDeptNm',name:'정산부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'전자인증여부(전자세금계산서)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_holiday',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdDt',name:'다음일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_nextdate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nextDt',name:'다음일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_imntClnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'영어명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드약명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'영어약명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AcctCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsCrAcctCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prov',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'slipDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'reqAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'reqAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'reqEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNm',name:'reqEmpNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendDt',name:'setlIntendDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'amt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'setlAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'setlAmtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmt',name:'postSetlAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmtFcrc',name:'postSetlAmtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'susPayClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'rcptAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmtFcrc',name:'rcptAmtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'summary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'setlDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'rltSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmt',name:'setlIntendAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmtFcrc',name:'setlIntendAmtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlCompleteYn',name:'setlCompleteYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'postYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'drawEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'drawEmpNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'bankbookNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'exchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'setexchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'amtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_provHeader',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'신청부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'신청부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_clntInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nmCmpy',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'역발행거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCycCd',name:'당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'지급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCntShtCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDtChgYn',name:'지급일변경여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inatPayYn',name:'지급여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_payInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payDt',name:'지급일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPayMthdCd',name:'지급방법',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bfPayDt',name:'변경 전 지급일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'interDataYn',name:'국제data여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCertiList',action:'/ja.ds.fs.adjm.pchsadjmdcsn.JaRetrieveCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCertiList","key":"IN_DS1"},{"id":"ds_certiList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_certiList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCertiList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchClntInfo',action:'/ja.ds.fs.adjm.pchsadjmdcsn.JaRetrieveClntPayInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseCerti","key":"IN_DS1"},{"id":"ds_clntInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_clntInfo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchClntInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegistPurchaseEvidence',action:'/ja.ds.fs.adjm.pchsadjmdcsn.JaRegistPurchaseEvidenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_purchaseCerti","key":"IN_DS1"},{"action":"modified","id":"ds_certiList","key":"IN_DS2"},{"action":"modified","id":"ds_payInfo","key":"IN_DS3"},{"action":"modified","id":"ds_prov","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRegistPurchaseEvidence_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_holiday',action:'/ja.ds.fs.adjm.pchsadjmdcsn.JaRetrieveHolidayNextDateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_holiday","key":"IN_DS1"},{"id":"ds_nextdate","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_nextdate","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_holiday_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, 0, "L"); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자) 

scwin.clnt_chk = "T";
scwin.pay_cond = "T";
scwin.sum = 0; //가지급금 금액 산정용
scwin.suspensePaySum = 0;

// hidden값
scwin.txtCoClsCd = "";
scwin.hd_acctCdGbn = "";
scwin.hd_acctDeptCdGbn = "";
scwin.ed_pageNumber = "";
scwin.ed_quantityOfRows = "";
scwin.bfPayDt = "";
scwin.elecAuthTrgtYn = "";
scwin.elecAuthTrgtYnLast = "";
scwin.vLoginCoCd = ""; // 소속 자회사  
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.isSubCompany = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 공통코드 적용
  const codeOptions = [{
    grpCd: "SD070",
    compID: "acb_taxnClsCd"
  } //과세구분
  , {
    grpCd: "FM018",
    compID: "acb_reqPayMthdCd",
    opt: {
      "range": "2,10"
    }
  } //지급방법
  //,{ grpCd: "LO121", compID: "acb_wrkPlClsCd", opt :{"range" : "1,03"} }   //작업장구분 GauceUtil.getCodeList("LO121",1,"03");
  ];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKey($p);
};
scwin.onUdcCompleted = function () {
  scwin.vLoginCoCd = $c.data.getMemInfo($p, "coCd"); // 소속 자회사  
  scwin.vLoginCoClsCd = $c.data.getMemInfo($p, "coClsCd"); // 회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 

  // 다른 화면에서 넘어 오는 값 셋팅
  scwin.pchsDeptCd = $c.data.getParameter($p, "pchsDeptCd") == null ? "" : $c.data.getParameter($p, "pchsDeptCd");
  scwin.pchsDeptNm = $c.data.getParameter($p, "pchsDeptNm") == null ? "" : $c.data.getParameter($p, "pchsDeptNm");
  scwin.pchsClntNo = $c.data.getParameter($p, "pchsClntNo") == null ? "" : $c.data.getParameter($p, "pchsClntNo");
  scwin.pchsClntNm = $c.data.getParameter($p, "pchsClntNm") == null ? "" : $c.data.getParameter($p, "pchsClntNm");
  scwin.pchsIntendDtSt = $c.data.getParameter($p, "pchsIntendDtSt") == null ? "" : $c.data.getParameter($p, "pchsIntendDtSt");
  scwin.pchsIntendDtEnd = $c.data.getParameter($p, "pchsIntendDtEnd") == null ? "" : $c.data.getParameter($p, "pchsIntendDtEnd");
  scwin.certiNo = $c.data.getParameter($p, "certiNo") == null ? "" : $c.data.getParameter($p, "certiNo");
  scwin.partner = $c.data.getParameter($p, "partner") == null ? "" : $c.data.getParameter($p, "partner");
  scwin.ccChk = $c.data.getParameter($p, "ccChk") == null ? "" : $c.data.getParameter($p, "ccChk");
  let param3 = [scwin.vLoginCoCd];
  const LxCodeOptions = [{
    method: "getLuxeComboData",
    param1: "JaLogisticsPurchaseEvidenceEBC",
    param2: "retriveSelpchItemCdList_ja",
    param3: param3,
    compID: "lc_pchsItemCd"
  } // 매입항목
  ];
  $c.data.setGauceUtil($p, LxCodeOptions);
  scwin.f_SetDataHeader();
  scwin.f_SetDefaultData();
  udc_pchsIntendDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  return await udc_coCd.cfCommonPopUpAsync(function (ret) {
    scwin.udc_coCdCallback(ret);
  }, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_pchsDeptCd, ed_pchsDeptNm]); // 부서코드 
  $c.gus.cfInitObjects($p, [ed_pchsClntNo, ed_pchsClntNm]); //  거래처 코드 
};
scwin.udc_coCdCallback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.hidVal != rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  $c.gus.cfDisableObjects($p, [udc_coCd]);

  // 자회사 회계 시스템(?-txtCoClsCd : As-Is HiddenField였음 )    
  // if( scwin.vLoginCoClsCd > ACConstants.CO_CLS_CD_DONGBU ) {  
  //     scwin.isSubCompany = true;
  // } else {
  //     scwin.isSubCompany = false;
  // }    
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  tbx_nmCmpy.setValue("");
  tbx_busiNo.setValue("");
  tbx_spplyAmt.setValue("");
  tbx_vat.setValue("");
  tbx_sumAmt.setValue("");
  tbx_suspenseAmt.setValue("");
  ica_pchsIntendDtSt.setValue(scwin.vQryStDt); // 매입예정일자시작
  ica_pchsIntendDtEnd.setValue(scwin.vQryEndDt); // 매입예정일자종료
  ica_slipDt.setValue(scwin.vQryEndDt); // 전표일자
  rd_elecAuthTrgtYn.setValue(0); // 전자세금계산서(미적용)

  $c.gus.cfEnableObjects($p, [ica_spplyDt]);
  $c.gus.cfDisableObjects($p, [acb_taxnClsCd]);
  ed_drawEmpNo.setValue($c.data.getMemInfo($p, "empNo")); // 작성자코드
  ed_drawEmpNm.setValue($c.data.getMemInfo($p, "empNm")); // 작성자명
  ed_drawAcctDeptCd.setValue($c.data.getMemInfo($p, "acctDeptCd")); // 작성귀속부서코드
  ed_drawAcctDeptNm.setValue($c.data.getMemInfo($p, "acctDeptNm")); // 작성귀속부서명
  ica_spplyDt.setValue(scwin.vQryEndDt); // 공급일자

  //국제 물류에서 넘어 온값 Default값 셋팅
  if (scwin.pchsDeptCd.trim() != "") {
    ed_pchsDeptCd.setValue(scwin.pchsDeptCd);
    ed_pchsDeptNm.setValue(scwin.pchsDeptNm);
  }
  if (scwin.pchsIntendDtSt.trim() != "") {
    ica_pchsIntendDtSt.setValue(scwin.pchsIntendDtSt);
    ica_pchsIntendDtEnd.setValue(scwin.pchsIntendDtEnd);
    ica_spplyDt.setValue(scwin.pchsIntendDtSt);
  }
  if (scwin.certiNo.trim() != "") {
    ed_certiNo.setValue(scwin.certiNo);
  }
  if (scwin.pchsClntNo.trim() != "") {
    ed_pchsClntNo.setValue(scwin.pchsClntNo);
    ed_pchsClntNm.setValue(scwin.pchsClntNm);
    scwin.f_RetrieveCertiList(); //바로 조회     
  } else {
    $c.gus.cfDisableObjects($p, [ed_adjmDept, udc_adjmDept, ica_slipDt, acb_evidKndClsCd, acb_taxnClsCd, ed_summary, udc_drawEmpNo, udc_drawAcctDeptCd, ica_spplyDt, rd_elecAuthTrgtYn]);
    ed_pchsClntNo.focus();
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  }
};

//-------------------------------------------------------------------------
// DataSet의 Header 정보 생성
//-------------------------------------------------------------------------
scwin.f_SetDataHeader = function () {
  ds_provHeader.removeAll();
  ds_provHeader.insertRow(0);
  // Session 이용
  ds_provHeader.setCellData(0, "reqAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));
  // 로그인사번,부서
  ds_provHeader.setCellData(0, "drawEmpNo", $c.data.getMemInfo($p, "empNo"));
  ds_provHeader.setCellData(0, "drawAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));

  // Session 이용
  ds_provHeader.setCellData(0, "reqAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));
  // 로그인사번,부서
  ds_provHeader.setCellData(0, "drawEmpNo", $c.data.getMemInfo($p, "empNo"));
  ds_provHeader.setCellData(0, "drawAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));
};

//-------------------------------------------------------------------------
// 거래명세서 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCertiList = async function () {
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  let chk = await $c.gus.cfValidate($p, [ed_pchsClntNo, ica_pchsIntendDtSt, ica_pchsIntendDtEnd]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_pchsIntendDtSt.getValue(), ica_pchsIntendDtEnd.getValue())) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_pchsIntendDtSt.focus();
    return;
  }
  ds_certiList.setJSON([]);
  ds_purchaseCerti.setJSON([]);
  $c.sbm.execute($p, sbm_searchCertiList);
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_RetrievePurchaseEvidence = async function (row) {
  let data = {
    slipNo: ds_certiList.getCellData(row, "slipNo")
  };
  let opts = {
    id: "smpPop",
    popupName: "세금 계산서 접수 등록 상세",
    title: "세금 계산서 접수 등록 상세",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 700
  };
  const rtnList = await $c.win.openPopup($p, "/ui/ja/ds/fs/adjm/ja_fs_103_01_01p.xml", opts, data);

  // 다시 조회함 
  //f_RetrieveCertiList();
};
scwin.retrieveClntYn = false;
//-------------------------------------------------------------------------
// 매입증빙(상호, 사업자번호) 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveClntInfo = async function (row) {
  // console.log("scwin.f_RetrieveClntInfo ==>"+row);
  // console.log("scwin.f_RetrieveClntInfo ==>"+ed_adjmDept.getValue(),);
  // console.log("scwin.f_RetrieveClntInfo ==>"+ed_adjmDept.getValue());

  ds_purchaseCerti.set("pchsClntNo", ds_certiList.getCellData(row, "pchsClntNo"));
  ds_purchaseCerti.set("adjmDept", ds_certiList.getCellData(row, "pchsDeptCd"));
  ds_purchaseCerti.set("crcCd", ds_certiList.getCellData(row, "crcCd"));
  ds_purchaseCerti.set("coCd", ds_certiList.getCellData(row, "coCd"));
  await scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), '', 'F', 'F');
  $c.sbm.execute($p, sbm_searchClntInfo);
  // scwin.retrieveClntYn = true;
};

//-------------------------------------------------------------------------
// 매입증빙(상호, 사업자번호) 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveClntInfo2 = async function (pchsClntNo) {
  console.log("scwin.f_RetrieveClntInfo2 ==>" + ds_certiList.getRowPosition());
  ds_purchaseCerti.set("pchsClntNo", pchsClntNo);
  ds_purchaseCerti.set("adjmDept", ed_adjmDept.getValue());
  ds_purchaseCerti.set("crcCd", ds_certiList.getCellData(ds_certiList.getRowPosition(), "crcCd"));
  ds_purchaseCerti.set("coCd", ds_certiList.getCellData(ds_certiList.getRowPosition(), "coCd"));
  await scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), '', 'F', 'F');
  $c.sbm.execute($p, sbm_searchClntInfo);
  // scwin.retrieveClntYn = true;
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  // Data 선택 여부 조회
  //if (!ds_certiList.IsUpdated) {
  if (ds_certiList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }

  // 계산서접수가 "Y"일 경우 리턴(전표번호 체크)
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T" && ds_certiList.getCellData(i, "recptYn") == "Y") {
      await $c.gus.cfAlertMsg($p, "계산서접수가 미접수인 경우만 가능합니다.");
      return;
    }
  }

  // 데이터셋 오브젝트 간에 컬럼 헤더 정보를 복사
  var cnt = 0;
  ds_purchaseCertiList.removeAll();
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T") {
      var transRow = ds_certiList.getRowJSON(i);
      ds_purchaseCertiList.setRowJSON(cnt, transRow, true);
      cnt++;
    }
  }

  // 총 조회건수 표시
  //cfShowTotalRows(totalRowsPurchaseCerti, cnt);
};

//-------------------------------------------------------------------------
// 세금계산서 접수 저장
//-------------------------------------------------------------------------
scwin.f_RegistPurchaseEvidence = async function () {
  // Data 변경 여부 조회
  if (ds_certiList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }

  // 매입계산서 역발행 변경할지 여부 체크 20140626 황창기
  if (ds_clntInfo.getRowCount() > 0) {
    if (rd_elecAuthTrgtYn.getValue() != scwin.elecAuthTrgtYn) {
      if (scwin.elecAuthTrgtYn == '0') {
        if (!(await $c.win.confirm($p, "매입계산서 역발행 미적용건인데 적용하시겠습니까?"))) {
          ds_purchaseCerti.set("elecAuthTrgtYn", scwin.elecAuthTrgtYn);
        }
      } else {
        if (!(await $c.win.confirm($p, "매입계산서 역발행 적용건인데 미적용하시겠습니까?"))) {
          ds_purchaseCerti.set("elecAuthTrgtYn", scwin.elecAuthTrgtYn);
        }
      }
    }
    //사용자가 선택한 적용미적용 값을 히든으로 저장한다.
    scwin.elecAuthTrgtYnLast = ds_purchaseCerti.get("elecAuthTrgtYn");
  }

  // 미접수(전표번호 미생성)인 경우만 가능
  var slipNo = "";
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    slipNo = ds_certiList.getCellData(i, "slipNo");
    if (ds_certiList.getCellData(i, "chk") == "T") {
      if (slipNo != "") {
        await $c.gus.cfAlertMsg($p, "이미 접수된 건이 포함되어 있습니다.");
        return;
      }
    }
  }

  // 선택건의 공급가액, 부가세 합계 계산
  var spplyAmt = 0;
  var vat = 0;
  var suspensePay = 0;
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T") {
      spplyAmt += parseInt(ds_certiList.getCellData(i, "spplyAmt"));
      vat += parseInt(ds_certiList.getCellData(i, "vat"));
      suspensePay += parseInt(ds_certiList.getCellData(i, "suspensePay"));
    }
  }

  // 마이너스 금액은 전표생성할  수 없습니다.
  if (spplyAmt < 0) {
    await $c.gus.cfAlertMsg($p, "마이너스 금액은 전표생성할  수 없습니다.");
    return;
  }

  // 정산부서, 전표일자, 증빙구분, 적요, 작성자, 작성귀속부서, 공급일자 체크
  if (!(await $c.gus.cfValidate($p, [ed_adjmDept, ica_slipDt, acb_evidKndClsCd, acb_taxnClsCd, ed_summary, ed_drawEmpNo, ed_drawAcctDeptCd, ica_spplyDt, rd_elecAuthTrgtYn]))) {
    return;
  }

  // 부가세 금액이 ZERO이면 증빙구분을 세금계산서로 선택할 수 없습니다.  2008.07.07
  if (vat == 0) {
    if (acb_evidKndClsCd.getValue() == "10" || acb_evidKndClsCd.getValue() == "11") {
      await $c.gus.cfAlertMsg($p, "부가세 금액이 ZERO이면 증빙구분을 세금계산서로 선택할 수 없습니다.");
      return;
    }
  } else if (vat != 0) {
    if (acb_evidKndClsCd.getValue() == "20") {
      await $c.gus.cfAlertMsg($p, "부가세 금액이 ZERO가아니면 증빙구분을 영세율세금계산서로 선택할 수 없습니다.");
      return;
    }
  }
  if (ica_payDt.getValue() != "") {
    if (acb_reqPayMthdCd.getValue() == "") {
      await $c.win.alert($p, "지급일을 입력하면 지급 방법도 입력해야 합니다.");
      return;
    }
    if (ica_payDt.getValue().length != 8) {
      await $c.win.alert($p, "지급일자는 8자리 날짜형식이어야 합니다.");
      return;
    }
  }
  if (acb_reqPayMthdCd.getValue() != "") {
    if (ica_payDt.getValue() == "") {
      await $c.win.alert($p, "방법을 입력하면 지급일도 입력해야 합니다.");
      return;
    }
  }

  //매입거래처 변경 체크 
  if (ed_pchsClntNo.getValue() != "") {
    for (var i = 0; i < ds_certiList.getRowCount(); i++) {
      if (ds_certiList.getCellData(i, "chk") == "T" && ds_certiList.getCellData(i, "pchsClntNo") != ed_pchsClntNo.getValue()) {
        await $c.win.alert($p, "매입거래처가 변경되었습니다.\n매입거래처를 확인하시고 재조회하십시오");
        return;
      }
    }
  }
  scwin.clnt_chk = "F";
  //매입거래처 사업자 번호 셋팅   2008.12.09 
  scwin.f_RetrieveClntInfo2(ed_pchsClntNo.getValue());

  //위에 사업자번호 셋팅하면서 조회된값으로 바뀐 매입계산서역발행값을 등록자가 세팅한값으로 세팅한다.20140926 황창기
  ds_purchaseCerti.set("elecAuthTrgtYn", scwin.elecAuthTrgtYnLast);
  rd_elecAuthTrgtYn.setValue(scwin.elecAuthTrgtYnLast);

  //가지급금 검사로직 추가 2016 09 13 서동원
  if (tbx_suspenseAmt.getValue() != '0' && ds_prov.getCellData(0, "setlDt") == null) {
    await $c.win.alert($p, "가지급금이 있습니다.\n가지급금을 처리하시고 접수하십시오.");
    scwin.f_Prepay();
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장하시겠습니까?
    ds_purchaseCerti.set("pchsClntNo", ed_pchsClntNo.getValue()); // 매입거래처
    ds_purchaseCerti.set("busiNo", ds_clntInfo.getCellData(0, "busiNo")); // 사업자번호
    ds_purchaseCerti.set("spplyAmt", spplyAmt); // 공급금액
    ds_purchaseCerti.set("vat", vat); // 부가세

    //지급방법 / 지급일 설정 접수시 필요
    ds_payInfo.set("payDt", ica_payDt.getValue()); // 지급일
    ds_payInfo.set("reqPayMthdCd", acb_reqPayMthdCd.getValue()); // 지급방법
    ds_payInfo.set("bfPayDt", scwin.bfPayDt); // 지급일

    //지급일자 빈값일 때
    if (ica_payDt.getValue() == "") {
      ds_payInfo.set("payDt", "");
      ds_payInfo.set("bfPayDt", "");
    } else {
      //지급일자 값이 있을때          
      if (scwin.bfPayDt == "") {
        // 기준지급일자값이 없으면 지급일자 값으로 셋팅          
        ds_payInfo.set("bfPayDt", ica_payDt.getValue());
      }
    }
    $c.sbm.execute($p, sbm_saveRegistPurchaseEvidence);
  }
};
scwin.f_checkCertiBeforeSave = async function () {
  /*위수탁업체일 경우 체크로직 20090120
      1. 체크된 row
      2. 계약시작일자 가 null이 아닐경우 == OP128과 zz514에 데이터가 있을 경우  
  */

  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T") {
      //1. 계약일자와 전표일자 체크  
      if (ds_certiList.getCellData(i, "ctrtStDt") != "" && ds_certiList.getCellData(i, "ctrtEndDt") != "") {
        if (!(ica_slipDt.getValue() >= ds_certiList.getCellData(i, "ctrtStDt") && ica_slipDt.getValue() <= ds_certiList.getCellData(i, "ctrtEndDt"))) {
          if (ds_certiList.getCellData(i, "pchsClntClsCd") == '11' || ds_certiList.getCellData(i, "pchsClntClsCd") == '16' || ds_certiList.getCellData(i, "pchsClntClsCd") == '17') {
            await $c.win.alert($p, "거래명세서번호 : " + ds_certiList.getCellData(i, "certiNo") + " 는 전표일자  : " + ica_slipDt.getValue() + " 로, 거래처 : " + ed_pchsClntNo.getValue() + " 의 차량적용기간 " + ds_certiList.getCellData(i, "ctrtStDt") + " ~ " + ds_certiList.getCellData(i, "ctrtEndDt") + "에서 벗어났습니다. ");
            return false;
          }
        }
        if (ica_slipDt.getValue() >= ds_certiList.getCellData(i, "ctrtStDt") && ica_slipDt.getValue() <= ds_certiList.getCellData(i, "ctrtEndDt")) {
          if (!(ds_certiList.getCellData(i, "pchsClntClsCd") == '11' || ds_certiList.getCellData(i, "pchsClntClsCd") == '16' || ds_certiList.getCellData(i, "pchsClntClsCd") == '17')) {
            await $c.win.alert($p, "거래명세서번호 : " + ds_certiList.getCellData(i, "certiNo") + " 는 전표일자  : " + ica_slipDt.getValue() + " 로, 거래처 : " + ed_pchsClntNo.getValue() + " 의 차량적용기간 " + ds_certiList.getCellData(i, "ctrtStDt") + " ~ " + ds_certiList.getCellData(i, "ctrtEndDt") + "에서 벗어났습니다. ");
            return false;
          }
        }
      } //if 1

      if (!(ds_certiList.getCellData(i, "ctrtStDt") != "" && ds_certiList.getCellData(i, "ctrtEndDt") != "")) {
        if (ds_certiList.getCellData(i, "pchsClntClsCd") == '11' || ds_certiList.getCellData(i, "pchsClntClsCd") == '16' || ds_certiList.getCellData(i, "pchsClntClsCd") == '17') {
          await $c.win.alert($p, "계약번호가 없습니다. 거래처의 매입거래처 종류는 " + ds_certiList.getCellData(i, "pchsClntClsNm") + " 로 위수탁이나 직영차이면 안됩니다. 거래처 관리에서 매입거래처 구분코드를 확인하십시오. ");
          return false;
        }
      }
    }
  } //for    
};
scwin.sbm_saveRegistPurchaseEvidence_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_RetrieveCertiList();
  }
};

//-------------------------------------------------------------------------
// 금액합계 계산
//-------------------------------------------------------------------------
scwin.f_CalcSumAmt = function () {
  var spplyAmt = 0;
  var vat = 0;
  var suspensePay = 0;
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T" && ds_certiList.getCellData(i, "slipNo") == "") {
      spplyAmt += parseInt(ds_certiList.getCellData(i, "spplyAmt"));
      vat += parseInt(ds_certiList.getCellData(i, "vat"));
      suspensePay += parseInt(ds_certiList.getCellData(i, "suspensePay"));
    }
  }
  tbx_spplyAmt.setValue($c.gus.cfInsertComma($p, spplyAmt));
  tbx_suspenseAmt.setValue($c.gus.cfInsertComma($p, suspensePay));
  tbx_vat.setValue($c.gus.cfInsertComma($p, vat));
  tbx_sumAmt.setValue($c.gus.cfInsertComma($p, spplyAmt + vat));

  //가지급금이 없을때 버튼비활성화
  //if(tbx_suspenseAmt.getValue() == 0){
  if (suspensePay == 0) {
    //document.all.div_id.style.visibility = "hidden";
    tbx_adjmClsCd.visible(false);
    ds_prov.removeAll();
  } else {
    ds_prov.removeAll();
    //document.all.div_id.style.visibility = "visible";
    tbx_adjmClsCd.visible(true);
    $c.gus.cfEnableObjects($p, tbx_adjmClsCd);
  }
  sum = spplyAmt + vat;
  suspensePaySum = suspensePay;
};

//-------------------------------------------------------------------------
// 매입증빙별거래명세서, 매입확정/매입증빙 정보 Data Clear
//-------------------------------------------------------------------------
scwin.f_PchsDataClear = function () {
  // 전표일자, 공급일자 구하기 위한 변수
  var inputDate = ica_pchsIntendDtEnd.getValue();
  var year = inputDate.substring(0, 4);
  var month = inputDate.substring(4, 6);
  var month = inputDate.substring(4, 6);
  ed_adjmDept.setValue(""); // 정산부서코드
  ed_adjmDeptNm.setValue(""); // 정산부서명
  tbx_nmCmpy.setValue(""); // 상호
  tbx_busiNo.setValue(""); // 사업자번호

  var slipYm = '' + year + month;
  var slipDt = '' + slipYm + $c.date.getLastDateOfMonth($p, slipYm);
  ica_slipDt.setValue(slipDt); // 전표일자

  acb_evidKndClsCd.setValue("10"); // 증빙구분(세금계산서)
  acb_taxnClsCd.setValue("01"); // 과세구분(과세)
  ed_summary.setValue(""); // 적요
  rd_elecAuthTrgtYn.setValue(0); // 전자세금계산서(미적용)
  $c.gus.cfEnableObjects($p, [ica_spplyDt]);
  $c.gus.cfDisableObjects($p, [acb_taxnClsCd]);
  ed_drawEmpNo.setValue($c.data.getMemInfo($p, "empNo")); // 작성자코드
  ed_drawEmpNm.setValue($c.data.getMemInfo($p, "empNm")); // 작성자명
  ed_drawAcctDeptCd.setValue($c.data.getMemInfo($p, "acctDeptCd")); // 작성귀속부서코드
  ed_drawAcctDeptNm.setValue($c.data.getMemInfo($p, "acctDeptNm")); // 작성귀속부서명

  var spplyYm = '' + year + month;
  var spplyDt = '' + spplyYm + $c.date.getLastDateOfMonth($p, slipYm);
  ica_spplyDt.setValue(spplyDt); // 공급일자

  tbx_spplyAmt.setValue(""); // 공급금액
  tbx_suspenseAmt.setValue(""); // 가지급금
  tbx_vat.setValue(""); // 부가세
  tbx_sumAmt.setValue(""); // 금액합계
  ica_payDt.setValue("");
  scwin.bfPayDt = "";
  acb_reqPayMthdCd.setValue("");
};
scwin.f_del_zero = function (Name) {
  var x, ch;
  var i = 0;
  var newVal = "";
  for (x = 0; x < Name.length; x++) {
    ch = Name.substring(x, x + 1);
    if (ch != "0") {
      newVal = Name.substring(x);
      break;
    }
  }
  return newVal;
};

//-------------------------------------------------------------------------
// 거래명세서 출력(전표번호)
//-------------------------------------------------------------------------
scwin.f_PrintSlipNo = async function (slipNo) {
  var param = "";
  var printMode = "preview";
  let data = {
    oodiName: "fs_401_01_06p",
    reportName: "/ds/fs/adjm/fs_401_01_06p.ozr",
    odiParam: {
      slipNo: slipNo
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: printMode
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 거래명세서 출력 : 협력업체 세금계산서 발행 화면의 거래명세서 출력과 동일한 REPORT 파일
//-------------------------------------------------------------------------
scwin.f_PrintSlipNo_v1 = async function () {
  var param = "";
  var printCnt = 0;
  var printMode = "preview";
  if (ds_certiList.getRowCount() > 0) {
    for (i = 0; i < ds_certiList.getRowCount(); i++) {
      if (ds_certiList.getCellData(i, "chk") == "T") {
        printCnt++;
        param = param + "," + ds_certiList.getCellData(i, "slipNo"); // 전표번호
      }
    }
  }
  if (printCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 거래명세서"]); // @을(를) 선택하십시오.
    return;
  }
  let data = {
    oodiName: "fs_401_01_06_v2p",
    reportName: "/ds/fs/adjm/fs_401_01_06_v2p.ozr",
    odiParam: {
      slipNo: param.substring(1)
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: printMode
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
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
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_certiList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = gr_certiList.getTotalCol();
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "세금계산서 접수 등록"
  }, {
    rowIndex: 1,
    colIndex: 0,
    colSpan: 0,
    rowSpan: 0
  }];
  const options = {
    fileName: "세금계산서 접수 등록.xlsx",
    sheetName: "세금계산서 접수 등록",
    startRowIndex: 2,
    startColumnIndex: 0,
    type: 1,
    hiddenVisible: true
  };
  await $c.data.downloadGridViewExcel($p, gr_certiList, options, infoArr);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // console.log("==disGubun:"+disGubun+", pCode:"+pCode+", pName:"+pName+", pClose:"+pClose+", pAllSearch:"+pAllSearch);
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  //var pWhere         = "";
  //var pWtitleSearch  = "";
  var qryYear = scwin.vCurDate.substring(0, 4);
  switch (disGubun) {
    case 1:
      // 매입거래처 팝업       
      var param = ",,," + ed_coCd.getValue();
      udc_pchsClntNo.setSelectId('retrieveClntList2');
      udc_pchsClntNo.cfCommonPopUp(scwin.udc_pchsClntNoCallback, ed_pchsClntNo.getValue().trim(), ed_pchsClntNm.getValue(), 'T', null, null, null, null, param, null, null, null, null);
      break;
    case 2:
      // 매입부서 팝업            
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_pchsDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
      udc_pchsDeptCd.cfCommonPopUp(scwin.udc_pchsDeptCdCallback, ed_pchsDeptCd.getValue().trim(), ed_pchsDeptNm.getValue(), 'T', null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case 3:
      // 승인담당자 팝업         
      var param = ",,," + ed_coCd.getValue();
      udc_admitPic.setSelectId('retrieveEmpInfo3');
      udc_admitPic.cfCommonPopUp(scwin.udc_admitPicCallback, pCode.trim(), pName, pClose, null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case 4:
      // 정산부서 팝업            
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_adjmDept.setSelectId('retrieveAcctDeptCdInfo6');
      return await udc_adjmDept.cfCommonPopUpAsync(function (ret) {
        scwin.udc_adjmDeptCallback(ret);
      }, ed_adjmDept.getValue().trim(), ed_adjmDeptNm.getValue(), 'T', null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case 5:
      // 작성자 팝업           
      var param = ",,," + ed_coCd.getValue();
      udc_drawEmpNo.setSelectId('retrieveEmpInfo3');
      udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNoCallback, pCode.trim(), pName, pClose, null, null, null, null, param, null, null, null, null, null, pAllSearch, null);
      break;
    case 6:
      // 작성귀속부서 팝업
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_drawAcctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
      udc_drawAcctDeptCd.cfCommonPopUp(scwin.udc_drawAcctDeptCdCallback, ed_drawAcctDeptCd.getValue().trim(), ed_drawAcctDeptNm.getValue(), 'T', null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    default:
      break;
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
    strCd.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.hidVal = "";
  }

  // if(scwin.retrieveClntYn == true){
  //     $c.sbm.execute(sbm_searchClntInfo);
  // }
  // scwin.retrieveClntYn = false;
};
scwin.sbm_searchClntInfo_submitdone = function (e) {
  let vRow = ds_clntInfo.getRowPosition();
  if (ds_clntInfo.getRowCount() > 0) {
    tbx_nmCmpy.setValue(ds_clntInfo.getCellData(0, "nmCmpy")); // 상호
    tbx_busiNo.setValue(ds_clntInfo.getCellData(0, "busiNo")); // 사업자번호

    //역발행거래처여부 조회해와서 세팅 하도록 수정 20140926 황창기
    rd_elecAuthTrgtYn.setValue(ds_clntInfo.getCellData(0, "elecAuthTrgtYn")); //역발행 거래처 여부
    scwin.elecAuthTrgtYn = ds_clntInfo.getCellData(0, "elecAuthTrgtYn"); //역발행 거래처 여부 변경 확인위해 저장

    $c.gus.cfEnableObj($p, ica_payDt, true);
    scwin.pay_cond = "T";
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  f_SetDefaultData();
};

/*
scwin.f_mail = function() {
    //$c.sbm.execute(sbm_mail);
    //tr_mail.Post();
};
*/

//-------------------------------------------------------------------------
//  가지급금,선급금 정리화면
//-------------------------------------------------------------------------
scwin.f_Prepay = async function () {
  //테스트 매입거래처 131471
  var valueObject = new Object();
  valueObject.prov = ds_prov;
  valueObject.provHeader = ds_provHeader;
  valueObject.txtrltSeq = "1";
  valueObject.adjmClsCd = "4"; //4^가지급금
  valueObject.sum = scwin.suspensePaySum;
  valueObject.crcCd = "KRW"; //원화
  valueObject.acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  valueObject.acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
  for (j = 0; j < ds_provHeader.getRowCount(); j++) {
    if (ds_provHeader.getCellData(j, "reqAcctDeptCd") != "") {
      valueObject.acctDeptCd = ds_provHeader.getCellData(j, "reqAcctDeptCd");
      valueObject.acctDeptNm = ds_provHeader.getCellData(j, "reqAcctDeptNm");
    }
  }
  if (typeof valueObject.acctDeptCd == "undefined" || valueObject.acctDeptCd == "") {
    valueObject.acctDeptCd = "";
    valueObject.acctDeptNm = "";
  }
  valueObject.compare = "1";
  valueObject.flag = "Y";
  valueObject.gubun = "1";
  valueObject.slipDt = ica_slipDt.getValue().trim();
  let data = valueObject;
  /* let data = {
      compare: "1"
      , flag: "Y"
      , gubun: "1"
      , slipDt: ica_slipDt.getValue().trim()
  }; */

  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_02b.xml";
  let opts = {
    id: "smpPop",
    popupName: "가지급금입금",
    modal: true,
    type: "browserPopup",
    width: 1400,
    height: 760,
    title: "가지급금입금"
  };
  var returnValue = await $c.win.openPopup($p, win_url, opts, data);
  if (returnValue != null) {
    ds_prov.setJSON(returnValue[0].getAllJSON(), true);
    ds_provHeader.setJSON(returnValue[1].getAllJSON(), true);
    var option = {
      sortIndex: "rltSeq slipNo"
    };
    ds_prov.multisort(options);

    // 중복된것 삭제
    for (i = 0; i < ds_prov.getRowCount(); i++) {
      for (j = i + 1; j < ds_prov.getRowCount(); j++) {
        if (ds_prov.getCellData(i, "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
          if (ds_prov.getCellData(i, "slipNo") == ds_prov.getCellData(j, "slipNo")) {
            ds_prov.removeRow(i);
            break;
          }
        }
      }
    } // for end

    for (i = 0; i < ds_provHeader.getRowCount(); i++) {
      for (j = i + 1; j < ds_provHeader.getRowCount(); j++) {
        if (ds_provHeader.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
          ds_provHeader.removeRow(i);
          break;
        }
      }
    } // for end
  }
  for (i = 0; i < ds_prov.getRowCount(); i++) {
    ds_prov.setCellData(i, "setlDt", ds_provHeader.getCellData(0, "setlDt"));
  }
};

//---------------------------------------------------------------------------------------
//22.01.18 정산부서 1G34(국제영업1팀)일때, 전도금 포함하면 작성부서 00839(국제운영팀)으로 자동 셋팅
//---------------------------------------------------------------------------------------	  
scwin.f_AcctCdCheck = function () {
  ed_drawAcctDeptCd.setValue(scwin.acctDeptCd); // 작성귀속부서코드
  ed_drawAcctDeptNm.setValue(scwin.acctDeptNm); // 작성귀속부서명            	            		      
};

/*   
//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
scwin.dataSetDebug = function(dataSet, isDebug){
    if(isDebug == true){
        var obj = dataSet;
        var str = "[[[["+ obj.id+"]]]]]\n";
        for (var dsRow = 1; dsRow <= obj.getRowCount(); dsRow++ ){
            for ( var dsCol = 1; dsCol <= obj.CountColumn; dsCol++ ){
                str += "["+obj.ColumnId(dsCol)+"] "+obj.getCellData(dsRow, obj.ColumnId(dsCol))+", "
            }
            str += "\n\n";
        }
        alert( str );
    }
};
*/
scwin.sbm_searchCertiList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowCnt = ds_certiList.getRowCount();
  scwin.f_PchsDataClear();
  if (rowCnt == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
    $c.gus.cfDisableObjects($p, [udc_adjmDept, ica_slipDt, ica_payDt, acb_evidKndClsCd, acb_taxnClsCd, ed_summary, udc_drawEmpNo, udc_drawAcctDeptCd, ica_spplyDt, rd_elecAuthTrgtYn]);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
    $c.gus.cfEnableObjects($p, [udc_adjmDept, ica_slipDt, ica_payDt, acb_evidKndClsCd, acb_taxnClsCd, ed_summary, udc_drawEmpNo, udc_drawAcctDeptCd, ica_spplyDt, rd_elecAuthTrgtYn]);
    $c.gus.cfDisableObjects($p, [rd_elecAuthTrgtYn]);
    scwin.f_setRsltsStdDtBgColor();
    gr_certiList.setFocusedCell(0, "certiNo", false);
  }
  $c.gus.cfDisableObjects($p, [acb_taxnClsCd]);
  tbx_totalRows.setValue(rowCnt);
};
scwin.f_setRsltsStdDtBgColor = function () {
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "pchsIntendDt").substring(0, 6) != ds_certiList.getCellData(i, "rsltsStdDt").substring(0, 6)) {
      gr_certiList.setCellClass(i, "rsltsStdDt", "bg-type2");
    }
  }
};
scwin.sbm_holiday_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (ds_nextdate.getRowCount() > 0) {
    ica_payDt.setValue(ds_nextdate.getCellData(0, "nextDt"));
    scwin.bfPayDt = ds_nextdate.getCellData(0, "nextDt");
  } else {
    ica_payDt.setValue("");
    scwin.bfPayDt = "";
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveCertiList();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_RegistPurchaseEvidence();
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_coCd_onblurNameEvent = function (e) {
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_pchsClntNo_onblurCodeEvent = function (e) {
  //debugger;
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 1, false);
};
scwin.udc_pchsClntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNm, ed_pchsClntNo, 1, false);
};
scwin.udc_pchsClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), 'F', 'F');
};
scwin.udc_pchsClntNo_onviewchangeNameEvent = function (info) {
  if (ed_pchsClntNm.getValue() == "") ed_pchsClntNo.setValue("");
};
scwin.udc_pchsDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 2, false);
};
scwin.udc_pchsDeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptNm, ed_pchsDeptCd, 2, false);
};
scwin.udc_pchsDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pchsDeptCd.getValue(), ed_pchsDeptNm.getValue(), 'F', 'T');
};
scwin.udc_pchsDeptCd_onviewchangeNameEvent = function (info) {
  if (ed_pchsDeptNm.getValue() == "") ed_pchsDeptCd.setValue("");
};
scwin.udc_admitPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_admitPic, ed_admitPicNm, 3, true);
};
scwin.udc_admitPic_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_admitPicNm, ed_admitPic, 3, false);
};
scwin.udc_admitPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_admitPic.getValue(), ed_admitPicNm.getValue(), 'F', 'T');
};
scwin.udc_admitPic_onviewchangeNameEvent = function (info) {
  if (ed_admitPicNm.getValue() == "") ed_admitPic.setValue("");
};
scwin.udc_adjmDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_adjmDept, ed_adjmDeptNm, 4, false);
  var cnt = 0;
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T") {
      cnt++;
    }
  }
  if (cnt > 0) {
    var clntNo = ed_pchsClntNo.getValue();
    scwin.f_RetrieveClntInfo2(clntNo);
  } else {
    $c.win.alert($p, "거래명세서를 1건 이상 선택하세요");
    ed_adjmDept.setValue("");
  }
};
scwin.udc_adjmDept_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_adjmDeptNm, ed_adjmDept, 4, false);
};
scwin.udc_adjmDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), ed_adjmDeptNm.getValue(), 'F', 'F');
};
scwin.udc_adjmDept_onviewchangeNameEvent = function (info) {
  if (ed_adjmDeptNm.getValue() == "") ed_adjmDept.setValue("");
};
scwin.udc_drawEmpNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawEmpNo, ed_drawEmpNm, 5, true);
};
scwin.udc_drawEmpNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawEmpNm, ed_drawEmpNo, 5, false);
};
scwin.udc_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_drawEmpNo.getValue(), ed_drawEmpNm.getValue(), 'F', 'T');
};
scwin.udc_drawEmpNo_onviewchangeNameEvent = function (info) {
  if (ed_drawEmpNm.getValue() == "") ed_drawEmpNo.setValue("");
};
scwin.udc_drawAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawAcctDeptCd, ed_drawAcctDeptNm, 6, false);
};
scwin.udc_drawAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawAcctDeptNm, ed_drawAcctDeptCd, 6, false);
};
scwin.udc_drawAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_drawAcctDeptCd.getValue(), ed_drawAcctDeptNm.getValue(), 'F', 'T');
};
scwin.udc_drawAcctDeptCd_onviewchangeNameEvent = function (info) {
  if (ed_drawAcctDeptNm.getValue() == "") ed_drawAcctDeptCd.setValue("");
};
scwin.udc_pchsClntNoCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_pchsClntNo, ed_pchsClntNm, rtnList);
};
scwin.udc_pchsDeptCdCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_pchsDeptCd, ed_pchsDeptNm, rtnList);
};
scwin.udc_admitPicCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_admitPic, ed_admitPicNm); // 사번, 성명 
};
scwin.udc_adjmDeptCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_adjmDept, ed_adjmDeptNm, rtnList);
};
scwin.udc_drawEmpNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_drawEmpNo, ed_drawEmpNm); // 사원번호, 사원명
};
scwin.udc_drawAcctDeptCdCallback = function (rtnList) {
  scwin.f_resultPopEd(ed_drawAcctDeptCd, ed_drawAcctDeptNm, rtnList);
};
scwin.gr_certiList_onrowindexchange = function (rowIndex, oldRow) {};

//-------------------------------------------------------------------------
// 그리드 클릭시-상세보기팝업
// <script language=JavaScript for=gr_certiList event=OnClick(row,colid)>
//------------------------------------------------------------------------- 
scwin.gr_certiList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // console.log("=================>rowIndex:"+rowIndex);

  var row = ds_certiList.getRowCount();
  if (row == 0) return;
  var cnt = 0;
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T") {
      cnt++;
    }
  }
  if (cnt == 0) {
    ed_adjmDept.setValue(""); // 정산부서코드
    ed_adjmDeptNm.setValue(""); // 정산부서명
    tbx_nmCmpy.setValue(""); // 상호
    tbx_busiNo.setValue(""); // 사업자번호

    //20140926 황창기 역발행거래처여부 초기화
    rd_elecAuthTrgtYn.setValue("0"); //역발행거래처여부
    ica_payDt.setValue("");
    scwin.bfPayDt = "";
    $c.gus.cfEnableObj($p, ica_payDt, true);
  } else {
    let vRow = ds_certiList.getRowPosition();
    // 국제 물류에서 넘어온 데이타 라면 기본 셋팅
    if (scwin.pchsClntNo != "") {
      ed_adjmDept.setValue(ds_certiList.getCellData(vRow, "pchsDeptCd"));

      // 정산부서 팝업 호출
      await scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), '', 'T', 'T');
      if (ds_certiList.getCellAllData(vRow, "vat") == 0) {
        acb_evidKndClsCd.setValue("20");
        acb_taxnClsCd.setValue("02");
      } else {
        acb_evidKndClsCd.setValue("10");
        acb_taxnClsCd.setValue("01");
      }
      ed_summary.setValue(ds_certiList.getCellData(vRow, "rmk")); // 적요            
      ed_spplyDt.setValue(ds_certiList.getCellData(vRow, "pchsIntendDt")); // 공급일자
    }
    scwin.f_RetrieveClntInfo(rowIndex); // 매입증빙(상호,사업자번호) 조회

    if (scwin.ccChk == "1") {
      acb_evidKndClsCd.setValue("99");
      acb_taxnClsCd.setValue("03");
    }
    if (scwin.partne == "P") {
      acb_evidKndClsCd.setValue("20");
      acb_taxnClsCd.setValue("03");
    }
  }
  scwin.f_CalcSumAmt();
  var colid = columnId;
  if (colid == "chk") {
    scwin.f_AcctCdCheck();
  }

  // 세금계산서 접수 등록 상세 조회    
  if (colid == "slipNo") {
    if (ds_certiList.getCellData(rowIndex, "slipNo") != "") scwin.f_RetrievePurchaseEvidence(rowIndex);
  }

  // 거래영세서 출력
  if (colid == "recptYn" && ds_certiList.getCellData(rowIndex, "recptYn") == "Y") {
    scwin.f_PrintSlipNo(ds_certiList.getCellData(rowIndex, "slipNo"));
  }
};
scwin.acb_evidKndClsCd_onchange = function (info) {
  if (acb_evidKndClsCd.getValue() == "10") {
    // 증빙구분(세금계산서)
    acb_taxnClsCd.setValue("01"); // 과세구분(과세)
    rd_elecAuthTrgtYn.setValue("0"); // 전자세금계산서(미적용)
    $c.gus.cfDisableObjects($p, [acb_taxnClsCd]);
  } else if (acb_evidKndClsCd.getValue() == "00") {
    // 증빙구분(기타-부가세없음)
    acb_taxnClsCd.setValue("02"); // 과세구분(영세)
    rd_elecAuthTrgtYn.setValue("0"); // 전자세금계산서(미적용)
    $c.gus.cfDisableObjects($p, [rd_elecAuthTrgtYn]);
    $c.gus.cfDisableObjects($p, [acb_taxnClsCd]);
  } else {
    acb_taxnClsCd.setValue(""); // 과세구분(선택)
    rd_elecAuthTrgtYn.setValue("0"); // 전자세금계산서(미적용)
    $c.gus.cfDisableObjects($p, [acb_taxnClsCd, rd_elecAuthTrgtYn]);
    $c.gus.cfEnableObjects($p, [acb_taxnClsCd]);
  }
};
scwin.tbx_adjmClsCd_onclick = function (e) {
  scwin.f_Prepay();
};

// 전표일자 변경시 공급일자 SET
scwin.ica_slipDt_onchange = function () {
  ica_spplyDt.setValue(ica_slipDt.getValue());
};

// Clear
scwin.btn_fieldClear_onclick = async function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetDefaultData();
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo('T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_coCd',codeId:'ed_coCd',btnId:'btn_coCd',nameId:'ed_coNm','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_coCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',refDataCollection:'ds_searchCertiList',selectID:'retrieveDongbuGroupCompanyInfo',name:'coNm',code:'coCd',maxlengthCode:'3',maxlengthName:'20',allowCharCode:'0-9',mandatoryCode:'true',validTitle:'회사코드',objTypeName:'data',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',btnId:'btn_pchsClntNo',codeId:'ed_pchsClntNo',id:'udc_pchsClntNo',nameId:'ed_pchsClntNm','ev:onblurCodeEvent':'scwin.udc_pchsClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_pchsClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_pchsClntNo_onclickEvent',selectID:'retrieveClntList2',refDataCollection:'ds_searchCertiList',code:'pchsClntNo',name:'pchsClntNm',maxlengthCode:'6',maxlengthName:'20',allowCharCode:'0-9',UpperFlagCode:'1',mandatoryCode:'true',objTypeCode:'Data',objTypeName:'data',validTitle:'매입거래처','ev:onviewchangeNameEvent':'scwin.udc_pchsClntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',btnId:'btn_pchsDeptCd',codeId:'ed_pchsDeptCd',id:'udc_pchsDeptCd',nameId:'ed_pchsDeptNm','ev:onblurCodeEvent':'scwin.udc_pchsDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_pchsDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_pchsDeptCd_onclickEvent',refDataCollection:'ds_searchCertiList',selectID:'retrieveAcctDeptCdInfo6',code:'pchsDeptCd',name:'pchsDeptNm',maxlengthCode:'5',maxlengthName:'20',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',objTypeCode:'Data',objTypeName:'Data','ev:onviewchangeNameEvent':'scwin.udc_pchsDeptCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입항목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_oilStatClsCd_onchange',id:'lc_pchsItemCd',ref:'data:ds_searchCertiList.pchsItemCd',style:'width: 230px;',submenuSize:'fixed'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_pchsIntendDt',refDataMap:'ds_searchCertiList',refEdDt:'pchsIntendDtEnd',refStDt:'pchsIntendDtSt',style:'',edFromId:'ica_pchsIntendDtSt',edToId:'ica_pchsIntendDtEnd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',titleFrom:'매입예정일자시작',titleTo:'매입예정일자종료'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'접수구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_recptYn',search:'start',style:'width: 110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_searchCertiList.recptYn',objType:'Data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_certiNo',style:'width: 110px;',ref:'data:ds_searchCertiList.certiNo',maxlength:'14',objType:'Data',allowChar:'A-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_admitPic',codeId:'ed_admitPic',btnId:'btn_admitPic',nameId:'ed_admitPicNm','ev:onblurCodeEvent':'scwin.udc_admitPic_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_admitPic_onblurNameEvent','ev:onclickEvent':'scwin.udc_admitPic_onclickEvent',refDataCollection:'ds_searchCertiList',code:'admitPic',name:'admitPicNm',selectID:'retrieveEmpInfo3',maxlengthCode:'6',maxlengthName:'20',objTypeCode:'Data',objTypeName:'data',allowCharCode:'0-9','ev:onviewchangeNameEvent':'scwin.udc_admitPic_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_certiList',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_certiList',id:'gr_certiList',visibleRowNum:'10',visibleRowNumFix:'true','ev:onrowindexchange':'scwin.gr_certiList_onrowindexchange','ev:oncellclick':'scwin.gr_certiList_oncellclick',readOnly:'true',defaultCellHeight:'24',evenRowBackgroundColor:'#F8FFF8',showSortableImage:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'column12',inputType:'checkbox',width:'50',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'거래명세서번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매입항목',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매입예정일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매입부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'비고',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'공급가액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'외화금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'가지급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'합계금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column59',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column56',inputType:'text',style:'',value:'상계전표',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'환종',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'접수여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',style:'',value:'매입계산서역발행',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'ETD',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'ETA',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'Onboard',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'실적일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'담당자',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',value:'',width:'150',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsIntendDt',inputType:'text',width:'120',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'pchsDeptCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'rmk',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'spplyAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'suspensePay',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'link',style:'',value:'',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setoffSlipNo',inputType:'link',style:'',value:'',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recptYn',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'elecAuthTrgtYn',inputType:'select',style:'',value:'',width:'150',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미적용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'etd',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eta',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ondt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',style:'',value:'',width:'100',class:'',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pic',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'spplyAmt\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'vat\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'float',expression:'sum(\'pchsAmtFcrc\')',displayFormat:'#,##0.00',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'suspensePay\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'sumAmt\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col ',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입 확정 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',btnId:'btn_adjmDept',codeId:'ed_adjmDept',id:'udc_adjmDept',nameId:'ed_adjmDeptNm','ev:onblurCodeEvent':'scwin.udc_adjmDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_adjmDept_onblurNameEvent','ev:onclickEvent':'scwin.udc_adjmDept_onclickEvent',selectID:'retrieveAcctDeptCdInfo6',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'20',UpperFlagCode:'1',allowCharCode:'A-Z0-9',refDataCollection:'ds_purchaseCerti',code:'adjmDept',name:'adjmDeptNm',objTypeCode:'data',objTypeName:'data',validTitle:'정산부서','ev:onviewchangeNameEvent':'scwin.udc_adjmDept_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'',class:'cal',id:'ica_slipDt',style:'',mandatory:'true',ref:'data:ds_purchaseCerti.slipDt',title:'전표일자','ev:onchange':'scwin.ica_slipDt_onchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_evidKndClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_purchaseCerti.evidKndClsCd','ev:onchange':'scwin.acb_evidKndClsCd_onchange',mandatory:'true',title:'증빙구분'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세율세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현금영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타-부가세없음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'00'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'과세구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w100',editType:'select',id:'acb_taxnClsCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',ref:'data:ds_purchaseCerti.taxnClsCd',title:'과세구분'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_summary',placeholder:'',style:'',mandatory:'true',ref:'data:ds_purchaseCerti.summary',title:'적요'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_drawEmpNo',codeId:'ed_drawEmpNo',btnId:'btn_drawEmpNo',nameId:'ed_drawEmpNm','ev:onblurCodeEvent':'scwin.udc_drawEmpNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_drawEmpNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_drawEmpNo_onclickEvent',selectID:'retrieveEmpInfo3',mandatoryCode:'true',maxlengthCode:'6',maxlengthName:'20',allowCharCode:'0-9',refDataCollection:'ds_purchaseCerti',code:'drawEmpNo',name:'drawEmpNm',objTypeCode:'data',objTypeName:'data',validExpCode:'작성자:yes',validTitle:'작성자','ev:onviewchangeNameEvent':'scwin.udc_drawEmpNo_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',btnId:'btn_drawAcctDeptCd',codeId:'ed_drawAcctDeptCd',id:'udc_drawAcctDeptCd',nameId:'ed_drawAcctDeptNm','ev:onblurCodeEvent':'scwin.udc_drawAcctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_drawAcctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_drawAcctDeptCd_onclickEvent',selectID:'retrieveAcctDeptCdInfo6',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'20',allowCharCode:'A-Z0-9',UpperFlagCode:'1',refDataCollection:'ds_purchaseCerti',code:'drawAcctDeptCd',name:'drawAcctDeptNm',objTypeCode:'data',objTypeName:'data',validExpCode:'작성귀속부서:yes',validTitle:'작성부서','ev:onviewchangeNameEvent':'scwin.udc_drawAcctDeptCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급일/지급방법',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'',class:'cal',id:'ica_payDt',style:'width:160px;',ref:'',title:'지급일'}},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_reqPayMthdCd',search:'start',style:'',submenuSize:'auto',ref:'',chooseOption:'true',chooseOptionLabel:'선택'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입 증빙 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:10%;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nmCmpy',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_busiNo',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'',class:'cal',id:'ica_spplyDt',style:'',mandatory:'true',ref:'data:ds_purchaseCerti.spplyDt',title:'공급일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입계산서역발행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_elecAuthTrgtYn',ref:'data:ds_purchaseCerti.elecAuthTrgtYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true',title:'매입계산서역발행'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_spplyAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_vat',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_sumAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가지급금합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_suspenseAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_adjmClsCd',label:'조회',ref:'',style:'txt-blue underline',userData2:'','ev:onclick':'scwin.tbx_adjmClsCd_onclick'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'세금계산서 접수'}]}]}]}]}]}]}]}]}]})