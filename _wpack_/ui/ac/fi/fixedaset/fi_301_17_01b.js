/*amd /ui/ac/fi/fixedaset/fi_301_17_01b.xml 63632 a1820acc3705158c5fda78be751f61795b233f0e95da241a27e80e6eb0d2862d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'취득일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'취득일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'자산유형',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deprCompleteYn',name:'삼각진행여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'histDtStDt',name:'평가일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'histDtEndDt',name:'평가일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reappraiseYn',name:'재평가유무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'false','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange','ev:oncelldatachange':'scwin.ds_master_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndCd',name:'자산종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'자산종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternClsCd',name:'자산유형구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistSeq',name:'고정자산이력순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetHistClsNm',name:'고정자산이력구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr',name:'소재지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allClsCd',name:'전체구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdClsCd',name:'자본적지출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histDt',name:'이력일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histQty',name:'이력수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provIncrAmt',name:'충당금증가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provDecrAmt',name:'충당금감소금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprIncrAmt',name:'상각증가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprDecrAmt',name:'상각감소금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispAmt',name:'매각금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regTaxAmt',name:'등록세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseSlipNo',name:'역전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmtFcrc',name:'취득금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procDifferAmt',name:'매각손익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranBfAcctDeptCd',name:'이관전귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histRate',name:'이력비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용년수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSvcLife',name:'이력내용년수(이전)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSvcLifeBef',name:'이력내용년수(이전)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMon',name:'내용년수(월)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'이력내용월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSvcLifeMonth',name:'이력내용월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSvcLifeMonthBef',name:'이력내용월수(이전)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSvcLifeMon',name:'이력내용년수(개월)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSvcLifeBefMon',name:'이력내용년수개월(이전)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reappraiseDiffAmt',name:'재평가차익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recentlyHistDt',name:'재평가일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recentlyReappraiseDiffAmt',name:'손상차손/환입액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recentlyDiffYyBookAmt',name:'반영후 장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recentlyThisYyBookAmt',name:'전월장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyDeprAmt',name:'현 감가상각액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyProvAmt',name:'현 감가상각누계액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyBookAmt',name:'현 장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffYyBookAmt',name:'차익반영장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histArea',name:'이력면적(토지/건물)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispFornAmt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranBfFixedAsetNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdAmt',name:'자본적지출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqTaxAmt',name:'취등록세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtcCsmTaxAmt',name:'특별소비세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdAmtRepClnt',name:'자본적지출거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqTaxAmtRepClnt',name:'취등록세거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'individualRepClnt',name:'개별소비세거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdAmtWorkSiteNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqTaxAmtWorkSiteNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtcCsmTaxAmtWorkSiteNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo1',name:'거래처코드신설(tb_fi203에만)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm1',name:'거래처코드신설(tb_fi203에만)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',name:'영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispAmt2',name:'매각금액2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispPrflos',name:'매각손익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdAmt2',name:'자본적지출금액2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuseAmt',name:'폐기금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAmt',name:'이관금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reappraiseAmt',name:'재평가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookAmt',name:'장부금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfAcctDeptCd',name:'이관후귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfAcctDeptNm',name:'이관후귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAfFixedAsetNo',name:'이관전자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'자산이력승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqCls',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsStdt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipHistDt',name:'전표이력일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAcqDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'histDt',name:'손상차손/환입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reappraiseDiffAmt',name:'손상차손/환입액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPattern',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_createAssets',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'histDt',name:'변동일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'histDt',name:'변동일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetHistClsCd',name:'고정자산이력구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.fixedaset.RetrieveAssetsImpairmentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ac.fi.fixedaset.RetrieveAssetsImpairmentDetailCMD.do',method:'post',mediatype:'application/json',target:'data:json,{"id":"ds_detail", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:'',ref:'data:json,[{"id":"dma_searchDetail","key":"IN_DS1"},{"action":"all","id":"ds_detail","key":"OUT_DS1"}]'}},{T:1,N:'xf:submission',A:{id:'sbm_saveLoss',action:'/ac.fi.fixedaset.CreateAssetsImpairmentLossCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"action":"all","id":"ds_createAssets","key":"IN_DS2"},{"action":"all","id":"ds_slipNo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveLoss_submitdone','ev:submiterror':'',abortTrigger:'',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}'}},{T:1,N:'xf:submission',A:{id:'sbm_asetPattern',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do',method:'post',mediatype:'application/json',target:'data:json,{"id":"ds_asetPattern", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 자산 손상/환입처리
 * 메뉴경로 : 회계/재무회계/고정자산/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/fixedaset/fi_301_17_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-18
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 처리
 * 참고사항 : 
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 *    3. "hiddenVisible":true 되어 있는 항목 일단 false 처리[hiddenCol="true" => hiddenCol="false"]
 *    4. 그리드 fixedColumn 시 마지막 column의 다음 column이 움직이지 않는 현상 수정해야함.
 *       예)fixedColumn = "5" 인 경우 5자리까지 이동 불가해야하는데 6자리부터 이동불가됨(인스웨이브에서 공통처리 예정)
 * 테스트데이터 :
 *    1. 회사코드[000], 취득일자[20200101~20251231], 자산유형[토지], 귀속부서[00000]
 * 수정이력 :
 *    - 2025-11-18      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = ""; //회사구분코드(hidden, 회사팝업호출 시)
scwin.txtFixedAsetHistClsCd = ""; //고정자산이력구분코드[FI014](hidden, 조회시만 사용)

//로그인 정보
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;
scwin.isfixedAsetHistClsCd = "85"; //자산 손상/환입처리(85)
scwin.initJson = {}; //초기세팅값(TOBE)
scwin.first = 0;

//TOBE 추가
scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // scwin.f_HeaderCreate(); //데이터셋 헤더생성

  // //자산유형 조회
  // ds_asetPattern.DataId = "/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do?useYn=1";
  // ds_asetPattern.undoAll();

  // scwin.f_FieldClear();

  // scwin.f_setCompanyInfo();
  // ed_srchAcctDeptCd.setValue = "00000";
  // ed_srchAcctDeptNm.value = "전사";

  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //관리자권한
  scwin.first = 0;
  /**
   * TODO : 임시로 회사코드 초기값 가지고 있기 위해 처리
   * 로드 시 마지막으로 처리되는 로직
   */
  const codeOptions = [{
    grpCd: "EQ055",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  scwin.initJson = dma_search.getJSON();
};

/**
 * 자산유형 조회
 */
scwin.f_asetPattern = function () {
  ds_asetPattern.removeAll();
  $c.sbm.execute($p, sbm_asetPattern, {
    "useYn": "1"
  });
  ds_asetPattern.sort("asetPatternCd", 0);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_master.setNoResultMessageVisible(false);
  gr_detail.setNoResultMessageVisible(false);
  ds_master.reform();
  ds_master.removeAll();
  ds_detail.reform();
  ds_detail.removeAll();
  totalRows1.setValue("0");
  totalRows2.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.f_asetPattern();
  scwin.setInit();
  scwin.f_HeaderCreate();
  scwin.f_setCompanyInfo();
  // scwin.f_FieldClear();
  scwin.f_SetSrchDefault();
};

/**
 * 데이터셋 헤더생성
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_SEARCH_HEADER = "coCd:STRING(3)" //회사코드
  //     + ",coClsCd:STRING(1)" //회사구분코드
  //     + ",acqDtStDt:STRING(8)" //취득일자(from)
  //     + ",acqDtEndDt:STRING(8)" //취득일자(to)
  //     + ",asetPatternCd:STRING(2)" //자산유형
  //     + ",deprCompleteYn::INT(1)" //상각진행여부
  //     + ",acctDeptCd:STRING(5)" //귀속부서
  //     + ",acctDeptNm:STRING(100)" //귀속부서명
  //     + ",histDtStDt:STRING(8)" //평가일자(from)
  //     + ",histDtEndDt:STRING(8)" //평가일자(to)
  //     + ",fixedAsetNo:STRING(10)" //자산번호
  //     + ",reappraiseYn:INT(1)" //재평가유무
  //     + ",fixedAsetHistClsCd:STRING(2)"; //고정자산이력구분코드

  // ds_search.SetDataHeader(GAUCE_SEARCH_HEADER);
  // ds_search.insertRow();

  // var GAUCE_SEARCHDETAIL_HEADER = "fixedAsetNo:STRING(10)"
  //     + ",histDt:STRING(8)"
  //     + ",fixedAsetHistClsCd:STRING(2)";

  // ds_searchDetail.SetDataHeader(GAUCE_SEARCHDETAIL_HEADER);
  // ds_searchDetail.insertRow();

  // var GAUCE_CREATEASSETS_HEADER = "histDt:STRING(8)";
  // ds_createAssets.SetDataHeader(GAUCE_CREATEASSETS_HEADER);
  let addRow = ds_createAssets.insertRow();
  ds_createAssets.setCellData(addRow, "histDt", "");
  ds_createAssets.reform();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_coNm]);
  //dma_search.setJSON(scwin.initJson);

  scwin.f_SetSrchDefault();
  ed_coCd.hidVal = ""; //회사코드(조회)
  ed_srchAcctDeptCd.hidVal = ""; //귀속부서코드(조회)
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  ed_srchAcctDeptCd.setValue("00000");
  ed_srchAcctDeptNm.setValue("전사");
  let today = $c.date.getServerDateTime($p);
  ica_acqDtStDt.setValue(today.substring(0, 6) + "01");
  ica_acqDtEndDt.setValue(today);
  ica_chgHistDt.setValue(today);
  lc_deprCompleteYn.setValue("-1");
  ed_srchFixedAsetNo.setValue("");
  // ica_histDtStDt.setValue("");
  // ica_histDtEndDt.setValue("");
  scwin.txtFixedAsetHistClsCd = scwin.isfixedAsetHistClsCd;
  ica_acqDtStDt.focus();
};

/**
 * 자회사 회계 시스템 추가에 따른 설정 
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  let ret = await scwin.f_Validation();
  if (!ret) {
    return;
  }
  scwin.setInit();
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  dma_search.set("fixedAsetHistClsCd", scwin.txtFixedAsetHistClsCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_master.setNoResultMessageVisible(true);
  let rowCnt = ds_master.getRowCount();
  totalRows1.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      //조회된 결과 정렬(asis:<param name=SortExpr 참조)
      // ds_master.sort("seq", 0);
      gr_master.setFocusedCell(0, 0);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 체크
 */
scwin.f_Validation = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_coCd, ica_acqDtStDt, ica_acqDtEndDt]);
  if (!ret) {
    return false;
  }
  if ($c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtStDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtEndDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    // if (!cfValidateValue(ica_acqDtEndDt.setValue, "minDate = " + ica_acqDtStDt.getValue())) {
    //     $c.win.alert(MSG_CM_ERR_039);
    //     ica_acqDtStDt.focus();
    //     return false;
    // }
    // 날짜체크
    if (!(await $c.gus.cfIsAfterDate($p, ica_acqDtStDt.getValue().trim(), ica_acqDtEndDt.getValue().trim()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ica_acqDtEndDt.focus();
      return false;
    }
  }
  if (!$c.gus.cfIsNull($p, ica_histDtStDt.getValue()) && !$c.gus.cfIsNull($p, ica_histDtEndDt.getValue())) {
    // if (!cfValidateValue(ica_histDtEndDt.setValue, "minDate = " + ica_histDtStDt.getValue())) {
    //     $c.win.alert(MSG_CM_ERR_039);
    //     ica_histDtStDt.focus();
    //     return false;
    // }
    // 날짜체크
    if (!(await $c.gus.cfIsAfterDate($p, ica_histDtStDt.getValue().trim(), ica_histDtEndDt.getValue().trim()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ica_histDtStDt.focus();
      return false;
    }
  }
  ret = await $c.gus.cfValidate($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm, ed_srchFixedAsetNo]);
  if (!ret) {
    return false;
  }
  return true;
};

/**
 * 자산 변경이력 조회
 * sFixedAsetNo : 자산번호, sFixedAsetHistClsCd : 고정자산이력구분코드
 */
scwin.f_RetrieveDetail = function (sFixedAsetNo, sHistDt, sFixedAsetHistClsCd) {
  if (!$c.gus.cfIsNull($p, sFixedAsetNo) && !$c.gus.cfIsNull($p, sFixedAsetHistClsCd)) {
    let json = {};
    json.fixedAsetNo = sFixedAsetNo;
    json.histDt = sHistDt;
    json.fixedAsetHistClsCd = sFixedAsetHistClsCd;
    ds_detail.removeAll();
    totalRows2.setValue("0");
    dma_searchDetail.setEmptyValue();
    dma_searchDetail.setJSON(json);
    $c.sbm.execute($p, sbm_retrieveDetail);
  }
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_detail.setNoResultMessageVisible(true);
  let rowCnt = ds_detail.getRowCount();
  totalRows2.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    gr_detail.setFocusedCell(0);
  }
};
scwin.sbm_retrieveDetail_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

// scwin.f_GetObjValue = function (inObj) {
//     return (inObj.tagName == "OBJECT") ? inObj.text : inObj.value;
// };

// scwin.f_SetObjValue = function (inObj, val) {
//     if (inObj.tagName == "OBJECT")
//         inObj.text = val;
//     else
//         inObj.value = val;
// };

// scwin.f_PopUp = function (codeObj, nameObj, sQueryID, sWhere, sWidth) {
//     var rtnList = cfCommonPopUp(sQueryID, scwin.f_GetObjValue(codeObj), ""
//         , scwin.f_EventCheck()
//         , null, null, null, null
//         , sWhere, sWidth, null, null, null);

//     if (rtnList != null) {
//         if (rtnList[0] != "N/A") {
//             scwin.f_SetObjValue(codeObj, rtnList[0]);
//             codeObj.hidVal = rtnList[0];
//             scwin.f_SetObjValue(nameObj, rtnList[1]);
//         }
//     } else {
//         scwin.f_SetObjValue(codeObj, "");
//         codeObj.hidVal = "";
//         scwin.f_SetObjValue(nameObj, "");
//     }

//     return rtnList;
// };

// scwin.f_IsPopUp = function (inObj) {
//     var inValue = scwin.f_GetObjValue(inObj);
//     var hidValue = inObj.hidVal;

//     if ($c.gus.cfIsNull(inValue)) {
//         inObj.hidVal = "";
//         for (var i = 1; i < f_IsPopUp.arguments.length; i++) {
//             scwin.f_SetObjValue(scwin.f_IsPopUp.arguments[i], "");
//         }
//         return false;
//     }
//     if (inValue == hidValue) return false;

//     return true;
// };

// scwin.f_EventCheck = function() {
//     if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
//         return 'F';
//     } else {
//         return 'T';
//     }
// };

/**
 * 조회 귀속부서코드 팝업
 */
// scwin.f_srchDeptPopUp = function() {
scwin.f_srchDeptPopUp = function (close) {
  // var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  // scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm
  //     , "retrieveAcctDeptCdInfo6", param, "410");
  let param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //조회조건 9번째, 전체검색허용여부 15번째
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), close, null, null, null, null, param, null, null, null, null, null, null, null, null);
};

/**
 * 귀속부서코드 팝업 callBack
 */
scwin.udc_srchAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]); // 귀속부서코드
    ed_srchAcctDeptNm.setValue(ret[1]); // 귀속부서명
    ed_srchAcctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_srchAcctDeptCd.setValue(""); // 귀속부서코드
    ed_srchAcctDeptNm.setValue(""); // 귀속부서명
    ed_srchAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 콤보데이터 검증
 */
scwin.f_CheckComboData = function (objCombo, comboTitle) {
  // if (objCombo.Index == -1 && $c.gus.cfIsNull(objCombo.getValue()) == false) {
  //     objCombo.Index = objCombo.IndexOfColumn(objCombo.SearchColumn, objCombo.getValue());

  //     if (objCombo.Index == -1) {
  //         $c.win.alert(MSG_CM_ERR_038, [comboTitle + "코드"]);
  //         objCombo.Focus();
  //     }
  // }
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_GridToExcel = function (gr_groupCode, gridName) {
//     $c.data.downloadGridViewExcel(gr_groupCode, gridName, "C:\\" + gridName + ".xls", 4 + 8 + 16);
// };

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  //asis 소스
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  //     , ed_coCd.getValue(), ed_coNm.value
  //     , pWinCloseTF, null, null, null, null
  //     , null, null, null, null, null);
  // // SET
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     ed_coCd.setValue = rtnList[0]; // 코드
  //     ed_coNm.value = rtnList[5]; // 회사명
  //     ed_coCd.hidVal = rtnList[0]; // 히든값
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분
  //     $c.gus.cfInitObjects([ed_srchAcctDeptCd, ed_srchAcctDeptNm]); // 조회조건 - 귀속부서 From
  // } else {
  //     ed_coCd.setValue = "";
  //     ed_coNm.value = "";
  //     ed_coCd.hidVal = "";
  //     scwin.txtCoClsCd = "";
  // }

  // if (scwin.txtCoClsCd > 'scwin.ACConstants.CO_CLS_CD_DONGBU') { // 자회사 회계 시스템
  //     scwin.isSubCompany = true;
  // } else {
  //     scwin.isSubCompany = false;
  // }

  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    //TODO : udc가 마지막으로 처리하다보니 초기값 귀속부서 빈값 안되도록 처리
    if (!$c.gus.cfIsNull($p, ed_coCd.hidVal) && !$c.gus.cfIsNull($p, scwin.txtCoClsCd)) {
      // 조회조건 - 귀속부서 From
      $c.gus.cfInitObjects($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm]);
    }
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
    ed_coCd.hidVal = ret[0]; // 히든값
    scwin.txtCoClsCd = ret[1]; // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }

  //TODO : 처음 로딩 시 한번만 처리(웹스퀘어 UDC 싱크....)
  if (scwin.first == 0) {
    // 자회사 회계 시스템
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.first++;
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function (objGrd, size) {
// };

/**
 * 손상차손처리
 */
scwin.f_AssetsImpairmentLossAndGain = async function () {
  //변경한 데이터가 있는지 체크한다.
  // if (ds_master.IsUpdated == false) {
  if (ds_master.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }
  var nRow = ds_master.getMatchedIndex("chk", "1");
  if (nRow.length < 1) {
    await $c.gus.cfAlertMsg($p, "선택한 내역이 존재하지 않습니다.");
    return;
  }
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "chk") == "1") {
      if (ds_master.getCellData(i, "asetPatternClsCd") != "2") {
        await $c.gus.cfAlertMsg($p, "무형자산만 입력이 가능합니다.");
        ds_master.setCellData(i, "chk", "0");
        gr_master.setFocusedCell(i, "chk");
        return false;
      }
      if ($c.gus.cfIsNull($p, ds_master.getCellData(i, "reappraiseDiffAmt")) || ds_master.getCellData(i, "reappraiseDiffAmt") == "0") {
        await $c.gus.cfAlertMsg($p, "선택한 " + (i + 1) + "번째 행의 손상차손/환입액을 입력하십시요");
        gr_master.setFocusedCell(i, "reappraiseDiffAmt", true);
        return;
      }
      if (ds_master.getCellData(i, "diffYyBookAmt") < 0) {
        await $c.gus.cfAlertMsg($p, "손상차손/환입액은 현장부가액을 초과할 수 없습니다.");
        gr_master.setFocusedCell(i, "reappraiseDiffAmt", true);
        return;
      }
      if ($c.gus.cfIsNull($p, ds_master.getCellData(i, "mgntClntNo"))) {
        await $c.gus.cfAlertMsg($p, "거래처를 입력해 주십시오");
        gr_master.setFocusedCell(i, "mgntClntNo");
        return;
      }
    }
  }
  let ret = await $c.gus.cfValidate($p, [ica_chgHistDt]);
  if (!ret) {
    return;
  }
  if (await $c.win.confirm($p, "손상차손/환입 처리 하시겠습니까?")) {
    // 고정자산이력구분코드(85 : 고정자산 손상차손/환입)
    for (var i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "chk") == "1") {
        ds_master.setCellData(i, "fixedAsetHistClsCd", scwin.isfixedAsetHistClsCd);
      }
    }
    ds_createAssets.setCellData(0, "histDt", ica_chgHistDt.getValue());
    sbm_saveLoss.userData1 = "noError";
    $c.sbm.execute($p, sbm_saveLoss);
  }
};
scwin.sbm_saveLoss_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_master.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_saveLoss_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 환입처리
 * asis 주석처리되어 있음(사용안함)
 */
// scwin.f_AssetsImpairmentGain = async function () {
//     var nRow = ds_master.getMatchedIndex("chk", "1");
//     if (nRow.length < 1) {
//         $c.win.alert("선택한 내역이 존재하지 않습니다.");
//         return;
//     }

//     if (await $c.win.confirm(confirm("손상환입 처리 하시겠습니까?")) {
//         // 고정자산이력구분코드(85 : 고정자산 손상차손/환입)
//         for (var i = 1; i <= ds_master.getRowCount(); i++) {
//             if (ds_master.getCellData(i, "chk") == "1") {
//                 ds_master.setCellData(i, "fixedAsetHistClsCd", scwin.isfixedAsetHistClsCd);
//             }
//         }
//         $c.sbm.execute(sbm_cancel);
//     }
// };

/**
 * 자산번호 포커스를 잃었을때
 */
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if (!$c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue())) {
    let value = $c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10);
    ed_srchFixedAsetNo.setValue(value);
    btn_search.focus();
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 회사코드(조회) 팝업 호출
 */
scwin.udc_comCode_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};

/**
 * 귀속코드(조회) 팝업 호출
 */
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  if (ed_srchAcctDeptCd.hidVal != ed_srchAcctDeptCd.getValue()) {
    ed_srchAcctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_srchDeptPopUp(close);
};
scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_srchAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    scwin.f_srchDeptPopUp("T");
  }
};

/**
 * 그리드 팝업호출
 */
// scwin.f_openClntPopUp1 = async function (row) {
scwin.f_openClntPopUp1 = async function (row, data, close) {
  // var rtnList = new Array();
  // rtnList = cfCommonPopUp("retrieveClntList", '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null);
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return false;
  //     repClntRowPosi = ds_master.getRowPosition;
  //     ds_master.setCellData(repClntRowPosi, "mgntClntNo", rtnList[0]); //거래처코드
  //     ds_master.setCellData(repClntRowPosi, "mgntClntNm", rtnList[1]); //거래처명
  // }
  scwin.f_commCdPopupRow = row;
  ds_master.setCellData(row, "mgntClntNo", "");
  ds_master.setCellData(row, "mgntClntNm", "");
  udc_comCode_Grid.setSelectId("retrieveClntList");
  await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_callBackFunc, data, "", close, null, null, null, "3,4,5,6,7,8,9,10", "", null, null, null, null, null, "F", null);
};
scwin.udc_comCode_Grid_callBackFunc = function (ret) {
  // let rowIdx = gr_master.getFocusedRowIndex();
  let rowIdx = scwin.f_commCdPopupRow;
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_master.setCellData(rowIdx, "mgntClntNo", ret[0]); //거래처코드
    ds_master.setCellData(rowIdx, "mgntClntNm", ret[1]); //거래처명
  } else {
    ds_master.setCellData(rowIdx, "mgntClntNo", ""); //거래처코드
    ds_master.setCellData(rowIdx, "mgntClntNm", ""); //거래처명
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * DataList의 rowPosition이 변경된 경우 발생
 */
scwin.ds_master_onrowpositionchange = function (info) {
  if (ds_master.getRowCount() < 1) {
    return;
  }
  let rowIndex = info.newRowIndex;
  let fixedAsetNo = ds_master.getCellData(rowIndex, "fixedAsetNo");
  let recentlyHistDt = ds_master.getCellData(rowIndex, "recentlyHistDt");
  scwin.f_RetrieveDetail(fixedAsetNo, recentlyHistDt, scwin.isfixedAsetHistClsCd);
};

/**
 * 하나의 셀에 대한 값이 변경된 경우 발생
 */
scwin.ds_master_oncelldatachange = function (info) {
  if (info.colID == "chk") {
    if (info.newValue == "0") {
      ds_master.setCellData(info.rowIndex, "reappraiseDiffAmt", 0);
      ds_master.setCellData(info.rowIndex, "diffYyBookAmt", ds_master.getCellData(info.rowIndex, "recentlyDiffYyBookAmt"));
      return;
    }
  }
  if (info.colID == "reappraiseDiffAmt") {
    ds_master.setCellData(info.rowIndex, "diffYyBookAmt", Number(ds_master.getCellData(info.rowIndex, "reappraiseDiffAmt")) + Number(ds_master.getCellData(info.rowIndex, "thisYyBookAmt")));
  }
};

/**
 * 그리드 이미지셀 클릭 이벤트
 */
scwin.gr_master_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = ds_master.getColumnID(columnIndex);
  let data = ds_master.getCellData(rowIndex, columnId);
  if (columnId == "mgntClntNo") {
    //scwin.f_openClntPopUp1();
    scwin.f_openClntPopUp1(rowIndex, data, "F");
  }
  return true;
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_master_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_master.getColumnID(columnIndex);
  if (columnId == "mgntClntNo") {
    scwin.oldValue = value;
  }
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_master_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_master.getColumnID(columnIndex);
  if (columnId == "mgntClntNo") {
    if (!$c.gus.cfIsNull($p, value) && value != scwin.oldValue) {
      scwin.f_openClntPopUp1(rowIndex, value, "T");
    } else if ($c.gus.cfIsNull($p, value)) {
      ds_master.setCellData(rowIndex, "mgntClntNm", "");
    }
  }
};

/**
 * 그리드 셀 클릭 이벤트
*/
scwin.gr_master_oncellclick = async function (rowIndex, columnIndex, columnId) {
  //손익차손/환입액
  if (columnId == "reappraiseDiffAmt") {
    if (ds_master.getCellData(rowIndex, "chk") == "1") {
      gr_master.setCellReadOnly(rowIndex, "reappraiseDiffAmt", false);
    } else {
      gr_master.setCellReadOnly(rowIndex, "reappraiseDiffAmt", true);
    }
  }
  //거래처코드
  if (columnId == "mgntClntNo") {
    if (ds_master.getCellData(rowIndex, "chk") == "1") {
      gr_master.setCellReadOnly(rowIndex, "mgntClntNo", false);
    } else {
      gr_master.setCellReadOnly(rowIndex, "mgntClntNo", true);
    }
  }
  //전표팝업조회
  if (columnId == "slipNo") {
    let slipNo = ds_master.getCellData(rowIndex, "slipNo");
    if (!$c.gus.cfIsNull($p, slipNo)) {
      await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};

/**
 * 그리드 셀 클릭 이벤트
*/
scwin.gr_detail_oncellclick = async function (rowIndex, columnIndex, columnId) {
  //전표팝업조회
  if (columnId == "slipNo") {
    let slipNo = ds_detail.getCellData(rowIndex, "slipNo");
    if (!$c.gus.cfIsNull($p, slipNo)) {
      //cfShowSlipInfo(ds_detail.NameString(row,colid));
      await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};

/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 빈값인 경우 0으로 설정
 */
scwin.validatorNumber = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "0";
  }
  return val;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'취득일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_acqDtStDt',edToId:'ica_acqDtEndDt',id:'udc_fromToCalendar1',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:'',titleFrom:'취득일자',titleTo:'취득일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_asetPatternCd',style:'',submenuSize:'auto',ref:'data:dma_search.asetPatternCd',title:'자산유형',objType:'data',visibleRowNum:'30'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'xf:label',A:{ref:'asetPatternNm'}},{T:1,N:'xf:value',A:{ref:'asetPatternCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상각진행여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deprCompleteYn',ref:'data:dma_search.deprCompleteYn',style:'',submenuSize:'auto',title:'삼각진행여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'진행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent',id:'udc_srchAcctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_srchAcctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo6',style:'',validExpCode:'귀속부서',validTitle:'귀속부서',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평가일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_histDtStDt',edToId:'ica_histDtEndDt',id:'udc_fromToCalendar2',refDataMap:'dma_search',refEdDt:'histDtEndDt',refStDt:'histDtStDt',style:'',titleFrom:'평가일자',titleTo:'평가일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100',editFormat:'##########','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur',id:'ed_srchFixedAsetNo',objType:'data',ref:'data:dma_search.fixedAsetNo',style:'',title:'자산번호',editType:'focus',nextTabID:'btn_search'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자산 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"자산목록.xlsx", "sheetName":"자산목록", "type":"1", "hiddenVisible":false}',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',id:'udc_excel1',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:ontextimageclick':'scwin.gr_master_ontextimageclick',fixedColumn:'5','ev:oncellclick':'scwin.gr_master_oncellclick',fixedColumnNoMove:'true',gridName:'자산목록',keepDefaultColumnWidth:'true','ev:onbeforeedit':'scwin.gr_master_onbeforeedit','ev:onafteredit':'scwin.gr_master_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',fixColumnWidth:'true',id:'column1',inputType:'checkbox',rowSpan:'2',style:'',value:'hec',width:'30'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',style:'',value:'자산유형',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'자산종류',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',style:'',value:'자산번호',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',style:'',value:'자산명',width:'200'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column9',inputType:'text',rowSpan:'2',style:'',value:'귀속부서',width:'150'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column3',inputType:'text',rowSpan:'2',style:'',value:'소재지',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column7',inputType:'text',rowSpan:'2',style:'',value:'취득일자',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',style:'',value:'취득가액',width:'130'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column55',inputType:'text',rowSpan:'2',style:'',value:'전월장부가액',width:'130'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column52',inputType:'text',rowSpan:'',style:'',value:'최근 손상차손/환입 인식 내역',width:'420',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'130',inputType:'text',style:'',id:'column67',value:'현 장부가액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column43',inputType:'text',rowSpan:'2',style:'',value:'손상차손/</br>환입액',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column37',inputType:'text',rowSpan:'2',style:'',value:'차익반영</br>장부가액',width:'130'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column72',value:'거래처코드',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column68',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column31',inputType:'text',rowSpan:'2',style:'',value:'전표번호',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column65',inputType:'text',style:'',value:'인식일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'손상차손/환입액',width:'150'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column77',value:'반영후 장부가액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',style:'',value:'',width:'30',trueValue:'1',falseValue:'0',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetKndNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'siteAddr',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqDt',inputType:'calendar',style:'',value:'',width:'100',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqAmt',inputType:'text',style:'',value:'',width:'130',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recentlyThisYyBookAmt',inputType:'text',style:'',value:'',width:'130',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recentlyHistDt',inputType:'calendar',style:'',value:'',width:'100',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recentlyReappraiseDiffAmt',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'recentlyDiffYyBookAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyBookAmt',inputType:'text',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reappraiseDiffAmt',inputType:'text',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,###',textAlign:'right',readOnly:'false',maxLength:'20',excelCellType:'number',excelFormat:'#,##0',allowChar:'0-9,-',validator:'scwin.validatorNumber'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffYyBookAmt',inputType:'text',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'90',inputType:'textImage',style:'',id:'mgntClntNo',value:'',displayMode:'label',readOnly:'true',textAlign:'left',imageClickFunction:'scwin.gr_master_ontextimageclick',viewType:'default',maxLength:'6'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mgntClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'link',style:'',value:'',width:'100',class:'linktype'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'30',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'expression',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,##0',expression:'sum(\'acqAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'expression',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,##0',expression:'sum(\'recentlyThisYyBookAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'expression',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',expression:'sum(\'recentlyReappraiseDiffAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column79',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'recentlyDiffYyBookAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'expression',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,##0',expression:'sum(\'thisYyBookAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'expression',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,##0',expression:'sum(\'reappraiseDiffAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'expression',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,##0',expression:'sum(\'diffYyBookAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 손상차손/환입 이력',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"손상차손/환입 이력.xlsx", "sheetName":"손상차손/환입 이력", "type":"1", "hiddenVisible":false}',gridID:'gr_detail',gridUpYn:'N',grp:'grd_section2',id:'udc_excel2',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_detail_oncellclick',gridName:'손상차손/환입 이력'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'손상차손/환입 인식일',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'손상차손/환입액',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'전표번호',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'histDt',inputType:'calendar',style:'',value:'',width:'200',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reappraiseDiffAmt',inputType:'text',style:'',value:'',width:'200',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'link',style:'',value:'',width:'200',class:'linktype'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'expression',style:'',value:'',width:'200',displayFormat:'#,##0',dataType:'number',expression:'sum(\'reappraiseDiffAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'200'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'인식일',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_chgHistDt',style:'',ref:'',displayFormat:'yyyy/MM/dd',mandatory:'true',title:'인식일'}}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_AssetsImpairmentLossAndGain',id:'btn_procAssetsReappraise',label:'저장',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'손상차손/환입 처리'}]}]}]}]}]}]}]}]}]})