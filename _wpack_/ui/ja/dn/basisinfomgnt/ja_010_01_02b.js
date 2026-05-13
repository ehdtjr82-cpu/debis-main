/*amd /ui/ja/dn/basisinfomgnt/ja_010_01_02b.xml 20371 4e8354641d6c6b14eb5d02141a308b6af761762e292fa07802090dc487e5da18 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'소속거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizTypCd',name:'업종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ton',name:'톤',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsLongAmt',name:'장축금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsSuperLongAmt',name:'초장축금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retrieveYn',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizTypCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_eqCdNm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_eqCdNm',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_eqCdNm',target:'data:json,{"id":"ds_eqNmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.basisinfomgnt.RetrieveContractTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dn.basisinfomgnt.SaveContractTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_results","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.retrieveYn = "notYet";
scwin.oldData = "";
scwin.oldIndex = "";
scwin.oldDataNm = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "JA010",
    compID: "acb_bizTypCd, gr_results:bizTypCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_eqCodeList("ds_eqNrmCd", "JA060", "");
};

//-------------------------------------------------------------------------
// 그리드내 톤 컬럼 데이터리스트 호출
//-------------------------------------------------------------------------
scwin.f_eqCodeList = function (pCodeDataSet, pGrpCd, pUpperCd) {
  //장비코드 Luxe Combo
  let vUpperCode = pUpperCd.trim();
  let objDataSet = pCodeDataSet;
  dma_eqCdNm.set("sysCd", "EquipmentEBC");
  dma_eqCdNm.set("queryId", "retrieveEqCode");
  dma_eqCdNm.set("param1", pGrpCd);
  dma_eqCdNm.set("param2", vUpperCode);
  $c.sbm.execute($p, sbm_eqCdNm);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  if (ed_clntNo.getValue() == "") {
    $c.win.alert($p, "소속거래처는 필수 입력항목 입니다.");
    ed_clntNo.focus();
    return false;
  }
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("bizTypCd", acb_bizTypCd.getValue());
  dma_condition.set("adptDt", ica_adptDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (거래처)
//-------------------------------------------------------------------------
scwin.udc_clnt_onClick = async function (e) {
  let condition = "";
  if (cbx_repClntYn.getValue() == "1") {
    condition = "RP";
  }
  udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntNo.getValue(), ed_clntNm.getValue(), "T", "5", null, "150, 170", null, condition, null, null, null, null, null, "F", "소속거래처,거래처코드,거래처명");
};
scwin.udc_clnt_onblurCode = async function (e) {
  if (scwin.oldData == ed_clntNo.getValue()) {
    return;
  }
  let condition = "";
  if (cbx_repClntYn.getValue() == "1") {
    condition = "RP";
  }
  if (ed_clntNo.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntNo.getValue(), "", "T", "5", null, "150, 170", null, condition, null, null, null, null, null, "F", "소속거래처,거래처코드,거래처명");
  } else {
    return;
  }
};
scwin.udc_clnt_onChangeName = async function (info) {
  if (scwin.oldDataNm == ed_clntNm.getValue()) {
    return;
  }
  let condition = "";
  if (cbx_repClntYn.getValue() == "1") {
    condition = "RP";
  }
  if (ed_clntNm.getValue() != "") {
    udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, "", ed_clntNm.getValue(), "T", "5", null, "150, 170", null, condition, null, null, null, null, null, "F");
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(거래처)
//-------------------------------------------------------------------------
scwin.udc_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
  scwin.oldData = ed_clntNo.getValue();
  scwin.oldDataNm = ed_clntNm.getValue();
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
  acb_bizTypCd.setSelectedIndex(-1);
  acb_bizTypCd.setValue("0");
  ica_adptDt.setValue("");
};

//-------------------------------------------------------------------------
// 그리드 거래처코드 팝업
//-------------------------------------------------------------------------
scwin.grid_udc = function (rowIndex, columnId) {
  scwin.f_openCommPopUpGrid(1, rowIndex, ds_results.getCellData(rowIndex, "clntNo"), ds_results.getCellData(rowIndex, "clntNm"), 'F', 'F');
};
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  udc_grid_commmon.setSelectId("retrieveSubsidaryClntList");
  udc_grid_commmon.cfCommonPopUp(scwin.udc_grid_commmon_callBackFunc1, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 그리드 팝업셀 화주 콜백
//-------------------------------------------------------------------------
scwin.udc_grid_commmon_callBackFunc1 = function (ret) {
  let rowIndex = gr_results.getFocusedRowIndex();
  ds_results.setCellData(rowIndex, "clntNo", ret[0]);
  ds_results.setCellData(rowIndex, "clntNm", ret[1]);
};

//-------------------------------------------------------------------------
// 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_results_ondataload = function () {
  let rowCnt = ds_results.getTotalRow();
  spa_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  scwin.retrieveYn = "yes";

  // sort 순서 바뀌면 모양 바뀜
  let options = {
    sortIndex: "clntNo clntNm bizTypCd adptDt ",
    sortOrer: "1 1 1 1"
  };
  ds_results.multisort(options);
  for (i = 0; i < ds_results.getTotalRow(); i++) {
    if (ds_results.getCellData(i, "retrieveYn") == "1") {
      gr_results.setReadOnly("cell", i, "clntNo", true);
      gr_results.setReadOnly("cell", i, "clntNm", true);
      gr_results.setReadOnly("cell", i, "bizTypCd", true);
      gr_results.setReadOnly("cell", i, "adptDt", true);
      gr_results.setReadOnly("cell", i, "ton", true);
    }
  }
  gr_results.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onClick = async function (e) {
  for (i = 0; i < ds_results.getTotalRow(); i++) {
    if (ds_results.getRowStatus(i) == "C" || ds_results.getRowStatus(i) == "D" || ds_results.getRowStatus(i) == "U") {
      if (ds_results.getCellData(i, "clntNo") == "" || ds_results.getCellData(i, "bizTypCd") == "" || ds_results.getCellData(i, "adptDt") == "" || ds_results.getCellData(i, "ton") == "") {
        $c.win.alert($p, i + 1 + "번재 행의 필수항목이 빠져있습니다.");
        return false;
      }
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 저장 완료시
//-------------------------------------------------------------------------
scwin.sbm_save_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.btn_retrieve_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
scwin.addRow = function () {
  if (scwin.retrieveYn == "notYet") {
    $c.win.alert($p, "조회를 해주십시오");
    return false;
  }
  let row = ds_results.insertRow();
  gr_results.setFocusedCell(row, 0);
};
scwin.cancelRow = function () {
  let row = gr_results.getFocusedRowIndex();
  if (ds_results.getRowStatus(row) == "C") {
    ds_results.removeRow(row);
    console.log(ds_results.getTotalRow() - 1);
    gr_results.setFocusedCell(ds_results.getTotalRow() - 1, 0);
  } else {
    ds_results.undoRow(row);
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------
scwin.gr_results_onafteredit = function (rowIndex, columnIndex, value) {
  if (scwin.oldData == value) {
    return;
  }
  if (value == "") {
    return;
  }
  let colid = gr_results.getColumnID(scwin.oldIndex);
  if (colid == "clntNo") {
    let clntNo = ds_results.getCellData(gr_results.getFocusedRowIndex(), "clntNo");
    scwin.grid_udc(gr_results.getFocusedRowIndex(), clntNo);
    scwin.f_openCommPopUpGrid();
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// 셀 편집 입장
//-------------------------------------------------------------------------
scwin.gr_results_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
  scwin.oldIndex = columnIndex;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clnt',selectID:'retrieveSubsidaryClntList',allowCharCode:'0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'6',validExpCode:'거래처번호:yes','ev:onclickEvent':'scwin.udc_clnt_onClick','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_clnt_onChangeName'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_repClntYn',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data',renderType:'checkboxgroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표거래처 여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업종코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bizTypCd',search:'start',style:'width:150px;',submenuSize:'auto',displayMode:'value delim label',chooseOption:'true',chooseOptionLabel:'전체',allOption:'',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_adptDt',pickerType:'dynamic',style:'',delimiter:'/'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약요율목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_results',grdDownOpts:'{"fileName":"계약요율.xlsx", "sheetName": "계약요율"}',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true',editModeEvent:'onclick','ev:onafteredit':'scwin.gr_results_onafteredit','ev:onbeforeedit':'scwin.gr_results_onbeforeedit',sortable:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처코드',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'소속거래처명',width:'150',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'업종',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'적용일자',width:'100',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'톤',width:'80',class:'txt-red',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출금액',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'장축금액',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'초장축금액',width:'100',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'100',imageClickFunction:'scwin.grid_udc'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'bizTypCd',inputType:'select',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ton',inputType:'select',width:'80',textAlign:'right',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsLongAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSuperLongAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_results',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.delRow',cancelFunction:'scwin.cancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:';visibility:hidden;',id:'udc_grid_commmon'}}]}]}]}]}]})