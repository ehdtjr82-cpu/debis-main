/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_01_50b.xml 25520 4298f8cabbff27389efb1801c1b32b2cf5789ecb27a3c4481119e577ef9303f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crryinoutList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gatelogNo',name:'반출입번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinOdrNo',name:'반입;오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinHh',name:'반입;시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발;작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutDt',name:'반출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutHh',name:'반출;시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착;작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutOdrNo',name:'반출;오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구;거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineClntNo',name:'LINE거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'금액',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crryinoutList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTot1',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ratio1',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outTot1',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ratio2',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveUiwangicdBillingAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveQueryCondition","key":"IN_DS1"},{"id":"ds_crryinoutList","key":"OUT_DS1"},{"id":"ds_crryinoutList2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_crryinoutList","key":"OUT_DS1"},{"id":"ds_crryinoutList2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.PreCurData = WebSquare.date.dateAdd(scwin.strCurDate, -7); //1주전 날짜(7일전)

scwin.onpageload = function () {
  udc_fromToCalendar.setInitDate(scwin.PreCurData, scwin.strCurDate); //udc달력 형식
};
scwin.btn_fieldClear_onclick = function (e) {
  // ed_crryinoutStDt.setValue(scwin.PreCurData);
  // ed_crryinoutEndDt.setValue(scwin.strCurDate);

  // ed_wrkPlCd.setValue("");
  // ed_lineCd.setValue("");
  // ed_odrNo.setValue("");
  // ed_cntrNo.setValue("");

  rd_crryinoutClsCd.setValue("O");
  ed_crryinoutStDt.setValue(scwin.PreCurData);
  ed_crryinoutEndDt.setValue(scwin.strCurDate);
  $c.gus.cfInitObjects($p, tb_search, [ed_crryinoutStDt, ed_crryinoutEndDt, rd_crryinoutClsCd]);
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  if (ed_wrkPlCd.getValue() == "") {
    $c.win.alert($p, "작업장은 필수 입력 항목입니다.");
    ed_wrkPlCd.focus();
    return;
  }

  // 반출입일자 From - To 입력 확인
  if (!$c.gus.cfValidate($p, [ed_crryinoutStDt, ed_crryinoutEndDt])) {
    return;
  }

  // 오더기간 범위 확인
  if (!$c.gus.cfIsAfterDate($p, ed_crryinoutStDt.getValue(), ed_crryinoutEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_048, new Array("반출입일자 From", "반출입일자 To"));
    ed_crryinoutStDt.focus();
    return;
  }
  let diffObj = await $c.gus.cfDifferBetween($p, ed_crryinoutStDt.getValue(), ed_crryinoutEndDt.getValue());
  if (diffObj.year > 0 || diffObj.month > 0) {
    let confirm = await $c.win.confirm($p, "반출입일자 기간 이 1개월이 넘습니다.조회하시겠습니까?");
    if (!confirm) {
      ed_crryinoutStDt.focus();
      return;
    }
  }

  // 오더번호가 입력된 경우 오더번호 형식 확인
  if (!$c.gus.cfIsNull($p, ed_odrNo.getValue())) {
    if (!$c.gus.cfValidate($p, ed_odrNo)) return;
  }

  //dataMap set
  dma_retrieveQueryCondition.set("crryinoutClsCd", rd_crryinoutClsCd.getValue());
  dma_retrieveQueryCondition.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_retrieveQueryCondition.set("crryinoutStDt", ed_crryinoutStDt.getValue());
  dma_retrieveQueryCondition.set("crryinoutEndDt", ed_crryinoutEndDt.getValue());
  dma_retrieveQueryCondition.set("cntrNo", ed_cntrNo.getValue());
  dma_retrieveQueryCondition.set("odrNo", ed_odrNo.getValue());
  dma_retrieveQueryCondition.set("lineCd", ed_lineCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback 
scwin.sbm_retrieve_submitdone = function () {
  debugger;
  const nCnt = ds_crryinoutList.getRowCount();
  if (nCnt === 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    total.setValue(0);
    return;
  } else {
    ds_crryinoutList.sort("gatelogNo", 1);
    gr_crryinoutList.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
  for (let idx = 0; idx < ds_crryinoutList2.getRowCount(); idx++) {
    if (ds_crryinoutList2.getCellData(idx, "crryinoutClsCd") == "I" && ds_crryinoutList2.getCellData(idx, "selfClsCd") == "LI") {
      ed_lisu.setValue(ds_crryinoutList2.getCellData(idx, "inTot1"));
      ed_liyul.setValue(Math.floor(ds_crryinoutList2.getCellData(idx, "ratio1")));
    }
    if (ds_crryinoutList2.getCellData(idx, "crryinoutClsCd") == "I" && ds_crryinoutList2.getCellData(idx, "selfClsCd") == "LS") {
      ed_lssu.setValue(ds_crryinoutList2.getCellData(idx, "inTot1"));
      ed_lsyul.setValue(Math.floor(ds_crryinoutList2.getCellData(idx, "ratio1")));
    }
    if (ds_crryinoutList2.getCellData(idx, "crryinoutClsCd") == "I" && ds_crryinoutList2.getCellData(idx, "selfClsCd") == "JE") {
      ed_jesu.setValue(ds_crryinoutList2.getCellData(idx, "inTot1"));
      ed_jeyul.setValue(Math.floor(ds_crryinoutList2.getCellData(idx, "ratio1")));
    }
    if (ds_crryinoutList2.getCellData(idx, "crryinoutClsCd") == "O" && ds_crryinoutList2.getCellData(idx, "selfClsCd") == "LI") {
      ed_lisu2.setValue(ds_crryinoutList2.getCellData(idx, "outTot1"));
      ed_liyul2.setValue(Math.floor(ds_crryinoutList2.getCellData(idx, "ratio2")));
    }
    if (ds_crryinoutList2.getCellData(idx, "crryinoutClsCd") == "O" && ds_crryinoutList2.getCellData(idx, "selfClsCd") == "LS") {
      ed_lssu2.setValue(ds_crryinoutList2.getCellData(idx, "outTot1"));
      ed_lsyul2.setValue(Math.floor(ds_crryinoutList2.getCellData(idx, "ratio2")));
    }
    if (ds_crryinoutList2.getCellData(idx, "crryinoutClsCd") == "O" && ds_crryinoutList2.getCellData(idx, "selfClsCd") == "JE") {
      ed_jesu2.setValue(ds_crryinoutList2.getCellData(idx, "outTot1"));
      ed_jeyul2.setValue(Math.floor(ds_crryinoutList2.getCellData(idx, "ratio2")));
    }
  }
};
scwin.udc_comCode_wrkpl_onclickEvent = async function (e) {
  udc_comCode_wrkpl.cfCommonPopUp(scwin.udc_comCode_wrkpl_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//작업장 POP callback
scwin.udc_comCode_wrkpl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
  console.log(ret);
};
scwin.udc_comCode_wrkpl_onblurCodeEvent = function (e) {
  var v = (ed_wrkPlCd.getValue() || "").trim();
  if (v === "") {
    ed_wrkPlNm.setValue("");
    return;
  }
  setTimeout(function () {
    btn_trigger.click();
  }, 0);
};
scwin.udc_comCode_wrkpl_onviewchangeNameEvent = function (info) {
  var v = (ed_wrkPlNm.getValue() || "").trim();
  if (v === "") return;
  btn_trigger.click();
};
scwin.udc_comCode_line_onclickEvent = function (e) {
  udc_comCode_line.cfCommonPopUp(scwin.udc_comCode_line_callBackFunc, ed_lineCd.getValue(), ed_lineNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//라인 POP callback
scwin.udc_comCode_line_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd, ed_lineNm);
  console.log(ret);
};
scwin.udc_comCode_line_onblurCodeEvent = function (e) {
  var v = (ed_lineCd.getValue() || "").trim();
  if (v === "") {
    ed_lineNm.setValue("");
    return;
  }
  btn_triggerU.click();
};
scwin.udc_comCode_line_onviewchangeNameEvent = function (info) {
  var v = (ed_lineNm.getValue() || "").trim();
  if (v === "") return;
  btn_triggerU.click();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_crryinoutClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_comCode_wrkpl',objTypeCode:'data',UpperFlagCode:'1',maxlengthCode:'6',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_comCode_wrkpl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_wrkpl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_wrkpl_onviewchangeNameEvent',mandatoryCode:'true',refDataCollection:'dma_retrieveQueryCondition',code:'dptWrkPlCd',name:'dptWrkPlNm',btnId:'btn_trigger',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'반출일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_crryinoutStDt',edToId:'ed_crryinoutEndDt',objTypeFrom:'Data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd',nameId:'ed_lineNm',id:'udc_comCode_line',UpperFlagCode:'1',maxlengthCode:'5',selectID:'retrieveLineInfoList','ev:onclickEvent':'scwin.udc_comCode_line_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_line_onviewchangeNameEvent',refDataCollection:'dma_retrieveQueryCondition',code:'lineCd',name:'lineClntNo',btnId:'btn_triggerU',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',maxlength:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'일일 반출입 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrdBtn',gridDownYn:'Y',btnUser:'Y',btnPlusYn:'Y',grdDownOpts:'{"fileName" : "일일 반출입 현황.xlsx" , "sheetName" : "일일 반출입 현황" , "type" : "1", "useDataFormat" : "true" }',gridID:'gr_crryinoutList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_crryinoutList',id:'gr_crryinoutList',style:'',visibleRowNum:'13',visibleRowNumFix:'true',focusMode:'row',focusMove:'true',readOnlyBackgroundColor:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'반출입번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'반입<br/>오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'반입일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'반입시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'출발<br/>작업장코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'출발작업장',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'반출일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'반출시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'도착<br/>작업장코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'도착작업장',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'F/E',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'반출<br/>오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'청구<br/>거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column37',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'LINE거래처명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gatelogNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinOdrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinHh',inputType:'text',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutHh',inputType:'text',width:'100',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrTypCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryoutOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'lineClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtTrf',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사운송/비율(I)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_lisu',placeholder:'',class:'',readOnly:'true',displayFormat:'#,###'}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_liyul',placeholder:'',class:'',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가영업/비율(I)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_lssu',placeholder:'',style:'width:150px;',readOnly:'true',displayFormat:'#,###'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lsyul',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가운송/비율(I)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_jesu',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'ed_jeyul',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사운송/비율(O)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_lisu2',placeholder:'',style:'width:150px;',readOnly:'true',displayFormat:'#,###'}},{T:1,N:'xf:input',A:{class:'',id:'ed_liyul2',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가영업/비율(O)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_lssu2',placeholder:'',style:'width:150px;',readOnly:'true',displayFormat:'#,###'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lsyul2',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가운송/비율(O)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_jesu2',placeholder:'',style:'width:150px;'}},{T:1,N:'xf:input',A:{class:'',id:'ed_jeyul2',placeholder:'',style:'width:150px;',readOnly:'true'}}]}]}]}]}]}]}]}]}]}]})