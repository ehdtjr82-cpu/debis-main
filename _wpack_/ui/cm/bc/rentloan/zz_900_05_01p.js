/*amd /ui/cm/bc/rentloan/zz_900_05_01p.xml 30273 fd8650707d68ad67bc46dd670d570322579f604f78ac3fc4bb109e346608fecc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deprCompleteYn',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'procDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetHistClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'자산종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'befYyProvAmt',name:'충당금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'thisYyProvAmt',name:'당기상각액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',name:'면적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pyCnt',name:'평수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ancdLpr',name:'공시지가',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'areaMgntYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCdPcostNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provAcctCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprAcctCdPcost',name:'name13',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.rentloan.RetrieveRentLoanAssetsInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_asetPattern',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do?useYn=1&areaMgntYn=1',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_asetPattern","key":"OUT_DS1"}',target:'data:json,{"id":"ds_asetPattern","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_asetPattern_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 임대 자산 팝업
 * 메뉴경로 : 공통/총무업무/임대차관리/임대차[전대차] 승인처리
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/rentloan/zz_900_05_01p.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-10-21
 * 수정이력  :
 *    - 2025-10-21      정승혜    최초작성
 *    - 2025-11-26      정승혜    준수사항 적용
 *    - 2026-01-02      정승혜    기타수정 / 자회사로직수정
 *    - 2026-01-19      정승혜    submitdone 조건수정
 * 메모 : 
 * 공통/총무업무/임대차관리/임대차[전대차] 계약관리 에서 신규 클릭후 계약형태 임대로 변경후 자산번호 팝업
 * 부모페이지 - zz_900_01_02b
 * 전체검색시 총건수 다른부분은 xml 최신화 아직인점 때문
 */
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님  

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.isSubCompany = false;
scwin.hid_fixedAsetHistClsCd = ACConstants.ASET_HISTCD_TRANSFER;
scwin.bReturnYn = false;
scwin.valueObject = "";

//hidden
scwin.txtCoClsCd = "";
scwin.hid_procDt = "";
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.valueObject = $c.data.getParameter($p);
  scwin.f_SearchHeaderCreate();
  $c.sbm.execute($p, sbm_asetPattern);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
  if (typeof scwin.valueObject != "undefined" && scwin.valueObject != null) {
    let asetNo = scwin.valueObject["cdObjNm"]; // valueObject.asetCd = cdObjNm.text;
    ed_srchFixedAsetNo.setValue(asetNo);
    lc_asetPatternCd.setValue(scwin.valueObject["isCdYn"]); // valueObject.asetPatternCd = isCdYn;
  }
  $p.setTimeout(function () {
    scwin.f_Retrieve();
  }, {
    "delay": 200
  });
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "임대 자산 팝업");
};

//-------------------------------------------------------------------------
// 조회 데이터셋 헤더 생성
//-------------------------------------------------------------------------
scwin.f_SearchHeaderCreate = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  $c.gus.cfInitObjects($p, [ed_acqDtStDt, ed_acqDtEndDt]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function (e) {
  ed_acqDtStDt.setValue("");
  ed_acqDtEndDt.setValue("");
  scwin.hid_procDt = $c.date.getServerDateTime($p, "yyyyMMdd");
  dma_search.set("procDt", scwin.hid_procDt);
  ed_acqDtStDt.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  if (!(await scwin.f_RetrieveValidate())) {
    return;
  }
  dma_search.set("fixedAsetHistClsCd", ACConstants.ASET_HISTCD_TRANSFER);
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  await $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 검증
//-------------------------------------------------------------------------
scwin.f_RetrieveValidate = async function () {
  if ($c.gus.cfIsNull($p, lc_asetPatternCd.getValue()) && $c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue()) && $c.gus.cfIsNull($p, ed_srchAcctDeptNm.getValue()) && $c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue())) {
    await $c.win.alert($p, "조회조건을 하나 이상 입력해 주세요.");
    ed_acqDtStDt.focus();
    return false;
  }
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 화면 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetDefaultValue = function () {
  //호출되는곳 없음
};

//-------------------------------------------------------------------------
// Object 값 반환함수
//-------------------------------------------------------------------------
scwin.f_GetObjValue = function () {
  //udc
};

//-------------------------------------------------------------------------
// Object 값 설정함수
//-------------------------------------------------------------------------
scwin.f_SetObjValue = function () {
  //udc
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function () {};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj) {};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창을 자동닫기 여부를 구한다.
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {};

//-------------------------------------------------------------------------
// 조회 귀속부서코드 팝업
//-------------------------------------------------------------------------
scwin.f_srchDeptPopUp = async function (e) {
  if (ed_srchAcctDeptCd.getValue() != "") {
    ed_srchAcctDeptNm.setValue("");
  }
  let param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), e, null, null, null, null, param, null, null, null, null, null, "T", null, null);
};
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_srchAcctDeptCd.setValue(rtnList[0]);
    ed_srchAcctDeptNm.setValue(rtnList[1]);
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 콤보데이터 검증
//-------------------------------------------------------------------------
scwin.f_CheckComboData = async function (objCombo, comboTitle) {
  if (objCombo.getSelectedIndex() == -1 && !$c.gus.cfIsNull($p, objCombo.getValue())) {
    objCombo.setSelectedIndex(objCombo.getIndexByValue(objCombo.getValue()));
    if (objCombo.getSelectedIndex() == -1) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, [comboTitle + "코드"]));
      objCombo.focus();
    }
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  if (ed_coCd.getValue() != "") {
    ed_coNm.setValue("");
  }
  let rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_companyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_companyInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
    ed_coCd.options.hidVal = rtnList[0];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
    ed_coCd.options.hidVal = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      if ("T" == scwin.privAdmin || !scwin.isSubCompany) {
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
      scwin.isStarted = false;
    }
};

// 팝업 클릭 이벤트 함수
scwin.udc_companyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  }
};

// 서브미션
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    gr_master.focus();
  }
};

// 서브미션
scwin.sbm_asetPattern_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_asetPattern.setJSON(e.responseJSON.GAUCE);
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.bReturnYn = true;
  let popupResult = {};

  //window.onunload
  if (ds_master.getRowCount() > 0) {
    popupResult.asetPatternCd = ds_master.getCellData(ds_master.getRowPosition(), "asetPatternCd"); //자산유형
    popupResult.asetPatternNm = ds_master.getCellData(ds_master.getRowPosition(), "asetPatternNm"); //자산유형
    popupResult.asetKndNm = ds_master.getCellData(ds_master.getRowPosition(), "asetKndNm"); //자산종류
    popupResult.fixedAsetNo = ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNo"); //자산번호
    popupResult.fixedAsetNm = ds_master.getCellData(ds_master.getRowPosition(), "fixedAsetNm"); //자산명
    popupResult.acctDeptCd = ds_master.getCellData(ds_master.getRowPosition(), "acctDeptCd"); //귀속부서코드
    popupResult.acctDeptNm = ds_master.getCellData(ds_master.getRowPosition(), "acctDeptNm"); //귀속부서
    popupResult.acqDt = ds_master.getCellData(ds_master.getRowPosition(), "acqDt"); //취득일자
    popupResult.acqAmt = ds_master.getCellData(ds_master.getRowPosition(), "acqAmt"); //취득금액
    popupResult.area = ds_master.getCellData(ds_master.getRowPosition(), "area"); //면적
    popupResult.pyCnt = ds_master.getCellData(ds_master.getRowPosition(), "pyCnt"); //평수
    popupResult.ancdLpr = ds_master.getCellData(ds_master.getRowPosition(), "ancdLpr"); //공시지가
  }
  $c.win.closePopup($p, popupResult, scwin.aset_callBackFunc);
};
scwin.lc_asetPatternCd_onblur = function (e) {
  scwin.f_CheckComboData(lc_asetPatternCd, "자산유형");
};
scwin.udc_acctDeptCdInfo6_onblurCodeEvent = function (e) {
  scwin.f_srchDeptPopUp('T');
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue()) == false) {
    ed_srchFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10));
  }
};
scwin.udc_acctDeptCdInfo6_onclickEvent = function (e) {
  scwin.f_srchDeptPopUp('F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_coCd',nameId:'ed_coNm',UpperFlagCode:'1',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',objTypeName:'data',selectID:'retrieveDongbuGroupCompanyInfo',allowCharCode:'0-9',maxlengthCode:'3',refDataCollection:'dma_search',id:'udc_companyInfo','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',popupTitle:'회사조회,회사코드,법인명',code:'coCd',name:'coNm',editTypeCode:'focus',editTypeName:'focus',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent',validTitle:'회사코드',btnId:'btn_company'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'acqDtStDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'acqDtEndDt',edFromId:'ed_acqDtStDt',edToId:'ed_acqDtEndDt',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_asetPatternCd',style:'',submenuSize:'auto',ref:'data:dma_search.asetPatternCd','ev:onblur':'scwin.lc_asetPatternCd_onblur',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'xf:label',A:{ref:'asetPatternNm'}},{T:1,N:'xf:value',A:{ref:'asetPatternCd'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상각진행여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_deprCompleteYn',style:'',submenuSize:'auto',ref:'data:dma_search.deprCompleteYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'진행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_srchAcctDeptCd',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',validExpCode:'부서:no:format=00000',allowCharCode:'0-9',UpperFlagCode:'1',objTypeName:'data',selectID:'retrieveAcctDeptCdInfo6',maxlengthCode:'5',id:'udc_acctDeptCdInfo6',refDataCollection:'dma_search',name:'acctDeptNm',code:'acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo6_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo6_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_srchFixedAsetNo',style:'',maxlength:'10',allowChar:'0-9',ref:'data:dma_search.fixedAsetNo',objType:'data','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'자산유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'자산종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'자산명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'취득일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'취득금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'충당금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'당기상각액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'면적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'평수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'공시지가',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetPatternNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetKndNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acqDt',value:'',displayMode:'label',displayFormat:'####/##/##',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acqAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'befYyProvAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'thisYyProvAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'area',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pyCnt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ancdLpr',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',expression:'sum(\'acqAmt\')',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'befYyProvAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'thisYyProvAmt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})