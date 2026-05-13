/*amd /ui/ds/fs/consignmgnt/fs_404_01_02b.xml 58039 5cd9326538725d7f96c804d4c60d2235e0afdf249eaaa414e703938ea3291f56 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_longTermVehclDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비;분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'수탁자 성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptCls',name:'적용구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_longTermVehclManagementCostDetailList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'비용항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyMm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_longTermVehclCostQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ym',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_longTermVehclDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ym',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclRegDd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptCls',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_longTermVehclManagementCost',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyMm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tpchsFare',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saveFlag',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subSum',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'상태코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'yyyyMm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellItemList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yy',name:'년',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mm',name:'월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'수탁자성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSum',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_excelSellItemList',baseNode:'list',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yy',name:'년',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mm',name:'월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'수탁자성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSum',name:'매출액 합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tlAmt',name:'T/L사용료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'empInsAmt',name:'고용보험료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mngAmt',name:'관리비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trafficAmt',name:'교통범칙금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'logisticAmt',name:'물류대행서비스수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'indusInsAmt',name:'산재보험료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxTrustAmt',name:'세무수탁료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'engineAmt',name:'엔진보링료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dangerInsAmt',name:'위험물보험료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'carInsPropertyAmt',name:'자동차보험(대물변경)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'carInsAgeAmt',name:'자동차보험(연령변경)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ownVehicleAmt',name:'자동차보험(자차)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'carInsAmt',name:'자동차보험료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'carTaxAmt',name:'자동차세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cargoInsAmt',name:'적재물배상책임보험료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tireMaintenanceAmt',name:'정비타이어료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'depositPayAmt',name:'지입차대급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coatingAmt',name:'피복료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'envImproveAmt',name:'환경개선부담금',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.longtermvehcl.RetrieveLongTermVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_longTermVehclCostQueryConditionDTO","key":"IN_DS1"},{"id":"ds_longTermVehclDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_longTermVehclDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.fs.consignmgnt.longtermvehcl.RetrieveLongTermVehclCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_longTermVehclDTO","key":"IN_DS1"},{"id":"ds_longTermVehclManagementCost","key":"OUT_DS1"},{"id":"ds_longTermVehclManagementCostDetailList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_longTermVehclManagementCost","key":"OUT_DS1"},{"id":"ds_longTermVehclManagementCostDetailList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_delete',action:'/ds.fs.consignmgnt.longtermvehcl.DeleteLongTermVehclCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_longTermVehclManagementCost","key":"IN_DS1"},{"id":"ds_longTermVehclManagementCostDetailList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_insert',action:'/ds.fs.consignmgnt.longtermvehcl.RegistLongTermVehclCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_longTermVehclManagementCost","key":"IN_DS1"},{"id":"ds_longTermVehclManagementCostDetailList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_insert_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_update',action:'/ds.fs.consignmgnt.longtermvehcl.UpdateLongTermVehclCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_longTermVehclManagementCost","key":"IN_DS1"},{"id":"ds_longTermVehclManagementCostDetailList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSellItemData',action:'/ds.fs.consignmgnt.longtermvehcl.RetrieveLongTermVehclSellItemListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_sellItemList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellItemList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSellItemData_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.yyyyMM = scwin.strCurDate.substring(0, 6);
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자

scwin.saveFlag = ""; // 등록, 수정 저장 구분자
scwin.rowFlag = ""; // 신규, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.rowPos = 0; // 저장전 DataSet의 RowPosition을 저장 변수
scwin.skipCellClick = false;
scwin.lastClickedRow = -1;
scwin.eventCnt = 0;
scwin.onpageload = function () {
  // gr_longTermVehclManagementCostDetailList.setDisabled("grid",true);
  gr_longTermVehclManagementCostDetailList.setReadOnly("grid", true);
  ica_ed_ym.setValue(scwin.yyyyMM);
  acb_lc_useYn.setSelectedIndex(2);
  $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Cancel, btn_Save, btn_Delete]);
  udc_bottomGrdBtn.setDisabled(true); //udc 비활성 
  udc_logisDeptInfo.setDisabled(true); //udc 비활성 
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  ica_ed_ym.setValue(scwin.yyyyMM);
  ica_ed_ym.focus();
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList = new Array(); // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 1:
      // 점소 팝업			
      rtnList = udc_lobranInfo.cfCommonPopUp(scwin.udc_lobranInfo_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      // cfSetReturnValue(rtnList, ed_lobranCd, ed_lobranNm);  // 점소코드, 점소명				
      break;
    case 2:
      // 매출부서 팝업			
      rtnList = udc_logisDeptInfo.cfCommonPopUp(scwin.udc_logisDeptInfo_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, ",,,,,,1,," + scwin.isNullToBlank(scwin.lobranCd), null, null, null, null, null, pAllSearch, null);
      // cfSetReturnValue(rtnList, ed_sellDeptCd, ed_sellDeptNm);  // 매출부서코드, 매출부서명
      break;
    default:
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  pairObj.setValue("");

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//점소pop callback
scwin.udc_lobranInfo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
};

//부서pop callback
scwin.udc_logisDeptInfo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sellDeptCd, ed_sellDeptNm);
};

//점소pop
scwin.udc_comCode_lobran_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lobranCd.getValue(), ed_lobranNm.getValue(), 'F', 'T');
};
scwin.udc_comCode_lobran_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 1);
};
scwin.udc_comCode_lobran_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lobranNm, ed_lobranCd, 1, false);
};

//부서pop
scwin.udc_comCode_dept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_sellDeptCd.getValue(), ed_sellDeptNm.getValue(), 'F', 'T');
};
scwin.isNullToBlank = function (text) {
  if (text == null || text == undefined || text == NaN || text == "") {
    return "";
  } else {
    return text;
  }
};
scwin.udc_comCode_dept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sellDeptCd, ed_sellDeptNm, 2);
};
scwin.udc_comCode_dept_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_sellDeptNm, ed_sellDeptCd, 2, false);
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ica_ed_ym, ed_lobranCd]))) {
    return;
  }

  //dataMap set...
  dma_longTermVehclCostQueryConditionDTO.set("ym", ica_ed_ym.getValue());
  dma_longTermVehclCostQueryConditionDTO.set("branCd", ed_lobranCd.getValue());
  dma_longTermVehclCostQueryConditionDTO.set("lobranCd", ed_lobranCd.getValue());
  dma_longTermVehclCostQueryConditionDTO.set("useYn", acb_lc_useYn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_longTermVehclDTOList.getRowCount();
  if (nCnt > 0) {
    var restoreRow = scwin.rowFlag == "SAVE" ? Math.min(scwin.rowPos, nCnt - 1) : 0;
    scwin.rowFlag = "";
    gr_longTermVehclContractDTOList.setFocusedCell(restoreRow, 0);
    total.setValue(nCnt);
    scwin.gr_longTermVehclContractDTOList_oncellclick(restoreRow, 0, "");
  } else {
    scwin.f_Clear();
    lay_odrNo.setValue("");
    total.setValue(nCnt);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
};

//grid cell click.
scwin.gr_longTermVehclContractDTOList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (scwin.skipCellClick) return;
  var prevRow = scwin.lastClickedRow;
  if (ds_longTermVehclManagementCostDetailList.getModifiedIndex().length > 0 && !btn_Save.getDisabled()) {
    if (rowIndex === prevRow) {
      scwin.resetDetailList();
    } else {
      var confirmResult = await $c.win.confirm($p, MSG_CM_CRM_005);
      scwin.resetDetailList();
      if (!confirmResult) {
        scwin.skipCellClick = true;
        gr_longTermVehclContractDTOList.setFocusedCell(prevRow, 0);
        scwin.skipCellClick = false;
        scwin.f_Clear();
        lay_vehclNo.setValue(ds_longTermVehclDTOList.getCellData(rowIndex, "vehclNo"));
        lay_clntNm.setValue(ds_longTermVehclDTOList.getCellData(rowIndex, "clntNm"));
        scwin.f_RetrieveLongTermVehclCost(rowIndex);
        return;
      }
    }
  }
  scwin.f_Clear();
  lay_vehclNo.setValue(ds_longTermVehclDTOList.getCellData(rowIndex, "vehclNo"));
  lay_clntNm.setValue(ds_longTermVehclDTOList.getCellData(rowIndex, "clntNm"));
  scwin.f_RetrieveLongTermVehclCost(rowIndex);
  scwin.lastClickedRow = rowIndex;
};
scwin.resetDetailList = function () {
  var modIdx = ds_longTermVehclManagementCostDetailList.getModifiedIndex();
  for (var i = modIdx.length - 1; i >= 0; i--) {
    if (ds_longTermVehclManagementCostDetailList.getRowStatus(modIdx[i]) === "C") {
      ds_longTermVehclManagementCostDetailList.removeRow(modIdx[i]);
    }
  }
  ds_longTermVehclManagementCostDetailList.undoAll();
};
scwin.f_Clear = function () {
  lay_vehclNo.setValue(""); // 차량번호
  lay_clntNm.setValue(""); // 위수탁자

  lay_tpchsFare.setValue(""); // 하불임
  lay_dcsnClsNm.setValue(""); // 매입확정코드명
  ed_subSum.setValue(""); // 소계

  ds_longTermVehclManagementCost.removeAll();
  ds_longTermVehclManagementCostDetailList.removeAll(); // 장기용차 비용상세조회, 위수탁요율조회
};

//grid2 retrieve
scwin.f_RetrieveLongTermVehclCost = function (row) {
  dma_longTermVehclDTO.set("ym", ica_ed_ym.getValue());
  dma_longTermVehclDTO.set("branCd", ed_lobranCd.getValue());
  dma_longTermVehclDTO.set("eqCd", ds_longTermVehclDTOList.getCellData(row, "eqCd"));
  dma_longTermVehclDTO.set("vehclRegDd", ds_longTermVehclDTOList.getCellData(row, "acqDt"));
  dma_longTermVehclDTO.set("adptCls", ds_longTermVehclDTOList.getCellData(row, "adptCls"));
  dma_longTermVehclDTO.set("vehclNo", ds_longTermVehclDTOList.getCellData(row, "vehclNo"));
  dma_longTermVehclDTO.set("clntNo", ds_longTermVehclDTOList.getCellData(row, "clntNo"));
  $c.sbm.execute($p, sbm_retrieve_detail);
};

//detail callback --> 여기 setvalue하는지 확인 *****
scwin.sbm_retrieve_detail_submitdone = function () {
  ds_longTermVehclManagementCost.setCellData(0, "eqCd", ds_longTermVehclDTOList.getCellData(ds_longTermVehclDTOList.getRowPosition(), "eqCd")); // 장비코드
  ds_longTermVehclManagementCost.setCellData(0, "yyMm", ica_ed_ym.getValue()); // 년월
  ds_longTermVehclManagementCost.setCellData(0, "vehclNo", ds_longTermVehclDTOList.getCellData(ds_longTermVehclDTOList.getRowPosition(), "vehclNo")); // 차량번호
  ds_longTermVehclManagementCost.setCellData(0, "clntNo", ds_longTermVehclDTOList.getCellData(ds_longTermVehclDTOList.getRowPosition(), "clntNo")); // 거래처번호

  lay_tpchsFare.setValue($c.gus.cfInsertComma($p, ds_longTermVehclManagementCost.getCellData(0, "tpchsFare"))); // 하불임
  lay_dcsnClsNm.setValue(ds_longTermVehclManagementCost.getCellData(0, "dcsnClsNm")); // 확정구분명
  lay_odrNo.setValue(ds_longTermVehclManagementCost.getCellData(0, "odrNo"));
  ed_sellDeptCd.setValue(ds_longTermVehclManagementCost.getCellData(0, "sellDeptCd")); // 매출부서코드
  ed_sellDeptNm.setValue(ds_longTermVehclManagementCost.getCellData(0, "sellDeptNm")); // 매출부서명
  scwin.f_SetSubSum(); // 매출액 합계

  scwin.saveFlag = ds_longTermVehclManagementCost.getCellData(0, "saveFlag"); // 저장구분자

  if (scwin.saveFlag == "insert") {
    // gr_longTermVehclManagementCostDetailList.setDisabled("grid",false);
    gr_longTermVehclManagementCostDetailList.setReadOnly("grid", false);
    $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Delete]);
    $c.gus.cfEnableObjects($p, [btn_Cancel, btn_Save]);
    udc_bottomGrdBtn.setDisabled(false); //udc 활성 
    udc_logisDeptInfo.setDisabled(false); //udc 활성 
  } else if (scwin.saveFlag == "update") {
    // gr_longTermVehclManagementCostDetailList.setDisabled("grid",true);
    gr_longTermVehclManagementCostDetailList.setReadOnly("grid", true);
    $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save]);
    udc_bottomGrdBtn.setDisabled(true); //udc 비활성 
    udc_logisDeptInfo.setDisabled(true); //udc 비활성 
    $c.gus.cfEnableObjects($p, [btn_Update, btn_Delete]);
  }
  if (ds_longTermVehclDTOList.getCellData(ds_longTermVehclDTOList.getRowPosition(), "useYn") == "0") {
    $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Cancel, btn_Save, btn_Delete]);
    udc_bottomGrdBtn.setDisabled(true); //udc 비활성 
    udc_logisDeptInfo.setDisabled(true); //udc 비활성 
  }
  if (ds_longTermVehclManagementCostDetailList.getRowCount() != 0) {
    gr_longTermVehclManagementCostDetailList.setFocusedCell(0, 0);
  }
};
scwin.addRow = function () {
  let rowIndex = ds_longTermVehclManagementCostDetailList.getRowCount();
  ds_longTermVehclManagementCostDetailList.insertRow(rowIndex);
  gr_longTermVehclManagementCostDetailList.setFocusedCell(rowIndex, 0);
  ds_longTermVehclManagementCostDetailList.setCellData(ds_longTermVehclManagementCostDetailList.getRowPosition(), "eqCd", ds_longTermVehclDTOList.getCellData(ds_longTermVehclDTOList.getRowPosition(), "eqCd")); // 장비코드
  ds_longTermVehclManagementCostDetailList.setCellData(ds_longTermVehclManagementCostDetailList.getRowPosition(), "yyMm", ica_ed_ym.getValue()); // 년월
};
scwin.deleteRow = function () {
  var intRowPosition = ds_longTermVehclManagementCostDetailList.getRowPosition();
  if ("C" == ds_longTermVehclManagementCostDetailList.getRowStatus(intRowPosition)) {
    ds_longTermVehclManagementCostDetailList.removeRow(intRowPosition);
  } else {
    ds_longTermVehclManagementCostDetailList.deleteRow(intRowPosition);
    gr_longTermVehclManagementCostDetailList.setFocusedCell(intRowPosition, 0);
  }
  scwin.f_SetSubSum(); // 소계 계산
};
scwin.undo = function () {
  $c.data.undoRow($p, ds_longTermVehclManagementCostDetailList, "Y");
  scwin.f_SetSubSum(); // 소계 계산
};
scwin.f_SetSubSum = function () {
  let subSum = 0;
  var rowCnt = ds_longTermVehclManagementCostDetailList.getRowCount();
  for (var i = 0; i < rowCnt; i++) {
    if ("D" != ds_longTermVehclManagementCostDetailList.getRowStatus(i)) {
      subSum += Number(ds_longTermVehclManagementCostDetailList.getCellData(i, "amt"));
    }
  }
  ds_longTermVehclManagementCost.setCellData(0, "subSum", subSum);
  ed_subSum.setValue(subSum);
};

//grid popup
scwin.f_ItemPopup = function (pClose) {
  let evNm = arguments[1] || "";
  if (evNm && $c.win.getEventList($p, gr_longTermVehclManagementCostDetailList, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });
  pCode = ds_longTermVehclManagementCostDetailList.getCellData(ds_longTermVehclManagementCostDetailList.getRowPosition(), "itemCd");
  debugger;
  ds_longTermVehclManagementCostDetailList.setCellData(ds_longTermVehclManagementCostDetailList.getRowPosition(), "itemNm", "");
  ds_longTermVehclManagementCostDetailList.setCellData(ds_longTermVehclManagementCostDetailList.getRowPosition(), "itemCd", "");
  if (scwin.eventCnt == 1) {
    udc_comCode_grid.cfCommonPopUp(scwin.udc_comCode_grid_callBackFunc, pCode, "", pClose, null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};

//grid pop  callback
scwin.udc_comCode_grid_callBackFunc = function (ret) {
  ds_longTermVehclManagementCostDetailList.setCellData(ds_longTermVehclManagementCostDetailList.getRowPosition(), "itemCd", ret[0]);
  ds_longTermVehclManagementCostDetailList.setCellData(ds_longTermVehclManagementCostDetailList.getRowPosition(), "itemNm", ret[1]);
};

//수정
scwin.btn_Update_onclick = function (e) {
  if (ds_longTermVehclDTOList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "수정할 목록이 존재하지 않습니다.");
    return;
  }

  // 확정구분이 미확인(1)이 아닌 상태는 수정불가
  let dcsnClsCd = ds_longTermVehclManagementCost.getCellData(0, "dcsnClsCd");
  if (dcsnClsCd != "1") {
    $c.gus.cfAlertMsg($p, "상태가 미확인인 경우만 수정가능합니다.");
    return;
  }
  $c.gus.cfEnableBtnOnly($p, [udc_bottomGrdBtn, btn_Cancel, btn_Save]);
  // gr_longTermVehclManagementCostDetailList.setDisabled("grid",false);
  gr_longTermVehclManagementCostDetailList.setReadOnly("grid", false);
};

//취소
scwin.btn_Cancel_onclick = function (e) {
  scwin.rowPos = scwin.lastClickedRow;
  scwin.rowFlag = "SAVE";
  scwin.btn_retrieve_onclick();
};

//삭제 
scwin.btn_Delete_onclick = async function (e) {
  if (ds_longTermVehclDTOList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "삭제할 목록이 존재하지 않습니다.");
    return;
  }

  // 확정구분이 미확인(1)이 아닌 상태는 삭제불가
  let dcsnClsCd = ds_longTermVehclManagementCost.getCellData(0, "dcsnClsCd");
  if (dcsnClsCd != "1") {
    $c.gus.cfAlertMsg($p, "상태가 미확인인 경우만 삭제 가능합니다.");
    return;
  }
  let confirm = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (confirm) {
    if (!(await $c.gus.cfValidate($p, [ica_ed_ym, gr_longTermVehclManagementCostDetailList]))) {
      return;
    }
    $c.sbm.execute($p, sbm_save_delete);
  }
};

//저장
scwin.btn_Save_onclick = async function (e) {
  if (scwin.saveFlag == "insert") {
    // 신규
    // 연월, 매출부서, 장기용차 비용상세
    if (ed_sellDeptCd.getValue() == "") {
      await $c.win.alert($p, "매출부서는 필수입력 항목입니다.");
      ed_sellDeptCd.focus();
      return;
    }

    // 연월, 매출부서, 장기용차 비용상세
    if (ica_ed_ym.getValue() == "") {
      await $c.win.alert($p, "년월은 필수입력 항목입니다.");
      ica_ed_ym.focus();
      return;
    }
    if (!(await $c.gus.cfValidate($p, [gr_longTermVehclManagementCostDetailList]))) {
      return;
    }
    if (ds_longTermVehclManagementCostDetailList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, "장기용차 비용상세을 입력하십시오.");
      return;
    }
    for (var i = 0; i < ds_longTermVehclManagementCostDetailList.getRowCount(); i++) {
      if (ds_longTermVehclManagementCostDetailList.getCellData(i, "itemNm") == "") {
        $c.gus.cfAlertMsg($p, "장기용차 비용상세의 " + (i + 1) + "번째 데이터에서 비용항목명은(는) 필수 입력 항목입니다.");
        return;
      }
    }
    ds_longTermVehclManagementCost.setCellData(0, "sellDeptCd", ed_sellDeptCd.getValue()); // 매출부서코드

    for (var i = 0; i < ds_longTermVehclManagementCostDetailList.getRowCount(); i++) {
      ds_longTermVehclManagementCostDetailList.setCellData(i, "eqCd", ds_longTermVehclDTOList.getCellData(ds_longTermVehclDTOList.getRowPosition(), "eqCd")); // 장비코드
      ds_longTermVehclManagementCostDetailList.setCellData(i, "vehclNo", ds_longTermVehclDTOList.getCellData(ds_longTermVehclDTOList.getRowPosition(), "vehclNo")); // 차량번호
      ds_longTermVehclManagementCostDetailList.setCellData(i, "yyMm", ica_ed_ym.getValue()); // 년월
    }
  } else if (scwin.saveFlag == "update") {
    // 수정
    // 연월, 장기용차 비용상세
    if (!(await $c.gus.cfValidate($p, [ica_ed_ym, gr_longTermVehclManagementCostDetailList]))) {
      return;
    }
    ds_longTermVehclManagementCost.setCellData(0, "sellDeptCd", ed_sellDeptCd.getValue()); // 매출부서코드

    var rowCount = ds_longTermVehclManagementCostDetailList.getRowCount();
    for (var i = 0; i < rowCount; i++) {
      if (ds_longTermVehclManagementCostDetailList.getCellData(i, "itemNm") == "") {
        $c.gus.cfAlertMsg($p, "장기용차 비용상세의 " + (i + 1) + "번째 데이터에서 비용항목명은(는) 필수 입력 항목입니다.");
        return;
      }
    }
    for (var i = 0; i < rowCount; i++) {
      var status = ds_longTermVehclManagementCostDetailList.getRowStatus(i);
      if (status != "D") {
        ds_longTermVehclManagementCostDetailList.modifyRowStatus(i, "C");
      }
    }
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    if (scwin.saveFlag == "insert") {
      scwin.rowFlag = "SAVE";
      $c.sbm.execute($p, sbm_save_insert);
    } else {
      scwin.rowFlag = "SAVE";
      $c.sbm.execute($p, sbm_save_update);
    }
  }
};
scwin.sbm_save_insert_submitdone = function () {
  scwin.rowPos = ds_longTermVehclDTOList.getRowPosition();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};
scwin.sbm_save_update_submitdone = function () {
  scwin.rowPos = ds_longTermVehclDTOList.getRowPosition();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};
scwin.sbm_save_delete_submitdone = function () {
  scwin.rowPos = ds_longTermVehclDTOList.getRowPosition();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};
scwin.getItemColumnId = function (itemNm) {
  switch (itemNm) {
    case "T/L사용료":
      return "tlAmt";
    case "고용보험료":
      return "empInsAmt";
    case "관리비":
      return "mngAmt";
    case "교통범칙금":
      return "trafficAmt";
    case "물류대행서비스수수료":
      return "logisticAmt";
    case "산재보험료":
      return "indusInsAmt";
    case "세무수탁료":
      return "taxTrustAmt";
    case "엔진보링료":
      return "engineAmt";
    case "위험물보험료":
      return "dangerInsAmt";
    case "자동차보험(대물변경)":
      return "carInsPropertyAmt";
    case "자동차보험(연령변경)":
      return "carInsAgeAmt";
    case "자동차보험(자차)":
      return "ownVehicleAmt";
    case "자동차보험료":
      return "carInsAmt";
    case "자동차세":
      return "carTaxAmt";
    case "적재물배상책임보험료":
      return "cargoInsAmt";
    case "정비타이어료":
      return "tireMaintenanceAmt";
    case "지입차대급금액":
      return "depositPayAmt";
    case "피복료":
      return "coatingAmt";
    case "환경개선부담금":
      return "envImproveAmt";
    default:
      return null;
  }
};
scwin.makePivotData = function () {
  var srcDs = ds_sellItemList;
  var tgtDs = ds_excelSellItemList;
  tgtDs.removeAll();
  var rowCnt = srcDs.getRowCount();
  var rowMap = {};
  var dynamicCols = ["vehclNo", "eqClssCd", "clntNm", "eqCd", "useYn"];
  for (var j = 0; j < dynamicCols.length; j++) {
    var dc = dynamicCols[j];
    var mainIdx = gr_longTermVehclContractDTOList.getColumnIndex(dc);
    gr_sellItemList.setColumnVisible(dc, gr_longTermVehclContractDTOList.getColumnVisible(mainIdx));
  }
  var lookupMap = {};
  for (var k = 0; k < ds_longTermVehclDTOList.getRowCount(); k++) {
    var vNo = ds_longTermVehclDTOList.getCellData(k, "vehclNo");
    lookupMap[vNo] = {
      eqCd: ds_longTermVehclDTOList.getCellData(k, "eqCd") || "",
      useYn: ds_longTermVehclDTOList.getCellData(k, "useYn") || ""
    };
  }
  for (var i = 0; i < rowCnt; i++) {
    var yy = srcDs.getCellData(i, "yy");
    var mm = srcDs.getCellData(i, "mm");
    var vehclNo = srcDs.getCellData(i, "vehclNo");
    var eqClssCd = srcDs.getCellData(i, "eqClssCd");
    var clntNm = srcDs.getCellData(i, "clntNm");
    var eqCd = srcDs.getCellData(i, "eqCd") || (lookupMap[vehclNo] ? lookupMap[vehclNo].eqCd : "");
    var useYn = srcDs.getCellData(i, "useYn") || (lookupMap[vehclNo] ? lookupMap[vehclNo].useYn : "");
    var sellLodeptCd = srcDs.getCellData(i, "sellLodeptCd");
    var sellSum = srcDs.getCellData(i, "sellSum");
    var rowKey = yy + "|" + mm + "|" + vehclNo + "|" + eqClssCd + "|" + clntNm + "|" + eqCd + "|" + useYn + "|" + sellLodeptCd + "|" + sellSum;
    var tgtRow;
    if (rowMap[rowKey] === undefined) {
      tgtRow = tgtDs.insertRow(tgtDs.getRowCount());
      tgtDs.setCellData(tgtRow, "yy", yy);
      tgtDs.setCellData(tgtRow, "mm", mm);
      tgtDs.setCellData(tgtRow, "vehclNo", vehclNo);
      tgtDs.setCellData(tgtRow, "eqClssCd", eqClssCd);
      tgtDs.setCellData(tgtRow, "clntNm", clntNm);
      tgtDs.setCellData(tgtRow, "eqCd", eqCd);
      tgtDs.setCellData(tgtRow, "useYn", useYn);
      tgtDs.setCellData(tgtRow, "sellLodeptCd", sellLodeptCd);
      tgtDs.setCellData(tgtRow, "sellSum", sellSum);
      rowMap[rowKey] = tgtRow;
    } else {
      tgtRow = rowMap[rowKey];
    }
    var itemNm = srcDs.getCellData(i, "itemNm");
    var amt = srcDs.getCellData(i, "amt");
    var colId = scwin.getItemColumnId(itemNm);
    if (colId) {
      tgtDs.setCellData(tgtRow, colId, amt);
    }
  }
};

//엑셀dw
scwin.excelDw = async function () {
  let yyyyMm = ica_ed_ym.getValue();
  let confirm = await $c.win.confirm($p, yyyyMm.substring(0, 4) + "년 " + yyyyMm.substring(4, 6) + "월 자료를 EXCEL로 다운로드 받으시겠습니까?");
  if (confirm) {
    dma_Query.set("yyyyMm", ica_ed_ym.getValue());
    dma_Query.set("lobranCd", ed_lobranCd.getValue());
    dma_Query.set("useYn", acb_lc_useYn.getValue());
    await $c.sbm.execute($p, sbm_retrieveSellItemData);
  }
};
scwin.sbm_retrieveSellItemData_submitdone = function () {
  let yyyyMm = ica_ed_ym.getValue();
  let fileName = yyyyMm + "_" + ed_lobranNm.getValue() + "_장기용차 관리비";
  let options = {
    fileName: fileName,
    sheetName: "장기용차관리비",
    removeHiddenColumn: true
  };
  if (ds_sellItemList.getRowCount() != 0) {
    scwin.makePivotData();
    $c.data.downloadGridViewExcel($p, gr_sellItemList, options, {});
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.gr_longTermVehclManagementCostDetailList_onchange = function (info) {
  debugger;
  if (info.rowIndex >= 0 && ds_longTermVehclManagementCostDetailList.getRowCount() >= info.rowIndex) {
    switch (info.colIndex) {
      case 0:
        scwin.f_ItemPopup('F', 'onviewchange');
        break;
      case 2:
        scwin.f_SetSubSum(); // 소계 계산
        break;
      default:
        break;
    }
  }
};
scwin.gr_longTermVehclManagementCostDetailList_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_ItemPopup('F', 'ontextimageclick');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'연월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_ym',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'연월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_lobranInfo',mandatoryCode:'true',maxlengthCode:'4',UpperFlagCode:'1',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_lobran_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z',validTitle:'점소'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량사용유무',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'acb_lc_useYn',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'0 : 미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1 : 사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',btnPlusYn:'Y',gridID:'gr_longTermVehclContractDTOList',gridDownFn:'scwin.excelDw'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_longTermVehclDTOList',style:'',autoFit:'allColumn',id:'gr_longTermVehclContractDTOList',class:'wq_gvw',visibleRowNum:'15','ev:oncellclick':'scwin.gr_longTermVehclContractDTOList_oncellclick',focusMode:'cell',focusMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'장비분류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column15',value:'수탁자 성명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'사용유무',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqClssCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'useYn',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량번호/수탁자 성명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_vehclNo',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_clntNm',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrNo',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상태',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_dcsnClsNm',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하불',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_tpchsFare',label:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:50px;'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'3'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width:280px;',codeId:'ed_sellDeptCd',nameId:'ed_sellDeptNm',id:'udc_logisDeptInfo',UpperFlagCode:'1',mandatoryCode:'true',maxlengthCode:'4',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_comCode_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_dept_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'매출액 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_subSum',placeholder:'',style:'width:250px;',maxlength:'13',allowChar:'0-9',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'height: 342px;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_longTermVehclManagementCostDetailList',id:'gr_longTermVehclManagementCostDetailList',style:'',visibleRowNum:'10',rowStatusVisible:'true',focusMode:'cell',focusMove:'true','ev:onviewchange':'scwin.gr_longTermVehclManagementCostDetailList_onchange','ev:ontextimageclick':'scwin.gr_longTermVehclManagementCostDetailList_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'항목코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'비용항목명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'금액',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'itemCd',inputType:'textImage',style:'',value:'',width:'100',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',allowChar:'0-9',maxLength:'13'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_longTermVehclManagementCostDetailList',rowAddFunction:'scwin.addRow',id:'udc_bottomGrdBtn',cancelFunction:'scwin.undo',rowDelFunction:'scwin.deleteRow'}}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gr_sellItemList',style:'width:500px; height:150px; display: none',dataList:'data:ds_excelSellItemList'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column25',value:'년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column24',value:'월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column23',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column22',value:'장비분류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column21',value:'수탁자성명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column20a',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column20b',value:'사용유무',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column20',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'column19',value:'매출액 합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'T/L사용료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'고용보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'관리비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'교통범칙금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'물류대행서비스수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'산재보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'세무수탁료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'엔진보링료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column10',value:'위험물보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'자동차보험(대물변경)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column8',value:'자동차보험(연령변경)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'자동차보험(자차)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column6',value:'자동차보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'자동차세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'적재물배상책임보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'정비타이어료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'지입차대급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'피복료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column0',value:'환경개선부담금',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-tlAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-empInsAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-mngAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-trafficAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-logisticAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-indusInsAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-taxTrustAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-engineAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-dangerInsAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-carInsPropertyAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-carInsAgeAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-ownVehicleAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-carInsAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-carTaxAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-cargoInsAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-tireMaintenanceAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-depositPayAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-coatingAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'h-envImproveAmt',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'yy',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqClssCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'useYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sellLodeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'sellSum',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'tlAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'empInsAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'mngAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'trafficAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'logisticAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'indusInsAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'taxTrustAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'engineAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'dangerInsAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'carInsPropertyAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'carInsAgeAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'ownVehicleAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'carInsAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'carTaxAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'cargoInsAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'tireMaintenanceAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'depositPayAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'coatingAmt',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'number',excelFormat:'#,##0',style:'',id:'envImproveAmt',value:'',displayMode:'label',textAlign:'right'}}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveTrusteeTariffItemInfo',codeId:'itemCd',validTitle:'',nameId:'itemNm',style:'width:%; height:px;display: none',id:'udc_comCode_grid'}}]}]}]})