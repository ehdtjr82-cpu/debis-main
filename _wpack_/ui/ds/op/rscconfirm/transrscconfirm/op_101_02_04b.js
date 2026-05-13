/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_02_04b.xml 22447 fdfe3b533b69f6f7d7d665db3d4e7f0ba45aba5ef1f28000a602f3b750b7e4b6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_stockQuery'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'arvDtFrom',name:'기간',dataType:'text',length:'10'}},{T:1,N:'w2:key',A:{id:'arvDtTo',name:'기간',dataType:'text',length:'10'}},{T:1,N:'w2:key',A:{id:'portCd',name:'항구코드',dataType:'text',length:'10'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text',length:'10'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'impShpCoPortcnt',name:'#N/A',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'expShpCoPortcnt',name:'#N/A',dataType:'text',length:'10'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'berthCd',name:'선석코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text',length:'5'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'선사거래처번호',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'arvIntendDtm',name:'도착예정일시',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'dptIntendDtm',name:'출발예정일시',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'closingTime',name:'마감일자',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'stvChrgClsCd',name:'하역담당구분코드',dataType:'text',length:'300'}},{T:1,N:'w2:column',A:{id:'impOdrNo',name:'수입오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'expOdrNo',name:'수출오더번호',dataType:'text',length:'13'}},{T:1,N:'w2:column',A:{id:'dchrDropRgn',name:'양적하지',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'agency',name:'대리점',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',length:'15'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text',length:'18'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',length:'70'}},{T:1,N:'w2:column',A:{id:'inoutPortClsCd',name:'내외항선구분코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'inoutPortClsNm',name:'내외항선구분명',dataType:'text',length:'300'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCarryingVesselScheduleListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_stockQuery","key":"IN_DS1"},{"id":"ds_stockPresent","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stockPresent","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.strCurDate = $c.date.getServerDateTime($p);
  scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -7);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.strPreDate, scwin.strCurDate);
  ed_arvDtFrom.focus();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");

  //조회 필수 조건 check 
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (!$c.gus.cfIsAfterDate($p, ed_arvDtFrom.getValue(), ed_arvDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_regDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통팝업호출
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
      //항구
      udc_portCd.cfCommonPopUp(scwin.callBackPort, pCode, pName, pClose, null, null, null, null, 'KR', null, null, null, null, null, pAllSearch, "항구,항구코드,항구명");
      break;
    case 2:
      //모선   
      udc_vsslCd.cfCommonPopUp(scwin.callBackVssl, pCode, pName, 'T', null, null, null, null, null, null, null, null, null, null, pAllSearch, "모선,모선코드,모선명");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.callBackPort = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_portCd, ed_portNm);
};
scwin.callBackVssl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

//-------------------------------------------------------------------------
// 본선 스케줄 등록 화면 이동 
//-------------------------------------------------------------------------
scwin.f_shipSchedule = function () {
  console.log("scwin.f_shipSchedule");
  var row = ds_stockPresent.getRowPosition();
  if (row >= 0) {
    var strShipScheduleUrl = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_02_02b.xml";
    let paramObj = {
      cvsslMgntNo: ds_stockPresent.getCellData(row, "cvsslMgntNo")
    };
    $c.win.openMenu($p, "본선스케줄 등록", strShipScheduleUrl, "op_101_02_02b.jsp", paramObj, {
      openAction: "exist"
    });
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("본선스케줄 등록"));
    return;
  }
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_stockPresent.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//항구 찾기 버튼
scwin.udc_portCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_portCd.getValue(), ed_portNm.getValue(), 'F', 'T');
};
scwin.udc_portCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_portCd, ed_portNm, 1);
};
scwin.udc_portCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_portNm, ed_portCd, 1, false);
};

//모선 찾기 버튼
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_vsslCd.getValue(), ed_vsslNm.getValue(), 'F', 'T');
};
scwin.udc_vsslCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 2);
};
scwin.udc_vsslCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 2, false);
};

//MRN 소문자 입력 > 대문자 전환
scwin.ed_mrn_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_mrn);
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

//그리드 본선관리번호 더블클릭 > 메뉴 이동
scwin.gr_stockPresent_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "cvsslMgntNo") scwin.f_shipSchedule();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:300px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_stockQuery',refEdDt:'arvDtTo',refStDt:'arvDtFrom',style:'',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ed_arvDtFrom',edToId:'ed_arvDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항구',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_portCd',nameId:'ed_portNm',id:'udc_portCd',objTypeCode:'data',objTypeName:'data',readOnlyCode:'false',readOnlyName:'false',btnId:'btn_portCd',refDataCollection:'dma_stockQuery',code:'portCd',selectID:'retrievePortInfo',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_portCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_portCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_portCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',id:'udc_vsslCd',nameId:'ed_vsslNm',objTypeName:'data',objTypeCode:'data',maxlengthCode:'6',readOnlyName:'false',readOnlyCode:'false',btnId:'btn_vsslCd',refDataCollection:'dma_stockQuery',code:'vsslCd',selectID:'retrieveVsslCdInfo',UpperFlagCode:'1',allowCharCode:'0-9A-Za-z','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vsslCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'',readOnly:'false',maxlength:'11',objType:'data',allowChar:'0-9A-Za-z',ref:'data:dma_stockQuery.mrn','data-length':'255',maxByteLength:'255','ev:oneditkeyup':'scwin.ed_mrn_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'본선스케줄목록조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',gridID:'gr_stockPresent',grdDownOpts:'{"fileName":"본선스케줄목록.xlsx", "sheetName" : "본선스케줄목록", "type":"4+8+16"}',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_stockPresent',focusMode:'row',id:'gr_stockPresent',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_stockPresent_oncelldblclick','ev:onbodymouseover':'scwin.gr_stockPresent_onbodymouseover',readOnly:'true',dataDragDrop:'false',dataDragSelect:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cvsslMgntNo',inputType:'text',removeBorderStyle:'false',width:'120',value:'본선관리번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'120',value:'MRN'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'모선',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',style:'',value:'모선명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'agency',inputType:'text',style:'',value:'대리점',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dchrDropRgn',inputType:'text',style:'',value:'양적하지',width:'120'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'impShpCoPortcnt',value:'I/B항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'expShpCoPortcnt',value:'O/B항차',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portCd',inputType:'text',style:'',value:'항구',width:'90',colSpan:'',rowSpan:''}},{T:1,N:'w2:column',A:{hidden:'false',width:'90',inputType:'text',style:'',id:'pierCd',value:'부두',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'berthCd',value:'선석',displayMode:'label',colSpan:'',rowSpan:''}},{T:1,N:'w2:column',A:{hidden:'false',width:'150',inputType:'text',style:'',id:'lineCd',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'shpCoClntNo',value:'선사거래처',displayMode:'label',colSpan:'',rowSpan:''}},{T:1,N:'w2:column',A:{hidden:'false',width:'150',inputType:'text',style:'',id:'arvIntendDtm',value:'도착(예정)일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'dptIntendDtm',value:'출발(예정)일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'closingTime',value:'Closing Time',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'stvChrgClsCd',value:'하역담당구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'impOdrNo',value:'수입오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'expOdrNo',value:'수출오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNm',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'화종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'수량(개)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wt',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inoutPortClsNm',value:'내/외항선',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cvsslMgntNo',inputType:'link',removeBorderStyle:'false',width:'120',textAlign:'left',style:'',class:'linktype'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'agency',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dchrDropRgn',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'impShpCoPortcnt',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'expShpCoPortcnt',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portCd',inputType:'text',style:'',value:'',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'pierCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'berthCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'shpCoClntNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'arvIntendDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dptIntendDtm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'closingTime',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'stvChrgClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'impOdrNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'expOdrNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.#0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inoutPortClsNm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})