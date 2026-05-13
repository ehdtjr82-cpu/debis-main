/*amd /ui/il/airinb/aibk/ar_201_01_01b.xml 99446 4d95e74266d4e2b7b8a8d34e7aae1926647d62c49f19f8ab961c2e0b16fe3b29 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customerBookingSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerBookingInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드 No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'Customer Booking No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blgb',name:'B/L Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cino',name:'C/Invoice No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ascd',name:'Consignee Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asnm',name:'Consignee  Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ipcd',name:'Consignee Pic Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ipnm',name:'Consignee Pic Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iptl',name:'PIC Tel No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ipfx',name:'PIC Fax No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'Departure Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm',name:'Departure Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'Flight No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itcd',name:'Item Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itnm',name:'Item Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sacd',name:'Salesman Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sanm',name:'Salesman Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whcd',name:'Warehouse Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'whnm',name:'Warehouse Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'Remark',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'Input Id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'Input Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'Update Id',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'Update Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'Bound Type',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cargoPickupInfo',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_cargoPickupInfo_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드 No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srno',name:'Customer Booking No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDt',name:'Order Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호 No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rqdt',name:'Pickup Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rqtime',name:'Pickup 요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctn',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cwht',name:'Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDistrictCd',name:'From 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fromDistrictNm',name:'From 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrictCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorDistrictNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDistrictCd',name:'To 지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toDistrictNm',name:'To 지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDate',name:'Closing Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeTime',name:'Closing Time',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTyp',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCd',name:'Trans Company Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNm',name:'Trans Company Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullYn',name:'독차여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drv',name:'Driver Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTel',name:'Driver Tel No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomOdrNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inpid',name:'입력자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerCd',name:'실화주Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customerNm',name:'실화주Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orderType',name:'Order Send : 1, Odrer Send del :2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spRtn',name:'결과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spMsg',name:'결과메시지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_resultMsg',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'srno',name:'Customer Booking No',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveCtrtClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수입수출내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scDate',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomInatYn',name:'사업영역국제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_ctrtNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'거래처담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'관리대상거래처여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'계약담당자 사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRt',name:'배분율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtDistrictCd',name:'계약권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'계약등록점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispValue',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customerInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_comCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'SQL ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'파라메터2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'파라메터3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'파라메터4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'파라메터5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'파라메터6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'파라메터7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'파라메터8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'파라메터9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'파라메터10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param11',name:'파라메터11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param12',name:'파라메터12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param13',name:'파라메터13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param14',name:'파라메터14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.airinb.aibk.RetrieveAirImpCustomerBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_customerBookingSearch","key":"IN_DS1"},{"id":"ds_customerBookingInfo","key":"OUT_DS1"},{"id":"ds_cargoPickupInfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_customerBookingInfo","key":"OUT_DS1"},{"id":"ds_cargoPickupInfo","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.airinb.aibk.SaveAirImpCustomerBookingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_customerBookingInfo","key":"IN_DS1"},{"id":"ds_cargoPickupInfo","key":"IN_DS2"},{"id":"ds_resultMsg","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_resultMsg","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtClnt',action:'/il.comm.code.RetrieveInternationalContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveCtrtClnt","key":"IN_DS1"},{"id":"ds_ctrtNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveCtrtClnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveOrderSend',action:'/il.airout.aobk.SaveOrderSendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_cargoPickupInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveOrderSend_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_customerInfo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_customerInfo',target:'data:json,{"id":"ds_customerInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_customerInfo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//--------------------------------------------------------------------------//
//							메세지 상수 선언							     //
//--------------------------------------------------------------------------//
scwin.MSG_LO_WRN_001 = "B/L No. @ 이(가) 생성되어  삭제 불가능 합니다";

//--------------------------------------------------------------------------//
scwin.cvsslMgntNo = "";
scwin.p_kcomcd = "";
scwin.p_srno = "";
scwin.lobranCd = "";
scwin.userId = "";
scwin.p_lobranCd = "";
scwin.p_lobranNm = "";
scwin.processFlag = ""; // 처리 결과를 체크하는 Flag
scwin.deleteFlag = false;
scwin.actionFlag = ""; // 버튼 Action 체크 Flag
scwin.v_contractno = "";
scwin.hd_kcomcd = "DBEX";
scwin.hd_iogb = "I";
scwin.hd_blgb = "H";
scwin.currow = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  var params = $c.data.getParameter($p);
  scwin.cvsslMgntNo = params.cvsslMgntNo == null ? "" : params.cvsslMgntNo;
  scwin.p_kcomcd = params.kcomcd;
  scwin.p_srno = params.srno;
  let memJson = $c.data.getMemInfo($p);
  scwin.lobranCd = memJson.lobranCd;
  if (scwin.lobranCd == null) {
    scwin.lobranCd = " ";
  }

  //사용자 정보 가져오기
  scwin.userId = memJson.userId;
  scwin.p_lobranCd = memJson.lobranCd; // 귀속부서코드
  scwin.p_lobranNm = memJson.lobranNm; // 귀속부서 명

  //default 동부국제물류
  // scwin.p_clntNo = memJson.clntNo;
  // scwin.p_clntNm = memJson.name1;
  // scwin.airexgbim = memJson.airExgbIm;

  //f_SetDSHeader dataSet 생성
  const codeOptions = [{
    grpCd: "SD101",
    compID: "gr_cargoPickupInfo:transCondCd"
  }, {
    grpCd: "IL007",
    compID: "gr_cargoPickupInfo:carCondCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  // $c.gus.cfDisableBtnOnly([btn_addRow, btn_delRow, btn_undoRow]);
  $p.setTimeout(function () {
    udc_ilcomCode.hide();
    scwin.f_set("INIT");
    scwin.f_DefaultValue();
    ed_cnd_ed_srno.focus();
    btn_create.focus();
    scwin.processFlag = "None";
    scwin.f_getParametrSetting(); // link처리
  }, {
    "delay": 50
  });
};

//---------------------------------------------------------
// Parameter Setting
//---------------------------------------------------------
scwin.f_getParametrSetting = async function () {
  var kcomcd = scwin.p_kcomcd;
  var srno = scwin.p_srno;
  if ($c.gus.cfIsNull($p, srno)) {
    return false;
  }
  scwin.hd_kcomcd = kcomcd;
  ed_cnd_ed_srno.setValue(srno);
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  ed_cnd_ed_srno.setValue("");
};

//---------------------------------------------------------
// 화면세팅
//---------------------------------------------------------
scwin.f_set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtnOnly($p, [btn_addRow, btn_delRow, btn_undoRow, btn_orderSend, btn_orderSendDel]);
      $c.gus.cfDisableBtnOnly($p, [btn_update, btn_save, btn_delete, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_pu_houseLink]);
      $c.gus.cfEnableBtnOnly($p, [btn_create, btn_fieldClear]);
      scwin.f_DisablePopUpObj();
      gr_cargoPickupInfo.setDisabled("grid", true); //Enable = false; == Disabled = true;
      $c.gus.cfEnableObjects($p, [ed_cnd_ed_srno]);
      break;
    case "RETRIEVE":
      //조회모드
      $c.gus.cfDisableKeyData($p);
      scwin.f_DisablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_cancel]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRow, btn_delRow, btn_undoRow, btn_orderSend, btn_orderSendDel]);
      $c.gus.cfEnableBtnOnly($p, [btn_create, btn_update, btn_delete, btn_fieldClear]);
      $c.gus.cfEnableBtnOnly($p, [btn_pu_houseLink]);
      $c.gus.cfEnableObjects($p, [ed_cnd_ed_srno]);
      break;
    case "CREATE":
      //신규
      $c.gus.cfEnableKeyData($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_create, btn_update, btn_delete, btn_fieldClear]);
      $c.gus.cfEnableBtnOnly($p, [btn_save, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRow, btn_delRow, btn_undoRow, btn_orderSend, btn_orderSendDel]);
      gr_cargoPickupInfo.setDisabled("grid", false); // Enable = true;
      $c.gus.cfDisableObjects($p, [ed_cnd_ed_srno, ed_updid, ed_upddt]);
      ds_ctrtNo.removeAll();
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [btn_update, btn_create, btn_fieldClear]);
      $c.gus.cfEnableBtnOnly($p, [btn_save, btn_delete, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRow, btn_delRow, btn_undoRow, btn_orderSend, btn_orderSendDel]);
      gr_cargoPickupInfo.setDisabled("grid", false); // Enable = true;
      $c.gus.cfDisableKey($p);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableObjects($p, [ed_cnd_ed_srno]);
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_cancel, btn_fieldClear]);
      $c.gus.cfEnableBtnOnly($p, [btn_update, btn_create, btn_delete]);
      scwin.f_set("RETRIEVE");
      break;
    case "DELETE":
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_cancel, btn_fieldClear]);
      $c.gus.cfEnableBtnOnly($p, [btn_create, btn_update, btn_delete]);
      scwin.f_set("RETRIEVE");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp 이미지를 활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [udc_ascd, udc_ipcd, udc_dscd, udc_whcd, udc_sacd, udc_itcd]);
  $c.gus.cfEnableObjects($p, [ed_iptl, ed_ipfx, ica_ed_ondt, acb_lc_contractNo, ed_fltno, ed_updid, ed_upddt, ed_blno, ed_txt_remark]);
};

//-------------------------------------------------------------------------
// PopUp 이미지를 비활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [udc_ascd, udc_ipcd, udc_dscd, udc_whcd, udc_sacd, udc_itcd]);
  $c.gus.cfDisableObjects($p, [ed_iptl, ed_ipfx, ica_ed_ondt, acb_lc_contractNo, ed_fltno, ed_updid, ed_upddt, ed_blno, ed_txt_remark]);
};
scwin.setSeq = function (d, df, r, c) {
  return r + 1;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.f_retrieve = async function () {
  scwin.deleteFlag = false;
  scwin.actionFlag = "Retrieve";
  if (ed_cnd_ed_srno.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Booking No"]); //필수 입력 항목 입니다.
    ed_cnd_ed_srno.focus();
    return false;
  }
  ds_customerBookingInfo.removeAll();
  ds_cargoPickupInfo.removeAll();
  ds_resultMsg.removeAll();
  scwin.f_processBinding(dma_customerBookingSearch, "CustomerBookingSearch");
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_cargoPickupInfo.getRowCount());
    if (ds_customerBookingInfo.getRowCount() == 0) {
      scwin.f_processResult("NotExistBookingInfo");
    } else {
      scwin.f_processResult("ExistBookingInfo");
    }
  }
};

//-------------------------------------------------------------------------
// 조회조건 바인딩
//-------------------------------------------------------------------------
scwin.f_processBinding = async function (ds, gubun) {
  switch (gubun) {
    case "CustomerBookingSearch":
      //dma_customerBookingSearch (removeAll, insertRow)
      ds.set("kcomcd", scwin.hd_kcomcd);
      ds.set("srno", ed_cnd_ed_srno.getValue().trim());
      ds.set("iogb", scwin.hd_iogb);
      break;
    case "CustomerBookingSave":
      // ds_customerBookingInfo
      if (scwin.processFlag = "Create") {
        ds.setCellData(0, "kcomcd", scwin.hd_kcomcd);
        ds.setCellData(0, "iogb", scwin.hd_iogb);
        ds.setCellData(0, "blgb", scwin.hd_blgb);
      } else {
        ds.setCellData(ds.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
        ds.setCellData(ds.getRowPosition(), "iogb", scwin.hd_iogb);
        ds.setCellData(ds.getRowPosition(), "blgb", scwin.hd_blgb);
      }
      break;
    case "ContractSearch":
      // dma_retrieveCtrtClnt (removeAll, insertRow)
      ds.set("ctrtNo", scwin.v_contractno);
      ds.set("ctrtClntNo", ed_ascd.getValue().trim());
      ds.set("ctrtDtYn", "1");
      ds.set("bizDomInatYn", "1");
      ds.set("ctrtDistrictCd", "ZZB"); // ZZA : 해운권역, ZZB : 항공권역
      ds.set("impExpDomesticClsCd", "I"); // I:Inbound , O:Outbound
      ds.set("scDate", ica_ed_ondt.getValue().trim()); // 적용 기간
      break;
    default:
      break;
  } //end switch
};

//-------------------------------------------------------------------------
// 조회 결과
//-------------------------------------------------------------------------	
scwin.f_processResult = function (gubun) {
  switch (gubun) {
    case "NotExistBookingInfo":
      scwin.f_set("INIT");
      ds_cargoPickupInfo.removeAll();
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, [ed_cnd_ed_srno.getValue()]); //@이(가) 존재하지 않습니다.
      // $c.win.alert(ed_cnd_ed_srno.getValue().trim() + " does not exist.");
      ed_cnd_ed_srno.focus();
      break;
    case "ExistBookingInfo":
      scwin.f_set("RETRIEVE");
      ds_customerBookingInfo.setRowPosition(0);
      scwin.v_contractno = ds_customerBookingInfo.getCellData(ds_customerBookingInfo.getRowPosition(), "contractno");
      scwin.f_contractInfo();
      ed_cnd_ed_srno.focus();
      break;
    case "DeleteAction":
      if (ds_customerBookingInfo.getRowCount() == 0) {
        ds_cargoPickupInfo.removeAll();
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.btn_create_onclick = async function (e) {
  scwin.actionFlag = "Create";
  ds_customerBookingInfo.removeAll();
  ds_cargoPickupInfo.removeAll();
  ds_customerBookingInfo.insertRow(); // AddRow();
  scwin.f_DefaultValue();
  scwin.f_set("CREATE");
  scwin.processFlag = "Create";

  // 해공수입 부킹 시 CUSTOMER CODE 에 자동으로 999908 ( 공통거래처(국제)) 입력
  ed_ascd.setValue("999908");
  scwin.f_PopUp("Consignee", "T", "F", "F"); // retrieveEngClntInfo
  // ed_ascd.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.btn_update_onclick = async function (e) {
  scwin.actionFlag = "Update";
  scwin.f_set("UPDATE");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function () {
  if (ds_customerBookingInfo.getModifiedIndex().length > 0 || ds_cargoPickupInfo.getModifiedIndex().length > 0) {
    await scwin.f_processBinding(ds_customerBookingInfo, "CustomerBookingSave");
    await scwin.f_processBinding(ds_cargoPickupInfo, "CargoPickupSave");
    if (await scwin.f_reqFieldChk()) {
      ds_customerBookingInfo.setCellData(0, "ascd", ed_ascd.getValue());
      ds_customerBookingInfo.setCellData(0, "asnm", txt_asnm.getValue());
      ds_customerBookingInfo.setCellData(0, "ipcd", ed_ipcd.getValue());
      ds_customerBookingInfo.setCellData(0, "ipnm", txt_ipnm.getValue());
      ds_customerBookingInfo.setCellData(0, "iptl.", ed_iptl.getValue());
      ds_customerBookingInfo.setCellData(0, "ipfx", ed_ipfx.getValue());
      ds_customerBookingInfo.setCellData(0, "dscd", ed_dscd.getValue());
      ds_customerBookingInfo.setCellData(0, "dsnm", txt_dsnm.getValue());
      ds_customerBookingInfo.setCellData(0, "whcd", ed_whcd.getValue());
      ds_customerBookingInfo.setCellData(0, "whnm", txt_whnm.getValue());
      ds_customerBookingInfo.setCellData(0, "ondt", ica_ed_ondt.getValue());
      ds_customerBookingInfo.setCellData(0, "contractNo", acb_lc_contractNo.getValue());
      ds_customerBookingInfo.setCellData(0, "fltno", ed_fltno.getValue());
      ds_customerBookingInfo.setCellData(0, "sacd", ed_sacd.getValue());
      ds_customerBookingInfo.setCellData(0, "sanm", txt_sanm.getValue());
      ds_customerBookingInfo.setCellData(0, "updid", ed_updid.getValue());
      ds_customerBookingInfo.setCellData(0, "upddt", ed_upddt.getValue());
      ds_customerBookingInfo.setCellData(0, "itcd", ed_itcd.getValue());
      ds_customerBookingInfo.setCellData(0, "itnm", txt_itnm.getValue());
      ds_customerBookingInfo.setCellData(0, "blno", ed_blno.getValue());
      ds_customerBookingInfo.setCellData(0, "remark", ed_txt_remark.getValue());
      scwin.actionFlag = "Save";
      $c.sbm.execute($p, sbm_save);
      scwin.f_set("SAVE");
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["Customer Booking"]); /* @은(는) 변경된 사항이 없습니다. */
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (ds_resultMsg.getCellData(0, "srno") != "") {
    await ed_cnd_ed_srno.setValue(ds_resultMsg.getCellData(0, "srno"));
  }
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (scwin.actionFlag == "Save") {
      await $c.win.alert($p, E_MSG_CM_INF_001); // 성공적으로 저장하였습니다
      scwin.f_retrieve();
    }
    if (scwin.processFlag == "Delete") {
      scwin.f_processResult("DeleteAction");
      await $c.win.alert($p, E_MSG_CM_INF_004); // 성공적으로 삭제하였습니다
      scwin.f_set("CREATE");
      ed_cnd_ed_srno.setValue("");
      ed_cnd_ed_srno.focus();
      $c.gus.cfInitObjects($p, tb_master, null);
      $c.gus.cfEnableBtnOnly($p, [btn_delete]);
      scwin.deleteFlag = true;
      ds_resultMsg.removeAll();
    }
    scwin.processFlag = "None";
  }
};

//-------------------------------------------------------------------------
// 유효성검사
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = async function () {
  if ($c.gus.cfIsNull($p, ica_ed_ondt.getValue())) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Arrival Date"]); //필수 입력 항목입니다.
    ica_ed_ondt.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_blno.getValue())) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]); //필수 입력 항목입니다.
    ed_blno.focus();
    return false;
  }

  // Contract No Null Check
  if ($c.gus.cfIsNull($p, acb_lc_contractNo.getValue())) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Contract No"]); //@는 필수입력항목입니다.			
    acb_lc_contractNo.focus();
    return false;
  }

  // var chk1 = await $c.gus.cfValidate([gr_cargoPickupInfo]);
  // if( !chk1 ) {
  //     return false;
  // }

  for (var i = 0; i < ds_cargoPickupInfo.getRowCount(); i++) {
    var sRow = i + 1;
    if (ds_cargoPickupInfo.getCellData(i, "doorDt") == null || ds_cargoPickupInfo.getCellData(i, "doorDt") == "") {
      $c.win.alert($p, "CargoPickup의 " + sRow + "번째 데이터에서 Order Date은(는) 필수 입력 항목입니다.");
      return false;
    }
    if (ds_cargoPickupInfo.getCellData(i, "doorDt").length != 12) {
      $c.win.alert($p, "CargoPickup의 " + sRow + "번째 데이터에서 Order Date은(는) 12자리수만큼 입력하십시오.");
      return false;
    }
    if (ds_cargoPickupInfo.getCellData(i, "rqdt") == null || ds_cargoPickupInfo.getCellData(i, "rqdt") == "") {
      $c.win.alert($p, "CargoPickup의 " + sRow + "번째 데이터에서 Pickup Date은(는) 필수 입력 항목입니다.");
      return false;
    }
    if (ds_cargoPickupInfo.getCellData(i, "rqdt").length != 8) {
      $c.win.alert($p, "CargoPickup의 " + sRow + "번째 데이터에서 Pickup Date은(는) 8자리수만큼 입력하십시오.");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.btn_delete_onclick = async function (e) {
  if (ed_cnd_ed_blno.getValue().trim() != "") {
    // $c.gus.cfAlertMsg(scwin.MSG_LO_WRN_001, [ed_cnd_ed_blno.getValue()]);  //B/L No. @ 이(가) 생성되어  삭제 불가능 합니다.
    $c.win.alert($p, "B/L No. " + ed_cnd_ed_blno.getValue() + " 이(가) 생성되어  삭제 불가능 합니다.");
    ed_cnd_ed_srno.focus();
    return false;
  }
  let confirm = await $c.win.confirm($p, E_MSG_CM_CRM_004); // 삭제 하시겠습니까?
  if (confirm) {
    if ($c.gus.cfIsNull($p, ed_cnd_ed_srno.getValue())) {
      return false;
    }
    ds_customerBookingInfo.modifyAllStatus("D"); // DeleteMarked();
    scwin.processFlag = "Delete";
    $c.sbm.execute($p, sbm_save);
    ed_cnd_ed_srno.setValue("");
    ed_cnd_ed_srno.focus();
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.btn_cancel_onclick = function (e) {
  scwin.actionFlag = "Cancel";
  if (scwin.processFlag == "Create") {
    scwin.f_set("INIT");
    scwin.processFlag = "None";
  } else {
    scwin.f_set("RETRIEVE");
  }
  if (scwin.deleteFlag) {
    scwin.deleteFlag = false;
    return false;
  }
  ds_customerBookingInfo.undoAll();
  ds_cargoPickupInfo.undoAll();
};

//---------------------------------------------------------
// Order Send 버튼
//---------------------------------------------------------
scwin.btn_orderSend_onclick = function (e) {
  if (ds_cargoPickupInfo.getCellData(ds_cargoPickupInfo.getRowPosition(), "internalTyp") == "Y") {
    // door order qty시 필수.
    if (ed_itcd.getValue() == "") {
      $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Item"]); //@는 필수입력항목입니다.
      ed_itcd.focus();
      return;
    }
    var checked = 0;
    var errorChk = 0;

    // chk not check
    var j = 0;
    for (var i = 0; i < ds_cargoPickupInfo.getRowCount(); i++) {
      if (ds_cargoPickupInfo.getCellData(i, "chk") == "T") {
        j = j + 1;
      }
      checked++;
    }
    if (j == 0) {
      errorChk = 1; // chk를 선택안함.   	
    }
    if (errorChk == 0) {
      // error가 없으면
      // order sended 실행.
      var checked = 0;
      for (var i = 0; i < ds_cargoPickupInfo.getRowCount(); i++) {
        if (ds_cargoPickupInfo.getCellData(i, "chk") == "T") {
          ds_cargoPickupInfo.setCellData(i, "kcomcd", scwin.hd_kcomcd);
          if (ds_cargoPickupInfo.getCellData(i, "sendDt") == "") {
            ds_cargoPickupInfo.setCellData(i, "orderType", 1); // Order Send
          } else {
            ds_cargoPickupInfo.setCellData(i, "orderType", 2); // Order Send
          }
          ds_cargoPickupInfo.setCellData(i, "inpid", scwin.userId);
        }
        checked++;
      }
      $c.sbm.execute($p, sbm_saveOrderSend);
    }
  } else {
    $c.win.alert($p, "Normal Type");
    return;
  }
};
scwin.sbm_saveOrderSend_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    //$c.gus.cfAlertMsg(E_MSG_CM_INF_001); //  성공적으로 저장하였습니다.
    scwin.f_retrieve();
  }
};

//---------------------------------------------------------
// Order Send Delete 버튼
//---------------------------------------------------------
scwin.btn_orderSendDel_onclick = function (e) {
  if (ds_cargoPickupInfo.getCellData(ds_cargoPickupInfo.getRowPosition(), "internalTyp") == "Y") {
    // order sended check
    var checked = 0;
    var errorChk = 0;

    // chk not check
    var j = 0;
    for (var i = 0; i < ds_cargoPickupInfo.getRowCount(); i++) {
      if (ds_cargoPickupInfo.getCellData(i, "chk") == "T") {
        j = j + 1;
      }
      checked++;
    }
    if (j == 0) {
      errorChk = 1; // chk를 선택안함.
    }

    //send date  check
    var j = 0;
    for (var i = 0; i < ds_cargoPickupInfo.getRowCount(); i++) {
      if (ds_cargoPickupInfo.getCellData(i, "chk") == "T") {
        if (ds_cargoPickupInfo.getCellData(i, "sendDt") == "") {
          $c.win.alert($p, "Order is not sended : Order No -> " + ds_cargoPickupInfo.getCellData(i, "srno") + ",Seq -> " + ds_cargoPickupInfo.getCellData(i, "seq"));
          errorChk = 1;
        }
      }
      checked++;
    }
    for (var i = 0; i < ds_cargoPickupInfo.getRowCount(); i++) {
      if (ds_cargoPickupInfo.getCellData(i, "chk") == "T") {
        if (ds_cargoPickupInfo.getCellData(i, "mcomOdrNo") != "") {
          $c.win.alert($p, "Order sended : Order No -> " + ds_cargoPickupInfo.getCellData(i, "srno") + ",Seq -> " + ds_cargoPickupInfo.getCellData(i, "seq"));
          errorChk = 1;
        }
      }
      checked++;
    }
    if (errorChk == "0") {
      //error가 없으면
      // order sended 실행.
      var checked = 0;
      for (var i = 0; i < ds_cargoPickupInfo.getRowCount(); i++) {
        if (ds_cargoPickupInfo.getCellData(i, "chk") == "T") {
          ds_cargoPickupInfo.setCellData(i, "kcomcd", scwin.hd_kcomcd);
          ds_cargoPickupInfo.setCellData(i, "orderType", 3); // Order Send Del
          ds_cargoPickupInfo.setCellData(i, "inpid", scwin.userId);
        }
        checked++;
      }
      $c.sbm.execute($p, sbm_saveOrderSend);
    }
  } else {
    $c.win.alert($p, "Normal Type");
    return;
  }
};

//---------------------------------------------------------
// 행추가
//---------------------------------------------------------
scwin.f_addRow = function () {
  if (ed_cnd_ed_srno.getValue() == "") {
    // $c.gus.cfAlertMsg(E_MSG_CM_ERR_002, ["Booking Header"]);  // @은(는) 필수 입력 항목입니다.
    $c.win.alert($p, "Booking Header is mandatory.");
  } else if (ed_itcd.getValue() == "") {
    // $c.gus.cfAlertMsg(E_MSG_CM_ERR_002, ["Item"]);  // @은(는) 필수 입력 항목입니다.
    $c.win.alert($p, "Item is mandatory.");
  } else {
    var ds = $c.gus.object($p, ds_cargoPickupInfo);
    ds.insertRow();
    gr_cargoPickupInfo.setFocusedCell(ds.getRowCount() - 1, 0);
    ds.setCellData(ds.getRowPosition(), "kcomcd", scwin.hd_kcomcd);
    ds.setCellData(ds.getRowPosition(), "srno", ed_cnd_ed_srno.getValue());
    ds.setCellData(ds.getRowPosition(), "ctn", 0);
    ds.setCellData(ds.getRowPosition(), "cwht", 0.000);
    ds.setCellData(ds.getRowPosition(), "internalTyp", "N");
    ds.setCellData(ds.getRowPosition(), "transCondCd", "1");
    //Focus 이동을 해야 rowPosition 위치가 바뀜.
    gr_cargoPickupInfo.setFocusedCell(ds.getRowCount() - 1, "doorDt");
  }
};

//-------------------------------------------------------------------------
// function name : f_DelRow
// function desc : 그리드 행 삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  if (ds_cargoPickupInfo.getCellData(ds_cargoPickupInfo.getRowPosition(), "sendDt") != "") {
    // $c.gus.cfAlertMsg(E_MSG_CM_ERR_041, ["Order sended","delete"]);  // @은(는) @할 수 없습니다.
    $c.win.alert($p, "Order sended operation cannot be performed for delete.");
  } else {
    // ds_cargoPickupInfo.modifyRowStatus(ds_cargoPickupInfo.getRowPosition(), "D");
    if (ds_cargoPickupInfo.getRowStatus(ds_cargoPickupInfo.getRowPosition()) == "C") {
      ds_cargoPickupInfo.removeRow(ds_cargoPickupInfo.getRowPosition());
    } else {
      ds_cargoPickupInfo.deleteRow(ds_cargoPickupInfo.getRowPosition());
    }
  }
};

//---------------------------------------------------------
// 행취소
//---------------------------------------------------------
scwin.f_undoRow = function () {
  // UndoMarked(); - modifyRowStatus() 함수에서 undo 가 확인필요
  // ds_cargoPickupInfo.undoRow(ds_cargoPickupInfo.getRowPosition());
  if (ds_cargoPickupInfo.getRowStatus(ds_cargoPickupInfo.getRowPosition()) == "C") {
    ds_cargoPickupInfo.removeRow(ds_cargoPickupInfo.getRowPosition());
  } else {
    ds_cargoPickupInfo.undoRow(ds_cargoPickupInfo.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_cnd_ed_srno, ed_cnd_ed_blno, ed_blno]);
  ed_cnd_ed_srno.focus();
};

//-------------------------------------------------------------------------
// 화면이동
//-------------------------------------------------------------------------
scwin.btn_pu_houseLink_onclick = function (e) {
  scwin.f_openPgm("House");
};
scwin.btn_pu_find_onclick = function (e) {
  scwin.f_openPgm("Find");
};
scwin.btn_pu_masterLink_onclick = function (e) {
  scwin.f_openPgm("Master");
};
scwin.f_openPgm = function (name) {
  if (name == "Find") {
    var strPath = "/ui/il/airout/aobk/ar_101_01_02b.xml";
    var param = {
      iogb: "I"
    };
    $c.win.openMenu($p, "Customer Booking Search", strPath, "ar_101_01_02b.xml", param, {
      openAction: "exist"
    });
  } else if (name == "Master") {
    var strPath = "/ui/il/airinb/aibl/ar_202_01_01b.xml";
    var param = {
      kcomcd: scwin.hd_kcomcd,
      linkType: "MawbCreate",
      avdt: ica_ed_ondt.getValue().trim(),
      dscd: ed_dscd.getValue().trim(),
      dsnm: txt_dsnm.getValue().trim(),
      fltno: ed_fltno.getValue().trim()
    };
    $c.win.openMenu($p, "Import Master B/L", strPath, "ar_202_01_01b.xml", param, {
      openAction: "exist"
    });
  } else if (name == "House") {
    var strPath = "/ui/il/airinb/aibl/ar_203_01_01b.xml";
    var param = {
      blno: ed_cnd_ed_blno.getValue().trim(),
      kcomcd: scwin.hd_kcomcd
    };
    $c.win.openMenu($p, "Import House B/L", strPath, "ar_203_01_01b.xml", param, {
      openAction: "exist"
    });
  }
};

//-------------------------------------------------------------------------
// ilpopupdefine 열기
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case "Consignee":
      // Search Consignee
      udc_ascd.ilCommonPopUp(scwin.udc_ascd_callbackFunc, ed_ascd.getValue().trim(), txt_asnm.getValue().trim(), pWinCloseTF, '6', 'Consignee', '130,300', '3,4,5,6,7,8,9,10', null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "ConsigneePic":
      // Search ConsigneePic
      if (ed_ascd.getValue().trim() == "" || ed_ascd.getValue().trim() == null) {
        $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003, ["Consignee"]); //필수 입력 항목 입니다.
        ed_ascd.focus();
        return false;
      }
      udc_ipcd.ilCommonPopUp(scwin.udc_ipcd_callbackFunc, ed_ipcd.getValue(), txt_ipnm.getValue(), pWinCloseTF, '6', 'Consignee', '130,300', null, null, '500', '500', null, null, null, pAllSearchTF, null, pNoDataCloseTF);
      break;
    case "Departure":
      // Search Departure
      udc_dscd.ilCommonPopUp(scwin.udc_dscd_callbackFunc, ed_dscd.getValue(), txt_dsnm.getValue(), pWinCloseTF, '6', 'Port Code, Port Name', '130,300', "3,4,5,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, 'Departure Search, Port Code, Port Name', pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.udc_ascd_callbackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_ascd.setValue(rtnList[0]);
    txt_asnm.setValue(rtnList[1]);
    ed_iptl.setValue(rtnList[6]);
    ed_ipfx.setValue(rtnList[7]);
    scwin.v_contractno = "";
    scwin.f_contractInfo();
  } else {
    ed_ascd.setValue("");
    txt_asnm.setValue("");
  }
};
scwin.udc_ipcd_callbackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_ipcd.setValue(rtnList[0]);
    txt_ipnm.setValue(rtnList[1]);
  } else {
    ed_ipcd.setValue("");
    txt_ipnm.setValue("");
  }
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "N/A") {
      ed_iptl.setValue(rtnList[4]);
      ed_ipfx.setValue(rtnList[5]);
      if (ds_ctrtNo.getRowCount() < 1) {
        scwin.v_contractno = "";
        scwin.f_contractInfo();
      }
    }
  }
};
scwin.udc_dscd_callbackFunc = function (rtnList) {
  // $c.gus.cfSetReturnValue(rtnList, ed_dscd, txt_dsnm);
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_dscd.setValue(rtnList[0]);
    txt_dsnm.setValue(rtnList[1]);
  } else {
    ed_dscd.setValue("");
    txt_dsnm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 공통팝업 열기
//-------------------------------------------------------------------------
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var rtnList = new Array();
  switch (gubun1) {
    case "Warehouse":
      //Warehouse
      udc_whcd.ilCommonPopUp(scwin.callbackAirBoneZoneCode // XML상의 SELECT ID	
      , ed_whcd.getValue().trim() // 화면에서의 ??? Code Element의	Value
      , txt_whnm.getValue() // 화면에서의 ??? Name Element의	Value
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '4' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "Code, Name,'',Eng" // Title순서	
      , '80,200,0,60' // 보여주는 각 컬럼들의 폭	
      , "3,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Warehouse,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : ""
      );
      break;
    case "Salesman":
      //Salesman
      udc_sacd.ilCommonPopUp(scwin.callbackEmpInfo, ed_sacd.getValue().trim(), txt_sanm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;
    case "Item":
      //Item
      udc_itcd.ilCommonPopUp(scwin.callbackCommGoodsInfo, ed_itcd.getValue().trim(), txt_itnm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Item,Code,Name", pNoDataCloseTF);
      break;
    default:
      break;
  }
};
scwin.callbackAirBoneZoneCode = function (rtnList) {
  // $c.gus.cfSetReturnValue(rtnList, ed_whcd, txt_whnm);
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_whcd.setValue(rtnList[0]);
    txt_whnm.setValue(rtnList[1]);
  } else {
    ed_whcd.setValue("");
    txt_whnm.setValue("");
  }
};
scwin.callbackEmpInfo = function (rtnList) {
  // $c.gus.cfSetReturnValue(rtnList, ed_sacd, txt_sanm);
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_sacd.setValue(rtnList[0]);
    txt_sanm.setValue(rtnList[1]);
  } else {
    ed_sacd.setValue("");
    txt_sanm.setValue("");
  }
};
scwin.callbackCommGoodsInfo = function (rtnList) {
  // $c.gus.cfSetReturnValue(rtnList, ed_itcd, txt_itnm);
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_itcd.setValue(rtnList[0]);
    txt_itnm.setValue(rtnList[1]);
  } else {
    ed_itcd.setValue("");
    txt_itnm.setValue("");
  }
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = async function (disGubun, row, pCode, pName, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  // 선언부
  var rtnList;
  scwin.currow = row;
  switch (disGubun) {
    case "FromCity":
      if (!$c.gus.cfIsNull($p, pCode)) {
        pCode = ds_cargoPickupInfo.getCellData(row, "fromDistrictCd");
      }
      if (!$c.gus.cfIsNull($p, pName)) {
        pName = ds_cargoPickupInfo.getCellData(row, "fromDistrictNm");
      }
      ds_cargoPickupInfo.setCellData(row, "fromDistrictCd", "");
      ds_cargoPickupInfo.setCellData(row, "fromDistrictNm", "");
      udc_ilcomCode.setSelectId("retrieveDoorArea");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackDoorArea1, pCode // 코드
      , pName // 코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "From City,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: ""
      );
      break;
    case "DoorCity":
      if (!$c.gus.cfIsNull($p, pCode)) {
        pCode = ds_cargoPickupInfo.getCellData(row, "doorDistrictCd");
      }
      if (!$c.gus.cfIsNull($p, pName)) {
        pName = ds_cargoPickupInfo.getCellData(row, "doorDistrictNm");
      }
      ds_cargoPickupInfo.setCellData(row, "doorDistrictCd", "");
      ds_cargoPickupInfo.setCellData(row, "doorDistrictNm", "");
      udc_ilcomCode.setSelectId("retrieveDoorArea");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackDoorArea2, pCode // 코드
      , pName // 코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Door City,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: ""
      );
      break;
    case "ToCity":
      if (!$c.gus.cfIsNull($p, pCode)) {
        pCode = ds_cargoPickupInfo.getCellData(row, "toDistrictCd");
      }
      if (!$c.gus.cfIsNull($p, pName)) {
        pName = ds_cargoPickupInfo.getCellData(row, "toDistrictNm");
      }
      ds_cargoPickupInfo.setCellData(row, "toDistrictCd", "");
      ds_cargoPickupInfo.setCellData(row, "toDistrictNm", "");
      udc_ilcomCode.setSelectId("retrieveDoorArea");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackDoorArea3, pCode // 코드
      , pName // 코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "To City,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: ""
      );
      break;
    case "TransCompany":
      //Trans Company
      if (!$c.gus.cfIsNull($p, pCode)) {
        pCode = ds_cargoPickupInfo.getCellData(row, "transCd");
      }
      if (!$c.gus.cfIsNull($p, pName)) {
        pName = ds_cargoPickupInfo.getCellData(row, "transNm");
      }
      ds_cargoPickupInfo.setCellData(row, "transCd", "");
      ds_cargoPickupInfo.setCellData(row, "transNm", "");
      udc_ilcomCode.setSelectId("retrieveEngClntInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackEngClntInfo6, pCode // 코드
      , pName // 코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Trans Company,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: ""
      );
      break;
    case "Department":
      //Trans Company
      if (!$c.gus.cfIsNull($p, pCode)) {
        pCode = ds_cargoPickupInfo.getCellData(row, "transCd");
      }
      if (!$c.gus.cfIsNull($p, pName)) {
        pName = ds_cargoPickupInfo.getCellData(row, "transNm");
      }
      ds_cargoPickupInfo.setCellData(row, "transCd", "");
      ds_cargoPickupInfo.setCellData(row, "transNm", "");
      udc_ilcomCode.setSelectId("retrieveOpDeptCdInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackOpDeptCdInfo, pCode // 코드
      , pName // 코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Code, Name" // Title순서
      , '80,230' // 보여주는	각 컬럼들의	폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Department,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: ""
      );
      break;
    default:
      break;
  }
}; // 삭제

scwin.callbackDoorArea1 = function (rtnList) {
  var popUpFlag = true;
  if (typeof rtnList != "undefined") {
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_cargoPickupInfo.setCellData(scwin.currow, "fromDistrictCd", rtnList[0].substring(0, 3));
      ds_cargoPickupInfo.setCellData(scwin.currow, "fromDistrictNm", rtnList[1]);
    } else {
      ds_cargoPickupInfo.setCellData(scwin.currow, "fromDistrictCd", "");
      ds_cargoPickupInfo.setCellData(scwin.currow, "fromDistrictNm", "");
    }
  }
  return popUpFlag;
};
scwin.callbackDoorArea2 = function (rtnList) {
  var popUpFlag = true;
  if (typeof rtnList != "undefined") {
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_cargoPickupInfo.setCellData(scwin.currow, "doorDistrictCd", rtnList[0].substring(0, 3));
      ds_cargoPickupInfo.setCellData(scwin.currow, "doorDistrictNm", rtnList[1]);
    } else {
      ds_cargoPickupInfo.setCellData(scwin.currow, "doorDistrictCd", "");
      ds_cargoPickupInfo.setCellData(scwin.currow, "doorDistrictNm", "");
    }
  }
  return popUpFlag;
};
scwin.callbackDoorArea3 = function (rtnList) {
  var popUpFlag = true;
  if (typeof rtnList != "undefined") {
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_cargoPickupInfo.setCellData(scwin.currow, "toDistrictCd", rtnList[0].substring(0, 3));
      ds_cargoPickupInfo.setCellData(scwin.currow, "toDistrictNm", rtnList[1]);
    } else {
      ds_cargoPickupInfo.setCellData(scwin.currow, "toDistrictCd", "");
      ds_cargoPickupInfo.setCellData(scwin.currow, "toDistrictNm", "");
    }
  }
  return popUpFlag;
};
scwin.callbackEngClntInfo6 = function (rtnList) {
  var popUpFlag = true;
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_cargoPickupInfo, scwin.currow, "transCd", "transNm");
    }
  }
  return popUpFlag;
};
scwin.callbackOpDeptCdInfo = function (rtnList) {
  var popUpFlag = true;
  if (typeof rtnList != "undefined") {
    if (rtnList[0] != "") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_cargoPickupInfo, scwin.currow, "transCd", "transNm");
    }
  }
  return popUpFlag;
};

//-------------------------------------------------------------------------
// 계약번호 조회
//-------------------------------------------------------------------------
scwin.f_contractInfo = async function () {
  if (ed_ascd.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Consignee Info"]); //필수 입력 항목 입니다.
    ed_ascd.focus();
    return false;
  }
  ds_ctrtNo.removeAll();
  await scwin.f_processBinding(dma_retrieveCtrtClnt, "ContractSearch");
  if (ica_ed_ondt.getValue().trim() != "") {
    $c.sbm.execute($p, sbm_retrieveCtrtClnt);
  }
};
scwin.sbm_retrieveCtrtClnt_submitdone = function (e) {
  var options = {};
  options.sortIndex = "ctrtNo";
  options.sortOrder = "-1"; //오른차순:"1", 내림차순:"-1"
  ds_ctrtNo.multisort(options);
  if (ds_ctrtNo.getRowCount() > 0) {
    if (ds_ctrtNo.getRowCount() == 1) {
      ds_ctrtNo.setRowPosition(0);
    } else {
      ds_ctrtNo.setRowPosition(1);
    }
    ed_sacd.setValue(ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "empNo"));
    txt_sanm.setValue(ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "empNm"));
    if (ed_sacd.getValue().trim() != "") {
      scwin.f_OpenCommonPopUp('Salesman', 'T', 'F', 'F');
    }
  }
};

//-------------------------------------------------------------------------
// customerInfo  가져오기 (GAUCE DataID/Reset 제거 → sbm_combo 공통 사용)
//------------------------------------------------------------------------- 	
scwin.f_customerInfo = async function (param) {
  // ds_customerInfo.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveCustomerInfo&param1=" + param;
  await scwin.f_commCode(ds_customerInfo, "ilCommonEBC", "retriveCustomerInfo", param);
  // $c.sbm.execute(sbm_customerInfo, param);
  ds_customerInfo.removeAll();
};
scwin.sbm_customerInfo_submitdone = function (e) {
  if (ds_customerInfo.getRowCount() == 0) {} else {
    ed_sacd.setValue(ds_customerInfo.getValue(ds_customerInfo.getRowPosition(), "col3"));
    txt_sanm.setValue(ds_customerInfo.getValue(ds_customerInfo.getRowPosition(), "col4"));
  }
};

// -------------------------------------------------------------------------
// 공통 코드조회 (sbm_combo 고정)
// - sysCd 생략 시 "ilCommonEBC" 기본
// - target DataList를 받아서 거기로 결과 복사
// -------------------------------------------------------------------------
scwin.f_commCode = async function (targetDl, sysCd, queryId, param1, param2, param3, param4) {
  // sysCd 생략 호출 허용: f_commCode(targetDl, "queryId", p1..)
  if (queryId == undefined) {
    queryId = sysCd;
    sysCd = "ilCommonEBC";
    param4 = param3;
    param3 = param2;
    param2 = param1;
    param1 = "";
  }
  var params = {
    sysCd: sysCd || "ilCommonEBC",
    queryId: queryId || "",
    param1: param1 == undefined ? "" : param1,
    param2: param2 == undefined ? "" : param2,
    param3: param3 == undefined ? "" : param3,
    param4: param4 == undefined ? "" : param4
  };

  // 실행 + 결과 복사 (기본: e.responseJSON.GAUCE)
  await scwin.execComboAndCopy(params, {
    target: targetDl,
    responsePath: "GAUCE"
  });
};

// ==
// sbm_combo 전용: 직렬 실행 큐 + 결과를 원하는 DataList에 복사
// ==
scwin._comboQueue = scwin._comboQueue || Promise.resolve();

// ---------------------------------------------------------------------
// sbm_combo 실행 + 결과 복사 공통 함수
// params: dma_combo에 넣을 JSON
// options:
//  - target: (필수) 결과를 복사할 DataList
//  - responsePath: e.responseJSON에서 복사할 경로 (기본 "GAUCE")
//  - transform: (data, e) => data 가공 후 넣기
// ---------------------------------------------------------------------
// 큐가 끊기지 않게 흡수 체인 유지
scwin.execComboAndCopy = function (params, options) {
  options = options || {};
  var target = options.target;
  var responsePath = options.responsePath || "GAUCE";
  var transform = options.transform;
  if (!target) throw new Error("options.target(DataList) is required");

  // 직렬 실행: 이전 요청 끝난 뒤 다음 요청 수행
  scwin._comboQueue = scwin._comboQueue.then(function () {
    // dma_combo는 공유이므로 execute 직전에 세팅
    dma_comCode.setJSON(params);
    return async function () {
      return await $c.sbm.execute($p, sbm_comCode).then(function (e) {
        var json = e && e.responseJSON ? e.responseJSON : {};
        var data = scwin._pick(json, responsePath, null);
        if (transform) data = transform(data, e);

        // 호출자가 넘긴 target DataList로만 복사
        scwin._applyToDataList(target, data);
        return e;
      });
    }();
  });
  scwin._comboQueue = scwin._comboQueue.catch(function () {});
  // 실행 Promise 반환 (await 가능)
  return scwin._comboQueue;
};

// udc_ilcomCode 팝업 열기 (Consignee)
scwin.udc_ascd_onclickEvent = function (e) {
  scwin.f_PopUp('Consignee', 'F', 'F', 'F');
};
scwin.udc_ascd_onblurCodeEvent = function (e) {
  var strClntNo = ed_ascd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_asnm.setValue("");
    ds_ctrtNo.removeAll();
    scwin.f_PopUp("Consignee", "T", "F", "F");
  } else {
    txt_asnm.setValue("");
  }
};
scwin.udc_ascd_onviewchangeNameEvent = function (e) {
  scwin.f_PopUp('Consignee', 'T', 'F', 'F');
};

// udc_ilcomCode 팝업 열기 (Consignee PIC)
scwin.udc_ipcd_onclickEvent = function (e) {
  scwin.f_PopUp('ConsigneePic', 'F', 'F', 'F');
};
scwin.udc_ipcd_onblurCodeEvent = function (e) {
  var strClntNo = ed_ipcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_ipnm.setValue("");
    scwin.f_PopUp("ConsigneePic", "T", "F", "F");
  } else {
    txt_ipnm.setValue("");
  }
};
scwin.udc_ipcd_onviewchangeNameEvent = function (e) {
  scwin.f_PopUp('ConsigneePic', 'T', 'F', 'F');
};

// udc_ilcomCode 팝업 열기 (Departure)
scwin.udc_dscd_onclickEvent = function (e) {
  scwin.f_PopUp('Departure', 'F', 'F', 'F');
};
scwin.udc_dscd_onblurCodeEvent = function (e) {
  var strClntNo = ed_dscd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_dsnm.setValue("");
    scwin.f_PopUp("Departure", "T", "F", "F");
  } else {
    txt_dsnm.setValue("");
  }
};
scwin.udc_dscd_onviewchangeNameEvent = function (e) {
  scwin.f_PopUp('Departure', 'T', 'F', 'F');
};

// udc_ilcomCode 팝업 열기 (Warehouse)
scwin.udc_whcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Warehouse', 'F', 'F', 'F');
};
scwin.udc_whcd_onblurCodeEvent = function (e) {
  var strClntNo = ed_whcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_whnm.setValue("");
    scwin.f_OpenCommonPopUp('Warehouse', 'T', 'F', 'F');
  } else {
    txt_whnm.setValue("");
  }
};
scwin.udc_whcd_onviewchangeNameEvent = function (e) {
  scwin.f_OpenCommonPopUp('Warehouse', 'T', 'F', 'F');
};

// udc_ilcomCode 팝업 열기 (Salesman)
scwin.udc_sacd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};
scwin.udc_sacd_onblurCodeEvent = function (e) {
  var strClntNo = ed_sacd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_sanm.setValue("");
    scwin.f_OpenCommonPopUp('Salesman', 'T', 'F', 'F');
  } else {
    txt_sanm.setValue("");
  }
};
scwin.udc_sacd_onviewchangeNameEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'T', 'F', 'F');
};

// udc_ilcomCode 팝업 열기 (Item)
scwin.udc_itcd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'F', 'F', 'F');
};
scwin.udc_itcd_onblurCodeEvent = function (e) {
  var strClntNo = ed_itcd.getValue().trim();
  if (strClntNo.length > 0) {
    txt_itnm.setValue("");
    scwin.f_OpenCommonPopUp('Item', 'T', 'F', 'F');
  } else {
    txt_itnm.setValue("");
  }
};
scwin.udc_itcd_onviewchangeNameEvent = function (e) {
  scwin.f_OpenCommonPopUp('Item', 'T', 'F', 'F');
};

// Arrival Date 이벤트
scwin.ica_ed_ondt_onviewchange = function (e) {
  // var strClntNo = ica_ed_ondt.getValue().trim();
  // if( ica_ed_ondt.Modified ) {  // 이벤트를 onchange 로 바꿔야할듯(?)
  if (ed_ascd.getValue().trim() != "" && ica_ed_ondt.getValue().trim() != "") {
    scwin.f_contractInfo();
  }
  // }
};

// Contract No 이벤트
scwin.ds_ctrtNo_ondataload = function () {
  var ctrtNo = "";
  var clntPicNm = "";
  var ctrtEndDt = "";
  var crcCd = "";
  var rtn = "";
  for (var i = 0; i < ds_ctrtNo.getRowCount(); i++) {
    ctrtNo = ds_ctrtNo.getCellData(i, "ctrtNo");
    clntPicNm = ds_ctrtNo.getCellData(i, "clntPicNm");
    ctrtEndDt = ds_ctrtNo.getCellData(i, "ctrtEndDt");
    crcCd = ds_ctrtNo.getCellData(i, "crcCd");
    rtn = ctrtNo + " (" + clntPicNm + ":~" + ctrtEndDt + ":" + crcCd + ")";
    ds_ctrtNo.setCellData(i, "dispValue", rtn);
  }
};
scwin.acb_lc_contractNo_onfocus = function () {
  if (acb_lc_contractNo.getValue() == "" && ed_ascd.getValue() != "" && ica_ed_ondt.getValue() != "") {
    scwin.f_contractInfo();
  }
};
scwin.acb_lc_contractNo_onviewchange = function (info) {
  ed_sacd.setValue(""); // 초기화?
  txt_sanm.setValue("");
  ed_sacd.setValue(ds_ctrtNo.getCellData(ds_ctrtNo.getRowPosition(), "empNo"));
  if (ds_ctrtNo.getRowPosition() != 0 && ed_sacd.getValue().trim() != "") {
    scwin.f_OpenCommonPopUp('Salesman', 'T', 'F', 'F');
  }
};

// Grid 이벤트 (팝업)
scwin.gr_cargoPickupInfo_ontextimageclick = async function (rowIndex, columnIndex) {
  var colId = gr_cargoPickupInfo.getColumnID(columnIndex);
  switch (colId) {
    case "fromDistrictCd":
      if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() == "") {
        await scwin.f_PopUpGrid("FromCity", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "fromDistrictCd"), ds_cargoPickupInfo.getCellData(rowIndex, "fromDistrictNm"), "F", "F", "F");
      }
      break;
    case "doorDistrictCd":
      if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() == "") {
        scwin.f_PopUpGrid("DoorCity", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "doorDistrictCd"), ds_cargoPickupInfo.getCellData(rowIndex, "doorDistrictNm"), "F", "F", "F");
      }
      break;
    case "toDistrictCd":
      if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() == "") {
        scwin.f_PopUpGrid("ToCity", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "toDistrictCd"), ds_cargoPickupInfo.getCellData(rowIndex, "toDistrictNm"), "F", "F", "F");
      }
      break;
    case "transCd":
      if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() == "") {
        if (ds_cargoPickupInfo.getCellData(rowIndex, "internalTyp") == "N") {
          scwin.f_PopUpGrid("TransCompany", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "transCd"), ds_cargoPickupInfo.getCellData(rowIndex, "transNm"), "F", "F", "F");
        } else {
          scwin.f_PopUpGrid("Department", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "transCd"), ds_cargoPickupInfo.getCellData(rowIndex, "transNm"), "F", "F", "F");
        }
      }
      break;
    case "doorDt":
      //cfOpenCalendar(gr_CargoPickupInfo, rowIndex, colId);
      break;
    case "rqdt":
      //cfOpenCalendar(gr_CargoPickupInfo, rowIndex, colId);
      break;
    case "closeDate":
      //cfOpenCalendar(gr_CargoPickupInfo, rowIndex, colId);
      break;
    default:
      break;
  }
};

// scwin.ds_cargoPickupInfo_oncelldatachange = function (info) {
//     var colId = info.colID;
//     var row = info.rowIndex;
//     var oldData = info.oldValue;

//     switch (colId) {
//         case "fromDistrictCd":
//             //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
//             if (ds_cargoPickupInfo.getCellData(row, colId).trim() != "" && ds_cargoPickupInfo.getCellData(row, colId) != oldData) {
//                 ds_cargoPickupInfo.setCellData(row, "fromDistrictNm", "");
//                 // ds_cargoPickupInfo.setCellData(row, "fromDistrictCd") = "";
//                 scwin.f_PopUpGrid("FromCity", row, ds_cargoPickupInfo.getCellData(row, "fromDistrictCd"), ds_cargoPickupInfo.getCellData(row, "fromDistrictNm"), "T", "F", "F");
//                 //Name field 존재시 check.
//                 //Name Value 가 Blank 일경우 코드값을 Blank 한다.
//             } else if (ds_cargoPickupInfo.getCellData(row, colId).trim() == "") {
//                 ds_cargoPickupInfo.setCellData(row, "fromDistrictCd", "");
//                 ds_cargoPickupInfo.setCellData(row, "fromDistrictNm", "");
//             }
//             break;
//         case "doorDistrictCd":
//             //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
//             if (ds_cargoPickupInfo.getCellData(row, colId).trim() != "" && ds_cargoPickupInfo.getCellData(row, colId) != oldData) {
//                 ds_cargoPickupInfo.setCellData(row, "doorDistrictNm", "");
//                 // ds_cargoPickupInfo.setCellData(row, "doorDistrictCd", "");
//                 scwin.f_PopUpGrid("DoorCity", row, ds_cargoPickupInfo.getCellData(row, "doorDistrictCd"), ds_cargoPickupInfo.getCellData(row, "doorDistrictNm"), "T", "F", "F")
//                 //Name field 존재시 check.
//                 //Name Value 가 Blank 일경우 코드값을 Blank 한다.
//             } else if (ds_cargoPickupInfo.getCellData(row, colId).trim() == "") {
//                 ds_cargoPickupInfo.setCellData(row, "doorDistrictCd", "");
//                 ds_cargoPickupInfo.setCellData(row, "doorDistrictNm", "");
//             }
//             break;
//         case "toDistrictCd":
//             if (ds_cargoPickupInfo.getCellData(row, colId).trim() != "" && ds_cargoPickupInfo.getCellData(row, colId) != oldData) {
//                 ds_cargoPickupInfo.setCellData(row, "toDistrictNm", "");
//                 // ds_cargoPickupInfo.setCellData(row, "toDistrictCd", "");
//                 scwin.f_PopUpGrid("ToCity", row, ds_cargoPickupInfo.getCellData(row, "toDistrictCd"), ds_cargoPickupInfo.getCellData(row, "toDistrictNm"), "T", "F", "F")
//             } else if (ds_cargoPickupInfo.getCellData(row, colId).trim() == "") {
//                 ds_cargoPickupInfo.setCellData(row, "toDistrictCd", "");
//                 ds_cargoPickupInfo.setCellData(row, "toDistrictNm", "");
//             }
//             break;
//         case "transCd":
//             if (ds_cargoPickupInfo.getCellData(row, colId).trim() != "" && ds_cargoPickupInfo.getCellData(row, colId) != oldData) {
//                 // ds_cargoPickupInfo.setCellData(row, "transCd", "");
//                 ds_cargoPickupInfo.setCellData(row, "transNm", "");
//                 // scwin.f_PopUpGrid("TransCompany", row);
//                 if (ds_cargoPickupInfo.getCellData(row, "internalTyp") == "N") {
//                     scwin.f_PopUpGrid("TransCompany", row, ds_cargoPickupInfo.getCellData(row, "transCd"), ds_cargoPickupInfo.getCellData(row, "transNm"), "T", "F", "F");
//                 } else {
//                     scwin.f_PopUpGrid("Department", row, ds_cargoPickupInfo.getCellData(row, "transCd"), ds_cargoPickupInfo.getCellData(row, "transNm"), "T", "F", "F");
//                 }
//             } else if (ds_cargoPickupInfo.getCellData(row, colId).trim() == "") {
//                 ds_cargoPickupInfo.setCellData(row, "transCd", "");
//                 ds_cargoPickupInfo.setCellData(row, "transNm", "");
//             }
//             break;
//         case "internalTyp":
//             if (ds_cargoPickupInfo.getCellData(row, "internalTyp") != "N") {
//                 if (ds_cargoPickupInfo.getCellData(row, "transCd") == "") {
//                     // ds_cargoPickupInfo.NameValue(row,"transCd")	 = "<%=p_lobranCd%>";
//                     // ds_cargoPickupInfo.NameValue(row,"transNm")	 = "<%=p_lobranNm%>";
//                 }
//             }
//             break;
//         default:
//             break;
//     }
// };

scwin.gr_cargoPickupInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  switch (columnId) {
    case "fromDistrictCd":
      ed_txt_descnm.setValue(ds_cargoPickupInfo.getCellData(rowIndex, "fromDistrictNm"));
      break;
    case "toDistrictCd":
      ed_txt_descnm.setValue(ds_cargoPickupInfo.getCellData(rowIndex, "toDistrictNm"));
      break;
    case "transCd":
      ed_txt_descnm.setValue(ds_cargoPickupInfo.getCellData(rowIndex, "transNm"));
      break;
    default:
      ed_txt_descnm.setValue("");
      break;
  }
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

// 입력할 때 마다 조회조건 House B/L No	에도 동일하게 반영
scwin.onkeyup2 = function (e) {
  var houseBlNo = ed_blno.getValue();
  ed_cnd_ed_blno.setValue(houseBlNo);
  this.setValue(e.target.value.toUpperCase());
};
scwin.gr_cargoPickupInfo_onafteredit = async function (rowIndex, columnIndex, value) {
  await scwin.gr_cargoPickupInfo_onPopUp(rowIndex, columnIndex, value);
};

// Grid 팝업 및 돋보기 버튼 클릭 팝업 호출 이벤트
scwin.gr_cargoPickupInfo_onPopUp = async function (rowIndex, columnIndex, value) {
  var colId = gr_cargoPickupInfo.getColumnID(columnIndex);
  if (colId == "fromDistrictCd") {
    if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() != "") {
      ds_cargoPickupInfo.setCellData(rowIndex, "fromDistrictNm", "");
      await scwin.f_PopUpGrid("FromCity", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "fromDistrictCd"), ds_cargoPickupInfo.getCellData(rowIndex, "fromDistrictNm"), "T", "F", "F");
    } else {
      ds_cargoPickupInfo.setCellData(rowIndex, "fromDistrictCd", "");
      ds_cargoPickupInfo.setCellData(rowIndex, "fromDistrictNm", "");
    }
  } else if (colId == "doorDistrictCd") {
    if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() != "") {
      ds_cargoPickupInfo.setCellData(rowIndex, "doorDistrictNm", "");
      await scwin.f_PopUpGrid("DoorCity", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "doorDistrictCd"), ds_cargoPickupInfo.getCellData(rowIndex, "doorDistrictNm"), "T", "F", "F");
    } else {
      ds_cargoPickupInfo.setCellData(rowIndex, "doorDistrictCd", "");
      ds_cargoPickupInfo.setCellData(rowIndex, "doorDistrictNm", "");
    }
  } else if (colId == "toDistrictCd") {
    if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() != "") {
      ds_cargoPickupInfo.setCellData(rowIndex, "toDistrictNm", "");
      await scwin.f_PopUpGrid("ToCity", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "toDistrictCd"), ds_cargoPickupInfo.getCellData(rowIndex, "toDistrictNm"), "T", "F", "F");
    } else {
      ds_cargoPickupInfo.setCellData(rowIndex, "toDistrictCd", "");
      ds_cargoPickupInfo.setCellData(rowIndex, "toDistrictNm", "");
    }
  } else if (colId == "transCd") {
    if (ds_cargoPickupInfo.getCellData(rowIndex, colId).trim() != "") {
      ds_cargoPickupInfo.setCellData(rowIndex, "transNm", "");
      if (ds_cargoPickupInfo.getCellData(rowIndex, "internalTyp") == "N") {
        await scwin.f_PopUpGrid("TransCompany", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "transCd"), ds_cargoPickupInfo.getCellData(rowIndex, "transNm"), "T", "F", "F");
      } else {
        await scwin.f_PopUpGrid("Department", rowIndex, ds_cargoPickupInfo.getCellData(rowIndex, "transCd"), ds_cargoPickupInfo.getCellData(rowIndex, "transNm"), "T", "F", "F");
      }
    } else {
      ds_cargoPickupInfo.setCellData(rowIndex, "transCd", "");
      ds_cargoPickupInfo.setCellData(rowIndex, "transNm", "");
    }
  } else if (colId == "internalTyp") {
    if (ds_cargoPickupInfo.getCellData(rowIndex, "internalTyp") != "N") {
      if (ds_cargoPickupInfo.getCellData(rowIndex, "transCd") == "") {
        // ds_cargoPickupInfo.NameValue(rowIndex,"transCd")	 = "<%=p_lobranCd%>";
        // ds_cargoPickupInfo.NameValue(rowIndex,"transNm")	 = "<%=p_lobranNm%>";
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Booking No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_cnd_ed_srno',style:'',validExp:'Booking No:no',maxlength:'12',allowChar:'a-zA-Z0-9',UpperFlag:'1','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_blno',style:'width:150px;',validExp:'House B/L No:no',readOnly:'true',ref:'data:ds_customerBookingInfo.blno'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_pu_houseLink',style:'',type:'button','ev:onclick':'scwin.btn_pu_houseLink_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'House B/L'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Booking Information ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_master',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'retrieveEngClntInfo',codeId:'ed_ascd',popupTitle:'',nameId:'txt_asnm',style:'',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validExpCode:'Consignee Code:no',validExpName:'Consignee Name:no',objTypeCode:'data',objTypeName:'data',btnId:'btn_ascd',id:'udc_ascd',refDataCollection:'ds_customerBookingInfo',code:'ascd',name:'asnm','ev:onclickEvent':'scwin.udc_ascd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ascd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ascd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee PIC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_ipcd',nameId:'txt_ipnm',popupID:'',popupTitle:'',selectID:'retrieveClntPicInfo',style:'',objTypeCode:'data',objTypeName:'data',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validExpCode:'Consignee PIC Code:no',validExpName:'Consignee PIC Name:no',btnId:'btn_ipcd',id:'udc_ipcd',code:'ipcd',name:'ipnm',refDataCollection:'ds_customerBookingInfo','ev:onclickEvent':'scwin.udc_ipcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ipcd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ipcd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tel ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_iptl',style:'',objType:'data',validExp:'Tel No:no',ref:'data:ds_customerBookingInfo.iptl',maxlength:'20',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Fax',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_ipfx',style:'',validExp:'FAX No:no',ref:'data:ds_customerBookingInfo.ipfx',maxlength:'20',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Departure',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dscd',nameId:'txt_dsnm',popupID:'',popupTitle:'',selectID:'retrieveAirPortCode',style:'',btnId:'btn_dscd',id:'udc_dscd',objTypeCode:'data',objTypeName:'data',maxlengthCode:'3',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validExpCode:'Departure Code:no',validExpName:'Departure Name:no',code:'dscd',name:'dsnm',refDataCollection:'ds_customerBookingInfo','ev:onclickEvent':'scwin.udc_dscd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dscd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dscd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Warehouse',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_whcd',nameId:'txt_whnm',popupID:'',popupTitle:'',selectID:'retrieveAirBoneZoneCode',style:'',objTypeCode:'data',objTypeName:'data',validExpCode:'Warehouse Code:no',validExpName:'Warehouse Name:no',maxlengthCode:'10',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',btnId:'btn_whcd',id:'udc_whcd',code:'whcd',name:'whnm',refDataCollection:'ds_customerBookingInfo','ev:onclickEvent':'scwin.udc_whcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_whcd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_whcd_onviewchangeNameEvent'}},{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_commCd',codeId:'ed_commCd',id:'udc_ilcomCode',nameId:'ed_commNm',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Arrival Date',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_ed_ondt',style:'',ref:'data:ds_customerBookingInfo.ondt','ev:onviewchange':'scwin.ica_ed_ondt_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Contract No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',objType:'data',id:'acb_lc_contractNo',search:'start',style:'',submenuSize:'auto',mandatory:'true',validExp:'계약번호:yes',ref:'data:ds_customerBookingInfo.contractNo',allOption:'',chooseOption:'',displayMode:'label',title:'Contract No','ev:onfocus':'scwin.acb_lc_contractNo_onfocus','ev:onviewchange':'scwin.acb_lc_contractNo_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_ctrtNo'},E:[{T:1,N:'w2:label',A:{ref:'dispValue'}},{T:1,N:'w2:value',A:{ref:'ctrtNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_fltno',style:'',ref:'data:ds_customerBookingInfo.fltno',maxlength:'6',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_sacd',nameId:'txt_sanm',popupID:'',popupTitle:'',selectID:'retrieveEmpInfo',style:'',btnId:'btn_sacd',id:'udc_sacd',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validExpCode:'Salesman Code:no',validExpName:'Salesman Name:no',refDataCollection:'ds_customerBookingInfo',code:'sacd',name:'sanm','ev:onclickEvent':'scwin.udc_sacd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_sacd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_sacd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PIC',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_updid',class:' w150',ref:'data:ds_customerBookingInfo.updid'}},{T:1,N:'xf:input',A:{style:'',id:'ed_upddt',class:' w150',ref:'data:ds_customerBookingInfo.upddt'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Item',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_itcd',nameId:'txt_itnm',popupID:'',popupTitle:'',selectID:'retrieveCommGoodsInfo',style:'',btnId:'btn_itcd',id:'udc_itcd',objTypeCode:'data',objTypeName:'data',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',validExpCode:'Item Code:no',validExpName:'Item Name:no',code:'itcd',name:'itnm',refDataCollection:'ds_customerBookingInfo','ev:onclickEvent':'scwin.udc_itcd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_itcd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_itcd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_blno',style:'',ref:'data:ds_customerBookingInfo.blno',maxlength:'20',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.onkeyup2'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Remark',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_txt_remark',style:'',ref:'data:ds_customerBookingInfo.remark'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Cargo Delivery',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cargoPickupInfo',id:'gr_cargoPickupInfo',style:'',visibleRowNum:'10',rowStatusVisible:'true',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_cargoPickupInfo_ontextimageclick','ev:oncellclick':'scwin.gr_cargoPickupInfo_oncellclick','ev:onafteredit':'scwin.gr_cargoPickupInfo_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'Order Date',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'Delivery Date',width:'150',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'Time',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'PKG',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'Weight',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'From City',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'From City Name',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'Door City',width:'120'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column31',value:'Door City Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'To City',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column27',value:'To City Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'Close Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'Time',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'Type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'Trans Company',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column39',value:'Trans Company Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'운송조건',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'Car Type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'Full',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'Trucker',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'Trucker Tel',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'Send Date',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'TR Booking',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'TR Order',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',valueType:'other',trueValue:'T',falseValue:'F',checkAlways:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currow',inputType:'rowIndex',style:'',value:'',width:'70',dataType:'number',textAlign:'center',customFormatter:'scwin.setSeq',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorDt',inputType:'calendar',style:'',value:'',width:'120',calendarValueType:'yearMonthDateTime',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rqdt',inputType:'calendar',style:'',value:'',width:'150',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rqtime',inputType:'text',style:'',value:'',width:'70',maxLength:'4',displayFormat:'##:##',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctn',inputType:'text',style:'',value:'',width:'70',dataType:'number',maxLength:'10',displayFormat:'#,##0',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cwht',inputType:'text',style:'',value:'',width:'100',dataType:'float',maxLength:'13.3',allowChar:'0-9,.',displayFormat:'#,###.##0[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromDistrictCd',inputType:'textImage',style:'',value:'',width:'130',viewType:'default',allowChar:'0-9.A-Z,a-z',maxLength:'3',editModeEvent:'onclick',editModeEventIcon:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fromDistrictNm',inputType:'text',style:'',value:'',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'doorDistrictCd',inputType:'textImage',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'doorDistrictNm',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'toDistrictCd',value:'',displayMode:'label',viewType:'default',allowChar:'0-9.A-Z,a-z',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'toDistrictNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'closeDate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'closeTime',value:'',displayMode:'label',displayFormat:'##:##',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'internalTyp',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'textImage',style:'',id:'transCd',value:'',displayMode:'label',viewType:'default',maxLength:'6',allowChar:'0-9.A-Z,a-z'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'transNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'transCondCd',value:'',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'carCondCd',value:'',displayMode:'value delim label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'fullYn',value:'',displayMode:'label',checkAlways:'true',valueType:'other',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'drv',value:'',displayMode:'label',maxLength:'20'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'drvTel',value:'',displayMode:'label',maxLength:'20'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',style:'',id:'sendDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bookingNo',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mcomOdrNo',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_descnm',placeholder:'',style:'width: 250px;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelYn:'Y',style:'',id:'udc_bottomGrdBtn',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_undoRow',gridID:'gr_cargoPickupInfo',btnDelYn:'N',btnCancelObj:'btn_undoRow',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_delRow'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_orderSend',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_orderSend_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Order Send'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_orderSendDel',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_orderSendDel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Order Send Delete'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_pu_find',style:'',type:'button','ev:onclick':'scwin.btn_pu_find_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Find'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_pu_masterLink',style:'',type:'button','ev:onclick':'scwin.btn_pu_masterLink_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Master B/L'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button',userAuth:'R',objType:'bCancel','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button',userAuth:'C',objType:'bCreate','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',style:'',type:'button',userAuth:'U',objType:'bUpdate','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button',userAuth:'D',objType:'bDelete','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]}]}]}]}]}]}]}]})