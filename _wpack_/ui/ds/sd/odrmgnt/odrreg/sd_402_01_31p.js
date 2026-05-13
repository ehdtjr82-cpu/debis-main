/*amd /ui/ds/sd/odrmgnt/odrreg/sd_402_01_31p.xml 12298 1d1052653f7654f5e227e70564cdf646a85cdc52368b6770330f2caea7699ef5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_orderInformationList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnNm',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteNm',name:'완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regLobranNm',name:'등록점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreatDtm',name:'생성일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrreg.RetrieveOrderLookUpCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_orderInformationList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_orderInformationList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.args = $p.getAllParameter().paramData.data;
  scwin.cntrNo = $c.str.trim($p, scwin.args[0]); //컨테이너번호 
  scwin.odrKndCd = $c.str.trim($p, scwin.args[1]); //오더종류  
  console.log(scwin.args);

  //공통코드 조회
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_odrKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackSetCommonCode);
};

//-------------------------------------------------------------------------
// 공통코드 조회 callBack
//-------------------------------------------------------------------------
scwin.callBackSetCommonCode = function () {
  scwin.f_setDefaultData();
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_setDefaultData = function () {
  acb_odrKndCd.setValue(scwin.odrKndCd); //오더종류
  ed_cntrNo.setValue(scwin.cntrNo); //컨테이너번호
  acb_odrKndCd.focus();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_setDefaultData();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, [ed_cntrNo]);
  if (!chkVal) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 선택된 컨테이너 정보
//-------------------------------------------------------------------------
scwin.f_rtnValue = function (row) {
  console.log("scwin.f_rtnValue");
  var rtnValues = new Array();
  rtnValues[0] = ds_orderInformationList.getCellData(row, "odrNo"); // 오더번호
  rtnValues[1] = ds_orderInformationList.getCellData(row, "cntrNo"); // 컨테이너번호
  rtnValues[2] = ds_orderInformationList.getCellData(row, "cntrSeq"); // 컨테이너순번

  console.log(rtnValues);
  $c.win.closePopup($p, rtnValues);
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_winClose = function () {
  var arrRtnVal = new Array();
  arrRtnVal[0] = "N/A";
  $c.win.closePopup($p, arrRtnVal);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_orderInformationList.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "오더정보 조회결과가 존재하지 않습니다.");
  } else if (rowCnt == 1) {
    scwin.f_rtnValue(0);
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//컨테이너 번호 소문자 입력 > 대문자 입력 
scwin.ed_cntrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_cntrNo);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//그리드 더블 클릭 > 선택
scwin.gr_orderInformationList_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};

//닫기 버튼
scwin.btn_close_onclick = function (e) {
  scwin.f_winClose();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.odrKndCd',searchTarget:'value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',maxlength:'11',allowChar:'0-9A-Za-z',ref:'data:dma_condition.cntrNo','ev:oneditkeyup':'scwin.ed_cntrNo_oneditkeyup',mandatory:'true',title:'컨테이너번호'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_orderInformationList',id:'gr_orderInformationList',style:'',resize:'true',dataDragDrop:'true','ev:oncelldblclick':'scwin.gr_orderInformationList_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Seq',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발지',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착지',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'확정여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'완료여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'등록자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'등록점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'생성일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrDcsnNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrCompleteNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regLobranNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrCreatDtm',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})