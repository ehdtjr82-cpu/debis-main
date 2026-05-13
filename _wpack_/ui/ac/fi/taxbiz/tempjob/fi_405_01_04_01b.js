/*amd /ui/ac/fi/taxbiz/tempjob/fi_405_01_04_01b.xml 31000 b57bfeb205e731bcc5f0d637421ffdc64d0a3efbca6f8cefd8274e6d49191701 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPayAmt',name:'총급여액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pensionDedtAmt',name:'국민연금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'healthDedtAmt',name:'건강보험',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unempDedtAmt',name:'고용보험',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workTax',name:'소득세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'localTax',name:'주민세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcDedtAmt',name:'기타공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDedtAmt',name:'공제총액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workDd',name:'총근무일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totRltWorkHh',name:'총근무시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWorkHh',name:'기본급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totExtdWorkHh',name:'연장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totNgtWorkHh',name:'야간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totOffWorkHh',name:'휴일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realCost',name:'차인지급액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totFoodAmt',name:'총식대금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAlowAmt',name:'기타소득액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'annualAmt',name:'연차수당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxFreeAmt',name:'비과세',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd1',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chkLowerDeptIncluYn',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.tempjob.cmd.RetrieveTempJobRsltsPerPersonListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.memJson = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
scwin.privAdmin = scwin.memJson.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사 
scwin.vCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드  
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.txtCoCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  scwin.f_FieldClear();

  // 동원로엑스 - HR팀, 재경팀은 모든 귀속부서 조회가능
  // 넥스트로 - 기획관리팀(넥스트로) 모든 귀속부서 조회가능
  let deptCd = ed_acctDeptCd.getValue();
  if (deptCd == "00006" || deptCd == "00009" || deptCd == "01387") {
    $c.gus.cfEnableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDepts]);
    ica_payYm.focus();
  } else {
    $c.gus.cfDisableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDepts]);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_payYm, ed_acctDeptCd]);
  if (!ret) {
    return;
  }
  if (cbx_lowerDeptIncluYn.getValue() == 1) {
    dma_search.set("chkLowerDeptIncluYn", "1");
  } else {
    dma_search.set("chkLowerDeptIncluYn", "0");
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ica_payYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_payYm.focus();
  ed_acctDeptCd.setValue(scwin.memJson.acctDeptCd);
  ed_acctDeptNm.setValue(scwin.memJson.acctDeptNm);
  cbx_lowerDeptIncluYn.setValue(0);
  ed_staffNo.setValue("");
  ed_staffNm.setValue("");
};

//-------------------------------------------------------------------------
// function Parameter : inObj : 코드값, pairObj : 코드명, isCode : 코드구분(코드, 명칭)
//-------------------------------------------------------------------------
scwin.f_chkOpenPopUp = function (inObj, pairObj, flag, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(flag, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(flag, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// function Parameter : flag : 구분, pCode : 코드, pName : 코드명, pClose : 창여부, pAllSearch : 전체허용여부
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (flag, pCode, pName, pClose, pAllSearch) {
  let param = "";
  switch (flag) {
    case 1:
      param = "," + ed_coCd.getValue();
      await udc_staffList.cfCommonPopUp(scwin.udc_staffList_callBackFunc, pCode, pName, pClose, null, null, null, null, param, null, null, null, null); //직급
      break;
    case 2:
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",";
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, param, null, null, null, null); // 부서   
      break;
  }
};
scwin.udc_staffList_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_staffNo, ed_staffNm);
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, ed_acctDeptNm);
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_downExcelSheet = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 내역이 없습니다! 조회 먼저 해주세요.");
    return;
  }
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    const options = {
      fileName: "일용직 직원별 급여 조회.xlsx",
      sheetName: "일용직 직원별 급여 조회"
    };
    await $c.data.downloadGridViewExcel($p, gr_master, options);
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    if (!ed_coCd.options) ed_coCd.options = {};
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};
scwin.udc_staffList_onblurCodeEvent = function (e) {
  scwin.f_chkOpenPopUp(ed_staffNo, ed_staffNm, 1);
};
scwin.udc_staffList_onblurNameEvent = function (e) {
  scwin.f_chkOpenPopUp(ed_staffNm, ed_staffNo, 3);
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenPopUp(ed_acctDeptCd, ed_acctDeptNm, 2);
};
scwin.udc_acctDeptCdInfo_onblurNameEvent = function (e) {
  scwin.f_chkOpenPopUp(ed_acctDeptNm, ed_acctDeptCd, 4);
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();

  //조회결과가 0인경우
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  ds_master_totalRows.setValue(rowCnt);
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_acctDeptCdInfo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenPopUp(ed_acctDeptCd, ed_acctDeptNm, false);
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenPopUp(ed_acctDeptNm, ed_acctDeptCd, 2, false);
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_staffList_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenPopUp(ed_staffNo, ed_staffNm, false);
};
scwin.udc_staffList_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_staffList_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',btnId:'btn_company',id:'udc_dongbuGroupCompanyInfo',code:'coCd',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'부서코드',mandatoryCode:'true',objTypeCode:'data',validExpCode:'부서코드:yes:format=00000',allowCharCode:'0-9',maxlengthCode:'5',UpperFlagCode:'1',objTypeName:'data',btnId:'btn_acctDepts',code:'acctDeptCd',refDataCollection:'dma_search',id:'udc_acctDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCdInfo_onviewchangeCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하위부서포함여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_lowerDeptIncluYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'하위부서포함여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'급여년월 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',displayFormat:'yyyy/MM',editType:'select',id:'ica_payYm',ioFormat:'yyyyMM',mandatory:'true',objType:'data',pickerType:'dynamic',ref:'data:dma_search.payYm',style:'',title:'급여년월'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',btnId:'btn_staff',code:'staffNo',codeId:'ed_staffNo','ev:onblurCodeEvent':'scwin.udc_staffList_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_staffList_onblurNameEvent','ev:onclickEvent':'scwin.udc_staffList_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_staffList_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_staffList_onviewchangeNameEvent',id:'udc_staffList',maxlengthCode:'6',nameId:'ed_staffNm',objTypeCode:'data',objTypeName:'data',popupID:'',refDataCollection:'dma_search',selectID:'retrieveStaffListForDayLaborers',style:'',validExpCode:'직원번호:no:format=######',validTitle:'설명'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'직원별 급여 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',columnMove:'true',readOnly:'true',fixedColumn:'4',columnMoveWithFooter:'true',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'부서코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'부서명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'사원번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'사원명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',value:'총급여액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'700',inputType:'text',id:'column82',value:'공제',displayMode:'label',colSpan:'7',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'총근무</br>일수',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'총근무</br>시간',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'근무시간',width:'310',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',value:'차인</br>지급액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column106',value:'총식대</br>금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',value:'기타</br>소득액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'연차</br>수당',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',value:'비과세',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'국민연금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'건강보험',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'고용보험',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'소득세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'주민세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'기타공제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'공제총액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'기본급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',value:'연장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'야간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column115',value:'휴일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totPayAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pensionDedtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'healthDedtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'unempDedtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'workTax',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'localTax',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etcDedtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totDedtAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'workDd',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totRltWorkHh',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWorkHh',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totExtdWorkHh',inputType:'text',width:'70',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totNgtWorkHh',inputType:'text',width:'70',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totOffWorkHh',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'realCost',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totFoodAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'etcAlowAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'annualAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'taxFreeAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',hidden:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column89',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum("totPayAmt")',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column85',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pensionDedtAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column81',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("healthDedtAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column77',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("unempDedtAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column73',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("workTax")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("localTax")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column65',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("etcDedtAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column61',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("totDedtAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column44',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("workDd")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column43',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("totRltWorkHh")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column42',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("totWorkHh")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column41',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("totExtdWorkHh")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column40',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("totNgtWorkHh")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column117',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("totOffWorkHh")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column113',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("realCost")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column109',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("totFoodAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column105',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("etcAlowAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column93',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("annualAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column97',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("taxFreeAmt")',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ds_master_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]})