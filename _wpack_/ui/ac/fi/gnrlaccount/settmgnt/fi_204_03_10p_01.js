/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_10p_01.xml 44091 623c49f45a1017c45d8230796f5fd2d639b6a0b4453801255207ec0669131424 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryYm',name:'조회년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙건수',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_total3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prevAmt',name:'전월이월금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drSum',name:'차변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crSum',name:'대변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'charge',name:'잔액',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'param7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'param8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'param9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'param10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_empNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchCommon',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchCommon_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveAccountLedgerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_total","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveAccountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_total2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중...','ev:submit':'','ev:submitdone':'scwin.sbm_search2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search3',action:'/ac.fi.gnrlaccount.ledgmgnt.RetrieveTotalAccountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_total3","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_total3","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중...','ev:submit':'','ev:submitdone':'scwin.sbm_search3_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_204_03_10p_01
// 이름     : 재무제표상세팝업
// 경로     : 재무회계/일반회계/결산관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
// 
// 비고     :
//            2026-02-02 : 개인화 위해 그리드 완전 분리
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//            fi_201_04_02p.jsp(전표내역조회)
//            fi_403_01_02b.jsp(증빙내역조회)
//            [호출당함]
//            회계/재무회계/일반회계/결산관리/손익계산서(fi_204_03_09b.jsp)에서 호출
//            회계/재무회계/일반회계/결산관리/대차대조표(fi_204_03_10b.jsp)에서 호출
//            회계/재무회계/일반회계/결산관리/대차대조표(부서별)(fi_204_03_23b.jsp)에서 호출
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

// 파라미터용
scwin.pQryYm = ""; // 회계년월
scwin.pAcctCd = ""; // 계정    
scwin.pAcctDeptCd = ""; // 부서코드
scwin.pBizDomCd = ""; // 사업영역
scwin.pCoCd = ""; // 회사코드

scwin.chooseGrid = ""; // 선택그리드 (엑셀 다운로드 구분용)

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

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
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    tb_totAcctLedge.hide(); // 총계정원장 숨김
    tb_totAcctLedgeTally.hide(); // 총계정원장집계표 숨김

    // grd_title.hide();     // 그리드 타이틀
    // grd_section2.hide();  // 그리드 본체

    scwin.f_empNo();
    scwin.f_Retrieve();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 공통코드 조회 (증빙관리권한 조회 - 세무조사 id 여부)
//-------------------------------------------------------------------------
scwin.f_empNo = function () {
  console.log("=== f_empNo (증빙관리권한 조회 - 세무조사id 여부)");

  // 데이타셋 초기화 필요
  ds_empNo.removeAll();
  ds_commonCode.setEmptyValue();
  var grp_cd = "FI624"; // FI624 (증빙관리권한)
  //	var pCode = '<%=empNo%>' ;
  var pCode = scwin.userEmpNo;

  // SELECT 절 
  var param1 = "CD  as COL1 , CD_NM  as COL2 , ''  as COL3 , ''  as COL4 , ''  as COL5 , ''  as COL6 , ''  as COL7 , ''  as COL8 , ''  as COL9 , ''  as COL10";

  // 대상테이블 	
  var param2 = " TB_ZZ002 ";

  // 조건절
  var param3 = " AND GRP_CD = '" + grp_cd + "' AND USE_YN = '1' AND CD_NM = '" + pCode + "' ";
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
  console.log("▷ sbm_searchCommon_submitdone (증빙관리권한 - 세무조사용id 조회 submitdone)");

  // 2025-10-02 : 세무조사시에만 사용하는 계정으로 , 세무조사 인원이 조회시 보이지 않아야 하는 부분으로 구현 필요
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_empNo.setJSON(e.responseJSON.GAUCE);
  }
  var empCnt = ds_empNo.getTotalRow();
  console.log("==== empCnt (세무조사용id 건수 - FI624) : " + empCnt);

  // language=JavaScript for=ds_empNo event=OnLoadCompleted(rowCnt)>
  if (ds_empNo.getTotalRow() > 0) {
    console.log("    세무조사 모드 : 증빙개수 (evidenceCnt) 숨김");
    // gr_total2.ColumnProp("evidenceCnt",	"Show") = "false";
    gr_total2.setColumnVisible("evidenceCnt", false);
  } else {
    console.log("    일반 모드 : 증빙개수 (evidenceCnt) 보임");
    // gr_total2.ColumnProp("evidenceCnt",	"Show") = "true";
    gr_total2.setColumnVisible("evidenceCnt", true);
  }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회(계정원장조회)
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Retrieve 상단 ==================");

  //------------------- 부모에게서 파라미터 받음 ----------------------------------//
  // ds_search.NameValue(1,"qryYm") = amtParam.closeYm2 ;            // 회계년월
  // ds_search.NameValue(1,"acctCd") = amtParam.acctCd ;           			// 계정
  // ds_search.NameValue(1,"acctDeptCd") = amtParam.deptCd ;           	// 부서코드
  // ds_search.NameValue(1,"bizDomCd") = amtParam.bizDomCd;           // 사업영역
  // ds_search.NameValue(1,"coCd") = amtParam.coCd;          		// 회사코드

  scwin.pQryYm = $c.data.getParameter($p, "closeYm2") == null ? "" : $c.data.getParameter($p, "closeYm2");
  scwin.pAcctCd = $c.data.getParameter($p, "acctCd") == null ? "" : $c.data.getParameter($p, "acctCd");
  scwin.pAcctDeptCd = $c.data.getParameter($p, "deptCd") == null ? "" : $c.data.getParameter($p, "deptCd");
  scwin.pBizDomCd = $c.data.getParameter($p, "bizDomCd") == null ? "" : $c.data.getParameter($p, "bizDomCd");
  scwin.pCoCd = $c.data.getParameter($p, "coCd") == null ? "" : $c.data.getParameter($p, "coCd");
  ds_search.set("qryYm", scwin.pQryYm); // 회계년월
  ds_search.set("acctCd", scwin.pAcctCd); // 계정
  ds_search.set("acctDeptCd", scwin.pAcctDeptCd); // 부서코드
  ds_search.set("bizDomCd", scwin.pBizDomCd); // 사업영역
  ds_search.set("coCd", scwin.pCoCd); // 회사코드

  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));

  // ds_search.UseChangeInfo = false;
  // tr_retrieve.Post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(계정원장조회 - 상단) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone (계정원장조회 - 상단 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  ed_totalRows1.setValue(ds_total.getTotalRow());
};

//-------------------------------------------------------------------------
// 조회(총계정원장)
//-------------------------------------------------------------------------
scwin.f_retrieve2 = function () {
  console.log("====== f_Retrieve2 (총계정원장) ==================");
  ds_search.set("qryYm", ds_total.getCellData(ds_total.getRowPosition(), "closeYm")); // 회계년월
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  // tr_retrieve2.Post();
  $c.sbm.execute($p, sbm_search2);
};

//-------------------------------------------------------------------------
// 조회(총계정원장) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search2_submitdone = function (e) {
  console.log("▷▷ sbm_search2_submitdone (하단-총계정원장 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_total2 event=OnLoadCompleted(rowCnt)>
  // 	cfHideDSWaitMsg(gr_total2);
  // var temp = ds_total2.RealCount(1,ds_total2.CountRow);
  // cfShowTotalRows(totalRows2, temp);
  // gr_total.ReDraw = "true";

  ed_totalRows2.setValue(ds_total2.getTotalRow());
};

//-------------------------------------------------------------------------
// 조회(총계정원장집계표)
//-------------------------------------------------------------------------
scwin.f_retrieve3 = function () {
  console.log("====== f_Retrieve3 (총계정원장집계표) ==================");
  ds_search.set("qryYm", ds_total.getCellData(ds_total.getRowPosition(), "closeYm")); // 회계년월
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  // tr_retrieve3.Post();
  $c.sbm.execute($p, sbm_search3);
};

//-------------------------------------------------------------------------
// 조회(총계정원장집계표) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search3_submitdone = function (e) {
  console.log("▷▷ sbm_search3_submitdone (하단-총계정원장집계표 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_total3 event=OnLoadCompleted(rowCnt)>
  // 	cfHideDSWaitMsg(gr_total3);
  // var temp = ds_total3.RealCount(1,ds_total3.CountRow);
  // cfShowTotalRows(totalRows3, temp);
  // gr_total.ReDraw = "true";
  ed_totalRows3.setValue(ds_total3.getTotalRow());
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 그리드(계정원장조회) 더블 클릭
//-------------------------------------------------------------------------
scwin.gr_total_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  console.log("----- gr_total_oncelldblclick (계정원장조회 더블 클릭)");
  // <!-- 클릭시  -->
  // <script language="javascript"  for=gr_total event=OnDblClick(row,colid)>
  var row = rowIndex;
  var colid = columnId;
  if (row >= 0) {
    // grd_title.show("");     // 그리드 타이틀
    // grd_section2.show("");  // 그리드 본체

    if (colid == "closeYm") {
      // 총계정원장
      console.log("    ▶▶ 총계정원장 그리드 보임");

      // udc_grdMain.setGridId("gr_total2");
      scwin.chooseGrid = "gr_total2"; // 선택그리드 (엑셀 다운로드 구분용)

      scwin.f_retrieve2();

      // total2.style.display = 'block';
      // total3.style.display = 'none';

      tb_totAcctLedge.show(""); // 총계정원장  보임
      tb_totAcctLedgeTally.hide(); // 총계정원장집계표  숨김
    } else if (colid == "charge") {
      // 총계정원장집계표
      console.log("    ▶▶ 총계정원장집계표 그리드 보임");

      // udc_grdMain.setGridId("gr_total3");
      scwin.chooseGrid = "gr_total3"; // 선택그리드 (엑셀 다운로드 구분용)

      scwin.f_retrieve3();

      // total2.style.display = 'none';
      // total3.style.display = 'block';

      tb_totAcctLedge.hide(); // 총계정원장 숨김
      tb_totAcctLedgeTally.show(""); // 총계정원장집계표 보임
    }
  }
};

//-------------------------------------------------------------------------
// 그리드(총계정원장) 클릭 - 전표내역, 증빙관리
//-------------------------------------------------------------------------
scwin.gr_total2_oncellclick = function (rowIndex, columnIndex, columnId) {
  var Row = rowIndex;
  var Colid = columnId;
  // <!-- 전표번호클릭시  -->
  // <script language="javascript"  for=gr_total2 event=OnClick(Row,Colid)>
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_total2.getCellData(Row, "slipNo"));
  }

  // 증빙개수
  if (Colid == "evidenceCnt" && Row >= 0) {
    scwin.f_evidPopUp();
  }
};

//-------------------------------------------------------------------------
// 그리드(총계정원장집계표) 클릭
//-------------------------------------------------------------------------
scwin.gr_total3_oncellclick = function (rowIndex, columnIndex, columnId) {
  var Row = rowIndex;
  var Colid = columnId;
  // <script language="javascript"  for=gr_total3 event=OnClick(Row,Colid)>
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_total3.getCellData(Row, "slipNo"));
  }
};

// @@ ====== 팝업   ============================================================================ //

//-------------------------------------------------------------------------
// 증빙등록조회 팝업
//-------------------------------------------------------------------------
scwin.f_evidPopUp = async function () {
  // var valueObject 		= new Object();
  // valueObject.slipNo 		= ds_total2.NameValue(ds_total2.RowPosition, "slipNo");
  // var width = "870";
  // var height = "745";
  // var sFeature = "center:yes;dialogwidth:"+width+"px;dialogheight:"+height+"px;"
  // 				+ "scroll:yes;resizable:yes;status:yes;";
  // var sURL = "/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.jsp";
  // var returnValue = window.showModalDialog(sURL,valueObject,sFeature);

  // 증빙등록조회 호출 
  let data = {
    slipNo: ds_total2.getCellData(ds_total2.getRowPosition(), "slipNo") // 전문번호
  };
  let win_url = "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml";
  let opts = {
    id: "smpPop",
    popupName: "증빙등록조회",
    modal: true,
    type: "browserPopup",
    width: 1390,
    height: 1000,
    title: true
  };
  var rt = await $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭 (기존에 없음)
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_ExcelChoice = function () {
  if (scwin.chooseGrid == "gr_total2") {
    scwin.f_Excel();
  } else if (scwin.chooseGrid == "gr_total3") {
    scwin.f_ExcelTally();
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  console.log("=== f_Excel1 (총계정원장 엑셀 다운로드)");

  // var objGridName = eval("gr_total2");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "총계정원장","총계정원장.xls",8+16);

  if (ds_total2.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "총계정원장";
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리
    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_total2, options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_ExcelTally = async function () {
  console.log("=== f_ExcelTally (총계정원장집계표 엑셀 다운로드)");

  // var objGridName = eval("gr_total3");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "총계정원장집계표","총계정원장집계표.xls",8+16);

  if (ds_total3.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "총계정원장집계표";
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리
    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_total3, options);
  }
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// 계정명 subtotal : 동작안함
//-------------------------------------------------------------------------
scwin.subsumtext = function (data) {
  console.log("--- subsumtext (계정명 subtotal)");
  // subsumtext={decode(CurLevel,"1","계정계")}
  return $c.gus.decode($p, CurLevel, "1", "계정계", "");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계정원장조회 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_total',focusMode:'cell',id:'gr_total',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'allColumn','ev:oncelldblclick':'scwin.gr_total_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'회계년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'계정명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차변금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'대변금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'잔액',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'text',style:';color:blue;',value:'',width:'100',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drSum',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',class:'',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crSum',inputType:'text',style:'',value:'',width:'150',dataType:'number',displayFormat:'#,##0',class:'',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'charge',inputType:'text',style:';color:blue;',value:'',width:'150',dataType:'number',displayFormat:'#,##0',class:'underline',textAlign:'right',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'tb_totAcctLedge',class:'row-gap-8 mt16'},E:[{T:1,N:'xf:group',A:{style:'',id:'grd_title',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'ed_gridLabel',label:'총계정원장',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownFn:'scwin.f_ExcelChoice',gridDownUserAuth:'X',id:'udc_grdMain',gridID:'gr_total2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'display: flex',id:'grd_section2',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_total2',scrollByColumn:'false',style:'',id:'gr_total2',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',autoFit:'lastColumn','ev:oncellclick':'scwin.gr_total2_oncellclick',fixedColumn:'4'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column21',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'전표번호',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column15',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column43',value:'거래처</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column40',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column31',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column34',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column37',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'증빙개수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',readOnly:'true',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',readOnly:'true',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',readOnly:'true',id:'slipDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',readOnly:'true',id:'postDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',readOnly:'true',id:'slipNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',readOnly:'true',id:'acctDeptNm',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',readOnly:'true',id:'crn',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',readOnly:'true',id:'mgntClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',readOnly:'true',id:'mgntClntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',readOnly:'true',id:'summary',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'drSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:'',readOnly:'true',id:'crSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'150',displayFormat:'#,##0',inputType:'text',style:';color:blue;',readOnly:'true',id:'evidenceCnt',value:'',displayMode:'label',class:'underline'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'150',inputType:'text',style:'',id:'acntNmSub',value:'계정계',displayMode:'label',customFormatter:'scwin.subsumtext'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',dataType:'number',expression:'sum(\'drSum\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',dataType:'number',expression:'sum(\'crSum\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'grid_bottom',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 mt16',id:'tb_totAcctLedgeTally',style:'display: flex'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'group3',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'ed_gridLabel2',label:'총계정원장집계표',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_ExcelChoice',gridDownUserAuth:'X',gridID:'gr_total3',gridUpYn:'N',grp:'grd_section3',id:'udc_grdMai2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_total3','ev:oncellclick':'scwin.gr_total3_oncellclick',focusMode:'cell',id:'gr_total3',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'계정명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'부서코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'부서명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처</br>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'법인명',width:'180',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'전월이월',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'차변금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',style:'',value:'대변금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'잔액',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',readOnly:'true',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',readOnly:'true',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'180'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'prevAmt',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'160'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'drSum',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'150'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'crSum',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'150'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'charge',inputType:'text',readOnly:'true',style:'',textAlign:'right',value:'',width:'150'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'',width:'180'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'prevAmt\')',id:'column42',inputType:'expression',style:'',textAlign:'right',value:'',width:'160'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'drSum\')',id:'column39',inputType:'expression',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'crSum\')',id:'column33',inputType:'expression',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,##0',displayMode:'label',expression:'sum(\'charge\')',id:'column36',inputType:'expression',style:'',textAlign:'right',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'group5',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})