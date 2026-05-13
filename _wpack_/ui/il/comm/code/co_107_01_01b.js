/*amd /ui/il/comm/code/co_107_01_01b.xml 9758 025c31c155103d2697dfd65adc3a8cb8be5b79b8ac71ae89e68229d960c84090 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchangeRate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsExchRt',name:'매수율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellExchRt',name:'매매율',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.comm.code.RetrieveExchangeRtListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SearchParam","key":"IN_DS1"},{"id":"ds_exchangeRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchangeRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.preRowPos = 0;
scwin.txt_countRow = "";
scwin.txt_userid = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  const codeOptions = [{
    grpCd: "IL092",
    compID: "lc_bankCd"
  }, {
    grpCd: "ZZ006",
    compID: "lc_crcCd, gr_exchangeRate:crcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ica_stdDt.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// function name :  f_DefaultValue( gubun1, gubun2 )
// function desc : 화면 open시 초기 데이타 setting
// gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
// gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  //ds_SearchParam.AddRow();
  lc_bankCd.setValue("01");
  //lc_crcCd.BindColVal = "USD";
};

//-------------------------------------------------------------------------
//조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  lc_bankCd.setValue("01");
  //lc_crcCd.BindColVal = "USD";
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_exchangeRate.getRowCount();
  if (rowCnt == 0) {
    $c.win.alert($p, E_MSG_CM_WRN_002);
  }
  spa_cnt.setValue(rowCnt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Bank Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_bankCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_SearchParam.bankCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Currency Code',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_crcCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_SearchParam.crcCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Ex-Rate Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stdDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:dma_SearchParam.stdDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Exchange Rate',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"Exchange Rate.xlsx","sheetName" : "Exchange Rate", "type":"4+8+16"}',gridID:'gr_exchangeRate'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_exchangeRate',id:'gr_exchangeRate',style:'',visibleRowNum:'18',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Currency',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'ExRate_Dt',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'기준환율',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'TTB',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'TTS',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'crcCd',inputType:'select',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'calendar',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdExchRt',inputType:'text',width:'160',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsExchRt',inputType:'text',width:'160',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellExchRt',inputType:'text',width:'160',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})