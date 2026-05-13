/*amd /ui/il/acc/acine/ac_108_01_01b.xml 75231 cebcfc7cd7489315668a1c9d4c218cf68ef5f23d773091cc633e92c48fddcf3d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운항공구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnStDt',name:'거래시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdtFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdtTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptBilgCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'internalTxnStsCd',name:'내부거래상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'aggrDeptYn',name:'집계부서여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'aggrBilgDeptYn',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'confirmFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmGb',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lodeptCd',name:'물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellDeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_internalPaymentInfo',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_internalPaymentInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yn',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'M B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stdt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seaair',name:'해운항공구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNo',name:'매입거래처 담당자 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPicNm',name:'매입거래처 담당자 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'매출부서명(내부거래시)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modNm',name:'수정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txn',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_txn_oncelldatachange','ev:ondataload':'scwin.ds_txn_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'internalTxnBilgNo',name:'내부거래청구번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptCd',name:'매입귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAcctDeptNm',name:'매입귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNm',name:'LINE거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'운송화물구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsNm',name:'수입수출내수구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsCd',name:'회계매입매출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountPchsSellClsNm',name:'회계매입매출구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeCd',name:'노선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeNm',name:'노선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsCd',name:'노선구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeClsNm',name:'노선구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostYn',name:'표준원가여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'실적금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalUpr',name:'내부단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'internalTxnStsCd',name:'내부거래상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realTxnDt',name:'실거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDt',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modNm',name:'수정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mhno'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_mhno","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mhno_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_billTxn',action:'/ac.co.rsltsmgnt.internaltxnmgnt.ProcessInternalTransactionPurchaseDecisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_billTxn_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelTxn',action:'/ac.co.rsltsmgnt.internaltxnmgnt.ProcessInternalTransactionPurchaseRejectCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelTxn_submitdone',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelTxnReject',action:'/ac.co.rsltsmgnt.internaltxnmgnt.CancelInternalTransactionPurchaseRejectCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelTxnReject_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_billTxn2',action:'/ac.co.rsltsmgnt.internaltxnmgnt.ProcessInternalTransactionSellingBillingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txn","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_billTxn2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/il.acc.acine.RetrieveInternalPaymentListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_txn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txn","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchInternal',action:'/il.acc.acine.RetrieveInternalPaymentInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_internalPaymentInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_internalPaymentInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchInternal_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveInternalPayment',action:'/il.acc.acine.SaveInternalPaymentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_internalPaymentInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveInternalPayment_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelInternalPayment',action:'/il.acc.acine.CancelInternalPaymentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_internalPaymentInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelInternalPayment_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ProcessAll',action:'/il.acc.acine.ProcessInternalPaymentPurchaseDecisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_internalPaymentInfo","key":"IN_DS1"},{"action":"modified","id":"ds_txn","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ProcessAll_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
cfJobCloseYN 함수 미구현으로 scwin.f_JobCloseYN 전체 주석처리 - 차후 해제 필요
*/

scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.strBasSdId = "/ui/ac/co/rsltsmgnt/internaltxnmgnt/co_401_02_02p.xml";
scwin.kcomcd = "";
scwin.seaair = "";
scwin.iogb = "";
scwin.blno = "";
scwin.wrkNo = "";
scwin.acctDeptCd = "";
scwin.hid_kcomcd = "DBEX";
scwin.onpageload = function () {
  udc_ilcomCode.hide();
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.acctDeptCd = memJson.acctDeptCd;
  scwin.params = $c.data.getParameter($p);
  //대표거래처 코드
  scwin.kcomcd = scwin.params.kcomcd == null ? "S" : scwin.params.kcomcd;
  //해운 항공 구분
  scwin.seaair = scwin.params.seaair == null ? "S" : scwin.params.seaair;
  //Import / Export 구분
  scwin.iogb = scwin.params.iogb == null ? "O" : scwin.params.iogb;
  //House B/L No
  scwin.blno = scwin.params.blno == null ? "" : scwin.params.blno;
  const codeOptions = [{
    grpCd: "CO003",
    compID: "lc_internalTxnStsCd,gr_txn:internalTxnStsCd"
  }, {
    grpCd: "ZZ001",
    compID: "gr_txn:sysCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  dma_search.set("kcomcd", scwin.hid_kcomcd);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_FieldClear();
    scwin.f_DefaultValue();
    ed_inqStDt.focus();
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_inqStDt.setValue(scwin.vQryStDt);
  ed_inqEndDt.setValue(scwin.vCurDate);
  ed_stdtFrom.setValue(scwin.vQryStDt);
  ed_stdtTo.setValue(scwin.vCurDate);
  ed_deptCd.setValue(scwin.acctDeptCd);
  scwin.f_openPushDeptPopUp('T');
  lc_internalTxnStsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// function name : f_DefaultValue
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  scwin.params = $c.data.getParameter($p);
  //대표거래처 코드
  scwin.kcomcd = scwin.params.kcomcd == null ? "S" : scwin.params.kcomcd;
  //해운 항공 구분
  scwin.seaair = scwin.params.seaair == null ? "S" : scwin.params.seaair;
  //Import / Export 구분
  scwin.iogb = scwin.params.iogb == null ? "O" : scwin.params.iogb;
  //House B/L No
  scwin.blno = scwin.params.blno == null ? "" : scwin.params.blno;
  cnd_lc_confirmGb.setValue("A");
};

//-------------------------------------------------------------------------
// 국제 물류 내부매출 목록 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveInternal = async function () {
  //Mandatory 항목이 누락하지 않았는지 체크한다.
  var chk = await $c.gus.cfValidate($p, [tb_bilg]);
  if (!chk) {
    return;
  }
  var chkDate = await $c.gus.cfIsAfterDate($p, ed_stdtFrom.getValue().trim(), ed_stdtTo.getValue().trim());
  if (!chkDate) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ed_stdtFrom.focus();
    return false;
  }
  dma_search.set("acctDeptBilgCd", ed_deptBilgCd.getValue());
  dma_search.set("scClsCd", "2");
  //tr_searchInternal.post();
  $c.sbm.execute($p, sbm_searchInternal);
};

//-------------------------------------------------------------------------
// 운송 내부매출 목록 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //Mandatory 항목이 누락하지 않았는지 체크한다.
  var chk = await $c.gus.cfValidate($p, [tb_bilg2]);
  if (!chk) {
    return;
  }
  var chkDate = await $c.gus.cfIsAfterDate($p, ed_stdtFrom.getValue().trim(), ed_stdtTo.getValue().trim());
  if (!chkDate) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ed_stdtFrom.focus();
    return false;
  }

  //ds_search.NameValue(ds_search.RowPosition,"acctDeptBilgCd")= ed_deptBilgCd.text;       	
  //ds_search.NameValue(ds_search.RowPosition,"scClsCd")= "2";   
  //tr_search.post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function (row) {
  var internalTxnBilgNo = ds_txn.getCellData(row, 'internalTxnBilgNo');

  /*
  var sFeatures =	"dialogWidth:825px; dialogHeight:570px;" 
                  + "status:No; scroll:No";
                                  
  sURL = "<%=strBasSdId%>?internalTxnBilgNo="+internalTxnBilgNo;
  window.showModalDialog(sURL,window,sFeatures);
  */
  var win_url = scwin.strBasSdId;
  var param = {
    internalTxnBilgNo: internalTxnBilgNo
  };
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 825;
  opts.height = 570;
  opts.popupName = '내부거래상세';
  rtnList = await $c.win.openPopup($p, win_url, opts, param);
};

//-------------------------------------------------------------------------
// 매입처리
//-------------------------------------------------------------------------    
scwin.f_Pchs = async function () {
  var row = ds_txn.getRowCount();
  for (var j = 0; j < row; j++) {
    if (ds_txn.getCellData(j, "selYn") == "1" && ds_txn.getCellData(j, "internalTxnStsCd") != ACConstants.INTERNAL_TXN_BILG) {
      $c.win.alert($p, "청구상태인  data만 매입처리할 수 있습니다..");
      return;
    }
  }
  for (var i = 0; i < ds_txn.getRowCount(); i++) {
    if (ds_txn.getCellData(i, "selYn") == "1") {
      // 마감여부 확인
      if (!(await scwin.f_JobCloseYN(ds_txn.getCellData(i, "txnDt").substring(0, 6)))) {
        return;
      }
    }
  }
  if (ds_txn.getModifiedIndex().length == 0) {
    $c.win.alert($p, "매입처리할 data가 없습니다.");
    return;
  }

  //확정할 것인지 confirm    
  if ((await $c.win.confirm($p, "매입처리하시겠습니까?")) == true) {
    //tr_billTxn.Post();
    $c.sbm.execute($p, sbm_billTxn);
  }
};

//-------------------------------------------------------------------------
// 매입처리
//-------------------------------------------------------------------------      
scwin.f_ProcessAll = async function () {
  // 내부확정 처리 
  if (ds_internalPaymentInfo.getModifiedIndex().length == 0) {
    $c.win.alert($p, "내부확정 처리할 data가 없습니다.");
    return;
  }
  for (var j = 0; j < ds_internalPaymentInfo.getRowCount(); j++) {
    if (ds_internalPaymentInfo.getCellData(j, "postDt") == "" && ed_postDt.getValue() == "") {
      $c.win.alert($p, "확정일자를 입력 하세요.");
      return;
    }
    if (ds_internalPaymentInfo.getCellData(j, "yn") == "T" && ds_internalPaymentInfo.getCellData(j, "dcsnClsCd") == "9" && ds_internalPaymentInfo.getCellData(j, "postDt") != "") {
      $c.win.alert($p, "이미 내부 매입 Confirm 한 데이타가 있습니다.");
      ds_internalPaymentInfo.setCellData(j, "yn", "");
      return;
    } else {
      if (ds_internalPaymentInfo.getCellData(j, "yn") == "T") {
        ds_internalPaymentInfo.setCellData(j, "postDt", ed_postDt.getValue());
      } else {
        //ds_internalPaymentInfo.NameValue(j,"postDt") = "";
      }
    }
  }

  // 매입 처리 
  var row2 = ds_txn.getRowCount();
  for (var j = 0; j < row2; j++) {
    if (ds_txn.getCellData(j, "selYn") == "1" && ds_txn.getCellData(j, "internalTxnStsCd") != ACConstants.INTERNAL_TXN_BILG) {
      $c.win.alert($p, "청구상태인  data만 매입처리할 수 있습니다..");
      return;
    }
  }
  for (var i = 0; i < ds_txn.getRowCount(); i++) {
    if (ds_txn.getCellData(i, "selYn") == "1") {
      // 마감여부 확인
      if (!(await scwin.f_JobCloseYN(ds_txn.getCellData(i, "txnDt").substring(0, 6)))) {
        return;
      }
    }
  }
  if (ds_txn.getModifiedIndex().length == 0) {
    $c.win.alert($p, "매입처리할 data가 없습니다.");
    return;
  }

  //확정할 것인지 confirm    
  if (await $c.win.confirm($p, "내부확정 && 내부매입처리하시겠습니까?")) {
    //tr_ProcessAll.Post();
    $c.sbm.execute($p, sbm_ProcessAll);
  }
};

//-------------------------------------------------------------------------
// 매입거부
//-------------------------------------------------------------------------    
scwin.f_CancelPchs = async function () {
  var row = ds_txn.getRowCount();
  for (var j = 0; j < row; j++) {
    if (ds_txn.getCellData(j, "selYn") == "1" && ds_txn.getCellData(j, "internalTxnStsCd") != ACConstants.INTERNAL_TXN_BILG) {
      $c.win.alert($p, "청구상태인  data만 매입거부할 수 있습니다..");
      return;
    }
  }
  for (var i = 0; i < ds_txn.getRowCount(); i++) {
    if (ds_txn.getCellData(i, "selYn") == "1") {
      // 마감여부 확인
      if (!(await scwin.f_JobCloseYN(ds_txn.getCellData(i, "txnDt").substring(0, 6)))) {
        return;
      }
    }
  }
  if (ds_txn.getModifiedIndex().length == 0) {
    $c.win.alert($p, "매입거부할 data가 없습니다.");
    return;
  }

  //확정할 것인지 confirm    
  if (await $c.win.confirm($p, "매입거부하시겠습니까?")) {
    //tr_cancelTxn.Post();
    $c.sbm.execute($p, sbm_cancelTxn);
  }
};

//-------------------------------------------------------------------------
// 매입거부취소
//-------------------------------------------------------------------------    
scwin.f_CancelPchsReject = async function () {
  var row = ds_txn.getRowCount();
  for (var j = 0; j < row; j++) {
    if (ds_txn.getCellData(j, "selYn") == "1" && ds_txn.getCellData(j, "internalTxnStsCd") != ACConstants.INTERNAL_TXN_DCSN_CNCL) {
      $c.win.alert($p, "확정취소인  DATA만 매입거부취소 할 수 있습니다..");
      return;
    }
  }
  for (var i = 0; i < ds_txn.getRowCount(); i++) {
    if (ds_txn.getCellData(i, "selYn") == "1") {
      // 마감여부 확인
      if (!(await scwin.f_JobCloseYN(ds_txn.getCellData(i, "txnDt").substring(0, 6)))) {
        return;
      }
    }
  }
  if (ds_txn.getModifiedIndex().length == 0) {
    $c.win.alert($p, "매입거부할 data가 없습니다.");
    return;
  }

  //확정할 것인지 confirm    
  if (await $c.win.confirm($p, "매입거부 취소 하시겠습니까?")) {
    //tr_cancelTxnReject.Post();
    $c.sbm.execute($p, sbm_cancelTxnReject);
  }
};

//-------------------------------------------------------------------------
// 매입취소
//-------------------------------------------------------------------------    
scwin.f_Bill = async function () {
  var row = ds_txn.getRowCount();
  for (var j = 0; j < row; j++) {
    if (ds_txn.getCellData(j, "selYn") == "1" && ds_txn.getCellData(j, "internalTxnStsCd") != ACConstants.INTERNAL_TXN_DCSN) {
      $c.win.alert($p, "확정상태인  data만 매입취소할 수 있습니다..");
      return;
    }
  }
  for (var i = 0; i < ds_txn.getRowCount(); i++) {
    if (ds_txn.getCellData(i, "selYn") == "1") {
      // 마감여부 확인
      if (!(await scwin.f_JobCloseYN(ds_txn.getCellData(i, "txnDt").substring(0, 6)))) {
        return;
      }
    }
  }
  if (ds_txn.getModifiedIndex().length == 0) {
    $c.win.alert($p, "매입취소할 data가 없습니다.");
    return;
  }

  //청구할 것인지 confirm    
  if (await $c.win.confirm($p, "매입취소하시겠습니까?")) {
    //tr_billTxn2.Post();
    $c.sbm.execute($p, sbm_billTxn2);
  }
};

//-------------------------------------------------------------------------
// 국제 물류 내부매입 확정
//-------------------------------------------------------------------------    
scwin.f_InternalConfirm = async function () {
  var row = ds_internalPaymentInfo.getRowCount();
  if (ed_postDt.getValue() == "") {
    $c.win.alert($p, "확정일자를 입력 하세요.");
    return;
  }
  for (var j = 0; j < row; j++) {
    if (ds_internalPaymentInfo.getCellData(j, "yn") == "T" && ds_internalPaymentInfo.getCellData(j, "dcsnClsCd") == "9" && ds_internalPaymentInfo.getCellData(j, "postDt") != "") {
      $c.win.alert($p, "이미 내부 매입 Confirm 한 데이타가 있습니다.");
      return;
    } else {
      if (ds_internalPaymentInfo.getCellData(j, "yn") == "T") {
        ds_internalPaymentInfo.setCellData(j, "postDt", ed_postDt.getValue());
      } else {
        ds_internalPaymentInfo.setCellData(j, "postDt", "");
      }
    }
  }

  // confirm    
  if (await $c.win.confirm($p, "국제물류 내부매입을 확정 하시겠습니까?")) {
    //tr_saveInternalPayment.Post();
    $c.sbm.execute($p, sbm_saveInternalPayment);
  }
};

//-------------------------------------------------------------------------
// 국제 물류 내부매입 확정 취소
//-------------------------------------------------------------------------    
scwin.f_internalCancel = async function () {
  var row = ds_internalPaymentInfo.getRowCount();
  for (var j = 0; j < row; j++) {
    if (ds_internalPaymentInfo.getCellData(j, "yn") == "T" && ds_internalPaymentInfo.getCellData(j, "dcsnClsCd") != "9") {
      $c.win.alert($p, "내부 매입 확정된 데이타가 아닙니다.");
      return;
    }
  }

  // confirm    
  if (await $c.win.confirm($p, "국제물류 내부매입을 확정 하시겠습니까?")) {
    //tr_cancelInternalPayment.Post();
    $c.sbm.execute($p, sbm_cancelInternalPayment);
  }
};

//-------------------------------------------------------------------------
// 매입부서 popup
//-------------------------------------------------------------------------  
scwin.f_openPushDeptPopUp = async function (check) {
  var rtnList = new Array();
  ed_deptNm.setValue("");
  udc_deptCd.cfCommonPopUp(scwin.callbackAcctDeptCdInfo1, ed_deptCd.getValue().trim(), ed_deptNm.getValue(), check, null, null, null, null, scwin.vCurDate, "410", null, null, null);

  /*
      if (rtnList != null ) {
          if (rtnList[0] == "") {
              //cfInitHidVal(ed_deptCd);
              return;
          }
          ed_deptCd.setValue(rtnList[0]);	//귀속코드
          ed_deptNm.setValue(rtnList[1]);	//귀속명 
          dma_search.set("aggrDeptYn",rtnList[8]); //집계부서여부
          
      }else {
          ed_deptCd.setValue("");
          ed_deptNm.setValue("");
      }
  */
};
scwin.callbackAcctDeptCdInfo1 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "") {
      //cfInitHidVal(ed_deptCd);
      return;
    }
    ed_deptCd.setValue(rtnList[0]); //귀속코드
    ed_deptNm.setValue(rtnList[1]); //귀속명 
    dma_search.set("aggrDeptYn", rtnList[8]); //집계부서여부
  } else {
    ed_deptCd.setValue("");
    ed_deptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 매출부서 popup
//-------------------------------------------------------------------------  
scwin.f_openBilgDeptPopUp = async function (check) {
  var rtnList = new Array();
  ed_deptBilgNm.setValue("");
  udc_deptBilgCd.cfCommonPopUp(scwin.callbackAcctDeptCdInfo2, ed_deptBilgCd.getValue().trim(), ed_deptBilgNm.getValue(), check, null, null, null, null, scwin.vCurDate, "410", null, null, null);
  /*
      if (rtnList != null ) {
          if (rtnList[0] == "") {
              //cfInitHidVal(ed_deptBilgCd);
              return;
          }
          ed_deptBilgCd.setValue(rtnList[0]);	//귀속코드
          ed_deptBilgNm.setValue(rtnList[1]);	//귀속명 
          dma_search.set("aggrDeptYn",rtnList[8]); //집계부서여부
          
      }else {
          ed_deptBilgCd.setValue("");
          ed_deptBilgNm.setValue("");.
      }
  */
};
scwin.callbackAcctDeptCdInfo2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "") {
      //cfInitHidVal(ed_deptBilgCd);
      return;
    }
    ed_deptBilgCd.setValue(rtnList[0]); //귀속코드
    ed_deptBilgNm.setValue(rtnList[1]); //귀속명 
    dma_search.set("aggrDeptYn", rtnList[8]); //집계부서여부
  } else {
    ed_deptBilgCd.setValue("");
    ed_deptBilgNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function (txnDt) {
  /*
      scwin.f_setWrkNoFromDate();
      //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
      var isClose = await $c.gus.cfJobCloseYN("CUR",txnDt,"00", scwin.wrkNo,"0","ARR","N");
  
      console.log(isClose);
  
      // 마감작업 조회시 해당값이 없을경우 오류 발생
      if ( isClose[0] == "DNF" ) {
          $c.win.alert("마감되었습니다.");
          return false;
      }
  
      // 선행마감 작업에 대한 검사
      if ( isClose[3] == "PRE" ) {
          if (isClose[0]=="1") {
              $c.win.alert("선행작업 "+isClose[2]+"이 미마감되어서 현재 작업을 진행할 수 없습니다.");
              return false;
          } else if (isClose[0]=="0") {
              $c.win.alert("선행작업 "+isClose[2]+"이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
              return false;
          } 
      } 
  
      // 해당마감 작업에 대한 검사
      if ( isClose[3] == "CUR" ) {
          if(isClose[0]=="0"){
              $c.win.alert(isClose[2] + "(이)가 마감중입니다.");
              return false;
          }else if(isClose[0]=="2"){
              $c.win.alert(isClose[2] + "(이)가 마감완료가 되었습니다");
              return false;
          }else {
              return true;
          }
      }
  */
  return true;
};

//-------------------------------------------------------------------------
// 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
//-------------------------------------------------------------------------
scwin.f_setWrkNoFromDate = function () {
  scwin.wrkNo = ACConstants.CLOSE_STAFF_RESULTS;
};

//MHNNO 가져오기
scwin.f_MhnoLoading = function (mhgb, blno) {
  var strClntNo = "";
  strClntNo = blno;
  if (strClntNo.length > 0) {
    param1 = strClntNo;
    if (cnd_lc_seaair.getValue() == "A") {
      //ds_mhno.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirHouseMhnoListCombo&param1=" + param1 +"&param2=" + cnd_lc_iogb.getValue();
      scwin.f_retrieveMhnoA(param1, cnd_lc_iogb.getValue());
    } else if (cnd_lc_seaair.getValue() == "S") {
      //ds_mhno.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1 +"&param2=" + cnd_lc_iogb.getValue();
      scwin.f_retrieveMhnoS(param1, cnd_lc_iogb.getValue());
    } else if (cnd_lc_seaair.getValue() == "T") {
      //ds_mhno.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveTransMhnoListCombo&param1=" + param1;
      scwin.f_retrieveMhnoT(param1);
    }
    //ds_mhno.Reset();				
  } else {
    ds_mhno.removeAll();
    dma_search.set("mhno", "");
  }
};
scwin.f_retrieveMhnoA = function (param1, param2) {
  const params = {
    sysCd: "ilCommonEBC",
    queryId: "retriveAirHouseMhnoListCombo",
    param1: param1,
    param2: param2
  };

  //데이터셋에 정보설정
  dma_mhno.setJSON(params);
  $c.sbm.execute($p, sbm_mhno);
};
scwin.f_retrieveMhnoS = function (param1, param2) {
  const params = {
    sysCd: "ilCommonEBC",
    queryId: "retriveSeaHouseMhnoListCombo",
    param1: param1,
    param2: param2
  };

  //데이터셋에 정보설정
  dma_mhno.setJSON(params);
  $c.sbm.execute($p, sbm_mhno);
};
scwin.f_retrieveMhnoT = function (param1) {
  const params = {
    sysCd: "ilCommonEBC",
    queryId: "retriveTransMhnoListCombo",
    param1: param1
  };

  //데이터셋에 정보설정
  dma_mhno.setJSON(params);
  $c.sbm.execute($p, sbm_mhno);
};
scwin.sbm_mhno_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_mhno.setJSON(e.responseJSON.GAUCE);
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
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 3:
      //청구부서코드팝업
      udc_lodeptCd.setSelectId("retrieveOpDeptCdInfo");
      udc_lodeptCd.cfCommonPopUp(scwin.callbackOpDeptCdInfo1, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_lodeptCd, txt_lodeptNm);  // 청구부서코드, 청구부서명

      break;
    case 4:
      //부서코드팝업
      udc_sellDeptCd.setSelectId("retrieveOpDeptCdInfo");
      udc_sellDeptCd.cfCommonPopUp(scwin.callbackOpDeptCdInfo2, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_sellDeptCd, txt_sellDeptNm);  // 청구부서코드, 청구부서명

      break;
    case 5:
      //CLNT_NO(화주)팝업
      udc_clntNo.ilCommonPopUp(scwin.callbackEngClntInfo, pCode.trim(), pName, pClose, 2, 'Client Code, Client Name', '140,140', '3,4,5,6,7,8,9,10', null, null, null, null, null, null, pAllSearch, 'Client search,Client Code,Client Name');

      //cfSetReturnValue(rtnList, ed_clntNo, txt_clntNm);  //

      break;
    default:
      break;
  }
};
scwin.callbackOpDeptCdInfo1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lodeptCd, ed_lodeptNm); // 청구부서코드, 청구부서명
};
scwin.callbackOpDeptCdInfo2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sellDeptCd, ed_sellDeptNm); // 청구부서코드, 청구부서명
};
scwin.callbackEngClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm); //
};
scwin.ds_txn_oncelldatachange = function (info) {
  var rowCnt = ds_txn.getRowCount();
  spa_cnt2.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_saveInternalPayment_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_RetrieveInternal();
  }
};
scwin.sbm_cancelInternalPayment_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_RetrieveInternal();
  }
};
scwin.sbm_billTxn_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, "처리되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_billTxn2_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, "처리되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_cancelTxnReject_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, "처리되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_cancelTxn_submitdone = function (e) {
  console.log(e.responseJSON);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, "처리되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_ProcessAll_submitdone = function (e) {
  console.log(e.responseJSON);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, "처리되었습니다.");
    scwin.f_Retrieve();
    scwin.f_RetrieveInternal();
  }
};
scwin.gr_txn_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "internalTxnBilgNo") {
    scwin.f_Detail(ds_txn.getRowPosition());
  }
};
scwin.cnd_ed_blno_onviewchange = function (info) {};
scwin.cnd_ed_blno_onblur = function (e) {
  scwin.f_MhnoLoading("H", cnd_ed_blno.getValue().trim());
};
scwin.ed_postDt_onblur = function (e) {
  if (ed_postDt.getValue().length == 8) {
    for (var i = 0; i < ds_internalPaymentInfo.getRowCount(); i++) {
      if (ds_internalPaymentInfo.getCellData(i, "yn") == "T") {
        ds_internalPaymentInfo.setCellData(i, "postDt", ed_postDt.getValue());
      } else {
        ds_internalPaymentInfo.setCellData(i, "postDt", "");
      }
    }
  }
};
scwin.ds_internalPaymentInfo_oncelldatachange = function (info) {
  // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}
  var colid = info.colID;
  var row = info.rowIndex;
  var vatCnt = 0;
  if (ds_internalPaymentInfo.getRowCount() > 0) {
    if (colid == "yn") {
      odrNo = ds_internalPaymentInfo.getCellData(row, "odrNo");
      //ds_txn.ClearAllMark();
      for (var i = 0; i < ds_txn.getRowCount(); i++) {
        if (ds_txn.getCellData(i, "odrNo") == odrNo) {
          //ds_txn.MarkRows(i,i);
          ds_txn.setCellData(i, "selYn", 1);
        }
      }
    }
  }
};
scwin.udc_lodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_lodeptCd.getValue(), ed_lodeptNm.getValue(), 'F', 'F');
};
scwin.udc_lodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lodeptCd, ed_lodeptNm, 3);
};
scwin.udc_lodeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lodeptNm, ed_lodeptCd, 3, false);
};
scwin.udc_sellDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_sellDeptCd.getValue(), ed_sellDeptNm.getValue(), 'F', 'F');
};
scwin.udc_sellDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sellDeptCd, ed_sellDeptNm, 4);
};
scwin.udc_sellDeptCd_onviewchangeNameEvent = function (info) {};
scwin.udc_deptCd_onclickEvent = function (e) {
  scwin.f_openPushDeptPopUp('F');
};
scwin.udc_deptCd_onblurCodeEvent = function (e) {
  scwin.f_openPushDeptPopUp('T');
};
scwin.udc_deptCd_onviewchangeNameEvent = function (info) {};
scwin.udc_deptBilgCd_onclickEvent = function (e) {
  scwin.f_openBilgDeptPopUp('F');
};
scwin.udc_deptBilgCd_onblurCodeEvent = function (e) {
  scwin.f_openBilgDeptPopUp('T');
};
scwin.udc_deptBilgCd_onviewchangeNameEvent = function (info) {};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 5);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveInternal();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_InternalConfirm_onclick = function (e) {
  scwin.f_internalCancel();
};
scwin.btn_InternalCancel_onclick = function (e) {
  scwin.f_InternalConfirm();
};
scwin.btn_ProcessAll_onclick = function (e) {
  scwin.f_ProcessAll();
};
scwin.btn_Detail_onclick = function (e) {
  scwin.f_Detail(ds_txn.getRowPosition());
};
scwin.btn_CancelPchsReject_onclick = function (e) {
  scwin.f_CancelPchsReject();
};
scwin.btn_CancelPchs_onclick = function (e) {
  scwin.f_CancelPchs();
};
scwin.btn_Pchs_onclick = function (e) {
  scwin.f_Bill();
};
scwin.btn_Bill_onclick = function (e) {
  scwin.f_Pchs();
};
scwin.sbm_search_submitdone = function (e) {
  if (ds_txn.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  spa_cnt2.setValue(ds_txn.getRowCount());
};
scwin.sbm_searchInternal_submitdone = function (e) {
  spa_cnt1.setValue(ds_internalPaymentInfo.getRowCount());
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ds_txn_ondataload = function () {
  var options = {};
  options.sortIndex = "internalTxnBilgNo";
  options.sortOrder = "1"; //오른차순:"1", 내림차순"-1"
  ds_txn.multisort(options);
};
scwin.excelDown1 = function () {
  var info = "Job Type |  " + $c.win.getComboLabel($p, cnd_lc_seaair) + "  | ETD/ETA |  " + ed_stdtFrom.getValue() + " ~ " + ed_stdtTo.getValue();
  const options = {
    fileName: "내부매입 목록.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "내부매입 목록",
    startRowIndex: 3,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 17,
    text: "내부매입 목록",
    textAlign: "center",
    drawBorder: false,
    fontSize: "18px"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 17,
    text: info,
    textAlign: "left",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_internalPaymentList, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_bilg',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETD/ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_search',refEdDt:'stdtTo',refStDt:'stdtFrom',style:'',edFromId:'ed_stdtFrom',edToId:'ed_stdtTo',mandatoryFrom:'true',mandatoryTo:'true',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_seaair',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.seaair'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Trans'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.iogb'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Confirm Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_search',refEdDt:'confirmTo',refStDt:'confirmFrom',style:'',edFromId:'ed_confirmFrom',edToId:'ed_confirmTo',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실적 Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_search',refEdDt:'rsltsTo',refStDt:'rsltsFrom',style:'',edFromId:'ed_rsltsFrom',edToId:'ed_rsltsTo',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'cnd_ed_blno',placeholder:'',class:'',maxlength:'20',ref:'data:dma_search.blno','ev:onkeyup':'scwin.onkeyup',allowChar:'0-9,A-Z,a-z','ev:onblur':'scwin.cnd_ed_blno_onblur'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'cnd_lc_mhno',class:'',ref:'data:dma_search.mhno',allOption:'',chooseOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_commCd',id:'udc_ilcomCode',nameId:'ed_commNm',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_lodeptCd',nameId:'ed_lodeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',btnId:'btn_lodeptCd',id:'udc_lodeptCd','ev:onclickEvent':'scwin.udc_lodeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_lodeptCd_onviewchangeNameEvent',refDataCollection:'dma_search',code:'lodeptCd',UpperFlagCode:'1',allowCharCode:'0-9,A-Z,a-z','ev:onblurCodeEvent':'scwin.udc_lodeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sellDeptCd',nameId:'ed_sellDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',btnId:'btn_sellDeptCd',id:'udc_sellDeptCd','ev:onclickEvent':'scwin.udc_sellDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_sellDeptCd_onviewchangeNameEvent',refDataCollection:'dma_search',code:'sellDeptCd',UpperFlagCode:'1',allowCharCode:'0-9,A-Z,a-z','ev:onblurCodeEvent':'scwin.udc_sellDeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Confirm 유무',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_confirmGb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_search.confirmGb',chooseOptionLabel:'All'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Confirm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',btnId:'btn_clntNo',id:'udc_clntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',code:'clntNo',refDataCollection:'dma_search',UpperFlagCode:'1',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_bilg2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_search',refEdDt:'txnEndDt',refStDt:'txnStDt',style:'',edFromId:'ed_inqStDt',edToId:'ed_inqEndDt',mandatoryFrom:'true',mandatoryTo:'true',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_deptCd',nameId:'ed_deptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'매입부서',btnId:'btn_deptCd',id:'udc_deptCd',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_deptCd_onviewchangeNameEvent',refDataCollection:'dma_search',code:'acctDeptCd',UpperFlagCode:'1',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_deptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_deptBilgCd',nameId:'ed_deptBilgNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',btnId:'btn_deptBilgCd',id:'udc_deptBilgCd','ev:onclickEvent':'scwin.udc_deptBilgCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_deptBilgCd_onviewchangeNameEvent',refDataCollection:'dma_search',code:'acctDeptBilgCd',UpperFlagCode:'1',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_deptBilgCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_internalTxnStsCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.internalTxnStsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger2',style:'',type:'button','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'내부매입 목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_internalPaymentList',gridDownFn:'scwin.excelDown1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_internalPaymentInfo',style:'',id:'gr_internalPaymentList',visibleRowNum:'5',class:'wq_gvw',autoFit:'allColumn',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'column1',displayMode:'label',rowSpan:'2',value:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'Order 번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'Confirm',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'Confirm<br/>Date',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'실적<br/>Date',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'Seq',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'Master B/L',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'House B/L',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column7',value:'화주',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column73',displayMode:'label',value:'금액',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column70',displayMode:'label',value:'매입부서',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column64',displayMode:'label',value:'매출부서',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',displayMode:'label',value:'ETD/ETA',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',displayMode:'label',value:'수정자',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',displayMode:'label',value:'수정일시',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',displayMode:'label',value:'Container<br/>번호',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column92',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column91',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column89',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column88',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column87',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column86',value:'Name',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'yn',displayMode:'label',trueValue:'T',valueType:'other',checkAlways:'true',falseValue:'$blank'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsCd',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'postDt',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'rsltsStdDt',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsSeq',displayMode:'label',hidden:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mblno',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blno',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',maxLength:'.0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsDeptCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsDeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellDeptCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellDeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'stdt',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'modNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'modDtm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column75',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'sumAmt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_cnt1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'확정일자',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_postDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'','ev:onblur':'scwin.ed_postDt_onblur',displayFormat:'yyyy/MM/dd'}},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_InternalConfirm',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_InternalConfirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_InternalCancel',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_InternalCancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부확정'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송 내부매출 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section2',style:'',gridID:'gr_txn',grdDownOpts:'{"fileName":"운송 내부매출 목록.xlsx","sheetName" : "운송 내부매출 목록", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_txn',id:'gr_txn',style:'',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'allColumn','ev:oncellclick':'scwin.gr_txn_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'40',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Order 번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'청구번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'시스템',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'내부매입부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'내부매출부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'진행상태',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'작성일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'거래일자',width:'80'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'실거래일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column49',value:'실화주거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column46',value:'컨테이너번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'B|L번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column40',value:'수정자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'수정일시',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',width:'40',checkAlways:'true',trueValue:'1',valueType:'other',falseValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',value:'',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTxnBilgNo',inputType:'link',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sysCd',inputType:'select',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAcctDeptCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt',inputType:'text',width:'80',readOnly:'true',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTxnStsCd',inputType:'select',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'calendar',width:'80',readOnly:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnDt',inputType:'calendar',width:'80',readOnly:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'realTxnDt',displayMode:'label',readOnly:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'realMchtClntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blNo',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'modNm',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'modDt',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column24',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'rsltsAmt\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_ProcessAll',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_ProcessAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내부확정 & 매입관리'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Detail',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_Detail_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_CancelPchsReject',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_CancelPchsReject_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입거부취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_CancelPchs',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_CancelPchs_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입거부'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Pchs',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_Pchs_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Bill',type:'button',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_Bill_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입처리'}]}]}]}]}]}]}]}]}]}]})