/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_34b.xml 59343 91c405de49ce18893f7958e76ba9b08f6a325dca607cc680d0f54835e30de055 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comSearchSys',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'sysCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'queryId'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'param1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'param2'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ediMappingSearch',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mchtOdrKndCd',saveRemovedData:'true','ev:ondataload':'scwin.ds_mchtOdrKndCd_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docCd',name:'문서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'외부코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalCd',name:'내부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderSearch',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dateQueryCond',name:'오더일자 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrFromDt',name:'화주오더일자FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrToDt',name:'화주오더일자TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatCls',name:'오더생성구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'당사오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'당사오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hideOrderYn',name:'hideOrderYn',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderDel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logSeq',name:'로그순번',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shipmentIndicationOrderList',saveRemovedData:'true','ev:ondataload':'scwin.ds_shipmentIndicationOrderList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndCd',name:'화주오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrKndNm',name:'화주오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logSeq',name:'로그순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rltBuyOdr',name:'관련매입오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otYn',name:'OT여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'julianOdrDt',name:'JULIAN오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrDt',name:'화주오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coBilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'출발지사업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizWrkPlCd',name:'사업장작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizWrkPlNm',name:'사업장작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizWrkPlClsCd',name:'사업장작업장구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndWrkPlCd',name:'수요가작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndWrkPlNm',name:'수요가작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndWrkPlClsCd',name:'수요가작업장구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'julianArvIntendDt',name:'JULIAN도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplZip',name:'3자물류우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zipNm',name:'우편번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zipWrkPlCd',name:'우편번호작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zipWrkPlNm',name:'우편번호작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zipWrkPlClsCd',name:'우편번호작업장구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlAddr1',name:'상세주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlAddr2',name:'상세주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accp',name:'인수자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplTelNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stsClsCd',name:'상태구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplcoCls',name:'TPL업체구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsNm',name:'전송구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDtm',name:'확정오더전송일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retnRsnCd',name:'반품사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRecptDt',name:'오더접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRecptHh',name:'오더접수시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrRecptDtm',name:'오더접수일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'당사오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatDt',name:'오더생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatHh',name:'오더생성시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatDtm',name:'오더생성일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatId',name:'오더생성자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatNm',name:'오더생성자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnOdrSndClsCd',name:'확정오더전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnOdrSndClsNm',name:'확정오더전송구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnOdrSndDt',name:'확정오더전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnOdrSndHh',name:'확정오더전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnOdrSndDtm',name:'확정오더전송일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDt',name:'오더확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnHh',name:'오더확정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnDtm',name:'오더확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDt',name:'오더완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteHh',name:'오더완료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteDtm',name:'오더완료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modNm',name:'수정자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplErrMsg',name:'3자물류오류메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suffix',name:'SUFFIX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPgmId',name:'3자물류프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workstationId',name:'WORKSTATION_ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateDt',name:'UPDATE일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateDtm',name:'UPDATE일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'작업상태',dataType:'number'}},{T:1,N:'w2:column',A:{id:'boralCommNm',name:'보랄통신명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicCd',name:'영업담당자코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesPicNm',name:'영업담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh2',name:'긴급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDtm',name:'도착예정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_UOrderDelCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'name1',id:'col1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_reterieveMchtOdrKnd',action:'/ncall.ds.sd.odrmgnt.odrtemp.RetrieveEdiMappingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ediMappingSearch","key":"IN_DS1"},{"id":"ds_mchtOdrKndCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_mchtOdrKndCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_reterieveMchtOdrKnd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reterieve',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveShipmentIndicationOrderPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"id":"ds_shipmentIndicationOrderList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_shipmentIndicationOrderList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncll.ds.sd.odrmgnt.odrreg.SaveUOrderDelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_orderDel","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{mode:'asynchronous',method:'post',id:'sbm_retrieveUOrderDelCheck',encoding:'UTF-8',mediatype:'application/json',target:'data:json,{"id":"ds_UOrderDelCheck","key":"GAUCE"}'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DCSS.js',type:'text/javascript',scopeVariable:'DCSS'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -7);
scwin.pageTitle = "오더요청현황";
scwin.docCd = "ODRKND_001"; // 문서코드 - 화주오더종류
scwin.wrkPlCd = "999"; // 작업장코드 
scwin.itemCd = ""; // 항목코드 

// 세션정보 가져오기
scwin.memJson = $c.data.getMemInfo($p);
scwin.userClsCd = scwin.memJson.userClsCd;
scwin.loginClntNo = scwin.memJson.clntNo;
scwin.oginClntNm = scwin.memJson.clntNm;
scwin.hid_chkDmndNo = ""; // 수요가
scwin.hid_chkArvWrkPlCd = ""; // 도착지
scwin.hid_chkCommCd = ""; // 품명

scwin.hid_docCd = ""; // 문서코드
scwin.hid_wrkPlCd = ""; // 작업장코드
scwin.hid_itemCd = ""; // 항목코드
scwin.hid_osideCd = ""; // 외부코드
scwin.hid_repClntNo = ""; // 대표거래처번호

scwin.sUserId = scwin.memJson.userId;
scwin.click_otYn = "";
scwin.onpageload = function () {
  if (scwin.userClsCd == "04") scwin.pageTitle = "고객오더현황";
  if (scwin.userClsCd == "01") {
    scwin.loginClntNo = "";
    scwin.loginClntNm = "";
  }
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // 초기화
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// Function
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  // DataSet HEADER 정의 - 초기화
  scwin.f_dsEdiMappingSearchHeader(); // EDI MAPPING 조회조건
  scwin.f_dsMchtOdrKndCdHeader(); // 화주 오더종류
  scwin.f_dsOrderSearchHeader(); // 오더요청현황 조회조건

  // EDI MAPPING 조회 조건 초기값
  scwin.hid_docCd = scwin.docCd;
  scwin.hid_wrkPlCd = scwin.wrkPlCd;

  // 조회 조건 초기화
  scwin.f_FieldClear();
  if (!$c.gus.cfIsNull($p, ed_clntNo.getValue())) scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'F');
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);
  ed_clntNo.focus();
  if (!scwin.userClsCd == "01") {
    $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm, btn_clntNo]);
  }

  // 테스트케이스
  // ed_mchtOdrFromDt.setValue("20150101");
  // ed_mchtOdrToDt.setValue("20150110");
};
scwin.f_dsEdiMappingSearchHeader = function () {
  ds_ediMappingSearch.insertRow();
  ds_ediMappingSearch.setRowPosition(0);
};
scwin.f_dsMchtOdrKndCdHeader = function () {
  var rowIndex = ds_mchtOdrKndCd.insertRow();
  ds_mchtOdrKndCd.setCellData(rowIndex, "osideCd", "");
  ds_mchtOdrKndCd.setCellData(rowIndex, "osideCdNm", "전체");
  ds_mchtOdrKndCd.setRowPosition(0);
};
scwin.f_dsOrderSearchHeader = function () {
  var rowIndex = ds_orderSearch.insertRow();
  ds_orderSearch.setCellData(rowIndex, "clntNo", "");
  ds_orderSearch.setCellData(rowIndex, "clntNm", "");
  ds_orderSearch.setCellData(rowIndex, "mchtOdrDtFrom", "");
  ds_orderSearch.setCellData(rowIndex, "mchtOdrDtTo", "");
  ds_orderSearch.setCellData(rowIndex, "arvIntendDt", "");
  ds_orderSearch.setCellData(rowIndex, "bizLongCd", "");
  ds_orderSearch.setCellData(rowIndex, "bizLongNm", "");
  ds_orderSearch.setCellData(rowIndex, "mchtOdrKndCd", "");
  ds_orderSearch.setCellData(rowIndex, "mchtOdrNo", "");
  ds_orderSearch.setCellData(rowIndex, "dmndNo", "");
  ds_orderSearch.setCellData(rowIndex, "dmndNm", "");
  ds_orderSearch.setCellData(rowIndex, "odrCreatCls", "");
  ds_orderSearch.setCellData(rowIndex, "odrDcsnYn", "");
  ds_orderSearch.setCellData(rowIndex, "odrCompleteYn", "");
  ds_orderSearch.setCellData(rowIndex, "bizLongCdWH", "");
  ds_orderSearch.setRowPosition(0);
};

// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건

  switch (disGubun) {
    case 1:
      // 거래처 팝업
      udc_clntNo.cfCommonPopUp(scwin.callBackClntNo, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "계약 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 사업장 팝업	
      var v_clntNo = ed_clntNo.getValue();
      var v_itemCd = "BIZ"; // 사업장 조회
      var v_wrkPlCd = scwin.wrkPlCd;

      // 거래처 선택 확인
      if ($c.gus.cfIsNull($p, v_clntNo)) {
        if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["거래처"])) {
          ed_clntNo.focus();
          return false;
        }
      }
      pWhere = v_clntNo + "," + v_itemCd + "," + v_wrkPlCd;
      udc_bizLongCd.cfCommonPopUp(scwin.callBackBizLongCd, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "사업장,사업장코드,사업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 수요가 팝업		
      if (!$c.gus.cfIsNull($p, ed_clntNo.getValue().trim())) pWhere = ed_clntNo.getValue().trim();
      udc_dmndNo.cfCommonPopUp(scwin.callBackDmndNo, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "수요가,수요가번호,수요가명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
  ed_mchtOdrFromDt.setValue(scwin.strPreDate);
  ed_mchtOdrToDt.setValue(scwin.strCurDate);

  // 거래처 정보 설정
  ed_clntNo.setValue("000001");
  ed_clntNm.setValue("한국라파즈석고보드");
};
scwin.f_Retrieve = async function () {
  // 거래처 선택 확인
  if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["거래처"])) {
      ed_clntNo.focus();
      return false;
    }
  }
  if (ed_mchtOdrFromDt.getValue().replace(/\s*$/, '').trim() == "") ed_mchtOdrFromDt.setValue("");
  if (ed_mchtOdrToDt.getValue().replace(/\s*$/, '').trim() == "") ed_mchtOdrToDt.setValue("");
  ds_orderSearch.setCellData(0, "hideOrderYn", cbx_hideOrder.getValue());

  // 오더기간 From - To 입력 확인
  if (!(await $c.gus.cfValidate($p, [ed_mchtOdrFromDt, ed_mchtOdrToDt]))) {
    return false;
  }

  // 오더기간 범위 확인
  if (!(await $c.gus.cfIsAfterDate($p, ed_mchtOdrFromDt.getValue(), ed_mchtOdrToDt.getValue()))) {
    if (await $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, ["화주오더일자 From", "화주오더일자 To"])) {
      ed_mchtOdrFromDt.focus();
      return false;
    }
  }
  var diffObj = await $c.gus.cfDifferBetween($p, ed_mchtOdrFromDt.getValue(), ed_mchtOdrToDt.getValue());
  if (diffObj) {
    // 오더기간이 1달 이상인경우 확인
    if (diffObj.year > 0 || diffObj.month > 0) {
      if (!(await $c.win.confirm($p, "화주오더기간 이 1개월이 넘습니다.조회하시겠습니까?"))) {
        ed_mchtOdrFromDt.focus();
        return false;
      }
    }
    let e = await $c.sbm.execute($p, sbm_reterieve);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_reterieve_submitdone(e);
    }
  }
};

// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
scwin.f_orderRequestProcess = function () {
  var row = ds_shipmentIndicationOrderList.getRowPosition();
  var strOrderRequestProcessUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_35b.xml";
  let programId = "sd_402_01_35b.jsp";
  if (ds_shipmentIndicationOrderList.getRowCount() > 0) {
    // 선택된 오더 정보 : 거래처, 화주오더종류, 화주오더번호, 당사오더번호
    var v_repClntNo = ds_shipmentIndicationOrderList.getCellData(row, "repClntNo");
    var v_clntNo = ds_shipmentIndicationOrderList.getCellData(row, "clntNo");
    var v_clntNm = ds_shipmentIndicationOrderList.getCellData(row, "clntNm");
    var v_mchtOdrKndCd = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd");
    var v_mchtOdrKndNm = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndNm");
    var v_mchtOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrNo");
    var v_mcomOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mcomOdrNo");
    var v_logSeq = ds_shipmentIndicationOrderList.getCellData(row, "logSeq");
    var v_rltBuyOdr = ds_shipmentIndicationOrderList.getCellData(row, "rltBuyOdr");
    var v_otYn = ds_shipmentIndicationOrderList.getCellData(row, "otYn");
    if (scwin.click_otYn == "click" && v_otYn == 'Y') {
      v_mchtOdrKndCd = "NL";
      v_mchtOdrNo = v_rltBuyOdr.substring(3, v_rltBuyOdr.length);
      v_mcomOdrNo = "";
    }
    if ($c.gus.cfIsNull($p, v_repClntNo)) v_repClntNo = v_clntNo;
    let paramObj = {
      repClntNo: v_repClntNo,
      clntNo: v_clntNo,
      clntNm: v_clntNm,
      mchtOdrKndCd: v_mchtOdrKndCd,
      mchtOdrKndNm: v_mchtOdrKndNm,
      mchtOdrNo: v_mchtOdrNo,
      mcomOdrNo: v_mcomOdrNo,
      logSeq: v_logSeq,
      type: "retrieve",
      menuType: "ncall"
    };
    let options = {
      "openAction": "exist"
    };
    $c.win.openMenu($p, "오더요청등록", strOrderRequestProcessUrl, programId, paramObj, options);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더요청현황"));
    return;
  }
};

// GRID에서 선택된 오더별 작업현황  : 해당 화주오더별 작업현황 페이지로 이동 : 사용자 구분이 화주인 경우
scwin.f_merchantOrderEachWorkPresentCondition = function () {
  var row = ds_shipmentIndicationOrderList.getRowPosition();
  var strOrderRequestProcessUrl = "/ui/ds/as/cstmrsrvc/coafmgnt/as_102_01_01b.xml";
  let programId = "as_102_01_01b.jsp";
  if (row > 0) {
    var v_repClntNo = ds_shipmentIndicationOrderList.getCellData(row, "repClntNo");
    var v_clntNo = ds_shipmentIndicationOrderList.getCellData(row, "clntNo");
    var v_mchtOdrNo = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrNo");
    var v_mchtOdrKndCd = ds_shipmentIndicationOrderList.getCellData(row, "mchtOdrKndCd");
    if ($c.gus.cfIsNull($p, v_repClntNo)) v_repClntNo = v_clntNo;
    let paramObj = {
      clntNo: v_repClntNo,
      mchtOdrNo: v_mchtOdrNo,
      mchtOdrKndCd: v_mchtOdrKndCd
    };
    let options = {
      "openAction": "exist"
    };
    $c.win.openMenu($p, "화주오더별작업현황", strOrderRequestProcessUrl, programId, paramObj, options);
  } else {
    cfAlertMsg(MSG_CM_ERR_056, new Array("오더요청현황"));
    return;
  }
};

// U오더삭제
scwin.f_UOrderDel = async function () {
  await scwin.f_retrieveUOrderDelCheck();
  for (var i = 0; i <= ds_UOrderDelCheck.getRowCount(); i++) {
    if (scwin.sUserId == ds_UOrderDelCheck.getCellData(i, "col1")) {} else {
      $c.win.alert($p, "U오더삭제 권한이 없습니다.");
      return;
    }
  }
  if (ds_shipmentIndicationOrderList.getRowCount() > 0 && ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "stsClsCd") == "U") {
    let confirmYn = await $c.win.confirm($p, "U오더 삭제진행하시겠습니까?");
    if (confirmYn) {
      var rowIndex = ds_orderDel.insertRow();
      ds_orderDel.setCellData(rowIndex, "mchtOdrKndCd", ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "mchtOdrKndCd"));
      ds_orderDel.setCellData(rowIndex, "mchtOdrNo", ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "mchtOdrNo"));
      ds_orderDel.setCellData(rowIndex, "logSeq", ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "logSeq"));
      let e = await $c.sbm.execute($p, sbm_save);
      if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
        scwin.sbm_save_submitdone(e);
      }
    }
  } else if (ds_shipmentIndicationOrderList.getRowCount() > 0 && ds_shipmentIndicationOrderList.getCellData(ds_shipmentIndicationOrderList.getRowPosition(), "stsClsCd") != "U") {
    $c.win.alert($p, "U오더만 삭제가능합니다.");
    return;
  }
};

// U오더삭제 권한 여부
scwin.f_retrieveUOrderDelCheck = async function () {
  dma_comSearchSys.set("sysCd", "NcallCommonEBC");
  dma_comSearchSys.set("queryId", "retrieveConfirm");
  dma_comSearchSys.set("param1", "BRL08");
  dma_comSearchSys.set("param2", scwin.sUserId);
  $c.sbm.setAction($p, sbm_retrieveUOrderDelCheck, "/cm.zz.RetrieveCommonPopupCMD.do");
  $c.sbm.execute($p, sbm_retrieveUOrderDelCheck, dma_comSearchSys.getJSON()).then(function (e) {
    // debugger;
    // if (e.responseJSON.resultDataSet[0].Code < 0) return true;
    ds_UOrderDelCheck.setJSON(e.responseJSON.GAUCE);
  });
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 거래처
scwin.callBackClntNo = async function (rtnList) {
  // 거래처코드 거래처명
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm, [scwin.hid_repClntNo]);
  if ($c.gus.cfIsNull($p, scwin.hid_repClntNo)) scwin.hid_repClntNo = ed_clntNo.getValue();

  // 거래처 선택시 화주오더종류를 조회한다.
  if (rtnList != null && rtnList[0] != "N/A") {
    // ds_ediMappingSearch hide 값 셋팅
    if (ds_ediMappingSearch.getRowCount() > 0) {
      ds_ediMappingSearch.removeAll();
      ds_ediMappingSearch.insertRow(0);
    }
    ds_ediMappingSearch.setCellData(0, 'docCd', scwin.hid_docCd); // 문서코드
    ds_ediMappingSearch.setCellData(0, 'clntNo', scwin.hid_repClntNo); // 거래처번호
    ds_ediMappingSearch.setCellData(0, 'wrkPlCd', scwin.hid_wrkPlCd); // 작업장코드
    ds_ediMappingSearch.setCellData(0, 'itemCd', scwin.hid_itemCd); // 항목코드
    ds_ediMappingSearch.setCellData(0, 'osideCd', scwin.hid_osideCd); // 외부코드

    let e = await $c.sbm.execute($p, sbm_reterieveMchtOdrKnd);
    if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
      scwin.sbm_reterieveMchtOdrKnd_submitdone(e);
    }
  }
};

// 사업장
scwin.callBackBizLongCd = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bizLongCd, ed_bizLongNm);
};

// 수요가
scwin.callBackDmndNo = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dmndNo, ed_dmndNm);
};

//-------------------------------------------------------------------------
// Event onClick
//-------------------------------------------------------------------------
// 거래처 찾기 버튼 클릭 이벤트 
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

// 사업장 찾기 버튼 클릭 이벤트 
scwin.udc_bizLongCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bizLongCd.getValue(), ed_bizLongNm.getValue(), 'F', 'F');
};

// 수요가 찾기 버튼 클릭 이벤트 
scwin.udc_dmndNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_dmndNo.getValue(), ed_dmndNm.getValue(), 'F', 'F');
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 조회 버튼 클릭 이벤트 
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

// U오더삭제 버튼 클릭 이벤트 
scwin.btn_confirm_onclick = function (e) {
  scwin.f_UOrderDel();
};

//-------------------------------------------------------------------------
// Event onblur
//-------------------------------------------------------------------------
// 계약처 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};

// 사업장 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_bizLongCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bizLongCd, ed_bizLongNm, 2);
};

// 수요가 Onbluer(onKillFocus) 이벤트 발생시
scwin.udc_dmndNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dmndNo, ed_dmndNm, 3);
};

// Sbm submitdone
//-------------------------------------------------------------------------
scwin.sbm_reterieveMchtOdrKnd_submitdone = function (e) {
  acb_mchtOdrKndCd.setValue("");
};
scwin.sbm_reterieve_submitdone = async function (e) {
  let sortJSON = ds_shipmentIndicationOrderList.getAllJSON();
  sortJSON = sortJSON.sort(function (a, b) {
    if (a.odrDt !== b.odrDt) {
      return b.odrDt.localeCompare(a.odrDt);
    }
    if (a.mchtOdrNo !== b.mchtOdrNo) {
      return a.mchtOdrNo.localeCompare(b.mchtOdrNo);
    }
    return b.odrRecptDt.localeCompare(a.odrRecptDt);
  });
  ds_shipmentIndicationOrderList.setJSON(sortJSON);
};
scwin.ds_shipmentIndicationOrderList_ondataload = async function () {
  if (ds_shipmentIndicationOrderList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
  }
  if (ds_shipmentIndicationOrderList.getRowCount() > 0) {
    //  var options = {};
    /*    let sortJSON = ds_shipmentIndicationOrderList.getAllJSON();
        sortJSON = sortJSON.sort(function(a, b) {
            if (a.odrDt !== b.odrDt) {
                return b.odrDt.localeCompare(a.odrDt);
            }
            if (a.mchtOdrNo !== b.mchtOdrNo) {
                return a.mchtOdrNo.localeCompare(b.mchtOdrNo);
            }
            return b.odrRecptDt.localeCompare(a.odrRecptDt);
        });
         ds_shipmentIndicationOrderList.setJSON(sortJSON); */

    //   options.sortIndex = "odrDt mchtOdrNo odrRecptDt";
    // 오더일자  화주오더번호 오더접수일시시간
    //    options.sortOrder = "-1 1 -1";

    //  ds_shipmentIndicationOrderList.multisort(options);
  }
  totalRows.setValue(ds_shipmentIndicationOrderList.getRowCount());
};
scwin.sbm_save_submitdone = async function (e) {
  let ret = await $c.gus.cfAlertMsg($p, "정상적으로 반영되었습니다.");
  if (ret) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let val = data,
    color = "black";
  if (columnId == "mchtOdrNo") {
    // 화주오더번호
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "mcomOdrNo") == "") {
      color = "red";
    } else {
      color = "blue";
    }
  } else if (columnId == "arvIntendDtm") {
    //도착예정일시 
    var arvIntendDt = ds_shipmentIndicationOrderList.getCellData(rowIndex, "arvIntendDt");
    var arvIntendHh = ds_shipmentIndicationOrderList.getCellData(rowIndex, "arvIntendHh");

    // 값이 존재할 때만 포맷팅 수행 (방어 코드)
    var datePart = arvIntendDt.substring(0, 4) + "/" + arvIntendDt.substring(4, 6) + "/" + arvIntendDt.substring(6, 8);
    var timePart = arvIntendHh.substring(0, 2) + ":" + arvIntendHh.substring(2, 4);
    val = datePart + " " + timePart;
  } else if (columnId == "odrDcsnYn") {
    //확정여부
    val = $c.gus.decode($p, data, "1", "확정", "미확정");
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "mcomOdrNo") != "" && ds_shipmentIndicationOrderList.getCellData(rowIndex, "odrDcsnYn") == "0") {
      color = "red";
    }
  } else if (columnId == "odrCompleteYn") {
    // 완료여부
    val = $c.gus.decode($p, data, "1", "완료", "미완료");
    if (ds_shipmentIndicationOrderList.getCellData(rowIndex, "mcomOdrNo") != "" && ds_shipmentIndicationOrderList.getCellData(rowIndex, "odrDcsnYn") == "1" && data != "1") {
      color = "red";
    }
  } else if (columnId == "arvIntendHh2") {
    // 긴급
    data = ds_shipmentIndicationOrderList.getCellData(rowIndex, "arvIntendHh");
    val = $c.gus.decode($p, data, "ASAP", "긴급", "");
    if (data == "ASAP") color = "red";
  }
  gr_shipmentIndicationOrderList.setCellColor(rowIndex, colIndex, color);
  return val;
};

//-------------------------------------------------------------------------
// 그리드 이벤트
//-------------------------------------------------------------------------
scwin.gr_shipmentIndicationOrderList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  // 오더세부사항 조회
  if (columnId == "otYn") {
    scwin.click_otYn = "click";
  } else {
    scwin.click_otYn = "";
  }
  if (scwin.userClsCd == "01") {
    if (rowIndex > -1) {
      // 사용자구분(ZZ010) : 내부사용자 (01) - 오더요청등록 화면
      scwin.f_orderRequestProcess();
    }
  } else if (scwin.userClsCd == "04") {
    if (rowIndex > -1) {
      // 사용자구분(ZZ010) : 화주 (04) - 화주오더별작업현황
      scwin.f_merchantOrderEachWorkPresentCondition();
    }
  }
};
scwin.ds_mchtOdrKndCd_ondataload = function () {
  if (ds_mchtOdrKndCd.getRowCount() > 0) {
    ds_mchtOdrKndCd.sort("osideCd", 0);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_clntNo',style:'',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',objTypeCode:'data',maxlengthCode:'6',codeId:'ed_clntNo',id:'udc_clntNo',btnId:'btn_clntNo',nameId:'ed_clntNm',objTypeName:'data',selectID:'retrieveClntInfo2_tpro',refDataCollection:'ds_orderSearch',code:'clntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',validTitle:'거래처',readOnlyName:'true','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'data:ds_orderSearch.dateQueryCond',renderType:'',style:'width: 120px;',submenuSize:'auto','data-length':'2',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더전송일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도착요청일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주입력일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주오더일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_orderSearch',refEdDt:'mchtOdrToDt',refStDt:'mchtOdrFromDt',style:'',edFromId:'ed_mchtOdrFromDt',edToId:'ed_mchtOdrToDt',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_arvIntendDt',style:'',ref:'data:ds_orderSearch.arvIntendDt','data-length':'8',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_bizLongCd',style:'',id:'udc_bizLongCd',codeId:'ed_bizLongCd',btnId:'btn_bizLongCd',nameId:'ed_bizLongNm',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',objTypeCode:'data',objTypeName:'data',selectID:'retrieveEdiMapping_tpro',refDataCollection:'ds_orderSearch',code:'bizLongCd',name:'bizLongNm','ev:onclickEvent':'scwin.udc_bizLongCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bizLongCd_onblurCodeEvent',validTitle:'사업장',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_mchtOdrKndCd',search:'start',style:'width:208px;',submenuSize:'auto',objType:'data',ref:'data:ds_orderSearch.mchtOdrKndCd','data-length':'2',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mchtOdrKndCd'},E:[{T:1,N:'w2:label',A:{ref:'osideCdNm'}},{T:1,N:'w2:value',A:{ref:'osideCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrNo',placeholder:'',style:'width:120px;',maxlength:'20',allowChar:'0-9A-Za-z',ref:'data:ds_orderSearch.mchtOdrNo','data-length':'20',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수요가 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_dmndNo',style:'',btnId:'btn_dmndNo',codeId:'ed_dmndNo',id:'udc_dmndNo',nameId:'ed_dmndNm',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',selectID:'retrieveDmndList_tpro',refDataCollection:'ds_orderSearch',code:'dmndNo',name:'dmndNm','ev:onclickEvent':'scwin.udc_dmndNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dmndNo_onblurCodeEvent',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'생성여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete2',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_orderSearch.odrCreatCls','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'생성'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete3',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_orderSearch.odrDcsnYn','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete4',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_orderSearch.odrCompleteYn','data-length':'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더요청현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_hideOrder',ref:'data:ds_orderSearch.hideOrderYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정 D오더 감추기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_shipmentIndicationOrderList',id:'udc_topGrdBtn',btnPlusYn:'Y',btnUser:'Y',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName" : "오더요청현황.xlsx", "sheetName" : "오더요청현황", "sheetName":"오더요청현황", "type" : "4+8+16"}',gridDownUserAuth:'X',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_shipmentIndicationOrderList',id:'gr_shipmentIndicationOrderList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'6',readOnly:'true','ev:oncelldblclick':'scwin.gr_shipmentIndicationOrderList_oncelldblclick',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column121',value:'오더종류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'화주<br>오더번호',width:'120'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column69',value:'관련<br>오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'NL<br>수신',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'사업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'109',inputType:'text',id:'column66',value:'사업장',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column123',value:'수요가코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'수요가',width:'120'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column73',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column75',value:'상세주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'도착예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'55',inputType:'text',id:'column81',value:'도착<br/>예정<br/>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column83',value:'도착<br/>예정일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column85',value:'상태<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column87',value:'확정<br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'자가구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'완료여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',value:'전송상태코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'전송상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',value:'자가구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'접수일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',value:'접수시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column43',value:'접수일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',value:'생성일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',value:'생성시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column41',value:'당사오더<br/>생성일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column65',value:'당사오더<br/>확정일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column59',value:'당사오더<br/>완료일시',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column107',value:'Confirm일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',value:'Confirm시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column103',value:'Confirm일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column111',value:'긴급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column109',value:'당사오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column113',value:'특이사항',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column115',value:'(화주)<br/>오더일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column119',value:'영업사원코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column117',value:'영업사원명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mchtOdrKndCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrKndNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'120',customFormatter:'scwin.f_customFormatter',class:'underline',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rltBuyOdr',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'otYn',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bizLongCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'109',inputType:'text',id:'bizLongNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dmndNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'boralCommNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'dtlAddr1',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',id:'arvIntendDt',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'55',inputType:'text',id:'arvIntendHh',displayMode:'label',displayFormat:'##:##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvIntendDtm',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'stsClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'odrDcsnYn',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCompleteYn',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndClsNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfClsCd',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRecptDt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrRecptHh',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'odrRecptDtm',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',calendarValueType:'yearMonthDateTimeSec',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCreatDt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCreatHh',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'calendar',id:'odrCreatDtm',displayMode:'label',calendarValueType:'yearMonthDateTimeSec',displayFormat:'yyyy/MM/dd HH:mm',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'calendar',id:'odrDcsnDtm',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',calendarValueType:'yearMonthDateTimeSec',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'calendar',id:'odrCompleteDtm',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnOdrSndDt',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnOdrSndHh',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnOdrSndDtm',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'arvIntendHh2',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mcomOdrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'unqItm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'mchtOdrDt',displayMode:'label',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'salesPicCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'salesPicNm',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_confirm',label:'저장',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'U오더삭제'}]}]}]}]}]}]}]}]}]})