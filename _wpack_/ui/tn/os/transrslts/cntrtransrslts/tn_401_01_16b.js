/*amd /ui/tn/os/transrslts/cntrtransrslts/tn_401_01_16b.xml 22227 2defde867a3be60878e2985c948113645db370a7a9e8ef25a4cafa3a8f36fea0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'direct',name:'직영구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDtHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDtHh',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'direct',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'PDANO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvYn',name:'수령여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rptCls',name:'보고종료구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startTrack',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endTrack',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'선석순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocRegDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'차량구분명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetrievePdaAlloccarPrscondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.prevRow = 0;
  scwin.vCurDate = $c.date.getServerDateTime($p);
  scwin.lobranCd = $c.util.isEmpty($p, $c.data.getParameter($p, "lobranCd")) ? "" : $c.data.getParameter($p, "lobranCd");
  scwin.loUpperLobranCd = $c.util.isEmpty($p, $c.data.getMemInfo($p, "loUpperLobranCd")) ? "" : $c.data.getMemInfo($p, "loUpperLobranCd");

  //공통코드 조회
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "lc_wrkLobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions, function () {
    let lobarnCd = $c.util.isEmpty($p, scwin.lobranCd) ? scwin.loUpperLobranCd : scwin.lobranCd;
    lc_wrkLobranCd.setValue(lobarnCd);
  });
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.vCurDate, scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.onUdcCompleted();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  if (!$c.gus.cfIsAfterDate($p, ed_stDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_stDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처
      udc_clntNo.cfCommonPopUp(scwin.callBackClntInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "계약 거래처,거래처코드/명");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.callBackClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_master.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//거래처 찾기 버튼
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (!$c.util.isEmpty($p, ed_clntNo.getValue())) {
    scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
  } else {
    ed_clntNm.setValue("");
  }
};

//오더 번호 소문자 입력 > 대문자 전환 
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_odrNo);
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkLobranCd',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.wrkLobranCd',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실적일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ed_stDt',edToId:'ed_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vehclNo',placeholder:'',style:'width:150px;',ref:'data:dma_search.vehclNo',maxlength:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cargoClsCd',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.cargoClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_clntNo',style:'',btnId:'btn_clntNo',codeId:'ed_clntNo',id:'udc_clntNo',nameId:'ed_clntNm',objTypeCode:'data',objTypeName:'data',UpperFlagCode:'1',refDataCollection:'dma_search',code:'reqClntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',selectID:'retrieveClntInfo2_tpro','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'0-9A-Za-z',ref:'data:dma_search.odrNo','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직영구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selectbox3',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.direct',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'협력'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'협력'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'직영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'직영'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'실시간입력현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y',gridID:'gr_master',grdDownOpts:'{"fileName" : "스마트폰활용현황.xlsx", "sheetName" : "스마트폰활용현황", "type":"4+8+16"}',btnUser:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',resize:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'화주명',width:'100',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'출발지코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'도착지코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도착지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출발예정일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'도착예정일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'출발일시',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'배차처리일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'출발처리일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'실시간여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'직영구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'협력사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column35',value:'소유<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'운전자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'차종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'톤수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'배차지사코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'배차점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'스마트폰번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column71',value:'실제스마트폰',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',value:'배차수신',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'작업결과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column65',value:'출발위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'도착위치',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gubun',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'calendar',width:'120',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndDt',inputType:'calendar',width:'120',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDtHh',inputType:'calendar',width:'80',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'wrkEndDtHh',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'allocRegDtm',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'regDtm',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'realYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'direct',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'posnClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'eqKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'eqNrmCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkLobranNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pdaNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pdaYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rcvYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rptCls',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'startTrack',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'endTrack',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})