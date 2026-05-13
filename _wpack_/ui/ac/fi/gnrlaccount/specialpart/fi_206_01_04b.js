/*amd /ui/ac/fi/gnrlaccount/specialpart/fi_206_01_04b.xml 28838 3a2fae38dec53051957fd2180ff9ec43b520079edbf7a9d7598cb7273ce5d437 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtSt',name:'회계일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDtEnd',name:'회계일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'speclCntHourCls',name:'특수관계자구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'concernedCd',name:'관계자코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_concernedCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드명약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드_추가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.specialpart.RetrieveSpecialRelDebtListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_concernedCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_concernedCd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_206_01_04b
// 이름     : 그룹연결용 특수관계자거래내역
// 경로     : 재무회계/일반회계/특수거래처/
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호
scwin.isSubCompany = "1"; // 자회사여부

scwin.txtCoClsCd = ""; // 회사구분코드

scwin.headTitle;
scwin.arrOptCnd;
scwin.isSubCompany = false; // 자회사여부

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

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
  scwin.vCoCd = coCd; // 동일
  scwin.userId = userId;
  scwin.privAdmin = privAdmin;
  scwin.empNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   empNo : " + scwin.empNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   userId : " + scwin.userId + "   privAdmin : " + scwin.privAdmin);
  // console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  const codeOptions = [{
    grpCd: "FI059",
    compID: "lc_speclCntHourCls"
  } // 구분
  , {
    grpCd: "FI060",
    compID: "lc_concernedCd"
  } // 관계자명
  ];
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  console.log("=== ondataload (공통코드2중화 - full 복사한후 조건에 따라 반영)");
  let dltStr = "dlt_commonCodeFI060"; // 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFI060_1", true); // dlt_commonCodeFI060_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFI060_1"); // 객체화
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    scwin.f_Setting();
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 조회조건 셋팅 
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  console.log("=== f_Setting");

  // ed_postDtSt.text = <%=DDate.getDate().substring(0,4)%>+"01";
  // ed_postDtEnd.text = <%=DDate.getDate().substring(0,6)%>;
  // lc_speclCntHourCls.index = "0"
  // lc_concernedCd.index = "0"

  var thisYm = $c.date.getServerDateTime($p, "yyyyMM"); //날짜형식입니다.

  ed_postDtSt.setValue(thisYm.substring(0, 4) + "01");
  ed_postDtEnd.setValue(thisYm.substring(0, 6));
  lc_speclCntHourCls.setSelectedIndex(0);
  lc_concernedCd.setSelectedIndex(0);
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
  scwin.f_PopUpCompanyInfo('T');

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  // 	cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
  //   }else {
  // 	cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
  // }
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  console.log("=== f_SearchClear (조회부 클리어)");
  $c.gus.cfInitObjects($p, searchTb);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("====== f_Retrieve ==================");

  // if (!cfValidate([ed_coCd,ed_postDtSt,ed_postDtEnd]))
  let rtn = await $c.gus.cfValidate($p, [ed_coCd, ed_postDtSt, ed_postDtEnd]);
  if (!rtn) return;

  // 회계년월 시작일자보다 크거나 같아야 한다.
  if (ed_postDtSt.getValue() > ed_postDtEnd.getValue()) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "회계년월 종료일자", "시작일자"));
    ed_postDtEnd.focus();
    return;
  }

  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.gnrlaccount.specialpart.RetrieveSpecialRelDebtListCMD.do";
  // tr_search.post();

  var dcJSON = ds_search.getJSON();
  console.log(" *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// sbm_search_submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <script language=JavaScript for=ds_concernedCd event=OnLoadCompleted(rowCnt)>
  // 	cfHideDSWaitMsg(gr_concernedCd);

  var rowCnt = ds_concernedCd.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  // cfShowTotalRows(totalRows, rowCnt);

  ed_totalRows.setValue(rowCnt);
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 그리드 - 전표번호 클릭
//-------------------------------------------------------------------------
scwin.gr_concernedCd_oncellclick = async function (rowIndex, columnIndex, columnId) {
  console.log(" --- row :" + rowIndex + "  col :" + columnIndex + "  colId :" + columnId);

  // if(Colid=="slipNo" && Row >0){
  // 	cfShowSlipInfo(ds_master.NameValue(Row,"slipNo"));
  // }

  if (columnId == "slipNo") {
    // 특정 셀 체크
    var slipNo = ds_concernedCd.getCellData(rowIndex, "slipNo");
    console.log("  -- slipNo : " + slipNo);
    if (slipNo != "") {
      //scwin.f_showSlipInofo(slipNo);
      let rtnList = await $c.gus.cfShowSlipInfo($p, slipNo);
      console.log(rtnList);
    }
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
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // <!-- 회사코드 입력시  -->
  // language=JavaScript for=ed_coCd event=OnKillFocus()> 
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사코드
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  console.log("=== f_PopUpCompanyInfo ( pWinCloseTF[ " + pWinCloseTF + " ]");

  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // 							,ed_coCd.text, txt_coNm.value
  // 							,pWinCloseTF,null,null,null,null
  // 							,null,null,null,null,null);   
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
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
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분    
  }
  console.log("  scwin.txtCoClsCd [" + scwin.txtCoClsCd + "]");

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차) - 자회사여부는 계속 바뀌어야 함
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템  0
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  debugger;
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

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 구분 변경 : 특수구분 변경에 따른 관계자명 세팅
//-------------------------------------------------------------------------
scwin.lc_speclCntHourCls_onchange = function (info) {
  if (lc_speclCntHourCls.getValue() == "1") {
    // lc_concernedCd.CBData = "^전체,<%= GauceUtil.getCodeList("FI060",1,"1") %>";

    // full data 로 원본 복원
    dlt_commonCodeFI060.setJSON([]); // 원본 삭제
    var dcJSON = dlt_commonCodeFI060_1.getAllJSON(); // JSON 배열로 담기
    dlt_commonCodeFI060.setJSON(dcJSON, true); // append

    // 필터
    let dltStr = "dlt_commonCodeFI060"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
    let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
    $c.data.dataListFilter($p, dlt, "fltrCd1 == '1'"); //$c.data.dataListFilter 함수를 이용해서 필터

    lc_concernedCd.setValue("");
  } else if (lc_speclCntHourCls.getValue() == 2) {
    // lc_concernedCd.CBData = "^전체,<%= GauceUtil.getCodeList("FI060",1,"2") %>";

    // full data 로 원본 복원
    dlt_commonCodeFI060.setJSON([]); // 원본 삭제
    var dcJSON = dlt_commonCodeFI060_1.getAllJSON(); // JSON 배열로 담기
    dlt_commonCodeFI060.setJSON(dcJSON, true); // append

    // 필터
    let dltStr = "dlt_commonCodeFI060"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
    let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
    $c.data.dataListFilter($p, dlt, "fltrCd1 == '2'"); //$c.data.dataListFilter 함수를 이용해서 필터

    lc_concernedCd.setValue("");
  } else if (lc_speclCntHourCls.getValue() == "3") {
    // lc_concernedCd.CBData = "^전체,<%= GauceUtil.getCodeList("FI060",1,"3") %>";

    // full data 로 원본 복원
    dlt_commonCodeFI060.setJSON([]); // 원본 삭제
    var dcJSON = dlt_commonCodeFI060_1.getAllJSON(); // JSON 배열로 담기
    dlt_commonCodeFI060.setJSON(dcJSON, true); // append

    // 필터
    let dltStr = "dlt_commonCodeFI060"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
    let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
    $c.data.dataListFilter($p, dlt, "fltrCd1 == '3'"); //$c.data.dataListFilter 함수를 이용해서 필터

    lc_concernedCd.setValue("");
  } else {
    // lc_concernedCd.CBData = "^전체,<%= GauceUtil.getCodeList("FI060") %>";
    console.log("  -- 지급방법 FI048 변경 - 초기목록으로 복원");

    // full data 로 원본 복원
    dlt_commonCodeFI060.setJSON([]); // 원본 삭제
    var dcJSON = dlt_commonCodeFI060_1.getAllJSON(); // JSON 배열로 담기
    dlt_commonCodeFI060.setJSON(dcJSON, true); // append

    lc_concernedCd.setValue("");
  }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드 (미사용 - UDC 에서 직접 호출)
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_concernedCd");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "그룹연결용 특수관계자거래내역","그룹연결용 특수관계자거래내역.xls",8+16);
  // }

  var totCnt = ds_concernedCd.getRowCount();
  var sheetTitle = "그룹연결용 특수관계자거래내역";
  if (totCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    // 리턴 처리
    const options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      bodyWordwrap: true // 줄바꿈
      // useSubTotal  : true   // 소계출력
    };
    $c.data.downloadGridViewExcel($p, gr_concernedCd, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'searchTb',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfoPopup',selectID:'retrieveDongbuGroupCompanyInfo',style:'',codeId:'ed_coCd',nameId:'ed_coNm',popupTitle:'회사조회,회사코드,법인명',popupGridHeadTitle:'회사코드,회사명',mandatoryCode:'true',allowCharCode:'0-9',objTypeName:'data',validExpCode:'회사코드:yes',objTypeCode:'data',btnId:'btn_coCd',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_search',code:'coCd','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',maxlengthName:'50',validTitle:'회사코드','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계연월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'postDtSt',style:'',id:'udc_postDt',refEdDt:'postDtEnd',refDataMap:'ds_search',edToId:'ed_postDtEnd',edFromId:'ed_postDtSt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_speclCntHourCls',ref:'data:ds_search.speclCntHourCls',renderType:'',style:'width: 120px;',submenuSize:'auto',objType:'data','ev:onchange':'scwin.lc_speclCntHourCls_onchange',chooseOptionLabel:'전체',sortMethod:'ascending',sortOption:'value',title:'구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관계자명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_concernedCd',ref:'data:ds_search.concernedCd',renderType:'',style:'width: 270px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',sortMethod:'ascending',sortOption:'value',title:'관계자명'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_concernedCd',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',id:'udc_grdMain'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_concernedCd',defaultCellHeight:'24',evenRowBackgroundColor:'#F8FFF8',id:'gr_concernedCd',oddEvenColorDisplay:'true',rowNumHeaderValue:'No',rowNumVisible:'false',rowNumWidth:'40',showSortableImage:'true',sortable:'true',visibleRowNum:'20',visibleRowNumFix:'true',footerSummaryAuto:'true','ev:oncellclick':'scwin.gr_concernedCd_oncellclick',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'계정코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'거래선코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'거래통화코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'장부금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'회계일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'적요',width:'150'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'계정과목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column28',value:'거래처명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctClsCd',inputType:'text',value:'',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNmAbbr',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'crcCd',inputType:'text',textAlign:'center',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'postDt',inputType:'text',width:'80',dataType:'text',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:';color:#0000FF;',value:'',width:'100',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',textAlign:'left',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntClntNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',textAlign:'right',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',expression:'SUM(\'amt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',textAlign:'right',value:'',width:'150'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'bottom',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})