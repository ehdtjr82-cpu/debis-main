/*amd /ui/ja/dn/closemgnt/ja_610_01_01b.xml 14154 394cfc781d937be60b6a2cbb7a708a9797d81f59a6100b7d6be5b37f2f0d5b80 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYn',name:'마감여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductYn',name:'공제지급여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductNoPchsAmt',name:'지급합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductPchsAmt',name:'공제합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'실지급액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deductYn',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.closemgnt.RetrieveCloseWorkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dn.closemgnt.SaveCloseWorkInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.QryDate = scwin.strCurDate.substring(0.6);
scwin.onpageload = function () {
  ica_ed_adptYm.setValue(scwin.QryDate);
  acb_lc_closeYn.setValue("2");
  acb_lc_deductYn.setValue("2");
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, searchTable);
};

//거래처popup
scwin.udc_comCode_clnt_onclickEvent = function (e) {
  udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBackFunc, ed_homeClntNo.getValue(), ed_homeClntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//pop callback
scwin.udc_comCode_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_homeClntNo, ed_homeClntNm);
  console.log(ret);
};
scwin.udc_comCode_clnt_onblurCodeEvent = function (e) {
  if (ed_homeClntNo.getValue() === "") {
    ed_homeClntNm.setValue("");
  } else {
    udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBackFunc, ed_homeClntNo.getValue(), ed_homeClntNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};
scwin.udc_comCode_clnt_onviewchangeNameEvent = function (info) {
  if (ed_homeClntNm.getValue() === "") {
    ed_homeClntNo.setValue("");
  }
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [searchTable]))) {
    return;
  }
  dma_condition.set("adptYm", ica_ed_adptYm.getValue());
  dma_condition.set("homeClntNo", ed_homeClntNo.getValue());
  dma_condition.set("closeYn", acb_lc_closeYn.getValue());
  dma_condition.set("deductYn", acb_lc_deductYn.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_out.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    total.setValue(nCnt);
  } else {
    gr_out.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
};

//저장
scwin.btn_save_onclick = async function (e) {
  /*asis도 않되는 현상을 강제로 처리*/
  let Ym = ica_ed_adptYm.getValue();
  if (Ym == "") {
    $c.win.alert($p, "년월은 필수 입력 항목입니다.");
    ica_ed_adptYm.focus();
    return;
  }
  ;
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (!(await confirm)) {
    return;
  }
  $c.sbm.execute($p, sbm_save);
};

//저장callback
scwin.sbm_save_submitdone = function () {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.btn_retrieve_onclick();
};

//지급공제여부   지급공제여부 컴보박스의 인덱스 변경시 출력그리드를 초기화 한다
scwin.acb_lc_deductYn_onviewchange = function (info) {
  ds_out.removeAll();
};

//마감여부    마감여부 컴보박스의 인덱스 변경시 출력그리드를 초기화 한다
scwin.acb_lc_closeYn_onviewchange = function (info) {
  ds_out.removeAll();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'searchTable',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_adptYm',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_homeClntNo',nameId:'ed_homeClntNm',id:'udc_comCode_clnt',selectID:'retrieveSubsidaryClntList','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_clnt_onviewchangeNameEvent',UpperFlagCode:'0',mandatoryCode:'false',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급공제여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_deductYn',search:'start',style:'width:70px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label','ev:onviewchange':'scwin.acb_lc_deductYn_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마감여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_closeYn',search:'start',style:'width:70px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label','ev:onviewchange':'scwin.acb_lc_closeYn_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'마감작업 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'마감여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'공제지급여부',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'지급합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'공제합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'실지급액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYn',inputType:'checkbox',width:'100',readOnly:'false',trueValue:'1',falseValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductYn',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductNoPchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductPchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'총계'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'deductNoPchsAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'deductPchsAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',expression:'SUM(\'payAmt\')',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})