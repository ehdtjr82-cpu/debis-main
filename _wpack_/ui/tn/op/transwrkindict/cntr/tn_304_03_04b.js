/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_04b.xml 21912 6bf3654cf350be5bcf8aabbd550495251fd767fd5bb3c1e8568eb0e09b505062 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_saveInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onoffNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lblock',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctier',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lrow',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indcLblock',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkMemo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cblock',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgCntrNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onoffNo',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_transit',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'onoffNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_transit',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_transit","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin,sbm_transit_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCyRsOrderDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"}, {"id":"ds_outInfo","key":"OUT_DS1"} ]',target:'data:json,{"id":"ds_outInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.transwrkindict.cntr.UpdateCyRsOrderDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_saveInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId;
scwin.crryinoutClsCd;
scwin.onoffNo;
scwin.lblock;
scwin.reqWrkDt;
scwin.s_query_date;
scwin.s_query_mch;
scwin.eqCd;
scwin.wrkPlCd;
scwin.lobranCd;
scwin.fullEmptyClsCd;
scwin.selfClsCd;
scwin.g_selected_input_box = "ed_cntrNo";
scwin.memJson;
scwin.pgrId;
scwin.onpageload = async function () {
  scwin.iniSetting();
  ed_cntrNo.focus();
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "CyRsAutomationEBC",
    param2: "retrieveBlockList",
    param3: [""],
    //고정?
    compID: "acb_transit" //바인딩 할 컴포넌트 id
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.commonCodeCallBack01);
};
scwin.iniSetting = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.crryinoutClsCd = $c.data.getParameter($p, "crryinoutClsCd") == null ? "" : $c.data.getParameter($p, "crryinoutClsCd");
  scwin.onoffNo = $c.data.getParameter($p, "onoffNo") == null ? "" : $c.data.getParameter($p, "onoffNo");
  scwin.lblock = $c.data.getParameter($p, "lblock") == null ? "" : $c.data.getParameter($p, "lblock");
  scwin.reqWrkDt = $c.data.getParameter($p, "reqWrkDt") == null ? "" : $c.data.getParameter($p, "reqWrkDt");
  scwin.s_query_date = $c.data.getParameter($p, "s_query_date") == null ? "" : $c.data.getParameter($p, "s_query_date");
  scwin.s_query_mch = $c.data.getParameter($p, "s_query_mch") == null ? "" : $c.data.getParameter($p, "s_query_mch");
  scwin.eqCd = $c.data.getParameter($p, "eqCd") == null ? "" : $c.data.getParameter($p, "eqCd");
  scwin.wrkPlCd = $c.data.getParameter($p, "wrkPlCd") == null ? "" : $c.data.getParameter($p, "wrkPlCd");
  scwin.lobranCd = $c.data.getParameter($p, "lobranCd") == null ? "" : $c.data.getParameter($p, "lobranCd");
  scwin.fullEmptyClsCd = $c.data.getParameter($p, "fullEmptyClsCd") == null ? "" : $c.data.getParameter($p, "fullEmptyClsCd");
  scwin.selfClsCd = $c.data.getParameter($p, "selfClsCd") == null ? "" : $c.data.getParameter($p, "selfClsCd");
  scwin.pgrId = $c.data.getParameter($p, "pgrId") == null ? "tn_304_03_04b" : $c.data.getParameter($p, "pgrId");
  if (scwin.wrkPlCd == "" || scwin.eqCd == "" || scwin.lobranCd == "") {
    let loginData = scwin.getCYLoginData();
    if (loginData != null) {
      scwin.wrkPlCd = loginData.wrkPlCd ?? "";
      scwin.lobranCd = loginData.lobranCd ?? "";
      scwin.eqCd = loginData.eqCd ?? "";
    }
  }
  if (scwin.lobranCd == "" || scwin.eqCd == "" || scwin.wrkPlCd == "") {
    //response.sendRedirect("/tn/op/transwrkindict/cntr/tn_304_03_01b.jsp");
    let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_01b.xml";
    let programId = scwin.pgrId;
    let params = {
      pgrId: scwin.pgrId
    };
    let loginMenuNm = "CY자동화로그인";
    $c.win.openMenu($p, loginMenuNm, strUrl, programId, params, {
      openAction: "exist",
      mdiTitle: loginMenuNm
    });
  }
};
scwin.getCYLoginData = function () {
  var raw = localStorage.getItem("CY_LOGIN_INFO");
  if (!raw) return null;
  try {
    return JSON.parse(decodeURIComponent(escape(atob(raw))));
  } catch (e) {
    return null;
  }
};
scwin.commonCodeCallBack01 = function () {
  let datasetObj = $p.getComponentById(acb_transit.getDataListInfo().id);
  datasetObj.setColumnFilter({
    type: 'regExp',
    colIndex: 'code',
    key: /^[^0-9]$/,
    condition: 'and'
  });
  if (!$c.gus.cfIsNull($p, scwin.onoffNo)) {
    dma_condition.set("onoffNo", scwin.onoffNo);
    dma_condition.set("crryinoutClsCd", scwin.crryinoutClsCd);
    scwin.tr_retrieve();

    //확정구역 첫번째에 값 넣어주고 두번째 retrieve해서 넣어주기
  }
};
scwin.sbm_save_submitDone = function () {
  scwin.f_back();
};
scwin.btn_complete_onclick = function (e) {
  scwin.f_completeWrk();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_back();
};
scwin.f_retrieve = function () {
  scwin.tr_retrieve();
};
scwin.f_completeWrk = async function () {
  if (!scwin.f_ValidateCblocck()) {
    return;
  }
  ;
  let rtn = await $c.win.confirm($p, "작업을 완료 하시겠습니까?");
  if (rtn) {
    dma_saveInfo.set("cntrNo", ds_outInfo.getCellData(0, "cntrNo"));
    dma_saveInfo.set("onoffNo", ds_outInfo.getCellData(0, "onoffNo"));
    dma_saveInfo.set("crryinoutClsCd", ds_outInfo.getCellData(0, "crryinoutClsCd"));
    dma_saveInfo.set("currPosCd", scwin.wrkPlCd);
    dma_saveInfo.set("lblock", acb_transit1.getValue());
    dma_saveInfo.set("ctier", acb_ctier.getValue() == "" ? ds_outInfo.getCellData(0, "ltier") : acb_ctier.getValue());
    dma_saveInfo.set("wrkPlCd", scwin.wrkPlCd);
    dma_saveInfo.set("lrow", acb_lrow.getValue());
    dma_saveInfo.set("lineCd", ds_outInfo.getCellData(0, "lineCd"));
    dma_saveInfo.set("fullEmptyClsCd", ds_outInfo.getCellData(0, "fullEmptyClsCd"));
    scwin.tr_save();
  }
};
scwin.tr_save = function () {
  $c.sbm.execute($p, sbm_save);
};
scwin.f_back = function () {
  //f_twinkleBtn("close",80);
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_02b.xml";
  let programId = scwin.pgrId;
  let paramObj = {
    wrkPlCd: scwin.wrkPlCd,
    eqCd: scwin.eqCd,
    lobranCd: scwin.lobranCd,
    lblock: scwin.lblock,
    reqWrkDt: scwin.reqWrkDt,
    fullEmptyClsCd: scwin.fullEmptyClsCd,
    selfClsCd: scwin.selfClsCd,
    pgrId: scwin.pgrId
  };
  $c.win.openMenu($p, "CY상하차정보조회", strUrl, programId, paramObj, {
    openAction: "exist"
  });
};
scwin.f_Check = function (code) {
  if (code == 'ed_cntrNo') {
    scwin.g_selected_input_box = 'ed_cntrNo';
  }
};

//-------------------------------------------------------------------------
// Validation 체크
//-------------------------------------------------------------------------
scwin.f_ValidateCblocck = function () {
  if ($c.gus.cfIsNull($p, acb_transit1.getValue())) {
    $c.win.alert($p, "확정블록 코드를 입력하세요.");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// Transit1 가져오기
//-------------------------------------------------------------------------
scwin.f_RetrieveTransit1 = async function (lblock1) {
  scwin.wrkPlCd = "4C02";
  sbm_transit.action = "/cm.zz.RetrieveComboCMD.do?sysCd=CyRsAutomationEBC&queryId=retrieveBlockList1&param1=" + scwin.wrkPlCd + "&param2=" + lblock1;
  await $c.sbm.execute($p, sbm_transit);
};
scwin, sbm_transit_submitDone = function () {
  acb_transit1.setSelectedIndex(1);
};
scwin.tr_retrieve = async function () {
  dma_condition.set("onoffNo", scwin.onoffNo);
  dma_condition.set("crryinoutClsCd", scwin.crryinoutClsCd);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitDone = async function () {
  ed_vehclNo.setValue(ds_outInfo.getCellData(0, "vehclNo"));
  ed_cntrNo.setValue(ds_outInfo.getCellData(0, "cntrNo"));
  ed_lineCd.setValue(ds_outInfo.getCellData(0, "lineCd"));
  ed_cntrSt.setValue(ds_outInfo.getCellData(0, "cntrSt"));
  ed_fullEmptyClsCd.setValue(ds_outInfo.getCellData(0, "fullEmptyClsCd"));
  ed_indcLblock.setValue(ds_outInfo.getCellData(0, "indcLblock"));
  ed_wrkMemo.setValue(ds_outInfo.getCellData(0, "wrkMemo"));
  acb_lrow.setValue(ds_outInfo.getCellData(0, "lrow"));
  acb_ctier.setValue(ds_outInfo.getCellData(0, "ltier"));
  if (ds_outInfo.getCellData(0, "crryinoutClsCd") == "O") {
    ed_crryinoutClsCd.setValue("상차");
  } else {
    ed_crryinoutClsCd.setValue("하차");
  }
  acb_transit.setValue(ds_outInfo.getCellData(0, "indcLblock").substring(0, 1));
  await scwin.f_RetrieveTransit1(acb_transit.getValue());
  acb_transit1.setValue(ds_outInfo.getCellData(0, "indcLblock"));
  if (!$c.gus.cfIsNull($p, ds_outInfo.getCellData(0, "chgCntrNo"))) {
    tr_chgShow1.show();
    tr_chgShow2.show();
  } else {
    tr_chgShow1.hide();
    tr_chgShow2.hide();
  }
};
scwin.acb_transit_onselected = function () {
  scwin.f_RetrieveTransit1(acb_transit.getValue());
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents pda',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'pda-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업계획상세',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상하차 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_crryinoutClsCd',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'',label:'확정구역 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'acb_transit',renderType:'native',class:'sbx_pda',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'','ev:onselected':'scwin.acb_transit_onselected',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'',id:'acb_transit1',renderType:'native',class:'sbx_pda',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_transit'},E:[{T:1,N:'w2:label',A:{ref:'code'}},{T:1,N:'w2:value',A:{ref:'name'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CNTR NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'열 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'sbx_pda',editType:'select',id:'acb_lrow',renderType:'native',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lineCd',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE<br/>TYPE',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrSt',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'',label:'단 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'sbx_pda',editType:'select',id:'acb_ctier',renderType:'native',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FULL<br/>EMPTY',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fullEmptyClsCd',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_indcLblock',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',id:'tr_chgShow1'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'',label:'변경<br/>CNTR',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:'tr_chgShow2'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_chgCntrNo',placeholder:'',style:';color:;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이전 단',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_ltier',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'열',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_lrow',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkMemo',placeholder:'',style:';color:;',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right tac',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_complete',style:'',type:'button','ev:onclick':'scwin.btn_complete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]}]}]})