/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.xml 48855 1932ed74e7e9545e9226ae48d921767a044bd5cb23e71c9f14077cea4ccf8168 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_slip',keepDataType:'true',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'수정가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'자동전표여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipCreatDt',name:'역분개전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsum',name:'차변합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csum',name:'대변합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptCd',name:'회계처리귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'회계처리귀속부서명',dataType:'text',nullYN:'',valueType:''}},{T:1,N:'w2:column',A:{id:'postNo',name:'회계처리번호',dataType:'number',defaultValue:'0',nullYN:''}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtCnt',name:'회계처리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hpostDt',name:'H회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecStmtTrgtYn',name:'전자결재대상여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'허가사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecApprvInfoYn',name:'전자결재자정보여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'자산이력승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'취소여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcontents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'row',name:'ROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정과목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctCd',name:'상위계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctNm',name:'상위계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damtSum',name:'차변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'camtSum',name:'대변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dfcrcSum',name:'차변(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cfcrcSum',name:'대변(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postNo',name:'회계처리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tax',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsSellCls',name:'매입매출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsNm',name:'공제구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplierCrn',name:'공급자사업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplierCrnNm',name:'공급자사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세율구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsNm',name:'영세율구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDt',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsEvidNo',name:'매입증빙번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseBfPchsEvidNo',name:'역분개전매입증빙번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'수정가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'부가세사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctNm',name:'상대계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'신고제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hapgye',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsCd',name:'사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWkPlaceNo',name:'단위사업장적용번호(종사업장번호)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subWkPlaceNm',name:'상호명(법인명)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroElecCnt',name:'e세로전자세금계산서건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxCnt',name:'종이세금계산서건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroTaxCnt',name:'E세로세금계산서건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperCnt',name:'종이계산서건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxRpaCnt',name:'종이세금계산서(RPA)건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcCnt',name:'기타건수',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptNm',name:'작성귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confNo',name:'확인번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_result'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptNm',name:'작성귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confNo',name:'확인번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveJournalizeSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_slip","key":"OUT_DS1"},{"id":"ds_slipcontents","key":"OUT_DS2"},{"id":"ds_tax","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_slip","key":"OUT_DS1"},{"id":"ds_slipcontents","key":"OUT_DS2"},{"id":"ds_tax","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'로딩중...','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchCommon',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchCommon_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_04_02p
// 이름     : 전표내역조회
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT : 
//
// 비고     : 
//
// 레포트   : /ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr (회계전표)
// 업로드   :
// 다운로드 : 
// 호출     : async - await $c.gus.cfShowSlipInfo( slipNo )
//        
//            회계/재무회계/고정자산/자산이력 승인/승인취소(fi_302_02_01b)에서 호출
//            회계/재무회계/일반회계/원장관리/총계정원장조회(fi_203_01_07b)에서 호출
//            회계/재무회계/일반회계/원장관리/총계정외화원장조회(fi_203_01_07b_01)에서 호출
//            회계/재무회계/일반회계/결산관리/결산조정전표조회실물화전표 삭제(fi_204_02_02p)에서 호출
//            회계/재무회계/일반회계/결산관리/월결산월결산 전표 리스트(fi_204_03_01p)에서 호출
//            회계/재무회계/일반회계/전표관리/전표조회수정삭제(fi_201_04_01b)에서 호출
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호
scwin.isSubCompany = "1"; // 자회사여부

scwin.slipNo = "";
scwin.checkCloseBtn;
scwin.checkCloseBtn2;

// 2025-10-01 : 기존에 보이지 않는 체크박스 (보고서용 미리보기,출력) 전역변수 선언
scwin.chb_previewCheck = 1;
scwin.chb_printCheck = 1;
scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  //	scwin.slipNo = request.getParameter("slipNo") == null ? ""	: request.getParameter("slipNo");
  //	scwin.checkCloseBtn = request.getParameter("checkCloseBtn") == null ? ""	: request.getParameter("checkCloseBtn");

  scwin.slipNo = $c.data.getParameter($p, "slipNo") == null ? "" : $c.data.getParameter($p, "slipNo");
  scwin.checkCloseBtn = $c.data.getParameter($p, "checkCloseBtn") == null ? "" : $c.data.getParameter($p, "checkCloseBtn");
  console.log(" 파라미터  slipNo [" + scwin.slipNo + "]  checkCloseBtn [" + scwin.checkCloseBtn + "]");

  //	LoginDTO login = LoginUtil.getLoginDTO( request ) ; // 로그인 정보를 가져온다.
  //	String privAdmin = login.getPrivAdmin() ;// ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님    
  //	String empNo = login.getUserId(); // 사용자 아이디

  scwin.checkCloseBtn2 = true;

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd; // 동일
  scwin.userId = userId;
  scwin.privAdmin = privAdmin;
  scwin.empNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd);
  console.log("▶▶ userId     : " + scwin.userId + "   empNo : " + scwin.empNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   privAdmin : " + scwin.privAdmin);
  console.log("▶▶ memJson : " + JSON.stringify(memJson));
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완.
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    //  	chb_previewCheck.style.display = "none";  
    //  	    scwin.f_Header();
    dma_result.set("slipNo", scwin.slipNo); // 결과용
    ds_search.set("slipNo", scwin.slipNo);
    scwin.f_Retrieve();
    //      scwin.cfDisableBtn([bSave]);	 // 버튼 없음
    //	    cfDisableKeyData();
    $c.gus.cfDisableKeyData;
    scwin.f_empNo();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // 전표번호

  // var SLIP_HEADER = "slipNo:STRING(10)";	// 전표번호    							 

  // ds_search.SetDataHeader(SLIP_HEADER);
  // ds_search.AddRow();
};

//-------------------------------------------------------------------------
// 공통코드 조회 (증빙관리권한 조회 - 세무조사 id 여부)
//-------------------------------------------------------------------------
scwin.f_empNo = function () {
  console.log("=== f_empNo (증빙관리권한 조회 - 세무조사 id 여부)");

  // 데이타셋 초기화 필요
  ds_commonCode.setEmptyValue();
  ds_empNo.removeAll();

  /*
     현재 쿼리에서 건이 있으면
       view1 (작성부서, 작성자, 전표종류), ozprint (전표인쇄 버튼) display = "none" 처리
     건이 없으면 display = "block" 처리
  */

  var grp_cd = "FI624"; // FI624 (증빙관리권한)
  //	var pCode = '<%=empNo%>' ;
  var pCode = scwin.empNo;

  // SELECT 절 
  var param1 = "CD  as COL1 , CD_NM  as COL2 , ''  as COL3 , ''  as COL4 , ''  as COL5 , ''  as COL6 , ''  as COL7 , ''  as COL8 , ''  as COL9 , ''  as COL10";

  // 대상테이블 	
  var param2 = " TB_ZZ002 ";

  // 조건절
  var param3 = " AND GRP_CD = '" + grp_cd + "' AND USE_YN = '1' AND CD_NM = '" + pCode + "' ";
  //   " AND GRP_CD = '"+grp_cd+"'" 
  // + " AND USE_YN = '1' "
  // //+ " AND CD_NM LIKE '"+pCode+"' || '%'"
  //  + " AND CD_NM = '"+pCode+"' " 
  // ;

  var param4 = "CD";

  //	ds_empNo.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3 + "&param4=" + param4;
  //	ds_empNo.Reset();

  // FI624 (증빙관리권한) - 01: user01, 02: user31, 03: user32, 04: user33, 05: user34, 06: user35, 07: user36, 08: user37
  // 2025-10-02 : 세무조사시에만 사용하는 계정으로 , 세무조사 인원이 조회시 보이지 않아야 하는 부분으로 구현 필요

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
  ds_commonCode.setJSON(strParam);
  $c.sbm.execute($p, sbm_searchCommon);
};

//-------------------------------------------------------------------------
// 증빙관리권한 - 세무조사용id 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_searchCommon_submitdone = function (e) {
  console.log("▷ sbm_searchCommon_submitdone (증빙관리권한 - 세무조사용id 조회)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_empNo.setJSON(e.responseJSON.GAUCE);
  }
  var empCnt = ds_empNo.getTotalRow();
  console.log("==== empCnt (세무조사용id 건수 - FI624) : " + empCnt);

  // KYU_TEST (세무조사 로그인 환경)
  //    empCnt = 1;

  if (empCnt > 0) {
    //  		view1.style.display="none"	;
    //  		ozprint.style.display="none"	;

    console.log("---- 세무조사 사용자 로그인 : ----------------");
    view1.hide();
    btn_ozprint.hide();
  } else {
    //		view1.style.display="block"	;
    //		ozprint.style.display="block"	;

    console.log("---- 일반 사용자 로그인 : ----------------");
    view1.show("");
    btn_ozprint.show("");
  }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_retrieve ==================");
  if (typeof valueObject != "undefined" && valueObject != null) {
    var slipNo = valueObject.slipNo;
    if (slipNo != null && slipNo != "") {
      //ds_search.NameString(1,"slipNo") = slipNo;
      slipNo = ds_search.get("slipNo");
    }
  } else {
    ed_slipNo.value = "<%=slipNo%>";
    //ds_search.NameString(1,"slipNo") = txt_slipNo.value;
    ed_slipNo.setValue(ds_search.get("slipNo"));
  }

  //if(ds_search.NameString(1,"slipNo") == "")
  if (ds_search.get("slipNo") == "") {
    alert("전표번호가 없습니다.");
    return;
  }

  //	tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveJournalizeSlipCMD.do";
  //    tr_search.post();

  var dcJSON = ds_search.getJSON();
  console.log(" ==== ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// sbm_search_submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone ==================");

  // 트랜잭션 오류 처리
  // language="JavaScript" for="tr_search" event="OnFail()">
  //cfShowError(this);
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // 총건수 부여
  console.log(" ===== ed_totalRows : " + ds_slipcontents.getRowCount());
  ed_totalRows.setValue(ds_slipcontents.getRowCount());

  // language=JavaScript for=ds_slip event=OnLoadCompleted(rowCnt)>
  var rowCnt = ds_slip.getRowCount();
  console.log("  rowCnt (ds_slip) : " + rowCnt);
  if (rowCnt > 0) {
    //if(ds_slip.NameValue(rowCnt,"delYn")=="1"){
    var temp_delYn = ds_slip.getCellData(rowCnt - 1, "delYn");
    console.log("  temp_delYn [" + temp_delYn + "]");
    if (temp_delYn == "1") {
      await $c.gus.cfAlertMsg($p, "삭제된 전표입니다");
      window.returnValue = null;
      window.close();
    }

    // 확정번호 세팅 (회계처리일자-회계처리부서코드-회계처리번호)
    // 웹스퀘어 0 부터 시작
    rowPos = 0;
    console.log("  회계처리번호 (postNo) [" + ds_slip.getCellData(rowPos, "postNo") + "]  Number [" + Number(ds_slip.getCellData(rowCnt, "postNo")) + "] : 널, 0 이 아니면 확정번호 부여됨 !!");

    // KYU_TEST : 확정번호 세팅
    // 2025-11-25 : AsIs 에서 Decimal 0 로 넘어오면 null 로 인식하도록 처리  keepDataType="true" 
    // 2026-02-02 :           Decimal 1 로 넘어왔을 때, getCellData 는 1 로 나오지만 숫자변환 하면 0 으로 표시

    // if(ds_slip.NameValue(rowCnt,"postNo")!=""){
    if (
    // ( ds_slip.getCellData(rowCnt, "postNo") != "" ) ||
    ds_slip.getCellData(rowCnt, "postNo") != null && Number(ds_slip.getCellData(rowCnt, "postNo")) != null && parseInt(ds_slip.getCellData(rowPos, "postNo")) !== 0) {
      //txt_postNo.value = cfGetFormatStr(ds_slip.NameValue(rowCnt,"postDt"),"####/##/##")+"-"+ds_slip.NameValue(rowCnt,"postAcctDeptCd")+"-"+ds_slip.NameValue(rowCnt,"postNo");

      // KYU_TEST 김팔수 부장님이 고치고 나면 풀어낼 것!
      var confNo = $c.gus.cfGetFormatStr($p, ds_slip.getCellData(rowPos, "postDt"), "####/##/##") + "-" + ds_slip.getCellData(rowPos, "postAcctDeptCd") + "-" + ds_slip.getCellData(rowPos, "postNo");

      //ed_confNo.setValue(confNo);
      console.log("    -- -- 확정번호 : " + confNo);
      dma_result.set("confNo", confNo);

      // 2025-10-02 : 추가 코딩 - ds_slip 에 반영
      //ds_slip.setCellData( rowPos, "confNo", confNo );
      // data list 에 반영할 경우, 포지션을 지정해줘야 확인번호에 값이 적용됨
      //ds_slip.setRowPosition(rowPos);
    }

    // 바인딩 처리
    /*
      <param name="BindInfo" value='
        <C> Col=slipNo                    Ctrl=txt_slipNo                  Param=value        </C>
        <C> Col=slipDt                    Ctrl=ed_slipDt                   Param=text        </C>
        <C> Col=drawAcctDeptNm            Ctrl=txt_drawAcctDeptNm          Param=value        </C>
        <C> Col=drawEmpNm                 Ctrl=txt_drawEmpNm               Param=value        </C>
        <C> Col=slipKndNm                 Ctrl=txt_slipKndNm               Param=value        </C>
    '>
    */
    dma_result.set("slipDt", ds_slip.getCellData(rowPos, "slipDt"));
    dma_result.set("drawAcctDeptNm", ds_slip.getCellData(rowPos, "drawAcctDeptNm"));
    dma_result.set("drawEmpNm", ds_slip.getCellData(rowPos, "drawEmpNm"));
    dma_result.set("slipKndNm", ds_slip.getCellData(rowPos, "slipKndNm"));
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

scwin.rowposition = function () {
  // DataList 객체 가져오기
  var dataList = $c.util.getComponent($p, "ds_slip");

  // 특정 조건에 맞는 행의 인덱스 가져오기
  var matchedRows = dataList.getMatchedIndex("delYn", "1");

  // 조건에 맞는 행이 있는 경우 처리
  if (matchedRows.length > 0) {
    console.log("삭제된 전표가 존재합니다.");
    matchedRows.forEach(function (rowIndex) {
      console.log("삭제된 전표 행 인덱스: " + rowIndex);
    });
  } else {
    console.log("삭제된 전표가 없습니다.");
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭
//-------------------------------------------------------------------------
scwin.gr_slipcontents_oncellclick = function (rowIndex, columnIndex, columnId) {
  //	if (rowIndex != 0) {  // 웹스퀘어에서는 불필요
  scwin.f_Detail(rowIndex);
  //	}
};

// @@ ====== 이벤트 - 버튼 ===================================================================== //

//-------------------------------------------------------------------------
// 증빙내역 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_pu_evid_onclick = function (e) {
  var rowIndex = ds_slipcontents.getRowPosition();
  scwin.f_Evidence(rowIndex);
};

//-------------------------------------------------------------------------
// 상세조회 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_pu_detail_onclick = function (e) {
  var rowIndex = ds_slipcontents.getRowPosition();
  console.log("  btn_pu_detail_onclick - rowIndex : " + rowIndex);
  scwin.f_Detail(rowIndex);
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 전표상세내역조회 팝업 로딩
//-------------------------------------------------------------------------
scwin.f_Detail = async function (row) {
  console.log("^^^^^ f_Detail (전문상세내역 오픈)  row : " + row);

  // var valueObject = new Object();
  // valueObject.slipNo = txt_slipNo.value.trim();
  // valueObject.slipSeq = ds_slipcontents.NameValue(row,"slipSeq");
  // valueObject.postYn = ds_slip.NameValue(1,"postYn");
  // valueObject.modPsblYn = ds_slip.NameValue(1,"modPsblYn");
  // valueObject.delYn = ds_slip.NameValue(1,"delYn");

  var data = {
    slipNo: ed_slipNo.getValue() // 전표번호
    ,

    slipSeq: ds_slipcontents.getCellData(row, "slipSeq") // 전표순번
    ,

    postYn: ds_slip.getCellData(0, "postYn") // 회계처리여부 (1: 회계처리됨, 0: 회계처리안됨)
    ,

    modPsblYn: ds_slip.getCellData(0, "modPsblYn") // 수정가능여부 (1: 수정가능, 0: 수정불가능)
    ,

    delYn: ds_slip.getCellData(0, "delYn") // 삭제여부 (1: 삭제, 0: 미삭제)
    //, callbackFn: scwin.callBackFunc
  };
  console.log("^^^^^  before 04_03 (전표상세) data " + JSON.stringify(data));
  var opts = {
    id: "smpPop",
    popupName: "전표상세내역조회" // 전표상세내역조회
    ,

    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 350,
    title: true
  };

  //상세화면 호출 
  //    var result = window.showModalDialog("fi_201_04_03p.jsp", valueObject, 
  //                 "dialogWidth:860px; dialogHeight:300px; status:no; scroll:no");
  let rtnList = await $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.xml", opts, data);

  //다시 조회함 
  //scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 증빙내역 팝업
//-------------------------------------------------------------------------
scwin.f_Evidence = function (row) {
  //    if(row > 0) {
  /*    
          var valueObject = new Object();
          // valueObject.slipNo = ds_slipcontents.NameValue(row, "slipNo");
          valueObject.postYn = 1;
          //valueObject.modPsblYn = ds_slipcontents.NameValue(row,"modPsblYn");
  */
  //증빙내역 호출 
  let data = {
    slipNo: ed_slipNo.getValue() // 전표번호
    ,

    postYn: 1 // 회계처리 (1: 완료)
    //            cntr_no : ed_cntrNo.getValue()
    /*
                valueObject.slipNo : ds_slipcontents.getCellData("slipNo", row) ,
                valueObject.postYn : 1
     */
  };
  console.log("^^^^^  before 04_04 (증빙내역) data [" + JSON.stringify(data) + "]");
  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_04p.xml";
  let opts = {
    id: "smpPop",
    popupName: "증빙내역조회",
    modal: true,
    type: "browserPopup",
    width: 860,
    height: 600,
    title: true
  };
  $c.win.openPopup($p, win_url, opts, data);

  //    var result = window.showModalDialog("fi_201_04_04p.jsp", valueObject, 
  //                 "dialogWidth:860px; dialogHeight:600px; status:no; scroll:no");

  //다시 조회함 
  //f_Retrieve();

  // } else {
  // 	//cfAlertMsg(MSG_CM_ERR_056,Array("Row"));
  //     $c.win.alert($c.data.getMessage(MSG_CM_ERR_056,row));
  // }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
// scwin.f_GridToExcel = async function() {
scwin.f_Excel = async function () {
  // f_GridToExcel(gr_slipcontents,'전표내역')
  // if ( ds_slipcontents.CountRow <= 0)
  // {
  // 	alert("전표내역이 존재하지않습니다.");
  // 	return false
  // }
  // cfGridToExcel(gr_groupCode, gridName,"C:\\" + gridName + ".xls", 4+8+16);

  var totCnt = ds_slipcontents.getRowCount();
  var sheetTitle = "전표내역";
  if (!(totCnt > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    const options = {
      fileName: "전표내역" + ".xlsx",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_slipcontents, options);
  }
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
//  회계전표발행 (전표인쇄)
//-------------------------------------------------------------------------
scwin.f_OzReport = function () {
  //OZStartBatch();
  // var odiParam = new ODIParam("fi_201_04_02p");
  // odiParam.add("slipNo", "TO_CHAR("+txt_slipNo.value.trim()+")");
  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();
  // //formParam.add("form1","폼1");

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr", odiParam, viewerParam, formParam);

  var param = "";
  console.log("  param [" + param + "]");
  let data = {
    odiName: "fi_201_04_02p",
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.gnrlaccount.slipmgnt"
      slipNo: "TO_CHAR(" + ed_slipNo.getValue().trim() + ")"
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,

      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력

      // 파일명 : 전표번호
      ,

      "export.format": "pdf",
      "export.path": "",
      "export.mode": "view",
      "export.filename": ed_slipNo.getValue().trim()
    },
    formParam: {}
  };
  console.log("  회계전표발행 (전표인쇄) data [" + JSON.stringify(data) + "]");

  // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
//  openPopup 팝업 오픈
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

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
//  매출 세금계산서 발행 : Type :1
//
//    미사용 - 호출 주석처리 됨
//  <!-- <input  type=button id='bSellBill' class="button_ozprint" onclick="f_OzReport1()" value="매출세금계산서발행1"  userAuth="P"> --> 
//-------------------------------------------------------------------------
scwin.f_OzReport1 = function () {
  /*
  	OZStartBatch();
  
  	for(var i=1; i<=ds_tax.CountRow; i++ )
  	{
  	 	if(ds_tax.NameValue(i,"evidClsCd")!="10"){
  			if (ds_tax.NameValue(i,"evidClsCd")!="20" || ds_tax.NameValue(i,"zeroTaxClsCd")!="1"){
  				cfAlertMsg("전표번호["+ds_tax.NameValue(i,"slipNo")+"]는 매출세금계산서를  발행할수없습니다.");
  				return;
  			}
  		}
  
  	    var odiParam = new ODIParam("fi_401_01_02p");
  		odiParam.add("pchsSellCls",  ds_tax.NameValue(i,"pchsEvidNo")    );
  
  		//alert(odiParam.getParameterValues());
  
  		var formParam = new FormParam();
  
      	// OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  		 var viewerParam = new ViewerParam();
  		 viewerParam.add("viewer.useprogressbar","false");
  
  	    cfOZPreview(  "/ac/fi/taxbiz/vatctrl/fi_401_01_02p.ozr",  odiParam , viewerParam , formParam ) ;
  		//cfOZPrint(  "/ac/fi/taxbiz/vatctrl/fi_401_01_02p.ozr",  odiParam , viewerParam , formParam ) ;
  
  	}
  	OZExecuteBatch();
   */
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_slipDt',placeholder:' ',class:'form-control w100',objType:'data',validExp:'관리일자:no:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',disabled:'true',ref:'data:dma_result.slipDt',dataType:'date'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전표번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_slipNo',placeholder:'',class:'form-control col7',readOnly:'true',ref:'data:dma_result.slipNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'확정번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_confNo',placeholder:'',class:'form-control',disabled:'true',objType:'data',ref:'data:dma_result.confNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'view1',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_drawAcctDeptNm',placeholder:'',class:'form-control col7',disabled:'true',objType:'data',ref:'data:dma_result.drawAcctDeptNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_drawEmpNm',placeholder:'',class:'form-control col7',disabled:'true',objType:'data',ref:'data:dma_result.drawEmpNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전표종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_slipKndNm',placeholder:'',class:'form-control',disabled:'true',objType:'data',ref:'data:dma_result.slipKndNm'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_slipcontents',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',id:'udc_gridMain',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_slipcontents_oncellclick',scrollByColumnAdaptive:'false',rowNumVisible:'true',scrollByColumn:'false',rowNumHeaderValue:'No',readOnly:'true',checkReadOnlyOnPasteEnable:'',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_slipcontents',style:'',id:'gr_slipcontents',visibleRowNum:'10',autoFit:'none',class:'wq_gvw',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'150',inputType:'text',id:'column12',value:'계정과목',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'160',inputType:'text',id:'column11',value:'귀속부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'150',inputType:'text',id:'column10',value:'거래처',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'4',removeBorderStyle:'false',width:'350',inputType:'text',id:'column9',value:'금액',blockSelect:'false',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'200',inputType:'text',id:'column5',value:'적요',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'100',inputType:'text',id:'column4',value:'요청거래처',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',removeBorderStyle:'false',width:'150',inputType:'text',id:'column3',value:'요청거래처명',blockSelect:'false',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'차변',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'대변',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'차변(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'대변(외)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',style:';text-align:left;',id:'acctNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'160',inputType:'text',style:';text-align:left;',id:'acctDeptNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:';text-align:left;',id:'clntNm',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',dataType:'number',width:'100',displayFormat:'#,##0',inputType:'text',id:'damtSum',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',dataType:'number',width:'100',displayFormat:'#,###',inputType:'text',id:'camtSum',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',dataType:'float',width:'100',displayFormat:'#,##0.00',inputType:'text',id:'dfcrcSum',blockSelect:'false',displayMode:'label',maxLength:'15,2'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',dataType:'float',width:'100',displayFormat:'#,##0.00',inputType:'text',id:'cfcrcSum',blockSelect:'false',displayMode:'label',maxLength:'15,2'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',style:';text-align:left;',id:'summary',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:';text-align:left;',id:'reqClntNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:';text-align:left;',id:'reqClntNm',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'damtSum\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'camtSum\')',textAlign:'right',dataType:'number',width:'100',displayFormat:'#,###',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'dfcrcSum\')',textAlign:'right',dataType:'float',width:'100',displayFormat:'#,##0.00',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM(\'cfcrcSum\')',textAlign:'right',dataType:'float',width:'100',displayFormat:'#,##0.00',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_pu_evid',label:'증빙내역',class:'btn link white','ev:onclick':'scwin.btn_pu_evid_onclick'}},{T:1,N:'w2:button',A:{style:'',id:'btn_pu_detail',label:'상세조회',class:'btn link white','ev:onclick':'scwin.btn_pu_detail_onclick'}},{T:1,N:'w2:button',A:{style:'',id:'btn_ozprint',label:'전표인쇄',class:'btn white','ev:onclick':'scwin.f_OzReport'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'pop-btnbox'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_close',label:'닫기',class:'btn','ev:onclick':'scwin.btn_close_onclick'}}]}]}]}]}]})