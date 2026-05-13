/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_08_01b.xml 27563 15a7aaff832d42b1cda0b2747961433a3ded3e99e8604ff1ce0d52bb032830e0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdPoint',name:'시점',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currDt',name:'현재일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntKnd',name:'거래처종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'overDayStandard',name:'초과일기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'staffNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'quitYn',name:'폐업여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_overDayAcctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'collMoneyAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'collMoneyAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'bizDomNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'sellAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'sellAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'bilgAcctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'bilgAcctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbn',name:'gbn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKnd',name:'clntKnd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndNm',name:'clntKndNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr1Dd',name:'ovr1Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr15Dd',name:'ovr15Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr30Dd',name:'ovr30Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr60Dd',name:'ovr60Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr90Dd',name:'ovr90Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr120Dd',name:'ovr120Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr150Dd',name:'ovr150Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr180Dd',name:'ovr180Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ovr210Dd',name:'ovr210Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyFddUnArrv',name:'collMoneyFddUnArrv',dataType:'text'}},{T:1,N:'w2:column',A:{id:'under0Dd',name:'under0Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'under30Dd',name:'under30Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'under60Dd',name:'under60Dd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quitYn',name:'quitYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'quitDt',name:'quitDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'underSum',name:'underSum',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overSum',name:'overSum',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allSum',name:'allSum',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'acctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'acctNm',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveInatAcctRecvOverDayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchAcctRecv","key":"IN_DS1"},{"id":"ds_overDayAcctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_overDayAcctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'scwin.sbm_searchAcctRecv_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.acctDeptCd = scwin.memJson.acctDeptCd;
scwin.acctDeptNm = scwin.memJson.acctDeptNm;
scwin.strFromDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMM") + "01";
scwin.strDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM069",
    compID: "lc_overDayStandard"
  }, {
    grpCd: "FM120",
    compID: "gr_overDayAcctRecv: quitYn"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {
  ed_bilgAcctDeptCdCond.setValue(scwin.acctDeptCd);
  ed_bilgAcctDeptNmCond.setValue(scwin.acctDeptNm);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  console.log("===========scwin.ondataload==========");
  scwin.f_Reset();
  $c.data.setPopupTitle($p, "초과채권 거래처");
  ica_currDt.setValue(scwin.strDate);
  ica_stdDt.setValue(scwin.strDate);
  lc_stdPoint.setSelectedIndex(1);
  lc_overDayStandard.setSelectedIndex(1);
  $c.gus.cfEnableObj($p, lc_stdPoint, false);
  $c.gus.cfEnableObj($p, lc_overDayStandard, false);
  $c.gus.cfEnableObj($p, ica_currDt, false);
  $c.gus.cfEnableObj($p, ica_stdDt, false);
  $c.gus.cfEnableObj($p, ed_bilgAcctDeptCdCond, false);
  $c.gus.cfEnableObj($p, ed_bilgAcctDeptNmCond, false);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처 , 2:조회->귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  // var rtnList = new Array();

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
  if (flag != "SKIP") {
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = ed_bilgAcctDeptCdCond.getValue();
      nm = ed_bilgAcctDeptNmCond.getValue();
    }
  } else {
    cd = orgObjCd;
    nm = "";
  }
  switch (select_code) {
    // 조회조건용 청구부서 PopUp 호출
    case '2':
      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo'
      await udc_bilgAcctDeptCd.cfCommonPopUp(scwin.udc_bilgAcctDeptCd_callback // XML상의 SELECT ID	
      , cd, nm, "T", null, null, null, null, null, null, null, null, null, null, null, null, null); // 관리부서
      break;
    default:
      $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_bilgAcctDeptCd_callback = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_bilgAcctDeptCdCond.setValue(rtnList[0]);
      ed_bilgAcctDeptCdCond.options.hidVal = rtnList[0];
      ed_bilgAcctDeptNmCond.setValue(rtnList[1]);
    }
  } else {
    ed_bilgAcctDeptCdCond.setValue("");
    ed_bilgAcctDeptCdCond.options.hidVal = "";
    ed_bilgAcctDeptNmCond.setValue("");
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {};

//-------------------------------------------------------------------------
// 초기화 관련 변수 정의 함수
//-------------------------------------------------------------------------
scwin.f_Initial = function () {
  $c.gus.cfDisableKey($p);
};
//-------------------------------------------------------------------------
// 저장 완료후 화면 Reset시 사용하는 함수 
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  scwin.f_Initial();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_currDt, ica_stdDt]);
  if (!ret) {
    return false;
  }
  $c.sbm.execute($p, sbm_searchAcctRecv);
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Export = function () {
  let sheetTitle = "초과일별채권현황";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_overDayAcctRecv, options);
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.sbm_searchAcctRecv_submitdone = function (e) {
  var rowCnt = ds_overDayAcctRecv.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  gr_overDayAcctRecv.setFocusedCell(0, 0);
};
scwin.sbm_searchAcctRecv_submiterror = function (e) {};
scwin.udc_bilgAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bilgAcctDeptCdCond.getValue(), ed_bilgAcctDeptNmCond.getValue(), '2', 'ALL');
};
scwin.lc_stdPoint_onchange = function (info) {
  if (info.newValue == "0") {
    ica_currDt.setValue("");
    $c.gus.cfDisableObjects($p, [ica_currDt]);
  } else {
    ica_currDt.setValue(scwin.strDate);
    $c.gus.cfEnableObjects($p, [ica_currDt]);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'시점 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 100px',allOption:'',id:'lc_stdPoint',class:'',direction:'auto',ref:'data:dma_searchAcctRecv.stdPoint',mandatory:'true','ev:onchange':'scwin.lc_stdPoint_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기준일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'현재'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_currDt',class:'',calendarValueType:'yearMonthDate',delimiter:'/',ref:'data:dma_searchAcctRecv.currDt',mandatory:'true',title:'현재일자'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stdDt',style:'',delimiter:'/',mandatory:'true',ref:'data:dma_searchAcctRecv.stdDt',title:'기준일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구귀속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bilgAcctDeptCdCond',code:'bilgAcctDeptCd',codeId:'ed_bilgAcctDeptCdCond',editTypeName:'focus',id:'udc_bilgAcctDeptCd',maxlengthCode:'6',maxlengthName:'30',nameId:'ed_bilgAcctDeptNmCond',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'청구귀속:no',refDataCollection:'dma_searchAcctRecv','ev:onclickEvent':'scwin.udc_bilgAcctDeptCd_onclickEvent',codeWidth:'70'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'초과일기준 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'',editType:'select',id:'lc_overDayStandard',mandatory:'true',ref:'data:dma_searchAcctRecv.overDayStandard',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_Export',gridID:'gr_overDayAcctRecv'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_overDayAcctRecv',focusMode:'row',id:'gr_overDayAcctRecv',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'청구귀속',width:'100',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'청구귀속명',width:'120',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'매출귀속',width:'100',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'매출귀속명',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'계정코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'계정명',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'거래처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'사업자번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column52',value:'폐업여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'폐업일자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'거래처종류',width:'120',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'초과채권',width:'1130',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column98',value:'총계',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'1일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'15일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'30일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'60일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column123',value:'90일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'120일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'150일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'180일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'210일초과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column103',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgAcctDeptNm',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptCd',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'gbn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',style:'',id:'quitYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'quitDt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntKndNm',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovr1Dd',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovr15Dd',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovr30Dd',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ovr60Dd',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ovr90Dd',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'ovr120Dd',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ovr150Dd',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ovr180Dd',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ovr210Dd',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'overSum',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'allSum',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column86',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr1Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr15Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr30Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr60Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column125',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr90Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column121',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr120Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column117',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr150Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column113',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr180Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column109',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'ovr210Dd\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column105',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'overSum\')',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column101',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###,###,###',expression:'sum(\'allSum\')',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})