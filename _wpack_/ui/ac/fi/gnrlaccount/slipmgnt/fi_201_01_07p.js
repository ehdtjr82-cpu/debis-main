/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_07p.xml 32023 5cd6471ead417509166d4c336dd1bee167d48e30f8b8262147c2a63ada0c9562 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_txtcopycond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txtcopy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자등록번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'부가세사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchCrn',name:'가맹점사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNm',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDistYn',name:'계정배부여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNm',name:'카드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptCd',name:'정산귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptNm',name:'정산귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNm',name:'정산거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizMgntYn',name:'사업관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNoYn',name:'카드번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'가맹점번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'공제구분여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardKndCd',name:'카드종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt1',name:'기타금액1 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd1',name:'기타금액1 계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary1',name:'기타금액1 적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt2',name:'기타금액2 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd2',name:'기타금액2 계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary2',name:'기타금액2 적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidaccopy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'증빙별계정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txnNo',name:'거래번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_txtcopy_rtn',style:'',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'DEBIS전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnNo',name:'거래번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnContSeq',name:'거래내역순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd',name:'증빙구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsNm',name:'증빙구분명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deductClsCd',name:'공제구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNo',name:'관리거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNm',name:'관리거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn',name:'사업자등록번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crnNm',name:'사업자등록번호명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm',name:'계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnDt',name:'거래일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntNo',name:'관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntEmpNo',name:'관리사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntEmpNm',name:'관리사원명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntDt',name:'관리일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTermStDt',name:'관리기간시작일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTermEndDt',name:'관리기간종료일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'회계부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'회계부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatCrn',name:'부가세사업자등록번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'계산서금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmtFcrc',name:'공급금액_외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'frchCrn',name:'가맹점사업자등록번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'frchNm',name:'가맹점명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDistYn',name:'계정배부여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cardNo',name:'카드번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cardNm',name:'카드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmClsCd',name:'정산구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmAcctDeptCd',name:'정산귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmAcctDeptNm',name:'정산귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmClntNo',name:'정산거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmClntNm',name:'정산거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rltSeq',name:'관련사건 저장순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'termMgntYn',name:'기간관리여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empMgntYn',name:'사원관리여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dtMgntYn',name:'일자관리여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizMgntYn',name:'사업관리여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatYn',name:'부가세여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cardNoYn',name:'카드번호여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'frchNoYn',name:'가맹점번호여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deductClsYn',name:'공제구분여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'limitAmt',name:'한도금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcAmt',name:'할인금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cardKndCd',name:'카드종류코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'costClsCd',name:'비용구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctClsCd',name:'계정구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntMgntYn',name:'거래처관리여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchCd',name:'지점코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsItemCd',name:'매입항목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchNm',name:'지점명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsItemNm',name:'매입항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coCd',name:'회사코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coClsCd',name:'회사구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcAmt1',name:'기타금액1 금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcAcctCd1',name:'기타금액1 계정'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcSummary1',name:'기타금액1 적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcAmt2',name:'기타금액2 금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcAcctCd2',name:'기타금액2 계정'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etcSummary2',name:'기타금액2 적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNo',name:'요청거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNm',name:'요청거래처명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_evidaccopy_rtn',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'txnNo',name:'거래번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnContSeq',name:'거래내역순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidEchAcctSeq',name:'증빙별계정순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm',name:'계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'회계부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'회계부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amtFcrc',name:'외화금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rltSeq',name:'관련사건 저장순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'costClsCd',name:'비용구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctClsCd',name:'계정구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'branchCd',name:'지점코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsItemCd',name:'매입항목코드'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveTransactionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_txtcopycond","key":"IN_DS1"},{"id":"ds_txtcopy","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txtcopy","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_evidac',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveExpenseDistibutionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_search2',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_evidac_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_07p
// 이름     : 전표복사(경비전표)
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  : 
//            OUT :  ds_txtcopy => ds_txncontents
//                   ds_evidaccopy => ds_evidac
//
// 비고     : 복사버튼을 누르면 조회하면서 보냄 (ds_txtcopy, ds_evidaccopy)
//            복사종류 : -복사(2) 이면 경비전표입력에서 할인, 공급, 부가세 마이너스 처리
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            [호출당함]
//            회계/재무회계/일반회계/전표관리/경비전표입력(fi_201_01_01b.jsp)에서 호출
//==================================================================================================================
scwin.ds_parent = ""; // 부모전달값

scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 회사종류코드
scwin.txtCoCd = ""; // 회사코드(hidden)
scwin.txtCoClsCd = ""; // 회사종류코드(hidden) 

scwin.txt_slipKndCd = ""; // 전표종류코드
scwin.txt_delYn = ""; // 삭제여부

scwin.slipKndCd = "";
scwin.slipKndNm = "";
scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  //   var valueObject = window.dialogArguments;
  //   var slipKndCd = valueObject.slipKndCd;
  //   var slipKndNm = valueObject.slipKndNm;
  //   var vCoCd		= valueObject.pCoCd; //회사코드 
  //   var vCoClsCd  = valueObject.pCoClsCd;

  scwin.slipKndCd = $c.data.getParameter($p, "slipKndCd") == null ? "" : $c.data.getParameter($p, "slipKndCd");
  scwin.slipKndNm = $c.data.getParameter($p, "slipKndNm") == null ? "" : $c.data.getParameter($p, "slipKndNm");
  scwin.vCoCd = $c.data.getParameter($p, "vCoCd") == null ? "" : $c.data.getParameter($p, "vCoCd"); //회사코드
  scwin.vCoClsCd = $c.data.getParameter($p, "vCoClsCd") == null ? "" : $c.data.getParameter($p, "vCoClsCd");
  console.log("▶ slipKndCd : " + scwin.slipKndCd + "  slipKndNm : " + scwin.slipKndNm);
  console.log("▶ vCoCd     : " + scwin.vCoCd + "  vCoClsCd : " + scwin.vCoClsCd);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    scwin.f_setSubsidiaryCompanyInfo();
    ed_slipNo.focus;

    // lc_slipKndNm.BindColVal = slipKndCd;
    // sp_title.innerHTML = "전표복사(" + slipKndNm + ")";

    // 팝업이름 변경
    var titleNm = "전표복사(" + scwin.slipKndNm + ")";
    $c.data.setPopupTitle($p, titleNm);
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 자회사 매입/경비 전표 인 경우  화면 설정 
//-------------------------------------------------------------------------
scwin.f_setSubsidiaryCompanyInfo = function () {
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사인 경우에만  회사코드   check  > 0
    //       lc_slipKndNm.CBData = "K01^자회사 경비전표,K03^자회사 매입전표";

    lc_slipKndNm.removeAll();
    lc_slipKndNm.addItem("K01", "자회사 경비전표", 0, true); // fn(value: string, label: string, index: number, refresh: bool)
    lc_slipKndNm.addItem("K03", "자회사 매입전표", 1, true); // 
  }

  /*
      // KYU_TEST : 전표종류 콤보 변경
      lc_slipKndNm.removeAll();
      lc_slipKndNm.addItem("K01", "자회사 경비전표", 0, true );  // fn(value: string, label: string, index: number, refresh: bool)
      lc_slipKndNm.addItem("K03", "자회사 매입전표", 1, true );  // 
      lc_slipKndNm.setValue("K03");
      console.log(" 전표종류 콤보 : "+ lc_slipKndNm.getValue());
  */
};

// @@ ====== 이벤트 ============================================================================ //
//-------------------------------------------------------------------------
// 복사
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("====== f_Save (복사 버튼 클릭)==================");

  // 필수 입력사항 체크
  //if (!cfCheckMandatory())
  //    return;
  // 10자리 셋팅

  // ed_slipNo.text = cfGetLeftPad(ed_slipNo.text.trim(),10,"0");

  // if (!$c.gus.cfValidate(ed_slipNo)) return false;

  let rtn1 = $c.gus.cfValidate($p, ed_slipNo);
  if (!rtn1) return;

  // 전표번호:yes:length=10"
  if (ed_slipNo.getValue() == "") {
    console.log("111");
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "전표번호"));
    return;
  }
  ed_slipNo.setValue($c.gus.cfGetLeftPad($p, ed_slipNo.getValue().trim(), 10, "0"));

  // if(confirm("복사하시겠습니까?")==true){
  let rtn2 = await $c.win.confirm($p, "복사하시겠습니까?");
  if (rtn2) {
    // 조회
    scwin.f_Retrieve();
  }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Retrieve ==================");

  // ds_txtcopycond.NameValue( 1,  "slipKndCd" ) = lc_slipKndNm.BindColVal;
  // ds_txtcopycond.NameValue( 1,  "slipNo" ) = ed_slipNo.text.trim();
  // ds_txtcopycond.NameValue( 1,  "coCd" ) 	 = vCoCd;
  // ds_txtcopycond.NameValue( 1,  "coClsCd" ) = vCoClsCd;

  // ds_txtcopycond.UseChangeInfo = "false";	 

  ds_txtcopycond.set("slipKndCd", lc_slipKndNm.getValue());
  ds_txtcopycond.set("slipNo", ed_slipNo.getValue().trim());
  ds_txtcopycond.set("coCd", scwin.vCoCd);
  ds_txtcopycond.set("coClsCd", scwin.vCoClsCd);

  // tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 submitdone (ds_txtcopy)
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone (ds_txtcopy) ==================");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  /*
  language=JavaScript for=ds_txtcopy event=OnLoadCompleted(rowCnt)>
      if( rowCnt == 0 ){
  		alert("조회된 데이터가 없습니다.");
  		ed_slipNo.text="";
  	}else{
  		ds_evidaccopy.DataID = "/ac.fi.gnrlaccount.slipmgnt.RetrieveExpenseDistibutionContentsCMD.do?txnNo="+ds_txtcopy.NameValue(ds_txtcopy.RowPosition, "txnNo");
      	ds_evidaccopy.Reset();             
  	}
  */
  var rowCnt = ds_txtcopy.getTotalRow();
  console.log("   ds_txtcopy.getTotalRow : " + ds_txtcopy.getTotalRow());
  var dc = ds_txtcopy.getAllArray();
  console.log("  *** ds_txtcopy : " + JSON.stringify(dc));
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    ed_slipNo.setValue("");
  } else {
    // 증빙배부
    // ds_evidaccopy.DataID = "/ac.fi.gnrlaccount.slipmgnt.RetrieveExpenseDistibutionContentsCMD.do?txnNo="+ds_txtcopy.NameValue(ds_txtcopy.RowPosition, "txnNo");
    // ds_evidaccopy.Reset();

    // 신규 개발
    ds_txtcopy.setRowPosition(0);
    console.log("   --- 증빙배부 조회   ds_txtcopy.getRowPosition :" + ds_txtcopy.getRowPosition());
    console.log("   --- ds_txtcopy.getCellData(txnNo) [" + ds_txtcopy.getCellData(ds_txtcopy.getRowPosition(), "txnNo") + "]");
    ds_search2.set("txnNo", ds_txtcopy.getCellData(ds_txtcopy.getRowPosition(), "txnNo"));
    var dcJSON = ds_search2.getJSON();
    console.log("  *** ds_search2 : " + JSON.stringify(dcJSON));
    $c.sbm.execute($p, sbm_retrieve_evidac);
  }
};

//-------------------------------------------------------------------------
// 증빙배부 조회 submitdone (ds_evidaccopy)
//-------------------------------------------------------------------------
scwin.sbm_retrieve_evidac_submitdone = async function (e) {
  console.log("▷▷ sbm_retrieve_evidac_submitdone (증빙배부 조회 submitdone) (ds_evidaccopy) ==================");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  /*
   language=JavaScript for=ds_evidaccopy event=OnLoadCompleted(rowCnt)>
      if(rowCnt > 0){
          alert("증빙배부된 전표입니다.");
      }
  
      var arrRtnVal = new Array();
  
      // 전표종류 세팅
      arrRtnVal.slipKndNm = lc_slipKndNm.BindColVal;
  
  
      arrRtnVal.copyKind = lc_copyKind.BindColVal;
      arrRtnVal.txtcopy = ds_txtcopy.ExportData(1,ds_txtcopy.CountRow,false);
  
      arrRtnVal.evidaccopy = ds_evidaccopy.ExportData(1,ds_evidaccopy.CountRow,true);
  
      window.returnValue = arrRtnVal ;
      window.close();
  */

  if (e.responseJSON.GAUCE) {
    ds_evidaccopy.setJSON(e.responseJSON.GAUCE);
  }
  var rowCnt = ds_evidaccopy.getTotalRow();
  console.log("   ds_evidaccopy.getTotalRow : " + ds_evidaccopy.getTotalRow());
  var dc = ds_evidaccopy.getAllArray();
  console.log("  *** ds_evidaccopy : " + JSON.stringify(dc));
  if (rowCnt > 0) {
    await $c.win.alert($p, "증빙배부된 전표입니다.");
  }
  var arrRtnVal = new Array();

  // 전표종류 세팅
  //    arrRtnVal.slipKndNm = lc_slipKndNm.BindColVal;
  arrRtnVal.slipKndNm = lc_slipKndNm.getValue();
  console.log("▲ slipKndNm [" + arrRtnVal.slipKndNm + "]");

  // arrRtnVal.copyKind = lc_copyKind.BindColVal;
  arrRtnVal.copyKind = lc_copyKind.getValue();
  console.log("▲ copyKind [" + arrRtnVal.copyKind + "]");

  // 경비전표조회(경비전표복사) 내역 리턴
  // ds_txtcopy 전체를 보내는 것이기에 그냥 리턴값에 복사 (중간 ds 복사 단계 제외)
  // arrRtnVal.txtcopy = ds_txtcopy.ExportData(1,ds_txtcopy.CountRow,false);  // false 의 의미는?

  // txtcopy 구성
  // ds_txtcopy_rtn.removeAll();
  // ds_txtcopy_rtn.insertRow();
  // ds_txtcopy_rtn.setRowPosition(0);
  // var dcJSON = ds_txtcopy.getRowData(0);
  // ds_txtcopy_rtn.setJSON(dcJSON, true);  // append

  // JSON 값으로 보냄
  arrRtnVal.txtcopy = ds_txtcopy.getAllJSON();
  console.log("▲ txtcopy [" + JSON.stringify(arrRtnVal.txtcopy) + "]");

  // 경비분배조회 내역 리턴
  // ds_evidaccopy 전체를 보내는 것이기에 그냥 리턴값에 복사 (중간 ds 복사 단계 제외)
  // arrRtnVal.evidaccopy = ds_evidaccopy.ExportData(1,ds_evidaccopy.CountRow,true);  // true 의 의미는?

  // ds_evidaccopy_rtn 구성
  // ds_evidaccopy_rtn.removeAll();
  // ds_evidaccopy_rtn.insertRow();
  // ds_evidaccopy_rtn.setRowPosition(0);
  // var dcJSON = ds_evidcacopy.getRowData(0);
  // ds_evidaccopy_rtn.setJSON(dcJSON, true);  // append

  // JSON 값으로 보냄
  arrRtnVal.evidaccopy = ds_evidaccopy.getAllJSON();
  console.log("▲ evidaccopy [" + JSON.stringify(arrRtnVal.evidaccopy) + "]");

  // window.returnValue = arrRtnVal ;

  // console.log("arrRtnVal ["+ arrRtnVal +"]");
  // await $c.win.alert("리턴 txtcopy\n["+ JSON.stringify(arrRtnVal.txtcopy) +"]");
  // await $c.win.alert("리턴 evidaccopy\n["+ JSON.stringify(arrRtnVal.evidaccopy) +"]");

  let rt = [arrRtnVal.txtcopy, arrRtnVal.evidaccopy, arrRtnVal.slipKndNm // 전표종류명
  , arrRtnVal.copyKind]; // 카피종류

  //window.close();
  $c.win.closePopup($p, rt);
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.bnt_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndNm',style:'',submenuSize:'auto',ref:'',objType:'data',mandatory:'true',title:'전표종류'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'렌터카변동비경비전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표-고속변동비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'J28'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사 경비전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사 매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비전표-택배변동비'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S83'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'w150',id:'ed_slipNo',placeholder:'',style:'',objType:'data',mandatory:'true',maxlength:'10',allowChar:'0-9',title:'전표번호'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'복사형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_copyKind',style:'',submenuSize:'auto',objType:'data',ref:'',title:'복사형태'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'+복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'-복사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn ',id:'bnt_close',label:'닫기',style:'','ev:onclick':'scwin.bnt_close_onclick'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'복사',style:'',objType:'bSave',userAuth:'R','ev:onclick':'scwin.f_Save'}}]}]}]}]}]})