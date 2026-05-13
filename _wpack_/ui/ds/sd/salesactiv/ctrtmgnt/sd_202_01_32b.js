/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_32b.xml 53085 aa8207bb405fc3ca1bade7e16d3c066b63702571f6b8a432ac08502121d591fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'sysCd',id:'sysCd'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBulkYn',name:'컨테이너/벌크',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impYn',name:'수입',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expYn',name:'수출',dataType:'text'}},{T:1,N:'w2:key',A:{id:'domesticYn',name:'내수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdWrkPathNo',name:'기준작업경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtTrfFrom',name:'계약요율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtTrfTo',name:'계약요율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'등록점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtFrom',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtTo',name:'종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'terminalCtrtNo',name:'최종계약 번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkLobranCd',name:'로그인점소',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_pathNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ordKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpYn',name:'수입수출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypNm',name:'컨테이너타입명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsNm',name:'FULL/EMPTY구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrUnitCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrUnitNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCrcCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrCrcNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf20',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf40',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf45',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondNm',name:'운송조건명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondCd',name:'컨테이너중량조건코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWtCondNm',name:'컨테이너중량조건명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkUnitCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkUnitNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCrcCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkCrcNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf1',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf2',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf3',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf4',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf5',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf6',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf7',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf8',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf9',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regLobranNm',name:'등록점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptNm',name:'요율적용코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_commonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commSearch',target:'data:json,{"id":"ds_selpchItemCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonPopup_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveTransContractTariffPresentConditionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/ds/dscommon.js',scopeVariable:'dscommon',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.chkClear = false; //휴지통 클릭시 그리드 초기화 방지

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.strCurDate = $c.date.getServerDateTime($p);
  scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate); //udc달력 형식

  scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd");
  scwin.lobranNm = $c.data.getMemInfo($p, "lobranNm");
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
    scwin.f_defaultValue();
  });
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
  if (scwin.chkClear == false) rd_cntrBulkYn.setSelectedIndex(0);

  //요율항목 조회
  dma_commSearch.set("sysCd", "SellpurchaseItemEBC");
  dma_commSearch.set("queryId", "retrieveContractSellpurchaseItemList");
  dma_commSearch.set("param1", "21");
  $c.sbm.execute($p, sbm_commonPopup);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate); //udc달력 형식
  $c.gus.cfInitObjects($p, tbl_search, [ed_regDtFrom, ed_regDtTo, rd_cntrBulkYn]);
  scwin.chkClear = true;
  scwin.f_defaultValue();
  scwin.chkClear = false;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  //조회 필수 조건 check
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_regDtFrom.getValue(), ed_regDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_regDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
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
scwin.f_openCommonPopUp = function (disGubun, pParamCd, pParamNm, pWinCloseTF, pAllSearchTF) {
  //var pParamCd = codeObj.getValue();
  //var pParamNm = nameObj.getValue();

  switch (disGubun) {
    case 1:
      // 품목/품명
      udc_commCd.cfCommonPopUp(scwin.callBackCommInfo, pParamCd, pParamNm, pWinCloseTF, '3', '품목/품명코드,품목/품명', '150,180,50', null, '2,4', null, null, null, null, null, pAllSearchTF, '품목/품명,품목／품명코드,품목／품명');
      break;
    case 2:
      // 거래처
      udc_clntNo.cfCommonPopUp(scwin.callBackClntInfo, pParamCd, pParamNm, pWinCloseTF, '9', '거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,', '100,100,0,120,100,0,100,100,100,0', '3,10', 'LOGISCLNT1,S,CTRT', '800', '600', null, null, null, "F", '거래처,거래처코드,거래처명');
      break;
    case 3:
      // 등록점소
      udc_regLobranCd.cfCommonPopUp(scwin.callBackLogisDeptInfo, pParamCd, pParamNm, pWinCloseTF, '2', '등록점소코드,등록점소명', '150,180', null, null, null, null, null, null, null, "F", '등록점소,등록점소코드,등록점소명');
      break;
    case 4:
      // 권역구간(출발)
      udc_dptDistrictCd.cfCommonPopUp(scwin.callBackDptDistrict, pParamCd, pParamNm, pWinCloseTF, '2', '출발권역코드,출발권역명', '150,180', null, null, null, null, null, null, null, "F", '출발권역,출발권역코드,출발권역명');
      break;
    case 5:
      // 권역구간(도착) 
      udc_arvDistrictCd.cfCommonPopUp(scwin.callBackArvDistrict, pParamCd, pParamNm, pWinCloseTF, '2', '도착권역코드,도착권역명', '150,180', null, null, null, null, null, null, null, "F", '도착권역,도착권역코드,도착권역명');
      break;
    case 6:
      // 작업구간(출발)
      udc_dptWrkPlCd.cfCommonPopUp(scwin.callBackDptWrkPl, pParamCd, pParamNm, pWinCloseTF, '2', '작업장코드,작업장명', '150,180', null, null, null, null, null, null, null, "F", '작업장,작업장코드,작업장명');
      break;
    case 7:
      // 작업구간(도착)
      udc_arvWrkPlCd.cfCommonPopUp(scwin.callBackArvWrkPl, pParamCd, pParamNm, pWinCloseTF, '2', '작업장코드,작업장명', '150,180', null, null, null, null, null, null, null, "F", '작업장,작업장코드,작업장명');
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
scwin.callBackDptDistrict = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptDistrictCd, ed_dptDistrictNm);
};
scwin.callBackArvDistrict = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvDistrictCd, ed_arvDistrictNm);
};
scwin.callBackDptWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dptWrkPlCd, ed_dptWrkPlNm);
};
scwin.callBackArvWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_arvWrkPlCd, ed_arvWrkPlNm);
};

//-------------------------------------------------------------------------
// 발행
//-------------------------------------------------------------------------
scwin.f_ozReport = async function () {
  //조회 필수 조건 check
  let chkVal = await $c.gus.cfValidate($p, tbl_search);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_regDtFrom.getValue(), ed_regDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_regDtFrom.focus();
    return;
  }

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  var odrKndNmIdx = acb_odrKndCd.getValue().indexOf("]");
  var odrKndNm = acb_odrKndCd.getValue();
  odrKndNm = odrKndNm.substring(odrKndNmIdx + 1, odrKndNm.length);
  var stdWrkPathNmIdx = acb_stdWrkPathNo.getValue().indexOf("]");
  var stdWrkPathNm = acb_stdWrkPathNo.getValue();
  stdWrkPathNm = stdWrkPathNm.substring(stdWrkPathNmIdx + 1, stdWrkPathNm.length);
  var reportname;
  if (rd_cntrBulkYn.getValue() == "1") {
    //컨테이너
    reportname = "/ds/sd/salesactiv/ctrtmgnt/sd_202_01_03.ozr";
  } else {
    //벌크
    reportname = "/ds/sd/salesactiv/ctrtmgnt/sd_202_01_13.ozr";
  }
  var data = {
    odiName: "sd_202_01_03",
    reportName: reportname,
    odiParam: {
      sysPath: "dbl.ds.sd.salesactiv.ctrtmgnt",
      selpchItemCd: acb_selpchItemCd.getValue(),
      cntrBulkYn: rd_cntrBulkYn.getValue(),
      commCd: ed_commCd.getValue(),
      impYn: cbx_impYn.getValue(),
      expYn: cbx_expYn.getValue(),
      domesticYn: cbx_domesticYn.getValue(),
      clntNo: ed_clntNo.getValue(),
      odrKndCd: acb_odrKndCd.getValue(),
      stdWrkPathNo: acb_stdWrkPathNo.getValue(),
      ctrtTrfFrom: ed_ctrtTrfFrom.getValue(),
      ctrtTrfTo: ed_ctrtTrfTo.getValue(),
      regLobranCd: ed_regLobranCd.getValue(),
      regDtFrom: ed_regDtFrom.getValue(),
      regDtTo: ed_regDtTo.getValue(),
      lobranCd: ed_regLobranCd.getValue(),
      terminalCtrtNo: chb_terminalCtrtNo.getValue(),
      dptDistrictCd: ed_dptDistrictCd.getValue(),
      arvDistrictCd: ed_arvDistrictCd.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100 // 배율 설정
    },
    formParam: {
      'selpchItemNm': acb_selpchItemCd.selectedItem.orgLabel,
      'commNm': ed_commNm.getValue(),
      'clntNm': ed_clntNm.getValue(),
      'odrKndNm': odrKndNm,
      'stdWrkPathNm': stdWrkPathNm,
      'regLobranNm': ed_regLobranNm.getValue(),
      'dptDistrictNm': ed_dptDistrictNm.getValue(),
      'arvDistrictNm': ed_arvDistrictNm.getValue(),
      'lobranNm': scwin.lobranNm
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
scwin.sbm_commonPopup_submitdone = function (e) {
  console.log("scwin.sbm_commonPopup_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_ctrt.setColumnVisibleColumn("bulkUnitNm", false);
  gr_ctrt.setColumnVisibleColumn("bulkCrcNm", false);
  gr_ctrt.setColumnVisibleColumn("bulkCtrtTrf", false);
  ed_ctrtTrfFrom.setValue("");
  ed_ctrtTrfTo.setValue("");
  acb_selpchItemCd.setValue("0010");
};
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
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
  if (info.newValue == "1") {
    gr_ctrt.setColumnVisible("cntrTypNm", true);
    gr_ctrt.setColumnVisible("fullEmptyClsNm", true);
    gr_ctrt.setColumnVisible("cntrUnitNm", true);
    gr_ctrt.setColumnVisible("cntrCrcNm", true);
    gr_ctrt.setColumnVisible("ctrtTrf20", true);
    gr_ctrt.setColumnVisible("ctrtTrf40", true);
    gr_ctrt.setColumnVisible("ctrtTrf45", true);
    gr_ctrt.setColumnVisible("transCondNm", true);
    gr_ctrt.setColumnVisible("cntrWtCondNm", true);
    gr_ctrt.setColumnVisible("commNm", false);
    gr_ctrt.setColumnVisible("bulkUnitNm", false);
    gr_ctrt.setColumnVisible("bulkCrcNm", false);
    gr_ctrt.setColumnVisible("eqKndNm", false);
    gr_ctrt.setColumnVisible("trfAdptNm", false);
    gr_ctrt.setColumnVisible("wrkStHh", false);
    gr_ctrt.setColumnVisible("wrkEndHh", false);
    gr_ctrt.setColumnVisible("ctrtTrf1", false);
    gr_ctrt.setColumnVisible("ctrtTrf2", false);
    gr_ctrt.setColumnVisible("ctrtTrf3", false);
    gr_ctrt.setColumnVisible("ctrtTrf4", false);
    gr_ctrt.setColumnVisible("ctrtTrf5", false);
    gr_ctrt.setColumnVisible("ctrtTrf6", false);
    gr_ctrt.setColumnVisible("ctrtTrf7", false);
    gr_ctrt.setColumnVisible("ctrtTrf8", false);
    gr_ctrt.setColumnVisible("ctrtTrf9", false);
  } else if (info.newValue == "0") {
    gr_ctrt.setColumnVisible("cntrTypNm", false);
    gr_ctrt.setColumnVisible("fullEmptyClsNm", false);
    gr_ctrt.setColumnVisible("cntrUnitNm", false);
    gr_ctrt.setColumnVisible("cntrCrcNm", false);
    gr_ctrt.setColumnVisible("ctrtTrf20", false);
    gr_ctrt.setColumnVisible("ctrtTrf40", false);
    gr_ctrt.setColumnVisible("ctrtTrf45", false);
    gr_ctrt.setColumnVisible("transCondNm", false);
    gr_ctrt.setColumnVisible("cntrWtCondNm", false);
    gr_ctrt.setColumnVisible("commNm", true);
    gr_ctrt.setColumnVisible("bulkUnitNm", true);
    gr_ctrt.setColumnVisible("bulkCrcNm", true);
    gr_ctrt.setColumnVisible("bulkCtrtTrf", true);
    gr_ctrt.setColumnVisible("eqKndNm", true);
    gr_ctrt.setColumnVisible("trfAdptNm", true);
    gr_ctrt.setColumnVisible("wrkStHh", true);
    gr_ctrt.setColumnVisible("wrkEndHh", true);
    gr_ctrt.setColumnVisible("ctrtTrf1", true);
    gr_ctrt.setColumnVisible("ctrtTrf2", true);
    gr_ctrt.setColumnVisible("ctrtTrf3", true);
    gr_ctrt.setColumnVisible("ctrtTrf4", true);
    gr_ctrt.setColumnVisible("ctrtTrf5", true);
    gr_ctrt.setColumnVisible("ctrtTrf6", true);
    gr_ctrt.setColumnVisible("ctrtTrf7", true);
    gr_ctrt.setColumnVisible("ctrtTrf8", true);
    gr_ctrt.setColumnVisible("ctrtTrf9", true);
  }
};

//품목품명 찾기 버튼
scwin.udc_commCd_onclickEvent = async function (e) {
  console.log("scwin.udc_commCd_onclickEvent");
  scwin.f_openCommonPopUp(1, ed_commCd.getValue(), ed_commNm.getValue(), "F", "F");
};
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 1);
};
scwin.udc_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 1, false);
};

//거래처 찾기 버튼
scwin.udc_clntNo_onclickEvent = async function (e) {
  console.log("scwin.udc_clntNo_onclickEvent");
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 2);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 2, false);
};

//등록점소 찾기 버튼 
scwin.udc_regLobranCd_onclickEvent = async function (e) {
  console.log("scwin.udc_regLobranCd_onclickEvent");
  scwin.f_openCommonPopUp(3, ed_regLobranCd.getValue(), ed_regLobranNm.getValue(), "F", "F");
};
scwin.udc_regLobranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regLobranCd, ed_regLobranNm, 3);
};
scwin.udc_regLobranCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_regLobranNm, ed_regLobranCd, 3, false);
};

//권역구간 찾기 버튼
scwin.udc_dptDistrictCd_onclickEvent = async function (e) {
  console.log("scwin.udc_dptDistrictCd_onclickEvent");
  scwin.f_openCommonPopUp(4, ed_dptDistrictCd.getValue(), ed_dptDistrictNm.getValue(), "F", "F");
};
scwin.udc_dptDistrictCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptDistrictCd, ed_dptDistrictNm, 4);
};
scwin.udc_dptDistrictCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dptDistrictNm, ed_dptDistrictCd, 4, false);
};
scwin.udc_arvDistrictCd_onclickEvent = async function (e) {
  console.log("scwin.udc_dptDistrictCd_onclickEvent");
  scwin.f_openCommonPopUp(5, ed_arvDistrictCd.getValue(), ed_arvDistrictNm.getValue(), "F", "F");
};
scwin.udc_arvDistrictCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvDistrictCd, ed_arvDistrictNm, 5);
};
scwin.udc_arvDistrictCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvDistrictNm, ed_arvDistrictCd, 5, false);
};

//작업구간 찾기 버튼
scwin.udc_dptWrkPlCd_onclickEvent = async function (e) {
  console.log("scwin.udc_dptWrkPlCd_onclickEvent");
  scwin.f_openCommonPopUp(6, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), "F", "F");
};
scwin.udc_dptWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlCd, ed_dptWrkPlNm, 6);
};
scwin.udc_dptWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_dptWrkPlNm, ed_dptWrkPlCd, 6, false);
};
scwin.udc_arvWrkPlCd_onclickEvent = async function (e) {
  console.log("scwin.udc_arvWrkPlCd_onclickEvent");
  scwin.f_openCommonPopUp(7, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), "F", "F");
};
scwin.udc_arvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlCd, ed_arvWrkPlNm, 7);
};
scwin.udc_arvWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_arvWrkPlNm, ed_arvWrkPlCd, 7, false);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width: 230px;',submenuSize:'auto',displayFormatter:'scwin.select_delimiter',ref:'data:dma_search.selpchItemCd',allOption:'',chooseOption:'',searchTarget:'both',mandatory:'true',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너/벌크',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_cntrBulkYn',ref:'data:dma_search.cntrBulkYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_cntrBulkYn_onchange',mandatory:'true',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목/품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_commCd',nameId:'ed_commNm',id:'udc_commCd',UpperFlagCode:'1',maxlengthCode:'8',maxlengthName:'10',btnId:'btn_commCd',code:'commCd',selectID:'retrieveCommInfo',popupTitle:'품목/품명,품목／품명코드,품목／품명',popupGridHeadTitle:'품목/품명코드,품목/품명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_commCd_onclickEvent',refDataCollection:'dma_search',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'data:dma_search.impYn',appearance:'full',style:'',id:'cbx_impYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{falseValue:'0',ref:'data:dma_search.expYn',appearance:'full',style:'',id:'cbx_expYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{falseValue:'0',ref:'data:dma_search.domesticYn',appearance:'full',style:'',id:'cbx_domesticYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clntNo',btnId:'btn_clntNo',selectID:'retrieveClntInfo',maxlengthCode:'6',maxlengthName:'30',allowCharCode:'0-9',popupTitle:'거래처,거래처코드,거래처명',popupGridHeadTitle:'거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',popupGridHiddenColumn:'9,10',code:'clntNo',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width: 208px;',submenuSize:'auto',ref:'data:dma_search.odrKndCd',chooseOption:'true',chooseOptionLabel:'-전체-',searchTarget:'both',allOption:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준작업경로',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_stdWrkPathNo',search:'start',style:'width: 230px;',submenuSize:'auto',ref:'data:dma_search.stdWrkPathNo',chooseOption:'true',chooseOptionLabel:'-전체-',searchTarget:'both',objType:'data',allOption:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약요율 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_ctrtTrfFrom',placeholder:'',class:'',allowChar:'0-9',maxlength:'18',ref:'data:dma_search.ctrtTrfFrom',dataType:'number',displayFormat:'#,###',objType:'data'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_ctrtTrfTo',placeholder:'',class:'',dataType:'number',displayFormat:'#,###',allowChar:'0-9',maxlength:'18',ref:'data:dma_search.ctrtTrfTo',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록점소 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_regLobranCd',nameId:'ed_regLobranNm',id:'udc_regLobranCd',btnId:'btn_regLobranCd',selectID:'retrieveLogisDeptInfo',code:'lobranCd',popupGridHeadTitle:'등록점소코드,등록점소명',popupTitle:'등록점소,등록점소코드,등록점소명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_regLobranCd_onclickEvent',refDataCollection:'dma_search',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_regLobranCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_regLobranCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'regDtTo',refStDt:'regDtFrom',style:'',edFromId:'ed_regDtFrom',edToId:'ed_regDtTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최종계약번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'',id:'chb_terminalCtrtNo',ref:'data:dma_search.terminalCtrtNo',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권역구간',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group '},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',id:'udc_dptDistrictCd',codeId:'ed_dptDistrictCd',nameId:'ed_dptDistrictNm',btnId:'btn_dptDistrictCd',selectID:'retrieveDistrictList',popupGridHeadTitle:'출발권역코드,출발권역명',popupTitle:'출발권역,출발권역코드,출발권역명',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_dptDistrictCd_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',code:'dptDistrictCd',refDataCollection:'dma_search',objTypeCode:'Data',objTypeName:'Data','ev:onviewchangeNameEvent':'scwin.udc_dptDistrictCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_dptDistrictCd_onblurCodeEvent'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',btnId:'btn_arvDistrictCd',codeId:'ed_arvDistrictCd',id:'udc_arvDistrictCd',nameId:'ed_arvDistrictNm',selectID:'retrieveDistrictList',code:'arvDistrictCd',popupGridHeadTitle:'도착권역코드,도착권역명',popupTitle:'도착권역,도착권역코드,도착권역명',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_arvDistrictCd_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',refDataCollection:'dma_search',objTypeCode:'Data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_arvDistrictCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_arvDistrictCd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구간',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',btnId:'btn_dptWrkPlCd',codeId:'ed_dptWrkPlCd',id:'udc_dptWrkPlCd',nameId:'ed_dptWrkPlNm',code:'dptWrkPlCd',selectID:'retrieveWrkPlInfo',popupGridHeadTitle:'작업장코드,작업장명',popupTitle:'작업장,작업장코드,작업장명',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',refDataCollection:'dma_search',objTypeCode:'Data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_dptWrkPlCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onblurCodeEvent'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',btnId:'btn_arvWrkPlCd',codeId:'ed_arvWrkPlCd',id:'udc_arvWrkPlCd',nameId:'ed_arvWrkPlNm',code:'arvWrkPlCd',selectID:'retrieveWrkPlInfo',popupGridHeadTitle:'작업장코드,작업장명',popupTitle:'작업장,작업장코드,작업장명',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',refDataCollection:'dma_search',objTypeCode:'Data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_arvWrkPlCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송계약요율현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',grdDownOpts:'{"fileName":"운송계약요율현황.xlsx", "sheetName" : "운송계약요율현황"}',gridUpYn:'N',templateYn:'N',btnUser:'N',gridDownUserAuth:'X',gridID:'gr_ctrt',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_ctrt',focusMode:'row',id:'gr_ctrt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'80',value:'거래처<br/>번호',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'거래처명',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'계약번호',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'오더종류',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'수출입구분',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업경로',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'요율 항목',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'운송구간',width:'140',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column56',value:'컨테이너타입',displayMode:'label',rowSpan:'2',style:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'컨테이너<br/>F/E',displayMode:'label',rowSpan:'2',style:''}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column50',value:'단위',displayMode:'label',rowSpan:'2',style:''}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column47',value:'통화',displayMode:'label',rowSpan:'2',style:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column44',value:'요율',displayMode:'label',colSpan:'3',sortable:'false',style:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',value:'운송조건',displayMode:'label',rowSpan:'2',style:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'H/L/C',displayMode:'label',rowSpan:'2',style:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'작업점소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column74',value:'품목/품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'단위',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column68',value:'통화',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'장비종류',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',value:'요율적용',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column65',value:'소요시간',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'630',inputType:'text',id:'column92',value:'요율',displayMode:'label',colSpan:'9',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column107',value:'계약기간',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',value:'등록점소',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column101',value:'등록일자',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',value:'출발권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'도착권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column45',value:'20',displayMode:'label',style:''}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column42',value:'40',displayMode:'label',style:''}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column39',value:'45',displayMode:'label',style:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',value:'시작시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',value:'종료시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',value:'1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'2.5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',value:'3.5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column84',value:'5',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',value:'8',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column120',value:'11',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column117',value:'15',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column114',value:'18',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column111',value:'25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column108',value:'시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',value:'종료일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ordKndNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpYn',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrTypNm',displayMode:'label',textAlign:'left',style:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fullEmptyClsNm',displayMode:'label',textAlign:'left',style:''}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'cntrUnitNm',displayMode:'label',style:''}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'cntrCrcNm',displayMode:'label',style:''}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'ctrtTrf20',displayMode:'label',textAlign:'right',style:'',displayFormat:'#,###',excelFormat:'#,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'ctrtTrf40',displayMode:'label',textAlign:'right',style:'',excelFormat:'#,###',displayFormat:'#,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'ctrtTrf45',displayMode:'label',textAlign:'right',style:'',excelFormat:'#,###',displayFormat:'#,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'transCondNm',displayMode:'label',textAlign:'left',style:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrWtCondNm',displayMode:'label',textAlign:'left',style:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bulkUnitNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bulkCrcNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'trfAdptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf1',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf2',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf3',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf4',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf5',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf6',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf7',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf8',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf9',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'ctrtStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'ctrtEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regLobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtPrint',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_ctrtPrint_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})