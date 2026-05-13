/*amd /AI/op_204_04_01p.xml 12622 3f9a7d6d1af804a75d1c3edbd6877dc695ee8e93a76590656fc2d5170eb8d8bc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdEngNmAbbr',name:'영문약어',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clsCd',name:'분류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'품목명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'품명분류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'중분류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfoDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'품명분류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCommClssLupPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_workPlaceInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSub',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCommClssLupPopupSubCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveSub_submitdone','ev:submiterror':'scwin.sbm_retrieveSub_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.nowCountRow = 0;
scwin.nowCountRow2 = 0;
scwin.pos_groupCode = 0;
scwin.hid_con_cd = "";
scwin.hid_cls_cd = "";
scwin.onpageload = function () {
  scwin.f_OnLoad();
};
scwin.f_OnLoad = async function () {
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Retrieve = async function () {
  if (txt_commCd.getValue() == "" && txt_commNm.getValue() == "") {
    scwin.hid_cls_cd = "1";
  }
  if (txt_commCd.getValue() != "") {
    scwin.hid_cls_cd = "2";
  }
  if (txt_commNm.getValue() != "") {
    scwin.hid_cls_cd = "3";
  }
  if (txt_commCd.getValue() != "" && txt_commCd.getValue() != "") {
    scwin.hid_cls_cd = "4";
  }
  oGDS_view_cond.set("clsCd", scwin.hid_cls_cd);
  oGDS_view_cond.set("commCd", txt_commCd.getValue());
  oGDS_view_cond.set("commNm", txt_commNm.getValue());
  await $c.sbm.execute($p, sbm_retrieveSub);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [txt_commCd, txt_commNm]);
};
scwin.btn_close_onclick = function (e) {
  scwin.f_close();
};
scwin.f_close = function () {
  $c.win.closePopup($p);
};
scwin.f_comm = async function () {
  let rowPos = ds_workPlaceInfo.getRowPosition();
  if (rowPos < 0) {
    return;
  }
  scwin.hid_con_cd = ds_workPlaceInfo.getCellData(rowPos, "cd");
  scwin.hid_cls_cd = "1";
  oGDS_view_cond.set("cd", scwin.hid_con_cd);
  oGDS_view_cond.set("clsCd", scwin.hid_cls_cd);
  await $c.sbm.execute($p, sbm_retrieveSub);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_right_onclick = function (e) {
  scwin.f_comm();
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveSub_submitdone = async function (e) {
  let rowCnt = ds_workPlaceInfoDetail.getRowCount();
  if (rowCnt < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};
scwin.sbm_retrieveSub_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_workPlaceInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let arrRtnVal = [];
  arrRtnVal[0] = ds_workPlaceInfo.getCellData(rowIndex, "grpCd");
  arrRtnVal[1] = ds_workPlaceInfo.getCellData(rowIndex, "cd");
  arrRtnVal[2] = ds_workPlaceInfo.getCellData(rowIndex, "cdEngNmAbbr");
  arrRtnVal[3] = ds_workPlaceInfo.getCellData(rowIndex, "cdNm");
  $c.win.closePopup($p, arrRtnVal);
};
scwin.gr_workPlaceInfoDetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let arrRtnVal = [];
  arrRtnVal[0] = ds_workPlaceInfoDetail.getCellData(rowIndex, "grpCd");
  arrRtnVal[1] = ds_workPlaceInfoDetail.getCellData(rowIndex, "cd");
  arrRtnVal[2] = ds_workPlaceInfoDetail.getCellData(rowIndex, "cdEngNmAbbr");
  arrRtnVal[3] = ds_workPlaceInfoDetail.getCellData(rowIndex, "cdNm");
  $c.win.closePopup($p, arrRtnVal);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'flex_gvw',id:''},E:[{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w85',id:'txt_commCd',style:'',ref:'data:oGDS_view_cond.commCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'txt_commNm',style:'',ref:'data:oGDS_view_cond.commNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'section half h-full'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-wrap flex_gvw',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_workPlaceInfo',id:'gr_workPlaceInfo',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cd',inputType:'text',style:'',value:'분류코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNm',inputType:'text',style:'',value:'품명분류명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grpCd',inputType:'text',style:'',value:'그룹코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cdEngNmAbbr',value:'중분류코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNm',inputType:'text',style:'',textAlign:'left',value:'',width:'200',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grpCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cdEngNmAbbr',value:'',displayMode:'label',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-right',id:'btn_right',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-wrap flex_gvw'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_workPlaceInfoDetail',style:'',autoFit:'allColumn',id:'gr_workPlaceInfoDetail',visibleRowNum:'10',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'품목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'commNm',value:'품목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cd',value:'분류코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cdNm',value:'품명분류명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grpCd',value:'그룹코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cdNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grpCd',value:'',displayMode:'label',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close','ev:onclick':'scwin.btn_close_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]}]}]})