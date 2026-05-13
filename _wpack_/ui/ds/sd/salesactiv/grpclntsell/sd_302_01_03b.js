/*amd /ui/ds/sd/salesactiv/grpclntsell/sd_302_01_03b.xml 27392 3c7f578d83ce28db23fa2e7e1859099d05d69fa47ede003cc2399888170f2af9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_grpClntSellRsltsSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpClntNo',name:'그룹거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'grpClntNm',name:'그룹거래처명',dataType:'text',length:'20'}},{T:1,N:'w2:key',A:{id:'rsltsYmFrom',name:'실적년월',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'rsltsYmTo',name:'실적년월',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'sellDeptCd',name:'매출부서',dataType:'text',length:'4'}},{T:1,N:'w2:key',A:{id:'sellAmt',name:'매출액',dataType:'text',length:'18'}},{T:1,N:'w2:key',A:{id:'unitCd',name:'Unit 코드',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_grpclntSellAll'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpClntNo',name:'그룹거래처번호',dataType:'text',length:'6'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_grpClntSellRsltsList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpClntNo',name:'그룹거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'grpClntNm',name:'그룹거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'totSellAmt',name:'총매출금액',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt1',name:'매출금액1',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt2',name:'매출금액2',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt3',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt4',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt5',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt6',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt7',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt8',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt9',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt10',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt11',name:'#N/A',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'sellAmt12',name:'#N/A',dataType:'text',length:'38'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.grpclntsell.RetrieveGrpClntCrnSellRsltsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_grpClntSellRsltsSearch","key":"IN_DS1"},{"id":"ds_grpClntSellRsltsList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_grpClntSellRsltsList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.salesactiv.grpclntsell.CreateGrpClntSellCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_grpclntSellAll_submitdone','ev:submiterror':'',id:'sbm_grpclntSellAll',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"id":"dma_grpclntSellAll","key":"IN_DS1"}',replace:'',target:'',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.MSG_SD_CRM_001 = "%1을 실행하시겠습니까?"; // >dsCommon.js
  scwin.MSG_SD_CRM_002 = "성공적으로 생성되었습니다.";
  scwin.strCurYm = $c.date.getServerDateTime($p).substring(0, 6);
  scwin.strPreYm = scwin.strCurYm.substring(0, 4) + "01";
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.params = $c.data.getParameter($p);
  scwin.regId = scwin.memInfo.userId;
  scwin.grpClntNo = $c.gus.cfIsNull($p, scwin.params.grpClntNo) ? "" : scwin.params.grpClntNo;
  scwin.rsltsYmFrom = $c.gus.cfIsNull($p, scwin.params.rsltsYmFrom) ? scwin.strPreYm : scwin.params.rsltsYmFrom;
  scwin.rsltsYmTo = $c.gus.cfIsNull($p, scwin.params.rsltsYmTo) ? scwin.strCurYm : scwin.params.rsltsYmTo;
  scwin.sellDeptCd = $c.gus.cfIsNull($p, scwin.params.sellDeptCd) ? "" : scwin.params.sellDeptCd;
  scwin.sellAmt = $c.gus.cfIsNull($p, scwin.params.sellAmt) ? "0" : scwin.params.sellAmt;
  scwin.unitCd = $c.gus.cfIsNull($p, scwin.params.unitCd) ? "1" : scwin.params.unitCd;
  const codeOptions = [{
    grpCd: "SD183",
    compID: "lc_sellDeptCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  lc_sellDeptCd.changeChooseOption("", "전체");

  //전체매출실적생성 버튼 show/hide, 근무시간에 적용X
  if ("dsadmin" == scwin.regId || "pjooni" == scwin.regId || "030620" == scwin.regId || "062037" == scwin.regId || "060164" == scwin.regId || "061545" == scwin.regId) {
    btn_recreateAll.show("");
  } else {
    btn_recreateAll.hide();
  }
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  udc_fromToYearMon.setInitDate(scwin.rsltsYmFrom, scwin.rsltsYmTo);
  ed_grpClntNo.setValue(scwin.grpClntNo);
  ed_grpClntNo.focus();
  scwin.f_defaultValue();
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("scwin.f_defaultValue");
  lc_sellDeptCd.setValue(scwin.sellDeptCd);
  ed_sellAmt.setValue(scwin.sellAmt);
  lc_unitCd.setValue(scwin.unitCd);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_defaultValue();
  udc_fromToYearMon.setInitDate(scwin.rsltsYmFrom, scwin.rsltsYmTo);
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  console.log("scwin.f_retrieve");
  if (ed_rsltsYmFrom.getValue().length != 6 || ed_rsltsYmTo.getValue().length != 6) {
    $c.win.alert($p, "날짜형식이 잘못되었습니다. 다시 입력하여주세요");
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처
      udc_grpClntNo.cfCommonPopUp(scwin.callBackClntInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 CallBack
//-------------------------------------------------------------------------
scwin.callBackClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_grpClntNo, ed_grpClntNm);
};

//-------------------------------------------------------------------------
// 전체매출실적재생성
//-------------------------------------------------------------------------
scwin.f_recreateAll = async function () {
  console.log("scwin.f_recreateAll");
  let conf = await $c.win.confirm($p, $c.data.getMessage($p, scwin.MSG_SD_CRM_001, "전체매출실적생성"));
  if (conf) {
    dma_grpclntSellAll.set("grpClntNo", "ALL");
    $c.sbm.execute($p, sbm_grpclntSellAll);
  }
};

//-------------------------------------------------------------------------
// 발행
//-------------------------------------------------------------------------
scwin.f_ozReport = async function () {
  if (!$c.date.isDate($p, ed_rsltsYmFrom.getValue() + "01") || !$c.date.isDate($p, ed_rsltsYmTo.getValue() + "01")) {
    $c.win.alert($p, "날짜형식이 잘못되었습니다. 다시 입력하여주세요");
    return;
  }

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)	
  if (ds_grpClntSellRsltsList.getTotalRow() == 0) {
    $c.win.alert($p, "출력할 정보가 없습니다.");
    return;
  }
  var data = {
    odiName: "sd_302_01_03",
    reportName: "/ds/sd/salesactiv/grpclntsell/sd_302_01_03.ozr",
    odiParam: {
      sysPath: "dbl.ds.sd.salesactiv.grpclntsell",
      grpClntNo: ed_grpClntNo.getValue(),
      rsltsYmFrom: ed_rsltsYmFrom.getValue(),
      rsltsYmTo: ed_rsltsYmTo.getValue(),
      sellDeptCd: lc_sellDeptCd.getValue(),
      sellAmt: ed_sellAmt.getValue(),
      unitCd: lc_unitCd.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100 // 배율 설정
    },
    formParam: {}
  };
  debugger;
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_grpClntSellRsltsList.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (ds_grpClntSellRsltsList.getTotalRow() == 0) $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
};

//실적생성 완료
scwin.sbm_grpclntSellAll_submitdone = function (e) {
  console.log("scwin.sbm_grpclntSellAll_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, "성공적으로 생성되었습니다.");
  scwin.f_retrieve();
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//그룹거래처 찾기 버튼
scwin.udc_grpClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_grpClntNo.getValue(), ed_grpClntNm.getValue(), 'F', 'F');
};
scwin.udc_grpClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_grpClntNo, ed_grpClntNm, 1, true);
};
scwin.udc_grpClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_grpClntNm, ed_grpClntNo, 1, false);
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

//단위 값 변경
scwin.lc_unitCd_onchange = function (info) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//전체매출실적생성 버튼
scwin.btn_recreateAll_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_recreateAll();
};

//발행 버튼
scwin.btn_ctrtPrint_onclick = function (e) {
  scwin.f_ozReport();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupGrpClntNo',style:'',objTypeCode:'data',codeId:'ed_grpClntNo',btnId:'btn_grpClntNo',id:'udc_grpClntNo',nameId:'ed_grpClntNm',UpperFlagCode:'0',allowCharCode:'0-9',objTypeName:'data',refDataCollection:'dma_grpClntSellRsltsSearch',code:'grpClntNo',name:'grpClntNm',selectID:'retrieveClntInfo','ev:onclickEvent':'scwin.udc_grpClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_grpClntNo_onblurCodeEvent',maxlengthCode:'6',maxlengthName:'10','ev:onviewchangeNameEvent':'scwin.udc_grpClntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'rsltsYmFrom',refDataMap:'dma_grpClntSellRsltsSearch',style:'',id:'udc_fromToYearMon',refEdDt:'rsltsYmTo',edFromId:'ed_rsltsYmFrom',edToId:'ed_rsltsYmTo',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_sellDeptCd',search:'start',style:'width: 150px;',submenuSize:'auto',objType:'data',searchTarget:'value',allowChar:'0-9A-Z',ref:'data:dma_grpClntSellRsltsSearch.sellDeptCd','data-length':'4',allOption:'',chooseOption:'',chooseOptionLabel:'$blank',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출액 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_sellAmt',placeholder:'',class:' tar',allowChar:'0-9',maxlength:'12',ref:'data:dma_grpClntSellRsltsSearch.sellAmt','data-length':'18',maxByteLength:'18',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'원 이상',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사업자등록번호별매출실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'txt-blue'}},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_unitCd',search:'start',style:'width: 100px;',submenuSize:'fixed',searchTarget:'value',objType:'data',allOption:'',chooseOption:'',ref:'data:dma_grpClntSellRsltsSearch.unitCd','data-length':'1','ev:onchange':'scwin.lc_unitCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'천원'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',grdDownOpts:'{"fileName" : "사업자등록번호별매출실적.xlsx", "sheetName" : "사업자등록번호별매출실적", "type" : "2+4+8+16"}',gridUpYn:'N',templateYn:'N',gridID:'gr_grpClntSellRslts'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_grpClntSellRsltsList',id:'gr_grpClntSellRslts',style:'',autoFit:'allColumn',autoFitMinWidth:'1700',visibleRowNum:'16',visibleRowNumFix:'true',resize:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'그룹거래처',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'부산지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'인천지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'울산지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'전남지사',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'의왕지점',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'당진지사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'전북지사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'중부지사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'경북지사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'동해지점',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'국제물류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'경기지점',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'grpClntNm',inputType:'text',width:'120',textAlign:'left',style:'',hidden:'false',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',displayFormat:'###-##-#####',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totSellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt1',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt2',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt3',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt4',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt5',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt6',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt7',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt8',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt9',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt10',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt11',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt12',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'totSellAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt1\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt2\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt3\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt4\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt5\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column63',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt6\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt7\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt8\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt9\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt10\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt11\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'sellAmt12\')'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spn_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_recreateAll',style:'',type:'button','ev:onclick':'scwin.btn_recreateAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전체매출실적생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtPrint',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_ctrtPrint_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})