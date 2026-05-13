/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_04b.xml 63837 f7bd8e4fff9b6a07cc4ebe9a33bb0cf2f923a501718271c59c073e97f065a8b4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDept',name:'신고부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'declarDeptNm',name:'신고부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'version',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_withholdList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dofficeCd',name:'구청코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dofficeNm',name:'구청명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'salStaff',name:'급여와상여-기능직-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salTotAmt',name:'급여와상여-기능직-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salTaxnAmt',name:'급여와상여-기능직-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salIncomeTax',name:'급여와상여-기능직-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'salManTax',name:'급여와상여-기능직-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'offcStaff',name:'급여와상여-사무직-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'offcTotAmt',name:'급여와상여-사무직-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'offcTaxnAmt',name:'급여와상여-사무직-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'offcIncomeTax',name:'급여와상여-사무직-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'offcManTax',name:'급여와상여-사무직-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstStaff',name:'일용직-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstMmWorkDdCnt',name:'일용직-근무일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstTotAmt',name:'일용직-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstTaxnAmt',name:'일용직-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstIncomeTax',name:'일용직-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dusePstManTax',name:'일용직-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumStaff',name:'근로소득합계-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumTotAmt',name:'근로소득합계-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumTaxnAmt',name:'근로소득합계-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumIncomeTax',name:'근로소득합계-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'subSumManTax',name:'근로소득합계-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizTaxAmt',name:'사업세액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'temp_bizTaxAmt',name:'사업소세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamStaff',name:'중도퇴직정산-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamTotAmt',name:'중도퇴직정산-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamTaxnAmt',name:'중도퇴직정산-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamIncomeTax',name:'중도퇴직정산-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'midstreamManTax',name:'중도퇴직정산-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdStaff',name:'이월납부세액계-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdTotAmt',name:'이월납부세액계-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdTaxnAmt',name:'이월납부세액계-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdIncomeTax',name:'이월납부세액계-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'caryFwrdManTax',name:'이월납부세액계-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireStaff',name:'퇴직소득-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireTotAmt',name:'퇴직소득-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireTaxnAmt',name:'퇴직소득-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireIncomeTax',name:'퇴직소득-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'retireManTax',name:'퇴직소득-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pmntSumStaff',name:'납부세액계-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pmntSumTotAmt',name:'납부세액계-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pmntSumTaxnAmt',name:'납부세액계-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pmntSumIncomeTax',name:'납부세액계-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pmntSumManTax',name:'납부세액계-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totalSumStaff',name:'총합계-인원',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totalSumTotAmt',name:'총합계-금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totalSumTaxnAmt',name:'총합계-과세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totalSumIncomeTax',name:'총합계-소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totalSumManTax',name:'총합계-지방소득세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'declarDept',name:'신고부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text',defaultValue:''}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.withhold.RetrieveDofficeEachMonthIncomePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_withholdList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_withholdList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_404_01_04b
// 이름     : 구청별월소득현황 조회
// 경로     : 재무회계/세무/원천세/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//           레포트 화면
//           
// 레포트   : fi_404_01_05p.ozr
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

scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.ed_coCd_hidVal = ""; // 회사코드 히든
scwin.ed_declarDept_hidVal = ""; // 신고부서 히든

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

scwin.temp_cnt = 0; // f_EnableYn 에서 사용 (현재 의미없음)

scwin.onpageload = function () {
  console.log("====== onpageload ================== v 1.01 ");

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

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI052",
    compID: "lc_version"
  } // 셀렉트
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // f_createHeader();
    scwin.f_Setting();
    $c.gus.cfDisableAllBtn($p);
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  var thisYm = $c.date.getServerDateTime($p, "yyyyMM");
  ds_search.set("closeYm", thisYm);
  ed_coCd.setValue(scwin.vCoCd);
  scwin.txtCoClsCd = scwin.vCoClsCd;
  scwin.f_PopUpCompanyInfo('T');
  lc_version.setSelectedIndex(0);
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
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T'); // 속도 지연 문제

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
  // if(txtCoClsCd.value > '<%=ACConstants.CO_CLS_CD_DONGBU%>')  {  	// 자회사 회계 시스템
  // 	isSubCompany = true;
  // }else{
  // 	isSubCompany = false;
  // }

  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  // 	cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
  // }else {
  // 	cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
  // }
};

// @@ ===== 조회 =============================================================================== //

//-------------------------------------------------------------------------
// 조회(구청별월소득현황)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!cfValidate([ed_closeYm,ed_declarDept,lc_version]))
  let ret = await $c.gus.cfValidate($p, [ica_closeYm, ed_declarDept, lc_version]);
  if (!ret) return false;

  //alert(ds_search.text);
  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.taxbiz.withhold.RetrieveDofficeEachMonthIncomePresentConditionCMD.do";
  // tr_search.post();

  //    <C> Col=coClsCd		         	Ctrl=txtCoClsCd                 Param=value        </C>
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(구청별월소득현황) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    ed_totalRows.setValue(ds_withholdList.getTotalRow());
    return;
  }

  // language=JavaScript for=ds_withholdList event=OnLoadCompleted(rowCnt)>
  //    cfHideDSWaitMsg(gr_withholdList);
  //    cfShowTotalRows(totalRows, rowCnt);
  rowCnt = ds_withholdList.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  scwin.temp_cnt = rowCnt;
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
  }

  // 그리드 컬럼 합계 처리
  for (i = 0; i < rowCnt; i++) {
    // 근로소득합계
    ds_withholdList.setCellData(i, "subSumStaff", Number(ds_withholdList.getCellData(i, 'salStaff')) + Number(ds_withholdList.getCellData(i, 'offcStaff')) + Number(ds_withholdList.getCellData(i, 'dusePstStaff')));
    ds_withholdList.setCellData(i, "subSumTotAmt", Number(ds_withholdList.getCellData(i, 'salStaff')) + Number(ds_withholdList.getCellData(i, 'offcStaff')) + Number(ds_withholdList.getCellData(i, 'dusePstStaff')));
    ds_withholdList.setCellData(i, "subSumTaxnAmt", Number(ds_withholdList.getCellData(i, 'salTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'offcTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'dusePstTaxnAmt')));
    ds_withholdList.setCellData(i, "subSumIncomeTax", Number(ds_withholdList.getCellData(i, 'salIncomeTax')) + Number(ds_withholdList.getCellData(i, 'offcIncomeTax')) + Number(ds_withholdList.getCellData(i, 'dusePstIncomeTax')));
    ds_withholdList.setCellData(i, "subSumManTax", Number(ds_withholdList.getCellData(i, 'salManTax')) + Number(ds_withholdList.getCellData(i, 'offcManTax')) + Number(ds_withholdList.getCellData(i, 'dusePstManTax')));

    // 사업소세
    if (Number(ds_withholdList.getCellData(i, 'salStaff')) + Number(ds_withholdList.getCellData(i, 'offcStaff')) + Number(ds_withholdList.getCellData(i, 'dusePstStaff')) > 50) {
      ds_withholdList.setCellData(i, "temp_bizTaxAmt", Number(ds_withholdList.getCellData(i, 'bizTaxAmt')));
    } else {
      ds_withholdList.setCellData(i, "temp_bizTaxAmt", 0);
    }
    // 납부세액계
    ds_withholdList.setCellData(i, "pmntSumStaff", Number(ds_withholdList.getCellData(i, 'salStaff')) + Number(ds_withholdList.getCellData(i, 'offcStaff')) + Number(ds_withholdList.getCellData(i, 'dusePstStaff')) + Number(ds_withholdList.getCellData(i, 'midstreamStaff')) + Number(ds_withholdList.getCellData(i, 'caryFwrdStaff')));
    ds_withholdList.setCellData(i, "pmntSumTotAmt", Number(ds_withholdList.getCellData(i, 'salTotAmt')) + Number(ds_withholdList.getCellData(i, 'offcTotAmt')) + Number(ds_withholdList.getCellData(i, 'dusePstTotAmt')) + Number(ds_withholdList.getCellData(i, 'midstreamTotAmt')) + Number(ds_withholdList.getCellData(i, 'caryFwrdTotAmt')));
    ds_withholdList.setCellData(i, "pmntSumTaxnAmt", Number(ds_withholdList.getCellData(i, 'salTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'offcTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'dusePstTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'midstreamTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'caryFwrdTaxnAmt')));
    ds_withholdList.setCellData(i, "pmntSumIncomeTax", Number(ds_withholdList.getCellData(i, 'salIncomeTax')) + Number(ds_withholdList.getCellData(i, 'offcIncomeTax')) + Number(ds_withholdList.getCellData(i, 'dusePstIncomeTax')) + Number(ds_withholdList.getCellData(i, 'midstreamIncomeTax')) + Number(ds_withholdList.getCellData(i, 'caryFwrdIncomeTax')));
    ds_withholdList.setCellData(i, "pmntSumManTax", Number(ds_withholdList.getCellData(i, 'salManTax')) + Number(ds_withholdList.getCellData(i, 'offcManTax')) + Number(ds_withholdList.getCellData(i, 'dusePstManTax')) + Number(ds_withholdList.getCellData(i, 'midstreamManTax')) + Number(ds_withholdList.getCellData(i, 'caryFwrdManTax')));

    // 총합계
    ds_withholdList.setCellData(i, "totalSumStaff", Number(ds_withholdList.getCellData(i, 'salStaff')) + Number(ds_withholdList.getCellData(i, 'offcStaff')) + Number(ds_withholdList.getCellData(i, 'dusePstStaff')) + Number(ds_withholdList.getCellData(i, 'midstreamStaff')) + Number(ds_withholdList.getCellData(i, 'caryFwrdStaff')) + Number(ds_withholdList.getCellData(i, 'retireStaff')));
    ds_withholdList.setCellData(i, "totalSumTotAmt", Number(ds_withholdList.getCellData(i, 'salTotAmt')) + Number(ds_withholdList.getCellData(i, 'offcTotAmt')) + Number(ds_withholdList.getCellData(i, 'dusePstTotAmt')) + Number(ds_withholdList.getCellData(i, 'midstreamTotAmt')) + Number(ds_withholdList.getCellData(i, 'caryFwrdTotAmt')) + Number(ds_withholdList.getCellData(i, 'retireTotAmt')));
    ds_withholdList.setCellData(i, "totalSumTaxnAmt", Number(ds_withholdList.getCellData(i, 'salTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'offcTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'dusePstTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'midstreamTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'caryFwrdTaxnAmt')) + Number(ds_withholdList.getCellData(i, 'retireTaxnAmt')));
    ds_withholdList.setCellData(i, "totalSumIncomeTax", Number(ds_withholdList.getCellData(i, 'salIncomeTax')) + Number(ds_withholdList.getCellData(i, 'offcIncomeTax')) + Number(ds_withholdList.getCellData(i, 'dusePstIncomeTax')) + Number(ds_withholdList.getCellData(i, 'midstreamIncomeTax')) + Number(ds_withholdList.getCellData(i, 'caryFwrdIncomeTax')) + Number(ds_withholdList.getCellData(i, 'retireIncomeTax')));
    ds_withholdList.setCellData(i, "totalSumManTax", Number(ds_withholdList.getCellData(i, 'salManTax')) + Number(ds_withholdList.getCellData(i, 'offcManTax')) + Number(ds_withholdList.getCellData(i, 'dusePstManTax')) + Number(ds_withholdList.getCellData(i, 'midstreamManTax')) + Number(ds_withholdList.getCellData(i, 'caryFwrdManTax')) + Number(ds_withholdList.getCellData(i, 'retireManTax')));
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  console.log("----- udc_coCd_onblurCodeEvent (회사코드)");

  // <!-- 회사코드 입력시  -->
  // language=JavaScript for=ed_coCd event=OnKillFocus()> 
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 신고부서 focus out
//-------------------------------------------------------------------------
scwin.udc_declarDept_onblurCodeEvent = function (e) {
  console.log("----- udc_declarDept_onblurCodeEvent (신고부서)");

  // language=JavaScript for=ed_declarDept event=OnKillFocus()>
  scwin.f_checkPopEd(ed_declarDept, ed_declarDeptNm, '1');
};

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 신고부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_declarDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  console.log("=== f_PopUpCompanyInfo ( pWinCloseTF[ " + pWinCloseTF + " ]");

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
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:신고부서)");
  switch (flag) {
    case '1':
      // 신고부서
      var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      console.log("  신고부서popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveWithHoldInfo',ed_declarDept.text.trim(),txt_declarDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_declarDept.cfCommonPopUp(scwin.udc_declarDept_callBackFunc, ed_declarDept.getValue().trim(), ed_declarDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      // f_resultPopEd(ed_dofficeCd,txt_dofficeNm,rtnList);

      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 회사코드조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    // KYU_NEW
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    // KYU_NEW
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분    
  }

  // console.log("  scwin.txtCoClsCd ["+scwin.txtCoClsCd +"]");

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차) - 자회사여부는 계속 바뀌어야 함
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템  0
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
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
};

//-------------------------------------------------------------------------
// 신고부서조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_declarDept_callBackFunc = function (rtnList) {
  console.log("▲ udc_declarDept_callBackFunc ( 신고부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_declarDept, ed_declarDeptNm, rtnList, '1');

  // KYU_ORDER  f_resultPopEd 안으로
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]   rtnList [" + rtnList + "]");

  // if (rtnList != null ) {
  //   if (rtnList[0] == "N/A") {
  // 		return;
  // 	}
  // 	ed_declarDept.Text = rtnList[1];	// 코드
  // 	txt_declarDeptNm.value = rtnList[2];	// 명
  // 	ed_declarDept.hidVal = rtnList[1];  // 히든값

  // 	//회사 정보 set
  // 	ed_coCd.text    	= rtnList[3];		//회사코드
  // 	txtCoClsCd.value    = rtnList[4];		//회사구분코드
  // }else{
  // 	ed_declarDept.Text = "";
  // 	txt_declarDeptNm.value = "";
  // 	ed_declarDept.hidVal = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    // rtnList [10,00009,재경,000,0,,,,,]
    strCd.setValue(rtnList[1]); // 코드 : 다른 팝업에서는 0
    strNm.setValue(rtnList[2]); // 명 : 다른 팝업에서는 1

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_declarDept_hidVal = rtnList[1];
        break;
      // 신고부서
      default:
        break;
    }

    // 회사정보 set
    ed_coCd.setValue(rtnList[3]);
    scwin.txtCoClsCd = rtnList[4];
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_declarDept_hidVal = "";
        break;
      // 신고부서
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:신고부서
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");
  console.log("        ed_declarDept_hidVal [" + scwin.ed_declarDept_hidVal + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_declarDept_hidVal // 신고부서
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return;
  }

  // strNm.value="";

  // 명 초기화
  switch (flag) {
    case '1':
      ed_declarDeptNm.setValue("");
      break;
    // 신고부서
    default:
      break;
  }

  // strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_declarDept_hidVal = "";
      break;
    // 신고부서
    default:
      break;
  }

  // if(strCd.text.trim()!="")  f_openPopUp(flag,'T');

  if (strCd.getValue().trim() != "") {
    // 팝업 로딩
    switch (flag) {
      case '1':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 신고부서
      default:
        break;
    }
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  console.log("=== f_SearchClear (조회부 클리어)");
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_withholdList");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "구청별월소득현황","구청별월소득현황.xls",8+16);
  // }
  if (ds_withholdList.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "구청별월소득현황";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
      // type: "1",
      // headerColor: "#eeeeee", //"#E8E8E8", //연한회색 #33CCCC
      // startRowIndex: 2
    };
    $c.data.downloadGridViewExcel($p, gr_withholdList, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'searchTable',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'width:%; height:px; ',id:'udc_coCd',btnId:'btn_coCd',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',pickerType:'dynamic',mandatory:'true',objType:'data',ref:'data:ds_search.closeYm',displayFormat:'yyyy/MM',title:'지급년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_declarDept',nameId:'ed_declarDeptNm',popupID:'retrieveWithHoldInfopopup',selectID:'retrieveWithHoldInfo',style:'width:%; height:px; ',validTitle:'신고부서',mandatoryCode:'true',id:'udc_declarDept',btnId:'btn_declarDept',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',maxlengthName:'50','ev:onclickEvent':'scwin.udc_declarDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_declarDept_onblurCodeEvent',refDataCollection:'ds_search',code:'declarDept',name:'declarDeptNm',allowCharCode:'0-9',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_version',style:'width: 120px;',submenuSize:'fixed',mandatory:'true',objType:'data',ref:'data:ds_search.version',sortMethod:'ascending',sortOption:'value',title:'버전'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_withholdList',id:'udc_grdMain'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_withholdList',id:'gr_withholdList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'cell',fixedColumn:'1'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'구청명',width:'120',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'급여와상여',width:'700',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'column61',value:'일용직',displayMode:'label',colSpan:'6',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column116',value:'근로소득합계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column250',value:'사업소세',displayMode:'label',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column86',value:'중도퇴직정산',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column156',value:'이월납부세액계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column131',value:'납부세액계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column216',value:'퇴직소득',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column191',value:'총합계',displayMode:'label',colSpan:'5',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column39',value:'사무직',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column34',value:'기능직',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column68',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'근무일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column83',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column78',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column118',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column113',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column108',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column103',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column98',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column178',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column173',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column168',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column163',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column158',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column153',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column148',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column143',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column138',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column133',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column128',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column228',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column223',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column218',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column213',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column208',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column203',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column198',value:'지방소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column193',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column183',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column188',value:'과세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column238',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column233',value:'지방소득세',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dofficeNm',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offcStaff',inputType:'text',style:'',value:'',width:'70',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offcTotAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offcTaxnAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offcIncomeTax',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offcManTax',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salStaff',inputType:'text',style:'',value:'',width:'70',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salTotAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salTaxnAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salIncomeTax',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'salManTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstStaff',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstMmWorkDdCnt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dusePstManTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subSumStaff',value:'',displayMode:'label',expression:'parseInt(display(\'salStaff\'))+parseInt(display(\'offcStaff\'))+parseInt(display(\'dusePstStaff\'))parseInt(display(\'salStaff\'))+parseInt(display(\'offcStaff\'))+parseInt(display(\'dusePstStaff\'))',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subSumTotAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'parseInt(\'salTotAmt\')+parseInt(\'offcTotAmt\')+parseInt(\'dusePstTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subSumTaxnAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'parseInt(\'salTaxnAmt\')+parseInt(\'offcTaxnAmt\')+parseInt(\'dusePstTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subSumIncomeTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'parseInt(\'salIncomeTax\')+parseInt(\'offcIncomeTax\')+parseInt(\'dusePstIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'subSumManTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'parseInt(\'salManTax\')+parseInt(\'offcManTax\')+parseInt(\'dusePstManTax\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'temp_bizTaxAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'display(\'bizTaxAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamStaff',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamTotAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamTaxnAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamIncomeTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'midstreamManTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdStaff',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdTotAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdTaxnAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdIncomeTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'caryFwrdManTax',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pmntSumStaff',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',expression:'parseInt(\'salStaff\')+parseInt(\'offcStaff\')+parseInt(\'dusePstStaff\')+parseInt(\'midstreamStaff\')+parseInt(\'caryFwrdStaff\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pmntSumTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'parseInt(\'salTotAmt\')+parseInt(\'offcTotAmt\')+parseInt(\'dusePstTotAmt\')+parseInt(\'midstreamTotAmt\')+parseInt(\'caryFwrdTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pmntSumTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'parseInt(\'salTaxnAmt\')+parseInt(\'offcTaxnAmt\')+parseInt(\'dusePstTaxnAmt\')+parseInt(\'midstreamTaxnAmt\')+parseInt(\'caryFwrdTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pmntSumIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'parseInt(\'salIncomeTax\')+parseInt(\'offcIncomeTax\')+parseInt(\'dusePstIncomeTax\')+parseInt(\'midstreamIncomeTax\')+parseInt(\'caryFwrdIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pmntSumManTax',value:'',displayMode:'label',textAlign:'right',expression:'parseInt(\'salManTax\')+parseInt(\'offcManTax\')+parseInt(\'dusePstManTax\')+parseInt(\'midstreamManTax\')+parseInt(\'caryFwrdManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retireStaff',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retireTotAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retireTaxnAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retireIncomeTax',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'retireManTax',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalSumStaff',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalSumTotAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalSumTaxnAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalSumIncomeTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalSumManTax',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'expression',style:'',value:'',width:'70',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'offcStaff\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'offcTotAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'offcTaxnAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'offcIncomeTax\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'offcManTax\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'expression',style:'',value:'',width:'70',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'salStaff\')',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'salTotAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'salTaxnAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'salIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number',expression:'sum(\'salManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'dusePstStaff\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'dusePstMmWorkDdCnt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'dusePstTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'dusePstTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'dusePstIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'dusePstManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column120',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'subSumStaff\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column115',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'subSumTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column110',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'subSumTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column105',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'subSumIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column100',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'subSumManTax\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column95',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'temp_bizTaxAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'midstreamStaff\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column180',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'midstreamTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column175',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'midstreamTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column170',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'midstreamIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column165',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',expression:'sum(\'midstreamManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column160',value:'',displayMode:'label',readOnly:'true',displayFormat:'#,##0',expression:'sum(\'caryFwrdStaff\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column155',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',expression:'sum(\'caryFwrdTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column150',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',expression:'sum(\'caryFwrdTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column145',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',expression:'sum(\'caryFwrdIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column140',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',expression:'sum(\'caryFwrdManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column135',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',class:'tar',textAlign:'right',expression:'sum(\'pmntSumStaff\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column125',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pmntSumTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column130',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pmntSumTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column230',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pmntSumIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column225',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'pmntSumManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column220',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'retireStaff\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column215',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'retireTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column210',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'retireTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column205',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'retireIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column200',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',expression:'sum(\'retireManTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column195',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'totalSumStaff\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column185',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'totalSumTotAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column190',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'totalSumTaxnAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column240',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'totalSumIncomeTax\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column235',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true',expression:'sum(\'totalSumManTax\')',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})