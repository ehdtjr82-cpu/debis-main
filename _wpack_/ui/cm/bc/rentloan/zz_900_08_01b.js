/*amd /ui/cm/bc/rentloan/zz_900_08_01b.xml 46697 034d8d9f933ccb67507b95caea1903ea156295f0f4e33443a2c77bff2dce80e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'startRentloanNo',name:'최초계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanNoSeq',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanClsCd',name:'계약구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanShapeCd',name:'계약형태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owner',name:'소유주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loanRegNm',name:'계약자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usePurpsCd',name:'사용용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanCond',name:'계약조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goodsCd',name:'부동산구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanAreaM2',name:'면적(m²)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanAreaPy',name:'면적(평)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicAddr1',name:'상세주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanPicAddr2',name:'상세주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanStDt',name:'일자-개시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanEndDt',name:'일자-종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStDt',name:'일자-변경적용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsEndDt',name:'일자-실종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentloanTmnDt',name:'일자-해지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regUserNm',name:'계약등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayClsCd',name:'청구/정산구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayCondCd',name:'청구/정산조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslYn',name:'선불여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allMonth',name:'월단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayAmt',name:'청구/정산금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPayDt',name:'청구/정산일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rentloanNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'condDt',name:'일자조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanDt',name:'계약기준일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnYn',name:'확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'결재상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanClsCd',name:'계약구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rentloanContracting',name:'계약진행여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'계약구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'하위부서 포함여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'rentloanShapeCd',name:'계약형태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyPayClsCd',name:'계약형태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'uppermostBizDomCd',name:'최상위사업영역',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'stDt',name:'계약시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'계약종료일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_uppermostBizdom',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_uppermostBizdom_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_collMoneyPayClsCd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/cm.bc.rentloan.RetrieveRentLoanContListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_uppermostBizdom',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_uppermostBizdom_param","key":"IN_DS1"}',target:'data:json,{"id":"ds_uppermostBizdom","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_uppermostBizdom_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_collMoneyPayClsCd',action:'',method:'get',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_collMoneyPayClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_collMoneyPayClsCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대차[전대차] 계약별 세부 현황 조회
 * 메뉴경로 : 공통/총무업무/임대차관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_08_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-29
 * 수정이력  :
 *    - 2025-10-29      정승혜    최초작성
 *    - 2026-01-08      정승혜    기타수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 
 */
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.empNo = scwin.memJson.empNo;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;
scwin.strBasSdId = "/ui/cm/bc/rentloan/zz_900_01_02b.xml";
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님 

scwin.uppermostBizdomcd = ""; //최상위사업영역

//hidden
scwin.txt_uppermostBizDomCd = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
// function Parameter : null 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ021",
    compID: "lc_apprvStsCd"
  }, {
    grpCd: "ZZ910",
    compID: "lc_rentloanClsCd,gr_list:rentloanClsCd"
  }, {
    grpCd: "ZZ911",
    compID: "lc_rentloanShapeCd,gr_list:rentloanShapeCd"
  }, {
    grpCd: "ZZ913",
    compID: "gr_list:usePurpsCd"
  }, {
    grpCd: "ZZ912",
    compID: "gr_list:rentloanCond"
  }, {
    grpCd: "ZZ920",
    compID: "gr_list:goodsCd"
  }, {
    grpCd: "FI069",
    compID: "gr_list:taxnCls"
  }, {
    grpCd: "ZZ918",
    compID: "gr_list:collMoneyPayClsCd"
  }, {
    grpCd: "ZZ919",
    compID: "gr_list:collMoneyPayCondCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  dlt_commonCodeZZ021.sort("cd", 0);
  dlt_commonCodeZZ911.sort("cd", 0);

  //로그인한 사번으로 최상위사업영역을 가져오는 데이타셋 실행
  scwin.f_uppermostBizdom();
  scwin.f_createHeader(); // 데이터셋 헤더생성

  ed_empNo.setValue(scwin.empNo);
  ed_empNm.setValue(scwin.userNm);
  setTimeout(scwin.f_SetSrchDefault, 1000);
  //scwin.f_SetSrchDefault(); // 조회 기본값 설정

  // 계약기준일일때 hide처리
  udc_rentDt2.hide();

  //물류사업,여객사업만 나오게 세팅
  //lc_uppermostBizdomcd.setVisibleRowNum(2)
};

//-------------------------------------------------------------------------
// function name : f_HeaderCreate
// function desc : 데이터셋 헤더생성
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_createHeader = function () {
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
  $c.gus.cfInitObjects($p, [ed_empNo, ed_empNm]);
};
scwin.f_FieldClear3 = function (e) {
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]);
};

//-------------------------------------------------------------------------
// function name : f_SetSrchDefault
// function desc : 조회 기본값 설정
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  lc_condDt.setValue(0);
  lc_rentloanClsCd.setValue(0);
  lc_dcsnYn.setValue("");
  lc_apprvStsCd.setValue("05");
  ed_rentloanNo.focus();
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
    case '3':
      // 계약거래처
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, ed_ctrtClntNo.getValue(), ed_ctrtClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo7_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acEmpInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_empNo.setValue(rtnList[0]);
    ed_empNm.setValue(rtnList[1]);
  } else {
    ed_empNo.setValue("");
    ed_empNm.setValue("");
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_ctrtClntNo.setValue(rtnList[0]);
    ed_ctrtClntNm.setValue(rtnList[1]);
  } else {
    ed_ctrtClntNo.setValue("");
    ed_ctrtClntNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// function name : f_checkPopEd
// function desc : 팝업체크
// function Parameter : strCd : 코드, strNm : 코드명, flag : 플래그
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  strNm.setValue("");
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
  // udc
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
  if (ds_out.getRowCount() == 0) {
    return;
  }
  const options = {
    fileName: "임대차_전대차 계약현황조회.xlsx",
    sheetName: "임대차_전대차 계약현황조회",
    type: 1,
    colMerge: true,
    colMergeTextAlign: "top"
  };
  $c.data.downloadGridViewExcel($p, gr_list, options);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!scwin.f_Validation()) {
    return;
  }

  //let biz = dma_search.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "0") {
    biz = "252";
  } else {
    biz = "200";
  }
  dma_search.set("uppermostBizDomCd", biz);
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// function name : f_Validation
// function desc : 조회 조건 검증
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  let txt = ed_rentloanNo.getValue();
  if (txt.trim() != "") {
    if (txt.length < 12) {
      await $c.win.alert($p, "계약번호는 12자리 이상 넣어야 합니다.");
      ed_rentloanNo.focus();
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// function name : f_RetrieveCollMoneyPayClsCd
// function desc : 청구/정산구분 조회
// function Parameter : null 
//------------------------------------------------------------------------- 
scwin.f_RetrieveCollMoneyPayClsCd = function () {
  let nRow = 0;
  let sFilter1 = "";
  let sFilter2 = "";
  let condition = "";
  let vRentloanShapeCd = lc_rentloanShapeCd.getValue();
  if (vRentloanShapeCd == "01" || vRentloanShapeCd == "02") {
    sFilter1 = "1";
    sFilter2 = "";
  } else if (vRentloanShapeCd == "03" || vRentloanShapeCd == "04") {
    sFilter1 = "";
    sFilter2 = "1";
  } else {
    //계약형태를 '전체' 를 선택했을때 수금지구분을 안가져오기 위해
    sFilter1 = "9"; //9값 없음, 안가져오기위해
    sFilter2 = "9"; //9값 없음, 안가져오기위해
  }
  condition = "?sysCd=CommonEBC" + "&queryId=retrieveCommonFilterPopup&param1=ZZ918&param2=" + sFilter1 + "&param3=" + sFilter2;
  sbm_ds_collMoneyPayClsCd.action = "/cm.zz.RetrieveCommonPopupCMD.do" + condition;
  $c.sbm.execute($p, sbm_ds_collMoneyPayClsCd);
};

// 계약기준일,계약기간 에 따른 show,hide 처리
scwin.cond_change = function (e) {
  if (e.newValue == "02") {
    udc_rentDt2.show();
    ed_rentloanDt.hide();
  } else if (e.newValue == "01") {
    udc_rentDt2.hide();
    ed_rentloanDt.show();
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

// ed_rentloanNo 계약번호 format
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

//udc로 교체예정
scwin.f_SearchClear1 = function (e) {
  $c.gus.cfInitObjects($p, [ed_empNo, ed_empNm]);
};

// 자산번호 decode
scwin.fixedAsetNoDisplayFm = function (data) {
  //자산번호 -> 계약거래처 255350 은 , 770544 는 - 
  let tempData = $c.gus.decode($p, data, "-", "-", data);
  if (tempData != "-") {
    return "<span style='border-bottom: 1px solid #000;' >" + tempData + "</span>";
  }
  return tempData;
};

// 변경적용 decode
scwin.rsltsStDtDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  //변경적용 -> 계약거래처 255350 은 날짜,blue 233791 은 -
  let tempCd = ds_out.getCellData(rowIndex, "rentloanClsCd");
  let tempData = "";
  if (tempCd == "02") {
    tempData = data;
    gr_list.setCellColor(rowIndex, "rsltsStDt", "blue");
  } else {
    tempData = "-";
  }
  return tempData;
};

// 해지 decode
scwin.rentloanTmnDtDisplayFm = function (data) {
  //해지 -> 계약거래처 233791 은 날짜,red 255350 은 -
  let tempData = $c.gus.decode($p, data, "-", "-", data);
  if (tempData != "-") {
    return "<span style=';color:red;'>" + tempData + "</span>";
  }
  return tempData;
};
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfGoPrevPosition($p, gr_list, 0);
  }

  //let biz = dma_search.get("uppermostBizDomCd");
  let biz = lc_uppermostBizdomcd.getValue();
  if (biz == "252") {
    biz = "0";
  } else {
    biz = "1";
  }
  dma_search.set("uppermostBizDomCd", biz);
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
scwin.f_uppermostBizdom = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveUppermostBizDomInfo",
    param1: scwin.memJson.empNo
  };
  dma_uppermostBizdom_param.setJSON(params);
  $c.sbm.execute($p, sbm_ds_uppermostBizdom);
};
scwin.sbm_ds_collMoneyPayClsCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let gauceData = e.responseJSON.GAUCE;
  let cols = Object.keys(gauceData[0]);
  for (let i = 0; i < gauceData.length; i++) {
    let rowData = gauceData[i];
    let row = ds_collMoneyPayClsCd.insertRow();
    cols.forEach(col => {
      ds_collMoneyPayClsCd.setCellData(row, col, rowData[col]);
    });
  }
  ds_collMoneyPayClsCd.sort("col1", 0);
  lc_collMoneyPayClsCd.setValue("01");
};
scwin.udc_acEmpInfo_onclickEvent = function (e) {
  scwin.f_SearchPopUp('2', 'F');
};
scwin.udc_acctDeptCdInfo7_onclickEvent = function (e) {
  scwin.f_SearchPopUp('1', 'F');
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_SearchPopUp('3', 'F');
};
scwin.gr_list_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "rentloanNoSeq") {
    let rentloanNoSeq = ds_out.getCellData(rowIndex, "rentloanNoSeq");
    let rentloanNo = rentloanNoSeq.substring(0, 12);
    let rentloanSeq = rentloanNoSeq.substring(13, 16);
    scwin.cfTabMenuAdd(scwin.strBasSdId + "?mode=MOD&cf=8&rentloanNo=" + rentloanNo + "&rentloanSeq=" + rentloanSeq, "계약-수정");
  }
};
scwin.cfTabMenuAdd = function (url, name) {
  let sURL = url.split("?")[0];
  let dataString = url.split("?")[1];
  let data = {};
  if (dataString) {
    dataString.split("&").forEach(function (param) {
      let keyValue = param.split("=");
      let key = keyValue[0];
      let value = keyValue[1];
      data[key] = value;
    });
  }
  $c.win.openMenu($p, name, sURL, sURL.substring(sURL.lastIndexOf("/") + 1).replace(/.xml/g, ""), data);
};
scwin.udc_acctDeptCdInfo7_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '1');
};
scwin.udc_acEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_empNo, ed_empNm, '2');
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_ctrtClntNo, ed_ctrtClntNm, '3');
};
scwin.lc_rentloanClsCd_onchange = function (info) {
  if (lc_rentloanClsCd.getValue() == 0) {
    $c.gus.cfEnableObjects($p, [lc_rentloanContracting]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_rentloanContracting]);
    lc_rentloanContracting.setValue(0);
  }
};
scwin.lc_uppermostBizdomcd_onchange = function (info) {
  if (lc_uppermostBizdomcd.getValue() == 0) {
    dma_search.set("uppermostBizDomCd", 0);
  } else if (lc_uppermostBizdomcd.getValue() == 1) {
    dma_search.set("uppermostBizDomCd", 1);
  } else if (lc_uppermostBizdomcd.getValue() == 252) {
    dma_search.set("uppermostBizDomCd", 252);
  } else if (lc_uppermostBizdomcd.getValue() == 200) {
    dma_search.set("uppermostBizDomCd", 200);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rentloanNo',style:'width: 120px;',allowChar:'a-zA-Z0-9',maxlength:'16','ev:onkeyup':'scwin.f_rentloan_keyup(event)',displayFormatter:'scwin.f_displayFm','ev:onclick':'scwin.f_rentloan_click(event)',ref:'data:dma_search.rentloanNo',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_ctrtClntNo',popupTitle:'',nameId:'ed_ctrtClntNm',style:'',refDataCollection:'dma_search',name:'ctrtClntNm',code:'ctrtClntNo',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent',btnId:'btn_ctrtClntNo',objTypeCode:'Data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분/결재상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dcsnYn',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.dcsnYn',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvStsCd',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.apprvStsCd',visibleRowNum:'10',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w120',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_condDt',style:'',submenuSize:'auto',ref:'data:dma_search.condDt','ev:onchange':'scwin.cond_change',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기준일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기간'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_rentloanDt',style:'',ref:'data:dma_search.rentloanDt',objType:'data'}},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_search',style:'',id:'udc_rentDt2',refEdDt:'endDt',edFromId:'ed_stDt',edToId:'ed_endDt',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'false',mandatoryTo:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약등록자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_mgntEmpNo',code:'empNo',codeId:'ed_empNo','ev:onblurCodeEvent':'scwin.udc_acEmpInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acEmpInfo_onclickEvent',id:'udc_acEmpInfo',maxlengthCode:'6',name:'empNm',nameId:'ed_empNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'retrieveAcEmpInfo',style:'',validTitle:''}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear2',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_rentloanClsCd_onchange',id:'lc_rentloanClsCd',objType:'data',ref:'data:dma_search.rentloanClsCd',style:'width: 150px;',submenuSize:'auto',visibleRowNum:'10'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_rentloanContracting',objType:'data',ref:'data:dma_search.rentloanContracting',style:'width: 150px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약진행중'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약해지/해제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약형태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onviewchange':'scwin.f_RetrieveCollMoneyPayClsCd',id:'lc_rentloanShapeCd',ref:'data:dma_search.rentloanShapeCd',style:'width: 120px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수금지급구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{chooseOptionLabel:'전체',submenuSize:'auto',chooseOption:'true',allOption:'',ref:'data:dma_search.collMoneyPayClsCd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 150px;',id:'lc_collMoneyPayClsCd',visibleRowNum:'20',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_collMoneyPayClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:select1',A:{ref:'',submenuSize:'auto',appearance:'minimal','ev:onchange':'scwin.lc_uppermostBizdomcd_onchange',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_uppermostBizdomcd',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여객사업'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo7',style:'',validTitle:'',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',editTypeName:'data',refDataCollection:'dma_search',code:'acctDeptCd',name:'acctDeptNm',id:'udc_acctDeptCdInfo7','ev:onclickEvent':'scwin.udc_acctDeptCdInfo7_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo7_onblurCodeEvent',btnId:'btn_acctDeptCd'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_lowerDeptIncluYn',ref:'data:dma_search.lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임대차[전대차] 계약별 세부 현황 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_list',gridDownFn:'scwin.f_downExcelSheet',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_list',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'2',readOnly:'true','ev:oncelldblclick':'scwin.gr_list_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'최초</br>계약번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계약번호',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'계약</br>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'자산번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'귀속</br>부서',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'귀속부서명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'거래처',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'거래처명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'계약</br>형태',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'소유주',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'계약자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'사용용도',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'계약조건',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'부동산</br>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'면적</br>(m²)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'면적</br>(평)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'상세주소1',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'상세주소2',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'380',inputType:'text',style:'',id:'column40',value:'일자',displayMode:'label',colSpan:'5',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'과세유형',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'계약</br>등록자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'청구/정산</br>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'청구/정산</br>조건',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'선불여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column67',value:'월단위',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'청구/정산</br>금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column94',value:'청구/정산</br>일자',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'개시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'종료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'변경</br>적용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'실종료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'해지',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'startRentloanNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanNoSeq',inputType:'text',style:';color:blue;',value:'',width:'150',colMerge:'true',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanClsCd',inputType:'select',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'100',displayFormatter:'scwin.fixedAsetNoDisplayFm',escapeHtml:'false',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentloanShapeCd',inputType:'select',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'owner',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'loanRegNm',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'usePurpsCd',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'rentloanCond',value:'',displayMode:'label',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'goodsCd',value:'',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rentloanAreaM2',value:'',displayMode:'label',colMerge:'true',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rentloanAreaPy',value:'',displayMode:'label',colMerge:'true',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloanPicAddr1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloanPicAddr2',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloanStDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloanEndDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsStDt',value:'',displayMode:'label',customFormatter:'scwin.rsltsStDtDisplayFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsEndDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rentloanTmnDt',value:'',displayMode:'label',displayFormatter:'scwin.rentloanTmnDtDisplayFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'taxnCls',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regUserNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'collMoneyPayClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'collMoneyPayCondCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'vsslYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'checkbox',style:'',id:'allMonth',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyPayAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'collMoneyPayDt',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})