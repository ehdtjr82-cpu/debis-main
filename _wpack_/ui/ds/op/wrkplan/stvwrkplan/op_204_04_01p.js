/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_04_01p.xml 12974 2e448b265831f8198629a5338bf6c6602448f194a4dd7daeb0b8984c6ac6e0b6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfoDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'품명분류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'분류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'품명분류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'중분류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdEngNmAbbr',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCommClssLupPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oGDS_view_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workPlaceInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSub',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCommClssLupPopupSubCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oGDS_view_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSub_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//히든 컴포넌트
scwin.hid_con_cd = "";
scwin.hid_cls_cd = "";
scwin.onpageload = function () {
  scwin.submitPre();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "품명분류검색");
};
scwin.f_Retrieve = function () {
  if (ed_commCd.getValue() == "" && ed_commNm.getValue() == "") {
    scwin.hid_cls_cd = "1";
  }
  if (ed_commCd.getValue() != "") {
    scwin.hid_cls_cd = "2";
  }
  if (ed_commNm.getValue() != "") {
    scwin.hid_cls_cd = "3";
  }
  if (ed_commCd.getValue() != "" && ed_commCd.getValue() != "") {
    scwin.hid_cls_cd = "4";
  }

  //조회조건
  scwin.submitPre();
  $c.sbm.execute($p, sbm_retrieveSub);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_commCd, ed_commNm]);
};
scwin.f_close = function () {
  $c.win.closePopup($p);
};

//[>] 
scwin.f_comm = function () {
  scwin.hid_con_cd = ds_workPlaceInfo.getCellData(ds_workPlaceInfo.rowPosition, "cd"); //조회조건
  scwin.hid_cls_cd = "1";

  //조회조건
  scwin.submitPre();
  $c.sbm.execute($p, sbm_retrieveSub);
};
scwin.sbm_retrieve_submitdone = function (e) {
  totalRows1.setValue(ds_workPlaceInfo.getRowCount());
  if (ds_workPlaceInfo.getRowCount() > 0) {
    //포커스
    gr_workPlaceInfo.setFocusedCell(0, 0);
  }
};
scwin.sbm_retrieveSub_submitdone = async function (e) {
  //for=ds_workPlaceInfoDetail event=OnLoadCompleted(rowCnt)
  totalRows2.setValue(ds_workPlaceInfoDetail.getRowCount());
  if (ds_workPlaceInfoDetail.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    //포커스
    gr_workPlaceInfoDetail.setFocusedCell(0, 0);
  }
};
scwin.gr_workPlaceInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var args = new Array(); // Return Value

  args[0] = ds_workPlaceInfo.getCellData(rowIndex, "grpCd");
  args[1] = ds_workPlaceInfo.getCellData(rowIndex, "cd");
  args[2] = ds_workPlaceInfo.getCellData(rowIndex, "cdEngNmAbbr");
  args[3] = ds_workPlaceInfo.getCellData(rowIndex, "cdNm");
  $c.win.closePopup($p, args);
};
scwin.gr_workPlaceInfoDetail_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var args = new Array(); // Return Value

  args[0] = ds_workPlaceInfoDetail.getCellData(rowIndex, "grpCd");
  args[1] = ds_workPlaceInfoDetail.getCellData(rowIndex, "cd");
  args[2] = ds_workPlaceInfoDetail.getCellData(rowIndex, "cdEngNmAbbr");
  args[3] = ds_workPlaceInfoDetail.getCellData(rowIndex, "cdNm");
  $c.win.closePopup($p, args);
};
scwin.submitPre = function () {
  //조회조건
  dma_oGDS_view_cond.set("grpCd", "");
  dma_oGDS_view_cond.set("cd", scwin.hid_con_cd);
  dma_oGDS_view_cond.set("cdEngNmAbbr", "");
  dma_oGDS_view_cond.set("cdNm", "");
  dma_oGDS_view_cond.set("clsCd", scwin.hid_cls_cd);
  dma_oGDS_view_cond.set("commCd", ed_commCd.getValue());
  dma_oGDS_view_cond.set("commNm", ed_commNm.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_commCd',style:'width: 100px;',ref:'',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품목명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_commNm',style:'width: 150px;',ref:'',objType:'Data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox col3 wfix'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_workPlaceInfo',id:'gr_workPlaceInfo',style:'','ev:oncelldblclick':'scwin.gr_workPlaceInfo_oncelldblclick',readOnly:'true',visibleRowNum:'19'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'분류코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'품명분류명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'그룹코드',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'중분류코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNm',inputType:'text',style:'',textAlign:'left',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grpCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cdEngNmAbbr',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col vam',style:'width: 22px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shattle '},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_right',type:'button',class:'btn ico btn-right','ev:onclick':'scwin.f_comm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_workPlaceInfoDetail',style:'',autoFit:'allColumn',id:'gr_workPlaceInfoDetail',class:'wq_gvw','ev:oncelldblclick':'scwin.gr_workPlaceInfoDetail_oncelldblclick',readOnly:'true',visibleRowNum:'19'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'품목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'품목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'분류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column13',value:'품명분류명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'그룹코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cdNm',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grpCd',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows2',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})