/*amd /ui/ds/fs/bilg/fs_204_03_01b.xml 41979 dd46ad0376aadbb3318686ce59f0e55b04450c792664c8bc8907edecb8e38f44 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_results',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계귀속;부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selPchLodeptNm',name:'물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groubBy',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'key5',name:'구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'확정매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellUnsettle',name:'미확정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellTotal',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'확정매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsUnsettle',name:'미확정',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsTotal',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'innerSellAmt',name:'내부매출',dataType:'number'}},{T:1,N:'w2:column',A:{id:'innerPchAmt',name:'내부매입',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profit',name:'손익',dataType:'number'}},{T:1,N:'w2:column',A:{id:'profitRate',name:'이익율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selPchLodeptCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryConLastDt',name:'name17',dataType:'text'}}]},{T:1,N:'w2:data',E:[{T:1,N:'w2:row',E:[{T:1,N:'bizDomNm',E:[{T:4,cdata:'1'}]},{T:1,N:'acctDeptCd',E:[{T:4,cdata:'1'}]},{T:1,N:'selPchLodeptNm',E:[{T:4,cdata:'1'}]},{T:1,N:'groubBy',E:[{T:4,cdata:'1'}]},{T:1,N:'key5',E:[{T:4,cdata:'1'}]},{T:1,N:'sellAmt',E:[{T:4,cdata:'1'}]},{T:1,N:'sellUnsettle',E:[{T:4,cdata:'1'}]},{T:1,N:'sellTotal',E:[{T:4,cdata:'1'}]},{T:1,N:'pchsAmt',E:[{T:4,cdata:'1'}]},{T:1,N:'pchsUnsettle',E:[{T:4,cdata:'1'}]},{T:1,N:'pchsTotal',E:[{T:4,cdata:'1'}]},{T:1,N:'innerSellAmt',E:[{T:4,cdata:'1'}]},{T:1,N:'innerPchAmt',E:[{T:4,cdata:'1'}]},{T:1,N:'profit',E:[{T:4,cdata:'1'}]},{T:1,N:'profitRate',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'gubun',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd2',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'groubBy',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name14',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveLogisSelPchAccountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// function desc : 전역변수 선언
// select 값에 따른 display:none 동적 변경있음, ed_sellLodeptCd , ed_sellLodeptCd2
// hidden 컴포넌트 전역변수선언
//-------------------------------------------------------------------------
scwin.ed_txt_lineNm = "";
scwin.ed_txt_acctCd = "";
scwin.strCurrDate = WebSquare.date.getCurrentServerDate();
scwin.strStartDate = scwin.strCurrDate.substring(0, 6);

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//------------------------------------------------------------------------- 
scwin.onpageload = function () {
  acb_gubun.setValue("LOGIS");
  udc_sellLodept2.hide();
  udc_sellLodept2.mandatoryCode = false;
  // scwin.onUdcCompleted();
};
scwin.onUdcCompleted = function (e) {
  ica_qryConDt.setValue(scwin.strStartDate);
  ed_cvsslMgntNm.hide();
  ed_acctCd.hide();
  rd_transCargoClsCd.setValue("");
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_condition.set("gubun", acb_gubun.getValue());
  dma_condition.set("sellLodeptCd", ed_sellLodeptCd.getValue());
  dma_condition.set("sellLodeptCd2", ed_sellLodeptCd2.getValue());
  dma_condition.set("qryConDt", ica_qryConDt.getValue());
  dma_condition.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_condition.set("impExpDomClsCd", acb_impExpDomClsCd.getValue());
  dma_condition.set("vsslCd", ed_vsslCd.getValue());
  dma_condition.set("portcnt", ed_portcnt.getValue());
  dma_condition.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_condition.set("lineCd", ed_lineCd.getValue());
  dma_condition.set("bizDomCd", acb_bizDomCd.getValue());
  dma_condition.set("transCargoClsCd", rd_transCargoClsCd.getValue());
  dma_condition.set("acctCd", ed_acctNm.getValue());
  if (acb_gubun.getValue() == "LOGIS") {
    if ((await ed_sellLodeptCd.getValue()) == "") {
      $c.win.alert($p, "점소 또는 부서는 필수 조회 조건입니다.");
      ed_sellLodeptCd.focus();
      return false;
    }
    ;
  } else if (acb_gubun.getValue() == "ACCNT") {
    if ((await ed_sellLodeptCd2.getValue()) == "") {
      $c.win.alert($p, "점소 또는 부서는 필수 조회 조건입니다.");
      ed_sellLodeptCd2.focus();
      return false;
    }
    ;
  }
  if ((await ica_qryConDt.getValue()) == "") {
    $c.win.alert($p, "기준월은 필수 조회 조건입니다.");
    ica_qryConDt.focus();
    return false;
  }
  ;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 field clear
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function () {
  $c.gus.cfInitObjects($p, portCondtionPart);
};

//-------------------------------------------------------------------------
// 조회성공시
//-------------------------------------------------------------------------
scwin.sbm_tr_retrieve_submitdone = function (e) {
  spa_totalRows.setValue(ds_results.getTotalRow());
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 부서 autoComplete 변화에 따른 값 세팅
//-------------------------------------------------------------------------
scwin.acb_gubun_Change = function (info) {
  if (acb_gubun.getValue() == "LOGIS") {
    udc_sellLodept.show();
    udc_sellLodept2.hide();

    // udc_sellLodept2.setMandatoryCode(false);
    // ed_sellLodeptCd2.setMandatoryCode(false);
  }
  if (acb_gubun.getValue() == "ACCNT") {
    udc_sellLodept.hide();
    udc_sellLodept2.show();
    // udc_sellLodept.setMandatoryCode(false);
    // ed_sellLodeptCd.setMandatoryCode(false);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (청구부서)
//-------------------------------------------------------------------------
scwin.udc_sellLodept_onClick = async function (e) {
  udc_sellLodept.cfCommonPopUp(scwin.udc_sellLodept_callBackFunc, ed_sellLodeptCd.getValue(), ed_sellLodeptNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_sellLodept_onblurCode = async function (e) {
  if (ed_sellLodeptCd.getValue() != "") {
    udc_sellLodept.cfCommonPopUp(scwin.udc_sellLodept_callBackFunc, ed_sellLodeptCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_sellLodeptCd.setValue("");
    ed_sellLodeptNm.setValue("");
    return;
  }
};
scwin.udc_sellLodept_onChangeName = async function (info) {
  if (ed_sellLodeptNm.getValue() != "") {
    udc_sellLodept.cfCommonPopUp(scwin.udc_sellLodept_callBackFunc, "", ed_sellLodeptNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_sellLodeptCd.setValue("");
    ed_sellLodeptNm.setValue("");
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(청구부서)
//-------------------------------------------------------------------------
scwin.udc_sellLodept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sellLodeptCd, ed_sellLodeptNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (회계부서)
//-------------------------------------------------------------------------
scwin.udc_sellLodept2_onClick = async function (e) {
  udc_sellLodept2.cfCommonPopUp(scwin.udc_sellLodept2_callBackFunc, ed_sellLodeptCd2.getValue(), ed_sellLodeptNm2.getValue(), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_sellLodept2_onblurCode = async function (e) {
  if (ed_sellLodeptCd2.getValue() != "") {
    udc_sellLodept2.cfCommonPopUp(scwin.udc_sellLodept2_callBackFunc, ed_sellLodeptCd2.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_sellLodeptCd2.setValue();
    ed_sellLodeptNm2.setValue();
    return;
  }
};
scwin.udc_sellLodept2_onChangeName = async function (info) {
  if (ed_sellLodeptNm2.getValue() != "") {
    udc_sellLodept2.cfCommonPopUp(scwin.udc_sellLodept2_callBackFunc, "", ed_sellLodeptNm2.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_sellLodeptCd2.setValue();
    ed_sellLodeptNm2.setValue();
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(회계부서)
//-------------------------------------------------------------------------
scwin.udc_sellLodept2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_sellLodeptCd2, ed_sellLodeptNm2);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (거래처)
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_onClick = async function (e) {
  udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_callBackFunc, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_bilgClnt_onblurCode = async function (e) {
  if (ed_bilgClntNo.getValue() != "") {
    udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_callBackFunc, ed_bilgClntNo.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_bilgClntNo.setValue();
    ed_bilgClntNm.setValue();
    return;
  }
};
scwin.udc_bilgClnt_onChangeName = async function (info) {
  if (ed_bilgClntNm.getValue() != "") {
    udc_bilgClnt.cfCommonPopUp(scwin.udc_bilgClnt_callBackFunc, "", ed_bilgClntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_bilgClntNm.setValue("");
    ed_bilgClntNo.setValue("");
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(거래처)
//-------------------------------------------------------------------------
scwin.udc_bilgClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgClntNo, ed_bilgClntNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (LINE)
//-------------------------------------------------------------------------
scwin.udc_line_onClick = async function (e) {
  udc_line.cfCommonPopUp(scwin.udc_line_callBackFunc, ed_lineCd.getValue(), "", "F", null, null, null, null, null, null, null, null, null, null, "F", null);
};
scwin.udc_line_onblurCode = async function (e) {
  if (ed_lineCd.getValue() != "") {
    udc_line.cfCommonPopUp(scwin.udc_line_callBackFunc, ed_lineCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, "F");
  } else {
    ed_lineCd.setValue("");
    ed_lineNm.setValue("");
    return;
  }
};

// scwin.udc_line_onChangeName = async function (info) {
//     if(ed_lineNm.getValue() != "") {
//         udc_line.cfCommonPopUp(scwin.udc_line_callBackFunc, "",ed_lineNm.getValue(),"T",null,null,null,null,null,null,null,null,null,null,null,null,null);
//     } else {
//         return;
//     }
// };

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(LINE)
//-------------------------------------------------------------------------
scwin.udc_line_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd, ed_lineNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (계정코드)
//-------------------------------------------------------------------------
scwin.udc_acct_onClick = async function (e) {
  udc_acct.cfCommonPopUp(scwin.udc_acct_callBackFunc, "", ed_acctNm.getValue(), "F", null, null, null, null, "T", null, null, null, null, null, "F", null);
};
scwin.udc_acct_onblurCode = async function (e) {
  if (ed_acctNm.getValue() != "") {
    udc_acct.cfCommonPopUp(scwin.udc_acct_callBackFunc, ed_acctNm.getValue(), "", "T", null, null, null, null, "T", null, null, null, null, null, "F", null);
  } else {
    return;
  }
};
scwin.udc_acct_onChangeName = async function (info) {
  if (ed_acctNm.getValue() != "") {
    udc_acct.cfCommonPopUp(scwin.udc_acct_callBackFunc, "", ed_acctNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(계정코드)
//-------------------------------------------------------------------------
scwin.udc_acct_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_acctCd, ed_acctNm);
};

//-------------------------------------------------------------------------
// 본선관리번호 호출
//-------------------------------------------------------------------------
scwin.udc_cvsslMgnt_onClick = async function (e) {
  //팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };
  let args = {
    cvsslMgntNo: ed_cvsslMgntNo.getValue() // 화면에서의 ??? Code Element의	Value
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
};

//-------------------------------------------------------------------------
// ds_results 로드할때 이익율 계산
//-------------------------------------------------------------------------
scwin.ds_results_ondataload = function () {
  let rowCount = ds_results.getTotalRow();
  for (i = 0; i < rowCount; i++) {
    let profit = Number(ds_results.getCellData(i, "profit"));
    let sellTotal = Number(ds_results.getCellData(i, "sellTotal"));
    let innerSellAmt = Number(ds_results.getCellData(i, "innerSellAmt"));
    let innerPchAmt = Number(ds_results.getCellData(i, "innerPchAmt"));
    let denominator = sellTotal + (innerSellAmt - innerPchAmt);
    let result = denominator === 0 ? 0 : profit / denominator * 100;
    ds_results.setCellData(i, "profitRate", result);
  }
  ;
  ds_results.sort("bizDomNm", 0);
};

//-------------------------------------------------------------------------
// Grid 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_results_onCellClick = function (rowIndex, columnIndex, columnId) {
  let rowStatus = gr_results.getFocusedRowStatus();
  if (rowStatus != "U") {
    $c.win.alert($p, "subSum 금액은 해당 화면으로 이동하지 않습니다.");
    return;
  }
  let opt = {};
  let condition = {
    selPchLodeptCd: ds_results.getCellData(rowIndex, "selPchLodeptCd"),
    qryConDt: ica_qryConDt.getValue(),
    qryConLastDt: ds_results.getCellData(rowIndex, "qryConLastDt"),
    // asis와 모양을 맞추기 UDC name과 code 컴포넌트 선언을 반대로함 
    acctCd: ed_acctNm.getValue(),
    acctNm: ed_acctCd.getValue()
  };
  if (columnId == "sellAmt") {
    condition.selPchCls = "SELL";
    $c.win.openMenu($p, "통합매출 확정/미확정 조회", "/ui/ds/fs/bilg/fs_204_02_04b.xml", "fs_204_02_04b.xml", condition, opt);
  } else if (columnId == "sellUnsettle") {
    condition.selPchCls = "SELL";
    $c.win.openMenu($p, "미확정 증감 내역조회", "/ui/ds/fs/bilg/fs_204_02_58b.xml", "fs_204_02_58b.xml", condition, opt);
  } else if (columnId == "pchsAmt") {
    condition.selPchCls = "PCHS";
    $c.win.openMenu($p, "통합매입 확정/미확정 조회", "/ui/ds/fs/adjm/fs_103_04_01b.xml", "fs_103_04_01b.xml", condition, opt);
  } else if (columnId == "pchsUnsettle") {
    condition.selPchCls = "PCHS";
    $c.win.openMenu($p, "미확정 증감 내역조회", "/ui/ds/fs/bilg/fs_204_02_58b.xml", "fs_204_02_58b.xml", condition, opt);
  } else if (columnId == "innerSellAmt") {
    condition.selPchCls = "SELL";
    $c.win.openMenu($p, "내부거래조회", "/ui/ds/fs/bilg/fs_203_01_02b.xml", "fs_203_01_02b.xml", condition, opt);
  } else if (columnId == "innerPchAmt") {
    condition.selPchCls = "PCHS";
    $c.win.openMenu($p, "내부거래조회", "/ui/ds/fs/bilg/fs_203_01_02b.xml", "fs_203_01_02b.xml", condition, opt);
  }
};
scwin.gr_results_onsubtotalclick = function (info) {
  $c.win.alert($p, "subSum 금액은 해당 화면으로 이동하지 않습니다.");
  return;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_gubun',search:'none',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label',textAlign:'left','ev:onchange':'scwin.acb_gubun_Change'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류점소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LOGIS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계부서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ACCNT'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_sellLodeptCd',nameId:'ed_sellLodeptNm',id:'udc_sellLodept',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',objTypeCode:'Data',UpperFlagCode:'1',validExpCode:'매출물류부서:yes',objTypeName:'key','ev:onclickEvent':'scwin.udc_sellLodept_onClick',popupTitle:'청구부서코드팝업',onloadCallbackFunc:'',maxlengthCode:'4',selectID:'retrieveOpDeptCdInfo','ev:onblurCodeEvent':'scwin.udc_sellLodept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_sellLodept_onChangeName',validTitle:'점소 또는 부서',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_sellLodeptCd2',nameId:'ed_sellLodeptNm2',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'Data',UpperFlagCode:'1',id:'udc_sellLodept2','ev:onclickEvent':'scwin.udc_sellLodept2_onClick','ev:onblurCodeEvent':'scwin.udc_sellLodept2_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_sellLodept2_onChangeName',selectID:'retrieveAcctDeptCdInfo',validTitle:'점소 또는 부서',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_qryConDt',style:'',mandatory:'true',displayFormat:'yyyy/MM',objtype:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgClntNo',nameId:'ed_bilgClntNm',id:'udc_bilgClnt',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'6',UpperFlagCode:'1',validExpCode:'청구처:yes',mandatoryName:'false','ev:onclickEvent':'scwin.udc_bilgClnt_onClick','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onChangeName',selectID:'retrieveClntInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_impExpDomClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',searchTarget:'value',displayMode:'value delim label','ev:oneditkeyup':'scwin.onkeyup',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:' 모선/항차',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vsslCd',placeholder:'',style:'width:70px;',editType:'select',allowChar:'a-zA-Z0-9',maxlength:'4','ev:onkeyup':'scwin.onkeyup'}},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:70px;',editType:'select',maxlength:'10',allowChar:'a-zA-Z0-9',mandatory:'false','ev:onkeyup':'scwin.onkeyup'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_cvsslMgntNo',id:'udc_cvsslMgnt',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'8',objTypeCode:'data',UpperFlagCode:'1',nameId:'ed_cvsslMgntNm','ev:onclickEvent':'scwin.udc_cvsslMgnt_onClick'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',UpperFlagCode:'1',nameId:'ed_lineNm',id:'udc_line','ev:onclickEvent':'scwin.udc_line_onClick','ev:onblurCodeEvent':'scwin.udc_line_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_line_onChangeName',selectID:'retrieveLineInfo',hideName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bizDomCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',searchTarget:'value',displayMode:'value delim label',objType:'data','ev:oneditkeyup':'scwin.onkeyup',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'120'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'110'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'130'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'제3자물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'150'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_transCargoClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cntr'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_acctNm',nameId:'ed_acctCd',maxlengthCode:'50',id:'udc_acct','ev:onclickEvent':'scwin.udc_acct_onClick',selectID:'retrieveAcctCdInfo','ev:onblurCodeEvent':'scwin.udc_acct_onChangeName'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물류 매출/매입 회계대사',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'info-list row txt-red'},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'확정 : 회계처리일자',class:''}},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:' 미확정,내부거래 : 실적일',class:''}},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'미확정 : 당월미확정 - 전월미확정',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"물류 매출매입 회계대사.xlsx", "sheetName": "물류 매출매입 회계대사"}',gridID:'gr_results'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results',focusMode:'row',id:'gr_results',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_results_onCellClick','ev:onsubtotalclick':'scwin.gr_results_onsubtotalclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'사업영역',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'회계귀속<br/>부서코드',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'물류점소',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'구분',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'구분명',width:'100',colSpan:'',rowSpan:'2',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'매출',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'매입',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'내부매출',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'내부매입',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'손익',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'이익율',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'확정매출',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'미확정',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'합계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'확정매입',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'미확정',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'합계',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bizDomNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selPchLodeptNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'groubBy',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'key5',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',class:'underline',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnsettle',inputType:'text',style:'',value:'',width:'70',textAlign:'right',class:'underline',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTotal',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',class:'underline',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsUnsettle',value:'',displayMode:'label',textAlign:'right',class:'underline',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsTotal',value:'',displayMode:'label',textAlign:'right',class:'',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'innerSellAmt',value:'',displayMode:'label',textAlign:'right',class:'underline',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'innerPchAmt',value:'',displayMode:'label',textAlign:'right',class:'underline',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'profit',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'profitRate',value:'',displayMode:'label',textAlign:'right',dataType:'number',readOnly:'true',displayFormat:'#,##0.00[floor]',maxLength:'0.2'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'bizDomNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'subSum',displayMode:'label',searchTarget:'bizDomNm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellUnsettle")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'sellTotal_sub',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellTotal")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsUnsettle")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsTotal")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'innerSellAmt_sub',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'innerPchAmt_sub',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'profit_sub',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("profit")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00[floor]',maxLength:'0.2',expression:'(sum("profit")/sum("sellTotal")+(sum("innerSellAmt")-sum("innerPchAmt")))*100'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellUnsettle")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("sellTotal")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsUnsettle")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("pchsTotal")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerSellAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("innerPchAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum("profit")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})