/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_31b.xml 46276 d6e992136cc49a87223e40dc178f56003b515de95b6942128b060caf4435cc63 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'sysCd',id:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBulkYn',name:'컨테이너/벌크',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impYn',name:'수입',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expYn',name:'수출',dataType:'text'}},{T:1,N:'w2:key',A:{id:'domesticYn',name:'내수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdWrkPathNo',name:'기준작업경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtTrfFrom',name:'계약요율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtTrfTo',name:'계약요율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'등록점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtFrom',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtTo',name:'종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'terminalCtrtNo',name:'최종계약 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkLobranCd',name:'최종계약 번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ordKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpYn',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'요율 항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypNm',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsNm',name:'컨테이너;F／E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCrcNm',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf20',name:'20`',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf40',name:'40`',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf45',name:'45`',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목／품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCrcNm',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCtrtTrf',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'작업점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'항구권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkClsNm',name:'작업;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regLobranNm',name:'등록점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commSearch',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commSearch',target:'data:json,{"id":"ds_selpchItemCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commSearch_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveStevedoringContractTariffPresentConditionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.strCurDate = $c.date.getServerDateTime($p);
  scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);
  scwin.memInfo = $c.data.getMemInfo($p);
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "StandardWorkPathEBC",
    param2: "retrieveStandardWorkPathEachOrdKnd",
    param3: ["1", "1", "1", "1", "1", "1", "1"],
    compID: "acb_odrKndCd"
  }, {
    method: "getLuxeComboData",
    param1: "StandardWorkPathEBC",
    param2: "retrieveStandardWorkPathCombo",
    param3: [],
    compID: "acb_stdWrkPathNo"
  }];
  $c.data.setGauceUtil($p, comboOptions, function () {
    acb_odrKndCd.setNodeSet("data:dlt_gauceUtil_acb_odrKndCd", 'name', 'code');
    acb_stdWrkPathNo.setNodeSet("data:dlt_gauceUtil_acb_stdWrkPathNo", 'name', 'code');
  });
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("scwin.f_defaultValue");
  acb_selpchItemCd.focus();
  rd_cntrBulkYn.setSelectedIndex(0);

  //요율항목 조회
  dma_commSearch.set("sysCd", "SellpurchaseItemEBC");
  dma_commSearch.set("queryId", "retrieveContractSellpurchaseItemList");
  dma_commSearch.set("param1", "11");
  $c.sbm.execute($p, sbm_commSearch);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [rd_cntrBulkYn]);
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  //조회 필수 조건 check
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_regDtFrom.getValue(), ed_regDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_regDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pParamCd, pParamNm, pWinCloseTF) {
  //var pParamCd = codeObj.getValue();
  //var pParamNm = nameObj.getValue();

  switch (disGubun) {
    case 1:
      // 품목/품명
      udc_commCd.cfCommonPopUp(scwin.callBackCommInfo, pParamCd, pParamNm, pWinCloseTF, '3', '품목/품명코드,품목/품명', '150,180,50', null, '2,4', null, null, null, null, null, "F", '품목/품명,품목／품명코드,품목／품명');
      break;
    case 2:
      // 거래처 
      udc_clntNo.cfCommonPopUp(scwin.callBackClntInfo, pParamCd, pParamNm, pWinCloseTF, '9', '거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,', '100,100,0,120,100,0,100,100,100,0', '3,10', 'LOGISCLNT1,S,CTRT', '800', '600', null, null, null, "F", '거래처,거래처코드,거래처명');
      break;
    case 3:
      // 등록점소 
      udc_regLobranCd.cfCommonPopUp(scwin.callBackLogisDeptInfo, pParamCd, pParamNm, pWinCloseTF, '2', '등록점소코드,등록점소명', '150,180', null, null, null, null, null, null, null, "F", '등록점소,등록점소코드,등록점소명');
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.callBackCommInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, ed_commNm);
};
scwin.callBackClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.callBackLogisDeptInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regLobranCd, ed_regLobranNm);
};

//-------------------------------------------------------------------------
// 발행
//-------------------------------------------------------------------------
scwin.f_ozReport = async function () {
  //조회 필수 조건 check
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_regDtFrom.getValue(), ed_regDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_regDtFrom.focus();
    return;
  }

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  var reportname = "";
  var selpchItemIdx = acb_selpchItemCd.getSelectedIndex(); //요율항목
  var odrIdx = acb_odrKndCd.getSelectedIndex(); //오더종류
  var stdWrkIdx = acb_stdWrkPathNo.getSelectedIndex(); //기준작업경로

  var odrKndNm = acb_odrKndCd.getItem(odrIdx).orgLabel == "-전체-" ? "전체" : acb_odrKndCd.getItem(odrIdx).orgLabel;
  var stdWrkPathNm = acb_stdWrkPathNo.getItem(stdWrkIdx).orgLabel == "-전체-" ? "전체" : acb_stdWrkPathNo.getItem(stdWrkIdx).orgLabel;
  if (rd_cntrBulkYn.getValue() == "1") {
    //컨테이너
    reportname = "/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02.ozr";
  } else if (rd_cntrBulkYn.getValue() == "0") {
    //벌크
    reportname = "/ds/sd/salesactiv/ctrtmgnt/sd_202_01_12.ozr";
  }
  data = {
    odiName: "sd_202_01_02",
    reportName: reportname,
    odiParam: {
      'sysPath': "dbl.ds.sd.salesactiv.ctrtmgnt",
      'selpchItemCd': acb_selpchItemCd.getItem(selpchItemIdx).value,
      'cntrBulkYn': rd_cntrBulkYn.getValue(),
      'commCd': ed_commCd.getValue(),
      'impYn': cbx_impYn.getValue(),
      'expYn': cbx_expYn.getValue(),
      'domesticYn': cbx_domesticYn.getValue(),
      'clntNo': ed_clntNo.getValue(),
      'odrKndCd': acb_odrKndCd.getItem(odrIdx).value,
      'stdWrkPathNo': acb_stdWrkPathNo.getItem(stdWrkIdx).value,
      'ctrtTrfFrom': ed_ctrtTrfFrom.getValue(),
      'ctrtTrfTo': ed_ctrtTrfTo.getValue(),
      'regLobranCd': ed_regLobranCd.getValue(),
      'regDtFrom': ed_regDtFrom.getValue(),
      'regDtTo': ed_regDtTo.getValue(),
      'lobranCd': ed_regLobranCd.getValue(),
      'terminalCtrtNo': cbx_terminalCtrtNo.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100 // 배율 설정
    },
    formParam: {
      selpchItemNm: acb_selpchItemCd.getItem(selpchItemIdx).orgLabel,
      commNm: ed_commNm.getValue(),
      clntNm: ed_clntNm.getValue(),
      odrKndNm: odrKndNm,
      stdWrkPathNm: stdWrkPathNm,
      regLobranNm: ed_regLobranNm.getValue(),
      lobranNm: scwin.memInfo.lobranNm
    }
  };
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.ext.openOzReport($p, data, opts);
  //await $c.win.openPopup("/ui/cm/zz/ozreportPopup.xml", opts, data);		
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
scwin.sbm_commSearch_submitdone = function (e) {
  console.log("scwin.sbm_commSearch_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
  gr_ctrt.setColumnVisibleColumn("bulkUnitNm", false);
  gr_ctrt.setColumnVisibleColumn("bulkCrcNm", false);
  gr_ctrt.setColumnVisibleColumn("bulkCtrtTrf", false);
  ed_ctrtTrfFrom.setValue("");
  ed_ctrtTrfTo.setValue("");

  //acb_selpchItemCd.setValue("0172");
};
scwin.sbm_search_submitdone = function (e) {
  console.log("scwin.sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_ctrt.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//컨테이너/벌크 radio 선택
scwin.rd_cntrBulkYn_onchange = function (info) {
  console.log("scwin.rd_cntrBulkYn_onchange");
  console.log(info);
  ds_ctrt.removeAll();
  spn_totalRow.setValue("0");
  if (info.newValue == "1") {
    gr_ctrt.setColumnVisible("cntrTypNm", true);
    gr_ctrt.setColumnVisible("fullEmptyClsNm", true);
    gr_ctrt.setColumnVisible("cntrUnitNm", true);
    gr_ctrt.setColumnVisible("cntrCrcNm", true);
    gr_ctrt.setColumnVisible("ctrtTrf20", true);
    gr_ctrt.setColumnVisible("ctrtTrf40", true);
    gr_ctrt.setColumnVisible("ctrtTrf45", true);
    gr_ctrt.setColumnVisible("commNm", false);
    gr_ctrt.setColumnVisible("bulkUnitNm", false);
    gr_ctrt.setColumnVisible("bulkCrcNm", false);
    gr_ctrt.setColumnVisible("bulkCtrtTrf", false);
  } else {
    gr_ctrt.setColumnVisible("cntrTypNm", false);
    gr_ctrt.setColumnVisible("fullEmptyClsNm", false);
    gr_ctrt.setColumnVisible("cntrUnitNm", false);
    gr_ctrt.setColumnVisible("cntrCrcNm", false);
    gr_ctrt.setColumnVisible("ctrtTrf20", false);
    gr_ctrt.setColumnVisible("ctrtTrf40", false);
    gr_ctrt.setColumnVisible("ctrtTrf45", false);
    gr_ctrt.setColumnVisible("commNm", true);
    gr_ctrt.setColumnVisible("bulkUnitNm", true);
    gr_ctrt.setColumnVisible("bulkCrcNm", true);
    gr_ctrt.setColumnVisible("bulkCtrtTrf", true);
  }
};

//품목품명 찾기 버튼
scwin.udc_commCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_commCd.getValue(), ed_commNm.getValue(), 'F');
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 1);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 1, false);
};

//거래처 찾기 버튼
scwin.udc_clntNo_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 2);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 2, false);
};

//등록점소 찾기 버튼 
scwin.udc_regLobranCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(3, ed_regLobranCd.getValue(), ed_regLobranNm.getValue(), 'F');
};
scwin.udc_regLobranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regLobranCd, ed_regLobranNm, 3);
};
scwin.udc_regLobranCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_regLobranNm, ed_regLobranCd, 3, false);
};

//조회조건 clear 버튼
scwin.btn_refresh_onclick = function (e) {
  console.log("scwin.btn_refresh_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//발행 버튼
scwin.btn_ctrtPrint_onclick = function (e) {
  scwin.f_ozReport();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.selpchItemCd',displayMode:'value delim label',mandatory:'true',objType:'data',searchTarget:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너/벌크',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cntrBulkYn',ref:'data:dma_search.cntrBulkYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_cntrBulkYn_onchange',mandatory:'true',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목/품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',codeId:'ed_commCd',nameId:'ed_commNm',UpperFlagCode:'1',maxlengthCode:'8',allowCharCode:'A-Z0-9',popupTitle:'품목/품명,품목/품명코드,품목/품명',popupGridHeadTitle:'품목/품명코드,품목/품명',selectID:'retrieveCommInfo',code:'commCd',btnId:'btn_commCd',id:'udc_commCd','ev:onclickEvent':'scwin.udc_commCd_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',maxlengthName:'10',refDataCollection:'dma_search',objTypeName:'data',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent'}},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{falseValue:'0',ref:'data:dma_search.impYn',appearance:'full',style:'',id:'cbx_impYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{falseValue:'0',ref:'data:dma_search.expYn',appearance:'full',style:'',id:'cbx_expYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{falseValue:'0',ref:'data:dma_search.domesticYn',appearance:'full',style:'',id:'cbx_domesticYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_clntNo',id:'udc_clntNo',UpperFlagCode:'0',allowCharCode:'0-9',maxlengthCode:'6',selectID:'retrieveClntInfo',code:'clntNo',popupGridHeadTitle:'거래처번호,거래처명,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자',popupTitle:'거래처,거래처코드,거래처명','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',popupGridHiddenColumn:'9,10',refDataCollection:'dma_search',objTypeCode:'Data',objTypeName:'data',validExpName:'계약거래처:no:maxByteLength=30','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',maxByteLengthName:'30'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width: 208px;',submenuSize:'auto',allOption:'',ref:'data:dma_search.odrKndCd',chooseOption:'true',chooseOptionLabel:'-전체-',searchTarget:'value',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준작업경로 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_stdWrkPathNo',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_search.stdWrkPathNo',chooseOptionLabel:'-전체-',objType:'data',searchTarget:'value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약요율 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group2',class:'form-group '},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_ctrtTrfFrom',placeholder:'',class:'',maxlength:'18',allowChar:'0-9',ref:'data:dma_search.ctrtTrfFrom',dataType:'number',displayFormat:'#,###',objType:'data'}},{T:1,N:'w2:span',A:{id:'',label:'~',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtTrfTo',placeholder:'',style:'width:50px;',maxlength:'18',allowChar:'0-9',ref:'data:dma_search.ctrtTrfTo',dataType:'number',displayFormat:'#,###',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_regLobranCd',nameId:'ed_regLobranNm',id:'udc_regLobranCd',btnId:'btn_regLobranCd',UpperFlagCode:'1',allowCharCode:'A-Z0-9a-z',maxlengthCode:'4',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_regLobranCd_onclickEvent',popupGridHeadTitle:'등록점소,등록점소코드,등록점소명',popupTitle:'등록점소,등록점소코드,등록점소명',popupGridHiddenColumn:'4,5,6,7,8,9,10',code:'lobranCd',refDataCollection:'dma_search',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_regLobranCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_regLobranCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'regDtFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar',refEdDt:'regDtTo',edFromId:'ed_regDtFrom',edToId:'ed_regDtTo',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종계약번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_terminalCtrtNo',ref:'data:dma_search.terminalCtrtNo',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'하역계약요율현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',id:'udc_topGrd',grdDownOpts:'{"fileName" : "하역계약요율현황.xlsx", "sheetName" : "하역계약요율현황", "type" : "2+4+8+16"}',gridID:'gr_excel',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_ctrt',focusMode:'row',id:'gr_ctrt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true',noSelect:'false',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'80',value:'거래처<br/>번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'거래처명',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'계약번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'오더종류',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'수출입구분',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'작업경로',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'요율 항목',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'컨테이너타입',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'컨테이너<br/>F/E',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'단위',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'통화',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column47',value:'요율',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'품목/품명',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'단위',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'통화',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'요율',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column68',value:'작업점소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'항구권역',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'작업<br/>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column59',value:'계약기간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'등록점소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'등록일자',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'종료일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ordKndNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpYn',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrUnitNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrCrcNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrtTrf20',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrtTrf40',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrtTrf45',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bulkUnitNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bulkCrcNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bulkCtrtTrf',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'districtNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stvWrkClsNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'ctrtStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'ctrtEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regLobranNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,###',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]},{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',columnMove:'true',dataList:'data:ds_ctrt',focusMode:'row',id:'gr_excel',noSelect:'false',readOnly:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'display: none;',visibleRowNum:'13',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'거래처<br/>번호',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',rowSpan:'2',value:'오더종류',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column21',inputType:'text',rowSpan:'2',style:'',value:'수출입구분',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',style:'',value:'작업경로',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',style:'',value:'요율 항목',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',style:'',value:'컨테이너타입',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',style:'',value:'컨테이너<br/>F/E',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column53',inputType:'text',rowSpan:'2',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column50',inputType:'text',rowSpan:'2',style:'',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column47',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'요율',width:'210'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'false',id:'column32',inputType:'text',rowSpan:'2',style:'',value:'품목/품명',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'false',id:'column35',inputType:'text',rowSpan:'2',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'false',id:'column38',inputType:'text',rowSpan:'2',style:'',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',hidden:'false',id:'column71',inputType:'text',rowSpan:'2',style:'',value:'요율',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column68',inputType:'text',rowSpan:'2',style:'',value:'작업점소',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column65',inputType:'text',rowSpan:'2',style:'',value:'항구권역',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column56',inputType:'text',rowSpan:'2',style:'',value:'작업<br/>구분',width:'70'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column59',inputType:'text',rowSpan:'',sortable:'false',style:'',value:'계약기간',width:'140'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column74',inputType:'text',rowSpan:'2',style:'',value:'등록점소',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column77',inputType:'text',rowSpan:'2',style:'',value:'등록일자',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'20',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'40',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'45',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',style:'',value:'시작일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column63',inputType:'text',style:'',value:'종료일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ordKndNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpYn',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrUnitNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrCrcNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf20',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf40',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf45',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkUnitNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkCrcNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bulkCtrtTrf',inputType:'text',style:'',textAlign:'right',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'districtNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkClsNm',inputType:'text',style:'',textAlign:'left',value:'',width:'70'}},{T:1,N:'w2:column',A:{calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',displayMode:'label',id:'ctrtStDt',inputType:'calendar',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',displayMode:'label',id:'ctrtEndDt',inputType:'calendar',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regLobranNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',displayMode:'label',id:'regDtm',inputType:'calendar',style:'',value:'',width:'100'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{style:'',disabled:'false',id:'btn_ctrtPrint',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.btn_ctrtPrint_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})