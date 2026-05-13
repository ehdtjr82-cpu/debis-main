/*amd /ui/ds/fs/consignmgnt/fs_402_01_03b.xml 32505 04a28b58dad86c1928724c9877f1c389cc4a401b18753475a596234038a2573c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_logisticsCustomer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcond',name:'업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztype',name:'업종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemCd',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_customerQryCnd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCls',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDelYn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtFrom',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtTo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regModCond',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regModCntn',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trusteePurchaseCustomer',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'busiNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcond',name:'업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztype',name:'종목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faxNo',name:'팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemCd',name:'비용항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costItemNm',name:'비용항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDelYn',name:'거래처삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.trusteecostselladjm.RetrieveTrusteePurchaseCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_customerQryCnd","key":"IN_DS1"},{"id":"ds_trusteePurchaseCustomer","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_trusteePurchaseCustomer","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_logist',action:'/cm.bc.clnt.clntmgnt.RetrieveLogisticsCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_customerQryCnd","key":"IN_DS1"}',target:'data:json,{"id":"ds_logisticsCustomer","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_logist_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.fs.consignmgnt.trusteecostselladjm.DeleteTrusteePurchaseCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_trusteePurchaseCustomer","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.fs.consignmgnt.trusteecostselladjm.CreateTrusteePurchaseCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_trusteePurchaseCustomer","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.addflag = ""; // 신규입력/수정 구분자
scwin.pos_berthPortCount = 0; // 저장전 DataSet의 RowPosition을 저장 변수 

// 회원정보를 json 데이터로 모두 받음
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.empNo = $c.data.getMemInfo($p, "empNo");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드- 소유구분
  const codeOptions = [{
    grpCd: "FS900",
    compID: "lc_costItemCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableBtnOnly($p, [btn_update, btn_save, btn_delete]); //btn_select
  $c.gus.cfDisableObjects($p, [tbl_search]);

  //document.addEventListener('keydown', scwin.gr_logisticsCustomer_tabCapture, true);
};

//-------------------------------------------------------------------------
// 조회 : 거래처 정보를 조회한다.
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  if (ed_qryCntn.getValue() == "") {
    msgArr = new Array(2);
    msgArr[0] = "검색어";
    msgArr[1] = "글자(숫자) 한(두)";
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_011, msgArr);
    ed_qryCntn.focus();
    return;
  }

  //거래처 관리 공통의 소스 참고
  //dataMap set
  dma_customerQryCnd.set("sysCls", "1");
  dma_customerQryCnd.set("qryCntn", ed_qryCntn.getValue());
  dma_customerQryCnd.set("clntLupCond", lux_clntLupCond.getValue());
  dma_customerQryCnd.set("clntDelYn", "0");
  dma_customerQryCnd.set("regDtFrom", "");
  dma_customerQryCnd.set("regDtTo", "");
  dma_customerQryCnd.set("regModCond", "0");
  dma_customerQryCnd.set("regModCntn", "");
  await $c.sbm.execute($p, sbm_logist);
};
scwin.sbm_logist_submitdone = function () {
  // 조회 후 값이 존재하면 btn_update 만 활성화
  $c.gus.cfDisableBtnOnly($p, [btn_update, btn_save, btn_delete]); //btn_select
  let nCnt = ds_logisticsCustomer.getRowCount();
  if (nCnt > 0) {
    gr_logisticsCustomer.setFocusedCell(0, 0);
    total.setValue(nCnt);
    $c.gus.cfEnableBtnOnly($p, [btn_update]);
    //$c.gus.cfDisableObjects([tbl_search])
    $c.gus.cfGoPrevPosition($p, gr_logisticsCustomer, scwin.pos_berthPortCount); // 저장전 위치로 이동
  }
};

//grid row change....
scwin.gr_logisticsCustomer_onrowindexchange = function (rowIndex, oldRow) {
  // row index 변경시 기존 수정가능 필드 내용 초기화
  lc_costItemCd.setValue("");
  ed_bankCd.setValue("");
  ed_bankAcntNo.setValue("");
  ed_dpstrNm.setValue("");
  if (rowIndex < 0) return;
  scwin.f_trusteeRetrieve(ds_logisticsCustomer.getCellData(rowIndex, "clntNo"));
};

//=========================================================================
// 그리드 이벤트 핸들러
//=========================================================================
scwin.gr_logisticsCustomer_tabCapture = function (e) {
  if ((e.keyCode || e.which) !== 9) return;
  if (!gr_logisticsCustomer.render || !gr_logisticsCustomer.render.contains(document.activeElement)) return;
  e.preventDefault();
  e.stopPropagation();
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 조회 : 위수탁 수탁자 정보 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_trusteeRetrieve = function (arg) {
  dma_customerQryCnd.set("clntNo", arg);
  scwin.pos_berthPortCount = ds_trusteePurchaseCustomer.getRowPosition(); // 저장 전의 위치 저장

  $c.sbm.execute($p, sbm_retrieve);
  $c.gus.cfDisableBtnOnly($p, [btn_update, btn_save, btn_delete]);
  $c.gus.cfEnableBtnOnly($p, [btn_update]);
};

//수탁 매입거래처 조회 callback
scwin.sbm_retrieve_submitdone = function () {
  //조회 후 tbl 비활성화 처리.
  $c.gus.cfDisableObjects($p, [tbl_search]);
  if (ds_trusteePurchaseCustomer.getCellData(0, "clntDelYn") === 1) {
    return;
  }
  //freefrom data set 처리 (다른 datalist인경우 bind 안됨)
  ed_clntNo.setValue(ds_trusteePurchaseCustomer.getCellData(0, "clntNo"));
  ed_busiNo.setValue(ds_trusteePurchaseCustomer.getCellData(0, "busiNo"));
  ed_clntNm.setValue(ds_trusteePurchaseCustomer.getCellData(0, "clntNm"));
  ed_repstNm.setValue(ds_trusteePurchaseCustomer.getCellData(0, "repstNm"));
  ed_zip.setValue(ds_trusteePurchaseCustomer.getCellData(0, "zip"));
  ed_addr1.setValue(ds_trusteePurchaseCustomer.getCellData(0, "addr1"));
  ed_addr2.setValue(ds_trusteePurchaseCustomer.getCellData(0, "addr2"));
  lc_costItemCd.setValue(ds_trusteePurchaseCustomer.getCellData(0, "costItemCd"));
  ed_mpNo.setValue(ds_trusteePurchaseCustomer.getCellData(0, "mpNo"));
  ed_telNo.setValue(ds_trusteePurchaseCustomer.getCellData(0, "telNo"));
  ed_faxNo.setValue(ds_trusteePurchaseCustomer.getCellData(0, "faxNo"));
  ed_bankCd.setValue(ds_trusteePurchaseCustomer.getCellData(0, "bankCd"));
  ed_bankNm.setValue(ds_trusteePurchaseCustomer.getCellData(0, "bankNm"));
  ed_bankAcntNo.setValue(ds_trusteePurchaseCustomer.getCellData(0, "bankAcntNo"));
  ed_dpstrNm.setValue(ds_trusteePurchaseCustomer.getCellData(0, "dpstrNm"));
};

//우편번호는 disable
scwin.udc_comCode_zip_onclickEvent = e => scwin.f_openCommonPopup(2, ed_zip.getValue(), ed_addr1.getValue(), "F", null);
// pop callback
scwin.udc_comCode_zip_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_zip, ed_addr1);
};

//udc 은행popup
scwin.udc_comCode_bank_onclickEvent = e => scwin.f_openCommonPopUp(1, ed_bankCd.getValue(), ed_bankNm.getValue(), "F", "F");

//은행 pop callback
scwin.udc_comCode_bank_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bankCd, ed_bankNm);
};
scwin.udc_comCode_bank_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bankCd, ed_bankNm, 1);
};
scwin.udc_comCode_bank_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bankNm, ed_bankCd, 1, false);
};
scwin.udc_comCode_bank_onviewchangeNameEvent = function (info) {
  if (ed_bankNm.getValue() === "") {
    ed_bankCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 은행코드 팝업
      pCode = pCode.replace(/\s*$/, ''); // 은행코드

      udc_comCode_bank.setSelectId("retrieveBankCdInfo"); // XML상의 SELECT ID
      await udc_comCode_bank.cfCommonPopUp(scwin.udc_comCode_bank_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "은행코드,은행코드,은행명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 우편번호 팝업
      await udc_comCode_zip.cfCommonPopUp(scwin.udc_comCode_zip_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 셋팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 수정 : 
//-------------------------------------------------------------------------
scwin.btn_update_onclick = function (e) {
  // ed_bankCd, ed_bankNm >> udc_comCode_bank 사용
  $c.gus.cfEnableObjects($p, [lc_costItemCd, ed_dpstrNm, ed_bankAcntNo]);
  //udc는 cfenable 별도
  udc_comCode_bank.setDisabled(false);
  $c.gus.cfDisableBtnOnly($p, [btn_update]);
  $c.gus.cfEnableBtnOnly($p, [btn_save, btn_delete]);
};

//-------------------------------------------------------------------------
// 삭제 : 조회된 데이터를 삭제요청한다.
//-------------------------------------------------------------------------
scwin.btn_delete_onclick = async function (e) {
  if (ds_trusteePurchaseCustomer.getRowCount() == 0) {
    $c.win.alert($p, "조회후 삭제가능합니다.");
    return;
  } else {
    if (await $c.win.confirm($p, "삭제하시겠습니까?")) {
      scwin.addflag = "DEL";
      // ds_trusteePurchaseCustomer.UseChangeInfo = "false";
      ds_trusteePurchaseCustomer.setCellData(0, "modId", scwin.userId);
      $c.sbm.execute($p, sbm_delete);
    }
  }
};

//-------------------------------------------------------------------------
// 저장 : 
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  //debugger;
  //메인 지정 체크
  if (!(await $c.gus.cfValidate($p, [ed_busiNo, ed_clntNm, ed_repstNm, ed_zip, ed_addr1, ed_addr2, lc_costItemCd, ed_bankCd]))) {
    return;
  }
  const phoneFields = [{
    comp: ed_mpNo,
    label: "휴대전화"
  }, {
    comp: ed_telNo,
    label: "전화번호"
  }, {
    comp: ed_faxNo,
    label: "팩스번호"
  }];
  for (const {
    comp,
    label
  } of phoneFields) {
    if (!$c.util.isEmpty($p, comp.getValue()) && !scwin.cf_PhoneCheck(comp.getValue(), label)) return;
  }

  // 계좌번호를 phoneFields 배열에서 빼고 별도 처리
  if (ed_bankAcntNo.getValue() && !/^\d+$/.test(ed_bankAcntNo.getValue())) {
    await $c.win.alert($p, "계좌번호는 숫자만 입력하십시오.");
    ed_bankAcntNo.focus();
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.addflag = "REG";
    ds_trusteePurchaseCustomer.setCellData(0, "costItemCd", lc_costItemCd.getValue());
    ds_trusteePurchaseCustomer.setCellData(0, "bankCd", ed_bankCd.getValue());
    ds_trusteePurchaseCustomer.setCellData(0, "bankNm", ed_bankNm.getValue());
    ds_trusteePurchaseCustomer.setCellData(0, "dpstrNm", ed_dpstrNm.getValue());
    ds_trusteePurchaseCustomer.setCellData(0, "bankAcntNo", ed_bankAcntNo.getValue());
    $c.sbm.execute($p, sbm_save);
  }
};

//저장 callback
scwin.sbm_save_submitdone = async function () {
  if (scwin.addflag == "REG") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
    let rowIndex = ds_logisticsCustomer.getRowPosition();
    scwin.f_trusteeRetrieve(ds_logisticsCustomer.getCellData(rowIndex, "clntNo"));
  } else if (scwin.addflag == "MOD") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_003); // 성공적으로 수정하였습니다.
  } else if (scwin.addflag == "DEL") {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다.
  }
};

// AS-IS >> cf_PhoneCheck() 함수 대신
scwin.cf_PhoneCheck = function (value, label) {
  if (!$c.str.isPhone($p, value.replaceAll("-", ""))) {
    $c.win.alert($p, label + "은(는) 숫자만 입력하십시오.");
    return false;
  }
  return true;
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다.
  let rowIndex = ds_logisticsCustomer.getRowPosition();
  scwin.f_trusteeRetrieve(ds_logisticsCustomer.getCellData(rowIndex, "clntNo"));
};

// 사업자번호 표시 포맷 적용 
scwin.f_formatCrn = function (value) {
  if (!value) return "";
  var str = value.toString();
  if (str.length < 10) return str;
  return str.substring(0, 3) + "-" + str.substring(3, 5) + "-" + str.substring(5, 10);
};
scwin.gr_logisticsCustomer_onkeydown = function (e) {
  // 눌린 키가 Tab 키(9)인지 확인
  if (e.keyCode === 9) {
    var colId = gr_logisticsCustomer.getFocusedColumnID(); // 현재 포커스된 컬럼 
    // clntPersNm 마지막 컬럼 ID
    var lastColId = "clntPersNm"; // 그리드의 마지막 컬럼 ID

    // 현재 위치가 마지막 컬럼인지 체크
    if (colId === lastColId) {
      // 1. 브라우저 및 그리드의 기본 Tab 동작(다음 행 이동)을 강제 차단
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();

      // 2. tbl_search 내 첫 번째 활성(비활성/수정가능) 컴포넌트로 포커스 이동
      setTimeout(function () {
        var tblSearchComps = [ed_clntNo, ed_busiNo, ed_clntNm, ed_repstNm, udc_comCode_zip, ed_addr2, lc_costItemCd, ed_mpNo, ed_telNo, ed_faxNo, udc_comCode_bank, ed_dpstrNm, ed_bankAcntNo];
        for (var i = 0; i < tblSearchComps.length; i++) {
          var comp = tblSearchComps[i];
          if (!comp.getDisabled() && !comp.getReadOnly()) {
            comp.focus();
            break;
          }
        }
      }, 10);

      // false 반환으로 이벤트 종료
      return false;
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lux_clntLupCond',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_qryCntn',placeholder:'',style:'width:150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_logisticsCustomer',style:'',autoFit:'allColumn',id:'gr_logisticsCustomer',class:'wq_gvw',focusMove:'true',visibleRowNum:'6',readOnly:'true','ev:onrowindexchange':'scwin.gr_logisticsCustomer_onrowindexchange','ev:onkeydown':'scwin.gr_logisticsCustomer_onkeydown'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'담당자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntPersNm',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'15',ref:'data:ds_trusteePurchaseCustomer.clntNo',title:'거래처코드'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_busiNo',placeholder:'',style:'width:150px;',mandatory:'true',maxlength:'13',allowChar:'0-9',ref:'data:ds_trusteePurchaseCustomer.busiNo',title:'사업자번호',displayFormatter:'scwin.f_formatCrn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_clntNm',placeholder:'',style:'width:150px;',maxlength:'15',mandatory:'true',ref:'data:ds_trusteePurchaseCustomer.clntNm',title:'거래처명'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'대표자명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_repstNm',placeholder:'',style:'width:150px;',maxlength:'10',mandatory:'true',ref:'data:ds_trusteePurchaseCustomer.clntPersNm',title:'대표자명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업장주소',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-4'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',hideName:'Y',codeId:'ed_zip',nameId:'ed_addr1',id:'udc_comCode_zip',maxlengthName:'30',allowCharCode:'0-9',maxlengthCode:'6',mandatoryCode:'true',selectID:'retrieveZipList','ev:onclickEvent':'scwin.udc_comCode_zip_onclickEvent',validTitle:'사업장주소'}},{T:1,N:'xf:input',A:{style:'',id:'ed_addr2',placeholder:'',class:'',mandatory:'true',maxlength:'50'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'비용항목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_costItemCd',search:'start',style:'width:250px;',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'true',chooseOptionLabel:'[]',ref:'',title:'비용항목'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mpNo',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유선전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_telNo',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:' FAX번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_faxNo',placeholder:'',style:'width:150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'은행명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_bankCd',mandatoryCode:'true',maxlengthCode:'2',nameId:'ed_bankNm',id:'udc_comCode_bank',selectID:'retrieveBankCdInfo','ev:onclickEvent':'scwin.udc_comCode_bank_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_bank_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_bank_onviewchangeNameEvent',UpperFlagCode:'1',allowCharCode:'a-zA-z0-9','ev:onblurNameEvent':'scwin.udc_comCode_bank_onblurNameEvent',validTitle:'은행명',maxlengthName:'15'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예금주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dpstrNm',placeholder:'',style:'width:150px;',maxlength:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계좌번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:input',A:{style:'width:250px;',id:'ed_bankAcntNo',placeholder:'',class:'',maxlength:'20'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:' 해당 계좌번호는 유류보조금 지급시 사용되는 계좌입니다.',class:'txt-dot txt-red'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})