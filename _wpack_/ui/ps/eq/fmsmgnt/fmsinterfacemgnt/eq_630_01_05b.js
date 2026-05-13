/*amd /ui/ps/eq/fmsmgnt/fmsinterfacemgnt/eq_630_01_05b.xml 22018 9c546d42b8853e6372b8fa83d8cbb9d4a69f94237f41f7f4338f3201c903b6fc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commClsCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptClnt',name:'인도처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbeginStockQty',name:'기초재고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tbeginStockAmt',name:'기초재고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'출고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleAmt',name:'매출금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tendStockQty',name:'기말재고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tendStockAmt',name:'기말재고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatAmt',name:'매입부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'saleVatAmt',name:'매출부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClsCd',name:'상품구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'출고단가',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_stock'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.RetrieveFmsAPStockContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.CalculateFmsAPStockContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_stock","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ps.eq.fmsmgnt.fmsinterfacemgnt.CalculateFmsAPStockContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_stock","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드값
  const codeOptions = [{
    grpCd: "TL106",
    compID: "lc_commClsCd",
    opt: {
      "range": "1, A"
    }
  }, {
    grpCd: "TL405",
    compID: "lc_clntNo"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  lc_commClsCd.setValue("05"); // AP

  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, [tb_srchCond]);
  ed_stDt.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  lc_commClsCd.setSelectedIndex(0);
  lc_clntNo.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //tobe변경 : 공통 함수 쓸 경우, alert창에 어떤 항목이 필수입력사항인지 나오지 않음. 
  if ($c.gus.cfIsNull($p, ed_stDt.getValue())) {
    //if (!cfValidate([ed_stDt]))
    await $c.win.alert($p, "기준년월은(는) 필수 입력 항목입니다.");
    return;
  }
  dma_condition.set("stDt", ed_stDt.getValue());
  dma_condition.set("clntNo", lc_clntNo.getValue());
  dma_condition.set("commClsCd", lc_commClsCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowcnt = ds_out.getRowCount();
    totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다	
    }
  }
};

//-------------------------------------------------------------------------
// 재고관리(C/D)
//-------------------------------------------------------------------------
scwin.f_stock = async function (clsCd) {
  //tobe변경 : 공통 함수 쓸 경우, alert창에 어떤 항목이 필수입력사항인지 나오지 않음. 
  if ($c.gus.cfIsNull($p, ed_stDt.getValue())) {
    //if (!cfValidate([ed_stDt]))
    await $c.win.alert($p, "기준년월은(는) 필수 입력 항목입니다.");
    return;
  }
  dma_stock.set("stdYm", ed_stDt.getValue());
  dma_stock.set("commClsCd", lc_commClsCd.getValue());
  dma_stock.set("regId", "350012");
  if (clsCd == "C") {
    if (await $c.win.confirm($p, `${ed_stDt.getValue()}월에 대한 FMS 상품 재고 생성을 하시겠습니까?`)) {
      dma_stock.set("clsCd", "C");
      $c.sbm.execute($p, sbm_create);
    }
  } else if (clsCd == "D") {
    if (await $c.win.confirm($p, ed_stDt.getValue() + "월에대한 FMS 상품 재고 취소를 하시겠습니까?")) {
      dma_stock.set("clsCd", "D");
      $c.sbm.execute($p, sbm_delete);
    }
  }
};

//-------------------------------------------------------------------------
// 생성처리 완료
//-------------------------------------------------------------------------
scwin.sbm_create_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, "재고 생성이 완료되었습니다.");
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 취소 처리완료
//-------------------------------------------------------------------------
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, "재고 취소가 완료되었습니다.");
    scwin.f_Retrieve();
  }
};

//tobe : 호출부분 미존재
//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
// function f_openCommonPopUp(disGubun, pCode, pName, pClose, pAllSearch, row) {
//     if(row == null) {
//         row = 0;
//     }

//     // 선언부
//     var rtnList = new Array();  // 공통POP-UP -> 요청화면 

//     switch (disGubun) { 			
//         case 1:
//             break;
//         default:
//             break;
//     }		
// };

//tobe : 호출부분 미존재
//-------------------------------------------------------------------------
// POP-UP Call전 Checking
//-------------------------------------------------------------------------
// function f_chkOpenCommonPopUp(inObj, pairObj, disGubun, isCode) {
//     // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
//     if (!cfCanOpenPopup(inObj, pairObj))
//         return;

//     // 짝이 되는 오브젝트의 값 제거
//     cfClearPairObj(pairObj);

//     // 검색어 세팅
//     var pVal = cfGetValue(inObj);

//     // inObj가 코드 필드일 경우 팝업
//     if (isCode == null || isCode == true)
//         f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
//     // inObj가 코드명 필드일 경우 팝업
//     else
//         f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
// };

scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀다운로드
//-------------------------------------------------------------------------
scwin.excelDown = function () {
  const options = {
    fileName: "FMS정비상품재고관리_.xlsx",
    sheetName: "FMS정비상품재고관리"
    // columnMove : "true",
    // useFooter : "true"
  };
  $c.data.downloadGridViewExcel($p, gr_out, options);
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_stock('C');
};
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_stock('D');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stDt',style:'',displayFormat:'yyyy/MM',mandatory:'true',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상품 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_commClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인도처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clntNo',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'value delim label',chooseOptionLabel:'전체',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'FMS정비 상품 재고관리 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_out',gridDownFn:'scwin.excelDown',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataDragSelect:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'기준년월',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'인도처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'기초재고</br>수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'기초재고</br>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'입고</br>수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'입고</br>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'출고</br>수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'출고</br>금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'매출</br>금액',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'기말재고</br>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'기말재고</br>금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'매입부가세금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'매출부가세금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column52',value:'상품구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'출고단가',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdYm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcptClnt',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tbeginStockQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tbeginStockAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'saleAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tendStockQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tendStockAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'pchsVatAmt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'saleVatAmt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'commClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outUpr',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'총합',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',expression:'SUM("tbeginStockQty")',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tbeginStockAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("inQty")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("inAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("outQty")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("outAmt")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("saleAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tendStockQty")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("tendStockAmt")'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create',type:'button',class:'btn','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재고 생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Cancel',type:'button',class:'btn','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재고 취소'}]}]}]}]}]}]}]}]}]})