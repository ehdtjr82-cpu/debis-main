/*amd /AI/eq_520_01_10b.xml 20387 84cc9023d96ca97f28fcbb73cec2b1e7a25b0953fa4fed863d6d0ecbebbf7f11 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtFrom',name:'입고시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtTo',name:'입고종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inClsCd',name:'입고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq420',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'입고작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputOutput',name:'입출고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspectionNo',name:'검수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inUpr',name:'입고단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.matprscond.RetrieveTermEachInCheckPresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq420","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_eq420","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveFixWrkPl',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_fixWrkPl","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fixWrkPl","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveFixWrkPl_submitdone','ev:submiterror':'scwin.sbm_retrieveFixWrkPl_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = "";
scwin.vMonthFirstDate = "";
scwin.userEqHomeClsCd = "";
scwin.userFixWrkPlCd = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vMonthFirstDate = scwin.vCurDate.substring(0, 6) + "01";
  scwin.userEqHomeClsCd = $c.ses.getEqHomeClsCd();
  scwin.userFixWrkPlCd = $c.ses.getFixWrkPlCd();
  dma_search.set("inDtFrom", scwin.vMonthFirstDate);
  dma_search.set("inDtTo", scwin.vCurDate);
  dma_search.set("homeClsCd", "");
  dma_search.set("wrkPlCd", "");
  dma_search.set("inClsCd", "");
  dma_search.set("clntCd", "");
  let codeOptions = [{
    grpCd: "PsCommonEBC",
    compID: "lc_homeClsCd",
    queryId: "retriveHomeClsList"
  }, {
    grpCd: "EQ017",
    compID: "lc_inClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
};
scwin.f_defaultValue = function () {
  $c.gus.cfInitObjects($p, [ed_clntNo, txt_clntNm]);
  if (scwin.userEqHomeClsCd != null && scwin.userEqHomeClsCd != "null" && scwin.userEqHomeClsCd != "") {
    lc_homeClsCd.setValue(scwin.userEqHomeClsCd);
  } else {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.setFocus();
  lc_inClsCd.setSelectedIndex(0);
  udc_inDt.setInitDate(scwin.vMonthFirstDate, scwin.vCurDate);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq420, null);
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, udc_inDt]);
  if (!chk) return;
  let inDtFrom = dma_search.get("inDtFrom");
  let inDtTo = dma_search.get("inDtTo");
  if (!$c.gus.cfIsAfterDate($p, inDtFrom, inDtTo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_RetrieveFixWrkPl = async function (homeClsCd) {
  dma_search.set("homeClsCd", homeClsCd);
  await $c.sbm.execute($p, sbm_retrieveFixWrkPl);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_clnt.ilCommonPopUp(scwin.callbackClnt, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");
      break;
  }
};
scwin.callbackClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
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
scwin.f_OzReport = async function () {
  let chk = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, udc_inDt]);
  if (!chk) return;
  let inDtFrom = dma_search.get("inDtFrom");
  let inDtTo = dma_search.get("inDtTo");
  if (!$c.gus.cfIsAfterDate($p, inDtFrom, inDtTo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  let odiParam = new ODIParam("eq_520_01_10");
  odiParam.add("homeClsCd", encodeURI(encodeURIComponent(lc_homeClsCd.getValue())));
  odiParam.add("homeClsNm", encodeURI(encodeURIComponent(lc_homeClsCd.getText())));
  odiParam.add("wrkPlCd", encodeURI(encodeURIComponent(lc_fixWrkPlCd.getValue())));
  odiParam.add("wrkPlNm", encodeURI(encodeURIComponent(lc_fixWrkPlCd.getText())));
  odiParam.add("inDtFrom", encodeURI(encodeURIComponent(inDtFrom)));
  odiParam.add("inDtTo", encodeURI(encodeURIComponent(inDtTo)));
  odiParam.add("inClsCd", encodeURI(encodeURIComponent(lc_inClsCd.getValue())));
  odiParam.add("inClsNm", encodeURI(encodeURIComponent(lc_inClsCd.getText())));
  odiParam.add("clntCd", encodeURI(encodeURIComponent(ed_clntNo.getValue().trim())));
  odiParam.add("clntNm", encodeURI(encodeURIComponent(txt_clntNm.getValue())));
  let formParam = new FormParam();
  let viewerParam = new ViewerParam();
  viewerParam.add("viewer.useprogressbar", "false");
  $c.gus.cfOZReport($p, "chb_printCheck", "chb_previewCheck", "/ps/eq/adjmmgnt/matprscond/eq_520_01_10.ozr", odiParam, viewerParam, formParam);
};
scwin.f_Excel = async function () {
  let chk = await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, udc_inDt]);
  if (!chk) return;
  let inDtFrom = dma_search.get("inDtFrom");
  let inDtTo = dma_search.get("inDtTo");
  if (!$c.gus.cfIsAfterDate($p, inDtFrom, inDtTo)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  if (ds_eq420.getRowCount() > 0) {
    $c.data.downloadGridViewExcel($p, gr_eq420, {
      fileName: "기간별입고현황.xlsx",
      sheetName: "기간별입고현황"
    });
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_018, ['[기간별 입고 check list] 자료', '[조회]']);
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_ozReport_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_eq420_onloadcompleted = async function (e) {
  let rowCnt = ds_eq420.getRowCount();
  spa_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.lc_homeClsCd_onchange = function (e) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
};
scwin.sbm_retrieveFixWrkPl_submitdone = function (e) {
  if (lc_homeClsCd.getValue() == "TR") {
    ds_fixWrkPl.insertRow(0);
    ds_fixWrkPl.setCellData(0, "code", "");
    ds_fixWrkPl.setCellData(0, "name", "전체");
  }
  lc_fixWrkPlCd.setValue(scwin.userFixWrkPlCd);
  if (lc_fixWrkPlCd.getSelectedIndex() == -1) {
    lc_fixWrkPlCd.setSelectedIndex(0);
  }
};
scwin.sbm_retrieveFixWrkPl_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.lc_inClsCd_onchange = function (e) {
  if (lc_inClsCd.getSelectedIndex() == 3) {
    ed_clntNo.setDisabled(false);
    txt_clntNm.setDisabled(false);
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
  }
};
scwin.ed_clntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, txt_clntNm, 1);
};
scwin.txt_clntNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_clntNm, ed_clntNo, 1, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_search.homeClsCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.wrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_inDt',refEdDt:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_inClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.inClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',nameId:'txt_clntNm',style:'',id:'udc_clnt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'기간별 입고 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq420',focusMode:'row',id:'gr_eq420',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'입고</br>작업장',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'부품코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'장비모델명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputOutput',inputType:'text',style:'',value:'입/출고',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inspectionNo',inputType:'text',style:'',value:'검수번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'text',style:'',value:'입고일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inQty',value:'입고수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inUpr',value:'입고단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAmt',value:'입고금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAmt',value:'청구금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputOutput',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inspectionNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inUpr',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'inAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'bilgAmt\')',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'[단위 : 원]',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ozReport',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]}]}]}]}]}]})