/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_41b.xml 65019 da86e38ea4a050e45d7eb8af2c974e1f7c98c2a1d3b78d30837096d02c4dfe03 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveCtrtClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약 거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배분율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_tariff_onrowpositionchange','ev:oncelldatachange':'scwin.ds_tariff_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtInternalTrfSeq',name:'계약내부요율순번',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtInternalTrf',name:'계약내부요율',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hidLobranNm',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역코드명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hidDptDistrictNm',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역코드명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hidArvDistrictNm',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dataMode',name:'#N/A',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpMode',name:'#N/A',dataType:'String'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_page'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목',dataType:'number'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'targetRow',name:'#N/A',dataType:'Integer'}},{T:1,N:'w2:key',A:{id:'numOfRowPerPage',name:'#N/A',dataType:'bigDecimal'}},{T:1,N:'w2:key',A:{id:'numOfIndexPerPage',name:'#N/A',dataType:'bigDecimal'}},{T:1,N:'w2:key',A:{id:'currentPage',name:'#N/A',dataType:'bigDecimal'}},{T:1,N:'w2:key',A:{id:'totalPage',name:'#N/A',dataType:'bigDecimal'}},{T:1,N:'w2:key',A:{id:'totalRecords',name:'#N/A',dataType:'bigDecimal'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPathEachWorkStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'#N/A',dataType:'String'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtInternalTrf',name:'계약내부요율',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역명',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractInternalTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_page","key":"IN_DS1"}, {"id":"oGDS_page","key":"OUT_DS1"}, {"id":"ds_tariff","key":"OUT_DS2"}]',target:'data:json,[{"id":"oGDS_page","key":"OUT_DS1"}, {"id":"ds_tariff","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtClnt',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveCtrtClnt","key":"IN_DS1"}, {"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrtNo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtClnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selpchItemCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_commonPopup","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_selpchItemCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_contractWorkPath_submitdone','ev:submiterror':'',id:'sbm_contractWorkPath',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_commonPopup',replace:'',target:'data:json,GAUCE',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_contractWorkPathEachWorkStep_submitdone','ev:submiterror':'',id:'sbm_contractWorkPathEachWorkStep',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_commonPopup',replace:'',style:'',target:'data:json,GAUCE'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveContractInternalTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tariff","key":"IN_DS1"}',target:'data:json,{"id":"ds_tariff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_SD_ERR_001 = "원화인 경우 소수점을 입력 할 수 없습니다.";
scwin.MSG_SD_ERR_002 = "%1행, %2칼럼의 코드가 일치하지 않습니다.";
scwin.lg_CANROWPOSCHANGE = "true";
scwin._suppressCtrtNoChange = false;
scwin._prevCtrtClntNo = "";
scwin.onpageload = function () {};

//--------------------------------------- ----------------------------------
// 화면로딩시 UDC 호출  
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_tariff:crcCd",
    opt: {
      "range": "1"
    }
  },
  // 통화
  {
    grpCd: "ZZ006",
    compID: "gr_tmp_tariff:crcCd",
    opt: {
      "range": "1"
    }
  } // 통
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  // ASIS: ds_tariff는 보존, 조회조건 관련 데이터셋만 초기화
  ds_ctrtNo.removeAll();
  ds_selpchItemCd.removeAll();
  ds_contractWorkPath.removeAll();
};

//-------------------------------------------------------------------------
// 데이타셋 Clear
//-------------------------------------------------------------------------
scwin.f_datasetClear = function () {
  ds_ctrtNo.removeAll();
  ds_contractWorkPath.removeAll();
  ds_contractWorkPathEachWorkStep.removeAll();
  ds_selpchItemCd.removeAll();
  ds_tariff.removeAll();
  oGDS_page.set("ctrtNo", "");
  // lc_ctrtNo.setValue("");
  oGDS_page.set("selpchItemCd", "");
  oGDS_page.set("ctrtWrkPathSeq", "");
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (codeObj, nameObj, pSelectId, pColTitle, pCndTitle, pDispCnt, pWidth, pWhere, pWinCloseTF, pHidden, pW, pH) {
  // EMEdit
  if ($c.gus.cfGetElementType($p, codeObj) == "GE") {
    pParamCd = codeObj.getValue();
  }
  // input type=text 또는 input type=hidden
  else if ($c.gus.cfGetElementType($p, codeObj) == "TEXT" || $c.gus.cfGetElementType($p, codeObj) == "HIDDEN") {
    pParamCd = codeObj.getValue();
  }

  // EMEdit
  if ($c.gus.cfGetElementType($p, nameObj) == "GE") {
    pParamNm = nameObj.getValue();
  }
  // input type=text 또는 input type=hidden
  else if ($c.gus.cfGetElementType($p, nameObj) == "TEXT" || $c.gus.cfGetElementType($p, nameObj) == "HIDDEN") {
    pParamNm = nameObj.getValue();
  }
  scwin.udc_ctrtClntNo_onclickEvent('T');
};
scwin.udc_ctrtClntNo_onclickEvent = function (pWinCloseTF) {
  udc_ctrtClntNo.cfCommonPopUp(scwin.udc_ctrtClntNo_callBackFunc, ed_ctrtClntNo.getValue() //pCode
  , ed_ctrtClntNm.getValue() //pName
  , pWinCloseTF //pWinCloseTF	
  , '9' //pDispCnt
  , '거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,' //pTitle
  , '100,100,0,120,100,0,100,100,100,0' //pWidth
  , '3,10' //pHidden	
  , 'LOGISCLNT1,S,CTRT' //pWhere
  , '800' //pW
  , '600' //pH
  , null //pTop
  , null //pLeft
  , null //pExistTF
  , "F" //pAllSearchTF
  , '거래처,거래처코드,거래처명'); //pWtitleSearch
};

////////////////////////////////////////////////////////
// 거래처 코드 blur — 코드 입력 후 포커스 아웃 시 코드만으로 검색
////////////////////////////////////////////////////////
scwin.udc_ctrtClntNo_onblurCodeEvent = function (e) {
  if (ed_ctrtClntNo.getValue() == "") {
    ed_ctrtClntNm.setValue("");
    scwin._prevCtrtClntNo = "";
    return;
  }
  // ASIS Modified 체크 대응: 값이 변경되지 않았으면 무시
  if (ed_ctrtClntNo.getValue() == scwin._prevCtrtClntNo) return;
  udc_ctrtClntNo.cfCommonPopUp(scwin.udc_ctrtClntNo_callBackFunc, ed_ctrtClntNo.getValue() //pCode
  , '' //pName — 코드만 조회
  , 'T' //pWinCloseTF
  , '9', '거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,', '100,100,0,120,100,0,100,100,100,0', '3,10', 'LOGISCLNT1,S,CTRT', '800', '600', null, null, null, "F", '거래처,거래처코드,거래처명');
};

////////////////////////////////////////////////////////
// 거래처 이름 blur — 이름 입력 후 포커스 아웃 시 이름만으로 검색
////////////////////////////////////////////////////////
scwin.udc_ctrtClntNo_onblurNameEvent = function (e) {
  if (ed_ctrtClntNm.getValue() == "") {
    ed_ctrtClntNo.setValue("");
    return;
  }
  udc_ctrtClntNo.cfCommonPopUp(scwin.udc_ctrtClntNo_callBackFunc, '' //pCode — 이름만 조회
  , ed_ctrtClntNm.getValue() //pName
  , 'T' //pWinCloseTF
  , '9', '거래처번호,거래처명,,사업자등록번호,요율연결여부,우편번호,주소,상세주소,거래처담당자,', '100,100,0,120,100,0,100,100,100,0', '3,10', 'LOGISCLNT1,S,CTRT', '800', '600', null, null, null, "F", '거래처,거래처코드,거래처명');
};

////////////////////////////////////////////////////////
// 계약처 공통 팝업 콜백
////////////////////////////////////////////////////////
scwin.udc_ctrtClntNo_callBackFunc = function (ret) {
  ed_ctrtClntNo.setValue(ret[0]);
  ed_ctrtClntNm.setValue(ret[1]);
  scwin._prevCtrtClntNo = ret[0];
  if (ed_ctrtClntNo.getValue() != "") {
    scwin.f_datasetClear();
    // sbm 응답 시 ds_ctrtNo 바인딩으로 select1 자동선택 방지
    scwin._suppressCtrtNoChange = true;
    $c.sbm.execute($p, sbm_retrieveCtrtClnt);
  }
};

////////////////////////////////////////////////////////
// 조회 완료시
////////////////////////////////////////////////////////
scwin.sbm_retrieveCtrtClnt_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // ASIS SortExpr="-ctrtNo" 대응: ctrtNo 내림차순 정렬
    ds_ctrtNo.sort("ctrtNo", 1);
    let rowCnt = ds_ctrtNo.getRowCount();
    if (rowCnt == 0) {
      scwin._suppressCtrtNoChange = false;
      $c.win.alert($p, "거래처 " + ed_ctrtClntNm.getValue() + "의 계약번호이(가) 존재하지 않습니다.");
      return;
    } else {
      // "선택" 상태 유지
      oGDS_page.set("ctrtNo", "");
      // 종속 데이터 초기화
      ds_selpchItemCd.removeAll();
      ds_contractWorkPath.removeAll();
      ds_contractWorkPathEachWorkStep.removeAll();
      ds_tariff.removeAll();
      // autoComplete UI 값도 초기화
      acb_selpchItemCd.setValue("");
      acb_contractWorkPath.setValue("");
    }
    scwin._suppressCtrtNoChange = false;
  }
};

////////////////////////////////////////////////////////
// 계약번호 선택 변경시
////////////////////////////////////////////////////////
scwin.lc_ctrtNo_onchange = async function (info) {
  // sbm_retrieveCtrtClnt_submitdone 처리 중 자동선택에 의한 cascade 방지
  if (scwin._suppressCtrtNoChange) return;
  if (info.newValue != "" && info.newValue != null) {
    // ds_selpchItemCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ContractEBC&queryId=retrieveContractWorkStepTariffItemList&param1=" + lc_ctrtNo.BindColVal;
    // ds_selpchItemCd.Reset();
    const strParam = {
      sysCd: "ContractEBC" // 시스템코드
      ,

      queryId: "retrieveContractWorkStepTariffItemList" // 쿼리ID
      ,

      param1: lc_ctrtNo.getValue(),
      param2: "",
      param3: ""
    };

    //데이터셋에 정보설정
    dma_commonPopup.setJSON(strParam);
    await $c.sbm.execute($p, sbm_selpchItemCd);
  }
};

////////////////////////////////////////////////////////
// 요율항목 조회 완료시
////////////////////////////////////////////////////////
scwin.sbm_selpchItemCd_submitdone = async function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (e.responseJSON.GAUCE) {
      ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
      acb_selpchItemCd.setSelectedIndex(0);
      // setSelectedIndex로는 onchange가 발생하지 않으므로 직접 작업경로 로딩
      if (acb_selpchItemCd.getValue()) {
        const strParam = {
          sysCd: "ContractEBC",
          queryId: "retrieveContractSelPchItemEachWorkPath",
          param1: lc_ctrtNo.getValue(),
          param2: acb_selpchItemCd.getValue()
        };
        dma_commonPopup.setJSON(strParam);
        await $c.sbm.execute($p, sbm_contractWorkPath);
      }
    }
  }
};

////////////////////////////////////////////////////////
// 요율항목 선택 변경시
////////////////////////////////////////////////////////
scwin.acb_selpchItemCd_onchange = async function (info) {
  // let row = info.newRowIndex
  // if (row > 0) {
  if (info.newValue != "") {
    // dma_commonPopup.
    // ds_contractWorkPath.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ContractEBC&queryId=retrieveContractSelPchItemEachWorkPath&param1=" + lc_ctrtNo.BindColVal + "&param2=" + ds_selpchItemCd.NameValue(row, "selpchItemCd");
    // ds_contractWorkPath.Reset();
    const strParam = {
      sysCd: "ContractEBC" // 시스템코드
      ,

      queryId: "retrieveContractSelPchItemEachWorkPath" // 쿼리ID
      ,

      param1: lc_ctrtNo.getValue(),
      param2: acb_selpchItemCd.getValue()
    };
    // , param2: ds_selpchItemCd.getCellData(row, "selpchItemCd")

    //데이터셋에 정보설정
    dma_commonPopup.setJSON(strParam);
    await $c.sbm.execute($p, sbm_contractWorkPath);
  }
};
scwin.sbm_contractWorkPath_submitdone = async function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (e.responseJSON.GAUCE) {
      ds_contractWorkPath.setJSON(e.responseJSON.GAUCE);
      acb_contractWorkPath.setSelectedIndex(0);
      // setSelectedIndex로는 onchange가 발생하지 않으므로 직접 작업단계 로딩
      if (acb_contractWorkPath.getValue()) {
        const strParam = {
          sysCd: "ContractEBC",
          queryId: "retrieveContractWorkPathEachWorkStep",
          param1: lc_ctrtNo.getValue(),
          param2: acb_contractWorkPath.getValue(),
          param3: acb_selpchItemCd.getValue()
        };
        dma_commonPopup.setJSON(strParam);
        await $c.sbm.execute($p, sbm_contractWorkPathEachWorkStep);
      }
    }
  }
};

////////////////////////////////////////////////////////
// 작업경로 선택 변경시
////////////////////////////////////////////////////////
scwin.acb_contractWorkPath_onchange = async function (info) {
  if (info.newValue != "") {
    const strParam = {
      sysCd: "ContractEBC" // 시스템코드
      ,

      queryId: "retrieveContractWorkPathEachWorkStep" // 쿼리ID
      ,

      param1: lc_ctrtNo.getValue(),
      param2: acb_contractWorkPath.getValue(),
      param3: acb_selpchItemCd.getValue()
    };
    // , param2: ds_contractWorkPath.getCellData(row, "ctrtWrkPathSeq")
    // , param3: acb_selpchItemCd.getValue("selpchItemCd", acb_selpchItemCd.getSelectedIndex())

    //데이터셋에 정보설정
    dma_commonPopup.setJSON(strParam);
    await $c.sbm.execute($p, sbm_contractWorkPathEachWorkStep);
  }
};

////////////////////////////////////////////////////////
// 작업경로 조회 완료
////////////////////////////////////////////////////////
scwin.sbm_contractWorkPathEachWorkStep_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (e.responseJSON.GAUCE) {
      ds_contractWorkPathEachWorkStep.setJSON(e.responseJSON.GAUCE);
      if (acb_contractWorkPath.getValue() != "") {
        scwin.f_Retrieve();
      }
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : 페이지 이동
//-------------------------------------------------------------------------
scwin.moveToPage = function (targetRow) {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var ctrtNo = lc_ctrtNo.getValue();

  // 필수값 검증
  if (!ed_ctrtClntNo.getValue()) {
    $c.win.alert($p, "계약처는 필수 입력 항목입니다.");
    ed_ctrtClntNo.focus();
    return;
  }
  if (!lc_ctrtNo.getValue()) {
    $c.win.alert($p, "계약번호는 필수 입력 항목입니다.");
    lc_ctrtNo.focus();
    return;
  }

  // if (lc_selpchItemCd.ValueOfIndex("selpchItemCd", lc_selpchItemCd.Index) == "") {
  if (!acb_selpchItemCd.getValue()) {
    $c.win.alert($p, "요율항목은 필수 입력 항목입니다.");
    acb_selpchItemCd.focus();
    return;
  }

  // if (lc_contractWorkPath.ValueOfIndex("ctrtWrkPathSeq", lc_contractWorkPath.Index) == "") {
  if (!acb_contractWorkPath.getValue()) {
    $c.win.alert($p, "작업경로는 필수 입력 항목입니다.");
    acb_contractWorkPath.focus();
    return;
  }

  // scwin.moveToPage('');
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (moveGb) {
  if (ds_tariff.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("보관-내부요율"));
    return false;
  } else {
    if (await scwin.f_reqFieldChk()) {
      if (!moveGb || moveGb == "") {
        let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
        if (ret) {
          // tr_save.Action = "/ds.sd.salesactiv.ctrtmgnt.SaveContractInternalTariffListCMD.do"
          // tr_save.Post();
          $c.sbm.execute($p, sbm_save);
          return true;
        } else {
          return false;
        }
      } else {
        // tr_save.Action = "/ds.sd.salesactiv.ctrtmgnt.SaveContractInternalTariffListCMD.do"
        // tr_save.Post()
        $c.sbm.execute($p, sbm_save);
        return true;
      }
    } else {
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_reqFieldChk
// function desc : 필수항목 check
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = async function () {
  let ret = await $c.gus.cfValidate($p, [gr_tariff], null, true);
  if (!ret) {
    return false;
  }
  for (var i = 0; i < ds_tariff.getRowCount(); i++) {
    if (ds_tariff.getCellData(i, "wrkStpMode") == "1" && (ds_tariff.getCellData(i, "dptDistrictCd") == "" || ds_tariff.getCellData(i, "arvDistrictCd") == "")) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("운송조건"));
      ds_tariff.setRowPosition(i);
      gr_tariff.setFocusedCell("dptDistrictNm");
      return false;
    }
    if (ds_tariff.getCellData(i, 'wrkStpMode') == "2" && ds_tariff.getCellData(i, "lobranCd") == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("작업점소"));
      ds_tariff.setRowPosition(i);
      gr_tariff.setFocusedCell("lobranNm");
      return false;
    }
    if (ds_tariff.getCellData(i, "crcCd") == "KRW" && ds_tariff.getCellData(i, "ctrtInternalTrf") % 1 > 0) {
      $c.win.alert($p, scwin.MSG_SD_ERR_001);
      ds_tariff.setRowPosition(i);
      gr_tariff.setFocusedCell("ctrtInternalTrf");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회 완료시
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // dataMode='I' 행이 있으면 dirty 플래그 초기화 (ASIS OnLoadCompleted 대응)
    if (ds_tariff.getRowCount() > 0 && ds_tariff.getCellData(0, "dataMode") == "I") {
      ds_tariff.reform();
    }
    // 총건수 영역 표시 및 건수 세팅
    grp_totalCnt.show();
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
  }
};

//-------------------------------------------------------------------------
// 저장 callback
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// function name : f_upload
// function desc : Excel등록 - 엑셀 파일 업로드 팝업 호출
//-------------------------------------------------------------------------
scwin.f_upload = function () {
  debugger;
  var options = {
    headerExist: 1,
    header: 1,
    type: "1",
    startRowIndex: 1,
    footerExist: "0"
  };
  ds_tmp_tariff.removeAll();
  udc_topGrp.uploadGridViewExcel(gr_tmp_tariff, options);
};

//-------------------------------------------------------------------------
// function name : gr_tmp_tariff_onfilereadend
// function desc : Excel 파일 읽기 완료 후 데이터 가공 처리
//-------------------------------------------------------------------------
scwin.gr_tmp_tariff_onfilereadend = function () {
  if (ds_tmp_tariff.getRowCount() == 0) {
    return;
  }
  scwin.f_import();
};

//-------------------------------------------------------------------------
// function name : f_import
// function desc : 임시 데이터셋 → ds_tariff 로 데이터 이관 및 코드 검증
//                 ASIS: cfCommonPopUp("T") 모드로 동기 코드검증 수행
//                 TOBE: UDC cfCommonPopUpAsync 로 비동기 코드검증 수행
//-------------------------------------------------------------------------
scwin.f_import = async function () {
  debugger;
  ds_tariff.removeAll();
  for (var i = 0; i < ds_tmp_tariff.getRowCount(); i++) {
    var row = ds_tariff.insertRow();

    // 조회조건에서 키 값 설정 (ctrtNo는 하이픈 제거)
    ds_tariff.setCellData(row, "ctrtNo", (lc_ctrtNo.getValue() || "").replace(/-/g, ""));
    ds_tariff.setCellData(row, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_tariff.setCellData(row, "ctrtWrkPathSeq", acb_contractWorkPath.getValue());
    let wrkStpCd = ds_tmp_tariff.getCellData(i, "wrkStpCd");
    if (!$c.util.isEmpty($p, wrkStpCd)) {
      wrkStpCd = wrkStpCd.split(":")[0];
      wrkStpCd = $.trim(wrkStpCd);
    }
    // 엑셀 데이터 복사
    ds_tariff.setCellData(row, "wrkStpCd", ds_tmp_tariff.getCellData(i, "wrkStpCd"));
    ds_tariff.setCellData(row, "commCd", ds_tmp_tariff.getCellData(i, "commCd"));
    ds_tariff.setCellData(row, "commNm", ds_tmp_tariff.getCellData(i, "commNm"));
    ds_tariff.setCellData(row, "unitCd", ds_tmp_tariff.getCellData(i, "unitCd"));
    ds_tariff.setCellData(row, "crcCd", ds_tmp_tariff.getCellData(i, "crcCd"));
    ds_tariff.setCellData(row, "ctrtInternalTrf", ds_tmp_tariff.getCellData(i, "ctrtInternalTrf"));
    ds_tariff.setCellData(row, "lobranCd", ds_tmp_tariff.getCellData(i, "lobranCd"));
    ds_tariff.setCellData(row, "lobranNm", ds_tmp_tariff.getCellData(i, "lobranNm"));
    ds_tariff.setCellData(row, "dptDistrictCd", ds_tmp_tariff.getCellData(i, "dptDistrictCd"));
    ds_tariff.setCellData(row, "dptDistrictNm", ds_tmp_tariff.getCellData(i, "dptDistrictNm"));
    ds_tariff.setCellData(row, "arvDistrictCd", ds_tmp_tariff.getCellData(i, "arvDistrictCd"));
    ds_tariff.setCellData(row, "arvDistrictNm", ds_tmp_tariff.getCellData(i, "arvDistrictNm"));

    // 작업단계 코드로 topWrkStpCd 조회하여 wrkStpMode 설정
    //  var wrkStpCd = ds_tmp_tariff.getCellData(i, "wrkStpCd");
    var matchedArr = ds_contractWorkPathEachWorkStep.getMatchedIndex("wrkStpCd", wrkStpCd);
    if (matchedArr.length > 0) {
      var topWrkStpCd = ds_contractWorkPathEachWorkStep.getCellData(matchedArr[0], "topWrkStpCd");
      ds_tariff.setCellData(row, "wrkStpMode", topWrkStpCd);
    }

    // ── 품목코드 검증 (retrieveCommInfo) ──
    if (ds_tmp_tariff.getCellData(i, "commNm") == "") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(i + 1, "품목"));
      ds_tariff.removeAll();
      ds_tmp_tariff.removeAll();
      return;
    }
    udc_comCode_commNm.setSelectId("retrieveCommInfo");
    var commRet = await udc_comCode_commNm.cfCommonPopUpAsync(null, "",
    // pName
    ds_tmp_tariff.getCellData(i, "commNm"),
    // pCode
    "T",
    // pWinCloseTF (자동닫기)
    null, null, null,
    // pDispCnt, pTitle, pWidth
    null,
    // pHidden
    "2,4,,," + ed_ctrtClntNo.getValue(),
    // pWhere
    "440", "500",
    // pW, pH
    null, null, null, null, null,
    // pTop~pWtitleSearch
    "T" // pNoDataCloseTF
    );
    if (!commRet || commRet[0] == "N/A") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(i + 1, "품목"));
      ds_tariff.removeAll();
      ds_tmp_tariff.removeAll();
      return;
    }
    ds_tariff.setCellData(row, "commCd", commRet[0]);
    ds_tariff.setCellData(row, "commNm", commRet[1]);

    // ── 단위코드 검증 (retrieveCommCdInfo) ──
    if (ds_tmp_tariff.getCellData(i, "unitCd") == "") {
      ds_tariff.removeAll();
      ds_tmp_tariff.removeAll();
      return;
    }
    udc_comCode_unitCd.setSelectId("retrieveCommCdInfo");
    var unitRet = await udc_comCode_unitCd.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "unitCd"),
    // pCode
    "",
    // pName
    "T",
    // pWinCloseTF
    null, null, null,
    // pDispCnt, pTitle, pWidth
    null,
    // pHidden
    "LO102,,",
    // pWhere
    "440", "500",
    // pW, pH
    null, null, null, null, null,
    // pTop~pWtitleSearch
    "T" // pNoDataCloseTF
    );
    if (!unitRet || unitRet[0] == "N/A") {
      ds_tariff.removeAll();
      ds_tmp_tariff.removeAll();
      return;
    }

    // ── 작업점소코드 검증 (retrieveLobranInfo) ──
    if (ds_tmp_tariff.getCellData(i, "lobranCd") != "") {
      udc_comCode_lobranNm.setSelectId("retrieveLobranInfo");
      var lobranRet = await udc_comCode_lobranNm.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "lobranCd"),
      // pCode
      "",
      // pName
      "T",
      // pWinCloseTF
      null, null, null,
      // pDispCnt, pTitle, pWidth
      null,
      // pHidden
      null,
      // pWhere
      "440", "500",
      // pW, pH
      null, null, null, null, null,
      // pTop~pWtitleSearch
      "T" // pNoDataCloseTF
      );
      if (!lobranRet || lobranRet[0] == "N/A") {
        await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(i + 1, "작업점소"));
        ds_tariff.removeAll();
        ds_tmp_tariff.removeAll();
        return;
      }
      ds_tariff.setCellData(row, "lobranCd", lobranRet[0]);
      ds_tariff.setCellData(row, "lobranNm", lobranRet[1]);
    }

    // ── 출발권역코드 검증 (retrieveDistrictList) ──
    var ctrtDistrictCd = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtDistrictCd");
    if (ds_tmp_tariff.getCellData(i, "dptDistrictCd") != "") {
      udc_comCode_dptDistrict.setSelectId("retrieveDistrictList");
      var dptRet = await udc_comCode_dptDistrict.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "dptDistrictCd"),
      // pCode
      "",
      // pName
      "T",
      // pWinCloseTF
      null, null, null,
      // pDispCnt, pTitle, pWidth
      null,
      // pHidden
      "1,3," + ctrtDistrictCd + ",,,," + ds_tariff.getCellData(row, "commCd"),
      // pWhere
      "440", "500",
      // pW, pH
      null, null, null, null, null,
      // pTop~pWtitleSearch
      "T" // pNoDataCloseTF
      );
      if (!dptRet || dptRet[0] == "N/A") {
        await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(i + 1, "출발권역"));
        ds_tariff.removeAll();
        ds_tmp_tariff.removeAll();
        return;
      }
      ds_tariff.setCellData(row, "dptDistrictCd", dptRet[0]);
      ds_tariff.setCellData(row, "dptDistrictNm", dptRet[1]);
    }

    // ── 도착권역코드 검증 (retrieveDistrictList) ──
    if (ds_tmp_tariff.getCellData(i, "arvDistrictCd") != "") {
      udc_comCode_arvDistrict.setSelectId("retrieveDistrictList");
      var arvRet = await udc_comCode_arvDistrict.cfCommonPopUpAsync(null, ds_tmp_tariff.getCellData(i, "arvDistrictCd"),
      // pCode
      "",
      // pName
      "T",
      // pWinCloseTF
      null, null, null,
      // pDispCnt, pTitle, pWidth
      null,
      // pHidden
      "1,3," + ctrtDistrictCd + ",,,," + ds_tariff.getCellData(row, "commCd"),
      // pWhere
      "440", "500",
      // pW, pH
      null, null, null, null, null,
      // pTop~pWtitleSearch
      "T" // pNoDataCloseTF
      );
      if (!arvRet || arvRet[0] == "N/A") {
        await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_002, new Array(i + 1, "도착권역"));
        ds_tariff.removeAll();
        ds_tmp_tariff.removeAll();
        return;
      }
      ds_tariff.setCellData(row, "arvDistrictCd", arvRet[0]);
      ds_tariff.setCellData(row, "arvDistrictNm", arvRet[1]);
    }
  }
  ds_tmp_tariff.removeAll();

  // 그리드 건수 표시
  grp_totalCnt.show();
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_tariff.getRowCount()));
};

//-------------------------------------------------------------------------
// function name : gr_tariff_ontextimageclick
// function desc : 그리드 textImage 아이콘 클릭 시 팝업 (ASIS OnPopup 대응)
//-------------------------------------------------------------------------
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_tariff.getColumnID(columnIndex);
  var row = rowIndex;
  if (colid == "commNm") {
    udc_comCode_commNm.setSelectId("retrieveCommInfo");
    udc_comCode_commNm.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") return;
      ds_tariff.setCellData(row, "commCd", ret[0]);
      ds_tariff.setCellData(row, "commNm", ret[1]);
    }, ds_tariff.getCellData(row, "commCd"), ds_tariff.getCellData(row, "commNm"), "F", "3", "품목/품명코드,품목/품명,구분", "120,170,70", "4,5,6,7,8,9,10", "2,4,,," + ed_ctrtClntNo.getValue(), "440", "500", null, null, null, "F", "품목/품명,품목/품명코드,품목/품명");
  } else if (colid == "lobranNm") {
    udc_comCode_lobranNm.setSelectId("retrieveLogisDeptInfo");
    udc_comCode_lobranNm.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") return;
      ds_tariff.setCellData(row, "lobranCd", ret[0]);
      ds_tariff.setCellData(row, "lobranNm", ret[1]);
    }, (ds_tariff.getCellData(row, "lobranCd") || "").trim(), (ds_tariff.getCellData(row, "lobranNm") || "").trim(), "F", "7", "물류부서코드,물류부서명", "150,170", null, "A,B", "440", "500", null, null, null, "F", "물류부서,물류부서코드,물류부서명");
  } else if (colid == "dptDistrictNm") {
    var ctrtDistrictCd = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtDistrictCd");
    udc_comCode_dptDistrict.setSelectId("retrieveDistrictList");
    udc_comCode_dptDistrict.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") return;
      ds_tariff.setCellData(row, "dptDistrictCd", ret[0]);
      ds_tariff.setCellData(row, "dptDistrictNm", ret[1]);
    }, ds_tariff.getCellData(row, "dptDistrictCd"), ds_tariff.getCellData(row, "dptDistrictNm"), "F", "5", "출발권역코드,출발권역명", "150,170", null, "1,3," + ctrtDistrictCd + ",,,," + ds_tariff.getCellData(row, "commCd"), "440", "500", null, null, null, "F", "운송구간 정보,출발권역코드,출발권역명");
  } else if (colid == "arvDistrictNm") {
    var ctrtDistrictCd = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtDistrictCd");
    udc_comCode_arvDistrict.setSelectId("retrieveDistrictList");
    udc_comCode_arvDistrict.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") return;
      ds_tariff.setCellData(row, "arvDistrictCd", ret[0]);
      ds_tariff.setCellData(row, "arvDistrictNm", ret[1]);
    }, ds_tariff.getCellData(row, "arvDistrictCd"), ds_tariff.getCellData(row, "arvDistrictNm"), "F", "5", "도착권역코드,도착권역명", "150,170", null, "1,3," + ctrtDistrictCd + ",,,," + ds_tariff.getCellData(row, "commCd"), "440", "500", null, null, null, "F", "운송구간 정보,도착권역코드,도착권역명");
  } else if (colid == "unitCd") {
    udc_comCode_unitCd.setSelectId("retrieveCommCdInfo");
    udc_comCode_unitCd.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") return;
      ds_tariff.setCellData(row, "unitCd", ret[0]);
      ds_tariff.setCellData(row, "unitNm", ret[1]);
    }, ds_tariff.getCellData(row, "unitCd"), "", "F", "7", null, "150,170", null, "LO102,,", "440", "500", null, null, null, "F", null);
  }
};

//-------------------------------------------------------------------------
// function name : _applyWrkStpMode
// function desc : 작업단계에 따른 편집 제어 공통 로직
//                 topWrkStpCd == "1" (운송): 작업점소 readonly, 출발/도착권역 editable
//                 topWrkStpCd == "2" (보관): 작업점소 editable, 출발/도착권역 readonly
// @param {number} row - ds_tariff 행 인덱스
// @param {boolean} clearFields - true면 반대쪽 필드 초기화 (값 변경 시)
//-------------------------------------------------------------------------
scwin._applyWrkStpMode = function (row, clearFields) {
  var wrkStpCd = ds_tariff.getCellData(row, "wrkStpCd");
  var matchedArr = ds_contractWorkPathEachWorkStep.getMatchedIndex("wrkStpCd", wrkStpCd);
  if (matchedArr.length == 0) {
    return;
  }
  var topWrkStpCd = ds_contractWorkPathEachWorkStep.getCellData(matchedArr[0], "topWrkStpCd");
  ds_tariff.setCellData(row, "wrkStpMode", topWrkStpCd);
  if (topWrkStpCd == "1") {
    // 운송: 작업점소 비활성, 출발/도착권역 활성
    if (clearFields) {
      ds_tariff.setCellData(row, "lobranCd", "");
      ds_tariff.setCellData(row, "lobranNm", "");
    }
    gr_tariff.setCellReadOnly(row, "lobranNm", true);
    gr_tariff.setCellReadOnly(row, "dptDistrictNm", false);
    gr_tariff.setCellReadOnly(row, "arvDistrictNm", false);
  } else if (topWrkStpCd == "2") {
    // 보관: 작업점소 활성, 출발/도착권역 비활성
    if (clearFields) {
      ds_tariff.setCellData(row, "dptDistrictCd", "");
      ds_tariff.setCellData(row, "dptDistrictNm", "");
      ds_tariff.setCellData(row, "arvDistrictCd", "");
      ds_tariff.setCellData(row, "arvDistrictNm", "");
    }
    gr_tariff.setCellReadOnly(row, "lobranNm", false);
    gr_tariff.setCellReadOnly(row, "dptDistrictNm", true);
    gr_tariff.setCellReadOnly(row, "arvDistrictNm", true);
  }
};

//-------------------------------------------------------------------------
// ASIS: gr_tariff OnCloseUp — 작업단계 LookUp 선택 변경 시
// TOBE: gr_tariff oneditend — select 타입 셀 편집 종료 시 처리
//-------------------------------------------------------------------------
scwin.gr_tariff_oneditend = function (rowIndex, columnIndex, value) {
  var colid = gr_tariff.getColumnID(columnIndex);
  if (colid == "wrkStpCd") {
    scwin._applyWrkStpMode(rowIndex, true);
  }
};

//-------------------------------------------------------------------------
// ASIS: gr_tariff OnExit — 셀 값 변경 후 코드 검증 팝업
// TOBE: gr_tariff onafteredit — 편집모드 종료 후 포커스 빠져나올 때 발생 (Tab/클릭 모두)
//-------------------------------------------------------------------------
scwin.gr_tariff_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = gr_tariff.getColumnID(columnIndex);
  var row = rowIndex;
  if (colid == "commNm") {
    ds_tariff.setCellData(row, "commCd", "");
    ds_tariff.setCellData(row, "commNm", "");
    if (value == "") return;
    udc_comCode_commNm.setSelectId("retrieveCommInfo");
    udc_comCode_commNm.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") {
        ds_tariff.setCellData(row, "commNm", "");
        return;
      }
      ds_tariff.setCellData(row, "commCd", ret[0]);
      ds_tariff.setCellData(row, "commNm", ret[1]);
    }, ds_tariff.getCellData(row, "commCd"), value, "T", "3", "품목/품명코드,품목/품명,구분", "120,170,70", "4,5,6,7,8,9,10", "2,4,,," + ed_ctrtClntNo.getValue(), "440", "500", null, null, null, "F", "품목/품명,품목/품명코드,품목/품명");
  } else if (colid == "lobranNm") {
    ds_tariff.setCellData(row, "lobranCd", "");
    ds_tariff.setCellData(row, "lobranNm", "");
    if (value == "") return;
    udc_comCode_lobranNm.setSelectId("retrieveLogisDeptInfo");
    udc_comCode_lobranNm.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") {
        ds_tariff.setCellData(row, "lobranNm", "");
        return;
      }
      ds_tariff.setCellData(row, "lobranCd", ret[0]);
      ds_tariff.setCellData(row, "lobranNm", ret[1]);
    }, (ds_tariff.getCellData(row, "lobranCd") || "").trim(), value.trim(), "T", "7", "물류부서코드,물류부서명", "150,170", null, "A,B", "440", "500", null, null, null, "F", "물류부서,물류부서코드,물류부서명");
  } else if (colid == "dptDistrictNm") {
    ds_tariff.setCellData(row, "dptDistrictCd", "");
    ds_tariff.setCellData(row, "dptDistrictNm", "");
    if (value == "") return;
    var ctrtDistrictCd = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtDistrictCd");
    udc_comCode_dptDistrict.setSelectId("retrieveDistrictList");
    udc_comCode_dptDistrict.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") {
        ds_tariff.setCellData(row, "dptDistrictNm", "");
        return;
      }
      ds_tariff.setCellData(row, "dptDistrictCd", ret[0]);
      ds_tariff.setCellData(row, "dptDistrictNm", ret[1]);
    }, ds_tariff.getCellData(row, "dptDistrictCd"), value, "T", "5", "출발권역코드,출발권역명", "150,170", null, "1,3," + ctrtDistrictCd + ",,,," + ds_tariff.getCellData(row, "commCd"), "440", "500", null, null, null, "F", "운송구간 정보,출발권역코드,출발권역명");
  } else if (colid == "arvDistrictNm") {
    ds_tariff.setCellData(row, "arvDistrictCd", "");
    ds_tariff.setCellData(row, "arvDistrictNm", "");
    if (value == "") return;
    var ctrtDistrictCd = ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "ctrtDistrictCd");
    udc_comCode_arvDistrict.setSelectId("retrieveDistrictList");
    udc_comCode_arvDistrict.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") {
        ds_tariff.setCellData(row, "arvDistrictNm", "");
        return;
      }
      ds_tariff.setCellData(row, "arvDistrictCd", ret[0]);
      ds_tariff.setCellData(row, "arvDistrictNm", ret[1]);
    }, ds_tariff.getCellData(row, "arvDistrictCd"), value, "T", "5", "도착권역코드,도착권역명", "150,170", null, "1,3," + ctrtDistrictCd + ",,,," + ds_tariff.getCellData(row, "commCd"), "440", "500", null, null, null, "F", "운송구간 정보,도착권역코드,도착권역명");
  } else if (colid == "unitCd") {
    ds_tariff.setCellData(row, "unitCd", "");
    ds_tariff.setCellData(row, "unitNm", "");
    if (value == "") return;
    udc_comCode_unitCd.setSelectId("retrieveCommCdInfo");
    udc_comCode_unitCd.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") {
        ds_tariff.setCellData(row, "unitCd", "");
        return;
      }
      ds_tariff.setCellData(row, "unitCd", ret[0]);
      ds_tariff.setCellData(row, "unitNm", ret[1]);
    }, value, "", "T", "7", null, "150,170", null, "LO102,,", "440", "500", null, null, null, "F", null);
  }
};

//-------------------------------------------------------------------------
// ASIS: ds_tariff OnRowPosChanged(row) — 행 이동 시 편집 제어 갱신
// TOBE: ds_tariff onrowpositionchange — 행 이동 시 편집 제어 + 반대쪽 필드 클리어 (ASIS 동일)
//-------------------------------------------------------------------------
scwin.ds_tariff_onrowpositionchange = function (info) {
  var row = info.newRowIndex;
  if (row < 0 || ds_tariff.getRowCount() == 0) {
    return;
  }
  scwin._applyWrkStpMode(row, true);
};

//-------------------------------------------------------------------------
// TOBE: f_addRow — 행추가 (첫 행이면 기본값 세팅, 아니면 행 복사)
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  var rowCount = ds_tariff.getRowCount();
  if (rowCount == 0) {
    var newIdx = ds_tariff.insertRow(ds_tariff.getRowCount());
    ds_tariff.setCellData(newIdx, "ctrtNo", (lc_ctrtNo.getValue() || "").replace(/-/g, ""));
    ds_tariff.setCellData(newIdx, "ctrtWrkPathSeq", acb_contractWorkPath.getValue());
    ds_tariff.setCellData(newIdx, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_tariff.setCellData(newIdx, "crcCd", "KRW");
    ds_tariff.setCellData(newIdx, "ctrtInternalTrf", "0");
    gr_tariff.setFocusedCell(0, 0);
  } else {
    // 포커스된 행이 없으면 첫 행에 포커스
    if (gr_tariff.getFocusedRowIndex() < 0) {
      gr_tariff.setFocusedCell(0, 0);
    }
    $c.gus.cfCopyRecord($p, "gr_tariff");
  }
};

//-------------------------------------------------------------------------
// function name : f_gridDown
// function desc : 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_gridDown = function () {
  var options = {
    fileName: "내부요율.xlsx",
    sheetName: "내부요율",
    type: "1",
    useDataFormat: "true",
    hiddenVisible: "true"
  };
  $c.data.downloadGridViewExcel($p, gr_tariff, options);
};

// //-------------------------------------------------------------------------
// // 증빙종류 조회
// //-------------------------------------------------------------------------
// scwin.getEvidInfo = async function() {
//     console.log("=== getEvidInfo (증빙종류조회) [분리]");
// 	//증빙종류 조회
// 	//ds_evidClsCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveEvidInfo&param3=PCHS";
// 	//ds_evidClsCd.Reset();
// 	const strParam = {
//                   sysCd              : "CommonEBC"           // 시스템코드
//                 , queryId            : "retrieveEvidInfo"    // 쿼리ID
//                 , param1             : ""
//                 , param2             : ""
//                 , param3             : "PCHS"                // CD
//             };

//     //데이터셋에 정보설정
//     ds_commonCode.setJSON(strParam);
//     await $c.sbm.execute(sbm_evidClsCd);
// }

// //-------------------------------------------------------------------------
// // 증빙종류조회 submitdone
// //-------------------------------------------------------------------------
// scwin.sbm_evidClsCd_submitdone = function (e) {
//     console.log("▷ sbm_evidClsCd_submitdone (증빙종류조회)");

//     if( e.responseJSON.resultDataSet[0].Code != 0 ) return;

//     if(e.responseJSON.GAUCE) {
//         ds_evidClsCd.setJSON(e.responseJSON.GAUCE);
//     }

//     // var dc = ds_evidClsCd.getAllArray();
//     // console.log("  *** ds_evidClsCd : " + JSON.stringify(dc));
// };

scwin.udc_ctrtClntNo_onviewchangeNameEvent = function (info) {
  if ($c.util.isEmpty($p, ed_ctrtClntNm.getValue())) {
    ed_ctrtClntNo.setValue("");
  }
};
scwin.ds_tariff_oncelldatachange = function (info) {
  if (info.colID === "ctrtInternalTrf") {
    if ($c.util.isEmpty($p, info.newValue)) ds_tariff.setCellData(info.rowIndex, info.colID, "0");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'btn_ctrtClntNo',id:'udc_ctrtClntNo',codeId:'ed_ctrtClntNo',nameId:'ed_ctrtClntNm',objTypeCode:'data',validExpCode:'계약처:yes',validExpName:'계약거래처:no:maxByteLength=30','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent(\'F\')','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_ctrtClntNo_onblurNameEvent',code:'ctrtClntNo',refDataCollection:'ds_retrieveCtrtClnt',selectID:'retrieveClntInfo',btnId:'btn_ctrtClntNo',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_ctrtClntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'form-control',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'lc_ctrtNo',mandatory:'true',ref:'data:oGDS_page.ctrtNo',style:'width: 200px;',submenuSize:'auto',title:'계약번호','ev:onchange':'scwin.lc_ctrtNo_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_ctrtNo',width:'550',selectedRowColor:'',label:'ctrtNo',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_selpchItemCd',style:'width:200px;',submenuSize:'auto',search:'start',objType:'data',validExp:'요율항목:yes',mandatory:'true',ref:'data:oGDS_page.selpchItemCd',allOption:'',chooseOption:'',displayMode:'value delim label','ev:onchange':'scwin.acb_selpchItemCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'selpchItemNm'}},{T:1,N:'w2:value',A:{ref:'selpchItemCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업경로 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'acb_contractWorkPath',style:'width:200px;',submenuSize:'auto',search:'start',objType:'data',validExp:'작업경로:yes',mandatory:'true',ref:'data:oGDS_page.ctrtWrkPathSeq',displayMode:'value delim label',allOption:'',chooseOption:'','ev:onchange':'scwin.acb_contractWorkPath_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPath'},E:[{T:1,N:'w2:label',A:{ref:'ctrtWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'ctrtWrkPathSeq'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'내부요율 등록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_tariff',id:'udc_topGrp',gridDownFn:'scwin.f_gridDown',gridUpYn:'N',btnUser:'N',btnPlusYn:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_tariff',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_tariff',visibleRowNum:'16',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oneditend':'scwin.gr_tariff_oneditend','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick','ev:onafteredit':'scwin.gr_tariff_onafteredit',rowStatusVisible:'true',rowStatusWidth:'20',dataName:'내부요율',validFeatures:'ignoreStatus=no',validExp:'wrkStpCd::yes::key,commNm:품명:yes::key,unitCd:단위:yes,crcCd:통화:yes,ctrtInternalTrf:요율:yes:minNumber=0.01,lobranNm::no::key,dptDistrictNm::no::key,arvDistrictNm::no::key'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',class:'col-type1',value:'작업단계',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',class:'col-type1',value:'품목/품명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',class:'col-type1',value:'단위',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',class:'col-type1',value:'통화',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'70',inputType:'text',id:'column15',class:'col-type1',value:'요율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',style:'',inputType:'text',id:'column33',value:'작업점소코드',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',width:'200',inputType:'text',id:'column13',class:'col-type2',value:'작업점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',style:'',inputType:'text',id:'column36',value:'운송구간',colSpan:'4',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',style:'',inputType:'text',id:'column37',value:'출발권역',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column22',class:'col-type2',value:'출발권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',style:'',inputType:'text',id:'column40',value:'도착권역',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column21',class:'col-type2',value:'도착권역',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'select',id:'wrkStpCd',blockSelect:'false',displayMode:'value delim label',textAlign:'left',sortable:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPathEachWorkStep'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'commNm',blockSelect:'false',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'unitCd',blockSelect:'false',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'select',id:'crcCd',blockSelect:'false',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtInternalTrf',displayMode:'label',textAlign:'right',sortable:'true',dataType:'float',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'150',style:'',inputType:'text',id:'lobranCd',value:''}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',style:'',inputType:'text',id:'dptDistrictCd',value:''}},{T:1,N:'w2:column',A:{width:'150',inputType:'textImage',id:'dptDistrictNm',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'arvDistrictCd',value:''}},{T:1,N:'w2:column',A:{width:'150',inputType:'textImage',id:'arvDistrictNm',displayMode:'label',textAlign:'left',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'grp_totalCnt',class:'grid-total',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{gridID:'gr_tariff',rowAddFunction:'scwin.f_addRow',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',btnCancelYn:'Y',btnDelYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_xls',style:'',type:'button','ev:onclick':'scwin.f_upload',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Excel등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_commNm'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveLogisDeptInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_lobranNm'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_dptDistrict'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_arvDistrict'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommCdInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_unitCd'}},{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_tmp_tariff','ev:onfilereadend':'scwin.gr_tmp_tariff_onfilereadend',id:'gr_tmp_tariff',style:'position:absolute;left:10019px;top:10009px;width:0;height: 300px;height:0;',visible:'false'},E:[{T:1,N:'w2:header',A:{id:'header_tmp',style:''},E:[{T:1,N:'w2:row',A:{id:'row_tmp',style:''},E:[{T:1,N:'w2:column',A:{id:'h_wrkStpCd',inputType:'text',value:'작업단계',width:'70'}},{T:1,N:'w2:column',A:{id:'h_commNm',inputType:'text',value:'품명',width:'70'}},{T:1,N:'w2:column',A:{id:'h_unitCd',inputType:'text',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{id:'h_crcCd',inputType:'text',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column1',value:''}},{T:1,N:'w2:column',A:{id:'h_lobranCd',inputType:'text',value:'작업점소코드',width:'70'}},{T:1,N:'w2:column',A:{id:'h_lobranNm',inputType:'text',value:'작업점소',width:'70'}},{T:1,N:'w2:column',A:{id:'h_dptDistrictCd',inputType:'text',value:'출발권역코드',width:'70'}},{T:1,N:'w2:column',A:{id:'h_dptDistrictNm',inputType:'text',value:'출발권역',width:'70'}},{T:1,N:'w2:column',A:{id:'h_arvDistrictCd',inputType:'text',value:'도착권역코드',width:'70'}},{T:1,N:'w2:column',A:{id:'h_arvDistrictNm',inputType:'text',value:'도착권역',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody_tmp',style:''},E:[{T:1,N:'w2:row',A:{id:'row_tmp_body',style:''},E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',inputType:'select',width:'70',displayMode:'value delim label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPathEachWorkStep'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{id:'commNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'unitCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'crcCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'ctrtInternalTrf',value:''}},{T:1,N:'w2:column',A:{id:'lobranCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'lobranNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',inputType:'text',width:'70'}}]}]}]}]}]}]})