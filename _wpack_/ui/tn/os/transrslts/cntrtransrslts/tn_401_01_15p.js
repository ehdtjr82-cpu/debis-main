/*amd /ui/tn/os/transrslts/cntrtransrslts/tn_401_01_15p.xml 26659 c9fadd77aac5bd383403ace6d46fafa818f993430aede57e39ffdf802c75190d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_search',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'loBranchCd',name:'배차지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltEndDt',name:'실적시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltStDt',name:'실적종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'orderNm',name:'분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'배차지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCdNm',name:'배차지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranCd',name:'차량소속지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnLobranNm',name:'차량소속지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력사번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'협력사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisVehclDrvNm1',name:'운전자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaNo',name:'스마트폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realPdaYn',name:'실제;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'배차자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'배차자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'배차지시일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaRegDt',name:'스마트폰지시일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pdaRcvDt',name:'스마트폰수신일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rptClsNm',name:'보고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rptDt',name:'보고일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'차종CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'톤수CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'톤수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.cntrtransrslts.RetreiveVehclUseDetailPrscondCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.endDt = $c.gus.cfIsNull($p, scwin.params.endDt) ? "" : scwin.params.endDt;
  scwin.assgnLobranCd = $c.gus.cfIsNull($p, scwin.params.assgnLobranCd) ? "" : scwin.params.assgnLobranCd;
  const comboOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_srchLobranCd"
  }];
  $c.data.setGauceUtil($p, comboOptions, function () {
    acb_srchLobranCd.setValue(scwin.assgnLobranCd);
    scwin.f_retrieve();
  });
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.endDt, scwin.endDt);
  $c.data.setPopupTitle($p, "스마트폰활용상세현황");
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  acb_srchLobranCd.setValue(scwin.assgnLobranCd);
  udc_fromToCalendar.setInitDate(scwin.endDt, scwin.endDt);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = function () {
  if (!$c.gus.cfIsAfterDate($p, ed_stDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_wrkStDt.focus();
    return false;
  }
  ds_search.removeAll();
  let insRow = ds_search.insertRow();
  ds_search.setCellData(insRow, "rsltStDt", ed_stDt.getValue());
  ds_search.setCellData(insRow, "rsltEndDt", ed_endDt.getValue());
  ds_search.setCellData(insRow, "loBranchCd", acb_srchLobranCd.getValue());
  ds_search.setCellData(insRow, "vehclNo", ed_vehclNm.getValue());
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
    case 2:
      // 차량번호
      udc_vehclNo.cfCommonPopUp(scwin.callBackVehiclesNo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "차량번호,차량번호,차량번호");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.callBackVehiclesNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vehclNo, ed_vehclNm);
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  if ($c.gus.cfIsNull($p, data)) return;
  let columnId = $c.util.getComponent($p, this.id).getColumnID(colIndex);
  if (columnId == "realPdaYn") {
    return $c.gus.decode($p, data, "0", "×", "1", "○");
  }
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
  if (rowCnt == 0) $c.win.alert($p, "조회된 데이터가 없습니다.");
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//차량찾기 버튼
scwin.udc_vehclNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_vehclNo.getValue(), ed_vehclNm.getValue(), 'F', 'F');
};
scwin.udc_vehclNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_vehclNm, 2);
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

//닫기 버튼
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_stDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',validChkYn:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차지사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_srchLobranCd',search:'start',style:'width:150px;',submenuSize:'auto',searchTarget:'value',ref:'',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',btnId:'btn_vehclNo',codeId:'ed_vehclNo',id:'udc_vehclNo',nameId:'ed_vehclNm',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_vehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclNo_onblurCodeEvent',selectID:'retrieveVehiclesNo_tpro',readOnlyName:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'스마트폰활용 상세현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridID:'gr_master',grdDownOpts:'{"fileName":"스마트폰활용상세현황.xlsx", "sheetName" : "스마트폰활용상세현황", "type":"4+8+16"}',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'8',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'분류',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'배차지사코드',width:'120',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'배차지사',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량소속지사코드',width:'150',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차량<br/>소속지사',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'협력사번호',width:'120',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'협력사명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'소유구분코드',width:'120',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'소유구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',value:'운전자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'스마트폰번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'실제<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'700',inputType:'text',id:'column45',value:'배차지시현황',displayMode:'label',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column41',value:'스마트폰응답현황',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'장비코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'차종CD',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'차종',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'톤수CD',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'톤수',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'운송작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'품명순번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'작업경로순번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'작업단계순번',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'작업지시여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'동부에서 수신한 화물의 작업지시번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'배차정보수신여부 Y/N',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'보고종료구분',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'작업단계코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'작업단계명',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'rkEq',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'rk',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'거래처번호',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column116',value:'출발지코드',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column110',value:'도착지코드',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column131',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column128',value:'배차자ID',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'배차자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column122',value:'배차지시일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column93',value:'스마트폰지시일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column92',value:'스마트폰수신일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'보고상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'보고일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'orderNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranCdNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranCd',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnLobranNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsCd',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logisVehclDrvNm1',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pdaNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realPdaYn',inputType:'text',width:'70',customFormatter:'scwin.f_customFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptWrkPlCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptWrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvWrkPlCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvWrkPlNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',calendarValueType:'yearMonthDateTime'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',id:'pdaRegDt',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',id:'pdaRcvDt',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rptClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'rptDt',displayMode:'label',calendarValueType:'yearMonthDateTime',displayFormat:'yyyy/MM/dd HH:mm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqKndNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqNrmCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqNrmNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'transWrkIndictNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'commSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPathSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkStpSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkIndictYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dmWrkIndictNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'alloccarRcvYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rptCls',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStpCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wrkStpNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rkEq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rk',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})