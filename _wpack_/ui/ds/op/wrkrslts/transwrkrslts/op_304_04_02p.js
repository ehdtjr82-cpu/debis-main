/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_04_02p.xml 12061 f4195982feec1b15ee1571930844f79b58eb46a22d51250284ffa102e1d2899f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDtFrom',name:'전표시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo',name:'전표종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDept',name:'귀속부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsum',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'csum',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptCd',name:'회계처리귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'회계처리귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveFaultRateSlipCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// id       : op_304_04_02p
// 이름     : 과태료 경비전표 조회 팝업
// 경로     : 물류/가용자원/육송/과태료등록
//==================================================================================================================

scwin.arrRtnVal = [];
scwin.vCurDate = "";
scwin.vQryStDt = "";
scwin.vQryEndDt = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01";
  scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6));
};
scwin.onUdcCompleted = function () {
  udc_slipDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
};
scwin.f_openCommonPopUp = function () {
  scwin.pCode = ed_acctDept.getValue();
  scwin.pName = txt_acctDeptNm.getValue();
  udc_acctDept.cfCommonPopUp(scwin.callbackAcctDept, scwin.pCode, scwin.pName, 'T', null, null, null, null, null, null, null, null, null, null, 'F', "귀속부서조회,귀속부서코드,귀속부서명");
};
scwin.callbackAcctDept = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_acctDept, txt_acctDeptNm);
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [searchTable]);
  if (!chk) {
    return;
  }
  dma_search.set("slipDtFrom", ica_slipDtFrom.getValue());
  dma_search.set("slipDtTo", ica_slipDtTo.getValue());
  dma_search.set("acctDept", ed_acctDept.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_OnUnload = function () {
  let returnObject = {};
  let rowPos = ds_out.getRowPosition();
  returnObject.rowPosition = rowPos;
  returnObject.slipNo = ds_out.getCellData(rowPos, "slipNo");
  returnObject.slipDt = ds_out.getCellData(rowPos, "slipDt");
  returnObject.acctDeptCd = ds_out.getCellData(rowPos, "acctDeptCd");
  returnObject.drawAcctDeptNm = ds_out.getCellData(rowPos, "drawAcctDeptNm");
  $c.win.closePopup($p, returnObject);
};
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};
scwin.f_FieldClear = function () {
  udc_slipDt.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  ed_acctDept.setValue("");
  txt_acctDeptNm.setValue("");
};
scwin.gr_out_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_OnUnload();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowcnt = ds_out.getRowCount();
  spa_totalRow.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.udc_acctDept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp();
};
scwin.udc_acctDept_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp();
};
scwin.udc_acctDept_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'searchTable',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_acctDept',codeId:'ed_acctDept',nameId:'txt_acctDeptNm',selectID:'retrieveAcctDeptCdInfo',hideName:'Y',popupID:'',style:'','ev:onclickEvent':'scwin.udc_acctDept_onclickEvent',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_acctDept_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDept_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_slipDt',edFromId:'ica_slipDtFrom',edToId:'ica_slipDtTo',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_out',id:'gr_out',style:'',readOnly:'true','ev:oncelldblclick':'scwin.gr_out_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',value:'전표번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',value:'전표일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnNo',inputType:'text',value:'거래번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',value:'귀속부서코드',width:'90',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawAcctDeptNm',inputType:'text',value:'귀속 부서명',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dsum',inputType:'text',value:'금액',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'csum',inputType:'text',value:'금액',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',value:'회계처리일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postYn',inputType:'text',value:'회계처리여부',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postAcctDeptCd',inputType:'text',value:'회계처리<br/>귀속부서코드',width:'140',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postAcctDeptNm',value:'회계처리 귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drawEmpNo',value:'작성자사원번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drawEmpNm',value:'작성자명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'80',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drawAcctDeptNm',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dsum',inputType:'text',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'csum',inputType:'text',width:'90',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'80',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postYn',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postAcctDeptCd',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'postAcctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drawEmpNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drawEmpNm',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})