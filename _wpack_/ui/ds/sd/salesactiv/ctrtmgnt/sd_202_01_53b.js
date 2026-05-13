/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_53b.xml 9948 3cf46de4a994617ba997dc3350c843586d070608d156f80d709bd432d14be0d0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userIdentifier',name:'등록자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'chgCtrtNo',name:'변경계약번호',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'chgRegNm',name:'변경등록자명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'chgRmk',name:'변경비고',dataType:'text',length:'67'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractChangeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_retrieve",{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.UpdateContractChangeStatusCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_ctrt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.memInfo = $c.data.getMemInfo($p); //String regId = login.getUserId();  long sysAdminYn = login.getSysAdminYn();

  scwin.f_retrieve();
  $c.data.setPopupTitle($p, "계약 변경내역");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  dma_retrieve.set("userIdentifier", scwin.memInfo.userId);
  //dma_retrieve.set("userIdentifier", "180058");
  $c.sbm.execute($p, sbm_retrieve);
  debugger;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let chkJson = gr_ctrt.getCheckedJSON("chk");
  if (chkJson.length > 0) {
    let conf = await $c.win.confirm($p, "저장하시겠습니까?");
    if (conf) {
      $c.sbm.execute($p, sbm_save);
    } else {
      return;
    }
  } else {
    $c.win.alert($p, "계약변경내역을 선택하세요.");
    return;
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_ctrt.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt > 0) {
    $c.gus.cfEnableObjects($p, [btn_save]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_save]);
  }
};

//저장 완료
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약 변경 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName":"계약변경현황.xlsx", "sheetName" : "계약변경현황", "type":"2+4+8+16"}',gridID:'gr_ctrt',id:'udc_topGrdBtn',gridDownYn:'Y',btnPlusYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw gvw fix',dataList:'data:ds_ctrt',id:'gr_ctrt',style:'',visibleRowNum:'8',visibleRowNumFix:'true',resize:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption11',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',value:'',width:'70',colSpan:'',rowSpan:'2',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계약번호',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'변경<br/>계약번호',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처<br/>코드',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'거래처명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계약기간',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'기존계약<br/>등록자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'변경계약<br/>등록자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'계약변경/추가사항',width:'450',colSpan:'',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column25',value:'시작일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column24',value:'종료일',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',fixColumnWidth:'true',valueType:'other',falseValue:'F',trueValue:'T',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgCtrtNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtStDt',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDt',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgRegNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chgRmk',inputType:'text',width:'550',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})