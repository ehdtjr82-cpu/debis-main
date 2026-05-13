/*amd /ui/il/pfm/pefm/pe_112_01_02b.xml 28870 2acdccdcfd56bb71e1b9db26c9ad7950095ac22d19655e5c1b46b047c6c727ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'요청금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgntDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellOdrNo',name:'매출오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSlipNo',name:'매출전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처번호;(화주번호)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처명;(화주명)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'영업사원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalSellAmt',name:'Total',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'지급환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recvAmt',name:'채권금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'채권금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAmt',name:'수금금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAmtFcrc',name:'수금금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyDt',name:'수금일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyYn',name:'수금여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notCollMoneyRsn',name:'미수사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금예정일',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchClntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payCrcCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_conditionDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'blNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/il.pfm.pefm.RetrievePaymentPrscondQuery2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition", "key":"IN_DS1"}, {"id":"ds_paymgnt", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgntDetail',action:'/il.pfm.pefm.RetrievePaymentPrscondDetailQueryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_conditionDetail", "key":"IN_DS1"}, {"id":"ds_paymgntDetail", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgntDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgntDetail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   

scwin.hid_clnt = "";
scwin.hid_dept = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM017",
    compID: "lc_payStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_dcsnStDt.setValue(today.substr(0, 6) + "01");
  ed_dcsnEndDt.setValue(today);
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------    
scwin.setInit = function () {
  lc_payStsCd.addItem("전체", "", null, 0);
  lc_payStsCd.setSelectedIndex(0);
};
scwin.f_openPopUp = function (flag, cdVal, nmVal, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      udc_clnt.setSelectId("retrieveClntList");
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callbackFunc, cdVal.getValue().trim(), nmVal.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
    case '2':
      udc_reqAcctDept.setSelectId("retrieveAcctDeptCdInfo6");
      udc_reqAcctDept.cfCommonPopUp(scwin.udc_reqAcctDept_callbackFunc, cdVal.getValue().trim(), nmVal.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_clnt_callbackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_clntNo, txt_clntNm, rtnList);
};
scwin.udc_reqAcctDept_callbackFunc = function (rtnList) {
  scwin.f_resultPopEd(ed_reqAcctDeptCd, txt_reqAcctDeptNm, rtnList);
};
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  // scwin.hid_clnt = "";
  // scwin.hid_dept = "";
  if (strCd.getValue().trim() == strCd.hidVal) return;
  strNm.setValue("");
  strCd.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, strCd, strNm, 'T');
};
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    // strCd.hidVal = rtnList[0];  // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    // strCd.hidVal = "";
  }
};
scwin.excelDown = function () {
  if (ds_paymgnt.getTotalRow() == 0) {
    $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return;
  }
  let fileName = "지급현황조회";
  $c.data.downloadGridViewExcel($p, gr_paymgnt, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------    
scwin.btn_retrieve_onclick = async function (e) {
  if (!$c.gus.cfValidate($p, [ed_dcsnStDt, ed_dcsnEndDt])) {
    return;
  }
  if (ed_dcsnStDt.getValue() == "" || ed_dcsnEndDt.getValue() == "") {
    await $c.win.alert($p, "요청일자은(는) 필수 입력 항목입니다.");
    if (ed_dcsnStDt.getValue() == "") {
      ed_dcsnStDt.focus();
    } else {
      ed_dcsnEndDt.focus();
    }
    return;
  }
  //조회시작일자가 더 클경우 체크
  if (!$c.gus.cfIsAfterDate($p, ed_dcsnStDt.getValue(), ed_dcsnEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  $c.sbm.execute($p, sbm_retrievePaymgnt);
};
scwin.btn_clear_onclick = function (e) {
  ds_condition.setEmptyValue();
  txt_clntNm.setValue("");
  txt_reqAcctDeptNm.setValue("");
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_dcsnStDt.setValue(today.substr(0, 6) + "01");
  ed_dcsnEndDt.setValue(today);
};
scwin.sbm_retrievePaymgnt_submitdone = function (e) {
  if (ds_paymgnt.getTotalRow() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    ed_totalRow.setValue(ds_paymgnt.getTotalRow());
  }
  ds_paymgnt.sort("payNo", 0);
};
scwin.gr_paymgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_paymgnt.getTotalRow() > 0) {
    ds_conditionDetail.set("blNo", ds_paymgnt.getCellData(rowIndex, "blNo"));
    ds_conditionDetail.set("payNo", ds_paymgnt.getCellData(rowIndex, "payNo"));
    $c.sbm.execute($p, sbm_retrievePaymgntDetail);
  }
};
scwin.sbm_retrievePaymgntDetail_submitdone = function (e) {
  if (ds_paymgntDetail.getTotalRow() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    ed_totalDetailRow.setValue(ds_paymgntDetail.getTotalRow());
  }
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_clntNo, txt_clntNm, '1');
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_clntNo, txt_clntNm, 'T');
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', ed_clntNo, txt_clntNm, 'T');
};
scwin.udc_reqAcctDept_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_reqAcctDeptCd, txt_reqAcctDeptNm, '2');
};
scwin.udc_reqAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_reqAcctDeptCd, txt_reqAcctDeptNm, 'T');
};
scwin.udc_reqAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('2', ed_reqAcctDeptCd, txt_reqAcctDeptNm, 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'dcsnStDt',refDataMap:'ds_condition',style:'',id:'udc_dcsnDt',refEdDt:'dcsnEndDt',edFromId:'ed_dcsnStDt',edToId:'ed_dcsnEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',nameId:'txt_clntNm',style:'',id:'udc_clnt',btnId:'img_clntNo',refDataCollection:'ds_condition',code:'srchClntNo','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_reqAcctDeptCd',nameId:'txt_reqAcctDeptNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_reqAcctDept',refDataCollection:'ds_condition',code:'reqDept','ev:onblurCodeEvent':'scwin.udc_reqAcctDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_reqAcctDept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_reqAcctDept_onviewchangeNameEvent',maxlengthCode:'5',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_payStsCd',search:'start',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_condition.payStsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급환종 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'lc_payCrcCd',ref:'data:ds_condition.payCrcCd',search:'start',style:'width: 100px;',submenuSize:'fixed'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'원화'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'외화'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_paymgnt',btnUser:'Y',gridUpYn:'N',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_paymgnt',focusMode:'row',id:'gr_paymgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'요청금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'지급번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'B/L번호',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_paymgntDetail',focusMode:'row',id:'gr_paymgntDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'none',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'매출오더번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'매출전표번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'거래처번호</br>(화주번호)',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'거래처명</br>(화주명)',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'영업사원',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'매출',width:'360',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'매입금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'매입금액(외화)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column58',value:'지급금액(외화)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'지급환종',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'채권금액',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'채권금액(외화)',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'수금금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column98',value:'수금금액(외화) ',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'수금일',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'수금여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'미수사유',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column86',value:'수금예정일',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'금액(외화) ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'Total',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellOdrNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSlipNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salesNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalSellAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'payAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recvAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',style:'',value:'',width:'130',textAlign:'right',dataType:'number',displayFormat:'#,###.##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'collMoneyAmtFcrc',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.##',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'notCollMoneyRsn',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'collMoneyIntendDt',value:'',displayMode:'label',displayFormat:'####/##/##'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column61',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column40',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalDetailRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})