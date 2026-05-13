/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_11b.xml 52412 da39ffe986a6f2fd141e9839d6e7134735fd81bc6bb2a8fd4600b26e8088bbb3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchEBC'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'ContractEBC',E:[{T:4,cdata:' '}]},{T:1,N:'sysCd',E:[{T:4,cdata:'ContractEBC'}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true','ev:ondataload':'scwin.ds_selpchItemCd_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'요율항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPath',saveRemovedData:'true','ev:ondataload':'scwin.ds_contractWorkPath_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'작업경로seq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractWorkPathEachWorkStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'작업경로',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScSelpchItemCd',name:'할인할증매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScSelpchItemNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcScCtrtTrfSeq',name:'할인할증계약요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxCondWt',name:'계약요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrfRt',name:'계약요율_비율',dataType:'text',importFormatter:''}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minCondWt',name:'최소조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col18',name:'최대조건중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sprtCnfrYn',name:'별도협의여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_completeYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchEBC',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchEBC","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveDiscountSurchargeContractTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_tariff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveDiscountSurchargeContractTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tariff","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_commonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commonPopup',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonPopup_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("sd_202_01_11b onpageload Start");
  scwin.ctrtNo = $c.data.getParameter($p, "ctrtNo");
  scwin.clntNo = $c.data.getParameter($p, "clntNo");
  scwin.clntNm = $c.data.getParameter($p, "clntNm");
  scwin.bizDivCntrYn = $c.data.getParameter($p, "bizDivCntrYn");
  scwin.bizDivBulkYn = $c.data.getParameter($p, "bizDivBulkYn");
  scwin.bizDomTransYn = $c.data.getParameter($p, "bizDomTransYn");
  scwin.bizDomStvYn = $c.data.getParameter($p, "bizDomStvYn");
  scwin.bizDomStrYn = $c.data.getParameter($p, "bizDomStrYn");
  scwin.bizDomInatYn = $c.data.getParameter($p, "bizDomInatYn");
  scwin.bizDomTplYn = $c.data.getParameter($p, "bizDomTplYn");
  scwin.impYn = $c.data.getParameter($p, "impYn");
  scwin.expYn = $c.data.getParameter($p, "expYn");
  scwin.domesticYn = $c.data.getParameter($p, "domesticYn");
  scwin.sellClntClsNm = $c.data.getParameter($p, "sellClntClsNm");
  scwin.ctrtDistrictCd = $c.data.getParameter($p, "ctrtDistrictCd");
  scwin.PAGE_MOVE_CONFIRM = true;
  scwin.f_defaultValue();
  $c.gus.cfDisableKey($p);
  scwin.f_setValidExp();
  scwin.f_bindTextImageMouseDown();

  //공통코드 조회
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_tariff:crcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //요율항목 조회
  dma_searchEBC.set("queryId", "retrieveContractWorkStepTariffItemList");
  dma_searchEBC.set("param1", scwin.ctrtNo);
  $c.sbm.execute($p, sbm_searchEBC).then(e => {
    console.log("sbm_searchEBC retrieveContractWorkStepTariffItemList");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    console.log(e.responseJSON.GAUCE);
    ds_selpchItemCd.setJSON(e.responseJSON.GAUCE);
    acb_selpchItemCd.setNodeSet("data:ds_selpchItemCd", "selpchItemNm", "selpchItemCd");
    acb_selpchItemCd.setSelectedIndex(0);
  });
  scwin.f_retrieveContractYn(); //wFrame에서 읽어오던 데이터 옮겨옴.

  console.log("sd_202_01_11b onpageload End");
};
scwin.f_setValidExp = function () {
  const oValidExp = {
    dataName: "할인할증요율 그리드",
    validFeatures: "ignoreStatus=no,",
    validExp: `dcScSelpchItemNm:할인항목:yes::key,
            commNm:품명:yes::key,
            unitCd:단위:yes::key,
            crcCd:통화:yes::key,
            ctrtTrf:금액:no::key,
            ctrtTrfRt:율(%):no::key,
            lobranNm:물류점소:no::key,
            wrkStpCd:작업단계:no::key,
            minCondWt:적용범위 최소:no:minNumber=0:key,
            maxCondWt:적용범위 최대:no:minNumber=0:key,
            sprtCnfrYn:별도협의여부:no::key`
  };
  $c.gus.setValidExp($p, gr_tariff, oValidExp);
};
//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("sd_202_01_11b scwin.f_defaultValue Start");
  ed_ctrtNo.setValue(scwin.ctrtNo.substring(0, 9) + "-" + scwin.ctrtNo.substring(9, 11));
  ed_clntNo.setValue(scwin.clntNo);
  ed_clntNm.setValue(scwin.clntNm);
  cbx_bizDivCntrYn.setValue(scwin.bizDivCntrYn);
  cbx_bizDivBulkYn.setValue(scwin.bizDivBulkYn);
  cbx_bizDomStvYn.setValue(scwin.bizDomStvYn);
  cbx_bizDomTransYn.setValue(scwin.bizDomTransYn);
  cbx_bizDomStrYn.setValue(scwin.bizDomStrYn);
  cbx_bizDomInatYn.setValue(scwin.bizDomInatYn);
  cbx_bizDomTplYn.setValue(scwin.bizDomTplYn);
  cbx_impYn.setValue(scwin.impYn);
  cbx_expYn.setValue(scwin.expYn);
  cbx_domesticYn.setValue(scwin.domesticYn);
  ed_sellClntClsNm.setValue(scwin.sellClntClsNm);
  $c.gus.cfDisableObjects($p, [btn_disc]);
  console.log("sd_202_01_11b scwin.f_defaultValue End");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  if ($c.data.isModified($p, ds_tariff)) {
    let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_015));
    if (conf) scwin.f_save();
  }
  if (acb_selpchItemCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("요율항목"));
    return;
  }
  if (acb_contractWorkPath.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("작업경로"));
    return;
  }
  dma_retrieve.set("ctrtNo", ed_ctrtNo.getValue().replace("-", ""));
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_retrieveContractYn = async function () {
  const strParam = {
    sysCd: "ContractEBC" // 시스템코드
    ,

    queryId: "retrieveContractYn" // 쿼리ID
    ,

    param1: scwin.ctrtNo,
    param2: "",
    param3: "",
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
    param9: "",
    param10: ""
  };
  dma_commonPopup.setJSON(strParam);
  $c.sbm.execute($p, sbm_commonPopup);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  if (!$c.data.isModified($p, ds_tariff)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("할인할증요율"));
    scwin.PAGE_MOVE_CONFIRM = false;
  } else {
    let chkVal = await scwin.f_reqFieldChk();
    if (chkVal) {
      let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
      if (conf) {
        $c.sbm.execute($p, sbm_save);
      } else {
        scwin.PAGE_MOVE_CONFIRM = false;
      }
    } else {
      scwin.PAGE_MOVE_CONFIRM = false;
    }
  }
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_markTextImageViewChangeSkip = function (rowIndex, columnId) {
  const token = Date.now();
  scwin.skipTextImageViewChange = {
    rowIndex: rowIndex,
    columnId: columnId,
    token: token
  };
  setTimeout(function () {
    if (scwin.skipTextImageViewChange && scwin.skipTextImageViewChange.token === token) {
      scwin.skipTextImageViewChange = null;
    }
  }, 500);
};
scwin.f_markPendingTextImageViewChangeSkip = function () {
  const editedCell = gr_tariff && gr_tariff.editedCell;
  if (!editedCell || editedCell.editRowIndex < 0 || $c.util.isEmpty($p, editedCell.colID)) {
    return;
  }
  scwin.f_markTextImageViewChangeSkip(editedCell.editRowIndex, editedCell.colID);
};
scwin.f_shouldSkipTextImageViewChange = function (info) {
  const guard = scwin.skipTextImageViewChange;
  if (!guard) {
    return false;
  }
  const rowIndex = info && typeof info.rowIndex !== "undefined" ? info.rowIndex : ds_tariff.getRowPosition();
  const columnId = info && (info.colId || info.colID) ? info.colId || info.colID : gr_tariff.getFocusedColumnID();
  if (guard.rowIndex === rowIndex && guard.columnId === columnId) {
    scwin.skipTextImageViewChange = null;
    return true;
  }
  return false;
};
scwin.f_bindTextImageMouseDown = function () {
  if (scwin.textImageMouseDownBound) {
    return;
  }
  const gridElement = gr_tariff && gr_tariff.render ? gr_tariff.render : document.getElementById("gr_tariff");
  if (!gridElement || !gridElement.addEventListener) {
    setTimeout(scwin.f_bindTextImageMouseDown, 100);
    return;
  }
  scwin.textImageMouseDownHandler = function (evt) {
    const target = evt && evt.target;
    if (!target || !target.closest) {
      return;
    }
    const textImageButton = target.closest(".w2grid_textImage_button");
    if (!textImageButton || !gridElement.contains(textImageButton)) {
      return;
    }
    scwin.f_markPendingTextImageViewChangeSkip();
  };
  gridElement.addEventListener("mousedown", scwin.textImageMouseDownHandler, true);
  scwin.textImageMouseDownBound = true;
};
scwin.f_openCommonPopUp = function (disGubun, row) {
  console.log("scwin.f_openCommonPopUp : " + disGubun + ", " + row);
  let pWinCloseTF = $c.util.isEmpty($p, scwin.pWinCloseTF) ? "T" : "F";
  if (pWinCloseTF == "T" && $c.util.isEmpty($p, ds_tariff.getCellData(row, gr_tariff.getFocusedColumnID()))) return;
  let tmpCd = "";
  let tmpCdVal = "";
  if (gr_tariff.getFocusedColumnID().trim().slice(-2) == "Nm") {
    tmpCd = gr_tariff.getFocusedColumnID().replace(/Nm/g, "Cd");
    tmpCdVal = ds_tariff.getCellData(row, tmpCd);
    if (pWinCloseTF != "F") {
      tmpCdVal = "";
    }
  }
  switch (disGubun) {
    case 1:
      // 할인항목
      udc_comCode.setSelectId("retrieveCtrtSelpchItemInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackSelpchItem, tmpCdVal, ds_tariff.getCellData(row, "dcScSelpchItemNm"), pWinCloseTF, '5', null, '150,170', null, ",,,,1", '440', '500', null, null, null, "F", null);
      break;
    case 2:
      // 품목/품명
      udc_comCode.setSelectId("retrieveCommInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackComm, tmpCdVal, ds_tariff.getCellData(row, "commNm"), pWinCloseTF, '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', "2,4,,," + ed_clntNo.getValue(), null, null, null, null, null, "F", "품목／품명,품목／품명코드,품목／품명");
      break;
    case 3:
      // 단위
      udc_comCode.setSelectId("retrieveCommCdInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackCommCd, ds_tariff.getCellData(row, "unitCd"), '', pWinCloseTF, '7', "단위코드,단위코드명", '150,170', null, 'LO102,,', null, null, null, null, null, "F", "단위,단위코드,단위코드명");
      break;
    case 4:
      // 물류점소
      udc_comCode.setSelectId("retrieveLobranInfo");
      udc_comCode.cfCommonPopUpAsync(scwin.callBackLobran, tmpCdVal, ds_tariff.getCellData(row, "lobranNm").trim(), pWinCloseTF, '7', "물류점소코드,물류점소명", '150,170', null, null, null, null, null, null, null, "F", "물류점소,물류점소코드,물류점소명");
      break;
    default:
      break;
  }
  scwin.pWinCloseTF = "";
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.callBackSelpchItem = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, ds_tariff.getRowPosition(), "dcScSelpchItemCd", "dcScSelpchItemNm");

  //2026.04.29  T-7495 수정
  let curRow = ds_tariff.getRowPosition();
  let v_dcScSelpchItemCd = ds_tariff.getCellData(curRow, "dcScSelpchItemCd");
  gr_tariff.setReadOnly("cell", curRow, "minCondWt", true);
  gr_tariff.setReadOnly("cell", curRow, "maxCondWt", true);
  if (v_dcScSelpchItemCd == "0086" || v_dcScSelpchItemCd == "" || v_dcScSelpchItemCd == "0100") {
    gr_tariff.setReadOnly("cell", curRow, "minCondWt", false);
    gr_tariff.setReadOnly("cell", curRow, "maxCondWt", false);
  } else {
    ds_tariff.setCellData(curRow, "minCondWt", 0);
    ds_tariff.setCellData(curRow, "maxCondWt", 0);
  }
};
scwin.callBackComm = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, ds_tariff.getRowPosition(), "commCd", "commNm");
};
scwin.callBackLobran = function (rtnList) {
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, ds_tariff.getRowPosition(), "lobranCd", "lobranNm");
};
scwin.callBackCommCd = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") $c.gus.cfSetGridReturnValue($p, rtnList, ds_tariff, ds_tariff.getRowPosition(), "unitCd", "");else ds_tariff.setCellData(ds_tariff.getRowPosition(), "unitCd", "");
};

//-------------------------------------------------------------------------
// 필수항목 check
//-------------------------------------------------------------------------
scwin.f_reqFieldChk = async function () {
  let chkVal = await $c.gus.cfValidate($p, [gr_tariff], null, true);
  if (!chkVal) return false;
  for (var i = 0; i < ds_tariff.getTotalRow(); i++) {
    if (ds_tariff.getCellData(i, "sprtCnfrYn") == 0 && ds_tariff.getCellData(i, "ctrtTrf") == 0 && ds_tariff.getCellData(i, "ctrtTrfRt") == 0) {
      $c.win.alert($p, "할인/할증 금액 또는 율(%)중 하나를 반드시 입력하십시오.");
      return false;
    }
    if (ds_tariff.getCellData(i, "minCondWt") > ds_tariff.getCellData(i, "maxCondWt")) {
      $c.win.alert($p, "적용범위의 최소는 최대보다 클 수 없습니다. 확인 바랍니다.");
      gr_tariff.setFocusedCell(i, "minCondWt");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 화면 이동
//-------------------------------------------------------------------------
scwin.f_winOpen = async function (strIndex) {
  //변경여부
  if ($c.data.isModified($p, ds_tariff)) {
    //완료여부
    if (wfm_ctrtComplete.getWindow().ds_completeYn.getCellData(0, "code") == "02") {
      ds_tariff.undoAll();
    } else {
      let conf = await $c.win.confirm($p, "할인할증요율에 변경된 사항이 있습니다. 저장하시겠습니까? \n확인을 누르시면 변경된 사항이 저장이되고, \n취소를 누르실 경우 모든 변경된 사항이 처음 조회된 상태가 됩니다.");
      if (conf) {
        scwin.f_save("cfm");
        if (scwin.PAGE_MOVE_CONFIRM == false) return;
      } else {
        ds_tariff.undoAll();
      }
    }
  }
  let strPath = "";
  let programNm = "";
  let programId = $c.data.getParameter($p, "menuInfo").pgmId;
  let paramObj = {
    ctrtNo: ed_ctrtNo.getValue().replace("-", ""),
    bizDivCntrYn: cbx_bizDivCntrYn.getValue(),
    bizDivBulkYn: cbx_bizDivBulkYn.getValue(),
    bizDomTransYn: cbx_bizDomTransYn.getValue(),
    bizDomStvYn: cbx_bizDomStvYn.getValue(),
    bizDomStrYn: cbx_bizDomStrYn.getValue(),
    bizDomInatYn: cbx_bizDomInatYn.getValue(),
    bizDomTplYn: cbx_bizDomTplYn.getValue(),
    impYn: cbx_impYn.getValue(),
    expYn: cbx_expYn.getValue(),
    domesticYn: cbx_domesticYn.getValue(),
    sellClntClsNm: ed_sellClntClsNm.getValue(),
    clntNo: ed_clntNo.getValue(),
    clntNm: ed_clntNm.getValue(),
    ctrtDistrictCd: scwin.ctrtDistrictCd
  };
  let option = {
    openAction: "exist",
    menuCode: $c.data.getParameter($p, "menuInfo").refreshPid || ""
  };
  switch (strIndex) {
    case 1:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02b.xml";
      programNm = "신규계약등록";
      paramObj = {
        ctrtNo: ed_ctrtNo.getValue().replace("-", "")
      };
      option.mdiTitle = "계약기본정보";
      break;
    case 2:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_03b.xml";
      programNm = "계약작업경로관리";
      option.mdiTitle = "계약작업경로";
      break;
    case 3:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_04b.xml";
      programNm = "기본 계약요율관리";
      option.mdiTitle = "기본계약요율";
      break;
    case 4:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_11b.xml";
      programNm = "할인/할증 요율관리";
      option.mdiTitle = "할인/할증요율";
      break;
    case 5:
      $c.win.alert($p, "준비중입니다.");
      break;
    case 6:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_13b.xml";
      programNm = "계약서이미지등록";
      option.mdiTitle = "계약서이미지";
      break;
    case 7:
      var data = {
        ctrtNo: ed_ctrtNo.getValue().replace("-", "")
      };
      var opts = {
        id: "sd_202_01_14p",
        popupName: "부대조건",
        modal: true,
        type: "browserPopup",
        title: "부대조건",
        width: 500,
        height: 650
      };
      let ret = $c.win.openPopup($p, "/pub/cm/bc/vehclinsurancemgnt/zz_831_01_01b.xml", opts, data);
      return;
      break;
    default:
      break;
  }
  $p.top().scwin.closeFlag = true;
  let curMdiIdx = $p.top().tac_layout.getSelectedTabIndex();
  option.addTabIndex = curMdiIdx;
  $p.top().tac_layout.deleteTab(curMdiIdx);
  $p.setTimeout(function () {
    $p.top().scwin.closeFlag = false;
  }, {
    delay: 200
  });
  $c.win.openMenu($p, programNm, strPath, programId, paramObj, option);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  if (ds_tariff.getTotalRow() == 0) {
    let insRow = ds_tariff.insertRow();
    ds_tariff.setCellData(insRow, "ctrtNo", scwin.ctrtNo);
    ds_tariff.setCellData(insRow, "ctrtWrkPathSeq", acb_contractWorkPath.getValue());
    ds_tariff.setCellData(insRow, "selpchItemCd", acb_selpchItemCd.getValue());
    ds_tariff.setCellData(insRow, "crcCd", "KRW");
    ds_tariff.setCellData(insRow, "ctrtTrf", "0");
    ds_tariff.setCellData(insRow, "ctrtTrfRt", "0");
    ds_tariff.setCellData(insRow, "sprtCnfrYn", "0");
    gr_tariff.setFocusedCell(insRow, "dcScSelpchItemNm", false); //grid focusMode가 both일때 적용됨.
    console.log("wrkStpCd : " + gr_tariff.getCellReadOnly(insRow, "wrkStpCd"));
  } else {
    $c.gus.cfCopyRecord($p, gr_tariff);
    gr_tariff.setFocusedCell(ds_tariff.getRowCount() - 1, 0);
  }
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  console.log("scwin.f_customFormatter");
  if ($c.gus.cfIsNull($p, data)) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  let label;
  if (columnId == "wrkStpCd") {
    label = ds_contractWorkPathEachWorkStep.getMatchedJSON("wrkStpCd", data, true)[0].wrkStpNm;
  }
  return "[" + data + "] " + label;
};
/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_tariff.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  gr_tariff.setFocusedCell(0, 0);
  if (cbx_bizDivCntrYn.getValue() == "1") {
    gr_tariff.setColumnVisible("transCondCd", true);
    gr_tariff.setColumnVisible("cntrWtCondCd", true);
    gr_tariff.setColumnVisible("liftIncluYn", true);
  } else {
    gr_tariff.setColumnVisible("transCondCd", false);
    gr_tariff.setColumnVisible("cntrWtCondCd", false);
    gr_tariff.setColumnVisible("liftIncluYn", false);
  }
  if (cbx_bizDivBulkYn.getValue() == "1") {
    gr_tariff.setColumnVisible("eqKndCd", true);
    gr_tariff.setColumnVisible("eqNrmCd", true);
  } else {
    gr_tariff.setColumnVisible("eqKndCd", false);
    gr_tariff.setColumnVisible("eqNrmCd", false);
  }
};

//저장 완료
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ds_tariff.initRowStatus();
  scwin.f_retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//요율항목 값 변경 > 작업경로 조회
scwin.acb_selpchItemCd_onchange = function (info) {
  dma_searchEBC.set("queryId", "retrieveContractSelPchItemEachWorkPath");
  dma_searchEBC.set("param1", scwin.ctrtNo);
  dma_searchEBC.set("param2", acb_selpchItemCd.getValue());
  $c.sbm.execute($p, sbm_searchEBC).then(e => {
    console.log("sbm_searchEBC retrieveContractSelPchItemEachWorkPath");
    if (e.responseJSON.resultDataSet[0].Code < 0) return;
    ds_contractWorkPath.setJSON(e.responseJSON.GAUCE);
    acb_contractWorkPath.setNodeSet("data:ds_contractWorkPath", "ctrtWrkPathNm", "ctrtWrkPathSeq");
    acb_contractWorkPath.setSelectedIndex(0);
    scwin.acb_contractWorkPath_onchange();
  });
};

//작업경로 값 변경 > 조회
scwin.acb_contractWorkPath_onchange = function (info) {
  if (ds_contractWorkPathEachWorkStep.getTotalRow() == 0) {
    dma_searchEBC.set("queryId", "retrieveContractWorkPathEachWorkStep");
    dma_searchEBC.set("param1", scwin.ctrtNo);
    dma_searchEBC.set("param2", acb_contractWorkPath.getValue());
    $c.sbm.execute($p, sbm_searchEBC).then(e => {
      console.log("sbm_searchEBC retrieveContractWorkPathEachWorkStep");
      if (e.responseJSON.resultDataSet[0].Code < 0) return;
      ds_contractWorkPathEachWorkStep.setJSON(e.responseJSON.GAUCE);
      gr_tariff.setColumnNodeSet("wrkStpCd", "data:ds_contractWorkPathEachWorkStep", "wrkStpNm", "wrkStpCd");
    });
  }
  scwin.f_retrieve();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};

//그리드 항목 편집 설정
scwin.gr_tariff_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  $c.gus.cfPrepareHidVal($p, ds_tariff, rowIndex, ["commCd", "commNm", "lobranCd", "lobranNm", "dcScSelpchItemCd", "dcScSelpchItemNm", "unitCd"]);
  var columnId = gr_tariff.getColumnID(columnIndex);
  switch (columnId) {
    case "ctrtTrf":
      if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrf") > 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", true);
        ds_tariff.setCellData(rowIndex, "ctrtTrfRt", "0");
        ds_tariff.setCellData(rowIndex, "famtFratClsCd", "FM");
      } else if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrfRt") > 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", true);
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", false);
        ds_tariff.setCellData(rowIndex, "ctrtTrfRt", "0");
        ds_tariff.setCellData(rowIndex, "famtFratClsCd", "FR");
      } else if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrf") == 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", false);
      } else if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrfRt") == 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", false);
      }
      break;
    case "ctrtTrfRt":
      if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrf") > 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
        gr_tariff.setDataType("ctrtTrf", "number");
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", true);
        ds_tariff.setCellData(rowIndex, "ctrtTrfRt", "0");
      } else if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrfRt") > 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", true);
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", false);
        gr_tariff.setDataType("ctrtTrfRt", "number");
        ds_tariff.setCellData(rowIndex, "ctrtTrfRt", "0");
        ds_tariff.setCellData(rowIndex, "famtFratClsCd", "FR");
      } else if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrf") == 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
        gr_tariff.setDataType("ctrtTrf", "number");
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", false);
        gr_tariff.setDataType("ctrtTrfRt", "number");
      } else if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "0" && ds_tariff.getCellData(rowIndex, "ctrtTrfRt") == 0) {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
        gr_tariff.setDataType("ctrtTrf", "number");
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", false);
        gr_tariff.setDataType("ctrtTrfRt", "number");
      }
      break;
    //<script language=JavaScript for=ds_tariff event=OnRowPosChanged(row)>
    case "minCondWt":
    case "maxCondWt":
      if (ds_tariff.getCellData(rowIndex, "dcScSelpchItemCd") == "0086" || ds_tariff.getCellData(rowIndex, "dcScSelpchItemCd") == "" || ds_tariff.getCellData(rowIndex, "dcScSelpchItemCd") == "0100") {
        gr_tariff.setReadOnly("cell", rowIndex, "minCondWt", false);
        gr_tariff.setReadOnly("cell", rowIndex, "maxCondWt", false);
      } else {
        console.log("그리드 cell readonly");
        gr_tariff.setReadOnly("cell", rowIndex, "minCondWt", true);
        gr_tariff.setReadOnly("cell", rowIndex, "maxCondWt", true);
        ds_tariff.setCellData(rowIndex, "minCondWt", "0");
        ds_tariff.setCellData(rowIndex, "maxCondWt", "0");
      }
      break;
    case "sprtCnfrYn":
      if (ds_tariff.getCellData(rowIndex, "sprtCnfrYn") == "1") {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", true);
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", true);
        ds_tariff.setCellData(rowIndex, "ctrtTrf", "0");
        ds_tariff.setCellData(rowIndex, "ctrtTrfRt", "0");
      } else {
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrf", false);
        gr_tariff.setReadOnly("cell", rowIndex, "ctrtTrfRt", false);
      }
      break;
    default:
      break;
  }
};

//그리드 textImage 클릭 > 팝업 호출
scwin.gr_tariff_ontextimageclick = function (rowIndex, columnIndex) {
  console.log("scwin.gr_tariff_ontextimageclick");
  scwin.pWinCloseTF = "F";
  scwin.gr_tariff_onviewchange();
};
scwin.gr_tariff_onviewchange = function (info) {
  if (scwin.f_shouldSkipTextImageViewChange(info)) {
    return;
  }
  let rowIndex = ds_tariff.getRowPosition();
  let columnId = gr_tariff.getFocusedColumnID();
  switch (columnId) {
    case "dcScSelpchItemNm":
      //할인할증
      scwin.f_openCommonPopUp(1, rowIndex);
      if (scwin.pWinCloseTF != "F" && ds_tariff.getCellData(rowIndex, "dcScSelpchItemNm") == "") {
        ds_tariff.setCellData(rowIndex, "dcScSelpchItemCd", "");
      }
      break;
    case "commNm":
      //품목품명
      scwin.f_openCommonPopUp(2, rowIndex);
      break;
    case "unitCd":
      //단위
      scwin.f_openCommonPopUp(3, rowIndex);
      break;
    case "lobranNm":
      //작업점소
      scwin.f_openCommonPopUp(4, rowIndex);
      break;
  }
};

//계약기본정보 버튼
scwin.btn_base_onclick = function (e) {
  scwin.f_winOpen(1);
};

//작업경로 버튼
scwin.btn_path_onclick = function (e) {
  scwin.f_winOpen(2);
};

//계약요율 버튼
scwin.btn_rate_onclick = function (e) {
  scwin.f_winOpen(3);
};

//할인/할증 버튼
scwin.btn_disc_onclick = function (e) {
  scwin.f_winOpen(4);
};

//계약서이미지 버튼
scwin.btn_img_onclick = function (e) {
  scwin.f_winOpen(6);
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//목록 버튼
scwin.btn_list_onclick = async function (e) {
  paramObj = {};
  $p.top().scwin.closeFlag = true;
  let curMdiIdx = $p.top().tac_layout.getSelectedTabIndex();
  option.addTabIndex = curMdiIdx;
  $p.top().tac_layout.deleteTab(curMdiIdx);
  $p.setTimeout(function () {
    $p.top().scwin.closeFlag = false;
  }, {
    delay: 200
  });
  $c.win.openMenu($p, "계약관리", "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_01b.xml", "sd_202_01_01b.jsp", paramObj, {
    openAction: "select"
  });
};
scwin.gr_tariff_oncellclick = function (rowIndex, columnIndex, columnId) {
  //작업단계 DataSet 필터 적용
  return;
  if (columnId === "wrkStpCd") {
    let currentVal = gr_tariff.getCellData(rowIndex, "wrkStpCd"); // 현재 행의 코드값
    ds_contractWorkPathEachWorkStep.setColumnFilter({
      type: 'row',
      colIndex: 'wrkStpCd',
      key: currentVal,
      condition: 'and'
    });
    gr_tariff.refreshCell(rowIndex, columnIndex);
  }
};
scwin.sbm_commonPopup_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    ds_completeYn.setJSON(e.responseJSON.GAUCE);
    if (ds_completeYn.getCellData(0, "code") == "02") {
      $c.gus.cfDisableObjects($p, [btn_save, udc_btmGrdBtn]);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_ctrtNo',placeholder:'',class:'form-control col6',objType:'key',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_clntNo',placeholder:'',class:'form-control w85',objType:'key',disabled:'true'}},{T:1,N:'xf:input',A:{style:'',id:'ed_clntNm',placeholder:'',class:'form-control ',objType:'key',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_sellClntClsNm',placeholder:'',class:'form-control col6',objType:'key',disabled:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약영역',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bizDomStvYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bizDomTransYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bizDomStrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bizDomInatYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bizDomTplYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약부문',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bizDivCntrYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_bizDivBulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출입구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_impYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_expYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_domesticYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',objType:'key',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율항목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:250px;',submenuSize:'auto',objType:'data',mandatory:'true',allOption:'',chooseOption:'',ref:'data:dma_retrieve.selpchItemCd',textAlign:'left','ev:onchange':'scwin.acb_selpchItemCd_onchange'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업경로 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_contractWorkPath',search:'start',style:'width:250px;',submenuSize:'auto',objType:'data',mandatory:'true',allOption:'',chooseOption:'',ref:'data:dma_retrieve.ctrtWrkPathSeq','ev:onchange':'scwin.acb_contractWorkPath_onchange'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'Y',templateYn:'N',grdDownOpts:'{"fileName" : "할인할증요율.xlsx", "sheetName" : "할인할증요율", "type" : "2+4+8+16"}',gridID:'gr_tariff',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_tariff',focusMode:'both',id:'gr_tariff',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',resize:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true','ev:oncellindexchange':'scwin.gr_tariff_oncellindexchange','ev:ontextimageclick':'scwin.gr_tariff_ontextimageclick',editModeEvent:'onclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_tariff_onviewchange','ev:oncellclick':'scwin.gr_tariff_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'할인/할증<br/>항목',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'품목/품명',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'단위',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'80',value:'통화',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'할인/할증<br/>금액(￦)',width:'100',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'할인/할증<br/>율(%)',width:'100',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업점소',width:'80',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업단계',width:'80',colSpan:'',rowSpan:'2',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'적용범위(TON/M)',width:'140',colSpan:'2',rowSpan:'',class:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column41',value:'별도협의<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2',class:'col-type2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label',value:'최소',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'최대',displayMode:'label',class:'col-type2'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dcScSelpchItemNm',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left',validExp:'dcScSelpchItemNm:할인항목:yes::key',editType:'select',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left',validExp:'commNm:품명:yes::key',editType:'select',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'unitCd',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left',validExp:'unitCd:단위:yes',editType:'select',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'crcCd',inputType:'select',removeBorderStyle:'false',width:'80',textAlign:'left',validExp:'crcCd:통화:yes',visibleRowNum:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrf',inputType:'text',width:'100',textAlign:'right',validExp:'ctrtTrf::no::key',dataType:'number',displayFormat:'#,###.#0',editType:'select',excelCellType:'number',defaultValue:'0',excelFormat:'#,##0.00',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtTrfRt',inputType:'text',width:'100',textAlign:'right',validExp:'ctrtTrfRt::no::key',displayFormat:'##0.#0',dataType:'number',excelCellType:'number',maxLength:'3',ignoreChar:'.',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'textImage',width:'80',textAlign:'left',validExp:'lobranNm::no::key',editType:'select'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'wrkStpCd',inputType:'select',width:'80',textAlign:'left',validExp:'wrkStpCd::no::key',allOption:'',chooseOption:'',ref:'',customFormatter:'scwin.f_customFormatter'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_contractWorkPathEachWorkStep'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'minCondWt',inputType:'text',width:'70',textAlign:'right',validExp:'minCondWt::no:minNumber=0:key',dataType:'float',displayFormat:'#,##0.000',excelCellType:'number',defaultValue:'0',maxLength:'15.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'maxCondWt',value:'',displayMode:'label',textAlign:'right',validExp:'maxCondWt::no:minNumber=0:key',displayFormat:'#,##0.000',dataType:'float',excelCellType:'number',defaultValue:'0',maxLength:'15.3'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',style:'',id:'sprtCnfrYn',value:'',displayMode:'label',validExp:'sprtCnfrYn::no::key',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddUserAuth:'C',rowDelUserAuth:'D',EngYn:'N',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',btnCancelYn:'Y',gridID:'gr_tariff',id:'udc_btmGrdBtn',rowAddFunction:'scwin.f_addRow',btnRowAddObj:'btn_addRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_base',style:'',type:'button','ev:onclick':'scwin.btn_base_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_path',style:'',title:'',type:'button','ev:onclick':'scwin.btn_path_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_rate',style:'',title:'',type:'button','ev:onclick':'scwin.btn_rate_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약요율'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_disc',style:'',title:'',type:'button','ev:onclick':'scwin.btn_disc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인/할증'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_img',style:'',title:'',type:'button','ev:onclick':'scwin.btn_img_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약서이미지'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_list',label:'목록',style:'',type:'button','ev:onclick':'scwin.btn_list_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'목록'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_comCode',selectID:'',codeId:'ed_comCode',validTitle:'',nameId:'',style:'width:%; height:px;display: none;',id:'udc_comCode',btnId:'btn_comCode'}}]}]},{T:1,N:'w2:wframe',A:{style:'width:0px; height:0px; ',id:'wfm_ctrtComplete',src:'/ui/ds/sd/salesactiv/ctrtmgnt/ctrtCompleteYn.xml'}}]}]}]})