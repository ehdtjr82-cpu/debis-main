/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_02b.xml 116485 6da31f2a30c0251c99b734db6476877fc6e8935f396da92fdf9d110b3b36787e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlIntendDtFrom',name:'정리예정일From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlIntendDtTo',name:'정리예정일To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setlCompleteYn',name:'정리완료여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtFrom',name:'요청일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'요청일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDt',name:'구매요청일(지급일자)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_provHeader',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'rt_prov',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'DEBIS전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipDt',name:'작성일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDt',name:'구매요청일(지급일자)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqAcctDeptNm',name:'요청귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqEmpNm',name:'요청사원명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'setlIntendDt',name:'정리예정일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'number',id:'exchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'number',id:'amt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'amtFcrc',name:'외화금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'setlAmt',name:'정리금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'postSetlAmt',name:'기정리금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'setlAmtFcrc',name:'정리금액(외화)'}},{T:1,N:'w2:column',A:{dataType:'number',id:'postSetlAmtFcrc',name:'기정리외화금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'charge',name:'잔액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'chargeFcrc',name:'잔액(외화)'}},{T:1,N:'w2:column',A:{dataType:'number',id:'setlIntendAmt',name:'정리예정금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'rcptAmt',name:'입금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'setlIntendAmtFcrc',name:'정리예정외화금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rcptAmtFcrc',name:'입금액(외화)'}},{T:1,N:'w2:column',A:{dataType:'number',id:'drawEmpNm',name:'작성자사원명'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'정리환율',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_parent',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'DEBIS전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipDt',name:'작성일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDt',name:'구매요청일(지급일자)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqAcctDeptNm',name:'요청귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqEmpNm',name:'요청사원명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'setlIntendDt',name:'정리예정일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'number',id:'exchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'number',id:'amt',name:'금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'amtFcrc',name:'외화금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'setlAmt',name:'정리금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'postSetlAmt',name:'기정리금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'setlAmtFcrc',name:'정리금액(외화)'}},{T:1,N:'w2:column',A:{dataType:'number',id:'postSetlAmtFcrc',name:'기정리외화금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'charge',name:'잔액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'chargeFcrc',name:'잔액(외화)'}},{T:1,N:'w2:column',A:{dataType:'number',id:'setlIntendAmt',name:'정리예정금액'}},{T:1,N:'w2:column',A:{dataType:'number',id:'rcptAmt',name:'입금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'setlIntendAmtFcrc',name:'정리예정외화금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rcptAmtFcrc',name:'입금액(외화)'}},{T:1,N:'w2:column',A:{dataType:'number',id:'drawEmpNm',name:'작성자사원명'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'정리환율',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_parentHeader',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'setlDt',name:'정리일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqAcctDeptCd',name:'요청귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'susPayClsCd',name:'가지급금구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawEmpNo',name:'작성자사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawAcctDeptCd',name:'작성귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rltSeq',name:'관련사건 저장순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookNo',name:'통장번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankAcntNo',name:'은행계좌번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookKndNm',name:'통장종류명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookNm',name:'통장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqAcctDeptNm',name:'요청귀속부서명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'rt_provHeader',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'setlDt',name:'정리일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqAcctDeptCd',name:'요청귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'susPayClsCd',name:'가지급금구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawEmpNo',name:'작성자사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawAcctDeptCd',name:'작성귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rltSeq',name:'관련사건 저장순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookNo',name:'통장번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankAcntNo',name:'은행계좌번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookKndNm',name:'통장종류명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookNm',name:'통장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqAcctDeptNm',name:'요청귀속부서명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prov',saveRemovedData:'true','ev:ondataload':'scwin.ds_prov_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청사번',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqEmpNm',name:'요청사원명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'setlIntendDt',name:'정리예정일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'정리금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'정리금액(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postSetlAmt',name:'기정리금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postSetlAmtFcrc',name:'기정리외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'입금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rcptAmtFcrc',name:'입금액(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'setlIntendAmt',name:'정리예정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlIntendAmtFcrc',name:'정리예정외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlCompleteYn',name:'정리완료여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'정리환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqDt',name:'구매요청일(지급일자)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'chargeFcrc',name:'잔액(외화)',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSuspensePayableRequestSettlementContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_prov","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_prov","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.SaveSuspensePayableRequestSettlementContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_prov","key":"IN_DS1"},{"id":"ds_provHeader","key":"IN_DS2"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSuspensePayableBalanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_prov","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_prov","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_02b
// 이름     : 가지급금입금
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  : prov, provHeader
//            OUT : prov, provHeader
//
// 비고     : 메인/팝업 겸용 
//           
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            회계/재무회계/고정자산/고정자산취득(fi_301_01_01b)에서 호출
//            회계/재무회계/고정자산/고정자산취득(업로드)(fi_301_01_02b)에서 호출
//            회계/재무회계/고정자산/자본적지출(fi_301_06_01b)에서 호출
//            회계/재무회계/일반회계/전표관리/경비전표입력(fi_201_01_01b)에서 호출
//            자회사 회계/재무회계/일반회계/전표관리/BIDC 매출입전표 발행BIDC 매출입전표팝업(fi_201_01_11p)에서 호출
//            회계/재무회계/일반회계/전표관리/차세대 매입전표 발행차세대 매입전표팝업(fi_201_01_12p)에서 호출
//            회계/재무회계/일반회계/전표관리/대체전표입력(fi_201_03_01b)에서 호출
//            회계/재무회계/세무/증빙관리/e세로증빙등록경비전표입력(e세로증빙등록)(fi_403_01_01p_02)에서 호출
//            공통/총무업무/임대차관리/임대차[전대차] 전표생성(zz_900_03_04b)에서 호출
//            물류/정산/세금계산서/세금계산서 접수 등록(fs_103_01_01b)에서 호출
//            물류/정산/세금계산서/세금계산서접수등록(부서별)(fs_103_01_03b)에서 호출
//            자회사물류/오더/통합매출입/세금계산서 접수 등록(ja_fs_103_01_01b)에서 호출
//==================================================================================================================
/*
    String flag     =  DCheckIf.isNullToBlank(request.getParameter("flag"));
    String slipDt   =  DCheckIf.isNullToBlank(request.getParameter("slipDt"));
    String compare  =  DCheckIf.isNullToBlank(request.getParameter("compare"));
    String s_width  = "990";
    String s_height = "320";
    //flag = "Y";
    if(flag.equals("Y")){
        s_width  = "950";
        s_height = "193";
    }
    if(slipDt.equals("")){
        slipDt = DDate.getDate();
    }
 */

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.vAdminYn = ""; // 어드민여부
scwin.userEmpNo = ""; // 사용자번호

scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.prov_param; // ds_prov 받는 전역변수
scwin.provHeader_param; // ds_provHeader 받는 전역변수

scwin.flag = ""; // 팝업여부  - Y: 팝업,  그외: 화면
scwin.compare = ""; // compare  - 1: 경비금액, 그외: 정산금액
scwin.txtrltSeq = ""; // 정산순번
scwin.slipDt = ""; // 작성일자
scwin.adjmClsCd = ""; // 정산방법
scwin.sum = ""; // 정산대상금액
scwin.acctDeptCd = ""; // 신청부서코드
scwin.acctDeptNm = ""; // 신청부서명
scwin.crcCd = ""; // 통화코드

// <input type="hidden" name="check">   미사용
// <input type="hidden" name="txt_reqAcctDeptCd">  미사용

scwin.ed_mgntEmpNo_hidVal = ""; // 신청자
scwin.ed_reqAcctDeptCd_hidVal = ""; // 신청부서
scwin.ed_bankbookNo_hidVal = ""; // 통장번호

scwin.onpageload = function () {
  console.log("====== onpageload ================== v 1.02");

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
  scwin.vCoCd = coCd;
  scwin.vCoClsCd = coClsCd;
  scwin.userId = userId;
  scwin.vAdminYn = privAdmin;
  scwin.userEmpNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ userId     : " + scwin.userId + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ vUserHomeClsCd : " + scwin.vUserHomeClsCd + "   vAdminYn : " + scwin.vAdminYn);
  //    console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // 회계부서코드/명
  let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  let acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
  scwin.acctDeptCd = acctDeptCd;
  scwin.acctDeptNm = acctDeptNm;
  console.log("▶▶ acctDeptCd : " + scwin.acctDeptCd + "   acctDeptNm : " + scwin.acctDeptNm);
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  console.log("▶▶ txtCoCd : " + scwin.txtCoCd + "   txtCoClsCd : " + scwin.txtCoClsCd);

  //------------------- 부모에게서 파라미터 받음 ----------------------------------//

  // var ds_parent       = valueObject.prov;         // 가지급 내역
  // var ds_parentHeader = valueObject.provHeader;   // 가지급 헤더
  // var txtrltSeq       = valueObject.txtrltSeq;    // 정산순번
  // var slipDt          = valueObject.slipDt;       // 작성일자
  // var adjmClsCd       = valueObject.adjmClsCd;    // 정산방법
  // var sum             = valueObject.sum;          // 정산대상금액
  // var acctDeptCd      = valueObject.acctDeptCd;   // 신청부서코드
  // var acctDeptNm      = valueObject.acctDeptNm;   // 신청부서명
  // var crcCd           = valueObject.crcCd;        // 통화코드

  // 여기서 추출 안하면 통화코드 셀렉트박스 <전체>가 비정상
  scwin.flag = $c.data.getParameter($p, "flag") == null ? "" : $c.data.getParameter($p, "flag");

  // KYU_TEST : 팝업 모드 테스트
  // scwin.flag = "Y";

  console.log("  =====================  flag : " + scwin.flag);

  // 가지급금입금 팝업모드일 경우 
  if (scwin.flag == 'Y') {
    scwin.prov_param = $c.data.getParameter($p, "prov") == null ? "" : $c.data.getParameter($p, "prov");
    scwin.provHeader_param = $c.data.getParameter($p, "provHeader") == null ? "" : $c.data.getParameter($p, "provHeader");

    // console.log("▶ prov (가지급내역) ["+JSON.stringify(scwin.prov_param)+"]");
    // console.log("▶ provHeader (가지급헤더) ["+JSON.stringify(scwin.provHeader_param)+"]");

    ds_parent.removeAll();
    ds_parent.insertRow();
    ds_parent.setRowPosition(0);
    ds_parent.setJSON(scwin.prov_param, true);
    ds_parentHeader.removeAll();
    ds_parentHeader.insertRow();
    ds_parentHeader.setRowPosition(0);
    ds_parentHeader.setJSON(scwin.provHeader_param, true);
    var dc = ds_parent.getAllArray();
    console.log("  *** ds_parent (" + ds_parent.getTotalRow() + ") : " + JSON.stringify(dc));
    var dc = ds_parentHeader.getAllArray();
    console.log("  *** ds_parentHeader (" + ds_parentHeader.getTotalRow() + ") : " + JSON.stringify(dc));

    // scwin.flag            =  $c.data.getParameter("flag") == null ? "" : $c.data.getParameter("flag");                  //
    scwin.compare = $c.data.getParameter($p, "compare") == null ? "" : $c.data.getParameter($p, "compare"); // compare

    // 작성일자 : null 이면 현재일자
    scwin.slipDt = $c.data.getParameter($p, "slipDt") == null ? $c.date.getServerDateTime($p, "yyyyMMdd") : $c.data.getParameter($p, "slipDt"); // 작성일자

    scwin.txtrltSeq = $c.data.getParameter($p, "txtrltSeq") == null ? "" : $c.data.getParameter($p, "txtrltSeq"); // 정산순번
    scwin.adjmClsCd = $c.data.getParameter($p, "adjmClsCd") == null ? "" : $c.data.getParameter($p, "adjmClsCd"); // 정산방법
    scwin.sum = $c.data.getParameter($p, "sum") == null ? "" : $c.data.getParameter($p, "sum"); // 정산대상금액
    scwin.acctDeptCd = $c.data.getParameter($p, "acctDeptCd") == null ? "" : $c.data.getParameter($p, "acctDeptCd"); // 신청부서코드
    scwin.acctDeptNm = $c.data.getParameter($p, "acctDeptNm") == null ? "" : $c.data.getParameter($p, "acctDeptNm"); // 신청부서명
    scwin.crcCd = $c.data.getParameter($p, "crcCd") == null ? "" : $c.data.getParameter($p, "crcCd"); // 통화코드
  }

  // 팝업모드 아닐지라도  slipDt 는 채워야 함
  if (scwin.slipDt == "") {
    scwin.slipDt = $c.date.getServerDateTime($p, "yyyyMMdd");
  }

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  } // 통화코드
  //   { grpCd : "ZZ006", compID : "lc_crcCd",opt : {"range" : "1"} } // 통화코드 - KRW가 제일 위로
  , {
    grpCd: "FI031",
    compID: "lc_susPayClsCd",
    opt: {
      "range": "1"
    }
  } // 계정
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  if (scwin.acctDeptCd == "00009") {
    // 재경이면
    lc_crcCd.addItem("", "전체", 0, true); // 통화코드에 전체 추가
    lc_crcCd.setValue("전체");

    // 조회조건 : 통화코드 : KRW 원화
    //  lc_crcCd.BindColVal = '<%=ACConstants.KOREA_WON%>'

    lc_crcCd.addItem("", "전체", 0, true); // 통화코드에 전체 추가
    lc_crcCd.setValue("전체");
    lc_crcCd.setValue(ACConstants.KOREA_WON);
    console.log(" --- 통화코드 : " + lc_crcCd.getValue());
  }
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // 신청부서의 validation 2중화
    if (scwin.flag == "Y") {
      ed_reqAcctDeptCd.setMandatory(true);
      lb_reqAcctDeptCd.addClass("req"); // 라벨
    } else {
      ed_reqAcctDeptCd.setMandatory(false);
      lb_reqAcctDeptCd.addClass("");
    }

    // 통장코드의 validation 2중화
    if (scwin.flag == "Y") {
      ed_bankbookNo.setMandatory(true);
      lb_bankbookNo.addClass("req"); // 라벨
    } else {
      ed_bankbookNo.setMandatory(false);
      lb_bankbookNo.addClass("");
    }
    scwin.f_OnLoad(); // await 처리 위해
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// f_OnLoad
//-------------------------------------------------------------------------
scwin.f_OnLoad = async function () {
  console.log("=== f_OnLoad");

  // KYU_TEST
  // scwin.flag            = "Y";   // 팝업여부  - Y: 팝업,  그외: 화면
  // scwin.acctDeptCd  = "00999";
  // scwin.compare         = "";   // compare  - 1: 경비금액, 그외: 정산금액

  console.log("      ^^^^^ flag (팝업여부) [" + scwin.flag + "]  acctDeptCd [" + scwin.acctDeptCd + "]  compare [" + scwin.compare + "]");
  ds_provHeader.removeAll();
  ds_provHeader.insertRow();
  ds_provHeader.setRowPosition(0); // 0번째가 널로 들어갈 수 있음 !!

  //**************************************** 화면 구성

  if (scwin.acctDeptCd == "00009") {
    // 재경이면
    console.log("114");
    // lc_crcCd.addItem("", "전체", 0, true);   // 통화코드에 전체 추가
    // lc_crcCd.setValue("전체");

    // dlt_commonCodeZZ006.insertRow(0);
    // dlt_commonCodeZZ006.setCellData(0,"grpCd","ZZ006");
    // dlt_commonCodeZZ006.setCellData(0,"cd","")
    // dlt_commonCodeZZ006.setCellData(0,"cdNm","전체");
    // lc_crcCd.setSelectedIndex(0);
  }
  if (scwin.flag == "Y") {
    // 팝업
    console.log("   ---- 팝업 (화면구성)");

    // KYU_NEW
    // 메인 그리드 변경 : 정리금액, 정리외화금액 보임 처리
    gr_prov.setColumnVisible('setlIntendAmt', true);
    gr_prov.setColumnVisible('setlIntendAmtFcrc', true);

    // 정리금액(빨강), 입금액(파랑), 정리외화금액(빨강), 입금외화액(파랑)
    // txt-red / txt-blue 
    // gr_prov.setHeaderStyle ( 'lb_setlIntendAmt'    , "color", txt-red);   // 정리금액
    // gr_prov.setHeaderStyle ( 'lb_rcptAmt'          , "color", txt-blue);  // 입금액
    // gr_prov.setHeaderStyle ( 'lb_setlIntendAmtFcrc', "color", txt-red);   // 정리외화금액
    // gr_prov.setHeaderStyle ( 'lb_rcptAmtFcrc'      , "color", txt-blue);  // 입금외화액

    gr_prov.setHeaderStyle("lb_setlIntendAmt", "color", "red"); // 정리금액
    gr_prov.setHeaderStyle("lb_rcptAmt", "color", "blue"); // 입금액
    gr_prov.setHeaderStyle("lb_setlIntendAmtFcrc", "color", "red"); // 정리외화금액
    gr_prov.setHeaderStyle("lb_rcptAmtFcrc", "color", "blue"); // 입금외화액

    lb_reqAcctDeptCd.addClass("req"); // 신청부서 필수
    btn_bSav.hide(); // 발행버튼 숨김
    btn_save.show(""); // 저장버튼 보임
    btn_close.show(""); // 닫기버튼 보임

    st_reqEmpNo.hide(); // 신청자 숨김
    st_sum.show(""); // 정산금액 보임

    // 경비/정산금액
    if (scwin.compare == "1") {
      bl_amt.setValue("경비금액");
    } else {
      bl_amt.setValue("정산금액");
    }
    if (scwin.acctDeptCd == "00009") {
      // 재경이면
      // lc_crcCd.addItem("", "전체", 0, true);   // 통화코드에 전체 추가
      // lc_crcCd.setSelectedIndex(0);

      st_reqDt.show(""); // 결산일자 보임
      btn_retrieve2.show(""); // 잔액조회 버튼 보임
    } else {
      st_reqDt.hide(); // 결산일자 숨김
      btn_retrieve2.hide(); // 잔액조회 버튼 숨김
    }
  } else {
    // 메인
    console.log("   ---- 메인 (화면구성)");
    lb_reqAcctDeptCd.addClass(""); // 신청부서 필수 아님
    btn_bSav.show(""); // 발행버튼 보임
    btn_save.hide(); // 저장버튼 숨김
    btn_close.hide(); // 닫기버튼 숨김

    st_reqEmpNo.show(""); // 신청자 보임
    st_sum.hide(); // 정산금액 숨김

    // lc_crcCd.addItem("", "전체", 0, true);   // 통화코드에 전체 추가
    // lc_crcCd.setSelectedIndex(0);

    if (scwin.acctDeptCd == "00009") {
      // 재경이면
      st_reqDt.show(""); // 결산일자 보임
      btn_retrieve2.show(""); // 잔액조회 보임
    } else {
      st_reqDt.hide(); // 결산일자 숨김
      btn_retrieve2.hide(); // 잔액조회 숨김
    }

    // 입금액(빨강), 입금외화액(빨강)
    // txt-red / txt-blue 
    gr_prov.setHeaderStyle("lb_rcptAmt", "color", "red"); // 입금액
    gr_prov.setHeaderStyle("lb_rcptAmtFcrc", "color", "red"); // 입금외화액

    // KYU_NEW
    // 메인 그리드 변경 : 정리금액, 정리외화금액 숨김 처리
    gr_prov.setColumnVisible('setlIntendAmt', false);
    gr_prov.setColumnVisible('setlIntendAmtFcrc', false);
  }

  // 완료여부         -1^전체,0^미완료,1^완료
  lc_setlCompleteYn.setSelectedIndex(1);
  // 신청전표회계처리 -1^전체,1^결재,0^가결
  lc_postYn.setSelectedIndex(1);
  $c.gus.cfDisableObjects($p, [ed_bankbookNm, ed_bankAcntNo, ed_bankbookKndNm, btn_bSav]);

  // 로그인사번,부서
  ds_provHeader.setCellData(0, "drawEmpNo", scwin.userEmpNo);
  ds_provHeader.setCellData(0, "drawAcctDeptCd", scwin.acctDeptCd);

  // c_setlIntendDtTo.text = "<%=DDate.getNextDate(slipDt , 7) %>";
  // c_setlIntendDtFrom.text = "<%=DDate.getPrevDate(slipDt , 7) %>";

  // 디폴트 날짜 변경(1월1일 ~ 해당월말일까지)
  //  c_setlIntendDtTo.text = "<%=slipDt.substring(0,6)%>"+"<%=DDate.getLastDate(slipDt) %>";
  //  c_setlIntendDtFrom.text = "<%=slipDt.substring(0,4)%>"+"0101";
  //  ed_setlDt.text = "<%=slipDt%>";

  let lastDate = scwin.slipDt.substring(0, 6) + $c.date.getLastDateOfMonth($p, $c.date.getServerDateTime($p, scwin.slipDt.substring(0, 6)));
  ed_setlIntendDtTo.setValue(lastDate);
  ed_setlIntendDtFrom.setValue(scwin.slipDt.substring(0, 4) + "0101");
  ica_setlDt.setValue(scwin.slipDt); // 정리일자

  // 조회조건 : 통화코드 : KRW 원화
  //  lc_crcCd.BindColVal = '<%=ACConstants.KOREA_WON%>'
  lc_crcCd.setValue(ACConstants.KOREA_WON);
  console.log(" --- 통화코드 : " + lc_crcCd.getValue());

  // 가지급금입금 팝업모드일 경우
  if (scwin.flag == 'Y') {
    console.log("   팝업 (초기 조회)");

    // 지급방식 가지급급이면
    adjmClsCd = "1";

    // 계정(가지급신청계정-공통코드 FI031참조) 1:가지급금-일반,2:선급금.3:가지급금급
    ds_search.set("susPayClsCd", scwin.adjmClsCd);
    lc_susPayClsCd.setValue("1");
    $c.gus.cfDisableObjects($p, [lc_susPayClsCd]);
    // 신청부서코드 / 신청부서명
    ed_reqAcctDeptCd.setValue(scwin.acctDeptCd);
    ed_reqAcctDeptNm.setValue(scwin.acctDeptNm);

    // 로그인 사번 입력
    ds_search.set("reqEmpNo", scwin.userEmpNo);
    // 통화코드입력(부모페이지에서 받은값)
    lc_crcCd.setValue(scwin.crcCd);
    // 정산대상금액
    // ed_sum.text=sum;
    ed_sum.setValue(scwin.sum);
    $c.gus.cfDisableObjects($p, [lc_susPayClsCd, ed_sum]);

    // if (!$c.gus.cfValidate([ed_reqAcctDeptCd])) {
    let rtn = await $c.gus.cfValidate($p, [ed_reqAcctDeptCd]);
    if (!rtn) {
      return;
    }

    // 조회
    scwin.f_Retrieve();
  } else {
    console.log("   메인");

    // 접속자 Session 정보(접속자 소속부서, 소속부서명,사번 )이용

    ed_reqAcctDeptCd.setValue(scwin.acctDeptCd);
    ed_reqAcctDeptNm.setValue(scwin.acctDeptNm);
    ds_search.set("reqEmpNo", scwin.userEmpNo);
    scwin.f_openPopUp(1, 'T');

    // 계정(가지급신청계정-공통코드 FI031참조) 1:가지급금-일반,2:선급금.3:가지급금급
    //c_susPayClsCd.index=0;
    lc_susPayClsCd.setValue("1");
    $c.gus.cfDisableObjects($p, [lc_susPayClsCd]);
  }
  // f_crcCdChange();
};

// @@ ====== 조회 ============================================================================== //

// -------------------------------------------------------------------------
// Clear
// -------------------------------------------------------------------------
scwin.f_Clear = function () {
  console.log("=== f_Clear");

  // 하단 에디트들 통장명/번호 적요
  ed_bankbookNo.setValue("");
  scwin.ed_bankbookNo_hidVal = "";
  ed_bankAcntNo.setValue("");
  ed_bankbookKndNm.setValue("");
  ed_bankbookNm.setValue("");
  ica_setlDt.setValue("");
  ed_summary.setValue("");
};

// -------------------------------------------------------------------------
// 잔액조회
// -------------------------------------------------------------------------
scwin.f_Retrieve2 = async function () {
  console.log("=== === f_Retrieve2 (잔액조회)");
  if (ds_search.get("reqDt") == "") {
    await $c.win.alert($p, "결산일자를 입력 하세요.");
    ica_reqDt.focus();
    return;
  }

  // 결산일자 형식 체크 : UDC 에서 자동검증
  // if(ica_reqDt.getValue() != null){
  // if(!cfValidateValue(ed_reqDt.text.trim(),"date=YYYYMMDD")){
  //     $c.win.alert("결산일자의 날짜 형식이 맞지 않습니다.");
  //     return false;
  // }
  // }

  // ds_search.UseChangeInfo = false;

  // 정리예정일 데이터 입력(공백제거?) : UDC 에서 자동검증
  // c_setlIntendDtFrom.text = c_setlIntendDtFrom.text.trim();
  // c_setlIntendDtTo.text   = c_setlIntendDtTo.text.trim();
  // ed_reqDt.text   = ed_reqDt.text.trim();

  // tr_search2.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveSuspensePayableBalanceCMD.do";
  // tr_search2.post();
  $c.sbm.execute($p, sbm_search2);
};

// -------------------------------------------------------------------------
// 잔액조회 submitdone
// -------------------------------------------------------------------------
scwin.sbm_search2_submitdone = async function (e) {
  console.log("▷ sbm_search2_submitdone (잔액조회 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // KYU_NEW 신규 추가
  var RowCnt = ds_prov.getTotalRow();
  ed_totalRows.setValue(RowCnt);
  if (RowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  var dc = ds_prov.getAllArray();
  console.log("  *** ds_prov (" + ds_prov.getTotalRow() + ") : " + JSON.stringify(dc));
  scwin.provOnLoadComp();
};

// -------------------------------------------------------------------------
//  ds_search 변경시
//
//  ds_search_onmodelchange (입력 하나하나마다 발동하므로 불가)  --> ds_search_check
// -------------------------------------------------------------------------
scwin.ds_search_check = async function (info) {
  console.log("----- ds_search_check (이벤트에서 함수로)");

  // var colid = info.key;

  // language=JavaScript for=ds_search event=OnColumnChanged(row,colid)>
  var loginAcctDeptCd = scwin.acctDeptCd;
  var vUserHomeClsCd = scwin.vUserHomeClsCd;

  // if(colid == "reqDtFrom"||colid == "reqDtTo" ||colid == "setlIntendDtFrom" ||colid == "setlIntendDtTo"){
  //요청일자 2015.01.01 이전 일자 조회 못하게

  if (ds_search.get("reqDtFrom") != "") {
    if ($c.gus.cfIsAfterDate($p, ds_search.get("reqDtFrom"), "20141231")) {
      if (loginAcctDeptCd == "00009" || vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {// SA
      } else {
        await $c.win.alert($p, "요청일자 시작일자는 2015년 1월1일 이전으로 조회할수 없습니다.");
        ed_reqDtFrom.setValue(scwin.slipDt.substring(0, 4) + "0101"); // 작성일자(slipDt) 년도의 첫날
      }
    }
  } else if (ds_search.get("reqDtTo") != "") {
    if ($c.gus.cfIsAfterDate($p, ds_search.get("reqDtTo"), "20141231")) {
      if (loginAcctDeptCd == "00009" || vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {} else {
        await $c.win.alert($p, "요청일자 종료일자는 2015년 1월1일 이전으로 조회할수 없습니다.");
        ed_reqDtTo.setValue(scwin.slipDt.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.slipDt.substring(0, 6))); // 작성일자(slipDt) 월의 마지막
      }
    }
  }

  //정리예정일 2015.01.01 이전 일자 조회 못하게
  if (ds_search.get("setlIntendDtFrom") != "") {
    if ($c.gus.cfIsAfterDate($p, ds_search.get("setlIntendDtFrom"), "20141231")) {
      if (loginAcctDeptCd == "00009" || vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {} else {
        await $c.win.alert($p, "정리예정일 시작일자는 2015년 1월1일 이전으로 조회할수 없습니다.");
        ed_setlIntendDtFrom.setValue(scwin.slipDt.substring(0, 4) + "0101"); // 작성일자(slipDt) 년도의 첫날
      }
    }
  } else if (ds_search.get("setlIntendDtTo") != "") {
    if ($c.gus.cfIsAfterDate($p, ds_search.get("setlIntendDtTo"), "20141231")) {
      if (loginAcctDeptCd == "00009" || vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {} else {
        await $c.win.alert($p, "정리예정일 종료일자는 2015년 1월1일 이전으로 조회할수 없습니다.");
        ed_setlIntendDtTo.setValue(scwin.slipDt.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.slipDt.substring(0, 6))); // 작성일자(slipDt) 월의 마지막
      }
    }
  }
  // }
};

// -------------------------------------------------------------------------
// 조회 (가지급금내역)
// -------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");
  var loginAcctDeptCd = scwin.acctDeptCd;
  await scwin.ds_search_check();
  if (scwin.flag != 'Y' && loginAcctDeptCd == "00009") {// // 팝업모드가 아닐때 재경팀인 경우 체크 안한다.
  } else {
    // if (!$c.gus.cfValidate([ed_reqAcctDeptCd]))
    let rtn = await $c.gus.cfValidate($p, [ed_reqAcctDeptCd]);
    if (!rtn) return false;
  }
  if (ds_search.get("setlIntendDtFrom") != "" && ds_search.get("setlIntendDtTo") != "") {
    if (!$c.gus.cfIsAfterDate($p, ds_search.get("setlIntendDtFrom"), ds_search.get("setlIntendDtTo"))) {
      await $c.win.alert($p, "정리예정일 종료일자는 정리예정일 시작일자 이후 일자 여야 합니다.");
      return false;
    }
  } else if (ds_search.get("setlIntendDtFrom") == "" || ds_search.get("setlIntendDtTo") == "") {
    console.log("  정리예정일 비워짐 : 20150101 - 99991231");
    ds_search.set("setlIntendDtFrom", "20150101");
    ds_search.set("setlIntendDtTo", "99991231");
  }
  if (ds_search.get("reqDtFrom") != "" && ds_search.get("reqDtTo") != "") {
    if (!$c.gus.cfIsAfterDate($p, ds_search.get("reqDtFrom"), ds_search.get("reqDtTo"))) {
      await $c.win.alert($p, "요청일자 종료일자는 요청일자 시작일자 이후 일자 여야 합니다.");
      return false;
    }
  } else if (ds_search.get("reqDtFrom") != "" || ds_search.get("reqDtTo") != "") {
    console.log("  요청일자 널 아님 : 20150101 - 99991231");
    ds_search.set("reqDtFrom", "20150101");
    ds_search.set("reqDtTo", "99991231");
  }

  // ds_search.UseChangeInfo = false;

  // 정리예정일 데이터 입력(공백제거?)
  // c_setlIntendDtFrom.text = c_setlIntendDtFrom.text.trim();
  // c_setlIntendDtTo.text   = c_setlIntendDtTo.text.trim();

  // f_crcCdChange();

  // tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveSuspensePayableRequestSettlementContentsCMD.do";
  // tr_search.post();

  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  ds_provHeader.setCellData(0, "setlDt", ica_setlDt.getValue());
  var dc = ds_provHeader.getAllArray();
  console.log("  *** ds_provHeader (" + ds_provHeader.getTotalRow() + ") : " + JSON.stringify(dc));
  $c.sbm.execute($p, sbm_search);
};

// -------------------------------------------------------------------------
// 조회 (가지급금내역) submitdone
// -------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  scwin.provOnLoadComp();
};

// -------------------------------------------------------------------------
// ds_prov onLoadCompleted
// -------------------------------------------------------------------------
scwin.provOnLoadComp = async function (e) {
  console.log("=== provOnLoadComp (ds_prov 로드) - 조회/잔액조회 공용");
  // ipt language=JavaScript for=ds_prov event=OnLoadCompleted(rowCnt)>

  //   cfHideDSWaitMsg(gr_prov);
  //cfShowTotalRows(totalRows, rowCnt);

  var RowCnt = ds_prov.getTotalRow();
  ed_totalRows.setValue(RowCnt);
  console.log("   ===== 발행버튼 활성 !!!!");
  $c.gus.cfEnableObjects($p, [btn_bSav]); // 발행버튼 활성
  // $c.gus.cfEnable([btn_bSav]);  // 발행버튼 활성

  scwin.f_Clear();
  ica_setlDt.setValue(scwin.slipDt); // 정리일자

  if (RowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    // 팝업일 때
    if (scwin.flag == 'Y') {
      console.log("     팝업 일 때");
      // for(i=1; i<=ds_parent.CountRow; i++){
      // for(j=1;j<=ds_prov.CountRow; j++) {
      for (i = 0; i < ds_parent.getTotalRow(); i++) {
        for (j = 0; j < ds_prov.getTotalRow(); j++) {
          if (ds_parent.getCellData(i, "rltSeq") == scwin.txtrltSeq) {
            if (ds_parent.getCellData(i, "slipNo") == ds_prov.getCellData(j, "slipNo")) {
              ds_prov.setCellData(j, "setlIntendAmt", ds_parent.getCellData(i, "setlIntendAmt"));
              ds_prov.setCellData(j, "rcptAmt", ds_parent.getCellData(i, "rcptAmt"));
              ds_prov.setCellData(j, "setlIntendAmtFcrc", ds_parent.getCellData(i, "setlIntendAmtFcrc"));
              ds_prov.setCellData(j, "rcptAmtFcrc", ds_parent.getCellData(i, "rcptAmtFcrc"));
              ds_prov.setCellData(j, "rltSeq", ds_parent.getCellData(i, "rltSeq"));
              ds_prov.setCellData(j, "clntNo", ds_parent.getCellData(i, "clntNo")); //업무가지급금정산시 거래처번호 입력(거래처관리)
            }
          }
        }
      }

      //  for(i=1; i<=ds_parentHeader.CountRow; i++){
      for (i = 0; i < ds_parentHeader.getTotalRow(); i++) {
        if (ds_parentHeader.getCellData(i, "rltSeq") == scwin.txtrltSeq) {
          ed_summary.setValue(ds_parentHeader.getCellData(i, "summary"));
          ica_setlDt.setValue(ds_parentHeader.getCellData(i, "setlDt"));
          ed_bankbookNo.setValue(ds_parentHeader.getCellData(i, "bankbookNo"));
          ed_bankbookNm.setValue(ds_parentHeader.getCellData(i, "bankbookNm"));
          ed_bankAcntNo.setValue(ds_parentHeader.getCellData(i, "bankAcntNo"));
          ed_bankbookKndNm.setValue(ds_parentHeader.getCellData(i, "bankbookKndNm"));
          scwin.ed_bankbookNo_hidVal = ds_parentHeader.getCellData(i, "bankbookNo");
        }
      }
    }
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

// -------------------------------------------------------------------------
//  그리드 정렬
// -------------------------------------------------------------------------
scwin.ds_prov_ondataload = function () {
  // ds_prov.sort("slipNo", 0); 
};

// -------------------------------------------------------------------------
//  회계처리여부
// -------------------------------------------------------------------------
scwin.postYnExp = function (data) {
  return $c.gus.decode($p, data, "1", "결재", "가결");
};

// -------------------------------------------------------------------------
//  잔액
// -------------------------------------------------------------------------
scwin.chargeCalColorExp = function (data, formatData, rowIdx, colIdx) {
  // bgcolor={decode(setlCompleteYn,"1","#CCCCCC",decode(postYn,"0","#CCCCCC"))}
  let temp_setlCompleteYn = ds_prov.getCellData(rowIdx, "setlCompleteYn");
  let temp_postYn = ds_prov.getCellData(rowIdx, "postYn");

  // Value={(amt-setlAmt)}

  // KYU_NEW
  // setlAmt null 로 오는 경우 있음 : sum as 에서 NVL 처리 안함
  var amt = 0;
  if (!$c.gus.cfIsNull($p, ds_prov.getCellData(rowIdx, "amt"))) amt = parseInt(ds_prov.getCellData(rowIdx, "amt"));
  var setlAmt = 0;
  if (!$c.gus.cfIsNull($p, ds_prov.getCellData(rowIdx, "setlAmt"))) setlAmt = parseInt(ds_prov.getCellData(rowIdx, "setlAmt"));
  var temp_charge = amt - setlAmt;

  // if ( colIdx == 1 ) console.log( " ["+data+"]["+formatData+"] ["+rowIdx+"]["+colIdx+"]  setlCompleteYn ["+temp_setlCompleteYn+"]  postYn ["+temp_postYn+"]");

  if (temp_setlCompleteYn == "1") {
    gr_prov.setCellBackgroundColor(rowIdx, colIdx, "#CCCCCC");
  } else if (temp_postYn == "0") {
    // 
    gr_prov.setCellBackgroundColor(rowIdx, colIdx, "#CCCCCC");
  }
  return WebSquare.util.setNumber(temp_charge, "#,##0"); // custom 인데 숫자 포맷 주고 싶을 때
};

// -------------------------------------------------------------------------
//  잔액외화
// -------------------------------------------------------------------------
scwin.chargeFcrcCalColorExp = function (data, formatData, rowIdx, colIdx) {
  // bgcolor={decode(setlCompleteYn,"1","#CCCCCC",decode(postYn,"0","#CCCCCC"))}
  let temp_setlCompleteYn = ds_prov.getCellData(rowIdx, "setlCompleteYn");
  let temp_postYn = ds_prov.getCellData(rowIdx, "postYn");

  // Value={(amtFcrc-setlAmtFcrc)}

  // KYU_NEW
  // amtFcrc, setlAmtFcrc null 로 오는 경우 있음 : sum as 에서 NVL 처리 안함
  var amtFcrc = 0;
  if (!$c.gus.cfIsNull($p, ds_prov.getCellData(rowIdx, "amtFcrc"))) amtFcrc = parseFloat(ds_prov.getCellData(rowIdx, "amtFcrc"));
  var setlAmtFcrc = 0;
  if (!$c.gus.cfIsNull($p, ds_prov.getCellData(rowIdx, "setlAmtFcrc"))) setlAmtFcrc = parseFloat(ds_prov.getCellData(rowIdx, "setlAmtFcrc"));
  var temp_charge = amtFcrc - setlAmtFcrc;

  // if ( colIdx == 1 ) console.log( " ["+data+"]["+formatData+"] ["+rowIdx+"]["+colIdx+"]  setlCompleteYn ["+temp_setlCompleteYn+"]  postYn ["+temp_postYn+"]");

  if (temp_setlCompleteYn == "1") {
    gr_prov.setCellBackgroundColor(rowIdx, colIdx, "#CCCCCC");
  } else if (temp_postYn == "0") {
    // 
    gr_prov.setCellBackgroundColor(rowIdx, colIdx, "#CCCCCC");
  }
  return WebSquare.util.setNumber(temp_charge, "#,##0"); // custom 인데 숫자 포맷 주고 싶을 때
};

//-------------------------------------------------------------------------
// cell 색상 변경 : 부여 필요
//-------------------------------------------------------------------------
scwin.changeCellColorExp = function (data, formatData, rowIdx, colIdx) {
  // bgcolor={decode(setlCompleteYn,"1","#CCCCCC",decode(postYn,"0","#CCCCCC"))}
  let temp_setlCompleteYn = ds_prov.getCellData(rowIdx, "setlCompleteYn");
  let temp_postYn = ds_prov.getCellData(rowIdx, "postYn");

  // if ( colIdx == 1 ) {
  //     console.log( " ["+data+"]["+formatData+"] ["+rowIdx+"]["+colIdx+"]  setlCompleteYn ["+temp_setlCompleteYn+"]  postYn ["+temp_postYn+"]");
  // }

  if (temp_setlCompleteYn == "1") {
    gr_prov.setCellBackgroundColor(rowIdx, colIdx, "#CCCCCC");
  } else if (temp_postYn == "0") {
    // 
    gr_prov.setCellBackgroundColor(rowIdx, colIdx, "#CCCCCC");
  }
  return formatData;
};

// -------------------------------------------------------------------------
//  ds_prov 변경시
// -------------------------------------------------------------------------
scwin.ds_prov_oncelldatachange = function (info) {
  console.log("----- ds_prov_oncelldatachange (ds_prov 환율금액 변경) ");
  var colid = info.colID;
  var row = info.rowIndex;
  console.log("  row [" + row + "]  colid [" + colid + "]");

  // language=JavaScript for=ds_prov event=OnColumnChanged(row,colid)>

  if (colid == "setlIntendAmtFcrc") {
    // 정리금액(외화)
    ds_prov.setCellData(row, "setlIntendAmt", Math.round(ds_prov.getCellData(row, "setlIntendAmtFcrc") * ds_prov.getCellData(row, "exchRt")));
  } else if (colid == "rcptAmtFcrc") {
    // 입금(외화)
    ds_prov.setCellData(row, "rcptAmt", Math.round(ds_prov.getCellData(row, "rcptAmtFcrc") * ds_prov.getCellData(row, "setexchRt"))); // 정리환율
  }

  //     console.log("=== gr_prov_onviewchange (그리드 컬럼 변경)");

  //     colid = info.colIndex;
  //     row   = info.rowIndex;
  //     console.log("  row ["+row+"]  coldid ["+colid+"]");

  // // <script language=JavaScript for=ds_prov event=OnColumnChanged(row,colid)>

  //     if ( colid == "setlIntendAmtFcrc" ){
  //         console.log("-- -- setlIntendAmtFcrc");
  //         ds_prov.setCellData(row,"setlIntendAmt",  Math.round(ds_prov.getCellData(row,"setlIntendAmtFcrc") *  ds_prov.getCellData(row,"exchRt")) );
  //     } else if ( colid == "rcptAmtFcrc" ){
  //         console.log("-- -- rcptAmtFcrc");
  //         ds_prov.setCellData(row,"rcptAmt", Math.round(ds_prov.getCellData(row,"rcptAmtFcrc") *  ds_prov.getCellData(row,"setexchRt")) );
  //     }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 요청부서 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_reqAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 신청자 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_reqEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp(1, 'F');
};

//-------------------------------------------------------------------------
// 통장번호 돋보기 팝업
//-------------------------------------------------------------------------
scwin.udc_bankbookNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

//-------------------------------------------------------------------------
// 통장번호 focus out
//-------------------------------------------------------------------------
scwin.udc_bankbookNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopIn(ed_bankbookNo, ed_bankAcntNo, ed_bankbookKndNm, ed_bankbookNm, '3');
};

// -------------------------------------------------------------------------
// 팝업  @@
//   1:사원,2:신청부서,3:통장번호
// -------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:사원,2:신청부서,3:통장번호)");
  if (flag == '1') {
    // 사원
    // rtnList = cfCommonPopUp('retrieveAcEmpInfo',c_reqEmpNo.text.trim(),c_reqEmpNm.value,check,null,null,null,null,null,null,null,null,null);
    udc_reqEmpNo.cfCommonPopUp(scwin.udc_reqEmpNo_callBackFunc, ed_reqEmpNo.getValue().trim(), ed_reqEmpNm.getValue(), check, null, null, null, null, null, null, null, null, null);
  } else if (flag == '2') {
    // 신청부서
    var param = ",,,0,";
    // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',c_reqAcctDeptCd.text.trim(),c_reqAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
    udc_reqAcctDeptCd.cfCommonPopUp(scwin.udc_reqAcctDeptCd_callBackFunc, ed_reqAcctDeptCd.getValue().trim(), ed_reqAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
  } else if (flag == '3') {
    // 통장코드
    //  2025-11-28 : 기존과 순서 변경
    //    통장번호(code) + 돋보기 + 계좌번호 + 통장종류명 + 통장명(name)
    //    -->
    //    통장번호(code)-돋보기-통장명(name) (이상 UDC)  + 계좌번호 + 통장종류명

    var param = ",04";
    // rtnList = $c.gus.cfCommonPopUp('retrieveBankBookCdInfo',txt_bankbookNo.value,'',check,null,null,null,null,param,null,null,null,null); // 통장명
    udc_bankbookNo.cfCommonPopUp(scwin.udc_bankbookNo_callBackFunc, ed_bankbookNo.getValue(), '', check, null, null, null, null, param, null, null, null, null); // 통장명
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   1:사원,2:신청부서,3:통장번호

//-------------------------------------------------------------------------
// 사원 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_reqEmpNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_reqEmpNo_callBackFunc (사원 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_reqEmpNo, ed_reqEmpNm, rtnList, '1');
};

//-------------------------------------------------------------------------
// 신청부서 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_reqAcctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_reqAcctDeptCd_callBackFunc (신청부서 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_reqAcctDeptCd, ed_reqAcctDeptNm, rtnList, '2');
};

//-------------------------------------------------------------------------
// 통장번호 callBackFunc (3)
//   - 팝업결과 확인을 안함
//-------------------------------------------------------------------------
scwin.udc_bankbookNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_bankbookNo_callBackFunc (통장번호 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_bankbookNo.setValue(""); // 통장번호
      ed_bankAcntNo.setValue(""); // 계좌번호
      ed_bankbookKndNm.setValue(""); // 통장종류명
      ed_bankbookNm.setValue(""); // 통장명
      scwin.ed_bankbookNo_hidVal = ""; // 히든값
      return;
    }
    ed_bankbookNo.setValue(rtnList[0]); // 통장번호
    ed_bankAcntNo.setValue(rtnList[4]); // 계좌번호
    ed_bankbookKndNm.setValue(rtnList[8]); // 통장종류명
    ed_bankbookNm.setValue(rtnList[2]); // 통장명
    scwin.ed_bankbookNo_hidVal = rtnList[0]; // 히든값

    console.log("  --==-- 11  ed_bankbookNo [" + ed_bankbookNo.getValue() + "]   ed_bankbookNo_hidVal [" + scwin.ed_bankbookNo_hidVal + "]");
  } else {
    ed_bankbookNo.setValue(""); // 통장번호
    ed_bankAcntNo.setValue(""); // 계좌번호
    ed_bankbookKndNm.setValue(""); // 통장종류명
    ed_bankbookNm.setValue(""); // 통장명
    scwin.ed_bankbookNo_hidVal = ""; // 히든값
  }
  console.log("--  ed_bankbookNo [" + ed_bankbookNo.getValue() + "]   ed_bankbookNo_hidVal [" + scwin.ed_bankbookNo_hidVal + "]");
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//  1:사원,2:신청부서,3:통장번호 (통장번호는 안함)
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:사원,2:신청부서,3:통장번호)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_mgntEmpNo_hidVal = "";
          break;
        // 사원번호
        case '2':
          scwin.ed_reqAcctDeptCd_hidVal = "";
          break;
        // 신청부서
        default:
          break;
      }
      return;
    }
    // strCd.Text = rtnList[0];	// 코드
    // strNm.value = rtnList[1];	// 명
    // strCd.hidVal = rtnList[0];  // 히든값

    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_mgntEmpNo_hidVal = rtnList[0];
        break;
      // 사원번호
      case '2':
        scwin.ed_reqAcctDeptCd_hidVal = rtnList[0];
        break;
      // 신청부서
      default:
        break;
    }
  } else {
    // strCd.Text = "";
    // strNm.value = "";
    // strCd.hidVal = "";
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_mgntEmpNo_hidVal = "";
        break;
      // 사원번호
      case '2':
        scwin.ed_reqAcctDeptCd_hidVal = "";
        break;
      // 신청부서
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 통장번호
//   strCd  : 통장번호
//   strNm  : 통장계좌번호
//   strNm1 : 통장종류명
//   strNm  : 통장명
//   flag   : 팝업 플래그
//-------------------------------------------------------------------------
//   3:통장번호
scwin.f_checkPopIn = function (strCd, strNm, strNm1, strNm2, flag) {
  console.log("===== f_checkPopIn (팝업체크 - 통장번호)  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.value.trim() == strCd.hidVal)
  if (flag == '3' && strCd.getValue().trim() == scwin.ed_bankbookNo_hidVal) {
    // 통장번호
    if (strCd.getValue() != "") return;
  }
  strNm.setValue("");
  strNm1.setValue("");
  strNm2.setValue("");
  scwin.ed_bankbookNo_hidVal = "";

  // if(strCd.value.trim()!="") f_openPopUp(flag,'T');
  if (strCd.getValue().trim() != "") {
    // 팝업 로딩
    switch (flag) {
      case '3':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 통장번호
      default:
        break;
    }
  }
};

// -------------------------------------------------------------------------
// 팝업체크
//  1:사원,2:신청부서,3:통장번호 (통장번호는 안함)
// -------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크)  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_mgntEmpNo_hidVal ||
  // 신청자
  flag == '2' && strCd.getValue().trim() == scwin.ed_reqAcctDeptCd_hidVal) {
    // 신청부서

    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";

  strNm.setValue("");

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_mgntEmpNo_hidVal = "";
      break;
    // 신청자
    case '2':
      scwin.ed_reqAcctDeptCd_hidVal = "";
      break;
    // 신청부서
    default:
      break;
  }

  // if(strCd.text.trim()!="") f_openPopUp(flag,'T');
  if (strCd.getValue().trim() != "") {
    switch (flag) {
      case '1':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 신청자
      case '2':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 신청부서
      default:
        break;
    }
  }
};

// @@ ====== 저장-준비 ========================================================================= //

//-------------------------------------------------------------------------
// 히든값체크
//  3: 통장명
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  console.log("=== f_HiddenCheck 히든값체크 (" + msg + ")");

  // if(str.value.trim()=="") return true;
  // if (str.value.trim() != str.hidVal){
  //     cfAlertMsg(MSG_CM_ERR_038,[msg]);
  //     str.focus();
  //     return false;
  // } else {
  //     return true;
  // }

  if (str.getValue().trim() == "") return true;
  console.log("    f_HiddenCheck  msg [" + msg + "]  str.getValue() [" + str.getValue() + "]  ed_bankbookNo_hidVal [" + scwin.ed_bankbookNo_hidVal + "]");

  //if (str.text.trim() != str.hidVal){
  if (msg == "통장명" && str.getValue().trim() != scwin.ed_bankbookNo_hidVal) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, [msg])); // 유효한 %1가 아닙니다
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 저장 (팝업일 때)  발행 (팝업 아닐 때)
//-------------------------------------------------------------------------
// scwin.f_Save = function (e) {
//     console.log("========= f_Save : 저장 (팝업일 때)  발행 (팝업 아닐 때)");
//     scwin.f_Save();
// };

// -------------------------------------------------------------------------
// 저장
// -------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("=== f_Save (저장)");
  var bCrcCd = "";

  // 필수 입력 항목 중 빈 내용이 있다면
  // if (!cfCheckMandatory()) return;

  // if(ds_prov.IsUpdated==false && ds_provHeader.IsUpdated==false){
  if (ds_prov.getModifiedIndex().length == 0 && ds_provHeader.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 통화코드가 원화가 아닐경우, 외화금액이 있는지 체크
  if (ds_prov.getCellData(0, "crcCd") != ACConstants.KOREA_WON) {
    //        gr_prov.validExp="rcptAmtFcrc:입금외화금액:no:minNumber=0&maxLength=13,setlIntendAmtFcrc:정리외화금액:no:minNumber=0&maxLength=13"

    bCrcCd = "FRN";
  } else {
    bCrcCd = "KRW";
  }

  // if( ! await scwin.validation()) {
  let rtn1 = await scwin.validation();
  if (!rtn1) {
    return;
  }

  // 히든값체크
  // if(!scwin.f_HiddenCheck(ed_bankbookNo,"통장명")) return ;

  let rtn2 = await scwin.f_HiddenCheck(ed_bankbookNo, "통장명");
  if (!rtn2) return;
  var siSum = 0; // 정리금액
  var siSumFcrc = 0; // 정리외화금액
  var rcpSum = 0; // 입금액
  var rcpSumFcrc = 0; // 입금외화액

  // 입력된 값(정리금액,정리외화금액,입금액,입금외화액)을 종합한다.
  for (j = 0; j < ds_prov.getTotalRow(); j++) {
    siSum = siSum + Number(ds_prov.getCellData(j, "setlIntendAmt")); // 정리금액
    siSumFcrc = siSumFcrc + Number(ds_prov.getCellData(j, "setlIntendAmtFcrc")).toFixed(2); // 정리외화금액
    rcpSum = rcpSum + Number(ds_prov.getCellData(j, "rcptAmt")); // 입금액
    rcpSumFcrc = rcpSumFcrc + Number(ds_prov.getCellData(j, "rcptAmtFcrc")).toFixed(2); // 입금외화액
  }
  console.log(" siSum [" + siSum + "]  rcpSum [" + rcpSum + "]");

  // 금액체크
  // 팝업모드일경우, 부모페이지로 붙어 받은 정리금액과, 입력한 정리금액이 일치 하는지 확인한다.
  if (scwin.flag == 'Y') {
    console.log("     팝업모드  compare [" + compare + "]  1 이면 경비금액");

    // 정리금액이 0보다 크고, 통화코드가 KRW이면, 정산금액(ed_sum)과 정리금액을 비교한다.
    if (siSum > 0 && ds_prov.getCellData(0, "crcCd") == ACConstants.KOREA_WON) {
      // 고정자산하고 구분
      if (scwin.compare == "1") {
        if (ed_sum.getValue().trim() != siSum) {
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "정리금액과 경비금액", "같은 금액"));
          return;
        }
      } else {
        if (ed_sum.getValue().trim() < siSum) {
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "정리금액", "정산금액"));
          return;
        }
      }
    }

    // 정리외화금액이 0보다 크고, 통화코드가 KRW가 아니면, 정산금액(ed_sum)과 정리외화금액을 비교한다.
    if (siSumFcrc > 0 && ds_prov.NameValue(1, "crcCd") != '<%=ACConstants.KOREA_WON%>') {
      // 고정자산하고 구분
      if (compare == "1") {
        if (ed_sum.getValue().trim() != siSumFcrc) {
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "정리금액과 경비금액", "같은 금액"));
          return;
        }
      } else {
        if (ed_sum.text.trim() < siSumFcrc) {
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "정리금액", "정산금액"));
          return;
        }
      }
    }

    // 전표번호별 금액 체크
    var slipSumP,
      slipSum,
      reqSum,
      slipNo = 0;
    var slipSumPFcrc = 0;
    var slipSumFcrc = 0;
    var reqSumFcrc = 0;

    // 정렬
    // ds_parent.SortExpr= "+slipNo";
    // ds_parent.Sort();
    ds_parent.Sort("slipNo", 1);

    // for(i=1; i<=ds_parent.CountRow-1; i++){
    //     for(j=i;j<=ds_parent.CountRow; j++) {
    for (i = 0; i < ds_parent.getTotalRow(); i++) {
      for (j = i0; j < ds_parent.getTotalRow(); j++) {
        if (ds_parent.getCellData(j, "slipNo") == ds_parent.getCellData(i, "slipNo")) {
          slipSumP = ds_parent.NameSum("setlIntendAmt", i, j);
          slipSumPFcrc = ds_parent.NameSum("setlIntendAmtFcrc", i, j);
          for (k = 1; k <= ds_prov.getTotalRow(); k++) {
            if (ds_parent.getCellData(j, "slipNo") == ds_prov.getCellData(k, "slipNo")) {
              if (ds_parent.getCellData(j, "slipNo") == ds_prov.getCellData(k, "slipNo")) {
                slipSum = Number(ds_prov.getCellData(k, "setlIntendAmt")) + Number(slipSumP);
                slipSumFcrc = Number(ds_prov.getCellData(k, "setlIntendAmtFcrc")) + Number(slipSumPFcrc);
                reqSum = Number(ds_prov.getCellData(k, "amt")) - Number(ds_prov.getCellData(k, "setlAmt"));
                reqSumFcrc = Number(ds_prov.getCellData(k, "amtFcrc")) - Number(ds_prov.getCellData(k, "setlAmtFcrc"));
                slipNo = ds_prov.getCellData(k, "slipNo");
                clntNo = ds_prov.getCellData(k, "clntNo"); //업무가지급금정산시 거래처번호 입력(거래처관리)

                if (slipSum > reqSum && ds_prov.getCellData(k, "crcCd") == ACConstants.KOREA_WON) {
                  await $c.gus.cfAlertMsg($p, "[전표번호:" + slipNo + "] 에 대해서 \n신청된 가지급금 잔액(" + reqSum + ") 보다 정리금액(" + slipSum + ")이 초과했습니다.");
                  return;
                }
                if (slipSumFcrc > reqSumFcrc && ds_prov.NameString(k, "crcCd") != '<%=ACConstants.KOREA_WON%>') {
                  await $c.gus.cfAlertMsg($p, "[전표번호:" + slipNo + "] 에 대해서 \n신청된 가지급금 외화잔액(" + reqSumFcrc + ") 보다 정리외화금액(" + slipSumFcrc + ")이 초과했습니다.");
                  return;
                }
              }
            }
          }
        }
      }
    }
    // 팝업모드가 아닐경우
  } else {
    console.log("     팝업모드 아님 - 금액체크");
    //
    if (rcpSum == 0 && bCrcCd == "KRW") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "입금액"));
      return;
    }
    if (rcpSumFcrc == 0 && bCrcCd == "FRN") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "입금외화금액"));
      return;
    }
  }

  // 저장 또는 팝업리턴처리
  // Flag값으로 팝업일경우 부모페이지로, 결과갑을 넘겨주고 창을 닫고,
  // 팝업모드가 아닐경우, 저장 CMD로직을 따른다.
  var arrRtnVal = new Array();

  // <C> Col=summary		  	  Ctrl=txt_summary        Param=value         </C>
  // <C> Col=setlDt        	  Ctrl=ed_setlDt          Param=text 	      </C>
  // <C> Col=reqAcctDeptCd     Ctrl=c_reqAcctDeptCd    Param=text 	      </C> 
  // <C> Col=bankbookNo    	  Ctrl=txt_bankbookNo  	  Param=value 	      </C> 
  // <C> Col=bankbookNm    	  Ctrl=txt_bankbookNm  	  Param=value 	      </C> 
  // <C> Col=bankAcntNo    	  Ctrl=txt_bankAcntNo  	  Param=value 	      </C> 
  // <C> Col=bankbookKndNm     Ctrl=txt_bankbookKndNm  Param=value 	      </C>  
  // <C> Col=susPayClsCd		  Ctrl=c_susPayClsCd      Param=BindColVal    </C>   
  // <C> Col=reqAcctDeptNm     Ctrl=c_reqAcctDeptNm    Param=value 	      </C>    

  ds_provHeader.setCellData(0, "reqAcctDeptCd", ed_reqAcctDeptCd.getValue()); // 요청부서코드
  ds_provHeader.setCellData(0, "setlDt", ica_setlDt.getValue()); // 정리일자

  // KYU_NEW
  // 통장번호 UDC 에 ds_provHeader.bankbookNo 걸어놓으면 오동작 발생 (통장번호에 계좌번호가 들어감)
  ds_provHeader.setCellData(0, "bankbookNo", ed_bankbookNo.getValue()); // 통장번호
  ds_provHeader.setCellData(0, "bankAcntNo", ed_bankAcntNo.getValue()); // 통장계좌번호
  ds_provHeader.setCellData(0, "bankbookKndNm", ed_bankbookKndNm.getValue()); // 통장종류명
  ds_provHeader.setCellData(0, "bankbookNm", ed_bankbookNm.getValue()); // 통장명

  console.log("  가지급금구분코드 [" + lc_susPayClsCd.getValue() + "]");
  ds_provHeader.setCellData(0, "susPayClsCd", lc_susPayClsCd.getValue()); // 가지급금구분코드 (계정)
  ds_provHeader.setCellData(0, "reqAcctDeptNm", ed_reqAcctDeptNm.getValue()); // 요청부서명

  var dc2 = ds_provHeader.getAllArray();
  console.log("  *** ds_provHeader (" + ds_provHeader.getTotalRow() + ") : " + JSON.stringify(dc2));

  // if($c.gus.cfValidate([gr_prov])) {

  // dataName="가지급금 전표정리" 
  // validFeatures="ignoreStatus=no"
  // validExp="rcptAmt:입금액:no:minNumber=0&maxLength=13,
  //  	        setlIntendAmt:정리금액:no:minNumber=0&maxLength=13"

  var validArry = [{
    id: "rcptAmt",
    name: "입금액",
    minNumber: 0
  }, {
    id: "setlIntendAmt",
    name: "정리금액",
    minNumber: 0
  }];

  // let rtn2 = await $c.gus.cfValidateGrid([gr_prov]);

  let gridName = "가지급금내역";
  let rtn3 = await $c.gus.cfValidateGrid($p, gr_prov, null, null, validArry, gridName);
  if (rtn3) {
    if (scwin.flag == 'Y') {
      console.log("     팝업모드 - 발행");

      // if(confirm(MSG_CM_CRM_001)==true){
      let rtn = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (rtn) {
        // 리턴 처리
        // arrRtnVal.prov = "";
        // arrRtnVal.provHeader = "";

        rt_prov.setJSON([]);
        rt_prov.insertRow();
        rt_prov.setRowPosition(0);

        // rt_prov 순차 복사 (리턴 ds 으로 복사)
        for (j = 0; j < ds_prov.getTotalRow(); j++) {
          // if(ds_prov.RowStatus(j)==3){  // 0: Normal, 1: Insert, 2: Delete, 3: Update, 4: Logical
          if (ds_prov.getRowStatus(j) == "U") {
            // R:초기상태, U:갱신, C:삽입, D:삭제, V:삽입 후 삭제
            ds_prov.setCellData(j, "rltSeq", scwin.txtrltSeq);

            // KYU_TEST : 검증해볼 것
            // arrRtnVal.prov += ds_prov.ExportData(j,1,true);

            rt_prov.setRowData(rt_prov.getTotalRow(), ds_prov.getRowData(j));
          }
        }
        ds_provHeader.setCellData(0, "rltSeq", scwin.txtrltSeq);

        // rt_provHeader 리턴 ds 으로 복사
        // arrRtnVal.provHeader = ds_provHeader.ExportData(1,1,true);

        rt_provHeader.removeAll();
        rt_provHeader.insertRow();
        rt_provHeader.setRowPosition(0);
        var dcJSON = ds_provHeader.getAllJSON(); // JSON 배열로 담기
        rt_provHeader.setJSON(dcJSON, true); // append

        // window.returnValue = arrRtnVal ;

        // 신규: 응답구조체에 리턴 추가
        arrRtnVal.prov = rt_prov.getAllArray();
        arrRtnVal.provHeader = rt_provHeader.getAllArray();
        console.log("  --- ds_evidac.prov [" + JSON.stringify(arrRtnVal.prov) + "]");
        console.log("  --- ds_evidac.provHeader [" + JSON.stringify(arrRtnVal.provHeader) + "]");
        let rt = [arrRtnVal.prov, arrRtnVal.provHeader];

        // window.close();
        $c.win.closePopup($p, rt);
      }
    } else {
      console.log("     팝업 아님 - 발행");
      let rtn = await $c.win.confirm($p, "발행하시겠습니까");
      if (rtn) {
        // 리턴 처리
        // tr_saveProv.Action= "/ac.fi.gnrlaccount.slipmgnt.SaveSuspensePayableRequestSettlementContentsCMD.do";
        // tr_saveProv.post();
        $c.sbm.execute($p, sbm_save);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 발행 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone (발행 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- 저장 TR -->
  // language=JavaScript for=tr_saveProv event=OnSuccess()>
  var dc = ds_slipNo.getAllArray();
  console.log("  *** ds_slipNo (" + ds_slipNo.getTotalRow() + ") : " + JSON.stringify(dc));
  if (scwin.flag == 'Y') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  } else {
    if (ds_slipNo.getCellData(0, "slipNo") != "") {
      console.log("정상 수행 !!!!");
      $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
    }
  }

  // ds_provHeader.ClearData();
  scwin.f_Clear();
  scwin.f_Retrieve();
};

// -------------------------------------------------------------------------
// 체크
// -------------------------------------------------------------------------
scwin.validation = async function () {
  console.log("=== validation (체크)");

  // if (!$c.gus.cfValidate([ica_setlDt,ed_summary]))
  let rtn = await $c.gus.cfValidate($p, [ica_setlDt, ed_summary]);
  if (!rtn) {
    console.log("------ cfValidate 오류");
    return false;
  }

  // 정리일자는 신청일자(작성일자)보다 이전이어서는 안된다
  var rcptAmt = 0;
  var rcptAmtFcrc = 0;
  for (var idx = 0; idx < ds_prov.getTotalRow(); idx++) {
    // if (ds_prov.RowStatus(idx) == 3){
    if (ds_prov.getRowStatus(idx) == "U") {
      rcptAmt = rcptAmt + Number(ds_prov.getCellData(idx, "rcptAmt"));
      rcptAmtFcrc = rcptAmtFcrc + Number(ds_prov.getCellData(idx, "rcptAmtFcrc"));

      // 작성일자, 정리일자
      if (!$c.gus.cfIsAfterDate($p, ds_prov.getCellData(idx, "slipDt"), ica_setlDt.getValue().trim())) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "[전표번호:" + ds_prov.getCellData(idx, "slipNo") + "] 정리일자", "작성일자"));
        ica_setlDt.focus();
        return false;
      }
    }
  } // for end

  console.log("  -- 통장번호 체크 이전 rcptAmt [" + rcptAmt + "]  rcptAmtFcrc [" + rcptAmtFcrc + "]");

  // KYU_ISSUE : 통장코드 mandatory 처리 불필요
  // <input type="TEXT" class=input_text id=txt_bankbookNo size=5 	maxlength="5" objType="Data" name="txt_bankbookNo" validExp="통장명:no" hidVal=""
  //   <% if(!flag.equals("Y")){ %> mandatory="true" <% } %> onBlur="f_checkPopIn(txt_bankbookNo,txt_bankAcntNo,txt_bankbookKndNm,txt_bankbookNm,'3')">

  // 입금액이 있을 경우만 통장명 필수,적요도 필수
  if (rcptAmt > 0 || rcptAmtFcrc > 0) {
    if (ed_bankbookNo.getValue() == "") {
      console.log("  --- 통장명 없음 !!");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "통장명"));
      ed_bankbookNo.focus();
      return false;
    }
    if (ed_summary.getValue() == "") {
      console.log("  --- 적요 없음 !!");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "적요"));
      ed_summary.focus();
      return false;
    }
  }
  return true;
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 요청부서 focus out
//-------------------------------------------------------------------------
scwin.udc_reqAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '2');
};

//-------------------------------------------------------------------------
// 신청자 focus out
//-------------------------------------------------------------------------
scwin.udc_reqEmpNo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_reqEmpNo, ed_reqEmpNm, '1');
};

//-------------------------------------------------------------------------
// 닫기 (팝업일 때)
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  // window.returnValue=null; window.close()"
  $c.win.closePopup($p, ["N/A"]);
};

//-------------------------------------------------------------------------
// 전표번호 클릭
//-------------------------------------------------------------------------
scwin.gr_prov_oncellclick = function (rowIndex, columnIndex, columnId) {
  // <!-- 전표번호클릭시  -->   
  // <script language="javascript"  for=gr_prov event=OnClick(Row,Colid)>
  Colid = columnId;
  Row = rowIndex;
  var clsCd = "";
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_prov.getCellData(Row, "slipNo"));
    clsCd = "";
  } else if (Colid == "setlAmt" && Row >= 0) {
    clsCd = "A";
    if (ds_prov.getCellData(Row, "setlAmt") != 0) {
      scwin.f_SetlAmt(clsCd);
    }
  } else if (Colid == "setlAmtFcrc" && Row >= 0) {
    clsCd = "A";
    if (ds_prov.getCellData(Row, "setlAmtFcrc") != 0) {
      scwin.f_SetlAmt(clsCd);
    }
  }
  if (Colid == "postSetlAmt" && Row >= 0) {
    clsCd = "B";
    if (ds_prov.getCellData(Row, "postSetlAmt") != 0) {
      scwin.f_SetlAmt(clsCd);
    }
  }
  if (Colid == "postSetlAmtFcrc" && Row >= 0) {
    clsCd = "B";
    if (ds_prov.getCellData(Row, "postSetlAmtFcrc") != 0) {
      scwin.f_SetlAmt(clsCd);
    }
  }
};

// -------------------------------------------------------------------------
// 기정리금액조회팝업
// -------------------------------------------------------------------------
scwin.f_SetlAmt = async function (clsCd) {
  console.log("^^^^^ f_SetlAmt (기정리금액조회 오픈)  clsCd : " + clsCd);

  // var width = 610, height = 500;
  // var sFeatures = "dialogWidth:" + width + "px;"
  //                 + "dialogHeight:" + height + "px;"
  //                 + "center:Yes;help:No;resizable:No;status:No;scroll:No";
  // sURL = "/ac/fi/gnrlaccount/slipmgnt/fi_201_02_03p.jsp"
  //             + "?slipNo=" + ds_prov.getCellData(ds_prov.getRowPosition(),"slipNo")+clsCd;
  // window.showModalDialog(sURL,null,sFeatures);

  var data = {
    slipNo: ds_prov.getCellData(ds_prov.getRowPosition(), "slipNo") + clsCd // ?
  };
  console.log("^^^^^  before 201_02_03p (기정리금액조회) data " + JSON.stringify(data));
  var opts = {
    id: "postSetlAmtPop",
    popupName: "기정리금액조회",
    modal: true,
    type: "browserPopup",
    width: 610,
    height: 500,
    title: "Win pop"
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_03p.xml", opts, data);
};

// -------------------------------------------------------------------------
// 그리드 onviewchange (기존 onExit)
// -------------------------------------------------------------------------
scwin.gr_prov_onviewchange = async function (info) {
  console.log("=== gr_prov_onviewchange (입금액 체크)");
  var row = info.rowIndex;
  var colidx = info.colIndex;
  var colid = info.colId;
  var olddata = info.oldValue;
  console.log("  row [" + row + "]   coldid [" + colidx + " - " + colid + "]  value(olddata) [" + olddata + "]");

  // <!-- 입금액 체크 -->
  // language=JavaScript for=gr_prov event=OnExit(row,colid,olddata)>

  // 금액, 정리예정금액
  if (colid == "rcptAmt" || colid == "setlIntendAmt") {
    if (scwin.flag == 'Y') {
      console.log("금액  정리예정금액 - 팝업");

      // 팝업
      if (ds_prov.getCellData(row, "setlCompleteYn") == "1") {
        cfAlertMsg($c.data.getMessage($p, MSG_CM_ERR_041, "정리완료된건", "입금액이나 정리금액을 등록"));
        f_PrevValue(row, colid, olddata);
      }
      if (ds_prov.getCellData(row, "postYn") == "0") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "미기표된건", "입금액이나 정리금액을 등록"));
        f_PrevValue(row, colid, olddata);
      }
      if (ds_prov.getCellData(row, "crcCd") == ACConstants.KOREA_WON && Number(ds_prov.getCellData(row, "amt")) - Number(ds_prov.getCellData(row, "setlAmt")) < Number(ds_prov.getCellData(row, "rcptAmt")) + Number(ds_prov.getCellData(row, "setlIntendAmt"))) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "입금액+정리금액", "잔액"));
        if (colid == "rcptAmt") {
          ds_prov.setCellData(row, "rcptAmt", olddata);
        }
        if (colid == "setlIntendAmt") {
          ds_prov.setCellData(row, "setlIntendAmt", olddata);
        }
      } else {
        // gr_prov.SetColumn(colid);
        gr_prov.setFocusedCell(row, colidx, true);
      }
    } else {
      console.log("금액  정리예정금액 - 메인");
      // 메인
      if (ds_prov.getCellData(row, "setlCompleteYn") == "1") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "정리완료된건", "입금액을 등록"));
        scwin.f_PrevValue(row, colid, olddata);
      }
      if (ds_prov.getCellData(row, "postYn") == "0") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "미기표된건", "입금액을 등록"));
        scwin.f_PrevValue(row, colid, olddata);
      }
      if (Number(ds_prov.getCellData(row, "amt")) - Number(ds_prov.getCellData(row, "setlAmt")) < Number(ds_prov.getCellData(row, "rcptAmt"))) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "입금액", "잔액"));
        ds_prov.setCellData(row, "rcptAmt", olddata);
      } else {
        // gr_prov.SetColumn(colid);
        gr_prov.setFocusedCell(row, colidx, true);
      }
    }
  }
  // 입금액(외화)  정리예정금액(외화)
  else if (colid == "rcptAmtFcrc" || colid == "setlIntendAmtFcrc") {
    if (scwin.flag == 'Y') {
      console.log("입금액(외화)  정리예정금액(외화) - 팝업");
      if (ds_prov.getCellData(row, "setlCompleteYn") == "1") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "정리완료된건", "입금액이나 정리금액을 등록"));
        scwin.f_PrevValue(row, colid, olddata);
      }
      if (ds_prov.getCellData(row, "postYn") == "0") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "미기표된건", "입금액이나 정리금액을 등록"));
        sciwn.f_PrevValue(row, colid, olddata);
      }
      if (ds_prov.getCellData(row, "crcCd") != ACConstants.KOREA_WON && parseFloat(ds_prov.getCellData(row, "amtFcrc") - ds_prov.getCellData(row, "setlAmtFcrc")).toFixed(2) < Number(ds_prov.getCellData(row, "rcptAmtFcrc")) + Number(ds_prov.getCellData(row, "setlIntendAmtFcrc"))) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "입금액+정리금액", "잔액"));
        if (colid == "rcptAmtFcrc") {
          ds_prov.setCellData(row, "rcptAmtFcrc", olddata);
        }
        if (colid == "setlIntendAmtFcrc") {
          ds_prov.setCellData(row, "setlIntendAmtFcrc", olddata);
        }
      } else {
        //    gr_prov.SetColumn(colid);
        gr_prov.setFocusedCell(row, colidx, true);
      }
    } else {
      console.log("입금액(외화)  정리예정금액(외화) - 메인");
      if (ds_prov.getCellData(row, "setlCompleteYn") == "1") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "정리완료된건", "입금액을 등록"));
        scwin.f_PrevValue(row, colid, olddata);
      }
      if (ds_prov.getCellData(row, "postYn") == "0") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "미기표된건", "입금액을 등록"));
        scwin.f_PrevValue(row, colid, olddata);
      }
      if (Number(ds_prov.getCellData(row, "amtFcrc")) - Number(ds_prov.getCellData(row, "setlAmtFcrc")) < Number(ds_prov.getCellData(row, "rcptAmtFcrc"))) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "입금액", "잔액"));
        ds_prov.setCellData(row, "rcptAmtFcrc", olddata);
      } else {
        // gr_prov.SetColumn(colid);
        gr_prov.setFocusedCell(row, colidx, true);
      }
    }
  }
};

// -------------------------------------------------------------------------
// 금액setting
// -------------------------------------------------------------------------
scwin.f_PrevValue = function (row, colid, olddata) {
  if (colid == "rcptAmt") {
    ds_prov.setCellData(row, "rcptAmt", olddata);
  }
  if (colid == "setlIntendAmt") {
    ds_prov.setCellData(row, "setlIntendAmt", olddata);
  }
  if (colid == "rcptAmtFcrc") {
    ds_prov.setCellData(row, "rcptAmtFcrc", olddata);
  }
  if (colid == "setlIntendAmtFcrc") {
    ds_prov.setCellData(row, "setlIntendAmtFcrc", olddata);
  }
};

// @@ ====== 파일   ============================================================================ //

// -------------------------------------------------------------------------
// 엑셀 파일 다운로드
// -------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_prov");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "가지급금 입금","가지급금 입금.xls",8+16);
  // }

  var sheetTitle = "가지급금 입금";
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리
    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: true // 줄바꿈
    };
    $c.data.downloadGridViewExcel($p, gr_prov, options);
  }
};

// @@ ====== 미사용 ============================================================================ //

// -------------------------------------------------------------------------
// 통화코드가 변경될때
// -------------------------------------------------------------------------
scwin.f_crcCdChange = function () {
  // 이벤트 삭제
  if (lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    gr_prov.setColumnVisible('amt', true);
    gr_prov.setColumnVisible('setlAmt', true);
    gr_prov.setColumnVisible('charge', true);
    gr_prov.setColumnVisible('setlIntendAmt', true); // 정리금액
    gr_prov.setColumnVisible('rcptAmt', true); // 입금액
    gr_prov.setColumnVisible('amtFcrc', false);
    gr_prov.setColumnVisible('setlAmtFcrc', false);
    gr_prov.setColumnVisible('chargeFcrc', false);
    gr_prov.setColumnVisible('setlIntendAmtFcrc', false);
    gr_prov.setColumnVisible('rcptAmtFcrc', false);
    gr_prov.setColumnVisible('exchRt', false);
    gr_prov.setColumnVisible('crcCd', false);
  } else {
    gr_prov.setColumnVisible('amt', false);
    gr_prov.setColumnVisible('setlAmt', false);
    gr_prov.setColumnVisible('charge', false);
    gr_prov.setColumnVisible('setlIntendAmt', false); // 정리금액
    gr_prov.setColumnVisible('rcptAmt', false); // 입금액
    gr_prov.setColumnVisible('amtFcrc', true);
    gr_prov.setColumnVisible('setlAmtFcrc', true);
    gr_prov.setColumnVisible('chargeFcrc', true);
    gr_prov.setColumnVisible('setlIntendAmtFcrc', true);
    gr_prov.setColumnVisible('rcptAmtFcrc', true);
    gr_prov.setColumnVisible('exchRt', true);
    gr_prov.setColumnVisible('crcCd', true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:115px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:10%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 65px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:ds_search.crcCd',chooseOptionLabel:'전체',visibleRowNum:'25',sortMethod:'ascending',sortOption:'value',title:'통화코드'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_setlCompleteYn',style:'width:100px;',submenuSize:'auto',objType:'data',ref:'data:ds_search.setlCompleteYn',title:'완료여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'form-control',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_susPayClsCd',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:ds_search.susPayClsCd',title:'계정'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lb_reqAcctDeptCd',label:'신청부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfopopup',style:'',codeId:'ed_reqAcctDeptCd',nameId:'ed_reqAcctDeptNm',selectID:'retrieveAcctDeptCdInfo',UpperFlagCode:'1',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'data',maxlengthCode:'5',id:'udc_reqAcctDeptCd',btnId:'btn_reqAcctDeptCd','ev:onclickEvent':'scwin.udc_reqAcctDeptCd_onclickEvent',maxlengthName:'50',refDataCollection:'ds_search',code:'reqAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_reqAcctDeptCd_onblurCodeEvent',validTitle:'신청부서',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr',id:'st_reqEmpNo'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcEmpInfopopup',selectID:'retrieveAcEmpInfo',codeId:'ed_reqEmpNo',validTitle:'신청자',nameId:'ed_reqEmpNm',style:'',id:'udc_reqEmpNo',btnId:'btn_reqEmpNo','ev:onclickEvent':'scwin.udc_reqEmpNo_onclickEvent',refDataCollection:'ds_search',code:'reqEmpNo','ev:onblurCodeEvent':'scwin.udc_reqEmpNo_onblurCodeEvent',allowCharCode:'0-9',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',codeWidth:'80'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'st_sum'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'bl_amt',label:'정산금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_sum',style:'width: 150px;',title:'정산금액'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청전표 회계처리',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:ds_search.postYn',title:'신청전표회계처리'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결재'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가결'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정리예정일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_setlIntendDt',refDataMap:'ds_search',refEdDt:'setlIntendDtTo',refStDt:'setlIntendDtFrom',style:'',edFromId:'ed_setlIntendDtFrom',edToId:'ed_setlIntendDtTo',titleFrom:'정리예정일From',titleTo:'정리예정일To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_reqDt',refDataMap:'ds_search',refEdDt:'reqDtTo',refStDt:'reqDtFrom',style:'',edFromId:'ed_reqDtFrom',edToId:'ed_reqDtTo',titleFrom:'요청일자From',titleTo:'요청일자To'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'st_reqDt'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결산일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_reqDt',style:'',ref:'data:ds_search.reqDt',title:'결산일자',displayFormat:'yyyy/MM/dd'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',disabled:'',escape:'false',id:'btn_retrieve2',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'잔액조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'가지급금 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_prov',gridDownFn:'scwin.f_Excel',id:'udc_gridMain',btnUser:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',dataList:'data:ds_prov',scrollByColumn:'false',style:'',id:'gr_prov',visibleRowNum:'11',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncellclick':'scwin.gr_prov_oncellclick','ev:onafteredit':'scwin.gr_prov_onafteredit','ev:onviewchange':'scwin.gr_prov_onviewchange',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'전표번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'작성일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'요청일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column9',value:'신청부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column8',value:'신청자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column7',value:'사원거래처번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column6',value:'거래처명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column5',value:'정리예정일',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column4',value:'통화',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column3',value:'환율',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'신청금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'신청외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'기정리금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column21',value:'기정리금액(회계처리)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'기정리외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column17',value:'기정리외화금액(회계처리)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'잔액외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lb_setlIntendAmt',value:'정리금액',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lb_rcptAmt',value:'입금액',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lb_setlIntendAmtFcrc',value:'정리외화금액',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lb_rcptAmtFcrc',value:'입금외화액',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column33',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'회계처리여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'정리환율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'slipNo',blockSelect:'false',displayMode:'label',style:';color:blue;',disabled:'false',class:'underline',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'slipDt',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',displayFormat:'####/##/##',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'reqDt',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',displayFormat:'####/##/##',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'reqAcctDeptNm',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',textAlign:'left',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'reqEmpNm',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',textAlign:'left',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'setlIntendDt',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',displayFormat:'yyyy/MM/dd',customFormatter:'scwin.changeCellColorExp',dataType:'date',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'crcCd',blockSelect:'false',displayMode:'label',disabled:'false',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'exchRt',blockSelect:'false',displayMode:'label',disabled:'false',dataType:'number',readOnly:'true',displayFormat:'#,##0.00',textAlign:'left',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',displayFormat:'#,##0',disabled:'false',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',displayFormat:'#,##0',disabled:'false',dataType:'number',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:';color:black;',id:'setlAmt',value:'',displayMode:'label',displayFormat:'#,##0',disabled:'false',dataType:'number',class:'underline',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'170',inputType:'text',style:';color:black;',id:'postSetlAmt',value:'',displayMode:'label',displayFormat:'#,##0',disabled:'false',dataType:'number',class:'underline',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'setlAmtFcrc',value:'',displayMode:'label',displayFormat:'#,##0.##',disabled:'false',dataType:'float',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'170',inputType:'text',style:'',id:'postSetlAmtFcrc',value:'',displayMode:'label',displayFormat:'#,##0.##',disabled:'false',dataType:'float',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'charge',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',disabled:'false',readOnly:'true',customFormatter:'scwin.chargeCalColorExp'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'chargeFcrc',value:'',displayMode:'label',displayFormat:'#,##0.##',disabled:'false',readOnly:'true',customFormatter:'scwin.chargeFcrcCalColorExp',dataType:'float',maxLength:'15.5'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'setlIntendAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'false',textAlign:'right',customFormatter:'scwin.changeCellColorExp',hidden:'false',minValue:'0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'rcptAmt',value:'',displayMode:'label',allowChar:'0-9',displayFormat:'#,##0',dataType:'float',disabled:'false',readOnly:'false',customFormatter:'scwin.changeCellColorExp',hidden:'false',minValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'setlIntendAmtFcrc',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0.##',readOnly:'false',textAlign:'right',customFormatter:'scwin.changeCellColorExp',maxLength:'15.5'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'rcptAmtFcrc',value:'',displayMode:'label',displayFormat:'#,##0.##',dataType:'float',readOnly:'false',customFormatter:'scwin.changeCellColorExp',maxLength:'15.5'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label',disabled:'false',readOnly:'true',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'postYn',value:'',displayMode:'label',disabled:'false',readOnly:'true',displayFormatter:'scwin.postYnExp',customFormatter:'scwin.changeCellColorExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'setexchRt',value:'',displayMode:'label',disabled:'false',displayFormat:'#,##0.00',dataType:'number',readOnly:'true',textAlign:'left',customFormatter:'scwin.changeCellColorExp'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column51',value:'',displayMode:'label',expression:'sum(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column50',value:'',displayMode:'label',expression:'sum(\'amtFcrc\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column49',value:'',displayMode:'label',expression:'sum(\'setlAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'170',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',expression:'sum(\'postSetlAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',expression:'sum(\'setlAmtFcrc\')',displayFormat:'#,##0.0#',dataType:'float'}},{T:1,N:'w2:column',A:{textAlign:'right',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',expression:'sum(\'postSetlAmtFcrc\')',displayFormat:'#,##0.0#',dataType:'float'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',expression:'sum(\'amt\')-sum(\'setlAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',expression:'sum(\'amtFcrc\')-sum(\'setlAmtFcrc\')',dataType:'float',displayFormat:'#,##0.0#'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum(\'setlIntendAmt\')',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',expression:'sum(\'rcptAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',displayFormat:'#,##0.0#',expression:'sum(\'setlIntendAmtFcrc\')',dataType:'float',textAlign:'right'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'sum(\'rcptAmtFcrc\')',dataType:'float',displayFormat:'#,##0.0#'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'lb_bankbookNo',label:'통장명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveBankBookCdInfo',codeId:'ed_bankbookNo',popupID:'retrieveBankBookCdInfopopup',validTitle:'통장명',nameId:'ed_bankbookNm',style:'width:%; height:px; ',id:'udc_bankbookNo',btnId:'btn_bankbookNo','ev:onclickEvent':'scwin.udc_bankbookNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bankbookNo_onblurCodeEvent',refDataCollection:'ds_provHeader',skipOnBlurCodeValueEmpty:'N',maxlengthCode:'5',mandatoryCode:'true',objTypeCode:'data',allowCharCode:'0-9'}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_bankAcntNo',placeholder:'',class:'',ref:'data:ds_provHeader.bankAcntNo',title:'계좌번호'}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_bankbookKndNm',placeholder:'',class:'',ref:'data:ds_provHeader.bankbookKndNm',title:'통장종류명'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_setlDt',style:'',objType:'data',mandatory:'true',validExp:'정리일자:yes:date=YYYYMMDD',placeholder:' ',displayFormat:'yyyy/MM/dd',ref:'data:ds_provHeader.setlDt',title:'정리일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_summary',placeholder:'',style:'',validExp:'적요:no:maxByteLength=100',ref:'data:ds_provHeader.summary',title:'적요',maxlength:'100'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_bSav',label:'발행',style:'',userAuth:'U','ev:onclick':'scwin.f_Save'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'저장',style:'','ev:onclick':'scwin.f_Save',userAuth:'U'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_close',label:'닫기',style:'','ev:onclick':'scwin.btn_close_onclick'}}]}]}]}]}]}]}]})