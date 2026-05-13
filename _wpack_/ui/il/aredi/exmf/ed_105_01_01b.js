/*amd /ui/il/aredi/exmf/ed_105_01_01b.xml 95252 02816725ee5a5ad9ea60b7a9d836ff26f84cf58254689f0bae72b266b20c061c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'send',name:'전송상태구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtFrom',name:'From 출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtTo',name:'To출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'편명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'대표거래처코드(hidden)',dataType:'text',defaultValue:'DBEX'}},{T:1,N:'w2:key',A:{id:'mhno',name:'CONSOL',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mdno',name:'정정신청번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_airExportModify',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_airExportModify_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdondt',name:'ONBOARD DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdfltno',name:'FLIGHT NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdmrn',name:'MRN NUMBER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrnlast',name:'최종 MRN NUMBER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdmbl',name:'MASTER NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdhblgb',name:'정정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdhblmody',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdmodycd',name:'단일수정항목 정정항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'발송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsdate',name:'최초접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'redate',name:'최종수신일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstat',name:'정정신청결과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'플래그',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csCd',name:'세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csNm',name:'세관명',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'csDept',name:'세관과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csDeptNm',name:'세관과명',dataType:'text',ignoreStatus:'true'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_airExportModifyUnit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdondt',name:'ONBOARD DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdfltno',name:'FLIGHT NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdmrn',name:'MRN NUMBER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrnlast',name:'최종 MRN NUMBER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdmbl',name:'MASTER NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdhblgb',name:'정정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdhblmody',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mdmodycd',name:'단일수정항목 정정항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'발송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsdate',name:'최초접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'redate',name:'최종수신일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstat',name:'정정신청결과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'플래그',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csCd',name:'세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csDept',name:'세관과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modCont1',name:'단일항목 정정내용1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modCont2',name:'단일항목 정정내용2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modCont3',name:'단일항목 정정내용3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modCont4',name:'단일항목 정정내용4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_houseLicenseInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exno',name:'정정 전 신고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdt',name:'출발일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldel',name:'정정후 수출면장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pacd',name:'포장단위',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'pkgs',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wht',name:'중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'elsplgb',name:'분할선적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elmid',name:'분할선적차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elcogb',name:'동시포장 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eldpkg',name:'동시포장 수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'eldpkgut',name:'동시포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elgbn',name:'정정신청 작업구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elmody',name:'정정신청 사유',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.aredi.exmf.RetrieveAirExportCargoManifestModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"}, {"id":"ds_airExportModify", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_airExportModify","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_houseLicenseInfo',action:'/il.aredi.exmf.RetrieveAirExportContainerModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"}, {"id":"ds_houseLicenseInfo", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_houseLicenseInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_airExportModifyUnit',action:'/il.aredi.exmf.RetrieveAirExportCargoManifestModifyUnitCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"}, {"id":"ds_airExportModifyUnit", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_airExportModifyUnit","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.aredi.exmf.SaveAirExportCargoManifestModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_airExportModify","key":"IN_DS1"},{"action":"modified","id":"ds_houseLicenseInfo","key":"IN_DS2"},{"action":"modified","id":"ds_airExportModifyUnit","key":"IN_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.aredi.exmf.SaveAirExportCargoManifestModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_airExportModify","key":"IN_DS1"},{"action":"modified","id":"ds_houseLicenseInfo","key":"IN_DS2"},{"action":"modified","id":"ds_airExportModifyUnit","key":"IN_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sendEDI',action:'/il.aredi.exmf.SaveAirExportCargoManifestSendEDICMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_airExportModify","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_sendEDI_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 수출 적하목록 정정신고
 * 메뉴경로 : 국제물류/EDI/Air/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/il/aredi/exmf/ed_105_01_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2026-02-02
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. login정보 확인 필요 
 *     ☞  $c.data.getMemInfo() 처리
 *    2. 검토자 이용호B => 배기원C 이동(2026-03-05)
 *    3. AR_HE테이블의 포장단위[PACD] 컬럼 저장 시 2byte 인데 단위코드가 3글자 인경우 뒤에 짤려서 저장됨
 *      예)R/T[수입톤] 인 경우 "R/"로 저장 됨(이거 변경해야할지 확인 필요) gr_houseLicenseInfo.pacd
 * 테스트데이터 
 *    1. Master B/L No[NWTOUT202507]
 *    2. Master B/L No[01280834471]
 *    3. Master B/L No[18097822502]
 * 수정이력 :
 *    - 2026-02-02      배기원    최초작성
 */
scwin.hid_txt_countRow = ""; //TOBE 사용안함
scwin.hid_hid_kcomcd = ""; //TOBE 사용안함(대체 dma_search.get("kcomcd")), DBEX

scwin.today = ""; //현재일자
scwin.strCurDate = "";
scwin.strPreDate = "";

//TOBE 추가
scwin.f_commCdPopupRow = 0; //그리드 팝업 호출 시 ROW값
scwin.oldValue = ""; //그리드 팝업 호출 시 비교값

//로그인 정보
scwin.memJson;
scwin.user_id;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // scwin.f_initSetTab(); //tab세팅
  // scwin.f_SetDSHeader(ds_Search, "Search");
  // scwin.f_SetDSHeader(ds_airExportModify, "AirExportModify");
  // scwin.f_SetDSHeader(ds_houseLicenseInfo, "HouseLicenseInfo");
  // scwin.f_SetDSHeader(ds_airExportModifyUnit, "AirExportModifyUnit");
  // scwin.f_Set("INIT");

  scwin.memJson = $c.data.getMemInfo($p);
  scwin.user_id = $c.gus.cfIsNull($p, scwin.memJson["userId"]) ? "" : scwin.memJson["userId"]; //사용자ID
  scwin.today = $c.date.getServerDateTime($p);
  scwin.strCurDate = scwin.today;
  //이전달 또는 다음달에 해당일이 없을 경우 마지막 날자 표시
  scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);
  // if(!$c.date.isDate(scwin.strPreDate)) {
  //     scwin.strPreDate = $c.date.getDateAddMonthDirection(scwin.strCurDate, -1, "L");
  // }
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_airExportModify.setNoResultMessageVisible(false);
  gr_houseLicenseInfo.setNoResultMessageVisible(false);
  gr_airExportModifyUnit.setNoResultMessageVisible(false);
  ds_airExportModify.removeAll();
  ds_houseLicenseInfo.removeAll();
  ds_airExportModifyUnit.removeAll();
  ds_airExportModify.reform();
  ds_houseLicenseInfo.reform();
  ds_airExportModifyUnit.reform();
  totalRows1.setValue("0");
  totalRows2.setValue("0");
  totalRows3.setValue("0");
  dma_search.set("blno", "");
  dma_search.set("mdno", "");
};
scwin.setInit2 = function () {
  gr_houseLicenseInfo.setNoResultMessageVisible(false);
  gr_airExportModifyUnit.setNoResultMessageVisible(false);
  ds_houseLicenseInfo.removeAll();
  ds_airExportModifyUnit.removeAll();
  ds_houseLicenseInfo.reform();
  ds_airExportModifyUnit.reform();
  totalRows2.setValue("0");
  totalRows3.setValue("0");
  dma_search.set("blno", "");
  dma_search.set("mdno", "");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  //공통코드 추가
  const codeOptions = [{
    grpCd: "IL004",
    compID: "gr_airExportModifyUnit:mdmodycd"
  } //정정항목
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeIL004.sort("cd", 0);
  btn_addRowIntnl.setValue("Addition");
  btn_addRowIntnl2.setValue("Addition");
  btn_undoMarkIntnl.setValue("Cancel");
  btn_undoMarkIntnl2.setValue("Cancel");
  btn_deleteRowIntnl.setValue("Delete");
  btn_deleteRowIntnl2.setValue("Delete");
  scwin.setInit();
  scwin.f_initSetTab(); //tab세팅

  scwin.f_Set("INIT");

  //테스트 데이터
  // cnd_ed_mblno.setValue("NWTOUT202507");
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

/**
 * 화면세팅
 */
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      $c.gus.cfDisableKeyData($p);
      // $c.gus.cfDisableObjects([tr_tab_center1]);
      // $c.gus.cfEnableObjects([tr_tab_center0]);
      // $c.gus.cfDisableBtnOnly([b_Cancel, b_Update, b_Save, b_Delete]);
      $c.gus.cfDisableBtnOnly($p, [btn_cancel, btn_update, btn_save, btn_delete]);
      $c.gus.cfDisableObjects($p, [ed_csNm, ed_csDeptNm]);
      scwin.f_DisablePopUpObj();

      // gr_airExportModify.Editable = "false";
      // gr_houseLicenseInfo.Editable = "false";
      // gr_airExportModifyUnit.Editable = "false";
      gr_airExportModify.setReadOnly("grid", true);
      gr_houseLicenseInfo.setReadOnly("grid", true);
      gr_airExportModifyUnit.setReadOnly("grid", true);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl, btn_deleteRowIntnl]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl2, btn_undoMarkIntnl2, btn_deleteRowIntnl2]);
      break;
    case "RETRIEVE":
      //조회모드
      // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      $c.gus.cfDisableKeyData($p);
      // $c.gus.cfEnableBtnOnly([b_Update]);
      // $c.gus.cfDisableBtnOnly([b_Cancel, b_Save, b_Delete]);
      $c.gus.cfEnableObjects($p, [btn_update]);
      $c.gus.cfDisableBtnOnly($p, [btn_cancel, btn_save, btn_delete]);
      scwin.f_DisablePopUpObj();

      // gr_airExportModify.Editable = "false";
      // gr_houseLicenseInfo.Editable = "false";
      // gr_airExportModifyUnit.Editable = "false";
      gr_airExportModify.setReadOnly("grid", true);
      gr_houseLicenseInfo.setReadOnly("grid", true);
      gr_airExportModifyUnit.setReadOnly("grid", true);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl, btn_deleteRowIntnl]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl2, btn_undoMarkIntnl2, btn_deleteRowIntnl2]);
      break;
    case "SAVE":
      // $c.gus.cfDisableBtnOnly([b_Cancel, b_Save, b_Delete, b_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [btn_cancel, btn_update, btn_save, btn_delete]);
      break;
    case "DELETE":
      // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      $c.gus.cfDisableKeyData($p);
      // $c.gus.cfDisableBtnOnly([b_Cancel, b_Save, b_Create, b_Cancel]);
      // $c.gus.cfEnableBtnOnly([b_Delete]);
      $c.gus.cfDisableBtnOnly($p, [btn_cancel, btn_update, btn_save, btn_delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_delete]);
      break;
    case "UPDATE":
      // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      $c.gus.cfEnableKeyData($p);
      // $c.gus.cfEnableBtnOnly([b_Cancel, b_Save, b_Delete]);
      // $c.gus.cfDisableBtnOnly([b_Update]);
      $c.gus.cfEnableBtnOnly($p, [btn_cancel, btn_save, btn_delete]);
      $c.gus.cfDisableBtnOnly($p, [btn_update]);
      scwin.f_EnablePopUpObj();

      // gr_airExportModify.Editable = "false";
      // gr_houseLicenseInfo.Editable = "true";
      // gr_airExportModifyUnit.Editable = "true";
      gr_airExportModify.setReadOnly("grid", true);
      gr_houseLicenseInfo.setReadOnly("grid", false);
      gr_airExportModifyUnit.setReadOnly("grid", false);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl, btn_deleteRowIntnl]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl2, btn_undoMarkIntnl2, btn_deleteRowIntnl2]);
      break;
  }
};

/**
 * PopUp 이미지를 활성화 시킨다. 
 */
scwin.f_EnablePopUpObj = function () {
  // $c.gus.cfEnableObjects([img_PopUp1, img_PopUp2]);
  $c.gus.cfEnableObjects($p, [btn_csCd, btn_csDept]);
};
scwin.f_DisablePopUpObj = function () {
  // $c.gus.cfDisableObjects([img_PopUp1, img_PopUp2]);
  $c.gus.cfDisableObjects($p, [btn_csCd, btn_csDept]);
};

/**
 * 조회버튼
 */
scwin.f_Retrieve = async function () {
  ed_csNm.setValue("");
  ed_csDeptNm.setValue("");
  // ds_houseLicenseInfo.removeAll();
  // ds_airExportModifyUnit.removeAll();

  if ($c.gus.cfIsNull($p, cnd_ed_mblno.getValue())) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Master B/L No"]); //필수 입력 사항
    cnd_ed_mblno.focus();
    return false;
  }
  scwin.setInit();
  dma_search.set("mblno", cnd_ed_mblno.getValue().toUpperCase());
  // dma_search.set("kcomcd", scwin.hid_kcomcd);  //TOBE : 대표거래처코드 "DBEX" 기본값으로 처리됨
  $c.sbm.execute($p, sbm_retrieve);

  //TOBE scwin.sbm_retrieve_submitdone 로직에 추가
  // scwin.f_RetrieveSubList();
  // if (ds_airExportModify.getCellData(ds_airExportModify.RowPosition, "flag") == "2") {
  //     scwin.f_Set("RETRIEVE");
  // } else if (ds_airExportModify.getCellData(ds_airExportModify.RowPosition, "flag") == "1") {
  //     scwin.f_PopUp("CustomHouse", 'T', 'F', 'F');
  //     scwin.f_PopUp('CustomHouseDept', 'T', 'F', 'F');
  //     scwin.f_Set("RETRIEVE");
  // } else {
  //     scwin.f_Set("INIT");
  // }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_airExportModify.setNoResultMessageVisible(true);
  gr_houseLicenseInfo.setNoResultMessageVisible(true);
  gr_airExportModifyUnit.setNoResultMessageVisible(true);
  let rowcnt = ds_airExportModify.getRowCount();
  totalRows1.setValue(rowcnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    for (let i = 0; i < ds_airExportModify.getRowCount(); i++) {
      /**
       * 추가로직(세무코드, 세무과코드로 세무명, 세무과명 가져오기 위한 로직 추가)
       * scwin.f_PopUp("CustomHouse", 'T', 'F', 'F'); 대신 사용
       * scwin.f_PopUp('CustomHouseDept', 'T', 'F', 'F'); 대신 사용
       */
      let json = {};
      let csCd = ds_airExportModify.getCellData(i, "csCd");
      let csDept = ds_airExportModify.getCellData(i, "csDept");
      if (!$c.gus.cfIsNull($p, csCd)) {
        // scwin.f_PopUp("CustomHouse", "T", "F", "F");
        json.queryId = "retrieveCustomInfo";
        json.param1 = csCd;
        json.row = i;
        json.cdNm = "csNm";
        await scwin.f_RetrieveCommonPopup(json);
      }
      if (!$c.gus.cfIsNull($p, csDept)) {
        // scwin.f_PopUp("CustomHouseDept", "T", "F", "F");
        json.queryId = "retrieveCustomSectionInfo";
        json.param1 = csDept;
        json.row = i;
        json.cdNm = "csDeptNm";
        await scwin.f_RetrieveCommonPopup(json);
      }
    }

    //asis : for=ds_AirExportModify event=onColumnChanged(row,colid)
    scwin.ds_airExportModify_onColumnChanged(ds_airExportModify);

    //asis : for=ds_AirExportModify event=OnLoadCompleted(rowcnt)
    scwin.ds_airExportModify_OnLoadCompleted(rowcnt);

    //asis : f_Retrieve() > tr_retrieve.Post() 이후 로직
    //TOBE : scwin.gr_airExportModify_onrowindexchange
    // scwin.f_RetrieveSubList();
    gr_airExportModify.setFocusedCell(0, 0);
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};

/**
 * ASIS : for=ds_AirExportModify event=onColumnChanged(row,colid) 이벤트
 */
// scwin.ds_airExportModify_onColumnChanged = function(row,colid) {
scwin.ds_airExportModify_onColumnChanged = function (ds) {
  // console.log("ds_airExportModify_onColumnChanged");
  // scwin.f_ChkKeyCode(ds_airExportModify,row,colid);
  //TODO : 전체다 체크해야 하는거 같아서 수정함.
  for (let dsRow = 0; dsRow < ds.getRowCount(); dsRow++) {
    for (let dsCol = 0; dsCol < ds.getTotalCol(); dsCol++) {
      // console.log("[" + ds.getColumnID(dsCol) + "] " + ds.getCellData(dsRow, ds.getColumnID(dsCol)));
      scwin.f_ChkKeyCode(ds, dsRow, dsCol);
    }
  }
  ds.reform();
};

/**
 * ASIS : for="ds_AirExportModify" event="OnLoadCompleted(rowcnt)" 이벤트
 */
scwin.ds_airExportModify_OnLoadCompleted = function (rowcnt) {
  // console.log("ds_airExportModify_OnLoadCompleted cnt : "+rowcnt);
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 수출신고내역수정, 단일항목 조회
 */
// scwin.f_RetrieveSubList = async function () {
scwin.f_RetrieveSubList = async function (rowIndex) {
  scwin.setInit2();
  if (ds_airExportModify.getRowCount() > 0) {
    // let rowIndex = gr_airExportModify.getFocusedRowIndex();
    dma_search.set("blno", ds_airExportModify.getCellData(rowIndex, "blno"));
    dma_search.set("mdno", ds_airExportModify.getCellData(rowIndex, "mdno"));
    await $c.sbm.execute($p, sbm_houseLicenseInfo);
    //asis : for=ds_AirExportModify event=onColumnChanged(row,colid)
    scwin.ds_houseLicenseInfo_onColumnChanged(ds_houseLicenseInfo);
    await $c.sbm.execute($p, sbm_airExportModifyUnit);
    //asis : for=ds_AirExportModifyUnit event=onColumnChanged(row,colid)
    scwin.ds_airExportModifyUnit_onColumnChanged(ds_airExportModifyUnit);
  }
};

/**
 * ASIS : for=ds_HouseLicenseInfo event=onColumnChanged(row,colid) 이벤트
 */
scwin.ds_houseLicenseInfo_onColumnChanged = function (ds) {
  // console.log("ds_houseLicenseInfo_onColumnChanged");
  // scwin.f_ChkKeyCode(ds_houseLicenseInfo,row,colid);
  // if(colid == "elgbn" && ds_HouseLicenseInfo.NameValue(row,"elgbn") == "X"){
  // 	gr_HouseLicenseInfo.ColumnProp('oldel','Show') = "true";
  // 	gr_HouseLicenseInfo.SetColumn("oldel");
  // }
  gr_houseLicenseInfo.setNoResultMessageVisible(true);
  //TODO : 전체다 체크해야 하는거 같아서 수정함.
  let cnt = ds.getRowCount();
  let elgbnMatched;
  for (let dsRow = 0; dsRow < cnt; dsRow++) {
    for (let dsCol = 0; dsCol < ds.getTotalCol(); dsCol++) {
      // console.log("[" + ds.getColumnID(dsCol) + "] " + ds.getCellData(dsRow, ds.getColumnID(dsCol)));
      scwin.f_ChkKeyCode(ds, dsRow, dsCol);
    }
  }
  ds.reform();
  totalRows2.setValue(cnt);
  gr_houseLicenseInfo.setFocusedCell(0, 0);
  elgbnMatched = ds.getMatchedIndex("elgbn", "X");
  if (elgbnMatched.length > 0) {
    gr_houseLicenseInfo.setColumnVisible("oldel", true); //정정 후 신고번호
    gr_houseLicenseInfo.setFocusedCell(elgbnMatched[0], "oldel", true);
  }
};

/**
 * ASIS : for=ds_AirExportModifyUnit event=onColumnChanged(row,colid) 이벤트
 */
scwin.ds_airExportModifyUnit_onColumnChanged = function (ds) {
  // console.log("ds_airExportModifyUnit_onColumnChanged");
  // scwin.f_ChkKeyCode(ds_airExportModifyUnit,row,colid);
  gr_airExportModifyUnit.setNoResultMessageVisible(true);
  //TODO : 전체다 체크해야 하는거 같아서 수정함.
  let cnt = ds.getRowCount();
  for (let dsRow = 0; dsRow < cnt; dsRow++) {
    for (let dsCol = 0; dsCol < ds.getTotalCol(); dsCol++) {
      // console.log("[" + ds.getColumnID(dsCol) + "] " + ds.getCellData(dsRow, ds.getColumnID(dsCol)));
      scwin.f_ChkKeyCode(ds, dsRow, dsCol);
    }
  }
  ds.reform();
  totalRows3.setValue(cnt);
  gr_airExportModifyUnit.setFocusedCell(0, 0);
};
scwin.sbm_houseLicenseInfo_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_airExportModifyUnit_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 취소버튼
 */
scwin.f_Cancel = function () {
  // scwin.f_undoRow(ds_airExportModify);
  // scwin.f_undoRow(ds_houseLicenseInfo);
  // scwin.f_undoRow(ds_airExportModifyUnit);
  $c.data.undoAll($p, ds_airExportModify);
  scwin.f_undoRow();
  scwin.f_undoRow2();
  scwin.f_Set("RETRIEVE");
};

/**
 * 수정 버튼
 */
scwin.f_update = function () {
  scwin.f_Set("UPDATE");
};
;

/**
 * 저장 버튼
 */
scwin.f_save = async function () {
  let ret;
  // let rowIndex = ds_airExportModify.getRowPosition();
  ret = await scwin.f_ReqFieldChk();
  if (!ret) {
    return;
  }
  let rowIndex = gr_airExportModify.getFocusedRowIndex();
  if (ds_airExportModify.getCellData(rowIndex, "flag") == "2") {
    //Type 0:Nomal, 1:insert, 2:Delete
    // ds_airExportModify.UserStatus(ds_airExportModify.setRowPosition) = 1;
    ds_airExportModify.modifyRowStatus(rowIndex, "C");
  }
  let cnt = ds_houseLicenseInfo.getRowCount();
  if (cnt > 0) {
    for (let i = 0; i < cnt; i++) {
      ds_houseLicenseInfo.setCellData(i, "blno", ds_airExportModify.getCellData(rowIndex, "blno"));
      ds_houseLicenseInfo.setCellData(i, "mhno", ds_airExportModify.getCellData(rowIndex, "mhno"));
    }
  }
  sbm_save.userData1 = "noError";
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }

  //저장 성공
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    // 성공적으로 저장하였습니다
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * EDI 전송
 */
scwin.f_SendEDI = async function () {
  // if ($c.gus.cfValidate([tb_headerMandantory]) == true) {
  let ret;

  // ret = await $c.gus.cfValidate([tb_headerMandantory]);
  //TODO : 필수값 위에꺼로 해도 되는데 ASIS와 똑같이 체크로직 나와야 한데서 수정
  ret = await $c.gus.cfValidate($p, [ed_blno, ed_mrnlast, acb_mdhblgb, tb_headerMandantory]);
  if (!ret) {
    return;
  }
  let rowIndex = gr_airExportModify.getFocusedRowIndex();
  if ($c.gus.cfIsNull($p, ds_airExportModify.getCellData(rowIndex, "mdno"))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_046, ["적하항목"]); //존재하지 않는 @입니다.
    return;
  }

  // ds_airExportModify.UserStatus(ds_airExportModify.setRowPosition) = 1;
  ds_airExportModify.modifyRowStatus(rowIndex, "C");
  sbm_sendEDI.userData1 = "noError";
  await $c.sbm.execute($p, sbm_sendEDI);
  // ds_airExportModify.UserStatus(ds_airExportModify.setRowPosition) = 0;
};
scwin.sbm_sendEDI_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }

  //전송 성공
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    // $c.gus.cfAlertMsg(E_MSG_CM_INF_018);
    await $c.gus.cfAlertMsg($p, "Data was send successfully.");
    scwin.f_Retrieve();
    //ds_airExportModify.modifyRowStatus(rowIndex, "R");
  }
};
scwin.sbm_sendEDI_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 삭제 버튼
 */
scwin.f_delete = async function () {
  //삭제하시겠습니까?
  if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
    let rowIndex = gr_airExportModify.getFocusedRowIndex();
    //Type 0:Nomal, 1:insert, 2:Delete
    ds_airExportModify.modifyRowStatus(rowIndex, "D");
    // ds_airExportModify.UserStatus(ds_airExportModify.setRowPosition) = 2;
    $c.sbm.execute($p, sbm_delete);
  }
};
scwin.sbm_delete_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  //삭제 성공
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    // 성공적으로 삭제하였습니다
    $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
    scwin.f_Retrieve();
  }
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 유효성검사
 */
scwin.f_ReqFieldChk = async function () {
  let ret;
  // ret = await $c.gus.cfValidate([tb_headerMandantory]);
  //TODO : 필수값 위에꺼로 해도 되는데 ASIS와 똑같이 체크로직 나와야 한데서 수정
  ret = await $c.gus.cfValidate($p, [ed_blno, ed_mrnlast, acb_mdhblgb, tb_headerMandantory]);
  if (!ret) {
    return false;
  }
  ret = await $c.gus.cfValidate($p, [gr_houseLicenseInfo]);
  if (!ret) {
    return false;
  }
  ret = await $c.gus.cfValidate($p, [gr_airExportModifyUnit]);
  if (!ret) {
    return false;
  }
  return true;
};

/**
 * AddRow 시 키값 셋팅
 */
scwin.f_SetDefaultKeyValue = function (ds) {
  let varMblno = dma_search.get("mblno");
  let rowIndex = ds.getRowPosition();
  ds.setCellData(rowIndex, "kcomcd", dma_search.get("kcomcd"));
  ds.setCellData(rowIndex, "updid", scwin.user_id);
  ds.setCellData(rowIndex, "blno", ds.getCellData(rowIndex - 1 > 0 ? rowIndex - 1 : 0, "blno"));
  // console.log("scwin.f_SetDefaultKeyValue : " + ds);
  if (ds == ds_airExportModifyUnit) {
    ds.setCellData(rowIndex, "mdmbl", ds_airExportModify.getCellData(gr_airExportModify.getFocusedRowIndex(), "mdmbl"));
  } else if (ds == ds_houseLicenseInfo) {
    ds.setCellData(rowIndex, "mhno", ds.getCellData(rowIndex - 1 > 0 ? rowIndex - 1 : 0, "mhno"));
  }
};

/**
 * 행추가
 * TOBE : ASIS는 param에 데이터셋을 보내나 UDC는 안되서 f_addRow, f_addRow2 두개로 나눠서 사용
 */
// scwin.f_addRow = function (ds) {
scwin.f_addRow = async function () {
  // ds.AddRow();
  let newRow = ds_houseLicenseInfo.insertRow();
  //ds_houseLicenseInfo.setRowPosition(newRow);
  gr_houseLicenseInfo.setFocusedCell(newRow, 0);
  scwin.f_SetDefaultKeyValue(ds_houseLicenseInfo);
  if (acb_mdhblgb.getValue() == "C") {
    ds_houseLicenseInfo.setCellData(newRow, "elgbn", "U");
  } else if (acb_mdhblgb.getValue() == "E") {
    ds_houseLicenseInfo.setCellData(newRow, "elgbn", "I");
  } else if (acb_mdhblgb.getValue() == "G") {
    ds_houseLicenseInfo.setCellData(newRow, "elgbn", "D");
  }

  //House info 정정구분인 추가일경우 작업구분 추가로 셋팅
  // if (ds == ds_houseLicenseInfo) {
  //     // let rowIndex = gr_houseLicenseInfo.getFocusedRowIndex();
  //     if (acb_mdhblgb.getValue() == "C") {
  //         ds_houseLicenseInfo.setCellData(rowIndex, "elgbn", "U");
  //     } else if (acb_mdhblgb.getValue() == "E") {
  //         ds_houseLicenseInfo.setCellData(rowIndex, "elgbn", "I");
  //     } else if (acb_mdhblgb.getValue() == "G") {
  //         ds_houseLicenseInfo.setCellData(rowIndex, "elgbn", "D");
  //     }
  // }

  // if (ds == ds_airExportModifyUnit) {
  //     if (ds_airExportModify.getCellData(ds_airExportModify.RowPosition, "flag") == "1") {
  //         ds.NameValue(ds.RowPosition, "mdno") = ds_airExportModify.getCellData(ds_airExportModify.RowPosition, "mdno");
  //     }
  //     if (ed_csCd.getValue() == "") {
  //         scwin.f_selectTabMenu(0);
  //         $c.gus.cfAlertMsg(MSG_CM_WRN_003, Array("세관코드"));//@를 입력해주쎄요
  //         ed_csCd.focus();
  //         return;
  //     }
  //     if (ed_csDept.getValue() == "") {
  //         scwin.f_selectTabMenu(0);
  //         ed_csDept.focus();
  //         $c.gus.cfAlertMsg(MSG_CM_WRN_003, Array("세관과코드"));//@를 입력해주쎄요
  //         return;
  //     }

  //     ds.NameValue(ds.RowPosition, "csCd") = ed_csCd.getValue();
  //     ds.NameValue(ds.RowPosition, "csDept") = ed_csDept.getValue();
  // }
};

/**
 * 행추가
 * TOBE : ASIS는 param에 데이터셋을 보내나 UDC는 안되서 f_addRow, f_addRow2 두개로 나눠서 사용
 */
// scwin.f_addRow = function (ds) {
scwin.f_addRow2 = async function () {
  // ds.AddRow();
  let newRow = ds_airExportModifyUnit.insertRow();
  // ds_airExportModifyUnit.setRowPosition(newRow);
  gr_airExportModifyUnit.setFocusedCell(newRow, 0);
  scwin.f_SetDefaultKeyValue(ds_airExportModifyUnit);
  if (acb_mdhblgb.getValue() == "C") {
    ds_airExportModifyUnit.setCellData(newRow, "elgbn", "U");
  } else if (acb_mdhblgb.getValue() == "E") {
    ds_houseLicenseInfo.setCellData(newRow, "elgbn", "I");
  } else if (acb_mdhblgb.getValue() == "G") {
    ds_houseLicenseInfo.setCellData(newRow, "elgbn", "D");
  }
  let rowIndex = gr_airExportModify.getFocusedRowIndex();
  if (ds_airExportModify.getCellData(rowIndex, "flag") == "1") {
    ds_airExportModifyUnit.setCellData(newRow, "mdno", ds_airExportModify.getCellData(rowIndex, "mdno"));
  }
  if ($c.gus.cfIsNull($p, ed_csCd.getValue())) {
    scwin.f_selectTabMenu(0);
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["세관코드"]); //@를 입력해주쎄요
    ed_csCd.focus();
    return;
  }
  if ($c.gus.cfIsNull($p, ed_csDept.getValue())) {
    scwin.f_selectTabMenu(0);
    ed_csDept.focus();
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["세관과코드"]); //@를 입력해주쎄요
    return;
  }
  ds_airExportModifyUnit.setCellData(newRow, "csCd", ed_csCd.getValue());
  ds_airExportModifyUnit.setCellData(newRow, "csDept", ed_csDept.getValue());
};

/**
 * 행삭제 : ds_houseLicenseInfo(수출신고내역수정)
 * TOBE : ASIS는 param에 데이터셋을 보내나 UDC는 안되서 f_deleteRow, f_deleteRow2 두개로 나눠서 사용
 *       (자체 UDC 기능으로 사용)
 */
// scwin.f_deleteRow = function (ds) {
scwin.f_deleteRow = function () {
  // ds.deleteRow(ds.RowPosition);
  let row = ds_houseLicenseInfo.getRowPosition();
  if (ds_houseLicenseInfo.getRowStatus(row) == "C") {
    ds_houseLicenseInfo.removeRow(row);
  } else {
    ds_houseLicenseInfo.deleteRow(row);
    gr_houseLicenseInfo.setFocusedCell(row, 0);
  }
};
scwin.f_deleteRow2 = function () {
  // ds.deleteRow(ds.RowPosition);
  let row = ds_airExportModifyUnit.getRowPosition();
  if (ds_airExportModifyUnit.getRowStatus(row) == "C") {
    ds_airExportModifyUnit.removeRow(row);
  } else {
    ds_airExportModifyUnit.deleteRow(row);
    gr_airExportModifyUnit.setFocusedCell(row, 0);
  }
};

/**
 * 행취소 : ds_houseLicenseInfo(수출신고내역수정)
 * TOBE : ASIS는 param에 데이터셋을 보내나 UDC는 안되서 f_undoRow, f_undoRow2 두개로 나눠서 사용
 *       (자체 UDC 기능으로 사용)
 */
// scwin.f_undoRow = function (ds) {
scwin.f_undoRow = function () {
  // ds.Undo(ds.RowPosition);
  let row = ds_houseLicenseInfo.getRowPosition();
  if (ds_houseLicenseInfo.getRowStatus(row) == "C") {
    ds_houseLicenseInfo.removeRow(row);
  } else {
    ds_houseLicenseInfo.undoRow(row);
    ds_houseLicenseInfo.setRowPosition(row, event);
  }
};
scwin.f_undoRow2 = function () {
  // ds.Undo(ds.RowPosition);
  let row = ds_airExportModifyUnit.getRowPosition();
  if (ds_airExportModifyUnit.getRowStatus(row) == "C") {
    ds_airExportModifyUnit.removeRow(row);
  } else {
    ds_airExportModifyUnit.undoRow(row);
    ds_airExportModifyUnit.setRowPosition(row, event);
  }
};

/**
 * Grid Header정보 Setting
 * TOBE 사용안함
 */
scwin.f_SetDSHeader = function (ds, gubun) {
  // let dsHeader = "";

  // switch (gubun) {
  //     case "Search": //오더 검색조건
  //         dsHeader = "kcomcd:STRING(6)"
  //             + ",send:STRING(1)" // 전송상태 구분
  //             + ",ondtFrom:STRING(8)" // From 출항일
  //             + ",ondtTo:STRING(8)" // To 출항일
  //             + ",fltno:STRING(6)" // 편명
  //             + ",blno:STRING(20)"
  //             + ",mdno:STRING(19)"
  //             + ",mblno:STRING(20)"; // Master B/L No
  //         ds.SetDataHeader(dsHeader);
  //         ds.AddRow();
  //         intRowPosition = ds.RowPosition;
  //         ds.NameValue(intRowPosition, "kcomcd") = document.all.scwin.hid_kcomcd; //대표거래처 코드
  //         break;
  //     case "AirExportModify":
  //         dsHeader = "kcomcd:STRING(6)" // 법인코드
  //             + ",mdno:STRING(19)" // 정정신청번호
  //             + ",mdondt:STRING(8)" // ONBOARD DATE
  //             + ",mdfltno:STRING(6)" // FLIGHT NO
  //             + ",mdmrn:STRING(11)" // MRN NUMBER
  //             + ",mrnlast:STRING(11)" // 최종 MRN NUMBER
  //             + ",mdmbl:STRING(20)" // MASTER NO
  //             + ",mhno:STRING(16)" // CONSOL NO
  //             + ",blno:STRING(20)" // HOUSE NO
  //             + ",mdhblgb:STRING(1)" // 정정구분
  //             + ",mdhblmody:STRING(100)" // 정정사유
  //             + ",seq:STRING(2)" // 일련번호
  //             + ",mdmodycd:STRING(3)" // 단일수정항목 정정항목
  //             + ",sdate:STRING(14)" // 전송일시
  //             + ",rmk:STRING(500)" // 비고
  //             + ",rsdate:STRING(14)" // 최초접수일자
  //             + ",redate:STRING(14)" // 최종수신일자
  //             + ",rstat:STRING(3)" // 정정신청결과
  //             + ",flag:STRING(1)"
  //             + ",csCd:STRING(3)" //세관코드
  //             + ",csDept:STRING(2)" //세관과 코드
  //             + ",updid:STRING(8)"; // 수정자ID
  //         ds.SetDataHeader(dsHeader);
  //         break;

  //     case "HouseLicenseInfo": //House License Info
  //         dsHeader = "kcomcd:STRING(6)"
  //             + ",mhno:STRING(16)"
  //             + ",blno:STRING(20)"
  //             + ",exno:STRING(20)"
  //             + ",pacd:STRING(2)"
  //             + ",pkgs:DECIMAL(10)"
  //             + ",oldel:STRING(20)"
  //             + ",wht:DECIMAL(15.3)"
  //             + ",elsplgb:STRING(1)"
  //             + ",elmid:STRING(1)"
  //             + ",elcogb:STRING(3)"
  //             + ",eldpkg:DECIMAL(14)"
  //             + ",eldpkgut:STRING(3)"
  //             + ",elgbn:STRING(1)"
  //             + ",elmody:STRING(100)";
  //         ds.SetDataHeader(dsHeader);
  //         break;

  //     case "AirExportModifyUnit":
  //         dsHeader = "kcomcd:STRING(6)" // 법인코드
  //             + ",mdno:STRING(19)" // 정정신청번호
  //             + ",mdondt:STRING(8)" // ONBOARD DATE
  //             + ",mdfltno:STRING(6)" // FLIGHT NO
  //             + ",mdmrn:STRING(11)" // MRN NUMBER
  //             + ",mrnlast:STRING(11)" // 최종 MRN NUMBER
  //             + ",mdmbl:STRING(20)" // MASTER NO
  //             + ",mhno:STRING(16)" // CONSOL NO
  //             + ",blno:STRING(20)" // HOUSE NO
  //             + ",mdhblgb:STRING(1)" // 정정구분
  //             + ",mdhblmody:STRING(100)" // 정정사유
  //             + ",seq:STRING(2)" // 일련번호
  //             + ",mdmodycd:STRING(3)" // 단일수정항목 정정항목
  //             + ",sdate:STRING(14)" // 전송일시
  //             + ",rmk:STRING(500)" // 비고
  //             + ",rsdate:STRING(14)" // 최초접수일자
  //             + ",redate:STRING(14)" // 최종수신일자
  //             + ",modCont1:STRING(50)" // 정정 후 내용
  //             + ",modCont2:STRING(50)" // 정정 후 내용
  //             + ",modCont3:STRING(50)" // 정정 후 내용
  //             + ",modCont4:STRING(50)" // 정정 후 내용
  //             + ",updid:STRING(8)"; // 수정자ID
  //         ds.SetDataHeader(dsHeader);
  //         break;
  // }
};

/**
 * 탭 초기화
 */
scwin.f_initSetTab = function () {
  // $c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1]);
  // cfViewTab(0);
  tab_main.setSelectedTabIndex(0);
};

/**
 * Tab Menu 선택시 처리
 */
scwin.f_selectTabMenu = async function (idx) {
  switch (idx) {
    case 0:
      // cfViewTab(idx);
      await tab_main.setSelectedTabIndex(idx);
      break;
    case 1:
      //정정구분에 따른 텝 처리
      // if (lc_mdhblgb.Index ==0) {
      if (acb_mdhblgb.getValue() == "C") {
        // cfViewTab(idx);
        await tab_main.setSelectedTabIndex(idx);
        // } else if (lc_mdhblgb.Index == 1) {
      } else if (acb_mdhblgb.getValue() == "E") {
        // cfViewTab(idx);
        await tab_main.setSelectedTabIndex(idx);
        // } else if (acb_mdhblgb.getValue() == "G") {
      } else {
        await tab_main.setSelectedTabIndex(0);
        await $c.gus.cfAlertMsg($p, "정정구분이 삭제인경우 단일항목수정 텝을 선택 할 수 없습니다.");
        // return true;
      }
      break;
  }
};

/**
 * f_ChkKeyCode
 * 설명 : !,@,#,$,%,^,&,+,[,],",\ 등 특수기호 문자를 입력 받지않는 함수
 */
scwin.f_ChkKeyCode = function (ds, row, colid) {
  try {
    let str = ds.getCellData(row, colid); //타이핑 한 문자열
    let chkStr = ""; // 배열화 될 문자열
    let comStr = ""; // 필터링 될 문자열
    let badStr = ""; // 필터링 할 문자열
    for (i = 0; i < str.length; i++) {
      chkStr = str.charCodeAt(i);
      if (chkStr >= 33 && chkStr <= 39) {
        badStr += str.charAt(i);
      } else if (chkStr >= 91 && chkStr <= 96) {
        badStr += str.charAt(i);
      } else if (chkStr >= 123 && chkStr <= 126) {
        badStr += str.charAt(i);
      } else if (chkStr == 63) {
        badStr += str.charAt(i);
      } else if (chkStr == 64) {
        badStr += str.charAt(i);
      } else if (chkStr == 43) {
        badStr += str.charAt(i);
      } else if (chkStr == 59) {
        badStr += str.charAt(i);
      } else if (chkStr == 0) {
        badStr += str.charAt(i);
      } else {
        comStr += str.charAt(i);
      }
    }
    // 필터링 된 문자 대입
    ds.setCellData(row, colid, comStr);
  } catch (e) {
    //alert("Code Check Error");
  }
};

/**
 * 그리드 팝업 호출
 */
// scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF) {
scwin.f_PopUpGrid = function (disGubun, row, data, pWinCloseTF) {
  // 선언부
  let rtnList;
  let pCode = "";
  let pName = "";
  //asis 소스
  // switch (disGubun) {
  //     case "eldpkgut":
  //         rtnList = ilCommonPopUp('retrievePackageCode'
  //             , ds_houseLicenseInfo.NameValue(row, "eldpkgut") //코드
  //             , '' //코드명
  //             , pWinCloseTF // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  //             , '2' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  //             , "Code, Name" // Title순서
  //             , '80,230' // 보여주는 각 컬럼들의 폭
  //             , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
  //             , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  //             , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  //             , null // POP-UP뛰을때 우도우의 사용자 정의 높이
  //             , null // 윈도우 위치 Y좌표
  //             , null // 윈도우 위치 X좌표
  //             , null // 중복체크여부 ("F")
  //             , pAllSearchTF // 전체검색허용여부 ("F")
  //             , "동시포장단위,Code,Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  //             , 'F' // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
  //         );
  //         $c.gus.cfSetGridReturnValue(rtnList, ds_houseLicenseInfo, row, "eldpkgut", "");

  //         break;

  //     case "pacd":
  //         rtnList = ilCommonPopUp('retrieveWeightUnitCode'
  //             , ds_houseLicenseInfo.NameValue(row, "pacd") //코드
  //             , '' //코드명
  //             , pWinCloseTF // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  //             , '2' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  //             , "Code, Name" // Title순서
  //             , '80,230' // 보여주는 각 컬럼들의 폭
  //             , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
  //             , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  //             , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  //             , null // POP-UP뛰을때 우도우의 사용자 정의 높이
  //             , null // 윈도우 위치 Y좌표
  //             , null // 윈도우 위치 X좌표
  //             , null // 중복체크여부 ("F")
  //             , pAllSearchTF // 전체검색허용여부 ("F")
  //             , "중량단위,Code,Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  //             , 'F' // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
  //         );
  //         $c.gus.cfSetGridReturnValue(rtnList, ds_houseLicenseInfo, row, "pacd", "");

  //         break;
  // }

  scwin.f_commCdPopupRow = row;
  switch (disGubun) {
    case "eldpkgut":
      ds_houseLicenseInfo.setCellData(row, "eldpkgut", "");
      udc_ilcomCode.setSelectId("retrievePackageCode"); // XML상의 SELECT ID
      udc_ilcomCode.ilCommonPopUp(scwin.udc_ilcomCode_eldpkgut_callBackFunc // 콜백 함수
      , data // 화면에서의 ??? Code Element의	Value
      , "" // 화면에서의 ??? Name Element의	Value
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "Code, Name" // Title순서
      , "80,230" // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "동시포장단위,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , "F" // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "pacd":
      ds_houseLicenseInfo.setCellData(row, "pacd", ""); //중량단위
      udc_ilcomCode.setSelectId("retrieveWeightUnitCode"); // XML상의 SELECT ID
      udc_ilcomCode.ilCommonPopUp(scwin.udc_ilcomCode_pacd_callBackFunc // 콜백 함수
      , data // 화면에서의 ??? Code Element의	Value
      , "" // 화면에서의 ??? Name Element의	Value
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "Code, Name" // Title순서
      , "80,230" // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능   ",,,T
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "T" // 전체검색허용여부	("F")
      , "중량단위,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , "F" // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    default:
      break;
  }
};

/**
 * 수출신고내역수정 그리드 : 동시포장단위 검색 callBack
 */
scwin.udc_ilcomCode_eldpkgut_callBackFunc = function (rtn) {
  $c.gus.cfSetGridReturnValue($p, rtn, ds_houseLicenseInfo, scwin.f_commCdPopupRow, "eldpkgut", "");
};

/**
 * 수출신고내역수정 그리드 : 포장단위 검색 callBack
 * TODO : pacd값을 2자리로 잘라서 처리해야함.(3자리로 받아옴)
 */
scwin.udc_ilcomCode_pacd_callBackFunc = function (rtn) {
  // $c.gus.cfSetGridReturnValue(rtn, ds_houseLicenseInfo, scwin.f_commCdPopupRow, "pacd", "");
  let rowIdx = scwin.f_commCdPopupRow;
  if (rtn[0] != "N/A" && !$c.gus.cfIsNull($p, rtn)) {
    ds_houseLicenseInfo.setCellData(rowIdx, "pacd", rtn[0].substring(0, 2)); //중량단위
  } else {
    ds_houseLicenseInfo.setCellData(rowIdx, "pacd", ""); //중량단위
  }
};

/**
 * 팝업호출(UDC)
 */
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // 선언부
  let rtnList;
  let pCode = "";
  let pName = "";
  //ASIS 소스
  // switch (disGubun) {
  //     case "CustomHouse":
  //         rtnList = ilCommonPopUp('retrieveCustomInfo' // XML상의 SELECT ID
  //             , ed_csCd.Text.trim() // 화면에서의 ??? Code Element의 Value
  //             , '' // 화면에서의 ??? Name Element의 Value
  //             , pWinCloseTF // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  //             , '2' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  //             , "관할세관 Code, 관할세관 Name" // Title순서
  //             , '130,300' // 보여주는 각 컬럼들의 폭
  //             , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
  //             , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  //             , '500' // POP-UP뛰을때 원도우의 사용자 정의 폭
  //             , '500' // POP-UP뛰을때 우도우의 사용자 정의 높이
  //             , null // 윈도우 위치 Y좌표
  //             , null // 윈도우 위치 X좌표
  //             , null // 중복체크여부 ("F")
  //             , pAllSearchTF // 전체검색허용여부 ("F")
  //             , "관할세관 Search,관할세관 Code, 관할세관 Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  //             , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
  //         );

  //         $c.gus.cfSetReturnValue(rtnList, ed_csCd, ed_csNm);

  //         break;
  //     case "CustomHouseDept":
  //         rtnList = ilCommonPopUp('retrieveCustomSectionInfo' // XML상의 SELECT ID
  //             , ed_csDept.Text.trim() // 화면에서의 ??? Code Element의 Value
  //             , '' // 화면에서의 ??? Name Element의 Value
  //             , pWinCloseTF // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  //             , '2' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  //             , "세관과 Code, 세관과 Name" // Title순서
  //             , '130,300' // 보여주는 각 컬럼들의 폭
  //             , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는 컬럼 지정
  //             , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  //             , '500' // POP-UP뛰을때 원도우의 사용자 정의 폭
  //             , '500' // POP-UP뛰을때 우도우의 사용자 정의 높이
  //             , null // 윈도우 위치 Y좌표
  //             , null // 윈도우 위치 X좌표
  //             , null // 중복체크여부 ("F")
  //             , pAllSearchTF // 전체검색허용여부 ("F")
  //             , "세관과 Search,세관과 Code, 세관과 Name" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  //             , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
  //         );

  //         $c.gus.cfSetReturnValue(rtnList, ed_csDept, ed_csDeptNm);

  //         break;

  //     default:
  //         break;
  // }

  switch (disGubun) {
    case "CustomHouse":
      udc_csCd.setSelectId("retrieveCustomInfo"); // XML상의 SELECT ID
      udc_csCd.ilCommonPopUp(scwin.udc_csCd_callBackFunc // 콜백 함수
      , ed_csCd.getValue().trim() // 화면에서의 ??? Code Element의	Value
      , "" // 화면에서의 ??? Name Element의	Value
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "관할세관 Code, 관할세관 Name" // Title순서
      , "130,300" // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , "500" // POP-UP뛰을때 원도우의	사용자 정의	폭
      , "500" // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "관할세관 Search,관할세관 Code, 관할세관 Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    case "CustomHouseDept":
      udc_csDept.setSelectId("retrieveCustomSectionInfo"); // XML상의 SELECT ID
      udc_csDept.ilCommonPopUp(scwin.udc_csDept_callBackFunc // 콜백 함수
      , ed_csDept.getValue().trim() // 화면에서의 ??? Code Element의	Value
      , "" // 화면에서의 ??? Name Element의	Value
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "2" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "세관과 Code, 세관과 Name" // Title순서
      , "130,300" // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , "500" // POP-UP뛰을때 원도우의	사용자 정의	폭
      , "500" // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "세관과 Search,세관과 Code, 세관과 Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      break;
    default:
  }
};

/**
 * 세관 검색 callBack
 */
scwin.udc_csCd_callBackFunc = function (rtn) {
  // $c.gus.cfSetReturnValue(rtn, ed_csCd, ed_csNm);
  if (rtn[0] != "N/A" && !$c.gus.cfIsNull($p, rtn)) {
    ed_csCd.setValue(rtn[0]); // 세관코드
    ed_csNm.setValue(rtn[1]); // 세관명
    ed_csCd.hidVal = rtn[0]; // 히든값
  } else {
    ed_csCd.setValue(""); // 세관코드
    ed_csNm.setValue(""); // 세관명
    ed_csCd.hidVal = ""; // 히든값
  }
};

/**
 * 세관과 검색 callBack
 */
scwin.udc_csDept_callBackFunc = function (rtn) {
  // $c.gus.cfSetReturnValue(rtn, ed_csDept, ed_csDeptNm);
  if (rtn[0] != "N/A" && !$c.gus.cfIsNull($p, rtn)) {
    ed_csDept.setValue(rtn[0]); // 세관과코드
    ed_csDeptNm.setValue(rtn[1]); // 세관과명
    ed_csDept.hidVal = rtn[0]; // 히든값
  } else {
    ed_csDept.setValue(""); // 세관과코드
    ed_csDeptNm.setValue(""); // 세관과명
    ed_csDept.hidVal = ""; // 히든값
  }
};

/**
 * 세관코드, 세관과코드 정보 가져오기
 * json : queryId, param1, row, cdNm
 */
scwin.f_RetrieveCommonPopup = async function (json) {
  json.sysCd = "CommonEBC";
  // json.queryId = pJson.queryId;
  // json.param1  = pJson.param1;
  // json.row     = pJson.row;
  // json.cdNm    = pJson.cdNm;
  let ret = await $c.sbm.execute($p, sbm_retrieveCommonPopup, json);
  ret = ret.responseJSON.GAUCE[0];
  if (ret != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    await ds_airExportModify.setCellData(json.row, json.cdNm, ret.col2);
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 세관코드 udc 팝업호출
 */
scwin.udc_csCd_onclickEvent = function (e) {
  if (ed_csCd.hidVal != ed_csCd.getValue()) {
    ed_csNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_csCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_PopUp("CustomHouse", close, "F", "F");
};
scwin.udc_csCd_onblurCodeEvent = function (e) {
  if (ed_csCd.hidVal == ed_csCd.getValue()) {
    return;
  }
  ed_csNm.setValue("");
  ed_csCd.hidVal = "";
  if (!$c.gus.cfIsNull($p, ed_csCd.getValue())) {
    scwin.f_PopUp("CustomHouse", "T", "F", "F");
  }
};
scwin.udc_csCd_onviewchangeCodeEvent = function (info) {
  ed_csNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_csCd.getValue())) {
    scwin.f_PopUp("CustomHouse", "T", "F", "F");
  }
};

/**
 * 세관과코드 udc 팝업호출
 */
scwin.udc_csDept_onclickEvent = function (e) {
  if (ed_csDept.hidVal != ed_csDept.getValue()) {
    ed_csDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_csDept.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_PopUp("CustomHouseDept", close, "F", "F");
};
scwin.udc_csDept_onblurCodeEvent = function (e) {
  if (ed_csDept.hidVal == ed_csDept.getValue()) {
    return;
  }
  ed_csDeptNm.setValue("");
  ed_csDept.hidVal = "";
  if (!$c.gus.cfIsNull($p, ed_csDept.getValue())) {
    scwin.f_PopUp("CustomHouseDept", "T", "F", "F");
  }
};
scwin.udc_csDept_onviewchangeCodeEvent = function (info) {
  ed_csDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_csDept.getValue())) {
    scwin.f_PopUp('CustomHouseDept', "T", "F", "F");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀 행 변경시 발생하는 이벤트(탭2에서 조회하면 이벤트가 안먹힘, 그래서 ds_airExportModify_onrowpositionchange 처리)
 * ASIS : for=gr_AirExportModify event=OnClick(Row,Colid)
 */
scwin.gr_airExportModify_onrowindexchange = function (rowIndex, oldRow) {
  // scwin.f_RetrieveSubList(rowIndex);
  // if(ds_airExportModify.getCellData(rowIndex, "flag") == "2"){
  // 	scwin.f_Set("RETRIEVE");
  // }else if (ds_airExportModify.getCellData(rowIndex, "flag") == "1"){
  // 	// scwin.f_PopUp("CustomHouse", 'T', 'F', 'F');
  // 	// scwin.f_PopUp('CustomHouseDept', 'T', 'F', 'F');
  // 	scwin.f_Set("RETRIEVE");	
  // }else {
  // 	scwin.f_Set("INIT");
  // }
};

/**
 * 행의 인덱스가 변경된 경우에 발생
 * ASIS : for=gr_AirExportModify event=OnClick(Row,Colid)
 */
scwin.ds_airExportModify_onrowpositionchange = function (info) {
  let rowIndex = info.newRowIndex;
  scwin.f_RetrieveSubList(rowIndex);
  // console.log("ds_airExportModify_onrowpositionchange row : "+rowIndex);
  if (ds_airExportModify.getCellData(rowIndex, "flag") == "2") {
    scwin.f_Set("RETRIEVE");
  } else if (ds_airExportModify.getCellData(rowIndex, "flag") == "1") {
    // scwin.f_PopUp("CustomHouse", 'T', 'F', 'F');
    // scwin.f_PopUp('CustomHouseDept', 'T', 'F', 'F');
    scwin.f_Set("RETRIEVE");
  } else {
    scwin.f_Set("INIT");
  }
};

/**
 * 수출신고내역수정 inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 * ASIS : for=gr_HouseLicenseInfo event=OnPopup(Row,Colid,data)
 */
scwin.gr_houseLicenseInfo_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_houseLicenseInfo.getColumnID(columnIndex);
  let data = ds_houseLicenseInfo.getCellData(rowIndex, colId);
  switch (colId) {
    case "eldpkgut":
      scwin.f_PopUpGrid("eldpkgut", rowIndex, data, "F");
      break;
    case "pacd":
      scwin.f_PopUpGrid("pacd", rowIndex, data, "F");
      break;
    default:
      break;
  }
};

/**
 * 그리드 셀 클릭 이벤트
*/
scwin.gr_houseLicenseInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = gr_houseLicenseInfo.getRowStatus(rowIndex);
  let ret = true;
  if (!btn_update.getDisabled()) {
    ret = true;
  } else {
    ret = false;
  }
  if (status == "D") {
    ret = true;
  }
  gr_houseLicenseInfo.setReadOnly("row", rowIndex, ret);
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_houseLicenseInfo_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_houseLicenseInfo.getColumnID(columnIndex);
  if (columnId == "eldpkgut" || columnId == "pacd") {
    if (!$c.gus.cfIsNull($p, value) && value != scwin.oldValue) {
      scwin.f_PopUpGrid(columnId, rowIndex, value, "F");
    } else if ($c.gus.cfIsNull($p, value)) {
      if (columnId == "eldpkgut") {
        ds_houseLicenseInfo.setCellData(rowIndex, "eldpkgut", "");
      } else {
        ds_houseLicenseInfo.setCellData(rowIndex, "pacd", "");
      }
    }
  }
};

/**
 * 그리드 셀의 편집모드로 들어가기 전에 발생
 * 변경전 값 가지고 있도록 처리
 */
scwin.gr_houseLicenseInfo_onbeforeedit = function (rowIndex, columnIndex, value) {
  let columnId = gr_houseLicenseInfo.getColumnID(columnIndex);
  if (columnId == "eldpkgut" || columnId == "pacd") {
    scwin.oldValue = value;
  }
};

/**
 * 그리드 셀 클릭 이벤트
*/
scwin.gr_airExportModifyUnit_oncellclick = function (rowIndex, columnIndex, columnId) {
  let status = gr_airExportModifyUnit.getRowStatus(rowIndex);
  let ret = true;
  if (!btn_update.getDisabled()) {
    ret = true;
  } else {
    ret = false;
  }
  if (status == "D") {
    ret = true;
  }
  gr_airExportModifyUnit.setReadOnly("row", rowIndex, ret);
};

/*##############################################################
 * inputbox, 달력, 콤보박스, 체크박스 이벤트
 *##############################################################*/
/**
 * 대문자 onkeyup 이벤트
 */
scwin.upperFlag_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * Master B/L No onkeydown 이벤트
 */
scwin.cnd_ed_mblno_onkeydown = function (e) {
  if (e.keyCode == "13") {
    if (!$c.util.isEmpty($p, e.target.value)) {
      this.setValue(e.target.value.toUpperCase());
      scwin.f_Retrieve();
    }
  }
};

/**
 * 선택 된 tab이 변경된 경우에 발생한다.
 * ASIS : onClick="f_selectTabMenu(0)", onClick="f_selectTabMenu(1)"
 */
// scwin.tab_main_onchange = function (tabId, index, userTabId) {
//     scwin.f_selectTabMenu(index);
// };
/**
 * tab이 클릭된 경우 발생
 * ASIS : onClick="f_selectTabMenu(0)", onClick="f_selectTabMenu(1)"
 */
scwin.tab_main_ontabclick = function (tabId, index) {
  scwin.f_selectTabMenu(index);
};

/**
 * 정정구분 onviewchange 이벤트
 * ASIS : for="lc_mdhblgb" event=onSelChange()
 */
scwin.acb_mdhblgb_onviewchange = function (info) {
  let val = info.newValue;
  let houseRow = ds_houseLicenseInfo.getRowPosition();
  if (val == "C") {
    // 정정구분이 수정이 일경우 텝 Enable
    // $c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1]);
    tab_main.enableTab(0);
    tab_main.enableTab(1);
    ds_houseLicenseInfo.getCellData(houseRow, "elgbn", "U");
  } else if (val == "E") {
    // $c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1]);
    tab_main.enableTab(0);
    tab_main.enableTab(1);
    ds_houseLicenseInfo.getCellData(houseRow, "elgbn", "I");
  } else if (val == "G") {
    // $c.gus.cfDisableObjects([tr_tab_center1]);	
    tab_main.disableTab(1);
    ds_houseLicenseInfo.getCellData(houseRow, "elgbn", "D");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'w150',id:'cnd_ed_mblno',placeholder:'',ref:'data:dma_search.mblno',style:'',mandatory:'true',validateOnInput:'true',maxlength:'21',allowChar:'a-zA-Z0-9',title:'Master B/L No','ev:onkeydown':'scwin.cnd_ed_mblno_onkeydown',applyFormat:'display',editFormat:'999-999999999999999999',dataType:'text',editType:'select',enterBlur:'true','ev:onkeyup':'scwin.upperFlag_onkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_retrieve',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'  ',class:'wq_tab',id:'tab_main',style:'','ev:ontabclick':'scwin.tab_main_ontabclick',keepDisabledTab:'true',tabRole:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs0',label:'정정내용',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'단일 항목 수정',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'tr_tab_center0',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox ',id:'group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_airExportModify',focusMode:'row',id:'gr_airExportModify',scrollByColumn:'false',scrollByColumnAdaptive:'false',sortable:'true',style:'',visibleRowNum:'10',visibleRowNumFix:'true',gridName:'Houseinfo',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20',keepDefaultColumnWidth:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'Kcomcd',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'구분',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'House No',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'정정신청번호',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'정정사유',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'kcomcd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mdhblgb',inputType:'select',removeBorderStyle:'false',width:'90',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'blno',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mdno',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mdhblmody',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'200',validateOnInput:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_headerMandantory',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'송신일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:'w140',id:'ica_sendDt',style:'',displayFormat:'yyyy/MM/dd/HH:mm',title:'송신일시',ref:'data:ds_airExportModify.sendDt',objType:'data',validateOnInput:'true',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'OnBoard Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'w100',id:'ica_mdondt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',title:'OnBoard Date',displayFormat:'yyyy/MM/dd',ref:'data:ds_airExportModify.mdondt',objType:'data',validateOnInput:'true',calendarLength:'8',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w150',id:'ed_fltno',placeholder:'',style:'',maxlength:'6',allowChar:'a-zA-Z0-9',validateOnInput:'true','ev:onkeyup':'scwin.upperFlag_onkeyup',ref:'data:ds_airExportModify.mdfltno',objType:'data',title:'Flight No'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w150',id:'ed_blno',placeholder:'',style:'',validateOnInput:'true',maxlength:'20',allowChar:'a-zA-Z0-9',mandatory:'true',title:'House B/L No','ev:onkeyup':'scwin.upperFlag_onkeyup',ref:'data:ds_airExportModify.blno',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정신청번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w150',id:'ed_mdno',placeholder:'',style:'',title:'정정신청번호',allowChar:'a-zA-Z0-9',validateOnInput:'true',maxlength:'20',ref:'data:ds_airExportModify.mdno',objType:'data',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최종 MRN',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w150',id:'ed_mrnlast',placeholder:'',style:'',maxlength:'11',validateOnInput:'true',allowChar:'a-zA-Z0-9',ref:'data:ds_airExportModify.mrnlast',objType:'data',fixLength:'11',title:'최종 MRN',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'acb_mdhblgb',ref:'data:ds_airExportModify.mdhblgb',search:'start',style:'width: 150px;',submenuSize:'auto',emptyItem:'true',searchTarget:'both','ev:onviewchange':'scwin.acb_mdhblgb_onviewchange',objType:'data',title:'정정구분',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 수정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mdhblmody',placeholder:'',style:'',title:'정정사유',ref:'data:ds_airExportModify.mdhblmody',objType:'data',validateOnInput:'true',allowChar:'ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z,.=()*/<>-\\s',maxByteLength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'세관코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_csCd',code:'csCd',codeId:'ed_csCd',id:'udc_csCd',name:'csNm',nameId:'ed_csNm',objType:'data',popupID:'popupCsCd',selectID:'retrieveCustomInfo',refDataCollection:'ds_airExportModify',style:'',class:'w250',validTitle:'세관코드',codeWidth:'60',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'11',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N',mandatoryName:'false',objTypeName:'data',maxlengthName:'50',readOnlyName:'true','ev:onclickEvent':'scwin.udc_csCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_csCd_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_csCd_onviewchangeCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'세관과코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_csDept',code:'csDept',codeId:'ed_csDept',id:'udc_csDept',name:'csDeptNm',nameId:'ed_csDeptNm',objType:'data',popupID:'popupCsDept',selectID:'retrieveCustomSectionInfo',refDataCollection:'ds_airExportModify',style:'',class:'w250',validTitle:'세관과코드',codeWidth:'60',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'11',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',skipOnBlurCodeValueEmpty:'N',mandatoryName:'false',objTypeName:'data',maxlengthName:'50',readOnlyName:'true','ev:onclickEvent':'scwin.udc_csDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_csDept_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_csDept_onviewchangeCodeEvent'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'수출신고내역수정',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_houseLicenseInfo',id:'gr_houseLicenseInfo',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20',gridName:'수출신고내역수정','ev:ontextimageclick':'scwin.gr_houseLicenseInfo_ontextimageclick',focusMode:'row',keepDefaultColumnWidth:'true',columnMove:'false','ev:oncellclick':'scwin.gr_houseLicenseInfo_oncellclick','ev:onafteredit':'scwin.gr_houseLicenseInfo_onafteredit','ev:onbeforeedit':'scwin.gr_houseLicenseInfo_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'Kcomcd',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업구분',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'정정 후 신고번호',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'정정 전 신고번호',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'중량단위',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'포장갯수',width:'80'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column23',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column21',value:'분할여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column35',value:'분할차수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'동시포장기호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'동시포장수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'동시포장단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column27',value:'정정사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'Hosue B/L No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'Consol No',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'kcomcd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'elgbn',inputType:'select',width:'80',mandatory:'true',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BL추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'번호정정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'X'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'oldel',inputType:'text',width:'150',validateOnInput:'true',allowChar:'a-zA-Z0-9',maxLength:'20',hiddenCol:'true',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exno',inputType:'text',width:'150',maxLength:'20',allowChar:'a-zA-Z0-9',validateOnInput:'true',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pacd',inputType:'textImage',width:'80',maxLength:'2',allowChar:'a-zA-Z0-9',validateOnInput:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pkgs',inputType:'text',textAlign:'right',width:'80',dataType:'number',displayFormat:'#,##0',validateOnInput:'true',allowChar:'0-9',maxLength:'10'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'wht',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,##0.000',validateOnInput:'true',allowChar:'0-9.',maxLength:'16.3'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',id:'elsplgb',displayMode:'label',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'No'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{width:'60',inputType:'select',id:'elmid',displayMode:'label',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'elcogb',displayMode:'label',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'A'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'B'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'D'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'E'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'F'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'G'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'H'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'I'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'J'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'K'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'L'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'M'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'O'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'P'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'P'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Q'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Q'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'R'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'R'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'S'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'T'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'U'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'V'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'V'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'W'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'X'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'X'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Z'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Z'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eldpkg',displayMode:'label',dataType:'number',allowChar:'0-9',maxLength:'10',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'eldpkgut',displayMode:'label',allowChar:'a-zA-Z0-9',maxLength:'3',validateOnInput:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'elmody',displayMode:'label',textAlign:'left',maxByteLength:'100',allowChar:'ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z,.=()*/<>-\\s',validateOnInput:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blno',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mhno',displayMode:'label',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelObj:'btn_undoMarkIntnl',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_addRowIntnl',btnRowAddYn:'Y',btnRowDelObj:'btn_deleteRowIntnl',btnRowDelYn:'Y',gridID:'gr_houseLicenseInfo',rowAddFunction:'scwin.f_addRow',style:'',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_undoRow'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'tr_tab_center1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'단일항목수정',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_airExportModifyUnit',id:'gr_airExportModifyUnit',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20',gridName:'단일항목수정',focusMode:'row',keepDefaultColumnWidth:'true',columnMove:'false','ev:oncellclick':'scwin.gr_airExportModifyUnit_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Kcomcd',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'정신청 신고번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'정정항목',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'정정사유',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'정정 후 내용1',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'정정 후 내용2',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'정정 후 내용3',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'정정 후 내용4',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'SEQUEENCE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'Master B/L No',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'CustomHouse',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'CustomHouseDept',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdno',inputType:'text',width:'120',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'mdmodycd',inputType:'select',width:'150',textAlign:'left',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdhblmody',inputType:'text',width:'200',textAlign:'left',maxByteLength:'100',validateOnInput:'true',allowChar:'ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z,.=()*/<>-\\s'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modCont1',inputType:'text',width:'200',textAlign:'left',maxByteLength:'50',validateOnInput:'true',allowChar:'ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z,.=()*/<>-\\s'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modCont2',inputType:'text',width:'200',textAlign:'left',maxByteLength:'50',validateOnInput:'true',allowChar:'ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z,.=()*/<>-\\s'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modCont3',inputType:'text',width:'200',textAlign:'left',maxByteLength:'50',validateOnInput:'true',allowChar:'ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z,.=()*/<>-\\s'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modCont4',inputType:'text',width:'200',textAlign:'left',maxByteLength:'50',validateOnInput:'true',allowChar:'ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z,.=()*/<>-\\s'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'70',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdmbl',inputType:'text',width:'70',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'csCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'csDept',displayMode:'label',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelObj:'btn_undoMarkIntnl2',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_addRowIntnl2',btnRowAddYn:'Y',btnRowDelObj:'btn_deleteRowIntnl2',btnRowDelYn:'Y',gridID:'gr_airExportModifyUnit',rowAddFunction:'scwin.f_addRow2',style:'',rowDelFunction:'scwin.f_deleteRow2',cancelFunction:'scwin.f_undoRow2'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ediSend',style:'',title:'EDI Send',type:'button','ev:onclick':'scwin.f_SendEDI'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI Send'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'',nameId:'',popupID:'',selectID:'',validTitle:'',id:'udc_ilcomCode',allowCharCode:'a-zA-Z0-9',style:'width:%; height:px; ;visibility:hidden;'}},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_update',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_save',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_delete',style:'',type:'button',userAuth:'D','ev:onclick':'scwin.f_delete',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})