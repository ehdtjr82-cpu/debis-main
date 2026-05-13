/*amd /ui/tn/os/transrslts/cntrtransrslts/tn_401_01_17b.xml 23906 a277fb582bae4bad5fef70e4f247f58d85baba95233bb5e1d6083dc843d8378c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendYn',name:'송신여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrievePdaSndInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'resendYn',name:'체크박스',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCdmaNo',name:'스마트번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmOrdNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmCoshippingNo',name:'합적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarRcvYn',name:'수신여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaRcvDt',name:'정보수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoGub',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmVehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'workIndictDt',name:'작업지시일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPos',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startHh',name:'출발일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alhpPos',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alphHh',name:'도착일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'고객요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doorNm',name:'납품처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez216Idx',name:'전송순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_updatePdaSndInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclCdmaNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez216Idx',name:'',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'workIndictDt',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetrievePdaSndInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_retrievePdaSndInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrievePdaSndInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updatePdaSndInfo',action:'/ncall.tn.os.transrslts.cntrtransrslts.UpdatePdaSndInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_updatePdaSndInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updatePdaSndInfo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.curDate = $c.date.getServerDateTime($p);
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_wrkLobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.curDate, scwin.curDate);
  acb_wrkLobranCd.setSelectedIndex(0);

  //ed_vehclNm.setDisabled(true);
  //ed_reqClntNm.setDisabled(true);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  ds_retrievePdaSndInfo.removeAll();
  scwin.onUdcCompleted();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  //조회 필수 조건 check 
  let chkVal = await $c.gus.cfValidate($p, tbl_search);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_wrkStDt.getValue(), ed_wrkEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_wrkStDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 재전송
//-------------------------------------------------------------------------
scwin.f_resend = async function () {
  ds_updatePdaSndInfo.removeAll();
  let chkJson = gr_retrievePdaSndInfo.getCheckedJSON("resendYn");
  if (chkJson == "") {
    $c.win.alert($p, "재전송할 데이터를 먼저 선택해 주십시오.");
  } else {
    let conf = await $c.win.confirm($p, chkJson.length + "건 재전송 하시겠습니까?");
    if (conf) {
      ds_updatePdaSndInfo.setJSON(chkJson, true);
      $c.sbm.execute($p, sbm_updatePdaSndInfo);
    }
  }
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
      // 차량번호
      udc_vehclNo.cfCommonPopUp(scwin.callBackVehicle, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "차량번호,차량번호,차량번호");
      break;
    case 2:
      // 거래처
      udc_reqClntNo.cfCommonPopUp(scwin.callBackClntInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드,거래처명");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
//차량번호
scwin.callBackVehicle = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vehclNo, ed_vehclNm);
};

//거래처
scwin.callBackClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_reqClntNo, ed_reqClntNm);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_retrievePdaSndInfo.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) $c.win.alert($p, "스마트폰지시정보 조회결과가 존재하지 않습니다.");else gr_retrievePdaSndInfo.setReadOnly("column", "resendYn", false);
};

//재전송 완료
scwin.sbm_updatePdaSndInfo_submitdone = function (e) {
  console.log("scwin.sbm_updatePdaSndInfo_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_retrieve();
};
/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//차량번호 찾기 버튼 
scwin.udc_vehclNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_vehclNo.getValue(), ed_vehclNm.getValue(), 'F', 'F');
};
scwin.udc_vehclNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_vehclNm, 1);
};

//거래처 찾기 버튼
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_reqClntNo.getValue(), ed_reqClntNm.getValue(), 'F', 'F');
};
scwin.udc_reqClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_reqClntNo, ed_reqClntNm, 2);
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

//전송 버튼
scwin.btn_resend_onclick = function (e) {
  scwin.f_resend();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkLobranCd',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:dma_search.wrkLobranCd',searchTarget:'value',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',objTypeBtn:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cargoGub',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.cargoClsCd',searchTarget:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'N',popupID:'pop_vehclNo',style:'',btnId:'btn_vehclNo',codeId:'ed_vehclNo',id:'udc_vehclNo',nameId:'ed_vehclNm',readOnlyName:'true',maxlengthName:'18',refDataCollection:'dma_search',selectID:'retrieveVehiclesNo_tpro','ev:onclickEvent':'scwin.udc_vehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclNo_onblurCodeEvent',name:'vehclNo'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'0-9A-Za-z',ref:'data:dma_search.odrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'N',popupID:'pop_reqClntNo',style:'',btnId:'btn_reqClntNo',codeId:'ed_reqClntNo',id:'udc_reqClntNo',nameId:'ed_reqClntNm',UpperFlagCode:'0',allowCharCode:'0-9',objTypeCode:'data',validExpCode:'거래처:no:length=6',objTypeName:'data',readOnlyName:'true',maxlengthName:'18',refDataCollection:'dma_search',code:'reqClntNo',selectID:'retrieveClntInfo2_tpro','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_autoComplete3',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.sendYn',searchTarget:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수신'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미수신'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'스마트폰 지시현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_retrievePdaSndInfo',grdDownOpts:'{"fileName" : "스마트폰지시현황.xlsx", "sheetName" : "스마트폰지시현황", "type":"4+8+16"}',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrievePdaSndInfo',id:'gr_retrievePdaSndInfo',style:'',visibleRowNum:'24',visibleRowNumFix:'true',dataDragDrop:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',readOnly:'true',autoFit:'lastColumn',fixedColumn:'4',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'스마트폰번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업지시번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'합적번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'수신여부',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'정보수신일시',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'요청화주',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'화물구분',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'작업지시일자',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column41',value:'출발',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',value:'도착',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'고객<br/>요청번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'납품처',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'품명',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'전송순번',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column55',value:'출발지',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'출발일시',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column53',value:'도착지',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'도착일시',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'resendYn',inputType:'checkbox',width:'50',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclCdmaNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmOrdNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmWrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmCoshippingNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarRcvYn',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pdaRcvDt',inputType:'calendar',width:'120',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cargoGub',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmVehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'workIndictDt',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'startPos',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'startHh',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'alhpPos',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'alphHh',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doorNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ez216Idx',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_resend',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_resend_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'재전송'}]}]}]}]}]}]}]}]}]})