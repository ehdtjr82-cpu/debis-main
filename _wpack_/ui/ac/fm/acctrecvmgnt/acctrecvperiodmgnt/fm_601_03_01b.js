/*amd /ui/ac/fm/acctrecvmgnt/acctrecvperiodmgnt/fm_601_03_01b.xml 12217 f591cde8c736532c4ea38c21867e42f0062b69c9ce831f94416a7279bd5925b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeDd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rtn',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_month',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkId',name:'작업자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeStDtm',name:'시작일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeEndDtm',name:'종료일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDesc',name:'작업설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errNo',name:'오류번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'작업자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDd',name:'마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNo',name:'작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_month',action:'/ac.fm.acctrecvmgnt.acctrecvperiodmgnt.CreateAccountReceivableResultsAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_month_submitdone','ev:submiterror':'scwin.sbm_month_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_month", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.onpageload = function () {};

// //-------------------------------------------------------------------------
// // 헤더생성
// //-------------------------------------------------------------------------

// function f_Header(){

// var GAUCE_DATASET_HEADER =  "stdYm:STRING(6)";              // 기준년월

//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.AddRow();
//     ed_stdYm.focus();
// }

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_stdYm]))) {
    return false;
  }

  // var condition = "?closeYm="+ed_stdYm.text.trim()+"&closeDd=00&mgntNo=0";
  //     condition += "&wrkNo=<%=ACConstants.CLOSE_ACCT_RECV_CREATE%>";

  // ds_month.DataID = "/cm.bc.comnmgnt.closemgnt.RetrieveCloseLogListCMD.do" + condition; 
  // ds_month.Reset();

  dma_search.set("closeDd", "00");
  dma_search.set("mgntNo", "0");
  dma_search.set("closeYm", ica_stdYm.getValue());
  dma_search.set("wrkNo", ACConstants.CLOSE_ACCT_RECV_CREATE);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 월결산
//-------------------------------------------------------------------------
scwin.f_MonthProcess = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_stdYm]))) {
    return false;
  }

  // 마감체크
  //if (!f_JobCloseYN('<%=ACConstants.CLOSE_MONTH%>'))
  //return false;

  let rtn = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_010, "집계생성"));
  if (rtn == true) {
    dma_search.undo();
    dma_search.set("stdYm", ica_stdYm.getValue());
    $c.sbm.execute($p, sbm_month);
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_evid_onclick = function (e) {
  scwin.f_MonthProcess();
};
scwin.sbm_month_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, "성공적으로 처리되었습니다");
  }
};
scwin.sbm_month_submiterror = function (e) {
  $c.gus.cfShowError($p, sbm_month);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (ds_month.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    }
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
  ed_totalRow.setValue(gr_prepay.getTotalRow());
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_prepay);
  $c.gus.cfShowError($p, ds_month);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',style:'',displayFormat:'yyyy/MM',mandatory:'true',title:'결산연월'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_month',focusMode:'row',id:'gr_prepay',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업자ID ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'시작일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'종료일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'작업설명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'오류번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'작업자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'마감년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'마감일',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'작업번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'관리번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkId',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeStDtm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeEndDtm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDesc',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'errNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNm',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdYm',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeDd',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNo',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',style:'',value:'',width:'100',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white link',id:'btn_evid',style:'',type:'button','ev:onclick':'scwin.btn_evid_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'집계생성'}]}]}]}]}]}]}]}]}]})