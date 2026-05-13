/*amd /AI/op_304_03_04b.xml 8866 c31bd4ea3c1e8c22f5f08cdad626186eef5e519e57d0ec2a0eeace10d19cad38 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkCls',name:'작업구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'등록건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col4',name:'미확인건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col5',name:'반려건수',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_joblevel',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveDiscountSurchargePresentConditionCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_joblevel',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_joblevel","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_joblevel","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_joblevel_submitdone','ev:submiterror':'scwin.sbm_joblevel_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pos_groupCode = 0;
scwin.afLoad = 0;
scwin.sLoUpperLobranCd = "";
scwin.vCurDate = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strFromDate = scwin.vCurDate;
  scwin.strToDate = scwin.vCurDate;
  scwin.sLoUpperLobranCd = $c.ses.getLobranCd();
  let codeOptions = [{
    grpCd: "OP190",
    compID: "wrkCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.sbm.execute($p, sbm_joblevel);
};
scwin.onUdcCompleted = function () {
  udc_wrkDt.setInitDate(scwin.strFromDate, scwin.strToDate);
};
scwin.f_Retrieve = async function () {
  dma_retrieve.set("lobranCd", co_lc_logisticsBranch.getValue());
  dma_retrieve.set("wrkStDt", ica_wrkStDt.getValue());
  dma_retrieve.set("wrkEndDt", ica_wrkEndDt.getValue());
  dma_retrieve.set("wrkCls", wrkCls.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  udc_wrkDt.setInitDate(scwin.strFromDate, scwin.strToDate);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (scwin.afLoad != 0) {
    if (ds_emp.getCellData(0, "col3") == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    }
  }
  $c.gus.cfGoPrevPosition($p, ds_emp, scwin.pos_groupCode);
  scwin.afLoad = 1;
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_joblevel_submitdone = function (e) {
  let foundIdx = -1;
  for (let i = 0; i < ds_joblevel.getRowCount(); i++) {
    if (ds_joblevel.getCellData(i, "lobranCd") == scwin.sLoUpperLobranCd) {
      foundIdx = i;
      break;
    }
  }
  if (foundIdx >= 0) {
    co_lc_logisticsBranch.setSelectedIndex(foundIdx);
  } else {
    co_lc_logisticsBranch.setSelectedIndex(0);
  }
  scwin.f_Retrieve();
};
scwin.sbm_joblevel_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_lc_logisticsBranch',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'wrkCls',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'',refEdDt:'ica_wrkEndDt',refStDt:'ica_wrkStDt',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_emp',id:'gr_emp',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',value:'구분',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',value:'등록건수',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',value:'미확인건수',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',value:'반려건수',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',width:'200',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',width:'200',textAlign:'center',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',width:'200',textAlign:'center',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',width:'200',textAlign:'center',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})