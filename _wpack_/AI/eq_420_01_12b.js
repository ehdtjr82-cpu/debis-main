/*amd /AI/eq_420_01_12b.xml 16070 ed9607a6d952a6087b339325c66701b92da1e0466980faafd4be321d9feb62bd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcmdDt',name:'권고일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partCd',name:'부품코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq422',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'catNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcmdOrderQty',name:'권고발주수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'safeStockQty',name:'안전재고량',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcmdDt',name:'권고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsRecommendOrderingVolumeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_eq422","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eq422","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_fixWrkPl',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_fixWrkPl","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fixWrkPl","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_fixWrkPl_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.eqHomeClsCd = "";
scwin.fixWrkPlCd = "";
scwin.onpageload = function () {
  scwin.eqHomeClsCd = $c.ses.getEqHomeClsCd();
  scwin.fixWrkPlCd = $c.ses.getFixWrkPlCd();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  dma_search.set("rcmdDt", scwin.vCurDate);
  dma_search.set("homeClsCd", "");
  dma_search.set("wrkPlCd", "");
  dma_search.set("catCd", "");
  dma_search.set("partCd", "");
  scwin.f_SetCommonCode();
};
scwin.f_SetCommonCode = function () {
  let codeOptions = [{
    grpCd: "PsCommonEBC",
    queryId: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }, {
    grpCd: "EQ005",
    compID: "lc_catCd",
    opt: {
      "chooseOption": "true",
      "chooseOptionLabel": "전체"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
};
scwin.f_defaultValue = function () {
  $c.gus.cfInitObjects($p, [txt_partCd, txt_partNm]);
  if (scwin.eqHomeClsCd != "" && scwin.eqHomeClsCd != "null") {
    lc_homeClsCd.setValue(scwin.eqHomeClsCd);
  } else {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.setFocus();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq422, null);
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd]);
  if (!chk) return;
  ds_search.removeAll();
  ds_search.insertRow();
  ds_search.setCellData(0, "homeClsCd", lc_homeClsCd.getValue());
  ds_search.setCellData(0, "wrkPlCd", lc_fixWrkPlCd.getValue());
  ds_search.setCellData(0, "rcmdDt", dma_search.get("rcmdDt"));
  ds_search.setCellData(0, "catCd", lc_catCd.getValue());
  ds_search.setCellData(0, "partCd", txt_partCd.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_RetrieveFixWrkPl = async function (homeClsCd) {
  ds_search.removeAll();
  ds_search.insertRow();
  ds_search.setCellData(0, "homeClsCd", homeClsCd);
  await $c.sbm.execute($p, sbm_fixWrkPl);
};
scwin.sbm_fixWrkPl_submitdone = function (e) {
  let items = [];
  for (let i = 0; i < ds_fixWrkPl.getRowCount(); i++) {
    items.push({
      label: ds_fixWrkPl.getCellData(i, "name"),
      value: ds_fixWrkPl.getCellData(i, "code")
    });
  }
  lc_fixWrkPlCd.setNodeSet("data:ds_fixWrkPl", "code", "name");
  if (scwin.fixWrkPlCd != "" && scwin.fixWrkPlCd != "null") {
    lc_fixWrkPlCd.setValue(scwin.fixWrkPlCd);
    scwin.fixWrkPlCd = "";
  } else {
    if (lc_fixWrkPlCd.getItemCount() > 0) {
      lc_fixWrkPlCd.setSelectedIndex(0);
    }
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      rtnList = udc_part.ilCommonPopUp(scwin.callbackPartInfo, pCode, pName, pClose, null, null, null, '3,4,5,6,7,8,9,10', null, null, null, null, null, null, pAllSearch, "부품,부품코드,부품명");
      break;
  }
};
scwin.callbackPartInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_partCd, txt_partNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_Excel = async function () {
  let chk = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd]);
  if (!chk) return;
  if (ds_eq422.getRowCount() > 0) {
    $c.data.downloadGridViewExcel($p, gr_eq422, {
      fileName: "부품 권고발주량 조회.xlsx",
      sheetName: "부품 권고발주량 조회"
    });
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, ['[부품 권고발주량 조회] 자료', '[조회]']);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  spa_totalRow.setValue(ds_eq422.getTotalRow());
  if (ds_eq422.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.lc_homeClsCd_onchange = function (e) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.txt_partCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_partCd, txt_partNm, 1);
};
scwin.txt_partNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_partNm, txt_partCd, 1, false);
};
scwin.udc_part_onClick = function () {
  scwin.f_openCommonPopUp(1, txt_partCd.getValue(), txt_partNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_search.homeClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width:150px;',submenuSize:'fixed',ref:'data:ds_search.wrkPlCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_catCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.catCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_part',popupID:'',selectID:'',codeId:'txt_partCd',validTitle:'',nameId:'txt_partNm',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품 권고발주량 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq422',focusMode:'row',id:'gr_eq422',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'계통',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'부품코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'장비모델명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcmdOrderQty',inputType:'text',style:'',value:'권고</br>발주수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',style:'',value:'재고량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'safeStockQty',inputType:'text',style:'',value:'안전재고량',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcmdOrderQty',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'safeStockQty',inputType:'text',style:'',value:'',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',expression:'sum(\'rcmdOrderQty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'stockQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'safeStockQty\')',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})