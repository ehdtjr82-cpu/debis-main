/*amd /ui/cm/bc/rentloan/zz_900_01_04b.xml 60473 ea8cb0ce1811376a661a272c002c5ab204d3275ffe788225ac8dcdad5e57e6b3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'collMoneyPaySeq',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_detail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPaySeq',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'collMoneyPayClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPayCondCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPayAmt',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'collMoneyPayDt1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPayDt2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_detail_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySeq',name:'수금지급순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'청구/정산구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayCondCd',name:'청구/정산조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslYn',name:'선불여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allMonth',name:'월단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayAmt',name:'청구/정산금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt1',name:'청구/정산일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt2',name:'청구/정산일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNoSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanCond',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conDeptCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usePurpsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanConcDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsEndDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanTmnDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanChrgDeptNm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicMp',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicTel',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicFax',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicEmail',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicZip',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicAddr1',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicAddr2',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmChrgDeptNm',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicMp',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicTel',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicFax',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicEmail',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicZip',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicAddr1',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicAddr2',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePayYn',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueTmnReportCond',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'midstreamTmnCond',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'restoreCond',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lossRecomNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcRentloanNm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanRepstRegYn',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanRegNm',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owner',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ownerCnsntYn',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgModFlag',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mregeRenBfRentloanNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'renBfRentloanNo',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'renBfRentloanSeq',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startRentloanNo',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rnk',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeState',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanCtrtNo',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addFile',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'examOpin',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitExamOpin',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitExamOpin',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserId',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserNm',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uppermostBizDomCd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntPmntDd',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlNm',name:'name70',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'sysCd'},{T:1,N:'queryId'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyPayClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realestSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'roolNum',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regAreaPy',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regAreaM2',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanAreaPy',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanAreaM2',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsRt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bldgStucNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buildYy',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topFloor',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bottomFloor',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ownerCnsnt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprtContNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'estmtAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'estmtBasis',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgModFlag',name:'name27',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_collMoneyPayClsCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_collMoneyPayClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_collMoneyPayClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_master2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_master2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/cm.bc.rentloan.RetrieveRentLoanCtrtCondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.rentloan.SaveRentLoanCtrtCondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"action":"modified","id":"ds_detail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 계약조건
 * 메뉴경로 : 공통/총무업무/임대차관리/임대차[전대차] 계약관리/임대차[전대차] 계약기본정보
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_01_04b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-13
 * 수정이력  :
 *    - 2025-11-13      정승혜    최초작성
 *    - 2025-12-23      정승혜    pub 경로 -> ui로 변경 / f_winOpen수정
 *    - 2025-12-24      정승혜    popTitleCh 적용
 *    - 2026-01-09      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 
 * 조회조건 : 
 * 
 */

//hidden
scwin.txt_rentloanNo = "";
scwin.txt_rentloanSeq = "";
scwin.hid_uppermostBizDomCd = "";
scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_01b.xml";
scwin.strCtrtBaseSdId = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
scwin.params = "";
scwin.rentloanNo = "";
scwin.rentloanSeq = "";
scwin.mode = "";
scwin.eqSelBizDom = "";
scwin.cfValue = "";
scwin.popYn = "";
scwin.memJson = "";
scwin.regId = "";
scwin.sysAdminYn = "";
scwin.uppermostBizDomCd = ""; //최상위사업영역
scwin.selBizDom = scwin.eqSelBizDom;
scwin.sRentloanNo = "";
scwin.sRentloanSeq = "";
scwin.sMode = "";
scwin.user = "";
scwin.sFilter1 = "";
scwin.sFilter2 = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.regId = scwin.memJson.userId;
  scwin.sysAdminYn = scwin.memJson.sysAdminYn;
  const codeOptions = [{
    grpCd: "ZZ919",
    compID: "gr_detail:collMoneyPayCondCd"
  }, {
    grpCd: "ZZ924",
    compID: "lc_dueTmnReportCond"
  }, {
    grpCd: "ZZ925",
    compID: "lc_midstreamTmnCond"
  }, {
    grpCd: "ZZ910",
    compID: "lc_rentloanClsCd"
  }, {
    grpCd: "ZZ911",
    compID: "lc_rentloanShapeCd"
  }, {
    grpCd: "ZZ912",
    compID: "lc_rentloanCond"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  if (scwin.params["rentloanNo"] == null) {
    scwin.rentloanNo = "";
  } else {
    scwin.rentloanNo = scwin.params["rentloanNo"];
  } //계약번호
  if (scwin.params["rentloanSeq"] == null) {
    scwin.rentloanSeq = "";
  } else {
    scwin.rentloanSeq = scwin.params["rentloanSeq"];
  } //계약순번
  if (scwin.params["mode"] == null) {
    scwin.mode = "";
  } else {
    scwin.mode = scwin.params["mode"];
  } //NEW, CHG, REN, MOD, DEL, ''
  if (scwin.params["selBizDom"] == null) {
    scwin.eqSelBizDom = "";
  } else {
    scwin.eqSelBizDom = scwin.params["selBizDom"];
  }
  if (scwin.params["cf"] == null) {
    scwin.cfValue = "";
  } else {
    scwin.cfValue = scwin.params["cf"];
  }
  if (scwin.params["popYn"] == null) {
    scwin.popYn = "";
  } else {
    scwin.popYn = scwin.params["popYn"];
  }
  scwin.sRentloanNo = scwin.params["rentloanNo"];
  scwin.sRentloanSeq = scwin.params["rentloanSeq"];
  scwin.sMode = scwin.params["sMode"];
  scwin.user = scwin.params["regId"];
};
scwin.ondataload = function () {
  dlt_commonCodeZZ919.sort("cd", 0);
  dlt_commonCodeZZ925.sort("cd", 0);
  dlt_commonCodeZZ924.sort("cd", 0);

  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();
  scwin.f_HeaderCreate(); //데이터셋 헤더생성
  scwin.f_FieldClear();
  scwin.f_RetrieveRentloan(); // 계약내역 조회

  ed_mergeRentloanNo.setValue(scwin.sRentloanNo + "-" + scwin.sRentloanSeq); // 계약번호 + 계약순번

  scwin.hid_uppermostBizDomCd = scwin.uppermostBizDomCd;
  if (scwin.popYn == 'Y')
    // 팝업으로 넘어오는 항목인 경우 목록 버튼 비활성화
    {
      $c.gus.cfDisableObjects($p, [btn_save, btn_list]);
    }
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "임대차[전대차] 계약조건");
};

//-------------------------------------------------------------------------
// function name : f_HeaderCreate
// function desc : 데이터셋 헤더생성
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_HeaderCreate = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// function name : f_FieldClear
// function desc : 필드 Clear
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p);
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function () {};

//-------------------------------------------------------------------------
// function name : f_downExcelSheet
// function desc : 엑셀다운
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
// 엑셀다운 4+8+16
scwin.f_downExcelSheet = function () {
  if (ds_detail.getRowCount() == 0) {
    return;
  }
  const options = {
    fileName: "보증금 및 전월세 정보.xlsx",
    sheetName: "보증금 및 전월세 정보",
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_detail, options);
};

//-------------------------------------------------------------------------
// function name : f_addRow
// function desc : 행추가
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  let row = ds_detail.insertRow();
  ds_detail.setCellData(row, "rentloanNo", scwin.sRentloanNo);
  ds_detail.setCellData(row, "rentloanSeq", scwin.sRentloanSeq);
  // 담보설정순번
  ds_detail.setCellData(row, "collMoneyPaySeq", row + 1);
  ds_detail.setCellData(row, "collMoneyPayClsCd", ds_collMoneyPayClsCd.getCellData(0, "col1"));
  ds_detail.setCellData(row, "collMoneyPayCondCd", "05");
  scwin.vsslYnDisplayFm("", "", row, "");
  scwin.allMonthDisplayFm("", "", row, "");
  scwin.collMoneyPayCondCdDisplayFm("", "", row, "");
  //$c.gus.cfGoPrevPosition(gr_detail, row);
  gr_detail.setFocusedCell(row, "collMoneyPayClsCd", false);
};

//-------------------------------------------------------------------------
// function name : f_delRow
// function desc : 행삭제
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  let nowRow = ds_detail.getRowPosition();
  let sts = ds_detail.getRowStatus(gr_detail.getFocusedRowIndex());
  if (nowRow != null) {
    if (sts == "C") {
      ds_detail.removeRow(nowRow);
      $c.gus.cfGoPrevPosition($p, gr_detail, nowRow - 1);
    } else if (sts == "D") {
      //아무동작 하지 않음
    } else {
      ds_detail.deleteRow(nowRow);
      $c.gus.cfGoPrevPosition($p, gr_detail, nowRow);
      //gr_detail.setRowDisabled(nowRow, true);

      let sum = 0;
      for (i = 0; i <= ds_detail.getRowCount(); i++) {
        if (ds_detail.getCellData(i, "collMoneyPayClsCd") == "01" || ds_detail.getCellData(i, "collMoneyPayClsCd") == "02" || ds_detail.getCellData(i, "collMoneyPayClsCd") == "03" || ds_detail.getCellData(i, "collMoneyPayClsCd") == "04") {
          if (ds_detail.getRowCount() != 1) {
            sum += ds_detail.getCellData(i, "collMoneyPayAmt");
          }
        }
      }
      ed_deposit.setValue(sum);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_cancelRow
// function desc : 행취소
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
scwin.f_cancelRow = function () {
  let nowRow = ds_detail.getRowPosition();
  let sts = ds_detail.getRowStatus(gr_detail.getFocusedRowIndex());
  if (nowRow != null) {
    if (sts == "C") {
      ds_detail.removeRow(nowRow);
      $c.gus.cfGoPrevPosition($p, gr_detail, nowRow - 1);
    } else {
      ds_detail.undoRow(nowRow);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_RentloanShapeCdChange
// function desc : 계약형태 변경 시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_RentloanShapeCdChange = function () {
  let vRentloanShapeCd = lc_rentloanShapeCd.getValue();
  if (vRentloanShapeCd == "01" || vRentloanShapeCd == "02") {
    ChainedISNm.setLabel("경매현황");
    scwin.sFilter1 = "1";
    scwin.sFilter2 = "";
  } else if (vRentloanShapeCd == "03" || vRentloanShapeCd == "04") {
    ChainedISNm.setLabel("명도소송현황");
    scwin.sFilter1 = "";
    scwin.sFilter2 = "1";
  } else {}
};

//-------------------------------------------------------------------------
// function name : f_RetrieveCollMoneyPayClsCd
// function desc : 청구/정산구분 조회
// function Parameter : null 
//-------------------------------------------------------------------------	
scwin.f_RetrieveCollMoneyPayClsCd = function () {
  let nRow = 0;
  let condition = "";
  condition = "?sysCd=CommonEBC" + "&queryId=retrieveCommonFilterPopup&param1=ZZ918&param2=" + scwin.sFilter1 + "&param3=" + scwin.sFilter2;
  sbm_ds_collMoneyPayClsCd.action = "/cm.zz.RetrieveCommonPopupCMD.do" + condition;
  $c.sbm.execute($p, sbm_ds_collMoneyPayClsCd);

  // 조건처리는 scwin.sbm_ds_collMoneyPayClsCd_submitdone 에서 처리
};

//-------------------------------------------------------------------------
// function name : f_RetrieveRentloan
// function desc : 계약내역 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_RetrieveRentloan = function () {
  if (scwin.sRentloanNo == "" || scwin.sRentloanSeq == "") {
    return;
  }
  sbm_tr_retrieve.action = "/cm.bc.rentloan.RetrieveRentLoanContractBasisInformationCMD.do?rentloanNo=" + scwin.sRentloanNo + "&rentloanSeq=" + scwin.sRentloanSeq;
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 담보정보 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_search.set("rentloanNo", scwin.sRentloanNo);
  dma_search.set("rentloanSeq", scwin.sRentloanSeq);
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_master.getModifiedIndex().length == 0 && ds_detail.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
    return;
  }
  if (!scwin.f_ValidCheck()) {
    return;
  }
  let ret = await $c.gus.cfValidate($p, [gr_detail]);
  if (!ret) {
    return;
  }
  let sCollMoneyPayCondCd = "";
  for (i = 0; i < ds_detail.getRowCount(); i++) {
    sCollMoneyPayCondCd = ds_detail.getCellData(i, "collMoneyPayCondCd");
    if (sCollMoneyPayCondCd == "05" && (ds_detail.getCellData(i, "collMoneyPayDt1") == "" || ds_detail.getCellData(i, "collMoneyPayDt1") == null)) {
      let temp = i + 1;
      await $c.win.alert($p, "담보내역의 " + temp + "번째 데이터에서 수금지급일자은(는) 필수 입력 항목입니다.");
      gr_detail.setFocusedCell(i, "collMoneyPayDt1", true);
      return;
    }
    if (sCollMoneyPayCondCd != "05" && (ds_detail.getCellData(i, "collMoneyPayDt2") == "" || ds_detail.getCellData(i, "collMoneyPayDt2") == null)) {
      let temp = i + 1;
      await $c.win.alert($p, "담보내역의 " + temp + "번째 데이터에서 수금지급일은(는) 필수 입력 항목입니다.");
      gr_detail.setFocusedCell(i, "collMoneyPayDt2", true);
      return;
    }
  }
  ds_master.setCellData(0, "rentloanNo", scwin.sRentloanNo);
  ds_master.setCellData(0, "rentloanSeq", scwin.sRentloanSeq);
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    $c.sbm.execute($p, sbm_tr_save);
  }
};

//-------------------------------------------------------------------------
// function name : f_ValidCheck
// function desc : 필수값 체크
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_ValidCheck = function () {
  return true;
};

//-------------------------------------------------------------------------
// function name : f_winOpen
// function desc : 화면이동
// function Parameter : strIndex : 버튼
//-------------------------------------------------------------------------  
// 버튼6개 
scwin.f_winOpen = function (strIndex) {
  let strPath = "";
  let vRentloanShapeCd = lc_rentloanShapeCd.getValue();
  scwin.uppermostBizDomCd = scwin.hid_uppermostBizDomCd;
  let pgmId = $c.data.getParameter($p, "menuInfo").pgmId;
  let rentloan = scwin.sRentloanNo + scwin.sRentloanSeq;
  let data = {};
  data.mode = scwin.sMode;
  data.cf = scwin.cfValue;
  data.selBizDom = scwin.uppermostBizDomCd;
  data.rentloanNo = scwin.sRentloanNo;
  data.rentloanSeq = scwin.sRentloanSeq;
  let opt = {};
  opt.width = "2500";
  opt.height = "1300";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  switch (strIndex) {
    case 0:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "계약기본정보";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
        $c.win.openMenu($p, '계약기본정보', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "계약기본정보");
      }
      break;
    case 1:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "담보평가";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_03b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_03b.xml";
        $c.win.openMenu($p, '담보평가', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "담보평가");
      }
      break;
    case 2:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "계약조건";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_04b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_04b.xml";
        $c.win.openMenu($p, '계약조건', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "계약조건");
      }
      break;
    case 3:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        opt.popupName = "검토의견 및 참고사항";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_05b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        strPath = "/ui/cm/bc/rentloan/zz_900_01_05b.xml";
        $c.win.openMenu($p, '검토의견 및 참고사항', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "검토의견 및 참고사항");
      }
      break;
    case 4:
      if (vRentloanShapeCd == "01" || vRentloanShapeCd == "02") {
        if (scwin.popYn == 'Y') {
          data.popYn = "Y";
          opt.popupName = "경매현황";
          let sURL = "/ui/cm/bc/rentloan/zz_900_01_06b.xml";
          $c.win.openPopup($p, sURL, opt, data);
        } else {
          strPath = "/ui/cm/bc/rentloan/zz_900_01_06b.xml";
          $c.win.openMenu($p, '경매현황', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
            openAction: "exist",
            menuCode: rentloan,
            menuCode2: "new"
          });
          let tabObj = $p.top().tac_layout;
          tabObj.setLabelText(tabObj.getSelectedTabIndex(), "경매현황");
        }
        break;
      } else if (vRentloanShapeCd == "03" || vRentloanShapeCd == "04") {
        if (scwin.popYn == 'Y') {
          data.popYn = "Y";
          opt.popupName = "명도소송현황";
          let sURL = "/ui/cm/bc/rentloan/zz_900_02_06b.xml";
          $c.win.openPopup($p, sURL, opt, data);
        } else {
          strPath = "/ui/cm/bc/rentloan/zz_900_02_06b.xml";
          $c.win.openMenu($p, '명도소송현황', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
            openAction: "exist",
            menuCode: rentloan,
            menuCode2: "new"
          });
          let tabObj = $p.top().tac_layout;
          tabObj.setLabelText(tabObj.getSelectedTabIndex(), "명도소송현황");
        }
        break;
      } else {}
    case 5:
      if (scwin.popYn == 'Y') {
        data.popYn = "Y";
        data.fileClsCd = "01";
        opt.popupName = "첨부파일";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_07b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        data.fileClsCd = "01";
        strPath = "/ui/cm/bc/rentloan/zz_900_01_07b.xml";
        $c.win.openMenu($p, '첨부파일', strPath, strPath.substring(strPath.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
          openAction: "exist",
          menuCode: rentloan,
          menuCode2: "new"
        });
        let tabObj = $p.top().tac_layout;
        tabObj.setLabelText(tabObj.getSelectedTabIndex(), "첨부파일");
      }
      break;
    default:
      break;
  }
};
scwin.f_Ctrt = function () {
  // 호출되는곳 없음
};

// 목록
scwin.cfTabMenuAdd = function () {
  let sURL = scwin.strBasSdId;
  $c.win.openMenu($p, '계약관리', sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, ""));
};

// 최상위사업영역
scwin.f_uppermostBizdom = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};

// 최상위사업영역 서브미션
scwin.sbm_ds_uppermostBizdom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_uppermostBizdom.getCellData(0, "col1") != "" && ds_uppermostBizdom.getCellData(0, "col1") != null) {
    if (scwin.selBizDom == "" || scwin.selBizDom == null) {
      scwin.uppermostBizDomCd = ds_uppermostBizdom.getCellData(0, "col1");
    } else {
      scwin.uppermostBizDomCd = scwin.selBizDom;
    }
  } else {
    scwin.uppermostBizDomCd = "252";
  }
};

// 청구/정산구분 조회 서브미션
scwin.sbm_ds_collMoneyPayClsCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let nRow = "";
  if (lc_rentloanCond.getValue() == "01") {
    //보증부월세(임차료, 임대료, 보증금 4가지 가능)
  } else if (lc_rentloanCond.getValue() == "02") {
    //전액보증금(보증금만 가능)

    nRow = ds_collMoneyPayClsCd.getMatchedIndex("col1", "05"); // 임차료
    if (nRow > -1) {
      ds_collMoneyPayClsCd.removeRow(nRow);
    }
    nRow = ds_collMoneyPayClsCd.getMatchedIndex("col1", "06"); // 임대료
    if (nRow > -1) {
      ds_collMoneyPayClsCd.removeRow(nRow);
    }
  } else if (lc_rentloanCond.getValue() == "03") {
    //전액월세(임대료, 임차료만 가능)

    nRow = ds_collMoneyPayClsCd.getMatchedIndex("col1", "01"); // 보증금계약
    // col1 의 데이터가 03인 row 값을 가져온다
    if (nRow > -1) {
      ds_collMoneyPayClsCd.removeRow(nRow);
      // 해당 row 를 지운다
    }
    nRow = ds_collMoneyPayClsCd.getMatchedIndex("col1", "02"); // 보증금중도1차
    if (nRow > -1) {
      ds_collMoneyPayClsCd.removeRow(nRow);
    }
    nRow = ds_collMoneyPayClsCd.getMatchedIndex("col1", "03"); // 보증금중도2차
    if (nRow > -1) {
      ds_collMoneyPayClsCd.removeRow(nRow);
    }
    nRow = ds_collMoneyPayClsCd.getMatchedIndex("col1", "04"); // 보증금잔금
    if (nRow > -1) {
      ds_collMoneyPayClsCd.removeRow(nRow);
    }
  } else {}
  scwin.f_Retrieve(); // 조회
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_detail.getRowCount());
  $c.gus.cfGoPrevPosition($p, gr_detail, 0);
  let tempClsCd = "";
  if (ds_detail.getRowCount() > 0) {
    for (let i = 0; i < ds_detail.getRowCount(); i++) {
      tempClsCd = ds_detail.getCellData(i, "collMoneyPayClsCd");
      let editCd = "";
      if (tempClsCd == "05") {
        editCd = "false";
      } else {
        editCd = "true";
      }
      if (ds_master.getCellData(0, "dcsnYn") == "1") {
        gr_detail.setReadOnly("cell", i, "vsslYn", true);
      } else {
        if (editCd == "true") {
          gr_detail.setReadOnly("cell", i, "vsslYn", false);
        } else {
          gr_detail.setReadOnly("cell", i, "vsslYn", true);
        }
      }
      scwin.collMoneyPayCondCdDisplayFm("", "", i, "");
    }
  }
};

// 서브미션
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_RetrieveRentloan();
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_master.setRowPosition(0);

  // 임대 전대일때 담보버튼 비활성화
  if (lc_rentloanShapeCd.getValue() == "03" || lc_rentloanShapeCd.getValue() == "04") {
    $c.gus.cfDisableObjects($p, [pu_place]);
  } else {
    $c.gus.cfEnableObjects($p, [pu_place]);
  }

  /* for=tr_retrieve event=OnSuccess() */
  if (ds_master.getCellData(0, "dcsnYn") == "1") {
    // 확정
    $c.gus.cfEnableObjects($p, []);
    $c.gus.cfDisableObjects($p, [oRentloanNo, oRentloanInfo, oRentloanInfo1, oRentloanInfo2, btn_save, pu_path, btn_add, btn_del, btn_cls]); //gr_detail
    gr_detail.setReadOnly("grid", true);
    $c.gus.cfDisableObjects($p, [ed_deposit]);
  } else {
    // 미확정
    $c.gus.cfEnableObjects($p, [oRentloanNo, oRentloanInfo, oRentloanInfo1, oRentloanInfo2, btn_save, btn_add, btn_del, btn_cls]); //gr_detail
    $c.gus.cfDisableObjects($p, [oRentloanNo, pu_path]);
    $c.gus.cfDisableObjects($p, [ed_deposit]);
  }
  scwin.f_RentloanShapeCdChange(); //계약형태 변경 시

  scwin.f_RetrieveCollMoneyPayClsCd(); //청구/정산구분 조회

  // f_Retrieve() -> sbm_ds_collMoneyPayClsCd_submitdone 에서 실행
};

// 선불여부 Edit={decode(collMoneyPayCondCd, "05", "false", "true")} 
scwin.vsslYnDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  if (ds_master.getCellData(0, "dcsnYn") == "1") {
    gr_detail.setReadOnly("cell", rowIndex, "vsslYn", true);
  } else {
    if (ds_detail.getCellData(rowIndex, "collMoneyPayCondCd") == "05") {
      gr_detail.setReadOnly("cell", rowIndex, "vsslYn", true);
    } else {
      gr_detail.setReadOnly("cell", rowIndex, "vsslYn", false);
    }
  }
};

// 월단위 Edit={decode(collMoneyPayCondCd, "01", "true", "false")}
scwin.allMonthDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  if (ds_master.getCellData(0, "dcsnYn") == "1") {
    gr_detail.setReadOnly("cell", rowIndex, "vsslYn", true);
  } else {
    if (ds_detail.getCellData(rowIndex, "collMoneyPayCondCd") == "01") {
      gr_detail.setReadOnly("cell", rowIndex, "allMonth", false);
    } else {
      gr_detail.setReadOnly("cell", rowIndex, "allMonth", true);
    }
  }
};

// customFormatter 적용하면 code  select 이 안먹음
// 청구/정산조건 Edit={decode(collMoneyPayClsCd, "01", "false", "02", "false", "03", "false", "04", "false", "true")}
scwin.collMoneyPayCondCdDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  let tempClsCd = ds_detail.getCellData(rowIndex, "collMoneyPayClsCd");
  let editCd = "";
  if (tempClsCd == "01") {
    editCd = false;
  } else if (tempClsCd == "02") {
    editCd = false;
  } else if (tempClsCd == "03") {
    editCd = false;
  } else if (tempClsCd == "04") {
    editCd = false;
  } else {
    editCd = true;
  }
  if (ds_master.getCellData(0, "dcsnYn") == "1") {
    gr_detail.setReadOnly("cell", rowIndex, "vsslYn", true);
  } else {
    if (editCd) {
      gr_detail.setReadOnly("cell", rowIndex, "collMoneyPayCondCd", false);
      //ds_detail.setCellData(rowIndex, "vsslYn", "0");
      //ds_detail.setCellData(rowIndex, "allMonth", "0");
      scwin.vsslYnDisplayFm("", "", rowIndex, "");
      scwin.allMonthDisplayFm("", "", rowIndex, "");
    } else {
      //ds_detail.setCellData(rowIndex, "collMoneyPayCondCd", "05");
      gr_detail.setReadOnly("cell", rowIndex, "collMoneyPayCondCd", true);
      scwin.vsslYnDisplayFm("", "", rowIndex, "");
      scwin.allMonthDisplayFm("", "", rowIndex, "");
    }
  }
};
scwin.gr_detail_onafteredit = function (rowIndex, columnIndex, value) {
  if (columnIndex == "5") {
    scwin.vsslYnDisplayFm("", "", rowIndex, "");
    scwin.allMonthDisplayFm("", "", rowIndex, "");
  } else if (columnIndex == "4") {
    scwin.collMoneyPayCondCdDisplayFm("", "", rowIndex, "");
  }
};
scwin.gr_detail_oncellclick = function (rowIndex, columnIndex, columnId) {
  //청구정산조건
  let sCollMoneyPayCondCd = ds_detail.getCellData(rowIndex, "collMoneyPayCondCd");
  if (ds_master.getCellData(0, "dcsnYn") == "1") {
    gr_detail.setReadOnly("cell", rowIndex, "vsslYn", true);
  } else {
    if (sCollMoneyPayCondCd != "05") {
      //청구정산일자
      gr_detail.setReadOnly("cell", rowIndex, "collMoneyPayDt1", true);

      //청구정산일
      gr_detail.setReadOnly("cell", rowIndex, "collMoneyPayDt2", false);
      ds_detail.setCellData(rowIndex, "collMoneyPayDt1", "");
    }
    if (sCollMoneyPayCondCd == "05") {
      //청구정산일자
      gr_detail.setReadOnly("cell", rowIndex, "collMoneyPayDt1", false);

      //청구정산일
      gr_detail.setReadOnly("cell", rowIndex, "collMoneyPayDt2", true);
      ds_detail.setCellData(rowIndex, "collMoneyPayDt2", "");
      ds_detail.setCellData(rowIndex, "vsslYn", 0);
    }
    gr_detail.refreshRow(rowIndex);
  }
};
scwin.ds_detail_oncelldatachange = function (info) {
  if (info.colID == "collMoneyPayClsCd") {
    if (ds_detail.getCellData(info.rowIndex, "collMoneyPayClsCd") == "01" || ds_detail.getCellData(info.rowIndex, "collMoneyPayClsCd") == "02" || ds_detail.getCellData(info.rowIndex, "collMoneyPayClsCd") == "03" || ds_detail.getCellData(info.rowIndex, "collMoneyPayClsCd") == "04") {
      ds_detail.setCellData(info.rowIndex, "collMoneyPayCondCd", "05");
    }
  }
  let sum = 0;
  for (let i = 0; i < ds_detail.getRowCount(); i++) {
    if (ds_detail.getCellData(i, "collMoneyPayClsCd") == "01" || ds_detail.getCellData(i, "collMoneyPayClsCd") == "02" || ds_detail.getCellData(i, "collMoneyPayClsCd") == "03" || ds_detail.getCellData(i, "collMoneyPayClsCd") == "04") {
      if (ds_detail.getRowStatus(i) != "D") sum += Number(ds_detail.getCellData(i, "collMoneyPayAmt"));
    }
  }
  ed_deposit.setValue(sum);

  //임차료,임대료 1개월납일 경우 선불여부 자동 chk
  if (info.rowIndex > 0) {
    if (info.colID == "collMoneyPayCondCd" || info.colID == "collMoneyPayClsCd") {
      if (ds_detail.getCellData(info.rowIndex, "collMoneyPayCondCd") == "01" && (ds_detail.getCellData(info.rowIndex, "collMoneyPayClsCd") == "05" || ds_detail.getCellData(info.rowIndex, "collMoneyPayClsCd") == "06")) {
        ds_detail.setCellData(info.rowIndex, "vsslYn", "1");
      } else ds_detail.setCellData(info.rowIndex, "vsslYn", "0");
      ds_detail.setCellData(info.rowIndex, "allMonth", "0");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'oRentloanNo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_mergeRentloanNo',style:'',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_clntNo',placeholder:'',style:'',ref:'data:ds_master.clntNo',objType:'data',maxlength:'6',allowChar:'0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm',placeholder:'',style:'',ref:'data:ds_master.clntNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanClsCd',style:'',submenuSize:'auto',ref:'data:ds_master.rentloanClsCd',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanShapeCd',style:'',submenuSize:'auto',ref:'data:ds_master.rentloanShapeCd',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약개시일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rentloanStDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_master.rentloanStDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약종료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rentloanEndDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_master.rentloanEndDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_closeDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_master.closeDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약조건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanCond',style:'',submenuSize:'auto',ref:'data:ds_master.rentloanCond',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'부동산 담보물건 기본정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'oRentloanInfo',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'손해배상내용',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txt_lossRecomNm',style:'',ref:'data:ds_master.lossRecomNm',maxlength:'1000'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기타 계약내용',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_etcRentloanNm',style:'',ref:'data:ds_master.etcRentloanNm',placeholder:'간판 주차대수 내용을 직접 입력하세요',maxlength:'1000'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'보증금 및 전월세 정보 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_detail',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'oRentloanInfo1',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보증금',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_deposit',style:'',ref:'data:ds_master.deposit',objType:'data',dataType:'number',maxlength:'13',displayFormat:'#,##0'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'info-list txt-red'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구/정산 금액은 VAT 별도 금액입니다.',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구/정산일이 末日인 경우 31일로 입력합니다.',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'선불여부 체크시 계약 시작월부터 지급/청구되며 미체크시 익월부터 지급/청구됩니다. ',class:'',tagname:'p'}}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowNumHeaderValue:'순번',rowNumVisible:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:onafteredit':'scwin.gr_detail_onafteredit','ev:oncellclick':'scwin.gr_detail_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계약번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계약순번',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'수금지급순번',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'순번(seq)',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'청구/정산구분',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'청구/정산조건',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'선불여부',width:'100',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'월단위',width:'100',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'청구/정산금액',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'청구/정산일자',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column29',value:'청구/정산일',displayMode:'label',class:'txt-red',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPaySeq',inputType:'text',style:'',value:'',width:'120',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayClsCd',inputType:'select',style:'',value:'',width:'150',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_collMoneyPayClsCd'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayCondCd',inputType:'select',style:'',value:'',width:'150',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslYn',inputType:'checkbox',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'allMonth',inputType:'checkbox',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayAmt',inputType:'text',style:'',value:'',width:'150',dataType:'number',excelCellType:'number',displayFormat:'#,##0',textAlign:'right',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayDt1',inputType:'calendar',style:'',value:'',width:'150',displayFormat:'####/##/##',dataType:'text'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'collMoneyPayDt2',value:'',displayMode:'label',dataType:'text'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',cancelFunction:'scwin.f_cancelRow',rowAddUserAuth:'C',gridID:'gr_detail',id:'udc_grdBottomBtn',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',btnRowAddObj:'btn_add',btnRowDelObj:'btn_del',btnCancelObj:'btn_cls',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기타 계약정보 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'oRentloanInfo2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기해제통보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dueTmnReportCond',style:'',submenuSize:'auto',ref:'data:ds_master.dueTmnReportCond',emptyItem:'true',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중도해지조건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_midstreamTmnCond',style:'',submenuSize:'auto',ref:'data:ds_master.midstreamTmnCond',emptyItem:'true',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원상복구조건',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:textarea',A:{class:'',id:'ed_restoreCond',style:'',ref:'data:ds_master.restoreCond',maxlength:'1000'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_ctrt',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(0)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_place',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'담보평가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_path',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(2)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약조건'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_rate',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(3)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검토의견 및 참고사항'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'ChainedISNm',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(4)'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_disc',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(5)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'첨부파일'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_list',style:'',type:'button','ev:onclick':'scwin.cfTabMenuAdd',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'목록'}]}]}]}]}]}]}]}]}]})