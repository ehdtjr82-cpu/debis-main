/*amd /ui/ds/fs/consignmgnt/fs_401_01_04b.xml 68170 aea1b66125eeab7b8c5b5c8998e47eb944b0028ad33af9942010646195bb8b7d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_consignmentContractDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비;분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'수탁자 성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tpchsFare',name:'하불',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositAmt',name:'보증금누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgUpr',name:'대금급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'substRamt',name:'대급금잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntCnt',name:'회차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptCls',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_consignmentManagementCostDetailList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'itemNm',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyMm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_consignmentCostQueryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ym',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_consignmentContractDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ym',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclRegDd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptCls',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_consignmentManagementCost',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyMm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tpchsFare',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgUpr',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'substRamt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntCnt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDeptNm',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprCost',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saveFlag',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDcsnCd',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDcsnCdNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'subSum',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositInt',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgBilgUpr',name:'name42',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellItemData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yy',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSum',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_excelSellItemData',baseNode:'list',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yy',name:'년',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'직급구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mm',name:'월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'위수탁자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출물류부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSum',name:'매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_0',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_1',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_2',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_3',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_4',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_5',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_6',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_7',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_8',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_9',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_10',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_11',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_12',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_13',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_14',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_15',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_16',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_17',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_18',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_19',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_20',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_21',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_22',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_23',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_24',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_25',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_26',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_27',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_28',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'item_29',name:'',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveTrusteeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_consignmentCostQueryConditionDTO","key":"IN_DS1"},{"id":"ds_consignmentContractDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_consignmentContractDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_consignmentContractDTO","key":"IN_DS1"},{"id":"ds_consignmentManagementCost","key":"OUT_DS1"},{"id":"ds_consignmentManagementCostDetailList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_consignmentManagementCost","key":"OUT_DS1"},{"id":"ds_consignmentManagementCostDetailList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_insert',action:'/ds.fs.consignmgnt.consignmgntcadjm.RegistConsignmentCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_consignmentManagementCost","key":"IN_DS1"},{"id":"ds_consignmentManagementCostDetailList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_insert_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_update',action:'/ds.fs.consignmgnt.consignmgntcadjm.UpdateConsignmentCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_consignmentManagementCost","key":"IN_DS1"},{"id":"ds_consignmentManagementCostDetailList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_update_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save_delete',action:'/ds.fs.consignmgnt.consignmgntcadjm.DeleteConsignmentCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_consignmentManagementCost","key":"IN_DS1"},{"id":"ds_consignmentManagementCostDetailList","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_excelDn',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentSellItemListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_consignmentCostQueryConditionDTO","key":"IN_DS1"},{"id":"ds_sellItemData","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellItemData","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_excelDn_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.yyyyMM = scwin.strCurDate.substring(0, 6);
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자

scwin.saveFlag = ""; // 등록, 수정 저장 구분자
scwin.rowFlag = ""; // 신규, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.rowPos = 0; // 저장전 DataSet의 RowPosition을 저장 변수
scwin.lastClickedRow = 0;
scwin.skipCellClick = false;
scwin.dynamicItemCols = [];
scwin.onpageload = function () {
  gr_consignmentManagementCostDetailList.setDisabled("grid", true);
  scwin.f_SetDefaultData();
  $c.gus.cfDisableBtnOnly($p, [ed_deposit, ed_depositAmt, ed_depositInt, ed_deprCost, btn_Update, btn_Cancel, btn_Save, btn_Delete]);
  udc_bottomGrdBtn.setDisabled(true); //udc 비활성 
  udc_comCode_dept.setDisabled(true); //udc 비활성 

  if (scwin.userId == "811160") {
    clntNo_RPA.show();
  }
  ica_ed_ym.setValue(scwin.yyyyMM);
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.f_SetDefaultData = function () {
  ica_ed_ym.setValue(scwin.yyyyMM);
  acb_lc_posnClsCd.setValue('W');
  ica_ed_ym.focus();
};

//
scwin.decode = function (data) {
  return $c.gus.decode($p, data, "G", "지입", "W", "위수탁", "기타");
};

//점소 pop
scwin.udc_comCode_lobran_onclickEvent = function (e) {
  udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//점소pop callback
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
  console.log(ret);
};
scwin.udc_comCode_lobran_onblurCodeEvent = function (e) {
  if (ed_lobranCd.getValue() === "") {
    ed_lobranNm.setValue("");
  } else {
    udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};
scwin.udc_comCode_lobran_onviewchangeNameEvent = function (info) {
  if (ed_lobranNm.getValue() === "") {
    ed_lobranCd.setValue("");
  }
};

//매출부서 pop 
scwin.udc_comCode_dept_onclickEvent = function (e) {
  udc_comCode_dept.cfCommonPopUp(scwin.udc_comCode_dept_callBackFunc, ed_sellDeptCd.getValue(), ed_sellDeptNm.getValue(), "F", null, null, null, null, ",,,,,,1,," + scwin.isNullToBlank(scwin.lobranCd), null, null, null, null, null, null, null, null);
};
//pop callback
scwin.udc_comCode_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sellDeptCd, ed_sellDeptNm);
};
scwin.udc_comCode_dept_onblurCodeEvent = function (e) {
  if (ed_sellDeptCd.getValue() === "") {
    ed_sellDeptNm.setValue("");
  } else {
    udc_comCode_dept.cfCommonPopUp(scwin.udc_comCode_dept_callBackFunc, ed_sellDeptCd.getValue(), ed_sellDeptNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};
scwin.isNullToBlank = function (text) {
  if (text == null || text == undefined || text == NaN || text == "") {
    return "";
  } else {
    return text;
  }
};
scwin.udc_comCode_dept_onviewchangeNameEvent = function (info) {
  if (ed_sellDeptNm.getValue() === "") {
    ed_sellDeptCd.setValue("");
  }
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ica_ed_ym, ed_lobranCd]))) {
    return;
  }

  //dataMap set..
  dma_consignmentCostQueryConditionDTO.set("ym", ica_ed_ym.getValue());
  dma_consignmentCostQueryConditionDTO.set("branCd", ed_lobranCd.getValue());
  dma_consignmentCostQueryConditionDTO.set("posnClsCd", acb_lc_posnClsCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_consignmentContractDTOList.getRowCount();
  if (nCnt > 0) {
    gr_consignmentContractDTOList.setFocusedCell(0, 0);
    total.setValue(nCnt);
    gr_consignmentManagementCostDetailList.setCellReadOnly(ds_consignmentManagementCostDetailList.getRowPosition(), "itemNm", true); //grid column edit 가능
    gr_consignmentManagementCostDetailList.setCellReadOnly(ds_consignmentManagementCostDetailList.getRowPosition(), 'amt', true); // 금액

    // 위수탁비용조회  2009.03.17
    scwin.f_ConsignmgntClear();
    lay_vehclNo.setValue(ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "vehclNo")); // 차량번호
    lay_clntNm.setValue(ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "clntNm")); // 위수탁자 성명

    scwin.f_RetrieveConsignmentCost(ds_consignmentContractDTOList.getRowPosition()); // 위수탁비용조회
  } else {
    scwin.f_ConsignmgntClear();
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다    }
  }
};
scwin.f_ConsignmgntClear = function () {
  lay_vehclNo.setValue(""); // 차량번호
  lay_clntNm.setValue(""); // 위수탁자

  lay_tpchsFare.setValue(""); // 하불임
  lay_dcsnClsNm.setValue(""); // 매입확정코드명
  ed_deposit.setValue(""); // 보증금
  ed_depositAmt.setValue(""); // 총계정원장 누계(수입보증금 일반)
  ed_subSum.setValue(""); // 소계
  ed_depositInt.setValue(""); // 보증금이자
  ed_deprCost.setValue(""); // 감가상각비

  //ds_consignmentManagementCost.removeAll();
  //ds_consignmentManagementCostDetailList.removeAll();  // 위수탁비용상세조회, 위수탁요율조회
};
scwin.f_RetrieveConsignmentCost = function (row) {
  dma_consignmentContractDTO.set("ym", ica_ed_ym.getValue());
  dma_consignmentContractDTO.set("branCd", ed_lobranCd.getValue());
  dma_consignmentContractDTO.set("ctrtNo", ds_consignmentContractDTOList.getCellData(row, "ctrtNo"));
  dma_consignmentContractDTO.set("eqCd", ds_consignmentContractDTOList.getCellData(row, "eqCd"));
  dma_consignmentContractDTO.set("vehclRegDd", ds_consignmentContractDTOList.getCellData(row, "acqDt"));
  dma_consignmentContractDTO.set("adptCls", ds_consignmentContractDTOList.getCellData(row, "adptCls"));
  dma_consignmentContractDTO.set("posnClsCd", ds_consignmentContractDTOList.getCellData(row, "posnClsCd"));
  dma_consignmentContractDTO.set("vehclNo", ds_consignmentContractDTOList.getCellData(row, "vehclNo"));
  dma_consignmentContractDTO.set("clntNo", ds_consignmentContractDTOList.getCellData(row, "clntNo"));
  $c.sbm.execute($p, sbm_retrieve_detail);
};

//callback2
scwin.sbm_retrieve_detail_submitdone = function () {
  /*ds_consignmentManagementCost 의 value set처리*/
  ds_consignmentManagementCost.setCellData(0, "ctrtNo", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "ctrtNo")); // 계약번호
  ds_consignmentManagementCost.setCellData(0, "eqCd", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "eqCd")); // 장비코드
  ds_consignmentManagementCost.setCellData(0, "yyMm", ica_ed_ym.getValue()); // 년월
  ds_consignmentManagementCost.setCellData(0, "vehclNo", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "vehclNo")); // 차량번호
  ds_consignmentManagementCost.setCellData(0, "clntNo", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "clntNo")); // 거래처번호

  lay_tpchsFare.setValue($c.gus.cfInsertComma($p, ds_consignmentManagementCost.getCellData(0, "tpchsFare"))); // 하불임
  lay_dcsnClsNm.setValue(ds_consignmentManagementCost.getCellData(0, "dcsnClsNm")); // 확정구분명
  lay_odrNo.setValue(ds_consignmentManagementCost.getCellData(0, "odrNo"));
  ed_deposit.setValue(ds_consignmentManagementCost.getCellData(0, "deposit")); // 보증금
  ed_depositAmt.setValue(ds_consignmentManagementCost.getCellData(0, "depositAmt")); // 수입보증금-일반
  ed_bilgUpr.setValue(ds_consignmentManagementCost.getCellData(0, "bilgUpr")); // 대급금
  ed_substRamt.setValue(ds_consignmentManagementCost.getCellData(0, "substRamt")); // 대급금 잔액
  ed_pmntCnt.setValue(ds_consignmentManagementCost.getCellData(0, "pmntCnt")); // 납입횟수

  // 지입차에 따른 Edit 조건
  if (ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "posnClsCd") == "G") {
    $c.gus.cfEnableBtnOnly($p, [ed_bilgUpr]);
    $c.gus.cfDisableBtnOnly($p, [ed_substRamt]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [ed_bilgUpr, ed_substRamt]);
  }
  ed_sellDeptCd.setValue(ds_consignmentManagementCost.getCellData(0, "sellDeptCd")); // 매출부서코드
  ed_sellDeptNm.setValue(ds_consignmentManagementCost.getCellData(0, "sellDeptNm")); // 매출부서명		

  // 수입보증금-일반(총계정원장)금액으로 보증금 이자 계산  2011.01.20  	 

  if (ds_consignmentManagementCost.getCellData(0, "depositAmt") > 3000000) {
    ed_depositInt.setValue(ds_consignmentManagementCost.getCellData(0, "depositAmt") * 0.04) / 12;
  } else {
    ed_depositInt.setValue(0);
  }
  ed_deprCost.setValue(ds_consignmentManagementCost.getCellData(0, "deprCost")); // 감가상각비
  scwin.saveFlag = ds_consignmentManagementCost.getCellData(0, "saveFlag"); // 저장구분자

  if (scwin.saveFlag == "insert") {
    gr_consignmentManagementCostDetailList.setDisabled("grid", false);
    $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Delete]);
    $c.gus.cfEnableObjects($p, [ed_deposit, ed_depositInt, ed_deprCost, btn_Cancel, btn_Save]);
    udc_bottomGrdBtn.setDisabled(false); //udc 활성 
    udc_comCode_dept.setDisabled(false); //udc 활성 
  } else if (scwin.saveFlag == "update") {
    gr_consignmentManagementCostDetailList.setDisabled("grid", true);
    $c.gus.cfDisableBtnOnly($p, [ed_deposit, ed_depositInt, ed_deprCost, btn_Cancel, btn_Save]);
    $c.gus.cfEnableObjects($p, [btn_Update, btn_Delete]);
    udc_bottomGrdBtn.setDisabled(true); //udc 비활성 
    udc_comCode_dept.setDisabled(true); //udc 비활성 
  }
  let nCnt = ds_consignmentManagementCostDetailList.getRowCount();
  if (nCnt > 0) {
    gr_consignmentManagementCostDetailList.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  }
  scwin.f_SetSubSum(); //소계계산
};
scwin.f_SetSubSum = function () {
  // 소계 = 감가상각비 - 보증금이자 + 관리비상세항목 합계
  let subSum = 0;
  let totSum = 0;
  let detailSum = 0;
  var rowCnt = ds_consignmentManagementCostDetailList.getRowCount();
  for (var i = 0; i < rowCnt; i++) {
    if ("D" != ds_consignmentManagementCostDetailList.getRowStatus(i)) {
      detailSum += Number(ds_consignmentManagementCostDetailList.getCellData(i, "amt"));
    }
  }
  subSum = parseInt(ed_deprCost.getValue()) - parseInt(ed_depositInt.getValue()) + detailSum;
  ds_consignmentManagementCost.setCellData(0, "subSum", subSum);
  totSum = subSum + parseInt(ed_bilgUpr.getValue());
  ed_totSum.setValue(totSum);
  ed_subSum.setValue(subSum);
};

//그리드 컬럼의 합계값
scwin.getColumnSum = function (dataSetObj, colId) {
  var sum = 0;
  for (var row = 0; row < dataSetObj.getRowCount(); row++) {
    sum += parseInt(dataSetObj.getCellData(row, colId)) || 0;
  }
  return sum;
};

//grid main click..
scwin.gr_consignmentContractDTOList_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (scwin.skipCellClick) return;
  var prevRow = scwin.lastClickedRow;
  if (ds_consignmentManagementCostDetailList.getModifiedIndex().length > 0 && !btn_Save.getDisabled()) {
    if (rowIndex === prevRow) {
      scwin.resetDetailList();
    } else {
      var confirmResult = await $c.win.confirm($p, MSG_CM_CRM_005);
      scwin.resetDetailList();
      if (!confirmResult) {
        scwin.skipCellClick = true;
        gr_consignmentContractDTOList.setFocusedCell(prevRow, 0);
        scwin.skipCellClick = false;
        scwin.f_ConsignmgntClear();
        lay_vehclNo.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "vehclNo"));
        lay_clntNm.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "clntNm"));
        scwin.f_RetrieveConsignmentCost(rowIndex);
        return;
      }
    }
  }
  scwin.f_ConsignmgntClear();
  lay_vehclNo.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "vehclNo")); // 차량번호
  lay_clntNm.setValue(ds_consignmentContractDTOList.getCellData(rowIndex, "clntNm")); // 위수탁자 성명

  scwin.f_RetrieveConsignmentCost(rowIndex); // 위수탁비용조회

  scwin.lastClickedRow = rowIndex;
};
scwin.resetDetailList = function () {
  var modIdx = ds_consignmentManagementCostDetailList.getModifiedIndex();
  for (var i = modIdx.length - 1; i >= 0; i--) {
    if (ds_consignmentManagementCostDetailList.getRowStatus(modIdx[i]) === "C") {
      ds_consignmentManagementCostDetailList.removeRow(modIdx[i]);
    }
  }
  ds_consignmentManagementCostDetailList.undoAll();
};

//행추가
scwin.addRow = function () {
  let rowIndex = ds_consignmentManagementCostDetailList.getRowCount();
  ds_consignmentManagementCostDetailList.insertRow(rowIndex);
  gr_consignmentManagementCostDetailList.setFocusedCell(rowIndex, "itemNm");
  ds_consignmentManagementCostDetailList.setCellData(rowIndex, "ctrtNo", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "ctrtNo")); // 계약번호
  ds_consignmentManagementCostDetailList.setCellData(rowIndex, "eqCd", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "eqCd")); // 장비코드
  ds_consignmentManagementCostDetailList.setCellData(rowIndex, "yyMm", ica_ed_ym.getValue()); // 년월
  ds_consignmentManagementCostDetailList.setCellData(rowIndex, "itemCd", "99");
};

//행삭제
scwin.delRow = function () {
  if (ds_consignmentManagementCostDetailList.getRowCount() == 0) {
    return;
  }
  var rowIdx = gr_consignmentManagementCostDetailList.getFocusedRowIndex();
  if (rowIdx < 0) return;
  var itemCd = ds_consignmentManagementCostDetailList.getCellData(rowIdx, "itemCd");
  var itemNm = ds_consignmentManagementCostDetailList.getCellData(rowIdx, "itemNm");
  if (itemCd != "99") {
    $c.gus.cfAlertMsg($p, itemNm + " 항목은(는) 삭제할 수 없습니다.");
    return;
  }
  var status = ds_consignmentManagementCostDetailList.getRowStatus(rowIdx);
  if (status === "C") {
    ds_consignmentManagementCostDetailList.removeRow(rowIdx);
  } else {
    ds_consignmentManagementCostDetailList.deleteRow(rowIdx);
    gr_consignmentManagementCostDetailList.setFocusedCell(rowIdx, 0);
  }
  scwin.f_SetSubSum();
};
scwin.undo = function () {
  $c.data.undoRow($p, ds_consignmentManagementCostDetailList, "Y");
  scwin.f_SetSubSum(); // 소계 계산
};

//저장
scwin.btn_Save_onclick = async function (e) {
  let v_validate = await $c.gus.cfValidate($p, [ica_ed_ym, ed_deposit, ed_sellDeptCd, ed_depositInt, ed_deprCost]);
  if (!v_validate) return;
  if (scwin.saveFlag == "insert") {
    // 신규

    if (ds_consignmentManagementCostDetailList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, "위수탁비용상세을 입력하십시오.");
      return;
    }
    for (var i = 0; i < ds_consignmentManagementCostDetailList.getRowCount(); i++) {
      if (ds_consignmentManagementCostDetailList.getCellData(i, "itemNm") == "") {
        $c.gus.cfAlertMsg($p, "위수탁비용상세의 " + (i + 1) + "번째 데이터에서 항목은 필수 입력 항목입니다.");
        return;
      }
    }
    ds_consignmentManagementCost.setCellData(0, "deposit", ed_deposit.getValue()); // 보증금
    ds_consignmentManagementCost.setCellData(0, "sellDeptCd", ed_sellDeptCd.getValue()); // 매출부서코드
    ds_consignmentManagementCost.setCellData(0, "depositInt", ed_depositInt.getValue()); // 보증금이자(비용)
    ds_consignmentManagementCost.setCellData(0, "deprCost", ed_deprCost.getValue()); // 감가상각비(수익)
    ds_consignmentManagementCost.setCellData(0, "bilgUpr", ed_bilgUpr.getValue()); // 대급금
    ds_consignmentManagementCost.setCellData(0, "substRamt", ed_substRamt.getValue()); // 대급금 잔액

    for (var i = 0; i < ds_consignmentManagementCostDetailList.getRowCount(); i++) {
      ds_consignmentManagementCostDetailList.setCellData(i, "ctrtNo", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "ctrtNo")); // 계약번호
      ds_consignmentManagementCostDetailList.setCellData(i, "eqCd", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "eqCd")); // 장비코드
      ds_consignmentManagementCostDetailList.setCellData(i, "vehclNo", ds_consignmentContractDTOList.getCellData(ds_consignmentContractDTOList.getRowPosition(), "vehclNo")); // 차량번호
      ds_consignmentManagementCostDetailList.setCellData(i, "yyMm", ica_ed_ym.getValue()); // 년월
      ds_consignmentManagementCostDetailList.modifyRowStatus(i, "C"); //상태값 변경
    }
    let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
    if (confirm) {
      scwin.rowFlag = "SAVE";
      scwin.rowPos = ds_consignmentContractDTOList.getRowPosition(); // 저장 전의 위치 저장
      $c.sbm.execute($p, sbm_save_insert);
    }
  } else if (scwin.saveFlag == "update") {
    // 수정
    // 연월, 위수탁비용상세
    if (!$c.gus.cfValidate($p, [ica_ed_ym, ed_deposit, ed_depositInt, ed_deprCost])) {
      return;
    }
    ds_consignmentManagementCost.setCellData(0, "deposit", ed_deposit.getValue()); // 보증금
    ds_consignmentManagementCost.setCellData(0, "sellDeptCd", ed_sellDeptCd.getValue()); // 매출부서코드
    ds_consignmentManagementCost.setCellData(0, "depositInt", ed_depositInt.getValue()); // 보증금이자(비용)
    ds_consignmentManagementCost.setCellData(0, "deprCost", ed_deprCost.getValue()); // 감가상각비(수익)
    ds_consignmentManagementCost.setCellData(0, "bilgUpr", ed_bilgUpr.getValue()); // 대급금
    ds_consignmentManagementCost.setCellData(0, "substRamt", ed_substRamt.getValue()); // 대급금 잔액

    for (var i = 0; i < ds_consignmentManagementCostDetailList.getRowCount(); i++) {
      if (ds_consignmentManagementCostDetailList.getCellData(i, "itemNm") == "") {
        $c.gus.cfAlertMsg($p, "위수탁비용상세의 " + (i + 1) + "번째 데이터에서 항목은 필수 입력 항목입니다.");
        return;
      }
    }
    for (var i = 0; i < ds_consignmentManagementCostDetailList.getRowCount(); i++) {
      var status = ds_consignmentManagementCostDetailList.getRowStatus(i);
      if (status != "D") {
        ds_consignmentManagementCostDetailList.modifyRowStatus(i, "C");
      }
    }
    let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
    if (confirm) {
      scwin.rowFlag = "SAVE";
      scwin.rowPos = ds_consignmentContractDTOList.getRowPosition(); // 저장 전의 위치 저장
      $c.sbm.execute($p, sbm_save_update);
    }
  }
};
scwin.sbm_save_insert_submitdone = function () {
  scwin.rowPos = ds_consignmentContractDTOList.getRowPosition();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};
scwin.sbm_save_update_submitdone = function () {
  scwin.rowPos = ds_consignmentContractDTOList.getRowPosition();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};
scwin.sbm_save_delete_submitdone = function () {
  scwin.rowPos = ds_consignmentContractDTOList.getRowPosition();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};

//매출액 계산(대급금 수정시)
scwin.ed_bilgUpr_onblur = function (e) {
  if (ed_bilgUpr.getValue() == "") {
    ed_bilgUpr.setValue(0);
  }
  if (parseFloat(ed_bilgUpr.getValue()) > parseFloat(ed_substRamt.getValue())) {
    ed_bilgUpr.setValue(ed_substRamt.getValue());
  }
  scwin.f_SetSubSum();
};

//매출액 계산(보증금이자(비용) 수정시)
scwin.ed_depositInt_onblur = function (e) {
  if (ed_depositInt.getValue() == "") {
    ed_depositInt.setValue(0);
  }
  scwin.f_SetSubSum();
};

//매출액 계산(감가상각비(수익) 수정시)
scwin.ed_deprCost_onblur = function (e) {
  if (ed_deprCost.getValue() == "") {
    ed_deprCost.setValue(0);
  }
  scwin.f_SetSubSum();
};

//grid2 금액변경시 소계 계산
scwin.gr_consignmentManagementCostDetailList_oneditend = function (row, col, value, oldValue) {
  var colId = gr_consignmentManagementCostDetailList.getColumnID(col);
  if (colId == "amt") {
    ds_consignmentManagementCostDetailList.setCellData(row, "amt", value);
    scwin.f_SetSubSum(); // 소계 계산
  }
};

//취소btn
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_RetrieveConsignmentCost(ds_consignmentContractDTOList.getRowPosition());
};

//수정 btn
scwin.btn_Update_onclick = function (e) {
  if (ds_consignmentContractDTOList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "수정할 목록이 존재하지 않습니다.");
    return;
  }

  // 확정구분이 미확인(1)이 아닌 상태는 수정불가
  let dcsnClsCd = ds_consignmentManagementCost.getCellData(0, "dcsnClsCd");
  if (dcsnClsCd != "1") {
    $c.gus.cfAlertMsg($p, "상태가 미확인인 경우만 수정가능합니다.");
    return;
  }
  $c.gus.cfEnableBtnOnly($p, [ed_deposit, ed_depositInt, ed_deprCost, udc_bottomGrdBtn, btn_Cancel, btn_Save]);
  gr_consignmentManagementCostDetailList.setDisabled("grid", false);
};

//삭제 btn
scwin.btn_Delete_onclick = async function (e) {
  if (ds_consignmentContractDTOList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "삭제할 목록이 존재하지 않습니다.");
    return;
  }

  // 확정구분이 미확인(1)이 아닌 상태는 삭제불가
  let dcsnClsCd = ds_consignmentManagementCost.getCellData(0, "dcsnClsCd");
  if (dcsnClsCd != "1") {
    $c.gus.cfAlertMsg($p, "상태가 미확인인 경우만 삭제 가능합니다.");
    return;
  }
  let confirm = await $c.win.confirm($p, "삭제하시겠습니까?");
  if (confirm) {
    if (!$c.gus.cfValidate($p, [ica_ed_ym, ed_deposit, ed_depositInt, ed_deprCost, gr_consignmentManagementCostDetailList])) {
      return;
    }
    scwin.rowPos = ds_consignmentContractDTOList.getRowPosition(); // 저장 전의 위치 저장
    $c.sbm.execute($p, sbm_save_delete);
  }
};
scwin.f_sellItemData = async function () {
  let yyyyMm = ica_ed_ym.getValue();
  let confirm = await $c.win.confirm($p, yyyyMm.substring(0, 4) + "년 " + yyyyMm.substring(4, 6) + "월 자료를 EXCEL로 다운로드 받으시겠습니까?");
  if (confirm) {
    dma_consignmentCostQueryConditionDTO.set("ym", ica_ed_ym.getValue());
    dma_consignmentCostQueryConditionDTO.set("branCd", ed_lobranCd.getValue());
    dma_consignmentCostQueryConditionDTO.set("posnClsCd", acb_lc_posnClsCd.getValue());
    $c.sbm.execute($p, sbm_excelDn);
  }
};
scwin.sbm_excelDn_submitdone = function () {
  if (ds_sellItemData.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  scwin.makePivotData();
  let yyyyMm = ica_ed_ym.getValue();
  let fileName = yyyyMm + "_" + ed_lobranNm.getValue() + "_위수탁 관리비";
  let options = {
    fileName: fileName,
    sheetName: "위수탁관리비",
    removeHiddenColumn: true
  };
  $c.data.downloadGridViewExcel($p, gr_sellItemData, options, {});
};
scwin.makePivotData = function () {
  var srcDs = ds_sellItemData;
  var tgtDs = ds_excelSellItemData;
  var maxItemCols = 30; // 변동 컬럼
  var fixedColCount = 8; // 고정 8컬럼

  var itemNameSet = {};
  for (var i = 0; i < srcDs.getRowCount(); i++) {
    var nm = srcDs.getCellData(i, "itemNm");
    if (nm && nm !== "") itemNameSet[nm] = true;
  }
  var itemNames = Object.keys(itemNameSet).sort();
  for (var d = 0; d < maxItemCols; d++) {
    gr_sellItemData.setColumnVisible(fixedColCount + d, false);
  }
  for (var j = 0; j < itemNames.length && j < maxItemCols; j++) {
    var headerId = gr_sellItemData.getHeaderID(fixedColCount + j);
    gr_sellItemData.setHeaderValue(headerId, itemNames[j]);
    gr_sellItemData.setColumnVisible(fixedColCount + j, true);
  }
  tgtDs.removeAll();
  var rowMap = {};
  for (var i = 0; i < srcDs.getRowCount(); i++) {
    var yy = srcDs.getCellData(i, "yy");
    var posnClsCd = srcDs.getCellData(i, "posnClsCd");
    var mm = srcDs.getCellData(i, "mm");
    var vehclNo = srcDs.getCellData(i, "vehclNo");
    var eqClssCd = srcDs.getCellData(i, "eqClssCd");
    var clntNm = srcDs.getCellData(i, "clntNm");
    var sellLodeptCd = srcDs.getCellData(i, "sellLodeptCd");
    var sellSum = srcDs.getCellData(i, "sellSum");
    var rowKey = [yy, posnClsCd, mm, vehclNo, eqClssCd, clntNm, sellLodeptCd, sellSum].join("|");
    var tgtRow;
    if (rowMap[rowKey] === undefined) {
      tgtRow = tgtDs.insertRow(tgtDs.getRowCount());
      tgtDs.setCellData(tgtRow, "yy", yy);
      var posnNm = posnClsCd === "G" ? "지입" : posnClsCd === "W" ? "위수탁" : "기타";
      tgtDs.setCellData(tgtRow, "posnClsCd", posnNm);
      tgtDs.setCellData(tgtRow, "mm", mm);
      tgtDs.setCellData(tgtRow, "vehclNo", vehclNo);
      tgtDs.setCellData(tgtRow, "eqClssCd", eqClssCd);
      tgtDs.setCellData(tgtRow, "clntNm", clntNm);
      tgtDs.setCellData(tgtRow, "sellLodeptCd", sellLodeptCd);
      tgtDs.setCellData(tgtRow, "sellSum", sellSum);
      rowMap[rowKey] = tgtRow;
    } else {
      tgtRow = rowMap[rowKey];
    }
    var itemNm = srcDs.getCellData(i, "itemNm");
    var amt = srcDs.getCellData(i, "amt");
    var itemIdx = itemNames.indexOf(itemNm);
    if (itemIdx >= 0) {
      tgtDs.setCellData(tgtRow, "item_" + itemIdx, amt);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'연월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_ym',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM',mandatory:'true',title:'연월',editType:'select'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_comCode_lobran',mandatoryCode:'true',maxlengthCode:'4',UpperFlagCode:'1',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_lobran_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z',validTitle:'점소'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'Y',gridID:'gr_consignmentContractDTOList',gridDownFn:'scwin.f_sellItemData',btnPlusYn:'N',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_consignmentContractDTOList',id:'gr_consignmentContractDTOList',style:'',visibleRowNum:'15',readOnly:'true',focusMode:'row',focusMove:'true','ev:oncellclick':'scwin.gr_consignmentContractDTOList_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차량번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'장비분류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'수탁자 성명',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'posnClsCd',value:'',displayMode:'label',displayFormatter:'scwin.decode'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqClssCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',textAlign:'left',width:'150'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:180px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호/수탁자 성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_vehclNo',label:'',style:'',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_clntNm',label:'',style:'',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrNo',label:'',style:'',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_dcsnClsNm',label:'',style:'',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하불',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lay_tpchsFare',label:'',style:'',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보증금/누계(총계정원장기준',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_deposit',placeholder:'',style:'width:123px;',maxlength:'13',mandatory:'true',allowChar:'0-9',ref:'',title:'보증금',dataType:'number',displayFormat:'#,###'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_depositAmt',placeholder:'',style:'width:123px;',maxlength:'13',ref:'',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대급금/잔액',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:123px;',id:'ed_bilgUpr',placeholder:'',class:'tar',mandatory:'true',maxlength:'13',allowChar:'0-9',ref:'',dataType:'number',displayFormat:'#,###','ev:onblur':'scwin.ed_bilgUpr_onblur'}},{T:1,N:'xf:input',A:{style:'width:123px;',id:'ed_substRamt',placeholder:'',class:'tar',maxlength:'13',allowChar:'0-9',ref:'',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'총',class:''}},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_pmntCnt',placeholder:'',class:'tar',maxlength:'13'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'회 납입',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'5'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width:250px;',codeId:'ed_sellDeptCd',nameId:'ed_sellDeptNm',mandatoryCode:'true',UpperFlagCode:'1',id:'udc_comCode_dept',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_comCode_dept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_dept_onviewchangeNameEvent',maxlengthCode:'4',allowCharCode:'0-9a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'매출액 합계/ 총 합계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_subSum',placeholder:'',style:'width:123px;',maxlength:'13',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'/',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totSum',placeholder:'',style:'width:123px;',maxlength:'13',readOnly:'true',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보증금이자(비용)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'-',ref:'',style:'',userData2:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_depositInt',placeholder:'',style:'width:123px;',mandatory:'true',maxlength:'13','ev:onblur':'scwin.ed_depositInt_onblur',title:'보증금이자(비용)',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'감가상각비(수익)',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_deprCost',placeholder:'',style:'width:123px;',mandatory:'true',maxlength:'13','ev:onblur':'scwin.ed_deprCost_onblur',title:'감가상각비(수익)',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'height: 262px;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_consignmentManagementCostDetailList',id:'gr_consignmentManagementCostDetailList',style:'',visibleRowNum:'7',focusMode:'row',focusMove:'true','ev:oneditend':'scwin.gr_consignmentManagementCostDetailList_oneditend',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column1',inputType:'text',style:'',value:'항목',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column15',inputType:'text',style:'',value:'금액',width:'300'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'itemNm',inputType:'text',style:'',value:'',width:'150',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',textAlign:'left',value:'',width:'300',dataType:'number',displayFormat:'#,##0',mandatory:'true',maxLength:'13'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_consignmentManagementCostDetailList',rowAddFunction:'scwin.addRow',id:'udc_bottomGrdBtn',rowDelFunction:'scwin.delRow',cancelFunction:'scwin.undo'}}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]},{T:1,N:'xf:input',A:{id:'clntNo_RPA',style:'width:144px; height:21px;display: none'}},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gr_sellItemData',style:'width:500px; height:150px;display: none',dataList:'data:ds_excelSellItemData'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption_sell',value:''}},{T:1,N:'w2:header',A:{style:'',id:'header_sell'},E:[{T:1,N:'w2:row',A:{style:'',id:'row_sell_h1'},E:[{T:1,N:'w2:column',A:{width:'50',rowSpan:'2',inputType:'text',style:'',id:'h_yy',value:'년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',rowSpan:'2',inputType:'text',style:'',id:'h_mm',value:'월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'h_posnClsCd',value:'소유구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',rowSpan:'2',inputType:'text',style:'',id:'h_vehclNo',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',rowSpan:'2',inputType:'text',style:'',id:'h_eqClssCd',value:'장비분류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',rowSpan:'2',inputType:'text',style:'',id:'h_clntNm',value:'수탁자성명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',rowSpan:'2',inputType:'text',style:'',id:'h_sellLodeptCd',value:'매출부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',rowSpan:'2',inputType:'text',style:'',id:'h_sellSum',value:'매출액 합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_0',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h_item_29',value:'',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row_sell_h2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_0',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_1',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_2',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_3',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_4',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_5',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_6',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_7',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_8',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_9',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_10',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_11',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_12',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_13',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_14',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_15',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_16',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_17',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_18',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_19',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_20',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_21',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_22',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_23',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_24',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_25',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_26',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_27',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_28',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'h2_item_29',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody_sell'},E:[{T:1,N:'w2:row',A:{style:'',id:'row_sell_b'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'yy',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'mm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'posnClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqClssCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNm',textAlign:'left',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'sellLodeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'sellSum',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_0',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_12',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'number',excelFormat:'#,##0',textAlign:'right',style:'',id:'item_29',value:'',displayMode:'label'}}]}]}]}]}]}]}]})