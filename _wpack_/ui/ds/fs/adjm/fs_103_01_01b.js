/*amd /ui/ds/fs/adjm/fs_103_01_01b.xml 122127 771cd646fd57578a7576c2ceacf9392837d5b3b2c77b2101fcb787a0ecdc1cfd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCertiList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtSt',name:'매입예정일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsIntendDtEnd',name:'매입예정일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitPic',name:'승인담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recptYn',name:'접수여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsIntendDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suspensePay',name:'가지급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recptYn',name:'접수여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'매입계산서역발행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'Onboard',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pic',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseCertiList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_clntInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nmCmpy',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'역발행거래처여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCycCd',name:'당월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'지급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCntShtCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDtChgYn',name:'지급일변경여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inatPayYn',name:'지급여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_purchaseCerti'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidKndClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'작성귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecAuthTrgtYn',name:'매입계산서역발행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'elecAuthTrgtYn2',name:'매입계산서역발행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmDeptNm',name:'정산부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vat',name:'부가세',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_payInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payDt',name:'지급일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqPayMthdCd',name:'지급방법',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bfPayDt',name:'변경 전 지급일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'interDataYn',name:'국제data여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_holiday',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdDt',name:'다음일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_nextdate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nextDt',name:'다음일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchimntClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_imntClnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'영어명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드약명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'영어약명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AcctCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsCrAcctCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prov',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'구매요청일(지급일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNm',name:'요청사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'slipNo DEBIS전표번호 text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendDt',name:'정리예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'정리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postSetlAmt',name:'기정리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'정리금액(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postSetlAmtFcrc',name:'기정리외화금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chargeFcrc',name:'잔액(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlIntendAmt',name:'정리예정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setlIntendAmtFcrc',name:'정리예정외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmtFcrc',name:'입금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'정리환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_provHeader',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'신청부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'신청부서',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCombo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchase',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecAuthTrgtYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suspenseAmt',name:'name20',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCertiList',action:'/ds.fs.adjm.pchsadjmdcsn.RetrieveCertiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCertiList","key":"IN_DS1"},{"id":"ds_certiList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_certiList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchCertiList_submitdone','ev:submiterror':'scwin.sbm_searchCertiList_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchClntInfo',action:'/ds.fs.adjm.pchsadjmdcsn.RetrieveClntPayInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseCerti","key":"IN_DS1"},{"id":"ds_clntInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_clntInfo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchClntInfo_submitdone','ev:submiterror':'scwin.sbm_searchClntInfo_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRegistPurchaseEvidence',action:'/ds.fs.adjm.pchsadjmdcsn.RegistPurchaseEvidenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_purchaseCerti","key":"IN_DS1"},{"action":"modified","id":"ds_certiList","key":"IN_DS2"},{"action":"modified","id":"ds_payInfo","key":"IN_DS3"},{"action":"modified","id":"ds_prov","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRegistPurchaseEvidence_submitdone','ev:submiterror':'scwin.sbm_saveRegistPurchaseEvidence_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_holiday',action:'/ds.fs.adjm.pchsadjmdcsn.RetrieveHolidayNextDateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_holiday","key":"IN_DS1"},{"id":"ds_nextdate","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_nextdate","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_holiday_submitdone','ev:submiterror':'scwin.sbm_holiday_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_imntClnt',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_searchimntClnt',target:'data:json,{"id":"ds_imntClnt","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_imntClnt_submitdone','ev:submiterror':'scwin.sbm_imntClnt_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCombo","key":"GAUCE"}]',target:'data:json,[{"id":"ds_AcctCd","key":"GAUCE"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePurchase',action:'/ds.fs.adjm.pchsadjmdcsn.RetrievePurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchase","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_purchase","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePurchase_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류>정산>세금계산서>세금계산서 접수 등록
//조회조건 : 매입거래처 : 601153, 매입예정일자 : 20110901 ~ 20150930
//가지급금 : 매입거래처 : 273083, 매입예정일자 : 20170201 ~20170222
scwin.p_param = "";
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.memJson = $c.data.getMemInfo($p);
scwin.clnt_chk = "T";
scwin.pay_cond = "T";
scwin.sum = 0; //가지급금 금액 산정용
scwin.suspensePaySum = 0;
scwin.colid = "";
scwin.eventCheck = "";

//hidden값
scwin.txtCoClsCd = "";
scwin.hd_acctCdGbn = "";
scwin.hd_acctDeptCdGbn = "";
scwin.ed_pageNumber = "";
scwin.ed_quantityOfRows = "";
scwin.bfPayDt = "";
scwin.elecAuthTrgtYn = "";
scwin.elecAuthTrgtYnLast = "";
//img_adjmClsCd  이건 div

scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //scwin.f_SetDataHeader();
  //scwin.f_SetDefaultData();

  //scwin.bfPayDt.style.visibility = "hidden";
};
scwin.onUdcCompleted = function () {
  //console.log('open~~~~~~~~~~~~~~~~~');
  //console.log(scwin.memJson);
  console.log($c.data.getParameter($p));
  //다른 화면에서 넘어 오는 값 셋팅
  scwin.pchsDeptCd = $c.data.getParameter($p, "pchsDeptCd") == null ? "" : $c.data.getParameter($p, "pchsDeptCd");
  scwin.pchsDeptNm = $c.data.getParameter($p, "pchsDeptNm") == null ? "" : $c.data.getParameter($p, "pchsDeptNm");
  scwin.pchsClntNo = $c.data.getParameter($p, "pchsClntNo") == null ? "" : $c.data.getParameter($p, "pchsClntNo");
  scwin.pchsClntNm = $c.data.getParameter($p, "pchsClntNm") == null ? "" : $c.data.getParameter($p, "pchsClntNm");
  scwin.pchsIntendDtSt = $c.data.getParameter($p, "pchsIntendDtSt") == null ? "" : $c.data.getParameter($p, "pchsIntendDtSt");
  scwin.pchsIntendDtEnd = $c.data.getParameter($p, "pchsIntendDtEnd") == null ? "" : $c.data.getParameter($p, "pchsIntendDtEnd");
  scwin.certiNo = $c.data.getParameter($p, "certiNo") == null ? "" : $c.data.getParameter($p, "certiNo");
  scwin.partner = $c.data.getParameter($p, "partner") == null ? "" : $c.data.getParameter($p, "partner");
  scwin.ccChk = $c.data.getParameter($p, "ccChk") == null ? "" : $c.data.getParameter($p, "ccChk");
  scwin.inuChk = $c.data.getParameter($p, "inuChk") == null ? "" : $c.data.getParameter($p, "inuChk");
  scwin.f_SetDataHeader();
  scwin.f_SetDefaultData();

  //scwin.bfPayDt.style.visibility = "hidden";

  //공통코드 적용
  const codeOptions = [{
    grpCd: "SD070",
    compID: "acb_taxnClsCd"
  } //과세구분
  , {
    grpCd: "FM018",
    compID: "acb_reqPayMthdCd"
  } //지급방법 "^선택,<%= GauceUtil.getCodeList("FM018",2,"10") %>,<%= GauceUtil.getCodeList("FM018",2,"20") %>"
  //, { grpCd: "FM018", compID: "acb_reqPayMthdCd", opt: { "range": "2,10" } }    //지급방법 "^선택,<%= GauceUtil.getCodeList("FM018",2,"10") %>,<%= GauceUtil.getCodeList("FM018",2,"20") %>"
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.fn_setCommboDataFilter);

  //LUX 콤보
  const codeOptions1 = [{
    method: "getLuxeComboData",
    param1: "LogisticsPurchaseEvidenceEBC",
    param2: "retriveSelpchItemCdList",
    param3: [""],
    compID: "acb_pchsItemCd"
  }];
  $c.data.setGauceUtil($p, codeOptions1);
  tbx_adjmClsCd.hide();

  //임시 테스트
  //ed_pchsClntNo.setValue("139591");
  //ed_pchsClntNo.setValue("910055");
  //ica_pchsIntendDtSt.setValue("20101201");
  //ica_pchsIntendDtEnd.setValue("20251231");
  console.log('udc_open');
};
scwin.fn_setCommboDataFilter = function () {
  //^선택,<%= GauceUtil.getCodeList("FM018",2,"10") %>,<%= GauceUtil.getCodeList("FM018",2,"20") %>">
  $c.data.dataListFilter($p, dlt_commonCodeFM018, "fltrCd2 == '10' || fltrCd2 == '20'");
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
scwin.f_SetDefaultData = function () {
  //acb_pchsItemCd.MaxLength = "50";
  //acb_pchsItemCd.Index = 0;  // 매입항목
  //acb_recptYn.MaxLength = "4";
  //acb_recptYn.Index = 0;  // 접수구분

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

  //document.all.div_id.style.visibility = "hidden";
  //$c.gus.cfEnableObjects([ica_spplyDt, img_spplyDt, rd_elecAuthTrgtYn]);
  $c.gus.cfEnableObjects($p, [ica_spplyDt, rd_elecAuthTrgtYn]);
  $c.gus.cfDisableObjects($p, [acb_taxnClsCd]);
  ed_drawEmpNo.setValue(scwin.memJson.empNo); // 작성자코드
  ed_drawEmpNm.setValue(scwin.memJson.userNm); // 작성자명
  ed_drawAcctDeptCd.setValue(scwin.memJson.acctDeptCd); // 작성귀속부서코드
  ed_drawAcctDeptNm.setValue(scwin.memJson.acctDeptNm); // 작성귀속부서명
  ica_spplyDt.setValue(scwin.vQryEndDt); // 공급일자

  $c.gus.cfDisableObjects($p, [btn_Move1, btn_Move2]);
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
  ds_provHeader.setJSON([]);
  ds_provHeader.insertRow(0);
  // Session 이용
  ds_provHeader.setCellData(0, "reqAcctDeptCd", scwin.memJson.acctDeptCd);
  // 로그인사번,부서
  ds_provHeader.setCellData(0, "drawEmpNo", scwin.memJson.empNo);
  ds_provHeader.setCellData(0, "drawAcctDeptCd", scwin.memJson.acctDeptCd);

  // Session 이용
  ds_provHeader.setCellData(0, "reqAcctDeptCd", scwin.memJson.acctDeptCd);
  // 로그인사번,부서
  ds_provHeader.setCellData(0, "drawEmpNo", scwin.memJson.empNo);
  ds_provHeader.setCellData(0, "drawAcctDeptCd", scwin.memJson.acctDeptCd);

  //ds_payInfo.insertRow(0);
  //ds_payInfo.setRowPosition(0);
};

//-------------------------------------------------------------------------
// 거래명세서 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCertiList = async function () {
  console.log("f_RetrieveCertiList ed_pchsClntNo ==>" + ed_pchsClntNo.getValue());
  // 검색조건 필수 입력 체크, 동일 날짜 포함 여부 체크
  if (!(await $c.gus.cfValidate($p, [ed_pchsClntNo, ica_pchsIntendDtSt, ica_pchsIntendDtEnd]))) {
    return;
  }
  var con = await $c.gus.cfIsAfterDate($p, ica_pchsIntendDtSt.getValue(), ica_pchsIntendDtEnd.getValue());
  if (!con) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_pchsIntendDtSt.focus();
    return;
  }
  ds_certiList.setJSON([]);
  ds_purchaseCerti.setJSON([]);
  $c.sbm.execute($p, sbm_searchCertiList);
  //tr_searchCertiList.post();
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_RetrievePurchaseEvidence = async function (row) {
  /*
          // 팝업화면에게 key 정보인 전표번호를 넘겨준다.
          var valueObject = new Object();
          valueObject.slipNo = ds_certiList.getCellData(row, "slipNo");
          
          // 세금계산서 접수 등록 상세 화면 호출 
          var result = window.showModalDialog("./ja_fs_103_01_01p.jsp", valueObject, 
                       "dialogWidth:825px; dialogHeight:600px; status:no; scroll:no");
          
  */
  let data = {
    slipNo: ds_certiList.getCellData(row, "slipNo")
  };
  let win_url = "/ui/ds/fs/adjm/fs_103_01_01p.xml";
  let opts = {
    id: "smpPop",
    popupName: "세금 계산서 접수 등록 상세",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 650,
    title: "세금 계산서 접수 등록 상세"
  };
  var returnValue = await $c.win.openPopup($p, win_url, opts, data);

  // 다시 조회함 
  //f_RetrieveCertiList();    
};
scwin.retrieveClntYn = false;
//-------------------------------------------------------------------------
// 매입증빙(상호, 사업자번호) 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveClntInfo = async function (row) {
  console.log("scwin.f_RetrieveClntInfo ==>" + row);
  console.log("scwin.f_RetrieveClntInfo ==>" + ed_adjmDept.getValue());
  ds_purchaseCerti.set("pchsClntNo", ds_certiList.getCellData(row, "pchsClntNo"));
  ds_purchaseCerti.set("adjmDept", ds_certiList.getCellData(row, "pchsDeptCd"));
  ds_purchaseCerti.set("crcCd", ds_certiList.getCellData(row, "crcCd"));
  ed_adjmDept.setValue(ds_certiList.getCellData(row, "pchsDeptCd"));
  //ed_adjmDeptNm.setValue(ds_certiList.getCellData(row, "pchsClntNm"));

  //console.log('2222~~>'+ed_adjmDept.getValue());
  //console.log('3333~~>'+ed_adjmDeptNm.getValue());

  //scwin.f_chkOpenCommonPopUp(ed_adjmDept, ed_adjmDeptNm, 4, false);pchsClntNo,pchsClntNo
  //scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), ed_adjmDeptNm.getValue(), 'F', 'F');
  //console.log("ds_purchaseCerti ==>"+JSON.stringify(ds_purchaseCerti));

  scwin.retrieveClntYn = true;
  $c.sbm.execute($p, sbm_searchClntInfo);
};

//-------------------------------------------------------------------------
// 매입증빙(상호, 사업자번호) 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveClntInfo2 = function (pchsClntNo) {
  console.log("scwin.f_RetrieveClntInfo2 ==>" + ds_certiList.getRowPosition());
  ds_purchaseCerti.set("pchsClntNo", pchsClntNo);
  ds_purchaseCerti.set("adjmDept", ed_adjmDept.getValue());
  ds_purchaseCerti.set("crcCd", ds_certiList.getCellData(ds_certiList.getRowPosition(), "crcCd"));

  //scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), ed_adjmDept.getValue(), 'F', 'F');

  scwin.retrieveClntYn = true;
  $c.sbm.execute($p, sbm_searchClntInfo);
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
  //cfCopyDataSetHeader(ds_certiList, ds_purchaseCertiList);
  //ds_certiList.removeAll()
  var cnt = 0;
  ds_purchaseCertiList.setJSON([]);
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T") {
      //var transRow = ds_certiList.ExportData(i,1,false);
      //ds_purchaseCertiList.ImportData(transRow);

      var transRow = ds_certiList.getRowJSON(i);
      ds_purchaseCertiList.setRowJSON(cnt, transRow, true);
      cnt++;
      //break;
    }
  }
};

//-------------------------------------------------------------------------
// 세금계산서 접수 저장
//-------------------------------------------------------------------------
scwin.f_RegistPurchaseEvidence = async function () {
  // Data 변경 여부 조회
  //if (!ds_certiList.IsUpdated) {
  if (ds_certiList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["목록"]); // 선택된 @이(가) 없습니다.
    return;
  }

  //    if(scwin.pay_cond =="F"){
  //    	$c.win.alert("해당 거래처에 등록된 지급조건이 없습니다.\n지급조건 등록 후 세금계산서 접수가 가능합니다.");
  //    	return false;        
  //    }

  //매입계산서 역발행 변경할지 여부 체크 20140626 황창기
  if (ds_clntInfo.getRowCount() > 0) {
    if (rd_elecAuthTrgtYn.getValue() != scwin.elecAuthTrgtYn) {
      if (scwin.elecAuthTrgtYn == '0') {
        if (!(await $c.win.confirm($p, "매입계산서 역발행 미적용건인데 적용하시겠습니까?"))) {
          //rd_elecAuthTrgtYn.getValue() = ed_elecAuthTrgtYn.getValue();
          ds_purchaseCerti.set("elecAuthTrgtYn", scwin.elecAuthTrgtYn);
        }
      } else {
        if (!(await $c.win.confirm($p, "매입계산서 역발행 적용건인데 미적용하시겠습니까?"))) {
          //rd_elecAuthTrgtYn.getValue() = ed_elecAuthTrgtYn.getValue();
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

  //위수탁 업체 체크로직 추가 2009 01 20     
  if (scwin.f_checkCertiBeforeSave() == false) {
    return false;
  }
  /**
  if (acb_evidKndClsCd.getValue() == "10" || acb_evidKndClsCd.getValue() == "11" || acb_evidKndClsCd.getValue() == "40"){
      if(Math.round(spplyAmt*0.1) != vat){
          $c.win.alert("선택하신 건의 합계금액 : "+spplyAmt+" , 부가세 : "+vat+" 입니다. 총금액의 10%와 부가세의 금액이"+Math.abs(Math.round(spplyAmt*0.1)-vat)+" 원  다릅니다. \n 계속 진행하시겠습니까? ");
      }
  }    
  */
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
        //기준지급일자값이 없으면 지급일자 값으로 셋팅           		
        ds_payInfo.set("bfPayDt", ica_payDt.getValue());
      }
    }

    //console.log("저장 실행~~");
    $c.sbm.execute($p, sbm_saveRegistPurchaseEvidence);
    //tr_saveRegistPurchaseEvidence.Post();
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
            break;
          }
        }
        if (ica_slipDt.getValue() >= ds_certiList.getCellData(i, "ctrtStDt") && ica_slipDt.getValue() <= ds_certiList.getCellData(i, "ctrtEndDt")) {
          if (!(ds_certiList.getCellData(i, "pchsClntClsCd") == '11' || ds_certiList.getCellData(i, "pchsClntClsCd") == '16' || ds_certiList.getCellData(i, "pchsClntClsCd") == '17')) {
            await $c.win.alert($p, "거래명세서번호 : " + ds_certiList.getCellData(i, "certiNo") + " 는 전표일자  : " + ica_slipDt.getValue() + " 로, 거래처 : " + ed_pchsClntNo.getValue() + " 의 차량적용기간 " + ds_certiList.getCellData(i, "ctrtStDt") + " ~ " + ds_certiList.getCellData(i, "ctrtEndDt") + "에서 벗어났습니다. ");
            return false;
            break;
          }
        }
      } //if 1

      if (!(ds_certiList.getCellData(i, "ctrtStDt") != "" && ds_certiList.getCellData(i, "ctrtEndDt") != "")) {
        if (ds_certiList.getCellData(i, "pchsClntClsCd") == '11' || ds_certiList.getCellData(i, "pchsClntClsCd") == '16' || ds_certiList.getCellData(i, "pchsClntClsCd") == '17') {
          await $c.win.alert($p, "계약번호가 없습니다. 거래처의 매입거래처 종류는 " + ds_certiList.getCellData(i, "pchsClntClsNm") + " 로 위수탁이나 직영차이면 안됩니다. 거래처 관리에서 매입거래처 구분코드를 확인하십시오. ");
          return false;
          break;
        }
      }
    }
  } //for
};

//-------------------------------------------------------------------------
// 금액합계 계산
//-------------------------------------------------------------------------
scwin.f_CalcSumAmt = function () {
  console.log('scwin.f_CalcSumAmt ~');
  var spplyAmt = 0;
  var vat = 0;
  var suspensePay = 0;
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T" && ds_certiList.getCellData(i, "slipNo") == "") {
      //if (ds_certiList.getCellData(i, "chk") == "T") {
      spplyAmt += parseInt(ds_certiList.getCellData(i, "spplyAmt"));
      vat += parseInt(ds_certiList.getCellData(i, "vat"));
      suspensePay += parseInt(ds_certiList.getCellData(i, "suspensePay"));
    }
  }
  tbx_spplyAmt.setValue($c.gus.cfInsertComma($p, spplyAmt));
  tbx_suspenseAmt.setValue($c.gus.cfInsertComma($p, suspensePay));
  tbx_vat.setValue($c.gus.cfInsertComma($p, vat));
  tbx_sumAmt.setValue($c.gus.cfInsertComma($p, spplyAmt + vat));

  //console.log('suspensePay1 ~'+suspensePay);

  //가지급금이 없을때 버튼비활성화
  //if(tbx_suspenseAmt.getValue() == 0){
  if (suspensePay == 0) {
    //tbx_adjmClsCd.visible(false);
    tbx_adjmClsCd.hide();
    ds_prov.setJSON([]);
  } else {
    ds_prov.setJSON([]);
    //document.all.div_id.style.visibility = "visible";
    tbx_adjmClsCd.show();
    $c.gus.cfEnableObjects($p, tbx_adjmClsCd);
  }
  sum = spplyAmt + vat;
  scwin.suspensePaySum = suspensePay;
};

//-------------------------------------------------------------------------
// 매입증빙별거래명세서, 매입확정/매입증빙 정보 Data Clear
//-------------------------------------------------------------------------
scwin.f_PchsDataClear = function () {
  console.log('f_PchsDataClear ==>');
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

  //ica_slipDt.setValue(year + month + cf_lastDate(year, f_del_zero(month)));  // 전표일자
  //ica_slipDt.setValue(year + month + $c.date.getLastDateOfMonth(year, scwin.f_del_zero(month)));  // 전표일자

  ica_slipDt.setValue(slipDt); // 전표일자

  acb_evidKndClsCd.setValue("10"); // 증빙구분(세금계산서)
  acb_taxnClsCd.setValue("01"); // 과세구분(과세)
  ed_summary.setValue(""); // 적요
  rd_elecAuthTrgtYn.setValue(0); // 전자세금계산서(미적용)

  //document.all.div_id.style.visibility = "hidden";
  //         $c.gus.cfEnableObjects([ica_spplyDt, img_spplyDt, rd_elecAuthTrgtYn]);
  //$c.gus.cfEnableObjects([ica_spplyDt, img_spplyDt]);

  $c.gus.cfEnableObjects($p, [ica_spplyDt, rd_elecAuthTrgtYn]);
  $c.gus.cfDisableObjects($p, [acb_taxnClsCd]);
  var v_empNo = $c.gus.cfIsNull($p, scwin.memJson.empNo) ? "" : scwin.memJson.empNo;
  var v_userNm = $c.gus.cfIsNull($p, scwin.memJson.userNm) ? "" : scwin.memJson.userNm;
  var v_acctDeptCd = $c.gus.cfIsNull($p, scwin.memJson.acctDeptCd) ? "" : scwin.memJson.acctDeptCd;
  var v_acctDeptNm = $c.gus.cfIsNull($p, scwin.memJson.acctDeptNm) ? "" : scwin.memJson.acctDeptNm;
  ed_drawEmpNo.setValue(v_empNo); // 작성자코드
  ed_drawEmpNm.setValue(v_userNm); // 작성자명
  ed_drawAcctDeptCd.setValue(v_acctDeptCd); // 작성귀속부서코드
  ed_drawAcctDeptNm.setValue(v_acctDeptNm); // 작성귀속부서명

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
  console.log('f_del_zero return ~~' + newVal);
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
// 엑셀 다운로드
//------------------------------------------------------------------------- 
scwin.f_RunExcel = async function (value) {
  var count = ds_certiList.getRowCount();
  if (!(count > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  } else {
    let options = {
      fileName: "세금계산서 접수 등록.xlsx",
      sheetName: "세금계산서 접수 등록",
      startRowIndex: 1,
      startColumnIndex: 0
    };
    var sheetTitle = "세금계산서 접수 등록";
    let infoArr = [
    //제목
    {
      rowIndex: 0 //제목을 표시할 행 index
      ,

      colIndex: 0 //제목을 표시할 열 index
      ,

      rowSpan: 1 //병합할 행의 수
      ,

      colSpan: 21 //병합할 열의 수
      ,

      text: sheetTitle //표시할 내용(제목)
      ,

      fontName: "돋움체" //폰트이름 
      ,

      fontSize: "12px" //폰트 size
      ,

      color: "black" //폰트 color
      ,

      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,

      bgColor: "#ffffff" //배경 color
    }];
    $c.data.downloadGridViewExcel($p, gr_certiList, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  //var pWhere         = "";
  //var pWtitleSearch  = "";
  //var qryYear = scwin.vCurDate.substring(0,4);
  //var qryYear = <%=DDate.getDate().substring(0,4)%>;

  switch (disGubun) {
    case 1:
      // 매입거래처 팝업         
      udc_pchsClntNo.setSelectId('retrieveClntList');
      rtnList = udc_pchsClntNo.cfCommonPopUp(scwin.udc_pchsClntNoCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 매입부서 팝업          
      udc_pchsDeptCd.setSelectId('retrieveLobranInfo');
      rtnList = udc_pchsDeptCd.cfCommonPopUp(scwin.udc_pchsDeptCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 승인담당자 팝업         
      udc_admitPic.setSelectId('retrieveEmpInfo');
      rtnList = udc_admitPic.cfCommonPopUp(scwin.udc_admitPicCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      console.log("set111~~~");
      // 정산부서 팝업          
      udc_adjmDept.setSelectId('retrieveLobranInfo');
      rtnList = await udc_adjmDept.cfCommonPopUpAsync(scwin.udc_adjmDeptCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 5:
      udc_adjmDept.setSelectId('retrieveEmpInfo');
      rtnList = udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNoCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 6:
      // 작성귀속부서 팝업
      var param_y = ica_slipDt.getValue().trim(); //예산년도 파람메터추가 ejsong9

      udc_drawAcctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
      rtnList = udc_drawAcctDeptCd.cfCommonPopUp(scwin.udc_drawAcctDeptCdCallback, pCode.trim(), pName, pClose, null, null, null, null, param_y, ",,0", "410", null, null, null);
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
  if (scwin.retrieveClntYn == true) {
    $c.sbm.execute($p, sbm_searchClntInfo);
  }
  scwin.retrieveClntYn = false;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  console.log('scwin.f_chkOpenCommonPopUp~~');

  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

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
  valueObject.acctDeptCd = scwin.memJson.acctDeptCd;
  valueObject.acctDeptNm = scwin.memJson.acctDeptNm;
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

  //valueObject
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

    //var provHeaderDs = returnValue.provHeader.getAllArray();
    //var provHeaderDs = returnValue[1].getAllArray();
    //var provHeaderColumnInfo = provHeaderDs[0].columnInfo;
    //var provHeaderData = provHeaderDs[0].data;
    //ds_provHeader.setArray({"columnInfo":provHeaderColumnInfo, "data":provHeaderData});

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
            //ds_prov.deleteRow(i);
            ds_prov.removeRow(i);
            break;
          }
        }
      }
    } // for end

    for (i = 0; i < ds_provHeader.getRowCount(); i++) {
      for (j = i + 1; j < ds_provHeader.getRowCount(); j++) {
        if (ds_provHeader.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
          //ds_provHeader.DeleteRow(i);
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
  //console.log('scwin.f_AcctCdCheck ~');
  var count = 0;
  var jsonData;
  for (var i = 0; i < ds_certiList.getRowCount(); i++) {
    if (ds_certiList.getCellData(i, "chk") == "T") {
      if (ds_certiList.getCellData(i, "pchsDeptCd") == "1G34") {
        //ds_AcctCd.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retrieveAcctCdCheck&param1=" + ds_certiList.getCellData(i, "certiNo");
        //ds_AcctCd.Reset();
        //if (ds_certiList.getCellData(i, "pchsDeptCd") == "1G34" && ds_AcctCd.getRowCount() > 0) {
        //    count++;
        //}

        jsonData = {
          sysCd: 'ilCommonEBC',
          queryId: 'retrieveAcctCdCheck',
          param1: ds_certiList.getCellData(i, "certiNo")
        };
        ds_searchCombo.setJSON(jsonData);
        $c.sbm.execute($p, sbm_searchAcctCd);
        count++;
        break;
      }
    }
  }

  //    if(count == 0){
  //        ed_drawAcctDeptCd.setValue(scwin.memJson.acctDeptCd);  // 작성귀속부서코드
  //        ed_drawAcctDeptNm.setValue(scwin.memJson.acctDeptNm);  // 작성귀속부서명
  //        console.log('scwin.memJson.acctDeptCd -->'+scwin.memJson.acctDeptCd+','+scwin.memJson.acctDeptNm);
  //   }

  /*
      if (count > 0) {
          ed_drawAcctDeptCd.setValue("00839");
          ed_drawAcctDeptNm.setValue("국제운영팀");
      } else {
          ed_drawAcctDeptCd.setValue(scwin.acctDeptCd);  // 작성귀속부서코드
          ed_drawAcctDeptNm.setValue(scwin.acctDeptNm);  // 작성귀속부서명
      }
  */
};
scwin.sbm_searchAcctCd_submitdone = function (e) {
  console.log('sbm_searchAcctCd_submitdone~~~~');
  console.log('ds_AcctCd.getRowCount()');
  console.log('5555->' + ds_AcctCd.getRowCount());
  if (ds_AcctCd.getRowCount() > 0) {
    ed_drawAcctDeptCd.setValue("00839");
    ed_drawAcctDeptNm.setValue("국제운영팀");
  } else {
    ed_drawAcctDeptCd.setValue(scwin.memJson.acctDeptCd); // 작성귀속부서코드
    ed_drawAcctDeptNm.setValue(scwin.memJson.acctDeptNm); // 작성귀속부서명
  }
};
scwin.f_RetrievePurchase = function (row) {
  console.log('f_RetrievePurchase~~~~~');
  var slipNo = ds_certiList.getCellData(row, "slipNo");
  ds_purchase.setJSON([]);
  $c.sbm.setAction($p, sbm_retrievePurchase, "/ds.fs.adjm.pchsadjmdcsn.RetrievePurchaseCMD.do?slipNo=" + slipNo);
  $c.sbm.execute($p, sbm_retrievePurchase);
};

//-------------------------------------------------------------------------
// f_moveToPage : 전자결재요청, 전도금요청 페이지로 이동
// 조회를 위해 현재 선택한 열의 전표번호를 갖고 페이지에 넘어간다
//-------------------------------------------------------------------------
scwin.f_moveToPage = function (page) {
  let strUrl = "";
  let programId = "";
  let paramObj = {
    slipNo: ds_certiList.getCellData(ds_certiList.getRowPosition(), "slipNo")
  };
  console.log('scwin.f_moveToPage~~~');
  console.log(paramObj);
  switch (page) {
    case 1:
      // 전자결재요청
      strUrl = "/ui/cm/bc/apprvmgnt/elecapprv/zz_710_01_01b.xml";
      programId = "zz_710_01_01b.jsp";
      $c.win.openMenu($p, "전자결재요청", strUrl, programId, paramObj);
      break;
    case 2:
      // 전도금요청
      strUrl = "/ui/ac/fm/paymgnt/advcdmgnt/fm_303_01_03b.xml";
      programId = "fm_303_01_03b.jsp";
      $c.win.openMenu($p, "[국제]전도금 내역관리", strUrl, programId, paramObj);
      break;
  }
};
scwin.sbm_searchCertiList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowCnt = ds_certiList.getRowCount();
  scwin.f_PchsDataClear();
  if (rowCnt == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
    $c.gus.cfDisableObjects($p, [udc_adjmDept, ica_slipDt, ica_payDt, acb_evidKndClsCd, acb_taxnClsCd, ed_summary, udc_drawEmpNo, udc_drawAcctDeptCd, ica_spplyDt, rd_elecAuthTrgtYn]);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    // 개선요청 체크박스 체크
    for (var i = rowCnt - 1; i >= 0; i--) {
      ds_certiList.setCellData(i, "chk", "T");

      // 마지막에만 매입확정정보, 매입증빙정보 데이터연동을 위해서 이벤트 발생
      if (i == 0) {
        ds_certiList.setRowPosition(i);
        scwin.gr_certiList_oncellclick(i, 0, "chk");
      }
    }
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
    $c.gus.cfEnableObjects($p, [udc_adjmDept, ica_slipDt, ica_payDt, acb_evidKndClsCd, acb_taxnClsCd, ed_summary, udc_drawEmpNo, udc_drawAcctDeptCd, ica_spplyDt, rd_elecAuthTrgtYn]);
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
scwin.sbm_searchCertiList_submiterror = function (e) {};
scwin.sbm_searchClntInfo_submitdone = async function (e) {
  console.log('scwin.sbm_searchClntInfo_submitdone~~');
  if (ds_clntInfo.getRowCount() > 0) {
    //ed_adjmDept.getValue() = ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsDeptCd");  // 선택된 row의 매입부서 정산부서코드로 default 세팅
    //ed_adjmDept.value = ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsDeptNm");  // 선택된 row의 매입부서 정산부서명으로 default 세팅

    tbx_nmCmpy.setValue(ds_clntInfo.getCellData(0, "nmCmpy")); // 상호
    tbx_busiNo.setValue(ds_clntInfo.getCellData(0, "busiNo")); // 사업자번호

    //역발행거래처여부 조회해와서 세팅 하도록 수정 20140926 황창기
    rd_elecAuthTrgtYn.setValue(ds_clntInfo.getCellData(0, "elecAuthTrgtYn")); //역발행 거래처 여부
    scwin.elecAuthTrgtYn = ds_clntInfo.getCellData(0, "elecAuthTrgtYn"); //역발행 거래처 여부 변경 확인위해 저장

    $c.gus.cfEnableObj($p, ica_payDt, true);
    scwin.pay_cond = "T";
    if (scwin.clnt_chk == "T") {
      ds_payInfo.set("interDataYn", "0");
      if (ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "1G20" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "1G32" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "1G33" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "1G31" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "1G34" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "1G35" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "1G36" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "6A5" || ds_certiList.getCellData(ds_certiList.getRowPosition() || 0, "pchsDeptCd") == "4A9") {
        // 재무팀 노규헌 대리 요청으로 인천복운 추가(2018.10)

        if (ds_clntInfo.getCellData(0, "inatPayYn") == "1") {
          //당월
          if (ds_clntInfo.getCellData(0, "payCycCd") == "3") {
            var strDate = ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsIntendDt");
            var year = strDate.substr(0, 4);
            var month = strDate.substr(4, 2);
            var day = strDate.substr(6, 2);
            var date = new Date(year, month - 1, day);
            var yyyy = date.getFullYear().toString();
            var mm = "";
            if (mm == 0) {
              mm = (date.getMonth() + 1).toString();
            } else {
              mm = date.getMonth().toString();
            }
            if (mm < 10) {
              mm = "0" + mm;
            }
            var dd = ds_clntInfo.getCellData(0, "payDd");
            if (dd == "30") {
              dd = new Date(yyyy, mm, 0).getDate();
            }
            var strPayDate = yyyy + mm + dd;
            scwin.fn_setPayDate(strPayDate);
            acb_reqPayMthdCd.setValue(ds_clntInfo.getCellData(0, "payCntShtCd"));
            if (ds_clntInfo.getCellData(0, "payDtChgYn") == "Y") {
              $c.gus.cfEnableObj($p, ica_payDt, true);
            } else {
              $c.gus.cfEnableObj($p, ica_payDt, false);
            }
            ds_payInfo.set("interDataYn", "1");
            scwin.pay_cond = "T";
            //익월
          } else if (ds_clntInfo.getCellData(0, "payCycCd") == "1") {
            var strDate = ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsIntendDt");
            var year = strDate.substr(0, 4);
            var month = strDate.substr(4, 2);
            var day = strDate.substr(6, 2);
            var date = new Date(year, month - 1, day);
            var yyyy = date.getFullYear().toString();
            var mm = "";
            if (mm == 0) {
              mm = (date.getMonth() + 2).toString();
            } else {
              mm = (date.getMonth() + 1).toString();
            }
            if (mm < 10) {
              mm = "0" + mm;
            } else if (mm > 12) {
              mm = (Number(mm) - 12).toString();
              yyyy = (Number(yyyy) + 1).toString();
              if (mm < 10) {
                mm = "0" + mm;
              }
            }
            var dd = ds_clntInfo.getCellData(0, "payDd");
            if (dd == "30") {
              dd = new Date(yyyy, mm, 0).getDate();
            }
            var strPayDate = yyyy + mm + dd;
            scwin.fn_setPayDate(strPayDate);
            acb_reqPayMthdCd.setValue(ds_clntInfo.getCellData(0, "payCntShtCd"));
            if (ds_clntInfo.getCellData(0, "payDtChgYn") == "Y") {
              $c.gus.cfEnableObj($p, ica_payDt, true);
            } else {
              $c.gus.cfEnableObj($p, ica_payDt, false);
            }
            ds_payInfo.set("interDataYn", "1");
            scwin.pay_cond = "T";
            //익익월
          } else if (ds_clntInfo.getCellData(0, "payCycCd") == "2") {
            var strDate = ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsIntendDt");
            var year = strDate.substr(0, 4);
            var month = strDate.substr(4, 2);
            var day = strDate.substr(6, 2);
            var date = new Date(year, month - 1, day);
            var yyyy = date.getFullYear().toString();
            var mm = "";
            if (mm == 0) {
              mm = (date.getMonth() + 3).toString();
            } else {
              mm = (date.getMonth() + 2).toString();
            }
            if (mm < 10) {
              mm = "0" + mm;
            } else if (mm > 12) {
              mm = (Number(mm) - 12).toString();
              yyyy = (Number(yyyy) + 1).toString();
              if (mm < 10) {
                mm = "0" + mm;
              }
            }
            var dd = ds_clntInfo.getCellData(0, "payDd");
            if (dd == "30") {
              dd = new Date(yyyy, mm, 0).getDate();
            }
            var strPayDate = yyyy + mm + dd;
            scwin.fn_setPayDate(strPayDate);
            acb_reqPayMthdCd.setValue(ds_clntInfo.getCellData(0, "payCntShtCd"));
            if (ds_clntInfo.getCellData(0, "payDtChgYn") == "Y") {
              $c.gus.cfEnableObj($p, ica_payDt, true);
            } else {
              $c.gus.cfEnableObj($p, ica_payDt, false);
            }
            ds_payInfo.set("interDataYn", "1");
            scwin.pay_cond = "T";
            //익익익월
          } else if (ds_clntInfo.getCellData(0, "payCycCd") == "4") {
            var strDate = ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsIntendDt");
            var year = strDate.substr(0, 4);
            var month = strDate.substr(4, 2);
            var day = strDate.substr(6, 2);
            var date = new Date(year, month - 1, day);
            var yyyy = date.getFullYear().toString();
            var mm = "";
            if (mm == 0) {
              mm = (date.getMonth() + 4).toString();
            } else {
              mm = (date.getMonth() + 3).toString();
            }
            if (mm < 10) {
              mm = "0" + mm;
            } else if (mm > 12) {
              mm = (Number(mm) - 12).toString();
              yyyy = (Number(yyyy) + 1).toString();
              if (mm < 10) {
                mm = "0" + mm;
              }
            }
            var dd = ds_clntInfo.getCellData(0, "payDd");
            if (dd == "30") {
              dd = new Date(yyyy, mm, 0).getDate();
            }
            var strPayDate = yyyy + mm + dd;
            scwin.fn_setPayDate(strPayDate);
            acb_reqPayMthdCd.setValue(ds_clntInfo.getCellData(0, "payCntShtCd"));
            if (ds_clntInfo.getCellData(0, "payDtChgYn") == "Y") {
              $c.gus.cfEnableObj($p, ica_payDt, true);
            } else {
              $c.gus.cfEnableObj($p, ica_payDt, false);
            }
            ds_payInfo.set("interDataYn", "1");
            scwin.pay_cond = "T";
            //익익익익월          	   
          } else if (ds_clntInfo.getCellData(0, "payCycCd") == "5") {
            var strDate = ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsIntendDt");
            var year = strDate.substr(0, 4);
            var month = strDate.substr(4, 2);
            var day = strDate.substr(6, 2);
            var date = new Date(year, month - 1, day);
            var yyyy = date.getFullYear().toString();
            var mm = "";
            if (mm == 0) {
              mm = (date.getMonth() + 5).toString();
            } else {
              mm = (date.getMonth() + 4).toString();
            }
            if (mm < 10) {
              mm = "0" + mm;
            } else if (mm > 12) {
              mm = (Number(mm) - 12).toString();
              yyyy = (Number(yyyy) + 1).toString();
              if (mm < 10) {
                mm = "0" + mm;
              }
            }
            var dd = ds_clntInfo.getCellData(0, "payDd");
            if (dd == "30") {
              dd = new Date(yyyy, mm, 0).getDate();
            }
            var strPayDate = yyyy + mm + dd;
            scwin.fn_setPayDate(strPayDate);
            acb_reqPayMthdCd.setValue(ds_clntInfo.getCellData(0, "payCntShtCd"));
            if (ds_clntInfo.getCellData(0, "payDtChgYn") == "Y") {
              $c.gus.cfEnableObj($p, ica_payDt, true);
            } else {
              $c.gus.cfEnableObj($p, ica_payDt, false);
            }
            ds_payInfo.set("interDataYn", 1);
            scwin.pay_cond = "T";
          } else if (ds_clntInfo.getCellData(0, "payCycCd") == "6") {
            if (ds_certiList.getCellData(ds_certiList.getRowPosition(), "etd") != "") {
              var strDate = ds_certiList.getCellData(ds_certiList.getRowPosition(), "etd");
              var year = strDate.substr(0, 4);
              var month = strDate.substr(4, 2) - 1;
              var day = strDate.substr(6, 2);
              var date = new Date(year, month, day);
              var payDate = new Date(Date.parse(date) + ds_clntInfo.getCellData(0, "payDd") * 1000 * 60 * 60 * 24); //after 5days

              var yyyy = payDate.getFullYear().toString();
              var mm = (payDate.getMonth() + 1).toString();
              if (mm < 10) {
                mm = "0" + mm;
              }
              var dd = payDate.getDate().toString();
              if (dd < 10) {
                dd = "0" + dd;
              }
              var strPayDate = yyyy + mm + dd;
              scwin.fn_setPayDate(strPayDate);
              acb_reqPayMthdCd.setValue(ds_clntInfo.getCellData(0, "payCntShtCd"));
              if (ds_clntInfo.getCellData(0, "payDtChgYn") == "Y") {
                $c.gus.cfEnableObj($p, ica_payDt, true);
              } else {
                $c.gus.cfEnableObj($p, ica_payDt, false);
              }
              ds_payInfo.set("interDataYn", "1");
              scwin.pay_cond = "T";
            }
          } else if (ds_clntInfo.getCellData(0, "payCycCd") == "7") {
            if (ds_certiList.getCellData(ds_certiList.getRowPosition(), "eta") != "") {
              var strDate = ds_certiList.getCellData(ds_certiList.getRowPosition(), "eta");
              var year = strDate.substr(0, 4);
              var month = strDate.substr(4, 2) - 1;
              var day = strDate.substr(6, 2);
              var date = new Date(year, month, day);
              var payDate = new Date(Date.parse(date) + ds_clntInfo.getCellData(0, "payDd") * 1000 * 60 * 60 * 24); //after 5days

              var yyyy = payDate.getFullYear().toString();
              var mm = (payDate.getMonth() + 1).toString();
              if (mm < 10) {
                mm = "0" + mm;
              }
              var dd = payDate.getDate().toString();
              if (dd < 10) {
                dd = "0" + dd;
              }
              var strPayDate = yyyy + mm + dd;
              scwin.fn_setPayDate(strPayDate);
              acb_reqPayMthdCd.setValue(ds_clntInfo.getCellData(0, "payCntShtCd"));
              if (ds_clntInfo.getCellData(0, "payDtChgYn") == "Y") {
                $c.gus.cfEnableObj($p, ica_payDt, true);
              } else {
                $c.gus.cfEnableObj($p, ica_payDt, false);
              }
              ds_payInfo.set("interDataYn", "1");
              scwin.pay_cond = "T";
            }
          } else {
            ica_payDt.setValue("");
            scwin.bfPayDt = "";
            acb_reqPayMthdCd.setValue("");
            await $c.win.alert($p, "해당 거래처에 등록된 지급조건이 없습니다.\n지급조건 등록 후 세금계산서 접수가 가능합니다.");
            scwin.pay_cond = "F";
          }
          var clntNo = ed_pchsClntNo.getValue();
          if (clntNo == "249544") {
            acb_reqPayMthdCd.setValue("40");
          }
        }
      }

      //strPayDate = '20250301';
      //scwin.fn_setPayDate(strPayDate); //임시
      //date = new Date(year, month, day);

      ds_searchimntClnt.set("grpCd", "IL061");
      ds_searchimntClnt.set("cd", ed_pchsClntNo.getValue());
      $c.sbm.execute($p, sbm_imntClnt);

      //근무구분 sbm_searchClntInfo 콜백에서 실행. sbm_imntClnt
      //ds_imntClnt.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=IL061&cd="+ed_pchsClntNo.getValue();
      //ds_imntClnt.Reset(); 
      //if(ds_imntClnt.getRowCount() > 0){
      //    $c.win.alert("매입 거래처 "+ ed_pchsClntNm.value+"["+ed_pchsClntNo.getValue()+"] 은(는) "+ds_imntClnt.getCellData(1,"cdDesc")+" 거래처 입니다.");		
      //    if (ds_certiList.getCellData(ds_certiList.getRowPosition(), "vat") == 0){
      //        if (ed_adjmDept.getValue()=="1G34" || ed_adjmDept.getValue()=="1G36"){
      //                acb_evidKndClsCd.setValue(ds_imntClnt.getCellData(1,"fltrCd1"));
      //                acb_taxnClsCd.setValue(ds_imntClnt.getCellData(1,"fltrCd2"));
      //            }
      //    }
      //}

      //ica_slipDt.focus();
    } else {
      scwin.clnt_chk = "T";
    }
  }
};
scwin.sbm_searchClntInfo_submiterror = function (e) {};
scwin.fn_setPayDate = function (strPayDate) {
  ds_nextdate.setJSON([]);
  ds_holiday.setJSON([]);
  ds_holiday.insertRow(0);
  ds_holiday.setCellData(0, "stdDt", strPayDate);
  $c.sbm.execute($p, sbm_holiday);

  //tr_holiday.Post();
};
scwin.sbm_holiday_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  if (ds_nextdate.getRowCount() > 0) {
    ica_payDt.setValue(ds_nextdate.getCellData(0, "nextDt"));
    //ed_bfPayDt.setValue(ds_nextdate.getCellData(0, "nextDt"));
    scwin.bfPayDt = ds_nextdate.getCellData(0, "nextDt");
  } else {
    ica_payDt.setValue("");
    //ed_bfPayDt.setValue("");
    scwin.bfPayDt = "";
  }
};
scwin.sbm_holiday_submiterror = function (e) {};
scwin.sbm_imntClnt_submitdone = async function (e) {
  if (ds_imntClnt.getRowCount() > 0) {
    await $c.win.alert($p, "매입 거래처 " + ed_pchsClntNm.getValue() + "[" + ed_pchsClntNo.getValue() + "] 은(는) " + ds_imntClnt.getCellData(0, "cdDesc") + " 거래처 입니다.");
    if (ds_certiList.getCellData(ds_certiList.getRowPosition(), "vat") == 0) {
      if (ed_adjmDept.getValue() == "1G34" || ed_adjmDept.getValue() == "1G36") {
        acb_evidKndClsCd.setValue(ds_imntClnt.getCellData(0, "fltrCd1"));
        acb_taxnClsCd.setValue(ds_imntClnt.getCellData(0, "fltrCd2"));
      }
    }
  }
  if (scwin.eventCheck) {
    if (scwin.ccChk == "1") {
      acb_evidKndClsCd.setValue("99");
      acb_taxnClsCd.setValue("03");
    }
    if (scwin.partner == "P") {
      acb_evidKndClsCd.setValue("20");
      acb_taxnClsCd.setValue("03");
    }
    if (scwin.inuChk == "1") {
      acb_evidKndClsCd.setValue("00");
    }
    scwin.f_CalcSumAmt();
    var selectedRow = ds_certiList.getRowPosition();
    if (scwin.colid == "chk") {
      //scwin.f_AcctCdCheck();

      if (ds_certiList.getCellData(selectedRow, "slipNo") != "") {
        if (ds_certiList.getCellData(selectedRow, "chk") == "T") {
          scwin.f_RetrievePurchase(selectedRow);
        } else {
          scwin.f_PchsDataClear();
        }
      } else {
        scwin.f_AcctCdCheck();
      }
    }

    // 세금계산서 접수 등록 상세 조회    
    if (scwin.colid == "slipNo") {
      if (ds_certiList.getCellData(selectedRow, "slipNo") != "") scwin.f_RetrievePurchaseEvidence(selectedRow);
    }

    // 거래영세서 출력
    if (scwin.colid == "recptYn" && ds_certiList.getCellData(selectedRow, "recptYn") == "Y") {
      scwin.f_PrintSlipNo(ds_certiList.getCellData(selectedRow, "slipNo"));
    }

    // 전자결재요청, 전도금요청 이동 처리
    if (ds_certiList.getCellData(selectedRow, "slipNo") == null || ds_certiList.getCellData(selectedRow, "slipNo") == "") {
      $c.gus.cfDisableObjects($p, [btn_Move1, btn_Move2]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_Move1, btn_Move2]);
    }
    scwin.eventCheck = false;
  }
};
scwin.sbm_imntClnt_submiterror = function (e) {};
scwin.sbm_saveRegistPurchaseEvidence_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_RetrieveCertiList();
};
scwin.sbm_saveRegistPurchaseEvidence_submiterror = function (e) {};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveCertiList();
};
scwin.btn_Move1_onclick = function (e) {
  scwin.f_moveToPage(1);
};
scwin.btn_Move2_onclick = function (e) {
  scwin.f_moveToPage(2);
};
scwin.btn_Print_onclick = function (e) {
  scwin.f_PrintSlipNo_v1();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_RegistPurchaseEvidence();
};

/*
scwin.udc_coCd_onblurCodeEvent = function (e) {
    scwin.f_PopUpCompanyInfo('T');
};

scwin.udc_coCd_onblurNameEvent = function (e) {
    scwin.f_PopUpCompanyInfo('T');
};

scwin.udc_coCd_onclickEvent = function (e) {
    scwin.f_PopUpCompanyInfo('F');
};
*/

scwin.udc_pchsClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 1);
};
scwin.udc_pchsClntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNm, ed_pchsClntNo, 1, false);
};
scwin.udc_pchsClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_pchsClntNo.getValue(), ed_pchsClntNm.getValue(), 'F', 'F');
};
scwin.udc_pchsDeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 2);
};
scwin.udc_pchsDeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptNm, ed_pchsDeptCd, 2, false);
};
scwin.udc_pchsDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_pchsDeptCd.getValue(), ed_pchsDeptNm.getValue(), 'F', 'T');
};
scwin.udc_admitPic_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_admitPic, ed_admitPicNm, 3);
};
scwin.udc_admitPic_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_admitPicNm, ed_admitPic, 3, false);
};
scwin.udc_admitPic_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_admitPic.getValue(), ed_admitPicNm.getValue(), 'F', 'T');
};
scwin.udc_adjmDept_onblurCodeEvent = function (e) {
  console.log('scwin.udc_adjmDept_onblurCodeEvent~~');
  scwin.f_chkOpenCommonPopUp(ed_adjmDept, ed_adjmDeptNm, 4);
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
  console.log('scwin.udc_adjmDept_onblurNameEvent~~');
  scwin.f_chkOpenCommonPopUp(ed_adjmDeptNm, ed_adjmDept, 4, false);
};
scwin.udc_adjmDept_onclickEvent = function (e) {
  console.log('scwin.udc_adjmDept_onclickEvent~~');
  scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), ed_adjmDeptNm.getValue(), 'F', 'F');
};
scwin.udc_drawEmpNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawEmpNo, ed_drawEmpNm, 5);
};
scwin.udc_drawEmpNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_drawEmpNm, ed_drawEmpNo, 5, false);
};
scwin.udc_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_drawEmpNo.getValue(), ed_drawEmpNm.getValue(), 'F', 'T');
};
scwin.udc_drawAcctDeptCd_onblurCodeEvent = function (e) {
  console.log('scwin.udc_drawAcctDeptCd_onblurCodeEvent~~~');
  scwin.f_chkOpenCommonPopUp(ed_drawAcctDeptCd, ed_drawAcctDeptNm, 6);
};
scwin.udc_drawAcctDeptCd_onblurNameEvent = function (e) {
  console.log('scwin.udc_drawAcctDeptCd_onblurNameEvent~~~');
  scwin.f_chkOpenCommonPopUp(ed_drawAcctDeptNm, ed_drawAcctDeptCd, 6, false);
};
scwin.udc_drawAcctDeptCd_onclickEvent = function (e) {
  console.log('scwin.udc_drawAcctDeptCd_onclickEvent~~~');
  scwin.f_openCommonPopUp(6, ed_drawAcctDeptCd.getValue(), ed_drawAcctDeptNm.getValue(), 'F', 'T');
};

/*
scwin.udc_coCdCallback = function (rtnList) {
    if (rtnList[0] == "N/A") return;

    if (ed_coCd.hidVal != rtnList[0]) {
        scwin.f_initObj();

        ed_coCd.setValue(rtnList[0]);	// 코드
        ed_coNm.setValue(rtnList[5]); // 회사명 
        ed_coCd.hidVal = rtnList[0];  // 히든값
        scwin.txtCoClsCd = rtnList[1];	// 회사구분    

    } else {
        ed_coCd.setValue("");
        ed_coNm.setValue("");
        ed_coCd.hidVal = "";
        scwin.txtCoClsCd = "";
    }
};
*/

scwin.udc_pchsClntNoCallback = function (rtnList) {
  //scwin.f_resultPopEd(ed_pchsClntNo, ed_pchsClntNm, rtnList);
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsClntNo, ed_pchsClntNm); // 매입거래처코드, 매입거래처명 
};
scwin.udc_pchsDeptCdCallback = function (rtnList) {
  //scwin.f_resultPopEd(ed_pchsDeptCd,ed_pchsDeptNm,rtnList);
  $c.gus.cfSetReturnValue($p, rtnList, ed_pchsDeptCd, ed_pchsDeptNm); // 매입거래처코드, 매입거래처명 
};
scwin.udc_admitPicCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_admitPic, ed_admitPicNm); // 사번, 성명 
};
scwin.udc_adjmDeptCallback = function (rtnList) {
  console.log("set~~~");
  //scwin.f_resultPopEd(ed_adjmDept,ed_adjmDeptNm,rtnList);
  $c.gus.cfSetReturnValue($p, rtnList, ed_adjmDept, ed_adjmDeptNm);
};
scwin.udc_drawEmpNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_drawEmpNo, ed_drawEmpNm); // 사원번호, 사원명
};
scwin.udc_drawAcctDeptCdCallback = function (rtnList) {
  //scwin.f_resultPopEd(ed_drawAcctDeptCd,ed_drawAcctDeptNm,rtnList);
  $c.gus.cfSetReturnValue($p, rtnList, ed_drawAcctDeptCd, ed_drawAcctDeptNm);
};
scwin.gr_certiList_onrowindexchange = function (rowIndex, oldRow) {};
scwin.gr_certiList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  console.log("gr_certiList_oncellclick~~~");
  /*     <!-- 그리드 클릭시-상세보기팝업 -->
      <script language=JavaScript for=gr_certiList event=OnClick(row,colid)>
  */
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
    //f_RetrieveClntInfo(row);  // 매입증빙(상호,사업자번호) 조회

    //국제 물류에서 넘어온 데이타 라면 기본 셋팅
    if (scwin.pchsClntNo != "") {
      ed_adjmDept.setValue(ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsDeptCd"));
      await scwin.f_chkOpenCommonPopUp(ed_adjmDept, ed_adjmDeptNm, 4);
      if (ds_certiList.getCellAllData(ds_certiList.getRowPosition(), "vat") == 0) {
        acb_evidKndClsCd.setValue("20");
        acb_taxnClsCd.setValue("02");
      } else {
        acb_evidKndClsCd.setValue("10");
        acb_taxnClsCd.setValue("01");
      }
      ed_summary.setValue(ds_certiList.getCellData(ds_certiList.getRowPosition(), "rmk")); //적요

      ica_spplyDt.setValue(ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsIntendDt")); //공급일자
    }
    scwin.colid = columnId;
    scwin.eventCheck = true;
    scwin.f_RetrieveClntInfo(ds_certiList.getRowPosition()); // 매입증빙(상호,사업자번호) 조회
  }
  if (cnt == 0) {
    scwin.f_CalcSumAmt();
    var selectedRow = ds_certiList.getRowPosition();
    if (columnId == "chk") {
      //scwin.f_AcctCdCheck();

      if (ds_certiList.getCellData(selectedRow, "slipNo") != "") {
        if (ds_certiList.getCellData(selectedRow, "chk") == "T") {
          scwin.f_RetrievePurchase(selectedRow);
        } else {
          scwin.f_PchsDataClear();
        }
      } else {
        scwin.f_AcctCdCheck();
      }
    }

    // 세금계산서 접수 등록 상세 조회    
    if (columnId == "slipNo") {
      if (ds_certiList.getCellData(selectedRow, "slipNo") != "") scwin.f_RetrievePurchaseEvidence(selectedRow);
    }

    // 거래영세서 출력
    if (columnId == "recptYn" && ds_certiList.getCellData(selectedRow, "recptYn") == "Y") {
      scwin.f_PrintSlipNo(ds_certiList.getCellData(selectedRow, "slipNo"));
    }

    // 전자결재요청, 전도금요청 이동 처리
    if (ds_certiList.getCellData(selectedRow, "slipNo") == null || ds_certiList.getCellData(selectedRow, "slipNo") == "") {
      $c.gus.cfDisableObjects($p, [btn_Move1, btn_Move2]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_Move1, btn_Move2]);
    }
  }
  if (columnId == "chk") {
    //이 구간은 as-is 는 없는 로직이고 slipNo가 있을 때만 타지만, 단위테스트 결함번호 T-7518의 요청으로 정산부서명을 무조건 조회하도록 추가함
    if (ds_certiList.getCellData(ds_certiList.getRowPosition(), "chk") == "T") {
      ed_adjmDept.setValue(ds_certiList.getCellData(ds_certiList.getRowPosition(), "pchsDeptCd"));
      if (ed_adjmDept.getValue() != "") {
        ed_adjmDeptNm.setValue("");
        //await scwin.f_openCommonPopUp(ed_adjmDept, ed_adjmDeptNm, 4,true);
        scwin.f_openCommonPopUp(4, ed_adjmDept.getValue(), '', 'T', 'T');

        // inObj가 코드명 필드일 경우 팝업
        scwin.f_chkOpenCommonPopUp(ed_adjmDept, ed_adjmDeptNm, 4);
        //scwin.udc_adjmDept_onblurCodeEvent({});
      }
    }
  }
};

//정산부서/명
scwin.f_setAdjmDeptValue = function (cd) {
  //ed_adjmDept.setValue
  //LUX 콤보
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["CMP"],
    compID: "sbx_selectbox2"
  }];

  //$c.data.setGauceUtil(codeOptions); 
};

//<!-- 증빙구분 선택시 과세수분, 전자세금계산서 처리 -->
scwin.acb_evidKndClsCd_onchange = function (info) {
  if (acb_evidKndClsCd.getValue() == "10") {
    // 증빙구분(세금계산서)
    acb_taxnClsCd.setValue("01"); // 과세구분(과세)
    rd_elecAuthTrgtYn.setValue("0"); // 전자세금계산서(미적용)
    $c.gus.cfEnableObjects($p, [rd_elecAuthTrgtYn]);
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
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.tbx_adjmClsCd_onclick = function (e) {
  scwin.f_Prepay();
};
scwin.f_upperStr = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.sbm_retrievePurchase_submitdone = function (e) {
  //console.log('scwin.sbm_retrievePurchase_submitdone~~~');
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (ds_purchase.getRowCount() > 0) {
    ed_adjmDept.setValue(ds_purchase.getCellData(0, "bilgLodeptCd"));
    ed_adjmDeptNm.setValue(ds_purchase.getCellData(0, "lobranNm"));
    ica_slipDt.setValue(ds_purchase.getCellData(0, "slipDt"));
    acb_evidKndClsCd.setValue(ds_purchase.getCellData(0, "evidClsCd"));
    acb_taxnClsCd.setValue(ds_purchase.getCellData(0, "taxnClsCd"));
    ed_summary.setValue(ds_purchase.getCellData(0, "summary"));
    ed_drawEmpNo.setValue(ds_purchase.getCellData(0, "regId"));
    ed_drawEmpNm.setValue(ds_purchase.getCellData(0, "userNm"));
    ed_drawAcctDeptCd.setValue(ds_purchase.getCellData(0, "drawAcctDeptCd"));
    ed_drawAcctDeptNm.setValue(ds_purchase.getCellData(0, "acctDeptNm"));
    ica_payDt.setValue(ds_purchase.getCellData(0, "payDt"));
    acb_reqPayMthdCd.setValue(ds_purchase.getCellData(0, "reqPayMthdCd"));
    tbx_nmCmpy.setValue(ds_purchase.getCellData(0, "clntNm"));
    tbx_busiNo.setValue(ds_purchase.getCellData(0, "crn"));
    ica_spplyDt.setValue(ds_purchase.getCellData(0, "spplyDt"));
    rd_elecAuthTrgtYn.setValue(ds_purchase.getCellData(0, "elecAuthTrgtYn"));
    tbx_spplyAmt.setValue($c.gus.cfInsertComma($p, ds_purchase.getCellData(0, "spplyAmt")));
    tbx_vat.setValue($c.gus.cfInsertComma($p, ds_purchase.getCellData(0, "vatAmt")));
    tbx_sumAmt.setValue($c.gus.cfInsertComma($p, ds_purchase.getCellData(0, "sumAmt")));
    tbx_suspenseAmt.setValue($c.gus.cfInsertComma($p, ds_purchase.getCellData(0, "suspenseAmt")));
  }
};
scwin.gr_certiList_onheaderclick = async function (headerId) {
  if (headerId == "column12") {
    if (gr_certiList.getHeaderValue(headerId) == "1") {
      await scwin.f_RetrieveClntInfo2(ed_pchsClntNo.getValue());
    } else {
      tbx_nmCmpy.setValue("");
      tbx_busiNo.setValue("");
      rd_elecAuthTrgtYn.setValue("0");
    }
    scwin.f_CalcSumAmt();
    scwin.f_AcctCdCheck();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_pchsClntNo',style:'',btnId:'btn_pchsClntNo',codeId:'ed_pchsClntNo',id:'udc_pchsClntNo',nameId:'ed_pchsClntNm','ev:onblurCodeEvent':'scwin.udc_pchsClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_pchsClntNo_onclickEvent',selectID:'retrieveClntList',refDataCollection:'ds_searchCertiList',code:'pchsClntNo',name:'pchsClntNm',maxlengthCode:'6',maxlengthName:'20',allowCharCode:'0-9',UpperFlagCode:'1',mandatoryCode:'true',validTitle:'매입거래처',objTypeCode:'Data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_pchsClntNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_pchsDeptCd',style:'',btnId:'btn_pchsDeptCd',codeId:'ed_pchsDeptCd',id:'udc_pchsDeptCd',nameId:'ed_pchsDeptNm','ev:onblurCodeEvent':'scwin.udc_pchsDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_pchsDeptCd_onclickEvent',refDataCollection:'ds_searchCertiList',selectID:'retrieveLobranInfo',code:'pchsDeptCd',name:'pchsDeptNm',maxlengthCode:'5',maxlengthName:'20',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',mandatoryCode:'true',objTypeCode:'Data',objTypeName:'Data',validTitle:'매입부서','ev:onviewchangeNameEvent':'scwin.udc_pchsDeptCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_pchsItemCd',search:'start',style:'width: 230px;',submenuSize:'auto',ref:'data:ds_searchCertiList.pchsItemCd',visibleRowNum:'25',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',objType:'data'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchCertiList',refEdDt:'pchsIntendDtEnd',refStDt:'pchsIntendDtSt',style:'',edFromId:'ica_pchsIntendDtSt',edToId:'ica_pchsIntendDtEnd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',titleFrom:'매입예정일자시작',titleTo:'매입예정일자종료'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'접수구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_recptYn',search:'start',style:'width: 85px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_searchCertiList.recptYn',objType:'Data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_certiNo',style:'width: 110px;',ref:'data:ds_searchCertiList.certiNo',maxlength:'14',objType:'Data',allowChar:'A-Za-z0-9','ev:onkeyup':'scwin.f_upperStr'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_admitPicNm',style:'',id:'udc_admitPic',codeId:'ed_admitPic',btnId:'btn_admitPic',nameId:'ed_admitPicNm','ev:onblurCodeEvent':'scwin.udc_admitPic_onblurCodeEvent','ev:onclickEvent':'scwin.udc_admitPic_onclickEvent',refDataCollection:'ds_searchCertiList',code:'admitPic',name:'admitPicNm',selectID:'retrieveEmpInfo',maxlengthCode:'6',maxlengthName:'20',validTitle:'승인담당자',allowCharCode:'0-9',objTypeCode:'Data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_admitPic_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_certiList',gridUpYn:'N',gridDownFn:'scwin.f_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_certiList',defaultCellHeight:'24',evenRowBackgroundColor:'#F8FFF8',id:'gr_certiList',oddEvenColorDisplay:'true',rowNumHeaderValue:'No',rowNumVisible:'false',rowNumWidth:'40',showSortableImage:'true',sortable:'true',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_certiList_oncellclick','ev:onrowindexchange':'scwin.gr_certiList_onrowindexchange',readOnly:'true','ev:onheaderclick':'scwin.gr_certiList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'checkbox',width:'50',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'거래명세서번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매입항목',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'매입예정일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매입부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'비고',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'공급가액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'외화금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'가지급금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'상계전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column53',value:'환종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'명세서출력',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'매입계산서역발행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'ETD',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'ETA',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'Onboard',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'실적일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'담당자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsIntendDt',inputType:'text',width:'120',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'pchsDeptCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'rmk',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'spplyAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'suspensePay',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'link',style:'',value:'',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setoffSlipNo',inputType:'link',style:'',value:'',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recptYn',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',class:'txt-black underline'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출력'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'elecAuthTrgtYn',inputType:'select',style:'',value:'',width:'150',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미적용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'etd',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eta',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ondt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',style:'',value:'',width:'100',class:'',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pic',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'spplyAmt\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'vat\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'float',expression:'sum(\'pchsAmtFcrc\')',displayFormat:'#,##0.00',excelCellType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'suspensePay\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',expression:'sum(\'sumAmt\')',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Move1',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Move1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전자결재요청'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Move2',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Move2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전도금요청'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매입 확정 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정산부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_adjmDept',style:'',btnId:'btn_adjmDept',codeId:'ed_adjmDept',id:'udc_adjmDept',nameId:'ed_adjmDeptNm','ev:onblurCodeEvent':'scwin.udc_adjmDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_adjmDept_onclickEvent',selectID:'retrieveLobranInfo',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'20',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',refDataCollection:'ds_purchaseCerti',code:'adjmDept',name:'adjmDeptNm',validTitle:'정산부서',objTypeCode:'Data',objTypeName:'Data','ev:onviewchangeNameEvent':'scwin.udc_adjmDept_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전표일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_slipDt',style:'',mandatory:'true',ref:'data:ds_purchaseCerti.slipDt',objType:'data',title:'전표일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'증빙구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_evidKndClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_purchaseCerti.evidKndClsCd','ev:onchange':'scwin.acb_evidKndClsCd_onchange',mandatory:'true',objType:'data',title:'증빙구분'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세율세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현금영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타-부가세없음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'00'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'과세구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_taxnClsCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',ref:'data:ds_purchaseCerti.taxnClsCd',objType:'data',title:'과세구분'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_summary',placeholder:'',style:'',mandatory:'true',ref:'data:ds_purchaseCerti.summary',objType:'Data',title:'적요'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_drawEmpNo',style:'',id:'udc_drawEmpNo',codeId:'ed_drawEmpNo',btnId:'btn_drawEmpNo',nameId:'ed_drawEmpNm','ev:onblurCodeEvent':'scwin.udc_drawEmpNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_drawEmpNo_onclickEvent',selectID:'retrieveEmpInfo',mandatoryCode:'true',maxlengthCode:'6',maxlengthName:'20',allowCharCode:'0-9',refDataCollection:'ds_purchaseCerti',code:'drawEmpNo',name:'drawEmpNm',validTitle:'작성자','ev:onviewchangeNameEvent':'scwin.udc_drawEmpNo_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_drawAcctDeptCd',style:'',btnId:'btn_drawAcctDeptCd',codeId:'ed_drawAcctDeptCd',id:'udc_drawAcctDeptCd',nameId:'ed_drawAcctDeptNm','ev:onblurCodeEvent':'scwin.udc_drawAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_drawAcctDeptCd_onclickEvent',selectID:'retrieveAcctDeptCdInfo',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'20',allowCharCode:'A-Za-z0-9',UpperFlagCode:'1',refDataCollection:'ds_purchaseCerti',code:'drawAcctDeptCd',name:'drawAcctDeptNm',validTitle:'작성부서','ev:onviewchangeNameEvent':'scwin.udc_drawAcctDeptCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급일/지급방법',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'flex_no',id:'ica_payDt',style:'',ref:'',objType:'data',title:'지급일'}},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_reqPayMthdCd',search:'start',style:'',submenuSize:'auto',ref:'',objType:'data',allOption:'',chooseOption:'true',chooseOptionLabel:'-선택-',title:'지급방법'},E:[{T:1,N:'w2:choices'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick',userAuth:'P',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'거래명세서 출력'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매입 증빙 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nmCmpy',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_busiNo',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_spplyDt',style:'',mandatory:'true',ref:'data:ds_purchaseCerti.spplyDt',objType:'data',title:'공급일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매입계산서역발행',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',style:'',id:'rd_elecAuthTrgtYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1',ref:'data:ds_purchaseCerti.elecAuthTrgtYn',mandatory:'true',objType:'Data',title:'매입계산서역발'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급가액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_spplyAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_vat',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'금액합계',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_sumAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'가지급금합계',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_suspenseAmt',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_adjmClsCd',label:'조회',ref:'',style:'txt-blue underline',userData2:'','ev:onclick':'scwin.tbx_adjmClsCd_onclick'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',serAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'세금계산서 접수'}]}]}]}]}]}]}]}]}]}]}]})