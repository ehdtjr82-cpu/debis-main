/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_15p.xml 6967 630bfc8fb98a80bee7646ac6cada988ddacb7a13285a1a0cbb8033221ef96a58 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtTrf',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlRt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTrgtClsCd',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_ctrtTrf","key":"OUT_DS1"}',target:'data:json,{"id":"ds_ctrtTrf","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.UpdateContractTariffWholeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_ctrtTrf","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pos_rowSts = 0;
scwin.oCtrtObject = "";
scwin.ctrtNo = "";
scwin.MSG_SD_INF_001 = "일괄조정을 완료하였습니다.";
scwin.params;
scwin.onpageload = async function () {
  scwin.f_defaultValue();
  await scwin.f_Retrieve();
  await $c.gus.cfDisableObjects($p, [btn_batch]);
};
scwin.f_defaultValue = async function () {
  scwin.params = $c.data.getParameter($p);
  //scwin.ctrtNo  =   "C0701032802"
  scwin.ctrtNo = scwin.params.ctrtNo == null ? "" : scwin.params.ctrtNo;
  await $c.gus.cfDisableKey($p);
};
scwin.f_Retrieve = async function () {
  sbm_retrieve.action = "/ds.sd.salesactiv.ctrtmgnt.RetrieveContractTariffWholeChangeItemListCMD.do?contractNumber=" + scwin.ctrtNo;
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_create = async function () {
  // let oValidExp = {dataName:"계약요율 일괄조정",
  //         validFeatures:"ignoreStatus=no,",
  //         validExp:`ctrlRt:적용률(%):yes:minNumber=0.01:key`};
  //         $c.gus.setValidExp(gr_ctrtTrf, oValidExp);

  // if( ! await $c.gus.cfValidate([gr_ctrtTrf])){
  //     return false;
  // };
  for (var i = 0; i < ds_ctrtTrf.getRowCount(); i++) {
    var count = i + 1;
    if (ds_ctrtTrf.getCellData(i, "ctrlRt") < 0.01) {
      await $c.win.alert($p, "계약요율 일괄조정의 " + count + "번째 데이터에서 적용률(%)은(는) 0.01 이상으로 입력하십시오.");
      gr_ctrtTrf.setFocusedCell(i, "ctrlRt");
      return;
    }
  }
  if ((await $c.win.confirm($p, "계약요율 일괄조정을(를) 생성하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_save);
  }
  ;
};
scwin.sbm_save_submitDone = async function () {
  await $c.gus.cfAlertMsg($p, "일괄조정을 완료하였습니다");
  $c.win.closePopup($p);
};
scwin.gr_ctrtTrf_onafteredit = function (rowIndex, columnIndex, value) {
  if (value == 100) {
    var cnt = 0;
    for (var i = 0; i < ds_ctrtTrf.getRowCount(); i++) {
      if (ds_ctrtTrf.getCellData(i, "ctrlRt") == 100) {
        cnt++;
      }
      ;
    }
    if (cnt == ds_ctrtTrf.getRowCount()) {
      $c.gus.cfDisableObjects($p, [btn_batch]);
    }
  } else {
    $c.gus.cfEnableObjects($p, [btn_batch]);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  var cnt = 0;
  for (var i = 0; i < ds_ctrtTrf.getRowCount(); i++) {
    if (ds_ctrtTrf.getCellData(i, "ctrlRt") == 100) {
      cnt++;
    }
  }
  ;
  if (ds_ctrtTrf.getRowCount() == cnt) {
    $c.gus.cfDisableObjects($p, [btn_batch]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_batch]);
  }
  totalRows.setValue(ds_ctrtTrf.getRowCount());
};
scwin.f_WinClose = function (e) {
  $c.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_ctrtTrf',id:'gr_ctrtTrf',style:'',readOnly:'true',selectedCellColor:'   ',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_ctrtTrf_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:';color:#FF0000;',value:'요율항목',width:'353',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:';color:#FF0000;',value:'적용율(%)',width:'353',colSpan:'',rowSpan:'2',editType:'select'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'}}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'',style:'',value:'',width:'353',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrlRt',inputType:'text',style:'',value:'',width:'353',displayFormat:'###.00',mandatory:'true',dataType:'float',readOnly:'false',maxLength:'3.2',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_batch',style:'',type:'button','ev:onclick':'scwin.f_create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄조정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_WinClose',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})