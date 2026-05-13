/*amd /ui/cm/bc/rentloan/zz_900_04_01b.xml 62367 8222e2de1c075e67d1066fc6997b61aff89f874e5059c8009cf2da1ce9a195cf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNoSeq',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uppermostBizDomCd',name:'최상위사업영역',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserNm',name:'계약;등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNoSeq',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usePurpsCd',name:'사용;용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'계약;형태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanClsCd',name:'계약;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'승인;상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'개시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStDt',name:'변경;적용일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanTmnDt',name:'해지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsEndDt',name:'실종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'examOpin',name:'담당자 검토의견',dataType:'text'}},{T:1,N:'w2:column',A:{id:'betAdmitExamOpin',name:'중간승인자 검토의견',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitExamOpin',name:'최종승인자 검토의견',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmpOut',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNoSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateStsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emailResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNoSeq',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updateStsCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCnt',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'sysCd'},{T:1,N:'queryId'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizdiv_922_2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'상위코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'코드영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'코드영문명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'필터코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'필터코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_bizdiv_923_2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'그룹코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCd',name:'상위코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCdNm',name:'상위코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNm',name:'코드영문명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNmAbbr',name:'코드명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNmAbbr',name:'코드영문명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'정렬번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'코드설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'필터코드1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'필터코드2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'필터코드3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_bizdiv_922_1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'그룹코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCd',name:'상위코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCdNm',name:'상위코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNm',name:'코드영문명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNmAbbr',name:'코드명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNmAbbr',name:'코드영문명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'정렬번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'코드설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'필터코드1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'필터코드2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'필터코드3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_bizdiv_923_1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'그룹코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCd',name:'상위코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCdNm',name:'상위코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'코드명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNm',name:'코드영문명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNmAbbr',name:'코드명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNmAbbr',name:'코드영문명약어'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'정렬번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'코드설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'필터코드1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'필터코드2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'필터코드3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.rentloan.RetrieveRentLoanCtrtAdmitProcCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_view_cond","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.rentloan.SaveRentLoanCtrtAdmitProcCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_tmpOut","key":"IN_DS1"},{"id":"ds_emailResult","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_opinsave',action:'/cm.bc.rentloan.RegistRentLoanCtrtMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_opinsave_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_bizdiv_922_2',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bizdiv_922_2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizdiv_922_2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizdiv_923_2_submitdone','ev:submiterror':'',id:'sbm_bizdiv_923_2',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',target:'data:json,{"id":"ds_bizdiv_923_2","key":"GAUCE"}',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizdiv_922_1_submitdone','ev:submiterror':'',id:'sbm_bizdiv_922_1',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',style:'',target:'data:json,{"id":"ds_bizdiv_922_1","key":"GAUCE"}'}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_bizdiv_923_1_submitdone','ev:submiterror':'',id:'sbm_bizdiv_923_1',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',style:'',target:'data:json,{"id":"ds_bizdiv_923_1","key":"GAUCE"}'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 승인처리
 * 메뉴경로 : 공통/총무업무/임대차관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_04_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-28
 * 수정이력  :
 *    - 2025-11-28      정승혜    최초작성
 *    - 2026-03-01      정승혜    기타수정
 * 메모 : 
 * f_showBizDom 없애기로 협의함 로직 남겨놓음
 * 조회조건 : 
 * 처리후 원복
 * UPDATE TB_ZZ900 SET APPRV_STS_CD = '02' WHERE RENTLOAN_NO = 'A20200109001' AND   RENTLOAN_SEQ= '000';
 */
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.cfValue = "2";
scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
scwin.memJson = $c.data.getMemInfo($p);
scwin.empNo = scwin.memJson.empNo;
scwin.userId = scwin.memJson.userId;
scwin.sysAdminYn = scwin.memJson.sysAdminYn; // 0
//임시데이터
//scwin.sysAdminYn = 1;

scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.params = "";
scwin.rentloanNoOut = "";
scwin.apprvStsCdOut = "";
scwin.regIDOut = "";
scwin.uppermostBizdomcd = ""; //최상위사업영역

scwin.betAdmitNo = ""; //중간승인자
scwin.finalAdmitNo = ""; //최종승인자
scwin.param1 = "";
scwin.count_922_2 = 0;
scwin.count_923_2 = 0;
scwin.count_922_1 = 0;
scwin.count_923_1 = 0;
scwin.vApprvSts = "";

// hidden
scwin.txt_uppermostBizDomCd = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  scwin.f_createHeader();
  const codeOptions = [{
    grpCd: "ZZ913",
    compID: "gr_ctrt:usePurpsCd"
  }, {
    grpCd: "ZZ911",
    compID: "gr_ctrt:rentloanShapeCd"
  }, {
    grpCd: "ZZ910",
    compID: "gr_ctrt:rentloanClsCd"
  }, {
    grpCd: "ZZ021",
    compID: "lc_apprvStsCd, gr_ctrt:apprvStsCd",
    opt: {
      'range': '2,1'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.params = $c.data.getParameter($p);
  if (scwin.params["rentloanNoOut"] == null) {
    scwin.rentloanNoOut = "";
  } else {
    scwin.rentloanNoOut = scwin.params["rentloanNoOut"];
  }
  if (scwin.params["apprvStsCdOut"] == null) {
    scwin.apprvStsCdOut = "";
  } else {
    scwin.apprvStsCdOut = scwin.params["apprvStsCdOut"];
  }
  if (scwin.params["regIDOut"] == null) {
    scwin.regIDOut = "";
  } else {
    scwin.regIDOut = scwin.params["regIDOut"];
  }
  tr_examOpin.hide();
  tr_betAdmitExamOpin.hide();
  tr_finalAdmitExamOpin.hide();
  $c.gus.cfDisableObjects($p, [btn_reCtrt, btn_finalCtrt, btn_ctrtChg]);

  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();

  //물류사업,여객사업만 나오게 세팅
  //lc_uppermostBizdomcd.setVisibleRowNum(2);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {};
scwin.ondataload = function () {
  scwin.f_bizdiv();
};
scwin.f_bizdiv = function () {
  scwin.f_bizdiv_922_2_Retrieve();
};
scwin.f_bizdiv_after = async function () {
  if (ds_uppermostBizdom.getCellData(0, "col1") != "N/A") {
    scwin.uppermostBizdomcd = ds_uppermostBizdom.getCellData(0, "col1");
    if (ds_uppermostBizdom.getCellData(0, "col1") != "N/A") {
      let uppermostBizdomcd = ds_uppermostBizdom.getCellData(0, "col1");
      switch (uppermostBizdomcd) {
        case "200":
          /* 여객사업 */
          scwin.betAdmitNo = scwin.count_922_2;
          scwin.finalAdmitNo = scwin.count_923_2;
          break;
        case "000": /* 지원사업 */
        case "252": /* 물류사업 */
        default:
          scwin.betAdmitNo = scwin.count_922_1;
          scwin.finalAdmitNo = scwin.count_923_1;
          break;
      }
    } else {
      scwin.betAdmitNo = scwin.count_922_1;
      scwin.finalAdmitNo = scwin.count_923_1;
    }
  }

  // 관리자일 경우
  if (scwin.sysAdminYn == 1) {
    tr_examOpin.show();
    tr_betAdmitExamOpin.show();
    tr_finalAdmitExamOpin.show();
    $c.gus.cfEnableObjects($p, [btn_reCtrt, btn_finalCtrt, btn_ctrtChg]);
  }
  if (scwin.finalAdmitNo > 0) {
    // 최종 승인자일 경우
    tr_examOpin.show();
    tr_betAdmitExamOpin.show();
    tr_finalAdmitExamOpin.show();
    $c.gus.cfEnableObjects($p, [btn_finalCtrt, btn_ctrtChg]);
    lc_apprvStsCd.setValue("04");
  } else {
    lc_apprvStsCd.setValue("01");
  }
  if (scwin.betAdmitNo > 0) {
    // 중간 승인자일 경우
    tr_examOpin.show();
    tr_betAdmitExamOpin.show();
    $c.gus.cfEnableObjects($p, [btn_reCtrt, btn_ctrtChg]);
    lc_apprvStsCd.setValue("02");
  } else {
    lc_apprvStsCd.setValue("01");
  }
  if (scwin.rentloanNoOut != "") {
    ed_rentLoanNo.setValue(scwin.rentloanNoOut);
  }
  if (scwin.apprvStsCdOut == '1') {
    lc_apprvStsCd.setSelectedIndex(2);
  } else if (scwin.apprvStsCdOut == '2') {
    lc_apprvStsCd.setSelectedIndex(4);
  }
  if (scwin.uppermostBizdomcd == "200") {
    lc_uppermostBizdomcd.setSelectedIndex(1);
  } else {
    lc_uppermostBizdomcd.setSelectedIndex(0);
  }
  $c.gus.cfDisableObjects($p, [ed_clntNo, ed_clntNm, ed_acctDeptCd, ed_acctDeptNm, ed_empNo, ed_empNm]);
  await scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_rentLoanNo.setValue("");
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
  lc_apprvStsCd.setSelectedIndex(0);
  scwin.txt_uppermostBizDomCd.setValue("");
};
scwin.f_FieldClear2 = function () {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};
scwin.f_FieldClear3 = function () {
  $c.gus.cfInitObjects($p, [ed_empNo, ed_empNm]);
};

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
scwin.dataSetDebug = function () {};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// DataSet Header 정의                                                                                                                                                                                                                                                                     
//-------------------------------------------------------------------------    
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 임시 DataSet 헤더설정
//-------------------------------------------------------------------------
scwin.f_createTmpHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//------------------------------------------------------------------------- 
scwin.f_Retrieve = function () {
  //let biz = dma_view_cond.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "0") {
    biz = "252";
  } else {
    biz = "200";
  }
  dma_view_cond.set("uppermostBizDomCd", biz);
  let rentLoanNo = dma_view_cond.get("rentloanNoSeq");
  dma_view_cond.set("rentloanNoSeq", rentLoanNo.replaceAll("-", ""));
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 저장(승인처리)
//-------------------------------------------------------------------------  
scwin.f_save = async function (apprvSts) {
  let count = 0;
  let vCountRow = ds_out.getRowCount();
  let vChkSts = 0;
  let vASts = "";
  let vChkSave = false;
  scwin.f_createTmpHeader();
  for (let i = 0; i < vCountRow; i++) {
    let chkYn = ds_out.getCellData(i, "chk");
    if (chkYn == 1) {
      count = count + 1;
      let row = ds_tmpOut.insertRow();
      ds_tmpOut.setCellData(row, "chk", ds_out.getCellData(i, "chk"));
      ds_tmpOut.setCellData(row, "rentloanNo", ds_out.getCellData(i, "rentloanNo"));
      if (ds_out.getCellData(i, "rentloanSeq") == "") {
        ds_tmpOut.setCellData(row, "rentloanSeq", ds_out.getCellData(i, "rentloanNoSeq").substring(12, 15));
      } else {
        ds_tmpOut.setCellData(row, "rentloanSeq", ds_out.getCellData(i, "rentloanSeq"));
      }
      ds_tmpOut.setCellData(row, "rentloanNoSeq", ds_out.getCellData(i, "rentloanNoSeq"));
      ds_tmpOut.setCellData(row, "apprvStsCd", ds_out.getCellData(i, "apprvStsCd"));
      ds_tmpOut.setCellData(row, "updateStsCd", apprvSts);
      ds_tmpOut.setCellData(row, "examOpin", ds_out.getCellData(i, "examOpin"));
      ds_tmpOut.setCellData(row, "betAdmitExamOpin", ds_out.getCellData(i, "betAdmitExamOpin"));
      ds_tmpOut.setCellData(row, "finalAdmitExamOpin", ds_out.getCellData(i, "finalAdmitExamOpin"));
    }
  }
  let vCountRow2 = ds_tmpOut.getRowCount();
  for (let i = 0; i < vCountRow2; i++) {
    vASts = ds_tmpOut.getCellData(i, "apprvStsCd");
    if (apprvSts == '02') {
      //상신을 클릭했을 경우
      if (vASts == '01' || vASts == '03') {
        vChkSave = true;
      } else {
        await $c.win.alert($p, "대기 또는 반려 상태인 계약만 상신할 수 있습니다.");
        vChkSave = false;
        ds_tmpOut.removeAll();
        return false;
      }
      scwin.vApprvSts = "02";
    } else if (apprvSts == '03') {
      //반려를 클릭했을 경우
      if (vASts == '02' || vASts == '04') {
        vChkSave = true;
      } else {
        await $c.win.alert($p, "상신 또는 중간승인 상태인 계약만 반려할 수 있습니다.");
        vChkSave = false;
        ds_tmpOut.removeAll();
        return false;
      }
      scwin.vApprvSts = "03";
    } else if (apprvSts == '04') {
      //중간승인을 클릭했을 경우
      if (vASts == '02') {
        vChkSave = true;
      } else {
        await $c.win.alert($p, "상신 상태인 계약만 중간승인할 수 있습니다.");
        vChkSave = false;
        ds_tmpOut.removeAll();
        return false;
      }
      scwin.vApprvSts = "04";
    } else if (apprvSts == '05') {
      //승인을 클릭했을 경우
      if (vASts == '04') {
        vChkSave = true;
      } else {
        await $c.win.alert($p, "중간승인 상태인 계약만 승인할 수 있습니다.");
        vChkSave = false;
        ds_tmpOut.removeAll();
        return false;
      }
      scwin.vApprvSts = "05";
    }
  }

  // 승인저장 
  if (count < 1) {
    await $c.win.alert($p, "선택한 데이타가 없습니다.");
    return false;
  } else {
    if (vChkSave) {
      if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
        await $c.sbm.execute($p, sbm_tr_save);
      } else {
        ds_tmpOut.removeAll();
      }
    }
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (inObj == "ed_clntNm") {
    ed_clntNo.setValue("");
    scwin.f_openCommonPopUp(disGubun, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
  } else {
    ed_clntNm.setValue("");
    scwin.f_openCommonPopUp(disGubun, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 계약거래처
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

// 계약거래처
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
  }
};

//-------------------------------------------------------------------------
//      checkBox
//-------------------------------------------------------------------------  
scwin.f_chkAll = function () {};
scwin.f_Save = async function () {
  if (ds_out.getModifiedIndex().length > 0 == false) {
    await $c.win.alert($p, "변경된 데이타가 없습니다.");
    return;
  } else {
    for (let i = 0; i < ds_out.getRowCount(); i++) {
      if (ds_out.getCellData(i, "rentloanSeq") == "") {
        ds_out.setCellData(i, "rentloanSeq", ds_out.getCellData(i, "rentloanNoSeq").substring(12, 15));
      }
    }
  }
  if (await $c.win.confirm($p, "승인자 의견을 저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_tr_opinsave);
  }
};

//-------------------------------------------------------------------------
// function name : f_SearchPopUp
// function desc : 조회 팝업
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SearchPopUp = function (flag, check, isCdYn) {
  let param = "";
  switch (flag) {
    case '1':
      // 부서
      udc_acctDeptCdInfo7.cfCommonPopUp(scwin.udc_acctDeptCdInfo7_callBackFunc, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 사번
      udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, ed_empNo.getValue(), ed_empNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// 귀속부서
scwin.udc_acctDeptCdInfo7_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};

// 계약등록자
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'F');
};
scwin.udc_acctDeptCdInfo7_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  }
};
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_empNo.setValue(rtnList[0]);
    ed_empNm.setValue(rtnList[1]);
  }
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strNm == "ed_acctDeptNm") {
    ed_acctDeptNm.setValue("");
    if (ed_acctDeptCd.getValue().trim() != "") {
      scwin.f_SearchPopUp(flag, 'T');
    }
  } else if (strNm == "ed_empNm") {
    ed_empNm.setValue("");
    if (ed_empNo.getValue().trim() != "") {
      scwin.f_SearchPopUp(flag, 'T');
    }
  }
};
scwin.f_resultPopEd = function () {};
scwin.f_setMode = function (row) {
  // 관리자일 경우
  if (scwin.sysAdminYn == 1) {
    if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "01") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "02") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "03") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "04") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "05") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    }
  } else if (scwin.betAdmitNo > 0 && scwin.finalAdmitNo > 0) {
    // 한세희과장일 경우
    if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "01") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_finalAdmitExamOpin]);
      $c.gus.cfEnableObjects($p, [txt_betAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "02") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_finalAdmitExamOpin]);
      $c.gus.cfEnableObjects($p, [txt_betAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "03") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "04") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      $c.gus.cfEnableObjects($p, [txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "05") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    }
  } else if (scwin.finalAdmitNo > 0) {
    // 최종 승인자일 경우
    if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "01") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "02") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "03") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "04") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin]);
      $c.gus.cfEnableObjects($p, [txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "05") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    }
  } else if (scwin.betAdmitNo > 0) {
    // 중간 승인자일 경우
    if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "01") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_finalAdmitExamOpin]);
      $c.gus.cfEnableObjects($p, [txt_betAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "02") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_finalAdmitExamOpin]);
      $c.gus.cfEnableObjects($p, [txt_betAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "03") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "04") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    } else if (ds_out.getCellData(ds_out.getRowPosition(), "apprvStsCd") == "05") {
      $c.gus.cfDisableObjects($p, [txt_examOpin, txt_betAdmitExamOpin, txt_finalAdmitExamOpin]);
      ds_tmpOut.removeAll();
    }
  }
};

//그리드의 숨김속성 타이틀 노출이벤트
scwin.f_showBizDom = function () {
  let doc = JSON.parse(gr_ctrt.getCurrentGridStyle());
  let header = doc.E.find(e => e.N === "w2:header");
  header.E.forEach(row => {
    row.E.forEach(col => {
      if (col.A.id === "column55") {
        if (col.A.hidden == "true") {
          col.A.hidden = "false";
        } else {
          col.A.hidden = "true";
        }
      }
    });
  });
  gr_ctrt.setGridStyle(doc);
};

//-------------------------------------------------------------------------
// 이메일에서 계약번호 클릭하는 경우
//-------------------------------------------------------------------------  	
scwin.f_clickRentLoanNoOnEmail = function () {
  let rentloanSeq_p = ds_out.getCellData(ds_out.getRowPosition(), "rentloanSeq");
  if (rentloanSeq_p == "" || rentloanSeq_p == undefined) {
    rentloanSeq_p = rentloanNoSeq.substring(12, 15);
  }
  let data = {
    mode: "MOD",
    cf: "2",
    popYn: "Y",
    rentloanNo: ds_out.getCellData(ds_out.getRowPosition(), "rentloanNo"),
    rentloanSeq: rentloanSeq_p
  };
  let opt = {};
  opt.width = "1010";
  opt.height = "1000";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  opt.popupName = "계약기본정보";
  $c.win.openPopup($p, "/ui/cm/bc/rentloan/zz_900_01_02b.xml", opt, data);
};

// 엑셀다운 2+4+8+16
scwin.cfGridToExcel = function () {
  const options = {
    fileName: "계약목록.xlsx",
    sheetName: "계약목록",
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_ctrt, options);
};

// value={decode(rentloanClsCd,"02",rsltsStDt,"")}
scwin.rsltsStDtDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  let tempRentloanClsCd = ds_out.getCellData(rowIndex, "rentloanClsCd");
  if (tempRentloanClsCd == "02") {
    return data;
  } else {
    return "";
  }
};
scwin.gr_ctrt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_out.getRowCount() > 0) {
    scwin.f_setMode(rowIndex);
  }
};
scwin.gr_ctrt_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  let rentloanNo = ds_out.getCellData(rowIndex, "rentloanNo");
  let rentloanSeq = ds_out.getCellData(rowIndex, "rentloanSeq");
  let rentloanNoSeq = ds_out.getCellData(rowIndex, "rentloanNoSeq");
  if (rentloanSeq == "" || rentloanSeq == undefined) {
    rentloanSeq = rentloanNoSeq.substring(12, 15);
  }
  if (scwin.rentloanNoOut != "") {
    await scwin.f_clickRentLoanNoOnEmail();
  } else {
    await scwin.cfTabMenuAdd(scwin.strBasSdId + "?mode=MOD&cf=2&rentloanNo=" + rentloanNo + "&rentloanSeq=" + rentloanSeq, "계약기본정보");
  }
};
scwin.cfTabMenuAdd = function (url, name) {
  let sURL = url.split("?")[0];
  let dataString = url.split("?")[1];
  let data = {};
  let rentloanNo = "";
  let rentloanSeq = "";
  if (dataString) {
    dataString.split("&").forEach(function (param) {
      let keyValue = param.split("=");
      let key = keyValue[0];
      let value = keyValue[1];
      data[key] = value;
      if (key == "rentloanNo") {
        rentloanNo = value;
      } else if (key == "rentloanSeq") {
        rentloanSeq = value;
      }
    });
  }
  let rentloan = rentloanNo + rentloanSeq;
  $c.win.openMenu($p, name, sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, "") + ".jsp", data, {
    menuCode: rentloan,
    menuCode2: "new"
  });
  //$c.win.openMenu(sName, sURL,sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g,""));
};
scwin.udc_clntList_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp("ed_clntNm", "ed_clntNo", 1, false);
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp("ed_clntNo", "ed_clntNm", 1);
};
scwin.udc_acctDeptCdInfo7_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd("ed_acctDeptCd", "ed_acctDeptNm", '1');
};
scwin.udc_acEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd("ed_empNo", "ed_empNm", '2');
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  gr_ctrt.setFocusedCell(0, 0, false);
  if (ds_out.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_003, "조회결과"));
  }

  //Color={Decode(apprvStsCd,"01","red","03","red","black")}
  for (let i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "apprvStsCd") == "01" || ds_out.getCellData(i, "apprvStsCd") == "03") {
      gr_ctrt.setCellStyle(i, "apprvStsCd", "color", "red");
    } else {
      gr_ctrt.setCellStyle(i, "apprvStsCd", "color", "black");
    }
  }

  //let biz = dma_view_cond.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "252") {
    biz = "0";
  } else {
    biz = "1";
  }
  dma_view_cond.set("uppermostBizDomCd", biz);
  scwin.f_setMode(1);
};

// 서브미션
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (scwin.vApprvSts == '03') {
    if (ds_emailResult.getCellData(0, "sendCnt") == 0) {
      await $c.gus.cfAlertMsg($p, "담당자에게 반려 이메일 전송을 실패하였습니다.[수신자 메일주소 없음]");
    } else {
      await $c.gus.cfAlertMsg($p, "담당자에게 반려 이메일 전송을 성공하였습니다.");
    }
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_opinsave_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

// 최상위사업영역 서브미션
scwin.sbm_ds_uppermostBizdom_submitdone = function (e) {
  if (ds_uppermostBizdom.getCellData(0, "col1") != "" && ds_uppermostBizdom.getCellData(0, "col1") != null) {
    scwin.uppermostBizdomcd = ds_uppermostBizdom.getCellData(0, "col1");
  } else {
    scwin.uppermostBizdomcd = "252";
  }
  if (scwin.uppermostBizdomcd == "200") {
    lc_uppermostBizdomcd.setValue(1);
  } else {
    lc_uppermostBizdomcd.setValue(0);
  }
};
scwin.f_uppermostBizdom = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};
scwin.f_bizdiv_922_2_Retrieve = function () {
  let condition = "?grpCd=ZZ922&cd=&cdNm=&fltrCd1=2";
  sbm_bizdiv_922_2.action = "/cm.zz.RetrieveCodeCMD.do" + condition;
  $c.sbm.execute($p, sbm_bizdiv_922_2);
};

// 서브미션
scwin.sbm_bizdiv_922_2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  for (let i = 0; i < ds_bizdiv_922_2.getTotalRow(); i++) {
    let bizdiv = ds_bizdiv_922_2.getCellData(i, "cdNm");
    if (scwin.empNo == bizdiv) {
      scwin.count_922_2++;
    }
  }
  scwin.f_bizdiv_923_2_Retrieve();
};
scwin.f_bizdiv_923_2_Retrieve = function () {
  let condition = "?grpCd=ZZ923&cd=&cdNm=&fltrCd1=2";
  sbm_bizdiv_923_2.action = "/cm.zz.RetrieveCodeCMD.do" + condition;
  $c.sbm.execute($p, sbm_bizdiv_923_2);
};

// 서브미션
scwin.sbm_bizdiv_923_2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  for (let i = 0; i < ds_bizdiv_923_2.getTotalRow(); i++) {
    let bizdiv = ds_bizdiv_923_2.getCellData(i, "cdNm");
    if (scwin.empNo == bizdiv) {
      scwin.count_923_2++;
    }
  }
  scwin.f_bizdiv_922_1_Retrieve();
};
scwin.f_bizdiv_922_1_Retrieve = function () {
  let condition = "?grpCd=ZZ922&cd=&cdNm=&fltrCd1=1";
  sbm_bizdiv_922_1.action = "/cm.zz.RetrieveCodeCMD.do" + condition;
  $c.sbm.execute($p, sbm_bizdiv_922_1);
};

// 서브미션
scwin.sbm_bizdiv_922_1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  for (let i = 0; i < ds_bizdiv_922_1.getTotalRow(); i++) {
    let bizdiv = ds_bizdiv_922_1.getCellData(i, "cdNm");
    if (scwin.empNo == bizdiv) {
      scwin.count_922_1++;
    }
  }
  scwin.f_bizdiv_923_1_Retrieve();
};
scwin.f_bizdiv_923_1_Retrieve = function () {
  let condition = "?grpCd=ZZ923&cd=&cdNm=&fltrCd1=1";
  sbm_bizdiv_923_1.action = "/cm.zz.RetrieveCodeCMD.do" + condition;
  $c.sbm.execute($p, sbm_bizdiv_923_1);
};

// 서브미션
scwin.sbm_bizdiv_923_1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  for (let i = 0; i < ds_bizdiv_923_1.getTotalRow(); i++) {
    let bizdiv = ds_bizdiv_923_1.getCellData(i, "cdNm");
    if (scwin.empNo == bizdiv) {
      scwin.count_923_1++;
    }
  }
  scwin.f_bizdiv_after();
};
scwin.lc_uppermostBizdomcd_onchange = function (info) {
  if (lc_uppermostBizdomcd.getValue() == 0) {
    dma_view_cond.set("uppermostBizDomCd", 0);
  } else if (lc_uppermostBizdomcd.getValue() == 1) {
    dma_view_cond.set("uppermostBizDomCd", 1);
  } else if (lc_uppermostBizdomcd.getValue() == 252) {
    dma_view_cond.set("uppermostBizDomCd", 252);
  } else if (lc_uppermostBizdomcd.getValue() == 200) {
    dma_view_cond.set("uppermostBizDomCd", 200);
  }
};

// ed_rentloanNo 계약번호 format
scwin.f_rentloan_keyup = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }

  // 3️ 나머지 글자는 숫자만 남김
  let rest = val.substring(1).replace(/[^0-9]/g, '');

  // 4️ 12자리 넘으면 '-' 추가
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }

  // 5️ 전체 조합 및 길이 제한
  let formatted = (first + rest).substring(0, 16);

  // 6️ 결과 반영
  input.value = formatted;
};

// ed_rentloanNo 계약번호 format
scwin.f_rentloan_click = function (e) {
  let input = e.target;
  let val = input.value;

  // 1️ 아무것도 없으면 종료
  if (!val) return;

  // 2️ 첫 글자는 영문만 허용, 소문자면 대문자로 자동변환
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }

  // 3️ 나머지 글자는 숫자만 남김
  let rest = val.substring(1).replace(/[^0-9]/g, '');

  // 4️ 12자리 넘으면 '-' 추가
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }

  // 5️ 전체 조합 및 길이 제한
  let formatted = (first + rest).substring(0, 16);

  // 6️ 결과 반영
  input.value = formatted;
};

// ed_rentLoanNo 계약번호 format
scwin.f_displayFm = function (e) {
  let val = e;
  let first = val.charAt(0).toUpperCase();
  if (!/[A-Z]/.test(first)) {
    // 첫 글자가 영문이 아니면 제거
    first = '';
  }
  let rest = val.substring(1).replace(/[^0-9]/g, '');
  if (rest.length > 11) {
    rest = rest.substring(0, 11) + '-' + rest.substring(11, 15);
  }
  let formatted = (first + rest).substring(0, 16);
  return formatted;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rentLoanNo',style:'width: 230px;',ref:'data:dma_view_cond.rentloanNoSeq',objType:'key','ev:onclick':'scwin.f_rentloan_click(event)','ev:onkeyup':'scwin.f_rentloan_keyup(event)',displayFormatter:'scwin.f_displayFm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'',UpperFlagCode:'0',refDataCollection:'dma_view_cond',code:'clntNo',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntList_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvStsCd',style:'',submenuSize:'auto',ref:'data:dma_view_cond.apprvStsCd',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo7',codeId:'ed_acctDeptCd',popupID:'',popupTitle:'',nameId:'ed_acctDeptNm',style:'',maxlengthCode:'5',allowCharCode:'0-9',refDataCollection:'dma_view_cond',code:'acctDeptCd',id:'udc_acctDeptCdInfo7','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',btnId:'btn_acctDeptCd'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약등록자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_empNo',selectID:'retrieveAcEmpInfo',popupID:'',popupTitle:'',nameId:'ed_empNm',style:'',maxlengthCode:'6',allowCharCode:'0-9',code:'empNo',refDataCollection:'dma_view_cond',id:'udc_acEmpInfo','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data',btnId:'btn_mgntEmpNo'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_uppermostBizdomcd',style:'',submenuSize:'auto',ref:'','ev:onchange':'scwin.lc_uppermostBizdomcd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'계약목록 ',class:'tit'}}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_showBizDom',style:';visibility:hidden;',id:'trigger2',type:'button',class:'btn'}},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',gridID:'gr_ctrt',gridDownFn:'scwin.cfGridToExcel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_ctrt_oncellclick',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_out',style:'',readOnly:'true',id:'gr_ctrt',visibleRowNum:'14','ev:oncelldblclick':'scwin.gr_ctrt_oncelldblclick',class:'wq_gvw',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'50',inputType:'checkbox',style:'',id:'column1',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column17',value:'계약</br>등록자명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column15',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column13',value:'계약순번',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column11',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column9',value:'거래처</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column3',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column5',value:'귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column7',value:'사용</br>용도',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column19',value:'계약</br>형태',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column20',value:'계약</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column27',value:'승인</br>상태',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'8',width:'880',inputType:'text',style:'',id:'column25',value:'계약일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column55',value:'사업영역',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'개시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'변경</br>적용일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'종료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'해지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'실종료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column44',value:'담당자 검토의견',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column47',value:'중간승인자 검토의견',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column65',value:'최종승인자 검토의견',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regUserNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloanNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloaSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',displayFormat:'############-###',inputType:'text',style:';color:blue;',id:'rentloanNoSeq',value:'',class:'underline',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'usePurpsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'rentloanShapeCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'rentloanClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'apprvStsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',displayFormat:'####/##/##',inputType:'text',style:'',id:'rentloanStDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{customFormatter:'scwin.rsltsStDtDisplayFm',width:'120',displayFormat:'####/##/##',inputType:'text',style:'color:blue;',id:'rsltsStDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',displayFormat:'####/##/##',inputType:'text',style:'',id:'rentloanEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',displayFormat:'####/##/##',inputType:'text',style:'color:red;',id:'rentloanTmnDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rsltsEndDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'examOpin',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'betAdmitExamOpin',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'finalAdmitExamOpin',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bizDomCd',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'tr_examOpin',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'담당자 검토의견 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txt_examOpin',ref:'data:ds_out.examOpin',style:'min-height:150px;'}}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'tr_betAdmitExamOpin',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'중간승인자 검토의견 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:textarea',A:{class:'form-control',id:'txt_betAdmitExamOpin',ref:'data:ds_out.betAdmitExamOpin',style:'min-height:150px;'}}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'tr_finalAdmitExamOpin',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'최종승인자 검토의견 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:textarea',A:{class:'form-control',id:'txt_finalAdmitExamOpin',ref:'data:ds_out.finalAdmitExamOpin',style:'min-height:150px;'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검토의견저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtNew',style:'',type:'button','ev:onclick':'scwin.f_save(\'02\')',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상신'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtChg',style:'',type:'button','ev:onclick':'scwin.f_save(\'03\')',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반려'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_reCtrt',style:'',type:'button','ev:onclick':'scwin.f_save(\'04\')',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중간승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_finalCtrt',style:'',type:'button','ev:onclick':'scwin.f_save(\'05\')',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]}]}]}]}]}]}]}]}]})