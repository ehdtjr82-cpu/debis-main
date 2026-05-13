/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_08b.xml 107225 e4edf232d3a83d96a5808249846cadaa3c63e0d33f29ded694297c212e60c1b6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'ds_txncontents',baseNode:'list',repeatNode:'map','ev:onrowpositionchange':'scwin.ds_txncontents_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자등록번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'부가세사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'frchCrn',name:'가맹점사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNm',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDistYn',name:'계정배부여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNm',name:'카드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptCd',name:'정산귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptNm',name:'정산귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNm',name:'정산거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizMgntYn',name:'사업관리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardNoYn',name:'카드번호여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'가맹점번호여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'공제구분여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardKndCd',name:'카드종류코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_slipCopy',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_evidac',baseNode:'list',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'증빙별계정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',dataType:'text',name:'COL1'}},{T:1,N:'w2:column',A:{id:'col2',dataType:'text',name:'COL2'}},{T:1,N:'w2:column',A:{id:'col3',dataType:'text',name:'COL3'}},{T:1,N:'w2:column',A:{id:'col4',dataType:'text',name:'COL4'}},{T:1,N:'w2:column',A:{id:'col5',dataType:'text',name:'COL5'}},{T:1,N:'w2:column',A:{id:'col6',dataType:'text',name:'COL6'}},{T:1,N:'w2:column',A:{id:'col7',dataType:'text',name:'COL7'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'crcCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'stdDt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdExchRt',name:'stdExchRt',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveEvidInfo&param3=PCHS',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_evidClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_evidClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessSubsidiarySellSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_txn","key":"IN_DS1"},{"id":"ds_txncontents","key":"IN_DS2"},{"id":"ds_evidac","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_txn","key":"IN_DS1"},{"id":"ds_txncontents","key":"IN_DS2"},{"id":"ds_evidac","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_08b
// 이름     : 자회사 매출전표입력
// 경로     : 자회사회계/재무회계/일반회계/전표관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-17
//            2026-04-06 : 김용욱 - 소스 일괄 정리
//
// 사용계정 : 내부
// 비고     :
//            1:발행부서,3:계정,4:귀속부서,7:사업자,8:사원,10:거래처
//
//            대체전표입력(fi_201_03_01b) 와 비슷함
//
//            - 직접 입력 혹은 전표복사에서 < 1 row > 만 입력/복사됨
//              상대계정은 백엔드에서 만들어서 처리함.
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.state = "Y";
scwin.delflag = "N";
scwin.slipKndCd = ACConstants.SLIPKNDCD_SUB_COMPANY_SELL; // 전표 종류 : 자회사 - 매출전표 

scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
scwin.empNo = $c.data.getMemInfo($p, "empNo");
scwin.slipKndNm = "매출전표";
scwin.slipDt = scwin.today;
scwin.vUpperAcctDeptCd = "";
scwin.vBizDomCd = ""; // 변동비구분
scwin.varCostClsCd = ""; // 소속구분
scwin.gBizDomCdClsCd = ""; // 구분값
scwin.rltSeq = 0; // 행복사여부
scwin.rowCopyYn = 0;
scwin.vCopyYn = 0; // 전표복사 플래그 (1:복사중, 0:복사종료)
scwin.isSubCompany = false;

//hidden
scwin.txt_evidClsNm = ""; // 증빙명
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.txt_rltSeq = ""; // 관련사건저장순번 (추가 바인딩)

scwin.txt_vatYn = ""; // 부가세여부  (추가 바인딩)
scwin.txt_frchNoYn = ""; // 가맹점번호여부
scwin.txt_deductClsYn = ""; // 공제구분
scwin.txt_limitAmt = ""; // 관련사건저장순번

scwin.txt_frchCrn = ""; // 가맹정사업자등록번호 (추가 바인딩)
scwin.txt_frchNm = ""; // 가맹점명 (추가 바인딩)
// f_AcctCd
scwin.txt_termMgntYn = ""; // 기간관리여부 (추가 바인딩)
scwin.txt_clntMgntYn = ""; // 사원관리여부 (추가 바인딩)
scwin.txt_dtMgntYn = ""; // 일자관리여부 (추가 바인딩)
scwin.txt_bizMgntYn = ""; // 거래처관리여부 (추가 바인딩)

scwin.txt_amt = "";
scwin.txt_empMgntYn = "";
scwin.txt_costClsCd = ""; // 비용구분
scwin.txt_acctClsCd = ""; // 계정구분
scwin.txt_bizDomCd = ""; //변동비 계정은 팝업창에서 안보이도록 수정(06.12.22-박병갤)

scwin.popupAsyncFlag = true; // 실시간 팝업 사용여부
scwin.isSlipCopy = false; // 전표복사

scwin.onpageload = function () {
  console.log("====== onpageload ================== v. 1.02");
  scwin.state = "Y";
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  } // 통화코드
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    scwin.f_OnLoad(); // await 처리 위해
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// f_Onload
//  - f_AddRow 이전 동작
//  - tr_save 성공시 한번 더 호출
//
//  - 전표발행 후 다시 실행
//-------------------------------------------------------------------------
scwin.f_OnLoad = async function () {
  console.log("======= f_OnLoad ========");
  scwin.state = "Y";
  await scwin.f_Header();

  // f_Header START
  $c.gus.cfDisableKeyData($p);
  console.log("  ==--== 비활성 (cfDisableKeyData)");
  $c.gus.cfDisableBtnOnly($p, [btn_save]);
  console.log("  ==--== 비활성 (cfEnableAllBtn)");

  // img_crn.style.display = "none";
  // btn_crn.hide();

  $c.gus.cfDisableObjects($p, [btn_acctCd, btn_acctDeptCd, btn_mgntEmpNo, btn_vatDeclarAcctDeptCd, btn_crn, btn_mgntEmpNo]);
  console.log("  ==--== 비활성 (계정돋보기,귀속부서돋보기,사원돋보기,부가세신고부서돋보기,사업자번호돋보기,사원돋보기)");
  $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
  console.log("  ==--== 비활성 (외화금액,환율)");

  //증빙종류 조회 -sbm에 등록됨
  //ds_evidClsCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  //+ "&queryId=retrieveEvidInfo&param3=PCHS";
  $c.sbm.execute($p, sbm_evidClsCd);

  // ed_slipAcctDeptCd.hidVal="";
  // f_checkPopEd(ed_slipAcctDeptCd,txt_slipAcctDeptNm,'1');
  ica_slipDt.setValue(scwin.slipDt);
  ed_slipAcctDeptCd.options.hidVal = "";

  //scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
  await scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');

  // 행추가이전 체크
  await scwin.f_AddRow();
  ed_exchRt.setValue(0); // 환율
  // ed_spplyAmt.setValue(0);

  await scwin.getMaxCloseYm(); //마감년월 가져오기
  lc_crcCd.setValue(ACConstants.KOREA_WON);
  await scwin.f_setCompanyInfo();
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = async function () {
  // ds_txn.NameString(1,"slipDt") = <%=DDate.getDate()%>;
  // Session 이용
  // ds_txn.NameString(1,"slipAcctDeptCd") = "<%=login.getAcctDeptCd()%>"
  // ds_txn.NameString(1,"slipAcctDeptNm") = "<%=login.getAcctDeptNm()%>";
  // // 로그인사번,부서
  // ds_txn.NameString(1,"drawEmpNo") = "<%=login.getEmpNo()%>";
  // ds_txn.NameString(1,"drawAcctDeptCd") = "<%=login.getAcctDeptCd()%>"
  // ed_slipAcctDeptCd.hidVal = ds_txn.NameString(1,"slipAcctDeptCd");

  let row;
  row = ds_txn.insertRow();
  ds_txn.setRowPosition(row);
  ds_txn.setCellData(row, "slipDt", scwin.today);
  // Session 이용
  ds_txn.setCellData(row, "slipAcctDeptCd", scwin.acctDeptCd);
  ds_txn.setCellData(row, "slipAcctDeptNm", scwin.acctDeptNm);

  // 로그인사번,부서
  ds_txn.setCellData(row, "drawEmpNo", scwin.empNo);
  ds_txn.setCellData(row, "drawAcctDeptCd", scwin.acctDeptCd);
  ed_slipAcctDeptCd.options.hidVal = scwin.acctDeptCd;

  // ds_txncontents.SetDataHeader(TXNCONTENT_HEADER);
  // ds_evidac.SetDataHeader(EVIDAC_HEADER);
  // cfSetIMEModeActiveObjects([txt_summary]);
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = async function () {
  //tr_getMaxCloseYm.Post(); 
  // 마감년월 조회 조건
  dma_search2.set("coCd", scwin.vCoCd);
  let e = await $c.sbm.execute($p, sbm_getMaxCloseYm);
  // scwin.sbm_getMaxCloseYm_submitdone = function (e) {

  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- 미마감 월  확인후 작성일자 셋팅 -->
  // language="javascript"  for=ds_getMaxCloseYm event=OnLoadCompleted(rowcnt)>

  let thisYm = scwin.today; // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때

  // KYU_TEST : 기존 CloseYm --> closeYm
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    let closeYm = e.responseJSON.OUT_DS1[0]['closeYm'];
    // var lastDay =  closeYm.substr(0,4)+closeYm.substr(4,2) + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
    let lastDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날
    ica_slipDt.setValue(lastDay); //작성일자 셋팅

    //let row = ds_txncontents.insertRow();
    //ds_txncontents.setRowPosition(row);
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "slipDt", lastDay);
    console.log("  마감여부 -- 최소 미마감월이 당월이 아닐때 : 마감년월 [" + closeYm + "]  ds_txn.slipDt [" + ds_txn.getCellData(0, "slipDt") + "]  ds_txncontents.slipDt [" + ds_txncontents.getCellData(0, "slipDt") + "]");
  } else {
    //var firstDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+"01";  //당월 1일
    //var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
    //ed_slipDt.text = lastDay; //작성일자 셋팅
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = async function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 행추가체크
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  console.log("----- f_AddRow (행추가이전 체크)  ▼▼▼▼");
  let ret = await $c.gus.cfValidate($p, [ica_slipDt, ed_slipAcctDeptCd]);
  if (!ret) return;
  if (ds_txncontents.getRowCount() > 0) {
    //ret = await scwin.f_Validation();
    //if ( ret !=true) return;
  }
  await scwin.f_Add();
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  console.log("--- === --- f_Add (행추가) =============================");
  scwin.state = "N";
  scwin.delflag = "N";
  let rltSeq;
  if (ds_txncontents.getCellData(ds_txncontents.getRowCount(), "rltSeq") != 0 && ds_txncontents.getCellData(ds_txncontents.getRowCount(), "rltSeq") != null) {
    rltSeq = parseInt(ds_txncontents.getCellData(ds_txncontents.getRowCount(), "rltSeq")) + 1;
  } else {
    rltSeq = rltSeq + 1;
  }
  $c.gus.cfEnableKeyData($p);
  // cfEnableBtnOnly([bSave]);
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]); // 발행버튼 활성
  console.log("  ==--== 활성 (발행버튼(bSave))");

  // cfDisableObjects([ed_vatAmt,txt_vatDeclarAcctDeptNm,
  // 				  ed_crn,txt_crnNm,ed_mgntEmpNo,txt_mgntEmpNm,txt_vatCrn ]); 

  $c.gus.cfDisableObjects($p, [ed_vatAmt, ed_vatDeclarAcctDeptNm, ed_crn, ed_crnNm, ed_mgntEmpNo, ed_mgntEmpNm, ed_vatCrn]);
  console.log("  행추가 ==--== 비활성 (부가세액,부가세신고부서명,사업자,사업자명,사원번호,사원명,부가세사업자번호)");

  // cfEnableObjects([img_txnDt,img_acctCd,img_acctDeptCd,img_vatDeclarAcctDeptCd ]);
  $c.gus.cfEnableObjects($p, [btn_acctCd, btn_acctDeptCd, btn_vatDeclarAcctDeptCd]);
  console.log("  행추가 ==--== 활성 (계정돋보기,귀속부서돋보기,부가세신고부서돋보기)");
  let row;
  if (ds_txncontents.getRowCount() < 1) row = ds_txncontents.insertRow();else row = ds_txncontents.insertRow(ds_txncontents.getRowPosition() + 1);
  ds_txncontents.setRowPosition(row);
  scwin.f_EnableYn(ds_txncontents.getRowCount());
  lc_evidClsCd.setSelectedIndex(0);
  lc_crcCd.setValue("KRW");
  console.log("  --- --- 통화코드 KRW 지정");
  scwin.txt_vatYn = "1";
  scwin.txt_rltSeq = rltSeq;

  // KYU_NEW : 바인딩처리
  row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "rltSeq", scwin.txt_rltSeq); // 관련사건저장순번

  // cfEnableObjects([ed_acctCd,txt_acctNm,ed_acctDeptCd,txt_acctDeptNm,img_acctCd,img_acctDeptCd]) ;
  $c.gus.cfEnableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, btn_acctCd, btn_acctDeptCd]);
  console.log("  행추가  ==--== 활성 (계정,계정명,귀속부서,귀속부서명,계정돋보기,귀속부서돋보기)");

  //f_SetGridFormat(); 
};

//-------------------------------------------------------------------------
// row position 변경됨  ds_txncontents_onrowpositionchange  @@ @
//   1 row 만 있으므로, 초기/전표복사시에만 실행됨
//-------------------------------------------------------------------------
scwin.ds_txncontents_onrowpositionchange = async function (info) {
  var oldRow = info.oldRowIndex;
  var newRow = info.newRowIndex;
  var oldStatus = ds_txncontents.getRowStatus(oldRow);
  var newStatus = ds_txncontents.getRowStatus(newRow);

  // 새로 받기 위해 ds 비울 때 (전표복사) - 제외 old[0][C]  new (row) [null][undefined]
  if (
  //    ( oldRow == null )  ||
  newRow == null // 데이타 셋을 비울 때 (setJSON)   old [0][C]  new (row) [null][undefined]   
  ) return;
  console.log("▶▷▶▷▶▷▶▷  ds_txncontents_onrowpositionchange  : row position 변경됨  old[" + oldRow + "][" + oldStatus + "]  new (row) [" + newRow + "][" + newStatus + "]");

  // <!-- 데이타셋 속성제어-->
  // language=JavaScript for=ds_txncontents event=OnRowPosChanged(row)>

  let row = 0;
  if (!$c.gus.cfIsNull($p, info.newRowIndex)) {
    row = info.newRowIndex;
  }

  // f_EvidClsCd(ds_txncontents.NameString(row,"bizMgntYn"),ds_txncontents.NameString(row,"vatYn"),ds_txncontents.NameString(row,"cardNoYn"),
  // 		    ds_txncontents.NameString(row,"frchNoYn"),ds_txncontents.NameString(row,"deductClsYn"),ds_txncontents.NameString(row,"limitAmt")) ;

  // 증빙구분조회시화면셋팅
  console.log("    rowPosChange [" + row + "]- f_EvidClsCd  사업자[" + ds_txncontents.getCellData(row, "bizMgntYn") + "] 부가세[" + ds_txncontents.getCellData(row, "vatYn") + "] 카드번호[" + ds_txncontents.getCellData(row, "cardNoYn") + "] 가맹점번호[" + ds_txncontents.getCellData(row, "frchNoYn") + "] 공제구분[" + ds_txncontents.getCellData(row, "deductClsYn") + "] 한도금액[" + ds_txncontents.getCellData(row, "limitAmt") + "]");
  await scwin.f_EvidClsCd(ds_txncontents.getCellData(row, "bizMgntYn"), ds_txncontents.getCellData(row, "vatYn"), ds_txncontents.getCellData(row, "cardNoYn"), ds_txncontents.getCellData(row, "frchNoYn"), ds_txncontents.getCellData(row, "deductClsYn"), ds_txncontents.getCellData(row, "limitAmt"));
  console.log("    f_EvidClsCd (증빙구분조회시화면셋팅) 실행후...");

  // f_AcctCd(ds_txncontents.NameString(row,"empMgntYn"),ds_txncontents.NameString(row,"termMgntYn"),ds_txncontents.NameString(row,"dtMgntYn"),ds_txncontents.NameString(row,"clntMgntYn")) ;

  // 계정조회시화면셋팅
  await scwin.f_AcctCd(ds_txncontents.getCellData(row, "empMgntYn"), ds_txncontents.getCellData(row, "termMgntYn"), ds_txncontents.getCellData(row, "dtMgntYn"), ds_txncontents.getCellData(row, "clntMgntYn"));
  console.log("    f_AcctCd (계정조회시화면셋팅) 실행후...");

  // KYU_ISSUE : 실행시 초기 화면과 다름
  // cfDisableObjects([txt_acctNm,txt_acctDeptNm,txt_vatDeclarAcctDeptNm,txt_mgntEmpNm,txt_vatCrn,txt_mgntClntNm]);
  // $c.gus.cfDisableObjects([ed_acctNm, ed_acctDeptNm, ed_vatDeclarAcctDeptNm, ed_mgntEmpNm, ed_vatCrn, ed_mgntClntNm]);
  // console.log("  rowPosChange == 비활성 (계정,계정명,귀속부서,귀속부서명,계정돋보기,귀속부서돋보기)");
  // 계정명,귀속부서명 제거
  $c.gus.cfDisableObjects($p, [, ed_vatDeclarAcctDeptNm, ed_mgntEmpNm, ed_vatCrn, ed_mgntClntNm]);
  console.log("  rowPosChange == 비활성 (계정귀속부서,계정돋보기,귀속부서돋보기) - 계정명,귀속부서명 제외");

  // KYU_NEW : 전표복사 중에는 계정명,귀속부서명 비활성 (초기에는 활성, 전표복사후 비활성)
  if (scwin.vCopyYn == 1) {
    $c.gus.cfDisableObjects($p, [, ed_acctNm, ed_acctDeptNm]);
    console.log("  rowPosChange - 전표복사중 == 비활성 (계정명,귀속부서명)");
  }

  // 사업자명에 가맹점명 복사
  await scwin.f_CrnNm(row);
  ed_slipAcctDeptCd.options.hidVal = ds_txn.getCellData(0, "slipAcctDeptCd");
  ed_crn.options.hidVal = ds_txncontents.getCellData(row, "crn");
  ed_acctCd.options.hidVal = ds_txncontents.getCellData(row, "acctCd");
  ed_acctDeptCd.options.hidVal = ds_txncontents.getCellData(row, "acctDeptCd");
  ed_vatDeclarAcctDeptCd.options.hidVal = ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd");
  ed_mgntEmpNo.options.hidVal = ds_txncontents.getCellData(row, "mgntEmpNo");
  ed_mgntClntNo.options.hidVal = ds_txncontents.getCellData(row, "mgntClntNo");
  ed_slipAcctDeptCd.setValue(ds_txn.getCellData(0, "slipAcctDeptCd"));
  ed_crn.setValue(ds_txncontents.getCellData(row, "crn"));
  ed_acctCd.setValue(ds_txncontents.getCellData(row, "acctCd"));
  ed_acctDeptCd.setValue(ds_txncontents.getCellData(row, "acctDeptCd"));
  ed_vatDeclarAcctDeptCd.setValue(ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd"));
  ed_mgntEmpNo.setValue(ds_txncontents.getCellData(row, "mgntEmpNo"));
  ed_mgntClntNo.setValue(ds_txncontents.getCellData(row, "mgntClntNo"));
  ed_mgntClntNm.setValue(ds_txncontents.getCellData(row, "mgntClntNm"));
  console.log("▶▷▶▷▶▷▶▷  ds_txncontents_onrowpositionchange  END  ▶▷▶▷▶▷▶▷");
};

//-------------------------------------------------------------------------
//  사업자명에 가맹점명 복사
//-------------------------------------------------------------------------
scwin.f_CrnNm = async function (row) {
  if (ed_crnNm.getValue() == "" && typeof ds_txncontents.getCellData(row, "frchNm") != "undefined") {
    ed_crnNm.setValue(ds_txncontents.getCellData(row, "frchNm"));
  }
};

// @@ ====== 그리드 / DS - 기타 ================================================================ //

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  if (str == 1) {
    $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
  }
};

// @@ ====== 이벤트 - 로직 ===================================================================== //

//-------------------------------------------------------------------------
//  증빙구분조회시화면셋팅
//  r_bizMgntYn - 거래처관리여부=>사업자관리여부
//  r_vatYn - 부가세여부
//  r_cardNoYn - 카드번호여부
//  r_frchNoYn - 가맹점번호여부
//  r_deductClsYn - 공제구분여부
//  r_limitAmt - 한도금액
//-------------------------------------------------------------------------
scwin.f_EvidClsCd = async function (r_bizMgntYn, r_vatYn, r_cardNoYn, r_frchNoYn, r_deductClsYn, r_limitAmt) {
  console.log("======= ▶▶ f_EvidClsCd (증빙구분조회시화면셋팅) ▶▶ === 사업자[" + r_bizMgntYn + "] 부가세[" + r_vatYn + "] 카드[" + r_cardNoYn + "] 가맹점[" + r_frchNoYn + "] 공제[" + r_deductClsYn + "] 한도[" + r_limitAmt + "]");
  scwin.txt_bizMgntYn = r_bizMgntYn;
  if (lc_crcCd.getValue() == ACConstants.KOREA_WON) scwin.txt_vatYn = r_vatYn;else scwin.txt_vatYn = "0";
  scwin.txt_cardNoYn = r_cardNoYn;
  scwin.txt_frchNoYn = r_frchNoYn; // 가맹점번호여부
  scwin.txt_deductClsYn = r_deductClsYn;
  scwin.txt_limitAmt = r_limitAmt;

  // KYU_NEW : 추가 바인딩  @@
  var row = ds_txncontents.getRowPosition();
  console.log("  row [" + row + "]  vatYn [" + ds_txncontents.getCellData(row, "vatYn") + "]");
  ds_txncontents.setCellData(row, "bizMgntYn", scwin.txt_bizMgntYn); // 사업관리여부
  ds_txncontents.setCellData(row, "vatYn", scwin.txt_vatYn); // 부가세

  // KYU_NEW
  ds_txncontents.setCellData(row, "cardNoYn", scwin.txt_cardNoYn); // 카드

  ds_txncontents.setCellData(row, "frchNoYn", scwin.txt_frchNoYn); // 가맹점
  ds_txncontents.setCellData(row, "deductClsYn", scwin.txt_deductClsYn); // 공제
  ds_txncontents.setCellData(row, "limitAmt", scwin.txt_limitAmt); // 한계금액

  // 부가세여부
  if (r_vatYn == "1") {
    //ed_vatAmt.validExp="부가세액:yes"
    ed_vatAmt.setMandatory(true);
    $c.gus.cfEnableObjects($p, [ed_vatAmt]);
    //setAmt();
    //setSupplyAmt();
  } else {
    ed_vatAmt.text = 0;
    //ed_vatAmt.validExp="부가세액:no"
    ed_vatAmt.setMandatory(false);
    $c.gus.cfDisableObjects($p, [ed_vatAmt]);
    //setAmt();
  }

  // 사업자번호

  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    scwin.txt_frchCrn = ed_crn.getValue().trim();
    scwin.txt_frchNm = ed_crnNm.getValue().trim();
    //img_crn.style.display = "inline";
    btn_crn.show();

    //ed_crn.validExp="사업자번호:yes"; 
    ed_crn.setMandatory(true);
    //ed_crnNm.validExp="사업자명:yes:maxByteLength=50"; 
    $c.gus.cfEnableObjects($p, [ed_crn, btn_crn]);
    $c.gus.cfDisableObjects($p, ed_crnNm);
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    //img_crn.style.display = "none";
    btn_crn.hide();
    scwin.txt_frchCrn = ed_crn.getValue().trim();
    //txt_frchNm.value=txt_crnNm.value.trim();
    //ed_crn.validExp="사업자번호:yes"; 
    ed_crn.setMandatory(true);
    //txt_crnNm.validExp="사업자명:yes:maxByteLength=50"; 
    // alert("2");
    $c.gus.cfEnableObjects($p, [ed_crn, ed_crnNm]);
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    //img_crn.style.display = "none";
    btn_crn.hide();
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    scwin.txt_frchCrn = "";
    scwin.txt_frchNm = "";
    //ed_crn.validExp="사업자번호:no"; 
    ed_crn.setMandatory(false);

    //txt_crnNm.validExp="사업자명:no:maxByteLength=50"; 
    //alert("3");
    $c.gus.cfDisableObjects($p, [ed_crn, btn_crn, ed_crnNm]);
  }

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹정사업자등록번호
  ds_txncontents.setCellData(row, "frchNm", scwin.txt_frchNm); // 가맹점명
};

//-------------------------------------------------------------------------
//  계정조회시화면셋팅
//  r_termMgntYn - 기간관리여부
//  r_empMgntYn - 사원관리여부
//  r_dtMgntYn - 일자관리여부
//  r_clntMgntYn - 거래처여부
//-------------------------------------------------------------------------
scwin.f_AcctCd = async function (r_empMgntYn, r_termMgntYn, r_dtMgntYn, r_clntMgntYn) {
  console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅)  row[" + ds_txncontents.getRowPosition() + "] 사원[" + r_empMgntYn + "] 기간[" + r_termMgntYn + "] 일자[" + r_dtMgntYn + "] 거래처[" + r_clntMgntYn + "]");
  scwin.txt_empMgntYn = r_empMgntYn;
  scwin.txt_termMgntYn = r_termMgntYn;
  scwin.txt_dtMgntYn = r_dtMgntYn;
  scwin.txt_clntMgntYn = r_clntMgntYn;

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "termMgntYn", scwin.txt_termMgntYn); // 기간관리여부
  ds_txncontents.setCellData(row, "empMgntYn", scwin.txt_empMgntYn); // 사원관리여부
  ds_txncontents.setCellData(row, "dtMgntYn", scwin.txt_dtMgntYn); // 일자관리여부
  ds_txncontents.setCellData(row, "clntMgntYn", scwin.txt_clntMgntYn); // 거래처관리여부

  // 사원번호여부
  if (r_empMgntYn == "1") {
    //ed_mgntEmpNo.validExp="사원번호:yes:format=000000"
    ed_mgntEmpNo.setMandatory(true);
    ed_mgntEmpNo.setAllowChar("000000");
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
  } else {
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
    //ed_mgntEmpNo.validExp="사원번호:no:format=000000"
    ed_mgntEmpNo.setMandatory(false);
    ed_mgntEmpNo.setAllowChar("000000");
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
  }

  // 기간관리여부
  /*
  if(r_termMgntYn=="1"){
           ed_mgntTermStDt.validExp="경비기간:yes:date=YYYYMMDD"
           ed_mgntTermEndDt.validExp="경비기간:yes:date=YYYYMMDD"
           cfEnableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
  }else{
           ed_mgntTermStDt.text="";
           ed_mgntTermEndDt.text="";
           ed_mgntTermStDt.validExp="경비기간:no:date=YYYYMMDD"
           ed_mgntTermEndDt.validExp="경비기간:no:date=YYYYMMDD"
           cfDisableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
  }
  */
  // 거래처여부
  /*
  if(r_clntMgntYn=="1"){
           ed_mgntClntNo.validExp="거래처:yes:format=000000"
           cfEnableObjects([ed_mgntClntNo, img_mgntClntNo]);
  }else{
               ed_mgntClntNo.text="";
             txt_mgntClntNm.value="";
             ed_mgntClntNo.validExp="거래처:no:format=000000"
               cfDisableObjects([ed_mgntClntNo, img_mgntClntNo]);
   }
   */
  // 일자관리여부  	
  /*
  if(parseInt(r_dtMgntYn)== "1"){
           ed_mgntDt.validExp="관리일자:yes:date=YYYYMMDD";
           cfEnableObjects([ed_mgntDt, img_mgntDt]);
   }else{
           ed_mgntDt.text="";
           ed_mgntDt.validExp="관리일자:no:date=YYYYMMDD";
           cfDisableObjects([ed_mgntDt, img_mgntDt]);
  }
  */
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 공급금액 focus out 
//-------------------------------------------------------------------------
scwin.ed_spplyAmt_onblur = async function (e) {
  // <!-- 금액 입력시 -->
  // ==> 공금금액 입력시
  // language=JavaScript for=ed_spplyAmt event=OnKillFocus()>
  await scwin.setAmt();
};

//-------------------------------------------------------------------------
//  부가세액 셋팅
//-------------------------------------------------------------------------
scwin.setAmt = async function () {
  console.log("=== setAmt (환율 입력) :  부가세여부 (txt_vatYn) [" + scwin.txt_vatYn + "]");

  // 부가세여부가 셋팅시 
  if (scwin.txt_vatYn == "1") {
    //ed_vatAmt.text = Math.floor(ed_spplyAmt.text.trim() *(0.1/1));

    ed_vatAmt.setValue(Math.round($c.num.parseFloat($p, ed_spplyAmt.getValue().trim(), 0) * 0.1)); //버림->반올림 수정. 2012.07.09
  } else {
    ed_vatAmt.setValue(0);
  }
};

//-------------------------------------------------------------------------
// 외화금액 focus out
//-------------------------------------------------------------------------
scwin.ed_spplyAmtFcrc_onblur = function (e) {
  console.log("----- ed_spplyAmtFcrc_onblur (외화금액 입력):  vCopyYn [" + scwin.vCopyYn + "]");
  // <!-- 외화금액 입력시 -->
  // language=JavaScript for=ed_spplyAmtFcrc event=OnKillFocus()>

  // 전표복사 아닐 때
  if (scwin.vCopyYn == 0) ed_spplyAmt.setValue(Math.floor(ed_spplyAmtFcrc.getValue().trim() * ed_exchRt.getValue().trim()));
};

//-------------------------------------------------------------------------
// 환율 focus out
//-------------------------------------------------------------------------
scwin.ed_exchRt_onblur = function (e) {
  console.log("----- ed_exchRt_onblur (환율 입력) :  vCopyYn [" + scwin.vCopyYn + "]");
  // ==> 환율 입력시
  // language=JavaScript for=ed_exchRt event=OnKillFocus()>
  // 전표복사 아닐 때
  if (scwin.vCopyYn == 0) ed_spplyAmt.setValue(Math.floor(ed_spplyAmtFcrc.getValue().trim() * ed_exchRt.getValue().trim()));
};

//-------------------------------------------------------------------------
// 통화코드 변경
//-------------------------------------------------------------------------
scwin.lc_crcCd_onchange = async function (info) {
  console.log("----- lc_crcCd_onchange (통화코드 변경)");

  // <!-- 통화코드변경시 -->
  // language=JavaScript for=lc_crcCd event=onSelChange()>

  await scwin.crcCdChange();
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt]);
    console.log("  ==--== 비활성 (외화금액,환율) 활성 (공급금액)");
  } else {
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfDisableObjects($p, ed_spplyAmt);
    console.log("  ==--== 활성 (외화금액,환율) 비활성 (공급금액)");
  }
};

//-------------------------------------------------------------------------
//  통화코드변경시
//    - 원화 -> 외화 : 외화금액 0 이면 공급금액 0
//      외화 -> 원화 : 외화금액 0 이라도 공급금액 유지 (경비,대체전표는 0 처리)
//-------------------------------------------------------------------------
scwin.crcCdChange = async function () {
  console.log("=== crcCdChange (통화코드변경시-환율조회)");
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    console.log("  ==--== 비활성 (외화금액) 활성(공급금액,부가세액)");

    // ed_exchRt.text = 0;
    // ed_spplyAmtFcrc.text = 0;
    ed_exchRt.setValue(0);
    ed_spplyAmtFcrc.setValue(0);
    //ed_spplyAmtFcrc.validExp="외화금액:no:maxLength=13";
    //ed_amt.focus();
  } else {
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수
    ed_spplyAmtFcrc.setMandatory(true);
    //ed_spplyAmtFcrc.validExp="외화금액:yes:notAllowed=0&maxLength=13";

    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    console.log("  ==--== 활성 (외화금액) 비활성(공급금액,부가세액)");

    // 환율 조회를 위한 코드 추가 
    ds_exchRtSearch.set("crcCd", lc_crcCd.getValue());
    ds_exchRtSearch.set("stdDt", ica_slipDt.getValue());

    // ed_vatAmt.Text = 0;
    ed_vatAmt.setValue(0);
    //tr_exchRt.Post();
    let e = await $c.sbm.execute($p, sbm_exchRt);

    // <!-- 통화코드 DataSet -->
    // language=JavaScript for=tr_exchRt event=OnSuccess()>

    if (e.responseJSON.resultDataSet[0].Code != 0) return;
    ed_exchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));

    // KYU_TEST : 의미없음. 원화가 아닌 외화에서 도는 서브미션
    if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
      // cfDisableObj(ed_spplyAmtFcrc, true);
      $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc]);
      console.log("  ==--== 비활성 (외화금액)");
    } else {
      // cfEnableObj(ed_spplyAmtFcrc, true);
      $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc]);
      console.log("  ==--== 활성 (외화금액)");
    }
    ed_spplyAmtFcrc.focus();
  }
};

//-------------------------------------------------------------------------
//  증빙종류 변경시
//-------------------------------------------------------------------------
scwin.lc_evidClsCd_onchange = async function (info) {
  // console.log("  ▶▷▶▷  lc_evidClsCd_onchange (증빙종류변경) 실행! skipRowCheck ["+scwin.skipRowCheck+"]  old ["+scwin.g_oldRowIndex+"] pos ["+ds_txncontents.getRowPosition()+"]");
  console.log("  ▶▷▶▷  lc_evidClsCd_onchange (증빙종류변경) 실행!");

  //let row = ds_evidClsCd.NameValueRow("COL1", lc_evidClsCd.ValueOfIndex("COL1", lc_evidClsCd.Index));
  let row = ds_evidClsCd.getMatchedIndex("col1", lc_evidClsCd.getValue(), true);
  scwin.txt_evidClsNm = ds_evidClsCd.getCellData(row, "col2"); //증빙명

  console.log("      최초 실행 : getEvidInfo - f_EvidClsCd  row[" + row + "] [" + ds_evidClsCd.getCellData(row, "col1") + "][" + ds_evidClsCd.getCellData(row, "col2") + "]  bizMgntYn[" + ds_evidClsCd.getCellData(row, "col3") + "]  limitAmt[" + ds_evidClsCd.getCellData(row, "col9") + "]");

  // KYU_NEW : 바인딩 처리
  ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "evidClsNm", scwin.txt_evidClsNm); //증빙명

  await scwin.f_EvidClsCd(ds_evidClsCd.getCellData(row, "col3") //r_bizMgntYn   - 거래처관리여부=>사업자관리여부
  , ds_evidClsCd.getCellData(row, "col4") //r_vatYn       - 부가세여부
  , ds_evidClsCd.getCellData(row, "col5") //r_cardNoYn    - 카드번호여부
  , ds_evidClsCd.getCellData(row, "col6") //r_frchNoYn    - 가맹점번호여부 
  , ds_evidClsCd.getCellData(row, "col7") //r_deductClsYn - 공제구분여부
  , ds_evidClsCd.getCellData(row, "col9") //r_limitAmt    - 한도금액
  );
  if (lc_evidClsCd.getValue() == "10") {
    //ed_mgntClntNo.validExp="거래처:yes:format=000000";
    ed_mgntClntNo.setMandatory(true);
    ed_mgntClntNo.options.mandatory = true;
    //ed_mgntClntNo.mandatory="true"
  } else {
    //ed_mgntClntNo.validExp="거래처:no:format=000000";
    ed_mgntClntNo.setMandatory(false);
    ed_mgntClntNo.options.mandatory = false;
    //ed_mgntClntNo.mandatory="false"	  
  }
};
scwin.ica_txnDt_onblur = function (e) {
  // <!-- 증빙일자가 변경될 경우 부가세귀속부서도 변경되도록 함.(부가세귀속부서이력관리에 따라 추가) -->
  // language=JavaScript for=ed_txnDt event=OnKillFocus()>

  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.options.hidVal = '';
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatCrn.setValue("");
  } else {
    scwin.f_VatDeclarAcctDeptCd('2');
  }
};
scwin.sbm_evidClsCd_submitdone = function (e) {};

// @@ ====== 팝업 - 기타 ======================================================================= //

//-------------------------------------------------------------------------
//  f_SlipCopy 전표복사  @@ @
//-------------------------------------------------------------------------
scwin.f_SlipCopy = async function () {
  console.log("=== f_SlipCopy (전표복사(매출전표) 팝업 로딩)");

  /*
  var parObject = new Object();
  parObject.slipKndCd = slipKndCd;
  parObject.slipKndNm = slipKndNm;      
  parObject.pCoCd     =  txtCoCd.value
  parObject.pCoClsCd  =  txtCoClsCd.value;  
   var style = "center:yes; dialogwidth:420px; dialogheight:230px; scroll:no; resizable:no; status:yes;";
  var strPath = "fi_201_01_10p.jsp";
  */
  let data = {
    "slipKndCd": scwin.slipKndCd,
    "slipKndNm": scwin.slipKndNm,
    "pCoCd": scwin.txtCoCd,
    "pCoClsCd": scwin.txtCoClsCd
  };
  let strPath = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_10p.xml";
  const options = {
    id: "fi_201_01_10p",
    type: "browserPopup",
    modal: true,
    popupName: "매출전표복사",
    width: 720
  };
  let returnValue = await $c.win.openPopup($p, strPath, options, data);
  if (returnValue != null) {
    // 전표복사 플래그
    scwin.isSlipCopy = true;
    console.log("returnValue.txtcopy [" + JSON.stringify(returnValue.txtcopy) + "]");
    console.log("returnValue.copyKind [" + returnValue.copyKind + "]");
    $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd, btn_acctDeptCd]);
    console.log("  ==--== 활성 (작성일자,발행부서,발행부서명,발행부서돋보기,귀속부서돋보기))");
    $c.gus.cfEnableKeyData($p);

    // cfEnableBtnOnly([bSave]);
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
    $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]); // 발행버튼 활성
    console.log("  ==--== 활성 (발행버튼(bSave))");

    // ds_txncontents.ClearData();    
    // ds_evidac.ClearData(); 
    // ds_slipCopy.ClearData();

    ds_txncontents.setJSON([]);
    ds_evidac.setJSON([]);
    ds_slipCopy.setJSON([]);

    // - 직접 입력 혹은 전표복사에서 < 1 row  > 만 입력/복사됨
    //   상대계정은 백엔드에서 만들어서 처리함.

    // slipCopy 결과
    let Sts = returnValue.txtcopy;

    // 전표복사 플래그 : 전표복사중
    scwin.vCopyYn = 1;
    ds_txncontents.insertRow();
    ds_txncontents.setRowPosition(0);
    //ds_slipCopy.ImportData(Sts); 			

    ds_slipCopy.insertRow();
    ds_slipCopy.setRowPosition(0);
    //ds_slipCopy.setData(Sts);
    ds_slipCopy.setJSON(Sts);
    let thisYm = scwin.today; // 오늘일자 가져오기

    // KYU_TEST : 기존 CloseYm --> closeYm
    //최소 미마감월이 당월이 아닐때
    if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
      let closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");

      // var lastDay =  closeYm.substr(0,4)+closeYm.substr(4,2) + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
      let lastDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날

      // ed_slipDt.text = lastDay; //작성일자 셋팅
      // ds_txncontents.NameValue(1,"slipDt") = lastDay ;
      ica_slipDt.setValue(lastDay); //작성일자 셋팅
      ds_txncontents.setCellData(0, "slipDt", lastDay);
      console.log("  전표복사 -- 최소 미마감월이 당월이 아닐때 : 마감년월 [" + closeYm + "]  ds_txn.slipDt [" + ds_txn.getCellData(0, "slipDt") + "]  ds_txncontents.slipDt [" + ds_txncontents.getCellData(0, "slipDt") + "]");
    }

    // 사업자
    // ds_txncontents.NameValue(1,"crn") = ds_slipCopy.NameValue(1, "crn");
    // 	if(ed_crn.text.trim()!="") f_openPopUp('7','T');

    ds_txncontents.setCellData(0, "crn", ds_slipCopy.getCellData(0, "crn"));
    if (ed_crn.getValue().trim() != "") {
      await scwin.f_openPopUp('7', 'T');
    }

    // 증빙구분
    // ds_txncontents.NameValue(1,"evidClsCd") = ds_slipCopy.NameValue(1, "evidClsCd");
    ds_txncontents.setCellData(0, "evidClsCd", ds_slipCopy.getCellData(0, "evidClsCd"));

    //scwin.txt_limitAmt 셋팅위해 호출
    // await scwin.lc_evidClsCd_onchange();

    // 증빙종류 변경 : f_EvidClsCd 실행
    let rtnEvid = await scwin.lc_evidClsCd_onchange();

    // 환율코드 변경 : 외화금액 등 세팅
    let rtnCrc = await scwin.lc_crcCd_onchange();

    // 증빙구분, 통화, 환율, 계산서일자, 금액, 외화금액, 부가세액
    // ds_txncontents.NameValue(1,"evidClsCd") = ds_slipCopy.NameValue(1, "evidClsCd");
    // ds_txncontents.NameValue(1,"crcCd") = ds_slipCopy.NameValue(1, "crcCd");
    // ds_txncontents.NameValue(1,"exchRt") = ds_slipCopy.NameValue(1, "exchRt");
    // ds_txncontents.NameValue(1,"txnDt") = "<%=strToDate%>";								
    // ds_txncontents.NameValue(1,"spplyAmt") = ds_slipCopy.NameValue(1, "spplyAmt");
    // ds_txncontents.NameValue(1,"spplyAmtFcrc") = ds_slipCopy.NameValue(1, "spplyAmtFcrc");			
    // ds_txncontents.NameValue(1,"vatAmt") = ds_slipCopy.NameValue(1, "vatAmt")

    ds_txncontents.setCellData(0, "crcCd", ds_slipCopy.getCellData(0, "crcCd"));
    ds_txncontents.setCellData(0, "exchRt", ds_slipCopy.getCellData(0, "exchRt"));
    ds_txncontents.setCellData(0, "txnDt", scwin.today);
    ds_txncontents.setCellData(0, "spplyAmt", ds_slipCopy.getCellData(0, "spplyAmt"));
    ds_txncontents.setCellData(0, "spplyAmtFcrc", ds_slipCopy.getCellData(0, "spplyAmtFcrc"));
    ds_txncontents.setCellData(0, "vatAmt", ds_slipCopy.getCellData(0, "vatAmt"));

    // 사원
    // ds_txncontents.NameValue(1,"mgntEmpNo") = ds_slipCopy.NameValue(1, "mgntEmpNo");
    // if(ed_mgntEmpNo.text.trim()!="") f_openPopUp('8','T');
    ds_txncontents.setCellData(0, "mgntEmpNo", ds_slipCopy.getCellData(0, "mgntEmpNo"));
    if (ed_mgntEmpNo.getValue().trim() != "") {
      await scwin.f_openPopUp('8', 'T');
    }
    // 귀속부서
    // ds_txncontents.NameValue(1,"acctDeptCd") = ds_slipCopy.NameValue(1, "acctDeptCd");
    // if(ed_acctDeptCd.text.trim()!="") f_openPopUp('4','T');
    ds_txncontents.setCellData(0, "acctDeptCd", ds_slipCopy.getCellData(0, "acctDeptCd"));
    if (ed_acctDeptCd.getValue().trim() != "") {
      await scwin.f_openPopUp('4', 'T');
    }

    // 부가세관리부서
    // ds_txncontents.NameValue(1,"vatDeclarAcctDeptCd") = ds_slipCopy.NameValue(1, "vatDeclarAcctDeptCd");
    // if(ed_vatDeclarAcctDeptCd.text.trim()!="") f_VatDeclarAcctDeptCd('1');
    ds_txncontents.setCellData(0, "vatDeclarAcctDeptCd", ds_slipCopy.getCellData(0, "vatDeclarAcctDeptCd"));
    if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") {
      await scwin.f_VatDeclarAcctDeptCd('1');
    }

    // 거래처
    // ds_txncontents.NameValue(1,"mgntClntNo") = ds_slipCopy.NameValue(1, "mgntClntNo");
    // if(ed_mgntClntNo.text.trim()!="") f_openPopUp('10','T');
    ds_txncontents.setCellData(0, "mgntClntNo", ds_slipCopy.getCellData(0, "mgntClntNo"));
    if (ed_mgntClntNo.getValue().trim() != "") await scwin.f_openPopUp('10', 'T');
    //			ds_txncontents.NameValue(1,"acctCd") = ds_slipCopy.NameValue(1, "acctCd");
    //				if(ed_acctCd.text.trim()!="") f_openPopUp('3','T');

    // 적요
    // ds_txncontents.NameValue(1,"summary ") = ds_slipCopy.NameValue(1, "summary");
    ds_txncontents.setCellData(0, "summary", ds_slipCopy.getCellData(0, "summary"));
    for (var idx = 0; idx < ds_txncontents.getRowCount(); idx++) {
      //dataSetDebug(ds_txncontents, false);

      //				lc_slipKndCd.BindColVal = returnValue.slipKndNm;

      if (returnValue.copyKind == "2") {
        ds_txncontents.setCellData(idx, "dcAmt", -1 * parseFloat(ds_txncontents.getCellData(idx, "dcAmt")));
        ds_txncontents.setCellData(idx, "spplyAmt", -1 * parseFloat(ds_txncontents.getCellData(idx, "spplyAmt")));
        ds_txncontents.setCellData(idx, "vatAmt", -1 * parseFloat(ds_txncontents.getCellData(idx, "vatAmt")));
      }
    } // for end

    // 전표복사 플래그 : 종료
    scwin.vCopyYn = 0;

    // 귀속부서
    await scwin.f_openPopUp('4', 'F');
    // 계정
    await scwin.f_openPopUp('3', 'F');

    // 전표복사 종료
    scwin.isSlipCopy = false;
  }
};

// @@ ====== 이벤트 - 팝업 ===================================================================== //

scwin.udc_slipAcctDeptCd_onblurCodeEvent = async function (e) {
  //  language=JavaScript for=ed_slipAcctDeptCd event=OnKillFocus()>
  // //발행부서
  await scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
};

// 사업자번호 focus out
scwin.udc_crn_onblurCodeEvent = async function (e) {
  if (ed_crn.getValue().trim() == ed_crn.options.hidVal) return;
  if (scwin.txt_frchNoYn == "1") {
    scwin.txt_frchCrn = ed_crn.getValue().trim();
  } else {
    scwin.txt_frchCrn = "";
  }

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹정사업자등록번호
  // ds_txncontents.setCellData(row, "frchNm" , scwin.txt_frchNm );  // 가맹점명

  if (scwin.txt_clntMgntYn != "1" && scwin.txt_frchNoYn == "1") {
    ed_crn.options.hidVal = ed_crn.getValue().trim();
  } else {
    ed_crnNm.value = "";
    ed_crn.options.hidVal = "";
    if (ed_crn.getValue().trim() != "") await scwin.f_openPopUp('7', 'T');
  }
};

//사원 focus out
scwin.udc_mgntEmpNo_onblurCodeEvent = async function (e) {
  await scwin.f_checkPopEd(ed_mgntEmpNo, ed_mgntEmpNm, '8');
};

// 귀속부서 focus out
scwin.udc_acctDeptCd_onblurCodeEvent = async function (e) {
  await scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '4');
};

// 부가세신고부서 focus out
scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent = async function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_VatDeclarAcctDeptCd('3');
};

// 거래처번호 focus out
scwin.udc_mgntClntNo_onblurCodeEvent = async function (e) {
  await scwin.f_checkPopEd(ed_mgntClntNo, ed_mgntClntNm, '10');
};

// 계정 focus out
scwin.udc_acctCd_onblurCodeEvent = async function (e) {
  await scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '3');
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 부가세귀속부서popup
//-------------------------------------------------------------------------
scwin.f_VatDeclarAcctDeptCd = async function (str) {
  if (ed_acctDeptCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_acctDeptCd.focus();
    return;
  }
  let param = "," + ed_acctDeptCd.getValue() + ",1";
  let sqlID = "";
  let check = "";
  let popTemp = "";

  // popup 버튼 눌렀을경우
  if (str == "1") {
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ica_txnDt.getValue().substring(0, 4);
    check = "F";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
    // 부서에서 넘어왔을 경우
  } else if (str == "2") {
    param = "," + ed_acctDeptCd.getValue() + "," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ica_txnDt.getValue().substring(0, 4);
    check = "T";
    ed_vatDeclarAcctDeptCd.setValue("");
    sqlID = "retrieveVatDeclarAcctDeptCdAcctDeptCd";
    popTemp = "ZZ";
    // 부가세신고부서에 값을넣고 명을 찾을 경우
  } else if (str == "3") {
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ica_txnDt.getValue().substring(0, 4);
    check = "T";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
  }
  udc_vatDeclarAcctDeptCd.setSelectId(sqlID);
  //udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callbackfunc, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, null, null, null, null);
  await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callbackfunc, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, null, null, null, null);
};

// 발행부서 돋보기
scwin.udc_slipAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

// 사업자번호 돋보기
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'F');
};

// 사원번호 돋보기
scwin.udc_mgntEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('8', 'F');
};

// 귀속부서 돋보기
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};

// 부가세신고부서 돋보기
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_VatDeclarAcctDeptCd('1');
};

// 거래처 돋보기
scwin.udc_mgntClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('10', 'F');
};

// 계정 돋보기
scwin.udc_acctCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

//-------------------------------------------------------------------------
// 팝업  @@
//    1:발행부서,3:계정,4:귀속부서,7:사업자,8:사원,10:거래처번호
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:발행부서,3:계정,4:귀속부서,7:사업자,8:사원,10:거래처번호)");
  //var rtnList = new Array(); 
  let param;
  switch (flag) {
    case '1':
      // 부서
      // var param = ed_slipDt.text.trim()+",,"+vCoCd+","+ vCoClsCd;
      param = ica_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  발행부서 popup  param [" + param + "]");
      udc_slipAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");

        // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo3',ed_slipAcctDeptCd.text.trim(),txt_slipAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_callbackfunc, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_slipAcctDeptCd.cfCommonPopUpAsync(scwin.udc_slipAcctDeptCd_callbackfunc, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '3':
      // 계정조회

      if (scwin.isSlipCopy == false)
        // 전표복사
        {
          if (ed_acctDeptCd.getValue() == "") {
            await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
            ed_acctDeptCd.focus();
            return;
          }
        }

      // param = "T,"+ ed_slipDt.text.trim() +",4,,,," + txt_bizDomCd.value; // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
      param = "T," + ica_slipDt.getValue().trim() + ",4,,,," + scwin.txt_bizDomCd; // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민

      udc_acctCd.setSelectId("retrieveAcctCdInfo4");
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        // rtnList = cfCommonPopUp(pSqlId,ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callbackfunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callbackfunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '4':
      // 귀속부서
      // var param = ","+ed_slipDt.text.trim()+",0,,"+vCoCd+","+vCoClsCd;
      param = "," + ica_slipDt.getValue().trim() + ",0,," + scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  귀속부서 popup  param [" + param + "]");
      udc_acctDeptCd.setSelectId("retrieveAcctDeptCdInfo7");
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callbackfunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_acctDeptCd.cfCommonPopUpAsync(scwin.udc_acctDeptCd_callbackfunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '7':
      // 사업자번호

      /*
      // 자회사도 사업자번호팝업은 똑같이 떠야한다고 해서 바꿨음
      if(txtCoClsCd.value > '<%=ACConstants.CO_CLS_CD_DONGBU%>')  {  	// 자회사 회계 시스템
       selectID= 'retrieveCrnClntInfo';
       param = ","+ txtCoCd.value; 
      }  
      */
      udc_crn.setSelectId("retrieveCrnInfo");
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        // rtnList = cfCommonPopUp(selectID,ed_crn.text.trim(),txt_crnNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_crn.cfCommonPopUp(scwin.udc_crn_callbackfunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_crn.cfCommonPopUpAsync(scwin.udc_crn_callbackfunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '8':
      // 사원번호
      param = scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  사번 popup  param [" + param + "]");
      udc_mgntEmpNo.setSelectId("retrieveAcEmpInfo");
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        udc_mgntEmpNo.cfCommonPopUp(scwin.udc_mgntEmpNo_callbackfunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_mgntEmpNo.cfCommonPopUpAsync(scwin.udc_mgntEmpNo_callbackfunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '10':
      // 거래처
      param = ",,," + scwin.vCoCd;
      udc_mgntClntNo.setSelectId("retrieveClntList");
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callbackfunc, ed_mgntClntNo.getValue().trim(), ed_mgntClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_mgntClntNo.cfCommonPopUpAsync(scwin.udc_mgntClntNo_callbackfunc, ed_mgntClntNo.getValue().trim(), ed_mgntClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//     1:발행부서,3:계정,4:귀속부서,7:사업자,8:사원,10:거래처번호

//udc callbackfunc
//발행부서
scwin.udc_slipAcctDeptCd_callbackfunc = async function (rtnList) {
  console.log("▷ udc_slipAcctDeptCd_callBackFunc (발행부서)");
  await scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList, '1');
  if (rtnList != null) {
    $c.gus.cfEnableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, btn_acctCd, btn_acctDeptCd]);
    console.log("  ==--== 활성 (계정,계정명,귀속부서,귀속부서명,계정돋보기,귀속부서돋보기)");
    if (scwin.vBizDomCd == null || scwin.vBizDomCd == "") {
      if (rtnList[3] == "210" || rtnList[3] == "220") {
        scwin.gBizDomCdClsCd = "1";
      } else {
        scwin.gBizDomCdClsCd = "0";
      }
    } else {
      if (!(ed_acctCd.getValue() == null || ed_acctCd.getValue() == "")) {
        await $c.gus.cfAlertMsg($p, "발행부서를 수정할 경우에는 계정코드를 재입력하셔야 합니다.");
        ed_acctCd.setValue("");
        ed_acctCd.options.hidVal = "";
        ed_acctNm.setValue("");
      }
    }
    scwin.vUpperAcctDeptCd = rtnList[2];
    scwin.vBizDomCd = rtnList[3];
  }
  //f_SetGridFormat();
};

//계정
scwin.udc_acctCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      ed_acctCd.options.hidVal = "";
      scwin.txt_acctClsCd = "";

      // KYU_NEW : 추가 바인딩
      var row = ds_txncontents.getRowPosition();
      ds_txncontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분

      return;
    }
    ed_acctCd.setValue(rtnList[0]); //계정코드
    ed_acctNm.setValue(rtnList[1]); //계정명
    ed_acctCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txt_acctClsCd = rtnList[2]; //계정구분
    //r_empMgntYn,r_termMgntYn,r_dtMgntYn,r_clntMgntYn
    scwin.f_AcctCd(rtnList[7], rtnList[6], rtnList[8], rtnList[5]);
  } else {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ed_acctCd.options.hidVal = "";
    scwin.txt_acctClsCd = "";
  }

  // KYU_NEW : 추가 바인딩
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분
};

//귀속부서
scwin.udc_acctDeptCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      ed_acctDeptCd.options.hidVal = "";
      return;
    }
    ed_acctDeptCd.setValue(rtnList[0]); //부서코드
    ed_acctDeptNm.setValue(rtnList[1]); //부서명
    //ed_vatDeclarAcctDeptCd.text  = rtnList[7];		//부가세신고부서
    ed_acctDeptCd.options.hidVal = rtnList[0]; // 히든값

    $c.gus.cfEnableObjects($p, [ed_vatDeclarAcctDeptCd, btn_vatDeclarAcctDeptCd]);
    scwin.txt_costClsCd = "" + rtnList[9]; //비용구분코드
    scwin.txt_bizDomCd = "" + rtnList[3]; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)
    scwin.f_VatDeclarAcctDeptCd('2');
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
    scwin.txt_costClsCd = "";
    scwin.txt_bizDomCd = ""; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길
  }

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분
  ds_txncontents.setCellData(row, "bizDomCd", scwin.txt_bizDomCd); // 사업영역
};

//사업자번호
scwin.udc_crn_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_crn.setValue("");
      ed_crnNm.setValue("");
      ed_crn.options.hidVal = "";
      return;
    }
    ed_crn.setValue(rtnList[0]); //사업자번호
    ed_crnNm.setValue(rtnList[1]); //사업자명
    ed_crn.options.hidVal = rtnList[0]; // 히든값
    if (scwin.txt_frchNoYn == "1") {
      scwin.txt_frchCrn = ed_crn.getValue().trim();
      scwin.txt_frchNm = ed_crnNm.getValue().trim();
    } else {
      scwin.txt_frchCrn = "";
      scwin.txt_frchNm = "";
    }
  } else {
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    ed_crn.options.hidVal = "";
  }

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹정사업자등록번호
  ds_txncontents.setCellData(row, "frchNm", scwin.txt_frchNm); // 가맹점명
};

//부가세신고부서
scwin.udc_vatDeclarAcctDeptCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_vatDeclarAcctDeptCd.setValue("");
      ed_vatDeclarAcctDeptNm.setValue("");
      ed_vatCrn.setValue("");
      ed_vatDeclarAcctDeptCd.options.hidVal = "";
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_vatCrn.setValue(rtnList[5]); //부가세사업자번호
    ed_vatDeclarAcctDeptCd.options.hidVal = rtnList[2]; //히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatCrn.setValue("");
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
  }
};

//사원번호
scwin.udc_mgntEmpNo_callbackfunc = async function (rtnList) {
  await scwin.f_resultPopEd(ed_mgntEmpNo, ed_mgntEmpNm, rtnList, '8');
};

//거래처
scwin.udc_mgntClntNo_callbackfunc = async function (rtnList) {
  await scwin.f_resultPopEd(ed_mgntClntNo, ed_mgntClntNm, rtnList, '10');
};

//-------------------------------------------------------------------------
// 팝업결과 @@
//   1:발행부서,3:계정,4:귀속부서,7:사업자,8:사원,10:거래처
//-------------------------------------------------------------------------
scwin.f_resultPopEd = async function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과   flag [" + flag + "] strCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] rtnList[" + rtnList + "])");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
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
// 팝업체크 @@
//   1:발행부서,3:계정,4:귀속부서,7:사업자,8:사원,10:거래처
//------------------------------------------------------------------------- 
scwin.f_checkPopEd = async function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[ " + flag + " ]");
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "" && strNm.getValue() != "") {
      return;
    }
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") await scwin.f_openPopUp(flag, 'T');
};

// @@ ====== 저장-준비 ========================================================================= //

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  if (str.getValue().trim() == "") return true;
  if (str.getValue().trim() != str.options.hidVal) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, [msg]));
    //str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

// @@ ====== 체크 ============================================================================== //

//-------------------------------------------------------------------------
// 사업자번호 체크 여부 확인 (mandatory 지정)
//-------------------------------------------------------------------------
scwin.f_BizCheck = async function () {
  let r_bizMgntYn = scwin.txt_bizMgntYn;
  let r_frchNoYn = scwin.txt_frchNoYn;
  let r_crnLen = ed_crn.getValue().length;
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    //ed_crn.validExp="사업자번호:yes"; 
    ed_crn.setMandatory(true);
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    if (r_crnLen == 13) {
      ed_crn.validExp = "사업자번호:yes:ssn";
    } else if (r_crnLen == 10) {
      ed_crn.validExp = "사업자번호:yes:csn";
    }
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    //ed_crn.validExp="사업자번호:no"; 
    ed_crn.setMandatory(false);
  }
};

//-------------------------------------------------------------------------
// 체크  f_Validation
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  console.log("===== f_Validation ===== ▶▶▶▶   row [" + ds_txncontents.getRowPosition() + "]");

  // 사업자번호 체크
  await scwin.f_BizCheck();
  let ret;

  // if (!cfValidate([lc_evidClsCd,ed_slipDt,ed_slipAcctDeptCd,ed_acctCd,ed_acctDeptCd,txt_summary,
  // 				 ed_spplyAmt,ed_vatAmt,ed_crn,ed_mgntEmpNo,ed_txnDt,txt_crnNm,ed_vatDeclarAcctDeptCd,ed_mgntClntNo]))
  ret = await $c.gus.cfValidate($p, [lc_evidClsCd, ica_slipDt, ed_slipAcctDeptCd, ed_acctCd, ed_acctDeptCd, ed_summary, ed_spplyAmt, ed_vatAmt, ed_crn, ed_mgntEmpNo, ica_txnDt, ed_crnNm, ed_vatDeclarAcctDeptCd, ed_mgntClntNo]);
  if (!ret) return false;

  // if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서")) return false;
  // if (!scwin.f_HiddenCheck(ed_crn, "사업자번호")) return false;
  // if (!scwin.f_HiddenCheck(ed_acctCd, "계정")) return false;
  // if (!scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서")) return false;
  // if (!scwin.f_HiddenCheck(ed_vatDeclarAcctDeptCd, "부가세신고부서")) return false;
  // if (!scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호")) return false;
  // if (!scwin.f_HiddenCheck(ed_mgntClntNo, "거래처")) return false;

  let rtn0 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서");
  if (!rtn0) return false;
  let rtn1 = await scwin.f_HiddenCheck(ed_crn, "사업자번호");
  if (!rtn1) return false;
  let rtn2 = await scwin.f_HiddenCheck(ed_acctCd, "계정");
  if (!rtn2) return false;
  let rtn3 = await scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서");
  if (!rtn3) return false;
  let rtn4 = await scwin.f_HiddenCheck(ed_vatDeclarAcctDeptCd, "부가세신고부서");
  if (!rtn4) return false;
  let rtn5 = await scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호");
  if (!rtn5) return false;
  let rtn6 = await scwin.f_HiddenCheck(ed_mgntClntNo, "거래처");
  if (!rtn6) return false;

  //증빙구분이 세금계산서일때 거래처 필수
  if (lc_evidClsCd.getValue() == "10") {
    ret = await $c.gus.cfValidate($p, [ed_mgntEmpNo]);
    if (!ret) return false;
  }

  //금액체크(금액=공급금액+부가세액)
  var amt = 0;
  amt = Number(Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim()));
  if (Number(amt) > Number(scwin.txt_limitAmt)) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "금액(공급금액+부가세액)", "한도액(" + scwin.txt_limitAmt + ") "));
    ed_spplyAmt.focus();
    return false;
  }

  // 계정코드와 부서체크
  // txt_acctClsCd.value  :: 1^자산,2^부채,3^자본,4^수익,5^비용,6^원가
  // txt_costClsCd.value  :: 비용구분 : 01^원가,02^판관비,03^원가+판관비
  if (scwin.txt_costClsCd == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_018, "부서에 따른 비용구분코드", "비용구분코드를 등록"));
    ed_acctDeptCd.focus();
    return false;
  }
  if (scwin.txt_costClsCd == "01" && scwin.txt_acctClsCd.trim() != "4") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "부서와 계정"));
    ed_acctCd.focus();
    return false;
  }
  return true;
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("=== f_Save (발행) ==================================================");
  if (ds_txncontents.getRowCount() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  if (ds_txn.getModifiedIndex().length < 1 && ds_txncontents.getModifiedIndex().length < 1) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let ret;
  ret = await scwin.f_Validation();
  if (!ret) return;

  //증빙별금액체크
  for (i = 0; i < ds_txncontents.getRowCount(); i++) {
    let spplayAmt = 0;
    let dcAmt = 0;
    let evidSum = 0;
    let vatAmt = 0;
    for (j = 0; j < ds_evidac.getRowCount(); j++) {
      if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        evidSum = evidSum + parseFloat(ds_evidac.getCellData(j, "amt"));
        spplyAmt = parseFloat(ds_txncontents.getCellData(i, "spplyAmt"));
        vatAmt = parseFloat(ds_txncontents.getCellData(i, "vatAmt"));
      }
    }
  }
  var validArry = [{
    id: "evidClsCd",
    name: "증빙종류",
    mandatory: true
  }, {
    id: "txnDt",
    name: "계산서일자",
    mandatory: true
  }, {
    id: "spplyAmt",
    name: "금액",
    mandatory: true,
    notAllowed: 0,
    maxLength: 13
  }, {
    id: "acctCd",
    name: "계정",
    mandatory: true,
    valid: "format",
    format: "0000000"
  }, {
    id: "acctDeptCd",
    name: "귀속부서",
    mandatory: true,
    valid: "format",
    format: "00000"
  }, {
    id: "vatDeclarAcctDeptCd",
    name: "부가세신고부서",
    mandatory: true,
    valid: "format",
    format: "00000"
  }, {
    id: "summary",
    name: "적요",
    mandatory: true,
    maxByteLength: 100
  }];
  let gridName = "매출전표";
  ret = await $c.gus.cfValidateGrid($p, gr_txncontents, null, null, validArry, gridName);
  if (ret) {
    ret = await $c.win.confirm($p, "발행하시겠습니까?");
    if (ret == true) {
      // 증빙별계정구분 
      for (i = 0; i < ds_txncontents.getRowCount(); i++) {
        if (ds_evidac.getRowCount() == 0) {
          ds_txncontents.setCellData(i, "acctDistYn", "0");
        } else {
          for (j = 0; j < ds_evidac.getRowCount(); j++) {
            if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
              ds_txncontents.setCellData(i, "acctDistYn", "1");
              break;
            } else {
              ds_txncontents.setCellData(i, "acctDistYn", "0");
            }
          }
        }
        ds_txncontents.setCellData(i, "coClsCd", scwin.vCoClsCd); // 회계_회사구분('CO035')
        ds_txncontents.setCellData(i, "coCd", scwin.vCoCd); // 소속 자회사  
      }
      ds_txncontents.setCellData(ds_txncontents.getRowCount(), "slipKndCd", scwin.slipKndCd);
      if (scwin.vCoClsCd != "0" && $c.gus.cfIsNull($p, scwin.vCoCd)) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "자회사인 경우는 귀속부서에 회사코드"));
        return;
      }
      ds_txn.setCellData(ds_txn.getRowPosition(), "slipKndCd", scwin.slipKndCd);
      ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "deductClsCd", "2");
      //tr_save.Post();      
      await $c.sbm.execute($p, sbm_save);
    }
  }
  scwin.varCostClsCd = "";
};
scwin.sbm_save_submitdone = async function (e) {
  console.log('scwin.sbm_save_submitdone');
  console.log(e);
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
  if (ds_slipNo.getCellData(0, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
  }
  scwin.state = "Y";
  scwin.delflag = "N";
  ds_txncontents.setJSON([]);
  $c.gus.cfDisableKeyData($p);
  console.log("  발행후 ==--== 비활성 (cfDisableKeyData)");
  $c.gus.cfEnableAllBtn($p);
  console.log("  발행후 ==--== 활성 (cfEnableAllBtn)");
  scwin.slipDt = ica_slipDt.getValue();
  //f_OnLoad() ;
  await scwin.f_OnLoad();
  console.log("========== f_OnLoad 실행 이후 =====================");

  // KYU_NEW : 발행부서 팝업 - f_OnLoad2 실행 (초기 화면으로 복원)
  //           f_OnLoad 에 팝업 체크가 있기는 하지만 팝업 실행이 안됨 (내용 수정 대신 팝업 다시 로딩)
  await scwin.f_openPopUp('1', 'T');

  // $c.gus.cfEnableObj(ica_slipDt, true);
  // $c.gus.cfEnableObj(ed_slipAcctDeptCd, true);
  // $c.gus.cfEnableObj(ed_slipAcctDeptNm, true);

  $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm]);
  console.log("  발행후 ==--== 활성 (작성일자,작성부서,작성부서명)");
  scwin.rltSeq = 0;
  // }
};

// @@ ====== 미사용 ============================================================================ //

// 미호출
scwin.f_BizCheckFocus = async function () {
  if (ed_crn.getValue() != "") {
    //ed_crn.validExp="사업자번호:yes:csn"; 
    ed_crn.setMandatory(true);
    let ret;
    ret = await $c.gus.cfValidate($p, ed_crn);
    if (!ret) {
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
//  공급금액 셋팅 : 미호출
//    부가세액 근거로 공급금액 세팅
//-------------------------------------------------------------------------
scwin.setSupplyAmt = function () {
  // 부가세여부가 셋팅시

  if (scwin.txt_vatYn == "1") {
    ed_spplyAmt.setValue(Math.floor(ed_vatAmt.getValue().trim() * 10));
  }
};

//-------------------------------------------------------------------------
//  사업자명 입력시 : 미호출
//-------------------------------------------------------------------------
scwin.SetCrnNm = function () {
  if (scwin.txt_frchNoYn.getValue() == "1") {
    scwin.txt_frchNm = ed_crnNm.getValue().trim();
  }
};

// 미사용
scwin.ds_txncontents_onbeforerowpositionchange = async function (info) {
  // <!-- 그리드 로우를 변경하려고 할 경우 - 필수항목 체크-->
  // language=JavaScript for=ds_txncontents event=CanRowPosChange(row)>

  var oldRowIndex = info.oldRowIndex;
  var newRowIndex = info.newRowIndex;
  if (oldRowIndex == null && newRowIndex == 0) {
    scwin.state = "N";
    scwin.delflag = "N";
    return true;
  }
  if (ds_txncontents.getRowCount() != 0 && scwin.delflag == "N") {
    if (!scwin.f_Validation()) {
      scwin.state = "N";
      scwin.delflag = "N";
      return false;
    } else {
      scwin.state = "N";
      scwin.delflag = "N";
      return true;
    }
  }
  scwin.state = "N";
  scwin.delflag = "N";
  return true;
};

//-------------------------------------------------------------------------
// 행삭제,취소시 체크
//-------------------------------------------------------------------------
scwin.f_CheckRow = function (flag) {
  scwin.state = "Y";
  scwin.delflag = "Y";
  if (flag == "DEL") {
    for (j = ds_evidac.getRowCount(); j > 0; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        //ds_evidac.DeleteRow(j);
        ds_evidac.deleteRow(j);
      }
    }
    //ds_txncontents.DeleteRow(ds_txncontents.RowPosition);
    ds_txncontents.deleteRow(ds_txncontents.getRowPosition());
  } else {
    for (j = ds_evidac.getRowCount(); j > 0; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        //ds_evidac.Undo(j);
        $c.data.undoRow($p, ds_evidac, "Y");
      }
    }
    //ds_txncontents.Undo(ds_txncontents.RowPosition);
    $c.data.undoRow($p, ds_txncontents.getRowPosition());
  }
  scwin.f_EnableYn(ds_txncontents.getRowCount());
  $c.gus.cfEnableObjects($p, [btn_acctCd, btn_acctDeptCd]);
  ds_txncontents.setRowPosition(ds_txncontents.getRowCount());
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  scwin.f_CheckRow("DEL");
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  scwin.f_CheckRow("CANCEL");
};

//-------------------------------------------------------------------------
// 행복사
//-------------------------------------------------------------------------
scwin.f_CopyRow = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ica_slipDt, ed_slipAcctDeptCd]);
  if (!ret) return;
  if (ds_txncontents.getRowCount() > 0) {
    ret = await scwin.f_Validation();
    if (ret != true) return;
  }
  scwin.rowCopyYn = 1; // 행복사

  ds_txncontents.ImportData(ds_txncontents.ExportData(1, ds_txncontents.getRowPosition(), true));
  ds_txncontents.setRowPosition(ds_txncontents.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_slipDt',style:'',title:'작성일자',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_txn.slipDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo3popup',selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_slipAcctDeptCd',validTitle:'발행부서',nameId:'ed_slipAcctDeptNm',style:'',id:'udc_slipAcctDeptCd',btnId:'btn_slipAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCd_onblurCodeEvent',maxlengthCode:'5',mandatoryName:'true',maxlengthName:'13','ev:onclickEvent':'scwin.udc_slipAcctDeptCd_onclickEvent',validExpName:'발행부서',validExpCode:'발행부서',refDataCollection:'ds_txn',code:'slipAcctDeptCd',name:'slipAcctDeptNm',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',style:'width: 150px;',submenuSize:'fixed','ev:onchange':'scwin.lc_evidClsCd_onchange',objType:'data',ref:'data:ds_txncontents.evidClsCd',title:'증빙종류'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'ed_crnNm',popupID:'retrieveCrnInfopopup',selectID:'retrieveCrnInfo',style:'',validTitle:'사업자번호',btnId:'btn_crn',id:'udc_crn',maxByteLength:'50','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_txncontents',code:'crn',name:'crnNm','ev:onclickEvent':'scwin.udc_crn_onclickEvent',maxlengthCode:'13',allowCharCode:'0-9',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_crcCd',class:'',direction:'auto','ev:onchange':'scwin.lc_crcCd_onchange',objType:'data',invalidMessage:'통화코드',mandatory:'true',ref:'data:ds_txncontents.crcCd',title:'통화코드'}},{T:1,N:'xf:input',A:{style:'width: 150px;text-align:right;',id:'ed_exchRt',class:'','ev:onblur':'scwin.ed_exchRt_onblur',objType:'data',dataType:'float',displayFormat:'#,##0.##',maxlength:'13.2',allowChar:'0-9.',title:'환율',ref:'data:ds_txncontents.exchRt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_spplyAmtFcrc',style:'width:200px;text-align:right;','ev:onblur':'scwin.ed_spplyAmtFcrc_onblur',objType:'data',maxlength:'13.2',dataType:'float',displayFormat:'#,##0.##',allowChar:'0-9.',title:'외화금액',ref:'data:ds_txncontents.spplyAmtFcrc'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계산서일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_txnDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd',mandatory:'true',title:'계산서일자',ref:'data:ds_txncontents.txnDt','ev:onblur':'scwin.ica_txnDt_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_spplyAmt',style:'width:200px;text-align:right;','ev:onblur':'scwin.ed_spplyAmt_onblur',mandatory:'true',maxlength:'13',ref:'data:ds_txncontents.spplyAmt',invalidMessage:'공급금액',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',title:'공급금액'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vatAmt',style:'width: 200px;text-align:right;',invalidMessage:'부가세액',objType:'data',ref:'data:ds_txncontents.vatAmt',dataType:'number',displayFormat:'#,##0',maxlength:'13',allowChar:'0-9',title:'부가세액'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntEmpNo',nameId:'ed_mgntEmpNm',popupID:'retrieveAcEmpInfopopup',selectID:'retrieveAcEmpInfo',style:'',validTitle:'사원번호',id:'udc_mgntEmpNo',btnId:'btn_mgntEmpNo',validExpCode:'format=000000',maxlengthCode:'6',allowCharCode:'1-9','ev:onblurCodeEvent':'scwin.udc_mgntEmpNo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_txncontents',code:'mgntEmpNo',name:'mgntEmpNm','ev:onclickEvent':'scwin.udc_mgntEmpNo_onclickEvent',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'',style:'',validTitle:'귀속부서',btnId:'btn_acctDeptCd',id:'udc_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_txncontents',code:'acctDeptCd',name:'acctDeptNm','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'5',skipOnBlurCodeValueEmpty:'N',maxlengthName:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세신고부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',selectID:'',popupID:'',validTitle:'부가세신고부서',nameId:'ed_vatDeclarAcctDeptNm',style:'',id:'udc_vatDeclarAcctDeptCd',btnId:'btn_vatDeclarAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_txncontents',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent',retrieveVatDeclarAcctDeptCd:'N',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'5',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_vatCrn',class:'',ref:'data:ds_txncontents.vatCrn'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntClntNo',nameId:'ed_mgntClntNm',popupID:'retrieveClntListpopup',selectID:'retrieveClntList',style:'',validTitle:'거래처',btnId:'btn_mgntClntNo',id:'udc_mgntClntNo','ev:onblurCodeEvent':'scwin.udc_mgntClntNo_onblurCodeEvent',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_txncontents',code:'mgntClntNo',name:'mgntClntNm','ev:onclickEvent':'scwin.udc_mgntClntNo_onclickEvent',mandatoryCode:'true',allowCharCode:'0-9',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',nameId:'ed_acctNm',popupID:'retrieveAcctCdInfo4popup',selectID:'retrieveAcctCdInfo4',style:'',validTitle:'계정코드',id:'udc_acctCd',btnId:'btn_acctCd','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',refDataCollection:'ds_txncontents',code:'acctCd',name:'acctNm','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent',mandatoryCode:'true',maxlengthCode:'7',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N',maxlengthName:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'width: 300px;',mandatory:'true',maxlength:'100',invalidMessage:'적요',ref:'data:ds_txncontents.summary'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_txncontents',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_txncontents',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',rowNumVisible:'true',rowStatusVisible:'true',rowStatusWidth:'20',rowNumWidth:'20',gridName:'매출전표',validExp:'evidClsCd:증빙종류:yes,txnDt:계산서일자:yes,spplyAmt:금액:yes:notAllowed=0&maxLength=13,acctCd:계정:yes:format=0000000,acctDeptCd:귀속부서:yes:format=00000,vatDeclarAcctDeptCd:부가세신고부서:yes:format=00000,summary:적요:yes:maxByteLength=100',columnMove:'false',checkAllType:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column30',value:'증빙',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'계산서일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column36',value:'계정',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column34',value:'계정명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column32',value:'귀속부서',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'공급가액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column26',value:'부가세액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column22',value:'적요',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'select',style:'',id:'evidClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',textAlign:'left',validExp:'evidClsCd:증빙종류:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',validExp:'spplyAmt:금액:yes:notAllowed=0&maxLength=13',mandatory:'true',notAllowed:'0',maxLength:'13',name:'금액'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column42',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'spplyAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column41',value:'0',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'vatAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'채권계정은 외상매출금-일반으로 생성되고, 채권도 생성됨. ',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link white',id:'btn_copy',style:'',type:'button','ev:onclick':'scwin.f_SlipCopy',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]}]}]}]}]}]}]}]})