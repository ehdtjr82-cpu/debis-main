/*amd /ui/ds/sd/odrmgnt/odroutintend/sd_404_01_05b.xml 49684 b75961ced20afcc4648a53dc41b2f2b2212c829cf204d0d2943e3bf273c1818a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'오더일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'오더일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regBranCd',name:'오더점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'전송상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outRegId',name:'출고등록자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendDtFm',name:'출고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendDtTo',name:'출고일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchHist'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'오더일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'오더일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regBranCd',name:'오더점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'전송상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outRegId',name:'출고등록자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendDtFm',name:'출고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendDtTo',name:'출고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'documentidentifier',name:'세금계산서발급번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositClntNo',name:'입금거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositClntNm',name:'입금거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'responsetype',name:'응답여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndcoftype',name:'이체통지여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendDt',name:'출고예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outRegNm',name:'출고등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outRegId',name:'출고등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trid',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgMgntNo',name:'담보관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCnt',name:'#N/A',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_history',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'documentclass',name:'발행구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'publicationdate',name:'세금계산서발행일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplieridentifier',name:'공급자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suppliername',name:'공급처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demandername',name:'공급받는자상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demanderidentifier',name:'공급받는자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyamount',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'surtaxamount',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalamount',name:'원화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expirationdate',name:'만료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'registdate',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserved3',name:'통지사항3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserved4',name:'통지사항4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainkey',name:'MAINKEY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'documentidentifier',name:'세금계산서발급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supplyamountcurrency',name:'세금계산서공급가액 통화',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detailHistory',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'responsetype',name:'응답여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'responsetypeNm',name:'응답여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation1',name:'전달내용1(오류(거부)메시지 1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'senddate',name:'전송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'registdate',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation2',name:'전달내용2(오류(거부)메시지 2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation3',name:'전달내용3(오류(거부)메시지 3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation4',name:'전달내용4(오류(거부)메시지 4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation5',name:'전달내용5(오류(거부)메시지 5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation6',name:'전달내용6(오류(거부)메시지 6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation7',name:'전달내용7(오류(거부)메시지 7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation8',name:'전달내용8(오류(거부)메시지 8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation9',name:'전달내용9(오류(거부)메시지 9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'messageinformation10',name:'전달내용10(오류(거부)메시지 10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'functioncode',name:'기능코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'documentidentifier',name:'세금계산서발급번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.elecreceipt.RetreiveElecReceiptPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_transfer',action:'/ds.sd.elecreceipt.UpdateTrdocStatusListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_transfer_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.sd.elecreceipt.UpdateSndcoftypeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_history',action:'/ds.sd.elecreceipt.RetreiveElecReceiptInfoHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchHist","key":"IN_DS1"},{"id":"ds_history","key":"OUT_DS1"},{"id":"ds_detailHistory","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_history","key":"OUT_DS1"},{"id":"ds_detailHistory","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_history_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.memInfo = $c.data.getMemInfo($p); // 로그인 정보
  scwin.privAdmin = scwin.memInfo.privAdmin; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님  
  scwin.sysAdminYn = scwin.memInfo.sysAdminYn;
  scwin.isRetrieve = false;
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memInfo.coCd) ? '' : scwin.memInfo.coCd; // 소속 자회사  
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memInfo.coClsCd) ? '' : scwin.memInfo.coClsCd; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = scwin.memInfo.userHomeClsCd; // 사용자소속구분코드   
  scwin.isSubCompany = false;
  scwin.gv_loabranCd = scwin.memInfo.loUpperLobranCd;
  scwin.rowIndex;
  scwin.columnId;

  //공통코드 조회
  const codeOptions = [{
    grpCd: "SD227",
    compID: "gr_out:responsetype"
  }, {
    grpCd: "FI071",
    compID: "gr_history:documentclass"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.strCurDate = $c.date.getServerDateTime($p); //서버 날짜 반환
  scwin.strFromDate = $c.date.addDate($p, scwin.strCurDate, -5);
  if (!scwin.strFromDate.substring(0, 6) == scwin.strCurDate.substring(0, 6)) {
    scwin.strFromDate = scwin.strCurDate.substring(0, 6) + "01";
  }
  lc_delYn.setValue("0");
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  udc_fromToCalendarOdr.setInitDate(scwin.strCurDate, scwin.strCurDate);
  ed_regBranCd.setValue(scwin.gv_loabranCd);
  scwin.udc_regBranCd_onblurCodeEvent();
  //scwin.f_checkPopEd(ed_regBranCd, ed_regBranNm, '1');
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  console.log("scwin.f_FieldClear");
  $c.gus.cfInitObjects($p, [ed_odrNo, ed_slipNo, ed_outIntendNo]);
  udc_fromToCalendarOdr.setInitDate(scwin.strCurDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("scwin.f_Retrieve");
  //조회 필수 조건 check
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (ed_outIntendDtFm.getValue() != null && ed_outIntendDtTo.getValue() != null) {
    if (ed_outIntendDtFm.getValue() > ed_outIntendDtTo.getValue()) {
      $c.gus.f_cfAlertMsg($p, "출고일자 시작일이 종료일 보다 더 큽니다.");
      return;
    }
  }
  ds_history.removeAll();
  ds_detailHistory.removeAll();
  scwin.isRetrieve = true;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//--------------------------------------------------------------------------
scwin.f_checkPopEd = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    //ed_spotSalePlcCd.text = "";               
    //txt_spotSalePlcNm.value = "";
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, 'T');
  return;
};
scwin.f_openPopUp = function (flag, check) {
  console.log("scwin.f_openPopUp");
  switch (flag) {
    case '1':
      // 배정점소 팝업
      udc_regBranCd.cfCommonPopUp(scwin.callBackLobran, ed_regBranCd.getValue().trim(), ed_regBranNm.getValue(), check, null, null, null, null, "", null, null, null, null);
      //scwin.f_resultPopEd(ed_regBranCd, ed_regBranNm, rtnList);		
      break;
    case '3':
      // 사번
      udc_outRegId.cfCommonPopUp(scwin.callBackAcEmp, ed_outRegId.getValue().trim(), ed_outRegNm.getValue(), check, null, null, null, null, "", null, null, null, null);
      //scwin.f_resultPopEd(ed_outRegId, ed_outRegNm, rtnList);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.callBackLobran = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regBranCd, ed_regBranNm);
};
scwin.callBackAcEmp = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_outRegId, ed_outRegNm);
};

//-------------------------------------------------------------------------
// 응답 이력 조회
//-------------------------------------------------------------------------
scwin.f_retrieveHistory = function (rowIndex) {
  console.log("scwin.f_retrieveHistory");
  if (ds_out.getTotalRow() == 0) {
    return;
  }
  dma_searchHist.set("documentidentifier", ds_out.getCellData(rowIndex, "outIntendNo"));
  $c.sbm.execute($p, sbm_history);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_outIntendNoDetail = function () {
  var programId = "";
  var strOrderDetailUrl = "";
  var strOrderDetailTitle = "";
  if (ds_out.getCellData(ds_out.getRowPosition(), "odrKndCd") == "CK") {
    programId = "sd_404_01_03b.jsp";
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odroutintend/sd_404_01_03b.xml";
    strOrderDetailTitle = "벌크출고예정(선수납)";
  } else if (ds_out.getCellData(ds_out.getRowPosition(), "transCargoClsCd") == "C") {
    programId = "sd_404_01_02b.jsp";
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odroutintend/sd_404_01_02b.xml";
    strOrderDetailTitle = "컨테이너출고예정(선수납)";
  } else {
    programId = "sd_404_01_03b.jsp";
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odroutintend/sd_404_01_03b.xml";
    strOrderDetailTitle = "벌크출고예정(선수납)";
  }
  var paramObj = {
    "odrNo": ds_out.getCellData(ds_out.getRowPosition(), "odrNo"),
    "outIntendNo": ds_out.getCellData(ds_out.getRowPosition(), "odrNo")
  };
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, programId, paramObj, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------
// 통합매출/입관리 화면 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = function () {
  var strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26b.xml";
  var v_odrNo = ds_out.getCellData(ds_out.getRowPosition(), "odrNo");
  var programId = "sd_402_01_26b.jsp";
  var paramObj = {
    "odrNo": v_odrNo,
    "type": "retrieve"
  };
  $c.win.openMenu($p, "통합매출/입관리", strOrderDetailUrl, programId, paramObj, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------
// 2015.05.27 KT-NET 전송 (TRDOC 테이블의 Status 값을 WAIT에서 READY로 UPDATE 해줌)
//-------------------------------------------------------------------------
scwin.f_Transfer = async function () {
  var chkTotRow = 0;
  var chkStatus = 0;
  for (i = 0; i < ds_out.getTotalRow(); i++) {
    var check = ds_out.getCellData(i, "chk");
    var status = ds_out.getCellData(i, "status");
    if (check == 'T') {
      chkTotRow++;
      if (status != 'WAIT') {
        chkStatus++;
      }
    }
  }
  if (chkTotRow == 0) {
    $c.gus.f_cfAlertMsg($p, "선택한 항목이 존재하지 않습니다.");
    return;
  }
  if (chkStatus > 0) {
    $c.gus.f_cfAlertMsg($p, "출고예정번호의 전송상태가 'WAIT' 상태만 전송이 가능 합니다.");
    return;
  }
  let conf = await $c.gus.cfConfirmMsg($p, MSG_SD_CRM_001);
  if (conf) $c.sbm.execute($p, sbm_tranfer);
};

//-------------------------------------------------------------------------
// 세금계산서 팝업 호출
//-------------------------------------------------------------------------
scwin.f_taxEstimat = async function () {
  var valueObject = new Object();
  var totRow = ds_out.getTotalRow();
  var chkTotRow = 0;

  // 체크 총 개수 조회하기
  let chkJson = gr_out.getCheckedJSON("chk");
  if (chkJson.length > 5) return;
  for (var i = 0; i < chkJson.length; i++) {
    if (Number(chkJson[i].dcsnClsCnt) > 0) {
      $c.gus.cfAlertMsg($p, i + 1 + "번째의 " + chkJson[i].odrNo + "는 확정구분코드를 미확정 상태로 수정 후 세금계산서 생성 하십시오.");
      return;
    }
  }
  for (var i = 0; i < chkJson.length; i++) {
    var valueObject = chkJson[i];
    valueObject.sellWrkRsltsClsCd = "05";
    valueObject.fmlaClsCd = "01"; // 청구서식구분코드
    if (chkJson[i].slipNo == "N" || chkJson[i].slipNo == "") valueObject.slipNo = ""; // 전표번호(매출증빙 내역 존재시...)

    //상세화면 호출 
    const opts = {
      id: "popup",
      popupName: "영수 세금계산서 생성",
      modal: true // 모달 여부
      ,
      type: "browserPopup" // 새 창(브라우저 팝업)
      ,
      title: "영수 세금계산서 생성",
      width: 650,
      height: 650
    };
    var result = await $c.win.openPopup($p, "/ui/ds/fs/bilg/fs_202_06_04p.xml", opts, valueObject);
    debugger;
  }
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀 다운 
//-------------------------------------------------------------------------
scwin.f_down = async function () {
  if (ds_out.getTotalRow() != 0) {
    let conf = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
    if (conf) {
      let options = {
        fileName: "전자수납현황.xlsx",
        sheetName: "전자수납현황",
        type: "8+16"
      };
      $c.data.downloadGridViewExcel($p, gr_out, options);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 색상 및 값 변경
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  if (ds_out.getTotalRow() == 0) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let color = "black";
  let val = data;
  if (columnId == "responsetype") {
    let label = dlt_commonCodeSD227.getMatchedJSON("cd", data, true)[0].cdNm;
    debugger;
    val = "[" + data + "] " + label;
  } else if (columnId == "sndcoftype") {
    color = $c.gus.decode($p, data, "Y", "red", "blue");
    val = $c.gus.decode($p, data, "Y", "이체완료", "대기중");
  } else if (columnId == "status") {
    console.log("status : " + val);
    color = $c.gus.decode($p, data, "OK", "blue", "black");
    console.log(val);
  } else if (columnId == "delYn") {
    val = $c.gus.decode($p, data, 0, "N", "Y");
  }
  gr_out.setCellColor(rowIndex, colIndex, color);
  return val;
};

/*var count =0;
function colorChange(){ 

    if(count %2 == 0){
            //gr_out.ColumnProp('sndcoftype','BgColor')= "{if( sndcoftype == 'Y' && responsetype == 'L', '#FBCED4','white')}";
            var color = $c.gus.decode(sndcoftype, 'Y', decode(responsetype, 'L', decode(slipNo, null, decode(delYn, 0, '#FBCED4', 'white'), 'white'), 'white'), 'white');
            gr_out.setColumnBackgroundColor("sndcoftype", color);
    } else{
        gr_out.setColumnBackgroundColor("sndcoftype", "white");
    }				
    
    count++;
}
setInterval("colorChange()", 1000);  // 1초(1,000)마다 colorChange() 함수를 호출합니다.*/

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.isRetrieve = false;
  var rowCnt = ds_out.getTotalRow();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  spn_totalRow1.setValue(rowCnt);
  gr_out.setFocusedCell(0, 0);
  scwin.gr_out_oncellclick(0, "", "bilgClntNm");
};

//전송 완료
scwin.sbm_transfer_submitdone = function (e) {
  console.log("scwin.sbm_transfer_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_Retrieve();
};

//수정 완료
scwin.sbm_update_submitdone = function (e) {
  console.log("scwin.sbm_update_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_Retrieve();
};

//이력조회 완료
scwin.sbm_history_submitdone = function (e) {
  console.log("scwin.sbm_history_submitdone");
  spn_totalRow2.setValue(ds_history.getTotalRow());
  spn_totalRow3.setValue(ds_detailHistory.getTotalRow());
  gr_history.setFocusedCell(0, 0);
  gr_detailHistory.setFocusedCell(0, 0);
  console.log(scwin.columnId);
  gr_out.setFocusedCell(scwin.rowIndex, scwin.columnId);
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//오더점소 찾기 버튼
scwin.udc_regBranCd_onclickEvent = async function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_regBranCd_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_regBranCd, ed_regBranNm, '1');
};
scwin.udc_regBranCd_onviewchangeNameEvent = function (info) {
  scwin.f_checkPopEd(ed_regBranNm, ed_regBranCd, '1');
};

// 오더번호 소문자 입력 > 대문자 변경 
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  console.log("scwin.ed_odrNo_oneditkeyup");
  $c.gus.cfToUpper($p, ed_odrNo);
};

//출고등록자 찾기 버튼
scwin.udc_outRegId_onclickEvent = async function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_outRegId_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_outRegId, ed_outRegNm, '3');
};
scwin.udc_outRegId_onviewchangeNameEvent = function (info) {
  scwin.f_checkPopEd(ed_outRegNm, ed_outRegId, '3');
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_FieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_Retrieve();
};

//그리드 클릭
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.rowIndex = rowIndex;
  scwin.columnId = columnId;
  debugger;
  if (columnId == "chk" || columnId == "sndcoftype") {
    return;
  } else if (columnId == "slipNo" && ds_out.getCellData(rowIndex, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_out.getCellData(rowIndex, "slipNo"));
  } else if (columnId == "outIntendNo") {
    scwin.f_outIntendNoDetail();
  } else if (columnId == "odrNo") {
    scwin.f_orderDetail();
  } else {
    scwin.f_retrieveHistory(rowIndex);
  }
};

//그리드 더블클릭
scwin.gr_out_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  console.log("scwin.gr_out_oncellclick");
  if (rowIndex >= 0) {
    if (columnId == "sndcoftype") {
      if (ds_out.getCellData(rowIndex, columnId) == "") {
        let conf = await $c.win.confirm($p, "이체완료 상태로 변경 하시겠습니까?\n변경 후에는 수정이 불가 합니다.");
        if (conf) {
          ds_out.setCellData(rowIndex, "chk", "T");
          $c.sbm.execute($p, sbm_update);
        }
      }
    }
  }
};

//전송 버튼 
scwin.btn_transfer_onclick = async function (e) {
  console.log("scwin.btn_taxEstimat_onclick");
  var chkTotRow = 0;
  var chkStatus = 0;
  for (i = 0; i < ds_out.getTotalRow(); i++) {
    var check = ds_out.getCellData(i, "chk");
    var status = ds_out.getCellData(i, "status");
    if (check == 'T') {
      chkTotRow++;
      if (status != 'WAIT') {
        chkStatus++;
      }
    }
  }
  if (chkTotRow == 0) {
    $c.win.alert($p, "선택한 항목이 존재하지 않습니다.");
    return;
  }
  if (chkStatus > 0) {
    $c.win.alert($p, "출고예정번호의 전송상태가 'WAIT' 상태만 전송이 가능 합니다.");
    return;
  }
  let conf = await $c.win.confirm($p, "선택하신 출고예정번호를 KT-NET 전송 하시겠습니다."); //MSG_SD_CRM_001
  if (conf) $c.sbm.execute($p, sbm_transfer);
};

//세금계산서 버튼
scwin.btn_taxEstimat_onclick = function (e) {
  console.log("scwin.btn_taxEstimat_onclick");
  scwin.f_taxEstimat();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:250px;'}},{T:1,N:'xf:group',A:{style:'width:85px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupRegBranCd',style:'',codeId:'ed_regBranCd',nameId:'ed_regBranNm',objTypeCode:'data',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',btnId:'btn_regBranCd',id:'udc_regBranCd',refDataCollection:'dma_search',code:'regBranCd','ev:onclickEvent':'scwin.udc_regBranCd_onclickEvent',selectID:'retrieveLobranInfo','ev:onblurCodeEvent':'scwin.udc_regBranCd_onblurCodeEvent',validTitle:'오더점소','ev:onviewchangeNameEvent':'scwin.udc_regBranCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryConDtFm',refDataMap:'dma_search',style:'',id:'udc_fromToCalendarOdr',refEdDt:'qryConDtTo',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' ',id:'ed_odrNo',placeholder:'',style:'width:150px;',objType:'data',allowChar:'a-zA-Z0-9',maxlength:'13',ref:'data:dma_search.odrNo','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_slipNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'14',allowChar:'0-9',ref:'data:dma_search.slipNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupOutRegId',style:'',codeId:'ed_outRegId',nameId:'ed_outRegNm',objType:'data',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',UpperFlagCode:'1',validExpCode:'출고등록자:no',btnId:'btn_outRegId',id:'udc_outRegId',refDataCollection:'dma_search',code:'outRegId','ev:onclickEvent':'scwin.udc_outRegId_onclickEvent','ev:onblurCodeEvent':'scwin.udc_outRegId_onblurCodeEvent',selectID:'retrieveAcEmpInfo',maxlengthCode:'6','ev:onviewchangeNameEvent':'scwin.udc_outRegId_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고일자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'outIntendDtTo',refDataMap:'dma_search',style:'',id:'udc_fromToCalendarOut',refEdDt:'outIntendDtFm',edFromId:'ed_outIntendDtFm',edToId:'ed_outIntendDtTo',mandatoryFrom:'false',mandatoryTo:'false',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고예정번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_outIntendNo',placeholder:'',style:'width:150px;',objType:'data',maxlength:'14',allowChar:'0-9',ref:'data:dma_search.outIntendNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_delYn',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.delYn',textAlign:'left',displayMode:'value delim label',chooseOptionLabel:'전체',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미삭제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송상태',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.status',allOption:'',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'WAIT'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'READY'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'OK'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전자수납현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_out',id:'udc_topGrdBtn',templateYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_down'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',focusMode:'row',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_out_oncellclick','ev:oncelldblclick':'scwin.gr_out_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'column91',value:'',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column90',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'오더일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column88',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column87',value:'청구거래처번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column86',value:'청구거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column85',value:'입금거래처번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column84',value:'입금거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column83',value:'공급금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column82',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'응답여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column80',value:'이체통지여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'전송상태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'560',inputType:'text',style:'',id:'column78',value:'출고예정정보',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column32',value:'출고예정번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column35',value:'출고예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'삭제여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',valueType:'other',falseValue:'F',trueValue:'T',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'link',removeBorderStyle:'false',width:'120',class:'linktype'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrDt',inputType:'text',removeBorderStyle:'false',width:'80',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'slipNo',inputType:'link',removeBorderStyle:'false',width:'100',class:'linktype'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNo',inputType:'text',removeBorderStyle:'false',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',style:'',value:'',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'depositClntNo',inputType:'text',style:'',value:'',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'depositClntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'110',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'responsetype',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sndcoftype',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'status',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{width:'120',inputType:'link',style:'',id:'outIntendNo',value:'',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'outIntendDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'outRegNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'delYn',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'grd_section3'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'발행 이력',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',dataList:'',style:'',id:'',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_history',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_history',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'발행 / 구분',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',value:'발행일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column21',value:'공급받는자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'공급가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column15',value:'합계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'만료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'등록일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'select',id:'documentclass',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',displayFormat:'####/##/##',inputType:'text',id:'publicationdate',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'demandername',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,###',inputType:'text',style:'',id:'supplyamount',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'120',displayFormat:'#,###',inputType:'text',style:'',id:'surtaxamount',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',width:'110',displayFormat:'#,###',inputType:'text',style:'',id:'totalamount',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',displayFormat:'####/##/##',inputType:'text',style:'',id:'expirationdate',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',displayFormat:'####/##/## ##:##:##',inputType:'text',style:'',id:'registdate',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'width: 500px;',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'응답 이력',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grd_section3',templateYn:'N',style:'',gridID:'gr_detailHistory',id:'udc_topGrdBtn1',btnUser:'N',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_detailHistory',scrollByColumn:'false',style:'',autoFit:'lastColumn',id:'gr_detailHistory',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',value:'응답',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',sortable:'false',value:'응답 메시지',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column9',value:'전송일',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column21',value:'등록일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'responsetype',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'responsetypeNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'messageinformation1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',displayFormat:'####/##/## ##:##:##',inputType:'text',id:'senddate',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',displayFormat:'####/##/## ##:##:##',inputType:'text',style:'',id:'registdate',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{tagname:'ol',style:'',id:'',class:'info-list'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'전송상태 WAIT : 전자수납 데이터 KT-NET 전송 전 상태 (전송버튼 클릭 후 READY로 상태로 변경)',class:''}}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'전송상태 READY : 전자수납 데이터 전송 후 KT-NET 접수 전 상태 (KT-NET 접수 후 OK로 상태 변경)',class:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송상태 OK : KT-NET 접수 완료 상태',style:'',tagname:'span'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_transfer',label:'전송',class:'btn',objType:'bDelete2',userAuth:'U','ev:onclick':'scwin.btn_transfer_onclick'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_taxEstimat',label:'세금계산서 생성',style:'',objType:'bDelete2',userAuth:'U','ev:onclick':'scwin.btn_taxEstimat_onclick'}}]}]}]}]}]}]}]})