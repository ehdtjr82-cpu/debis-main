/*amd /ui/il/pfm/pefm/pe_112_01_03b.xml 29238 040166290b42c1b8c86eba9981609eb54fed4670f709c3b75f02cc382eddf3ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srchClntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'seaair',name:'해운항공구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellOdrNo',name:'매출오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCertiNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSlipNo',name:'매출전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesNm',name:'영업사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totalSellAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'recvAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyAmt',name:'수금금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyAmtFcrc',name:'수금금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyDt',name:'수금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notCollMoneyRsn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금예정일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/il.pfm.pefm.RetrievePartnerPaymentPrscondQueryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_paymgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM017",
    compID: "lc_payStsCd"
  }, {
    grpCd: "ZZ006",
    compID: "cnd_lc_crcCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    ///임시
    /*
    scwin.vQryStDt = '20250201';
    scwin.vCurDate = '20250209';
    */
    ///임시
    ica_dcsnStDt.setValue(scwin.vQryStDt);
    ica_dcsnEndDt.setValue(scwin.vCurDate);
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, cdVal, nmVal, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      udc_clntNo.cfCommonPopUp(scwin.callbackClntList, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      //scwin.f_resultPopEd(cdVal,nmVal,rtnList);
      break;
    case '2':
      udc_reqAcctDeptCd.cfCommonPopUp(scwin.callbackAcctDeptCdInfo6, ed_reqAcctDeptCd.getValue().trim(), ed_reqAcctDeptNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      //scwin.f_resultPopEd(cdVal,nmVal,rtnList);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.hidVal) return;
  strNm.setValue("");
  //strCd.hidVal="";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, strCd, strNm, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    //strCd.hidVal = rtnList[0];  // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    //strCd.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var chk = await $c.gus.cfValidate($p, [ica_dcsnStDt, ica_dcsnEndDt]);
  if (!chk) {
    return;
  }

  //조회시작일자가 더 클경우 체크
  var chkDate = await $c.gus.cfIsAfterDate($p, ica_dcsnStDt.getValue(), ica_dcsnEndDt.getValue());
  if (!chkDate) {
    $c.win.alert($p, MSG_CM_ERR_039);
    return;
  }
  //tr_retrievePaymgnt.post();
  $c.sbm.execute($p, sbm_retrievePaymgnt);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
  ica_dcsnStDt.setValue(scwin.vQryStDt);
  ica_dcsnEndDt.setValue(scwin.vCurDate);
};
scwin.callbackClntList = function (rtnList) {
  scwin.f_resultPopEd(ed_clntNo, ed_clntNm, rtnList);
};
scwin.callbackAcctDeptCdInfo6 = function (rtnList) {
  scwin.f_resultPopEd(ed_reqAcctDeptCd, ed_reqAcctDeptNm, rtnList);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_Srch_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrievePaymgnt_submitdone = function (e) {
  if (ds_paymgnt.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다");
  }
  var options = {};
  options.sortIndex = "clntNo payNo";
  options.sortOrder = "1 1"; //오른차순:"1", 내림차순"-1"
  ds_paymgnt.multisort(options);
  ds_paymgnt.reform();
  spa_cnt.setValue(ds_paymgnt.getRowCount());
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_clntNo, ed_clntNm, 'T');
};
scwin.udc_clntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '1');
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', ed_clntNo, ed_clntNm, 'T');
};
scwin.udc_reqAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'T');
};
scwin.udc_reqAcctDeptCd_onviewchangeCodeEvent = function (info) {
  scwin.f_checkPopEd(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '2');
};
scwin.udc_reqAcctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('2', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_condition',refEdDt:'dcsnEndDt',refStDt:'dcsnStDt',style:'',edFromId:'ica_dcsnStDt',edToId:'ica_dcsnEndDt',mandatoryFrom:'true',mandatoryTo:'true',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',btnId:'btn_clntNo',id:'udc_clntNo',nameId:'ed_clntNm',selectID:'retrieveClntList',refDataCollection:'dma_condition',code:'srchClntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_clntNo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_reqAcctDeptCd',btnId:'btn_reqAcctDeptCd',id:'udc_reqAcctDeptCd',nameId:'ed_reqAcctDeptNm',refDataCollection:'dma_condition',code:'reqDept','ev:onclickEvent':'scwin.udc_reqAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_reqAcctDeptCd_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_reqAcctDeptCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_payStsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_condition.payStsCd',chooseOption:'true',chooseOptionLabel:'전체'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Air/Sea',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_seaair',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'(전체)',ref:'data:dma_condition.seaair',allOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'(전체)',ref:'data:dma_condition.iogb',allOption:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_crcCd',search:'start',style:'width:180px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_condition.crcCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_Srch_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"gr_paymgnt.xlsx","type":"4+8+16"}',gridID:'gr_paymgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_paymgnt',id:'gr_paymgnt',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column163',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'요청금액',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'요청일자',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표번호',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'지급번호',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'거래처번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'B/L번호',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'매출오더번호',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'매출전표번호',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column39',value:'거래처번호<br/>(화주번호)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',value:'거래처명<br/>(화주명)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column35',value:'영업사원',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column33',displayMode:'label',value:'매출',colSpan:'4',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'매입금액',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column102',value:'채권금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',value:'채권금액<br/>(외화)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',value:'수금금액',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',value:'수금금액<br/>(외화)',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column90',value:'수금일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column87',value:'수금여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column84',value:'미수사유',displayMode:'label',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column81',value:'수금예정일',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column68',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'금액(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column66',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column65',value:'Total',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'supp',displayMode:'label',hiddenCol:'true',hidden:'true',expression:'display("clntNm") + display("payAmt") + display("dcsnDt") + display("slipNo") + display("payNo") + display("clntNo") + display("blNo") + display("sellOdrNo") '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'payAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'dcsnDt',displayMode:'label',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'slipNo',displayMode:'label',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'payNo',displayMode:'label',readOnly:'true',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blNo',displayMode:'label',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellOdrNo',displayMode:'label',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sellSlipNo',displayMode:'label',colMerge:'true',upperColumn:'supp'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'bilgClntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'salesNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmtFcrc',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vatAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'totalSellAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'recvAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amtFcrc',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyAmtFcrc',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'collMoneyDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'collMoneyYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'notCollMoneyRsn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'collMoneyIntendDt',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'clntNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column166',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column162',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column161',displayMode:'label',expression:'sum(\'payAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column160',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column159',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column158',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column157',displayMode:'label',expression:'avg(\'clntNo\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column156',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column155',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column154',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column153',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column152',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column151',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column150',displayMode:'label',dataType:'number',expression:'sum(\'sellAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column149',displayMode:'label',dataType:'number',expression:'sum(\'sellAmtFcrc\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',id:'column148',displayMode:'label',dataType:'number',inputType:'expression',expression:'sum(\'vatAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column147',displayMode:'label',dataType:'number',expression:'sum(\'totalSellAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column146',displayMode:'label',dataType:'number',expression:'sum(\'pchsAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column145',displayMode:'label',dataType:'number',expression:'sum(\'recvAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column144',displayMode:'label',dataType:'number',expression:'sum(\'amtFcrc\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column143',displayMode:'label',dataType:'number',expression:'sum(\'collMoneyAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column142',displayMode:'label',dataType:'number',expression:'sum(\'collMoneyAmtFcrc\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column141',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column140',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column139',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column138',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column167',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column129',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column128',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column127',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column126',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column125',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column124',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column123',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column122',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column121',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column120',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column119',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column118',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column117',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column116',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column115',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column114',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column113',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column112',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column111',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column110',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column109',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column108',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column107',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column106',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column105',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})