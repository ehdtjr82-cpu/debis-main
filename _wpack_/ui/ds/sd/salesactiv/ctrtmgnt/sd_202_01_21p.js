/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_21p.xml 9414 16a29b94544609349b792b054a8ea546ce2c78d6669005ffb711ccf5e5a64eb4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtPrtTrgtCd',name:'계약발행대상코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPrtTrgtNm',name:'계약발행대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regYn',name:'포함',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractPrintTargetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}',target:'data:json,{"id":"ds_ctrt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.lobranNm = $c.data.getMemInfo($p, "lobranNm");
  scwin.f_defaultValue();
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.data.setPopupTitle($p, "계약발행");
};
//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  var oCtrtObject = $c.data.getParameter($p);
  var ctrtNo = oCtrtObject.ctrtNo;
  var clntNo = oCtrtObject.clntNo;
  var clntNm = oCtrtObject.clntNm;
  ed_ctrtNo.setValue(ctrtNo);
  ed_clntNo.setValue(clntNo);
  ed_clntNm.setValue(clntNm);
  $c.gus.cfDisableObjects($p, [tbl_search]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  dma_retrieve.set("ctrtNo", ed_ctrtNo.getValue().replace("-", ""));
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_winClose = function () {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let formParam = {};
  var reportname = "";
  let chkJson = gr_ctrt.getCheckedJSON("regYn");
  formParam["dispName0"] = "";
  let cnt = 1;
  for (var i = 0; i < chkJson.length; i++) {
    let key = "dispName" + cnt;
    let value = chkJson[i].ctrtPrtTrgtNm;
    cnt++;
    formParam[key] = value;
    reportname += "/ds/sd/salesactiv/ctrtmgnt/sd_202_01_01_" + chkJson[i].ctrtPrtTrgtCd + ".ozr;";
  }
  var data = {
    odiName: "sd_202_01_01",
    reportName: reportname,
    odiParam: {
      ctrtNo: ed_ctrtNo.getValue().replaceAll("-", "")
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90 // 배율 설정
    },
    formParam: {}
  };
  data.formParam["formParamObj"] = formParam;
  data.formParam["lobranNm"] = scwin.lobranNm;
  debugger;
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_ctrt.getTotalRow();
  spn_totalRow.setValue(rowCnt);
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//발행 버튼
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport();
};

//닫기 버튼
scwin.btn_close_onclick = function (e) {
  scwin.f_winClose();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control col4',id:'ed_ctrtNo',style:'',objType:'key',displayFormat:'#########-##'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group col7'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_clntNo',class:'form-control w85',objType:'key'}},{T:1,N:'xf:input',A:{style:'',id:'ed_clntNm',class:'form-control ',objType:'key'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'발행목록',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_ctrt',focusMode:'row',id:'gr_ctrt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',resize:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'500',value:'계약발행대상'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'column13',value:'',displayMode:'label',class:'txt-blue',checkboxLabelPosition:'right',readOnly:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrtPrtTrgtNm',inputType:'text',removeBorderStyle:'false',width:'500',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'regYn',value:'',displayMode:'label',textAlign:'center',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})