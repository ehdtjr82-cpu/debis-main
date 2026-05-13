/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_10b.xml 144478 03bf1a948f6d60e4e883d6e2d84e0063791555e4155202465b92e4c856f6b486 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDept',name:'신고부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDeptNm',name:'신고부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'플래그',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_slipHeader'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deptdis',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_withhold',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_withhold_onrowpositionchange','ev:ondataload':'scwin.ds_withhold_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text',ignoreStatus:''}},{T:1,N:'w2:column',A:{id:'withholdNo',name:'원천세번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'totStaff',name:'총인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mmWorkDdCnt',name:'월근무일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxnStaff',name:'과세인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totSal',name:'공급가액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxnTrgtSal',name:'과세대상',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'incomeTax',name:'소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'manTax',name:'주민세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hlthInsr',name:'건강보험금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ntnalPension',name:'국민연금금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hireInsr',name:'고용보험금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hlthClntNo',name:'건강보험거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hlthClntNm',name:'건강보험거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hireClntNo',name:'고용보험거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hireClntNm',name:'고용보험거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ntnalClntNo',name:'국민연금거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ntnalClntNm',name:'국민연금거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdAcctDeptCd',name:'건강/고용/국민귀속코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdAcctDeptNm',name:'원천세회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdClsCd',name:'원천세구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeClntNo',name:'사업소득-거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeClntNm',name:'사업소득-거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeTax',name:'사업소득-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizManTax',name:'사업소득-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcIncomeClntNo',name:'기타소득-거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcIncomeClntNm',name:'기타소득-거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcIncomeTax',name:'기타소득-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcManTax',name:'기타소득-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'addr',name:'주소',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ssn',name:'주민등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'name',name:'사용자명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'businessClsCd',name:'업종구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'incomeClsCd',name:'소득구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'localAlienClsCd',name:'내/외국인구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'taxDt',name:'세금계산서일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reverseSlipNo',name:'역전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'aggrYn',name:'집계여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'needEpenseYn',name:'필요경비여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizIncomeCrn',name:'사업소득사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeFirmNm',name:'사업소득거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteCd',name:'근무지코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'근무지명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건저장순번',dataType:'text',defaultValue:'',nullYN:'true'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_withhold_copy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'withholdNo',name:'원천세번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'totStaff',name:'총인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'mmWorkDdCnt',name:'월근무일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxnStaff',name:'과세인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totSal',name:'총급여',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'taxnTrgtSal',name:'과세대상급여',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'incomeTax',name:'소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'manTax',name:'주민세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hlthInsr',name:'건강보험금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ntnalPension',name:'국민연금금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hireInsr',name:'고용보험금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hlthClntNo',name:'건강보험거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hlthClntNm',name:'건강보험거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hireClntNo',name:'고용보험거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'hireClntNm',name:'고용보험거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ntnalClntNo',name:'국민연금거래처',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ntnalClntNm',name:'국민연금거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdAcctDeptCd',name:'건강/고용/국민귀속코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdAcctDeptNm',name:'원천세회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'withholdClsCd',name:'원천세구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeClntNo',name:'사업소득거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeClntNm',name:'사업소득거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeTax',name:'사업소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizManTax',name:'사업소득주민세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcIncomeClntNo',name:'기타소득거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcIncomeClntNm',name:'기타소득거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcIncomeTax',name:'기타소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcManTax',name:'기타소득주민세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'addr',name:'주소',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ssn',name:'주민등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'name',name:'사용자명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'businessClsCd',name:'업종구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'incomeClsCd',name:'소득구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'localAlienClsCd',name:'내/외국인구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'taxDt',name:'세금계산서일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reverseSlipNo',name:'역분개전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'aggrYn',name:'집계여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'needEpenseYn',name:'필요경비여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizIncomeCrn',name:'사업소득사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizIncomeFirmNm',name:'사업소득거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteCd',name:'근무지코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'workSiteNm',name:'근무지명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건저장순번',dataType:'text',defaultValue:''}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrieveWithholdCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_withhold","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_withhold","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.withhold.RegistWithholdCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_withhold","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_slipSave',action:'/ac.fi.taxbiz.withhold.CreateWithholdSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_withhold_copy","key":"IN_DS1"},{"id":"ds_slipHeader","key":"IN_DS2"},{"id":"ds_deptdis","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_slipSave_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_404_01_10b
// 이름     : 원천세등록 (탭)
// 경로     : 재무회계/세무/원천세/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//            1:귀속부서,2:계정,3:거래처,4:건강보험거래처,5:국민연금거래처,6:고용보험거래처,7:원천세귀속부서,8:근무지
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            
//==================================================================================================================

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

scwin.isSubCompany = false; // 자회사여부

scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

scwin.txt_acctDeptCd = "";
scwin.txt_costClsCd = ""; // 비용구분
scwin.txt_acctClsCd = "";
scwin.txt_rltSeq = ""; // 관련사건저장순번 - 문자
scwin.txtCoClsCd = ""; // 회사구분

scwin.ed_coCd_hidVal = ""; // 회사 히든값
scwin.ed_declarDept_hidVal = ""; // 귀속부서 (1)
scwin.ed_acctCd_hidVal = ""; // 계정     (2)
scwin.ed_clntNo_hidVal = ""; // 거래처   (3)
scwin.ed_hlthClntNo_hidVal = ""; // 건강보험거래처 (4)
scwin.ed_ntnalClntNo_hidVal = ""; // 국민연금거래처 (5)
scwin.ed_hireClntNo_hidVal = ""; // 고용보험거래처 (6)
scwin.ed_withholdAcctDeptCd_hidVal = ""; // 4대보귀속부서 (7)
scwin.ed_workSiteCd_hidVal = ""; // 근무지 (8)

scwin.clsCd = ""; // 비용구분
scwin.temp_cnt = 0; // 행삭제,추가용
scwin.rltSeq = "0"; // 관련사건저장순번 - 숫자

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

scwin.rowChangeOk = true; // row 변경 가능 여부 - 최초 조회시 1번 row 대응

//   <param name=SortExpr          value=+payDt+acctCd>
//   <param name=ViewDeletedRow    value=true>
scwin.sort_options = {};
scwin.sort_options.sortIndex = "payDt acctCd"; // 컬럼 나열
scwin.sort_options.sortOrder = "1 1"; // 1: 오름차순

scwin.onpageload = function () {
  console.log("====== onpageload ================== v. 1.04");

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

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI053",
    compID: "lc_withholdClsCd"
  } // 원천세구분코드
  // { grpCd : "FI053", compID : "lc_withholdClsCd",opt :{"range" : "1,D"}  }  // 원천세구분코드
  , {
    grpCd: "FI073",
    compID: "lc_reqPayMthdCd"
  } // 지급수단
  ];
  console.log(" codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 공통코드 후처리
//-------------------------------------------------------------------------
scwin.ondataload = function (e) {
  console.log("=== ondataload (공통코드2중화 - 복사후 필터)");
  let dltStr = "dlt_commonCodeFI053"; // 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFI053_1", true); // dlt_commonCodeFI053_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFI053_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd1 == 'D'"); // 새로운 데이터리스트에 필터("range" : "1,D")
  //  lc_payStsCd.setNodeSet("data:dlt_commonCodeFM053_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑

  // var dc = dlt_commonCodeFI053_1.getAllArray();
  // console.log("  *** dlt_commonCodeFI053_1 ("+dlt_commonCodeFI053_1.getTotalRow()+") : " + JSON.stringify(dc));
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    scwin.f_Header();
    // debugger;
    $c.gus.cfDisableKeyData($p);

    // KYU_NEW : 초기 버튼 비활성
    $c.gus.cfDisableBtn($p, [btn_hlthClntNo, btn_ntnalClntNo, btn_hireClntNo, btn_workSiteCd]);
    console.log("  ==--== 비활성(건강보험거래처 버튼, 국민연금거래처 버튼, 고용보험거래처 버튼, 근무지 버튼)");

    // debugger;
    scwin.f_setCompanyInfo();
    scwin.f_setInitObj();

    // cfDisableBtnOnly([btUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btn_btUpdate]);

    // cfDisableObjects([img_withholdAcctDept,img_clntNo,img_acctCd,ed_withholdAcctDeptCd,txt_withholdAcctDeptNm]);
    $c.gus.cfDisableObjects($p, [btn_withholdAcctDeptCd, btn_clntNo, btn_acctCd, ed_withholdAcctDeptCd, ed_withholdAcctDeptNm]);
    console.log("  ==--== 비활성 (4대보귀속부서돋보기, 거래처 돋보기, 계정 돋보기, 4대보귀속부서, 4대보귀속부서명)");

    // $c.gus.cfSetIMEModeActiveObjects([txt_summary]);  // 구현 불가
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 귀속부서에 따라 Object Init
//-------------------------------------------------------------------------
scwin.f_setInitObj = function () {
  console.log("=== f_setInitObj (귀속부서에 따른 Object Init)  txtCoClsCd [" + scwin.txtCoClsCd + "]");
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처
  $c.gus.cfInitObjects($p, [ed_hlthInsr, ed_hlthClntNo, ed_hlthClntNm]); //건강보험 거래처
  $c.gus.cfInitObjects($p, [ed_ntnalPension, ed_ntnalClntNo, ed_ntnalClntNm]); //국민연금  거래처
  $c.gus.cfInitObjects($p, [ed_hireInsr, ed_hireClntNo, ed_hireClntNm]); //고용보험  거래처
  $c.gus.cfInitObjects($p, [ed_withholdAcctDeptCd, ed_withholdAcctDeptNm]); //4대보험 귀속부서

  // KYU_TEST: 원래 mandatory 아님. 무의미
  // ed_hlthClntNo.mandatory="false" ;								//건강보험
  // ed_ntnalClntNo.mandatory="false" ;								//국민연금
  // ed_hireClntNo.mandatory="false" ; 								//고용보험
  // ed_withholdAcctDeptCd.mandatory="false" ;						//4대보험 귀속부서

  ed_hlthClntNo.setMandatory(false); //건강보험
  ed_ntnalClntNo.setMandatory(false); //국민연금
  ed_hireClntNo.setMandatory(false); //고용보험
  ed_withholdAcctDeptCd.setMandatory(false); //4대보험 귀속부서

  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템
    console.log("  -- 원천세구분코드 FI053 변경 (전체)");

    // lc_withholdClsCd.CBData="<%=GauceUtil.getCodeList("FI053")%>" ;
    lc_withholdClsCd.setNodeSet("data:dlt_commonCodeFI053", "cdNm", "cd");
  } else {
    console.log("  -- 원천세구분코드 FI053 변경 (1,D)");

    // lc_withholdClsCd.CBData="<%=GauceUtil.getCodeList("FI053",1,"D")%>" ;  // FI053	원천세구분	Z1	기타
    lc_withholdClsCd.setNodeSet("data:dlt_commonCodeFI053_1", "cdNm", "cd");
    lc_withholdClsCd.setSelectedIndex(0);
  }
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  ds_search.set("flag", "1");

  // KYU_TEST : 주석 처리. 초기 조회는 의미없음. 데이타 있어도 안나옴.
  // tr_search.post();
  // $c.sbm.execute(sbm_search);

  var thisYm = $c.date.getServerDateTime($p, "yyyyMM");
  ds_search.set("closeYm", thisYm);
  ds_search.set("declarDept", scwin.acctDeptCd);
  ds_search.set("declarDeptNm", scwin.acctDeptNm);
  scwin.ed_declarDept_hidVal = scwin.acctDeptCd;

  // KYU_NEW : 강제로 팝업. 초기 onChange 이벤트 scwin.clsCd  --> 계정의 전체 건수
  scwin.f_openPopUp('1', 'T');
  ica_closeYm.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vCoCd);
  scwin.f_PopUpCompanyInfo('T'); // 속도 지연 문제

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)

  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  // 	cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
  // }else {
  // 	cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
  // }
};

// @@ ===== 조회 =============================================================================== //

//-------------------------------------------------------------------------
// 조회(원천세조회)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!cfValidate([ed_closeYm,ed_declarDept]))
  let rtn = await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept]);
  if (!rtn) return false;

  // if (!cfValidate([ed_coCd]))
  rtn = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!rtn) return false;

  //  ds_search.UseChangeInfo = false;
  ds_search.set("flag", "");

  // <C> Col=coClsCd		         	Ctrl=txtCoClsCd                 Param=value   </C>
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));

  // tr_search.post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(원천세조회) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone");
  var chkCocd = ed_coCd.getValue();
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_withhold event=OnLoadCompleted(rowCnt)>
  //   cfHideDSWaitMsg(gr_withhold);
  //   cfShowTotalRows(totalRows, rowCnt);
  var rowCnt = ds_withhold.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  scwin.temp_cnt = rowCnt;
  if (rowCnt == 0) {
    //cfAlertMsg(MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
  }

  // gr_withhold.ColumnProp('checkYn','HeadCheck')="false";
  gr_withhold.setHeaderValue("checkYn", false); // 헤더 체크 풀기

  if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  }

  // KYU_TEST
  // ds_withhold 의 onRowPosition 발동
  scwin.f_activeOnRowPostion(0, 0);

  // KYU_TEST : 왜 하는 건지
  ed_coCd.setValue(chkCocd);

  // KYU_TEST : 전표번호 있는 row 의 체크박스 비활성화
  scwin.readOnlyCheckYn();
  // 그리드 포커스
  gr_withhold.setFocusedCell(0, "payDt", false);
};

//-------------------------------------------------------------------------
// readOnlyCheckYn  (KYU_TEST)
//-------------------------------------------------------------------------
scwin.readOnlyCheckYn = function () {
  console.log("=== readOnlyCheckYn (전표번호 있는 row 의 체크박스 비활성화)");
  for (i = 0; i < ds_withhold.getTotalRow(); i++) {
    if (gr_withhold.getCellData(i, "slipNo") == "") {
      gr_withhold.setCellReadOnly(i, "checkYn", false);
    } else {
      gr_withhold.setCellReadOnly(i, "checkYn", true);
    }
  }
};

// @@ ====== 그리드 / DS - 기타 ================================================================ //

scwin.ds_withhold_ondataload = function () {
  console.log("----- ds_withhold_ondataload (정렬)");
  // 정렬
  ds_withhold.multisort(scwin.sort_options);
};

//-------------------------------------------------------------------------
// 전표내역팝업 로딩
//-------------------------------------------------------------------------
scwin.gr_withhold_oncellclick = function (rowIndex, columnIndex, columnId) {
  var Row = rowIndex;
  var Colid = columnId;
  // <!-- 전표번호 클릭시  -->
  // language="javascript"  for=gr_withhold event=OnClick(Row,Colid)>
  if (Colid == "slipNo" && ds_withhold.getCellData(Row, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_withhold.getCellData(Row, "slipNo"));
  }
};

//-------------------------------------------------------------------------
// 전체 체크박스 체크
//-------------------------------------------------------------------------
scwin.gr_withhold_onheaderclick = function (headerId) {
  console.log("----- gr_withhold_onheaderclick (전체 체크박스 클릭)");
  var Colid = headerId;
  // <!-- 전체체크박스체크시 -->
  // language="javascript"  for=gr_withhold event=OnHeadCheckClick(Col,Colid,bCheck)>
  var i = 0;
  if (Colid == "checkYn") {
    var bCheck = gr_withhold.getHeaderValue("checkYn"); // 체크 여부
    console.log("    헤더 bCheck (체크여부) [" + bCheck + "]");

    // if ( bCheck == "1"){
    if (bCheck) {
      // 체크 되었을 때
      for (i = 0; i < ds_withhold.getTotalRow(); i++) {
        if (ds_withhold.getCellData(i, "slipNo") == "") {
          console.log("  ---전표번호 [" + i + "][" + ds_withhold.getCellData(i, "slipNo") + "]");
          ds_withhold.setCellData(i, "checkYn", "T");
        } else {
          ds_withhold.setCellData(i, "checkYn", "F"); // KYU_TEST : 반대 케이스 넣어야 함
        }
      }
    } else {
      for (i = 0; i < ds_withhold.getTotalRow(); i++) {
        console.log("  false 전표번호 [" + i + "][" + ds_withhold.getCellData(i, "slipNo") + "]");
        ds_withhold.setCellData(i, "checkYn", "F");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  console.log("=== f_Validation  ▶▶▶▶   row [" + ds_withhold.getRowPosition() + "]");

  // if (!cfValidate([ed_payDt,ed_acctCd,ed_clntNo,txt_mmWorkDdCnt,ed_totSal,ed_taxnTrgtSal,ed_incomeTax,ed_manTax,txt_summary,lc_reqPayMthdCd]))
  let rtn = await $c.gus.cfValidate($p, [ica_payDt, ed_acctCd, ed_clntNo, ed_mmWorkDdCnt, ed_totSal, ed_taxnTrgtSal, ed_incomeTax, ed_manTax, ed_summary, lc_reqPayMthdCd]);
  // let rtn = await $c.gus.cfValidate([ica_payDt]);
  if (!rtn) {
    console.log("    - f_Validate error!");
    return false;
  }

  // KYU_TEST : 이미 포커스 이동했으므로 무의미 - 위의 계정과 아래 계정히든 비교하므로 오류 발생
  // if(!scwin.f_HiddenCheck(ed_acctCd,"계정")) return false;
  // if(!scwin.f_HiddenCheck(ed_clntNo,"거래처")) return false;

  // KYU_ISSUE : 포커스 이동에 따른 로직 제거
  // let ret5 = await scwin.f_HiddenCheck(ed_acctCd,"계정");
  // if ( !ret5 ) return false;
  // let ret6 = await scwin.f_HiddenCheck(ed_clntNo,"거래처");
  // if ( !ret6 ) return false;

  // KYU_TEST : 데이타셋과 비교하는 히든체크 - 무의미 함
  // var row = ds_withhold.getRowPosition();
  // let ret5 = await scwin.f_HiddenCheckDs(ds_withhold.getCellData(row, "acctCd"),"계정");
  // if ( !ret5 ) return false;
  // let ret6 = await scwin.f_HiddenCheckDs(ds_withhold.getCellData(row, "clntNo"),"거래처");
  // if ( !ret6 ) return false;

  // KYU_ORDER : row 이동전 체크로직은 위치 이동 필요 : 저장 전에 for 문으로 체크 or 포커스 원복되었을 때 체크

  //총급여보다 과세대상급여가 클경우
  //과세대상급여보다 소득세, 지방소득세가 클령우
  if (Number(ed_totSal.getValue().trim()) < Number(ed_taxnTrgtSal.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, "총급여는 과세대상급여 보다 커야 합니다");
    ed_totSal.focus();
    return false;
  }
  var temp = 0;
  temp = Number(ed_incomeTax.getValue().trim()) + Number(ed_manTax.getValue().trim()) + Number(ed_hlthInsr.getValue().trim()) + Number(ed_hireInsr.getValue().trim()) + Number(ed_ntnalPension.getValue().trim());
  if (Number(ed_totSal.getValue().trim()) < Number(temp)) {
    await $c.gus.cfAlertMsg($p, "총급여는 (소득세+지방소득세+건강보험+고용보험+국민연금) 보다 커야 합니다");
    ed_totSal.focus();
    return false;
  }
  return true;
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// row 위치 변경되기 이전 (값 채운 거 점검)
//-------------------------------------------------------------------------
// scwin.ds_withhold_onbeforerowpositionchange = async function (info) {

//     var oldRow = info.oldRowIndex;
//     var newRow = info.newRowIndex;
//     var colid   = info.colId;
//     var olddata = info.oldValue;

//     var newStatus = ds_withhold.getRowStatus(newRow) ;
// return;
//     console.log("----- ▶▶▶ row 변경 이전  old ["+oldRow+"] --> new ["+newRow+"]["+newStatus+"]");

//     let row = info.newRowIndex;
//     // let oldRow = info.oldRowIndex;
//     if (row < 0) return;
//     if (ds_withhold.getModifiedIndex().length > 0) {
//         let ret = await scwin.f_canRowPosChange();

//         // let ret = await $c.win.confirm(MSG_CM_CRM_005);
//         if(!ret) {

//             ds_withhold.setEventPause("", true);
//             gr_withhold.setFocusedCell(info.oldRowIndex, 0, false);
//             ds_withhold.setEventPause("", false);
//             return;

//             // if($c.gus.cfIsNull(oldRow)) oldRow = 0;
//             // ds_basetrf.setEventPause("", true);
//             // gr_basetrf.setFocusedCell(oldRow,0, false);
//             // ds_basetrf.setEventPause("", false);
//             // return;
//         }
//     }

//     // if ( )
//     //     let ret = await $c.win.confirm(MSG_CM_CRM_005);
//     //         if (!ret) {
//     //             ds_workPlaceInfo.setEventPause("", true);
//     //             gr_workPlaceInfo.setFocusedCell(info.oldRowIndex, 0);
//     //             ds_workPlaceInfo.setEventPause("", false);
//     //             return;
//     //         }

//     // 최초 1건(oldRow == null), 넘어가려는 신규 row 가 생성(C) 이면 점검 제외
// //     if ( ( oldRow == null ) ||
// //          ( newStatus == "C" ) )
// //         return;

// //     let rtn = await scwin.f_canRowPosChange();

// //     if ( !rtn ) {
// //         console.log("111");
// //         scwin.rowChangeOk = false;
// //         gr_withhold.setFocusedCell(oldRow, 1, true);  // 반드시 편집 플래그(true,false) 지정. return true 대신 사용
// //     } else {
// //         scwin.rowChangeOk = true;
// //     }
//     return true;
// };

//-------------------------------------------------------------------------
// 히든 세팅 : 해당 row 의 공통팝업 로딩 목적 
//-------------------------------------------------------------------------
scwin.f_setHidVal = function () {
  console.log("=== f_setHidVal (히든 세팅)");
  scwin.ed_acctCd_hidVal = ed_acctCd.getValue(); // 계정
  scwin.ed_clntNo_hidVal = ed_clntNo.getValue(); // 거래처
  scwin.ed_hlthClntNo_hidVal = ed_hlthClntNo.getValue(); // 건강보험거래처
  scwin.ed_ntnalClntNo_hidVal = ed_ntnalClntNo.getValue(); // 국민연금거래처
  scwin.ed_hireClntNo_hidVal = ed_hireClntNo.getValue(); // 고용보험거래처
  scwin.ed_withholdAcctDeptCd_hidVal = ed_withholdAcctDeptCd.getValue(); // 4대보귀속부서
  scwin.ed_workSiteCd_hidVal = ed_workSiteCd.getValue(); // 근무지
};

//-------------------------------------------------------------------------
// 그리드 row 변경시 필수항목 체크
//-------------------------------------------------------------------------
scwin.f_canRowPosChange = async function () {
  // <!-- 그리드 로우를 변경하려고 할 경우 - 필수항목 체크-->
  // language=JavaScript for=ds_withhold event=CanRowPosChange(row)>
  console.log("   === f_canRowPosChange (필수항목 체크)  totalRow [" + ds_withhold.getTotalRow() + "] temp_cnt [" + scwin.temp_cnt + "]");

  // if ( ds_withhold.getRowPosition() != ds_withhold.getTotalRow() - 1 ) {
  // if ( ds_withhold.getTotalRow() != 1 && ds_withhold.getTotalRow() > 1 )  {

  // if (ds_withhold.CountRow!=0   && (ds_withhold.CountRow!=temp_cnt) && !f_Validation()){
  if (ds_withhold.getTotalRow() != 0 && ds_withhold.getTotalRow() != scwin.temp_cnt) {
    let rtn1 = await scwin.f_Validation();
    if (!rtn1) {
      // console.log("----- ▶▷    false ");
      return false;
    } else {
      console.log("------------------------------");
      return true;
    }
  } else {
    console.log("------------------------------");
    return true;
  }
};

//-------------------------------------------------------------------------
// row position change (row 변경되었을 때 동작) @@
//-------------------------------------------------------------------------
scwin.ds_withhold_onrowpositionchange = async function (info) {
  // console.log("---=== ▶▶ on row postion change (row position 를 변경) ===========");
  var oldRow = info.oldRowIndex;
  var newRow = info.newRowIndex;
  var oldStatus = ds_withhold.getRowStatus(oldRow);
  var newStatus = ds_withhold.getRowStatus(newRow);
  console.log("----- ▶▶ on row postion change  old [" + oldRow + "][" + oldStatus + "]  new [" + newRow + "][" + newStatus + "]  tot [" + ds_withhold.getRowCount() + "]");
  // debugger;

  if (info.newRowIndex < 0) return;
  if (oldRow == null || newRow == null

  // 신규row == 총건수-1 (마지막 신규 row 는 스킵)
  || newStatus == "C" && newRow == ds_withhold.getRowCount() - 1) return;
  if (ds_withhold.getModifiedIndex().length > 0) {
    // 점검로직
    let ret = await scwin.f_canRowPosChange();

    // let ret = await $c.win.confirm(MSG_CM_CRM_005);
    if (!ret) {
      console.log("222");
      ds_withhold.setEventPause("", true);
      gr_withhold.setFocusedCell(info.oldRowIndex, 1, false);
      ds_withhold.setEventPause("", false);
      return;
    } else {
      if (newStatus == "C") return;
    }
  }
  // debugger;
  console.log("333");
  // 후처리
  let rtn = await scwin.f_activeOnRowPostion(newRow, oldRow);
  if (!rtn) {
    return false;
  }
};

//-------------------------------------------------------------------------
// f_activeOnRowPostion
//-------------------------------------------------------------------------
scwin.f_activeOnRowPostion = async function (rowIndex, oldRow) {
  console.log("  === f_activeOnRowPostion [" + rowIndex + "] (row 변경후 후처리 - 비활성)");

  // if ( oldRow == null || rowIndex == null ) {
  if (rowIndex == null) {
    // 헤더인 경우 
    console.log(" --- 헤더인 경우 제외");
    return false;
  }

  // <!-- 데이타셋 속성제어-->
  // language=JavaScript for=ds_withhold event=OnRowPosChanged(row)>

  // KYU_ISSUE : 조회버튼 누르면 데이타가 없더라도 수정 버튼 활성화
  $c.gus.cfDisableKeyData($p);
  console.log("  <<<<< cfDisableKeyData (다 비활성)");
  $c.gus.cfEnableAllBtn($p);

  // $c.gus.cfDisableObjects([ed_acctNm,ed_clntNm]);
  $c.gus.cfDisableObjects($p, [udc_acctCd]);

  // KYU_ISSUE : 불러온 row 의 컴포넌트 히든 처리?

  if (oldRow < 0) {
    // 최초인 경우(-1)  0 으로 대체
    scwin.ed_acctCd_hidVal = ds_withhold.getCellData(rowIndex, "acctCd"); // 계정
    scwin.ed_clntNo_hidVal = ds_withhold.getCellData(rowIndex, "clntNo"); // 거래처
  } else {
    scwin.ed_acctCd_hidVal = ds_withhold.getCellData(rowIndex, "acctCd"); // 계정
    scwin.ed_clntNo_hidVal = ds_withhold.getCellData(rowIndex, "clntNo"); // 거래처
  }
  if (ds_withhold.getCellData(rowIndex, "slipNo") == "") {
    console.log("  ▷▷ 체크박스 readOnly 해제 - 전표번호 [" + rowIndex + "][" + ds_withhold.getCellData(rowIndex, "slipNo") + "]");
    //    gr_withhold.ColumnProp('checkYn','Edit')= "any";
    // gr_withhold.setColumnDisableEdit  ("checkYn", true);

    gr_withhold.setCellReadOnly(rowIndex, "checkYn", false);
  } else {
    console.log("  ▶▶ 체크박스 readOnly 세팅 - 전표번호 [" + rowIndex + "][" + ds_withhold.getCellData(rowIndex, "slipNo") + "]");
    //    gr_withhold.ColumnProp('checkYn','Edit')= "None";
    // gr_withhold.setColumnDisableEdit("checkYn", false);

    gr_withhold.setCellReadOnly(rowIndex, "checkYn", true);

    // ds_withhold.setCellData(rowIndex, "checkYn", "F");
  }

  // KYU_NEW : 히든 세팅
  scwin.f_setHidVal();
};

//-------------------------------------------------------------------------
// 행복사
//-------------------------------------------------------------------------
scwin.f_CopyRow = async function () {
  console.log("=== f_CopyRow  ▶▶▶▶");

  // if (!cfValidate([ed_closeYm, ed_declarDept]))
  let rtn = await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept]);
  if (!rtn) return;

  // if(!f_HiddenCheck(ed_declarDept,"귀속부서")) return ;
  // let rtn2 = await scwin.f_HiddenCheck(ed_declarDept,"귀속부서");
  // if (!rtn2) return ;
  // debugger;

  // getTotalRow > 0 (행복사이므로)
  if (ds_withhold.getTotalRow() > 0) {
    // 넥스트로 원천세 행복사 기능 사용을 위해 && isSubCompany != true 조건 삭제
    if (ds_withhold.getCellData(ds_withhold.getRowPosition(), "slipNo") == "") {
      console.log("  --- 전표 미발생건 행복사");

      // if ( f_Validation()!=true) return;
      let rtn3 = await scwin.f_Validation();
      if (!rtn3) return;

      // ds_withhold.ImportData(ds_withhold.ExportData(ds_withhold.RowPosition,1,true));
      // ds_withhold.RowPosition = ds_withhold.CountRow;
      // ds_withhold.setRowPosition(ds_withhold.getTotalRow()-1);

      var row = ds_withhold.getRowPosition();
      var newRow = ds_withhold.getRowCount();
      console.log("  현재 row [" + row + "]");
      console.log("  추가 row [" + newRow + "]");
      ds_withhold.setRowData(newRow, ds_withhold.getRowData(row));
      ds_withhold.setRowPosition(newRow);
      gr_withhold.setFocusedCell(newRow, 1, false);
    } else {
      console.log("  --- 전표[" + ds_withhold.getCellData(ds_withhold.getRowPosition(), "slipNo") + "] 발생건 행복사");

      // if ( f_Validation()!=true) return;
      let rtn4 = await scwin.f_Validation();
      if (!rtn4) return;

      // ds_withhold.ImportData(ds_withhold.ExportData(ds_withhold.RowPosition,1,true));
      // ds_withhold.RowPosition = ds_withhold.CountRow;
      // ds_withhold.NameValue(ds_withhold.RowPosition,"slipNo")="";

      var row = ds_withhold.getRowPosition();
      var newRow = ds_withhold.getRowCount();
      console.log("  현재 row [" + row + "]");
      console.log("  추가 row [" + newRow + "]");
      ds_withhold.setRowData(newRow, ds_withhold.getRowData(row));
      ds_withhold.setRowPosition(newRow);
      gr_withhold.setFocusedCell(newRow, 1, false);

      // 신규 row 로 복사된 전표번호는 널 처리
      ds_withhold.setCellData(ds_withhold.getRowPosition(), "slipNo", "");
    }
  } else {
    // 1건도 없으면 아무동작 없슴
    return;
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템
    // lc_withholdClsCd.Enable = true;
    lc_withholdClsCd.setDisabled(false);
  } else {
    // lc_withholdClsCd.Enable = false;
    lc_withholdClsCd.setDisabled(true);
  }
  $c.gus.cfDisableKey($p);
  // $c.gus.cfDisableBtn([bUpdate,img_hlthClntNo,img_ntnalClntNo,img_hireClntNo]);
  $c.gus.cfDisableBtn($p, [btn_hlthClntNo, btn_ntnalClntNo, btn_hireClntNo]);
  console.log("  ==--== 비활성 (건강보험거래처 버튼, 국민연금거래처 버튼, 고용보험거래처 버튼)");
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);

  // cfEnableObjects([ img_clntNo,img_acctCd,ed_withholdAcctDeptCd]);
  $c.gus.cfEnableObjects($p, [btn_clntNo, btn_acctCd, ed_withholdAcctDeptCd]);
  console.log("  ==--== 활성 (거래처버튼, 계정버튼, 4대보귀속부서 )");

  // cfDisableObjects([txt_clntNm,txt_acctNm,ed_hlthClntNo,txt_hlthClntNm,ed_ntnalClntNo,txt_ntnalClntNm,ed_hireClntNo,txt_hireClntNm]);

  $c.gus.cfDisableObjects($p, [ed_clntNm, ed_acctNm, ed_hlthClntNo, btn_hlthClntNo, ed_hlthClntNm, ed_ntnalClntNo, btn_ntnalClntNo, ed_ntnalClntNm, ed_hireClntNo, btn_hireClntNo, ed_hireClntNm]);
  console.log("  ==--== 비활성 (거래처명,계정명, 건강보험거래처 전체, 국민연금거래처 전체, 고용보험거래처 전체 )");

  // KYU_NEW : 2026-02-23 : 총인원 비활성 - 행복사 시에도 수정 못해야 함. (DT팀 협의)
  $c.gus.cfDisableObjects($p, [ed_withholdAcctDeptNm, ed_totStaff]);
  console.log("  NEW ==--== 비활성 ( 4대보귀속부서명, 총인원 )");
  $c.gus.cfEnableObjects($p, [btn_workSiteCd]);
  console.log("  NEW ==--== 활성 ( 근무지 돋보기 )");

  //focus 설정
  ica_payDt.focus();
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  console.log("=== f_AddRow  ▶▶▶▶");

  // KYU_NEW : 그리드 row 변경시 필수항목 체크
  let rtn0 = await scwin.f_canRowPosChange();
  if (!rtn0) return;

  // if (!cfValidate([ed_closeYm,ed_declarDept]))
  let rtn1 = await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept]);
  if (!rtn1) {
    console.log("cfValidate 오류");
    return;
  }

  // KYU_ISSUE : 포커스 이동에 따른 로직 제거
  // if(!f_HiddenCheck(ed_declarDept,"귀속부서")) return ;
  // let rtn2 = await scwin.f_HiddenCheck(ed_declarDept,"귀속부서");
  // if ( !rtn2) {
  //     console.log("cfValidate 오류");
  //     return;
  // }

  // var curRow = 0;
  var curRow = ds_withhold.getTotalRow() - 1;
  if (curRow < 0) {
    curRow = 0;
  }

  // console.log("    curRow ["+curRow+"]");

  // if(ds_withhold.NameValue(ds_withhold.CountRow,"rltSeq")!="0" && ds_withhold.NameValue(ds_withhold.CountRow,"rltSeq")!=null){

  var cellData = ds_withhold.getCellData(curRow, "rltSeq");
  if (!cellData) {
    console.log("   cellData [" + cellData + "]: 셀 데이터가 비어있습니다. (널처리)");
    cellData = null; // 널처리
  }
  console.log("   ▼▼ T [" + ds_withhold.getTotalRow() + "]  curRow [" + curRow + "]  rltSeq [" + ds_withhold.getCellData(curRow, "rltSeq") + "]");

  // rltSeq -  1row : 01,  2row : 2,  3row : 3

  // if( ds_withhold.getCellData( curRow ,"rltSeq") != "0" &&
  //     ds_withhold.getCellData( curRow ,"rltSeq") != null) {
  if (cellData != "0" && cellData != null) {
    // rltSeq = parseInt(ds_withhold.NameValue(ds_withhold.CountRow,"rltSeq")) +1;
    scwin.rltSeq = parseInt(ds_withhold.getCellData(curRow, "rltSeq")) + 1;
    console.log("   111 cellData(rltSeq) : " + cellData + "  scwin.rltSeq : " + scwin.rltSeq);
  } else {
    scwin.rltSeq = scwin.rltSeq + "1";
    console.log("   222 cellData(rltSeq) : " + cellData + "  scwin.rltSeq : " + scwin.rltSeq);
  }
  console.log("  scwin.rltSeq [" + scwin.rltSeq + "]");

  // 이전에 걷어내어져야 함

  // ds_withhold.AddRow();
  if (ds_withhold.getTotalRow() <= 0) {
    ds_withhold.insertRow();
    ds_withhold.setRowPosition(0);
    gr_withhold.setFocusedCell(0, "payDt", true);
  } else {
    ds_withhold.insertRow();

    // KYU_TEST : 행추가시 위치
    ds_withhold.setRowPosition(ds_withhold.getTotalRow() - 1);
    gr_withhold.setFocusedCell(ds_withhold.getRowPosition(), "payDt", true);
  }

  // cfEnableObjects([ img_clntNo,img_acctCd,ed_withholdAcctDeptCd,img_withholdAcctDept,txt_withholdAcctDeptNm]);
  // $c.gus.cfEnableObjects([ btn_clntNo,btn_acctCd,ed_withholdAcctDeptCd,btn_withholdAcctDeptCd,ed_withholdAcctDeptNm]);  //4대보 귀속부서명
  $c.gus.cfEnableObjects($p, [btn_clntNo, btn_acctCd]);
  // KYU_NEW : 근무지 돋보기 활성
  $c.gus.cfEnableObjects($p, [btn_workSiteCd]);
  console.log("  <<<<< cfEnableKeyData");
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_hlthClntNo, btn_ntnalClntNo, btn_hireClntNo]);
  // $c.gus.cfEnableBtnOnly([bSave]);
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  $c.gus.cfDisableObjects($p, [ed_clntNm, ed_acctNm, ed_workSiteNm, ed_hlthClntNo, ed_hlthClntNm, ed_ntnalClntNo, ed_ntnalClntNm, ed_hireClntNo, ed_hireClntNm, ed_totStaff]);
  ica_payDt.focus();
  console.log("  -- 행추가 후 txtCoClsCd [" + scwin.txtCoClsCd + "]");
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템
    // lc_withholdClsCd.Enable = true;
    lc_withholdClsCd.setDisabled(false);
  } else {
    // lc_withholdClsCd.Enable = false;
    lc_withholdClsCd.setDisabled(true);
  }
  if (scwin.vCoCd == "029") {
    //넥스트로
    ds_withhold.setCellData(ds_withhold.getRowPosition(), "withholdAcctDeptCd", "01387"); //귀속부서 기획관리팀(넥스트로) 로 자동 입력
  } else {
    ds_withhold.setCellData(ds_withhold.getRowPosition(), "withholdAcctDeptCd", "00006");
  }

  // KYU_TEST : 4대보귀속부서 체크
  console.log("  ------ 행추가-4대보귀속부서 체크 [" + ds_withhold.getRowPosition() + "]  withholdAcctDeptCd [" + ds_withhold.getCellData(ds_withhold.getRowPosition(), "withholdAcctDeptCd") + "]");
  scwin.f_checkPopEd(ed_withholdAcctDeptCd, ed_withholdAcctDeptNm, '7');

  // KYU_NEW : 4대보 귀속부서
  $c.gus.cfDisableObjects($p, [btn_withholdAcctDeptCd, ed_withholdAcctDeptCd, ed_withholdAcctDeptNm]);
  console.log("  NEW ==--== 비활성 (4대보 귀속부서 전체 )");
  lc_withholdClsCd.setSelectedIndex(0);
  scwin.txt_rltSeq = scwin.rltSeq; // 관련사건저장순번

  console.log("  관련사건저장순번 txt_rltSeq [" + scwin.txt_rltSeq + "]");

  // KYU_TEST : 바인딩
  ds_withhold.setCellData(ds_withhold.getRowPosition(), "rltSeq", scwin.txt_rltSeq);

  // KYU_NEW : 히든 세팅
  scwin.f_setHidVal();
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = async function () {
  console.log("=== f_DeleteRow  ▶▶");

  // 전표번호가 있으면 수정안됨
  if (ds_withhold.getCellData(ds_withhold.getRowPosition(), "slipNo") != "") {
    await $c.win.alert($p, "전표가 생성 되어서 삭제하실 수 없습니다");
    return;
  }

  // 해당 DataSet에 Marked상태인 Row를 모두 삭제시킨다.
  // ds_withhold.DeleteMarked();
  // temp_cnt = ds_withhold.CountRow;

  // var row = ds_withhold.getRowPosition();
  // if (ds_withhold.getRowStatus(row) == "C") {
  //     ds_withhold.removeRow(row);
  // } else {
  //     ds_withhold.deleteRow(row);
  // }

  let row = ds_withhold.getRowPosition();
  $c.data.deleteRow($p, ds_withhold);
  gr_withhold.setFocusedCell(row, 0);
  scwin.temp_cnt = ds_withhold.getRowCount();

  // scwin.rowChangeOk = true;
  // console.log("  삭제 rowChangeOk : "+ scwin.rowChangeOk);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  console.log("=== f_CancelRow  ▶");

  // ds_withhold.UndoMarked();
  // temp_cnt = ds_withhold.CountRow;

  // ds_withhold.undoRow(ds_withhold.getRowPosition()); //UndoMarked(); - modifyRowStatus() 함수에서 undo 가 확인필요

  $c.data.undoRow($p, ds_withhold, "Y");
  scwin.temp_cnt = ds_withhold.getRowCount();

  // scwin.rowChangeOk = true;
  // console.log("  취소 rowChangeOk : "+ scwin.rowChangeOk);
};

// @@ ====== 이벤트 - 팝업 ===================================================================== //

//-------------------------------------------------------------------------
// 부서배부 화면
//-------------------------------------------------------------------------
scwin.f_DeptDis = async function (e) {
  console.log("=== f_DeptDis (부서배부 화면 로딩)");

  // if (!cfValidate([ed_slipDt,ed_totSal]))
  let rtn = await $c.gus.cfValidate($p, [ica_slipDt, ed_totSal]);
  if (!rtn) return false;

  // KYU_ISSUE : 2025-12-30 금액 0 체크 이슈
  // 총급여:yes:notAllowed=0&maxLength=13    --> 음수도 가능
  // ---------------------------
  // 총급여은(는) 다음 문자가 올 수 없습니다.
  // 0

  if (parseInt(ed_totSal.getValue()) == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_033, "총급여"));
    return false;
  }
  console.log(" ed_totSal (총급여 - 배부총액이 이 금액과 반드시 일치) : " + ed_totSal);

  // var style = "center:yes; dialogwidth:840px; dialogheight:540px; scroll:no; resizable:no; status:yes;";
  // var strPath = "fi_404_01_10p.jsp?slipDt="+ed_slipDt.text.trim()+"&totSal="+ed_totSal.text.trim()+"&rltSeq="+txt_rltSeq.value.trim();      //+"&upperAcctDeptCd="+vUpperAcctDeptCd;
  // var returnValue = window.showModalDialog(strPath, ds_deptdis ,style ) ;

  var dc = ds_deptdis.getAllArray();
  console.log("  *** ds_deptdis : " + JSON.stringify(dc));
  let data = {
    deptdis: dc // getAllArray
    ,

    slipDt: ica_slipDt.getValue().trim() // 전표일자 (작성일자)
    ,

    totSal: ed_totSal.getValue().trim() // 총급여
    ,

    rltSeq: scwin.txt_rltSeq // 관련사건저장순번
  };
  console.log("^^^^^  before 404_01_10p (부서배부) data " + JSON.stringify(data));
  let win_url = "/ui/ac/fi/taxbiz/withhold/fi_404_01_10p.xml";
  let opts = {
    id: "smpPop",
    popupName: "부서배부",
    modal: true,
    type: "browserPopup",
    width: 1180,
    height: 600,
    title: "부서배부"
  };
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);
  if (returnValue != null && returnValue != "N/A") {
    //  ds_deptdis.ClearData();
    //  ds_deptdis.ImportData(returnValue);
    console.log("---- 부서배부 리턴 (ds_evidac) returnValue[0] : " + returnValue[0]);
    ds_deptdis.removeAll();
    // 배열 ==> ds_evidac 로 복사
    ds_deptdis.setArray(returnValue[0], true); // append

    var dc = ds_deptdis.getAllArray();
    console.log("  *** ds_deptdis (" + ds_deptdis.getTotalRow() + ") : " + JSON.stringify(dc));
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_declarDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 계정 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

//-------------------------------------------------------------------------
// 건강보험 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_hlthClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};

//-------------------------------------------------------------------------
// 국민연금 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_ntnalClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('5', 'F');
};

//-------------------------------------------------------------------------
// 고용보험 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_hireClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('6', 'F');
};

//-------------------------------------------------------------------------
// 4대보 귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_withholdAcctDeptCd_onclickEvent = function (e) {
  console.log("  -- 사대보 귀속부서 돋보기 클릭 ---------------------------");
  scwin.f_openPopUp('7', 'F');
};

//-------------------------------------------------------------------------
// 근무지 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_workSiteCd_onclickEvent = function (e) {
  scwin.f_openPopUp('8', 'F'); // 전체조회
  // scwin.f_openPopUp('8','T');  // 전체조회 안함 - 돋보기 버튼 활성화 필요
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // 								,ed_coCd.text, txt_coNm.value
  // 								,pWinCloseTF,null,null,null,null
  // 								,null,null,null,null,null);
  // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19
  let pNoDataCloseTF = pWinCloseTF;
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
};

//-------------------------------------------------------------------------
// 팝업 @@
//    1:귀속부서,2:계정,3:거래처,4:건강보험거래처,5:국민연금거래처,6:고용보험거래처,7:원천세귀속부서,8:근무지
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:귀속부서,2:계정,3:거래처,4:건강보험거래처,5:국민연금거래처,6:고용보험거래처,7:원천세귀속부서,8:근무지)");
  // var rtnList = new Array();
  switch (flag) {
    case '1':
      // 귀속부서
      var param = "," + ica_slipDt.getValue().trim() + ",0,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;

      // 자회사 회계 시스템인 경우,
      if (scwin.isSubCompany) {
        param = "," + ica_slipDt.getValue().trim() + ",0,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      }
      console.log("  귀속부서 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo7',ed_declarDept.text.trim(),txt_declarDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_declarDept.cfCommonPopUp(scwin.udc_declarDept_callBackFunc, ed_declarDept.getValue().trim(), ed_declarDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 계정조회
      scwin.txt_costClsCd = scwin.clsCd;
      console.log("  -- clsCd (비용구분) [" + scwin.clsCd + "]   txt_costClsCd [" + scwin.txt_costClsCd + "]");
      if (ed_declarDept.getValue() == "") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
        ed_acctCd.focus();
        return;
      }

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비
      if (scwin.txt_costClsCd == "") {
        scwin.txt_costClsCd = "04";
      }
      console.log("  clsCd (비용구분) [" + scwin.clsCd + "]   txt_costClsCd [" + scwin.txt_costClsCd + "]");
      var temp = "T," + ica_slipDt.getValue().trim() + ",,,," + scwin.txt_costClsCd;
      console.log("  계정 popup  temp [" + temp + "]");

      // rtnList = cfCommonPopUp('retrieveAcctCdInfo',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,temp,null,null,null,null);
      udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, temp, null, null, null, null);
      break;
    case '3':
      // 거래처
      var param = ",,," + ed_coCd.getValue();
      console.log("  거래처 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveClntList',ed_clntNo.text.trim(),txt_clntNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_clntNo,ed_clntNm,rtnList,'3');
      break;
    case '4':
      // 건강보험 거래처
      var param = ",,," + ed_coCd.getValue();
      console.log("  건강보험 거래처 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveClntList',ed_hlthClntNo.text.trim(),txt_hlthClntNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_hlthClntNo.cfCommonPopUp(scwin.udc_hlthClntNo_callBackFunc, ed_hlthClntNo.getValue().trim(), ed_hlthClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_hlthClntNo,ed_hlthClntNm,rtnList,'4');
      break;
    case '5':
      // 국민연금 거래처
      var param = ",,," + ed_coCd.getValue();
      console.log("  국민연금 거래처 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveClntList',ed_ntnalClntNo.text.trim(),txt_ntnalClntNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_ntnalClntNo.cfCommonPopUp(scwin.udc_ntnalClntNo_callBackFunc, ed_ntnalClntNo.getValue().trim(), ed_ntnalClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_ntnalClntNo,ed_ntnalClntNm,rtnList,'5');
      break;
    case '6':
      // 고용보험 거래처
      var param = ",,," + ed_coCd.getValue();
      console.log("  고용보험 거래처 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveClntList',ed_hireClntNo.text.trim(),txt_hireClntNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_hireClntNo.cfCommonPopUp(scwin.udc_hireClntNo_callBackFunc, ed_hireClntNo.getValue().trim(), ed_hireClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_hireClntNo,ed_hireClntNm,rtnList,'6');
      break;
    case '7':
      // 원천세 귀속부서 (4대보)
      var param = "," + ica_slipDt.getValue().trim() + ",0,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      console.log("  원천세(4대보) 귀속부서 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo7',ed_withholdAcctDeptCd.text.trim(),txt_withholdAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_withholdAcctDeptCd.cfCommonPopUp(scwin.udc_withholdAcctDeptCd_callBackFunc, ed_withholdAcctDeptCd.getValue().trim(), ed_withholdAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '8':
      // 근무지
      var param = "";
      param = param + "1," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 수정사항 : form안에 있는 회사코드를 파라미터로 이용함
      console.log("  근무지 popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveWorkSiteInfo',ed_workSiteCd.text.trim(),txt_workSiteNm.value,check,null,null,null,null,param,null,null,null,null);
      // udc_workSiteCd.cfCommonPopUp(scwin.udc_workSiteCd_callBackFunc,ed_workSiteCd.getValue().trim(),ed_workSiteNm.getValue(),check,null,null,null,null,param,null,null,null,null);
      // KYU_TEST : 2026-02-10 : 코드 있으면 코드만, 코드 없으면 전체조회 안함
      udc_workSiteCd.cfCommonPopUp(scwin.udc_workSiteCd_callBackFunc, ed_workSiteCd.getValue().trim(), ed_workSiteNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, check);
      // f_resultPopEd(ed_workSiteCd,txt_workSiteNm,rtnList);
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   1:귀속부서,2:계정,3:거래처,4:건강보험거래처,5:국민연금거래처,6:고용보험거래처,7:원천세귀속부서,8:근무지

//-------------------------------------------------------------------------
// 회사코드 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;

    // ed_coCd.text = rtnList[0];  // 코드
    // txt_coNm.value = rtnList[5]; // 회사명
    // ed_coCd.hidVal = rtnList[0];  // 히든값
    // txtCoClsCd.value =rtnList[1];   // 회사구분

    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    // ed_coCd.text   = "";
    // txt_coNm.value = "";
    // ed_coCd.hidVal = "";
    // txtCoClsCd.value ="";

    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }

  // KYU_TEST
  // if ( scwin.isStarted  == true )   // 최초 이벤트 여부
  // {
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템  0
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  // }

  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      console.log("  ==-==-== 자회사 여부에 따른 회사코드팝업 활성/비활성 처리 (최초 1회)");

      // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
      if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
      }
      scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
    }

  // KYU_TEST
  // 회사코드 입력하면 무조건 귀속부서 팝업 떠야 함 !!
  scwin.f_openPopUp("1", "T");
};

//-------------------------------------------------------------------------
// 귀속부서조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_declarDept_callBackFunc = function (rtnList) {
  console.log("▲ udc_declarDept_callBackFunc (귀속부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // ed_declarDept.text  ="";
      // txt_declarDeptNm.value = "";
      // ed_declarDept.hidVal ="";
      // txt_costClsCd.value="";
      ed_declarDept.setValue(""); // 코드
      ed_declarDeptNm.setValue(""); // 회사명 
      scwin.ed_declarDept_hidVal = ""; // 히든값
      scwin.txt_costClsCd = ""; // 회사구분    
      return;
    }

    // ed_declarDept.text  = rtnList[0];		//부서코드
    // txt_declarDeptNm.value = rtnList[1];		//부서명
    // ed_declarDept.hidVal = rtnList[0];  	// 히든값
    // clsCd= rtnList[9];
    // txt_costClsCd.value = rtnList[9];		//비용구분코드

    // //회사 정보 set
    // ed_coCd.text    	= rtnList[4];		//회사코드
    // txtCoClsCd.value    = rtnList[5];		//회사구분코드

    ed_declarDept.setValue(rtnList[0]); // 부서코드
    ed_declarDeptNm.setValue(rtnList[1]); // 부서명 
    scwin.ed_declarDept_hidVal = rtnList[0]; // 히든값
    scwin.clsCd = rtnList[9]; // 비용구분
    scwin.txt_costClsCd = rtnList[9]; // 비용구분코드   

    // 회사 정보 set
    ed_coCd.setValue(rtnList[4]); // 회사코드
    scwin.txtCoClsCd = rtnList[5]; //회사구분코드

    console.log("  -- 귀속부서조회 후 ed_coCd [" + ed_coCd.getValue() + "]  txtCoClsCd [" + scwin.txtCoClsCd + "]");
    console.log("  -- 귀속부서조회 후 clsCd   [" + scwin.clsCd + "]   비용구분 txt_costClsCd [" + scwin.txt_costClsCd + "]");
    scwin.f_setInitObj();
  } else {
    // ed_declarDept.text  ="";
    // txt_declarDeptNm.value = "";
    // ed_declarDept.hidVal ="";
    // txt_costClsCd.value="";

    ed_declarDept.setValue(""); // 부서코드
    ed_declarDeptNm.setValue(""); // 부서명 
    scwin.ed_declarDept_hidVal = ""; // 히든값
    scwin.txt_costClsCd = ""; // 비용구분코드
  }
};

//-------------------------------------------------------------------------
// 계정조회 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_acctCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_acctCd_callBackFunc (계정조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    // ed_acctCd.text  = rtnList[0];	//계정코드
    // txt_acctNm.value = rtnList[1];	//계정명
    // ed_acctCd.hidVal = rtnList[0];  // 히든값
    // txt_acctClsCd.value = rtnList[2];	//계정구분

    ed_acctCd.setValue(rtnList[0]); // 계정코드
    ed_acctNm.setValue(rtnList[1]); // 계정명 
    scwin.ed_acctCd_hidVal = rtnList[0]; // 히든값
    scwin.txt_acctClsCd = rtnList[2]; // 계정구분
  } else {
    // ed_acctCd.text  = "";
    // txt_acctNm.value = "";
    // ed_acctCd.hidVal = "";
    // txt_acctClsCd.value = "";

    ed_acctCd.setValue(""); // 계정코드
    ed_acctNm.setValue(""); // 계정명 
    scwin.ed_acctCd_hidVal = ""; // 히든값
    scwin.txt_acctClsCd = ""; // 계정구분
  }
};

//-------------------------------------------------------------------------
// 거래처 callBackFunc (3)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_clntNo_callBackFunc (거래처 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_clntNo, ed_clntNm, rtnList, '3');
};

//-------------------------------------------------------------------------
// 건강보험거래처 callBackFunc (4)
//-------------------------------------------------------------------------
scwin.udc_hlthClntNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_hlthClntNo_callBackFunc (건강보험거래처 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_hlthClntNo, ed_hlthClntNm, rtnList, '4');
};

//-------------------------------------------------------------------------
// 국민연금거래처 callBackFunc (5)
//-------------------------------------------------------------------------
scwin.udc_ntnalClntNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_ntnalClntNo_callBackFunc (국민연금거래처 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_ntnalClntNo, ed_ntnalClntNm, rtnList, '5');
};

//-------------------------------------------------------------------------
// 고용보험거래처 callBackFunc (6)
//-------------------------------------------------------------------------
scwin.udc_hireClntNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_hireClntNo_callBackFunc (고용보험거래처 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_hireClntNo, ed_hireClntNm, rtnList, '6');
};

//-------------------------------------------------------------------------
// 원천세 귀속부서 (4대보) callBackFunc (7)
//-------------------------------------------------------------------------
scwin.udc_withholdAcctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_withholdAcctDeptCd_callBackFunc (원천세 귀속부서 (4대보) 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_withholdAcctDeptCd.setValue(""); //부서코드
      ed_withholdAcctDeptNm.setValue(""); //부서명
      ed_withholdAcctDeptCd_hidVal = "";
      return;
    }
    ed_withholdAcctDeptCd.setValue(rtnList[0]); //부서코드
    ed_withholdAcctDeptNm.setValue(rtnList[1]); //부서명
    ed_withholdAcctDeptCd_hidVal = rtnList[0];
  } else {
    ed_withholdAcctDeptCd.setValue(""); //부서코드
    ed_withholdAcctDeptNm.setValue(""); //부서명
    ed_withholdAcctDeptCd_hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 근무지 callBackFunc (8)
//-------------------------------------------------------------------------
scwin.udc_workSiteCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_workSiteCd_callBackFunc (근무지 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_workSiteCd, ed_workSiteNm, rtnList, '8');
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:귀속부서,2:계정,3:거래처,4:건강보험거래처,5:국민연금거래처,6:고용보험거래처,7:원천세귀속부서,8:근무지)");

  // if (rtnList != null ) {
  //     if (rtnList[0] == "N/A") {
  //     	return;
  //     }
  // 	strCd.Text = rtnList[0];	// 코드
  // 	strNm.value = rtnList[1];	// 명
  // 	strCd.hidVal = rtnList[0];  // 히든값
  // }else{
  // 	strCd.Text = "";
  // 	strNm.value = "";
  // 	strCd.hidVal = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      // 히든값 분기처리
      switch (flag) {
        case '3':
          scwin.ed_clntNo_hidVal = "";
          break;
        // 거래처
        case '4':
          scwin.ed_hlthClntNo_hidVal = "";
          break;
        // 건강보험거래처
        case '5':
          scwin.ed_ntnalClntNo_hidVal = "";
          break;
        // 국민연금거래처
        case '6':
          scwin.ed_hireClntNo_hidVal = "";
          break;
        // 고용보험거래처
        case '8':
          scwin.ed_workSiteCd_hidVal = "";
          break;
        // 근무지
        default:
          break;
      }
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '3':
        scwin.ed_clntNo_hidVal = rtnList[0];
        break;
      // 거래처
      case '4':
        scwin.ed_hlthClntNo_hidVal = rtnList[0];
        break;
      // 건강보험거래처
      case '5':
        scwin.ed_ntnalClntNo_hidVal = rtnList[0];
        break;
      // 국민연금거래처
      case '6':
        scwin.ed_hireClntNo_hidVal = rtnList[0];
        break;
      // 고용보험거래처
      case '8':
        scwin.ed_workSiteCd_hidVal = rtnList[0];
        break;
      // 근무지
      default:
        break;
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '3':
        scwin.ed_clntNo_hidVal = "";
        break;
      // 거래처
      case '4':
        scwin.ed_hlthClntNo_hidVal = "";
        break;
      // 건강보험거래처
      case '5':
        scwin.ed_ntnalClntNo_hidVal = "";
        break;
      // 국민연금거래처
      case '6':
        scwin.ed_hireClntNo_hidVal = "";
        break;
      // 고용보험거래처
      case '8':
        scwin.ed_workSiteCd_hidVal = "";
        break;
      // 근무지
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//    1:귀속부서,2:계정,3:거래처,4:건강보험거래처,5:국민연금거래처,6:고용보험거래처,7:원천세귀속부서,8:근무지
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_coCd_hidVal ||
  // 회사
  flag == '2' && strCd.getValue().trim() == scwin.ed_declarDept_hidVal ||
  // 귀속부서
  flag == '3' && strCd.getValue().trim() == scwin.ed_clntNo_hidVal ||
  // 거래처
  flag == '4' && strCd.getValue().trim() == scwin.ed_hlthClntNo_hidVal ||
  // 건강보험거래처
  flag == '5' && strCd.getValue().trim() == scwin.ed_ntnalClntNo_hidVal ||
  // 국민연금거래처
  flag == '6' && strCd.getValue().trim() == scwin.ed_hireClntNo_hidVal ||
  // 고용보험거래처
  flag == '7' && strCd.getValue().trim() == scwin.ed_withholdAcctDeptCd_hidVal ||
  // 4대보귀속부서
  flag == '8' && strCd.getValue().trim() == scwin.ed_workSiteCd_hidVal // 근무지
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";
  strNm.setValue("");

  // 명 초기화
  // switch (flag){
  //     case '1'  : ed_coNm.setValue("")                  ; break;  // 회사
  //     case '2'  : ed_declarDeptNm.setValue("")          ; break;  // 거래처
  //     case '3'  : ed_clntNm.setValue("")                ; break;  // 거래처
  //     case '4'  : ed_hlthClntNm.setValue("")            ; break;  // 건강보험거래처
  //     case '5'  : ed_ntnalClntNm.setValue("")           ; break;  // 국민연금거래처
  //     case '6'  : ed_hireClntNm.setValue("")            ; break;  // 고용보험거래처
  //     case '7'  : ed_withholdAcctDeptNm.setValue("")    ; break;  // 4대보귀속부서
  //     case '8'  : ed_workSiteNm.setValue("")            ; break;  // 근무지
  //     default   : break;
  // }

  // strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_coCd_hidVal = "";
      break;
    // 회사
    case '2':
      scwin.ed_declarDept_hidVal = "";
      break;
    // 계정
    case '3':
      scwin.ed_clntNo_hidVal = "";
      break;
    // 거래처
    case '4':
      scwin.ed_hlthClntNo_hidVal = "";
      break;
    // 건강보험거래처
    case '5':
      scwin.ed_ntnalClntNo_hidVal = "";
      break;
    // 국민연금거래처
    case '6':
      scwin.ed_hireClntNo_hidVal = "";
      break;
    // 고용보험거래처
    case '7':
      scwin.ed_withholdAcctDeptCd_hidVal = "";
      break;
    // 4대보귀속부서
    case '8':
      scwin.ed_workSiteCd_hidVal = "";
      break;
    // 근무지
    default:
      break;
  }

  // if(strCd.text.trim()!="")  f_openPopUp(flag,'T');

  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');

    // 팝업 로딩
    // switch (flag){
    //     case '1'  : scwin.f_openPopUp(flag,'T'); break;  // 회사
    //     case '2'  : scwin.f_openPopUp(flag,'T'); break;  // 계정
    //     case '3'  : scwin.f_openPopUp(flag,'T'); break;  // 거래처
    //     case '4'  : scwin.f_openPopUp(flag,'T'); break;  // 건강보험거래처
    //     case '5'  : scwin.f_openPopUp(flag,'T'); break;  // 국민연금거래처
    //     case '6'  : scwin.f_openPopUp(flag,'T'); break;  // 고용보험거래처
    //     case '7'  : scwin.f_openPopUp(flag,'T'); break;  // 4대보귀속부서
    //     case '8'  : scwin.f_openPopUp(flag,'T'); break;  // 근무지
    //     default   : break;
    // }
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 소득세 focus out
//-------------------------------------------------------------------------
scwin.ed_incomeTax_onblur = function (e) {
  // <!-- 소득세 입력시 -->
  // <script language=JavaScript for=ed_incomeTax event=OnKillFocus()>
  // ed_manTax.text = parseInt(ed_incomeTax.text.trim()) * 0.1;

  // KYU_NEW : 널이 들어오면 계산결과값 0 처리 : Nan 방지
  if (ed_incomeTax.getValue() == "" || ed_incomeTax.getValue() == null) {
    ed_manTax.setValue(0);
    return;
  }

  // 지방소득세 변경 - 정수만 가능
  var temp = parseInt(ed_incomeTax.getValue().trim()) * 0.1;
  temp = temp.toFixed(0);
  ed_manTax.setValue(temp);
};

//-------------------------------------------------------------------------
// 작성일자 클릭
//-------------------------------------------------------------------------
scwin.ica_slipDt_onclick = function (e) {
  console.log("----- ica_payDt_onclick");
  scwin.f_reCal();
};

//-------------------------------------------------------------------------
// 실근무일수 focus out
//-------------------------------------------------------------------------
scwin.ed_mmWorkDdCnt_onblur = function (e) {
  console.log("----- ed_mmWorkDdCnt_onblur");
  scwin.f_reCal();
};

//-------------------------------------------------------------------------
// 인원계산후 작성일자 변경시 총인원 재계산 (실근무일수)
//-------------------------------------------------------------------------
scwin.f_reCal = function () {
  console.log("=== f_reCal (총인원 재계산  - 작성일자 있는 상태에서 실근무일수 변경시)");
  if (ica_slipDt.getValue() != "" && ed_mmWorkDdCnt.getValue().trim() != "") {
    var Ym = ica_slipDt.getValue().trim();
    // var lastday = new Date(Ym.substr(0,4),Ym.substr(4,2),0).getDate();
    var lastday = new Date(Ym.substring(0, 4), Ym.substring(4, 6), 0).getDate();
    console.log("  lastday [" + lastday + "]");

    // 2026-05-12 : 정밀도 계산 1111 일 때 asis 35.8 TOBE 38.3
    // txt_totStaff.value = Math.round(Number(txt_mmWorkDdCnt.text.trim()/lastday)*10)/10; //인원수 = 근무일수/해당월 총일수 (소수점1자리까지)
    var temp = Math.round(Number(parseInt(ed_mmWorkDdCnt.getValue().trim()) / lastday) * 10) / 10; //인원수 = 근무일수/해당월 총일수 (소수점1자리까지)

    console.log("   인원수 temp [" + temp + "]");
    ed_totStaff.setValue(temp);
  }
};

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // <!-- 회사코드 입력시  -->
  // language=JavaScript for=ed_coCd event=OnKillFocus()> 
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 납부부서 focus out
//-------------------------------------------------------------------------
scwin.udc_declarDept_onblurCodeEvent = function (e) {
  // <!-- 공통코드 -->
  // language=JavaScript for=ed_declarDept event=OnKillFocus()>
  scwin.f_checkPopEd(ed_declarDept, ed_declarDeptNm, '1');
};

//-------------------------------------------------------------------------
// 납부부서명 onchange
//-------------------------------------------------------------------------
scwin.udc_declarDept_onviewchangeNameEvent = function (info) {
  console.log("  ----- 납부부서명 change -----");
  ed_declarDept.setValue("");
  scwin.f_openPopUp('1', 'T');
};

//-------------------------------------------------------------------------
// 계정 focus out
//-------------------------------------------------------------------------
scwin.udc_acctCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_acctCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '2');
};

//-------------------------------------------------------------------------
// 거래처 focus out
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  console.log("----- udc_clntNo_onblurCodeEvent (거래처 focus out)");
  // language=JavaScript for=ed_clntNo  event=OnKillFocus()>
  scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '3');
};

//-------------------------------------------------------------------------
// 건강보험 거래처 focus out
//-------------------------------------------------------------------------
scwin.udc_hlthClntNo_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_hlthClntNo  event=OnKillFocus()>
  scwin.f_checkPopEd(ed_hlthClntNo, ed_hlthClntNm, '4');
};

//-------------------------------------------------------------------------
// 국민연금 거래처 focus out
//-------------------------------------------------------------------------
scwin.udc_ntnalClntNo_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_ntnalClntNo  event=OnKillFocus()>
  scwin.f_checkPopEd(ed_ntnalClntNo, ed_ntnalClntNm, '5');
};

//-------------------------------------------------------------------------
// 고용보험 거래처 focus out
//-------------------------------------------------------------------------
scwin.udc_hireClntNo_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_hireClntNo  event=OnKillFocus()>
  scwin.f_checkPopEd(ed_hireClntNo, ed_hireClntNm, '6');
};

//-------------------------------------------------------------------------
// 4대보 귀속부서 focus out
//-------------------------------------------------------------------------
scwin.udc_withholdAcctDeptCd_onblurCodeEvent = function (e) {
  console.log("  -- 4대보귀속부서 focust out");
  // language=JavaScript for=ed_withholdAcctDeptCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_withholdAcctDeptCd, ed_withholdAcctDeptNm, '7');
};

//-------------------------------------------------------------------------
// 근무지 focus out
//-------------------------------------------------------------------------
scwin.udc_workSiteCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_workSiteCd  event=OnKillFocus()>
  scwin.f_checkPopEd(ed_workSiteCd, ed_workSiteNm, '8');
};

//-------------------------------------------------------------------------
// 건강보험 금액 focus out
//-------------------------------------------------------------------------
scwin.ed_hlthInsr_onblur = function (e) {
  scwin.f_setValidInfo('1');
};

//-------------------------------------------------------------------------
// 국민연금 금액 focus out
//-------------------------------------------------------------------------
scwin.ed_ntnalPension_onblur = function (e) {
  scwin.f_setValidInfo('2');
};

//-------------------------------------------------------------------------
// 고용보험 금액 focus out
//-------------------------------------------------------------------------
scwin.ed_hireInsr_onblur = function (e) {
  scwin.f_setValidInfo('3');
};

//-------------------------------------------------------------------------
// 건강/연금/고용 금액발생시 4대보귀속부서코드 mandatory 처리
//
// 4대귀속부서가 필수가 아니고, 4대보험에 대한 금액이 있는  경우, 필수로 함
//-------------------------------------------------------------------------
scwin.f_setValidInfo = function (gbn) {
  console.log("=== f_setValidInfo (건강/연금/고용 금액발생시 4대보귀속부서코드 mandatory 처리)");
  if (gbn == '1') {
    //건강보험
    if (Number(ed_hlthInsr.getValue()) != 0) {
      console.log("  건강보험 금액 > 0 일 때");

      // ed_hlthClntNo.mandatory="true" ;
      ed_hlthClntNo.setMandatory(true);

      // 사용자 구분이 자회사('SA')인 경우
      if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
        if (scwin.vCoCd == "029") {
          //넥스트로
          ed_hlthClntNo.setValue('139880'); // 국민건강보험공단(건강보험) - crn : 1088204761
        } else {
          ed_hlthClntNo.setValue('229575'); // 국민건강보험공단 - crn : 1098163596
        }
      } else {
        // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
        ed_hlthClntNo.setValue('319469'); // 국민건강보험공단(건강보험) - crn : 1088204761
      }
      //ed_hlthClntNo.text = '703695';  // 건강보험공단 - crn : null

      scwin.f_checkPopEd(ed_hlthClntNo, ed_hlthClntNm, '4');
      // ed_withholdAcctDeptCd.mandatory="true" ;
      ed_withholdAcctDeptCd.setMandatory(true); // 4대보귀속부서 코드
    } else {
      // ed_hlthClntNo.mandatory="false";
      ed_hlthClntNo.setMandatory(false);
      ed_hlthClntNo.setValue("");
      scwin.f_checkPopEd(ed_hlthClntNo, ed_hlthClntNm, '4');
      // ed_withholdAcctDeptCd.mandatory="false" ;
      ed_withholdAcctDeptCd.setMandatory(false); // 4대보귀속부서 코드
    }
  } else if (gbn == '2') {
    //국민연금
    if (Number(ed_ntnalPension.getValue()) > 0) {
      console.log("  국민연금 금액 > 0 일 때");

      // ed_ntnalClntNo.mandatory="true" ;
      ed_ntnalClntNo.setMandatory(true);

      // 사용자 구분이 자회사('SA')인 경우
      if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
        if (scwin.vCoCd == "029") {
          //넥스트로
          ed_ntnalClntNo.setValue('139881'); // 국민건강보험공단(국민연금) - crn : 1088204761
        } else {
          ed_ntnalClntNo.setValue('229577'); // 국민연금(대성) - crn : 2228111111
        }
      } else {
        // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
        ed_ntnalClntNo.setValue('319470'); // 국민건강보험공단(국민연금) - crn : 1088204761
      }
      //ed_ntnalClntNo.text ='703667';

      scwin.f_checkPopEd(ed_ntnalClntNo, ed_ntnalClntNm, '5');
      // ed_withholdAcctDeptCd.mandatory="true" ;
      ed_withholdAcctDeptCd.setMandatory(true); // 4대보귀속부서 코드
    } else {
      // ed_ntnalClntNo.mandatory="false" ;
      ed_ntnalClntNo.setMandatory(false);
      ed_ntnalClntNo.setValue("");
      scwin.f_checkPopEd(ed_ntnalClntNo, ed_ntnalClntNm, '5');
      // ed_withholdAcctDeptCd.mandatory="false" ;
      ed_withholdAcctDeptCd.setMandatory(false); // 4대보귀속부서 코드
    }
  } else if (gbn == '3') {
    //고용보험
    if (Number(ed_hireInsr.getValue()) > 0) {
      console.log("  고용보험 금액 > 0 일 때");

      // ed_hireClntNo.mandatory="true" ;
      ed_hireClntNo.setMandatory(true);

      // 사용자 구분이 자회사('SA')인 경우
      if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
        if (scwin.vCoCd == "029") {
          //넥스트로
          ed_hireClntNo.setValue('139882'); // 국민건강보험공단(고용보험) - crn : 1088204761
        } else {
          ed_hireClntNo.setValue('901732'); // 근로복지공단 - crn : 11111
        }
      } else {
        // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
        ed_hireClntNo.setValue('319471'); // 근로복지공단 - crn : 1088204761
      }
      //ed_hireClntNo.text = '703989';

      scwin.f_checkPopEd(ed_hireClntNo, ed_hireClntNm, '6');
      // ed_withholdAcctDeptCd.mandatory="true" ;
      ed_withholdAcctDeptCd.setMandatory(true); // 4대보귀속부서 코드
    } else {
      // ed_hireClntNo.mandatory="false" ;
      ed_hireClntNo.setMandatory(false);
      ed_hireClntNo.setValue("");
      scwin.f_checkPopEd(ed_hireClntNo, ed_hireClntNm, '6');
      // ed_withholdAcctDeptCd.mandatory="false" ;
      ed_withholdAcctDeptCd.setMandatory(false); // 4대보귀속부서 코드
    }
  }
  // cfRefreshMandSign();  // 오브젝트가 mandatory이면 mandatory 표시를 하고, 아니면 표시를 지운다 - 대응 함수 없음
};

// @@ ====== 저장-준비 ========================================================================= //

//-------------------------------------------------------------------------
// 수정버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Update = async function (e) {
  // 전표번호가 있으면 수정안됨
  if (ds_withhold.getCellData(ds_withhold.getRowPosition(), "slipNo") != "") {
    await $c.win.alert($p, "전표가 생성 되어서 수정하실 수 없습니다");
    return;
  }
  $c.gus.cfDisableKey($p);
  // cfDisableBtn([bUpdate,img_hlthClntNo,img_ntnalClntNo,img_hireClntNo]);
  $c.gus.cfDisableBtn($p, [btn_hlthClntNo, btn_ntnalClntNo, btn_hireClntNo]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);

  // cfEnableObjects([ img_clntNo,img_acctCd]);
  // $c.gus.cfEnableObjects([ btn_clntNo,btn_acctCd]);
  $c.gus.cfEnableObjects($p, [btn_clntNo, btn_acctCd, btn_workSiteCd]); // 근무지팝업 조회 1건 나오도록 조치
  console.log("  ==--== 활성 (거래처 돋보기,계정 돋보기,근무지 돋보기)");

  // cfDisableObjects([txt_clntNm,txt_acctNm,txt_workSiteNm,ed_hlthClntNo,txt_hlthClntNm,ed_ntnalClntNo,txt_ntnalClntNm,ed_hireClntNo,txt_hireClntNm,txt_totStaff]);
  $c.gus.cfDisableObjects($p, [ed_clntNm, ed_acctNm, ed_workSiteNm, ed_hlthClntNo, ed_hlthClntNm, ed_ntnalClntNo, ed_ntnalClntNm, ed_hireClntNo, ed_hireClntNm, ed_totStaff]);
  console.log("  ==--== 비활성 (거래처명,계정명,근무지명,건강보험거래처코드/명,국민연금거래처코드/명,고용보험거래처코드/명,총인원)");

  // KYU_NEW : 4대보귀속부서 전체 비활성
  $c.gus.cfDisableObjects($p, [btn_withholdAcctDeptCd, ed_withholdAcctDeptCd, ed_withholdAcctDeptNm]);
  console.log("  NEW ==--== 비활성 (4대보귀속부서 전체)");

  //focus 설정
  ica_payDt.focus();
};

//-------------------------------------------------------------------------
// 히든값체크 DS : 무의미 넘어오는 값 자체가 새 row 의 값
//-------------------------------------------------------------------------
scwin.f_HiddenCheckDs = async function (str, msg) {
  console.log("=== f_HiddenCheckDs(히든값체크 DS)  str [" + str + "]  msg [" + msg + "]");
  if (str.trim() == "") return true;

  // if (str.text.trim() != str.hidVal) {
  if (msg == "귀속부서" && str.trim() != scwin.ed_declarDept_hidVal || msg == "계정" && str.trim() != scwin.ed_acctCd_hidVal || msg == "거래처" && str.trim() != scwin.ed_clntNo_hidVal) {
    console.log(" -- 히든값 오류 [" + str + "] [" + scwin.ed_declarDept_hidVal + "][" + scwin.ed_acctCd_hidVal + "][" + scwin.ed_clntNo_hidVal + "]");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, msg));
    // str.SelectAll = "true";

    //  KYU_ISSUE 포커스 보내는 방법 필요
    str.focus();
    return false;
  } else {
    return true;
  }
};
scwin.f_HiddenCheck = async function (str, msg) {
  console.log("=== f_HiddenCheck(히든값체크)  str [" + str.getValue() + "]  msg [" + msg + "]");
  if (str.getValue().trim() == "") return true;

  // if (str.text.trim() != str.hidVal) {
  if (msg == "귀속부서" && str.getValue().trim() != scwin.ed_declarDept_hidVal || msg == "계정" && str.getValue().trim() != scwin.ed_acctCd_hidVal || msg == "거래처" && str.getValue().trim() != scwin.ed_clntNo_hidVal) {
    console.log(" -- 히든값 오류 [" + str.getValue() + "] [" + scwin.ed_declarDept_hidVal + "][" + scwin.ed_acctCd_hidVal + "][" + scwin.ed_clntNo_hidVal + "]");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, msg));
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// function name : f_Grid_Validation  @@
// function desc : 그리드 필수값 체크
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Grid_Validation = async function () {
  console.log("=== f_Grid_Validation (그리드 필수값 체크)");
  var j = 0; // 메시지용 : 번째라고 할 때에는 i+1 기준으로 명기해야 함
  for (i = 0; i < ds_withhold.getTotalRow(); i++) {
    j = i + 1;

    // 작성일자 : 부서배부 넣으려면 필수. 안했을 때 널로 들어감.
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "slipDt"))) {
      await $c.win.alert($p, j + "번째 행의 작성일자을(를) 입력하십시요");
      ds_withhold.setRowPosition(i);
      ica_slipDt.focus();
      return false;
    }

    // KYU_NEW : 
    // 지급일자 : asis 도 체크 안함. 안하면 오라클 에러
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "payDt"))) {
      await $c.win.alert($p, j + "번째 행의 지급일자을(를) 입력하십시요");
      ds_withhold.setRowPosition(i);
      ica_slipDt.focus();
      return false;
    }

    // 계정코드
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "acctCd"))) {
      await $c.win.alert($p, j + "번째 행의 계정코드을(를) 입력하십시요");
      ds_withhold.setRowPosition(i);
      ed_acctCd.focus();
      return false;
    }

    // 거래처
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "clntNo"))) {
      await $c.win.alert($p, j + "번째 행의 거래처을(를) 입력하십시요");
      ds_withhold.setRowPosition(i);
      ed_clntNo.focus();
      return false;
    }

    // 실근무일수
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "mmWorkDdCnt")) || Number(ds_withhold.getCellData(i, "mmWorkDdCnt")) == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_033, "원천세등록의 " + j + "번째 데이터에서 근무일수", 0));
      ds_withhold.setRowPosition(i);
      ed_mmWorkDdCnt.focus();
      return false;
    }

    // 공급가액
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "totSal")) || Number(ds_withhold.getCellData(i, "totSal")) == 0) {
      await $c.win.alert($p, j + "번째 행의 공급가액을(를) 입력하십시요");
      ds_withhold.setRowPosition(i);
      ed_totSal.focus();
      return false;
    }

    // // 계산서일자
    // if ($c.gus.cfIsNull(ds_withhold.getCellData(i, "taxDt"))) {
    //     await $c.win.alert(j + "번째 행의 계산서일자을(를) 입력하십시요");
    //     ds_withhold.setRowPosition(i);
    //     ica_taxDt.focus();
    // 	return false;
    // }

    // 총인원
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "totStaff"))) {
      await $c.win.alert($p, j + "번째 행의 총인원을(를) 입력하십시요");
      ds_withhold.setRowPosition(i);
      ed_totStaff.focus();
      return false;
    }

    // 근무지코드
    if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "workSiteCd"))) {
      await $c.win.alert($p, j + "번째 행의근무지코드를 입력하십시요");
      ds_withhold.setRowPosition(i);
      ed_workSiteCd.focus();
      return false;
    }

    // 사업소득
    if (ds_withhold.getCellData(i, "withholdClsCd") == scwin.sBizIncome) {
      // 사업소득거래처
      if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "bizIncomeClntNo"))) {
        await $c.win.alert($p, j + "번째 행의 사업소득거래처을(를) 선택하십시요");
        ds_withhold.setRowPosition(i);
        ed_bizIncomeClntNo.focus();
        return false;
      }
      // 업종구분코드
      if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "businessClsCd"))) {
        await $c.win.alert($p, j + "번째 행의 업종구분코드을(를) 선택하십시요");
        ds_withhold.setRowPosition(i);
        lc_businessClsCd.focus();
        return false;
      }

      // 업종구분이 851101(병의원) 인 경우 사업자등록번호 필수
      if (ds_withhold.getCellData(i, "businessClsCd") == "851101") {
        if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "bizIncomeCrn")) || ds_withhold.getCellData(i, "bizIncomeCrn").trim().length != 10) {
          await $c.win.alert($p, j + "번째 행의 올바른 사업소득자사업자번호을(를) 입력하십시요");
          ds_withhold.setRowPosition(i);
          ed_bizIncomeCrn.focus();
          return false;
        }
      }
      // 기타소득
    } else if (ds_withhold.getCellData(i, "withholdClsCd") == scwin.sEtcIncome) {
      // 기타소득거래처
      if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "etcIncomeClntNo"))) {
        await $c.win.alert($p, j + "번째 행의 기타소득거래처을(를) 선택하십시요");
        ds_withhold.setRowPosition(i);
        ed_etcIncomeClntNo.focus();
        return false;
      }
      // 소득구분코드
      if ($c.gus.cfIsNull($p, ds_withhold.getCellData(i, "incomeClsCd"))) {
        await $c.win.alert($p, j + "번째 행의 소득구분코드을(를) 선택하십시요");
        ds_withhold.setRowPosition(i);
        lc_incomeClsCd.focus();
        return false;
      }
    }
  }
  return true;
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("=== f_Save (저장) ==================================================");

  // if( ds_withhold.isUpdated==false){
  if (ds_withhold.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ds_withhold.getTotalRow() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }

  // 상세화 필요
  //if ( $c.gus.cfValidate([gr_withhold])) {
  let rtn1 = await $c.gus.cfValidate($p, [gr_withhold]);
  if (!rtn1) return false;
  console.log("  --- cfValidate 이후 ------------");

  // KYU_NEW : 점검 로직 추가
  let rtn2 = await scwin.f_Grid_Validation();
  if (rtn2) {
    // if(cfConfirmMsg(MSG_CM_CRM_001)==true){
    let rtn3 = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (rtn3) {
      // 리턴 처리
      // 지급년월,귀속부서셋팅
      for (i = 0; i < ds_withhold.getTotalRow(); i++) {
        ds_withhold.setCellData(i, "acctDeptCd", ed_declarDept.getValue().trim());
        ds_withhold.setCellData(i, "coCd", ed_coCd.getValue().trim());
        ds_withhold.setCellData(i, "coClsCd", scwin.txtCoClsCd.trim());
      }

      // tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone (저장 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=tr_save event=OnSuccess()>
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  //ds_withhold.ClearData();
  ds_withhold.setJSON([]);
  $c.gus.cfEnableObj($p, ica_closeYm, true);
  $c.gus.cfEnableObj($p, ed_declarDept, true);
  $c.gus.cfEnableObj($p, ed_declarDeptNm, true);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableAllBtn($p);
  scwin.f_Retrieve();
  // gr_withhold.ColumnProp('checkYn','HeadCheck')="false";
  gr_withhold.setHeaderValue("checkYn", false); // 헤더 체크 풀기
};

//-------------------------------------------------------------------------
// 전표생성
//-------------------------------------------------------------------------
scwin.f_SlipSave = async function () {
  console.log("=== f_SlipSave (전표생성) ==================================================");
  var copydata = "";

  // if( ds_withhold.isUpdated==false){
  if (ds_withhold.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ds_withhold.getTotalRow() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }

  // if ($c.gus.cfValidate([gr_withhold])) {
  let rtn = await $c.gus.cfValidate($p, [gr_withhold]);
  if (rtn) {
    // 체크된것만 전표생성
    // cfCopyDataSetHeader(ds_withhold, ds_withhold_copy);
    // ds_withhold_copy.ClearData();
    ds_withhold_copy.removeAll();

    // 빈 데이타 들어감, 사용금지 !!
    // ds_withhold_copy.insertRow();
    // ds_withhold_copy.setRowPosition(0);

    var dcJSON = "";
    for (i = 0; i < ds_withhold.getTotalRow(); i++) {
      // 지급년월,귀속부서셋팅

      ds_withhold.setCellData(i, "acctDeptCd", ed_declarDept.getValue().trim());
      ds_withhold.setCellData(i, "coCd", ed_coCd.getValue().trim());
      ds_withhold.setCellData(i, "coClsCd", scwin.txtCoClsCd.trim());
      if (ds_withhold.getCellData(i, "checkYn") == "T") {
        if (ds_withhold.getCellData(i, "slipNo") != "") {
          await $c.gus.cfAlertMsg($p, "전표번호[" + ds_withhold.getCellData(i, "slipNo") + "]는 이미 전표처리를 했습니다.");
          return;
        }
        // copydata += ds_withhold.ExportData(i,1,true);

        // 해당 ROW를 JSON 배열로 만들어 목적 ds에 복사
        // dcJSON = dcJSON + ds_withhold.getRowJSON(i);
        dcJSON = ds_withhold.getRowJSON(i);
        console.log("  복사전 ds_withhold [" + i + "]   [" + JSON.stringify(dcJSON) + "]");
        ds_withhold_copy.setRowJSON(i, dcJSON);
        // ds_withhold_copy.setJSON(dcJSON, true);  // append
      }
    }
    // ds_withhold_copy.Importdata(copydata);
    ds_withhold_copy.setJSON(dcJSON, true);

    // if( ds_withhold_copy.isUpdated==false){
    if (ds_withhold_copy.getModifiedIndex().length == 0) {
      await $c.win.alert($p, "변경된 사항이 없습니다.");
      return;
    }

    // if(cfConfirmMsg(MSG_CM_CRM_009,["전표"])==true){
    let rtn2 = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_009, "전표"));
    if (rtn2) {
      console.log("   txtCoClsCd [" + scwin.txtCoClsCd + "]   vCoCd [" + scwin.vCoCd + "]");
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템
        if (scwin.vCoCd == "029") {
          // 넥스트로
          console.log("   --- 029 넥스트로");
          sbm_slipSave.action = "/ac.fi.taxbiz.withhold.CreateWithholdSlipCMD.do"; // 전표 건별 발행
        } else {
          console.log("   --- 029 넥스트로 아님");
          scwin.f_setSlipHeader();
          sbm_slipSave.action = "/ac.fi.taxbiz.withhold.CreateSubCompanyWithholdSlipCMD.do";
        }
      } else {
        console.log("   --- 자회사 아님");
        sbm_slipSave.action = "/ac.fi.taxbiz.withhold.CreateWithholdSlipCMD.do";
      }
      console.log("  sbm_slipSave.action [" + sbm_slipSave.action + "]");
      var dc = ds_withhold_copy.getAllArray();
      console.log("  *** 1 ds_withhold_copy (" + ds_withhold_copy.getTotalRow() + ") : " + JSON.stringify(dc));

      // var dc2 = ds_withhold.getAllArray();
      // console.log("  *** 2 ds_withhold ("+ds_withhold.getTotalRow()+") : " + JSON.stringify(dc2));

      var dcJSON = ds_slipHeader.getJSON();
      console.log("  *** ds_slipHeader : " + JSON.stringify(dcJSON));

      // tr_Slipsave.Post();
      $c.sbm.execute($p, sbm_slipSave);
    }
  }
};

//-------------------------------------------------------------------------
// 자회사  원천세 전표 생성시 사용될 전표 Header 정보 set
//-------------------------------------------------------------------------
scwin.f_setSlipHeader = function () {
  console.log("=== f_setSlipHeader (전표헤더 생성)");
  ds_slipHeader.removeAll();
  ds_slipHeader.insertRow();
  ds_slipHeader.setRowPosition(0);

  // 선택한 원천세 리스트는  하나의 전표로 생성
  ds_slipHeader.setCellData(0, "slipDt", ds_withhold_copy.getCellData(0, "slipDt"));
  ds_slipHeader.setCellData(0, "acctDeptCd", ds_withhold_copy.getCellData(0, "acctDeptCd"));
  ds_slipHeader.setCellData(0, "payDt", ds_withhold_copy.getCellData(0, "payDt"));
  ds_slipHeader.setCellData(0, "summary", ds_withhold_copy.getCellData(0, "summary"));
  ds_slipHeader.setCellData(0, "clntNo", ds_withhold_copy.getCellData(0, "clntNo"));
  ds_slipHeader.setCellData(0, "coCd", ds_withhold_copy.getCellData(0, "coCd"));
  ds_slipHeader.setCellData(0, "coClsCd", ds_withhold_copy.getCellData(0, "coClsCd"));
};

//-------------------------------------------------------------------------
// 전표생성 submitdone
//-------------------------------------------------------------------------
scwin.sbm_slipSave_submitdone = async function (e) {
  console.log("▷ sbm_slipSave_submitdone (전표생성 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- 전표등록 DataSet -->
  // language=JavaScript for=tr_Slipsave event=OnSuccess()>
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  //ds_withhold.ClearData();
  ds_withhold.setJSON([]);
  $c.gus.cfEnableObj($p, ica_closeYm, true);
  $c.gus.cfEnableObj($p, ed_declarDept, true);
  $c.gus.cfEnableObj($p, ed_declarDeptNm, true);
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableAllBtn($p);
  scwin.f_Retrieve();
  // gr_withhold.ColumnProp('checkYn','HeadCheck')="false";
  gr_withhold.setHeaderValue("checkYn", false); // 헤더 체크 풀기
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  if (ds_withhold.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }

  // var sheetTitle;
  // var sheetTitle2;
  // sheetTitle = "원천세등록내역 (" + ed_closeYm.text + txt_declarDeptNm.value + ")";

  // gr_withhold.SetExcelTitle(0, "");
  // gr_withhold.SetExcelTitle(1, "value:"+sheetTitle+";"  // 표시할 타이틀
  // 							    + "font-face:'돋움체';" // 폰트
  // 							    + "font-size:18pt;"    // 폰트 크기
  // 							    + "font-color:black;"  // 폰트 색깔
  // 							    + "bgcolor:#ffffff;"   // 배경 색깔
  // 							    + "align:center;"      // 정렬
  // 							    + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  // 							    + "line-width:0pt;"    // 타이틀 테두리선 굵기
  // 							    + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  // fileName = '원천세등록내역_' + txt_declarDeptNm.value + "_" + ed_closeYm.text;
  // cfGridToExcel(gr_withhold,fileName,fileName,2+8+16);

  var sheetTitle = "원천세등록내역 (" + ica_closeYm.getValue() + ed_declarDeptNm.getValue() + ")";
  var fileName = "원천세등록내역_" + ed_declarDeptNm.getValue() + "_" + ica_closeYm.getValue();
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: fileName + ".xlsx",
      sheetName: fileName,
      startRowIndex: 2 // 내용 앞으로 몇 row 띄우는지...
      ,

      startColumnIndex: 0,
      bodyWordwrap: "true" // 줄바꿈
      ,

      hiddenVisible: "true" // 히든 컬럼 출력 - seq
      // useSubtotal            : "true"  // 소계 출력
    };
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 16 /* 병합할 컬럼갯수 */,
      text: sheetTitle,
      textAlign: "center",
      drawBorder: false,
      fontSize: "18px",
      fontName: "돋움체"
    }];
    $c.data.downloadGridViewExcel($p, gr_withhold, options, infoArr);
  }
};
scwin.ed_totSal_onkeyup = function (e) {
  scwin.chkNumber(this);
};
scwin.chkNumber = function (obj) {
  console.log("  ----- chkNumber  obj [" + obj + "]");
  let val = obj.getValue();

  // 숫자 아닌 건 제거
  val = val.replace(/[^0-9]/g, "");

  // 첫 글자가 0이면 제거
  val = val.replace(/^0+/, "");
  obj.setValue(val);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coNm',popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validTitle:'회사코드',id:'udc_coCd',btnId:'btn_coCd',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'50','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',code:'coCd',refDataCollection:'ds_search'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',mandatory:'true',displayFormat:'yyyy/MM',ref:'data:ds_search.closeYm','ev:onchange':'scwin.f_reCal',title:'지급년월'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_declarDept',nameId:'ed_declarDeptNm',popupID:'retrieveAcctDeptCdInfo7popup',selectID:'retrieveAcctDeptCdInfo7',style:'',validTitle:'귀속부서',id:'udc_declarDept',btnId:'btn_declarDept',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'50','ev:onclickEvent':'scwin.udc_declarDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_declarDept_onblurCodeEvent',refDataCollection:'ds_search',code:'declarDept',name:'declarDeptNm','ev:onviewchangeNameEvent':'scwin.udc_declarDept_onviewchangeNameEvent',mandatoryName:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',disabled:'',escape:'false',id:'btn_pu_evid',style:'',type:'button','ev:onclick':'scwin.f_DeptDis',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'부서배부'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'N',grp:'grd_section1',templateYn:'N',style:'',gridID:'gr_withhold',btnUser:'Y',btnPlusYn:'N',gridDownFn:'scwin.f_Export',id:'udc_grdMain',mandatory:'true',hiddenCol:'true',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 161px;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'원천세 구분 코드 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 200px;',allOption:'',id:'lc_withholdClsCd',class:'',direction:'auto',mandatory:'true',objType:'data',sortMethod:'ascending',sortOption:'value',ref:'data:ds_withhold.withholdClsCd',title:'원천세구분코드'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_payDt',class:'',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',mandatory:'true',objType:'data',title:'지급일자',ref:'data:ds_withhold.payDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'작성일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_slipDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'data',title:'작성일자',ref:'data:ds_withhold.slipDt','ev:onclick':'scwin.ica_slipDt_onclick'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',selectID:'retrieveAcctCdInfo',popupID:'retrieveAcctCdInfopopup',validTitle:'계정',nameId:'ed_acctNm',style:'',id:'udc_acctCd',btnId:'btn_acctCd',allowCharCode:'0-9',maxlengthCode:'7',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent',refDataCollection:'ds_withhold',code:'acctCd',name:'acctNm',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',selectID:'retrieveClntList',popupID:'retrieveClntListpopup',validTitle:'거래처',nameId:'ed_clntNm',style:'',id:'udc_clntNo',btnId:'btn_clntNo',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',maxlengthName:'50','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',refDataCollection:'ds_withhold',code:'clntNo',name:'clntNm',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'총급여',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_totSal',class:'tar',mandatory:'true',displayFormat:'#,##0',objType:'data',maxlength:'13',title:'총급여',ref:'data:ds_withhold.totSal',dataType:'number',allowChar:'0-9','ev:onkeyup':'scwin.ed_totSal_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'과세대상급여',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_taxnTrgtSal',class:'tar',maxlength:'13',displayFormat:'#,##0',objType:'data',title:'과세대상급여',ref:'data:ds_withhold.taxnTrgtSal',dataType:'number',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'소득세/지방소득세',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_incomeTax',class:'tar',maxlength:'13',displayFormat:'#,##0',objType:'data',ref:'data:ds_withhold.incomeTax',title:'소득세',dataType:'number','ev:onblur':'scwin.ed_incomeTax_onblur',allowChar:'0-9'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_manTax',class:'tar',objType:'data',displayFormat:'#,##0',maxlength:'13',ref:'data:ds_withhold.manTax',title:'지방소득세',dataType:'number',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'총인원(출력일수)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 200px;text-align:right;',id:'ed_totStaff',class:'',objType:'data',maxlength:'12.4',displayFormat:'#,##0.#',title:'총인원',ref:'data:ds_withhold.totStaff',dataType:'float',allowChar:'0-9.'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'실근무일수',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_mmWorkDdCnt',class:'tar',objType:'data',maxlength:'5',mandatory:'true',displayFormat:'#,##0',title:'실근무일수',ref:'data:ds_withhold.mmWorkDdCnt',dataType:'number',allowChar:'0-9','ev:onblur':'scwin.ed_mmWorkDdCnt_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'건강보험',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_hlthInsr',class:'tar',displayFormat:'#,##0',objType:'data','ev:onblur':'scwin.ed_hlthInsr_onblur',title:'건강보험',dataType:'number',ref:'data:ds_withhold.hlthInsr',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'건강보험 거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_hlthClntNo',selectID:'retrieveClntList',popupID:'retrieveClntListpopup2',validTitle:'건강보험거래처',nameId:'ed_hlthClntNm',style:'',btnId:'btn_hlthClntNo',id:'udc_hlthClntNo',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_hlthClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hlthClntNo_onblurCodeEvent',refDataCollection:'ds_withhold',code:'hlthClntNo',name:'hlthClntNm',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'국민연금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_ntnalPension',class:'tar',displayFormat:'#,##0',objType:'data','ev:onblur':'scwin.ed_ntnalPension_onblur',title:'국민연금',dataType:'number',ref:'data:ds_withhold.ntnalPension',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'국민연금 거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_ntnalClntNo',selectID:'retrieveClntList',popupID:'retrieveClntListpopup3',validTitle:'국민연금거래처',nameId:'ed_ntnalClntNm',style:'',id:'udc_ntnalClntNo',btnId:'btn_ntnalClntNo',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_ntnalClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ntnalClntNo_onblurCodeEvent',refDataCollection:'ds_withhold',code:'ntnalClntNo',name:'ntnalClntNm',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'고용보험',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'ed_hireInsr',class:'tar',displayFormat:'#,##0',objType:'data','ev:onblur':'scwin.ed_hireInsr_onblur',title:'고용보험',dataType:'number',maxlength:'23',ref:'data:ds_withhold.hireInsr',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'고용보험 거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_hireClntNo',selectID:'retrieveClntList',popupID:'retrieveClntListpopup4',validTitle:'고용보험거래처',nameId:'ed_hireClntNm',style:'',id:'udc_hireClntNo',btnId:'btn_hireClntNo',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_hireClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_hireClntNo_onblurCodeEvent',refDataCollection:'ds_withhold',code:'hireClntNo',name:'hireClntNm',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'4대보 귀속부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo7',codeId:'ed_withholdAcctDeptCd',popupID:'retrieveAcctDeptCdInfo7popup',validTitle:'4대보귀속부서',nameId:'ed_withholdAcctDeptNm',style:'',id:'udc_withholdAcctDeptCd',btnId:'btn_withholdAcctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_withholdAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_withholdAcctDeptCd_onblurCodeEvent',refDataCollection:'ds_withhold',code:'withholdAcctDeptCd',name:'withholdAcctDeptNm',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_summary',class:'',mandatory:'true',objType:'data',title:'적요',ref:'data:ds_withhold.summary',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급수단',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 200px;',allOption:'false',id:'lc_reqPayMthdCd',class:'',direction:'auto',objType:'data',sortMethod:'ascending',sortOption:'value',mandatory:'true',ref:'data:ds_withhold.reqPayMthdCd',title:'지급수단',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'근무지',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_workSiteCd',selectID:'retrieveWorkSiteInfo',popupID:'retrieveWorkSiteInfopopup',validTitle:'근무지',nameId:'ed_workSiteNm',style:'',btnId:'btn_workSiteCd',id:'udc_workSiteCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',mandatoryCode:'true',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_workSiteCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_workSiteCd_onblurCodeEvent',refDataCollection:'ds_withhold',code:'workSiteCd',name:'workSiteNm',skipOnBlurCodeValueEmpty:'N'}}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'4대보험 귀속부서는 HR파트(팀)입니다. &nbsp;(부서코드 00006)',class:'txt-dot txt-blue mt4',escape:'false'}}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_withhold',style:'',autoFit:'allColumn',id:'gr_withhold',visibleRowNum:'8',class:'wq_gvw','ev:oncellclick':'scwin.gr_withhold_oncellclick','ev:onheaderclick':'scwin.gr_withhold_onheaderclick',rowStatusVisible:'true',focusMode:'cell',sortable:'false',showSortableUseFilter:'false',showSortableImage:'false',rowStatusWidth:'20',gridName:'원천세등록'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'checkYnHeader',value:'',displayMode:'label',fixColumnWidth:'true',checkboxLabel:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'지급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'총인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'근무일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column7',value:'총급여',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'과세대상',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'근무지명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'seq',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'checkYn',value:'',displayMode:'label',fixColumnWidth:'true',valueType:'other',falseValue:'F',trueValue:'T',hiddenCol:'true',keepFocusOnCheckHeaderClick:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payDt',value:'',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'totStaff',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'mmWorkDdCnt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',mandatory:'true',minValue:'0.1'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'totSal',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',mandatory:'true',minValue:'1'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'taxnTrgtSal',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'incomeTax',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',style:'',id:'manTax',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',id:'slipNo',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'workSiteNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rltSeq',value:'',displayMode:'label',readOnly:'true',dataType:'text',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',readOnly:'true',dataType:'number',expression:'sum(\'totStaff\')',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'mmWorkDdCnt\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'totSal\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column21',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'taxnTrgtSal\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'incomeTax\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'manTax\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_copyRow',type:'button',class:'btn','ev:onclick':'scwin.f_CopyRow',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',cancelFunction:'scwin.f_CancelRow',rowDelFunction:'scwin.f_DeleteRow',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_withhold'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_slipSave',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_SlipSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_btUpdate',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_btSave',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})