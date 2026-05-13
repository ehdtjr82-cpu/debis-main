/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_01_01p.xml 15935 492aac9c786d0fdd58e7d2537c381f9e2b23b5d9c3e9e5a88af4fc13f7884e9c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilOilStatNo',name:'주유소번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsaleYn',name:'직판여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOilStrPlcNo',name:'상위주유소번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperOilStrPlcNm',name:'상위주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatLvlClsCd',name:'주유소레벨구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilSelfClsCd',name:'유류자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oilList_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilStationPatternCd',name:'구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilOilStatNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsaleYn',name:'직판여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_oilList_retrieve',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveFmsOilStationCodeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oilList_con","key":"IN_DS1"},{"id":"ds_oilList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oilList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_oilList_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.p_dsaleYn = "전체";
scwin.p_oilStationPatternCd = "전체";
scwin.p_oilStatNo = "";
scwin.p_oilStatNm = "";
scwin.p_isCdYn = "";
scwin.p_isEnable = "";
//-------------------------------------------------------------------------
// String 값 trim
//-------------------------------------------------------------------------
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.valueObject = $c.data.getParameter($p);
  if (scwin.valueObject != "" && scwin.valueObject != undefined) {
    scwin.p_oilStationPatternCd = !scwin.valueObject.oilStationPatternCd ? scwin.valueObject.param.oilStationPatternCd : scwin.valueObject.oilStationPatternCd;
    scwin.p_oilStatNo = !scwin.valueObject.oilOilStatNo ? scwin.valueObject.param.oilOilStatNo : scwin.valueObject.oilOilStatNo;
    scwin.p_oilStatNm = !scwin.valueObject.oilStatNm ? scwin.valueObject.param.oilStatNm : scwin.valueObject.oilStatNm;
    scwin.p_isCdYn = !scwin.valueObject.isCdYn ? scwin.valueObject.param.isCdYn : scwin.valueObject.isCdYn;
    scwin.p_isEnable = !scwin.valueObject.isEnable ? scwin.valueObject.param.isEnable : scwin.valueObject.isEnable;
  }
  acb_oilStationPatternCd.focus();
  acb_oilStationPatternCd.setValue(scwin.p_oilStationPatternCd);
  acb_dsaleYn.setValue(scwin.p_dsaleYn);
  ed_oilStatNo.setValue(scwin.p_oilStatNo);
  ed_oilStatNm.setValue(scwin.p_oilStatNm);
  if (scwin.p_dsaleYn != "") {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //validation check
  let ret = await $c.gus.cfValidate($p, [acb_oilStationPatternCd, acb_dsaleYn]);
  if (!ret) {
    return false;
  }
  await $c.sbm.execute($p, sbm_oilList_retrieve);
};

//-------------------------------------------------------------------------
// 결과값 리턴
//-------------------------------------------------------------------------
scwin.f_OnDblClk = function () {
  let returnObject = {};
  let currentRow = ds_oilList.getRowPosition();
  returnObject.oilStationPatternCd = ds_oilList.getCellData(currentRow, "oilStationPatternCd");
  returnObject.oilOilStatNo = ds_oilList.getCellData(currentRow, "oilOilStatNo");
  returnObject.oilStatNm = ds_oilList.getCellData(currentRow, "oilStatNm");
  returnObject.dsaleYn = ds_oilList.getCellData(currentRow, "dsaleYn");
  returnObject.sellClntNo = ds_oilList.getCellData(currentRow, "clntNo");
  returnObject.sellClntNm = ds_oilList.getCellData(currentRow, "clntNm");
  $c.win.closePopup($p, returnObject);
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let count = ds_oilList.getRowCount();
  if (!(count > 0)) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_008, ['주유소정보 ']));
    return;
  }
  const options = {
    fileName: '주유소정보.xlsx',
    sheetName: '주유소정보'
  };
  await $c.data.downloadGridViewExcel($p, gr_oilList, options);
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [acb_oilStationPatternCd, acb_dsaleYn]);
  ed_oilStatNo.setValue("");
  ed_oilStatNm.setValue("");
};
scwin.f_enterKey = function (keycode) {
  if (keycode == 13) {
    if (ed_oilStatNo.getValue() + ed_oilStatNm.getValue() != "") {
      scwin.f_Retrieve();
    }
  }
};
scwin.dsaleYnFm = function (data) {
  return $c.gus.decode($p, data, 1, "Yes", "No");
};
scwin.oilStatLvlClsCdFm = function (data) {
  return $c.gus.decode($p, data, "S", "본사", "J", "지사", "O", "주유소");
};
scwin.oilSelfClsCdCdFm = function (data) {
  return $c.gus.decode($p, data, "S", "본사", "J", "지사", "O", "주유소");
};
scwin.sbm_oilList_retrieve_submitdone = async function (e) {
  let rowCnt = ds_oilList.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.gr_oilList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > -1) {
    scwin.f_OnDblClk();
    $c.win.closePopup($p);
  }
};
scwin.ed_oilStatNm_onkeyup = function (e) {
  if (e.keyCode == 13) {
    scwin.f_enterKey(e.keyCode);
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.ed_oilStatNo_onkeyup = function (e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    let data = e.target.value.toUpperCase();
    ed_oilStatNo.setValue(data);
  }
  if (e.keyCode == 13) {
    scwin.f_enterKey(e.keyCode);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'sp_title',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_oilStationPatternCd',search:'start',style:'width:100px;',submenuSize:'fixed',mandatory:'true',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'data:dma_oilList_con.oilStationPatternCd',title:'구분'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'전체'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'J'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'주유소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직판여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',chooseOptionLabel:'전체',class:'',editType:'select',id:'acb_dsaleYn',mandatory:'true',ref:'data:dma_oilList_con.dsaleYn',search:'start',style:'width:100px;',submenuSize:'fixed',title:'직판여부'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'전체'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'직판'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_oilStatNo',style:'width: 80px;',editType:'select',maxlength:'4',validateOnInput:'true',allowChar:'a-zA-Z0-9',ref:'data:dma_oilList_con.oilOilStatNo',objType:'data',title:'주유소코드','ev:onkeyup':'scwin.ed_oilStatNo_onkeyup'}},{T:1,N:'w2:searchbox',A:{id:'ed_oilStatNm',style:'',objType:'key',mandatory:'false',ref:'data:dma_oilList_con.oilStatNm','ev:onkeyup':'scwin.ed_oilStatNm_onkeyup',title:'주유소명'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridID:'gr_oilList',btnUser:'Y',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilList',id:'gr_oilList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_oilList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'주유소</br>번호 ',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'주유소명',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'직판여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'상위주유소번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'상위주유소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'주유소</br>레벨구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'유류</br>자가구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'거래처</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'담당자명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'oilOilStatNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'oilStatNm',inputType:'text',removeBorderStyle:'false',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dsaleYn',displayMode:'label',displayFormatter:'scwin.dsaleYnFm'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'upperOilStrPlcNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'upperOilStrPlcNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'oilStatLvlClsCd',displayMode:'label',displayFormatter:'scwin.oilStatLvlClsCdFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'oilSelfClsCd',displayMode:'label',displayFormatter:'scwin.oilSelfClsCdCdFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'telNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'picNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})