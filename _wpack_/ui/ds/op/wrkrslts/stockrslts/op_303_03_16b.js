/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_03_16b.xml 21907 c47cf3ac0c368337514a319f1a911c207bf85961f25981e136011197c33391ff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'장치장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplQtyUnitCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcgNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplSaleClsCd',name:'판매구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tplPrdtStsCd',name:'제품상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'boxQty',name:'상자수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'CBM',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_stockQuery'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branch',name:'지점',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoClntNo',name:'선사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpDomesticCls',name:'수출입내수구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrieveMerchantKindOfCargoEachStockPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_stockQuery","key":"IN_DS1"},{"id":"ds_stockPresent","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_stockPresent","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류>실적현황>벌크 재고>작업장별 화주 재고현황
//조회조건 점소 : 6AA , 장치장 6C01    데이터가 많으므로 검색어 입력 시 주의할 것
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //f_createHeader();
  //f_Retrieve();
  //이건 안씀
  //ds_impExpClsCd.DataId = "/cm.zz.RetrieveCodeCMD.do?grpCd=OP194";
  //ds_impExpClsCd.Reset();

  //ds_lobranCd.DataID = "/ds.co.RetreiveLoBranCMD.do"; 
  //ds_lobranCd.Reset();
};
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "InoutEBC",
    param2: "retrieveSysCdTest_HanNongSection",
    param3: ["SALE_001"],
    compID: "acb_impExpClsCd,gr_stockPresent:tplSaleClsCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.setCommonCodeCallBack2);
  const codeOptions1 = [{
    method: "getLuxeComboData",
    param1: "InoutEBC",
    param2: "retrieveSysCdTest_HanNongSection",
    param3: ["UNIT_001"],
    compID: "gr_stockPresent:tplQtyUnitCd"
  }];
  $c.data.setGauceUtil($p, codeOptions1);

  //공통코드 적용
  const codeOptions2 = [{
    grpCd: "OP214",
    compID: "gr_stockPresent:tplPrdtStsCd"
  } //열위치
  ];
  $c.data.setCommonCode($p, codeOptions2, scwin.setCommonCodeCallBack);

  //scwin.f_OnLoad();
  $c.sbm.execute($p, sbm_lobran);
};
scwin.setCommonCodeCallBack = function () {};
scwin.setCommonCodeCallBack2 = function () {
  acb_impExpClsCd.addItem("전체", "", null, 0);
  acb_impExpClsCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, retrieveCond))) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// Pop up 
//-------------------------------------------------------------------------

scwin.f_openPopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case 1:
      udc_wrkPlCd.setSelectId('retrieveWrkPlInfo');
      rtnList = udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCdCallback, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null);
      break;
    case 3:
      udc_stockClntNo.setSelectId('retrieveClntList');
      rtnList = udc_stockClntNo.cfCommonPopUp(scwin.udc_stockClntNoCallback, ed_stockClntNo.getValue(), ed_stockClntNm.getValue(), chgGubun, '5', null, '150,170', null, null, '440', '500', null, null);
      break;
    default:
      break;
  }
};

//------------------------------------------------------
// object 데이타 변경시 호출
//------------------------------------------------------
scwin.f_chkField = function (chgValue1, chgValue2, disGubun) {
  var chgObj1 = eval(chgValue1);
  var chgObj2 = eval(chgValue2);
  var objType1 = chgValue1.substr(0, 2);
  var objType2 = chgValue2.substr(0, 2);
  if (objType1 == "ed") {
    if (chgObj1.getValue().trim() == "") {
      chgObj2.setValue("");
    } else {
      scwin.f_openPopUp(disGubun, "T");
    }
  } else {
    if (chgObj1.getValue().trim() == "") {
      if (objType2 == "ed") {
        chgObj2.setValue("");
      } else {
        chgObj2.setValue("");
      }
    } else {
      if (chgObj1.hidVal != null && chgObj1.getValue() == chgObj1.hidVal) return;
      scwin.f_openPopUp(disGubun, "T");
    }
  }
};

//조회조건 초기화
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, retrieveCond, []);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_stockPresent.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  gr_stockPresent.setFocusedCell(0, "wrkPlNm", false);
};
scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobranCd.setJSON(e.responseJSON.GAUCE);
  }
};
scwin.udc_wrkPlCdCallback = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm);
  }
};
scwin.udc_stockClntNoCallback = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_stockClntNo, ed_stockClntNm);
  }
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkField('ed_wrkPlCd', 'ed_wrkPlNm', 1);
};
scwin.udc_wrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_wrkPlNm', 'ed_wrkPlCd', 1);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openPopUp(1);
};
scwin.udc_stockClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkField('ed_stockClntNo', 'ed_stockClntNm', 3);
};
scwin.udc_stockClntNo_onblurNameEvent = function (e) {
  scwin.f_chkField('ed_stockClntNm', 'ed_stockClntNo', 3);
};
scwin.udc_stockClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(3);
};
scwin.gr_stockPresent_onheaderclick = function (headerId) {
  //gr_stockPresent.mergeByCol(options)
  gr_stockPresent.mergeClear();
  var options = {
    keepMerge: false
  };
  gr_stockPresent.mergeByCol(options);
  switch (headerId) {
    case 'wrkPlNm':
      gr_stockPresent.mergeByCol('wrkPlNm');
      break;
    case 'stockClntNm':
      gr_stockPresent.mergeByCol('stockClntNm');
      break;
    case 'kcgNm':
      gr_stockPresent.mergeByCol('kcgNm');
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'retrieveCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_branch',search:'start',style:'width:200px;',submenuSize:'fixed',allOption:'',chooseOption:'',chooseOptionLabel:'-전체-',ref:'data:ds_stockQuery.branch',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobranCd'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장치장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_wrkPlCd',validTitle:'',nameId:'ed_wrkPlNm',style:'',id:'udc_wrkPlCd',btnId:'btn_wrkPlCd','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_wrkPlCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent',refDataCollection:'ds_stockQuery',code:'wrkPlCd',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'0-9a-zA-Z',codeWidth:'60',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주코드 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_stockClntNo',nameId:'ed_stockClntNm',popupID:'',selectID:'',style:'',validTitle:'',btnId:'btn_stockClntNo',id:'udc_stockClntNo','ev:onblurCodeEvent':'scwin.udc_stockClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_stockClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_stockClntNo_onclickEvent',refDataCollection:'ds_stockQuery',code:'stockClntNo',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'0-9a-zA-Z',codeWidth:'60',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'판매구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_impExpClsCd',search:'start',style:'width: 150px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:ds_stockQuery.expimpDomesticCls'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업장별 화주 재고 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',gridID:'gr_stockPresent',grdDownOpts:'{"fileName":"작업장별 화주 재고 현황", "sheetName":"작업장별 화주 재고 현황", "type":"1"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_stockPresent',id:'gr_stockPresent',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_stockPresent_onheaderclick',sortable:'false',readOnly:'true',mergeCol:'wrkPlNm,stockClntNm,kcgNm'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',value:'장치장',width:'100',sortable:'true',sortLabel:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',value:'화주',width:'120',sortable:'true',sortLabel:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'품목코드',width:'70',sortLabel:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'규격',width:'50',sortLabel:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'text',value:'품명',width:'120',sortable:'true',sortLabel:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'판매구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'제품상태',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'상자수',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockClntNm',inputType:'text',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplQtyUnitCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcgNm',inputType:'text',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tplSaleClsCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'tplPrdtStsCd',inputType:'select',width:'100',disabledClass:'value delim label',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'boxQty',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'wrkPlNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'subSumText',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column58',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'stockQty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'boxQty\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'stockWt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'stockCbm\')'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totalTxt',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column41',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'stockQty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column40',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'boxQty\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column51',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'stockWt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column54',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'stockCbm\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})