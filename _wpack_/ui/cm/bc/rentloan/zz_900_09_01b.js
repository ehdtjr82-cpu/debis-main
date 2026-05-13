/*amd /ui/cm/bc/rentloan/zz_900_09_01b.xml 53109 cb416748b61e6cafc6c5bd0d76e9431d765632895ffdbb7766a1761afb9682e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'procYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mergeRentloanNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanShapeCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'name6',dataType:'number'}},{T:1,N:'w2:key',A:{id:'uppermostBizDomCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchSlip'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'procYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCollMoneyPay'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'procYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'procYm',name:'정산년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'최초;계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mergeRentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'계약;형태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자;등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속;부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserId',name:'계약;사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserNm',name:'계약;등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayPlanAmt',name:'지급/청구;예정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'전표;차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'전표;대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'전표;부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suspinitAmt',name:'가수금;반제금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySlipAmt',name:'지급/수금;예정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySellAmt',name:'수금/지급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayUnSellAmt',name:'미수금/;미지급금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'procYm',name:'정산년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBilgClsCd',name:'지급/;청구구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'청구/;정산구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayPlanAmt',name:'지급/청구;예정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drAmt',name:'전표;차변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crAmt',name:'전표;대변금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'전표;부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suspinitAmt',name:'가수금;반제금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySlipAmt',name:'지급/수금;예정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySellAmt',name:'수금/지급금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'procYm',name:'정산년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySlipNo',name:'수금/지급;전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt',name:'입금/지급;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPaySellAmt',name:'수금/지급금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search_sbm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'procYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mergeRentloanNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanShapeCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntEmpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uppermostBizDomCd',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/cm.bc.rentloan.RetreiveRentLoanResultsContentsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_list","key":"OUT_DS1"},{"id":"dma_search_sbm","key":"IN_DS1"}]',target:'data:json,{"id":"ds_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_searchSlipList',action:'/cm.bc.rentloan.RetreiveRentLoanResultsContentsSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchSlip","key":"IN_DS1"},{"id":"ds_list2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_list2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_tr_searchSlipList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_searchCollMoneyPayList',action:'/cm.bc.rentloan.RetreiveRentLoanResultsContentsCollMoneyPayListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchCollMoneyPay","key":"IN_DS1"},{"id":"ds_list3","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_list3","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_tr_searchCollMoneyPayList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 실적 조회
 * 메뉴경로 : 공통/총무업무/임대차관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_09_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-30
 * 수정이력  :
 *    - 2025-10-30      정승혜    최초작성
 *    - 2026-03-03      정승혜    기타수정
 * 메모 : 
 * 조회조건 - 정산년월:2020/12,2019/01 귀속부서:공란
 * cfShowSlipInfo -> fi_201_04_02p
 */
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.regId = scwin.memJson.userId;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님 

scwin.uppermostBizdomcd = ""; //최상위사업영역

//hidden
scwin.txt_uppermostBizDomCd = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("zz_900_09_01b_pgmId : " + $c.data.getParameter($p, "menuInfo").pgmId);
  const codeOptions = [{
    grpCd: "ZZ911",
    compID: "lc_rentloanShapeCd,gr_list:rentloanShapeCd"
  }, {
    grpCd: "ZZ927",
    compID: "gr_list2:payBilgClsCd"
  }, {
    grpCd: "ZZ918",
    compID: "gr_list2:collMoneyPayClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();
  scwin.f_HeaderCreate();
  scwin.f_FieldClear();
  ed_acctDeptCd.setValue(scwin.memJson.acctDeptCd);
  ed_acctDeptNm.setValue(scwin.memJson.acctDeptNm);
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
// function desc : 조회 필드 Clear
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetSrchDefault();
};
scwin.f_FieldClear2 = function (e) {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};
scwin.f_FieldClear3 = function (e) {
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, ed_mgntEmpNm]);
};

//-------------------------------------------------------------------------
// function name : f_SetSrchDefault
// function desc : 조회 기본값 설정
// function Parameter : null 
//-------------------------------------------------------------------------

scwin.f_SetSrchDefault = function () {
  ed_procYm.setValue(scwin.strCurDate.substring(0, 6));
  ed_procYm.focus();
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
      udc_acEmpInfo.cfCommonPopUp(scwin.udc_acEmpInfo_callBackFunc, ed_mgntEmpNo.getValue(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// 귀속부서
scwin.udc_acctDeptCdInfo7_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};

// 계약등록자
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_mgntEmpNo.setValue(rtnList[0]);
    ed_mgntEmpNm.setValue(rtnList[1]);
  } else {
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
  }
};

// 귀속부서
scwin.udc_acctDeptCdInfo7_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};

// 계약등록자
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'T');
};

// 귀속부서
scwin.udc_acctDeptCdInfo7_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '1');
};

// 계약등록자
scwin.udc_acEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, ed_mgntEmpNm, '2');
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  strNm.getValue("");
  if (strCd.getValue().trim() != "") {
    scwin.f_SearchPopUp(flag, 'T');
  }
};

//-------------------------------------------------------------------------
// function name : f_resultPopEd
// function desc : 팝업결과 셋팅
// function Parameter : strCd : 코드, strNm : 코드명, rtnList : 결과 리스트
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  //공통팝업 callBackFunc
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
scwin.f_downExcelSheet = function () {
  //엑셀 udc
  // 3개 엑셀다운 4+8+16
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //let biz = dma_search.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "0") {
    biz = "252";
  } else {
    biz = "200";
  }
  const params = {
    procYm: dma_search.get("procYm"),
    mergeRentloanNo: dma_search.get("mergeRentloanNo").replaceAll("-", ""),
    rentloanShapeCd: dma_search.get("rentloanShapeCd"),
    acctDeptCd: dma_search.get("acctDeptCd"),
    mgntEmpNo: dma_search.get("mgntEmpNo"),
    lowerDeptIncluYn: dma_search.get("lowerDeptIncluYn"),
    uppermostBizDomCd: biz
  };
  dma_search_sbm.setJSON(params);
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// function name : f_RetrieveSlipList
// function desc : 임대차[전대차] 전표내역
// function Parameter : sProcYm : 정산년월, sRentloanNo : 계약번호, sRentloanSeq : 계약순번 
//-------------------------------------------------------------------------
scwin.f_RetrieveSlipList = async function (sProcYm, sRentloanNo, sRentloanSeq) {
  if (await $c.gus.cfIsNull($p, sRentloanNo)) {
    return;
  }
  dma_searchSlip.set("procYm", sProcYm); // 정산년월
  dma_searchSlip.set("rentloanNo", sRentloanNo); // 계약번호
  dma_searchSlip.set("rentloanSeq", sRentloanSeq); // 계약순번

  ds_list3.removeAll();
  await $c.sbm.execute($p, sbm_tr_searchSlipList); // 임대차[전대차] 전표내역 조회     
};

//-------------------------------------------------------------------------
// function name : f_RetrieveCollMoneyPayList
// function desc : 임대차[전대차] 수금/지급 내역조회
// function Parameter : sProcYm : 정산년월, sRentloanNo : 계약번호, sRentloanSeq : 계약순번, sSlipNo : 전표번호 
scwin.f_RetrieveCollMoneyPayList = function () {
  //gr_list2_oncelldblclick 에서 실행됨
  //sbm_tr_searchSlipList_submitdone 에서 실행됨
};

//-------------------------------------------------------------------------
// function name : f_Validation
// function desc : 조회 조건 검증
// function Parameter : sType : 검증 타입
//-------------------------------------------------------------------------
scwin.f_Validation = function () {};

// ed_mergeRentloanNo 계약번호 format
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

// ed_mergeRentloanNo 계약번호 format
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

// ed_mergeRentloanNo 계약번호 format
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
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_list.getRowCount());
  gr_list.setFocusedCell(0, "procYm", false);
  if (ds_list.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ds_list2.removeAll();
    ds_list3.removeAll();
  }

  //let biz = dma_search.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "252") {
    biz = "0";
  } else {
    biz = "1";
  }
  dma_search_sbm.set("uppermostBizDomCd", biz);

  /* 
  //조회했을때 첫행을 기준으로 전표내역 조회
  if(ds_list.getRowCount()>0){
       dma_searchSlip.set("procYm", ds_list.getCellData(0, "procYm") )               // 정산년월
      dma_searchSlip.set("rentloanNo", ds_list.getCellData(0, "rentloanNo") )       // 계약번호
      dma_searchSlip.set("rentloanSeq", ds_list.getCellData(0, "rentloanSeq") )     // 계약순번
       $c.sbm.execute(sbm_tr_searchSlipList);                                          //임대차[전대차] 전표내역 조회 
  } */
};
scwin.gr_list_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "mergeRentloanNo") {
    if (ds_list.getCellData(rowIndex, "rentloanNo") != null && ds_list.getCellData(rowIndex, "rentloanNo") != "") {
      let data = {};
      data.mode = "MOD";
      data.cf = "9";
      data.rentloanNo = ds_list.getCellData(rowIndex, "rentloanNo");
      data.rentloanSeq = ds_list.getCellData(rowIndex, "rentloanSeq");
      let rentloan = ds_list.getCellData(rowIndex, "rentloanNo") + ds_list.getCellData(rowIndex, "rentloanSeq");
      let sURL = "/ui/cm/bc/rentloan/zz_900_01_02b.xml"; //ui 아직 없음
      $c.win.openMenu($p, "계약-수정", sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, ""), data, {
        menuCode: rentloan,
        menuCode2: "new"
      });
    }
  }
};
scwin.gr_list2_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "slipNo") {
    if (ds_list2.getCellData(rowIndex, "slipNo") != null && ds_list2.getCellData(rowIndex, "slipNo") != "") {
      let slipNo = ds_list2.getCellData(rowIndex, "slipNo");
      if (slipNo != "") {
        let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo); // 전표내역조회
      }
    }
  }
};
scwin.gr_list2_oncellclick = function (rowIndex, columnIndex, columnId) {
  dma_searchCollMoneyPay.set("procYm", ds_list2.getCellData(rowIndex, "procYm"));
  dma_searchCollMoneyPay.set("rentloanNo", ds_list2.getCellData(rowIndex, "rentloanNo"));
  dma_searchCollMoneyPay.set("rentloanSeq", ds_list2.getCellData(rowIndex, "rentloanSeq"));
  dma_searchCollMoneyPay.set("slipNo", ds_list2.getCellData(rowIndex, "slipNo"));
  $c.sbm.execute($p, sbm_tr_searchCollMoneyPayList); // 수금/지급내역 조회
};
scwin.gr_list3_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  if (columnId == "collMoneyPaySlipNo") {
    if (ds_list3.getCellData(rowIndex, "collMoneyPaySlipNo") != null && ds_list3.getCellData(rowIndex, "collMoneyPaySlipNo") != "") {
      let collMoneyPaySlipNo = ds_list3.getCellData(rowIndex, "collMoneyPaySlipNo");
      if (collMoneyPaySlipNo != "") {
        let rtnList = await $c.gus.cfShowSlipInfo($p, collMoneyPaySlipNo); // 전표내역조회
      }
    }
  }
};
scwin.sbm_tr_searchSlipList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows2.setValue(ds_list2.getRowCount());
  gr_list2.setFocusedCell(0, "payBilgClsCd", false);

  //조회했을때 첫행을 기준으로 수금/지급내역 조회
  if (ds_list2.getRowCount() > 0) {
    dma_searchCollMoneyPay.set("procYm", ds_list2.getCellData(0, "procYm"));
    dma_searchCollMoneyPay.set("rentloanNo", ds_list2.getCellData(0, "rentloanNo"));
    dma_searchCollMoneyPay.set("rentloanSeq", ds_list2.getCellData(0, "rentloanSeq"));
    dma_searchCollMoneyPay.set("slipNo", ds_list2.getCellData(0, "slipNo"));
    $c.sbm.execute($p, sbm_tr_searchCollMoneyPayList); // 수금/지급내역 조회
  }
};
scwin.sbm_tr_searchCollMoneyPayList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows3.setValue(ds_list3.getRowCount());
  gr_list3.setFocusedCell(0, "collMoneyPaySlipNo", false);
};
scwin.sbm_ds_uppermostBizdom_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
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
scwin.f_uppermostBizdom = async function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};
scwin.gr_list_onrowindexchange = async function (rowIndex, oldRow) {
  ds_list2.removeAll();
  let ProcYm = "";
  let RentloanNo = "";
  let RentloanSeq = "";
  ProcYm = ds_list.getCellData(ds_list.getRowPosition(), "procYm");
  RentloanNo = ds_list.getCellData(ds_list.getRowPosition(), "rentloanNo");
  RentloanSeq = ds_list.getCellData(ds_list.getRowPosition(), "rentloanSeq");
  await scwin.f_RetrieveSlipList(ProcYm, RentloanNo, RentloanSeq); //임대차[전대차] 전표내역 조회 
};
scwin.footerExp = function (col) {
  return scwin.calData(col);
};
scwin.calData = function (col) {
  var tmpArr = gr_list2.getColumnAllDataArray(col);
  var tmpSum = 0; //return 시킬 값
  var tmpVal = 0; // 전,후 비교를 위한 임의 변수
  for (var i = 0; i < tmpArr.length; i++) {
    var curVal = Number(tmpArr[i]);
    if (tmpVal != curVal) {
      tmpSum = tmpSum + curVal;
      tmpVal = curVal;
    }
  }
  return tmpSum;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_procYm',class:'',calendarValueType:'yearMonth',displayFormat:'yyyy/MM',ref:'data:dma_search.procYm',objType:'data'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 132px;',allOption:'',id:'lc_uppermostBizdomcd',class:'',direction:'auto',ref:'data:dma_search.uppermostBizDomCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mergeRentloanNo',placeholder:'',style:'width: 150px;',displayFormatter:'scwin.f_displayFm','ev:onclick':'scwin.f_rentloan_click(event)','ev:onkeyup':'scwin.f_rentloan_keyup(event)',ref:'data:dma_search.mergeRentloanNo',objType:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약형태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanShapeCd',style:'width: 120px;',submenuSize:'auto',ref:'data:dma_search.rentloanShapeCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',code:'mgntEmpNo',codeId:'ed_mgntEmpNo',maxlengthCode:'6',name:'mgntEmpNm',nameId:'ed_mgntEmpNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',style:'',validExpCode:'계약등록자:no:format=000000',btnId:'btn_mgntEmpNo',id:'udc_acEmpInfo',selectID:'retrieveAcEmpInfo','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear3',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',validExpCode:'귀속부서:no:format=00000',objTypeName:'data',refDataCollection:'dma_search',code:'acctDeptCd',name:'acctDeptNm',btnId:'btn_acctDeptCd',id:'udc_acctDeptCdInfo7',selectID:'retrieveAcctDeptCdInfo7','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger1',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_lowerDeptIncluYn',ref:'data:dma_search.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임대차[전대차] 실적 조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_list',grdDownOpts:'{"fileName" : "임대차_전대차 실적내역.xlsx" ,"type" : "1" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_list',id:'gr_list',style:'',readOnly:'true',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_list_oncelldblclick','ev:onrowindexchange':'scwin.gr_list_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'정산년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'최초<br/>계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'150',value:'계약번호'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'100',value:'계약순번'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',width:'70',value:'계약<br/>형태'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'80',value:'거래처<br/>번호'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'100',value:'거래처명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'100',value:'사업자<br/>등록번호'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'70',value:'귀속<br/>부서'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'100',value:'귀속부서명'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label',value:'계약<br/>사원번호'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',displayMode:'label',value:'계약<br/>등록자'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label',value:'지급/청구<br/>예정금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label',value:'전표<br/>차변금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',displayMode:'label',value:'전표<br/>대변금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',displayMode:'label',value:'전표<br/>부가세금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label',value:'가수금<br/>반제금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label',value:'지급/수금<br/>예정금액'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label',value:'수금/지급금액'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label',value:'미수금/<br/>미지급금액'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'procYm',inputType:'text',width:'100',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mergeRentloanNo',inputType:'text',width:'150',style:';color:blue;',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanShapeCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regUserId',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'regUserNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPayPlanAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drAmt',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'suspinitAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPaySlipAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyPaySellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPayUnSellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'SUM("collMoneyPayPlanAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',expression:'SUM("drAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'SUM("crAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'SUM("vatAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'SUM("suspinitAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'SUM("collMoneyPaySlipAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',expression:'SUM("collMoneyPaySellAmt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',expression:'SUM("collMoneyPayUnSellAmt")',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'임대차[전대차] 전표내역 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_list2',grdDownOpts:'{"fileName" : "임대차_전대차 전표내역.xlsx" ,"type" : "1" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_list2',style:'',autoFit:'allColumn',id:'gr_list2',class:'wq_gvw',readOnly:'true',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_list2_oncelldblclick','ev:oncellclick':'scwin.gr_list2_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'정산년월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'계약순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'지급/<br/>청구구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'청구/<br/>정산구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'지급/청구<br/>예정금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'전표<br/>차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'전표<br/>대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'전표<br/>부가세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'가수금<br/>반제금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'지급/수금<br/>예정금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'수금/지급금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'procYm',displayMode:'label',displayFormat:'yyyy/MM',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rentloanNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rentloanSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'payBilgClsCd',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'collMoneyPayClsCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPayPlanAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label',style:';color:blue;',class:'underline',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',colMerge:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',colMerge:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',colMerge:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'suspinitAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',colMerge:'true',upperColumn:'vatAmt',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyPaySlipAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',colMerge:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyPaySellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',colMerge:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'collMoneyPayPlanAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'drAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'crAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'vatAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'suspinitAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'collMoneyPaySlipAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',expression:'scwin.footerExp(\'collMoneyPaySellAmt\')',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수금/지급내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridID:'gr_list3',grdDownOpts:'{"fileName" : "임대차_전대차 수금_지급내역.xlsx" ,"type" : "1" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_list3',id:'gr_list3',style:'',readOnly:'true',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_list3_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'정산년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계약순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수금/지급<br/>전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'입금/지급<br/>일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'수금/지급금액',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'procYm',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanSeq',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPaySlipNo',inputType:'text',width:'100',dataType:'text',class:'underline',style:';color:blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPayDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyPaySellAmt',inputType:'text',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',id:'column26',displayMode:'label',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'sum(\'collMoneyPaySellAmt\')',displayFormat:'#,##0',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]})