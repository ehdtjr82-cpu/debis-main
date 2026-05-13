/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_05b.xml 10331 6c26be5c7c83a6daad3fbd36eb6570748ce58272410178822b7ccc2603635127 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bonded',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bondZoneCd',name:'보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondZoneCdNm',name:'보세구역코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jrsdCstmCd',name:'관할세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondZoneEngCd',name:'보세구역영문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondZoneTyp',name:'EDI한정어',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bondedZoneCd',name:'보세구역코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransCodeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_bonded","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bonded","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrprewrk.SaveBondedTransCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_bonded","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

/**
 * [신규]
 */
scwin.btn_Add_onclick = function (e) {
  if (ds_bonded.getRowCount() < 1) {
    $c.win.alert($p, "조회 후 신규로 등록해 주시기 바랍니다");
  } else {
    const idx = ds_bonded.insertRow();
    gr_bonded.setFocusedCell(idx, "bondZoneCd");
  }
};

/**
 * 보세사업코드 popup
 */
scwin.udc_comCode_bond_onclickEvent = function (e) {
  udc_comCode_bond.cfCommonPopUp(scwin.udc_comCode_bond_callBackFunc, ed_bondedCd.getValue(), ed_bondedNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 보세사업코드 pop callback
 */
scwin.udc_comCode_bond_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bondedCd, ed_bondedNm);
};

/**
 * 보세사업코드 popup - code onblur
 */
scwin.udc_comCode_bond_onblurCodeEvent = function (e) {
  if (ed_bondedCd.getValue() === "") {
    ed_bondedNm.setValue("");
  } else {
    udc_comCode_bond.cfCommonPopUp(scwin.udc_comCode_bond_callBackFunc, ed_bondedCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};

/**
 * 보세사업코드 popup - name onviewchange
 */
scwin.udc_comCode_bond_onviewchangeNameEvent = function (info) {
  if (ed_bondedNm.getValue() === "") {
    ed_bondedCd.setValue("");
  }
};

/**
 * 조회
 */
scwin.btn_retrieve_onclick = function (e) {
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * 조회 callback
 */
scwin.sbm_retrieve_submitdone = function () {
  let rowcnt = ds_bonded.getRowCount();
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else {
    gr_bonded.setFocusedCell(0, 0);
    total.setValue(rowcnt);
  }
};

/**
 * 그리드 row index change
 */
scwin.gr_bonded_onrowindexchange = function (rowIndex, oldRow) {
  const status = ds_bonded.getRowStatus(rowIndex);
  if (status != "C") {
    gr_bonded.setCellReadOnly(rowIndex, "bondZoneCd", true);
  }
};

/**
 * [저장]
 */
scwin.btn_save_onclick = async function (e) {
  // 필수 입력 사항 체크
  let nValue = await $c.gus.cfValidate($p, [gr_bonded]);
  if (!nValue) return;
  let confirm = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (confirm) {
    const rtn = await $c.sbm.execute($p, sbm_save);

    // server exception 시 흐르지 않음
    // SD-W0146■해당 세관코드가 존재하지 않습니다.■공통코드에서 세관코드를 먼저 등록 하시기 바랍니다.
    if (rtn) {
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.btn_retrieve_onclick();
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세사업코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bondedCd',nameId:'ed_bondedNm',UpperFlagCode:'1',maxlengthCode:'10',mandatoryCode:'true',allowCharCode:'0-9',id:'udc_comCode_bond',selectID:'retrieveBondZoneRound','ev:onclickEvent':'scwin.udc_comCode_bond_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_bond_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_bond_onviewchangeNameEvent',maxlengthName:'50',refDataCollection:'dma_search',code:'bondedZoneCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_bonded',id:'gr_bonded',style:'',visibleRowNum:'17',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_bonded_onrowindexchange',gridName:'보세운송처리'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'보세구역코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'보세구역코드명',width:'240',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'관할세관코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'보세구역영문코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'EDI한정어',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bondZoneCd',inputType:'text',width:'120',textAlign:'center',maxLength:'10',allowChar:'0-9',mandatory:'true',dataType:'number',validateOnInput:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bondZoneCdNm',inputType:'text',width:'240',textAlign:'left',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jrsdCstmCd',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bondZoneEngCd',inputType:'text',width:'120',maxLength:'5',allowChar:'a-zA-Z',validateOnInput:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bondZoneTyp',inputType:'text',width:'120',validateOnInput:'true',maxByteLength:'2'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column20',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Add',style:'',type:'button','ev:onclick':'scwin.btn_Add_onclick',objType:'bCreate',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bSave',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})