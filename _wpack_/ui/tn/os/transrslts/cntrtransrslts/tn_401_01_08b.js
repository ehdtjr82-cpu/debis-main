/*amd /ui/tn/os/transrslts/cntrtransrslts/tn_401_01_08b.xml 24288 adf143495bbbd2a6e7e3c35729577d1dcbaba598b34d65f000f5051f901213fb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rsltsStdDtTo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtFm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellBilgCltLupCond',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellBilgCltLupCond',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'subTotalYn',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntKndCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtFm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsStdDtTo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edStartDt',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edEndDt',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onWrkPlCd',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offWrkPlCd',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk20Qty',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk40Qty',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrk45Qty',name:'45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'단위(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'단가(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'금액(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellPostDt',name:'회계일자(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'거래처(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'금액(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPostDt',name:'회계일자(매입)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'비율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetrieveClntEchCntrTransRsltsPrscondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_retrieve',target:'data:json,{"id":"ds_master","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSubmitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수 세팅
scwin.epId;
scwin.strDate;
scwin.strCurDate;
scwin.userId;
scwin.comboRtnFlag01;
scwin.comboRtnFlag02;
scwin.interval01;
scwin.prevRow = 0;
scwin.onpageload = async function () {
  scwin.f_SetDefaultData();
  scwin.interval01 = setInterval(async function () {
    const codeOptions = [{
      method: "getLuxeComboData",
      param1: "WorkImplementEBC",
      param2: "retriveLobran2CodeList",
      param3: ["1"],
      compID: "acb_sellBilgCltLupCond" //바인딩 할 컴포넌트 id
    }];
    await $c.data.setGauceUtil($p, codeOptions);
    clearInterval(scwin.interval01);
  }, 300);
  const codeOptions1 = [{
    grpCd: "SD113",
    compID: "acb_odrKndCd",
    opt: {
      "range": "1,C"
    }
  } //<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>">
  ];
  await $c.data.setCommonCode($p, codeOptions1, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = async function () {
  dlt_commonCodeSD113.removeColumnFilter('cd');
  var filterOptions = {
    type: 'regExp',
    colIndex: 'cd',
    key: /^(?!CK$|CZ$).*C.*/i,
    condition: 'and'
  };
  dlt_commonCodeSD113.setColumnFilter(filterOptions);
  dlt_commonCodeSD113.reform();
  ed_bilgClntNm.setReadOnly(true);
  ed_bilgClntNo.focus();
};
scwin.f_SetDefaultData = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.epId = scwin.memJson.epId;
  scwin.strDate = WebSquare.date.getCurrentServerDate().substring(0, 6);
  scwin.strCurDate = WebSquare.date.getCurrentServerDate().substring(0, 8);
  scwin.userId = scwin.memJson.userId;
  dma_search.set("rsltsStdDtFm", scwin.strDate + "01");
  dma_search.set("rsltsStdDtTo", scwin.strCurDate);
  acb_clntKndCd.setValue("0");
  acb_odrKndCd.setValue("");
};
scwin.f_Retrieve = function () {
  if (!$c.gus.cfValidate($p, [tbl_search])) {
    return;
  }
  if (cbx_total_yn.getValue() == "1")
    //집계표 체크박스 
    var subTotalYn = "1";else var subTotalYn = "0";
  if (!$c.gus.cfIsAfterDate($p, ed_rsltsStdDtFm.getValue(), ed_rsltsStdDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_rsltsStdDtFm.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_rsltsStdDtFm.getValue(), ed_rsltsStdDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_rsltsStdDtFm.focus();
    return;
  }
  ;
  dma_retrieve.set("bilgClntNo", ed_bilgClntNo.getValue());
  dma_retrieve.set("sellBilgCltLupCond", acb_sellBilgCltLupCond.getValue());
  dma_retrieve.set("subTotalYn", subTotalYn);
  dma_retrieve.set("clntKndCd", acb_clntKndCd.getValue());
  dma_retrieve.set("odrNo", ed_odrNo.getValue());
  dma_retrieve.set("odrKndCd", acb_odrKndCd.getValue());
  dma_retrieve.set("rsltsStdDtFm", ed_rsltsStdDtFm.getValue());
  dma_retrieve.set("rsltsStdDtTo", ed_rsltsStdDtTo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_SetDefaultData();
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 거래처  팝업
      udc_bilgClnt.setSelectId("retrieveClntList_tpro");
      await udc_bilgClnt.cfCommonPopUp(scwin.retrieveClntList_tproCallBack, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", "" //" ,S"
      , null, null, null, null, null, pAllSearch, null, null); // 

      //거래처ID    거래처명  

      break;
  }
  ;
};
scwin.retrieveClntList_tproCallBack = async function (rtnList) {
  await $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm);
};
scwin.sbm_retrieveSubmitDone = function () {
  ed_total.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    ed_bilgClntNo.focus();
  }
  ;
  $c.gus.cfGoPrevPosition($p, gr_master, scwin.prevRow);
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  if (ed_bilgClntNo.getValue() != "") scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'T', 'T');else ed_bilgClntNm.setValue("");
};
scwin.rateForm = function () {
  var pchsSum = 0;
  var sellSum = 0;
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    pchsSum += Number(ds_master.getCellData(i, "pchsAmt")) || 0;
    sellSum += Number(ds_master.getCellData(i, "sellAmt")) || 0;
  }
  var sumRate = 0;
  if (sellSum != 0) {
    return sumRate = Math.round(pchsSum * 100 / sellSum * 10) / 10;
  }
};
scwin.udc_bilgClnt_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(1, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'T');
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Excel = async function () {
  let ret = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (ret) {
    //cfGridToExcel(objGridName, "총계정원장집계표","총계정원장집계표.xls",8+16);

    const options = {
      fileName: "컨테이너운송실적현황.xlsx",
      // + ".xls",
      sheetName: "컨테이너운송실적현황",
      type: 1,
      useStyle: true,
      useSubTotal: true,
      colMerge: true,
      colMergeTextAlign: "top"
    };
    await $c.data.downloadGridViewExcel($p, gr_master, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출기준실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_rsltsStd',refDataMap:'dma_search',refEdDt:'rsltsStdDtTo',refStDt:'rsltsStdDtFm',style:'',edFromId:'ed_rsltsStdDtFm',edToId:'ed_rsltsStdDtTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sellBilgCltLupCond',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.sellBilgCltLupCond',displayMode:'value delim label',allOption:'',chooseOptionLabel:'전체',chooseOption:'true'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_clntKndCd',style:'width:100px;',submenuSize:'auto',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'청구거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',code:'bilgClntNo',name:'bilgClntNm',nameId:'ed_bilgClntNm',codeId:'ed_bilgClntNo',btnId:'btn_bilgClnt',id:'udc_bilgClnt','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgClnt_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent',allowCharCode:'a-z0-9A-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'집계표',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_total_yn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'a-z0-9A-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'',displayMode:'value delim label',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너오더별 운송실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_master',gridDownFn:'scwin.f_Excel',gridDownYn:'Y',gridUpYn:'N',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFitMinWidth:'1700',focusMode:'cell',rowStatusVisible:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더종류',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'청구거래처',width:'160',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'출발지',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'도착지',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'실적일자',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업수량',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'매출',width:'280',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',id:'column37',value:'매입',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'납품처',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'20',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'40',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'45',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'단위',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'단가',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'회계일자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'거래처',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'차량번호',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'단가',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'회계처리',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'비율',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onWrkPlCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'offWrkPlCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrk20Qty',inputType:'text',width:'70',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrk40Qty',inputType:'text',width:'70',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrk45Qty',inputType:'text',width:'70',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUnitCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellUpr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellPostDt',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsClntNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsPostDt',value:'',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rate',value:'',displayMode:'label',textAlign:'right',excelCellType:'bigDecimal',dataType:'float',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dmndNm',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'wrk20Qty\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'wrk40Qty\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'sum(\'wrk45Qty\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',dataType:'float',expression:'!sum(\'rate\') ? 0 : sum(\'rate\')',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})