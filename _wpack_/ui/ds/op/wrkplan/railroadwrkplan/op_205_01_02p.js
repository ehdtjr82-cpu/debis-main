/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_205_01_02p.xml 16933 23d9630b70d547a24675e4eb09b3921504bc65d301b901e9db6e5395b816024e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieveCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHndlRateYn',name:'조작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvReHndlRateYn',name:'재조작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvCmpndPrtgCostYn',name:'구내',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvInfoUseRateYn',name:'정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'공사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmCd',name:'운송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkPathSeq',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkStpSeq',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommNo',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCutAmt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptRgnCd',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRgnCd',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTransWrkIndictNo',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTransRsltsSeq',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnNo',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldArvReHndlRateYn',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldArvCmpndPrtgCostYn',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHndlRateYn',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptReHndlRateYn',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptCmpndPrtgCostYn',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptInfoUseRateYn',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name65',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailTariffModficationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieveCond","key":"IN_DS1"},{"id":"ds_retrieveResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.op.wrkrslts.railroadwrkrslts.UpdateRailTariffModficationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieveResults","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.f_adminfrtcarYn = function (data) {
  var retVal;
  switch (data) {
    case "0":
      retVal = "사";
      break;
    case "1":
      retVal = "공";
      break;
    case "3":
      retVal = "";
      break;
    case "4":
      retVal = "";
      break;
    default:
      retVal = data;
  }
  return retVal;
};
scwin.onpageload = function () {
  let codeOptions = [{
    grpCd: "SD113",
    compID: "acb_cnd_odrKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
  //ed_odrNo.setValue("BC40604190037");
};
scwin.callBackCommonCode = async function () {
  dlt_commonCodeSD113.removeColumnFilter('cd');
  var filterOptions = {
    type: 'regExp',
    colIndex: 'cd',
    key: /^(?!CK$|CZ$|CJ$|CL$|CM$|CN$).*C.*/i,
    condition: 'and'
  };
  dlt_commonCodeSD113.setColumnFilter(filterOptions);
  dlt_commonCodeSD113.reform();
  gr_retrieveResults.setReadOnly("column", "adminfrtcarYn", true);
};
scwin.f_Retrieve = function () {
  if (ed_odrNo.getValue() == "") {
    $c.win.alert($p, "오더번호는 필수입력 사항입니다.");
    return false;
  }
  ;
  ds_retrieveResults.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Save = function () {
  $c.sbm.execute($p, sbm_regist);
};
scwin.sbm_retrieve_submitdone = function (e) {
  totalRows.setValue(ds_retrieveResults.getTotalRow());
};
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, [acb_cnd_odrKndCd, ed_cnd_cntrNo, ed_odrNo]);
  ed_cnd_cntrNo.focus();
};
scwin.btn_PopUpOdrNoList_onclick = function (e) {
  scwin.f_openPopUpOdrNo();
};
scwin.f_openPopUpOdrNo = async function () {
  let options = {};
  let url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_31p.xml";
  let args = [];
  args[0] = ed_cnd_cntrNo.getValue(); //컨테이너번호
  args[1] = acb_cnd_odrKndCd.getValue(); //오더종류

  // 팝업 옵션 설정
  options = {
    id: "taxPop",
    type: "browserPopup",
    popupName: "오더검색팝업",
    paramTitle: "오더검색팝업",
    width: 1100,
    height: 830
  };
  var rtnList = await $c.win.openPopup($p, url, options, args);
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_odrNo.setValue(rtnList[0]); // 오더번호
    }
  }
};
scwin.ed_cnd_cntrNo_onblur = function (e) {
  if (ed_cnd_cntrNo.getValue() != "") {
    scwin.f_openPopUpOdrNo();
  }
};
scwin.sbm_regist_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    //$c.gus.cfShowError(sbm_search);
    return;
  } else {
    $c.win.alert($p, "성공적으로 수정하였습니다.");
    scwin.f_Retrieve();
  }
};
scwin.ed_cnd_cntrNo_oneditkeyup = function (info, e) {
  var vals = info.newValue;
  ed_cnd_cntrNo.setValue(vals.toUpperCase());
};
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  var values = info.newValue;
  ed_odrNo.setValue(values.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w200',editType:'select',id:'acb_cnd_odrKndCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',visibleRowNum:'17'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_cnd_cntrNo',placeholder:'',style:'',ref:'data:ds_retrieveCond.cntrNo','ev:onblur':'scwin.ed_cnd_cntrNo_onblur',maxlength:'11',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.ed_cnd_cntrNo_oneditkeyup'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_PopUpOdrNoList',style:'',type:'button','ev:onclick':'scwin.btn_PopUpOdrNoList_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_odrNo',placeholder:'',style:'',ref:'data:ds_retrieveCond.odrNo',allowChar:'a-zA-Z0-9',maxlength:'13','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveResults',id:'gr_retrieveResults',style:'',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'컨테이너',width:'128',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'도착역',width:'280',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'FROM',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'TO',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'SIZE',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'TYPE',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'E/F',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'SEAL NO',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'129',inputType:'text',id:'column21',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column23',value:'공사<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column25',value:'운송<br/>명의',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'출발일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'도착일자',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'조작',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'재조작',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'구내',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'정보',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'128',textAlign:'left',maxLength:'10'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvHndlRateYn',inputType:'checkbox',width:'70',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvReHndlRateYn',inputType:'checkbox',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvCmpndPrtgCostYn',inputType:'checkbox',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvInfoUseRateYn',inputType:'checkbox',width:'70',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'70',textAlign:'center',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'70',textAlign:'center',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70',textAlign:'center',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70',textAlign:'center',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70',textAlign:'center',maxLength:'1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sealNo',displayMode:'label',textAlign:'left',maxLength:'18'}},{T:1,N:'w2:column',A:{width:'129',inputType:'text',id:'odrNo',displayMode:'label',textAlign:'left',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'adminfrtcarYn',displayMode:'label',customFormatter:'scwin.f_adminfrtcarYn',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'transNmCd',displayMode:'label',textAlign:'center',maxLength:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStDt',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkEndDt',value:'',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]}]}]}]}]}]})