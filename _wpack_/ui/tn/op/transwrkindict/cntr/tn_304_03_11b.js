/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_11b.xml 19129 bc3036100eeab319e896e9f97683ef8acaf2a0da77d79b8188c5b25633db4483 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSt',name:'SIZE/TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'열',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ltier',name:'단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crryinoutDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_block',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lrow',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ltier',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_saveInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lblock',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctier',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lrow',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.op.transwrkindict.cntr.RetrieveCyRsLodSearchCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_outInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.op.transwrkindict.cntr.UpdateCyRsLodSearchDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_outInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_block',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_block","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.DDate;
scwin.reqWrkDt;
scwin.cntrNo;
scwin.eqCd;
scwin.wrkPlCd;
scwin.lobranCd;
scwin.fullEmptyClsCd;
scwin.selfClsCd;
scwin.memJson;
scwin.pgrId;
scwin.condWrkDt;
scwin.onpageload = function () {
  scwin.initSetting();
  scwin.f_getBlockInfo();
  hid_wrkPlCd.setValue(scwin.wrkPlCd);
  hid_alert_chk.setValue("N");
  if (scwin.reqWrkDt == "") {
    ica_condWrkDt.setValue(scwin.DDate);
  } else {
    ica_condWrkDt.setValue(scwin.reqWrkDt);
    //scwin.f_retrieve();
  }
};
scwin.initSetting = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.DDate = WebSquare.date.getCurrentServerDate().substring(0, 8);
  scwin.reqWrkDt = $c.data.getParameter($p, "reqWrkDt") == null ? "" : $c.data.getParameter($p, "reqWrkDt");
  scwin.cntrNo = $c.data.getParameter($p, "cntrNo") == null ? "" : $c.data.getParameter($p, "cntrNo");
  scwin.eqCd = $c.data.getParameter($p, "eqCd") == null ? "" : $c.data.getParameter($p, "eqCd");
  scwin.wrkPlCd = $c.data.getParameter($p, "wrkPlCd") == null ? "" : $c.data.getParameter($p, "wrkPlCd");
  scwin.lobranCd = $c.data.getParameter($p, "lobranCd") == null ? "" : $c.data.getParameter($p, "lobranCd");
  scwin.fullEmptyClsCd = $c.data.getParameter($p, "fullEmptyClsCd") == null ? "" : $c.data.getParameter($p, "fullEmptyClsCd");
  scwin.selfClsCd = $c.data.getParameter($p, "selfClsCd") == null ? "" : $c.data.getParameter($p, "selfClsCd");
  scwin.pgrId = $c.data.getParameter($p, "pgrId") == null ? "tn_304_03_11b" : $c.data.getParameter($p, "pgrId");
  scwin.condWrkDt = $c.data.getParameter($p, "condWrkDt") == null ? "" : $c.data.getParameter($p, "condWrkDt");
  if (scwin.wrkPlCd == "" || scwin.eqCd == "" || scwin.lobranCd == "") {
    let loginData = scwin.getCYLoginData();
    if (loginData != null) {
      scwin.wrkPlCd = loginData.wrkPlCd ?? "";
      scwin.lobranCd = loginData.lobranCd ?? "";
      scwin.eqCd = loginData.eqCd ?? "";
    }
  }
  if (scwin.lobranCd == "" || scwin.eqCd == "" || scwin.wrkPlCd == "") {
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
  ;
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

//-------------------------------------------------------------------------
// 완료
//-------------------------------------------------------------------------
scwin.f_completeWrk = async function () {
  var cfrm = await $c.win.confirm($p, "작업을 완료 하시겠습니까?");
  if (cfrm) {
    var j = 0;
    for (var i = 0; i <= ds_outInfo.getRowCount(); i++) {
      if (ds_outInfo.getRowStatus(i) == "U") {
        if (ds_outInfo.getCellData(i, "lblock") == "") {
          await $c.win.alert($p, '확정블록 코드를 입력하세요.');
          return false;
        } else {
          ds_saveInfo.insertRow(ds_outInfo.getRowCount());
          ds_saveInfo.setCellData(j, "cntrNo", ds_outInfo.getCellData(i, "cntrNo"));
          ds_saveInfo.setCellData(j, "currPosCd", ds_outInfo.getCellData(i, "currPosCd"));
          ds_saveInfo.setCellData(j, "lblock", ds_outInfo.getCellData(i, "lblock"));
          ds_saveInfo.setCellData(j, "ctier", ds_outInfo.getCellData(i, "ltier"));
          ds_saveInfo.setCellData(j, "lrow", ds_outInfo.getCellData(i, "lrow"));
          ds_saveInfo.setCellData(j, "wrkPlCd", scwin.wrkPlCd);
          j++;
        }
      }
    }
    ;
    if (ds_saveInfo.getRowCount() > 0) {
      $c.sbm.execute($p, sbm_save);
    } else {
      $c.win.alert($p, '완료할 작업이 없습니다.<br>완료하실작업의 구역을 선택하세요.');
    }
    ;
  } else {
    $c.win.alert($p, '완료할 작업이 없습니다.<br>완료하실작업의 구역을 선택하세요.');
  }
  ;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  hid_alert_chk.setValue('Y');
  dma_search.set("crryinoutDt", ica_condWrkDt.getValue());
  dma_search.set("currPosCd", hid_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_selectRow = function () {
  // 안씀
  if (ds_outInfo.getRowCount() == 0) {
    return;
  }
  var reqWrkDt = ds_search.getCellData(0, "crryinoutDt");
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_12b.xml";
  let programId = scwin.pgrId;
  let params = {
    wrkPlCd: scwin.wrkPlCd,
    cntrNo: ds_outInfo.getCellData(ds_outInfo.getRowPosition(), 'cntrNo'),
    reqWrkDt: reqWrkDt,
    eqCd: scwin.eqCd,
    lobranCd: scwin.lobranCd,
    fullEmptyClsCd: scwin.fullEmptyClsCd,
    pgrId: scwin.pgrId,
    condWrkDt: scwin.condWrkDt
  };

  //CY 적재

  if (!$c.gus.cfIsNull($p, url)) {
    $c.win.openMenu($p, "", strUrl, programId, params, {
      openAction: "exist"
    });
  }
};
scwin.f_onoffSearch = function () {
  var crryinoutDt = ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "crryinoutDt");
  var cntrNo = ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "cntrNo");
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_02b.xml";
  let programId = scwin.pgrId;
  let params = {
    wrkPlCd: scwin.wrkPlCd,
    reqWrkDt: scwin.reqWrkDt,
    lobranCd: scwin.lobranCd,
    eqCd: scwin.eqCd,
    fullEmptyClsCd: scwin.fullEmptyClsCd,
    selfClsCd: scwin.selfClsCd,
    pgrId: scwin.pgrId,
    condWrkDt: scwin.condWrkDt
  };
  $c.win.openMenu($p, "CY 상하차정보조회", strUrl, programId, params, {
    openAction: "exist"
  });
};
scwin.f_containerTransfer = function () {
  var crryinoutDt = ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "crryinoutDt");
  var cntrNo = ds_outInfo.getCellData(ds_outInfo.getRowPosition(), "cntrNo");
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_13b.xml";
  let programId = scwin.pgrId;
  let params = {
    wrkPlCd: scwin.wrkPlCd,
    reqWrkDt: scwin.reqWrkDt,
    lobranCd: scwin.lobranCd,
    eqCd: scwin.eqCd,
    fullEmptyClsCd: scwin.fullEmptyClsCd,
    pgrId: scwin.pgrId
  };
  $c.win.openMenu($p, "CY 이적등록", strUrl, programId, params, {
    openAction: "exist"
  });
};
scwin.f_close = function () {
  let strUrl = "/ui/tn/op/transwrkindict/cntr/tn_304_03_02b.xml";
  let programId = scwin.pgrId;
  let params = {
    condWrkDt: ica_condWrkDt.getValue(),
    pgrId: scwin.pgrId
  };
  $c.win.openMenu($p, "CY 상하차정보조회", strUrl, programId, params, {
    openAction: "exist"
  });
};
scwin.f_getBlockInfo = function () {
  //작업장 블럭정보 조회
  ds_block.removeAll();
  sbm_block.action = "/ncall.tn.op.transwrkindict.cntr.RetrieveCyRsBlockCMD.do?wrkPlCd=" + scwin.wrkPlCd;
  $c.sbm.execute($p, sbm_block);
};
scwin.f_ValidateCblocck = function () {
  if (ds_outInfo.getCellData(0, "lblock") == '') {
    $c.win.alert($p, '확정블록 코드를 입력하세요.');
    return false;
  }
  return true;
};
scwin.sbm_save_submitDone = function () {
  hid_alert_chk.setValue("N");
  dma_search.set("crryinoutDt", ica_condWrkDt.getValue());
  dma_search.set("currPosCd", hid_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitDone = async function () {
  if (ds_outInfo.getRowCount() == 0 && hid_alert_chk.getValue() == "Y") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    hid_alert_chk.setValue("N");
  }
};
scwin.btn_onoffSearch_onclick = function (e) {
  scwin.f_onoffSearch();
};
scwin.btn_containerTransfer_onclick = function (e) {
  scwin.f_containerTransfer();
};
scwin.btn_complete_onclick = function (e) {
  scwin.f_completeWrk();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_close();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents pda',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'pda-wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적재리스트',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_condWrkDt',style:'',title:'작업일자'}}]}]}]},{T:1,N:'xf:input',A:{id:'hid_alert_chk',style:'width:144px; height:21px; display:none;'}},{T:1,N:'xf:input',A:{id:'hid_wrkPlCd',style:'width:144px; height:21px; display:none;'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_outInfo',id:'gr_outInfo',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'CNTR 번호',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'청구거래처명',width:'190'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'LINE',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SIZE/TYPE',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'F/E',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'구역',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'열',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'단',width:'100',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'190'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSt',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lblock',inputType:'autoComplete',width:'100',allOption:'',chooseOption:'',ref:'',readOnly:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_block'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'lrow',inputType:'autoComplete',width:'100',allOption:'',chooseOption:'',ref:'',readOnly:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5열'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ltier',inputType:'autoComplete',width:'100',allOption:'',chooseOption:'',ref:'',readOnly:'false',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5단'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right tac',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_onoffSearch',style:'',type:'button','ev:onclick':'scwin.btn_onoffSearch_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업리스트'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_containerTransfer',style:'',type:'button','ev:onclick':'scwin.btn_containerTransfer_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이적등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_complete',style:'',type:'button','ev:onclick':'scwin.btn_complete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]}]}]})