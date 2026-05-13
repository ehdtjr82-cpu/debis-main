/*amd /ui/il/seaout/sosr/se_116_01_01p.xml 12815 5011c5f40436031c26ff7f8badb4915895f50e8aa17f8c73d888baf412c73d7f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'고객번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'고객명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'고객번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEngNm',name:'고객영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr1',name:'영문주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr2',name:'영문주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr3',name:'영문주소3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr4',name:'영문주소4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ktnetId',name:'KTNET ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taseq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tanm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'atnm',name:'대리인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telno',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faxno',name:'팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eeMail',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediVersion',name:'EDI버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntScacCd',name:'SCAC코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lloydsCd',name:'로이드코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seaout.sosr.RetrieveSrClntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition", "key" : "IN_DS1"}, {"id":"ds_master", "key" : "OUT_DS1"}]',target:'data:json,[{"id":"ds_master", "key" : "OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.clntNo;
scwin.clntNm;

// scwin.popTitleCh = function () {

// };

scwin.onpageload = function () {
  let param = $c.data.getParameter($p);
  scwin.clntNo = param.clntNo;
  scwin.clntNm = param.clntNm;
  ed_clntNo.setValue(scwin.clntNo);
  if (ed_clntNo.getValue() == "NULL") {
    ed_clntNo.setValue("");
  } else {
    scwin.f_Retrieve();
  }
};
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  let jsonRtn = e.responseJSON;
  if (jsonRtn.resultDataSet[0].Code != "0" || ds_master.getRowCount() == 0) {
    $c.win.alert($p, E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다	
  }
};
scwin.ds_master_ondataload = function () {
  let count = Number(ds_master.getRowCount());
  // 총 건수 세팅 (3자리마다 , 찍어서 표현)
  txt_total.setValue(count.toLocaleString());
  if (count != 1) {
    return;
  }
  scwin.closePopup(0);
};
scwin.btn_Clear_onclick = function (e) {
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.closePopup(rowIndex);
};
scwin.btn_close_onclick = function (e) {
  window.close();
};
scwin.closePopup = function (rowIndex) {
  let rtnValues = [];
  rtnValues[0] = ds_master.getCellData(rowIndex, "clntNo");
  rtnValues[1] = ds_master.getCellData(rowIndex, "clntEngNm");
  rtnValues[2] = ds_master.getCellData(rowIndex, "engAddr1");
  rtnValues[3] = ds_master.getCellData(rowIndex, "engAddr2");
  rtnValues[4] = ds_master.getCellData(rowIndex, "engAddr3");
  rtnValues[5] = ds_master.getCellData(rowIndex, "engAddr4");
  rtnValues[6] = ds_master.getCellData(rowIndex, "ktnetId");
  rtnValues[7] = ds_master.getCellData(rowIndex, "crn");
  rtnValues[8] = ds_master.getCellData(rowIndex, "taseq");
  rtnValues[9] = ds_master.getCellData(rowIndex, "tanm");
  rtnValues[10] = ds_master.getCellData(rowIndex, "atnm");
  rtnValues[11] = ds_master.getCellData(rowIndex, "telno");
  rtnValues[12] = ds_master.getCellData(rowIndex, "faxno");
  rtnValues[13] = ds_master.getCellData(rowIndex, "eeMail");
  rtnValues[14] = ds_master.getCellData(rowIndex, "ediVersion");
  rtnValues[15] = ds_master.getCellData(rowIndex, "clntScacCd");
  rtnValues[16] = ds_master.getCellData(rowIndex, "lloydsCd");
  $c.win.closePopup($p, rtnValues);
};
scwin.excelDownload = async function () {
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let rtn = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!rtn) {
    return;
  }
  let options = {
    fileName: "Customer List.xlsx",
    sheetName: "Customer List"
  };
  let infoArr = {};
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CODE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100',id:'ed_clntNo',placeholder:'',style:'',allowChar:'0-9',maxlength:'6',objType:'data',ref:'data:dma_condition.clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'NAME',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'txt_clntNm',placeholder:'',style:'',maxlength:'35',objType:'data',ref:'data:dma_condition.clntNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Clear'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Customer List',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{id:'udc_topGrdBtn',gridUpYn:'N',grp:'grd_section1',style:'',btnUser:'Y',btnPlusYn:'Y',gridID:'gr_master',gridDownYn:'Y',gridDownFn:'scwin.excelDownload',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1'},E:[{T:1,N:'w2:row',A:{id:'row1'},E:[{T:1,N:'w2:column',A:{id:'h_clntNo',displayMode:'label',inputType:'text',value:'CODE',width:'80'}},{T:1,N:'w2:column',A:{id:'h_clntEngNm',displayMode:'label',inputType:'text',value:'NAME',width:'80'}},{T:1,N:'w2:column',A:{id:'h_engAddr1',displayMode:'label',inputType:'text',value:'STREET',width:'80'}},{T:1,N:'w2:column',A:{id:'h_engAddr2',displayMode:'label',inputType:'text',value:'PLACE',width:'80'}},{T:1,N:'w2:column',A:{id:'h_engAddr3',displayMode:'label',inputType:'text',value:'STATE',width:'80'}},{T:1,N:'w2:column',A:{id:'h_engAddr4',displayMode:'label',inputType:'text',value:'ZIP',width:'80'}},{T:1,N:'w2:column',A:{id:'h_ktnetId',displayMode:'label',inputType:'text',value:'KTNET ID',width:'80'}},{T:1,N:'w2:column',A:{id:'h_crn',displayMode:'label',inputType:'text',value:'CRN',width:'80'}},{T:1,N:'w2:column',A:{id:'h_taseq',displayMode:'label',inputType:'text',value:'PIC',width:'80'}},{T:1,N:'w2:column',A:{id:'h_tanm',displayMode:'label',inputType:'text',value:'NAME',width:'80'}},{T:1,N:'w2:column',A:{id:'h_atnm',displayMode:'label',inputType:'text',value:'DEPT',width:'80'}},{T:1,N:'w2:column',A:{id:'h_telno',displayMode:'label',inputType:'text',value:'TEL',width:'80'}},{T:1,N:'w2:column',A:{id:'h_faxno',displayMode:'label',inputType:'text',value:'FAX',width:'80'}},{T:1,N:'w2:column',A:{id:'h_eeMail',displayMode:'label',inputType:'text',value:'EMAIL',width:'80'}},{T:1,N:'w2:column',A:{id:'h_ediVersion',displayMode:'label',inputType:'text',value:'EDI',width:'80'}},{T:1,N:'w2:column',A:{id:'h_clntScacCd',displayMode:'label',inputType:'text',value:'SCAC',width:'80'}},{T:1,N:'w2:column',A:{id:'h_lloydsCd',displayMode:'label',inputType:'text',value:'LLOYDSE',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1'},E:[{T:1,N:'w2:row',A:{id:'row2'},E:[{T:1,N:'w2:column',A:{id:'clntNo',inputType:'text',width:'80',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'clntEngNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'engAddr1',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'engAddr2',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'engAddr3',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'engAddr4',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'ktnetId',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'crn',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'taseq',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'tanm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'atnm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'telno',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'faxno',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'eeMail',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'ediVersion',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'clntScacCd',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{id:'lloydsCd',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})