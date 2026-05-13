/*amd /ui/cm/bc/rentloan/zz_900_01_03b.xml 89974 8d6d75219897447e95a237948f9f1490ff1e189d44b690a5018e962d90b0ed02 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgSeq',name:'담보순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgClsCd',name:'담보구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'othrPldgCd',name:'타담보구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setupDt',name:'설정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsNm',name:'부동산구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'상세주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bldgStucNm',name:'건물구조',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topFloor',name:'지상층',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bottomFloor',name:'지하층',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buildYy',name:'준공연도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'지번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'roolNum',name:'호실',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regAreaM2',name:'면적(m2)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regAreaPy',name:'면적(평)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'ancdLpr',name:'공시지가',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'estmtAmt',name:'평가액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'estmtBasis',name:'평가근거',dataType:'text'}},{T:1,N:'w2:column',A:{id:'landBldgEstmtAmt',name:'토지+건물평가액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dpsitPledAmt',name:'예금질권',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'grtInsrAmt',name:'보증보험',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sprtContNm',name:'기타',dataType:'text'}},{T:1,N:'w2:column',A:{id:'surMarAmt',name:'주변시세',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'conDeptOpin',name:'의견',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gauceJobType',name:'gauceJobType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mergeRentloanNo',name:'mergeRentloanNo',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_List2',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_List2_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgSeq',name:'담보순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgSetupSeq',name:'pldg순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgClsCd',name:'담보구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgKnd',name:'담보종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgTr',name:'담보대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setupDt',name:'설정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNm',name:'채권자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setupAmt',name:'설정금액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setupCumAmt',name:'설정누계액',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pldgCompSetupRt',name:'담보대비설정비율',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'gauceJobType',name:'gauceJobType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mergeRentloanNo',name:'mergeRentloanNo',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mergeRentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pldgSeq',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNoSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanCond',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conDeptCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usePurpsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanConcDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsEndDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanTmnDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanChrgDeptNm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicMp',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicTel',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicFax',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicEmail',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicZip',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicAddr1',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicAddr2',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicNm',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmChrgDeptNm',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicMp',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicTel',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicFax',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicEmail',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicZip',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicAddr1',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAdjmPicAddr2',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePayYn',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueTmnReportCond',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'midstreamTmnCond',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'restoreCond',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lossRecomNm',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcRentloanNm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnYn',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanRepstRegYn',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanRegNm',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owner',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ownerCnsntYn',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgModFlag',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mregeRenBfRentloanNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'renBfRentloanNo',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'renBfRentloanSeq',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startRentloanNo',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rnk',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeState',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanCtrtNo',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addFile',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'examOpin',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitExamOpin',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitExamOpin',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserId',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserNm',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uppermostBizDomCd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntPmntDd',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlNm',name:'name70',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rentloanNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realestSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'roolNum',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regAreaPy',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regAreaM2',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanAreaPy',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanAreaM2',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsRt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bldgStucNm',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buildYy',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topFloor',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bottomFloor',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ownerCnsnt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprtContNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'estmtAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'estmtBasis',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgModFlag',name:'name27',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'sysCd'},{T:1,N:'queryId'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_master1","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_master1","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/cm.bc.rentloan.RetrievePledgeEstimationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_List1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_searchDetail',action:'/cm.bc.rentloan.RetrievePledgeSetUpInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_List2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_List2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_searchDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.rentloan.SavePledgeEstimationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"all","id":"ds_List1","key":"IN_DS1"},{"action":"all","id":"ds_List2","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 담보평가
 * 메뉴경로 : 공통/총무업무/임대차관리/임대차[전대차] 계약관리/임대차[전대차] 계약기본정보
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_01_03b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-14
 * 수정이력  :
 *    - 2025-11-14      정승혜    최초작성
 *    - 2025-12-23      정승혜    pub 경로 -> ui로 변경 / f_winOpen수정
 *    - 2025-12-24      정승혜    popTitleCh 적용
 *    - 2026-01-12      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 
 * gr_List1,gr_List2 Disable 시 이동처리가 안되어 빼고 isStarted 구분값으로 조건처리함
 * 삭제시 delete 처리해서 getModifiedIndex 에 처리되지 않아서 list2CountFlag 구분값으로 조건처리
 * 조회조건: A20260106001
 * 
 */

//hidden
scwin.txt_rentloanNo = "";
scwin.txt_rentloanSeq = "";
scwin.hid_uppermostBizDomCd = "";
scwin.hid_seq = "";
scwin.hid_cardNo = "";
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
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

//////////////////////////////    
scwin.uppermostBizDomCd = ""; //최상위사업영역
scwin.selBizDom = scwin.eqSelBizDom;

//////////////////////////////    
scwin.sRentloanNo = "";
scwin.sRentloanSeq = "";
scwin.sMode = "";
scwin.user = "";
scwin.sPldgClsCd = "00";

//////////////////////////////    
scwin.flag = 0;
scwin.position1 = "";
scwin.isStarted = false;
scwin.list2CountFlag = false;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("zz_900_01_03b_pgmId : " + $c.data.getParameter($p, "menuInfo").pgmId);
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.regId = scwin.memJson.userId;
  scwin.sysAdminYn = scwin.memJson.sysAdminYn;
  const codeOptions = [{
    grpCd: "ZZ914",
    compID: "gr_List1:pldgClsCd, gr_List2:pldgClsCd, lc_pldgClsCd"
  }, {
    grpCd: "ZZ915",
    compID: "gr_List1:othrPldgCd, lc_othrPldgCd"
  }, {
    grpCd: "ZZ916",
    compID: "gr_List1:posnClsCd, lc_posnClsCd"
  }, {
    grpCd: "ZZ910",
    compID: "lc_rentloanClsCd"
  }, {
    grpCd: "ZZ911",
    compID: "lc_rentloanShapeCd"
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
  dlt_commonCodeZZ914.sort("cd", 0);
  dlt_commonCodeZZ915.sort("cd", 0);
  //DataList에 추가할 데이터 정의
  let tmpData = [{
    "grpCd": "ZZ914",
    "cd": "00",
    "cdNm": "없음",
    "sortSeq": "0"
  }];
  //dlt_commonCodeZZ914.insertJSON( 0, tmpData ); // 두번들어가서 수정함
  dlt_commonCodeZZ914.insertRow(0);
  dlt_commonCodeZZ914.setCellData(0, "grpCd", "ZZ914");
  dlt_commonCodeZZ914.setCellData(0, "cd", "00");
  dlt_commonCodeZZ914.setCellData(0, "cdNm", "없음");
  dlt_commonCodeZZ914.setCellData(0, "sortSeq", "0");

  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();
  scwin.f_HeaderCreate(); //데이터셋 헤더생성
  scwin.f_FieldClear();
  scwin.f_RetrieveRentloan(); // 계약내역 조회

  $c.util.setTimeout($p, function () {
    $c.gus.cfDisableObjects($p, [ed_rentloanStDt, ed_rentloanEndDt, ed_closeDt, ed_addr1]);
  }, {
    "delay": 200
  });
  scwin.hid_uppermostBizDomCd = scwin.uppermostBizDomCd;
  if (scwin.popYn == 'Y')
    // 팝업으로 넘어오는 항목인 경우 목록 버튼 비활성화
    {
      $c.gus.cfDisableObjects($p, [btn_save, btn_list, ed_addr1]);
    }
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "임대차[전대차] 담보평가");
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
// function name : f_Reset
// function desc : 초기화
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  let row = ds_List1.insertRow();
  $c.gus.cfGoPrevPosition($p, gr_List1, row);
  scwin.txt_rentloanNo = scwin.sRentloanNo;
  scwin.txt_rentloanSeq = scwin.sRentloanSeq;
  ed_mergeRentloanNo.setValue(scwin.sRentloanNo + "-" + scwin.sRentloanSeq);
  ds_List1.setCellData(row, "rentloanNo", scwin.sRentloanNo);
  ds_List1.setCellData(row, "rentloanSeq", scwin.sRentloanSeq);
  if (ds_List1.getRowCount() > 0) {
    ds_List1.setCellData(row, "pldgSeq", String(Number(ds_List1.getCellData(row - 1, "pldgSeq")) + 1));
  } else {
    ds_List1.setCellData(row, "pldgSeq", ds_List1.getRowCount());
  }
  let rowIndex = ds_List1.getCellData(ds_List1.getRowPosition(), "pldgSeq");
  ds_List2.removeColumnFilterAll();
  ds_List2.setColumnFilter({
    type: 'row',
    colIndex: 'pldgSeq',
    key: rowIndex,
    condition: 'and'
  });
  $c.gus.cfGoPrevPosition($p, gr_List2, 0);
  scwin.f_ResetData(); //데이터 초기화
  scwin.f_EnableSetting();
  lc_pldgClsCd.focus();
};

//-------------------------------------------------------------------------
// function name : f_ResetData
// function desc : Data 초기화
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_ResetData = function () {
  lc_pldgClsCd.setSelectedIndex(1); // 담보구분
  lc_othrPldgCd.setSelectedIndex(0); // 타담보구분
  lc_posnClsCd.setSelectedIndex(0); // 소유구분
  ed_setupDt.setValue(scwin.strCurDate); // 설정일자
  ed_buildYy.setValue(scwin.strCurDate.substring(0, 4)); // 준공년도
  ed_topFloor.setValue("0"); // 지상층
  ed_bottomFloor.setValue("0"); // 지하층
  ed_sprtContNm.setValue("냉낭방시설(      ), 지상설치물(        ), 기타(                                     )"); // 기타 
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
  dma_search.set("mergeRentloanNo", scwin.sRentloanNo + "-" + scwin.sRentloanSeq);
  scwin.list2CountFlag = false;
  sbm_tr_retrieve.action = "/cm.bc.rentloan.RetrieveRentLoanContractBasisInformationCMD.do?rentloanNo=" + scwin.sRentloanNo + "&rentloanSeq=" + scwin.sRentloanSeq;
  $c.sbm.execute($p, sbm_tr_retrieve);
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
        $c.win.openMenu($p, '계약기본정보', strPath, pgmId, data, {
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
        //data.fileClsCd = "01"; // 해당파일에는 없음
        opt.popupName = "첨부파일";
        let sURL = "/ui/cm/bc/rentloan/zz_900_01_07b.xml";
        $c.win.openPopup($p, sURL, opt, data);
      } else {
        //data.fileClsCd = "01"; // 해당파일에는 없음
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

//-------------------------------------------------------------------------
// function name : f_zipPopUp
// function desc : 우편번호팝업
// function Parameter : ed_zip:우편번호,  txt_addr1 : 주소, txt_addr2 : 상세주소
//-------------------------------------------------------------------------  
scwin.f_zipPopUp = function (ed_zip, txt_addr1, txt_addr2) {
  //ed_zip, ed_addr1, ed_addr2
  let vZip = ed_zip.getValue();
  let vTitle = "우편번호, 우편번호, 주소";
  let data = {
    callbackFn: scwin.f_openZipPopUp_callBackFunc
  };
  let v_url = "/ui/cm/zz/newzipcodePopup.xml";
  let opt = {
    id: "pupup",
    popupName: "우편번호 검색",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 550,
    title: "우편번호 검색"
  };
  $c.win.openPopup($p, v_url, opt, data);
};
scwin.f_openZipPopUp_callBackFunc = function (popupResult) {
  if (popupResult != null) {
    ed_zip.setValue(popupResult.zip);
    ed_addr1.setValue(popupResult.addr1);
    ed_addr2.focus();
  } else {
    ed_zip.setValue("");
    ed_addr1.setValue("");
    ed_addr2.setValue("");
  }
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function () {};
scwin.f_downExcelSheet = function () {
  //udc
  // List1 엑셀다운 4+8+16
  // List2 엑셀다운 2+4+8+16
};

// 행추가1
scwin.f_addRow1 = function () {
  scwin.f_addRow("list1");
};

// 행삭제1
scwin.f_delRow1 = function () {
  scwin.f_delRow("list1");
};

// 취소1
scwin.f_cancelRow1 = function () {
  scwin.f_cancelRow("list1");
};

// 행추가2
scwin.f_addRow2 = function () {
  scwin.f_addRow("list2");
};

// 행삭제2
scwin.f_delRow2 = function () {
  scwin.f_delRow("list2");
};

// 취소2
scwin.f_cancelRow2 = function () {
  scwin.f_cancelRow("list2");
};

//-------------------------------------------------------------------------
// function name : f_addRow
// function desc : 행추가
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
// 행추가 행위
scwin.f_addRow = async function (e) {
  if (e == "list1") {
    let ret = await $c.gus.cfValidate($p, [gr_List2]);
    if (!ret) {
      return;
    }
    scwin.f_Reset();
  } else if (e == "list2") {
    let row = ds_List2.insertRow();
    $c.gus.cfGoPrevPosition($p, gr_List2, row);
    let list1NowRow = JSON.stringify(gr_List1.getFocusedRowIndex());
    ds_List2.setCellData(row, "rentloanNo", ds_List1.getCellData(list1NowRow, "rentloanNo"));
    ds_List2.setCellData(row, "rentloanSeq", ds_List1.getCellData(list1NowRow, "rentloanSeq"));
    ds_List2.setCellData(row, "pldgSeq", ds_List1.getCellData(list1NowRow, "pldgSeq"));
    if (ds_List2.getRowCount() > 0) {
      ds_List2.setCellData(row, "pldgSetupSeq", Number(ds_List2.getCellData(row - 1, "pldgSetupSeq")) + 1);
      ds_List2.setCellData(row, "seq", Number(ds_List2.getCellData(row - 1, "pldgSetupSeq")) + 1);
    } else {
      ds_List2.setCellData(row, "pldgSetupSeq", Number(ds_List2.getRowCount() + 1));
      ds_List2.setCellData(row, "seq", Number(ds_List2.getRowCount() + 1));
    }
    ds_List2.setCellData(row, "pldgClsCd", "01");
    ds_List2.setCellData(row, "setupDt", scwin.strCurDate);
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// function name : f_delRow
// function desc : 행삭제
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
// 행삭제 행위
scwin.f_delRow = async function (e) {
  let nowRow = ds_List1.getRowPosition();
  let sts = ds_List1.getRowStatus(gr_List1.getFocusedRowIndex());
  let nowRow2 = ds_List2.getRowPosition();
  let sts2 = ds_List2.getRowStatus(gr_List2.getFocusedRowIndex());
  if (e == "list1") {
    if (ds_List1.getRowCount() == 1) {
      $c.win.alert($p, "마지막 행은 삭제할 수 없습니다.");
      return;
    }
    if (ds_List1.getRowCount() > 0) {
      let confirm = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_014, "담보정보", "담보설정정보"));
      if (confirm) {
        if (nowRow != null) {
          ds_List1.removeRow(nowRow);
          $c.gus.cfGoPrevPosition($p, gr_List1, nowRow - 1);
        }
        for (let i = ds_List2.getRowCount(); i >= 0; i--) {
          if (ds_List2.getCellData(i, "rentloanNo") == ds_List1.getCellData(ds_List1.getRowPosition(), 'rentloanNo') && ds_List2.getCellData(i, 'rentloanSeq') == ds_List1.getCellData(ds_List1.getRowPosition(), 'rentloanSeq') && ds_List2.getCellData(i, 'pldgSeq') == ds_List1.getCellData(ds_List1.getRowPosition(), 'pldgSeq')) {
            ds_List2.removeRow(i);
          }
        }
      } else {
        return;
      }
    }
  } else if (e == "list2") {
    if (ds_List2.getRowCount() > 0) {
      if (nowRow2 != null) {
        ds_List2.removeRow(nowRow2);
        $c.gus.cfGoPrevPosition($p, gr_List2, nowRow2 - 1);
        scwin.list2CountFlag = true;
      }
      scwin.f_sumSetupAmt();
    }
  } else {
    return;
  }
  scwin.f_EnableSetting();
};

//-------------------------------------------------------------------------
// function name : f_cancelRow
// function desc : 행취소
// function Parameter : objGrd : 그리드
//-------------------------------------------------------------------------
// 취소 행위
scwin.f_cancelRow = async function (e) {
  let nowRow = ds_List1.getRowPosition();
  let sts = ds_List1.getRowStatus(gr_List1.getFocusedRowIndex());
  let nowRow2 = ds_List2.getRowPosition();
  let sts2 = ds_List2.getRowStatus(gr_List2.getFocusedRowIndex());
  if (e == "list1") {
    if (ds_List1.getRowCount() > 0) {
      if (sts == "C") {
        for (let i = ds_List2.getRowCount(); i >= 0; i--) {
          if (ds_List2.getCellData(i, "rentloanNo") == ds_List1.getCellData(ds_List1.getRowPosition(), 'rentloanNo') && ds_List2.getCellData(i, 'rentloanSeq') == ds_List1.getCellData(ds_List1.getRowPosition(), 'rentloanSeq') && ds_List2.getCellData(i, 'pldgSeq') == ds_List1.getCellData(ds_List1.getRowPosition(), 'pldgSeq')) {
            ds_List2.removeRow(i);
          }
        }
        ds_List1.removeRow(nowRow);
        $c.gus.cfGoPrevPosition($p, gr_List1, nowRow - 1);
      } else {
        ds_List1.undoRow(nowRow);
      }
    }
  } else if (e == "list2") {
    if (ds_List2.getRowCount() > 0) {
      if (sts2 == "C") {
        ds_List2.removeRow(nowRow2);
        $c.gus.cfGoPrevPosition($p, gr_List2, nowRow2 - 1);
      } else {
        ds_List2.undoRow(nowRow2);
        if (ds_List2.getRowCount() > 0) {
          ds_List2.setCellData(nowRow2, "pldgSetupSeq", Number(ds_List2.getCellData(nowRow2 - 1, "pldgSetupSeq")) + 1);
          ds_List2.setCellData(nowRow2, "seq", Number(ds_List2.getCellData(nowRow2 - 1, "pldgSetupSeq")) + 1);
          ds_List2.modifyRowStatus(nowRow2, 'R');
        } else {
          ds_List2.setCellData(nowRow2, "pldgSetupSeq", Number(ds_List2.getRowCount() + 1));
          ds_List2.setCellData(nowRow2, "seq", Number(ds_List2.getRowCount() + 1));
          ds_List2.modifyRowStatus(nowRow2, 'R');
        }
      }
      scwin.f_sumSetupAmt();
    }
  } else {
    return;
  }
  scwin.f_EnableSetting();
};

//-------------------------------------------------------------------------
// function name : f_EnableSetting
// function desc : 컨트롤 입력여부 설정
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_EnableSetting = function () {
  if (ds_List1.getRowCount() > 0) {
    $c.gus.cfEnableObjects($p, [oPldgInfo, btn_add2, btn_del2, btn_cls2]); //gr_List1
    $c.gus.cfDisableObjects($p, [ed_mergeRentloanNo, lc_rentloanClsCd, lc_rentloanShapeCd, ed_clntNo, ed_clntNm, ed_addr1]);
  } else {
    $c.gus.cfEnableObjects($p, []);
    $c.gus.cfDisableObjects($p, [oPldgInfo, ed_mergeRentloanNo, lc_rentloanClsCd, lc_rentloanShapeCd, ed_clntNo, ed_clntNm, btn_add2, btn_del2, btn_cls2, ed_addr1]); //gr_List1
  }
};

//-------------------------------------------------------------------------
// function name : f_PldgClsCdChange
// function desc : 담보구분 변경 시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_PldgClsCdChange = function (info) {
  if (ds_List1.getRowPosition() == null) {
    ds_List1.setRowPosition(0);
  }
  let rentloanNo = ds_List1.getCellData(ds_List1.getRowPosition(), "rentloanNo");
  let rentloanSeq = ds_List1.getCellData(ds_List1.getRowPosition(), "rentloanSeq");
  let pldgSeq = ds_List1.getCellData(ds_List1.getRowPosition(), "pldgSeq");
  let vSearchClsCd = ds_List1.getCellData(ds_List1.getRowPosition(), "pldgClsCd");
  scwin.sPldgClsCd = vSearchClsCd;
  $c.gus.cfDisableObjects($p, [oPldgInfo, btn_add1, btn_del1, btn_cls1, btn_add2, btn_del2, btn_cls2, ed_addr1]); //gr_List1 gr_List2
  if (vSearchClsCd == "00") {
    ds_List1.removeAll();
    scwin.flag = 1;
    scwin.f_Reset();
    ds_List1.setCellData(ds_List1.getRowPosition(), "pldgClsCd", vSearchClsCd);
    ds_List1.setCellData(ds_List1.getRowPosition(), "setupDt", ""); // 설정일자
    ds_List1.setCellData(ds_List1.getRowPosition(), "buildYy", ""); // 준공년도
    ds_List2.removeAll();
    $c.gus.cfDisableObjects($p, [oPldgInfo, btn_add1, btn_del1, btn_cls1, btn_add2, btn_del2, btn_cls2, ed_addr1]); //gr_List1 gr_List2
    $c.gus.cfEnableObjects($p, [lc_pldgClsCd]);

    //부동산담보(토지)
  } else if (vSearchClsCd == "01") {
    scwin.isStarted = true;
    $c.gus.cfInitObjects($p, [ed_roolNum, ed_estmtBasis]);
    $c.gus.cfEnableObjects($p, [oPldgInfo, btn_add1, btn_del1, btn_cls1, btn_add2, btn_del2, btn_cls2]); //gr_List1 gr_List2
    $c.gus.cfDisableObjects($p, [ed_mergeRentloanNo, ed_clntNo, ed_clntNm, lc_rentloanClsCd, lc_rentloanShapeCd, ed_addr1, ed_roolNum, ed_estmtBasis, ed_addr1]);

    //부동산담보(건물), 부동산담보(토지/건물공동) 
  } else if (vSearchClsCd == "02" || vSearchClsCd == "05") {
    scwin.isStarted = true;
    $c.gus.cfInitObjects($p, [ed_ancdLpr]);
    ds_List1.modifyRowStatus(ds_List1.getRowPosition(), "R");
    $c.gus.cfEnableObjects($p, [oPldgInfo, btn_add1, btn_del1, btn_cls1, btn_add2, btn_del2, btn_cls2]); //gr_List2, gr_List1
    $c.gus.cfDisableObjects($p, [ed_mergeRentloanNo, ed_clntNo, ed_clntNm, lc_rentloanClsCd, lc_rentloanShapeCd, ed_addr1, ed_ancdLpr, ed_addr1]);

    //그 외
  } else {
    scwin.isStarted = true;
    $c.gus.cfInitObjects($p, [ed_lotNo, ed_roolNum, ed_regAreaM2, ed_regAreaPy, ed_ancdLpr, ed_estmtAmt, ed_estmtBasis]);
    $c.gus.cfEnableObjects($p, [oPldgInfo, btn_add1, btn_del1, btn_cls1]); //gr_List1
    $c.gus.cfDisableObjects($p, [ed_mergeRentloanNo, ed_clntNo, ed_clntNm, lc_rentloanClsCd, lc_rentloanShapeCd, ed_addr1, ed_lotNo, ed_roolNum, ed_regAreaM2, ed_regAreaPy, ed_ancdLpr, ed_estmtAmt, ed_estmtBasis, ed_addr1]); //gr_List2
    scwin.f_deleteDetail(rentloanNo, rentloanSeq, pldgSeq);
  }
  scwin.flag = 0;
};
scwin.lc_pldgClsCd_onchange = async function (info) {
  if (scwin.flag == 0) {
    if (ds_List1.getCellData(ds_List1.getRowPosition(), "pldgClsCd") == "00") {
      let confirm = await $c.win.confirm($p, "담보구분 '없음' 선택 시 데이터가 삭제됩니다. 변경하시겠습니까?");
      if (!confirm) {
        lc_pldgClsCd.setValue(scwin.sPldgClsCd);
        return;
      }
    }
    scwin.f_PldgClsCdChange();
  }
};
scwin.f_deleteDetail = function (rentloanNo, rentloanSeq, pldgSeq) {
  for (let i = ds_List2.getRowCount(); i >= 0; i--) {
    if (ds_List2.getCellData(i, "rentloanNo") == rentloanNo && ds_List2.getCellData(i, "rentloanSeq") == rentloanSeq && ds_List2.getCellData(i, "pldgSeq") == pldgSeq) {
      ds_List2.removeRow(i);
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
  } else if (vRentloanShapeCd == "03" || vRentloanShapeCd == "04") {
    ChainedISNm.setLabel("명도소송현황");
  } else {}
};

//-------------------------------------------------------------------------
// function name : f_Calculate
// function desc : 면적 변경 시
// function Parameter : Obj1 : 면적M2, Obj2 : 면적(평)
//-------------------------------------------------------------------------
scwin.f_Calculate = function () {
  if (ed_regAreaPy.getValue() != "0" || ed_regAreaPy.getValue() == "") {
    ed_regAreaPy.setValue(ed_regAreaM2.getValue() * 0.3025);
  }
};

//-------------------------------------------------------------------------
// function name : f_Calculate2
// function desc : 면적 변경 시
// function Parameter : Obj1 : 면적M2, Obj2 : 면적(평)
//-------------------------------------------------------------------------
scwin.f_Calculate2 = function () {
  if (ed_regAreaM2.getValue() == "0" || ed_regAreaM2.getValue() == "") {
    ed_regAreaM2.setValue(ed_regAreaPy.getValue() * 3.3058);
  }
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 담보정보 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (scwin.sRentloanNo == "" || scwin.sRentloanSeq == "") {
    return;
  }
  dma_search.set("rentloanNo", scwin.sRentloanNo);
  dma_search.set("rentloanSeq", scwin.sRentloanSeq);
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// function name : f_RetrieveDetail
// function desc : 담보설정 조회
// function Parameter : RentloanNo : 계약번호, RentloanSeq : 계약순번, PldgSeq : 담보순번
//-------------------------------------------------------------------------
scwin.f_RetrieveDetail = function (pRentloanNo, pRentloanSeq, pPldgSeq) {
  dma_search.set("rentloanNo", pRentloanNo);
  dma_search.set("rentloanSeq", pRentloanSeq);
  dma_search.set("pldgSeq", pPldgSeq);
  $c.sbm.execute($p, sbm_tr_searchDetail);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let vSearchClsCd = "";
  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    ds_List1.setCellData(i, "rentloanNo", scwin.sRentloanNo);
    ds_List1.setCellData(i, "rentloanSeq", scwin.sRentloanSeq);
    let vSearchClsCd = ds_List1.getCellData(i, "pldgClsCd");
    if (vSearchClsCd == "02" || vSearchClsCd == "05") {
      ds_List1.setCellData(i, "ancdLpr", "0");
    }
    vSearchClsCd = ds_List1.getCellData(i, "pldgClsCd");
    if (vSearchClsCd != "00") {
      let ret = await scwin.f_ValidCheck();
      if (!ret) {
        return;
      }
      let ret2 = await $c.gus.cfValidate($p, [gr_List2]);
      if (!ret2) {
        return;
      }
    }
  }
  if (ds_List1.getModifiedIndex().length == 0 && ds_List2.getModifiedIndex().length == 0 && scwin.list2CountFlag == false) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
    return;
  } else {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      for (let i = 0; i < ds_List1.getRowCount(); i++) {
        let temp = ds_List1.getRowStatus(i);
        ds_List1.setCellData(i, "mergeRentloanNo", ed_mergeRentloanNo.getValue());
        // 로직상 모두 delete 하고 insert 하기 때문에 status 변경해줌
        if (temp != "D") {
          ds_List1.modifyRowStatus(i, "C");
        }
      }
      ds_List2.removeColumnFilterAll();
      for (let i = 0; i < ds_List2.getRowCount(); i++) {
        let temp = ds_List2.getRowStatus(i);
        ds_List2.setCellData(i, "mergeRentloanNo", ed_mergeRentloanNo.getValue());

        // 로직상 모두 delete 하고 insert 하기 때문에 status 변경해줌
        if (temp != "D") {
          ds_List2.modifyRowStatus(i, "C");
        }
      }
      await $c.sbm.execute($p, sbm_tr_save);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_ValidCheck
// function desc : 필수값 체크
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_ValidCheck = async function () {
  let sPldgClsCd = ""; // 관련사항 as is 주석되어있음

  for (let i = 0; i < ds_List1.getRowCount(); i++) {
    sPldgClsCd = ds_List1.getCellData(i, "pldgClsCd");
    if (ds_List1.getCellData(i, "pldgClsCd") == "" || ds_List1.getCellData(i, "pldgClsCd") == null) {
      let temp = i + 1;
      await $c.win.alert($p, "담보내역의 " + temp + "번째 데이터에서 담보구분은(는) 필수 입력 항목입니다.");
      gr_List1.setFocusedCell(i, 0, true);
      lc_pldgClsCd.focus();
      return false;
    }
    if (ds_List1.getCellData(i, "othrPldgCd") == "" || ds_List1.getCellData(i, "othrPldgCd") == null) {
      let temp = i + 1;
      await $c.win.alert($p, "담보내역의 " + temp + "번째 데이터에서 타담보구분은(는) 필수 입력 항목입니다.");
      gr_List1.setFocusedCell(i, 0, false);
      lc_othrPldgCd.focus();
      return false;
    }
    if (ds_List1.getCellData(i, "posnClsCd") == "" || ds_List1.getCellData(i, "posnClsCd") == null) {
      let temp = i + 1;
      await $c.win.alert($p, "담보내역의 " + temp + "번째 데이터에서 소유구분은(는) 필수 입력 항목입니다.");
      gr_List1.setFocusedCell(i, 0, false);
      lc_posnClsCd.focus();
      return false;
    }
  }
  return true;
};
scwin.f_sumSetupAmt = function () {
  let nSumSetupAmt = 0; // 설정누계
  let nLandBldgEstmtAmt = ds_List1.getCellData(ds_List1.getRowPosition(), "landBldgEstmtAmt"); // 토지+건물평가액
  let nPldgCompSetupRt = 0; // 설정비율

  for (i = 0; i < ds_List2.getRowCount(); i++) {
    nSumSetupAmt = Number(nSumSetupAmt) + Number(ds_List2.getCellData(i, "setupAmt")); // 설정금액
    ds_List2.setCellData(i, "setupCumAmt", nSumSetupAmt); // 설정누계금액
    if (nLandBldgEstmtAmt != "" && nLandBldgEstmtAmt != "0") {
      if (ds_List2.getCellData(i, "setupAmt") != "0" && ds_List2.getCellData(i, "setupAmt") != "") {
        nPldgCompSetupRt = Number(nSumSetupAmt) / Number(nLandBldgEstmtAmt) * 100; // 설정비율
      } else {
        nPldgCompSetupRt = 0;
      }
      ds_List2.setCellData(i, "pldgCompSetupRt", nPldgCompSetupRt);
    }
  }
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

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_List1.getRowCount());
  gr_List1.setFocusedCell(0, "pldgClsCd", false);
  ds_List1.setRowPosition(0);
  scwin.position1 = 0;
  if (ds_master.getCellData(ds_master.getRowPosition(), "dcsnYn") == "1") {
    // 확정
    $c.gus.cfEnableObjects($p, []);
    $c.gus.cfDisableObjects($p, [ed_mergeRentloanNo, lc_rentloanClsCd, lc_rentloanShapeCd, ed_clntNo, ed_clntNm, pu_pledge, ed_addr1, oPldgInfo, btn_add1, btn_del1, btn_cls1, btn_add2, btn_del2, btn_cls2, btn_save]); //gr_List1, gr_List2
  } else {
    // 미확정
    $c.gus.cfEnableObjects($p, [oPldgInfo, btn_add1, btn_del1, btn_cls1, btn_add2, btn_del2, btn_cls2, btn_save]); //gr_List1, gr_List2
    $c.gus.cfDisableObjects($p, [ed_mergeRentloanNo, lc_rentloanClsCd, lc_rentloanShapeCd, ed_clntNo, ed_clntNm, pu_pledge, ed_addr1]);
    scwin.f_PldgClsCdChange();
  }
  $p.setTimeout(function () {
    scwin.f_RentloanShapeCdChange();
  }, {
    "delay": 50
  });

  //조회되자마자 첫번째행
  //$c.gus.cfGoPrevPosition(gr_List1, 0);

  if (ds_List1.getRowCount() > 0) {
    scwin.f_RetrieveDetail(ds_List1.getCellData(0, "rentloanNo"), ds_List1.getCellData(0, "rentloanSeq"), ds_List1.getCellData(0, "pldgSeq"));
  } else {
    scwin.f_Reset();
  }
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_master.setRowPosition(0);
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_searchDetail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowIndex = ds_List1.getCellData(ds_List1.getRowPosition(), "pldgSeq");
  ds_List2.setColumnFilter({
    type: 'row',
    colIndex: 'pldgSeq',
    key: rowIndex,
    condition: 'and'
  });
  for (let i = 0; i < ds_List2.getRowCount(); i++) {
    if (ds_List2.getRowCount() > 0) {
      ds_List2.setCellData(i, "pldgSetupSeq", Number(ds_List2.getCellData(i - 1, "pldgSetupSeq")) + 1);
      ds_List2.setCellData(i, "seq", Number(ds_List2.getCellData(i - 1, "pldgSetupSeq")) + 1);
      ds_List2.modifyRowStatus(i, 'R');
    } else {
      ds_List2.setCellData(i, "pldgSetupSeq", Number(ds_List2.getRowCount() + 1));
      ds_List2.setCellData(i, "seq", Number(ds_List2.getRowCount() + 1));
      ds_List2.modifyRowStatus(i, 'R');
    }
  }
  //$c.gus.cfGoPrevPosition(gr_List2, 0);
  gr_List2.setFocusedCell(0, "seq", false);
  totalRows2.setValue(ds_List2.getRowCount());
};

// 서브미션
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_RetrieveRentloan(); // 재조회
};
scwin.gr_List1_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (scwin.isStarted == true) {
    if (ds_List1.getRowCount() > 0) {
      let ret = await $c.gus.cfValidate($p, [gr_List2]);
      if (!ret) {
        $c.gus.cfGoPrevPosition($p, gr_List1, scwin.position1);
        ds_List1.setRowPosition(scwin.position1);
        return;
      } else {
        scwin.position1 = ds_List1.getRowPosition();
        if (scwin.flag == 0) {
          scwin.f_PldgClsCdChange();
        }
      }
      let rowIndex = ds_List1.getCellData(ds_List1.getRowPosition(), "pldgSeq");
      ds_List2.removeColumnFilterAll();
      ds_List2.setColumnFilter({
        type: 'row',
        colIndex: 'pldgSeq',
        key: rowIndex,
        condition: 'and'
      });
      $c.gus.cfGoPrevPosition($p, gr_List2, 0);
    } else {
      scwin.f_Reset();
    }
  }
};
scwin.ed_landBldgEstmtAmt_onviewchange = function (info) {
  if (ds_List2.getRowCount() > 0) {
    let nSumSetupAmt = 0; // 설정누계
    let nLandBldgEstmtAmt = ds_List1.getCellData(ds_List1.getRowPosition(), "landBldgEstmtAmt"); // 토지+건물평가액
    let nPldgCompSetupRt = 0; // 설정비율

    //토지+건물평가액
    for (let i = 0; i < ds_List2.getRowCount(); i++) {
      nSumSetupAmt = nSumSetupAmt + ds_List2.getCellData(i, "setupAmt"); // 설정금액
      ds_List2.setCellData(i, "setupCumAmt", nSumSetupAmt); // 설정누계금액
      if (nLandBldgEstmtAmt != "") {
        if (ds_List2.getCellData(i, "setupAmt") != "0" && ds_List2.getCellData(i, "setupAmt") != "") {
          nPldgCompSetupRt = parseInt(nSumSetupAmt / nLandBldgEstmtAmt * 100); // 설정비율
        } else {
          nPldgCompSetupRt = 0;
        }
        ds_List2.setCellData(i, "pldgCompSetupRt", nPldgCompSetupRt);
      }
    }
  }
};
scwin.btn_zip_onclick = function (e) {
  scwin.f_zipPopUp(ed_zip, ed_addr1, ed_addr2);
};
scwin.gr_List2_onafteredit = function (rowIndex, columnIndex, value) {
  let colId = gr_List2.getColumnID(columnIndex);
  let nSumSetupAmt = 0; // 설정누계
  let nLandBldgEstmtAmt = ds_List1.getCellData(ds_List1.getRowPosition(), "landBldgEstmtAmt"); // 토지+건물평가액
  let nPldgCompSetupRt = 0; // 설정비율

  if (colId == "setupAmt") {
    //토지+건물평가액
    for (let i = 0; i < ds_List2.getRowCount(); i++) {
      nSumSetupAmt = Number(nSumSetupAmt) + Number(ds_List2.getCellData(i, "setupAmt")); // 설정금액
      ds_List2.setCellData(i, "setupCumAmt", nSumSetupAmt); // 설정누계금액
      if (nLandBldgEstmtAmt != "") {
        if (ds_List2.getCellData(i, "setupAmt") != "0" && ds_List2.getCellData(i, "setupAmt") != "") {
          nPldgCompSetupRt = parseInt(nSumSetupAmt / Number(nLandBldgEstmtAmt) * 100); // 설정비율
        } else {
          nPldgCompSetupRt = 0;
        }
        ds_List2.setCellData(i, "pldgCompSetupRt", nPldgCompSetupRt);
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부동산 담보물건 기본정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-red',id:'',label:'담보가 없을경우 담보구분을 "없음"으로 선택한 후 저장하시기 바랍니다.',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'oPldgInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_mergeRentloanNo',style:'',ref:'data:dma_search.mergeRentloanNo',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_clntNo',class:' w80',ref:'data:ds_master.clntNo',objType:'Data',allowChar:'0-9',maxlength:'6'}},{T:1,N:'xf:input',A:{style:'',id:'ed_clntNm',class:'',ref:'data:ds_master.clntNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanClsCd',style:'',submenuSize:'auto',ref:'data:ds_master.rentloanClsCd',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약형태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanShapeCd',style:'',submenuSize:'auto',ref:'data:ds_master.rentloanShapeCd',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'secondTrArea'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약개시일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rentloanStDt',style:'',ref:'data:ds_master.rentloanStDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약종료일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_rentloanEndDt',style:'',ref:'data:ds_master.rentloanEndDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_closeDt',style:'',ref:'data:ds_master.closeDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'담보구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pldgClsCd',style:'',submenuSize:'auto',ref:'data:ds_List1.pldgClsCd',mandatory:'true',title:'담보구분',objType:'data',chooseOptionLabel:'없음','ev:onviewchange':'scwin.lc_pldgClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'타담보구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_othrPldgCd',style:'',submenuSize:'auto',ref:'data:ds_List1.othrPldgCd',mandatory:'true',title:'타담보구분',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_setupDt',style:'',ref:'data:ds_List1.setupDt',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부동산구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_goodsNm',style:'',ref:'data:ds_List1.goodsNm',maxByteLength:'50',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소유구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_posnClsCd',style:'',submenuSize:'auto',ref:'data:ds_List1.posnClsCd',mandatory:'true',title:'소유구분',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'우편번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_zip',placeholder:'',style:'',ref:'data:ds_List1.zip',objType:'data',allowChar:'0-9 ',maxlength:'6'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_zip',style:'',type:'button','ev:onclick':'scwin.btn_zip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_addr1',style:'',ref:'data:ds_List1.addr1',maxByteLength:'100',objType:'key'}},{T:1,N:'xf:input',A:{class:' ',id:'ed_addr2',style:'',ref:'data:ds_List1.addr2',maxByteLength:'100',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건물구조',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_bldgStucNm',style:'',ref:'data:ds_List1.bldgStucNm',maxByteLength:'50',maxlength:'50',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지상층',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_topFloor',textAlign:'right',ref:'data:ds_List1.topFloor',maxlength:'3',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지하층',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_bottomFloor',textAlign:'right',ref:'data:ds_List1.bottomFloor',maxlength:'3',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'준공년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:' cal',id:'ed_buildYy',style:'',ref:'data:ds_List1.buildYy',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_lotNo',style:'',ref:'data:ds_List1.lotNo',maxlength:'50',maxByteLength:'50',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'호실',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_roolNum',style:'',ref:'data:ds_List1.roolNum',objType:'data',maxlength:'4',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'면적(m2)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_regAreaM2',textAlign:'right',ref:'data:ds_List1.regAreaM2',displayFormat:'#,##0',dataType:'number','ev:onblur':'scwin.f_Calculate',maxlength:'11',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'면적(평)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_regAreaPy',textAlign:'right',ref:'data:ds_List1.regAreaPy',displayFormat:'#,##0',dataType:'number','ev:onblur':'scwin.f_Calculate2',maxlength:'11',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공시지가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_ancdLpr',textAlign:'right',ref:'data:ds_List1.ancdLpr',displayFormat:'#,##0',dataType:'number',maxlength:'13',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_estmtAmt',textAlign:'right',ref:'data:ds_List1.estmtAmt',displayFormat:'#,##0',dataType:'number',maxlength:'13',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평가근거',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_estmtBasis',style:'',ref:'data:ds_List1.estmtBasis',maxlength:'50',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'토지+건물평가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_landBldgEstmtAmt',textAlign:'right',ref:'data:ds_List1.landBldgEstmtAmt',displayFormat:'#,##0',dataType:'number',maxlength:'13',objType:'data','ev:onviewchange':'scwin.ed_landBldgEstmtAmt_onviewchange'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예금질권',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_dpsitPledAmt',textAlign:'right',ref:'data:ds_List1.dpsitPledAmt',displayFormat:'#,##0',dataType:'number',maxlength:'13',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보증보험',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_grtInsrAmt',textAlign:'right',ref:'data:ds_List1.grtInsrAmt',displayFormat:'#,##0',dataType:'number',maxlength:'13',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_sprtContNm',style:'',ref:'data:ds_List1.sprtContNm',maxlength:'300',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주변시세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_surMarAmt',textAlign:'right',ref:'data:ds_List1.surMarAmt',displayFormat:'#,##0',dataType:'number',maxlength:'13',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'의견',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_conDeptOpin',style:'',ref:'data:ds_List1.conDeptOpin',maxByteLength:'500'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_List1',gridUpYn:'N',grdDownOpts:'{"fileName" : "부동산 담보물건 기본내역.xlsx", "sheetName" : "부동산 담보물건 기본내역" ,"type" : "1" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_List1',id:'gr_List1',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20',readOnly:'true','ev:oncellclick':'scwin.gr_List1_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계약번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계약순번',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'담보순번',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'담보구분',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'타담보구분',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'설정일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'부동산구분',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'소유구분',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'우편번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'주소',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'상세주소',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'건물구조',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'지상층',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'지하층',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'준공연도',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'지번',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'호실',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'면적(m2)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'면적(평)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'공시지가',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'평가액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'평가근거',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'토지+건물평가액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'예금질권',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'보증보험',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'기타',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'주변시세',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'의견',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgSeq',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'othrPldgCd',inputType:'select',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setupDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'goodsNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zip',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr1',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'addr2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bldgStucNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'topFloor',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bottomFloor',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'buildYy',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lotNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'roolNum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regAreaM2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regAreaPy',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ancdLpr',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'estmtAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'estmtBasis',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'landBldgEstmtAmt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dpsitPledAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grtInsrAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sprtContNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'surMarAmt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'conDeptOpin',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_addRow1',rowDelFunction:'scwin.f_delRow1',cancelFunction:'scwin.f_cancelRow1',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',btnRowAddObj:'btn_add1',btnRowDelObj:'btn_del1',btnCancelObj:'btn_cls1',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_List1',id:'udc_grdBottomBtn1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부동산 담보설정 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_List2',grdDownOpts:'{"fileName" : "부동산담보설정내역.xlsx" ,"type" : "1" , "sheetName" : "부동산담보설정내역"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_List2',id:'gr_List2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:onafteredit':'scwin.gr_List2_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계약번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계약순번',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'담보순번',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'pldg순번',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'순번',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'담보구분',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'담보종류',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'담보대상',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'설정일자',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'채권자',width:'100',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'설정금액',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'설정누계액',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'담보대비</br>설정비율',displayMode:'label',class:'txt-red',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgSeq',inputType:'text',style:'',value:'',width:'100',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgSetupSeq',inputType:'text',style:'',value:'',width:'70',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgClsCd',inputType:'select',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgKnd',inputType:'text',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pldgTr',inputType:'text',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setupDt',inputType:'calendar',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvNm',inputType:'text',style:'',value:'',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',textAlign:'right',id:'setupAmt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',textAlign:'right',id:'setupCumAmt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',displayFormat:'#,##0',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',textAlign:'right',id:'pldgCompSetupRt',value:'',displayMode:'label',dataType:'number',excelCellType:'number',max:'999',displayFormat:'#,##0',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_addRow2',rowDelFunction:'scwin.f_delRow2',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_cancelRow2',btnRowAddObj:'btn_add2',btnRowDelObj:'btn_del2',btnCancelObj:'btn_cls2',rowAddUserAuth:'C',rowDelUserAuth:'D',gridID:'gr_List2',id:'udc_grdBottomBtn2'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_ctrt',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(0)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_pledge',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(1)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'담보평가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_cond',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(2)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약조건'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_examine',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(3)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검토의견 및 참고사항'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'ChainedISNm',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(4)'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'pu_file',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.f_winOpen(5)'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'첨부파일'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_list',style:'',type:'button','ev:onclick':'scwin.cfTabMenuAdd',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'목록'}]}]}]}]}]}]}]}]}]})