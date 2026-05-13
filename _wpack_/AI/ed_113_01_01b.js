/*amd /AI/ed_113_01_01b.xml 14959 8b601ff2338b3c4637d7cf8abfddf5e328d3bef5458b0df0ef1ad5520fd514ad */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docNo',name:'문서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docType',name:'문서종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'notiDt',name:'통보일시From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'notiDt2',name:'통보일시To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcvDt',name:'수신일시From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcvDt2',name:'수신일시To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'admitYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'remark',name:'사유',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_FileSearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'attachFileId',name:'첨부파일ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'attachFilePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:key',A:{id:'attachFileSize',name:'첨부파일크기',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AmendResultList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'docNo',name:'문서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docType',name:'문서종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notiDt',name:'통보일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvDt',name:'수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remark',name:'사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'House B/L',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_master'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_master'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileId',name:'파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileName',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.ediam.amed.RetrieveAmendResultCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_SearchParam","key":"IN_DS1"},{"id":"ds_AmendResultList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_AmendResultList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_file',action:'/il.ediam.amed.RetrieveAmendFileReadCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_FileSearchParam","key":"IN_DS1"},{"id":"ds_AmendResultList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_AmendResultList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_file_submitdone','ev:submiterror':'scwin.sbm_retrieve_file_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.ediam.amed.SaveAmendFileReadCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_AmendResultList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.preRowPos = 0;
scwin.statusFlag = "";
scwin.ctrtNoRowCount = 0;
scwin.hd_kcomcd = "DBEX";
scwin.vCurDate = "";
scwin.strPreDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
  let codeOptions = [{
    grpCd: "IL009",
    compID: "acb_docType,gr_AmendResultList:docType"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_OnLoad();
};
scwin.onUdcCompleted = function () {
  scwin.f_DefaultValue();
};
scwin.f_OnLoad = function () {
  scwin.f_DefaultValue();
};
scwin.f_DefaultValue = function () {
  udc_notiDt.setInitDate(scwin.strPreDate, scwin.vCurDate);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
};
scwin.f_GridToExcel = async function (gr_groupCode, gridName) {
  if (ds_AmendResultList.getRowCount() <= 0) {
    await $c.win.alert($p, "내역이 존재하지않습니다.");
    return false;
  }
  $c.data.downloadGridViewExcel($p, gr_groupCode, gridName);
};
scwin.f_Retrieve = async function () {
  dma_SearchParam.set("docNo", ed_docNo.getValue().trim());
  dma_SearchParam.set("docType", acb_docType.getValue());
  dma_SearchParam.set("notiDt", ica_notiDt.getValue().trim());
  dma_SearchParam.set("notiDt2", ica_notiDt2.getValue().trim());
  dma_SearchParam.set("rcvDt", ica_rcvDt.getValue().trim());
  dma_SearchParam.set("rcvDt2", ica_rcvDt2.getValue().trim());
  dma_SearchParam.set("admitYn", acb_adminYn.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_RetrieveFiles = async function () {
  let chk = await $c.win.confirm($p, "정정 결과를 수신 하시겠습니까?");
  if (chk) {
    let rtnValue = await $c.win.openPopup($p, "/ui/il/common/jsp/ilCommonKtnetRecv.xml", {
      width: 460,
      height: 280,
      modal: true,
      data: {}
    });
  }
};
scwin.f_Save = async function () {
  dma_FileSearchParam.set("attachFileId", fileUploadGDS.getCellData(0, "fileId"));
  dma_FileSearchParam.set("attachFileNm", fileUploadGDS.getCellData(0, "fileName"));
  dma_FileSearchParam.set("attachFilePath", fileUploadGDS.getCellData(0, "filePath"));
  dma_FileSearchParam.set("attachFileSize", fileUploadGDS.getCellData(0, "fileSize"));
  await $c.sbm.execute($p, sbm_retrieve_file);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_Save_onclick = function (e) {
  let label = e.target.textContent || "";
  if (label.indexOf("결과 수신") > -1) {
    scwin.f_RetrieveFiles();
  } else if (label.indexOf("결과 변환") > -1) {
    scwin.f_Save();
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_file_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_file_submitdone = async function (e) {
  for (let i = 0; i < ds_AmendResultList.getRowCount(); i++) {
    ds_AmendResultList.setRowStatus(i, "C");
  }
  await $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = function (e) {
  scwin.f_Retrieve();
};
scwin.ds_AmendResultList_onloadcompleted = async function (e) {
  let rowcnt = ds_AmendResultList.getRowCount();
  spa_totalRow.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'문서종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_docType',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'문서번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_docNo',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_adminYn',search:'start',style:'width:150px;',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통보일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_notiDt',edFromId:'ica_notiDt',edToId:'ica_notiDt2',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_rcvDt',edFromId:'ica_rcvDt',edToId:'ica_rcvDt2',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Amend Result List',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_AmendResultList',id:'gr_AmendResultList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'Currow',inputType:'text',value:'No',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docNo',inputType:'text',value:'문서번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docType',inputType:'text',value:'문서종류',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'notiDt',inputType:'text',value:'통보일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcvDt',inputType:'text',value:'수신일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitYn',inputType:'text',value:'승인여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark',inputType:'text',value:'사유',width:'350'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',value:'MRN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',value:'Master B/L',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',value:'House B/L',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'Currow',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docNo',inputType:'text',width:'140',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'docType',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'notiDt',inputType:'text',width:'120',displayFormat:'####/##/## ##:##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcvDt',inputType:'text',width:'120',displayFormat:'####/##/## ##:##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitYn',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'remark',inputType:'text',width:'350'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'100',colMerge:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save','ev:onclick':'scwin.btn_Save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결과 수신'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save','ev:onclick':'scwin.btn_Save_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결과 변환'}]}]}]}]}]}]}]}]}]}]})