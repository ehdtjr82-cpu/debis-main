/*amd /ui/il/sales/seta/ta_113_01_01b.xml 41021 b9cef7e9b548ffad07ee60ecd4e84a55d10e2301ffd7df1171b381c39d598e6c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transtrfList',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_transtrfList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'Currow',name:'Seq',dataType:''}},{T:1,N:'w2:column',A:{id:'sellBuyTyp',name:'Sell;Buy',dataType:''}},{T:1,N:'w2:column',A:{id:'clntNo',name:'Code',dataType:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transTyp',name:'Type',dataType:''}},{T:1,N:'w2:column',A:{id:'transClntNo',name:'Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transClntNm',name:'Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:''}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCondCd',name:'운송조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'Code',dataType:''}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'Name',dataType:''}},{T:1,N:'w2:column',A:{id:'wtBreak',name:'WT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbmBreak',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carCondCd',name:'Car Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullYn',name:'Full',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRate',name:'Rate',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blank',name:'End',dataType:''}},{T:1,N:'w2:column',A:{id:'transRateSeq',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transTyp',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transClntNm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictNm',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCondCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellBuyTyp',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.sales.seta.RetrieveLclTransTariffDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oGDS_view_cond","key":"IN_DS1"},{"id":"ds_transtrfList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_transtrfList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.sales.seta.SaveLclTransTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_transtrfList","key":"IN_DS1"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hid_tv_index = "";
scwin.MSG_LO_WRN_001 = "적용일자를 입력한 후 신규 운송요율을 생성하십시오.";
scwin.MSG_LO_CRM_001 = "변경된 고시요율이 존재합니다. \n저장하지 않은 데이타는 삭제됩니다. \n계속 진행하시겠습니까?";
scwin.MSG_LO_ERR_001 = "신규버튼을 클릭하셔서 출발지와 기점을 생성하십시오.";
scwin.MSG_IL_ERR_001 = "신규버튼을 클릭하셔서 거래처, 운송사, 기점을 생성하십시오.";
scwin.MSG_LO_ERR_002 = "@행, @칼럼의 코드가 일치하지 않습니다.";
scwin.MSG_LO_INF_001 = "기본항구요율을 선택하십시오";
scwin.MSG_LO_INF_002 = "저장되지 않은 데이타가 있습니다. 저장후 별도 항구요율을 등록하시기 바랍니다.";
scwin.pos_rowSts = 0;
scwin.onpageload = function () {
  //공통코드
  const codeOptions = [{
    grpCd: "SD101",
    compID: "lc_transCondCd,gr_transtrfList:transCondCd"
  },
  //운송조건
  {
    grpCd: "IL007",
    compID: "gr_transtrfList:carCondCd"
  } //CarType
  ];
  console.log(codeOptions);
  $c.data.setCommonCode($p, codeOptions);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ds_transtrfList.removeAll();
  //scwin.f_defaultValue(); //없음
};

//거래처pop
scwin.udc_ilcomCode_clnt_onclickEvent = function (e) {
  udc_ilcomCode_clnt.ilCommonPopUp(scwin.udc_ilcomCode_clnt_callBackFunc, cnd_txt_clntNo.getValue(), cnd_txt_clntNm.getValue(), "T", "2", "거래처코드,거래처명", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "거래처,거래처코드,거래처명", null);
};
//거래처pop callback
scwin.udc_ilcomCode_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_txt_clntNo, cnd_txt_clntNm);
  console.log(ret);
};
scwin.udc_ilcomCode_clnt_onblurCodeEvent = function (e) {
  if (cnd_txt_clntNo.getValue() === "") {
    cnd_txt_clntNm.setValue("");
  } else {
    udc_ilcomCode_clnt.ilCommonPopUp(scwin.udc_ilcomCode_clnt_callBackFunc, cnd_txt_clntNo.getValue(), cnd_txt_clntNm.getValue(), "T", "2", "거래처코드,거래처명", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "거래처,거래처코드,거래처명", null);
  }
};
scwin.udc_ilcomCode_clnt_onviewchangeNameEvent = function (info) {
  if (cnd_txt_clntNm.getValue() === "") {
    cnd_txt_clntNo.setValue("");
  }
};

//운송사pop
scwin.udc_ilcomCdoe_trans_onclickEvent = function (e) {
  let sqlId = "";
  if (cnd_lc_transTyp.getValue() == "2") {
    //normal
    sqlId = 'retrieveEngClntInfo';
    udc_ilcomCdoe_trans.setSelectId(sqlId);
    udc_ilcomCdoe_trans.ilCommonPopUp(scwin.udc_ilcomCdoe_trans_callBackFunc, cnd_txt_transClntNo.getValue(), cnd_txt_transClntNm.getValue(), "T", "2", "Customer Code,Customer Name", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Customer Search,Customer Code,Customer Name", null);
  } else {
    sqlId = 'retrieveOpDeptCdInfo';
    udc_ilcomCdoe_trans.setSelectId(sqlId);
    udc_ilcomCdoe_trans.ilCommonPopUp(scwin.udc_ilcomCdoe_trans_callBackFunc, cnd_txt_transClntNo.getValue(), cnd_txt_transClntNm.getValue(), "T", "2", "DEPT Code,DEPT Name", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "DEPT Search,DEPT Code,DEPT Name", null);
  }
  ;
};
//운송pop callback
scwin.udc_ilcomCdoe_trans_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, cnd_txt_transClntNo, cnd_txt_transClntNm);
  console.log(ret);
};
scwin.udc_ilcomCdoe_trans_onblurCodeEvent = function (e) {
  if (cnd_txt_transClntNo.getValue() === "") {
    cnd_txt_transClntNm.setValue("");
  } else {
    //2026.04.04 selectID 추가
    let vSelectId = cnd_lc_transTyp.getValue() == "2" ? 'retrieveEngClntInfo' : 'retrieveOpDeptCdInfo';
    udc_ilcomCdoe_trans.setSelectId(vSelectId);
    udc_ilcomCdoe_trans.ilCommonPopUp(scwin.udc_ilcomCdoe_trans_callBackFunc, cnd_txt_transClntNo.getValue(), cnd_txt_transClntNm.getValue(), "T", "2", "Customer Code,Customer Name", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Customer Search,Customer Code,Customer Name", null);
  }
};
scwin.udc_ilcomCdoe_trans_onviewchangeNameEvent = function (info) {
  if (cnd_txt_transClntNm.getValue() === "") {
    cnd_txt_transClntNo.setValue("");
  }
};

//운송사타입 변경 시 운송사 코드/명 초기화
scwin.cnd_lc_transTyp_onviewchange = function (info) {
  cnd_txt_transClntNo.setValue("");
  cnd_txt_transClntNm.setValue("");
};

//기점 pop
scwin.udc_ilcomCode_dpt_onclickEvent = function (e) {
  udc_ilcomCode_dpt.ilCommonPopUp(scwin.udc_ilcomCode_dpt_callBackFunc, ed_cnd_dptDistrictCd.getValue(), ed_cnd_dptDistrictNm.getValue(), "T", "2", "기점코드,기점명,", null, "3,4,5,6,7,8,9,10", ",,WDE", null, null, null, null, null, "F", "기점,기점코드,기점명", null);
};
scwin.udc_ilcomCode_dpt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_cnd_dptDistrictCd, ed_cnd_dptDistrictNm);
  console.log(ret);
};
scwin.udc_ilcomCode_dpt_onblurCodeEvent = function (e) {
  if (ed_cnd_dptDistrictCd.getValue() === "") {
    ed_cnd_dptDistrictNm.setValue("");
  } else {
    udc_ilcomCode_dpt.ilCommonPopUp(scwin.udc_ilcomCode_dpt_callBackFunc, ed_cnd_dptDistrictCd.getValue(), ed_cnd_dptDistrictNm.getValue(), "T", "2", "기점코드,기점명,", null, "3,4,5,6,7,8,9,10", ",,WDE", null, null, null, null, null, "F", "기점,기점코드,기점명", null);
  }
};
scwin.udc_ilcomCode_dpt_onviewchangeNameEvent = function (info) {
  if (ed_cnd_dptDistrictNm.getValue() === "") {
    ed_cnd_dptDistrictCd.setValue("");
  }
};

//도착지pop
scwin.udc_ilcomCode_arv_onclickEvent = function (e) {
  udc_ilcomCode_arv.ilCommonPopUp(scwin.udc_ilcomCode_arv_callBackFunc, ed_arvDistrictCd.getValue(), ed_arvDistrictNm.getValue(), "T", "2", "기점코드,기점명,", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "기점,기점코드,기점명", null);
};
scwin.udc_ilcomCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvDistrictCd, ed_arvDistrictNm);
  console.log(ret);
};
scwin.udc_ilcomCode_arv_onblurCodeEvent = function (e) {
  if (ed_arvDistrictCd.getValue() === "") {
    ed_arvDistrictNm.setValue("");
  } else {
    udc_ilcomCode_arv.ilCommonPopUp(scwin.udc_ilcomCode_arv_callBackFunc, ed_arvDistrictCd.getValue(), ed_arvDistrictNm.getValue(), "T", "2", "기점코드,기점명,", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "기점,기점코드,기점명", null);
  }
};
scwin.udc_ilcomCode_arv_onviewchangeNameEvent = function (info) {
  if (ed_arvDistrictCd.getValue() === "") {
    ed_arvDistrictNm.setValue("");
  }
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  /* if (!scwin.f_validChk()) {
      return;
  } */

  ds_transtrfList.removeAll();

  //dataMap set.
  dma_oGDS_view_cond.set("adptDt", ed_cnd_adptDt.getValue()); //적용일자     
  dma_oGDS_view_cond.set("dptDistrictCd", ed_cnd_dptDistrictCd.getValue()); //기점       
  dma_oGDS_view_cond.set("arvDistrictCd", ed_arvDistrictCd.getValue()); //도착지     
  dma_oGDS_view_cond.set("transCondCd", lc_transCondCd.getValue()); //운송조건 	 
  dma_oGDS_view_cond.set("clntNo", cnd_txt_clntNo.getValue()); //거래처 	 
  dma_oGDS_view_cond.set("transTyp", cnd_lc_transTyp.getValue()); //운송사타입
  dma_oGDS_view_cond.set("transClntNo", cnd_txt_transClntNo.getValue()); //운송사
  dma_oGDS_view_cond.set("sellBuyTyp", cnd_lc_sellBuyTyp.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_transtrfList.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
    total.setValue(nCnt);
  } else {
    gr_transtrfList.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
  for (var i = 0; i < nCnt; i++) {
    gr_transtrfList.setCellReadOnly(i, 'sellBuyTyp', true);
    gr_transtrfList.setCellReadOnly(i, 'clntNo', true);
    gr_transtrfList.setCellReadOnly(i, 'transTyp', true);
    gr_transtrfList.setCellReadOnly(i, 'transClntNo', true);
    gr_transtrfList.setCellReadOnly(i, 'adptDt', true);
    gr_transtrfList.setCellReadOnly(i, 'dptDistrictCd', true);
    gr_transtrfList.setCellReadOnly(i, 'arvDistrictCd', true);
    gr_transtrfList.setCellReadOnly(i, 'transCondCd', true);
  }
};

//addRow
scwin.addRow = function () {
  let rowIndex = ds_transtrfList.getRowCount();
  if (ds_transtrfList.getRowCount() == 0) {
    ds_transtrfList.insertRow(rowIndex);
    gr_transtrfList.setFocusedCell(rowIndex, 0);
    ds_transtrfList.setCellData(rowIndex, 'sellBuyTyp', "S");
    ds_transtrfList.setCellData(rowIndex, 'transTyp', "2");
    ds_transtrfList.setCellData(rowIndex, 'transCondCd', "1");
    gr_transtrfList.setFocusedCell(rowIndex, 'sellBuyTyp');
  } else {
    ds_transtrfList.insertRow(rowIndex);
    gr_transtrfList.setFocusedCell(rowIndex, 0);
    ds_transtrfList.setCellData(rowIndex, "sellBuyTyp", ds_transtrfList.getCellData(rowIndex - 1, "sellBuyTyp"));
    ds_transtrfList.setCellData(rowIndex, "clntNo", ds_transtrfList.getCellData(rowIndex - 1, "clntNo"));
    ds_transtrfList.setCellData(rowIndex, "clntNm", ds_transtrfList.getCellData(rowIndex - 1, "clntNm"));
    ds_transtrfList.setCellData(rowIndex, "transTyp", ds_transtrfList.getCellData(rowIndex - 1, "transTyp"));
    ds_transtrfList.setCellData(rowIndex, "transClntNo", ds_transtrfList.getCellData(rowIndex - 1, "transClntNo"));
    ds_transtrfList.setCellData(rowIndex, "transClntNm", ds_transtrfList.getCellData(rowIndex - 1, "transClntNm"));
  }
};
scwin.undo = function () {
  $c.data.undoRow($p, ds_transtrfList, "Y");
};

//신규btn.
scwin.btn_create_onclick = function (e) {
  ds_transtrfList.removeAll();
  scwin.addRow();
};

//취소btn
scwin.btn_cancel_onclick = function (e) {
  for (var i = ds_transtrfList.getRowCount() - 1; i >= 0; i--) {
    if (ds_transtrfList.getRowStatus(i) === "C") {
      ds_transtrfList.removeRow(i);
    }
  }
  ds_transtrfList.undoAll();
};

/*
scwin.f_validChk = function() {

    ed_cnd_adptDt.setValue(ed_cnd_adptDt.getValue());
		
    if ($c.gus.cfValidate(ed_cnd_adptDt.getValue(),"date=YYYYMMDD") && ed_cnd_adptDt.getValue() != "") {
        $c.gus.cfAlertMsg(scwin.MSG_LO_ERR_001);
        return;
    }
    return true;
};
*/
//grid popup 
scwin.grid_pop = function (rowIndex, columnIndex) {
  columnId = gr_transtrfList.getColumnID(columnIndex);
  switch (columnId) {
    case "clntNo":
      var code1 = ds_transtrfList.getCellData(rowIndex, "clntNo");
      ds_transtrfList.setCellData(rowIndex, "clntNo", "");
      ds_transtrfList.setCellData(rowIndex, "clntNm", "");
      scwin.f_openCommPopUpGrid(1, rowIndex, code1, '', 'F', 'F');
      break;
    case "transClntNo":
      var code2 = ds_transtrfList.getCellData(rowIndex, "transClntNo");
      ds_transtrfList.setCellData(rowIndex, "transClntNo", "");
      ds_transtrfList.setCellData(rowIndex, "transClntNm", "");
      scwin.f_openCommPopUpGrid(2, rowIndex, code2, '', 'F', 'F');
      break;
    case "dptDistrictCd":
      var code3 = ds_transtrfList.getCellData(rowIndex, "dptDistrictCd");
      ds_transtrfList.setCellData(rowIndex, "dptDistrictCd", "");
      ds_transtrfList.setCellData(rowIndex, "dptDistrictNm", "");
      scwin.f_openCommPopUpGrid(3, rowIndex, code3, '', 'F', 'F');
      break;
    case "arvDistrictCd":
      var code4 = ds_transtrfList.getCellData(rowIndex, "arvDistrictCd");
      ds_transtrfList.setCellData(rowIndex, "arvDistrictCd", "");
      ds_transtrfList.setCellData(rowIndex, "arvDistrictNm", "");
      scwin.f_openCommPopUpGrid(4, rowIndex, code4, '', 'F', 'F');
      break;
    default:
      break;
  }
};
scwin.popupRowIndex = -1;
scwin.popupSelected = false;
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  scwin.popupRowIndex = row;
  switch (disGubun) {
    case 1:
      udc_grid_pop.setSelectId("retrieveEngClntInfo");
      udc_grid_pop.ilCommonPopUp(scwin.udc_grid_Popup_callBackFunc1, pCode, pName, pClose, "2", "Customer Code,Customer Name,", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Customer Search,Customer Code,Customer Name", "F");
      break;
    case 2:
      if (cnd_lc_transTyp.getValue() == "2") {
        //normal
        sqlId = 'retrieveEngClntInfo';
        udc_grid_pop.setSelectId(sqlId);
        udc_grid_pop.ilCommonPopUp(scwin.udc_grid_Popup_callBackFunc2, pCode, pName, pClose, "2", "Trans Code,Trans Name", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Trans Search,Trans Code,Trans Name", "F");
      } else {
        sqlId = 'retrieveOpDeptCdInfo';
        udc_grid_pop.setSelectId(sqlId);
        udc_grid_pop.ilCommonPopUp(scwin.udc_grid_Popup_callBackFunc2, pCode, pName, pClose, "2", "Trans Code,Trans Name", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "Trans Search,Trans Code,Trans Name", "F");
      }
      break;
    case 3:
      udc_grid_pop.setSelectId("retrieveDistrictList");
      udc_grid_pop.ilCommonPopUp(scwin.udc_grid_Popup_callBackFunc3, pCode, pName, pClose, "2", "기점 Code,기점 Name", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "기점 Search,기점 Code,기점 Name", "F");
      break;
    case 4:
      udc_grid_pop.setSelectId("retrieveDistrictList");
      udc_grid_pop.ilCommonPopUp(scwin.udc_grid_Popup_callBackFunc4, pCode, pName, pClose, "2", "도착지 Code,도착지 Name", null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, "F", "도착지 Search,도착지 Code,도착지 Name", "F");
      break;
  }
};

// 그리드 팝업셀 콜백1
scwin.udc_grid_Popup_callBackFunc1 = function (ret) {
  let rowIndex = scwin.popupRowIndex;
  scwin.popupSelected = true;
  if (ret && ret != "" && ret != "N/A") {
    ds_transtrfList.setCellData(rowIndex, "clntNo", ret[0]);
    ds_transtrfList.setCellData(rowIndex, "clntNm", ret[1]);
  }
};
scwin.udc_grid_Popup_callBackFunc2 = function (ret) {
  let rowIndex = scwin.popupRowIndex;
  scwin.popupSelected = true;
  if (ret && ret != "" && ret != "N/A") {
    ds_transtrfList.setCellData(rowIndex, "transClntNo", ret[0]);
    ds_transtrfList.setCellData(rowIndex, "transClntNm", ret[1]);
  }
};
scwin.udc_grid_Popup_callBackFunc3 = function (ret) {
  let rowIndex = scwin.popupRowIndex;
  scwin.popupSelected = true;
  if (ret && ret != "" && ret != "N/A") {
    ds_transtrfList.setCellData(rowIndex, "dptDistrictCd", ret[0]);
    ds_transtrfList.setCellData(rowIndex, "dptDistrictNm", ret[1]);
  }
};
scwin.udc_grid_Popup_callBackFunc4 = function (ret) {
  let rowIndex = scwin.popupRowIndex;
  scwin.popupSelected = true;
  if (ret && ret != "" && ret != "N/A") {
    ds_transtrfList.setCellData(rowIndex, "arvDistrictCd", ret[0]);
    ds_transtrfList.setCellData(rowIndex, "arvDistrictNm", ret[1]);
  }
};

//저장
scwin.btn_save_onclick = async function (e) {
  if (await scwin.f_ReqFieldChk()) {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//저장 callback
scwin.sbm_save_submitdone = function () {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onclick();
};
scwin.f_ReqFieldChk = async function () {
  if (ds_transtrfList.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, [" "]);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [gr_transtrfList]))) {
    return false;
  }
  return true;
};

//row index change event.
scwin.gr_transtrfList_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_transtrfList.getRowStatus(rowIndex) == "C") {
    gr_transtrfList.setCellReadOnly(rowIndex, "sellBuyTyp", false);
    gr_transtrfList.setCellReadOnly(rowIndex, "clntNo", false);
    gr_transtrfList.setCellReadOnly(rowIndex, "transTyp", false);
    gr_transtrfList.setCellReadOnly(rowIndex, "transClntNo", false);
    gr_transtrfList.setCellReadOnly(rowIndex, "adptDt", false);
    gr_transtrfList.setCellReadOnly(rowIndex, "dptDistrictCd", false);
    gr_transtrfList.setCellReadOnly(rowIndex, "arvDistrictCd", false);
    gr_transtrfList.setCellReadOnly(rowIndex, "transCondCd", false);
  } else {
    gr_transtrfList.setCellReadOnly(rowIndex, "sellBuyTyp", true);
    gr_transtrfList.setCellReadOnly(rowIndex, "clntNo", true);
    gr_transtrfList.setCellReadOnly(rowIndex, "transTyp", true);
    gr_transtrfList.setCellReadOnly(rowIndex, "transClntNo", true);
    gr_transtrfList.setCellReadOnly(rowIndex, "adptDt", true);
    gr_transtrfList.setCellReadOnly(rowIndex, "dptDistrictCd", true);
    gr_transtrfList.setCellReadOnly(rowIndex, "arvDistrictCd", true);
    gr_transtrfList.setCellReadOnly(rowIndex, "transCondCd", true);
  }
};

//column change
scwin.ds_transtrfList_oncelldatachange = function (rowIndex, colId, oldValue, newValue) {
  switch (colId) {
    case "transTyp":
      ds_transtrfList.setCellData(rowIndex, "transClntNo", "");
      ds_transtrfList.setCellData(rowIndex, "transClntNm", "");
      break;
  }
};
scwin.gr_transtrfList_oneditend = function (rowIndex, columnIndex, value, oldValue) {
  var columnId = gr_transtrfList.getColumnID(columnIndex);
  var olddata = ds_transtrfList.getCellData(rowIndex, columnId);
  if (rowIndex < 0 || ds_transtrfList.getRowCount() <= rowIndex) return;
  switch (columnId) {
    case "transTyp":
      if (value != olddata) {
        ds_transtrfList.setCellData(rowIndex, "transClntNo", "");
        ds_transtrfList.setCellData(rowIndex, "transClntNm", "");
      }
      break;
    case "clntNo":
      if (olddata == value) break;
      if (!$c.util.isEmpty($p, value)) {
        $p.setTimeout(function () {
          ds_transtrfList.setCellData(rowIndex, "clntNo", "");
          ds_transtrfList.setCellData(rowIndex, "clntNm", "");
          scwin.f_openCommPopUpGrid(1, rowIndex, value, '', 'T', 'F');
        }, 0);
      } else {
        ds_transtrfList.setCellData(rowIndex, "clntNm", "");
      }
      break;
    case "transClntNo":
      if (olddata == value) break;
      if (!$c.util.isEmpty($p, value)) {
        $p.setTimeout(function () {
          ds_transtrfList.setCellData(rowIndex, "transClntNo", "");
          ds_transtrfList.setCellData(rowIndex, "transClntNm", "");
          scwin.f_openCommPopUpGrid(2, rowIndex, value, '', 'T', 'F');
        }, 0);
      } else {
        ds_transtrfList.setCellData(rowIndex, "transClntNm", "");
      }
      break;
    case "dptDistrictCd":
      if (olddata == value) break;
      if (!$c.util.isEmpty($p, value)) {
        $p.setTimeout(function () {
          ds_transtrfList.setCellData(rowIndex, "dptDistrictCd", "");
          ds_transtrfList.setCellData(rowIndex, "dptDistrictNm", "");
          scwin.f_openCommPopUpGrid(3, rowIndex, value, '', 'T', 'F');
        }, 0);
      }
      break;
    case "arvDistrictCd":
      if (olddata == value) break;
      if (!$c.util.isEmpty($p, value)) {
        $p.setTimeout(function () {
          ds_transtrfList.setCellData(rowIndex, "arvDistrictCd", "");
          ds_transtrfList.setCellData(rowIndex, "arvDistrictNm", "");
          scwin.f_openCommPopUpGrid(4, rowIndex, value, '', 'T', 'F');
        }, 0);
      }
      break;
    default:
      break;
  }
};
scwin.f_UploadExcel = async function () {
  var ext = grbtn_transtrfList.getUpExt();
  var options;
  if (ext == "1") {
    var options = {
      "startRowIndex": "2",
      "status": "C"
    };
  } else {
    var options = {
      "headerExist": "1",
      "startRowIndex": 0,
      "status": "C"
    };
  }
  grbtn_transtrfList.uploadGridViewExcel(gr_transtrfList, options);
};

//excelDw
scwin.excelDw = async function () {
  let options = {
    fileName: "TransTariff(LCL)",
    sheetName: "TransTariff(LCL)",
    rowNumVisible: "true"
  };
  let grdObj = gr_transtrfList;
  let infoArr = {};
  if (ds_transtrfList.getRowCount() == 0) {
    $c.win.alert($p, E_MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      if (await $c.win.confirm($p, " [Yes] SAVE To CSV \n [No] Grid To Excel")) {
        $c.data.downloadGridViewCSV($p, grdObj, options);
      } else {
        $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
      }
    }
  }
};
scwin.gr_transtrfList_onfilereadend = function (e) {
  var cnt = ds_transtrfList.getRowCount();
  for (var i = 0; i < cnt; i++) {
    var sellBuyTyp = ds_transtrfList.getCellData(i, "sellBuyTyp");
    if (sellBuyTyp) {
      ds_transtrfList.setCellData(i, "sellBuyTyp", sellBuyTyp.toUpperCase());
    }
    var transTyp = ds_transtrfList.getCellData(i, "transTyp");
    if (transTyp && transTyp.substring(0, 1) == "N") {
      ds_transtrfList.setCellData(i, "transTyp", "2");
    } else if (transTyp) {
      ds_transtrfList.setCellData(i, "transTyp", "1");
    }
    var adptDt = ds_transtrfList.getCellData(i, "adptDt");
    if (adptDt) {
      ds_transtrfList.setCellData(i, "adptDt", adptDt.replace(/\//g, "").replace(/-/g, ""));
    }
    var transCondCd = ds_transtrfList.getCellData(i, "transCondCd");
    if (transCondCd) {
      var val = transCondCd.replace("[", "").replace("]", "").substring(0, 1);
      if (val == "1" || val == "2") {
        ds_transtrfList.setCellData(i, "transCondCd", val);
      }
    }
    var carCondCd = ds_transtrfList.getCellData(i, "carCondCd");
    if (carCondCd) {
      ds_transtrfList.setCellData(i, "carCondCd", carCondCd.replace("[", "").replace("]", "").substring(0, 2));
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Sell/Buy',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_sellBuyTyp',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Buy'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sell'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_txt_clntNo',nameId:'cnd_txt_clntNm',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',maxlengthCode:'6',maxlengthName:'50',id:'udc_ilcomCode_clnt','ev:onclickEvent':'scwin.udc_ilcomCode_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_clnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_transTyp',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'value delim label',sortMethod:'descending',sortOption:'value','ev:onviewchange':'scwin.cnd_lc_transTyp_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_txt_transClntNo',selectID:'',popupID:'',validTitle:'',nameId:'cnd_txt_transClntNm',style:'',id:'udc_ilcomCdoe_trans',maxlengthCode:'6',maxlengthName:'50','ev:onclickEvent':'scwin.udc_ilcomCdoe_trans_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCdoe_trans_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCdoe_trans_onviewchangeNameEvent'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_cnd_adptDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',displayFormat:'yyyy/MM/dd',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_cnd_dptDistrictCd',nameId:'ed_cnd_dptDistrictNm',popupID:'',selectID:'retrieveDistrictList',style:'',validTitle:'',id:'udc_ilcomCode_dpt',maxlengthCode:'6',maxlengthName:'50','ev:onclickEvent':'scwin.udc_ilcomCode_dpt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_dpt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_dpt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_arvDistrictCd',nameId:'ed_arvDistrictNm',popupID:'',selectID:'retrieveDistrictList',style:'',validTitle:'',id:'udc_ilcomCode_arv',maxlengthCode:'6',maxlengthName:'50','ev:onclickEvent':'scwin.udc_ilcomCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_ilcomCode_arv_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ilcomCode_arv_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_transCondCd',chooseOption:'true',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOptionLabel:'전체',ref:'',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'LCL Trans Tariff',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'N',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'Y',gridID:'gr_transtrfList',gridDownFn:'scwin.excelDw',gridUpFn:'scwin.f_UploadExcel',gridUpUserAuth:'C',gridDownUserAuth:'X',id:'grbtn_transtrfList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transtrfList',id:'gr_transtrfList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',focusMode:'cell',focusMove:'true',rowStatusVisible:'true',columnMove:'false','ev:onrowindexchange':'scwin.gr_transtrfList_onrowindexchange','ev:oneditend':'scwin.gr_transtrfList_oneditend','ev:onfilereadend':'scwin.gr_transtrfList_onfilereadend',rowNumVisible:'true',rowNumHeaderValue:'Seq'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Sell<br/>Buy',width:'60',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처',width:'140',colSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Type',width:'80',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'운송사',width:'140',colSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'적용일자',width:'100',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'기점',width:'140',colSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',value:'운송조건',displayMode:'label',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column73',value:'도착지',displayMode:'label',colSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'WT',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column64',value:'CBM',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column61',value:'Car Type',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'45',inputType:'text',id:'column58',value:'Full',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'Rate',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'End',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column27',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'Name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column74',value:'Code',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column71',value:'Name',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellBuyTyp',inputType:'select',width:'60',allOption:'',chooseOption:'',mandatory:'true',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sell'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Buy'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'80',viewType:'default',mandatory:'true',imageClickFunction:'scwin.grid_pop'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'160',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transTyp',inputType:'select',width:'80',allOption:'',chooseOption:'',mandatory:'true',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Internal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Normal'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'transClntNo',inputType:'textImage',width:'80',viewType:'default',mandatory:'true',imageClickFunction:'scwin.grid_pop'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transClntNm',inputType:'text',width:'80',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',width:'80',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'textImage',width:'80',viewType:'default',mandatory:'true',imageClickFunction:'scwin.grid_pop',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',width:'80',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'transCondCd',mandatory:'true',displayMode:'value delim label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'textImage',id:'arvDistrictCd',displayMode:'label',viewType:'default',mandatory:'true',imageClickFunction:'scwin.grid_pop'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvDistrictNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wtBreak',displayMode:'label',dataType:'float',displayFormat:'#,##0.000',defaultValue:'0',textAlign:'right',maxLength:'13.3'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cbmBreak',displayMode:'label',dataType:'float',displayFormat:'#,##0.000',defaultValue:'0',textAlign:'right',maxLength:'13.3'}},{T:1,N:'w2:column',A:{width:'160',inputType:'select',id:'carCondCd',displayMode:'value delim label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',id:'fullYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transRate',displayMode:'label',dataType:'float',displayFormat:'#,##0.00',defaultValue:'0',textAlign:'right',maxLength:'13.2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blank',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',EngYn:'Y',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_transtrfList',rowAddFunction:'scwin.addRow',cancelFunction:'scwin.undo'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display: none',id:'udc_grid_pop'}}]}]}]}]}]})