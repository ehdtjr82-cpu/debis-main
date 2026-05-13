/*amd /ui/ds/fs/consignmgnt/fs_404_01_01p.xml 10183 7c70ad2cde1e16edaa90b99278da85bbbc65aed10ab0abada2f088e5186c717b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_popup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lobran'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.longtermvehcl.RetrieveLongTermVehclPopUpListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_popup","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_popup","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중...','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran_combo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_lobran","key":"dma_lobran"}',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = async function () {
  debugger;
  scwin.params = $c.data.getParameter($p);
  scwin.strOnCloseTF = scwin.params.closeTF || scwin.params.param3 || "";
  lc_logisticsBranch.setValue(scwin.params.param0);
  ed_vehclNo.setValue(scwin.params.param1);
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_logisticsBranch"
  }];
  $c.data.setGauceUtil($p, codeOptions, function () {
    if (scwin.params.param0) {
      lc_logisticsBranch.setValue(scwin.params.param0);
    }
    if (ed_vehclNo.getValue() != "") {
      scwin.btn_search_onclick();
    }
  });

  //   scwin.btn_search_onclick();
};
scwin.btn_undo_onclick = function (e) {
  scwin.init();
};

//초기화
scwin.init = function () {
  lc_logisticsBranch.setValue("");
  ed_vehclNo.setValue("");
  ed_vehclNo.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------      
scwin.btn_search_onclick = function () {
  /*
      if ( ed_vehclNo.getValue() === "" &&  lc_logisticsBranch.getValue() === ""){
          $c.gus.cfAlertMsg("점소 선택 또는 차량번호 입력 후 검색하세요.");
          return ;
      }
  */
  if (ed_vehclNo.getValue() === "" && lc_logisticsBranch.getValue() === "") {
    ed_vehclNo.focus();
  } else {
    dma_search.set("lobranCd", lc_logisticsBranch.getValue());
    dma_search.set("vehclNo", ed_vehclNo.getValue());
    ds_popup.removeAll();
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  let nRow = ds_popup.getRowCount();
  if (nRow == 0) {
    total.setValue(nRow);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  if (nRow == 1 && scwin.strOnCloseTF == "T") {
    scwin.f_rtnValue(0);
    return;
  }
  ds_popup.setRowPosition(0);
  total.setValue(nRow);
};
scwin.f_rtnValue = function (row) {
  var ret = [];
  ret[0] = ds_popup.getCellData(row, "vehclShortCd");
  ret[1] = ds_popup.getCellData(row, "vehclNo");
  ret[2] = ds_popup.getCellData(row, "clntNm");
  ret[3] = ds_popup.getCellData(row, "lobranNm");
  ret[4] = ds_popup.getCellData(row, "clntNo");
  ret[5] = ds_popup.getCellData(row, "eqCd");
  ret[6] = ds_popup.getCellData(row, "lobranCd");
  $c.win.closePopup($p, ret);
};
scwin.gr_popup_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_logisticsBranch',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'10',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',style:'width:150px;',mandatory:'true',objType:'key',ref:'data:dma_search.vehclNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_undo',style:'',type:'button','ev:onclick':'scwin.btn_undo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_popup',id:'gr_popup',style:'',autoFit:'allColumn',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_popup_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래처명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'배정점소',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',sortable:'true',sortLabel:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})