/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_09_01p.xml 17345 10b12d12eb9b8dc2b8a9f28d2c37434eff35be80995e6f6a5b26c24ac9c01496 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_result',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구 귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountManagerNm',name:'채권 담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrDd',name:'초과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovrAmt',name:'금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminCd',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableOverDayDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 환경변수
scwin.sDate = WebSquare.date.getCurrentServerDate();
scwin.userId = "";
scwin.strFromDate = scwin.sDate;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.popTitleCh();
  scwin.params = $c.data.getParameter($p);
  scwin.bilgAcctDeptCd = scwin.params.bilgAcctDeptCd == null ? "" : scwin.params.bilgAcctDeptCd;
  scwin.stdDt = scwin.params.stdDt == null ? "" : scwin.params.stdDt;
  scwin.adminCd = scwin.params.adminCd == null ? "" : scwin.params.adminCd;
  if (scwin.params.bilgAcctDeptCd == null) {
    scwin.login = $c.data.getMemInfo($p);
    scwin.userId = scwin.login.userId;
  }
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "초과일별채권 상세 리스트");
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);

  // if(scwin.bilgAcctDeptCd != ''){  
  //     ed_bilgAcctDeptCd.setValue(scwin.bilgAcctDeptCd);
  // } // 사용안함

  if (scwin.adminCd != '') {
    dma_search.set("adminCd", scwin.adminCd);
  } else if (scwin.adminCd == '') {
    dma_search.set("adminCd", "0");
  }
  if (scwin.stdDt != '') {
    ica_stdDt.setValue(scwin.stdDt);
  } else if (scwin.stdDt == '') {
    ica_stdDt.setValue(scwin.strFromDate);
  }
  if (scwin.bilgAcctDeptCd != '' && scwin.adminCd != '' && scwin.stdDt != '') {
    $c.gus.cfDisableObjects($p, [ica_stdDt]);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //  전사 채권담당자 user id
  // scwin.userId = "021169"

  if (scwin.bilgAcctDeptCd == '' && scwin.userId != '021169') {
    await $c.win.alert($p, "초과채권 상세내역 전사 조회는 전사 채권담당자만 가능 합니다.");
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  let rtnList = new Array();
  let param = "";
  // let selectID ='';
  switch (flag) {
    /*
    case '1':
        // 청구귀속부서 ed_bilgAcctDeptCd, ed_bilgAcctDeptNm
        let param ="";
        let selectID ='retrieveAcctDeptCdInfo';
        
        rtnList = cfCommonPopUp(selectID,
                                ed_bilgAcctDeptCd.getValue().trim(),
                                ed_bilgAcctDeptNm.getValue(),
                                check,
                                null,
                                null,
                                null,
                                null,
                                param,
                                null,
                                null,
                                null,
                                null); 
        scwin.f_resultPopEd(ed_bilgAcctDeptCd,ed_bilgAcctDeptNm,rtnList);
        break;
    */

    case '2':
      // 사업자번호
      param = "";
      rtnList = ucd_crnInfo.cfCommonPopUp(scwin.ucd_crnInfo_callBackFunc, ed_crn.getValue().trim(), ed_busiNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      // 거래처 ed_clntNo, ed_clntNm
      param = "";
      rtnList = udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.ucd_crnInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_crn.setValue(rtnList[0]);
    ed_busiNm.setValue(rtnList[1]);
    ed_crn.options.hidVal = rtnList[0];
  } else {
    ed_crn.setValue("");
    ed_busiNm.setValue("");
    ed_crn.options.hidVal = "";
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------	
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
// init btn
scwin.btn_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ica_stdDt, ed_crn, ed_busiNm, ed_clntNo, ed_clntNm]);
};

// sbm completed
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_result.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(rowCnt);
};

// crn udc btn click event
scwin.ucd_crnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

// crn udc code OnKillFocus event
scwin.ucd_crnInfo_onblurCodeEvent = function (e) {
  ed_busiNm.setValue("");
  if (ed_crn.getValue() != "") {
    scwin.f_checkPopEd(ed_crn, ed_busiNm, '2');
  }
};

// clntlist udc btn click event
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

// clntlist udc code OnKillFocus event
scwin.udc_clntList_onblurCodeEvent = function (e) {
  ed_clntNm.setValue("");
  if (ed_clntNo.getValue() != "") {
    scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '3');
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_stdDt',style:'',ref:'data:dma_search.stdDt',displayFormat:'yyyy/MM/dd',title:'기준일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_crn',popupTitle:'',nameId:'ed_busiNm',style:'',code:'crn',refDataCollection:'dma_search',btnId:'btn_crn',id:'ucd_crnInfo',allowCharCode:'0-9',mandatoryCode:'false',maxlengthCode:'10',objTypeCode:'data',maxlengthName:'60',validExpName:'사업자명:no:maxLength=70&notAllowed',mandatoryName:'false','ev:onclickEvent':'scwin.ucd_crnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.ucd_crnInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'popupMgntClntNo',popupTitle:'',selectID:'retrieveClntList',style:'',code:'clntNo',refDataCollection:'dma_search',id:'udc_clntList',mandatoryName:'true',allowCharCode:'0-9',mandatoryCode:'false',maxlengthCode:'6',objTypeCode:'data',validExpCode:'거래처:no:maxLength=6&number','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수금기일 초과채권 메일발송 상세 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_result',grdDownOpts:'{"fileName" : "수금기일 초과채권 메일발송 상세 List.xlsx" ,"type" : "1" }',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',dataDragSelect:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'기준일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'청구</br>귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'채권</br>담당자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'사업자</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'사업자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'거래처</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'초과일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'금액',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDt',inputType:'calendar',style:'',value:'',width:'100',colMerge:'true',displayFormat:'yyyy/MM/dd',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'100',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'accountManagerNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',style:'',value:'',width:'100',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',style:'',value:'',width:'100',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovrDd',inputType:'text',style:'',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovrAmt',inputType:'',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column21',value:'',displayMode:'label',expression:'SUM("ovrAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})